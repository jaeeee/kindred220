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
import client.MapleClient;
import client.MapleProfessionType;
import client.items.Equip;
import client.items.IItem;
import client.items.Item;
import client.items.MapleInventoryType;
import database.MYSQL;
import launch.ChannelServer;
import packet.creators.MainPacketCreator;
import server.items.ItemInformation;
import server.life.MapleLifeProvider;
import server.life.MapleMonster;
import server.maps.MapleReactor;
import server.maps.ReactorDropEntry;
import tools.RandomStream.Randomizer;
import tools.Timer.ShowTimer;
import java.awt.Point;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import server.maps.MapleReactorFactory;
import server.maps.MapleReactorStats;
import server.maps.PotSystem;
import tools.Timer.MapTimer;

public class ReactorActionManager extends AbstractPlayerInteraction {

    private MapleReactor reactor;

    public ReactorActionManager(MapleClient c, MapleReactor reactor) {
	super(c);
	this.reactor = reactor;
    }

    // only used for meso = false, really. No minItems because meso is used to fill the gap
    public void dropItems() {
	dropItems(false, 0, 0, 0, 0);
    }

    public void dropItems(boolean meso, int mesoChance, int minMeso, int maxMeso) {
	dropItems(meso, mesoChance, minMeso, maxMeso, 0);
    }

    public void dropItems(boolean meso, int mesoChance, int minMeso, int maxMeso, int minItems) {
	final List<ReactorDropEntry> chances = ReactorScriptManager.getInstance().getDrops(reactor.getReactorId());
	final List<ReactorDropEntry> items = new LinkedList<ReactorDropEntry>();

	if (meso) {
	    if (Math.random() < (1 / (double) mesoChance)) {
		items.add(new ReactorDropEntry(0, mesoChance, -1));
	    }
	}

	int numItems = 0;
	// narrow list down by chances
	final Iterator<ReactorDropEntry> iter = chances.iterator();
	while (iter.hasNext()) {
	    ReactorDropEntry d = (ReactorDropEntry) iter.next();
	    if (Math.random() < (1 / (double) d.chance)) {
		numItems++;
		items.add(d);
	    }
	}

	// if a minimum number of drops is required, add meso
	while (items.size() < minItems) {
	    items.add(new ReactorDropEntry(0, mesoChance, -1));
	    numItems++;
	}
	final Point dropPos = reactor.getPosition();

	dropPos.x -= (12 * numItems);

	int range, mesoDrop;
	final ItemInformation ii = ItemInformation.getInstance();
	for (final ReactorDropEntry d : items) {
	    if (d.itemId == 0) {
		range = maxMeso - minMeso;
		mesoDrop = (int) (Math.random() * range) + minMeso * ChannelServer.getInstance(getClient().getChannel()).getMesoRate();
		reactor.getMap().spawnMesoDrop(mesoDrop, dropPos, reactor, getPlayer(), false, (byte) 0);
	    } else {
		IItem drop;
		if (GameConstants.getInventoryType(d.itemId) != MapleInventoryType.EQUIP) {
		    drop = new Item(d.itemId, (byte) 0, (short) 1, (byte) 0);
		} else {
		    drop = ii.randomizeStats((Equip) ii.getEquipById(d.itemId), true);
		}
                if ((d.questid != 0 && getPlayer().getQuestStatus(d.questid) == 1) || d.questid == 0)
                    reactor.getMap().spawnItemDrop(reactor, getPlayer(), drop, dropPos, false, false);
	    }
	    dropPos.x += 25;
	}
    }
    
    public void dropItems(boolean herb, boolean success) {
        //약초뿌리 : 4022023
        //원석파편 : 4011010
        //먹깨비 귤양 : 2440000
        //먹깨비 젬군 : 2440001
        if (success) {
            dropItems();
        }
        final int item1, item2;
        if (herb) {
            item1 = 4022023;
            item2 = 2440000;
        } else {
            item1 = 4011010;
            item2 = 2440001;
        }
        
        if (Randomizer.isSuccess(50)) {
            ShowTimer.getInstance().schedule(new Runnable() {
                @Override
                public void run() {
                    IItem drop = new Item(item1, (byte) 0, (short) 1, (byte) 0);
                    reactor.getMap().spawnItemDrop(reactor, getPlayer(), drop, reactor.getPosition(), false, false);
                }
            }, 700);
        }
        if (Randomizer.isSuccess(50)) {
            ShowTimer.getInstance().schedule(new Runnable() {
                @Override
                public void run() {
                    IItem drop = new Item(item2, (byte) 0, (short) 1, (byte) 0);
                    reactor.getMap().spawnItemDrop(reactor, getPlayer(), drop, reactor.getPosition(), false, false);
                }
            }, 1500);
        }
        
    }

    // summon one monster on reactor location
    public void spawnMonster(int id) {
	spawnMonster(id, 1, getPosition());
    }

