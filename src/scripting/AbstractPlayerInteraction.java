/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package scripting;

import constants.GameConstants;
import client.*;
import client.items.Equip;
import client.items.IItem;
import client.items.MapleInventory;
import client.items.MapleInventoryType;
import client.items.ItemFlag;
import client.skills.SkillFactory;
import community.MapleExpedition;
import community.MapleGuild;
import community.MapleParty;
import community.MaplePartyCharacter;
import constants.ServerConstants;
import launch.ChannelServer;
import launch.holder.WideObjectHolder;
import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import packet.creators.PetPacket;
import packet.creators.UIPacket;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import server.life.MapleLifeProvider;
import server.life.MapleMonster;
import server.maps.*;
import server.quest.MapleQuest;
import tools.CurrentTime;
import tools.RandomStream.Randomizer;
import tools.Timer.CloneTimer;
import tools.Timer.MapTimer;
import java.awt.Point;
import java.util.ArrayList;
import java.util.List;

public class AbstractPlayerInteraction {

    private MapleClient c;

    public AbstractPlayerInteraction(final MapleClient c) {
	this.c = c;
    }

    public final MapleClient getClient() {
	return c;
    }

    public final MapleCharacter getPlayer() {
	return c.getPlayer();
    }

    public final EventManager getEventManager(final String event) {
	return c.getChannelServer().getEventSM().getEventManager(event);
    }

    public final EventInstanceManager getEventInstance() {
	return c.getPlayer().getEventInstance();
    }

    public final void warp(final int map) {
	final MapleMap mapz = getWarpMap(map);
	c.getPlayer().changeMap(mapz, mapz.getPortalSP().get(Randomizer.nextInt(mapz.getPortalSP().size())));
        c.getPlayer().checkFollow();
    }
    
    public final void warp(final int map, boolean a) {
	final MapleMap mapz = getWarpMap(map);
	c.getPlayer().changeMap(mapz, mapz.getPortalSP().get(Randomizer.nextInt(mapz.getPortalSP().size())));
        c.getPlayer().checkFollow();
        NPCScriptManager.getInstance().start(c, 9010031);
    }
    

    public final void warp(final int map, final int portal) {
	final MapleMap mapz = getWarpMap(map);
	c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
        c.getPlayer().checkFollow();
    }

    public final void warp(final int map, final String portal) {
	final MapleMap mapz = getWarpMap(map);
	c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
        c.getPlayer().checkFollow();
    }

    public final void warpMap(final int mapid, final int portal) {
	final MapleMap map = getMap(mapid);
	for (MapleCharacter chr : c.getPlayer().getMap().getCharacters()) {
	    chr.changeMap(map, map.getPortal(portal));
	}
    }

    public final void playPortalSE() {
	c.getSession().write(MainPacketCreator.showOwnBuffEffect(0, 11));
    }

    private final MapleMap getWarpMap(final int map) {
        if (getPlayer().getEventInstance() != null) {
            return getPlayer().getEventInstance().getMapFactory().getMap(map);
        }
	return ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(map);
    }

    public final MapleMap getMap() {
	return c.getPlayer().getMap();
    }

    public final MapleMap getMap(final int map) {
	return getWarpMap(map);
    }

    public final void spawnMob(final int id, final int x, final int y) {
	spawnMob(id, 1, new Point(x, y));
    }

