/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
 * @author �ֿ��� <virgo_s_t@naver.com>
 */
public class AutoRegister {
    
    private static int ENABLE_IP_COUNT = 2; //��� ������ IP���� 
    
    /*
     * �ߺ��� ������ �ִ��� üũ �� ������ Ȯ��
     * 
     * 0 : ���� ������ ����
     * 1 : �ִ� Ƚ���� ���� IP
     * 2 : �̹� �����ϴ� ����
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