    // summon one monster, remote location
    public void spawnMonster(int id, int x, int y) {
	spawnMonster(id, 1, new Point(x, y));
    }

    // multiple monsters, reactor location
    public void spawnMonster(int id, int qty) {
	spawnMonster(id, qty, getPosition());
    }

    // multiple monsters, remote location
    /*public void spawnMonster(int id, int qty, int x, int y) {
	spawnMonster(id, qty, new Point(x, y));
    }*/

    // handler for all spawnMonster
    private void spawnMonster(int id, int qty, Point pos) {
	for (int i = 0; i < qty; i++) {
	    reactor.getMap().spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(id), pos);
	}
    }

    public boolean PinkBean() {
        if(reactor.getMap().getMapId() == 270051100) {
            return true;
        } else {
            return false;
        }
    }
    
    @Override
    public void spawnNpc(int npcId) {
	spawnNpc(npcId, getPosition());
    }

    // returns slightly above the reactor's position for monster spawns
    public Point getPosition() {
	Point pos = reactor.getPosition();
	pos.y -= 10;
	return pos;
    }

    public MapleReactor getReactor() {
	return reactor;
    }

    public void spawnZakum() {
	reactor.getMap().spawnZakum(getPosition());
    }

    public void spawnFakeMonster(int id) {
	spawnFakeMonster(id, 1, getPosition());
    }

    // summon one monster, remote location
    public void spawnFakeMonster(int id, int x, int y) {
	spawnFakeMonster(id, 1, new Point(x, y));
    }

    // multiple monsters, reactor location
    public void spawnFakeMonster(int id, int qty) {
	spawnFakeMonster(id, qty, getPosition());
    }

    // multiple monsters, remote location
    public void spawnFakeMonster(int id, int qty, int x, int y) {
	spawnFakeMonster(id, qty, new Point(x, y));
    }

    // handler for all spawnFakeMonster
    private void spawnFakeMonster(int id, int qty, Point pos) {
        final MapleMonster mob = MapleLifeProvider.getMonster(id);
        if (mob == null)  {
            System.out.println("MOB IS NULL!!!!!" + id);
            getPlayer().Message("MOB IS NULL!!!!!" + id);
        }
        
        if (reactor == null)  {
            System.out.println("REACTOR IS NULL");
            getPlayer().Message("REACTOR IS NULL!!!!!");
        }
        
        if (reactor.getMap() == null)  {
            System.out.println("reactor.getMap() IS NULL");
            getPlayer().Message("reactor.getMap() IS NULL!!!!!");
        }
        if (pos == null)  {
            System.out.println("pos IS NULL");
            getPlayer().Message("pos IS NULL!!!!!");
        }
        
	for (int i = 0; i < qty; i++) {
	    reactor.getMap().spawnFakeMonsterOnGroundMaple(mob, pos);
	}
    }

    public void killAll() {
	reactor.getMap().killAllMonsters(true);
    }

    public void killMonster(int monsId) {
	reactor.getMap().killMonster(monsId);
    }
    
    public void processGather() {
        if (getPlayer().getProfession().getFatigue() >= 200) {
            return;
        } else {
            getPlayer().getProfession().addFatigue(Randomizer.rand(0, 2));
        }
        int rid = reactor.getReactorId();
        boolean success = Randomizer.isSuccess(90 - ((reactor.getReactorId() % 100) * (int) (Math.ceil(getPlayer().getProfession().getFirstProfessionLevel() / 2))));
        if (reactor.getReactorId() % 100 == 11) {
            success = Randomizer.isSuccess(20);
        }
        getPlayer().getMap().broadcastMessage(getPlayer(), MainPacketCreator.showGatherComplete(getPlayer().getId(), success), true);
        int exp = 0;
        if (success) {
            exp = 20;
        } else {
            exp = 2;
        }
        
        int rate = 0;
        if (GameConstants.getTraitLevel(getPlayer().getStat().getDiligence()) >= 5) {
            rate += Math.floor(GameConstants.getTraitLevel(getPlayer().getStat().getDiligence()) / 5);
        }
        if (Randomizer.isSuccess(rate)) {
            exp *= 2;
        }
        
        
        gainExpProfession(1, exp);
        if (getPlayer().getProfession().getFirstProfessionExp() == GameConstants.getProfessionExpNeededForLevel(getPlayer().getProfession().getFirstProfessionLevel())) {
            getPlayer().Message(6, MapleProfessionType.getNameByProfession(getPlayer().getProfession().getFirstProfession())+"의 숙련도가 현재레벨의 최대치가 되었습니다. 레벨업 해주세요.");
            getPlayer().send(MainPacketCreator.playSound("profession/levelup"));
        }
        getPlayer().Message(6, MapleProfessionType.getNameByProfession(getPlayer().getProfession().getFirstProfession())+"의 숙련도가 증가하였습니다. (+"+exp+")");
        
        dropItems(rid / 100000 == 1, success || reactor.getReactorId() % 100 == 11);
        if (rid / 100000 == 1) { //Herbalism
            getPlayer().addEmpathy(reactor.getReactorId() % 100 == 11 ? 20 : 5);
        } else { //Mining
            getPlayer().addWillPower(reactor.getReactorId() % 100 == 11 ? 20 : 5);
        }
        reactor.setState((byte) 4);
        getPlayer().getMap().broadcastMessage(MainPacketCreator.showGathering(getPlayer().getId(), 0));
        getPlayer().getMap().destroyReactor(reactor.getObjectId());
        getPlayer().setKeyValue("LastRecoveredFatigue", System.currentTimeMillis()+"");
    }
    
    public void gainGuildPot() {
        
         try {
         if (!haveItem(4031308)) {
             getPlayer().dropMessage(6,"성장의 분무기가 부족합니다.");
             return;
         }

       if (reactor.getState() == 1) {
           reactor.setState((byte) 2);
           getPlayer().getGuild().guildMessage(MainPacketCreator.serverNotice(1,"[길드분재 공지]\r\n3분 후 수확을 시작합니다.\r\n" + getClient().getChannel()+ "채널 길드분재 맵으로 와주세요."));
           MapTimer.getInstance().schedule(new Runnable() {

                @Override
                public void run() {
                    getMap().broadcastMessage(MainPacketCreator.destroyReactor(reactor));
                    reactor.setAlive(false);
                    getMap().removeMapObject(reactor);
                    reactor.setTimerActive(false);
                    PotSystem.removePot(reactor.getGuildid());
                    dropItems();
                     try {
                    PreparedStatement ps = MYSQL.getConnection().prepareStatement("DELETE FROM `pots` WHERE `gid` = ?");
                    ps.setInt(1, reactor.getGuildid());
                    ps.executeUpdate();
                    ps.close(); 
                    } catch (SQLException ex) {
                        ex.printStackTrace();
                    }
                 //   int[] skillids = {9101008,9101001,9101002,9101003};
                //    getPlayer().getGuild().guildBuff(skillids[Randomizer.rand(0, 3)], 1);
                }
           }, 180000);
           
        } else if (reactor.getState() == 2) {
            getPlayer().dropMessage(6, "수확대기 시간입니다.");
            return;
        }

        if (reactor.getGuildid() != getPlayer().getGuildId()) {
           // getPlayer().getClient().getSession().write(MaplePacketCreator.getNPCTalk(reactor.getReactorId(), (byte) 0, "저는 #b" + reactor.getName() + "길드#k의 나무입니다.\r\n안타깝게도 당신은 나에게 물을 줄 수 없어요,", "00 00", (byte) 0));
                getPlayer().dropMessage(6, "저는 " + reactor.getName() + "길드의 나무입니다.안타깝게도 당신은 나에게 물을 줄 수 없어요,");
        } else {
             getPlayer().gainItem(4031308, (short) - 1, false, -1, "길드 화분으로 얻은 아이템");
             if (PotSystem.gainPotExp(getPlayer(), Randomizer.rand(1, 5), reactor)) {
                 if (reactor.getReactorId() != 90102 && reactor.getReactorId() != 90202 && reactor.getReactorId() != 90302) {
                 getMap().broadcastMessage(getPlayer(), MainPacketCreator.showForeignEffect(getPlayer().getId(), 0), false);
                 UpdateGuildPot();
                 }
             }
        }

         } catch (Exception ex) {
             ex.printStackTrace();
         }

     }


     public void UpdateGuildPot() {
         try {

        int rid = reactor.getReactorId();

                getPlayer().getMap().broadcastMessage(MainPacketCreator.destroyReactor(reactor));
                reactor.setAlive(false);
                getPlayer().getMap().removeMapObject(reactor);
                reactor.setTimerActive(false);
                PotSystem.removePot(getPlayer().getGuildId());
                switch (rid) {
                    case 100002: rid = 100004; break;
                    case 100004: rid = 100008; break;
                    case 100008: rid = 100009; break;
                    case 100000: rid = 100005; break;
                    case 100005: rid = 100007; break;
                    case 100007: rid = 100011; break;
                }


            
        

	final MapleReactorStats stats = MapleReactorFactory.getReactor(rid);
	final MapleReactor myReactor = new MapleReactor(stats, rid,getPlayer().getGuildId());
      //  if (isExist) {
            stats.setFacingDirection((byte) 0);
            myReactor.setPosition(reactor.getPosition());
            myReactor.setDelay(0);
            myReactor.setState((byte) 0);
            myReactor.setName(getPlayer().getGuild().getName());
            getPlayer().getMap().spawnReactor(myReactor);
            PotSystem.addPot(getPlayer().getGuildId(), rid,0);
      //  }

         } catch (Exception ex) {
             ex.printStackTrace();
         }
     }
}