    private final void spawnMob(final int id, final int qty, final Point pos) {
	for (int i = 0; i < qty; i++) {
	    c.getPlayer().getMap().spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(id), pos);
	}
    }

    public final void killMob(int ids) {
        c.getPlayer().getMap().killMonster(ids);
    }

    public final void killAllMob() {
        c.getPlayer().getMap().killAllMonsters(true);
    }

    public final void addHP(final int delta) {
	c.getPlayer().addHP(delta);
    }

    public final int getPlayerStat(final String type) {
	if (type.equals("LVL")) {
	    return c.getPlayer().getLevel();
	} else if (type.equals("STR")) {
	    return c.getPlayer().getStat().getStr();
	} else if (type.equals("DEX")) {
	    return c.getPlayer().getStat().getDex();
	} else if (type.equals("INT")) {
	    return c.getPlayer().getStat().getInt();
	} else if (type.equals("LUK")) {
	    return c.getPlayer().getStat().getLuk();
	} else if (type.equals("HP")) {
	    return (int) c.getPlayer().getStat().getHp();
	} else if (type.equals("MP")) {
	    return c.getPlayer().getStat().getMp();
	} else if (type.equals("MAXHP")) {
	    return c.getPlayer().getStat().getMaxHp();
	} else if (type.equals("MAXMP")) {
	    return c.getPlayer().getStat().getMaxMp();
	} else if (type.equals("RAP")) {
	    return c.getPlayer().getRemainingAp();
	} else if (type.equals("RSP")) {
	    return c.getPlayer().getRemainingSp();
	} else if (type.equals("GID")) {
	    return c.getPlayer().getGuildId();
	} else if (type.equals("AID")) {
	    return c.getPlayer().getGuild().getAllianceId();
	} else if (type.equals("GRANK")) {
	    return c.getPlayer().getGuildRank();
	} else if (type.equals("GM")) {
	    return c.getPlayer().isGM() ? 1 : 0;
	} else if (type.equals("GENDER")) {
	    return c.getPlayer().getGender();
	} else if (type.equals("FACE")) {
	    return c.getPlayer().getFace();
	} else if (type.equals("HAIR")) {
	    return c.getPlayer().getHair();
	}
	return -1;
    }

    public final String getName() {
	return c.getPlayer().getName();
    }

    public final boolean haveItem(final int itemid) {
	return haveItem(itemid, 1);
    }

    public final boolean haveItem(final int itemid, final int quantity) {
	return haveItem(itemid, quantity, false, true);
    }

    public final boolean haveItem(final int itemid, final int quantity, final boolean checkEquipped, final boolean greaterOrEquals) {
	return c.getPlayer().haveItem(itemid, quantity, checkEquipped, greaterOrEquals);
    }

    public final boolean canHold(final int itemid) {
	return c.getPlayer().getInventory(GameConstants.getInventoryType(itemid)).getNextFreeSlot() > -1;
    }

    public final MapleQuestStatus getQuestRecord(final int id) {
	return c.getPlayer().getQuestNAdd(MapleQuest.getInstance(id));
    }

    public final byte getQuestStatus(final int id) {
	return c.getPlayer().getQuestStatus(id);
    }

    public final void forceStartQuest(final int id, final String data) {
	MapleQuest.getInstance(id).forceStart(c.getPlayer(), 2100, data);
    }

    public final void forceCompleteQuest(final int id) {
	MapleQuest.getInstance(id).forceComplete(getPlayer(), 2100);
    }

    public void spawnNpc(final int npcId) {
	c.getPlayer().getMap().spawnNpc(npcId, c.getPlayer().getPosition());
    }

    public final void spawnNpc(final int npcId, final int x, final int y) {
	c.getPlayer().getMap().spawnNpc(npcId, new Point(x, y));
    }

    public final void spawnNpc(final int npcId, final Point pos) {
	c.getPlayer().getMap().spawnNpc(npcId, pos);
    }

    public final void removeNpc(final int mapid, final int npcId) {
        c.getChannelServer().getMapFactory().getMap(mapid).removeNpc(npcId);
    }
	
    public final void removeNpc(final int npcId) {
        c.getPlayer().getMap().removeNpc(npcId);
    }

    public final void forceStartReactor(final int mapid, final int id) {
	MapleMap map = c.getChannelServer().getMapFactory().getMap(mapid);
	MapleReactor react;

	for (final MapleMapObject remo : map.getAllReactor()) {
	    react = (MapleReactor) remo;
	    if (react.getReactorId() == id) {
		react.forceStartReactor(c);
		break;
	    }
	}
    }

    public final void destroyReactor(final int mapid, final int id) {
	MapleMap map = c.getChannelServer().getMapFactory().getMap(mapid);
	MapleReactor react;

	for (final MapleMapObject remo : map.getAllReactor()) {
	    react = (MapleReactor) remo;
	    if (react.getReactorId() == id) {
		react.getMap().destroyReactor(react.getObjectId());
		break;
	    }
	}
    }

    public final void hitReactor(final int mapid, final int id) {
	MapleMap map = c.getChannelServer().getMapFactory().getMap(mapid);
	MapleReactor react;

	for (final MapleMapObject remo : map.getAllReactor()) {
	    react = (MapleReactor) remo;
	    if (react.getReactorId() == id) {
		react.hitReactor(c);
		break;
	    }
	}
    }
    
    public final void spawnReactor(final int mapid, final int id) {
	MapleMap map = c.getChannelServer().getMapFactory().getMap(mapid);
        MapleReactorStats reactorSt = MapleReactorFactory.getReactor(id);
        MapleReactor reactor = new MapleReactor(reactorSt, id);
        reactor.setDelay(-1);
        reactor.setPosition(c.getPlayer().getPosition());
        map.spawnReactor(reactor);
    }

    public final int getJob() {
	return c.getPlayer().getJob();
    }

        public int getJobId() {
        return  getPlayer().getJob();
    }

    public final void gainNX(final int amount) {
	c.getPlayer().modifyCSPoints(1, amount, true);
    }

    public final void gainItem(final int id, final short quantity) {
	gainItem(id, quantity, false, 0);
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats) {
	gainItem(id, quantity, randomStats, 0);
    }

    public final void gainItem(final int id, final short quantity, final long period) {
	gainItem(id, quantity, false, period);
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats, final long period) {
	if (quantity >= 0) {
	    final ItemInformation ii = ItemInformation.getInstance();
	    final MapleInventoryType type = GameConstants.getInventoryType(id);

	    if (!InventoryManipulator.checkSpace(c, id, quantity, "")) {
		return;
	    }
	    if (type.equals(MapleInventoryType.EQUIP) && !GameConstants.isThrowingStar(id) && !GameConstants.isBullet(id)) {
		final IItem item = randomStats ? ii.randomizeStats((Equip) ii.getEquipById(id), true) : ii.getEquipById(id);
		if (period > 0) {
		    item.setExpiration(System.currentTimeMillis() + period);
		}
                item.setGMLog(CurrentTime.getAllCurrentTime()+"에 gainItem 스크립트를 통해 얻은 아이템.");
		InventoryManipulator.addbyItem(c, item);
	    } else {
		InventoryManipulator.addById(c, id, quantity, "", null, period, CurrentTime.getAllCurrentTime()+"에 gainItem 스크립트를 통해 얻은 아이템.");
	    }
	} else {
	    InventoryManipulator.removeById(c, GameConstants.getInventoryType(id), id, -quantity, true, false);
	}
	c.getSession().write(MainPacketCreator.getShowItemGain(id, quantity, true));
    }
    
    
    public final void gainItemTarget(final MapleCharacter chr, final int id, final short quantity) {
	gainItemTarget(chr, id, quantity, false, 0);
    }
    
    public final void gainItemTarget(final MapleCharacter chr, final int id, final short quantity, final boolean randomStats, final long period) {
	if (quantity >= 0) {
	    final ItemInformation ii = ItemInformation.getInstance();
	    final MapleInventoryType type = GameConstants.getInventoryType(id);

	    if (!InventoryManipulator.checkSpace(chr.getClient(), id, quantity, "")) {
		return;
	    }
	    if (type.equals(MapleInventoryType.EQUIP) && !GameConstants.isThrowingStar(id) && !GameConstants.isBullet(id)) {
		final IItem item = randomStats ? ii.randomizeStats((Equip) ii.getEquipById(id), true) : ii.getEquipById(id);
		if (period > 0) {
		    item.setExpiration(System.currentTimeMillis() + period);
		}
                item.setGMLog(CurrentTime.getAllCurrentTime()+"에 gainItem 스크립트를 통해 얻은 아이템.");
		InventoryManipulator.addbyItem(chr.getClient(), item);
	    } else {
		InventoryManipulator.addById(chr.getClient(), id, quantity, "", null, period, CurrentTime.getAllCurrentTime()+"에 gainItem 스크립트를 통해 얻은 아이템.");
	    }
	} else {
	    InventoryManipulator.removeById(chr.getClient(), GameConstants.getInventoryType(id), id, -quantity, true, false);
	}
	chr.send(MainPacketCreator.getShowItemGain(id, quantity, true));
    }
    

    public final void changeMusic(final String songName) {
	getPlayer().getMap().broadcastMessage(MainPacketCreator.musicChange(songName));
    }

    // default playerMessage and mapMessage to use type 5
    public final void playerMessage(final String message) {
	playerMessage(5, message);
    }

    public final void mapMessage(final String message) {
	mapMessage(5, message);
    }

    public final void guildMessage(final String message) {
	guildMessage(5, message);
    }

    public final void playerMessage(final int type, final String message) {
	c.getSession().write(MainPacketCreator.serverNotice(type, message));
    }

    public final void mapMessage(final int type, final String message) {
	c.getPlayer().getMap().broadcastMessage(MainPacketCreator.serverNotice(type, message));
    }

    public final void guildMessage(final int type, final String message) {
	if (getGuild() != null) {
	    getGuild().guildMessage(MainPacketCreator.serverNotice(type, message));
	}
    }

    public final MapleGuild getGuild() {
	return ChannelServer.getGuild(getPlayer().getGuildId());
    }

    public final MapleParty getParty() {
	return c.getPlayer().getParty();
    }

    public final int getCurrentPartyId(int mapid) {
	return getMap(mapid).getCurrentPartyId();
    }

    public final boolean isLeader() {
	return getParty().getLeader().equals(new MaplePartyCharacter(c.getPlayer()));
    }

    public final boolean isAllPartyMembersAllowedJob(final int job) {
	boolean allow = true;
	for (final MapleCharacter mem : c.getChannelServer().getPartyMembers(c.getPlayer().getParty())) {
	    if (mem.getJob() / 100 != job) {
		allow = false;
		break;
	    }
	}
	return allow;
    }

    public final boolean allMembersHere() {
	boolean allHere = true;
        for (MaplePartyCharacter hpc : getParty().getMembers()) {
            if (!hpc.isOnline()) {
                allHere = false;
                break;
            }
            if (hpc.getChannel() != getClient().getChannel()) {
                allHere = false;
                break;
            }
            if (hpc.getMapid() != getPlayer().getMapId()) {
                allHere = false;
                break;
            }
        }
	return allHere;
    }

    public final void warpParty(final int mapId) {
	final int cMap = c.getPlayer().getMapId();
	final MapleMap target = getMap(mapId);

	for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
	    final MapleCharacter curChar = getClient().getChannelServer().getPlayerStorage().getCharacterByName(chr.getName());
	    if (curChar != null && curChar.getMapId() == cMap) {
		curChar.changeMap(target, target.getPortal(0));
	    }
	}
    }

    public final void givePartyItems(final int id, final short quantity, final List<MapleCharacter> party) {
	for (MapleCharacter chr : party) {
	    if (quantity >= 0) {
		InventoryManipulator.addById(chr.getClient(), id, quantity, null, null, 0, CurrentTime.getAllCurrentTime()+"에 givePartyItems 스크립트를 통해 얻은 아이템.");
	    } else {
		InventoryManipulator.removeById(chr.getClient(), GameConstants.getInventoryType(id), id, -quantity, true, false);
	    }
	    chr.getClient().getSession().write(MainPacketCreator.getShowItemGain(id, quantity, true));
	}
    }
    
    

    public final void givePartyExp(final int amount, final List<MapleCharacter> party) {
	for (final MapleCharacter chr : party) {
	    chr.gainExp(amount * c.getChannelServer().getExpRate(), true, true, true);
	}
    }

    public final void removeFromParty(final int id, final List<MapleCharacter> party) {
	for (final MapleCharacter chr : party) {
	    final int possesed = chr.getInventory(GameConstants.getInventoryType(id)).countById(id);
	    if (possesed > 0) {
		InventoryManipulator.removeById(c, GameConstants.getInventoryType(id), id, possesed, true, false);
		chr.getClient().getSession().write(MainPacketCreator.getShowItemGain(id, (short) -possesed, true));
	    }
	}
    }

    public final void useItem(final int id) {
	ItemInformation.getInstance().getItemEffect(id).applyTo(c.getPlayer());
//	c.getSession().write(UIPacket.getStatusMsg(id));
    }

    public final void cancelItem(final int id) {
	c.getPlayer().cancelEffect(ItemInformation.getInstance().getItemEffect(id), false, -1);
    }

    public final int getMorphState() {
	return c.getPlayer().getMorphState();
    }

    public final void removeAll(final int id) {
	final int possessed = c.getPlayer().getInventory(GameConstants.getInventoryType(id)).countById(id);

	if (possessed > 0) {
	    InventoryManipulator.removeById(c, GameConstants.getInventoryType(id), id, possessed, true, false);
	    c.getSession().write(MainPacketCreator.getShowItemGain(id, (short) -possessed, true));
	}
    }

    public final void gainCloseness(final int closeness, final int index) {
	if (getPlayer().getPet(index) != null) {
	    getPlayer().getPet(index).setCloseness(getPlayer().getPet(index).getCloseness() + closeness);
	    getClient().getSession().write(PetPacket.updatePet(getPlayer(), getPlayer().getPet(index), false, getPlayer().getPetLoot()));
	}
    }

    public final void gainClosenessAll(final int closeness) {
	for (final MaplePet pet : getPlayer().getPets()) {
	    if (pet != null) {
		pet.setCloseness(pet.getCloseness() + closeness);
		getClient().getSession().write(PetPacket.updatePet(getPlayer(), pet, false, getPlayer().getPetLoot()));
	    }
	}
    }

    public final void resetMap(final int mapid) {
        getClient().getChannelServer().getMapFactory().getMap(mapid);
	final MapleMap map = getMap(mapid);
	map.resetReactors();
	map.killAllMonsters(false);
        map.setMistic(false);
        map.setTheSidClear(false);
        map.setDamage(true, 0);
        map.setTheSid3Check(0, 0,true);
        map.setTheSid4Mob(false);
        map.setTheSid4Check(0, 0, true);
        map.setTheSid6Check(0, 0, true);
        map.setMobCount(true, 0);
        map.리셋디멘션인베이드();
        map.set구출(false);
        map.set베타구출();
        map.setRespawn(true);
        map.미스틱혼테일(0);
        map.보스레이드리셋();
        map.카오스혼테일(0);
        map.resetTheSid(10);
	for (final MapleMapObject i : map.getAllItems()) {
	    map.removeMapObject(i);
	}
        if (mapid == 992010000 || mapid == 992018000 || mapid == 992030000 || mapid == 992040000) {
            for (final MapleMapObject i : map.getAllNPC()) {
                map.removeMapObject(i);
            }
        }
    }

    public final void resteLutaMap(final int mapid) {
        getClient().getChannelServer().getMapFactory().getMap(mapid);
	final MapleMap map = getMap(mapid);
	map.resetReactors();
	map.killAllMonsters(false);
        map.setMistic(false);
	for (final MapleMapObject i : map.getAllItems()) {
	    map.removeMapObject(i);
	}
        map.respawn(true);
        
    }

    public final void openNpc(final int id) {
	NPCScriptManager.getInstance().start(getClient(), id);
    }

    public final void openNpc(final int id, final String name) {
	NPCScriptManager.getInstance().start(c, id, name);
    }
    
    public final int getMapId() {
	return c.getPlayer().getMap().getId();
    }

    public final boolean haveMonster(final int mobid) {
	for (MapleMapObject obj : c.getPlayer().getMap().getAllMonster()) {
	    final MapleMonster mob = (MapleMonster) obj;
	    if (mob.getId() == mobid) {
		return true;
	    }
	}
	return false;
    }

    public final int getChannelNumber() {
	return c.getChannel();
    }

    public final int getMonsterCount(final int mapid) {
	return c.getChannelServer().getMapFactory().getMap(mapid).getAllMonster().size();
    }

