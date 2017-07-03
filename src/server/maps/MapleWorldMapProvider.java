/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.maps;

import constants.ServerConstants;
import constants.GameConstants;
import database.MYSQL;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.life.*;
import tools.StringUtil;
import java.awt.Point;
import java.awt.Rectangle;
import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import tools.RandomStream.Randomizer;

public class MapleWorldMapProvider {

    private static final MapleDataProvider source = MapleDataProviderFactory.getDataProvider(new File("wz/Map.wz"));
    private static final MapleData nameData = MapleDataProviderFactory.getDataProvider(new File("wz/String.wz")).getData("Map.img");
    private final Map<Integer, MapleMap> maps = new HashMap<Integer, MapleMap>();
    private int channel;

    public final MapleMap getMap(final int mapid) {
        return getMap(mapid, true, true, true);
    }

    //backwards-compatible
    public final MapleMap getMap(final int mapid, final boolean respawns, final boolean npcs) {
        return getMap(mapid, respawns, npcs, true);
    }

    public final MapleMap getMap(final int mapid, final boolean respawns, final boolean npcs, final boolean reactors) {
        Integer omapid = Integer.valueOf(mapid);
        MapleMap map = maps.get(omapid);
        if (map == null) {
            synchronized (this) {
                // check if someone else who was also synchronized has loaded the map already
                map = maps.get(omapid);
                if (map != null) {
                    return map;
                }
                //Gen체크 시작
                MapleData fieldgenData = source.getData(getFieldGenerator());
                List<MapleData> fieldgenmaps = fieldgenData.getChildren();
                MapleData template;
                MapleData fieldgencount;
                int templatemapid = mapid;
                for (int i = 0; i < fieldgenmaps.size(); i++) {
                    //System.out.println(fieldgenmaps.get(i).getName().equals(String.valueOf(i)) ? "true" : " false");
                    if (fieldgenmaps.get(i).getName().equals(String.valueOf(i))) {
                        template = fieldgenData.getChildByPath(i + "/template");
                        //System.out.println(template.getData());
                        fieldgencount = fieldgenData.getChildByPath(i + "/count");
                        int templatecheck = MapleDataTool.getInt(template);
                        int count = MapleDataTool.getInt(fieldgencount);
                        if (templatecheck < omapid && omapid < templatecheck + count) {
                            templatemapid = templatecheck;
                            break;
                        }
                    }
                }
                //Gen체크 끝
                MapleData mapData = source.getData(getMapName(templatemapid));

                MapleData link = mapData.getChildByPath("info/link");
                if (link != null) {
                    mapData = source.getData(getMapName(MapleDataTool.getIntConvert("info/link", mapData)));
                }
                float monsterRate = 0;
                if (respawns) {
                    MapleData mobRate = mapData.getChildByPath("info/mobRate");
                    if (mobRate != null) {
                        monsterRate = ((Float) mobRate.getData()).floatValue();
                    }
                }
                map = new MapleMap(mapid, channel, MapleDataTool.getInt("info/returnMap", mapData), monsterRate);

                PortalFactory portalFactory = new PortalFactory();
                for (MapleData portal : mapData.getChildByPath("portal")) {
                    map.addPortal(portalFactory.makePortal(MapleDataTool.getInt(portal.getChildByPath("pt")), portal));
                }
                if (mapid == 924000200) {
                    map.getPortal(2).setScriptName("enter_dragon");
                }
                if (mapid == 910000000) {
                    map.getPortal(3).setScriptName("enter_fm01");
                }
                if (mapid >= 910000001 && mapid <= 910000022) {
                    map.getPortal("out00").setScriptName("out_fm01");
                }
                List<MapleFoothold> allFootholds = new LinkedList<MapleFoothold>();
                Point lBound = new Point();
                Point uBound = new Point();
                MapleFoothold fh;

                for (MapleData footRoot : mapData.getChildByPath("foothold")) {
                    for (MapleData footCat : footRoot) {
                        for (MapleData footHold : footCat) {
                            fh = new MapleFoothold(new Point(
                                    MapleDataTool.getInt(footHold.getChildByPath("x1")), MapleDataTool.getInt(footHold.getChildByPath("y1"))), new Point(
                                            MapleDataTool.getInt(footHold.getChildByPath("x2")), MapleDataTool.getInt(footHold.getChildByPath("y2"))), Integer.parseInt(footHold.getName()));
                            fh.setPrev((short) MapleDataTool.getInt(footHold.getChildByPath("prev")));
                            fh.setNext((short) MapleDataTool.getInt(footHold.getChildByPath("next")));

                            if (fh.getX1() < lBound.x) {
                                lBound.x = fh.getX1();
                            }
                            if (fh.getX2() > uBound.x) {
                                uBound.x = fh.getX2();
                            }
                            if (fh.getY1() < lBound.y) {
                                lBound.y = fh.getY1();
                            }
                            if (fh.getY2() > uBound.y) {
                                uBound.y = fh.getY2();
                            }
                            allFootholds.add(fh);
                        }
                    }
                }
                MapleFootholdTree fTree = new MapleFootholdTree(lBound, uBound);
                for (MapleFoothold foothold : allFootholds) {
                    fTree.insert(foothold);
                }
                map.setFootholds(fTree);

                // load areas (EG PQ platforms)
                if (mapData.getChildByPath("area") != null) {
                    int x1, y1, x2, y2;
                    Rectangle mapArea;
                    for (MapleData area : mapData.getChildByPath("area")) {
                        x1 = MapleDataTool.getInt(area.getChildByPath("x1"));
                        y1 = MapleDataTool.getInt(area.getChildByPath("y1"));
                        x2 = MapleDataTool.getInt(area.getChildByPath("x2"));
                        y2 = MapleDataTool.getInt(area.getChildByPath("y2"));
                        mapArea = new Rectangle(x1, y1, (x2 - x1), (y2 - y1));
                        map.addMapleArea(mapArea);
                    }
                }

                int bossid = -1;
                String msg = null;
                if (mapData.getChildByPath("info/timeMob") != null) {
                    bossid = MapleDataTool.getInt(mapData.getChildByPath("info/timeMob/id"), 0);
                    msg = MapleDataTool.getString(mapData.getChildByPath("info/timeMob/message"), null);
                }

                // load life data (npc, monsters)
                String type;
                AbstractLoadedMapleLife myLife;

                for (MapleData life : mapData.getChildByPath("life")) {
                    type = MapleDataTool.getString(life.getChildByPath("type"));
                    if (npcs || !type.equals("n")) {
                        myLife = loadLife(life, MapleDataTool.getString(life.getChildByPath("id")), type);
                        if (myLife instanceof MapleMonster) {
                            final MapleMonster mob = (MapleMonster) myLife;
                            map.addMonsterSpawn(mob, MapleDataTool.getInt("mobTime", life, 0), mob.getId() == bossid ? msg : null);
                        } else {
                            map.addMapObject(myLife);
                        }
                    }
                }

                try {
                    Connection con = MYSQL.getConnection();
                    String sql = "SELECT * FROM `spawn` WHERE mapid = " + mapid + " AND type = 'm'";
                    PreparedStatement ps = con.prepareStatement(sql);
                    ResultSet rs = ps.executeQuery();
                    while (rs.next()) {
                        MapleMonster mob = MapleLifeProvider.getMonster(rs.getInt("lifeid"));
                        mob.setRx0(rs.getInt("rx0"));
                        mob.setRx1(rs.getInt("rx1"));
                        mob.setCy(rs.getInt("cy"));
                        mob.setF(rs.getInt("dir"));
                        mob.setFh(rs.getInt("fh"));
                        mob.setPosition(new Point(mob.getRx0() + 50, mob.getCy()));
                        if (mob != null) {
                            map.addMonsterSpawn(mob, rs.getInt("mobTime"), null);
                        } else {
                            System.err.println("[오류] 엔피시 데이터를 만드는중 널 포인터 오류가 발생했습니다.");
                        }
                    }
                } catch (Exception e) {
                    System.err.println("[오류] 엔피시를 DB로부터 불러오는데 오류가 발생했습니다.");
                    if (!ServerConstants.realese) {
                        e.printStackTrace();
                    }
                }

                if (npcs) {
                    try {
                        Connection con = MYSQL.getConnection();
                        String sql = "SELECT * FROM `playernpcs` WHERE map = " + mapid;
                        PreparedStatement ps = con.prepareStatement(sql);
                        ResultSet rs = ps.executeQuery();
                        while (rs.next()) {
                            MaplePlayerNPC pnpc = MapleLifeProvider.getPlayerNPC(rs.getInt("id"));
                            pnpc.setFh(map.getFootholds().findMaple(pnpc.getPosition()).getId());
                            if (pnpc != null) {
                                map.addMapObject(pnpc);
                            } else {
                                System.err.println("[오류] 플레이어 엔피시 데이터를 만드는중 널 포인터 오류가 발생했습니다.");
                            }
//                     System.out.println("ID " + rs.getInt("id") + "Something Added..");
                        }

                    } catch (Exception e) {
                        System.err.println("[오류] 플레이어 엔피시를 DB로부터 불러오는데 오류가 발생했습니다.");
                        if (!ServerConstants.realese) {
                            e.printStackTrace();
                        }
                    }

                    try {
                        Connection con = MYSQL.getConnection();
                        String sql = "SELECT * FROM `spawn` WHERE mapid = " + mapid + " AND type = 'n'";
                        PreparedStatement ps = con.prepareStatement(sql);
                        ResultSet rs = ps.executeQuery();
                        while (rs.next()) {
                            MapleNPC npc = MapleLifeProvider.getNPC(rs.getInt("lifeid"));
                            npc.setRx0(rs.getInt("rx0"));
                            npc.setRx1(rs.getInt("rx1"));
                            npc.setCy(rs.getInt("cy"));
                            npc.setF(rs.getInt("dir"));
                            npc.setFh(rs.getInt("fh"));
                            npc.setPosition(new Point(npc.getRx0() + 50, npc.getCy()));
                            if (npc != null) {
                                map.addMapObject(npc);
                            } else {
                                System.err.println("[오류] 엔피시 데이터를 만드는중 널 포인터 오류가 발생했습니다.");
                            }
                        }
                    } catch (Exception e) {
                        System.err.println("[오류] 엔피시를 DB로부터 불러오는데 오류가 발생했습니다.");
                        if (!ServerConstants.realese) {
                            e.printStackTrace();
                        }
                    }
                }

                try {
                    if (omapid == 910001009) {
                        Connection con = MYSQL.getConnection();
                        PreparedStatement ps = con.prepareStatement("SELECT * FROM pots where channel = ?");
                        ps.setInt(1, channel);
                        ResultSet rs = ps.executeQuery();

                        MapleReactorStats stats = null;
                        MapleReactor myReactor = null;
                        while (rs.next()) {
                            stats = MapleReactorFactory.getReactor(rs.getInt("rid"));
                            myReactor = new MapleReactor(stats, rs.getInt("rid"), rs.getInt("gid"));

                            stats.setFacingDirection((byte) 0);
                            myReactor.setPosition(new Point(rs.getInt("x"), rs.getInt("y")));
                            myReactor.setDelay(0);
                            myReactor.setState((byte) 0);
                            myReactor.setName(rs.getString("name"));
                            PotSystem.addPot(rs.getInt("gid"), rs.getInt("rid"), rs.getInt("exp"));
                            map.spawnReactor(myReactor);
                        }
                    }
                } catch (Exception e) {
                    System.err.println("[오류] 길드화분을 DB로부터 불러오는데 오류가 발생했습니다.");
                    if (!ServerConstants.realese) {
                        e.printStackTrace();
                    }
                }

                addAreaBossSpawn(map);
                map.loadMonsterRate(true);
                
                /* load reactor data */
                String id;
                if (reactors && mapData.getChildByPath("reactor") != null) {
                    for (MapleData reactor : mapData.getChildByPath("reactor")) {
                        id = MapleDataTool.getString(reactor.getChildByPath("id"));
                        if (id != null) {
                            map.spawnReactor(loadReactor(reactor, id, (byte) MapleDataTool.getInt(reactor.getChildByPath("f"), 0)));
                        }
                    }
                }
                if (reactors) {
                    try {
                        Connection con = MYSQL.getConnection();
                        String sql = "SELECT * FROM `spawns_profession` WHERE mid = " + mapid + "";
                        PreparedStatement ps = con.prepareStatement(sql);
                        ResultSet rs = ps.executeQuery();
                        while (rs.next()) {
                            int reactid = GameConstants.getRandomProfessionReactorByRank(Integer.parseInt(rs.getString("type")));
                            final MapleReactorStats stats = MapleReactorFactory.getReactor(reactid);
                            final MapleReactor myReactor = new MapleReactor(stats, reactid);
                            myReactor.setPosition(new Point(rs.getInt("x"), rs.getInt("y")));
                            myReactor.setDelay(900000);
                            myReactor.setState((byte) 0);
                            myReactor.setName("광맥");
                            myReactor.setRank(Integer.parseInt(rs.getString("type")));
                            map.spawnReactor(myReactor);
                        }
                    } catch (Exception e) {
                        System.err.println("[오류] 광맥을 DB로부터 불러오는데 오류가 발생했습니다.");
                        if (!ServerConstants.realese) {
                            e.printStackTrace();
                        }
                    }
                }
                try {
                    PreparedStatement ps = MYSQL.getConnection().prepareStatement("SELECT time FROM bosscooltime WHERE map = ? AND channel = ?");
                    ps.setInt(1, mapid);
                    ps.setInt(2, channel);
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()) {
                        map.setMapTimer(rs.getLong("time"));
                    }
                    ps.close();
                    rs.close();
                } catch (Exception e) {
                    System.err.println("[오류] 보스맵 쿨타임을 적용시키는데 실패했습니다.");
                    if (!ServerConstants.realese) {
                        e.printStackTrace();
                    }
                }
                try {
                    map.setMapName(MapleDataTool.getString("mapName", nameData.getChildByPath(getMapStringName(omapid)), ""));
                    map.setStreetName(MapleDataTool.getString("streetName", nameData.getChildByPath(getMapStringName(omapid)), ""));
                } catch (Exception e) {
                    map.setMapName("");
                    map.setStreetName("");
                }
                map.setClock(mapData.getChildByPath("clock") != null);
                map.setEverlast(mapData.getChildByPath("info/everlast") != null);
                map.setPersonalShop(mapData.getChildByPath("info/personalShop") != null);
                map.setHPDec(MapleDataTool.getInt(mapData.getChildByPath("info/decHP"), 0));
                map.setHPDecProtect(MapleDataTool.getInt(mapData.getChildByPath("info/protectItem"), 0));
                map.setBarrier(MapleDataTool.getInt(mapData.getChildByPath("info/barrier"), 0));
                map.setForcedReturnMap(MapleDataTool.getInt(mapData.getChildByPath("info/forcedReturn"), 999999999));
                map.setTimeLimit(MapleDataTool.getInt(mapData.getChildByPath("info/timeLimit"), -1));
                map.setFieldLimit(MapleDataTool.getInt(mapData.getChildByPath("info/fieldLimit"), 0));
                map.setFieldScript(MapleDataTool.getString(mapData.getChildByPath("info/fieldScript"), ""));
                map.setFirstUserEnter(MapleDataTool.getString(mapData.getChildByPath("info/onFirstUserEnter"), ""));
                map.setUserEnter(MapleDataTool.getString(mapData.getChildByPath("info/onUserEnter"), ""));
                map.setFieldType(MapleDataTool.getString(mapData.getChildByPath("info/fieldType"), ""));
                map.setRecoveryRate(MapleDataTool.getFloat(mapData.getChildByPath("info/recovery"), 1));
                map.setCreateMobInterval((short) MapleDataTool.getInt(mapData.getChildByPath("info/createMobInterval"), 9000));
                map.setTown(MapleDataTool.getInt(mapData.getChildByPath("info/town")) != 0 ? true : false);
                maps.put(omapid, map);
            }
        }
        return map;
    }

    public MapleMap CreateInstanceMap(int mapid, boolean respawns, boolean npcs, boolean reactors) {
        MapleData mapData = source.getData(getMapName(mapid));
        MapleData link = mapData.getChildByPath("info/link");
        if (link != null) {
            mapData = source.getData(getMapName(MapleDataTool.getIntConvert("info/link", mapData)));
        }

        float monsterRate = 0;
        if (respawns) {
            MapleData mobRate = mapData.getChildByPath("info/mobRate");
            if (mobRate != null) {
                monsterRate = ((Float) mobRate.getData()).floatValue();
            }
        }
        MapleMap map = new MapleMap(mapid, channel, MapleDataTool.getInt("info/returnMap", mapData), monsterRate);

        PortalFactory portalFactory = new PortalFactory();
        for (MapleData portal : mapData.getChildByPath("portal")) {
            map.addPortal(portalFactory.makePortal(MapleDataTool.getInt(portal.getChildByPath("pt")), portal));
        }
        List<MapleFoothold> allFootholds = new LinkedList<MapleFoothold>();
        Point lBound = new Point();
        Point uBound = new Point();
        for (MapleData footRoot : mapData.getChildByPath("foothold")) {
            for (MapleData footCat : footRoot) {
                for (MapleData footHold : footCat) {
                    MapleFoothold fh = new MapleFoothold(new Point(
                            MapleDataTool.getInt(footHold.getChildByPath("x1")), MapleDataTool.getInt(footHold.getChildByPath("y1"))), new Point(
                                    MapleDataTool.getInt(footHold.getChildByPath("x2")), MapleDataTool.getInt(footHold.getChildByPath("y2"))), Integer.parseInt(footHold.getName()));
                    fh.setPrev((short) MapleDataTool.getInt(footHold.getChildByPath("prev")));
                    fh.setNext((short) MapleDataTool.getInt(footHold.getChildByPath("next")));

                    if (fh.getX1() < lBound.x) {
                        lBound.x = fh.getX1();
                    }
                    if (fh.getX2() > uBound.x) {
                        uBound.x = fh.getX2();
                    }
                    if (fh.getY1() < lBound.y) {
                        lBound.y = fh.getY1();
                    }
                    if (fh.getY2() > uBound.y) {
                        uBound.y = fh.getY2();
                    }
                    allFootholds.add(fh);
                }
            }
        }
        MapleFootholdTree fTree = new MapleFootholdTree(lBound, uBound);
        for (MapleFoothold fh : allFootholds) {
            fTree.insert(fh);
        }
        map.setFootholds(fTree);

        // load areas (EG PQ platforms)
        if (mapData.getChildByPath("area") != null) {
            int x1, y1, x2, y2;
            Rectangle mapArea;
            for (MapleData area : mapData.getChildByPath("area")) {
                x1 = MapleDataTool.getInt(area.getChildByPath("x1"));
                y1 = MapleDataTool.getInt(area.getChildByPath("y1"));
                x2 = MapleDataTool.getInt(area.getChildByPath("x2"));
                y2 = MapleDataTool.getInt(area.getChildByPath("y2"));
                mapArea = new Rectangle(x1, y1, (x2 - x1), (y2 - y1));
                map.addMapleArea(mapArea);
            }
        }
        int bossid = -1;
        String msg = null;
        if (mapData.getChildByPath("info/timeMob") != null) {
            bossid = MapleDataTool.getInt(mapData.getChildByPath("info/timeMob/id"), 0);
            msg = MapleDataTool.getString(mapData.getChildByPath("info/timeMob/message"), null);
        }

        // load life data (npc, monsters)
        String type;
        AbstractLoadedMapleLife myLife;

        for (MapleData life : mapData.getChildByPath("life")) {
            type = MapleDataTool.getString(life.getChildByPath("type"));
            if (npcs || !type.equals("n")) {
                myLife = loadLife(life, MapleDataTool.getString(life.getChildByPath("id")), type);
                if (myLife instanceof MapleMonster) {
                    final MapleMonster mob = (MapleMonster) myLife;
                    map.addMonsterSpawn(mob, MapleDataTool.getInt("mobTime", life, 0), mob.getId() == bossid ? msg : null);
                } else {
                    map.addMapObject(myLife);
                }
            }
        }
        addAreaBossSpawn(map);
        map.loadMonsterRate(true);

        //load reactor data
        String id;
        if (reactors && mapData.getChildByPath("reactor") != null) {
            for (MapleData reactor : mapData.getChildByPath("reactor")) {
                id = MapleDataTool.getString(reactor.getChildByPath("id"));
                if (id != null) {
                    map.spawnReactor(loadReactor(reactor, id, (byte) MapleDataTool.getInt(reactor.getChildByPath("f"), 0)));
                }
            }
        }
        try {
            map.setMapName(MapleDataTool.getString("mapName", nameData.getChildByPath(getMapStringName(mapid)), ""));
            map.setStreetName(MapleDataTool.getString("streetName", nameData.getChildByPath(getMapStringName(mapid)), ""));
        } catch (Exception e) {
            map.setMapName("");
            map.setStreetName("");
        }
        map.setClock(mapData.getChildByPath("clock") != null);
        map.setEverlast(mapData.getChildByPath("info/everlast") != null);
        map.setTown(mapData.getChildByPath("info/town") != null);
        map.setHPDec(MapleDataTool.getInt(mapData.getChildByPath("info/decHP"), 0));
        map.setHPDecProtect(MapleDataTool.getInt(mapData.getChildByPath("info/protectItem"), 0));
        map.setBarrier(MapleDataTool.getInt(mapData.getChildByPath("info/barrier"), 0));
        map.setForcedReturnMap(MapleDataTool.getInt(mapData.getChildByPath("info/forcedReturn"), 999999999));
        map.setTimeLimit(MapleDataTool.getInt(mapData.getChildByPath("info/timeLimit"), -1));
        map.setFieldLimit(MapleDataTool.getInt(mapData.getChildByPath("info/fieldLimit"), 0));
        map.setFieldScript(MapleDataTool.getString(mapData.getChildByPath("info/fieldScript"), ""));
        map.setFirstUserEnter(MapleDataTool.getString(mapData.getChildByPath("info/onFirstUserEnter"), ""));
        map.setUserEnter(MapleDataTool.getString(mapData.getChildByPath("info/onUserEnter"), ""));
        map.setFieldType(MapleDataTool.getString(mapData.getChildByPath("info/fieldType"), ""));
        map.setRecoveryRate(MapleDataTool.getFloat(mapData.getChildByPath("info/recovery"), 1));
        map.setCreateMobInterval((short) MapleDataTool.getInt(mapData.getChildByPath("info/createMobInterval"), 9000));
        
        return map;
    }

    public int getLoadedMaps() {
        return maps.size();
    }

    public boolean isMapLoaded(int mapId) {
        return maps.containsKey(mapId);
    }

    public void clearLoadedMap() {
        maps.clear();
    }

    public Map<Integer, MapleMap> getMaps() {
        return maps;
    }

    private AbstractLoadedMapleLife loadLife(MapleData life, String id, String type) {
        AbstractLoadedMapleLife myLife = MapleLifeProvider.getLife(Integer.parseInt(id), type);
        myLife.setCy(MapleDataTool.getInt(life.getChildByPath("cy")));
        MapleData dF = life.getChildByPath("f");
        if (dF != null) {
            myLife.setF(MapleDataTool.getInt(dF));
        }
        myLife.setFh(MapleDataTool.getInt(life.getChildByPath("fh")));
        myLife.setRx0(MapleDataTool.getInt(life.getChildByPath("rx0")));
        myLife.setRx1(MapleDataTool.getInt(life.getChildByPath("rx1")));
        myLife.setPosition(new Point(MapleDataTool.getInt(life.getChildByPath("x")), MapleDataTool.getInt(life.getChildByPath("y"))));

        if (MapleDataTool.getInt("hide", life, 0) == 1) {
            myLife.setHide(true);
        }
        return myLife;
    }

    private final MapleReactor loadReactor(final MapleData reactor, final String id, final byte FacingDirection) {
        final MapleReactorStats stats = MapleReactorFactory.getReactor(Integer.parseInt(id));
        final MapleReactor myReactor = new MapleReactor(stats, Integer.parseInt(id));

        stats.setFacingDirection(FacingDirection);
        myReactor.setPosition(new Point(MapleDataTool.getInt(reactor.getChildByPath("x")), MapleDataTool.getInt(reactor.getChildByPath("y"))));
        myReactor.setDelay(MapleDataTool.getInt(reactor.getChildByPath("reactorTime")) * 1000);
        myReactor.setState((byte) 0);
        myReactor.setName(MapleDataTool.getString(reactor.getChildByPath("name"), ""));

        return myReactor;
    }

    private String getFieldGenerator() {
        StringBuilder builder = new StringBuilder("Map/FieldGenerator.img");
        return builder.toString();
    }

    private String getMapName(int mapid) {
        String mapName = StringUtil.getLeftPaddedStr(Integer.toString(mapid), '0', 9);
        StringBuilder builder = new StringBuilder("Map/Map");
        builder.append(mapid / 100000000);
        builder.append("/");
        builder.append(mapName);
        builder.append(".img");

        mapName = builder.toString();
        return mapName;
    }

    private String getMapStringName(int mapid) {
        StringBuilder builder = new StringBuilder();
        if (mapid < 100000000) {
            builder.append("maple");
        } else if (mapid >= 100000000 && mapid < 200000000) {
            builder.append("victoria");
        } else if (mapid >= 200000000 && mapid < 300000000) {
            builder.append("ossyria");
        } else if (mapid >= 540000000 && mapid < 541010110) {
            builder.append("singapore");
        } else if (mapid >= 600000000 && mapid < 620000000) {
            builder.append("MasteriaGL");
        } else if (mapid >= 670000000 && mapid < 682000000) {
            builder.append("weddingGL");
        } else if (mapid >= 682000000 && mapid < 683000000) {
            builder.append("HalloweenGL");
        } else if (mapid >= 800000000 && mapid < 900000000) {
            builder.append("jp");
        } else {
            builder.append("etc");
        }
        builder.append("/");
        builder.append(mapid);

        return builder.toString();
    }

    public void setChannel(int channel) {
        this.channel = channel;
    }

    private void addAreaBossSpawn(final MapleMap map) {
        int monsterid = -1;
        int mobtime = -1;
        String msg = null;
        Point pos1 = null, pos2 = null, pos3 = null;

        switch (map.getId()) {
            case 104000400: // Mano
                mobtime = 2700;
                monsterid = 2220000;
                msg = "A cool breeze was felt when Mano appeared.";
                pos1 = new Point(439, 185);
                pos2 = new Point(301, -85);
                pos3 = new Point(107, -355);
                break;
            case 101030404: // Stumpy
                mobtime = 2700;
                monsterid = 3220000;
                msg = "Stumpy has appeared with a stumping sound that rings the Stone Mountain.";
                pos1 = new Point(867, 1282);
                pos2 = new Point(810, 1570);
                pos3 = new Point(838, 2197);
                break;
            case 110040000: // King Clang
                mobtime = 1200;
                monsterid = 5220001;
                msg = "A strange turban shell has appeared on the beach.";
                pos1 = new Point(-355, 179);
                pos2 = new Point(-1283, -113);
                pos3 = new Point(-571, -593);
                break;
            case 250010304: // Tae Roon
                mobtime = 2100;
                monsterid = 7220000;
                msg = "Tae Roon appeared with a loud grow.";
                pos1 = new Point(-210, 33);
                pos2 = new Point(-234, 393);
                pos3 = new Point(-654, 33);
                break;
            case 200010300: // Eliza
                mobtime = 1200;
                monsterid = 8220000;
                msg = "Eliza has appeared with a black whirlwind.";
                pos1 = new Point(665, 83);
                pos2 = new Point(672, -217);
                pos3 = new Point(-123, -217);
                break;
            case 250010503: // Ghost Priest
                mobtime = 1800;
                monsterid = 7220002;
                msg = "The area fills with an unpleasant force of evil.. even the occasional ones of the cats sound disturbing";
                pos1 = new Point(-303, 543);
                pos2 = new Point(227, 543);
                pos3 = new Point(719, 543);
                break;
            case 222010310: // Old Fox
                mobtime = 2700;
                monsterid = 7220001;
                msg = "As the moon light dims,a long fox cry can be heard and the presence of the old fox can be felt.";
                pos1 = new Point(-169, -147);
                pos2 = new Point(-517, 93);
                pos3 = new Point(247, 93);
                break;
            case 107000300: // Dale
                mobtime = 1800;
                monsterid = 6220000;
                msg = "The huge crocodile Dale has come out from the swamp.";
                pos1 = new Point(710, 118);
                pos2 = new Point(95, 119);
                pos3 = new Point(-535, 120);
                break;
            case 100040105: // Faust
                mobtime = 1800;
                monsterid = 5220002;
                msg = "The blue fog became darker when Faust appeared.";
                pos1 = new Point(1000, 278);
                pos2 = new Point(557, 278);
                pos3 = new Point(95, 278);
                break;
            case 100040106: // Faust
                mobtime = 1800;
                monsterid = 5220002;
                msg = "The blue fog became darker when Faust appeared.";
                pos1 = new Point(1000, 278);
                pos2 = new Point(557, 278);
                pos3 = new Point(95, 278);
                break;
            case 220050100: // Timer
                mobtime = 1500;
                monsterid = 5220003;
                msg = "Click clock! Timer has appeared with an irregular clock sound.";
                pos1 = new Point(-467, 1032);
                pos2 = new Point(532, 1032);
                pos3 = new Point(-47, 1032);
                break;
            case 221040301: // Jeno
                mobtime = 2400;
                monsterid = 6220001;
                msg = "Jeno has appeared with a heavy sound of machinery.";
                pos1 = new Point(-4134, 416);
                pos2 = new Point(-4283, 776);
                pos3 = new Point(-3292, 776);
                break;
            case 240040401: // Lev
                mobtime = 7200;
                monsterid = 8220003;
                msg = "Leviathan has appeared with a cold wind from over the gorge.";
                pos1 = new Point(-15, 2481);
                pos2 = new Point(127, 1634);
                pos3 = new Point(159, 1142);
                break;
            case 260010201: // Dewu
                mobtime = 3600;
                monsterid = 3220001;
                msg = "Dewu slowly appeared out of the sand dust.";
                pos1 = new Point(-215, 275);
                pos2 = new Point(298, 275);
                pos3 = new Point(592, 275);
                break;
            case 261030000: // Chimera
                mobtime = 2700;
                monsterid = 8220002;
                msg = "Chimera has appeared out of the darkness of the underground with a glitter in her eyes.";
                pos1 = new Point(-1094, -405);
                pos2 = new Point(-772, -116);
                pos3 = new Point(-108, 181);
                break;
            case 230020100: // Sherp
                mobtime = 2700;
                monsterid = 4220000;
                msg = "A strange shell has appeared from a grove of seaweed.";
                pos1 = new Point(-291, -20);
                pos2 = new Point(-272, -500);
                pos3 = new Point(-462, 640);
                break;
            default:
                return;
        }
        map.addAreaMonsterSpawn(
                MapleLifeProvider.getMonster(monsterid),
                pos1, pos2, pos3,
                mobtime,
                msg);
    }
}
