/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch.world;

import client.MapleCharacter;
import community.*;
import constants.ServerConstants;
import java.awt.Point;
import launch.ChannelServer;
import launch.holder.MaplePlayerHolder;
import launch.holder.WideObjectHolder;
import packet.creators.MainPacketCreator;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimerTask;
import java.util.concurrent.ScheduledFuture;
import launch.helpers.MaplePlayerIdChannelPair;
import packet.creators.UIPacket;
import server.life.MapleLifeProvider;
import server.life.MapleMonster;
import tools.Pair;
import tools.Timer;

/** ���� ��ü�� Ŀ�´�Ƽ (�޽���, ģ��, ��Ƽ ��) ����� �����ϴ� �Լ���.
 *
 * @author Ƽ��
 *
 * since 2012. 2. 24
 * @since Revision 33
 */
public class WorldCommunity {
    
    /** �޽��� �� ����� - ���� Ȧ���� �޽����� �ϳ� ������.
     * 
     * @param <mapleMultiChatCharacter> �޽���ĳ����
     * @return �޽���Ŭ����
     * @since Revision 33
     */
    public static boolean �󸮱� = false;
    public static boolean �Ƹ��� = false;
    private static java.util.Timer �Ƹ���Ÿ�� = null;
    
    public static MapleMultiChat createMessenger(MapleMultiChatCharacter chrfor) {
	return WideObjectHolder.getInstance().createMessenger(chrfor);
    }
    
    /** �޽��� �� �� - ���� Ȧ������ �޽����� ��.
     * 
     * @param <int> �޽���ID
     * @return �޽���Ŭ����
     * @since Revision 33
     */

    public static MapleMultiChat getMessenger(int messengerid) {
	return WideObjectHolder.getInstance().getMessenger(messengerid);
    }


    /** �޽��� �� ���� - ���� Ȧ������ �޽����� ���� �޽���ĳ���� ����.
     * 
     * @param <int> �޽���ID
     * @param <mapleMultiChatCharacter> �޽���ĳ����
     * @since Revision 33
     */
    
    public static void �Ƹ���() {
        �Ƹ��� = true;
        �Ƹ���ĵ��();
        WorldBroadcasting.broadcastMessage(MainPacketCreator.startMapEffect("�Ƹ��� : ���~ ���� ������ �������!", 5120009, true));
    } 
    
    public static void �Ƹ���ĵ��() {
            Timer.EtcTimer tMan1 = Timer.EtcTimer.getInstance();
            tMan1.schedule(new Runnable() {
            @Override
            public void run() {
                WorldBroadcasting.broadcastMessage(MainPacketCreator.startMapEffect("�Ƹ��� : ������ �ƽ����� ȭ���� �� ������ ���Ⱦ�� ��.�� ������ �� ������~", 5120009, true));
                �Ƹ��� = false;
          }
       }, 3600000);
    }
    
