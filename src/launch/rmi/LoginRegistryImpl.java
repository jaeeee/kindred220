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
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.rmi.ssl.SslRMIClientSocketFactory;
import javax.rmi.ssl.SslRMIServerSocketFactory;
import launch.LoginServer;
import launch.CashShopServer;

/**
 *
 * @author Baekho
 */
public class LoginRegistryImpl extends UnicastRemoteObject implements LoginRegistry  {
    private static LoginRegistryImpl instance;
    private LoginServer ls;
    private CashShopServer cs;
    private Map<Byte, Map<Byte, ChannelLoginInterface>> worlds = new HashMap<Byte, Map<Byte, ChannelLoginInterface>>();
    
    public LoginRegistryImpl() throws RemoteException {
        super(0, new SslRMIClientSocketFactory(), new SslRMIServerSocketFactory());
    }
    
    public static LoginRegistryImpl getInstance() {
        if (instance == null) {
            try {
                instance = new LoginRegistryImpl();
            } catch (RemoteException e) {
                throw new RuntimeException(e);
            }
        }
        return instance;
    }
    
    @Override
    public ChannelLoginInterface getChannelServer(int wid, int cid) {
     //   System.out.println("����" + wid + "cid" + cid);
        ChannelLoginInterface cli = worlds.get((byte) wid).get((byte) cid);
        return cli == null ? null : cli;
    }

    @Override
    public void addChannelServer(int wid, ChannelLoginInterface cli) throws RemoteException {
      //  System.out.println("����" + wid + "cid" + cli.getChannelId());
        if(worlds.get((byte) wid) == null) {
            worlds.put((byte) wid, new HashMap<Byte, ChannelLoginInterface>());
        }
        worlds.get((byte) wid).put((byte) cli.getChannelId(), cli);
        System.out.println("���� : " + wid + " ä�� : " + cli.getChannelId() + " �� �α��� ���� ����.");
    }
    
    @Override
    public void removeChannelServer(int wid, int cid) throws RemoteException {
        worlds.get((byte) wid).remove((byte) cid);
    }

    @Override
    public void addLoginServer(LoginServer ls) throws RemoteException {
        this.ls = ls;
        System.out.println("�α��� ������ �����Ͽ����ϴ�.");
    }
    
    @Override
    public LoginServer getLoginServer() throws RemoteException {
        return ls;
    }
    
    @Override
    public void addCashServer(CashShopServer cs) throws RemoteException {
        this.cs = cs;
    }
    
    @Override
    public CashShopServer getCashServer() throws RemoteException {
        return cs;
    }

    @Override
    public int getWorldNum() throws RemoteException {
        return worlds.size();
    }
}
