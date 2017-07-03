/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package scripting;

import constants.ServerConstants;
import client.MapleCharacter;
import client.MapleQuestStatus;
import community.MapleParty;
import community.MaplePartyCharacter;
import community.MapleSquadLegacy;
import packet.creators.MainPacketCreator;
import packet.creators.UIPacket;
import packet.transfer.write.Packet;
import server.life.MapleMonster;
import server.maps.MapleMap;
import server.maps.MapleWorldMapProvider;
import server.quest.MapleQuest;
import tools.Timer.EventTimer;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import javax.script.ScriptException;

public class EventInstanceManager {

    private List<MapleCharacter> chars = new LinkedList<MapleCharacter>();
    private List<MapleMonster> mobs = new LinkedList<MapleMonster>();
    private Map<MapleCharacter, Integer> killCount = new HashMap<MapleCharacter, Integer>();
    private EventManager em;
    private MapleWorldMapProvider mapFactory;
    private String name;
    private Properties props = new Properties();
    private long timeStarted = 0;
    private long eventTime = 0;
    private int achivementRatio = 0;
    private boolean useAR = false;
    private List<Integer> mapIds = new LinkedList<Integer>();
    private boolean clear = false;
    private final Lock mutex = new ReentrantLock();
    private ScheduledFuture<?> eventTimer = null;

    public EventInstanceManager(EventManager em, String name, MapleWorldMapProvider mapf) {
	this.em = em;
	this.name = name;
        mapFactory = mapf;
    }

