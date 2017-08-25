/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package server.maps;

import client.MapleCharacter;
import constants.GameConstants;
import database.MYSQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import tools.Pair;

/**
 *
 * @author Administrator
 */
public class PotSystem {
    private static Map<Integer, Pair<Integer, Integer>> pots = new HashMap<Integer, Pair<Integer, Integer>>();

    public static int getPotId(int guildid) {
        synchronized (pots) {
            if (pots.containsKey(guildid)) {
                return pots.get(guildid).getLeft();
            }
        }

        return 0;
    }

    public static int getPotExp(int guildid) {
        synchronized (pots) {
            if (pots.containsKey(guildid)) {
                return pots.get(guildid).getRight();
            }
        }

        return 0;
    }

    public static void addPot(int guildid,int rid,int exp) {
        synchronized (pots) {
            pots.put(guildid, new Pair<Integer, Integer>(rid, exp));
        }
    }

    public static void removePot(int guildid) {
        synchronized (pots) {
            if (pots.containsKey(guildid)) {
                pots.remove(guildid);
            }
        }
    }


    public static boolean gainPotExp(MapleCharacter chr, int gain, MapleReactor react) {
        try {
        synchronized (pots) {
            int guildid = chr.getGuildId();
            int potexp = getPotExp(guildid);
            int potid = getPotId(guildid);
            if (pots.containsKey(guildid)) {

            if (potexp < 1000) {
                int newExp = (int) (potexp + gain);
                if (newExp > 1000) {
                    newExp = 1000;
                }
                pots.remove(guildid);
                pots.put(guildid, new Pair<Integer,Integer>(potid,newExp));
                int rid = react.getReactorId();
                int level = rid == 100000 || rid == 100002 ? 1 : rid == 100004 || rid == 100005 ? 2 : rid == 100007 || rid == 100008 ? 3 : 4;
                int needExp = GameConstants.getPotExpNeededForLevel(level);
                if (newExp >= needExp) {
                    SaveToDB(guildid);
                    if (level !=4) {
                    chr.dropMessage(6,react.getName() + "Tree: My level is not high enough!!");
                    return true;
                    } else {
                        react.setState((byte) 1);
                        chr.dropMessage(6,react.getName() + "Tree: Now my level is high enough.");
                    return false;
                    }
                }

                chr.dropMessage(6,react.getName() + "Tree: Give me more water! " + newExp + "/" + needExp);
            }
            return false;
            }
         }
        return false;
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        }
    }

    public static void SaveToDB() {
        synchronized (pots) {
            for (Map.Entry<Integer, Pair<Integer, Integer>> pot : pots.entrySet()) {
                SaveToDB(pot.getKey().intValue());
            }
        }
    }
    public static void SaveToDB(int guildid) {
        try {
                Connection con = MYSQL.getConnection();
                PreparedStatement ps = con.prepareStatement("UPDATE pots SET rid = ?,exp = ? WHERE gid = ?");
                ps.setInt(1, getPotId(guildid));
                ps.setInt(2, getPotExp(guildid));
                ps.setInt(3, guildid);
                ps.execute();
                ps.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
     
     
}
