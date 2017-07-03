/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import static client.commands.CommandProcessor.getNamedDoubleArg;
import static client.commands.CommandProcessor.getNamedIntArg;
import static client.commands.CommandProcessor.getOptionalIntArg;
import client.MapleClient;
import server.life.MapleLifeProvider;
import server.life.MapleMonster;
import server.life.OverrideMonsterStats;

public class SpawnMonsterCommand implements Command {

	@Override
	public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
		final int mid = Integer.parseInt(splitted[1]);
		final int num = Math.min(getOptionalIntArg(splitted, 2, 1), 300);

		Integer hp = getNamedIntArg(splitted, 1, "hp");
		Integer exp = getNamedIntArg(splitted, 1, "exp");
		Double php = getNamedDoubleArg(splitted, 1, "php");
		Double pexp = getNamedDoubleArg(splitted, 1, "pexp");

		final MapleMonster onemob = MapleLifeProvider.getMonster(mid);

		long newhp = 0;
		int newexp = 0;

		final double oldExpRatio = ((double) onemob.getHp() / onemob.getMobExp());

		if (hp != null) {
			newhp = hp.intValue();
		} else if (php != null) {
			newhp = (int) (onemob.getMobMaxHp() * (php.doubleValue() / 100));
		} else {
			newhp = onemob.getMobMaxHp();
		}
		if (exp != null) {
			newexp = exp.intValue();
		} else if (pexp != null) {
			newexp = (int) (onemob.getMobExp() * (pexp.doubleValue() / 100));
		} else {
			newexp = onemob.getMobExp();
		}

		if (newhp < 1) {
			newhp = 1;
		}
		final double newExpRatio = ((double) newhp / newexp);

		c.getPlayer().dropMessage(6, "경험치와 체력 비율 : (조정후-" + newExpRatio + " : 조정전-" + oldExpRatio + ")");

		if (c.getPlayer().getGMLevel() <= 5) {
			if (mid == 8810018 || mid == 8810118 || mid == 5100001 || mid == 5130106 || mid == 8190001 || mid == 9001009
					|| mid == 9300256 || mid == 9300257 || mid == 9300280 || mid == 9300281 || mid == 9300282
					|| mid == 9300283 || mid == 9300284) {
				c.getPlayer().dropMessage(6, "This monster is blocked.");
				return;
			}
		}
		final OverrideMonsterStats overrideStats = new OverrideMonsterStats();
		overrideStats.setOHp(newhp);
		overrideStats.setOExp(newexp);
		overrideStats.setOMp(onemob.getMobMaxMp());

		for (int i = 0; i < num; i++) {
			MapleMonster mob = MapleLifeProvider.getMonster(mid);
			mob.setHp(newhp);
			mob.setOverrideStats(overrideStats);
			c.getPlayer().getMap().spawnMonsterOnGroundBelow(mob, c.getPlayer().getPosition());
			c.getPlayer().dropMessage(6, "" + mob.getObjectId());
		}
	}

	@Override
	public CommandDefinition[] getDefinition() {
		return new CommandDefinition[] { new CommandDefinition("spawn",
				"<몬스터ID> (<hp HP설정>) (<exp 경험치설정>) (<php 퍼센트HP설정>) (<pexp 퍼센트경험치설정>)", "해당 고유번호ID의 몬스터를 소환합니다.", 2) };
	}
}
