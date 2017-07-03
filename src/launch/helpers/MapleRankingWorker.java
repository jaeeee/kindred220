/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package launch.helpers;

import constants.ServerConstants;
import database.MYSQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author 최용재 <virgo_s_t@naver.com>
 */
public class MapleRankingWorker implements Runnable {
    
    private Connection connect;
    private long lastUpdate = 0;
    
    public void run() {
        try {
            connect = MYSQL.getConnection();
            connect.setAutoCommit(false);
            updateAllJobRankings();
        } catch (Exception error) {
            System.out.println("[오류] 랭킹을 업데이트하는 도중 오류가 발생하였습니다. : ");
            if (!ServerConstants.realese) error.printStackTrace();
            try {
                connect.rollback();
                connect.setAutoCommit(true);
            } catch (SQLException errors) {
                System.out.println("[오류] 롤백을 하던 도중 오류가 발생하였습니다. : ");
                System.out.println(errors);
            }
        } finally {
            try {
                connect.commit();
                connect.setAutoCommit(true);
                lastUpdate = System.currentTimeMillis();
            } catch (SQLException error) {
            }
        }
    }
    
    private void updateAllJobRankings() {
        PreparedStatement query = null;
        ResultSet result = null;
        int rank = 0;
        int rankMove = 0;
               
        try {
            query = connect.prepareStatement("SELECT * FROM characters AS c LEFT JOIN accounts AS a ON c.accountid = a.id WHERE c.gm = 0 ORDER BY c.level DESC, c.exp DESC, c.rank ASC");
            result = query.executeQuery();
            query = connect.prepareStatement("UPDATE characters SET rankMove = ?, worldRankMove = ?, rank = ?, worldRank = ? WHERE id = ?");
            while (result.next()) {
                ++rank;
                if (result.getLong("lastlogin") < lastUpdate || result.getInt("loggedin") > 0) {
                    rankMove = result.getInt("rankMove");
                }
                rankMove += result.getInt("rank") - rank;
                query.setInt(1, rankMove);
                query.setInt(2, rankMove);
                query.setInt(3, rank);
                query.setInt(4, rank); //월드 랭킹은 일단 임시처리
                query.setInt(5, result.getInt("id"));
                query.executeUpdate();
            }
        } catch (Exception error) { 
            System.out.println(error);
        } finally {
            try {
                if (result != null) {
                    result = null;
                }
            } catch (Exception error) {
            }
        }
    }
    
//    private void updateJobRankings(int jobId) {
//        PreparedStatement query = null;
//        ResultSet result = null;
//        int rank = 0;
//               
//        try {
//            query = connect.prepareStatement("SELECT * FROM characters WHERE `job` DIV 100 = " + jobId / 100 + " AND `gm` < 6 ORDER BY `level` DESC, `exp` DESC, `jobRank` ASC");
//            result = query.executeQuery();
//            query = connect.prepareStatement("UPDATE characters SET jobRankMove = ?, jobRank = ? WHERE id = ?");
//            
//            while (result.next()) {
//                ++rank;
//                query.setInt(1, result.getInt("jobRank") - rank);
//                query.setInt(2, rank);
//                query.setInt(3, result.getInt("id"));
//                query.executeUpdate();
//            }
//        } catch (Exception error) { 
//        } finally {
//            try {
//                if (result != null) {
//                    result.close();
//                }
//            } catch (Exception error) {
//            }
//        }
//    }
}
