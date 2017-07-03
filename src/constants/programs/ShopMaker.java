/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package constants.programs;

import provider.*;
import server.items.ItemInformation;
import tools.Triple;
import java.io.*;
import java.util.*;

/**
*
* @author 온라인월드
*/
public class ShopMaker {
    private static List<Integer> EXCPET_ITEMS = Arrays.asList(1082392, 1082393, 1082394, 1003142, 1402037, 1002140, 1042003, 1062007, 1322013, 1142249);
    private static int NPC = -1;
    private static int COMMON = 10000;
    private static int WARRIOR = 10100;
    private static int MAGE = 10200;
    private static int BOWMAN = 10300;
    private static int THIEF = 10400;
    private static int PIRATE = 10500;
    private static int CASH = 10600;

    private static Map<Integer, Integer> itemMap = new HashMap<Integer, Integer>();

    public static void main(String[] args) {
        Console c = System.console();
        System.out.println();

        while (NPC == -1) { //판매가 설정
            try {
                NPC = Integer.parseInt(c.readLine("판매에 사용할 NPC 코드를 입력해주십시오. : "));
            } catch (NumberFormatException nfe) {
                System.out.println("숫자가 아닙니다.");
            } catch (Exception e) {
                System.out.println("알 수 없는 오류입니다. : " + e);
            }
        }
        System.out.println();

        System.out.println("모든 아이템 상점 파일 만들기를 시작합니다.");
        long start = System.currentTimeMillis();
        boolean isLast;
        try {
            PrintWriter out = getCreateFile("AShopItems.sql");
            out.println("DELETE FROM `shopitems` WHERE `shopid` >= 10000 AND `shopid` <= 11000;");
            out.println("INSERT INTO `shopitems` (`shopid`,`itemid`,`price`,`position`) VALUES");

            List<Triple<Integer,Integer, Integer>> all = getAllItems();
            for (Triple<Integer,Integer, Integer> item : all) {
                int i = 0;
                if (!itemMap.containsKey(item.getSecond())){
                    itemMap.put(item.getSecond(), 1);
                    i = 1;
                } else {
                    i = itemMap.get(item.getSecond());
                    i++;
                    itemMap.remove(item.getSecond());
                    itemMap.put(item.getSecond(), i);
                }
                isLast = all.indexOf(item) == all.size() - 1;
                StringBuilder shopitems = new StringBuilder();
                shopitems.append("(").append(item.getSecond()).append(",").append(item.getFirst()).append(",").append(item.getThird()).append(",").append(i).append(")").append(isLast ? ";" : ",");
                out.println(shopitems.toString());
            }
            out.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("아이템을 불러오는데 실패했습니다. : " + e);
            return;
        }
        List<Integer> common = new ArrayList<Integer>();
        List<Integer> warrior = new ArrayList<Integer>();
        List<Integer> mage = new ArrayList<Integer>();
        List<Integer> thief = new ArrayList<Integer>();
        List<Integer> pirate = new ArrayList<Integer>();
        List<Integer> archer = new ArrayList<Integer>();
        List<Integer> cash = new ArrayList<Integer>();
        try {
            PrintWriter sql = getCreateFile("AShop.sql");
            sql.println("DELETE FROM `shops` WHERE `shopid` >= 10000 AND `shopid` <= 11000;");
            sql.println("INSERT INTO `shops` (`shopid`, `npcid`) VALUES ");
            Iterator<Integer> items = itemMap.keySet().iterator();
            while (items.hasNext()) {
                int itemEntry = items.next();
                StringBuilder shops = new StringBuilder();
                isLast = !items.hasNext();
                shops.append("(").append(itemEntry).append(", ").append(NPC).append(")").append(isLast ? ";" : ",");
                sql.println(shops.toString());

                switch ((itemEntry % 1000) / 100) {
                    case 0: common.add(itemEntry); break;
                    case 1: warrior.add(itemEntry); break;
                    case 2: mage.add(itemEntry); break;
                    case 3: archer.add(itemEntry); break;
                    case 4: thief.add(itemEntry); break;
                    case 5: pirate.add(itemEntry); break;
                    case 6: cash.add(itemEntry); break;
                }
            }
            sql.close();
            PrintWriter name = getCreateFile("desc.txt");
            name.println("기타 상점 :");
            dropInfo(common, name);
            name.println("전사 상점 :");
            dropInfo(warrior, name);
            name.println("마법사 상점 :");
            dropInfo(mage, name);
            name.println("궁수 상점 :");
            dropInfo(archer, name);
            name.println("도적 상점 :");
            dropInfo(thief, name);
            name.println("해적 상점 :");
            dropInfo(pirate, name);
            name.println("캐시 상점 :");
            dropInfo(cash, name);
            name.println("\r\n");
            name.println("제외된 아이템 코드 :");
            for (int id : EXCPET_ITEMS) name.print(id + ", ");
            name.close();
        } catch (Exception e) {
            System.out.println("알 수 없는 오류입니다.");
        }
        long end = System.currentTimeMillis();
        System.out.println("완료되었습니다.");
        System.out.println("AShopItems.sql, AShop.sql, desc.txt 파일을 확인해주십시오.");
        System.exit(0);
        return;
    }

