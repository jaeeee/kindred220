/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.login;

import client.MapleClient;
import constants.ServerConstants;
import database.MYSQL;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import static java.lang.System.in;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author 최용재 <virgo_s_t@naver.com>
 */
public class AutoRegister {
    
    private static int ENABLE_IP_COUNT = 2; //허용 가능한 IP갯수 
    
    /*
     * 중복된 계정이 있는지 체크 후 아이피 확인
     * 
     * 0 : 생성 가능한 상태
     * 1 : 최대 횟수를 넘은 IP
     * 2 : 이미 존재하는 계정
     */
        public static int checkAccount(MapleClient account, String name, String password) {
            Connection connect = MYSQL.getConnection();
            PreparedStatement query = null;
            ResultSet result = null;
            try {
                query = connect.prepareStatement("SELECT name FROM accounts WHERE name = ?");
                query.setString(1, name);
                result = query.executeQuery();

                if (result.next()) {
                    return 5;
                }

                query = connect.prepareStatement("SELECT ip FROM accounts WHERE ip = ?");
                query.setString(1, account.getSessionIPAddress());
                result = query.executeQuery();

                if (result.first() == false || (result.last() == true && result.getRow() < ENABLE_IP_COUNT)) {
                    return 0;
                } else if (result.getRow() >= ENABLE_IP_COUNT) {
                    return 6;
                }
                return 5;
            } catch (Exception error) {
                if (!ServerConstants.realese)
                    error.printStackTrace();
            } finally {
                try {
                    if (connect != null) {
                        connect = null;
                    }
                    if (query != null) {
                        query.close();
                    }
                    if (result != null) {
                        result.close();
                    }
                } catch (Exception error) {
                }
            }
            return 5;
        }
    
    public static void registerAccount(MapleClient account, String name, String password) {
        Connection connect = MYSQL.getConnection();
        PreparedStatement query = null;
        ResultSet result = null;
        try {
            query = connect.prepareStatement("INSERT INTO accounts (name, password, ip) VALUES (?, ?, ?)", MYSQL.RETURN_GENERATED_KEYS);
            query.setString(1, name);
            query.setString(2, password);
            query.setString(3, account.getSessionIPAddress());
//            System.out.println("did it work?");
            query.executeUpdate();
        } catch (Exception error) {
            if (!ServerConstants.realese) {
                error.printStackTrace();
            }
        } finally {
            try {
                if (connect != null) {
                    connect = null;
                }
                if (query != null) {
                    query.close();
                }
                if (result != null) {
                    result.close();
                }
            } catch (Exception error) {
                if (!ServerConstants.realese) {
                    error.printStackTrace();
                }
            }
        }
    }
}
