/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package launch.rmi;

import java.rmi.Remote;
import java.rmi.RemoteException;
import launch.ChannelServer;

/**
 *
 * @author Baekho
 */
public interface ChannelLoginInterface extends Remote {
    public int getChannelId() throws RemoteException;
    public ChannelServer getChannelServer() throws RemoteException;
}
