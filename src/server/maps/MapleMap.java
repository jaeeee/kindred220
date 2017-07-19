/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.maps;

import client.MapleClient;
import client.MapleCharacter;
import client.items.*;
import client.skills.SkillFactory;
import client.skills.SkillStatEffect;
import client.stats.BuffStats;
import client.stats.DiseaseStats;
import client.stats.MonsterStatus;
import client.stats.MonsterStatusEffect;
import community.MaplePartyCharacter;
import community.MaplePartyOperation;
import constants.ServerConstants;
import constants.GameConstants;
import constants.subclasses.QuickMove;
import database.MYSQL;
import launch.ChannelServer;
import launch.holder.MapleDiseaseValueHolder;
import launch.world.WorldBroadcasting;
import packet.creators.*;
import packet.transfer.write.Packet;
import scripting.EventInstanceManager;
import server.bosses.ObtacleAtom;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import server.life.*;
import tools.Pair;
import tools.RandomStream.Randomizer;
import tools.Timer.MapTimer;
import tools.Triple;
import java.awt.Point;
import java.awt.Rectangle;
import java.lang.ref.WeakReference;
import java.sql.PreparedStatement;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import client.skills.Skill;
import client.stats.PlayerStat;
import handler.channel.InventoryHandler;
import handler.channel.MapleMechDoor;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import launch.holder.MapleCoolDownValueHolder;
import static packet.creators.MainPacketCreator.showGageUI;
import packet.skills.MechanicSkill;
import scripting.NPCScriptManager;
import tools.Timer.EtcTimer;
import tools.Timer.WorldTimer;

public class MapleMap {

    private final Map<Integer, MapleMapObject> mapobjects = new HashMap<Integer, MapleMapObject>();
    private final Collection<Spawns> monsterSpawn = new LinkedList<Spawns>();
    private final AtomicInteger spawnedMonstersOnMap = new AtomicInteger(0);
    private final List<MapleCharacter> characters = new ArrayList<MapleCharacter>();
    private final Map<Integer, MaplePortal> portals = new HashMap<Integer, MaplePortal>();
    private final List<Rectangle> areas = new ArrayList<Rectangle>();
    private MapleFootholdTree footholds = null;
    private float monsterRate, recoveryRate;
    private MapleMapEffect mapEffect;
    private byte channel;
    
    private short decHP = 0, createMobInterval = 3500; //default create mob interval = 9000
    private String fieldType = "";
    private int protectItem = 0, barrier = 0, mapid, returnMapId, timeLimit, fieldLimit, maxRegularSpawn = 0;
    private int runningOid = 100000, forcedReturnMap = 999999999;
    private boolean town, clock, personalShop, everlast = false, dropsDisabled = false;
    private String mapName, streetName, onUserEnter, onFirstUserEnter, fieldScript;
    private Map<Integer, MapleNPC> tempnpcs3 = new HashMap<Integer, MapleNPC>();
    private Map<Integer, MapleMonster> tempmonsters3 = new HashMap<Integer, MapleMonster>();
    private WeakReference<MapleCharacter> changeMobOrigin = null;
    private List<Integer> droppedItems = new LinkedList<Integer>();
    private long maptimer = 0;
    private long damage = 0;
    private long mobcount = 0;
    public short soulamount;
    private final Lock mutex = new ReentrantLock();
    private final Map<Integer, List<MapleMapObject>> magnetics = new HashMap<Integer, List<MapleMapObject>>();
    private ScheduledFuture<?> catchstart = null;
    private boolean mistic = false;
    private boolean thesidclear = false;
    private int thesid3check[] = {0,0,0,0};
    private boolean thesid4mob = false;
    private int thesid4check[] = {0,0,0,0,0};
    private int thesid6check[] = {0,0};
    private int thesid7check = 0;
    private int thesid8check = 0;
    private boolean newthesid[] = {false,false,false,false,false,false,false,false,false,false};
    private int 슬라임카운트 = 0;
    private int 거북이카운트 = 0;
    private int 화산벌레카운트 = 0;
    private int 디멘션인베이드[] = {0,0,0,0,0};
    private transient ScheduledFuture<?> 스켈레곤;
    private int timeo = 0;
    private int 미스틱혼테일 = 0;
    private int 카오스혼테일 = 0;
    private boolean 리스폰 = true;
    private long lastPlayerLeft = System.currentTimeMillis();
    private int 보스레이드 = 0;
    private int 보스레이드난이도 = 0;
    private int 보스레이드몬스터이지[] = {5220001,8220000,5220003,8220001};
    private int 보스레이드몬스터노말[] = {9300119,9500390,8210011,8500001};
    private int 보스레이드몬스터하드[] = {8300006,8300007,9309201,8800000};
    private int 보스레이드몬스터헬[] = {8800100,9309205,9309200,8880000};
    private int 보스레이드좌표[] = {0,0};
    private boolean 베타구출 = false;
    private int 베타구출C[] = {0,0};
    private int time = 0;
    private int EliteMobCount;
    private int EliteMobCommonCount;
    private boolean elitebossmap;
    private boolean elitebossrewardmap;
    private int viewtop, viewbottom, viewleft, viewright;
    
    public int getViewTop() {
        return this.viewtop;
    }

    public void setViewTop(int a) {
        this.viewtop = a;
    }

    public int getViewBottom() {
        return this.viewbottom;
    }

    public void setViewBottom(int a) {
        this.viewbottom = a;
    }

    public int getViewRight() {
        return this.viewright;
    }

    public void setViewRight(int a) {
        this.viewright = a;
    }

    public int getViewLeft() {
        return this.viewleft;
    }

    public void setViewLeft(int a) {
        this.viewleft = a;
    }
    
    public MapleMap(final int mapid, final int channel, final int returnMapId, final float monsterRate) {
        this.mapid = mapid;
        this.channel = (byte) channel;
        this.returnMapId = returnMapId;
        this.monsterRate = monsterRate;
        EnumMap<MapleMapObjectType, LinkedHashMap<Integer, MapleMapObject>> mapobj = new EnumMap<MapleMapObjectType, LinkedHashMap<Integer, MapleMapObject>>(MapleMapObjectType.class);
        for (MapleMapObjectType type : MapleMapObjectType.values()) {
            mapobj.put(type, new LinkedHashMap<Integer, MapleMapObject>());
        }
    }

    public final void toggleDrops() {
        this.dropsDisabled = !dropsDisabled;
    }
    
    public int EliteMobCount() {
        return this.EliteMobCount;
    }

    public int EliteMobCommonCount() {
        return this.EliteMobCommonCount;
    }

    public void SetEliteMobCount(int a) {
        this.EliteMobCount = a;
    }

    public void SetEliteMobCommonCount(int a) {
        this.EliteMobCommonCount = a;
    }

