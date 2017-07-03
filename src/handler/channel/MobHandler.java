/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package handler.channel;

import client.MapleClient;
import client.MapleCharacter;
import packet.creators.MainPacketCreator;
import packet.creators.MobPacket;
import packet.transfer.read.ReadingMaple;
import server.life.MapleMonster;
import server.life.MobSkill;
import server.life.MobSkillFactory;
import server.maps.MapleMap;
import server.movement.LifeMovementFragment;
import tools.Pair;
import tools.RandomStream.Randomizer;
import tools.Timer.ShowTimer;
import java.awt.Point;
import java.util.List;
import packet.transfer.read.ReadingMaple;

public class MobHandler {

    public static final void MoveMonster(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
        int oid = rh.readInt();
	final MapleMonster monster = chr.getMap().getMonsterByOid(oid);

	if (monster == null) { // movin something which is not a monster
	    return;
	}
        String originalrh = rh.toString();
        rh.skip(1); 
	final short moveid = rh.readShort();
	final boolean useSkill = rh.readByte() == 1;
	final byte skill = rh.readByte();
	final int skill1 = rh.readByte() & 0xFF;
	final int skill2 = rh.readByte();
	final int skill3 = rh.readByte();
	final int skill4 = rh.readByte();
	int realskill = 0;
	int level = 0;

	if (useSkill) {
	    final byte size = monster.getNoSkills();
	    boolean used = false;

	    if (size > 0) {
		final Pair<Integer, Integer> skillToUse = monster.getSkills().get((byte) Randomizer.nextInt(size));
		realskill = skillToUse.getLeft();
		level = skillToUse.getRight();
		// Skill ID and Level
		final MobSkill mobSkill = MobSkillFactory.getMobSkill(realskill, level);

		if (!mobSkill.checkCurrentBuff(chr, monster)) {
		    final long now = System.currentTimeMillis();
		    final long ls = monster.getLastSkillUsed(realskill);

		    if (ls == 0 || ((now - ls) > mobSkill.getCoolTime())) {
			monster.setLastSkillUsed(realskill, now, mobSkill.getCoolTime());

			final int reqHp = (int) (((float) monster.getHp() / monster.getMobMaxHp()) * 100); // In case this monster have 2.1b and above HP
			if (reqHp <= mobSkill.getHP()) {
                            used = true;
                            if (mobSkill.getCoolTime() == 0) {
                                mobSkill.applyEffect(chr, monster, true);
                            } else {
                                ShowTimer.getInstance().schedule(new Runnable() {

                                    @Override
                                    public void run() {
                                        if (monster != null) {
                                            mobSkill.applyEffect(c.getPlayer(), monster, true);
                                        }
                                    }
                                }, 1000L); // TODO delay
                            }
                        }
		    }
		}
	    }
	    if (!used) {
		realskill = 0;
		level = 0;
	    }
	}
	rh.skip(32);
      
	final Point startPos = monster.getPosition();
	final List<LifeMovementFragment> res = MovementParse.parseMovement(rh);

        if (monster != null && c != null) {
            c.getSession().write(MobPacket.moveMonsterResponse(oid, moveid, monster.getMp(), monster.isControllerHasAggro(), realskill, level));
        }
	if (res != null && res.size() > 0) {
	    final MapleMap map = c.getPlayer().getMap();
            
	    MovementParse.updatePosition(res, monster, -4);
	    map.moveMonster(monster, monster.getPosition());
	    map.broadcastMessage(chr, MobPacket.moveMonster(useSkill, skill, skill1, skill2, skill3, skill4, oid, startPos, res), monster.getPosition());
	}
    }

    public static final void FriendlyDamage(final ReadingMaple rh, final MapleCharacter chr) {
	final MapleMap map = chr.getMap();
	final MapleMonster mobfrom = map.getMonsterByOid(rh.readInt());
	rh.skip(4); // Player ID
	final MapleMonster mobto = map.getMonsterByOid(rh.readInt());

	if (mobfrom != null && mobto != null && mobto.getStats().isFriendly()) {
	    final int damage = (mobto.getStats().getLevel() * Randomizer.nextInt(99)) / 2; // Temp for now until I figure out something more effective
	    mobto.damage(chr, damage, true);
	}
    }

    public static final void MonsterBomb(final int oid, final MapleCharacter chr) {
	final MapleMonster monster = chr.getMap().getMonsterByOid(oid);

	if (monster == null || !chr.isAlive() || chr.isHidden()) {
	    return;
	}
	final byte selfd = monster.getStats().getSelfD();
	if (selfd != -1) {
	    chr.getMap().killMonster(monster, chr, false, false, selfd);
	}
    }

    public static final void AutoAggro(final int monsteroid, final MapleCharacter chr) {
	final MapleMonster monster = chr.getMap().getMonsterByOid(monsteroid);

	if (monster != null && chr.getPosition().distance(monster.getPosition()) < 200000) {
	    if (monster.getController() != null) {
		if (chr.getMap().getCharacterById_InMap(monster.getController().getId()) == null) {
		    monster.switchController(chr, true);
		} else {
		    monster.switchController(monster.getController(), true);
		}
	    } else {
		monster.switchController(chr, true);
	    }
	}
    }

    public static final void HypnotizeDmg(final ReadingMaple slea, final MapleCharacter chr) {
	final MapleMonster mob_from = chr.getMap().getMonsterByOid(slea.readInt()); // From
	slea.skip(4); // Player ID
	final int to = slea.readInt(); // mobto
	slea.skip(1); // Same as player damage, -1 = bump, integer = skill ID
	final int damage = slea.readInt();

	final MapleMonster mob_to = chr.getMap().getMonsterByOid(to);

	if (mob_from != null && mob_to != null) {
	    if (damage > 30000) {
		return;
	    }
	    mob_to.damage(chr, damage, true);
	    // TODO : Get the real broadcast damage packet
	    chr.getMap().broadcastMessage(chr, MobPacket.damageMonster(to, damage), false);
	}
    }
}
