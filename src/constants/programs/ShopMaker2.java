package constants.programs;

import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.items.ItemInformation;
import tools.Triple;
import java.io.*;
import java.util.*;

/**
*
* @author �¶��ο���
*/
public class ShopMaker2 {
    private static int MIN_LEVEL = 0, MAX_LEVEL = 100;
    private static List<Integer> EXCPET_ITEMS = Arrays.asList(1003142, 1402037);
    private static List<String> EXCPET_ITEM_NAMES = Arrays.asList("����");
    private static ItemInformation nameSource = ItemInformation.getInstance();
    private static int MESO_RATE = -1;
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
        while (MESO_RATE == -1) { //�ǸŰ� ����
            try {
                MESO_RATE = Integer.parseInt(c.readLine("�������� ������ ���ȱ� ������ �� ��� �Ͻðڽ��ϱ�? : "));
            } catch (NumberFormatException nfe) {
                System.out.println("���ڰ� �ƴմϴ�.");
            } catch (Exception e) {
                System.out.println("�� �� ���� �����Դϴ�. : " + e);
            }
        }
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
                shopitems.append("(").append(item.getSecond()).append(",").append(item.getFirst()).append(",").append(item.getThird() * MESO_RATE).append(",").append(i).append(")").append(isLast ? ";" : ",");
                out.println(shopitems.toString());
            }
            out.close();
        } catch (Exception e) {
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
            name.println();
            name.println("���ܵ� ������ �̸� :");
            for (String conname : EXCPET_ITEM_NAMES) name.print(conname + ", ");
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
            EquipType et = EquipType.getEquipTypeByID(value);
            String shopname;
            if (et == null) shopname = MapleWeaponType.getMapleWeaponTypeById(value - EquipType.����.shopIdAlter()).name();
            else shopname = et.name();
            String a = "    ";
            a += shopname;
            a += " ���� : " + Int.intValue();
            name.println(a);
        }
        name.println();
    }

    private static List<Triple<Integer, Integer, Integer>> getAllItems() { //������, ����, ����
        File source = new File(System.getProperty("wzpath") + "Character.wz");
        MapleDataProvider sourceData = MapleDataProviderFactory.getDataProvider(source);
        List<Triple<Integer, Integer, Integer>> list = new ArrayList<Triple<Integer, Integer,Integer>>();
        String[] category = {"Accessory", "Cap", "Cape", "Coat", "Glove", "Longcoat", "Pants", "Shield", "Shoes", "Weapon"};
        for (String cat : category) {
            File path = new File(source.getAbsolutePath() + "/" + cat);
            sourceData = MapleDataProviderFactory.getDataProvider(path);
            filefor: for (File file : path.listFiles()) {
                int level = 0;
                int job = 0;
                boolean isCash = false;
                String islot = "";
                int price = 0;

                MapleData data = sourceData.getData(file.getName().replace(".xml", ""));
                MapleData info = data.getChildByPath("info");
                String filename = file.getName().replace(".img.xml", "");
                int id = Integer.parseInt(filename);
                level = MapleDataTool.getInt("reqLevel", info, 0); //����
                if (level < MIN_LEVEL || level > MAX_LEVEL) continue;
                if (EXCPET_ITEMS.contains(id)) continue; //TODO ���ܵ� ������ ���� ����..?
                String name = nameSource.getName(id);
                if (name == null || name.equals("") || name.equals("NO-NAME")) continue;
                if (EXCPET_ITEM_NAMES.contains(name)) continue;
                for (String contain : EXCPET_ITEM_NAMES) if (name.contains(contain)) continue filefor;


                islot = MapleDataTool.getString("islot", info, "gbg");
                job = MapleDataTool.getInt("reqJob", info, 0); //���� �з�
                isCash = MapleDataTool.getInt("cash", info, 0) == 1; //ĳ�� ������ ���� Ȯ��
                if ((price = MapleDataTool.getInt("price", info, isCash ? 10 : 0)) <= 1) continue; //���� Ȯ��

                if (
                        MapleDataTool.getInt("epicItem", info, 0) == 1 ||
                        MapleDataTool.getInt("equipTradeBlock", info, 0) == 1 ||
                        MapleDataTool.getInt("tradeBlock", info, 0) == 1 ||
                        MapleDataTool.getInt("quest", info, 0) == 1 ||
                        MapleDataTool.getInt("notSale", info, 0) == 1 ||
                        MapleDataTool.getInt("only", info, 0) == 1 ||
                        MapleDataTool.getInt("expireOnLogout", info, 0) == 1 ||
                        (nameSource.getDesc(id) != null && !isCash)
                    )
                    continue; //�Ǹ� ���� ����

                EquipType type = EquipType.getEquipType(islot);
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
                        shopId += type.shopIdAlter;
                        if (isWeapon(id)) shopId += MapleWeaponType.getWeaponType(id).getShopIdAlter();
                        list.add(new Triple<Integer, Integer, Integer>(id, shopId, price));
                    } else {
                        shopId = CASH;
                        shopId += type.shopIdAlter;
                        if (isWeapon(id)) shopId += MapleWeaponType.getWeaponType(id).getShopIdAlter();
                        list.add(new Triple<Integer, Integer, Integer>(id, shopId, price));
                    }
                } catch (NullPointerException e) {
                    System.out.println("�����Ͱ� �����ϴ�.");
                }
            }
        }
        return list;
    }

    private static boolean isWeapon(int itemId) {
        return !MapleWeaponType.getWeaponType(itemId).equals(MapleWeaponType.����ƴ�);
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

        private static EquipType getEquipType(String st) {
            for (EquipType et: EquipType.values()) if (st.equalsIgnoreCase(et.tag)) return et;
            return null;
        }

        private static EquipType getEquipTypeByID(int id){
            for (EquipType et: EquipType.values()) if (id == et.shopIdAlter()) return et;
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

        private static MapleWeaponType getWeaponType(int itemId) {
            int cat = (itemId / 10000) % 100;
            MapleWeaponType[] type = {����ƴ�, ���̴׷ε�, �ҿｴ��, ����ƴ�, ����ƴ�, ����ƴ�, ����ƴ�, ����ƴ�, ����ƴ�, ����ƴ�, �Ѽհ�, �Ѽյ���, �Ѽյб�, �ܰ�, ���̵�, ��������, ����, �ϵ�, ������, ����ƴ�, �μհ�, �μյ���, �μյб�, â, ����, Ȱ, ����, �ƴ�, ��Ŭ, ��, ����ƴ�, ����ƴ�, ��󺸿��};
            if (0 > cat - 20 || type.length <= cat - 20) return ����ƴ�;
            return type[cat - 20];
        }

        public static MapleWeaponType getMapleWeaponTypeById(int id) {
            for (MapleWeaponType mwt : MapleWeaponType.values()) if (id == mwt.getShopIdAlter()) return mwt;
            return null;
        }
    }
}