    public void registerPlayer(MapleCharacter chr) {
	try {
	    mutex.lock();
	    try {
		chars.add(chr);
	    } finally {
		mutex.unlock();
	    }
	    chr.setEventInstance(this);
	    em.getIv().invokeFunction("playerEntry", this, chr);
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }

    public void changedMap(final MapleCharacter chr, final int mapid) {
	try {
	    em.getIv().invokeFunction("changedMap", this, chr, mapid);
	} catch (NullPointerException npe) {
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }

    public void timeOut(final long delay, final EventInstanceManager eim) {
	eventTimer = EventTimer.getInstance().schedule(new Runnable() {

	    public void run() {
		try {
		    em.getIv().invokeFunction("scheduledTimeout", eim);
		} catch (NullPointerException npe) {
		} catch (ScriptException ex) {
		    if (!ServerConstants.realese) ex.printStackTrace();
		} catch (NoSuchMethodException ex) {
		    if (!ServerConstants.realese) ex.printStackTrace();
		}
	    }
	}, delay);
    }

    public void stopEventTimer() {
	eventTime = 0;
	timeStarted = 0;
	if (eventTimer != null) {
	    eventTimer.cancel(false);
	}
    }

    public void restartEventTimer(long time) {
	timeStarted = System.currentTimeMillis();
	eventTime = time;
	if (eventTimer != null) {
	    eventTimer.cancel(false);
	}
	eventTimer = null;
	final int timesend = (int) time / 1000;

	mutex.lock();
	try {
	    for (final MapleCharacter chr : chars) {
		chr.getClient().getSession().write(MainPacketCreator.getClock(timesend));
	    }
	} finally {
	    mutex.unlock();
	}
	timeOut(time, this);
    }

    public void startEventTimer(long time) {
	timeStarted = System.currentTimeMillis();
	eventTime = time;
	final int timesend = (int) time / 1000;
        
	mutex.lock();
	try {
	    for (final MapleCharacter chr : chars) {
		chr.getClient().getSession().write(MainPacketCreator.getClock(timesend));
	    }
	} finally {
	    mutex.unlock();
	}
	timeOut(time, this);
    }
    
    public void useAchievementRatio(boolean t) {
        useAR = t;
    }
    
    public boolean isUsingAchievementRatio() {
        return useAR;
    }
    
    public void updateAchievementRatio(int a) {
        achivementRatio = a;
	mutex.lock();
	try {
	    for (final MapleCharacter chr : chars) {
		chr.getClient().getSession().write(UIPacket.AchievementRatio(achivementRatio));
	    }
	} finally {
	    mutex.unlock();
	}
    }
    
    public void addAchievementRatio(int a) {
        achivementRatio += a;
	mutex.lock();
	try {
	    for (final MapleCharacter chr : chars) {
		chr.getClient().getSession().write(UIPacket.AchievementRatio(achivementRatio));
	    }
	} finally {
	    mutex.unlock();
	}
    }
    
    public int getAchievementRatio() {
        return achivementRatio;
    }   
    
    
    public boolean isTimerStarted() {
	return eventTime > 0 && timeStarted > 0;
    }

    public long getTimeLeft() {
	return eventTime - (System.currentTimeMillis() - timeStarted);
    }

    public void registerParty(MapleParty party, MapleMap map) {
	for (MaplePartyCharacter pc : party.getMembers()) {
	    MapleCharacter c = map.getCharacterById_InMap(pc.getId());
	    registerPlayer(c);
	}
        
    }

    public void unregisterPlayer(final MapleCharacter chr) {
	mutex.lock();
	try {
	    chars.remove(chr);
	} finally {
	    mutex.unlock();
	}
	chr.setEventInstance(null);
    }

    public void unregisterAll() {
	mutex.lock();
	try {
            for (MapleCharacter chr : chars) {
                chr.setEventInstance(null);
            }
            chars.clear();
	} finally {
	    mutex.unlock();
	}
	
    }
    public final boolean disposeIfPlayerMaple(final byte size, final int towarp) {
	MapleMap map = null;
	if (towarp != 0) {
	    map = this.getMapFactory().getMap(towarp);
	}
	mutex.lock();
	try {
	    if (chars.size() <= size) {

		MapleCharacter chr;
		for (int i = 0; i < chars.size(); i++) {
		    chr = chars.get(i);
		    unregisterPlayer(chr);

		    if (towarp != 0) {
			chr.changeMap(map, map.getPortal(0));
		    }
		}
		dispose();
		return true;
	    }
	} finally {
	    mutex.unlock();
	}
	return false;
    }

    public final void saveBossQuest(final int points) {
	mutex.lock();
	try {
	    for (MapleCharacter chr : chars) {
		final MapleQuestStatus record = chr.getQuestNAdd(MapleQuest.getInstance(150001));

		if (record.getCustomData() != null) {
		    record.setCustomData(String.valueOf(points + Integer.parseInt(record.getCustomData())));
		} else {
		    record.setCustomData(String.valueOf(points)); // First time
		}
	    }
	} finally {
	    mutex.unlock();
	}
    }

    public List<MapleCharacter> getPlayers() {
	return Collections.unmodifiableList(chars);
        
    }

    public final int getPlayerCount() {
	return chars.size();
    }

    public void registerMonster(MapleMonster mob) {
	mobs.add(mob);
	mob.setEventInstance(this);
    }

    public void unregisterMonster(MapleMonster mob) {
	mobs.remove(mob);
	mob.setEventInstance(null);
	if (mobs.isEmpty()) {
	    try {
		em.getIv().invokeFunction("allMonstersDead", this);
	    } catch (ScriptException ex) {
		if (!ServerConstants.realese) ex.printStackTrace();
	    } catch (NoSuchMethodException ex) {
		if (!ServerConstants.realese) ex.printStackTrace();
	    }
	}
    }

    public void playerKilled(MapleCharacter chr) {
	try {
	    em.getIv().invokeFunction("playerDead", this, chr);
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }

    public boolean revivePlayer(MapleCharacter chr) {
	try {
	    Object b = em.getIv().invokeFunction("playerRevive", this, chr);
	    if (b instanceof Boolean) {
		return (Boolean) b;
	    }
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
	return true;
    }

    public void playerDisconnected(final MapleCharacter chr) {
	try {
	    byte ret = ((Double) em.getIv().invokeFunction("playerDisconnected", this, chr)).byteValue();

	    if (ret == 0) {
		unregisterPlayer(chr);
		if (getPlayerCount() <= 0) {
		    dispose();
		}
	    } else {
                //ret이 0보다 클때 ret보다 인원수가 작으면 -> 다나가
                //ret이 0보다 작을때 파장이거나 ret보다 인원수가 작으면 -> 다나가
		mutex.lock();
		try {
                    if (ret > 0) {
                        unregisterPlayer(chr);
                        if (getPlayerCount() < ret) {
                            //List<Integer> chartemp = new ArrayList<Integer>();
                            MapleMap exit = em.getChannelServer().getMapFactory().getMap(Integer.parseInt(getProperty("Global_ExitMap")));
                            Iterator<MapleCharacter> it = getPlayers().iterator();
                            while (it.hasNext()) {
                                MapleCharacter chra = it.next();
                                chra.changeMap(exit, exit.getPortal(0));
                                chra.Message("파티원이 부족하여 더이상 퀘스트를 진행할 수 없습니다.");
                            }
                            unregisterAll();
                            if (this != null) {
                                dispose();
                            }
                        }
                    } else if (ret < 0) {
                        unregisterPlayer(chr);
                        ret *= -1;
                        if (getPlayerCount() < ret || isLeader(chr)) {
                            //List<Integer> chartemp = new ArrayList<Integer>();
                            MapleMap exit = em.getChannelServer().getMapFactory().getMap(Integer.parseInt(getProperty("Global_ExitMap")));
                            Iterator<MapleCharacter> it = getPlayers().iterator();
                            while (it.hasNext()) {
                                MapleCharacter chra = it.next();
                                chra.changeMap(exit, exit.getPortal(0));
                                chra.Message("파티원이 부족하여 더이상 퀘스트를 진행할 수 없습니다.");
                            }
                            unregisterAll();
                            if (this != null) {
                                dispose();
                            }
                        }
                    }
		} finally {
		    mutex.unlock();
		}
	    }
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }

    /**
     *
     * @param chr
     * @param mob
     */
    public void monsterKilled(final MapleCharacter chr, final MapleMonster mob) {
	try {
	    Integer kc = killCount.get(chr);
	    int inc = ((Double) em.getIv().invokeFunction("monsterValue", this, mob.getId())).intValue();
	    if (kc == null) {
		kc = inc;
	    } else {
		kc += inc;
	    }
	    killCount.put(chr, kc);
            em.getIv().invokeFunction("monsterKilled", this, chr, mob.getStats().getCP());
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }

    public int getKillCount(MapleCharacter chr) {
	Integer kc = killCount.get(chr);
	if (kc == null) {
	    return 0;
	} else {
	    return kc;
	}
    }

    public void dispose() {
	mutex.lock();
	try {
	    chars.clear();
	    chars = null;
	} finally {
	    mutex.unlock();
	}
	mobs.clear();
	mobs = null;
	killCount.clear();
	killCount = null;
	timeStarted = 0;
	eventTime = 0;
	props.clear();
	props = null;
	mapIds = null;
	mapFactory = null;
	em.disposeInstance(name);
	em = null;
    }

    public final void broadcastPlayerMsg(final int type, final String msg) {
	mutex.lock();
	try {
	    for (final MapleCharacter chr : chars) {
		chr.getClient().getSession().write(MainPacketCreator.serverNotice(type, msg));
	    }
	} finally {
	    mutex.unlock();
	}
    }

    public final void broadcastPacket(final Packet packet) {
	mutex.lock();
	try {
	    for (final MapleCharacter chr : chars) {
		chr.getClient().getSession().write(packet);
	    }
	} finally {
	    mutex.unlock();
	}
    }
    

    public final MapleWorldMapProvider getMapFactory() {
	return mapFactory;
    }

    public final void TimeAllPartyWarp(int delay, final int mapid,final MapleCharacter chr) {
        tools.Timer.CloneTimer tMan = tools.Timer.CloneTimer.getInstance();
        Runnable r = new Runnable() {
            @Override
            public void run() {
                    MapleMap map = null;
                    map = chr.getClient().getChannelServer().getMapFactory().getMap(mapid);
                    for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                            partymem.changeMap(map, map.getPortal(0));
                    }
            }
        };
        tMan.schedule(r, delay);
    }
    
    public void addboss(final MapleCharacter chr, int i) {
        chr.addboss(i);
    }
        
    public final void schedule(final String methodName, final long delay) {
	EventTimer.getInstance().schedule(new Runnable() {

	    public void run() {
		try {
		    em.getIv().invokeFunction(methodName, EventInstanceManager.this);
		} catch (NullPointerException npe) {
		} catch (ScriptException ex) {
		    if (!ServerConstants.realese) ex.printStackTrace();
		} catch (NoSuchMethodException ex) {
		    if (!ServerConstants.realese) ex.printStackTrace();
		}
	    }
	}, delay);
    }

    public final String getName() {
	return name;
    }

    public final void setProperty(final String key, final String value) {
	props.setProperty(key, value);
    }

    public final Object setProperty(final String key, final String value, final boolean prev) {
	return props.setProperty(key, value);
    }

    public final String getProperty(final String key) {
	return props.getProperty(key);
    }

    public final void leftParty(final MapleCharacter chr) {
	try {
	    em.getIv().invokeFunction("leftParty", this, chr);
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }

    public final void disbandParty() {
	try {
	    em.getIv().invokeFunction("disbandParty", this);
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }
    
    //Separate function to warp players to a "finish" map, if applicable
    public final void finishPQ() {
        clear = true;
	try {
	    em.getIv().invokeFunction("clearPQ", this);
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }
    
    public final boolean isCleared() {
        return clear;
    }

    public final void removePlayer(final MapleCharacter chr) {
	try {
	    em.getIv().invokeFunction("playerExit", this, chr);
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	}
    }

    public void onMapLoad(final MapleCharacter chr) {
	try {
	    em.getIv().invokeFunction("onMapLoad", this, chr);
	} catch (ScriptException ex) {
	    if (!ServerConstants.realese) ex.printStackTrace();
	} catch (NoSuchMethodException ex) {
	    // Ignore, we don't want to update this for all events.
	}
    }

    public boolean isLeader(final MapleCharacter chr) {
	return (chr.getParty().getLeader().getId() == chr.getId());
    }

    public void registerSquad(MapleSquadLegacy squad, MapleMap map) {
	final int mapid = map.getId();

	for (MapleCharacter player : squad.getMembers()) {
	    if (player != null && player.getMapId() == mapid) {
		registerPlayer(player);
	    }
	}
    }
}
