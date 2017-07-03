/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package launch.helpers;

import client.MapleClient;
import constants.ServerConstants;
import java.rmi.RemoteException;
import launch.LoginServer;
import launch.world.WorldConnected;
import packet.creators.LoginPacket;
import tools.Pair;
import tools.Timer.PingTimer;
import tools.Timer.WorldTimer;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import launch.rmi.LoginRegistryImpl;

public class MapleLoginWorker {

    private static Runnable persister;
    private static final List<Pair<Integer, String>> IPLog = new LinkedList<Pair<Integer, String>>();
    private static final Lock mutex = new ReentrantLock();

    protected MapleLoginWorker() {
	WorldTimer.getInstance().register(persister, 1800000L);
    }

    public static void registerClient(final MapleClient c) {
	if (c.finishLogin() == 0) {
            try {
                c.getSession().write(LoginPacket.getAuthSuccessRequest(c));
                /* 겉 멀티월드 시작*/
                c.getSession().write(LoginPacket.getServerList(0, WorldConnected.getConnected()));
                c.getSession().write(LoginPacket.getServerList(1, WorldConnected.getConnected()));
                c.getSession().write(LoginPacket.getServerList(3, WorldConnected.getConnected()));
                c.getSession().write(LoginPacket.getServerList(4, WorldConnected.getConnected()));
                c.getSession().write(LoginPacket.getServerList(5, WorldConnected.getConnected()));
                c.getSession().write(LoginPacket.getServerList(10, WorldConnected.getConnected()));
                c.getSession().write(LoginPacket.getServerList(16, WorldConnected.getConnected()));
                c.getSession().write(LoginPacket.getServerList(29, WorldConnected.getConnected()));
                c.getSession().write(LoginPacket.getServerList(43, WorldConnected.getConnected()));
                /* 겉 멀티월드 종료 */
                c.getSession().write(LoginPacket.getEndOfServerList());
                c.send(LoginPacket.recommendWorld(false));
                c.send(LoginPacket.getLastWorld());
                c.setIdleTask(PingTimer.getInstance().schedule(new Runnable() {

                    public void run() {
                        c.getSession().close();
                    }
                }, 10 * 60 * 10000));
            } catch (RemoteException ex) {
                ex.printStackTrace();
            }
	} else {
	    c.getSession().write(LoginPacket.getLoginFailed(7));
	    return;
	}
	mutex.lock();
	try {
	    IPLog.add(new Pair<Integer, String>(c.getAccID(), c.getSession().getRemoteAddress().toString()));
	} finally {
	    mutex.unlock();
	}
    }
}
