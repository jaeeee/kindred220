/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package launch.world;

import constants.ServerConstants;
import client.MapleCharacter;
import java.rmi.RemoteException;
import launch.CashShopServer;
import launch.ChannelServer;
import launch.holder.MapleWhereAreYou;
import java.util.HashMap;
import java.util.Map;
import launch.rmi.LoginRegistryImpl;
import packet.creators.MainPacketCreator;
import tools.Timer.EtcTimer;

/** 모든 채널을 스캔하여 유저가 접속해 있는지 등의 접속관련 정보 제공.
 *
 * @author 티썬
 *
 * since 2012. 2. 24
     * 
     * @since Revision 25
 */

public class WorldConnected {
    
    public static boolean mistic = true;
    /** 모든 채널을 스캔하여 해당 계정이 고용상점을 갖고 있는지 체크.
     * 
     * @param <int> 계정번호
     * 
     * @return 고용상점소유여부
     * 
     * @since Revision 25
     * 
     */
    public static boolean hasMerchant(int accountId) {
        boolean ret = false;
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            ret = cserv.constainsMerchant(accountId);
        }
	return ret;
        
    }
    
    /** 각 채널이 몇명의 유저를 수용중인지 정보 제공
     * 
     * @return 각채널이 가진 유저수
     * 
     * @since Revision 25
     * 
     */
    
    public static Map<Integer, Integer> getConnected(int serverId) throws RemoteException {
	Map<Integer, Integer> ret = new HashMap<Integer, Integer>();
	int total = 0;
	for (int i = 0; i <= ServerConstants.serverCount; i++) {
                int curConnected = ChannelServer.getInstance(i).getPlayerStorage().getConnectedClients();
                ret.put(i, curConnected);
                total += curConnected;
	}

        if (total >= 120) {
            byte burningType = (byte) ((total < 150 && total >= 120) ? 1 : (total < 180 && total >= 150) ? 2 : (total >= 180) ? 3 : 0);
            int EXPrate = (int) (burningType == 1 ? 1.2 : burningType == 2 ? 1.5 : burningType == 3 ? 2 : 1);
            for (ChannelServer ch : ChannelServer.getAllInstances()) {
                if (ch.burningType == burningType) break;
                ch.isBurning = true;
                ch.setExpRate((int) (ServerConstants.defaultExpRate * EXPrate));
                ch.burningType = burningType;
            }
        } else {
            for (ChannelServer ch : ChannelServer.getAllInstances()) {
                if (ch.isBurning) {
                    ch.isBurning = false;
                    ch.setExpRate(ServerConstants.defaultExpRate);
                    ch.burningType = 0;
                }
            }
        }
	ret.put(0, total);
	return ret;
    }
    

    /** 모든 채널을 스캔하여 해당 유저가 어느 채널에 접속해 있는지 확인.
     * 
     * @param <String> 유저명
     * 
     * @return 접속중 채널 (미접속시 -1 반환)
     * 
     * @since Revision 25
     * 
     */
    public static int find(String charName){
	for (ChannelServer cserv : ChannelServer.getAllInstances()) {
	    if (cserv.getPlayerStorage().getCharacterByName(charName) != null) {
                return cserv.getChannel();
            }
	}
	return -1;
    }

    
    /** 모든 채널을 스캔하여 해당 유저가 어느 채널에 접속해 있는지 확인.
     * 
     * @param <int> 유저넘버
     * 
     * @return 접속중 채널 (미접속시 -1 반환)
     * 
     * @since Revision 25
     * 
     */
    public static int find(int characterId) {
	for (ChannelServer cserv : ChannelServer.getAllInstances()) {
	    if (cserv.getPlayerStorage().getCharacterById(characterId) != null) {
                return cserv.getChannel();
            }
	}
	return -1;
    }

    /** 캐시샵 채널을 스캔하여 해당 유저가 캐시샵에 접속해 있는지 확인.
     * 
     * @param <String> 유저명
     * 
     * @return 캐시샵접속여부
     * 
     * @since Revision 25
     * 
     */
    public static boolean isCharacterInCS(String name) {
        return CashShopServer.getInstance().getPlayerStorage().isCharacterConnected(name);
    }
    
    
    /** 모든 채널을 스캔하여 해당 유저가 어느 채널에든 접속해 있는지 확인.
     * 
     * @param <String> 유저명
     * 
     * @return 접속여부
     * 
     * @since Revision 25
     * 
     */
    public static boolean isConnected(String charName) {
	for (ChannelServer cserv : ChannelServer.getAllInstances()) {
	    if (cserv.getPlayerStorage().getCharacterByName(charName) != null) {
                return true;
            }
        }
	return false;
    }
    
    /** 모든 채널을 스캔하여 해당 유저가 어느 채널에든 접속해 있는지 확인.
     * 
     * @param <int> 유저넘버
     * 
     * @return 접속여부
     * 
     * @since Revision 25
     * 
     */
    public static boolean isConnected(int id) {
	for (ChannelServer cserv : ChannelServer.getAllInstances()) {
	    if (cserv.getPlayerStorage().getCharacterById(id) != null) {
                return true;
            }
        }
	return false;
    }
    
    /** 모든 채널을 스캔하여 해당 유저의 위치정보를 제공.
     * 
     * @param <String> 유저명
     * 
     * @return 해당유저의 위치정보
     * 
     * @since Revision 25
     * 
     */
    public static MapleWhereAreYou getLocation(String charName) {
        int channel = WorldConnected.find(charName);
        if (channel != -1) {
            MapleCharacter chr = ChannelServer.getInstance(channel).getPlayerStorage().getCharacterByName(charName);
            if (chr != null) {
                return new MapleWhereAreYou(chr.getMapId(), (byte) channel);
            }
        }
	return null;
    }

    public static Map<Integer, Integer> getConnected() {
	Map<Integer, Integer> ret = new HashMap<Integer, Integer>();
	int total = 0;
	for (int i = 0; i <= ServerConstants.serverCount; i++) {
		int curConnected = ChannelServer.getInstance(i).getPlayerStorage().getConnectedClients();
		ret.put(i, curConnected);
		total += curConnected;
	}
	ret.put(0, total);
	return ret;
    }
    
    public static void misticFieldOpen() {
       WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(8,"이벤트 : 미스틱 게이트 입구가 열렸습니다. [미스틱 게이트 닫히기까지 남은시간 : 1 시간]"));
       EtcTimer tMan = EtcTimer.getInstance();
       tMan.schedule(new Runnable() { 
       @Override
       public void run() {
          misticFieldClose();
          mistic = false;
       }
     }, 3600000);
    }

    public static void misticFieldClose() {
       WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(8,"이벤트 : 미스틱 게이트 입구가 닫혀 버렸습니다. [미스틱 게이트 오픈까지 남은시간 : 3 시간]"));
       EtcTimer tMan = EtcTimer.getInstance();
       tMan.schedule(new Runnable() { 
       @Override
       public void run() {
          misticFieldOpen();
          mistic = true;
            }
        }, 10800000);
    }
}
