/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package packet.creators;

import client.stats.MonsterStatus;
import client.stats.MonsterStatusEffect;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import server.life.MapleMonster;
import server.movement.LifeMovementFragment;
import tools.HexTool;
import tools.RandomStream.Randomizer;
import java.awt.Point;
import java.util.Collection;
import java.util.List;
import java.util.Map;

public class MobPacket {

    public static Packet damageMonster(final int oid, final long damage) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.DAMAGE_MONSTER.getValue());
        packet.writeInt(oid);
        packet.write(0);
        packet.writeInt(damage);

        return packet.getPacket();
    }

    public static Packet damageFriendlyMob(final MapleMonster mob, final long damage) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.DAMAGE_MONSTER.getValue());
        packet.writeInt(mob.getObjectId());
        packet.write(1);
        packet.writeInt(damage);
        packet.writeInt(mob.getHp());
        packet.writeInt(mob.getMobMaxHp());

        return packet.getPacket();
    }

    public static Packet killMonster(final int oid, final int animation, boolean isAswan) {
        WritingPacket packet = new WritingPacket();

        if (isAswan) {
            packet.writeShort(SendPacketOpcode.ASWAN_KILL_MONSTER.getValue());
        } else {
            packet.writeShort(SendPacketOpcode.KILL_MONSTER.getValue());
        }
        packet.writeInt(oid);
        packet.write(animation); // 0 = dissapear, 1 = fade out, 2+ = special

        return packet.getPacket();
    }

    public static Packet healMonster(final int oid, final int heal) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.DAMAGE_MONSTER.getValue());
        packet.writeInt(oid);
        packet.write(0);
        packet.writeInt(-heal);

        return packet.getPacket();
    }

    public static Packet showMonsterHP(int oid, int remhppercentage) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.SHOW_MONSTER_HP.getValue());
        packet.writeInt(oid);
        packet.write(remhppercentage);

        return packet.getPacket();
    }

    public static Packet showBossHP(final MapleMonster mob) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.BOSS_ENV.getValue());
        packet.write(6);
        packet.writeInt(mob.getId());
        packet.writeInt(mob.getHp());
        packet.writeInt(mob.getMobMaxHp());
        packet.write(mob.getStats().getTagColor());
        packet.write(mob.getStats().getTagBgColor());

        return packet.getPacket();
    }
    
        public static Packet showFinalBossHP(final MapleMonster mob) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.BOSS_ENV.getValue());
        packet.write(6);
        packet.writeInt(mob.getId());
        packet.writeInt(mob.getFinalMaxHP());
        packet.writeInt(mob.getMobFinalMaxHP());
        packet.write(mob.getStats().getTagColor());
        packet.write(mob.getStats().getTagBgColor());
        return packet.getPacket();
    }
    
    public static Packet moveMonster(boolean useskill, int skill, int skill1, int skill2, int skill3, int skill4, int oid, Point startPos, List<LifeMovementFragment> moves) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.MOVE_MONSTER.getValue());
        packet.writeInt(oid);
        packet.write(useskill ? 1 : 0);
        packet.write(skill);
        packet.write(skill1);
        packet.write(skill2);
        packet.write(skill3);
        packet.write(skill4);
        packet.writeShort(0);
        packet.writeInt(0); //1.2.192+
        packet.writePos(startPos);
        packet.writeInt(Randomizer.nextInt());
        serializeMovementList(packet, moves);
        packet.write(0); //1.2.220+
        
        return packet.getPacket();
    }

    private static void serializeMovementList(WritingPacket packet, List<LifeMovementFragment> moves) {
        packet.write(moves.size());
        for (LifeMovementFragment move : moves) {
            move.serialize(packet);
        }
    }

    public static void addMobSkillInfo(WritingPacket packet, MapleMonster life) {
          if (life.isStatChanged()) {
            packet.write(1);
            packet.writeInt(life.getHp());
            packet.writeInt(life.getMp());
            packet.writeInt(life.getStats().getPad());
            packet.writeInt(life.getStats().getPhysicalDefense());
            packet.writeInt(life.getStats().getMad());
            packet.writeInt(life.getStats().getMagicDefense());
            packet.writeInt(life.getStats().getSpeed());
            packet.writeInt(life.getStats().getAcc());
            packet.writeInt(life.getStats().getEva());
            packet.writeInt(2100000000);
            packet.writeInt(life.getStats().getPushed());
            packet.writeInt(life.getStats().getLevel());
          } else {
            packet.write(0);
          }
          packet.writeInt(0);
          packet.writeShort(2815);
          packet.write(0);
          packet.write(96);
          packet.write0(3);
          packet.write(240);
          for (int i = 0; i < 4; i++) {
            packet.writeLong(0);
            packet.write(HexTool.getByteArrayFromHexString("87 61"));
          }
      packet.write0(119);
    }

     public static Packet spawnMonster(MapleMonster life, int spawnType, int effect, int link, boolean isAswan) {
        WritingPacket packet = new WritingPacket();
        if (isAswan) {
            packet.writeShort(SendPacketOpcode.ASWAN_SPAWN_MONSTER.getValue());
        } else {
            packet.writeShort(SendPacketOpcode.SPAWN_MONSTER.getValue());
        }
        packet.write(0);
        packet.writeInt(life.getObjectId());
        packet.write(1);
        packet.writeInt(life.getId());
        addMobSkillInfo(packet, life);
        packet.writeShort(life.getPosition().x);
        packet.writeShort(life.getPosition().y);
        packet.write(life.getStance());
        if ((life.getId() == 8910000) || (life.getId() == 8910100)) {
            packet.write(0);
        }
        packet.writeShort(life.getFh());
        packet.writeShort(life.getFh());
        if ((effect != 0) || (link != 0)) {
            packet.write(effect != 0 ? effect : -3);
            packet.writeInt(link);
            packet.write(0xFF);
            packet.write(44);
        } else {
            if (spawnType == 0) {
                packet.write(effect);
                packet.write(0);
                packet.writeShort(0);
            }
            packet.writeShort(spawnType);
        }

        packet.write(-1);

        packet.write0(20);
        packet.writeLong(-1);
        packet.write0(5);
        packet.writeInt(-1);

        return packet.getPacket();
    }    

    public static Packet controlMonster(MapleMonster life, boolean newSpawn, boolean aggro, boolean isAswan, int EliteType1, int EliteType2) {
        WritingPacket packet = new WritingPacket();
        if (isAswan) {
            packet.writeShort(SendPacketOpcode.ASWAN_SPAWN_MONSTER_CONTROL.getValue());
        } else {
            packet.writeShort(SendPacketOpcode.SPAWN_MONSTER_CONTROL.getValue());
        }
        packet.write(aggro ? 2 : 1);
        if (isAswan) {
            packet.write(1);
        }
        packet.writeInt(life.getObjectId());
        packet.write(1);
        packet.writeInt(life.getId());
        addMobSkillInfo(packet, life);
        packet.writeShort(life.getPosition().x);
        packet.writeShort(life.getPosition().y);
        packet.write(life.getStance());
        packet.writeShort(life.getFh());
        packet.writeShort(life.getFh());
        packet.write(newSpawn ? -2 : life.isFake() ? 252 : -1);
        packet.write(0xFF);
        if (isAswan) {
            packet.writeShort(1875);
            packet.write(0);
        } else {
            packet.writeInt(15);
        }
        packet.writeLong(0);
        packet.writeLong(0);
        packet.write(0);
        packet.writeInt(-1);
        packet.write0(9);
        packet.writeInt(EliteType1);
        if (EliteType1 != -1) {
            packet.writeInt(1);
            packet.writeInt(EliteType2);
            packet.writeInt(1);
        }
        return packet.getPacket();
    }
    
    public static Packet spawnEliteMonster(MapleMonster life, int spawnType, boolean controll, boolean aggro, boolean eliteboss) {
        WritingPacket packet = new WritingPacket();
        if (!controll) {
            packet.writeShort(SendPacketOpcode.SPAWN_MONSTER.getValue());
        } else {
            packet.writeShort(SendPacketOpcode.SPAWN_MONSTER_CONTROL.getValue());
        }
        packet.write(aggro ? 2 : !controll ? 0 : 1);
        packet.writeInt(life.getObjectId());
        packet.write(1);
        packet.writeInt(life.getId());
        addMobSkillInfo(packet, life);
        packet.writeShort(life.getPosition().x);
        packet.writeShort(life.getPosition().y);
        packet.write(life.getStance());
        packet.writeShort(life.getFh());
        packet.writeShort(life.getFh());
        packet.writeShort(spawnType);
        if (!controll) {
            packet.writeInt(life.getHp());
            packet.write(0);
        } else {
            packet.writeInt(15);
        }
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeInt(-1);
        packet.writeInt(-1);
        if (eliteboss) {
            packet.writeInt(0);
            packet.write(0);
            packet.writeInt(2);
            packet.writeInt(3);
            packet.writeInt(life.getEliteType());
            packet.writeInt(0xD3);
            packet.writeInt(0x85);
            packet.writeInt(0x02);
        } else {
            packet.writeInt(0x3D);
            packet.write(0);
            packet.writeInt(0);
            packet.writeInt(1);
            packet.writeInt(life.getEliteType());
            packet.writeInt(1);
        }
        //System.out.println("[ø§∏Æ∆Æ] " + packet.toString());
        return packet.getPacket();
    }

    public static Packet spawnFakeMonster(MapleMonster life, int link) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.SPAWN_MONSTER.getValue());
        packet.write(0);
        packet.writeInt(life.getObjectId());
        packet.write(1);
        packet.writeInt(life.getId());
        addMobSkillInfo(packet, life);

        packet.writeShort(life.getPosition().x);
        packet.writeShort(life.getPosition().y);
        packet.write(life.getStance());
        packet.writeShort(life.getFh());
        packet.writeShort(life.getFh());
        packet.write(252);
        if (life.getId() == 8800000) {
          packet.write(255);
        } else {
          packet.write(0xFF);
        }
        packet.writeInt(748000000);
        packet.writeInt(0);
        packet.writeInt(0);
        packet.writeInt(0);
        packet.writeInt(0);
        packet.write(0);
        packet.writeInt(-1);
        packet.writeInt(-1);
        packet.writeInt(32);
        packet.write(0);
        packet.writeInt(-1);
        
        return packet.getPacket();
    }

    public static Packet stopControllingMonster(int oid, boolean isAswan) {
        WritingPacket packet = new WritingPacket();

        if (isAswan) {
            packet.writeShort(SendPacketOpcode.ASWAN_SPAWN_MONSTER_CONTROL.getValue());
            packet.write(0);
        } else {
            packet.writeShort(SendPacketOpcode.SPAWN_MONSTER_CONTROL.getValue());
        }
        packet.write(0);
        packet.writeInt(oid);

        return packet.getPacket();
    }

    public static Packet makeMonsterInvisible(MapleMonster life, boolean isAswan) {
        WritingPacket packet = new WritingPacket();

        if (isAswan) {
            packet.writeShort(SendPacketOpcode.ASWAN_SPAWN_MONSTER_CONTROL.getValue());
        } else {
            packet.writeShort(SendPacketOpcode.SPAWN_MONSTER_CONTROL.getValue());
        }
        packet.write(0);
        packet.writeInt(life.getObjectId());

        return packet.getPacket();
    }

    public static Packet makeMonsterReal(MapleMonster life, boolean isAswan) {
        WritingPacket packet = new WritingPacket();
        if (isAswan)
          packet.writeShort(SendPacketOpcode.ASWAN_SPAWN_MONSTER.getValue());
        else {
          packet.writeShort(SendPacketOpcode.SPAWN_MONSTER.getValue());
        }
        packet.writeInt(life.getObjectId());
        packet.write(1);
        packet.writeInt(life.getId());
        addMobSkillInfo(packet, life);
        packet.writeShort(life.getPosition().x);
        packet.writeShort(life.getPosition().y);
        packet.write(life.getStance());
        packet.writeShort(life.getFh());
        packet.writeShort(life.getFh());
        packet.write(-1);
        packet.write(-1);
        packet.writeInt(15);
        packet.writeInt(0);
        packet.writeInt(0);
        packet.writeInt(0);
        packet.writeInt(0);
        packet.writeInt(1);
        packet.writeInt(1);
        packet.write(0);

        return packet.getPacket();
    }
    
    public static Packet moveMonsterResponse(int objectid, short moveid, int currentMp, boolean useSkills, int skillId, int skillLevel) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.MOVE_MONSTER_RESPONSE.getValue());
        packet.writeInt(objectid);
        packet.writeShort(moveid);
        packet.write(useSkills ? 1 : 0);
        packet.writeShort(currentMp);
        packet.writeShort(0);
        packet.write(skillId);
        packet.write(skillLevel);
        packet.writeInt(0);
        
        return packet.getPacket();
    }

    private static void writeMonsterLongMask(WritingPacket packet, Map<MonsterStatus, Integer> stats) {
        long mask = 0;
        for (MonsterStatus stat : stats.keySet()) {
            if (stat.getIndex() == 1) {
                mask |= stat.getValue();
            }
        }
        packet.writeLong(mask);
        packet.writeInt(0);
    }

    public static Packet applyMonsterStatus(final int oid, final MonsterStatusEffect mse) {
        if (mse.getStati().containsKey(MonsterStatus.POISON)) {
            return applyPoison(oid, mse.getOwnerId(), mse.getSkill().getId(), mse.getPoisonDamage(), 20);
        }
        int triangle = 0;
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.APPLY_MONSTER_STATUS.getValue());
        packet.writeInt(oid);
        writeMonsterLongMask(packet, mse.getStati());
        for (Map.Entry<MonsterStatus, Integer> stat : mse.getStati().entrySet()) {
            if (stat.getKey().equals(MonsterStatus.TRIANGLE_FOMATION)) {
                triangle = stat.getValue();
            }
            packet.writeInt(stat.getValue());
            if (mse.isMonsterSkill()) {
                packet.writeShort(mse.getMobSkill().getSkillId());
                packet.writeShort(mse.getMobSkill().getSkillLevel());
            } else {
                packet.writeInt(mse.getSkill().getId());
            }
            if (mse.getStati().containsKey(MonsterStatus.NEUTRALISE)) {
                packet.writeInt(10);
                packet.write(1);
                return packet.getPacket();
            }
            packet.writeInt(0);
            packet.writeShort(5); //v177
        }
        if (!mse.isMonsterSkill()) {
            if (mse.getSkill().getId() == 36110005) {
                packet.writeInt(36110005);
            } else if (mse.getSkill().getId() == 25111206) {
                packet.writeInt(25111206);
                packet.write(-1);
            }
        }
        packet.writeShort(mse.getStati().isEmpty() ? 1 : 0);
        packet.write(mse.getStati().size()); // size
        packet.write(2);
        packet.write(1 + triangle);
        return packet.getPacket();
    }

    public static Packet applyMonsterStatus(final int oid, final MonsterStatusEffect mse, final List<Integer> reflection) {

        WritingPacket packet = new WritingPacket();
        if (mse.getStati().containsKey(MonsterStatus.POISON)) {
            return applyPoison(oid, mse.getOwnerId(), mse.getSkill().getId(), mse.getPoisonDamage(), 20);
        }
        packet.writeShort(SendPacketOpcode.APPLY_MONSTER_STATUS.getValue());
        packet.writeInt(oid);
        writeMonsterLongMask(packet, mse.getStati());
        for (Map.Entry<MonsterStatus, Integer> stat : mse.getStati().entrySet()) {
            packet.writeInt(stat.getValue());
            if (mse.isMonsterSkill()) {
                packet.writeShort(mse.getMobSkill().getSkillId());
                packet.writeShort(mse.getMobSkill().getSkillLevel());
            } else {
                packet.writeInt(mse.getSkill().getId());
            }
            packet.writeShort(0); // might actually be the buffTime but it's not displayed anywhere
        }
        for (Integer ref : reflection) {
            packet.writeInt(ref);
        }
        packet.writeLong(0);
        packet.writeShort(0);
        int size = mse.getStati().size(); // size
        if (reflection.size() > 0) {
            size /= 2; // This gives 2 buffs per reflection but it's really one buff
        }
        packet.write(size); // size
        packet.write(1);
        return packet.getPacket();
    }

    public static Packet applyPoison(int oid, int cid, int skillid, int damage, int skilllevel) {
      WritingPacket packet = new WritingPacket();

      packet.writeShort(SendPacketOpcode.APPLY_MONSTER_STATUS.getValue());
      packet.writeInt(oid);
      packet.writeLong(MonsterStatus.POISON.getValue());
      packet.writeInt(0);
      packet.write(1);
      packet.writeInt(cid);
      packet.writeInt(skillid);
      packet.writeInt(damage);
      packet.writeInt(1000);
      packet.writeInt(Randomizer.nextInt());
      packet.writeInt(Randomizer.nextInt());
      packet.writeInt(skilllevel);
      packet.writeInt(0);
      packet.writeShort(0);
      packet.write(2);

      return packet.getPacket();
    }

    public static Packet cancelMonsterStatus(int oid, Map<MonsterStatus, Integer> stats) {
        WritingPacket packet = new WritingPacket();
        if (stats.containsKey(MonsterStatus.POISON)) {
            return cancelPoison(oid, null);
        }
        packet.writeShort(SendPacketOpcode.CANCEL_MONSTER_STATUS.getValue());
        packet.writeInt(oid);
        writeMonsterLongMask(packet, stats);
        packet.write(3); 
        packet.write(2);

        return packet.getPacket();
    }

    public static Packet cancelMonsterStatus(int oid, MonsterStatus statup) {
        if (statup == MonsterStatus.POISON) {
            return cancelPoison(oid, null);
        }
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_MONSTER_STATUS.getValue());
        packet.writeInt(oid);
        long firstmask = 0;
        long secondmask = 0;
        long thirdmask = 0;
        long forthmask = 0;
        if (statup.getIndex() == 1) {
            firstmask |= statup.getValue();
        } else if (statup.getIndex() == 2) {
            secondmask |= statup.getValue();
        } else if (statup.getIndex() == 3) {
            thirdmask |= statup.getValue();
        } else if (statup.getIndex() == 4) {
            forthmask |= statup.getValue();
        }
        packet.writeInt(0); 
        packet.writeLong(0);
        packet.writeLong(firstmask);
        packet.writeLong(secondmask);
        packet.writeLong(thirdmask);
        packet.writeLong(forthmask);
        packet.write(3); 
        packet.write(2);
        
        return packet.getPacket();
    }

    public static Packet cancelPoison(int oid, MonsterStatusEffect m) {
      WritingPacket packet = new WritingPacket();
      packet.writeShort(SendPacketOpcode.CANCEL_MONSTER_STATUS.getValue());
      packet.writeInt(oid);
      packet.writeLong(MonsterStatus.POISON.getValue());
      packet.writeInt(0);
      packet.writeInt(0);
      packet.writeInt(1);
      packet.write(HexTool.getByteArrayFromHexString("97 21 B1 01 B0 61 03 02"));
      packet.write(5);

      return packet.getPacket();
    }

    public static Packet swallowMonster(final int oid, final int cid) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.KILL_MONSTER.getValue());
        packet.writeInt(oid);
        packet.write(4);
        packet.writeInt(cid);
        
        return packet.getPacket();
    }
}
