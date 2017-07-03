/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package packet.skills;

import client.MapleCharacter;
import client.items.ISkill;
import client.skills.SteelSkillEntry;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 *
 */
public class PhantomPacket {
    public static Packet getSteelSkillCheck(int oid, boolean success, SteelSkillEntry sse, boolean delete) {
        WritingPacket packet = new WritingPacket();
        
        packet.writeShort(SendPacketOpcode.STEEL_SKILL.getValue());
        packet.write(1);
        
        /* 0 : ���
         * 1 : ����
         * 2 : ?
         * 3 : ���� */
        
        if (!success) {
            packet.write(1);
        } else {
            packet.write(delete ? 3 : 0);
            if (delete) {
                packet.writeInt(SteelSkillEntry.getJobIndex(sse.getSkillId()));
                packet.writeInt(sse.getSlot() - 1);
            } else {
                packet.writeInt(SteelSkillEntry.getJobIndex(sse.getSkillId()));
                packet.writeInt(sse.getSlot() - 1);
                packet.writeInt(sse.getSkillId());
                packet.writeInt(sse.getSkillLevel());
                packet.writeInt(0); //�����ͷ���?
            }
        }
      
        return packet.getPacket();
    }
    
    public static Packet getSteelAvailableSkills(MapleCharacter hp, boolean found) {
        WritingPacket packet = new WritingPacket();
        
        packet.writeShort(SendPacketOpcode.STEEL_SKILL_CHECK.getValue());
        packet.write(1);
        packet.writeInt(hp.getObjectId());
        if (found) {
            packet.writeInt(4);
            packet.writeInt(hp.getJob());
            List<Integer> skills = new ArrayList<Integer>();
            for (ISkill skill : hp.getSkills().keySet()) {
                if (skill.getEffect(1).getSkillStats().getStats("mpCon") != 0) {
                    skills.add(skill.getId());
                }
            }
            packet.writeInt(skills.size());
            for (Integer i : skills) {
                packet.writeInt(i.intValue());
            }
        } else {
            packet.writeInt(1);
        }
        
        return packet.getPacket();
    }
    
    public static Packet getUpdateEquippedSkill(int baseSkillId, int skillId, int index, boolean equipped) {
        WritingPacket packet = new WritingPacket();
        
        packet.writeShort(SendPacketOpcode.EQUIPPED_SKILL.getValue());
        packet.write(1);
        packet.write(equipped ? 1 : 0);
        packet.writeInt(baseSkillId);
        if (equipped) { //����
            packet.writeInt(skillId);
        }
        
        return packet.getPacket();
    }
}
