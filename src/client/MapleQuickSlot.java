/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client;

import constants.ServerConstants;
import database.MYSQL;
import tools.Pair;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 *
 */
public class MapleQuickSlot {
    
    private List<Pair<Integer, Integer>> quickslot = new ArrayList<Pair<Integer, Integer>>();
    private int cid;
    
    public MapleQuickSlot (int cid) {
        this.cid = cid;
    }
    
    public List<Pair<Integer, Integer>> getQuickSlot() {
        return quickslot;
    }
    
    public void loadFromDB() {
        Connection con = MYSQL.getConnection();
        try {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM quickslot WHERE cid = ?");
            ps.setInt(1, cid);     
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                quickslot.add(new Pair<Integer, Integer>(rs.getInt("index"), rs.getInt("key")));
            }
            ps.close();
            rs.close();
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
            System.err.println("[����] �������� �ҷ����µ� �����߽��ϴ�.");
        }
    }
    
    public void saveToDB() {
        Connection con = MYSQL.getConnection();
        try {
            PreparedStatement ps = con.prepareStatement("DELETE FROM quickslot WHERE cid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            for (Pair<Integer, Integer> p : quickslot) {
                ps = con.prepareStatement("INSERT INTO quickslot VALUES (?, ?, ?)");
                ps.setInt(1, cid);
                ps.setInt(2, p.getLeft());
                ps.setInt(3, p.getRight());
                ps.executeUpdate();
                ps.close();
            }
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
            System.err.println("[����] �������� �����ϴµ� �����߽��ϴ�.");
        }
    }
    
    
    public void resetQuickSlot () {
        quickslot.clear();
    }
    
    public void addQuickSlot(int index, int key) {
        quickslot.add(new Pair<Integer, Integer>(index, key));
    }
    
    public int getKeyByIndex(int index) {
        for (Pair <Integer, Integer> p : quickslot) {
            if (p.getLeft() == index) {
                return p.getRight();
            }
        }
        return -1;
    }
    
}
