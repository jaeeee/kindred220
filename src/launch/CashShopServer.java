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
import handler.MapleServerHandler;
import launch.holder.MapleCashShopPlayerHolder;
import packet.crypto.EncryptionFactory;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import javax.rmi.ssl.SslRMIClientSocketFactory;
import launch.helpers.ChracterTransfer;
import launch.rmi.LoginRegistry;
import launch.rmi.LoginRegistryImpl;
import org.apache.mina.core.buffer.IoBuffer;
import org.apache.mina.core.service.IoAcceptor;
import org.apache.mina.core.buffer.SimpleBufferAllocator;
import org.apache.mina.filter.codec.ProtocolCodecFilter;
import org.apache.mina.transport.socket.nio.NioSocketAcceptor;

public class CashShopServer {

    private final int PORT = ServerConstants.cashShopPort;
    private InetSocketAddress InetSocketadd;
    private IoAcceptor acceptor;
    private MapleCashShopPlayerHolder players;
    private LoginRegistry loginRegistry;
    private static final CashShopServer instance = new CashShopServer();

    public static final CashShopServer getInstance() {
	return instance;
    }


    public final void run_startup_configurations() {

	IoBuffer.setUseDirectBuffer(false);
	IoBuffer.setAllocator(new SimpleBufferAllocator());

	acceptor = new NioSocketAcceptor();
	acceptor.getFilterChain().addLast("codec", new ProtocolCodecFilter(new EncryptionFactory()));
        
	players = new MapleCashShopPlayerHolder();
        
	try {
	    InetSocketadd = new InetSocketAddress(PORT);
            acceptor.setHandler(new MapleServerHandler(ServerType.CASHSHOP));
	    acceptor.bind(InetSocketadd);
            System.out.println("[System] ĳ�ü����� ��Ʈ : " + PORT + " ����.");
	} catch (IOException e) {
	    System.err.println("[System] ĳ�ü����� ��Ʈ : " + PORT + " ���� ����.");
	}
	Runtime.getRuntime().addShutdownHook(new Thread(new ShutDownListener()));
    }

    public static void startServer() {
	try {
	    CashShopServer.instance.run_startup_configurations();
	} catch (final Exception ex) {
	    System.err.println("Error initializing Cash Shop server" + ex);
	}
    }

    public final MapleCashShopPlayerHolder getPlayerStorage() {
	return players;
    }

    public final void shutdown() {
	players.disconnectAll();
	acceptor.unbind(InetSocketadd);
    }

    private final class ShutDownListener implements Runnable {

	@Override
	public void run() {
	    System.out.println("Saving all connected clients...");
	    players.disconnectAll();
	    acceptor.unbind();
	}
    }
    
    public void ChannelChange_Data(ChracterTransfer transfer, int characterid) {
	getPlayerStorage().registerPendingPlayer(transfer, characterid);
    }

    public final boolean isCharacterInCS(String name) {
	return getPlayerStorage().isCharacterConnected(name);
    } 
}
