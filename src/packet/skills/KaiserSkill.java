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
import client.items.IItem;
import client.items.MapleInventory;
import client.items.MapleInventoryType;
import client.stats.BuffStats;
import java.awt.Point;
import packet.creators.PacketProvider;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import tools.RandomStream.Randomizer;
import tools.Triple;
import java.util.List;
import tools.HexTool;

/**
 *
 * @author Developer
 */
public class KaiserSkill {

    /**
     * ī���� ���������� ������Ŷ.
     * 
     * @param gauge
     */
    public static Packet giveMorphGauge(int gauge) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MORPH_GAUGE);
        if (gauge == -1000) {
            packet.writeShort(0);
        } else {
            packet.writeShort(Math.min(gauge, 1000));
        }
        packet.writeInt(0);
        packet.writeInt(Randomizer.nextInt());
        packet.write0(5);
        packet.writeLong(0x2L);
        packet.write0(9);
        
        return packet.getPacket();
    }

    /**
     * ī���� �� ���� �ҵ�/���꽺�� �� ���� �ҵ�.
     * 
     * @param skillid - ��ų�ڵ�
     * @param duration - ��ų���� ���� ����
     * @param statups - �������� ��
     * @param itemid - �ڽ��� �����ϴ� ���Ⱑ �Ӹ����� �����
     */
    public static Packet giveWillofSword(MapleCharacter chr, int skillid, int duration, List<Triple<BuffStats, Integer, Boolean>> statups) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        /*�������� ����*/
        PacketProvider.writeLongMask(packet, statups);
        /*��ų���� ����*/
        for (Triple<BuffStats, Integer, Boolean> statup : statups) {
            if (!statup.getThird()) {
                packet.writeShort(statup.getSecond().shortValue());
                packet.writeInt(skillid);
                packet.writeInt(duration);
            }
        }
        /*��ųŸ�� ����*/
        packet.writeShort(0);
        packet.write(0);
        packet.writeShort(0);
        /*������ ���� ����*/
        MapleInventory equip = chr.getInventory(MapleInventoryType.EQUIPPED);
        IItem weapon = equip.getItem((byte) -11);
        if (skillid != 61101002 && skillid != 61110211) {
            packet.writeInt(skillid == 61121217 ? 4 : 2); // ��ų����
            packet.writeInt(5); // �Ӹ����� �ߴ� ������ ����
            packet.writeInt(weapon.getItemId()); // �������� �μհ�
            packet.writeInt(5); // AttackCount
            packet.write0(24);
        } else {
            packet.writeInt(skillid == 61110211 ? 3 : 1); // ��ų����
            packet.writeInt(3); // �Ӹ����� �ߴ� ������ ����
            packet.writeInt(weapon.getItemId()); // �������� �μհ�
            packet.writeInt(3); // AttackCount
            packet.write0(16);
        }
        packet.writeInt(0); //v192
        packet.write(1);
        packet.writeInt(0);
        /*�������� ��*/
        /*��ų���� ��*/
        /*��ųŸ�� ��*/
        /*������ ���� ��*/
        return packet.getPacket();
    }

    /**
     * ���� �� ����.
     * 
     * @param chr
     * @param skillid
     * @param statups
     * @return 
     */
    public static Packet giveForeignWillofSword(MapleCharacter chr, int skillid, List<Triple<BuffStats, Integer, Boolean>> statups) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_FOREIGN_BUFF.getValue());
        /*�������� ����*/
        packet.writeInt(chr.getId());
        PacketProvider.writeLongMask(packet, statups);
        /*��ų���� ����*/
        for (Triple<BuffStats, Integer, Boolean> statup : statups) {
            if (!statup.getThird()) {
                packet.writeShort(statup.getSecond().shortValue());
                packet.writeInt(skillid);
            }
        }
        /*��ųŸ�� ����*/
        packet.writeShort(0);
        packet.write(0);
        /*������ ���� ����*/
        MapleInventory equip = chr.getInventory(MapleInventoryType.EQUIPPED);
        IItem weapon = equip.getItem((byte) -11);
        if (skillid != 61101002 && skillid != 61110211) {
            packet.writeInt(skillid == 61121217 ? 4 : 2); // ��ų����
            packet.writeInt(5); // �Ӹ����� �ߴ� ������ ����
            packet.writeInt(weapon.getItemId()); // �������� �μհ�
            packet.writeInt(5); // AttackCount
            packet.write0(26);
        } else {
            packet.writeInt(skillid == 61110211 ? 3 : 1); // ��ų����
            packet.writeInt(3); // �Ӹ����� �ߴ� ������ ����
            packet.writeInt(weapon.getItemId()); // �������� �μհ�
            packet.writeInt(3); // AttackCount
            packet.write0(18);
        }
        /*�������� ��*/
        /*��ų���� ��*/
        /*��ųŸ�� ��*/
        /*������ ���� ��*/
        return packet.getPacket();
    }

    /**
     * �� ���� �ҵ�/���꽺�� �� ���� �ҵ�.
     * @param characterid - ĳ���� ���̵�
     * @param swordSize - �ҵ� ������, ex) 2th - 3, 4th - 5
     * @param swordCount - ������
     * @param skillid - ��ų�ڵ�
     * @return 
     */
    public static Packet absorbingSwordCount(int cid, List<Integer> oids, int skillid) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ABSORB_DF.getValue());
        packet.write(0);
        packet.writeInt(cid);
        packet.writeInt(2);
        packet.write(1);
        packet.writeInt(oids.size());
        for (Integer oid : oids) {
          packet.writeInt(oid.intValue());
        }
        packet.writeInt(skillid);
        boolean advanced = (skillid == 61120007) || (skillid == 61121217);
        boolean transform = (skillid == 61110211) || (skillid == 61121217);
        for (int i = 0; i < (advanced ? 5 : 3); i++) {
          packet.write(1);
          packet.writeInt(i + 2);
          packet.writeInt(transform ? 4 : 2);
          packet.writeInt(Randomizer.rand(15, 18));
          packet.writeInt(Randomizer.rand(26, 31));
          packet.writeInt(0);
          packet.writeInt(Randomizer.rand(1000, 1500));
          packet.writeLong(0);
          packet.write(HexTool.getByteArrayFromHexString("CF C7 29 D5"));
          packet.writeInt(0);
        }
        packet.write(0);
        return packet.getPacket();
    }

    public static Packet cancelWillofSword() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.WILL_OF_SWORD);
        
        return packet.getPacket();
    }

    public static Packet ItemSkillFromButton() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.REBUTTON_FORM_ITEM_SKILL.getValue());
        packet.writeLong(9);
        packet.writeLong(Randomizer.nextLong());
        packet.writeLong(Randomizer.nextLong());
        
        return packet.getPacket();
    }
}
