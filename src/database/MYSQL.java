/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package database;

import constants.ServerConstants;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Collection;
import java.util.LinkedList;

public class MYSQL {

    private static final ThreadLocal<Connection> con = new ThreadLocalConnection();
    public static final int CLOSE_CURRENT_RESULT = 1;
    public static final int KEEP_CURRENT_RESULT = 2;
    public static final int CLOSE_ALL_RESULTS = 3;
    public static final int SUCCESS_NO_INFO = -2;
    public static final int EXECUTE_FAILED = -3;
    public static final int RETURN_GENERATED_KEYS = 1;
    public static final int NO_GENERATED_KEYS = 2;

    public static Connection getConnection() {
	return con.get();
    }

    public static void closeAll() throws SQLException {
	for (final Connection conn : ThreadLocalConnection.allConnections) {
	    conn.close();
	}
    }

    private static final class ThreadLocalConnection extends ThreadLocal<Connection> {

	public static final Collection<Connection> allConnections = new LinkedList<Connection>();

	@Override
	protected final Connection initialValue() {
	    try {
		Class.forName("com.mysql.jdbc.Driver"); // touch the mysql driver
	    } catch (final ClassNotFoundException e) {
		System.err.println("[오류] MYSQL 클래스를 발견할 수 없습니다.");
                if (!ServerConstants.realese) {
                    e.printStackTrace();
                }
	    }
	    try {
		final Connection con = DriverManager.getConnection(
                        "jdbc:mysql://" + ServerConstants.dbHost + ":" + ServerConstants.dbPort + "/arcstory?autoReconnect=true&characterEncoding=euckr&maxReconnects=5", 
                        ServerConstants.dbUser, 
                        ServerConstants.dbPassword);
		allConnections.add(con);
		return con;
	    } catch (SQLException e) {
		System.err.println("[오류] 데이터베이스 연결에 오류가 발생했습니다.");
                if (!ServerConstants.realese) {
                    e.printStackTrace();
                }
		return null;
	    }
	}
    }
}