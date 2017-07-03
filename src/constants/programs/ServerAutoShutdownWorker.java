/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package constants.programs;

import constants.ServerConstants;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.rmi.ssl.SslRMIClientSocketFactory;
import javax.rmi.ssl.SslRMIServerSocketFactory;
import launch.CashShopServer;
import launch.ChannelServer;
import launch.LoginServer;
import launch.helpers.ShutdownServer;
import packet.creators.MainPacketCreator;
import packet.transfer.write.Packet;
import tools.Timer;
import tools.Timer.BuffTimer;
import tools.Timer.CheatTimer;
import tools.Timer.CloneTimer;
import tools.Timer.EtcTimer;
import tools.Timer.EventTimer;
import tools.Timer.MapTimer;
import tools.Timer.PingTimer;
import tools.Timer.ShowTimer;
import tools.Timer.WorldTimer;

/**
 *
 * @author �������̸�
 */
public class ServerAutoShutdownWorker implements Runnable {
    @Override
    public void run() {
        try {
	    Packet packet = MainPacketCreator.serverNotice(1, "�����մϴ�.\r\n���� �� �����ּ���.");
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                cserv.broadcastPacket(packet);
            }
            Thread.sleep(10000);
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
        LoginServer.getInstance().shutdown();
        LoginServer.getInstance().isReboot = true;
        CashShopServer.getInstance().shutdown();
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            Timer.WorldTimer.getInstance().schedule(new ShutdownServer(cserv.getChannel()), 1000);
        }

            EtcTimer.getInstance().stop();
            MapTimer.getInstance().stop();
            CloneTimer.getInstance().stop();
            EventTimer.getInstance().stop();
            BuffTimer.getInstance().stop();
            PingTimer.getInstance().stop();
            ShowTimer.getInstance().stop();
        try {
            final Registry registry = LocateRegistry.getRegistry(ServerConstants.Host, Registry.REGISTRY_PORT, new SslRMIClientSocketFactory());
            registry.unbind("LoginRegistry");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        System.out.println("������ �� �����մϴ�.");
            EtcTimer.getInstance().start();
            MapTimer.getInstance().start();
            CloneTimer.getInstance().start();
            EventTimer.getInstance().start();
            BuffTimer.getInstance().start();
            PingTimer.getInstance().start();
            ShowTimer.getInstance().start();
            try {
                Thread.sleep(5000);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
	    LoginServer.startServer();
            
            /* [ä�� ���� ����] */
	    ChannelServer.startServer();
            
            /* [ĳ�ü� ���� ����] */
	    CashShopServer.startServer();
    }
}
