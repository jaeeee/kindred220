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
public class CheckItemExist {
    private static HashMap<Integer,Integer> itemList = new HashMap<Integer,Integer>();

    public static void main(String[] args) {
        Console c = System.console();
        RewardIncubator();
        boolean isLast;
        try {
            PrintWriter sql = getCreateFile("incubatordata.sql");
            sql.println("INSERT INTO `incubatordata` (`itemid`, `amount`) VALUES ");
            Iterator<Integer> items = itemList.keySet().iterator();
            while (items.hasNext()) {
                int itemEntry = items.next();
                StringBuilder shops = new StringBuilder();
                isLast = !items.hasNext();
                shops.append("(").append(itemEntry).append(", ").append("1").append(")").append(isLast ? ";" : ",");
                sql.println(shops.toString());

            }
            sql.close();
        } catch (Exception e) {
            System.out.println("�� �� ���� �����Դϴ�.");
        }
        
        System.out.println("�Ϸ�Ǿ����ϴ�.");
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


    private static void checkItem(int itemid,int type) { //������, ����, ����
        boolean isExist = false;
        if (type == 1) {
            File source = new File("wz/Character.wz");
            List<Triple<Integer, Integer, Integer>> list = new ArrayList<Triple<Integer, Integer,Integer>>();
            String[] category = {"Accessory", "Cap", "Cape", "Coat", "Glove", "Longcoat", "Pants", "Shield", "Shoes", "Weapon"};
            for (String cat : category) {
                File path = new File(source.getAbsolutePath() + "/" + cat + "/" + "0" + itemid + ".img.xml");
                if (path.exists())  isExist = true;
            }
        } else if (type == 2 || type == 3 || type == 4) {
            try {
            File source = new File("wz/Item.wz");
            MapleDataProvider sourceData;// = MapleDataProviderFactory.getDataProvider(source);
            List<Triple<Integer, Integer, Integer>> list = new ArrayList<Triple<Integer, Integer,Integer>>();
            String[] category = {"","", "Consume", "Install", "Etc", "Cash", "Pet", "Special"};
            String cat = category[type];
        //    for (String cat : category) {
                
                File path = new File(source.getAbsolutePath() + "/" + cat);
                sourceData = MapleDataProviderFactory.getDataProvider(path);
                MapleData dd = sourceData.getData("0" + itemid / 10000 + ".img");
              //  for (MapleData d : dd.getChildren()) {
                   if (dd.getChildByPath("0" + itemid) != null) isExist = true;
            //    }
           // }
            } catch (Exception ex) {
          //      ex.printStackTrace();
            }
        }
        if (!isExist) {
         //   itemList.put(itemid, 0);
            System.out.println(itemid);
        }
    }
    
    public static void RewardIncubator() {
	System.out.println("RewardIncubator �� �ҷ��ӽ��ϴ�.:::");
	// Gold Box
        try {
        FileReader fl = new FileReader("rewardincubator.celphis");
        BufferedReader br = new BufferedReader(fl);
        String readLine = null;
        final ItemInformation ii = ItemInformation.getInstance();
        int i = 0;
        while ((readLine = br.readLine()) != null) {
  
            checkItem(Integer.parseInt(readLine), Integer.parseInt(readLine) / 1000000);
            i++;
        }
        fl.close();
        br.close();
        } catch (Exception e) {
            System.out.print(e);
        }
    }
}
