/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client;

import constants.ServerConstants;
import database.MYSQL;
import server.items.MapleItemIdenfier;
import server.items.ItemInformation;
import server.movement.AbsoluteLifeMovement;
import server.movement.LifeMovement;
import server.movement.LifeMovementFragment;
import java.awt.Point;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author 에반테이르
 */
public class MapleAndroid {
    private byte skincolor;
    private int hair, face;
    private int itemid;
    private String name;
    private Point pos;
    private int stance;
    private int uniqueid;
    
    public MapleAndroid(int itemid, int uniqueid) {
        this.itemid = itemid;
        this.uniqueid = uniqueid;
    }
    
    public int getUniqueId() {
        return uniqueid;
    }
    
    public void setPosition(Point pos) {
        this.pos = pos;
    }
    
    public Point getPosition() {
        return pos;
    }
    
    public void setStance(int stan) {
        this.stance = stan;
    }
    
    public int getStance() {
        return stance;
    }
   
    public void setSkinColor(int num) {
        this.skincolor = (byte) num;
    }
    
    public void setHair(int h) {
        this.hair = h;
    }
    
    public void setFace (int f) {
        this.face = f;
    }
    
    public void setItemId(int item) {
        this.itemid = item;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getHair() {
        return hair;
    }
    
    public int getFace() {
        return face;
    }
    
     public byte getSkinColor() {
        return skincolor;
    }

    public int getItemId() {
        return itemid;
    }
    
    public String getName() {
        return name;
    }
    
    public static final MapleAndroid loadFromDb(final int itemid, final int uniqueid) {
	try {
	    MapleAndroid ret = new MapleAndroid(itemid, uniqueid);
	    Connection con = MYSQL.getConnection(); // Get a connection to the database
	    PreparedStatement ps = con.prepareStatement("SELECT * FROM android WHERE uniqueid = ?");
	    ps.setInt(1, uniqueid);
	    final ResultSet rs = ps.executeQuery();
	    rs.next();
	    ret.setName(rs.getString("name"));
            ret.setFace(rs.getInt("face"));
            ret.setHair(rs.getInt("hair"));
            ret.setItemId(rs.getInt("itemid"));
            ret.setSkinColor(rs.getInt("skincolor"));
	    rs.close();
	    ps.close();
            return ret;
	} catch (SQLException ex) {
            ex.printStackTrace();
	    return null;
	}
    }

    public final void saveToDb() {
	try {
	    final PreparedStatement ps = MYSQL.getConnection().prepareStatement("UPDATE android SET name = ?, face = ?, hair = ?, itemid = ?, skincolor = ? WHERE uniqueid = ?");
	    ps.setString(1, name);
	    ps.setInt(2, face);
	    ps.setInt(3, hair);
	    ps.setInt(4, itemid);
            ps.setInt(5, skincolor);
	    ps.setInt(6, uniqueid);
	    ps.executeUpdate();
	    ps.close();
	} catch (final SQLException ex) {
	    if (!ServerConstants.realese) {
                ex.printStackTrace();
            }
	}
    }

    public static final MapleAndroid createAndroid(final int itemid) {
        int ret = MapleItemIdenfier.getInstance().getNewUniqueId();
        int defHair, defFace;
        int android = ItemInformation.getInstance().getAndroid(itemid);
        if (ItemInformation.getInstance().getAndroidBasicSettings(android) == null) {
            System.err.println("[오류] 안드로이드를 생성하던 중 안드로이드의 기본외모을 불러오는데 실패했습니다.");
        }
        defHair = ItemInformation.getInstance().getAndroidBasicSettings(android).getRandomHair();
        defFace = ItemInformation.getInstance().getAndroidBasicSettings(android).getRandomFace();
	try { // Commit to db first
	    final PreparedStatement ps = MYSQL.getConnection().prepareStatement("INSERT INTO android (uniqueid, name, face, hair, itemid, skincolor) VALUES (?, ?, ?, ?, ?, ?)");
	    ps.setInt(1, ret);
            ps.setString(2, "안드로이드");
	    ps.setInt(3, defFace);
	    ps.setInt(4, defHair);
	    ps.setInt(5, itemid);
            ps.setInt(6, 0);
	    ps.executeUpdate();
	    ps.close();
	} catch (final SQLException ex) {
	    if (!ServerConstants.realese) 
                ex.printStackTrace();
	    return null;
	}
	MapleAndroid newandroid = new MapleAndroid(itemid, ret);
	newandroid.setName("안드로이드");
	newandroid.setFace(defFace);
	newandroid.setHair(defHair);
        newandroid.setSkinColor(0);
	newandroid.setItemId(itemid);
        return newandroid;
    }
    
    public final void updatePosition(final List<LifeMovementFragment> movement) {
        for (final LifeMovementFragment move : movement) {
            if (move instanceof LifeMovement) {
                if (move instanceof AbsoluteLifeMovement) {
                    setPosition(((LifeMovement) move).getPosition());
                }
                setStance(((LifeMovement) move).getNewstate());
            }
        }
    }
}
