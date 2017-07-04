package handler.skill;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import client.MapleCharacter;
import client.skills.SkillFactory;
import client.stats.BuffStats;
import client.stats.MonsterStatus;
import client.stats.MonsterStatusEffect;
import constants.GameConstants;
import handler.channel.AttackInfo;
import packet.creators.MainPacketCreator;
import server.life.MapleMonster;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import tools.RandomStream.Randomizer;

public class CygnusHandler {

	public static long totDamageToOneMonster = 0;

	public static void CygnusAttack(final MapleCharacter player, final MapleMonster monster, final AttackInfo attack) {
		if (GameConstants.isNightWalker(player.getJob())) {
			if (attack.skill != 0) {
				if (player.getBuffedValue(BuffStats.ELEMENT_DARKNESS) != null) {
					monster.applyStatus(player,
							new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1),
									SkillFactory.getSkill(14001021), null, false),
							false, 8000, false);
				}
			}
		}
		if (GameConstants.isNightWalker(player.getJob())) {
			if (attack.skill != 14000028 && attack.skill != 14000029) {
				giveShwadowBat(player, attack);
			}
		}
//		if (GameConstants.isNightWalker(player.getJob())) {
//			if (attack.skill == 14121052) {
//				SkillFactory.getSkill(14121052).getEffect(player.getSkillLevel(14121052)).applyTo(player);
//			}
//		}
	}

    public static void giveShwadowBat(final MapleCharacter player, final AttackInfo attack) {
        if (attack.skill == 14000028 || attack.skill == 14000029) {
            int hpadd = (int) (totDamageToOneMonster * 0.10);
            if (hpadd >= (int) (player.getStat().getCurrentMaxHp() * 0.10)) {
                hpadd = (int) (player.getStat().getCurrentMaxHp() * 0.10);
            }
            if ((player.getStat().getHp() + hpadd) >= player.getStat().getCurrentMaxHp()) {
                player.addHP((player.getStat().getCurrentMaxHp() - player.getStat().getHp()));
            } else {
                player.addHP(hpadd);
            }
        }
        /** fix this please! 
        if (player.getJob() >= 1400 && player.getJob() <= 1412 && attack.skill != 14000028 && attack.skill != 14000029) {
            boolean check = false;
            boolean du = false;
            for (MapleMapObject ob : player.getMap().getAllMonster()) {
                MapleMonster mob = (MapleMonster)ob;
                if (Randomizer.isSuccess(120) && !check) {
                    if (mob != null && ((mob.getPosition().getX() + 597) >= player.getPosition().getX()) && ((mob.getPosition().getX() - 597) <= player.getPosition().getX()) && ((mob.getPosition().getY() + 480) >= player.getPosition().getY()) && ((mob.getPosition().getY() - 480) <= player.getPosition().getY())) {
                        player.getMap().broadcastMessage(MainPacketCreator.ShwadowBat(player.getId(), ob.getObjectId(), player.getPosition()));
                        if (Randomizer.isSuccess(45) && !du) {
                            check = true;
                            du = true;
                        } else {
                            check = false;
                        }
                    }
                }
            } 
        } **/
    }
}
