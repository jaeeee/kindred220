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

public class CharInfoCommand implements Command {

    @Override
    public void execute(MapleClient c, String[] splittedLine) throws Exception, IllegalCommandSyntaxException {
	final StringBuilder builder = new StringBuilder();
	MapleCharacter other = c.getChannelServer().getPlayerStorage().getCharacterByName(splittedLine[1]);

	builder.append(MapleClient.getLogMessage(other, ""));
	builder.append(" 는 ").append(other.getPosition().x);
	builder.append(" /").append(other.getPosition().y);
	builder.append(" 위치에 있음. || HP : ");
	builder.append(other.getStat().getHp());
	builder.append(" /");
	builder.append(other.getStat().getCurrentMaxHp());
	builder.append(" || MP : ");
	builder.append(other.getStat().getMp());
	builder.append(" /");
	builder.append(other.getStat().getCurrentMaxMp());
	builder.append(" || EXP : ");
	builder.append(" || 파티중 : ");
	builder.append(other.getParty() != null);
	builder.append(" || 트레이드중: ");
	builder.append(other.getTrade() != null);
        builder.append("] || 캐시: [");
        builder.append(other.getClient().getPlayer().getNX());
        builder.append("] || 메소: [");
        builder.append(other.getClient().getPlayer().getMeso());
	builder.append("] || IP 주소: ");
        builder.append(" || 힘 : ").append(other.getClient().getPlayer().getStat().getLocalStr()).append(" (").append(other.getClient().getPlayer().getStat().getStr()).append(" + ").append(other.getClient().getPlayer().getStat().getLocalStr() - other.getClient().getPlayer().getStat().getStr()).append(")");
        builder.append(" || 덱스 : ").append(other.getClient().getPlayer().getStat().getLocalDex()).append(" (").append(other.getClient().getPlayer().getStat().getDex()).append(" + ").append(other.getClient().getPlayer().getStat().getLocalDex() - other.getClient().getPlayer().getStat().getDex()).append(")");
        builder.append(" || 인트 : ").append(other.getClient().getPlayer().getStat().getLocalInt()).append(" (").append(other.getClient().getPlayer().getStat().getInt()).append(" + ").append(other.getClient().getPlayer().getStat().getLocalInt() - other.getClient().getPlayer().getStat().getInt()).append(")");
        builder.append(" || 럭 : ").append(other.getClient().getPlayer().getStat().getLocalLuk()).append(" (").append(other.getClient().getPlayer().getStat().getLuk()).append(" + ").append(other.getClient().getPlayer().getStat().getLocalLuk() - other.getClient().getPlayer().getStat().getLuk()).append(")");
        builder.append(" || 공격력 : ").append(other.getClient().getPlayer().getStat().getWAtk());
        builder.append(" || 마력 : ").append(other.getClient().getPlayer().getStat().getMAtk());
        builder.append(" || 물리마스터리 : ").append(other.getClient().getPlayer().getStat().getWMastery());
        builder.append(" || 마법마스터리 : ").append(other.getClient().getPlayer().getStat().getMMastery());
        builder.append(" || 물리공격력증가% : ").append(other.getClient().getPlayer().getStat().getPercentWatk());
        builder.append(" || 마법공격력증가% : ").append(other.getClient().getPlayer().getStat().getPercentMatk());
        builder.append(" || 힘증가% : ").append(other.getClient().getPlayer().getStat().getPercentStr());
        builder.append(" || 덱스증가% : ").append(other.getClient().getPlayer().getStat().getPercentDex());
        builder.append(" || 인트증가% : ").append(other.getClient().getPlayer().getStat().getPercentInt());
        builder.append(" || 럭증가% : ").append(other.getClient().getPlayer().getStat().getPercentLuk());
        
        builder.append(" || 스탯공격력 : ").append(other.getClient().getPlayer().getStat().getMinAttack()).append(" ~ ").append(other.getClient().getPlayer().getStat().getMaxAttack());
        
	c.getPlayer().dropMessage(6, builder.toString());
        other = null;
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("캐릭정보", "<캐릭터이름>", "입력한 이름의 캐릭터의 정보를 출력합니다.", 3)
	};
    }
}
