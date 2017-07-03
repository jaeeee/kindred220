/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.commands;

import client.MapleClient;
import packet.transfer.write.Packet;
import launch.ChannelServer;
import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import tools.StringUtil;

public class NoticeCommand implements Command {

    private static int getNoticeType(String typestring) {
	if (typestring.equals("����")) {
	    return 0;
	} else if (typestring.equals("�˾�")) {
	    return 1;
	} else if (typestring.equals("���Ķ�")) {
	    return 2;
	} else if (typestring.equals("��ȫ")) {
	    return 5;
	} else if (typestring.equals("������ȫ")) {
	    return 5;
	} else if (typestring.equals("�Ķ�")) {
	    return 6;
	}
	return -1;
    }

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {

	if (splitted[0].equals("!����")) {
	    int joinmod = 1;
	    int range = -1;
	    if (splitted[1].equals("��")) {
		range = 0;
	    } else if (splitted[1].equals("ä��")) {
		range = 1;
	    } else if (splitted[1].equals("����")) {
		range = 2;
	    }

	    int tfrom = 2;
	    if (range == -1) {
		range = 2;
		tfrom = 1;
	    }
	    int type = getNoticeType(splitted[tfrom]);
	    if (type == -1) {
		type = 0;
		joinmod = 0;
	    }
	    StringBuilder sb = new StringBuilder();
	    if (splitted[tfrom].equals("������ȫ")) {
		sb.append("[����]");
	    } else {
		sb.append("");
	    }
	    joinmod += tfrom;
	    sb.append(StringUtil.joinStringFrom(splitted, joinmod));

	    Packet packet = MainPacketCreator.serverNotice(type, sb.toString());
	    if (range == 0) {
		c.getPlayer().getMap().broadcastMessage(packet);
	    } else if (range == 1) {
		ChannelServer.getInstance(c.getChannel()).broadcastPacket(packet);
	    } else if (range == 2) {
		    WorldBroadcasting.broadcastMessage(packet.getBytes());
	    }
	}
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
            new CommandDefinition("����", "[�� ä�� ����] [����/�˾�/���Ķ�/������ȫ/��ȫ/�Ķ�] �޽���", "�ش� �ɼǴ�� �޽����� ����մϴ�.", 2)
	};
    }
}
