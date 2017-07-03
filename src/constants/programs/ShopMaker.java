/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package constants.programs;

import provider.*;
import server.items.ItemInformation;
import tools.Triple;
import java.io.*;
import java.util.*;

/**
*
* @author �¶��ο���
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

        while (NPC == -1) { //�ǸŰ� ����
            try {
                NPC = Integer.parseInt(c.readLine("�Ǹſ� ����� NPC �ڵ带 �Է����ֽʽÿ�. : "));
            } catch (NumberFormatException nfe) {
                System.out.println("���ڰ� �ƴմϴ�.");
            } catch (Exception e) {
                System.out.println("�� �� ���� �����Դϴ�. : " + e);
            }
        }
        System.out.println();

        System.out.println("��� ������ ���� ���� ����⸦ �����մϴ�.");
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
            System.out.println("�������� �ҷ����µ� �����߽��ϴ�. : " + e);
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
            name.println("��Ÿ ���� :");
            dropInfo(common, name);
            name.println("���� ���� :");
            dropInfo(warrior, name);
            name.println("������ ���� :");
            dropInfo(mage, name);
            name.println("�ü� ���� :");
            dropInfo(archer, name);
            name.println("���� ���� :");
            dropInfo(thief, name);
            name.println("���� ���� :");
            dropInfo(pirate, name);
            name.println("ĳ�� ���� :");
            dropInfo(cash, name);
            name.println("\r\n");
            name.println("���ܵ� ������ �ڵ� :");
            for (int id : EXCPET_ITEMS) name.print(id + ", ");
            name.close();
        } catch (Exception e) {
            System.out.println("�� �� ���� �����Դϴ�.");
        }
        long end = System.currentTimeMillis();
        System.out.println("�Ϸ�Ǿ����ϴ�.");
        System.out.println("AShopItems.sql, AShop.sql, desc.txt ������ Ȯ�����ֽʽÿ�.");
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
            if (et == null) shopname = ShopMaker.MapleWeaponType.getMapleWeaponTypeById(value - ShopMaker.EquipType.����.shopIdAlter()).name();
            else shopname = et.name();
            String a = "    ";
            a += shopname;
            a += " ���� : " + Int.intValue();
            name.println(a);
        }
        name.println();
    }

    private static List<Triple<Integer, Integer, Integer>> getAllItems() { //������, ����, ����
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
                if (EXCPET_ITEMS.contains(id)) continue; //TODO ���ܵ� ������ ���� ����..?
                
                //if (MapleDataTool.getInt("reqLevel", info, 0) > 100) continue;
              //  if (MapleDataTool.getInt("tradeBlock", info, -1) != -1) continue;
                String name = ItemInformation.getInstance().getName(id);
                
                if (name != null) {
                if (!name.contains("���긮��") /*&& !name.contains("�巡������") && !name.contains("������")
                        && !name.contains("���̺�ȥ") && !name.contains("��ũ����")*/) {
                     continue;
                } else {
                    System.out.println(name);
                }
                } else continue;
                
                 
                islot = MapleDataTool.getString("islot", info, "gbg");
                job = MapleDataTool.getInt("reqJob", info, 0); //���� �з�
                isCash = MapleDataTool.getInt("cash", info, 0) == 1; //ĳ�� ������ ���� Ȯ��
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
                    System.out.println("�� �� ���� �������Դϴ�.");
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
                       // if (ShopMaker.MapleWeaponType.getWeaponType(id) == ShopMaker.MapleWeaponType.���̵�) System.out.println(id);
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
                    System.out.println("�����Ͱ� �����ϴ�.");
                }
            }
        }
        return list;
    }

    private static boolean isWeapon(int itemId) {
        return !ShopMaker.MapleWeaponType.getWeaponType(itemId).equals(ShopMaker.MapleWeaponType.����ƴ�);
    }

    private static enum EquipType {
        ����("cp", 1),
        ����("hrcp", 1),
        �����("af", 2),
        �����("ay", 3),
        �Ͱ�("ae", 4),
        �Ź�("so", 5),
        ����("sr", 6),
        ����("ma", 7),
        �尩("gv", 8),
        �ѹ���("mapn", 9),
        ����("pn", 10),
        ����("ri", 11),
        ����("si", 12),
        ���Ʈ("pe", 13),
        �㸮��("be", 13),
        ������("sh", 13),
        ����("me", 14),
        ����("wp", 15),
        ��������("wpsi", 15),
        ������("gbg", 0),
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
        ����ƴ�(0),
        �Ѽյ���(1),
        �μյ���(2),
        �Ѽյб�(3),
        �μյб�(4),
        Ȱ(5),
        �ƴ�(6),
        ����(7),
        �ܰ�(8),
        ��(9),
        ��Ŭ(10),
        ����(11),
        â(12),
        ������(13),
        �Ѽհ�(14),
        �μհ�(15),
        �ϵ�(16),
        ���̴׷ε�(17),
        �ҿｴ��(18),
        ���̵�(19),
        ��������(20),
        ����(21),
        ��󺸿��(22),
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
            ShopMaker.MapleWeaponType[] type = {����ƴ�, ���̴׷ε�, �ҿｴ��, ����ƴ�, ����ƴ�, ����ƴ�, ����ƴ�, ����ƴ�, ����ƴ�, ����ƴ�, �Ѽհ�, �Ѽյ���, �Ѽյб�, �ܰ�, ���̵�, ��������, ����, �ϵ�, ������, ����ƴ�, �μհ�, �μյ���, �μյб�, â, ����, Ȱ, ����, �ƴ�, ��Ŭ, ��, ����ƴ�, ����ƴ�, ��󺸿��};
            if (0 > cat - 20 || type.length <= cat - 20) return ����ƴ�;
            return type[cat - 20];
        }

        public static ShopMaker.MapleWeaponType getMapleWeaponTypeById(int id) {
            for (ShopMaker.MapleWeaponType mwt : ShopMaker.MapleWeaponType.values()) if (id == mwt.getShopIdAlter()) return mwt;
            return null;
        }
    }
}