    public static void leaveMessenger(int messengerid, MapleMultiChatCharacter target) {
	final MapleMultiChat messenger = WideObjectHolder.getInstance().getMessenger(messengerid);
	if (messenger == null) {
	    throw new IllegalArgumentException("No messenger with the specified messengerid exists");
	}
	final int position = messenger.getPositionByName(target.getName());
	messenger.removeMember(target);
	for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            for (MapleMultiChatCharacter messengerchar : messenger.getMembers()) {
                    final MapleCharacter chr = cserv.getPlayerStorage().getCharacterByName(messengerchar.getName());
                    if (chr != null) {
                        chr.getClient().getSession().write(MainPacketCreator.removeMessengerPlayer(position));
                    }
            }
	}
    }

    /** �޽��� �濡 ���� - ���� �޽��� �����ڵ鿡�� ��Ŷ�� �����.
     * 
     * @param <int> �޽��� ID
     * @param <mapleMultiChatCharacter> �޽���ĳ����
     * @param <String> ������ �̸�
     * @param <int> ������ ä��
     * @since Revision 33
     */
    public static void joinMessenger(int messengerid, MapleMultiChatCharacter newchar, String newcharname, int newcharchannel) {
	final MapleMultiChat messenger = WideObjectHolder.getInstance().getMessenger(messengerid);
	if (messenger == null) {
	    throw new IllegalArgumentException("No messenger with the specified messengerid exists");
	}
	
	    for (MapleMultiChatCharacter oldmessengerchar : messenger.getMembers()) {
                if (!(oldmessengerchar.getName().equals(newcharname))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        final MapleCharacter oldplayer = cserv.getPlayerStorage().getCharacterByName(oldmessengerchar.getName());
                        if (oldplayer != null) {
                            final MapleCharacter newplayer = ChannelServer.getInstance(newcharchannel).getPlayerStorage().getCharacterByName(newcharname);
                            oldplayer.getClient().getSession().write(MainPacketCreator.addMessengerPlayer(newcharname, newplayer, newchar.getPosition(), newcharchannel));
                            newplayer.getClient().getSession().write(MainPacketCreator.addMessengerPlayer(oldplayer.getName(), oldplayer, oldmessengerchar.getPosition(), oldmessengerchar.getChannel()));
                        }
                    }
                } else {
                    ChannelServer.getInstance(newcharchannel).getPlayerStorage().getCharacterByName(newcharname).getClient().send(MainPacketCreator.joinMessenger(newchar.getPosition()));
                }
            }
            
            
    }
	
    

    /** �޽��� ä�� - ��Ŷ���
     * 
     * @param <int> �޽��� ID
     * @param <String> ä�ô�ȭ
     * @param <String> �۽��� �̸�
     * @since Revision 33
     */
    public static void messengerChat(int messengerid, String chattext, String namefrom) {
	final MapleMultiChat messenger = WideObjectHolder.getInstance().getMessenger(messengerid);
	if (messenger == null) {
	    throw new IllegalArgumentException("No messenger with the specified messengerid exists");
	}
	for (ChannelServer server : ChannelServer.getAllInstances()) {
	    for (MapleMultiChatCharacter messengerchar : messenger.getMembers()) {
                if (messengerchar.getChannel() == server.getChannel() && !(messengerchar.getName().equals(namefrom))) {
                    final MapleCharacter chr = server.getPlayerStorage().getCharacterByName(messengerchar.getName());
                    if (chr != null) {
                        chr.getClient().getSession().write(MainPacketCreator.messengerChat(namefrom, chattext));
                    }
                }
            }
	}
    }

    /** �޽��� �ʴ� �ź�
     * 
     * @param <String> �ʴ��ߴ����
     * @param <String> �ź��ѻ��
     * @since Revision 33
     */
    public static void declineChat(String target, String namefrom) {
	    if (WorldConnected.isConnected(target)) {
                final MapleCharacter chr = ChannelServer.getInstance(WorldConnected.find(target)).getPlayerStorage().getCharacterByName(target);
                final MapleMultiChat messenger = chr.getMessenger();
                if (messenger != null) {
                    chr.getClient().getSession().write(MainPacketCreator.messengerNote(namefrom, 5, 0));
                }
            }
	
    }
 
    /** �޽��� ������Ʈ (�� ���� �ٲ������)
     * 
     * @param <int> �޽���ID
     * @param <String> ������Ʈ�� ����� �̸�
     * @param <int> ������Ʈ�� ����� ���� ä�� 
     * @since Revision 33
     */
    public static void updateMessenger(int messengerid, String namefrom, int fromchannel) {
	final MapleMultiChat messenger = WideObjectHolder.getInstance().getMessenger(messengerid);
	final int position = messenger.getPositionByName(namefrom);

	for (ChannelServer server : ChannelServer.getAllInstances()) {
	    for (MapleMultiChatCharacter messengerchar : messenger.getMembers()) {
                if (messengerchar.getChannel() == server.getChannel() && !(messengerchar.getName().equals(namefrom))) {
                    final MapleCharacter chr = server.getPlayerStorage().getCharacterByName(messengerchar.getName());
                    if (chr != null) {
                        MapleCharacter from = ChannelServer.getInstance(fromchannel).getPlayerStorage().getCharacterByName(namefrom);
                        chr.getClient().getSession().write(MainPacketCreator.updateMessengerPlayer(namefrom, from, position, fromchannel));
                    }
                }
            }
	}
    }

    /** ��Ŷ�� ������� �ʰ� �޽������� �÷��̾� ����
     * 
     * @param <int> �޽���ID
     * @param <mapleMultiChatCharacter> �޽���ĳ����
     * @since Revision 33
     * 
     */
    public static void silentLeaveMessenger(int messengerid, MapleMultiChatCharacter target) {
	final MapleMultiChat messenger = WideObjectHolder.getInstance().getMessenger(messengerid);
	if (messenger == null) {
	    throw new IllegalArgumentException("No messenger with the specified messengerid exists");
	}
	messenger.silentRemoveMember(target);
    }

    
    /** ��Ŷ�� ������� �ʰ� �޽����� �÷��̾� ����
     * 
     * @param <int> �޽���ID
     * @param <mapleMUltiChatCharacter> ������ �÷��̾�
     * @param <int> �����Ǵ� ��ġ (����)
     * @since Revision 33
     */
    public static void silentJoinMessenger(int messengerid, MapleMultiChatCharacter target, int position) {
	final MapleMultiChat messenger = WideObjectHolder.getInstance().getMessenger(messengerid);
	if (messenger == null) {
	    throw new IllegalArgumentException("No messenger with the specified messengerid exists");
	}
	messenger.silentAddMember(target, position);
    }


    /** ģ�� ä�� ��Ŷ���
     * 
     * @param <int[]> ���ŵǴ� ĳ���� ���
     * @param <int> �۽��� ĳ���� ID
     * @param <String> �۽��� ĳ���͸�
     * @param <String> ä�� ������
     * @since Revision 33
     */
    public static void buddyChat(int[] recipientCharacterIds, int cidFrom, String nameFrom, String chattext) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            final MaplePlayerHolder playerStorage = cserv.getPlayerStorage();
            for (int characterId : recipientCharacterIds) {
                final MapleCharacter chr = playerStorage.getCharacterById(characterId);
                if (chr != null) {
                    if (chr.getBuddylist().containsVisible(cidFrom)) {
                        chr.getClient().getSession().write(MainPacketCreator.multiChat(nameFrom, chattext, 0));
                    }
                }
            }
        }
    }

    /** �������� ģ���� ����.
     * 
     * @param <int> ��û��ID
     * @param <String> �����ID
     * @return �÷��̾���̵�, ä�� ��� Ŭ���� �迭
     * @since Revision 33
     */
    public static MaplePlayerIdChannelPair[] multiBuddyFind(int charIdFrom, int[] characterIds) {
	List<MaplePlayerIdChannelPair> foundsChars = new ArrayList<MaplePlayerIdChannelPair>(characterIds.length);
	for (ChannelServer cserv : ChannelServer.getAllInstances()) {
	    for (int charid : cserv.multiBuddyFindMain(charIdFrom, characterIds)) {
		foundsChars.add(new MaplePlayerIdChannelPair(charid, cserv.getChannel()));
	    }
	}
	return foundsChars.toArray(new MaplePlayerIdChannelPair[foundsChars.size()]);
    }

    /** ģ�� �߰� ��û
     * 
     * @param <String> �߰��̸�
     * @param <int> ��û�� ä��
     * @param <int> ��û�� ID
     * @param <String> ��û�� �̸�
     * @param <int> ��û�� ����
     * @param <int> ��û�� ����
     * @return ģ�� �߰� ��� BuddyList.BuddyAddResult Enum��
     * @since Revision 33
     */
    public static BuddyList.BuddyAddResult requestBuddyAdd(String addName, int channelFrom, int cidFrom, String nameFrom, int levelFrom, int jobFrom, String groupName) {
        for (ChannelServer server : ChannelServer.getAllInstances()) {
            final MapleCharacter addChar = server.getPlayerStorage().getCharacterByName(addName);
            if (addChar != null) {
                final BuddyList buddylist = addChar.getBuddylist();
                if (buddylist.isFull()) {
                    return BuddyList.BuddyAddResult.BUDDYLIST_FULL;
                }
                if (!buddylist.contains(cidFrom)) {
                    buddylist.addBuddyRequest(addChar.getClient(), cidFrom, nameFrom, channelFrom, levelFrom, jobFrom, groupName);
                } else {
                    if (buddylist.containsVisible(cidFrom)) {
                        return BuddyList.BuddyAddResult.ALREADY_ON_LIST;
                    }
                }
            }
        }
	return BuddyList.BuddyAddResult.OK;
    }
    
    /** ��Ƽ �� - ���� Ȧ������ �ش���ƼID�� ��Ƽ�� ��.
     * 
     * @param <int> �� ��Ƽ ID
     * @return ����Ȧ������ �� ��Ƽ
     * @since Revision 33
     */
    public static MapleParty getParty(int partyid) {
        return WideObjectHolder.getInstance().getParty(partyid);
    }
    
    /** ��Ƽ�� ������Ʈ �ɶ� ��Ŷ ����
     * 
     * @param <int> ��ƼID
     * @param <maplePartyOperation> ��Ƽ������Ʈ �۾�
     * @param <maplePartyCharacter> ������Ʈ�Ǵ� ���
     */
    //TODO only notify channels where partymembers are?
    public static void updateParty(int partyid, MaplePartyOperation operation, MaplePartyCharacter target) {
	final MapleParty party = WideObjectHolder.getInstance().getParty(partyid);
	if (party == null) {
	    throw new IllegalArgumentException("no party with the specified partyid exists");
	}
	switch (operation) {
	    case JOIN:
		party.addMember(target);
		break;
	    case EXPEL:
	    case LEAVE:
		party.removeMember(target);
		break;
	    case DISBAND:
		WideObjectHolder.getInstance().disbandParty(partyid);
		break;
	    case SILENT_UPDATE:
	    case LOG_ONOFF:
		party.updateMember(target);
		break;
	    case CHANGE_LEADER:
		party.setLeader(target);
		break;
	    default:
		throw new RuntimeException("Unhandeled updateParty operation " + operation.name());
	}
	WideObjectHolder.getInstance().updateParty(party, operation, target);
    }

    /** ��Ƽ ���� - ����Ȧ���� �� ��Ƽ�� ����Ŵ.
     * 
     * @param <maplePartyCharacter> ��Ƽ�� ��Ƽĳ����
     * @return ��ƼŬ����
     * @since Revision 33
     */
    public static MapleParty createParty(MaplePartyCharacter chrfor) {
	return WideObjectHolder.getInstance().createParty(chrfor);
    }

    /** ���� ä��
     * 
     * @param <int> �����̵�
     * @param <String> ������ �̸�
     * @param <int> ������ ĳ����ID
     * @param <String> ä�� ������
     * @since Revision 33
     */
    public static void allianceChat(int gid, String name, int cid, String msg) {
	WideObjectHolder.getInstance().allianceChat(gid, name, cid, msg);
    }

    /** ��Ƽ ä��
     * 
     * @param <mapleParty> ä���� ������ ��Ƽ
     * @param <String> ä�� ������
     * @param <String> ������ ĳ���͸�
     * @since Revision 33
     */
    public static void partyChat(MapleParty party, String chattext, String namefrom) {
        for (ChannelServer server : ChannelServer.getAllInstances())
	for (MaplePartyCharacter partychar : party.getMembers()) {
	    if (partychar.getChannel() == server.getChannel() && !(partychar.getName().equals(namefrom))) {
		final MapleCharacter chr = server.getPlayerStorage().getCharacterByName(partychar.getName());
		if (chr != null) {
		    chr.getClient().getSession().write(MainPacketCreator.multiChat(namefrom, chattext, 1));
		}
	    }
	}
    }
}
