/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch;

import constants.ServerConstants;
import constants.subclasses.ServerType;
import community.MapleGuildCharacter;
import database.MYSQL;
import handler.MapleServerHandler;
import launch.helpers.MapleLoginHelper;
import launch.helpers.MapleRankingWorker;
import launch.holder.WideObjectHolder;
import packet.crypto.EncryptionFactory;
import tools.Timer.WorldTimer;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.rmi.ssl.SslRMIClientSocketFactory;
import javax.rmi.ssl.SslRMIServerSocketFactory;
import launch.rmi.LoginRegistryImpl;
import org.apache.mina.core.buffer.IoBuffer;
import org.apache.mina.core.service.IoAcceptor;
import org.apache.mina.core.buffer.SimpleBufferAllocator;
import org.apache.mina.filter.codec.ProtocolCodecFilter;
import org.apache.mina.transport.socket.nio.NioSocketAcceptor;

public class LoginServer {
    public static int PORT = ServerConstants.LoginPort;
    private static InetSocketAddress InetSocketadd;
    private IoAcceptor acceptor;
    private String serverName, eventMessage;
    private byte flag;
    private int userLimit;
    private static LoginServer instance = new LoginServer();
    public static boolean Running = false;
    public boolean isReboot = false;
    public static LoginServer getInstance() {
	return instance;
    }
    

    public void deleteGuildCharacter(MapleGuildCharacter mgc) {
	WideObjectHolder.getInstance().setGuildMemberOnline(mgc, false, -1);
	if (mgc.getGuildRank() > 1) { //not leader
	    WideObjectHolder.getInstance().leaveGuild(mgc);
	} else {
	    WideObjectHolder.getInstance().disbandGuild(mgc.getGuildId());
	}
    }
    

    public void run_startup_configurations() {
	try {
            userLimit = ServerConstants.defaultMaxChannelLoad;
            serverName = ServerConstants.serverName;
            eventMessage = ServerConstants.eventMessage;
            flag = ServerConstants.defaultFlag;
            try {
                PreparedStatement ps = MYSQL.getConnection().prepareStatement("UPDATE accounts SET loggedin = 0");
                ps.executeUpdate();
                ps.close();
            } catch (SQLException ex) {
                throw new RuntimeException("[System] ��� ĳ���͸� �������� ��Ű�µ� �����߽��ϴ�. �����ͺ��̽� ������ �ùٸ��� Ȯ���� �ּ���.");
            }
	} catch (Exception re) {
	    System.err.println("[System] �α��� ���� ������ ������ �߻��߽��ϴ�.");
            if (!ServerConstants.realese) re.printStackTrace();
	}

	IoBuffer.setUseDirectBuffer(false);
	IoBuffer.setAllocator(new SimpleBufferAllocator());

	acceptor = new NioSocketAcceptor();
	acceptor.getFilterChain().addLast("codec", new ProtocolCodecFilter(new EncryptionFactory()));

	WorldTimer.getInstance().start();
	WorldTimer.getInstance().register(new MapleRankingWorker(), 1000 * 60 * 60);
	MapleLoginHelper.getInstance();
        
	try {
            InetSocketadd = new InetSocketAddress(PORT);
            acceptor.setHandler(new MapleServerHandler(ServerType.LOGIN));
            acceptor.bind(InetSocketadd);
            System.out.println("[System] �α��μ��� " + PORT + "��Ʈ ����.");
	} catch (IOException e) {
	    System.err.println("[System] �α��μ��� " + PORT + "��Ʈ ���� ����.");
            if (!ServerConstants.realese) {
                e.printStackTrace();
            }
	}
    }

    public void shutdown() {
	System.out.println("[����] ������ �����մϴ�..");
	WorldTimer.getInstance().stop();
        acceptor.unbind(InetSocketadd);
        Running = false;
    }
    public static void startServer() {
	try {
	    LoginServer.getInstance().run_startup_configurations();
            Running = true;
	} catch (Exception ex) {
	    System.err.println("Error initializing loginserver" + ex);
	}
    }


    public String getServerName() {
	return serverName;
    }

    public String getEventMessage() {
	return eventMessage;
    }

    public byte getFlag() {
	return flag;
    }

    public void setEventMessage(String newMessage) {
	this.eventMessage = newMessage;
    }

    public void setFlag(byte newflag) {
	flag = newflag;
    }

    public int getNumberOfSessions() {
	return acceptor.getManagedSessions().size();
    }

    public int getUserLimit() {
	return userLimit;
    }

    public void setUserLimit(int newLimit) {
	userLimit = newLimit;
    }
}