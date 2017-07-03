/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