    private static PrintWriter getCreateFile(String filename) throws IOException {
        File cf = new File(filename);
        if (!cf.exists()) cf.createNewFile();
        FileWriter of = new FileWriter(cf.getAbsolutePath());
        PrintWriter sql = new PrintWriter(of);
        return sql;
    }

    private static void dropInfo(List<Integer> list, PrintWriter name) {
        if (list.isEmpty()) return;
        Collections.sort(list);
        for (Integer Int : list) {
            int value = Int.intValue() % 100;
            ShopMaker.EquipType et = ShopMaker.EquipType.getEquipTypeByID(value);
            String shopname;
            if (et == null) shopname = ShopMaker.MapleWeaponType.getMapleWeaponTypeById(value - ShopMaker.EquipType.무기.shopIdAlter()).name();
            else shopname = et.name();
            String a = "    ";
            a += shopname;
            a += " 상점 : " + Int.intValue();
            name.println(a);
        }
        name.println();
    }

    private static List<Triple<Integer, Integer, Integer>> getAllItems() { //아이템, 상점, 가격
        File source = new File("wz/Character.wz");
        MapleDataProvider sourceData;// = MapleDataProviderFactory.getDataProvider(source);
        List<Triple<Integer, Integer, Integer>> list = new ArrayList<Triple<Integer, Integer,Integer>>();
        String[] category = {"Accessory", "Cap", "Cape", "Coat", "Glove", "Longcoat", "Pants", "Shield", "Shoes", "Weapon"};
        for (String cat : category) {
            File path = new File(source.getAbsolutePath() + "/" + cat);
            sourceData = MapleDataProviderFactory.getDataProvider(path);
            filefor: for (File file : path.listFiles()) {
                int job = 0, level = 0;
                boolean isCash = false;
                String islot = "";
                int price = 0;

                MapleData data = sourceData.getData(file.getName().replace(".xml", ""));
                MapleData info = data.getChildByPath("info");

                String filename = file.getName().replace(".img.xml", "");
                int id = Integer.parseInt(filename);
                if (EXCPET_ITEMS.contains(id)) continue; //TODO 제외된 아이템 상점 생성..?
                
                //if (MapleDataTool.getInt("reqLevel", info, 0) > 100) continue;
              //  if (MapleDataTool.getInt("tradeBlock", info, -1) != -1) continue;
                String name = ItemInformation.getInstance().getName(id);
                
                if (name != null) {
                if (!name.contains("러브리스") /*&& !name.contains("드래곤테일") && !name.contains("팔콘윙")
                        && !name.contains("레이븐혼") && !name.contains("샤크투스")*/) {
                     continue;
                } else {
                    System.out.println(name);
                }
                } else continue;
                
                 
                islot = MapleDataTool.getString("islot", info, "gbg");
                job = MapleDataTool.getInt("reqJob", info, 0); //직업 분류
                isCash = MapleDataTool.getInt("cash", info, 0) == 1; //캐시 아이템 여부 확인
                level = MapleDataTool.getInt("reqLevel", info, 0);
                /*
                if (level >= 10 && level < 20) {
                    price = 10000;
                } else if (level >= 20 && level < 30) {
                    price = 50000;
                } else if (level >= 30 && level < 40) {
                    price = 100000;
                } else if (level >= 40 && level < 50) {
                    price = 200000;
                } else if (level >= 50 && level < 60) {
                    price = 500000;
                } else if (level >= 60 && level < 70) {
                    price = 700000;
                } else if (level >= 70 && level < 71) { 
                    price = 1000000;   
                }
                 * 
                 */
             //   price = MapleDataTool.getInt("price", info, 1000) * 2;
                price = 4310027;
                ShopMaker.EquipType type = ShopMaker.EquipType.getEquipType(islot);
                if (type == null){
                    System.out.println("알 수 없는 아이템입니다.");
                    continue;
                }

                try {
                    int[] temp = {0, WARRIOR, MAGE, 0, BOWMAN, 0, 0, 0, THIEF, 0, 0, 0, 0, 0, 0, 0, PIRATE};
                    int shopId = COMMON;
                    if (!isCash) {
                        try {
                            int temped = temp[job];
                            if (temped == 0) shopId = COMMON;
                            else shopId = temped;
                        } catch (Exception e) {
                            shopId = COMMON;
                        }
                     //   shopId += type.shopIdAlter;
                       // if (ShopMaker.MapleWeaponType.getWeaponType(id) == ShopMaker.MapleWeaponType.블레이드) System.out.println(id);
                      //  if (isWeapon(id)) shopId += ShopMaker.MapleWeaponType.getWeaponType(id).getShopIdAlter();
                        shopId = 20121125;
                        list.add(new Triple<Integer, Integer, Integer>(id, shopId, price));
                    } 
                    //else {
               //         shopId = CASH;
                //        shopId += type.shopIdAlter;
                //        if (isWeapon(id)) shopId += ShopMaker.MapleWeaponType.getWeaponType(id).getShopIdAlter();
                 //       list.add(new Triple<Integer, Integer, Integer>(id, shopId, price));
                //    }
                } catch (Exception e) {
                    System.out.println("포인터가 없습니다.");
                }
            }
        }
        return list;
    }

