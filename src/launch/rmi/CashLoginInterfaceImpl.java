/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch.rmi;

import launch.CashShopServer;
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

/**
 *
 * @author Baekho
 */
public class CashLoginInterfaceImpl extends UnicastRemoteObject implements CashLoginInterface {
    private CashShopServer cs;
    
    public CashLoginInterfaceImpl(CashShopServer cs) throws RemoteException {
        this.cs = cs;
    }
}
