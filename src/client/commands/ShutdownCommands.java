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
import launch.CashShopServer;
import launch.ChannelServer;
import launch.helpers.ShutdownServer;

public class ShutdownCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {

	if (splitted[0].equals("!서버종료")) {
	    int time = 60000;
	    if (splitted.length > 1) {
		time = Integer.parseInt(splitted[1]) * 60000;
	    }
	    CommandProcessor.forcePersisting();
	    c.getChannelServer().shutdown(time);
	    c.getPlayer().dropMessage(6, "Shutting down... in " + time + "");

	} else if (splitted[0].equals("!캐시샵서버종료")) {
	    CashShopServer.getInstance().shutdown();
	} else if (splitted[0].equals("!전체서버종료")) {
	    int time = 60000;
	    if (splitted.length > 1) {
		time = Integer.parseInt(splitted[1]) * 60000;
	    }
	    CommandProcessor.forcePersisting();
	    ChannelServer.shutdown(time);
	    c.getPlayer().dropMessage(6, "1분후에 서버가 종료됩니다.");

	} else if (splitted[0].equals("!로그인서버종료")) {
	    c.getChannelServer().shutdownLogin();
	    c.getPlayer().dropMessage(6, "종료중..");

	} else if (splitted[0].equals("!지금서버종료")) {
	    CommandProcessor.forcePersisting();
	    new ShutdownServer(c.getChannel()).run();
	    c.getPlayer().dropMessage(6, "종료중..");

	} else if (splitted[0].equals("!고용상점종료")) {
	    c.getChannelServer().closeAllMerchant();
	}
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("고용상점종료", "", "현재 채널의 모든 고용상점을 닫습니다.", 6),
		    new CommandDefinition("캐시샵서버종료", "", "캐시샵 서버를 종료합니다.", 6),
		    new CommandDefinition("서버종료", "(<종료대기시간>)", "현재 채널을 종료합니다.", 6),
		    new CommandDefinition("지금서버종료", "", "현재 채널의 서버를 지금 종료합니다.", 6),
		    new CommandDefinition("로그인서버종료", "", "로그인 서버를 지금 종료합니다.", 6),
		    new CommandDefinition("전체서버종료", "(<종료대기시간>)", "모든 서버를 종료합니다.", 6),};
    }
}
