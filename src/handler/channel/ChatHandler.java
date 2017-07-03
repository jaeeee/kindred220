/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package handler.channel;

import client.MapleClient;
import client.MapleCharacter;
import client.commands.CommandProcessor;
import community.MapleMultiChat;
import community.MapleMultiChatCharacter;
import constants.ServerConstants;
import constants.programs.ControlUnit;
import launch.CashShopServer;
import launch.ChannelServer;
import launch.world.WorldBroadcasting;
import launch.world.WorldCommunity;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;
import java.util.Collection;
import packet.creators.UIPacket;
import tools.LoggerChatting;

public class ChatHandler {
    
    public static void GeneralChat(String text, byte unk, MapleClient c, MapleCharacter chr) {
   
         if (!CommandProcessor.getInstance().processCommand(c, text)) {
	    if (!chr.isGM() && text.length() >= 80) {
                return;
	    }
            if (WorldCommunity.�󸮱�) {
              chr.dropMessage(1, "ä���� ������ִ� �����̹Ƿ�\r\nä���� �� �� �����ϴ�.");
              return;
            }
            if (chr.getChatban().equals("true")) {
                chr.dropMessage(1, "ä�� ���� ���¿��� ä���� �� �� �����ϴ�.");
                return;
            }
           if(text.charAt(0) == '~') {
               if (chr.getMeso() < 0) {
                   chr.dropMessage(1, "0�޼Ұ� ���� ��üä���� ����� �� �����ϴ�.");
                   return;
               } else {
               if (ServerConstants.chatlimit >= 500) {
                   ServerConstants.chatlimit = 0;
                   ControlUnit.ChatList.clear();
                   ControlUnit.Chat.setModel(ControlUnit.ChatList);
               }
                ServerConstants.chatlimit++;
                chr.gainMeso(-0, false);
                if (chr.getRC() > 0) {
                    WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(21,"���Ŀ��ڢ� " + c.getPlayer().getName() + " [Ch:" + (c.getChannel() == 0 ? 1 : c.getChannel() == 1 ? "20���̻�" : c.getChannel()) + "]  : " + text.substring(1).toString()));
                } else {
                    WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(21, c.getPlayer().getName() + " [Ch:" + ((c.getChannel() == 0 ? 1 : c.getChannel() == 1 ? "20���̻�" : c.getChannel())) + "]  : " + text.substring(1).toString()));
                }
                ControlUnit.ChatList.addElement("[��ü]"+ c.getPlayer().getName() + " : " + text.substring(1).toString());
                ControlUnit.Chat.setModel(ControlUnit.ChatList);
             }
             } else {
               if (ServerConstants.chatlimit >= 500) {
                   ServerConstants.chatlimit = 0;
                   ControlUnit.ChatList.clear();
                   ControlUnit.Chat.setModel(ControlUnit.ChatList);
               }
                ServerConstants.chatlimit++;
                ControlUnit.ChatList.addElement("[�Ϲ�][Ch." + chr.getClient().getChannel() + "]" + chr.getName() + " : " + text);
                ControlUnit.Chat.setModel(ControlUnit.ChatList);
                chr.getMap().broadcastMessage(MainPacketCreator.getChatText(chr.getId(), text, c.getPlayer().isGM(), unk), c.getPlayer().getPosition());
            }
        LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("�Ϲ� ä�� : ", chr, text));
        }
    }

    public static void Others(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
	int type = rh.readByte();
	byte numRecipients = rh.readByte();
	int recipients[] = new int[numRecipients];

	for (byte i = 0; i < numRecipients; i++) {
	    recipients[i] = rh.readInt();
	}
	String chattext = rh.readMapleAsciiString();
        if (!CommandProcessor.getInstance().processCommand(c, chattext))
	    switch (type) {
		case 0:
               if (ServerConstants.chatlimit >= 500) {
                   ServerConstants.chatlimit = 0;
                   ControlUnit.ChatList.clear();
                   ControlUnit.Chat.setModel(ControlUnit.ChatList);
               }
               ServerConstants.chatlimit ++;
                    ControlUnit.ChatList.addElement("[ģ��][Ch." + chr.getClient().getChannel() + "]" + chr.getName() + " : " + chattext);
                    ControlUnit.Chat.setModel(ControlUnit.ChatList);
		    WorldCommunity.buddyChat(recipients, chr.getId(), chr.getName(), chattext);
                    LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("ģ�� : ", chr, chattext));
		    break;
		case 1:
               if (ServerConstants.chatlimit >= 500) {
                   ServerConstants.chatlimit = 0;
                   ControlUnit.ChatList.clear();
                   ControlUnit.Chat.setModel(ControlUnit.ChatList);
               }
               ServerConstants.chatlimit ++;
                    ControlUnit.ChatList.addElement("[��Ƽ][Ch." + chr.getClient().getChannel() + "]" + chr.getName() + " : " + chattext);
                    ControlUnit.Chat.setModel(ControlUnit.ChatList);
		    WorldCommunity.partyChat(chr.getParty(), chattext, chr.getName());
                    LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("��Ƽ : ", chr, chattext));
                    break;
		case 2:
               if (ServerConstants.chatlimit >= 500) {
                   ServerConstants.chatlimit = 0;
                   ControlUnit.ChatList.clear();
                   ControlUnit.Chat.setModel(ControlUnit.ChatList);
               }
               ServerConstants.chatlimit ++;
                    ControlUnit.ChatList.addElement("[���][Ch." + chr.getClient().getChannel() + "]" + chr.getName() + " : " + chattext);
                    ControlUnit.Chat.setModel(ControlUnit.ChatList);
		    ChannelServer.guildChat(chr.getGuildId(), chr.getName(), chr.getId(), chattext);
                    LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("��� : ", chr, chattext));
		    break;
		case 3:
               if (ServerConstants.chatlimit >= 500) {
                   ServerConstants.chatlimit = 0;
                   ControlUnit.ChatList.clear();
                   ControlUnit.Chat.setModel(ControlUnit.ChatList);
               }
               ServerConstants.chatlimit ++;
                    ControlUnit.ChatList.addElement("[����][Ch." + chr.getClient().getChannel() + "]" + chr.getName() + " : " + chattext);
                    ControlUnit.Chat.setModel(ControlUnit.ChatList);
		    WorldCommunity.allianceChat(chr.getGuildId(), chr.getName(),chr.getId(), chattext);
                    LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("���� : ", chr, chattext));
		    break;
                case 4: //������ ä��
               if (ServerConstants.chatlimit >= 500) {
                   ServerConstants.chatlimit = 0;
                   ControlUnit.ChatList.clear();
                   ControlUnit.Chat.setModel(ControlUnit.ChatList);
               }
               ServerConstants.chatlimit ++;
                    ControlUnit.ChatList.addElement("[������][Ch." + chr.getClient().getChannel() + "]" + chr.getName() + " : " + chattext);
                    ControlUnit.Chat.setModel(ControlUnit.ChatList);
                    chr.getParty().getExpedition().broadcastMessage(chr, MainPacketCreator.multiChat(chr.getName(), chattext, 4));
                    LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("������ : ", chr, chattext));
                    break;
                        
	    }
    }

    public static void Messenger(ReadingMaple slea, MapleClient c) {
        String name;
        String input;
        MapleMultiChat messenger = c.getPlayer().getMessenger();

        switch (slea.readByte()) {
            case 0x00: // open
                if (messenger == null) {
                    slea.skip(1);
                    byte player = slea.readByte();
                    int messengerid = slea.readInt();
                    if (messengerid == 0) { // create
                            MapleMultiChatCharacter messengerplayer = new MapleMultiChatCharacter(c.getPlayer());
                            messenger = WorldCommunity.createMessenger(messengerplayer);
                            c.getPlayer().setMessenger(messenger);
                            c.getPlayer().setMessengerPosition(0);
                    } else { // join
                            messenger = WorldCommunity.getMessenger(messengerid);
                            int position = messenger.getLowestPosition();
                            MapleMultiChatCharacter messengerplayer = new MapleMultiChatCharacter(c.getPlayer(), position);
                            messenger.addMember(messengerplayer);
                            if (messenger != null) {
                                if (messenger.getMembers().size() < player) {
                                    c.getPlayer().setMessenger(messenger);
                                    c.getPlayer().setMessengerPosition(position);
                                    WorldCommunity.joinMessenger(messenger.getId(), messengerplayer, c.getPlayer().getName(), messengerplayer.getChannel());
                                } else {
                                    c.getPlayer().dropMessage(5, "�̹� �ش� �޽����� �ִ� �ο� �Դϴ�.");
                                }
                            }
                    }
                } else {
                    c.getPlayer().dropMessage(1, "�̹� ���� ���Դϴ�.");
                }
                break;
            case 0x02: // exit
                if (messenger != null) {
                    MapleMultiChatCharacter messengerplayer = new MapleMultiChatCharacter(c.getPlayer());
                    WorldCommunity.leaveMessenger(messenger.getId(), messengerplayer);
                    c.getPlayer().setMessenger(null);
                    c.getPlayer().setMessengerPosition(4);
                }
                break;
            case 0x03: { // invite
                if (messenger.getMembers().size() < 6) {
                    input = slea.readMapleAsciiString();
                    MapleCharacter target = null;
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        target = cserv.getPlayerStorage().getCharacterByName(input);
                        if (target != null) {
                            break;
                        }
                    }
                    if (target != null) {
                        if (target.getMessenger() == null) {
                            if (!c.getPlayer().isGM() && target.isGM()) {
                                c.getSession().write(MainPacketCreator.messengerNote(input, 4, 0));
                                return;
                            }
                            target.getClient().getSession().write(MainPacketCreator.messengerInvite(c.getPlayer().getName(), messenger.getId()));
                            c.getSession().write(MainPacketCreator.messengerNote(input, 4, 1));
                        } else {
                            c.getSession().write(MainPacketCreator.messengerChat(c.getPlayer().getName(), c.getPlayer().getName() + " : " + input + " ���� �̹� �޽����� ����ϴ� ���Դϴ�."));
                        }
                    } else {
                        c.getSession().write(MainPacketCreator.messengerNote(input, 4, 0));
                    }
                    break;
                }
            }
            case 0x05: // decline
                String targeted = slea.readMapleAsciiString();
                MapleCharacter target = null;
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    target = cserv.getPlayerStorage().getCharacterByName(targeted);
                    if (target != null) {
                        break;
                    }
                }
                if (target != null) {
                    if (target.getMessenger() != null) {
                        target.getClient().getSession().write(MainPacketCreator.messengerNote(c.getPlayer().getName(), 5, 0));
                    }
                }
                break;
            case 0x06: // message
                if (messenger != null) {
                    name = slea.readMapleAsciiString();
                    input = slea.readMapleAsciiString();
                    WorldCommunity.messengerChat(messenger.getId(), input, name);
                }
                break;
        }
    }

    public static void Whisper_Find(ReadingMaple rh, MapleClient c) {
	byte mode = rh.readByte();
	rh.readInt();
        boolean friend = false;
	switch (mode) {
	    case 0x44: //ģ�� ��Ͽ��� Ŭ��
                friend = true;
            case 5: {//ã��
                String recipient = rh.readMapleAsciiString();
		MapleCharacter player = c.getChannelServer().getPlayerStorage().getCharacterByName(recipient);
		if (player != null) {
		    if (!player.isGM() || (c.getPlayer().isGM() && player.isGM())) {
			if (CashShopServer.getInstance().isCharacterInCS(recipient)) {
			    c.getSession().write(MainPacketCreator.getFindReplyWithCS(recipient, friend));
			} else {
			    c.getSession().write(MainPacketCreator.getFindReplyWithMap(recipient, friend, player.getMap().getId()));
			}
		    } else {
			c.getSession().write(MainPacketCreator.getWhisperReply(recipient, (byte) 0));
		    }
		} else {
		    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        player = cserv.getPlayerStorage().getCharacterByName(recipient);
                        if (player != null) {
                            break;
                        }
                    }
                    if (CashShopServer.getInstance().getPlayerStorage().isCharacterConnected(recipient)) {
                        c.getSession().write(MainPacketCreator.getFindReplyWithCS(recipient, friend));
                        return;
                    } else if (player != null) {
                        c.send(MainPacketCreator.getFindReply(recipient, friend, player.getClient().getChannel()));
                    } else {
                        c.send(MainPacketCreator.getWhisperReply(recipient, (byte) 0));
                    }
		}
		break;
            }
	    case 6: { // Whisper
		String recipient = rh.readMapleAsciiString();
		String text = rh.readMapleAsciiString();
               if (ServerConstants.chatlimit >= 500) {
                   ServerConstants.chatlimit = 0;
                   ControlUnit.ChatList.clear();
                   ControlUnit.Chat.setModel(ControlUnit.ChatList);
               }
               ServerConstants.chatlimit ++;
                ControlUnit.ChatList.addElement("[�ӼӸ�][Ch." + c.getChannel() + "]" + c.getPlayer().getName() + " : " + text);
                ControlUnit.Chat.setModel(ControlUnit.ChatList);
                if (!CommandProcessor.getInstance().processCommand(c, text)) {
                    MapleCharacter player = c.getChannelServer().getPlayerStorage().getCharacterByName(recipient);
                    if (player != null) {
                        if (player.isGM() && !c.getPlayer().isGM()) {
                            c.getSession().write(MainPacketCreator.getWhisperReply(recipient, (byte) 0));
                        } else {
                            player.getClient().getSession().write(MainPacketCreator.getWhisper(c.getPlayer().getName(), c.getChannel(), text));
                            c.getSession().write(MainPacketCreator.getWhisperReply(recipient, (byte) 1));
                            LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("��", c.getPlayer(), "[��� : "+player.getName()+"] : "+text));
                        }
                    } else { // Not found
                        Collection<ChannelServer> cservs = ChannelServer.getAllInstances();
                        for (ChannelServer cserv : cservs) {
                            player = cserv.getPlayerStorage().getCharacterByName(recipient);
                            if (player != null) {
                                break;
                            }
                        }
                        if (player != null) {
                                if (!c.getPlayer().isGM() && player.isGM()) {
                                    c.getSession().write(MainPacketCreator.getWhisperReply(recipient, (byte) 0));
                                } else {
                                    player.getClient().getSession().write(MainPacketCreator.getWhisper(c.getPlayer().getName(), c.getChannel(), text));
                                    LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("��", c.getPlayer(), "[��� : "+player.getName()+"] : "+text));
                                    c.getSession().write(MainPacketCreator.getWhisperReply(recipient, (byte) 1));
                                }
                        } else {
                            c.getSession().write(MainPacketCreator.getWhisperReply(recipient, (byte) 0));
                        }
                    }
                }
		break;
	    }
	}
    }
}
