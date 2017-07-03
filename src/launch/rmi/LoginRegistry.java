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
import launch.LoginServer;
import launch.CashShopServer;

/**
 *
 * @author Baekho
 */
public interface LoginRegistry extends Remote {
    public void addChannelServer(int wid, ChannelLoginInterface cli) throws RemoteException;
    public void removeChannelServer(int wid, int cid) throws RemoteException;
    public ChannelLoginInterface getChannelServer(int wid, int cid) throws RemoteException;
    public void addLoginServer(LoginServer ls) throws RemoteException;
    public LoginServer getLoginServer() throws RemoteException;
    public void addCashServer(CashShopServer cs) throws RemoteException;
    public CashShopServer getCashServer() throws RemoteException;
    public int getWorldNum() throws RemoteException;
}
