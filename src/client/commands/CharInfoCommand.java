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

public class CharInfoCommand implements Command {

    @Override
    public void execute(MapleClient c, String[] splittedLine) throws Exception, IllegalCommandSyntaxException {
	final StringBuilder builder = new StringBuilder();
	MapleCharacter other = c.getChannelServer().getPlayerStorage().getCharacterByName(splittedLine[1]);

	builder.append(MapleClient.getLogMessage(other, ""));
	builder.append(" �� ").append(other.getPosition().x);
	builder.append(" /").append(other.getPosition().y);
	builder.append(" ��ġ�� ����. || HP : ");
	builder.append(other.getStat().getHp());
	builder.append(" /");
	builder.append(other.getStat().getCurrentMaxHp());
	builder.append(" || MP : ");
	builder.append(other.getStat().getMp());
	builder.append(" /");
	builder.append(other.getStat().getCurrentMaxMp());
	builder.append(" || EXP : ");
	builder.append(" || ��Ƽ�� : ");
	builder.append(other.getParty() != null);
	builder.append(" || Ʈ���̵���: ");
	builder.append(other.getTrade() != null);
        builder.append("] || ĳ��: [");
        builder.append(other.getClient().getPlayer().getNX());
        builder.append("] || �޼�: [");
        builder.append(other.getClient().getPlayer().getMeso());
	builder.append("] || IP �ּ�: ");
        builder.append(" || �� : ").append(other.getClient().getPlayer().getStat().getLocalStr()).append(" (").append(other.getClient().getPlayer().getStat().getStr()).append(" + ").append(other.getClient().getPlayer().getStat().getLocalStr() - other.getClient().getPlayer().getStat().getStr()).append(")");
        builder.append(" || ���� : ").append(other.getClient().getPlayer().getStat().getLocalDex()).append(" (").append(other.getClient().getPlayer().getStat().getDex()).append(" + ").append(other.getClient().getPlayer().getStat().getLocalDex() - other.getClient().getPlayer().getStat().getDex()).append(")");
        builder.append(" || ��Ʈ : ").append(other.getClient().getPlayer().getStat().getLocalInt()).append(" (").append(other.getClient().getPlayer().getStat().getInt()).append(" + ").append(other.getClient().getPlayer().getStat().getLocalInt() - other.getClient().getPlayer().getStat().getInt()).append(")");
        builder.append(" || �� : ").append(other.getClient().getPlayer().getStat().getLocalLuk()).append(" (").append(other.getClient().getPlayer().getStat().getLuk()).append(" + ").append(other.getClient().getPlayer().getStat().getLocalLuk() - other.getClient().getPlayer().getStat().getLuk()).append(")");
        builder.append(" || ���ݷ� : ").append(other.getClient().getPlayer().getStat().getWAtk());
        builder.append(" || ���� : ").append(other.getClient().getPlayer().getStat().getMAtk());
        builder.append(" || ���������͸� : ").append(other.getClient().getPlayer().getStat().getWMastery());
        builder.append(" || ���������͸� : ").append(other.getClient().getPlayer().getStat().getMMastery());
        builder.append(" || �������ݷ�����% : ").append(other.getClient().getPlayer().getStat().getPercentWatk());
        builder.append(" || �������ݷ�����% : ").append(other.getClient().getPlayer().getStat().getPercentMatk());
        builder.append(" || ������% : ").append(other.getClient().getPlayer().getStat().getPercentStr());
        builder.append(" || ��������% : ").append(other.getClient().getPlayer().getStat().getPercentDex());
        builder.append(" || ��Ʈ����% : ").append(other.getClient().getPlayer().getStat().getPercentInt());
        builder.append(" || ������% : ").append(other.getClient().getPlayer().getStat().getPercentLuk());
        
        builder.append(" || ���Ȱ��ݷ� : ").append(other.getClient().getPlayer().getStat().getMinAttack()).append(" ~ ").append(other.getClient().getPlayer().getStat().getMaxAttack());
        
	c.getPlayer().dropMessage(6, builder.toString());
        other = null;
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("ĳ������", "<ĳ�����̸�>", "�Է��� �̸��� ĳ������ ������ ����մϴ�.", 3)
	};
    }
}
