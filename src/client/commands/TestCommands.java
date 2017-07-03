/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
        if (splitted[0].equals("!��Ŷ")) {
	    if (splitted.length > 1) {
		c.getSession().write(MainPacketCreator.getPacketFromHexString(StringUtil.joinStringFrom(splitted, 1)));
	    } else {
		c.getPlayer().dropMessage(6, "��Ŷ�����͸� �Է����ּ���.");
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
                c.getPlayer().dropMessage(6, "!OX <O/X> <�ð�> <����>");
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
                                                victim.Message("��Ÿ���׿�! �����Դϴ�! OX ����� ����Ǽ̽��ϴ�. ���� �̺�Ʈ�� ������ �ּ���!");
                                            }
                                         }, 5000);
                                    }
                                }
                            } else {
                                thisMap.broadcastMessage(MainPacketCreator.serverNotice(2, "�����ڰ� ���� ���� ��������� �����մϴ�."));
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
	    new CommandDefinition("�ð�", "<�ð�>", "���� �ʿ� �ð��� ���ϴ�.", 2),
            new CommandDefinition("OX", "!OX <O/X> <�ð�> <����>", "OX���������� �����մϴ�.", 6),
	    new CommandDefinition("��Ŷ", "<��������>", "�Է��� 16���� �������� ��Ŷ�� ���� Ŭ���̾�Ʈ�� �����ϴ�.", 6),
	};
      }
}
