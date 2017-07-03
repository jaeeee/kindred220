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
	if (splitted[0].equals("!���ڵ帮��")) {
	    SendPacketOpcode.reloadOpcode();
            RecvPacketOpcode.reloadOpcode();
            c.getPlayer().dropShowInfo("[�ý���] ���ڵ� ������ �Ϸ�Ǿ����ϴ�.");
	} else if (splitted[0].equals("!��Ӹ���")) {
	    MapleMonsterProvider.getInstance().clearDrops();
	    ReactorScriptManager.getInstance().clearDrops();
            c.getPlayer().dropShowInfo("[�ý���] ��� ������ �Ϸ�Ǿ����ϴ�.");
	} else if (splitted[0].equals("!��Ż����")) {
	    PortalScriptManager.getInstance().clearScripts();
            c.getPlayer().dropShowInfo("[�ý���] ��Ż ������ �Ϸ�Ǿ����ϴ�.");
	} else if (splitted[0].equals("!��������")) {
	    MapleShopFactory.getInstance().clear();
            c.getPlayer().dropShowInfo("[�ý���] ���� ������ �Ϸ�Ǿ����ϴ�.");
	} else if (splitted[0].equals("!�̺�Ʈ����")) {
	    for (ChannelServer instance : ChannelServer.getAllInstances()) {
		instance.reloadEvents();
	    }
            c.getPlayer().dropShowInfo("[�ý���] �̺�Ʈ ������ �Ϸ�Ǿ����ϴ�.");
	} else if (splitted[0].equals("!��ũ��Ʈ����")) {
            NPCScriptManager.getInstance().clearScript();
            c.getPlayer().dropShowInfo("[�ý���] ��ũ��Ʈ ������ �Ϸ�Ǿ����ϴ�.");
        }
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("���ڵ帮��", "", "���ú�� ���� ���ڵ带 properties���� �ٽ� �ҷ��ɴϴ�.", 6),
		    new CommandDefinition("��Ż����", "", "ĳ�õ� ��Ż��ũ��Ʈ�� ���� js�� �ٽ� �ҷ��ɴϴ�.", 6),
		    new CommandDefinition("��Ӹ���", "", "ĳ�õ� ��� �����͸� ���� DB���� �ٽ� �ҷ��ɴϴ�.", 6),
		    new CommandDefinition("��������", "", "ĳ�õ� ���� �����͸� ���� DB���� �ٽ� �ҷ��ɴϴ�.", 6),
		    new CommandDefinition("��ũ��Ʈ����", "", "ĳ�õ� ��ũ��Ʈ �����͸� ���� �ʿ��Ҷ� �ٽ� �ҷ��ɴϴ�.", 6),
		    new CommandDefinition("�̺�Ʈ����", "", "ĳ�õǰ� �������� �̺�Ʈ�� ��� �����ϰ� js�� �ٽ� �ҷ��ɴϴ�.", 6)
	};
    }
}