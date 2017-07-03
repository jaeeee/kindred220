/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch.rmi;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;
import javax.rmi.ssl.SslRMIClientSocketFactory;
import javax.rmi.ssl.SslRMIServerSocketFactory;
import launch.ChannelServer;

/**
 *
 * @author Baekho
 */
public class ChannelLoginInterfaceImpl extends UnicastRemoteObject implements ChannelLoginInterface {
    private ChannelServer cserv;
    
    public ChannelLoginInterfaceImpl(ChannelServer cserv) throws RemoteException {
        super(0, new SslRMIClientSocketFactory(), new SslRMIServerSocketFactory());
        this.cserv = cserv;
    }
    
    @Override
    public int getChannelId() {
        return cserv.getChannel();
    }
    
    @Override
    public ChannelServer getChannelServer() {
        return cserv;
    }
}
