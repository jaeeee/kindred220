/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
     * 카이저 모프게이지 버프패킷.
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
     * 카이저 윌 오브 소드/어드밴스드 윌 오브 소드.
     * 
     * @param skillid - 스킬코드
     * @param duration - 스킬버프 값의 길이
     * @param statups - 버프스탯 값
     * @param itemid - 자신이 착용하는 무기가 머리위에 띄어줌
     */
    public static Packet giveWillofSword(MapleCharacter chr, int skillid, int duration, List<Triple<BuffStats, Integer, Boolean>> statups) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        /*버프스탯 시작*/
        PacketProvider.writeLongMask(packet, statups);
        /*스킬정보 시작*/
        for (Triple<BuffStats, Integer, Boolean> statup : statups) {
            if (!statup.getThird()) {
                packet.writeShort(statup.getSecond().shortValue());
                packet.writeInt(skillid);
                packet.writeInt(duration);
            }
        }
        /*스킬타입 시작*/
        packet.writeShort(0);
        packet.write(0);
        packet.writeShort(0);
        /*아이템 정보 시작*/
        MapleInventory equip = chr.getInventory(MapleInventoryType.EQUIPPED);
        IItem weapon = equip.getItem((byte) -11);
        if (skillid != 61101002 && skillid != 61110211) {
            packet.writeInt(skillid == 61121217 ? 4 : 2); // 스킬구분
            packet.writeInt(5); // 머리위에 뜨는 무기의 갯수
            packet.writeInt(weapon.getItemId()); // 착용중인 두손검
            packet.writeInt(5); // AttackCount
            packet.write0(24);
        } else {
            packet.writeInt(skillid == 61110211 ? 3 : 1); // 스킬구분
            packet.writeInt(3); // 머리위에 뜨는 무기의 갯수
            packet.writeInt(weapon.getItemId()); // 착용중인 두손검
            packet.writeInt(3); // AttackCount
            packet.write0(16);
        }
        packet.writeInt(0); //v192
        packet.write(1);
        packet.writeInt(0);
        /*버프스탯 끝*/
        /*스킬정보 끝*/
        /*스킬타입 끝*/
        /*아이템 정보 끝*/
        return packet.getPacket();
    }

    /**
     * 상대방 팅 수정.
     * 
     * @param chr
     * @param skillid
     * @param statups
     * @return 
     */
    public static Packet giveForeignWillofSword(MapleCharacter chr, int skillid, List<Triple<BuffStats, Integer, Boolean>> statups) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_FOREIGN_BUFF.getValue());
        /*버프스탯 시작*/
        packet.writeInt(chr.getId());
        PacketProvider.writeLongMask(packet, statups);
        /*스킬정보 시작*/
        for (Triple<BuffStats, Integer, Boolean> statup : statups) {
            if (!statup.getThird()) {
                packet.writeShort(statup.getSecond().shortValue());
                packet.writeInt(skillid);
            }
        }
        /*스킬타입 시작*/
        packet.writeShort(0);
        packet.write(0);
        /*아이템 정보 시작*/
        MapleInventory equip = chr.getInventory(MapleInventoryType.EQUIPPED);
        IItem weapon = equip.getItem((byte) -11);
        if (skillid != 61101002 && skillid != 61110211) {
            packet.writeInt(skillid == 61121217 ? 4 : 2); // 스킬구분
            packet.writeInt(5); // 머리위에 뜨는 무기의 갯수
            packet.writeInt(weapon.getItemId()); // 착용중인 두손검
            packet.writeInt(5); // AttackCount
            packet.write0(26);
        } else {
            packet.writeInt(skillid == 61110211 ? 3 : 1); // 스킬구분
            packet.writeInt(3); // 머리위에 뜨는 무기의 갯수
            packet.writeInt(weapon.getItemId()); // 착용중인 두손검
            packet.writeInt(3); // AttackCount
            packet.write0(18);
        }
        /*버프스탯 끝*/
        /*스킬정보 끝*/
        /*스킬타입 끝*/
        /*아이템 정보 끝*/
        return packet.getPacket();
    }

    /**
     * 윌 오브 소드/어드밴스드 윌 오브 소드.
     * @param characterid - 캐릭터 아이디
     * @param swordSize - 소드 사이즈, ex) 2th - 3, 4th - 5
     * @param swordCount - 랜덤값
     * @param skillid - 스킬코드
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
