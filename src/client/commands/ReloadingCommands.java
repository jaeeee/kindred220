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
import launch.ChannelServer;
import packet.opcode.RecvPacketOpcode;
import packet.opcode.SendPacketOpcode;
import scripting.NPCScriptManager;
import scripting.PortalScriptManager;
import scripting.ReactorScriptManager;
import server.life.MapleMonsterProvider;
import server.shops.MapleShopFactory;

public class ReloadingCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
	if (splitted[0].equals("!옵코드리셋")) {
	    SendPacketOpcode.reloadOpcode();
            RecvPacketOpcode.reloadOpcode();
            c.getPlayer().dropShowInfo("[시스템] 옵코드 리셋이 완료되었습니다.");
	} else if (splitted[0].equals("!드롭리셋")) {
	    MapleMonsterProvider.getInstance().clearDrops();
	    ReactorScriptManager.getInstance().clearDrops();
            c.getPlayer().dropShowInfo("[시스템] 드롭 리셋이 완료되었습니다.");
	} else if (splitted[0].equals("!포탈리셋")) {
	    PortalScriptManager.getInstance().clearScripts();
            c.getPlayer().dropShowInfo("[시스템] 포탈 리셋이 완료되었습니다.");
	} else if (splitted[0].equals("!상점리셋")) {
	    MapleShopFactory.getInstance().clear();
            c.getPlayer().dropShowInfo("[시스템] 상점 리셋이 완료되었습니다.");
	} else if (splitted[0].equals("!이벤트리셋")) {
	    for (ChannelServer instance : ChannelServer.getAllInstances()) {
		instance.reloadEvents();
	    }
            c.getPlayer().dropShowInfo("[시스템] 이벤트 리셋이 완료되었습니다.");
	} else if (splitted[0].equals("!스크립트리셋")) {
            NPCScriptManager.getInstance().clearScript();
            c.getPlayer().dropShowInfo("[시스템] 스크립트 리셋이 완료되었습니다.");
        }
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("옵코드리셋", "", "리시브와 센드 옵코드를 properties에서 다시 불러옵니다.", 6),
		    new CommandDefinition("포탈리셋", "", "캐시된 포탈스크립트를 비우고 js를 다시 불러옵니다.", 6),
		    new CommandDefinition("드롭리셋", "", "캐시된 드롭 데이터를 비우고 DB에서 다시 불러옵니다.", 6),
		    new CommandDefinition("상점리셋", "", "캐시된 상점 데이터를 비우고 DB에서 다시 불러옵니다.", 6),
		    new CommandDefinition("스크립트리셋", "", "캐시된 스크립트 데이터를 비우고 필요할때 다시 불러옵니다.", 6),
		    new CommandDefinition("이벤트리셋", "", "캐시되고 실행중인 이벤트를 모두 종료하고 js를 다시 불러옵니다.", 6)
	};
    }
}