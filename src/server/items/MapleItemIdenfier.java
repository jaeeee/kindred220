/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.items;

import database.MYSQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicInteger;

/**
 *
 * @author 에반테이르
 */
public class MapleItemIdenfier {

    private AtomicInteger runningId = new AtomicInteger(0);
    private static MapleItemIdenfier instance = null;

    public static MapleItemIdenfier getInstance() {
        if (instance == null) {
            instance = new MapleItemIdenfier();
            try {
                Connection con = MYSQL.getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT uniqueid FROM inventoryitems ORDER BY uniqueid DESC LIMIT 1");
                ResultSet rs = ps.executeQuery();
                if (rs.next()) {
                    instance.runningId.set(rs.getInt(1));
                }
            } catch (SQLException sql) {
            }
        }
        return instance;
    }

    public synchronized int getNewUniqueId() {
        return runningId.incrementAndGet();
    }
}
