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
import launch.CashShopServer;
import launch.ChannelServer;
import launch.helpers.ShutdownServer;

public class ShutdownCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {

	if (splitted[0].equals("!��������")) {
	    int time = 60000;
	    if (splitted.length > 1) {
		time = Integer.parseInt(splitted[1]) * 60000;
	    }
	    CommandProcessor.forcePersisting();
	    c.getChannelServer().shutdown(time);
	    c.getPlayer().dropMessage(6, "Shutting down... in " + time + "");

	} else if (splitted[0].equals("!ĳ�ü���������")) {
	    CashShopServer.getInstance().shutdown();
	} else if (splitted[0].equals("!��ü��������")) {
	    int time = 60000;
	    if (splitted.length > 1) {
		time = Integer.parseInt(splitted[1]) * 60000;
	    }
	    CommandProcessor.forcePersisting();
	    ChannelServer.shutdown(time);
	    c.getPlayer().dropMessage(6, "1���Ŀ� ������ ����˴ϴ�.");

	} else if (splitted[0].equals("!�α��μ�������")) {
	    c.getChannelServer().shutdownLogin();
	    c.getPlayer().dropMessage(6, "������..");

	} else if (splitted[0].equals("!���ݼ�������")) {
	    CommandProcessor.forcePersisting();
	    new ShutdownServer(c.getChannel()).run();
	    c.getPlayer().dropMessage(6, "������..");

	} else if (splitted[0].equals("!����������")) {
	    c.getChannelServer().closeAllMerchant();
	}
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("����������", "", "���� ä���� ��� �������� �ݽ��ϴ�.", 6),
		    new CommandDefinition("ĳ�ü���������", "", "ĳ�ü� ������ �����մϴ�.", 6),
		    new CommandDefinition("��������", "(<������ð�>)", "���� ä���� �����մϴ�.", 6),
		    new CommandDefinition("���ݼ�������", "", "���� ä���� ������ ���� �����մϴ�.", 6),
		    new CommandDefinition("�α��μ�������", "", "�α��� ������ ���� �����մϴ�.", 6),
		    new CommandDefinition("��ü��������", "(<������ð�>)", "��� ������ �����մϴ�.", 6),};
    }
}
