/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package handler.channel;

import constants.GameConstants;
import client.MapleClient;
import client.MapleCharacter;
import client.items.ISkill;
import client.skills.SkillFactory;
import client.skills.SteelSkillEntry;
import packet.skills.PhantomPacket;
import packet.transfer.read.ReadingMaple;
import server.maps.MapleMapObject;

/**
 *
 * @author T-Sun
 *
 * This file was written by T-Sun (doomgate17@naver.com) Axiz
 * (virgo_s_t@naver.com)
 *
 *
 */
public class PhantomHandler {

    public static void equippedSkill(ReadingMaple rh, MapleClient ha) {
        int baseSkillId = rh.readInt();
        int skillId = rh.readInt();
        if (skillId > 0) {
            SteelSkillEntry sse = ha.getPlayer().getSteelSkills().getSkillEntryById(skillId);
            ha.getPlayer().getSteelSkills().setEquipped(SteelSkillEntry.getJobIndex(skillId), sse.getSlot() - 1, true);
        } else {
            int index = SteelSkillEntry.getJobIndexB(baseSkillId);
            SteelSkillEntry sse = ha.getPlayer().getSteelSkills().getSkillEntryById(ha.getPlayer().getEquippedSkillId(index));
            ha.getPlayer().getSteelSkills().setEquipped(index, sse.getSlot() - 1, false);
        }
        ha.send(PhantomPacket.getUpdateEquippedSkill(baseSkillId, skillId, SteelSkillEntry.getJobIndex(skillId), skillId > 0 ? true : false));
    }

    public static void steelSkillCheck(ReadingMaple rh, MapleClient ha) {
        int target = rh.readInt();
        MapleMapObject chrobj = ha.getPlayer().getMap().getMapObject(target);
        if (chrobj == null) {
            ha.send(PhantomPacket.getSteelAvailableSkills(null, false));
            ha.getPlayer().ea();
        }
        MapleCharacter targetchr = null;
        targetchr = (MapleCharacter) chrobj;
        if (targetchr != null && GameConstants.isAdventurer(targetchr.getJob())) {
            ha.send(PhantomPacket.getSteelAvailableSkills(targetchr, true));
        }

    }

    public static void steelSkill(ReadingMaple rh, MapleClient ha) {
        int skillId = rh.readInt();
        int oid = rh.readInt();
        MapleMapObject chrobj = ha.getPlayer().getMap().getMapObject(oid);
        if (chrobj == null) {
            ha.send(PhantomPacket.getSteelSkillCheck(oid, false, null, false));
            ha.getPlayer().ea();
        }
        MapleCharacter targetchr = (MapleCharacter) chrobj;
        byte action = rh.readByte();
        if (action == 0) { //��ħ
            SteelSkillEntry sse = new SteelSkillEntry(skillId, targetchr.getSkillLevel(skillId));
            if (!ha.getPlayer().getSteelSkills().isExistSkill(skillId)) {
                sse.setSlot(ha.getPlayer().getSteelSkills().getNextFreeSlot(SteelSkillEntry.getJobIndex(skillId)));
                ha.getPlayer().getSteelSkills().addSkill(SteelSkillEntry.getJobIndex(skillId), sse);
                ha.send(PhantomPacket.getSteelSkillCheck(oid, true, sse, false));
                ISkill skills = SkillFactory.getSkill(skillId);
                ha.getPlayer().changeSkillLevel(skills, (byte) sse.getSkillLevel(), (byte) skills.getMasterLevel());
            } else {
                //�����ִ� ��ų�� ������ ����
                //�� ���Կ��ִ� ������ ���� -> �ű⿡ ���οų ����
                SteelSkillEntry sse2 = ha.getPlayer().getSteelSkills().getSkillEntryById(skillId);
                int slot = sse2.getSlot();
                ISkill skills = SkillFactory.getSkill(skillId);
                ha.getPlayer().changeSkillLevel(skills, (byte) 0, (byte) 0);
                ha.getPlayer().getSteelSkills().deleteSkill(sse2);

                ha.getPlayer().getSteelSkills().addSkill(SteelSkillEntry.getJobIndex(skillId), slot, sse);
                ha.send(PhantomPacket.getSteelSkillCheck(oid, true, sse, false));
                ha.getPlayer().changeSkillLevel(skills, (byte) sse.getSkillLevel(), (byte) skills.getMasterLevel());
            }

        } else if (action == 1) { //����
            SteelSkillEntry sse = ha.getPlayer().getSteelSkills().getSkillEntryById(skillId);
            if (sse == null) {
                ha.getPlayer().message(1, "�ش� ��ų�� ã�� �� �����ϴ�.");
                System.err.println("[����] ��ƿ ��ų�� �����ϴٰ� ������ �߻��߽��ϴ�. - ��ġ�ϴ� ��ų�� �߰����� ���߽��ϴ�.");
                ha.getPlayer().ea();
                return;
            }
            ha.send(PhantomPacket.getSteelSkillCheck(oid, true, sse, true));
            ha.getPlayer().getSteelSkills().deleteSkill(sse);
        }
    }
}