    public boolean isEliteBossMap() {
        return this.elitebossmap;
    }
 public final void SoulGauge(final MapleMapObject dropper, final MapleCharacter chr, final IItem item, Point pos) {
        final Point droppos = calcDropPos(pos, pos);
        final MapleWorldMapItem drop = new MapleWorldMapItem(item, droppos, dropper, chr, (byte) 0, true);
        Equip target;
        target = (Equip) chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11);
        if (target.getSoulName() != 0) {
            if (target.getSoulEnchanter() != 0) {
                chr.send(MainPacketCreator.dropItemFromMapObject(drop, dropper.getPosition(), droppos, (byte) 0));
                chr.send(MainPacketCreator.removeSoul(drop.getObjectId(), chr.getId()));
                chr.addSoulCount();
                chr.send(SoulWeaponPacket.giveSoulGauge(chr.addgetSoulCount(), chr.getEquippedSoulSkill()));
            } else {
                chr.send(MainPacketCreator.dropItemFromMapObject(drop, dropper.getPosition(), droppos, (byte) 0));
                chr.send(MainPacketCreator.removeSoul(drop.getObjectId(), chr.getId()));
                chr.send(SoulWeaponPacket.giveSoulGauge(chr.addgetSoulCount(), chr.getEquippedSoulSkill()));
            }
        }
    }
    public void setEliteBossMap(boolean bool) {
        this.elitebossmap = bool;
    }

    public boolean isEliteBossRewardMap() {
        return this.elitebossrewardmap;
    }

    public void setEliteBossRewardMap(boolean bool) {
        this.elitebossrewardmap = bool;
    }

    public final int getId() {
        return mapid;
    }

    public boolean canDelete() {
        return (System.currentTimeMillis() - lastPlayerLeft > (30 * 60 * 1000L)) && (getCharactersSize() == 0);
    }
    
    public final MapleMap getReturnMap() {
        return ChannelServer.getInstance(channel).getMapFactory().getMap(returnMapId);
    }

    public final int getReturnMapId() {
        return returnMapId;
    }

    public final int getForcedReturnId() {
        return forcedReturnMap;
    }

    public final MapleMap getForcedReturnMap() {
        return ChannelServer.getInstance(channel).getMapFactory().getMap(forcedReturnMap);
    }

    public final void setForcedReturnMap(final int map) {
        this.forcedReturnMap = map;
    }

    public final float getRecoveryRate() {
        return recoveryRate;
    }

    public final void setRecoveryRate(final float recoveryRate) {
        this.recoveryRate = recoveryRate;
    }
    
    public final int getBarrier() {
        return barrier;
    }

    public final void setBarrier(final int barrier) {
        this.barrier = barrier;
    }

    public final int getFieldLimit() {
        return fieldLimit;
    }

    public final void setFieldLimit(final int fieldLimit) {
        this.fieldLimit = fieldLimit;
    }

    public final String getFieldType() {
        return fieldType;
    }

    public final void setFieldType(final String fieldType) {
        this.fieldType = fieldType;
    }

    public final void setCreateMobInterval(final short createMobInterval) {
        this.createMobInterval = createMobInterval;
    }

    public final void setTimeLimit(final int timeLimit) {
        this.timeLimit = timeLimit;
    }

    public final void setMapName(final String mapName) {
        this.mapName = mapName;
    }

    public final String getMapName() {
        return mapName;
    }

    public final String getStreetName() {
        return streetName;
    }

    public final void setChangeableMobOrigin(MapleCharacter d) {
        this.changeMobOrigin = new WeakReference<MapleCharacter>(d);
    }

    public final MapleCharacter getChangeableMobOrigin() {
        if (changeMobOrigin == null) {
            return null;
        }
        return changeMobOrigin.get();
    }

    public final void setFirstUserEnter(final String onFirstUserEnter) {
        this.onFirstUserEnter = onFirstUserEnter;
    }

    public final void setUserEnter(final String onUserEnter) {
        this.onUserEnter = onUserEnter;
    }
    
    public final void setFieldScript(final String fieldScript) {
        this.fieldScript = fieldScript;
    }

    public final boolean hasClock() {
        return clock;
    }

    public final void setClock(final boolean hasClock) {
        this.clock = hasClock;
    }

    public final boolean isTown() {
        return town;
    }

    public final void setTown(final boolean town) {
        this.town = town;
    }

    public final boolean allowPersonalShop() {
        return personalShop;
    }

    public final void setPersonalShop(final boolean personalShop) {
        this.personalShop = personalShop;
    }

    public final void setStreetName(final String streetName) {
        this.streetName = streetName;
    }

    public final void setEverlast(final boolean everlast) {
        this.everlast = everlast;
    }

    public final boolean getEverlast() {
        return everlast;
    }

    public final int getHPDec() {
        return decHP;
    }

    public final void setHPDec(final int delta) {
        decHP = (short) delta;
    }

    public final int getHPDecProtect() {
        return protectItem;
    }

    public final void setHPDecProtect(final int delta) {
        this.protectItem = delta;
    }

    public final int getCurrentPartyId() {
        mutex.lock();
        try {
            final Iterator<MapleCharacter> ltr = characters.iterator();
            MapleCharacter chr;
            while (ltr.hasNext()) {
                chr = ltr.next();
                if (chr.getPartyId() != -1) {
                    return chr.getPartyId();
                }
            }
            return -1;
        } finally {
            mutex.unlock();
        }
    }

   public final void addMapObject(final MapleMapObject mapobject) {
        mutex.lock();
        int newoid;
        try {
            newoid = ++runningOid;
            mapobject.setObjectId(newoid);
            mapobjects.put(newoid, mapobject);
        } finally {
            mutex.unlock();
        }
        if (mapobject.getType() == MapleMapObjectType.ITEM) {
            droppedItems.add(mapobject.getObjectId());
        }

    }

   private void spawnMapObjectList(final List<ObtacleAtom> mapobjects, final DelayedPacketCreation packetbakery) {
       for (MapleMapObject mapobject : mapobjects) {
           addMapObject(mapobject);
       }
       // 맵오브젝트를 싹다 추가하여 objectid를 건져놓는다
       final Iterator<MapleCharacter> ltr = characters.iterator();
       MapleCharacter chr;
       while (ltr.hasNext()) {
//       for (MapleMapObject obj : this.mapobjects.get(MapleMapObjectType.PLAYER).values()) {
    	   chr = ltr.next();
           packetbakery.sendPackets(chr.getClient());
           for (MapleMapObject mapobject2 : mapobjects) {
               chr.addVisibleMapObject(mapobject2);
           }
       }
//       }
   }
    private void spawnAndAddRangedMapObject(final MapleMapObject mapobject, final DelayedPacketCreation packetbakery, final SpawnCondition condition) {
        mutex.lock();
        try {
            runningOid++;
            mapobject.setObjectId(runningOid);
            mapobjects.put(runningOid, mapobject);

            final Iterator<MapleCharacter> ltr = characters.iterator();
            MapleCharacter chr;
            while (ltr.hasNext()) {
                chr = ltr.next();
                if (condition == null || condition.canSpawn(chr)) {
                    if (chr.getPosition().distanceSq(mapobject.getPosition()) <= GameConstants.maxViewRangeSq()) {
                        packetbakery.sendPackets(chr.getClient());
                        chr.addVisibleMapObject(mapobject);
                    }
                }
            }
        } finally {
            mutex.unlock();
        }
    }
    
    public final List<MapleMist> getMistInRange(final Point from, final double rangeSq, final List<MapleMapObjectType> MapObject_types) {
        final List<MapleMapObject> ret = new LinkedList<MapleMapObject>();
        final List<MapleMist> ret2 = new ArrayList<MapleMist>();
        mutex.lock();
        try {
            final Iterator<MapleMapObject> ltr = mapobjects.values().iterator();
            MapleMapObject obj;
            while (ltr.hasNext()) {
                obj = ltr.next();
                if (MapObject_types.contains(obj.getType())) {
                    if (from.distanceSq(obj.getPosition()) <= rangeSq) {
                        ret.add(obj);
                    }
                }
            }
        } finally {
            mutex.unlock();
        }
        return ret2;
    }
    
    public final List<MapleSummon> getSummonInRange(final Point from, final double rangeSq, final List<MapleMapObjectType> MapObject_types) {
        final List<MapleMapObject> ret = new LinkedList<MapleMapObject>();
        final List<MapleSummon> ret2 = new ArrayList<MapleSummon>();
        mutex.lock();
        try {
            final Iterator<MapleMapObject> ltr = mapobjects.values().iterator();
            MapleMapObject obj;
            while (ltr.hasNext()) {
                obj = ltr.next();
                if (MapObject_types.contains(obj.getType())) {
                    if (from.distanceSq(obj.getPosition()) <= rangeSq) {
                        ret.add(obj);
                    }
                }
            }
        } finally {
            mutex.unlock();
        }
        return ret2;
    }
    
    public final List<MapleRune> getRuneInRange(final Point from, final double rangeSq, final List<MapleMapObjectType> MapObject_types) {
        final List<MapleMapObject> mapobjects = this.getMapObjectsInRange(from, rangeSq);
        final List<MapleRune> runes = new ArrayList<MapleRune>();
        for (int i = 0; i < mapobjects.size(); i++) {
            if (mapobjects.get(i).getType() == MapleMapObjectType.RUNE) {
                runes.add((MapleRune) mapobjects.get(i));
            }
        }
        return runes;
    }

    public final MapleMapObject getMapObject(final int oid) {
        return mapobjects.get(oid);
    }
    
    public final MapleMapObject getMapObject(int oid, MapleMapObjectType type) {
        mutex.lock();
        try {
            return mapobjects.get(oid);
        } finally {
            mutex.unlock();
        }
    }
    
    public final void checkClockContact(final MapleCharacter chr, final MapleMonster monster) {
        final Point m_Pos = monster.getPosition();
        if (this.getFieldType().equals("63")) {
            for (MapleMapObject object : this.getMapObjectsInRange(chr.getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.MIST))) {
                final MapleMist clock = (MapleMist) object;
                if (clock.isClock()) {
                    Rectangle rect = new Rectangle(clock.getBox().x, clock.getBox().y, clock.getBox().width, clock.getBox().height);
                    if (rect.intersects(monster.getRectangle())) {
                        clock.setUsed(true);
                        chr.send(UIPacket.showInfo("반반이 시간을 움직임"));
                        return;
                    }
                }
            }
        }
    }

    public final void removeMapObject(final int num) {
        mutex.lock();
        try {
            mapobjects.remove(Integer.valueOf(num));
        } finally {
            mutex.unlock();
        }
        if (droppedItems.contains(Integer.valueOf(num))) {
            droppedItems.remove(Integer.valueOf(num));
        }

    }

    public final void removeMapObject(final MapleMapObject obj) {
        mutex.lock();
        try {
            if (mapobjects.containsKey(Integer.valueOf(obj.getObjectId()))) {
                mapobjects.remove(Integer.valueOf(obj.getObjectId()));
            }
        } finally {
            mutex.unlock();
        }
        if (obj.getType() == MapleMapObjectType.ITEM) {
            if (droppedItems.contains(Integer.valueOf(obj.getObjectId()))) {
                droppedItems.remove(Integer.valueOf(obj.getObjectId()));
            }
        }
    }

    public final Point calcPointMaple(final Point initial) {
        final MapleFoothold fh = footholds.findMaple(initial);
        if (fh == null) {
//            System.err.println("[오류] 위치를 구하던 중 바닥의 풋홀드를 구하는데 실패했습니다.");
            return null;
        }
        int dropY = fh.getY1();
        if (!fh.isWall() && fh.getY1() != fh.getY2()) {
            final double s1 = Math.abs(fh.getY2() - fh.getY1());
            final double s2 = Math.abs(fh.getX2() - fh.getX1());
            if (fh.getY2() < fh.getY1()) {
                dropY = fh.getY1() - (int) (Math.cos(Math.atan(s2 / s1)) * (Math.abs(initial.x - fh.getX1()) / Math.cos(Math.atan(s1 / s2))));
            } else {
                dropY = fh.getY1() + (int) (Math.cos(Math.atan(s2 / s1)) * (Math.abs(initial.x - fh.getX1()) / Math.cos(Math.atan(s1 / s2))));
            }
        }
        return new Point(initial.x, dropY);
    }

    public final Point calcDropPos(final Point initial, final Point fallback) {
        final Point ret = calcPointMaple(new Point(initial.x, initial.y - 50));
        if (ret == null) {
            return fallback;
        }
        return ret;
    }

    private void dropFromMonster(final MapleCharacter chr, final MapleMonster mob) {
        if (mapid == 992010000 || mapid == 992018000 || mapid == 992030000 || mapid == 992040000) {
            return;
        }
        final ItemInformation ii = ItemInformation.getInstance();
        final byte droptype = (byte) (mob.getStats().isExplosiveReward() ? 3 : mob.getStats().isFfaLoot() ? 2 : chr.getParty() != null ? 1 : 0);
        final int mobpos = mob.getTruePosition().x, cmServerrate = ChannelServer.getInstance(channel).getMesoRate(), chServerrate = ChannelServer.getInstance(channel).getDropRate(), caServerrate = 10;
        Item idrop;
        Item te;
        byte d = 1;
        Point pos = new Point(0, mob.getTruePosition().y);
        double showdown = 100.0;
        final MonsterStatusEffect mse = mob.getBuff(MonsterStatus.SHOWDOWN);
        final MapleMonsterProvider mi = MapleMonsterProvider.getInstance();
        final List<MonsterDropEntry> derp = mi.retrieveDrop(mob.getId());
        final MapleClient c = null;
        if (derp == null) {
            return;
        }
        final List<MonsterDropEntry> dropEntry = new ArrayList<MonsterDropEntry>(derp);
        Collections.shuffle(dropEntry);
        boolean mesoDropped = false;
        int ce = 0, maxdrop = -1;
        if ((mob.getStats().isBoss()) && (ServerConstants.useBossMaxDrop)) {
            maxdrop = ServerConstants.bossMaxDrop;
        } else if ((!mob.getStats().isBoss()) && (ServerConstants.useMaxDrop)) {
            maxdrop = ServerConstants.maxDrop;
        }
        for (final MonsterDropEntry de : dropEntry) {
            if (de.itemId == mob.getStolen()) {
                continue;
            }
            if (GameConstants.getInventoryType(de.itemId) == MapleInventoryType.EQUIP || de.itemId == 4000244) {
                ce = (int) ((de.chance * chServerrate) / 10);
            } else {
                ce = (int) (de.chance * chServerrate);
            }
            if(de.itemId == 4000245) {
                        return;
            }
            if ((Randomizer.nextInt(999999) < de.chance * chServerrate * (showdown / 100.0D)) && ((maxdrop == -1) || (d < maxdrop + 1))) {
                if (mesoDropped && droptype != 3 && de.itemId == 0) {
                    continue;
                }
                if (de.itemId / 10000 == 238 && !mob.getStats().isBoss()) {
                    continue;
                }
                if (droptype == 3) {
                    pos.x = (mobpos + (d % 2 == 0 ? (40 * (d + 1) / 2) : -(40 * (d / 2))));
                } else {
                    pos.x = (mobpos + ((d % 2 == 0) ? (25 * (d + 1) / 2) : -(25 * (d / 2))));
                }
                if (de.itemId == 0) {
                    int mesos = Randomizer.nextInt(1 + Math.abs(de.Maximum - de.Minimum)) + de.Minimum;
                    if (mesos > 0) {
                        spawnMobMesoDrop((int) (mesos * cmServerrate), calcDropPos(pos, mob.getTruePosition()), mob, chr, false, droptype);
                        mesoDropped = true;
                    }
                } else {
                    if (GameConstants.getInventoryType(de.itemId) == MapleInventoryType.EQUIP) {
                        idrop = ii.randomizeStats((Equip) ii.getEquipById(de.itemId));
                        if (GameConstants.환생의불꽃아이템(idrop.getItemId())) {
                           idrop = (Item) InventoryHandler.환생의불꽃((Equip)idrop);
                        }
                    } else {
                        final int range = Math.abs(de.Maximum - de.Minimum);
                        idrop = new Item(de.itemId, (byte) 0, (short) (de.Maximum != 1 ? Randomizer.nextInt(range <= 0 ? 1 : range) + de.Minimum : 1), (byte) 0);
                    }
                        spawnMobDrop(idrop, calcDropPos(pos, mob.getTruePosition()), mob, chr, droptype, de.questid);
                }
                d++;
            }
        }
        final List<MonsterGlobalDropEntry> globalEntry = new ArrayList<MonsterGlobalDropEntry>(mi.getGlobalDrop());
        Collections.shuffle(globalEntry);
        final int cashz = (int) ((mob.getStats().isBoss() && mob.getStats().getHPDisplayType() == 0 ? 20 : 1) * caServerrate);
        final int cashModifier = (int) (mob.getMobExp() / 1000 + mob.getMobMaxHp() / 20000); //no rate
//        int differenceXd = chr.getLevel() - mob.getStats().getLevel();
        for (final MonsterGlobalDropEntry de : globalEntry) {
			if (getChannel() == 1 || getChannel() == 10 || getChannel() == 11 || getChannel() == 12
					|| getChannel() == 13 || getChannel() == 14 || getChannel() == 15 || getChannel() == 16
					|| getChannel() == 17 || getChannel() == 18 || getChannel() == 19) { // buffed
//			System.out.println("buffed channel");
            if (Randomizer.nextInt(999999) < de.chance) {
                if (de.itemId != 0) {
                    if (droptype == 3) {
                        pos.x = (mobpos + (d % 2 == 0 ? (40 * (d + 1) / 2) : -(40 * (d / 2))));
                    } else {
                        pos.x = (mobpos + ((d % 2 == 0) ? (25 * (d + 1) / 2) : -(25 * (d / 2))));
                    }
                    if (GameConstants.getInventoryType(de.itemId) == MapleInventoryType.EQUIP) {
                        idrop = ii.randomizeStats((Equip) ii.getEquipById(de.itemId));
                        if (GameConstants.환생의불꽃아이템(idrop.getItemId())) {
                           idrop = InventoryHandler.환생의불꽃((Equip)idrop);
                        }
                    } else {
                        idrop = new Item(de.itemId, (byte) 0, (short) (de.Maximum != 1 ? Randomizer.nextInt(de.Maximum - de.Minimum) + de.Minimum : 1), (byte) 0);
                    }
                    if (de.itemId == 4000421 && !chr.haveItem(2430492)) {
                        return;
                    }
                    if (de.itemId == 2022165) {
                        return;
                    }
                    if ((de.itemId == 4001513 && !(mob.getStats().getLevel() >= 105 && mob.getStats().getLevel() <= 114)) || (de.itemId == 4001515 && !(mob.getStats().getLevel() >= 115 && mob.getStats().getLevel() <= 159)) || (de.itemId == 4001521 && !(mob.getStats().getLevel() >= 160 && mob.getStats().getLevel() <= 250))) {
                        return;
                    }
                    spawnMobDrop(idrop, calcDropPos(pos, mob.getTruePosition()), mob, chr, droptype, de.questid);
                    d++;
                } else {
                chr.modifyCSPoints(1, Randomizer.rand(50, 1000), true);
                }
            }
			}
        }
    }

    private final void killMonster(final MapleMonster monster) { // For mobs with removeAfter
        spawnedMonstersOnMap.decrementAndGet();
        monster.setHp(0);
        monster.spawnRevives(this);
        broadcastMessage(MobPacket.killMonster(monster.getObjectId(), 1, GameConstants.isAswanMap(mapid)));
        removeMapObject(monster);
    }

    public final void killMonster(final MapleMonster monster, final MapleCharacter chr, final boolean withDrops, final boolean second, final byte animation) {

        if (chr.getBuffedValue(BuffStats.RIVIBE) != null) {
             ISkill rp = SkillFactory.getSkill(32111006);
             SkillStatEffect effect = rp.getEffect(chr.getSkillLevel(rp));
             if (effect.makeChanceResult()) {
                 final MapleSummon reaper = new MapleSummon(chr,32111006,effect.getX(),monster.getPosition(),SummonMovementType.WALK_STATIONARY);
                 chr.getMap().spawnSummon(reaper, false, effect.getDuration());
             }
         }
        if ((monster.getId() == 8810018 || monster.getId() == 8810122) && !second) {
            MapTimer.getInstance().schedule(new Runnable() {
                @Override
                public void run() {
                    killMonster(monster, chr, true, true, (byte) 1);
                    killAllMonsters(true);
                }
            }, 3000);
            return;
        }

        MapleCharacter dropOwner = monster.killBy(chr);
        Equip target;
        target = (Equip) chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11);
        
         if (GameConstants.isZero(chr.getJob())) { //WP 흡수
             int wp = 1;
             chr.gainWP(wp);
             chr.send(MainPacketCreator.ZeroUpdate(chr));
             chr.send(MainPacketCreator.absorbingWP(monster.getObjectId(), chr.addWP(wp), wp, chr));
             chr.send(MainPacketCreator.ZeroWP(wp));
        }
        if (target.getSoulName() != 0) { // 소울웨폰 게이지
            IItem toDrop;
            toDrop = new Item(4001536, (byte) 1, (short) 1, (byte) 1);
            SoulGauge(monster, chr, toDrop, monster.getPosition());
            chr.checkSoulState(false);
        }
         
        if ((chr.getSkillLevel(4221013) > 0) && (chr.KillingPoint < 5)) {
          chr.KillingPoint += 1;
          chr.send(MainPacketCreator.KillingPoint(chr.KillingPoint));
        }
        
        broadcastMessage(MobPacket.killMonster(monster.getObjectId(), animation, GameConstants.isAswanMap(getId())));
        spawnedMonstersOnMap.decrementAndGet();
        removeMapObject(monster);
        
        if (monster.getBuffToGive() > -1) {
            final int buffid = monster.getBuffToGive();
            final SkillStatEffect buff = ItemInformation.getInstance().getItemEffect(buffid);
            for (final MapleMapObject mmo : characters) {
                final MapleCharacter c = (MapleCharacter) mmo;
                if (c.isAlive()) {
                    buff.applyTo(c);
                    switch (monster.getId()) {
                        case 8810018:
                        case 8810122:
                        case 8820001:
                        case 8820101:
                            c.getClient().getSession().write(MainPacketCreator.showOwnBuffEffect(buffid, 11)); // HT nine spirit
                            broadcastMessage(c, MainPacketCreator.showBuffeffect(c.getId(), c.getLevel(), buffid, 11), false); // HT nine spirit
                            break;
                    }
                }
            }
        }
        final int mobid = monster.getId();

        if (mobid == 8810018) {
            chr.setExpeditionKilledBoss(true);
            WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, "수많은 도전 끝에 혼테일을 격파한 원정대여! 그대들이 진정한 리프레의 영웅이다!").getBytes());
        } else if (mobid == 8810122) { // Horntail
            chr.setExpeditionKilledBoss(true);
            WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, "수많은 도전 끝에 카오스 혼테일을 격파한 원정대여! 그대들이 진정한 리프레의 영웅이다!").getBytes());
        } else if (mobid == 8820001) {
            chr.setExpeditionKilledBoss(true);
            WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, "지치지 않는 열정으로 핑크빈을 물리친 원정대여! 그대들이 진정한 시간의 승리자다!").getBytes());
        } else if (mobid == 8820101) {
            chr.setExpeditionKilledBoss(true);
            WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, "지치지 않는 열정으로 카오스 핑크빈을 물리친 원정대여! 그대들이 진정한 시간의 승리자다!").getBytes());
        } else if (mobid == 8850011) {
            chr.setExpeditionKilledBoss(true);
            WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, "미래에서 여제 시그너스를 물리친 원정대여! 그대들이 진정한 시간의 승리자다!").getBytes());
        } if (mobid >= 8240000 && mobid <= 8249999) {
            for (MapleCharacter pchr : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
        if (mobid == 8240097) {
                pchr.warp(pchr.getMapId() + 20);
                //spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8240098), new Point(-150, -16));
        } else if (mobid == 8240098) {
                pchr.warp(pchr.getMapId() + 20);
               // spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8240099), new Point(0, -16));
        } else if (mobid == 8240099) {
            killAllMonsters(true);
            WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[오르카의 메시지] : 겔리메르 녀석 가만두지 않겟어!").getBytes());
        }
        }
        } else if (mobid >= 8800003 && mobid <= 8800010) {
            boolean makeZakReal = true;
            for (final MapleMapObject mons : getAllMonster()) {
                MapleMonster mob = (MapleMonster) mons;
                if (mob.getId() >= 8800003 && mob.getId() <= 8800010) {
                    makeZakReal = false;
                    break;
                }
            }
            if (makeZakReal) {
                for (final MapleMapObject mons : getAllMonster()) {
                    MapleMonster mob = (MapleMonster) mons;
                    if (mob.getId() == 8800000) {
                        final Point pos = mons.getPosition();
                        this.killAllMonsters(true);
                        spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8800000), pos);
                        break;
                    }
                }
            }
        } else if (mobid >= 8800103 && mobid <= 8800110) {
            boolean makeZakReal = true;
            for (final MapleMapObject mons : getAllMonster()) {
                MapleMonster mob = (MapleMonster) mons;
                if (mob.getId() >= 8800103 && mob.getId() <= 8800110) {
                    makeZakReal = false;
                    break;
                }
            }
            if (makeZakReal) {
                for (final MapleMapObject mons : getAllMonster()) {
                    MapleMonster mob = (MapleMonster) mons;
                    if (mob.getId() == 8800100) {
                        final Point pos = mons.getPosition();
                        this.killAllMonsters(true);
                        spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8800100), pos);
                        break;
                    }
                }
            }
        } else if (mobid == 8820008 || mobid == 8820108) { //wipe out statues and respawn
            for (final MapleMapObject mmo : getAllMonster()) {
                MapleMonster mons = (MapleMonster) mmo;
                if (mons.getLinkOid() != monster.getObjectId()) {
                    killMonster(mons, chr, false, false, animation);
                }
            }
        } else if (mobid >= 8820010 && mobid <= 8820014) {
            for (final MapleMapObject mmo : getAllMonster()) {
                MapleMonster mons = (MapleMonster) mmo;
                if (mons.getId() != 8820000 && mons.getId() != 8820001 && mons.getObjectId() != monster.getObjectId() && mons.isAlive() && mons.getLinkOid() == monster.getObjectId()) {
                    killMonster(mons, chr, false, false, animation);
                }
            }
        } else if (mobid >= 8820110 && mobid <= 8820114) {
            for (final MapleMapObject mmo : getAllMonster()) {
                MapleMonster mons = (MapleMonster) mmo;
                if (mons.getId() != 8820100 && mons.getId() != 8820101 && mons.getObjectId() != monster.getObjectId() && mons.isAlive() && mons.getLinkOid() == monster.getObjectId()) {
                    killMonster(mons, chr, false, false, animation);
                }
            }
        } else if (mobid >= 8810102 && mobid <= 8810109) {
            boolean notyetdead = false;
            for (int i = 8810102; i < 8810109; i++) {
                if (getMonsterById(i) != null) {
                    notyetdead = true;
                    break;
                }
            }
            if (!notyetdead) {
                killMonster(getMonsterById(8810122), chr, false, false, (byte) 0);
            }
        } else if (mobid >= 8850000 && mobid <= 8850003) {
            spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(mobid + 1), new Point(-363, 100));
        } else if (mobid == 8850004) {
            spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8850012), new Point(-363, 100));
        }
        if (mobid == 8800002) { //자쿰
            chr.setExpeditionKilledBoss(true);
        }
        if (mobid == 8800102) { //카오스자쿰
            chr.setExpeditionKilledBoss(true);
        }
        if (mobid == 8840000) { //반레온
            chr.setExpeditionKilledBoss(true);
        } 
        switch(mapid) {
            case 105200130:
            case 105200200:
            case 105200300:
            case 105200400:
            case 105200140:
            case 105200210:
            case 105200313:
            case 105200411:
                if(chr.getClient().getChannelServer().getMapFactory().getMap(mapid).getAllMonster().size() == 0) {
                    broadcastMessage(MainPacketCreator.showEffect("Gstar/ClearS"));
                }
        }
        if(monster.getId() == 8920100) {
            spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8920101), monster.getPosition());
        } else if (monster.getId() == 8920101) {
            spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8920102), monster.getPosition());
        } else if (monster.getId() == 8920102) {
            spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8920103), monster.getPosition());
        }
        if (monster.getId() == 8900100) {
            spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8900101), monster.getPosition());
        } else if (monster.getId() == 8900101) {
            spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8900102), monster.getPosition());
        }
        
        if (monster.getId() == 9300580 || monster.getId() == 9300581 || monster.getId() == 9300582 || monster.getId() == 9300583 || monster.getId() == 9300584 || monster.getId() == 9300585 || monster.getId() == 9300586 || monster.getId() == 9300587) {
            미스틱혼테일 ++;
        }
        
        if (monster.getId() == 8810102 || monster.getId() == 8810103 || monster.getId() == 8810104 || monster.getId() == 8810105 || monster.getId() == 8810106 || monster.getId() == 8810107 || monster.getId() == 8810108 || monster.getId() == 8810109) {
            카오스혼테일 ++;
        }
        
        if (monster.getId() == 8910001 || monster.getId() == 8900102 || monster.getId() == 8920103 || monster.getId() == 8930100) {
            broadcastMessage(MainPacketCreator.showEffect("killing/clear"));
            broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
            int i = monster.getId() == 8930100 ? 7 + Randomizer.nextInt(13) : monster.getId() == 8920103 ? 5 + Randomizer.nextInt(4) : monster.getId() == 8900102 ? 3 + Randomizer.nextInt(4) : 6 + Randomizer.nextInt(9);
            for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
               partymem.gainSpirit(4310064, i);
           }        
            broadcastMessage(UIPacket.getItemTopMsg(4310064, "이그드라실 룬의 돌을 " + i + "개 획득 하셨습니다."));
        }
        
        if (미스틱혼테일 == 8) {
            MapleMonster mob1 = MapleLifeProvider.getMonster(9300588);
            spawnMonsterOnGroundBelow(mob1, monster.getPosition());
            int itemid = 4033303;
	    this.killMonster(4033303);
            this.killAllMonsters(true);
            broadcastMessage(MainPacketCreator.showEffect("killing/clear"));
            broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
            broadcastMessage(UIPacket.showInfo("문 박사 : 마지막 타격은 <" + chr.getName() + "> 님이 하셨습니다."));
            chr.dropShowInfo("문 박사 : 마지막 타격 보너스로  3 미스틱 포인트 를 획득 하셨습니다.");
            chr.Message(5,"문 박사 : 마지막 타격 보너스로  3 미스틱 포인트 를 획득 하셨습니다.");
            chr.addMistic(8);
            for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
               partymem.addMistic(5);
               partymem.gainSpirit(itemid, 1);
               partymem.dropShowInfo("문 박사 : 5 미스틱 포인트를 획득 하셨습니다.");
               partymem.getClient().getSession().write(MainPacketCreator.getNPCTalk(9073025, (byte) 0, "보스를 훌륭히 처치해 주셨군요\r\n보스에게서 나온 전리품 #i" + itemid + "##z" + itemid + "##k을(를) 지급해 드렸습니다.", "00 00", (byte) 0));
           }
        }
        
        if (카오스혼테일 == 8) {
            MapleMonster mob1 = MapleLifeProvider.getMonster(8810122);
            spawnMonsterOnGroundBelow(mob1, monster.getPosition());
            killAllMonsters(true);
        }
        
        if(chr.getMapId() == 931050800 || chr.getMapId() == 931050810 || chr.getMapId() == 931050820) {
             if (monster.getId() == 9300563 || monster.getId() == 9300594 || monster.getId() == 9300600 || monster.getId() == 9300608 || monster.getId() == 9300588) {
                  int itemid = 0;
                  switch(monster.getId()) {
                      case 9300563:
                          itemid = 4033302;
                          break;
                      case 9300594:
                          itemid = 4033311;
                          break;
                      case 9300600:
                          itemid = 4033304;
                          break;
                      case 9300608:
                          itemid = 4033312;
                          break;
                      case 9300588:
                          itemid = 4033303;
                          break;
                      default:
                  }
                  this.killAllMonsters(true);
                  broadcastMessage(MainPacketCreator.showEffect("killing/clear"));
                  broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
                  broadcastMessage(UIPacket.showInfo("문 박사 : 마지막 타격은 <" + chr.getName() + "> 님이 하셨습니다."));
                  chr.dropShowInfo("문 박사 : 마지막 타격 보너스로  3 미스틱 포인트 를 획득 하셨습니다.");
                  chr.Message(5,"문 박사 : 마지막 타격 보너스로  3 미스틱 포인트 를 획득 하셨습니다.");
                  chr.addMistic(8);
              for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                 partymem.addMistic(5);
                 partymem.gainSpirit(itemid, 1);
                 partymem.dropShowInfo("문 박사 : 5 미스틱 포인트를 획득 하셨습니다.");
                 partymem.getClient().getSession().write(MainPacketCreator.getNPCTalk(9073025, (byte) 0, "보스를 훌륭히 처치해 주셨군요\r\n보스에게서 나온 전리품 #i" + itemid + "##z" + itemid + "##k을(를) 지급해 드렸습니다.", "00 00", (byte) 0));
               }
       }
    }
        
        if (mapid == 910141101) {
            if (베타구출C[0] == 11 && 베타구출C[1] != 11) {
                베타구출C[1] ++;
                if (베타구출C[1] == 11) {
                    broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
                    broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
                    베타구출(chr,3);
                }
            } else if (베타구출C[0] != 11 && 베타구출C[1] == 0) {
                베타구출C[0] ++;
                if (베타구출C[0] == 11) {
                    broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
                    broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
                    베타구출(chr,2);
                }
            } else if (monster.getId() == 9300808) {
                베타구출 = true;
                broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
                broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
                broadcastMessage(MainPacketCreator.getNPCTalk(10201, (byte) 0, "이걸로 모두 처치한건가, 빨리 베타의 상태를 확인 해봐야겠어", "00 00", (byte) 2));
            }
        }
        
        if (보스레이드 > 0 && !monster.isFake() && monster.getStats().isRealBoss() && monster.getId() != 8500001 && monster.getId() != 8800000 && monster.getId() != 8800001 && monster.getId() != 8800100 && monster.getId() != 8800101) {
                if (보스레이드 >= 4) {
                    broadcastMessage(MainPacketCreator.getClock(5));
                    broadcastMessage(UIPacket.detailShowInfo("보스레이드 클리어를 축하드립니다. 잠시후 마을로 이동됩니다.", false));
                    broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
                    broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
                      {
                          EtcTimer tMan = EtcTimer.getInstance();
                          tMan.schedule(new Runnable() {
                          @Override
                            public void run() {
                                for (MapleCharacter pchr : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                                    pchr.warp(100000000);
                                    pchr.addboss(보스레이드난이도 == 4 ? 500 : 보스레이드난이도 == 3 ? 100 : 보스레이드난이도 == 2 ? 70 : 50);
                                    pchr.send(MainPacketCreator.sendHint("#e#r[보스레이드]#n#k " + (보스레이드난이도 == 4 ? 100 : 보스레이드난이도 == 3 ? 70 : 보스레이드난이도 == 2 ? 50 : 30) + " 포인트를 획득 하셨습니다.", 250, 5));
                                }
                            }
                          }, 5000);
                      }
            } else {
                broadcastMessage(UIPacket.detailShowInfo("잠시후 보스몬스터가 등장합니다. 준비해 주십시오", false));
                broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
                broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
                보스레이드(0,4000,7000);
            }
        }
        
        크로스헌터(monster,chr);
        
        if(mapid == 940021000) {
            디멘션인베이드진행(1,chr,monster);
        }
        
        if(GameConstants.getTheSidTower(mapid) > 0) {
           TheSidMain(monster);
        } 
        if (withDrops) {
                if (dropOwner == null) {
                    dropOwner = chr;
                }
                dropFromMonster(dropOwner, monster);
        }
        
        if (!this.isEliteBossMap() && !monster.isEliteMonster() && !monster.isEliteBoss() && !monster.getStats().isBoss() && monster.getStats().getLevel() - 20 <= chr.getLevel() && chr.getLevel() <= monster.getStats().getLevel() + 20) {
            SetEliteMobCommonCount(this.EliteMobCommonCount + 1);
        } else if (!this.isEliteBossMap() && monster.isEliteMonster()) {
            SetEliteMobCount(this.EliteMobCount + 1);
            if (1 <= EliteMobCount() && EliteMobCount() <= 14) {
                broadcastMessage(MainPacketCreator.startMapEffect("어두운 기운이 사라지지 않아 이곳을 음산하게 만들고 있습니다.", 5120124, true));
            } else if (15 <= EliteMobCount() && EliteMobCount() <= 20) {
                broadcastMessage(MainPacketCreator.startMapEffect("이곳이 어두운 기운으로 가득차 곧 무슨 일이 일어날 듯 합니다.", 5120124, true));
            }
            monster.setEliteMonster(false);
            timeAllPlayer(this);
        } else if (monster.isEliteBoss()) { //보스 퇴치시
            setEliteBossMap(false);
            CancelEliteBossAlarm(this, chr);
            setEliteBossRewardMap(true);
            broadcastMessage(UIPacket.showSpecialMapEffect(3, 0, "Bgm36.img/HappyTimeShort", "Map/Map/Map9/924050000.img/back"));
            final String msg1 = "착한 모험가들에게 선물을 주지! 내가 던지는 아이템을 잘 받아 봐!";
            tools.Timer.ShowTimer.getInstance().schedule(new Runnable() {
                @Override
                public final void run() {
                    broadcastMessage(MainPacketCreator.startMapEffectTime(msg1, 0x92, 4000));
                    final MapleMonster mob1 = MapleLifeProvider.getMonster(8220028);
                    final MapleMonster mob2 = MapleLifeProvider.getMonster(8220028);
                    final MapleMonster mob3 = MapleLifeProvider.getMonster(8220028);
                    final MapleMonster mob4 = MapleLifeProvider.getMonster(8220028);
                    final MapleMonster[] mobs = {mob1, mob2, mob3, mob4};
                    final OverrideMonsterStats ostats1 = new OverrideMonsterStats();
                    ostats1.setOFirstAttack(false);
                    final OverrideMonsterStats ostats2 = new OverrideMonsterStats();
                    ostats2.setOFirstAttack(false);
                    final OverrideMonsterStats ostats3 = new OverrideMonsterStats();
                    ostats3.setOFirstAttack(false);
                    final OverrideMonsterStats ostats4 = new OverrideMonsterStats();
                    ostats4.setOFirstAttack(false);
                    mob1.setOverrideStats(ostats1);
                    mob2.setOverrideStats(ostats2);
                    mob3.setOverrideStats(ostats3);
                    mob4.setOverrideStats(ostats4);
                    for (int i = 0; i < 4; i++) {
                        spawnMonster(mobs[i], -2);
                    }
                    final List<Integer> specialCount = new ArrayList<>();
                    final Timer timer = new Timer();
                    timer.schedule(new TimerTask() {
                        @Override
                        public void run() {
                            for (int i = 0; i < mobs.length; i++) {
                                int Random = Randomizer.rand(0, 62);
                                int itemid = 0;
                                if (Random >= 0 && Random <= 10) {
                                    itemid = 2432391;
                                } else if (Random >= 11 && Random <= 20) {
                                    itemid = 2432392;
                                } else if (Random >= 21 && Random <= 30) {
                                    itemid = 2432393;
                                } else if (Random >= 31 && Random <= 40) {
                                    itemid = 2432394;
                                } else if (Random >= 41 && Random <= 50) {
                                    itemid = 2432395;
                                } else if (Random >= 51 && Random <= 55) {
                                    itemid = 2432396;
                                } else if (Random >= 56 && Random <= 60) {
                                    itemid = 2432397;
                                } else if (Random >= 61 && Random <= 62) {
                                    if (specialCount.size() < 3) {
                                        itemid = 2432398;
                                        specialCount.add(itemid);
                                    }
                                }
                                MapleMonster dropper = getMonsterByOid(mobs[i].getObjectId());
                                IItem drop = new Item(itemid, (byte) 0, (short) 1, (byte) 0);

                                spawnItemDrop(dropper, chr, drop, dropper.getPosition(), true, true, true, true, 0x96, Randomizer.rand(0x37, 0xC7));
                            }
                        }

                    }, 500, 500);
                    broadcastMessage(MainPacketCreator.getMilliClock(22000));
                    MapTimer.getInstance().schedule(new Runnable() {
                        @Override
                        public final void run() {
                            setEliteBossRewardMap(false);
                            broadcastMessage(UIPacket.cancelSpecialMapEffect());
                            broadcastMessage(MainPacketCreator.playSound("eliteMonster/gameOver"));
                            List<MapleMapObject> items = getMapObjectsInRange(chr.getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.ITEM));
                            for (MapleMapObject i : items) {
                                removeMapObject(i);
                                broadcastMessage(MainPacketCreator.removeItemFromMap(i.getObjectId(), 0, 0), i.getPosition());
                                //}
                            }

                        }
                    }, 23000);
                    /*
                     2432391 - 경험치(소)
                     2432392 - 경험치(대)
                     2432393 - 메소(소)
                     2432394 - 메소(대)
                     2432395 - 포션
                     2432396 - 방어구
                     2432397 - 무기
                     2432398 - 희귀 아이템
                     */
                }
            }, 7000L);
        }
        if (this.EliteMobCommonCount == 200 && this.EliteMobCount < 5) {
            SetEliteMobCommonCount(0);
            MapleMonster elite = makeEliteMonster(monster);
            spawnEliteMonster(elite);
            broadcastMessage(UIPacket.playSpecialMapSound("Field.img/eliteMonster/Regen"), chr.getPosition());
            broadcastMessage(MainPacketCreator.startMapEffect("어두운 기운과 함께 강력한 몬스터가 출현합니다.", 5120124, true));
            timeAllPlayer(this);
        }
       if (this.EliteMobCommonCount == 200 && this.EliteMobCount >= 8) { //보스 소환
            SetEliteMobCommonCount(0);
            SetEliteMobCount(0);
            setEliteBossMap(true);
            broadcastMessage(UIPacket.showSpecialMapEffect(2, 0, "Bgm36.img/RoyalGuard", null));
            //chr.getMap().setClock(true);
            //chr.getMap().setTimeLimit(timeLimit);

            final int RandomI = Randomizer.rand(0, 4);
            final int BossID = 8220020 + RandomI + 2;
            final int EffectID = 5120120 + RandomI + 5;
            final String EffectMsgs[] = {"검은 기사 모카딘 : 위대한 분을 위하여 너를 처단하겠다.",
                "미친 마법사 카리아인 : 미천한 것들이 날뛰고 있구나. 크크크크...",
                "돌격형 CQ57 : 목표발견. 제거 행동을 시작한다.",
                "인간사냥꾼 줄라이 : 사냥감이 나타났군.",
                "싸움꾼 플레드 : 재미 있겠군. 어디 한 번 놀아볼까.",};
            final MapleMonster boss = makeEliteBoss(monster, MapleLifeProvider.getMonster(BossID));
            final MapleMonster elite1 = makeEliteMonster(monster);
            final MapleMonster elite2 = makeEliteMonster(monster);
            MapleMonster killmob;
            for (MapleMapObject monstermo : getMapObjectsInRange(chr.getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.MONSTER))) {
                killmob = (MapleMonster) monstermo;
                killMonster(killmob);
                
            }
            tools.Timer.ShowTimer.getInstance().schedule(new Runnable() {
                public final void run() {
                    spawnEliteMonster(elite1);
                    spawnEliteMonster(elite2);
                    spawnEliteMonster(boss);
                    AlarmEliteBoss(chr.getMap(), chr, BossID);
                    broadcastMessage(MainPacketCreator.startMapEffect(EffectMsgs[RandomI], EffectID, true));
                    timeAllPlayer(chr.getMap());
                }
            }, 6000L);
        }
    }
    
    public MapleMonster makeEliteMonster(final MapleMonster monster) {
        final MapleMonster elite = MapleLifeProvider.getMonster(monster.getId());
        final OverrideMonsterStats ostats = new OverrideMonsterStats();
        final MapleMonsterStats stats = elite.getStats();
        elite.setEliteMonster(true);
        elite.setEliteType(Randomizer.rand(0x70, 0x88));
        ostats.setOHp(elite.getMobMaxHp() * 30);
        ostats.setOMp(elite.getMobMaxMp());
        ostats.setOPad(stats.getPad() * 8);
        ostats.setOPhysicalDefense(stats.getPhysicalDefense());
        ostats.setOMad(stats.getMad() + 60);
        ostats.setOMagicDefense(stats.getMagicDefense());
        ostats.setOSpeed(stats.getSpeed() + 30);
        ostats.setOAcc(stats.getAcc());
        ostats.setOEva(stats.getEva());
        ostats.setOPushed(stats.getPushed() * 2);
        ostats.setOLevel(stats.getLevel());
        elite.setOverrideStats(ostats);
        elite.setPosition(monster.getTruePosition());
        elite.setFh(monster.getFh());
        return elite;
    }

    public MapleMonster makeEliteBoss(final MapleMonster sourcemob, final MapleMonster sourceboss) {
        final MapleMonster eliteboss = MapleLifeProvider.getMonster(sourceboss.getId());
        final OverrideMonsterStats ostats = new OverrideMonsterStats();
        eliteboss.setEliteBoss(true);
        eliteboss.setEliteType(Randomizer.rand(0x64, 0x88));
        ostats.setOHp(sourcemob.getMobMaxHp() * 75); //필드몹의 75배
        ostats.setOMp(sourcemob.getMobMaxMp());
        ostats.setOPad(0);
        ostats.setOPhysicalDefense(sourcemob.getStats().getPhysicalDefense());
        ostats.setOMad((int) (sourcemob.getStats().getMad() * 2.5));
        ostats.setOMagicDefense(sourcemob.getStats().getMagicDefense());
        ostats.setOSpeed(sourcemob.getStats().getSpeed() + 35);
        ostats.setOAcc(sourcemob.getStats().getAcc());
        ostats.setOEva(sourcemob.getStats().getEva());
        ostats.setOPushed(0);
        ostats.setOLevel(sourcemob.getStats().getLevel());
        ostats.setOExp(0);
        eliteboss.setOverrideStats(ostats);
        eliteboss.setFh(sourcemob.getFh());
        return eliteboss;
    }
    
   private void time(final MapleCharacter chr) {
        MapTimer.getInstance().schedule(new Runnable() {
            public final void run() {
                chr.send(MainPacketCreator.removeMapEffect());
            }
        }, 5000L);
    }

    private void timeAllPlayer(final MapleMap map) {
        MapTimer.getInstance().schedule(new Runnable() {
            public final void run() {
                broadcastMessage(MainPacketCreator.removeMapEffect());
            }
        }, 5000L);
    }

    
    private void AlarmEliteBoss(final MapleMap currentmap, final MapleCharacter player, final int mobid) {
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public final void run() {
                if (currentmap.isEliteBossMap()) {
                    MapleWorldMapProvider mwmp = ChannelServer.getInstance(player.getClient().getChannel()).getMapFactory();
                    Iterator itr = mwmp.getMaps().values().iterator();
                    while (itr.hasNext()) {
                        MapleMap target = ((MapleMap) itr.next());
                        if (target.getReturnMapId() == currentmap.getReturnMapId()) {
                            target.broadcastMessage(UIPacket.eliteBossNotice(2, currentmap.getId(), mobid));
                        }
                    }
                    mwmp = null;
                    itr = null;
                } else {
                    this.cancel();
                }
            }
        }, 0, 30000);
    }

    private void CancelEliteBossAlarm(final MapleMap currentmap, final MapleCharacter player) {
        MapleWorldMapProvider mwmp = ChannelServer.getInstance(player.getClient().getChannel()).getMapFactory();
        Iterator itr = mwmp.getMaps().values().iterator();
        while (itr.hasNext()) {
            MapleMap target = ((MapleMap) itr.next());
            if (target.getReturnMapId() == currentmap.getReturnMapId()) {
                target.broadcastMessage(UIPacket.eliteBossNotice(1, currentmap.getId(), 0));
            }
        }
        mwmp = null;
        itr = null;
    }
    
    public void 크로스헌터(MapleMonster monster, MapleCharacter chr) {
        if (monster.getId() == 9300477) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 제가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter", "m0=2");
            chr.setKeyValue("cross", "2");
            chr.send(MainPacketCreator.updateInfoQuest(0x670, chr.getKeyValue("chapter")));
        } else if (monster.getId() == 9300878) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 제가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter", "m0=2;m1=2");
            chr.setKeyValue("cross", "3");
            chr.send(MainPacketCreator.updateInfoQuest(0x670, chr.getKeyValue("chapter")));            
        } else if (monster.getId() == 9300879) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 제가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter", "m0=2;m1=2;m2=2");
            chr.setKeyValue("cross", "4");
            chr.send(MainPacketCreator.updateInfoQuest(0x670, chr.getKeyValue("chapter")));                
        } else if (monster.getId() == 9801015) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter", "m0=2;m1=2;m2=2;m3=2");
            chr.setKeyValue("cross", "5");
            chr.send(MainPacketCreator.updateInfoQuest(0x670, chr.getKeyValue("chapter")));              
        } else if (monster.getId() == 9300510) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter", "m0=2;m1=2;m2=2;m3=2;m4=2");
            chr.setKeyValue("cross", "6");
            chr.send(MainPacketCreator.updateInfoQuest(0x670, chr.getKeyValue("chapter")));                          
        } else if (monster.getId() == 9300479) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter2", "m0=2");
            chr.setKeyValue("cross", "8");
            chr.send(MainPacketCreator.updateInfoQuest(0x671, chr.getKeyValue("chapter2")));              
        } else if (monster.getId() == 9300480) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter2", "m0=2;m1=2");
            chr.setKeyValue("cross", "9");
            chr.send(MainPacketCreator.updateInfoQuest(0x671, chr.getKeyValue("chapter2")));               
        } else if (monster.getId() == 9300511) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter2", "m0=2;m1=2;m2=2");
            chr.setKeyValue("cross", "10");
            chr.send(MainPacketCreator.updateInfoQuest(0x671, chr.getKeyValue("chapter2")));                  
        } else if (monster.getId() == 9300512) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter2", "m0=2;m1=2;m2=2;m3=2");
            chr.setKeyValue("cross", "11");
            chr.send(MainPacketCreator.updateInfoQuest(0x671, chr.getKeyValue("chapter2")));            
        } else if (monster.getId() == 9300482) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter2", "m0=2;m1=2;m2=2;m3=2;m4=2");
            chr.setKeyValue("cross", "12");
            chr.send(MainPacketCreator.updateInfoQuest(0x671, chr.getKeyValue("chapter2")));    
        } else if (monster.getId() == 9300475) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter3", "m0=2");
            chr.setKeyValue("cross", "14");
            chr.send(MainPacketCreator.updateInfoQuest(0x672, chr.getKeyValue("chapter3")));                
        } else if (monster.getId() == 9300514) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter3", "m0=2;m1=2");
            chr.setKeyValue("cross", "15");
            chr.send(MainPacketCreator.updateInfoQuest(0x672, chr.getKeyValue("chapter3")));              
        } else if (monster.getId() == 9300880) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter3", "m0=2;m1=2;m2=2");
            chr.setKeyValue("cross", "16");
            chr.send(MainPacketCreator.updateInfoQuest(0x672, chr.getKeyValue("chapter3")));             
        } else if (monster.getId() == 9300478) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter3", "m0=2;m1=2;m2=2;m3=2");
            chr.setKeyValue("cross", "17");
            chr.send(MainPacketCreator.updateInfoQuest(0x672, chr.getKeyValue("chapter3")));            
        } else if (monster.getId() == 9300513) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter3", "m0=2;m1=2;m2=2;m3=2;m4=2");
            chr.setKeyValue("cross", "18");
            chr.send(MainPacketCreator.updateInfoQuest(0x672, chr.getKeyValue("chapter3")));  
        } else if (monster.getId() == 9300515) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter4", "m0=2");
            chr.setKeyValue("cross", "20");
            chr.send(MainPacketCreator.updateInfoQuest(0x673, chr.getKeyValue("chapter4")));      
        } else if (monster.getId() == 9300516) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter4", "m0=2;m1=2");
            chr.setKeyValue("cross", "21");
            chr.send(MainPacketCreator.updateInfoQuest(0x673, chr.getKeyValue("chapter4"))); 
        } else if (monster.getId() == 9300517) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter4", "m0=2;m1=2;m2=2");
            chr.setKeyValue("cross", "22");
            chr.send(MainPacketCreator.updateInfoQuest(0x673, chr.getKeyValue("chapter4"))); 
        } else if (monster.getId() == 9300518) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter4", "m0=2;m1=2;m2=2;m3=2");
            chr.setKeyValue("cross", "23");
            chr.send(MainPacketCreator.updateInfoQuest(0x673, chr.getKeyValue("chapter4"))); 
        } else if (monster.getId() == 9300519) {
            chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "역시 #b" + chr.getName() + "#k님은 저가 생각 했던것보다 훨씬 강한 분이 셨군요", "00 00", (byte) 0));
            chr.setKeyValue("chapter4", "m0=2;m1=2;m2=2;m3=2;m4=2");
            chr.setKeyValue("cross", "24");
            chr.send(MainPacketCreator.updateInfoQuest(0x673, chr.getKeyValue("chapter4"))); 
        }
    }

    public final void killAllMonsters(final boolean animate) {
        for (final MapleMapObject m : getAllMonster()) {
            MapleMonster monster = (MapleMonster) m;
            spawnedMonstersOnMap.decrementAndGet();
            monster.setHp(0);
            broadcastMessage(MobPacket.killMonster(monster.getObjectId(), animate ? 1 : 0, GameConstants.isAswanMap(mapid)));
            removeMapObject(monster);
        }
    }

    public final void killMonster(final int monsId) {
        for (final MapleMapObject mmo : getAllMonster()) {
            if (((MapleMonster) mmo).getId() == monsId) {
                broadcastMessage(MobPacket.killMonster(mmo.getObjectId(), 1, GameConstants.isAswanMap(mapid)));
                spawnedMonstersOnMap.decrementAndGet();
                removeMapObject(mmo);
                break;
            }
        }
    }

    public final void destroyReactor(final int oid) {
        final MapleReactor reactor = getReactorByOid(oid);
        if (reactor == null) {
            return;
        }
        broadcastMessage(MainPacketCreator.destroyReactor(reactor));
        reactor.setAlive(false);
        removeMapObject(reactor);
        reactor.setTimerActive(false);

        if (reactor.getDelay() > 0) {
            MapTimer.getInstance().schedule(new Runnable() {
                @Override
                public final void run() {
                    respawnReactor(reactor);
                }
            }, reactor.getDelay());
        }
    }
    

    /*
     * command to reset all item-reactors in a map to state 0 for GM/NPC use - not tested (broken reactors get removed
     * from mapobjects when destroyed) Should create instances for multiple copies of non-respawning reactors...
     */
    public final void resetReactors() {
        setReactorState((byte) 0);
    }

    public final void setReactorState() {
        setReactorState((byte) 1);
    }

    public final void setReactorState(byte state) {
        for (final MapleMapObject o : getAllReactor()) {
            ((MapleReactor) o).setState(state);
            ((MapleReactor) o).setTimerActive(false);
            broadcastMessage(MainPacketCreator.triggerReactor((MapleReactor) o, 1));
        }
    }

    /*
     * command to shuffle the positions of all reactors in a map for PQ purposes (such as ZPQ/LMPQ)
     */
    public final void shuffleReactors() {
        List<Point> points = new ArrayList<Point>();
        for (final MapleMapObject o : getAllReactor()) {
            points.add(((MapleReactor) o).getPosition());
        }
        Collections.shuffle(points);
        for (final MapleMapObject o : getAllReactor()) {
            ((MapleReactor) o).setPosition(points.remove(points.size() - 1));
        }
    }

    /**
     * Automagically finds a new controller for the given monster from the chars
     * on the map...
     *
     * @param monster
     */
 public final void updateMonsterController(final MapleMonster monster, int Type1, int Type2) {
        if (!monster.isAlive()) {
            return;
        }
        if (monster.getController() != null) {
            if (monster.getController().getMap() != this) {
                monster.getController().stopControllingMonster(monster);
            } else {
                return;
            }
        }
        int mincontrolled = -1;
        MapleCharacter newController = null;

        this.mutex.lock();
        try {
            Iterator ltr = this.characters.iterator();

            while (ltr.hasNext()) {
                MapleCharacter chr = (MapleCharacter) ltr.next();
                if ((!chr.isHidden()) && ((chr.getControlledMonsters().size() < mincontrolled) || (mincontrolled == -1))) {
                    mincontrolled = chr.getControlledMonsters().size();
                    newController = chr;
                }
            }
        } finally {
            this.mutex.unlock();
        }
        if (newController != null) {
            if (monster.isFirstAttack() && monster.getId() != 8220028) {
                if (Type1 == -1) {
                    newController.controlMonster(monster, true, Type1, Type2);
                } else if (Type1 == 1) {
                    newController.controlEliteMonster(monster, true);
                }
                if (monster.getId() != 8220028) {
                    monster.setControllerHasAggro(true);
                    monster.setControllerKnowsAboutAggro(true);
                }
            } else if (Type1 == -1) {
                newController.controlMonster(monster, false, Type1, Type2);
            } else if (Type1 == 1) {
                newController.controlEliteMonster(monster, false);
            }
        }
    }

    public final int containsNPC(final int npcid) {
        for (MapleMapObject obj : getAllNPC()) {
            if (((MapleNPC) obj).getId() == npcid) {
                return obj.getObjectId();
            }
        }
        return -1;
    }

    public MapleMonster getMonsterById(int id) {
        mutex.lock();
        try {
            MapleMonster ret = null;
            Iterator<MapleMapObject> itr = getAllMonster().iterator();
            while (itr.hasNext()) {
                MapleMonster n = (MapleMonster) itr.next();
                if (n.getId() == id) {
                    ret = n;
                    break;
                }
            }
            return ret;
        } finally {
            mutex.unlock();
        }
    }

    public int countMonsterById(int id) {
        mutex.lock();
        try {
            int ret = 0;
            Iterator<MapleMapObject> itr = getAllMonster().iterator();
            while (itr.hasNext()) {
                MapleMonster n = (MapleMonster) itr.next();
                if (n.getId() == id) {
                    ret++;
                }
            }
            return ret;
        } finally {
            mutex.unlock();
        }
    }

    /**
     * returns a monster with the given oid, if no such monster exists returns
     * null
     *
     * @param oid
     * @return
     */
    public final MapleMonster getMonsterByOid(final int oid) {
        final MapleMapObject mmo = getMapObject(oid);
        if (mmo == null) {
            return null;
        }
        if (mmo.getType() == MapleMapObjectType.MONSTER) {
            return (MapleMonster) mmo;
        }
        return null;
    }

    public final MapleNPC getNPCByOid(final int oid) {
        final MapleMapObject mmo = getMapObject(oid);
        if (mmo == null) {
            return null;
        }
        if (mmo.getType() == MapleMapObjectType.NPC || mmo.getType() == MapleMapObjectType.PLAYERNPC) {
            
            return (MapleNPC) mmo;
        }
        return null;
    }

    public final MapleNPC getNPCById(final int id) {
        for (MapleMapObject hmo : getAllNPC()) {
            MapleNPC d = (MapleNPC) hmo;
            if (d.getId() == id) {
                return d;
            }
        }
        return null;
    }

    public final MapleReactor getReactorByOid(final int oid) {
        final MapleMapObject mmo = getMapObject(oid);
        if (mmo == null) {
            return null;
        }
        if (mmo.getType() == MapleMapObjectType.REACTOR) {
            return (MapleReactor) mmo;
        }
        return null;
    }

    public final MapleReactor getReactorByName(final String name) {
        for (final MapleMapObject obj : getAllReactor()) {
            if (((MapleReactor) obj).getName().equals(name)) {
                return (MapleReactor) obj;
            }
        }
        return null;
    }

    public final MapleReactor getReactor(final int rid) {
        for (final MapleMapObject obj : getAllReactor()) {
            if (((MapleReactor) obj).getReactorId() == rid) {
                return (MapleReactor) obj;
            }
        }
        return null;
    }

    public final void spawnTempNpc(final int id, final int x, final int y, final int owner) {
        final MapleNPC npc = MapleLifeProvider.getNPC(id);
        final Point pos = new Point(x, y);
        npc.setPosition(pos);
        npc.setCy(y);
        npc.setRx0(x + 50);
        npc.setRx1(x - 50);
        npc.setFh(getFootholds().findMaple(pos).getId());
        npc.setTemp(true);
        addMapObject(npc);
        tempnpcs3.put(owner, npc);
        for (MapleMapObject mo : characters) {
            MapleCharacter hp = ((MapleCharacter) mo);
            if (hp.getId() == owner) {
                hp.send(MainPacketCreator.spawnNPC(npc, true));
            }
        }
    }

    public final void removeTempNpc(final int id, final int owner) {

        for (final MapleMapObject npcmo : getAllNPC()) {
            final MapleNPC npc = (MapleNPC) npcmo;
            if (npc.isTemp() && npc.getId() == id && tempnpcs3.get(owner).getId() == id) {
                broadcastMessage(MainPacketCreator.removeNPC(npc.getObjectId()));
                removeMapObject(npc);
            }
        }
    }

    public final void spawnNpc(final int id, final Point pos) {
        final MapleNPC npc = MapleLifeProvider.getNPC(id);
        npc.setPosition(pos);
        npc.setCy(pos.y);
        npc.setRx0(pos.x + 50);
        npc.setRx1(pos.x - 50);
        npc.setFh(getFootholds().findMaple(pos).getId());
        npc.setCustom(true);
        addMapObject(npc);
        broadcastMessage(MainPacketCreator.spawnNPC(npc, true));
    }

    public final void removeNpc(final int id) {
        Iterator<MapleMapObject> itr = getAllNPC().iterator();
        while (itr.hasNext()) {
            MapleNPC npc = (MapleNPC) itr.next();
            if (npc.isCustom() && (id == -1 || npc.getId() == id)) {
                broadcastMessage(MainPacketCreator.removeNPCController(npc.getObjectId()));
                broadcastMessage(MainPacketCreator.removeNPC(npc.getObjectId()));
                removeMapObject(npc);
                break;
            }
        }
    }

    public final void spawnMonster_sSack(final MapleMonster mob, final Point pos, final int spawnType) {
        spawnMonster_sSack(mob, pos, spawnType, 0);
    }

    public final void spawnMonster_sSack(final MapleMonster mob, final Point pos, final int spawnType, int effect) {
        final Point spos = calcPointMaple(new Point(pos.x, pos.y - 100));
        mob.setPosition(spos);
        spawnMonster(mob, spawnType, effect);
    }

    public final int getMapId() {
        return mapid;
    }

    public final void spawnMonsterOnGroundBelow(final MapleMonster mob, final Point pos) {
        spawnMonster_sSack(mob, pos, -2);
    }

    public final void spawnTempMonster(final int key, final int id, final Point pos) {
        if (tempmonsters3.containsKey(key) && getAllPlayer().size() == 1) {
            killMonster(tempmonsters3.get(key));
        }
        final MapleMonster mob = MapleLifeProvider.getMonster(id);
        tempmonsters3.put(key, mob);
        spawnMonsterOnGroundBelow(mob, pos);
    }

    public final void spawnZakum(final Point pos) {
        final MapleMonster mainb = MapleLifeProvider.getMonster(8800000);
        final Point spos = calcPointMaple(new Point(pos.x, pos.y - 100));
        mainb.setPosition(spos);
        mainb.setFake(true);

        // Might be possible to use the map object for reference in future.
        spawnFakeMonster(mainb);

        final int[] zakpart = {8800003, 8800004, 8800005, 8800006, 8800007,
            8800008, 8800009, 8800010};

        for (final int i : zakpart) {
            final MapleMonster part = MapleLifeProvider.getMonster(i);
            part.setPosition(spos);

            spawnMonster(part, -2);
        }
    }

    public final void spawnChaosZakum(final int x, final int y) {
        final Point pos = new Point(x, y);
        final MapleMonster mainb = MapleLifeProvider.getMonster(8800100);
        final Point spos = calcPointMaple(new Point(pos.x, pos.y - 100));
        mainb.setPosition(spos);
        mainb.setFake(true);

        // Might be possible to use the map object for reference in future.
        spawnFakeMonster(mainb);

        final int[] zakpart = {8800103, 8800104, 8800105, 8800106, 8800107,
            8800108, 8800109, 8800110};

        for (final int i : zakpart) {
            final MapleMonster part = MapleLifeProvider.getMonster(i);
            part.setPosition(spos);

            spawnMonster(part, -2);
        }
    }

    public final void spawnFakeMonsterOnGroundMaple(final MapleMonster mob, final Point pos) {
        Point spos = new Point(pos.x, pos.y - 100);
        spos = calcPointMaple(spos);
        spos.y -= 1;
        mob.setPosition(spos);
        spawnFakeMonster(mob);
    }

    private final void checkRemoveAfter(final MapleMonster monster) {
        final int ra = monster.getStats().getRemoveAfter();

        if (ra > 0) {
            MapTimer.getInstance().schedule(new Runnable() {
                @Override
                public final void run() {
                    if (monster != null) {
                        killMonster(monster);
                    }
                }
            }, ra * 1000);
        }
    }

    public final void spawnRevives(final MapleMonster monster, final int oid) {
        monster.setMap(this);
        checkRemoveAfter(monster);
        monster.setLinkOid(oid);
        spawnAndAddRangedMapObject(monster, new DelayedPacketCreation() {
            @Override
            public final void sendPackets(MapleClient c) {
                c.getSession().write(MobPacket.spawnMonster(monster, -2, 0, oid, GameConstants.isAswanMap(c.getPlayer().getMapId()))); // TODO effect
            }
        }, null);
        updateMonsterController(monster, -1, 0);
        spawnedMonstersOnMap.incrementAndGet();
    }
    
    public final void spawnMonster(final MapleMonster monster, final int spawnType) {
        spawnMonster(monster, spawnType, 0);
    }

    public final void spawnMonster(final MapleMonster monster, final int spawnType, final int effect) {
    	monster.setMap(this);
        spawnAndAddRangedMapObject(monster, new DelayedPacketCreation() {
            public final void sendPackets(MapleClient c) {
                if (c != null) {
                    c.getSession().write(MobPacket.spawnMonster(monster, spawnType, effect, 0, GameConstants.isAswanMap(c.getPlayer().getMapId())));
                }
            }
        }, null);
        updateMonsterController(monster, -1, 0);
        checkRemoveAfter(monster);
        spawnedMonstersOnMap.incrementAndGet();
    }
    
    public final void spawnEliteMonster(final MapleMonster monster) {
        monster.setMap(this);

        spawnAndAddRangedMapObject(monster, new DelayedPacketCreation() {
            public final void sendPackets(MapleClient c) {
                if (c != null) {
                    c.getSession().write(MobPacket.spawnEliteMonster(monster, -2, false, false, monster.isEliteBoss()));
                }
            }
        }, null);
        updateMonsterController(monster, 1, monster.getEliteType());
        checkRemoveAfter(monster);
        this.spawnedMonstersOnMap.incrementAndGet();
    }
   
    public final void spawnMonsterWithEffect(final MapleMonster monster, final int effect, Point pos) {
        try {
            monster.setMap(this);
            monster.setPosition(pos);

            spawnAndAddRangedMapObject(monster, new DelayedPacketCreation() {
                @Override
                public final void sendPackets(MapleClient c) {
                    c.getSession().write(MobPacket.spawnMonster(monster, -2, effect, 0, GameConstants.isAswanMap(c.getPlayer().getMapId())));
                }
            }, null);
            updateMonsterController(monster, -1, 0);

            spawnedMonstersOnMap.incrementAndGet();
        } catch (Exception e) {
        }
    }

    public final void spawnFakeMonster(final MapleMonster monster) {
        monster.setMap(this);
        monster.setFake(true);

        spawnAndAddRangedMapObject(monster, new DelayedPacketCreation() {
            @Override
            public final void sendPackets(MapleClient c) {
		c.getSession().write(MobPacket.spawnFakeMonster(monster, 0));
            }
        }, null);
        updateMonsterController(monster, -1, 0);

        spawnedMonstersOnMap.incrementAndGet();
    }
    
    public final void spawnRune(final MapleRune rune) {
        rune.setMap(this);
        spawnAndAddRangedMapObject(rune, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                /* Respawn Effect 발동 */
                c.getSession().write(RunePacket.spawnRune(rune, true));
                c.getSession().write(RunePacket.spawnRune(rune, false));
            }
        }, null);
    }

    public final void spawnReactor(final MapleReactor reactor) {
        reactor.setMap(this);
        spawnAndAddRangedMapObject(reactor, new DelayedPacketCreation() {
            @Override
            public final void sendPackets(MapleClient c) {
                c.getSession().write(MainPacketCreator.spawnReactor(reactor));
            }
        }, null);
    }

    private final void respawnReactor(final MapleReactor reactor) {
        if (reactor.getReactorId() >= 100000 && reactor.getReactorId() <= 200011 && reactor.getRank() > 0) {
            int reactid = GameConstants.getRandomProfessionReactorByRank(reactor.getRank());
            final MapleReactorStats stats = MapleReactorFactory.getReactor(reactid);
            final MapleReactor myReactor = new MapleReactor(stats, reactid);
            myReactor.setPosition(reactor.getPosition());
            myReactor.setDelay(900000);
            myReactor.setState((byte) 0);
            myReactor.setName("광맥");
            myReactor.setRank(reactor.getRank());
            spawnReactor(myReactor);
        } else {
            reactor.setState((byte) 0);
            reactor.setAlive(true);
            spawnReactor(reactor);
        }
    }

    public final void spawnDoor(final MapleDoor door) {
        spawnAndAddRangedMapObject(door, new DelayedPacketCreation() {
            public final void sendPackets(MapleClient c) {
                door.sendSpawnData(c, true);
                c.getSession().write(MainPacketCreator.resetActions());
            }
        }, null);
    }
    
    public final void spawnMechDoor(final MapleMechDoor door) {
        spawnAndAddRangedMapObject(door, new DelayedPacketCreation() {
            public final void sendPackets(MapleClient c) {
                c.getSession().write(MechanicSkill.mechDoorSpawn(door, true));
                c.getSession().write(MainPacketCreator.resetActions());
            }
        }, new SpawnCondition() {
            public final boolean canSpawn(final MapleCharacter chr) {
                return chr.getParty() == null;
            }
        });
    }

    public final void spawnDragon(final MapleDragon summon) {
        spawnAndAddRangedMapObject(summon, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                c.getSession().write(MainPacketCreator.spawnDragon(summon));
            }
        }, null);
    }

    public final void spawnSummon(final MapleSummon summon, final boolean animated, final int duration) {
        try {
            spawnAndAddRangedMapObject(summon, new DelayedPacketCreation() {
                @Override
                public void sendPackets(MapleClient c) {
                    c.getSession().write(MainPacketCreator.spawnSummon(summon, summon.getSkillLevel(), animated));
                }
            }, null);
            if (duration > 0) {
                MapTimer.getInstance().schedule(new Runnable() {

                    @Override
                    public void run() {
                        broadcastMessage(MainPacketCreator.removeSummon(summon, true));
                        removeMapObject(summon);
                        summon.getOwner().removeVisibleMapObject(summon);
                        if (summon.getOwner().getSummons().get(summon.getSkill()) != null) {
                            summon.getOwner().getSummons().remove(summon.getSkill());
                        }
                    }
                }, duration);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public final void spawnExtractor(final MapleExtractor ex) {
        spawnAndAddRangedMapObject(ex, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                ex.sendSpawnData(c);
            }
        }, null);
    }
    
    public final void spawnObatcleAtom(final List<ObtacleAtom> atom) {
        spawnMapObjectList(atom, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                atom.iterator().next().sendSpawn(c, atom);
            }
        });
        removeMapObjectList(atom);
        /*  MapTimer.getInstance().schedule(new Runnable() {
         @Override
         public void run() {
         for (ObtacleAtom dd : atom) {
         broadcastMessage(BossPackets.removeObtacleAtomBomb(dd.getObjectId()));
         }
         removeMapObjectList(atom);
         }
         }, 22000);*/
    }

    private void removeMapObjectList(final List<ObtacleAtom> mapobjects) {
        for (MapleMapObject mapobject : mapobjects) {
            removeMapObject(mapobject);
        }
    }
    
    public final void spawnClockMist(final MapleMist clock) {
        spawnAndAddRangedMapObject(clock, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                broadcastMessage(MainPacketCreator.spawnClockMist(clock));
            }
        }, null);
        MapTimer.getInstance().schedule(new Runnable() {
            @Override
            public void run() {
                broadcastMessage(MainPacketCreator.removeMist(clock.getObjectId(), false));
                removeMapObject(clock);
            }
        }, 22000);
    }
    
    public final void spawnMist(final MapleMist mist, final int duration, boolean poison, boolean fake, boolean rv, boolean burningregion, boolean timecapsule) {
        spawnAndAddRangedMapObject(mist, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
               broadcastMessage(MainPacketCreator.spawnMist(mist));
            }
        }, null);

        final MapTimer tMan = MapTimer.getInstance();
        final ScheduledFuture<?> poisonSchedule;

        if (poison) {
            poisonSchedule = tMan.register(new Runnable() {
                @Override
                public void run() {
                    for (final MapleMapObject mo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.MONSTER))) {
                        if (mist.makeChanceResult()) {
                            ((MapleMonster) mo).applyStatus(mist.getOwner(), new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.POISON, 1), mist.getSourceSkill(), null, false), true, duration, false);
                        }
                    }
                }
            }, 2000, 2500);
        } else if (rv) {
            poisonSchedule = tMan.register(new Runnable() {
                @Override
                public void run() {
                    for (final MapleMapObject mo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.PLAYER))) {
                        if (mist.makeChanceResult()) {
                            final MapleCharacter chr = ((MapleCharacter) mo);
                            chr.addMP((int) (mist.getSource().getX() * (chr.getStat().getMaxMp() / 100.0)));
                        }
                    }
                }
            }, 2000, 2500);
        } else if (burningregion) {
            poisonSchedule = tMan.register(new Runnable() {
                @Override
                public void run() {
                    for (final MapleMapObject mo : getAllPlayer()) {
                        final MapleCharacter chr = ((MapleCharacter) mo);
                        final ISkill skill = SkillFactory.getSkill(GameConstants.getLinkedAttackSkill(12121005));
                        final SkillStatEffect effect = skill.getEffect(chr.getSkillLevel(mist.getOwner().getSkillLevel(skill)));
                        boolean contain = getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.PLAYER)).contains(mo);
                        if (chr.getBuffedValue(BuffStats.BOOSTER_R, 12121005) != null) {
                            if (!contain) {
                                chr.cancelEffect(skill.getEffect(1), false, -1);
                            }
                        } else {
                            if (contain) {
                                effect.applyTo(chr);
                            }
                        }
                    }
                }
            }, 2000, 2500);
        } else if (timecapsule) {
            poisonSchedule = tMan.register(new Runnable() {
                @Override
                public void run() {
                    for (MapleMapObject mmo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.PLAYER))) {
                        MapleCharacter chr = (MapleCharacter) mmo;
                        //캡슐 존재여부 체크
                        for (final MapleMapObject mistoo : chr.getMap().getMapObjectsInRange(chr.getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.MIST))) {
                            final MapleMist check = (MapleMist) mistoo;
                            if (mist.getOwner() == check.getOwner() && mist.isTimeCapsule()) {
                                for (MapleCoolDownValueHolder mcdvh : chr.getAllCooldowns()) {
                                    if (mcdvh.skillId != 36121007) {
                                        chr.changeCooldown(mcdvh.skillId, -15000);
                                    }
                                }
                            } else {
                                return;
                            }
                        }
                    }
                }
            }, 5000, 5000);
        } else {
            poisonSchedule = null;
        }
        tMan.schedule(new Runnable() {
            @Override
            public void run() {
                broadcastMessage(MainPacketCreator.removeMist(mist.getObjectId(), false));
                removeMapObject(mist);
                if (poisonSchedule != null) {
                    poisonSchedule.cancel(false);
                }
            }
        }, duration);
    }

    public final void checkMaxItemInMap() {
        if (droppedItems.size() + 1 > 400) {
            MapleWorldMapItem mapitem = (MapleWorldMapItem) getMapObject(droppedItems.get(0));
            if (mapitem == null) {
                return;
            }
            if (mapitem.isPickedUp()) {
                return;
            }
            mapitem.setPickedUp(true);
            broadcastMessage(MainPacketCreator.removeItemFromMap(mapitem.getObjectId(), 0, 0));
            removeMapObject(mapitem);
        }
    }

    public final void disappearingItemDrop(final MapleMapObject dropper, final MapleCharacter owner, final IItem item, final Point pos) {
        final Point droppos = calcDropPos(pos, pos);
        final MapleWorldMapItem drop = new MapleWorldMapItem(item, droppos, dropper, owner, (byte) 1, false);
        broadcastMessage(MainPacketCreator.dropItemFromMapObject(drop, dropper.getPosition(), droppos, (byte) 3), drop.getPosition());
    }


    public final void spawnMesoDrop(final int meso, final Point position, final MapleMapObject dropper, final MapleCharacter owner, final boolean playerDrop, final byte droptype) {

        final Point droppos = calcDropPos(position, position);
        final MapleWorldMapItem mdrop = new MapleWorldMapItem(meso, droppos, dropper, owner, droptype, playerDrop);
        checkMaxItemInMap();
        spawnAndAddRangedMapObject(mdrop, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                c.getSession().write(MainPacketCreator.dropItemFromMapObject(mdrop, dropper.getPosition(), droppos, (byte) 1));
            }
        }, null);
        if (!everlast) {
            MapTimer.getInstance().schedule(new ExpireMapItemJob(mdrop), 60000L);
        }
    }

    public final void spawnMobMesoDrop(final int meso, final Point position, final MapleMapObject dropper, final MapleCharacter owner, final boolean playerDrop, final byte droptype) {
        final MapleWorldMapItem mdrop = new MapleWorldMapItem(meso, position, dropper, owner, droptype, playerDrop);

        checkMaxItemInMap();
        spawnAndAddRangedMapObject(mdrop, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                c.getSession().write(MainPacketCreator.dropItemFromMapObject(mdrop, dropper.getPosition(), position, (byte) 1));
            }
        }, null);

        MapTimer.getInstance().schedule(new ExpireMapItemJob(mdrop), 60000L);
    }

    public final void spawnMobDrop(final IItem idrop, final Point dropPos, final MapleMonster mob, final MapleCharacter chr, final byte droptype, final int questid) {
        final MapleWorldMapItem mdrop = new MapleWorldMapItem(idrop, dropPos, mob, chr, droptype, false, questid);

        checkMaxItemInMap();
        //Start nx block from fm
        int[] nxItems = {5150030, 5151025, 5152033, 5152035, 1002186, 1082102, 1002999, 1052211, 1072175, 1003000, 1052212, 1003001, 1052213, 1072406, 1002998, 1052210, 1072404};
        if (mapid != 104040000) { //HHG1
            for (int i : nxItems) {
                if (mdrop.getItemId() == i) {
                    return;
                }
            }
        }
        spawnAndAddRangedMapObject(mdrop, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                if (questid <= 0 || c.getPlayer().getQuestStatus(questid) == 1) {
                    c.getSession().write(MainPacketCreator.dropItemFromMapObject(mdrop, mob.getPosition(), dropPos, (byte) 1));
                }
            }
        }, null);
        MapTimer.getInstance().schedule(new ExpireMapItemJob(mdrop), 60000L);
        activateItemReactors(mdrop, chr.getClient());    
    }
    
    public final void spawnItemDrop(MapleMapObject dropper, MapleCharacter owner, IItem item, Point pos, boolean ffaDrop, boolean playerDrop) {
        spawnItemDrop(dropper, owner, item, pos, ffaDrop, playerDrop, false, false, 0, 0);
    }
        
    public final void spawnItemDrop(final MapleMapObject dropper, final MapleCharacter owner, final IItem item, Point pos, final boolean ffaDrop, final boolean playerDrop, boolean fly, boolean touch, int gradiant, int speed) {

        checkMaxItemInMap();
        IEquip equip = null;
        if (item.getType() == 1) {
            equip = (IEquip) item;
        }
        final Point droppos = calcDropPos(pos, pos);
        final MapleWorldMapItem drop = new MapleWorldMapItem(item, droppos, dropper, owner, (byte) 0, playerDrop, equip, fly, touch, gradiant, speed);

        spawnAndAddRangedMapObject(drop, new DelayedPacketCreation() {
            @Override
            public void sendPackets(MapleClient c) {
                c.getSession().write(MainPacketCreator.dropItemFromMapObject(drop, dropper.getPosition(), droppos, (byte) 1));
            }
        }, null);
        broadcastMessage(MainPacketCreator.dropItemFromMapObject(drop, dropper.getPosition(), droppos, (byte) 0));

        if (!everlast) {
            MapTimer.getInstance().schedule(new ExpireMapItemJob(drop), 60000L);
            activateItemReactors(drop, owner.getClient());
        }
    }

    private final void activateItemReactors(final MapleWorldMapItem drop, final MapleClient c) {
        final IItem item = drop.getItem();

        for (final MapleMapObject o : getAllReactor()) {
            final MapleReactor react = (MapleReactor) o;
            for (int i = 0; i < react.getStats().getStateEventSize(react.getState()); i++) {
                if (react.getReactorType((byte) i) == 100) {
                    if (react.getReactItem((byte) i).getLeft() == item.getItemId() && react.getReactItem((byte) i).getRight() == item.getQuantity()) {
                        if (react.getArea().contains(drop.getPosition())) {
                            if (!react.isTimerActive()) {
                                MapTimer.getInstance().schedule(new ActivateItemReactor(drop, react, c), 5000);
                                react.setTimerActive(true);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    public final void returnEverLastItem(final MapleCharacter chr) {
        for (final MapleMapObject o : getAllItems()) {
            final MapleWorldMapItem item = ((MapleWorldMapItem) o);
            item.setPickedUp(true);
            broadcastMessage(MainPacketCreator.removeItemFromMap(item.getObjectId(), 2, chr.getId()), item.getPosition());
            if (item.getMeso() > 0) {
                chr.gainMeso(item.getMeso(), false);
            } else {
                InventoryManipulator.addFromDrop(chr.getClient(), item.getItem(), false);
            }
            removeMapObject(item);
        }
    }
    
    public final void startMapEffect(final String msg, final int itemId) {
        startMapEffect(msg, itemId, 30000);
    }

    public final void startMapEffect(final String msg, final int itemId, final long time) {
        if (mapEffect != null) {
            return;
        }
        mapEffect = new MapleMapEffect(msg, itemId);
        broadcastMessage(mapEffect.makeStartData());
        MapTimer.getInstance().schedule(new Runnable() {
            @Override
            public void run() {
                broadcastMessage(mapEffect.makeDestroyData());
                mapEffect = null;
            }
        }, time);
    }

    public final void addPlayer(final MapleCharacter chr) {
        mutex.lock();
        엔피시리스폰();
        try {
            characters.add(chr);
            mapobjects.put(chr.getObjectId(), chr);
        } finally {
            mutex.unlock();
        }

        if (!chr.isHidden()) {
            broadcastMessage(chr, MainPacketCreator.spawnPlayerMapobject(chr), false);
        }
        sendObjectPlacement(chr);

        if (chr.getKeyValue2("mountid") == -1) {
            chr.setKeyValue2("mountid", 0);
        }
        
        if (chr.getKeyValue2("mountskillid") == -1) {
            chr.setKeyValue2("mountskillid", 0);
        }
        
        if (!onFirstUserEnter.equals("")) {
            if (getCharactersSize() == 1) {
                MapleMapScriptMethods.startScript_FirstUser(chr.getClient(), onFirstUserEnter);
            }
        }
        
        if (!onUserEnter.equals("")) {
            MapleMapScriptMethods.startScript_User(chr.getClient(), onUserEnter);
        }
        
        if (mapid ==  ServerConstants.startMap) {
            chr.send(MainPacketCreator.musicChange("BgmEvent2/risingStar2"));
            mapEffect = new MapleMapEffect(ServerConstants.serverWelcome, 5121035);
            chr.send(mapEffect.makeStartData());
        }
        
        if (mapid == 109050001) { //이벤트맵 나가는 곳
            MapleMap map = chr.getClient().getChannelServer().getMapFactory().getMap(ServerConstants.startMap);
            chr.changeMap(map, map.getPortal(0));
        }
        
        if (QuickMove.getQuickMoves(mapid) != null) {
            chr.send(MainPacketCreator.getQuickMove(QuickMove.getQuickMoves(mapid)));
            chr.setQuickMoved(true);
        }
        chr.dispelDebuff(DiseaseStats.TELEPORT); //팅방지
                
        if (chr.getJob() >= 1400 && chr.getJob() <= 1412) {
            chr.acaneAim = 0;
        }
        
        for (int i = 0; i < 3; ++i) {
            if (chr.getPet(i) != null) {
                chr.getPet(i).setPos(chr.getPosition()); //펫 좌표 업데이트
                chr.getClient().send(PetPacket.updatePet(chr, chr.getPet(i), false, chr.getPetLoot()));
                broadcastMessage(PetPacket.showPet(chr, chr.getPet(i), false, false));
            }
        }
        
        if (chr.getPetAutoHP() > 0) {
            chr.getClient().send(MainPacketCreator.getPetAutoHP(chr.getPetAutoHP()));
        }
        
        if (chr.getPetAutoMP() > 0) {
            chr.getClient().send(MainPacketCreator.getPetAutoMP(chr.getPetAutoMP()));
        }
        
        if (chr.getAndroid() != null) { //Set
            chr.getAndroid().setPosition(chr.getPosition()); //안드로이드 좌표 업데이트
            broadcastMessage(chr, AndroidPacket.spawnAndroid(chr, chr.getAndroid()), true);
        }
        
        if (getHPDec() > 0) {
            chr.startHurtHp();
        }
        
        if (chr.getParty() != null) {
            chr.silentPartyUpdate();
            chr.getClient().getSession().write(MainPacketCreator.updateParty(chr.getClient().getChannel(), chr.getParty(), MaplePartyOperation.SILENT_UPDATE, null));
            chr.updatePartyMemberHP();
            chr.receivePartyMemberHP();
        }

        if (!chr.getSummons().isEmpty()) {
            for (MapleSummon summon : chr.getSummons().values()) {
                if (!summon.isPuppet() && !summon.isStaticSummon()) {
                    summon.setPosition(chr.getPosition());
                    chr.addVisibleMapObject(summon);
                    spawnSummon(summon, false, SkillFactory.getSkill(summon.getSkill()).getEffect(summon.getSkillLevel()).getDuration());
                }
            }
        }

        if (mapEffect != null) {
            mapEffect.sendStartData(chr.getClient());
        }
        
        if (timeLimit > 0 && getForcedReturnMap() != null) {
            chr.startMapTimeLimitTask(timeLimit, getForcedReturnMap());
        }
        
        if (chr.getBuffedValue(BuffStats.MONSTER_RIDING) != null) {
            if (FieldLimitType.Mount.check(fieldLimit)) {
                chr.cancelBuffStats(-1, BuffStats.MONSTER_RIDING);
            }
        }
        
        if (chr.getEventInstance() != null && chr.getEventInstance().isTimerStarted() && !chr.getEventInstance().isCleared()) {
            chr.getClient().getSession().write(MainPacketCreator.getClock((int) (chr.getEventInstance().getTimeLeft() / 1000)));
        }
        
        if (chr.getEventInstance() != null && chr.getEventInstance().isUsingAchievementRatio() && !chr.getEventInstance().isCleared()) {
            chr.getClient().getSession().write(UIPacket.AchievementRatio(chr.getEventInstance().getAchievementRatio()));
        }
        
        if (hasClock()) {
            final Calendar cal = Calendar.getInstance();
            chr.getClient().getSession().write((MainPacketCreator.getClockTime(cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE), cal.get(Calendar.SECOND))));
        }
        
        if (chr.getEventInstance() != null) {
            chr.getEventInstance().onMapLoad(chr);
        }
        
        if (GameConstants.isEvan(chr.getJob()) && chr.getJob() >= 2200 && chr.getBuffedValue(BuffStats.MONSTER_RIDING) == null) {
            if (chr.getDragon() == null) {
                chr.makeDragon();
            }
            spawnDragon(chr.getDragon());
            updateMapObjectVisibility(chr, chr.getDragon());
        }
        
        for (BuffStats check : GameConstants.getBroadcastBuffs()) {
            if (chr.getBuffedValue(check) != null) {
                SkillStatEffect eff = chr.getBuffedSkillEffect(check);
                Integer value = chr.getBuffedValue(check);
                if (check == BuffStats.SHADOWPARTNER) {
                    value = 1;
                } else if (check == BuffStats.WK_CHARGE) {
                    value = 1;
                } else if (check == BuffStats.DAMAGE_RESIST && eff.getSourceId() == 23111005) {
                    value = 1;
                } else if (check == BuffStats.MORPH) {
                    value = Integer.valueOf(eff.getMorph(chr));
                } else if (check == BuffStats.SOARING) {
                    value = 1;
                } else if (check == BuffStats.ITEM_EFFECT) {
                    value = 0;
                } else if (check == BuffStats.WIND_WALK) {
                    value = 0;
                } else if (check == BuffStats.DARK_SPECULATION) {
                    value = 0;
                }
                broadcastMessage(chr, MainPacketCreator.giveForeignBuff(chr.getId(), Collections.singletonList(new Triple<BuffStats, Integer, Boolean>(check, value, false)), eff), false);
            }
        }
        
        if (chr.getBuffedSkillEffect(BuffStats.ITEM_EFFECT) != null) {
            int skillid = chr.getBuffedSkillEffect(BuffStats.ITEM_EFFECT).getSourceId();
            if (GameConstants.isAngelicBlessBuffEffectItem(skillid)) {
                broadcastMessage(MainPacketCreator.showAngelicBlessBuffEffect(chr.getId(), skillid));
            }
        }

        for (MapleDiseaseValueHolder hdvh : chr.getAllDiseases()) {
            for (Pair<DiseaseStats, Integer> p : GameConstants.getBroadcastDebuffs()) {
                if (hdvh.disease == p.getLeft()) {
                    broadcastMessage(MainPacketCreator.giveForeignDebuff(chr.getId(), p.getLeft(), new MobSkill(p.getRight(), 1)));
                }
            }
        }

        if (!isExpiredMapTimer()) {
            long lefttime = maptimer - System.currentTimeMillis();
            int sec = (int) (lefttime / 1000);
            chr.send(MainPacketCreator.getClock(sec));
        }
        
        if (isEliteBossMap()) {
            chr.send(UIPacket.showSpecialMapEffect(2, 1, "Bgm36.img/RoyalGuard", null));
        } else if (isEliteBossRewardMap()) {
            chr.send(UIPacket.showSpecialMapEffect(3, 1, "Bgm36.img/HappyTimeShort", "Map/Map/Map9/924050000.img/back"));
        }
        
        /* 룬 시작 */
            mutex.lock();
            try {
                final List<MapleMapObject> monsters = this.getAllMonster();
                if (!this.isTown() && monsters.size() > 0 && Randomizer.nextInt(380) < 48) {
                    MapleMonster mob = (MapleMonster) monsters.get(Randomizer.rand(0, monsters.size() - 1));
                    MapleRune rune = new MapleRune(Randomizer.rand(0, 3), mob.getPosition().x, mob.getPosition().y, this);
                    this.spawnRune(rune);
                }
            } finally {
                mutex.unlock();
            }
        /* 룬 종료 */

        if (chr.getSkillEffect() != null) {
            if (isTown()) {
                chr.setKeyDownSkill_Time(0);
                broadcastMessage(MainPacketCreator.skillCancel(chr, chr.getSkillEffect().getSkillId()));
                chr.setSkillEffect(null);
            } else {
                broadcastMessage(MainPacketCreator.skillEffect(chr, chr.getSkillEffect(), chr.getPosition()));
            }
        }
        
        if (chr.getMapId() == 105200410) {
            chr.send(MainPacketCreator.getNPCTalk(2007, (byte) 0, "어라? 저기있는 몬스터는 도대체 뭐지?\r\n(대화를 걸어보자)", "00 01", (byte)2));
            chr.send(MainPacketCreator.resetActions());
        } if (chr.getMapId() >= 350060000 && chr.getMapId() < 350070000) {       
         for (MapleCharacter pchr : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
            if (pchr.getMapId() >= 350060160 && pchr.getMapId() < 350060180) {
              killAllMonsters(true);
              spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8240097), new Point(50, -16));
            } else if (pchr.getMapId() >= 350060180 && pchr.getMapId() < 350060200) {
              killAllMonsters(true);
              spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8240098), new Point(-150, -16));
            } else if (pchr.getMapId() >= 350060200 && pchr.getMapId() < 350060220) {
              killAllMonsters(true);
              spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(8240099), new Point(0, -16));
            }
            }
        }
         Equip target;
        target = (Equip) chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11);
if (target.getSoulName() != 0) { // 소울웨폰 게이지
            IItem toDrop;
}
    }

    public final void removePlayer(final MapleCharacter chr) {
        lastPlayerLeft = System.currentTimeMillis();
        if (everlast) {
            returnEverLastItem(chr);
        }
        mutex.lock();
        try {
            characters.remove(chr);
        } finally {
            mutex.unlock();
        }
        removeMapObject(Integer.valueOf(chr.getObjectId()));
        broadcastMessage(MainPacketCreator.removePlayerFromMap(chr.getId()));
        chr.checkFollow();
        for (final MapleMonster monster : chr.getControlledMonsters()) {
            monster.setController(null);
            monster.setControllerHasAggro(false);
            monster.setControllerKnowsAboutAggro(false);
            updateMonsterController(monster, -1, 0);
        }
        chr.leaveMap();
        chr.cancelMapTimeLimitTask();
        for (MapleSummon summon : chr.getSummons().values()) {
            if (summon.isPuppet()) {
                chr.cancelBuffStats(-1, BuffStats.PUPPET, BuffStats.DUMMY_EFFECT);
            } else {
                broadcastMessage(MainPacketCreator.removeSummon(summon, true));
                removeMapObject(summon);
                chr.removeVisibleMapObject(summon);
            }
        }

        if (chr.getExtractor() != null) {
            removeMapObject(chr.getExtractor());
            chr.setExtractor(null);
            chr.message(5, "맵을 이동하여 분해기가 해체되었습니다.");
        }

        if (chr.getDragon() != null) {
            removeMapObject(chr.getDragon());
        }
        if (tempnpcs3.containsKey(chr.getId())) {
            removeTempNpc(tempnpcs3.get(chr.getId()).getId(), chr.getId());
            tempnpcs3.remove(chr.getId());
        }

        if (getId() == 103050510) { // 단련실 1
            spawnTempMonster(1, 9300522, new Point(-578, 152));
            spawnTempMonster(2, 9300521, new Point(-358, 152));
            spawnTempMonster(3, 9300522, new Point(-138, 152));
            spawnTempMonster(4, 9300522, new Point(82, 152));
            spawnTempMonster(5, 9300522, new Point(302, 152));
            spawnTempMonster(6, 9300522, new Point(522, 152));
        }

        if (getId() == 103050530 && getAllMonster().isEmpty()) { // 단련실 3
            spawnTempMonster(1, 9300523, new Point(-192, 152));
        }
    }

    public final void broadcastMessage(final Packet packet) {
        broadcastMessage(null, packet, Double.POSITIVE_INFINITY, null);
    }

    public final void broadcastMessage(final MapleCharacter source, final Packet packet, final boolean repeatToSource) {
        broadcastMessage(repeatToSource ? null : source, packet, Double.POSITIVE_INFINITY, source.getPosition());
    }

    public final void broadcastMessage(final Packet packet, final Point rangedFrom) {
        broadcastMessage(null, packet, GameConstants.maxViewRangeSq(), rangedFrom);
    }

    public final void broadcastMessage(final MapleCharacter source, final Packet packet, final Point rangedFrom) {
        broadcastMessage(source, packet, GameConstants.maxViewRangeSq(), rangedFrom);
    }

    private final void broadcastMessage(final MapleCharacter source, final Packet packet, final double rangeSq, final Point rangedFrom) {
        mutex.lock();
        try {
            final Iterator<MapleCharacter> ltr = characters.iterator();
            MapleCharacter chr;
            while (ltr.hasNext()) {
                chr = ltr.next();
                if (chr != source) {
                    if (rangeSq < Double.POSITIVE_INFINITY) {
                        if (rangedFrom.distanceSq(chr.getPosition()) <= rangeSq) {
                            chr.getClient().getSession().write(packet);
                        }
                    } else {
                        chr.getClient().getSession().write(packet);
                    }
                }
            }
        } finally {
            mutex.unlock();
        }
    }

    private final void sendObjectPlacement(final MapleCharacter c) {
        if (c == null) {
            return;
        }
        for (final MapleMapObject o : getMapObjectsInRange(c.getPosition(), GameConstants.maxViewRangeSq(), GameConstants.rangedMapobjectTypes)) {
            if (o.getType() == MapleMapObjectType.REACTOR) {
                if (!((MapleReactor) o).isAlive()) {
                    continue;
                }
            }
            o.sendSpawnData(c.getClient());
            c.addVisibleMapObject(o);
        }
        for (final MapleMapObject o : getAllMonster()) {
            updateMonsterController((MapleMonster) o, -1, 0);
        }
    }
    
    
    public final List<MapleMapObject> getMapObjectsInRange(final Point from, final double rangeSq) {
        final List<MapleMapObject> ret = new LinkedList<MapleMapObject>();

        mutex.lock();
        try {
            final Iterator<MapleMapObject> ltr = mapobjects.values().iterator();
            MapleMapObject obj;
            while (ltr.hasNext()) {
                obj = ltr.next();
                if (from.distanceSq(obj.getPosition()) <= rangeSq) {
                    ret.add(obj);
                }
            }
        } finally {
            mutex.unlock();
        }
        return ret;
    }

    public final List<MapleMapObject> getMapObjectsInRange(final Point from, final double rangeSq, final List<MapleMapObjectType> MapObject_types) {
        final List<MapleMapObject> ret = new LinkedList<MapleMapObject>();

        mutex.lock();
        try {
            final Iterator<MapleMapObject> ltr = mapobjects.values().iterator();
            MapleMapObject obj;
            while (ltr.hasNext()) {
                obj = ltr.next();
                if (MapObject_types.contains(obj.getType())) {
                    if (from.distanceSq(obj.getPosition()) <= rangeSq) {
                        ret.add(obj);
                    }
                }
            }
        } finally {
            mutex.unlock();
        }
        return ret;
    }

    public final List<MapleMapObject> getMapObjectsInRect(final Rectangle box, final List<MapleMapObjectType> MapObject_types) {
        final List<MapleMapObject> ret = new LinkedList<MapleMapObject>();

        mutex.lock();
        try {
            final Iterator<MapleMapObject> ltr = mapobjects.values().iterator();
            MapleMapObject obj;
            while (ltr.hasNext()) {
                obj = ltr.next();
                if (MapObject_types.contains(obj.getType())) {
                    if (box.contains(obj.getPosition())) {
                        ret.add(obj);
                    }
                }
            }
        } finally {
            mutex.unlock();
        }
        return ret;
    }

    public final List<MapleCharacter> getPlayersInRect(final Rectangle box, final List<MapleCharacter> CharacterList) {
        final List<MapleCharacter> character = new LinkedList<MapleCharacter>();

        mutex.lock();
        try {
            final Iterator<MapleCharacter> ltr = characters.iterator();
            MapleCharacter a;
            while (ltr.hasNext()) {
                a = ltr.next();
                if (CharacterList.contains(a.getClient().getPlayer())) {
                    if (box.contains(a.getPosition())) {
                        character.add(a);
                    }
                }
            }
        } finally {
            mutex.unlock();
        }
        return character;
    }

    public final List<MapleMapObject> getAllItems() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.ITEM));
    }

    public final List<MapleMapObject> getAllNPC() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.NPC, MapleMapObjectType.PLAYERNPC));
    }

    public final List<MapleMapObject> getAllPlayerNPC() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.PLAYERNPC));
    }

    public final List<MapleMapObject> getAllReactor() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.REACTOR));
    }

    public final List<MapleMapObject> getAllPlayer() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.PLAYER));
    }

    public final List<MapleMapObject> getAllMonster() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.MONSTER));
    }

    public final List<MapleSummon> getAllSummons() {
        return getSummonInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.SUMMON));
    }

    public final List<MapleMapObject> getAllDoor() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.DOOR));
    }

    public final List<MapleMapObject> getAllMechDoor() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.DOOR));
    }

    public List<MapleMapObject> getAllHiredMerchant() {
        return getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.HIRED_MERCHANT));
    }

    public List<MapleMist> getAllMistsThreadsafe() {
        return getMistInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.MIST));
    }

    public final List<MapleSummon> getAllSummon() {
        return getSummonInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.SUMMON));
    }

    public final List<MapleRune> getAllRune() {
        return getRuneInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.RUNE));
    }

    public final void addPortal(final MaplePortal myPortal) {
        portals.put(myPortal.getId(), myPortal);
    }

    public final MaplePortal getPortal(final String portalname) {
        for (final MaplePortal port : portals.values()) {
            if (port.getName().equals(portalname)) {
                return port;
            }
        }
        return null;
    }

    public final MaplePortal getPortal(final int portalid) {
        return portals.get(portalid);
    }

    public final List<MaplePortal> getPortalSP() {
        List<MaplePortal> res = new LinkedList<MaplePortal>();
        for (final MaplePortal port : portals.values()) {
            if (port.getName().equals("sp")) {
                res.add(port);
            }
        }
        return res;
    }

    public final void addMapleArea(final Rectangle rec) {
        areas.add(rec);
    }

    public final List<Rectangle> getAreas() {
        return new ArrayList<Rectangle>(areas);
    }

    public final Rectangle getArea(final int index) {
        return areas.get(index);
    }

    public final void setFootholds(final MapleFootholdTree footholds) {
        this.footholds = footholds;
    }

    public final MapleFootholdTree getFootholds() {
        return footholds;
    }

    public final void loadMonsterRate(final boolean first) {
        final int spawnSize = monsterSpawn.size() * 1000;
        maxRegularSpawn = Math.round(spawnSize * monsterRate) * 100;
        if (maxRegularSpawn < 2) {
            maxRegularSpawn = 2;
        } else if (maxRegularSpawn > spawnSize) {
            maxRegularSpawn = spawnSize - (spawnSize / 15);
        }
        Collection<Spawns> newSpawn = new LinkedList<Spawns>();
        Collection<Spawns> newBossSpawn = new LinkedList<Spawns>();
        for (final Spawns s : monsterSpawn) {
            if (s.getMonster().getStats().isBoss()) {
                newBossSpawn.add(s);
            } else {
                newSpawn.add(s);
            }
        }
        monsterSpawn.clear();
        monsterSpawn.addAll(newBossSpawn);
        monsterSpawn.addAll(newSpawn);
        respawn(true);
        if (first && spawnSize > 0) {
            MapTimer.getInstance().register(new Runnable() {
                @Override
                public void run() {
                    respawn(false);
                }
            }, createMobInterval);
        }
    }

    public final void addMonsterSpawn(final MapleMonster monster, final int mobTime, final String msg) {
        final Point newpos = calcPointMaple(monster.getPosition());
        newpos.y -= 1;

        monsterSpawn.add(new SpawnPoint(monster, newpos, mobTime, msg));
    }

    public final void addAreaMonsterSpawn(final MapleMonster monster, Point pos1, Point pos2, Point pos3, final int mobTime, final String msg) {
        pos1 = calcPointMaple(pos1);
        pos2 = calcPointMaple(pos2);
        pos3 = calcPointMaple(pos3);
        pos1.y -= 1;
        pos2.y -= 1;
        pos3.y -= 1;

        monsterSpawn.add(new SpawnPointAreaBoss(monster, pos1, pos2, pos3, mobTime, msg));
    }

    public final Collection<MapleCharacter> getCharacters() {
        final List<MapleCharacter> chars = new ArrayList<MapleCharacter>();

        mutex.lock();
        try {
            final Iterator<MapleCharacter> ltr = characters.iterator();
            while (ltr.hasNext()) {
                chars.add(ltr.next());
            }
        } finally {
            mutex.unlock();
        }
        return chars;
    }

    public final MapleCharacter getCharacterById_InMap(final int id) {
        mutex.lock();
        try {
            final Iterator<MapleCharacter> ltr = characters.iterator();
            MapleCharacter c;
            while (ltr.hasNext()) {
                c = ltr.next();
                if (c.getId() == id) {
                    return c;
                }
            }
        } finally {
            mutex.unlock();
        }
        return null;
    }

    private final void updateMapObjectVisibility(final MapleCharacter chr, final MapleMapObject mo) {
        if (chr == null) {
            return;
        }
        if (!chr.isMapObjectVisible(mo)) { // monster entered view range
            if (mo.getType() == MapleMapObjectType.MIST || mo.getType() == MapleMapObjectType.EXTRACTOR || mo.getType() == MapleMapObjectType.ANDROID || mo.getType() == MapleMapObjectType.SUMMON || mo.getPosition().distanceSq(chr.getPosition()) <= GameConstants.maxViewRangeSq()) {
                chr.addVisibleMapObject(mo);
                mo.sendSpawnData(chr.getClient());
            }
        } else { // monster left view range
            if (mo.getType() != MapleMapObjectType.MIST && mo.getType() != MapleMapObjectType.EXTRACTOR && mo.getType() != MapleMapObjectType.ANDROID && mo.getType() != MapleMapObjectType.SUMMON && mo.getPosition().distanceSq(chr.getPosition()) > GameConstants.maxViewRangeSq()) {
                chr.removeVisibleMapObject(mo);
                mo.sendDestroyData(chr.getClient());
            } else if (mo.getType() == MapleMapObjectType.MONSTER) { //monster didn't leave view range, and is visible
                if (chr.getPosition().distanceSq(mo.getPosition()) <= GameConstants.maxViewRangeSq()) {
                    updateMonsterController((MapleMonster) mo, -1, 0);
                }
            }
        }
    }

    public void moveMonster(MapleMonster monster, Point reportedPos) {
        monster.setPosition(reportedPos);

        mutex.lock();
        try {
            final Iterator<MapleCharacter> ltr = characters.iterator();
            while (ltr.hasNext()) {
                updateMapObjectVisibility(ltr.next(), monster);
            }
        } finally {
            mutex.unlock();
        }
    }

    public void movePlayer(final MapleCharacter player, final Point newPosition) {
        player.setPosition(newPosition);

        final Collection<MapleMapObject> visibleObjects = player.getVisibleMapObjects();
        final MapleMapObject[] visibleObjectsNow = visibleObjects.toArray(new MapleMapObject[visibleObjects.size()]);

        for (MapleMapObject mo : visibleObjectsNow) {
            if (getMapObject(mo.getObjectId()) == mo) {
                updateMapObjectVisibility(player, mo);
            } else {
                player.removeVisibleMapObject(mo);
            }
        }
        for (MapleMapObject mo : getMapObjectsInRange(player.getPosition(), GameConstants.maxViewRangeSq())) {
            if (!player.isMapObjectVisible(mo)) {
                mo.sendSpawnData(player.getClient());
                player.addVisibleMapObject(mo);
            }
        }
    }

    public MaplePortal findClosestSpawnpoint(Point from) {
        MaplePortal closest = null;
        double distance, shortestDistance = Double.POSITIVE_INFINITY;
        for (MaplePortal portal : portals.values()) {
            distance = portal.getPosition().distanceSq(from);
            if (portal.getType() >= 0 && portal.getType() <= 2 && distance < shortestDistance && portal.getTargetMapId() == 999999999) {
                closest = portal;
                shortestDistance = distance;
            }
        }
        return closest;
    }

    public void setMapTimer(long time) {
        try {
            PreparedStatement ps = MYSQL.getConnection().prepareStatement("DELETE FROM bosscooltime WHERE map = ? AND channel = ?");
            ps.setInt(1, mapid);
            ps.setInt(2, channel);
            ps.executeUpdate();
            ps = MYSQL.getConnection().prepareStatement("INSERT INTO bosscooltime VALUES (?, ?, ?)");
            ps.setInt(1, channel);
            ps.setInt(2, mapid);
            ps.setLong(3, time);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            System.err.println("[오류] DB로 보스 쿨타임을 저장하는데 실패했습니다.");
            if (!ServerConstants.realese) {
                e.printStackTrace();
            }
        }
        this.maptimer = time;
    }

    public void setMapTimerNotDB(long time) {
        this.maptimer = time;
    }

    public boolean isExpiredMapTimer() {
        return maptimer < System.currentTimeMillis();
    }

    public String spawnDebug() {
        StringBuilder sb = new StringBuilder("Mapobjects in map : ");
        sb.append(this.getMapObjectSize());
        sb.append(" spawnedMonstersOnMap: ");
        sb.append(spawnedMonstersOnMap);
        sb.append(" spawnpoints: ");
        sb.append(monsterSpawn.size());
        sb.append(" maxRegularSpawn: ");
        sb.append(maxRegularSpawn);
        sb.append(" actual monsters: ");
        sb.append(getAllMonster().size());

        return sb.toString();
    }

    public final int getMapObjectSize() {
        return mapobjects.size();
    }

    public final int getCharactersSize() {
        return characters.size();
    }

    public Collection<MaplePortal> getPortals() {
        return Collections.unmodifiableCollection(portals.values());
    }

    public int getSpawnedMonstersOnMap() {
        return spawnedMonstersOnMap.get();
    }

    private class ExpireMapItemJob implements Runnable {

        private MapleWorldMapItem mapitem;

        public ExpireMapItemJob(MapleWorldMapItem mapitem) {
            this.mapitem = mapitem;
        }

        @Override
        public void run() {
            if (mapitem != null && mapitem == getMapObject(mapitem.getObjectId())) {
                if (droppedItems.contains(Integer.valueOf(mapitem.getObjectId()))) {
                    droppedItems.remove(Integer.valueOf(mapitem.getObjectId()));
                }
                if (mapitem.isPickedUp()) {
                    return;
                }
                mapitem.setPickedUp(true);

                broadcastMessage(MainPacketCreator.removeItemFromMap(mapitem.getObjectId(), 0, 0));
                removeMapObject(mapitem);
            }
        }
    }

    private class ActivateItemReactor implements Runnable {

        private MapleWorldMapItem mapitem;
        private MapleReactor reactor;
        private MapleClient c;

        public ActivateItemReactor(MapleWorldMapItem mapitem, MapleReactor reactor, MapleClient c) {
            this.mapitem = mapitem;
            this.reactor = reactor;
            this.c = c;
        }

        @Override
        public void run() {
            if (mapitem != null && mapitem == getMapObject(mapitem.getObjectId())) {
                if (mapitem.isPickedUp()) {
                    reactor.setTimerActive(false);
                    return;
                }
                mapitem.setPickedUp(true);

                broadcastMessage(MainPacketCreator.removeItemFromMap(mapitem.getObjectId(), 0, 0));
                removeMapObject(mapitem);
                try {
                    reactor.hitReactor(c);
                } catch (Exception e) {
                    if (!ServerConstants.realese) {
                        e.printStackTrace();
                    }
                }
                reactor.setTimerActive(false);

                if (reactor.getDelay() > 0) {
                    MapTimer.getInstance().schedule(new Runnable() {
                        @Override
                        public void run() {
                            reactor.setState((byte) 0);
                            broadcastMessage(MainPacketCreator.triggerReactor(reactor, 0));
                        }
                    }, reactor.getDelay());
                }
            }
        }
    }
    
    public int countSummonSkill(MapleCharacter chr, int skill) {
        int count = 0;
        if (GameConstants.isEvan(chr.getJob())) {
            return 0;
        }
        List <MapleMapObject> mapobjs = chr.getMap().getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.SUMMON));
        for (MapleMapObject o : mapobjs) {
            if (o.getType() == MapleMapObjectType.SUMMON) {
                if (((MapleSummon) o).getOwnerChr() == chr) {
                    if (((MapleSummon) o).getSkill() == skill) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
    
    public List <MapleMapObject> getSummonObjects(MapleCharacter chr, int skill) {
        List <MapleMapObject> ret = new ArrayList<MapleMapObject>();
        List <MapleMapObject> mapobjs = chr.getMap().getMapObjectsInRange(new Point(0, 0), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.SUMMON));
        for (MapleMapObject o : mapobjs) {
            if (o.getType() == MapleMapObjectType.SUMMON) {
                if (((MapleSummon) o).getOwnerChr() == chr) {
                    if (((MapleSummon) o).getSkill() == skill) {
                        ret.add(o);
                    }
                }
            }
        }
        return ret;
    }

    public void respawn(final boolean force) {
        if (!리스폰) {
            return;
        }
        if (!isEliteBossMap() && !isEliteBossRewardMap()) {
            if (force) {
                final int numShouldSpawn = monsterSpawn.size() - spawnedMonstersOnMap.get();
                if (numShouldSpawn > 0) {
                    int spawned = 0;
                    for (Spawns spawnPoint : monsterSpawn) {
                        spawnPoint.spawnMonster(this);
                        spawned++;
                        if (spawned >= numShouldSpawn) {
                            break;
                        }
                    }
                }
            } else {
                if (getCharactersSize() <= 0) {
                    return;
                }
                final int numShouldSpawn = maxRegularSpawn - spawnedMonstersOnMap.get();
                if (numShouldSpawn > 0) {
                    int spawned = 0;
                    final List<Spawns> randomSpawn = new ArrayList<Spawns>(monsterSpawn);
                    Collections.shuffle(randomSpawn);
                    for (Spawns spawnPoint : randomSpawn) {
                        if (spawnPoint.shouldSpawn()) {
                            spawnPoint.spawnMonster(this);
                            spawned++;
                        }
                        if (spawned >= numShouldSpawn) {
                            break;
                        }
                    }
                }
            }
        }
    } 

    private static interface DelayedPacketCreation {

        void sendPackets(MapleClient c);
    }

    private static interface SpawnCondition {

        boolean canSpawn(MapleCharacter chr);
    }
    
    public Collection<MapleCharacter> getNearestPvpChar(Point attacker, double maxRange, double maxHeight, boolean isLeft, Collection<MapleCharacter> chr) {
        Collection<MapleCharacter> character = new LinkedList<MapleCharacter>();
        for (MapleCharacter a : characters) {
            if (chr.contains(a.getClient().getPlayer())) {
                Point attackedPlayer = a.getPosition();
                MaplePortal Port = a.getMap().findClosestSpawnpoint(a.getPosition());
                Point nearestPort = Port.getPosition();
                double safeDis = attackedPlayer.distance(nearestPort);
                double distanceX = attacker.distance(attackedPlayer.getX(), attackedPlayer.getY());

                if (isLeft) {
                    if (attacker.x < attackedPlayer.x && distanceX < maxRange && distanceX > 1
                            && attackedPlayer.y >= attacker.y - maxHeight && attackedPlayer.y <= attacker.y + maxHeight) {
                        character.add(a);
                    }
                } else {
                    if (attacker.x > attackedPlayer.x && distanceX < maxRange && distanceX > 1
                            && attackedPlayer.y >= attacker.y - maxHeight && attackedPlayer.y <= attacker.y + maxHeight) {
                        character.add(a);
                    }
                }
            }
        }
        return character;
    }
    
    public void startCatch() {
        if (catchstart == null) {
            broadcastMessage(MainPacketCreator.getClock(180));
            catchstart = MapTimer.getInstance().schedule(new Runnable() {
                @Override
                public void run() {
                    broadcastMessage(MainPacketCreator.serverNotice(1, "제한시간 2분이 지나 양이 승리하였습니다!\r\n모든 분들은 게임 보상맵으로 이동됩니다."));
                    for (MapleCharacter chr : getCharacters()) {
                        chr.getStat().setHp(chr.getStat().getMaxHp());
                        chr.updateSingleStat(PlayerStat.HP, chr.getStat().getMaxHp());
                        if (chr.isCatching) {
                            chr.changeMap(chr.getClient().getChannelServer().getMapFactory().getMap(109090201), chr.getClient().getChannelServer().getMapFactory().getMap(109090201).getPortalSP().get(0));
                        } else {
                            chr.changeMap(chr.getClient().getChannelServer().getMapFactory().getMap(109090100), chr.getClient().getChannelServer().getMapFactory().getMap(109090100).getPortalSP().get(0));
                        }
                    }
                    stopCatch();
                }
            }, 180000);
        }
    }

    public void stopCatch() {
        if (catchstart != null) {
            catchstart.cancel(true);
            catchstart = null;
        }
    }
   
    public void startTheSid(int type) {
       if(type == 1) {
            broadcastMessage(MainPacketCreator.showEffect("defense/count"));
            broadcastMessage(TheSidPacket.TheSidMessage("곧 있으면 몬스터들이 나올거야 전투를 준비해줘!!", 3000));
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/wave/1"));
            broadcastMessage(TheSidPacket.TheSidMessage("우선 고대 슬라임을 모두 물리쳐줘!!", 3000));
            for (int i = 0; i < 30; i ++) {
                MapleMonster mob = MapleLifeProvider.getMonster(Randomizer.rand(9309047,9309046));
                spawnMonsterOnGroundBelow(mob, new Point(333,155));
                    }
                }
            }, 5000);
      } else if (type == 2) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/count"));    
            broadcastMessage(TheSidPacket.TheSidMessage("고대 거북이 들을 진압해줘!!", 3000));
                }
            }, 3000);
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/wave/2"));    
            for(int i = 0; i < 30; i ++) {
                MapleMonster mob = MapleLifeProvider.getMonster(Randomizer.rand(9309042, 9309043));
                spawnMonsterOnGroundBelow(mob, new Point(333,155));
                    }
                }
            }, 6000);
      } else if (type == 3) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/count"));    
            broadcastMessage(TheSidPacket.TheSidMessage("화산 벌래들에게 누적데미지 50억을 만들어줘!!", 3000));
                }
            }, 3000);
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/wave/3"));    
            for(int i = 0; i < 30; i ++) {
                MapleMonster mob = MapleLifeProvider.getMonster(Randomizer.rand(9309044, 9309045));
                spawnMonsterOnGroundBelow(mob, new Point(333,155));            
                    }
                }
            }, 6000);
      } else if (type == 4) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/count"));    
            broadcastMessage(TheSidPacket.TheSidMessage("간부중 하나인 거대 거미가 나올거야 거대 거미를 처치해줘!!", 3000));
                }
            }, 3000);
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/wave/4"));    
            MapleMonster mob = MapleLifeProvider.getMonster(9309201);
            spawnMonsterOnGroundBelow(mob, new Point(333,155));            
                }
            }, 6000);      
      } else if (type == 5) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/count"));    
            broadcastMessage(TheSidPacket.TheSidMessage("간부중 하나인 양철 나무꾼이 나올거야 양철 나무꾼을 처치해줘!!", 3000));
                }
            }, 2000);
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/wave/5"));    
            MapleMonster mob = MapleLifeProvider.getMonster(9309205);
            spawnMonsterOnGroundBelow(mob, new Point(-461,108));            
                }
            }, 6000);         
      } else if (type == 6) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/count"));    
            broadcastMessage(TheSidPacket.TheSidMessage("간부중 하나인 겁에 질린 사자가 나올거야 겁에 질린 사자를 처치해줘!!", 3000));
                }
            }, 2000);
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/wave/6"));    
            MapleMonster mob = MapleLifeProvider.getMonster(9309200);
            spawnMonsterOnGroundBelow(mob, new Point(1273,155));
                }
            }, 6000);         
      } else if (type == 7) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/count"));    
            broadcastMessage(TheSidPacket.TheSidMessage("간부중 하나인 허수아비가 나올거야 허수아비를 처치해줘!!", 3000));
                }
            }, 2000);
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/wave/7"));    
            MapleMonster mob = MapleLifeProvider.getMonster(9309203);
            spawnMonsterOnGroundBelow(mob, new Point(1273,155));
                }
            }, 6000);         
      } else if (type == 8) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/count"));    
            broadcastMessage(TheSidPacket.TheSidMessage("마지막 간부인 도로시가 나올꺼야 단단히 준비해둬!!", 3000));
                }
            }, 2000);
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
            broadcastMessage(MainPacketCreator.showEffect("defense/wave/8"));    
            MapleMonster mob = MapleLifeProvider.getMonster(9309207);
            spawnMonsterOnGroundBelow(mob, new Point(77,185));
                }
            }, 6000);        
        }
    }
    
    public void resetTheSid(int type) {
        if(type == 10) {
            for(int i = 0; i < 10; i ++) {
                this.newthesid[i] = false;
            }
        }
        슬라임카운트 = 0;
        거북이카운트 = 0;
        화산벌레카운트 = 0;
    }
    
    public void TheSidMain(MapleMonster monster) {
        if (monster.getId() == 9309205) {
                  broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
                  broadcastMessage(TheSidPacket.TheSidMessage("양철 나무꾼을 처치하다니 대단해!!",3000));
                  this.spawnNpc(2540005, new Point(-461,108));
         } else if (monster.getId() == 9309200) {
                  broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
                  broadcastMessage(TheSidPacket.TheSidMessage("겁에 질린 사자를 처치하다니 대단해!!", 3000));
                  spawnNpc(2540005,new Point(1273,155));
         } else if (monster.getId() == 9309203) {
                  broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
                  broadcastMessage(TheSidPacket.TheSidMessage("허수아비를 처치하다니 대단해!!", 3000));
                  spawnNpc(2540005,new Point(1273,155));
         } else if (monster.getId() == 9309207) {
                  broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
                  broadcastMessage(TheSidPacket.TheSidMessage("더 시드를 구한걸 정말 축하해!!", 3000));
                  spawnNpc(2540005,new Point(77,185));
         } else if(!newthesid[0]) {
               슬라임카운트 ++;
               if(슬라임카운트 == 30 || 슬라임카운트 == 60 || 슬라임카운트 == 90 || 슬라임카운트 == 120 || 슬라임카운트 == 150 || 슬라임카운트 == 180 || 슬라임카운트 == 210 || 슬라임카운트 == 240 || 슬라임카운트 == 270) {
                       for (int i = 0; i < 30; i ++) {
                           MapleMonster mob = MapleLifeProvider.getMonster(Randomizer.rand(9309047,9309046));
                           spawnMonsterOnGroundBelow(mob, new Point(333,155));
                   }
              } else if (슬라임카운트 == 300) {
                  broadcastMessage(TheSidPacket.TheSidMessage("잠시뒤에 또다른 몬스터가 나올거야!! 긴장을 늦추지 말아줘!", 3000));
                  broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
                  newthesid[0] = true;
                  startTheSid(2);
              }
         } else if (!newthesid[1]) {
               거북이카운트 ++;
               if(거북이카운트 == 30 || 거북이카운트 == 60 || 거북이카운트 == 90 || 거북이카운트 == 120 || 거북이카운트 == 150 || 거북이카운트 == 180 || 거북이카운트 == 210 || 거북이카운트 == 240 || 거북이카운트 == 270 || 거북이카운트 == 300 || 거북이카운트 == 330 || 거북이카운트 == 360 || 거북이카운트 == 390 || 거북이카운트 == 420 || 거북이카운트 == 450 || 거북이카운트 == 480) {
                       for (int i = 0; i < 30; i ++) {
                           MapleMonster mob = MapleLifeProvider.getMonster(Randomizer.rand(9309042,9309043));
                           spawnMonsterOnGroundBelow(mob, new Point(333,155));
                   }
              } else if (거북이카운트 == 510) {
                  broadcastMessage(TheSidPacket.TheSidMessage("잠시뒤에 또다른 몬스터가 나올거야!! 긴장을 늦추지 말아줘!", 3000));
                  broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
                  newthesid[1] = true;
                  startTheSid(3);
              }
         } else if (!newthesid[2]) {
             화산벌레카운트 ++;
             if(화산벌레카운트 == 30) {
                 화산벌레카운트 = 0;
                   for (int i = 0; i < 30; i ++) {
                      MapleMonster mob = MapleLifeProvider.getMonster(Randomizer.rand(9309044,9309045));
                      spawnMonsterOnGroundBelow(mob, new Point(333,155));
                   }
             }
         } else if (!newthesid[3]) {
                   broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
                  broadcastMessage(TheSidPacket.TheSidMessage("거대 거미를 처치하다니 대단해!!",3000));
                  this.spawnNpc(2540005, new Point(333,155));
                  newthesid[3] = true;
            }
    }
    
    public void TheSidClear(final int type, MapleCharacter chr) {
        for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
            if(type == 10) {
             partymem.TheSidClear(10,500000,100);
             partymem.gainExp(500000, true, true, true);
            } else if(type == 20) {
             partymem.TheSidClear(18,600000,100);   
             partymem.gainExp(600000, true, true, true);
            } else if (type == 30) {
             partymem.TheSidClear(30,700000,100);   
             partymem.gainExp(700000, true, true, true);
            } else if (type == 40) {
             partymem.TheSidClear(40,800000,100);
             partymem.gainExp(800000, true, true, true);
            } else if (type == 50) {
             partymem.TheSidClear(50,12345,100);   
             partymem.gainExp(900000, true, true, true);
            }
            partymem.send(UIPacket.getItemTopMsg(2431694, " 클리어 보상으로 10주년 선물상자 200개가 지급 되었습니다."));
            partymem.gainItem(2431694, (short)200, false, -1,  "더 시드");
        }
    }
    
    public short 평균레벨(MapleCharacter chr) {
        int a = 0;
        for (MaplePartyCharacter pchr : chr.getParty().getMembers()) {
            a += pchr.getLevel();
        }
        return (short)(a / chr.getParty().getMembers().size());
    }
    
    public void 리셋디멘션인베이드() {
        for (int i = 0; i < 5; i ++) {
            디멘션인베이드[i] = 0;
        }
    }
    
    public void 디멘션인베이드진행(int type,final MapleCharacter chr,MapleMonster monster) {
        if(디멘션인베이드[0] == 1) {
            디멘션인베이드[2] ++;
            디멘션인베이드[4] --;
            showGage(디멘션인베이드[4],chr);
            if(디멘션인베이드[2] == 13 || 디멘션인베이드[2] ==  26 || 디멘션인베이드[2] == 39 || 디멘션인베이드[2] == 52) {
             for (int i = 0; i < 3; i ++) {
                MapleMonster mob = MapleLifeProvider.getMonster(9300618);
                mob.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob, new Point((2794 + Randomizer.nextInt(250)),29));
                디멘션인베이드[4]++;
                showGage(디멘션인베이드[4],chr);
            }
            for (int i = 0; i < 10; i ++) {
                MapleMonster mob = MapleLifeProvider.getMonster(9300619);
                mob.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob, new Point((2794 + (i == 0 ? 10 : i == 1 ? 50 : i == 2 ? 100 : i == 3 ? 150 : i == 4 ? 200 : i == 5 ? 250 : i == 6 ? 300 : i == 7 ? 350 : i == 8 ? 400 : 450)),29));
                디멘션인베이드[4]++;
                showGage(디멘션인베이드[4],chr);
            }
            } else if (디멘션인베이드[2] >= 65) {
                broadcastMessage(MainPacketCreator.addStageData(1, "710921"));
                broadcastMessage(MainPacketCreator.showStageClear(false));
                 for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                 partymem.gainExp(710921, true, true, true);
                }
                 디멘션인베이드[4] = 0;
                 showGage(디멘션인베이드[4],chr);
                 디멘션인베이드[2] = 0;
                 디멘션인베이드(2,chr);
            }
        } else if (디멘션인베이드[0] == 2) {
            디멘션인베이드[2] ++;
            디멘션인베이드[3] --;
            showGage(디멘션인베이드[4],chr);
            if(monster.getId() == 9300622 && monster.getHp() == 0) {
                killAllMonsters(true);
                broadcastMessage(MainPacketCreator.addStageData(1, "1070172"));
                broadcastMessage(MainPacketCreator.showStageClear(false));
                 for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                 partymem.gainExp(1070172, true, true, true);
                }
                디멘션인베이드[4] = 0;
                showGage(디멘션인베이드[4],chr);
                디멘션인베이드[0] = 3;
                디멘션인베이드(3,chr);
            } else if (디멘션인베이드[2] == 10) {
                디멘션인베이드[2] = 0;
               for (int i = 0; i < 10; i ++) {
                MapleMonster mob1 = MapleLifeProvider.getMonster(Randomizer.rand(9300620,9300621));
                mob1.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob1, new Point((2794 + (i == 0 ? 10 : i == 1 ? 50 : i == 2 ? 100 : i == 3 ? 150 : i == 4 ? 200 : i == 5 ? 250 : i == 6 ? 300 : i == 7 ? 350 : i == 8 ? 400 : 450)),29));
                디멘션인베이드[4]++; 
                showGage(디멘션인베이드[4],chr);
               }
            }
        } else if (디멘션인베이드[0] == 3) {
            디멘션인베이드[2] ++;
            디멘션인베이드[4] --;
            showGage(디멘션인베이드[4],chr);
            if(디멘션인베이드[2] == 200) {
                killAllMonsters(true);
                스켈레곤.cancel(false);
                스켈레곤 = null;
                timeo = 0;
                디멘션인베이드[2] = 0;
                디멘션인베이드[0] = 4;
                디멘션인베이드[4] = 0;
                showGage(디멘션인베이드[4],chr);
                디멘션인베이드(4,chr);
                broadcastMessage(MainPacketCreator.ObjectAnimation(true));
                broadcastMessage(MainPacketCreator.addStageData(1, "1770992"));
                broadcastMessage(MainPacketCreator.showStageClear(false));
                for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                 partymem.gainExp(1770992, true, true, true);
                }
            }
        } else if (디멘션인베이드[0] == 4) {
            final int level = chr.getLevel();
            디멘션인베이드[2] ++;
            디멘션인베이드[3] ++;
            디멘션인베이드[4] --;
            showGage(디멘션인베이드[4],chr);
            if(디멘션인베이드[2] == 120) {
                killAllMonsters(true);
                디멘션인베이드[2] = 0;
                디멘션인베이드[0] = 5;
                디멘션인베이드(5,chr);
                디멘션인베이드[4] = 0;
                showGage(디멘션인베이드[4],chr);
                broadcastMessage(MainPacketCreator.addStageData(1, "2370992"));
                broadcastMessage(MainPacketCreator.showStageClear(false));
                for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                 partymem.gainExp(2370992, true, true, true);
                }
            } else if(디멘션인베이드[3] >= 8) {
            디멘션인베이드[3] = 0;
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
               for(int i = 0; i < 8; i ++) {
                MapleMonster mob1 = MapleLifeProvider.getMonster(9300621);
                mob1.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob1, new Point((2003 + Randomizer.nextInt(500)),29));                    
                디멘션인베이드[4] ++;    
                showGage(디멘션인베이드[4],chr);
                    }
                }
            },3000);
            
            }             
        } else if (디멘션인베이드[0] == 5) {
            디멘션인베이드[2] ++;
            디멘션인베이드[4] --;
            showGage(디멘션인베이드[4],chr);
            if(monster.getId() == 9300634 && monster.getHp() <= 0) {
                killAllMonsters(true);
                broadcastMessage(MainPacketCreator.addStageData(1,"4380992"));
                broadcastMessage(MainPacketCreator.addStageData(2, "2431127"));
                broadcastMessage(MainPacketCreator.showStageClear(true));
                for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                 partymem.gainExp(2370992, true, true, true);
                 EtcTimer tMan1 = EtcTimer.getInstance();
                 tMan1.schedule(new Runnable() {
                 @Override
                public void run() {
                   partymem.warp(940020000);
                }
              },4000);
                }
                broadcastMessage(MainPacketCreator.getClock(3));
            } else if(디멘션인베이드[2] == 10) {
               for (int i = 0; i < 20; i ++) {
                MapleMonster mob1 = MapleLifeProvider.getMonster(9300619);
                mob1.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob1, new Point((2794 + Randomizer.nextInt(450)),29));
                디멘션인베이드[2] = 0;
                디멘션인베이드[4] ++;
                showGage(디멘션인베이드[4],chr);
                }
            }
        }
    }
    
    public void 디멘션인베이드(int type,final MapleCharacter chr) {
        if(type == 1) {
            디멘션인베이드[0] = 1;
            broadcastMessage(MainPacketCreator.showEffect("killing/first/start"));
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
            for (int i = 0; i < 3; i ++) {
                MapleMonster mob = MapleLifeProvider.getMonster(9300618);
                mob.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob, new Point((2794 + (i == 0 ? 10 : i == 1 ? 50 : 100)),29));
                디멘션인베이드[4] ++;
                showGage(디멘션인베이드[4],chr);
            }
            for (int i = 0; i < 10; i ++) {
                MapleMonster mob = MapleLifeProvider.getMonster(9300619);
                mob.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob, new Point((2794 + (i == 0 ? 10 : i == 1 ? 50 : i == 2 ? 100 : i == 3 ? 150 : i == 4 ? 200 : i == 5 ? 250 : i == 6 ? 300 : i == 7 ? 350 : i == 8 ? 400 : 450)),29));
                디멘션인베이드[4] ++;
                showGage(디멘션인베이드[4],chr);
            }
          }
       }, 5000);
            
        } else if(type == 2) {
            디멘션인베이드[0] = 2;
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
                broadcastMessage(MainPacketCreator.showEffect("killing/first/start"));
          }
       }, 6000);            
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
                MapleMonster mob = MapleLifeProvider.getMonster(9300622);
                mob.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob,new Point(2794,10));
                디멘션인베이드[4] ++;
               for (int i = 0; i < 10; i ++) {
                MapleMonster mob1 = MapleLifeProvider.getMonster(9300619);
                mob1.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob1, new Point((2794 + (i == 0 ? 10 : i == 1 ? 50 : i == 2 ? 100 : i == 3 ? 150 : i == 4 ? 200 : i == 5 ? 250 : i == 6 ? 300 : i == 7 ? 350 : i == 8 ? 400 : 450)),29));
                디멘션인베이드[4] ++;
                 showGage(디멘션인베이드[4],chr);
               }
          }
       }, 8000);  
           
        } else if (type == 3) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
                broadcastMessage(MainPacketCreator.showEffect("killing/first/start"));
                broadcastMessage(MainPacketCreator.ObjectAnimation(false));
          }
       }, 6000);  
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
                for(int i = 0; i < 13; i ++) {
                MapleMonster mob1 = MapleLifeProvider.getMonster(9300625);
                mob1.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob1, new Point((2794 + (i == 0 ? 10 : i == 1 ? 50 : i == 2 ? 100 : i == 3 ? 150 : i == 4 ? 200 : i == 5 ? 250 : i == 6 ? 300 : i == 7 ? 350 : i == 8 ? 400 : 450)),29));                    
                디멘션인베이드[4] ++;
                showGage(디멘션인베이드[4],chr);
                }
                timeo=0;
                스켈레곤젠(chr,1);
          }
       }, 8000);
            
        } else if (type == 4) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
                broadcastMessage(MainPacketCreator.showEffect("killing/first/start"));
          }
       }, 6000);
            디멘션인베이드[3] = 0;
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
                for(int i = 0; i < 8; i ++) {
                MapleMonster mob1 = MapleLifeProvider.getMonster(9300621);
                mob1.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob1, new Point((2003 + Randomizer.nextInt(500)),29));   
                디멘션인베이드[4] ++;
                showGage(디멘션인베이드[4],chr);
                }
          }
       }, 8000);
        } else if (type == 5) {
            EtcTimer tMan = EtcTimer.getInstance();
            tMan.schedule(new Runnable() {
            @Override
            public void run() {
                broadcastMessage(MainPacketCreator.showEffect("monsterPark/stageEff/final"));
            }
            }, 6000);
            EtcTimer tMan1 = EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
                MapleMonster mob = MapleLifeProvider.getMonster(9300634);
                mob.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob,new Point(2794,10));
                디멘션인베이드[4] ++;
               for (int i = 0; i < 20; i ++) {
                MapleMonster mob1 = MapleLifeProvider.getMonster(9300619);
                mob1.getStats().setLevel(평균레벨(chr));
                spawnMonsterOnGroundBelow(mob1, new Point((2794 + Randomizer.nextInt(450)),29));
                디멘션인베이드[4] ++;       
                    }
                 }
            }, 10000);     
            showGage(디멘션인베이드[4],chr);
        }
    }
    
   public void setMistic(boolean a) {
      this.mistic = a;
    }
    
   public void setTheSidClear(boolean a) {
       this.thesidclear = a;
   }
   
    public boolean getMistic() {
        return this.mistic;
    }
    
    public void setDamage(boolean a, long i) {
        if(a) {
            damage = i;
        } else {
            damage += i;
        }
    }
    
    public long getDamage() {
        return damage;
    }
    
   
    public void setMobCount(boolean a, long i) {
        if(a) {
            mobcount = i;
        } else {
            mobcount += i;
        }
    }
    
    public long getMobCount() {
        return mobcount;
    }
    
    public boolean getTheSidClear() {
        return thesidclear;
    }
    
    public int getTheSid3Check(int i) {
        return thesid3check[i];
    }
    
    public void setTheSid3Check(int i, int b,boolean reset) {
        if(reset) {
        this.thesid3check[0] = 0;
        this.thesid3check[1] = 0;
        this.thesid3check[2] = 0;
        this.thesid3check[3] = 0;
        } else {
        this.thesid3check[i] += b;
    }
  }
    
    public int getTheSid4Check(int i) {
        return thesid4check[i];
    }
    
    public void setTheSid4Check(int a, int b, boolean reset) {
        if(reset) {
          this.thesid4check[0] = 0;
          this.thesid4check[1] = 0;
          this.thesid4check[2] = 0;
          this.thesid4check[3] = 0;
          this.thesid4check[4] = 0;
        } else {
            if(a == 3) {
            this.thesid4check[a] = b;
            } else {
            this.thesid4check[a] += b;    
            }
           
        }
    }
    
    public boolean getTheSid4LandR(int type, Point a) {
        if(type == 1) {//L
        if(a.getX() >=-933 && a.getX() <= 332) {
        return true;
        }
        } else if (type == 2) {//R
        if(a.getX() >=948 && a.getX() <= 1949) {
        return true;
        }
        }
        return false;
    }
    
    public void setTheSid4Mob(boolean a) {
        this.thesid4mob = a;
    }
    
    public int getTheSid6Check(int type) {
        return thesid6check[type];
    }
    
    public void setTheSid6Check(int type,int i,boolean reset) {
        if(reset) {
            thesid6check[0] = 0;
            thesid6check[1] = 0;
        } else {
            thesid6check[type] += i;
        }
    } 
    
    public int getTheSid7Check() {
        return thesid7check;
    }

    public void setTheSid7Check(int i, boolean reset) {
        if(reset) {
            thesid7check = 0;
        } else {
            thesid7check += i;
        }
    }
    
    public int getTheSid8Check() {
        return thesid8check;
    }
    
    public void setTheSid8Check(int i, boolean reset) {
        if(reset) {
            thesid8check = 0;
        } else {
            thesid8check += i;
        }
    }
    
    public void setTheSidClear(int i,boolean a) {
        this.newthesid[i] = a;
    }
    
    public boolean getnewTheSidClear(int i) {
        return this.newthesid[i];
    }
   
    
      public void 스켈레곤젠(final MapleCharacter chr,final int type) {
        if (스켈레곤 == null) {
            스켈레곤 = tools.Timer.WorldTimer.getInstance().register(new Runnable() {
                public void run() {
                    if (timeo == 20) {
                        스켈레곤.cancel(false);
                        스켈레곤 = null;
                        timeo = 0;
                        return;
                    } else {
                        if(type == 1) {
                        final int x = 좌표계산(Randomizer.nextInt(3),0,true);
                        final int y = x == 2147 ? -451 : 29;
                        for(int i = 0; i < 13; i ++) {
                        MapleMonster mob1 = MapleLifeProvider.getMonster(9300625);
                        mob1.getStats().setLevel(chr.getLevel());
                        spawnMonsterOnGroundBelow(mob1, new Point((x + Randomizer.nextInt(50)),y));
                        디멘션인베이드[4] ++;
                        showGage(디멘션인베이드[4],chr);
                        }                        
                        timeo++;
                        } else {
                        final int x = (2003 + Randomizer.nextInt(50));
                        final int y = 29;
                        for(int i = 0; i < 13; i ++) {
                        MapleMonster mob1 = MapleLifeProvider.getMonster(9300621);
                        mob1.getStats().setLevel(chr.getLevel());
                        spawnMonsterOnGroundBelow(mob1, new Point(x,y));
                        디멘션인베이드[4] ++;
                        showGage(디멘션인베이드[4],chr);
                        }
                        
                        timeo++;                            
                        }
                    }
                }
            }, 5000);
        }
    }
      
        public void showGage(int i, final MapleCharacter chr) {
            chr.getMap().broadcastMessage(MainPacketCreator.showGageUI(i));
            if (i >= 70) {
                chr.getMap().killAllMonsters(true);
                리셋디멘션인베이드();
                스켈레곤.cancel(false);
                스켈레곤 = null;
                timeo = 0;
                chr.getMap().broadcastMessage(MainPacketCreator.showEffect("killing/fail"));
                chr.getMap().broadcastMessage(MainPacketCreator.getClock(3));
                for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                 tools.Timer.EtcTimer tMan1 = tools.Timer.EtcTimer.getInstance();
                 tMan1.schedule(new Runnable() {
                 @Override
                public void run() {
                   partymem.warp(940020000);
                }
              },3000);
                }
            }
        }
      
      public int 좌표계산(int x, int y,boolean g) {
            if (x == 0) {//3573
                x = 2794;
            } else if (x == 1) {
                x = 3573;
            } else {
                x = 2147;
            }
            if (x == 2147) {
                y = -451;
            } else {
                y = 29;
            }
            if(g) {
            return x;
            } else {
                return y;
            }
      }
      
      public final MapleCharacter getCharacterById(MapleCharacter player, final int id) {
        for (MapleCharacter chr : player.getMap().getCharacters()) {
            if (chr.getId() == id) {
                return chr;
            }
        }
        return null;
    }
      
      public boolean isRespawn() {
          return 리스폰;
      }
      
      public void setRespawn(boolean a) {
          리스폰 = a;
      }
      
      public void 미스틱혼테일(int i) {
          미스틱혼테일 = i;
      }
      
      public void 카오스혼테일(int i) {
          카오스혼테일 = i;
      }
      
      public void 엔피시리스폰() {
        try {
            Connection con = MYSQL.getConnection();
            String sql = "SELECT * FROM `spawn` WHERE mapid = "+mapid+" AND type = 'n'";
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                if (!엔피시체크(rs.getInt("lifeid"))) {
                    {
                        final MapleNPC npc = MapleLifeProvider.getNPC(rs.getInt("lifeid"));
                        npc.setRx0(rs.getInt("rx0"));
                        npc.setRx1(rs.getInt("rx1"));
                        npc.setCy(rs.getInt("cy"));
                        npc.setF(rs.getInt("dir"));
                        npc.setFh(rs.getInt("fh"));
                        npc.setPosition(new Point (npc.getRx0() + 50, npc.getCy()));
                        if (npc != null) {
                            addMapObject(npc);
                        } else {
                            System.err.println("[오류] 엔피시 데이터를 만드는중 널 포인터 오류가 발생했습니다.");
                        }
                    }
                }
            }
        } catch (Exception e) {
            System.err.println("[오류] 엔피시를 DB로부터 불러오는데 오류가 발생했습니다.");
            if (!ServerConstants.realese) e.printStackTrace();
        }
      }
    
      public boolean 엔피시체크(int i) {
            for (MapleMapObject ob : getAllNPC()) {
                MapleNPC imsi = (MapleNPC)ob;
                if (imsi.getId() == i) {
                    return true;
                }
            }
            return false;
      }
      
      public void 보스레이드리셋() {
          보스레이드난이도 = 0;
          보스레이드 = 0;
      }
      
      public void 베타구출(final MapleCharacter chr,final int a) {
        if (베타구출C[0] == 0) {  
            broadcastMessage(MainPacketCreator.getNPCTalk(3000131, (byte) 0, "겁도없이 이곳에 오다니 각오하는게 좋을거다!!", "00 00", (byte) 0));
        } else if (베타구출C[0] == 11 && 베타구출C[1] == 11) {
            broadcastMessage(MainPacketCreator.getNPCTalk(3000131, (byte) 0, "녀석 재법이군, 미완성이긴 하지만 과연 이녀석도 막을 수 있을까!!", "00 00", (byte) 0));
        }
          {
              EtcTimer tMan = EtcTimer.getInstance();
              tMan.schedule(new Runnable() {
              @Override
                public void run() {
                    broadcastMessage(MainPacketCreator.showEffect("defense/count"));
                }
              }, a > 1 ? 5000 : 3000);
          }
          
          {
              EtcTimer tMan = EtcTimer.getInstance();
              tMan.schedule(new Runnable() {
              @Override
                public void run() {
                    broadcastMessage(TheSidPacket.TopMessage("어두운 기운과 함께 강력한 몬스터가 출현합니다.",138,3000));
                    broadcastMessage(MainPacketCreator.playSound("Field.img/eliteMonster/Regen"));
                    if (베타구출C[0] == 0 && 베타구출C[1] == 0) {
                        베타구출C[0] = 1;
                        int mobid[] = {9300817,9300818,9300819};
                        for (int i = 0; i < 10; i ++) {
                            {
                                int mobcode = mobid[Randomizer.nextInt(mobid.length)];
                                MapleMonster dumi = MapleLifeProvider.getMonster(mobcode);
                                final OverrideMonsterStats overrideStats = new OverrideMonsterStats();
                                overrideStats.setOHp(dumi.getMobMaxHp() * 10);
                                overrideStats.setOExp(dumi.getMobExp() * 2);                
                                MapleMonster mob = MapleLifeProvider.getMonster(dumi.getId());
                                mob.setHp(dumi.getMobMaxHp() * 20);
                                mob.setOverrideStats(overrideStats);
                                spawnMonsterOnGroundBelow(mob,new Point((short)(369 - Randomizer.nextInt(300)),(short)chr.getPosition().getY()));
                            }
                        }
                    } else if (베타구출C[0] == 11 && 베타구출C[1] == 0) {
                        베타구출C[1] = 1;
                        int mobid[] = {9300820,9300821,9300822};
                        for (int i = 0; i < 10; i ++) {
                            {
                                int mobcode = mobid[Randomizer.nextInt(mobid.length)];
                                MapleMonster dumi = MapleLifeProvider.getMonster(mobcode);
                                final OverrideMonsterStats overrideStats = new OverrideMonsterStats();
                                overrideStats.setOHp(dumi.getMobMaxHp() * 10);
                                overrideStats.setOExp(dumi.getMobExp() * 2);                
                                MapleMonster mob = MapleLifeProvider.getMonster(dumi.getId());
                                mob.setHp(dumi.getMobMaxHp() * 20);
                                mob.setOverrideStats(overrideStats);
                                spawnMonsterOnGroundBelow(mob,new Point((short)(369 - Randomizer.nextInt(300)),(short)chr.getPosition().getY()));
                            }
                        }
                    } else if (베타구출C[0] == 11 && 베타구출C[1] == 11) {
                        final OverrideMonsterStats overrideStats = new OverrideMonsterStats();
                        overrideStats.setOHp(100000000);
                        overrideStats.setOExp(20000000);                
                        MapleMonster mob = MapleLifeProvider.getMonster(9300808);
                        mob.setHp(100000000);
                        mob.getStats().setAcc(mob.getStats().getAcc() * 50);
                        mob.setOverrideStats(overrideStats);
                        spawnMonsterOnGroundBelow(mob,new Point((short)(369),(short)chr.getPosition().getY()));
                    }
                    broadcastMessage(MainPacketCreator.showEffect("defense/wave/" + a));
                }
              }, a > 1 ? 8000 : 6000);
          }
      }
      
      public void 보스레이드(int i, final long ftime, final long stime) {
          if (i > 0)
          보스레이드난이도 = i;
          int mobid = 0;
          switch (보스레이드난이도) {
              case 1:
                  mobid = 보스레이드몬스터이지[보스레이드];
                  보스레이드좌표[0] = 127;
                  보스레이드좌표[1] = -435;
                  break;
              case 2:
                  mobid = 보스레이드몬스터노말[보스레이드];
                  보스레이드좌표[0] = 427;
                  보스레이드좌표[1] = 260;                  
                  break;
              case 3:
                  mobid = 보스레이드몬스터하드[보스레이드];
                  보스레이드좌표[0] = 918;
                  보스레이드좌표[1] = 2;
                  break;
              case 4:
                  mobid = 보스레이드몬스터헬[보스레이드];
                  보스레이드좌표[0] = 1972;
                  보스레이드좌표[1] = -139;
                  break;
          }
          final int monsterid = mobid;
          if (보스레이드 == 0)
          broadcastMessage(UIPacket.detailShowInfo("보스레이드 인스텐스에 입장하신걸 환영합니다.", false));
          보스레이드 ++;
          {
              EtcTimer tMan = EtcTimer.getInstance();
              tMan.schedule(new Runnable() {
              @Override
                public void run() {
                    broadcastMessage(MainPacketCreator.showEffect("defense/count"));
                }
              }, ftime);
          }
          
          {
              EtcTimer tMan = EtcTimer.getInstance();
              tMan.schedule(new Runnable() {
              @Override
                public void run() {
                    MapleMonster mob = MapleLifeProvider.getMonster(monsterid);
                    spawnMonsterOnGroundBelow(mob,new Point(보스레이드좌표[0],보스레이드좌표[1]));
                    broadcastMessage(UIPacket.detailShowInfo(보스레이드 + "단계 보스몬스터가 소환 되었습니다.", false));
                    broadcastMessage(MainPacketCreator.showEffect("defense/wave/" + 보스레이드));
                }
              }, stime);
          }
      }
      
      public boolean is구출() {
          return 베타구출;
      }
      
      public void set구출(boolean a) {
          베타구출 = a;
      }
      
      public void set베타구출() {
          베타구출C[0] = 0;
          베타구출C[1] = 0;
      }
      
      public byte getChannel() {
    	  return channel;
      }

      public final void spawnMist(final MapleMist mist, final int duration, boolean poison, boolean fake, boolean rv, boolean burningregion, boolean timecapsule, boolean spped, boolean freeze, boolean zero) {
          spawnAndAddRangedMapObject(mist, new DelayedPacketCreation() {
              @Override
              public void sendPackets(MapleClient c) {
                  broadcastMessage(MainPacketCreator.spawnMist(mist));
              }
          }, null);

          final MapTimer tMan = MapTimer.getInstance();
          final ScheduledFuture<?> poisonSchedule;

          if (poison) {
              poisonSchedule = tMan.register(new Runnable() {
                  @Override
                  public void run() {
                      for (final MapleMapObject mo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.MONSTER))) {
                          if (mist.makeChanceResult()) {
                              ((MapleMonster) mo).applyStatus(mist.getOwner(), new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), mist.getSourceSkill(), null, false), false, duration, false);
                          }
                      }
                  }
              }, 2000, 2500);
          } else if (rv) {
              poisonSchedule = tMan.register(new Runnable() {
                  @Override
                  public void run() {
                      for (final MapleMapObject mo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.PLAYER))) {
                          if (mist.makeChanceResult()) {
                              final MapleCharacter chr = ((MapleCharacter) mo);
                              chr.addMP((int) (mist.getSource().getX() * (chr.getStat().getMaxMp() / 100.0)));
                          }
                      }
                  }
              }, 2000, 2500);
          } else if (spped) {
              poisonSchedule = tMan.register(new Runnable() {
                  @Override
                  public void run() {
                      for (final MapleMapObject mo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.MONSTER))) {
                          if (mist.makeChanceResult()) {
                              ((MapleMonster) mo).applyStatus(mist.getOwner(), new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.SPEED, 1), mist.getSourceSkill(), null, false), false, duration, false);
                              ((MapleMonster) mo).applyStatus(mist.getOwner(), new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.WDEF, 1), mist.getSourceSkill(), null, false), false, duration, false);
                              ((MapleMonster) mo).applyStatus(mist.getOwner(), new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.WATK, 1), mist.getSourceSkill(), null, false), false, duration, false);
                          }
                      }
                  }
              }, 2000, 2500);
          } else if (freeze) {
              poisonSchedule = tMan.register(new Runnable() {
                  @Override
                  public void run() {
                      for (final MapleMapObject mo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.MONSTER))) {
                          if (mist.makeChanceResult()) {
                              ((MapleMonster) mo).applyStatus(mist.getOwner(), new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), mist.getSourceSkill(), null, false), false, duration, false);
                          }
                      }
                  }
              }, 2000, 2500);
          } else if (burningregion) {
              poisonSchedule = tMan.register(new Runnable() {
                  @Override
                  public void run() {
                      for (final MapleMapObject mo : getAllPlayer()) {
                          final MapleCharacter chr = ((MapleCharacter) mo);
                          final ISkill skill = SkillFactory.getSkill(GameConstants.getLinkedAttackSkill(12121005));
                          final SkillStatEffect effect = skill.getEffect(chr.getSkillLevel(mist.getOwner().getSkillLevel(skill)));
                          boolean contain = getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.PLAYER)).contains(mo);
                          if (chr.getBuffedValue(BuffStats.BOOSTER_R, 12121005) != null) {
                              if (!contain) {
                                  chr.cancelEffect(skill.getEffect(1), false, -1);
                              }
                          } else {
                              if (contain) {
                                  effect.applyTo(chr);
                              }
                          }
                      }
                  }
              }, 2000, 2500);
          } else if (zero) {
              poisonSchedule = tMan.register(new Runnable() {
                  @Override
                  public void run() {
                      for (final MapleMapObject mo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.MONSTER))) {
                          if (mist.makeChanceResult()) {
                              ((MapleMonster) mo).applyStatus(mist.getOwner(), new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.IMPRINT, 20), mist.getSourceSkill(), null, false), false, duration, false);
                          }
                      }
                      for (final MapleMapObject mo : getAllPlayer()) {
                          final MapleCharacter chr = ((MapleCharacter) mo);
                          final ISkill skill = SkillFactory.getSkill(GameConstants.getLinkedAttackSkill(12121005));
                          final SkillStatEffect effect = skill.getEffect(chr.getSkillLevel(mist.getOwner().getSkillLevel(skill)));
                          boolean contain = getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.PLAYER)).contains(mo);
                          if (chr.getBuffedValue(BuffStats.BOOSTER, 100001261) != null) {
                              if (!contain) {
                                  chr.cancelEffect(skill.getEffect(1), false, -1);
                              }
                          } else {
                              if (contain) {
                                  effect.applyTo(chr);
                              }
                          }
                      }

                  }
              }, 2000, 2500);
          } else if (timecapsule) {
              poisonSchedule = tMan.register(new Runnable() {
                  @Override
                  public void run() {
                      for (MapleMapObject mmo : getMapObjectsInRect(mist.getBox(), Collections.singletonList(MapleMapObjectType.PLAYER))) {
                          MapleCharacter chr = (MapleCharacter) mmo;
                          //캡슐 존재여부 체크
                          for (final MapleMapObject mistoo : chr.getMap().getMapObjectsInRange(chr.getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.MIST))) {
                              final MapleMist check = (MapleMist) mistoo;
                              if (mist.getOwner() == check.getOwner() && mist.isTimeCapsule()) {
                                  for (MapleCoolDownValueHolder mcdvh : chr.getAllCooldowns()) {
                                      if (mcdvh.skillId != 36121007) {
                                          chr.changeCooldown(mcdvh.skillId, -15000);
                                      }
                                  }
                              } else {
                                  return;
                              }
                          }
                      }
                  }
              }, 5000, 5000);
          } else {
              poisonSchedule = null;
          }
          tMan.schedule(new Runnable() {
              @Override
              public void run() {
                  broadcastMessage(MainPacketCreator.removeMist(mist.getObjectId(), false));
                  removeMapObject(mist);
                  if (poisonSchedule != null) {
                      poisonSchedule.cancel(false);
                  }
              }
          }, duration);
      }
      
}
