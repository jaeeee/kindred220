/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import client.MapleCharacter;
import client.MapleClient;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import packet.creators.MainPacketCreator;
import tools.StringUtil;
import packet.creators.PlayerShopPacket;
import server.maps.MapleMap;
import tools.Timer;

public class TestCommands implements Command {

    @Override
    public void execute(final MapleClient c, final String[] splitted) throws Exception, IllegalCommandSyntaxException {
        if (splitted[0].equals("!패킷")) {
	    if (splitted.length > 1) {
		c.getSession().write(MainPacketCreator.getPacketFromHexString(StringUtil.joinStringFrom(splitted, 1)));
	    } else {
		c.getPlayer().dropMessage(6, "패킷데이터를 입력해주세요.");
	    }
          } else if (splitted[0].equals("!OX")) {
            final MapleCharacter asker = c.getPlayer();
            final MapleMap thisMap =  asker.getMap();        
            String[] trueCmd = {"o", "O"};
            String[] falseCmd = {"x", "X"};
            boolean tempAns = false;
            if (Arrays.asList(trueCmd).contains(splitted[1].toLowerCase())) {
                tempAns = true;
            } else if (Arrays.asList(falseCmd).contains(splitted[1].toLowerCase())) {   
                tempAns = false;
            } else {
                c.getPlayer().dropMessage(6, "!OX <O/X> <시간> <질문>");
            }
            final boolean ans = tempAns;
            final int timeLimit = Math.min(Math.max(Integer.parseInt(splitted[2]), 1), 60);
            final String question = StringUtil.joinStringFrom(splitted, 3);

            thisMap.broadcastMessage(MainPacketCreator.showEffect("SportsDay/EndMessage/Start"));
            thisMap.broadcastMessage(MainPacketCreator.playSound("Dojang/start"));
            Timer.MapTimer.getInstance().schedule(new Runnable() {
                @Override
                public void run() {
                    thisMap.broadcastMessage(MainPacketCreator.serverNotice(0, question));
                    thisMap.broadcastMessage(MainPacketCreator.getClock(timeLimit));
                    Timer.MapTimer.getInstance().schedule(new Runnable() {
                        @Override
                        public void run() {
                            List<MapleCharacter> winners = new ArrayList<MapleCharacter>();
                            for (final MapleCharacter victim : thisMap.getCharacters()) {
                                if (victim == asker) {
                                    continue;
                                }
                                if ((victim.getPosition().x > -308 && victim.getPosition().x < -142) || victim.getPosition().y <= -206) {
                                    // NO ANSWER
                                    victim.getClient().getSession().write(MainPacketCreator.showEffect("SportsDay/EndMessage/TimeOver"));
                                    victim.getClient().getSession().write(MainPacketCreator.playSound("phantom/skaia"));
                                } else if (victim.getPosition().x > -308 ^ ans) {
                                    // CORRECT ANSWER
                                    winners.add(victim);
                                    victim.getClient().getSession().write(MainPacketCreator.showEffect("SportsDay/EndMessage/Win"));
                                    victim.getClient().getSession().write(MainPacketCreator.playSound("Party1/Clear"));  
                                } else {
                                    // WRONG ANSWER
                                    victim.getClient().getSession().write(MainPacketCreator.showEffect("SportsDay/EndMessage/Lose"));
                                    victim.getClient().getSession().write(MainPacketCreator.playSound("Party1/Failed"));
                                }
                            }
                            if (winners.size() > 0) {
                                for (final MapleCharacter victim : thisMap.getCharacters()) {
                                    if (victim != asker && !winners.contains(victim)) {
                                        // WARP OUT IN 5 SEC
                                        Timer.MapTimer.getInstance().schedule(new Runnable() {
                                        @Override
                                            public void run() {
                                                victim.warp(100000000);
                                                victim.Message("안타깝네요! 오답입니다! OX 퀴즈에서 퇴출되셨습니다. 다음 이벤트에 도전해 주세요!");
                                            }
                                         }, 5000);
                                    }
                                }
                            } else {
                                thisMap.broadcastMessage(MainPacketCreator.serverNotice(2, "정답자가 없어 전원 다음라운드로 진출합니다."));
                            }
                        }
                    }, timeLimit * 1000);
                }
             }, 2000);
        }
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
	    new CommandDefinition("시계", "<시간>", "현재 맵에 시간을 띄웁니다.", 2),
            new CommandDefinition("OX", "!OX <O/X> <시간> <질문>", "OX퀴즈질문을 시작합니다.", 6),
	    new CommandDefinition("패킷", "<헥스데이터>", "입력한 16진수 데이터의 패킷을 현재 클라이언트에 보냅니다.", 6),
	};
      }
}
