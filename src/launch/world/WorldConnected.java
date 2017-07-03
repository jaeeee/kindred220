/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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

/** ��� ä���� ��ĵ�Ͽ� ������ ������ �ִ��� ���� ���Ӱ��� ���� ����.
 *
 * @author Ƽ��
 *
 * since 2012. 2. 24
     * 
     * @since Revision 25
 */

public class WorldConnected {
    
    public static boolean mistic = true;
    /** ��� ä���� ��ĵ�Ͽ� �ش� ������ �������� ���� �ִ��� üũ.
     * 
     * @param <int> ������ȣ
     * 
     * @return ��������������
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
    
    /** �� ä���� ����� ������ ���������� ���� ����
     * 
     * @return ��ä���� ���� ������
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
    

    /** ��� ä���� ��ĵ�Ͽ� �ش� ������ ��� ä�ο� ������ �ִ��� Ȯ��.
     * 
     * @param <String> ������
     * 
     * @return ������ ä�� (�����ӽ� -1 ��ȯ)
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

    
    /** ��� ä���� ��ĵ�Ͽ� �ش� ������ ��� ä�ο� ������ �ִ��� Ȯ��.
     * 
     * @param <int> �����ѹ�
     * 
     * @return ������ ä�� (�����ӽ� -1 ��ȯ)
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

    /** ĳ�ü� ä���� ��ĵ�Ͽ� �ش� ������ ĳ�ü��� ������ �ִ��� Ȯ��.
     * 
     * @param <String> ������
     * 
     * @return ĳ�ü����ӿ���
     * 
     * @since Revision 25
     * 
     */
    public static boolean isCharacterInCS(String name) {
        return CashShopServer.getInstance().getPlayerStorage().isCharacterConnected(name);
    }
    
    
    /** ��� ä���� ��ĵ�Ͽ� �ش� ������ ��� ä�ο��� ������ �ִ��� Ȯ��.
     * 
     * @param <String> ������
     * 
     * @return ���ӿ���
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
    
    /** ��� ä���� ��ĵ�Ͽ� �ش� ������ ��� ä�ο��� ������ �ִ��� Ȯ��.
     * 
     * @param <int> �����ѹ�
     * 
     * @return ���ӿ���
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
    
    /** ��� ä���� ��ĵ�Ͽ� �ش� ������ ��ġ������ ����.
     * 
     * @param <String> ������
     * 
     * @return �ش������� ��ġ����
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
       WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(8,"�̺�Ʈ : �̽�ƽ ����Ʈ �Ա��� ���Ƚ��ϴ�. [�̽�ƽ ����Ʈ ��������� �����ð� : 1 �ð�]"));
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
       WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(8,"�̺�Ʈ : �̽�ƽ ����Ʈ �Ա��� ���� ���Ƚ��ϴ�. [�̽�ƽ ����Ʈ ���±��� �����ð� : 3 �ð�]"));
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
