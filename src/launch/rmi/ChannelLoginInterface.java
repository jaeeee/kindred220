/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
