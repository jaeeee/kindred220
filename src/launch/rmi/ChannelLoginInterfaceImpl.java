/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
