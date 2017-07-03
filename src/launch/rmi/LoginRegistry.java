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
