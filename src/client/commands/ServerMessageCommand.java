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
import tools.StringUtil;
import java.util.Collection;

public class ServerMessageCommand implements Command {

    @Override
    public void execute(MapleClient c, String[] splittedLine) throws Exception, IllegalCommandSyntaxException {
	Collection<ChannelServer> cservs = ChannelServer.getAllInstances();
	String outputMessage = StringUtil.joinStringFrom(splittedLine, 1);
	for (ChannelServer cserv : cservs) {
	    cserv.setServerMessage(outputMessage);
	}
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("��������", "<�޽���>", "���� ��ü�� ����� ���� �޽����� �ٲߴϴ�.", 2)
	};
    }
}
