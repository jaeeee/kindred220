/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
	if (typestring.equals("공지")) {
	    return 0;
	} else if (typestring.equals("팝업")) {
	    return 1;
	} else if (typestring.equals("연파랑")) {
	    return 2;
	} else if (typestring.equals("분홍")) {
	    return 5;
	} else if (typestring.equals("공지분홍")) {
	    return 5;
	} else if (typestring.equals("파랑")) {
	    return 6;
	}
	return -1;
    }

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {

	if (splitted[0].equals("!공지")) {
	    int joinmod = 1;
	    int range = -1;
	    if (splitted[1].equals("맵")) {
		range = 0;
	    } else if (splitted[1].equals("채널")) {
		range = 1;
	    } else if (splitted[1].equals("서버")) {
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
	    if (splitted[tfrom].equals("공지분홍")) {
		sb.append("[공지]");
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
            new CommandDefinition("공지", "[맵 채널 서버] [공지/팝업/연파랑/공지분홍/분홍/파랑] 메시지", "해당 옵션대로 메시지를 출력합니다.", 2)
	};
    }
}