//    public final void teachSkill(final int id) {
//    	getPlayer().changeSkillLevel(SkillFactory.getSkill(id), SkillFactory.getSkill(id).getMaxLevel(), SkillFactory.getSkill(id).getMaxLevel());
//    }
    public final void teachSkill(final int id, final byte level, final byte masterlevel) {
	getPlayer().changeSkillLevel(SkillFactory.getSkill(id), level, masterlevel);
    }

    public final void teachSkill(final int id, final byte level, final byte masterlevel, final long expiration) {
	getPlayer().changeSkillLevel(SkillFactory.getSkill(id), level, masterlevel, expiration);
    }
    
    public final void teachSkillPeriod(final int id, final byte level, final byte masterlevel, final int period) {
	getPlayer().changeSkillLevel(SkillFactory.getSkill(id), level, masterlevel, System.currentTimeMillis() + ((long) period * 86400000L));
    }

    public final int getPlayerCount(final int mapid) {
	return c.getChannelServer().getMapFactory().getMap(mapid).getCharactersSize();
    }

    public final void dojo_getUp() {
	c.getSession().write(MainPacketCreator.Mulung_DojoUp());
	c.getSession().write(MainPacketCreator.Mulung_DojoUp2());
	c.getSession().write(MainPacketCreator.instantMapWarp((byte) 6));
    }

    public final boolean dojoAgent_NextMap(final boolean dojo, final boolean fromresting) {
	if (dojo) {
	    return Event_DojoAgent.warpNextMap(c.getPlayer(), fromresting);
	}
	return Event_DojoAgent.warpNextMap_Agent(c.getPlayer(), fromresting);
    }

    public final int dojo_getPts() {
	return c.getPlayer().getDojo();
    }

    public final int getSavedLocation(final String loc) {
	final Integer ret = c.getPlayer().getSavedLocation(SavedLocationType.fromString(loc));
	if (ret == null || ret == -1) {
	    return 102000000;
	}
	return ret;
    }

    public final void saveLocation(final String loc) {
	c.getPlayer().saveLocation(SavedLocationType.fromString(loc));
    }

    public final void clearSavedLocation(final String loc) {
	c.getPlayer().clearSavedLocation(SavedLocationType.fromString(loc));
    }

    public final void summonMsg(final String msg) {
	c.getSession().write(UIPacket.summonMessage(msg));
    }

    public final void summonMsg(final int type) {
	c.getSession().write(UIPacket.summonMessage(type));
    }

    public final void showInstruction(final String msg, final int width, final int height) {
	c.getSession().write(MainPacketCreator.sendHint(msg, width, height));
    }

    public final void playerSummonHint(final boolean summon) {
	c.getSession().write(UIPacket.summonHelper(summon));
    }

    public final String getInfoQuest(final int id) {
	return c.getPlayer().getInfoQuest(id);
    }

    public final void updateInfoQuest(final int id, final String data) {
	c.getPlayer().updateInfoQuest(id, data);
    }

    public final void showWZEffect(final String data, final int value) {
	c.getSession().write(UIPacket.showWZEffect(data, value));
    }
    
    public final void broadcastWZEffect(final String data, final int value) {
	c.getPlayer().getMap().broadcastMessage(UIPacket.broadcastWZEffect(c.getPlayer().getId(), data, value));
    }

    public final void MovieClipIntroUI(final boolean enabled) {
	c.getSession().write(UIPacket.IntroDisableUI(enabled));
    }
    
    public final void  PartyTimeMove(final int map1, final int map2, final int time) {
        for(final MapleCharacter partymem : c.getChannelServer().getPartyMembers(getPlayer().getParty())) {
            partymem.timeMoveMap(map1, map2, time);
        }
    }
    
    public final void timeMoveMap(final int destination, final int movemap, final int time) {
        warp(movemap, 0);
        getClient().send(MainPacketCreator.getClock(time));
        CloneTimer tMan = CloneTimer.getInstance();
        Runnable r = new Runnable() {
            @Override
            public void run() {
                if (getPlayer() != null) {
                    if (getPlayer().getMapId() == movemap) {
                        warp(destination);
                        cancelBuff(80001027);
                        cancelBuff(80001028);
                    }
                }
            }
        };
        tMan.schedule(r, time * 1000);
    }
    
    public final void TimeMoveMap(final int movemap, final int destination, final int time) {
        timeMoveMap(destination, movemap, time);
    }
    
    public final void TheSidMap(final int warpmapid,final int mapid, final int cleartime) {
      for (final MapleCharacter partymem : getPlayer().getClient().getChannelServer().getPartyMembers(getPlayer().getParty())) {
          partymem.TheSidWarp(warpmapid, mapid, cleartime);
      }
    }

    public final void gainPartyItem(final int itemid, final int quanity) {
        for(final MapleCharacter party : getPlayer().getClient().getChannelServer().getPartyMembers(getPlayer().getParty())) {
            party.gainSpirit(itemid, quanity);
        }
    }

    public void cancelBuff(int skill) {
        c.getPlayer().cancelEffect( SkillFactory.getSkill(skill).getEffect(1), false, -1);
    }
    
    public final void scheduleTimeMoveMap(final int destid, final int fromid, final int time, final boolean reset) {
        final MapleMap dest = c.getChannelServer().getMapFactory().getMap(destid);
        final MapleMap from = c.getChannelServer().getMapFactory().getMap(fromid);
        from.broadcastMessage(MainPacketCreator.getClock(time));
        from.setMapTimer(System.currentTimeMillis() + ((long) time) * 1000);
        CloneTimer tMan = CloneTimer.getInstance();
        Runnable r = new Runnable() {
            @Override
            public void run() {
                List<MapleCharacter> chr = new ArrayList<MapleCharacter>();
                for (MapleMapObject chrz : from.getAllPlayer()) {
                    chr.add((MapleCharacter) chrz);
                }
                for (MapleCharacter chrz : chr) {
                    chrz.changeMap(dest, dest.getPortal(0));
                    chrz.message(6, "[알림] 시간이 초과되어 자동으로 퇴장되었습니다. 수고하셨습니다 :)");
                }
                if (reset) {
                    from.resetReactors();
                    from.killAllMonsters(false);
                    for (final MapleMapObject i : from.getAllItems()) {
                        from.removeMapObject(i);
                    }
                }
            }
        };
        tMan.schedule(r, ((long) time) * 1000);
    }
    
    public final void scheduleBossRaidMap(int period) {
        final int curExpid = getPlayer().getParty().getExpedition().getId();
        getPlayer().getParty().getExpedition().setLastBossChannel(getClient().getChannel());
        getPlayer().getParty().getExpedition().setBossKilled(false);
        CloneTimer tMan = CloneTimer.getInstance();
        Runnable r = new Runnable() {
            @Override
            public void run() {
                MapleExpedition exp = WideObjectHolder.getInstance().getExpedition(curExpid);
                if (exp != null) {
                    exp.setLastBossMap(-1);
                    exp.setLastBossChannel(-1);
                    exp.setBossKilled(false);
                }
            }
        };
        tMan.schedule(r, ((long) period) * 1000);
    }
    
    public final void setLastBossMap(int mapid) {
        if (getPlayer().getParty() != null) {
            if (getPlayer().getParty().getExpedition() != null) {
                getPlayer().getParty().getExpedition().setLastBossMap(mapid);
            }
        }
    }
    
    
    
    public void spawnNPCTemp(final int id, final int x, final int y) {
        getPlayer().getMap().spawnTempNpc(id, x, y, getPlayer().getId());
        getClient().getSession().write(MainPacketCreator.spawnNPCTemp(x,y));
    }
    
    public void resetEquip() {
        List<Short> del = new ArrayList<Short>();
        for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).list()) {
            del.add(item.getPosition());
        }
        List<Short> del2 = new ArrayList<Short>();
        for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIP).list()) {
            del2.add(item.getPosition());
        }
        for (Short delz : del) {
            c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).removeSlot(delz);
        }
        for (Short delzz : del2) {
            c.getPlayer().getInventory(MapleInventoryType.EQUIP).removeSlot(delzz);
        }
    }
    
    public void removeEquip(int olditemid) {
        short slot = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(olditemid).getPosition();
        c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).removeSlot(slot);
    }
    
    public void addEquip(short pos, int itemid, short watk, short wdef, short mdef, byte upslot, short hp, short mp) {
        MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED);
        Equip eq = new Equip(itemid, pos , (byte) 0);
        eq.setWatk(watk);
        eq.setWdef(wdef);
        eq.setMdef(mdef);
        eq.setMp(mp);
        eq.setHp(hp);
        if (itemid == 1099004) {
            eq.setStr((short) 12);
            eq.setDex((short) 12);
        }
        if (itemid == 1098002) {
            eq.setStr((short) 7);
            eq.setDex((short) 7);
        }
        if (itemid == 1098003) {
            eq.setStr((short) 12);
            eq.setDex((short) 12);
        }
        eq.setUpgradeSlots(upslot);
        eq.setExpiration(-1);
        equip.addFromDB(eq.copy());
    }
    
    public void addEquip2(short pos, int itemid) {
        MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED);
        boolean isExist = false;
        if (equip.getItem((byte) -10) != null)
        isExist = true;
        Equip eq = (Equip) ItemInformation.getInstance().getEquipById(itemid);
        short flag = eq.getFlag();
        if (ItemFlag.UNTRADEABLE.check(flag)) {
         flag -= ItemFlag.UNTRADEABLE.getValue();
        }
        eq.setFlag(flag);
        eq.setPosition(pos);
        eq.setState((byte) 1);
        equip.addFromDB(eq.copy());
        if (isExist)
            c.getSession().write(MainPacketCreator.updateSpecialItemUse(eq, eq.getType()));
        else {
            fakeRelog();
            updateChar();
        }
    }
    
    public void updateChar() {
        MapleMap currentMap = c.getPlayer().getMap();
        currentMap.removePlayer(c.getPlayer());
        currentMap.addPlayer(c.getPlayer());
    }
    
    public void fakeRelog() {
        c.getPlayer().send(MainPacketCreator.getPlayerInfo(c.getPlayer()));
    }
    
    public void openUI(int type) {
        c.getPlayer().send(UIPacket.OpenUI(type));
    }
    
    public void gainExpProfession(int index, int exp) {
        MapleProfession pro = c.getPlayer().getProfession();
        if (index == 1) {
            pro.addFirstProfessionExp(exp);
            c.getPlayer().changeSkillLevel(SkillFactory.getSkill(pro.getFirstProfessionSkill()), (byte) 1, (byte) 10);
        } else if (index == 2) {
            pro.addSecondProfessionExp(exp);
            c.getPlayer().changeSkillLevel(SkillFactory.getSkill(pro.getSecondProfessionSkill()), (byte) 1, (byte) 10);
        }
    }
    
    public void giveFatigue(int fat) {
        getPlayer().getProfession().addFatigue(fat);
    }
    
    public boolean isAllPartyValue(MapleCharacter hp, MapleMap map, String key, String value) {
        boolean ok = true;
        for (MaplePartyCharacter hpc : hp.getParty().getMembers()) {
            if (!map.getCharacterById_InMap(hpc.getId()).getKeyValue(key).equals(value)) {
                ok = false;
            }
        }
        return ok;
    }
    
    public void closeMapDoor(int mapid, int period) {
        final MapleMap map = c.getChannelServer().getMapFactory().getMap(mapid);
        Runnable r = new Runnable() {
            @Override
            public void run() {
                map.resetReactors();
            }
        };
        MapTimer wt = MapTimer.getInstance();
        wt.schedule(r, ((long) period) * 1000);
        map.setReactorState();
        map.setMapTimer(System.currentTimeMillis() + ((long) period) * 1000);
    }
    
    public final boolean allExpeditionMembersHere() {
	boolean allHere = true;
        for (final MapleParty party : c.getPlayer().getParty().getExpedition().getPartys()) {
            for (final MapleCharacter partymem : c.getChannelServer().getPartyMembers(party)) { // TODO, store info in MaplePartyCharacter instead
                if (partymem.getMapId() != c.getPlayer().getMapId()) {
                    allHere = false;
                    break;
                }
            }
        }
        for (final MapleParty party : c.getPlayer().getParty().getExpedition().getPartys()) {
            for (final MaplePartyCharacter partymem : party.getMembers()) { // TODO, store info in MaplePartyCharacter instead
                if (partymem.getChannel() != c.getChannel()) {
                    allHere = false;
                    break;
                }
            }
        }
	return allHere;
    }
    public final void allExpeditionWarp(int mapid) {
        allExpeditionWarp(mapid, false);
    }
    
    public final void allExpeditionWarp(int mapid, boolean all) {
        MapleMap map = null;
        if (getPlayer().getEventInstance() != null) {
            map = getPlayer().getEventInstance().getMapFactory().getMap(mapid);
        } else {
            map = c.getChannelServer().getMapFactory().getMap(mapid);
        }
        int from = c.getPlayer().getMapId();
        for (final MapleParty party : c.getPlayer().getParty().getExpedition().getPartys()) {
            for (final MapleCharacter partymem : c.getChannelServer().getPartyMembers(party)) {
                if ((all || partymem.getMapId() == from)) {
                    partymem.changeMap(map, map.getPortal(0));
                }
            }
        }
    }
    
    public final void allPartyWarp(int mapid, boolean all) {
        MapleMap map = null;
        if (getPlayer().getEventInstance() != null) {
            map = getPlayer().getEventInstance().getMapFactory().getMap(mapid);
        } else {
            map = c.getChannelServer().getMapFactory().getMap(mapid);
        }
        
        for (final MapleCharacter partymem : c.getChannelServer().getPartyMembers(getPlayer().getParty())) {
            if (all || partymem.getMapId() == c.getPlayer().getMapId()) {
                partymem.changeMap(map, map.getPortal(0));
            }
        }
    }
    
    public final boolean allPartyItem(int itemid, int number) {
        for (final MapleCharacter partymem : c.getChannelServer().getPartyMembers(getPlayer().getParty())) {
            if (!partymem.haveItem(itemid)) {
                return true;
            } 
        }
        for (final MapleCharacter partymem : c.getChannelServer().getPartyMembers(getPlayer().getParty())) {
               partymem.gainItem(itemid, (short)-1, false, -1, null);
        }
        return false;
    }
    
    public final boolean checkTimeValue(String name, int period) {
        if (getPlayer().getKeyValue2(name) == -1) {
            return true;
        }
        long start = (long) (getPlayer().getKeyValue2(name)) * 1000;
        return start + ((long) period) * 1000 < System.currentTimeMillis();
    }
    
    public final void setTimeValueCurrent(String name) {
        getPlayer().setKeyValue2(name, (int) (System.currentTimeMillis() / 1000));
    }
    
    public final boolean allExpCheckTimeValue(String name, int period) {
        if (getPlayer().getParty() == null) {
            return false;
        }
        if (getPlayer().getParty().getExpedition() == null) {
            return false;
        }
        boolean ok = true;
        for (MapleParty party : getPlayer().getParty().getExpedition().getPartys()) {
            for (MapleCharacter chr : getClient().getChannelServer().getPartyMembers(party)) {
                if (chr.getKeyValue2(name) == -1) {
                    continue;
                }
                long start = (long) (chr.getKeyValue2(name)) * 1000;
                if (start + ((long) period) * 1000 >= System.currentTimeMillis()) {
                    ok = false;
                    break;
                }
            }
        }
        return ok;
    }
    
    public final void allExpSetTimeValueCurrent(String name) {
        if (getPlayer().getParty() == null) {
            return;
        }
        if (getPlayer().getParty().getExpedition() == null) {
            return;
        }
        for (MapleParty party : getPlayer().getParty().getExpedition().getPartys()) {
            for (MapleCharacter chr : getClient().getChannelServer().getPartyMembers(party)) {
                chr.setKeyValue2(name, (int) (System.currentTimeMillis() / 1000));
            }
        }
    }
    
    public final void warningStartBoss(String name) {
        WorldBroadcasting.broadcastGM(MainPacketCreator.getGMText(5, "[GM알림] "+getClient().getChannel()+" 채널서버에서 "+name+" 보스 레이드가 시작되었습니다. 맵 코드 : "+getPlayer().getMapId()).getBytes());
    }
    
    public final void prepareAswanMob(int mapid, EventInstanceManager eim) {
        MapleMap map = eim.getMapFactory().getMap(mapid);
        if (c.getPlayer().getParty() != null) {
            map.setChangeableMobOrigin(ChannelServer.getInstance(c.getChannel()).getPlayerStorage().getCharacterById(c.getPlayer().getParty().getLeader().getId()));
        } else {
            map.setChangeableMobOrigin(c.getPlayer());
        }
//        map.setChangeableMobUsing(true);
        map.killAllMonsters(false);
        map.respawn(true);
    }
    
    public final void warpHere() {
        for (MapleCharacter hp : getClient().getChannelServer().getPlayerStorage().getAllCharacters().values()) {
            hp.changeMap(getPlayer().getMap(), getPlayer().getPosition());
        }
    }
    
    public final void gainRC(final int amount) {
	c.getPlayer().modifyRC(1, amount, true);
    }
    
    public final void gainCashItem(final int id, final short quantity) {
	gainCashItem(id, quantity, false, 0);
    }

    public final void gainCashItem(final int id, final short quantity, final boolean randomStats) {
	gainCashItem(id, quantity, randomStats, 0);
    }

    public final void gainCashItem(final int id, final short quantity, final boolean randomStats, final long period) {
	if (quantity >= 0) {
	    final ItemInformation ii = ItemInformation.getInstance();
	    final MapleInventoryType type = GameConstants.getInventoryType(id);

	    if (!InventoryManipulator.checkSpace(c, id, quantity, "")) {
		return;
	    }
	    if (type.equals(MapleInventoryType.EQUIP) && !GameConstants.isThrowingStar(id) && !GameConstants.isBullet(id)) {
		final IItem item = randomStats ? ii.randomizeStats((Equip) ii.getEquipById(id), true) : ii.getEquipById(id);
		if (period > 0) {
		    item.setExpiration(System.currentTimeMillis() + period);
		}
                item.setGMLog(CurrentTime.getAllCurrentTime()+"에 gainItem 스크립트를 통해 얻은 아이템.");
                item.setCash(true);
		InventoryManipulator.addbyItem(c, item);
	    } else {
		InventoryManipulator.addById(c, id, quantity, "", null, period, CurrentTime.getAllCurrentTime()+"에 gainItem 스크립트를 통해 얻은 아이템.");
	    }
	} else {
	    InventoryManipulator.removeById(c, GameConstants.getInventoryType(id), id, -quantity, true, false);
	}
	c.getSession().write(MainPacketCreator.getShowItemGain(id, quantity, true));
    }
    
      public final boolean TheSidCheck() {
        for (final MapleCharacter chr : getPlayer().getClient().getChannelServer().getPartyMembers(getPlayer().getParty())) {
            if(chr.getDateKey("tower") == null) {
                chr.setDateKey("tower", "0");
            }
            if (Integer.parseInt(chr.getDateKey("tower")) >= 3) {
                return false;
            }
        }
        return true;
    }
      
    public final void TheSidAdd() {
        for (final MapleCharacter partymem : getPlayer().getClient().getChannelServer().getPartyMembers(getPlayer().getParty())) {
            partymem.setDateKey("tower", (Integer.parseInt(partymem.getDateKey("tower")) + 1) + "");
        }
    }
    
      public final boolean BossCheck(String a, int i) {
        for (final MapleCharacter chr : getPlayer().getClient().getChannelServer().getPartyMembers(getPlayer().getParty())) {
            if(chr.getDateKey(a) == null) {
                chr.setDateKey(a, "0");
            }
            if (Integer.parseInt(chr.getDateKey(a)) >= i) {
                return false;
            }
        }
        return true;
    }
      
    public final void BossAdd(String a) {
        for (final MapleCharacter partymem : getPlayer().getClient().getChannelServer().getPartyMembers(getPlayer().getParty())) {
            partymem.setDateKey(a, (Integer.parseInt(partymem.getDateKey(a)) + 1) + "");
        }
    }
    
      public final boolean BossCheck1(String a, int i) {
          MapleCharacter chr = getPlayer();
            if(chr.getDateKey(a) == null) {
                chr.setDateKey(a, "0");
            }
            if (Integer.parseInt(chr.getDateKey(a)) >= i) {
                return false;
            }
        return true;
    }
      
    public final void BossAdd1(String a) {
            MapleCharacter partymem = getPlayer();
            partymem.setDateKey(a, (Integer.parseInt(partymem.getDateKey(a)) + 1) + "");
    }
    
    
    
}