    private static boolean isWeapon(int itemId) {
        return !ShopMaker.MapleWeaponType.getWeaponType(itemId).equals(ShopMaker.MapleWeaponType.무기아님);
    }

    private static enum EquipType {
        모자("cp", 1),
        가발("hrcp", 1),
        얼굴장식("af", 2),
        눈장식("ay", 3),
        귀고리("ae", 4),
        신발("so", 5),
        망토("sr", 6),
        상의("ma", 7),
        장갑("gv", 8),
        한벌옷("mapn", 9),
        하의("pn", 10),
        반지("ri", 11),
        방패("si", 12),
        펜던트("pe", 13),
        허리띠("be", 13),
        어깨장식("sh", 13),
        훈장("me", 14),
        무기("wp", 15),
        보조무기("wpsi", 15),
        쓰레기("gbg", 0),
        ;

        private String tag;
        private int shopIdAlter;

        private EquipType(String tag, int alter){
            this.tag = tag;
            shopIdAlter = alter;
        }

        private int shopIdAlter() {
            return shopIdAlter;
        }

        private static ShopMaker.EquipType getEquipType(String st) {
            for (ShopMaker.EquipType et: ShopMaker.EquipType.values()) if (st.equalsIgnoreCase(et.tag)) return et;
            return null;
        }

        private static ShopMaker.EquipType getEquipTypeByID(int id){
            for (ShopMaker.EquipType et: ShopMaker.EquipType.values()) if (id == et.shopIdAlter()) return et;
            return null;
        }
    }

    private enum MapleWeaponType {
        무기아님(0),
        한손도끼(1),
        두손도끼(2),
        한손둔기(3),
        두손둔기(4),
        활(5),
        아대(6),
        석궁(7),
        단검(8),
        총(9),
        너클(10),
        폴암(11),
        창(12),
        스태프(13),
        한손검(14),
        두손검(15),
        완드(16),
        샤이닝로드(17),
        소울슈터(18),
        블레이드(19),
        보조무기(20),
        케인(21),
        듀얼보우건(22),
        ;

        private int shopIdAlter;

        private MapleWeaponType(int shopIdAlter) {
            this.shopIdAlter = shopIdAlter;
        }

        public int getShopIdAlter() {
            return shopIdAlter;
        }

        private static ShopMaker.MapleWeaponType getWeaponType(int itemId) {
            int cat = (itemId / 10000) % 100;
            ShopMaker.MapleWeaponType[] type = {무기아님, 샤이닝로드, 소울슈터, 무기아님, 무기아님, 무기아님, 무기아님, 무기아님, 무기아님, 무기아님, 한손검, 한손도끼, 한손둔기, 단검, 블레이드, 보조무기, 케인, 완드, 스태프, 무기아님, 두손검, 두손도끼, 두손둔기, 창, 폴암, 활, 석궁, 아대, 너클, 총, 무기아님, 무기아님, 듀얼보우건};
            if (0 > cat - 20 || type.length <= cat - 20) return 무기아님;
            return type[cat - 20];
        }

        public static ShopMaker.MapleWeaponType getMapleWeaponTypeById(int id) {
            for (ShopMaker.MapleWeaponType mwt : ShopMaker.MapleWeaponType.values()) if (id == mwt.getShopIdAlter()) return mwt;
            return null;
        }
    }
}
