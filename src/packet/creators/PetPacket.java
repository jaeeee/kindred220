/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package packet.creators;

import client.MaplePet;
import client.MapleCharacter;
import client.stats.PlayerStat;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import server.movement.LifeMovementFragment;
import java.util.List;
import tools.RandomStream.Randomizer;

public class PetPacket {

    public static final Packet updatePet(final MapleCharacter player, final MaplePet pet, final boolean unequip, final boolean petLoot) {
	final WritingPacket mplew = new WritingPacket();
	mplew.writeShort(SendPacketOpcode.MODIFY_INVENTORY_ITEM.getValue());
	mplew.write(0); 
	mplew.write(2);
        mplew.write(0);
        mplew.write(3); 
        mplew.write(5); 
	mplew.writeShort(pet.getInventoryPosition());
        mplew.write(0);
        mplew.write(5); 
	mplew.writeShort(pet.getInventoryPosition());
	mplew.write(3); 
	mplew.writeInt(pet.getPetItemId());
        PacketProvider.addPetItemInfo(player, mplew, pet, unequip, petLoot);
        
	return mplew.getPacket();
    }

    public static final Packet showPet(final MapleCharacter chr, final MaplePet pet, final boolean remove, final boolean hunger) {
	final WritingPacket mplew = new WritingPacket();
        
	mplew.writeShort(SendPacketOpcode.SPAWN_PET.getValue());
	mplew.writeInt(chr.getId());
	mplew.writeInt(chr.getPetIndex(pet));

	if (remove) {
            mplew.writeShort(hunger ? 0x100 : 0);
	} else {
            mplew.write(1);
            mplew.write(hunger ? 1 : 0);
	    mplew.writeInt(pet.getPetItemId());
	    mplew.writeMapleAsciiString(pet.getName());
	    mplew.writeInt(pet.getUniqueId());
	    mplew.writeInt(0);
	    mplew.writeShort(pet.getPos().x);
	    mplew.writeShort(pet.getPos().y - 20);
	    mplew.write(pet.getStance());
	    mplew.writeShort(pet.getFh());
            mplew.writeInt(-1); // ∆Íªˆ±Ú
            mplew.writeInt(100);
            mplew.writeShort(0);
	}
	return mplew.getPacket();
    }

    public static final Packet movePet(final int cid, final int pid, final byte slot, final List<LifeMovementFragment> moves) {
	final WritingPacket mplew = new WritingPacket();

	mplew.writeShort(SendPacketOpcode.MOVE_PET.getValue());
	mplew.writeInt(cid);
	mplew.writeLong(slot);
	mplew.writeLong(pid);
	PacketProvider.serializeMovementList(mplew, moves);

	return mplew.getPacket();
    }

    public static final Packet petChat(final int cid, final int un, final String text, final byte slot) {
	final WritingPacket mplew = new WritingPacket();

	mplew.writeShort(SendPacketOpcode.PET_CHAT.getValue());
	mplew.writeInt(cid);
	mplew.writeInt(slot);
	mplew.writeShort(un);
	mplew.writeMapleAsciiString(text);
	mplew.write(0);

	return mplew.getPacket();
    }

    public static final Packet commandResponse(final int cid, final byte command, final byte slot, final boolean success) {
	final WritingPacket mplew = new WritingPacket();

	mplew.writeShort(SendPacketOpcode.PET_COMMAND.getValue());
	mplew.writeInt(cid);
	mplew.writeInt(slot);
	mplew.write(command == 1 ? 0 : 1);
	mplew.write(command);
        mplew.writeShort(0); //1.2.220+
        
	return mplew.getPacket();
    }

    public static final Packet showOwnPetLevelUp(final byte index) {
	final WritingPacket mplew = new WritingPacket();

	mplew.writeShort(SendPacketOpcode.SHOW_ITEM_GAIN_INCHAT.getValue());
	mplew.write(7); //1.2.220+
	mplew.write(0);
	mplew.writeInt(index); 

	return mplew.getPacket();
    }

    public static final Packet showPetLevelUp(final MapleCharacter chr, final byte index) {
	final WritingPacket mplew = new WritingPacket();

	mplew.writeShort(SendPacketOpcode.SHOW_FOREIGN_EFFECT.getValue());
	mplew.writeInt(chr.getId());
	mplew.write(7); //1.2.220+
	mplew.write(0);
	mplew.writeInt(index);

	return mplew.getPacket();
    }

    public static final Packet emptyStatUpdate() {
	final WritingPacket mplew = new WritingPacket();

	mplew.writeShort(SendPacketOpcode.UPDATE_STATS.getValue());
	mplew.write(1);
	mplew.writeLong(0);
	mplew.writeLong(0);

	return mplew.getPacket();
    }

    public static final Packet petStatUpdate(final MapleCharacter chr) {
	final WritingPacket mplew = new WritingPacket();

        mplew.writeShort(SendPacketOpcode.UPDATE_STATS.getValue());
        mplew.write(0);
        mplew.writeLong(PlayerStat.PET.getValue());

        byte count = 0;
        for (final MaplePet pet : chr.getPets()) {
                mplew.writeLong(pet.getUniqueId());
                count++;
        }
        while (count < 3) {
            mplew.write0(8);
            count++;
        }
        mplew.write(0);
	mplew.writeShort(0);

	return mplew.getPacket();
    }

    public static final Packet weirdStatUpdate(final MaplePet pet) {
	final WritingPacket mplew = new WritingPacket();

	mplew.writeShort(SendPacketOpcode.UPDATE_STATS.getValue());
	mplew.write(0);
	mplew.write(8);
	mplew.write(0);
	mplew.write(0x18);
	mplew.write(0);
	mplew.writeInt(pet.getUniqueId());
	mplew.writeLong(0);
	mplew.writeLong(0);
	mplew.writeInt(0);
	mplew.write(1);

	return mplew.getPacket();
    }
    
    public static final Packet updatePetLootStatus(int status) {
        final WritingPacket packet = new WritingPacket();
        
        packet.writeShort(SendPacketOpcode.PET_LOOT_STATUS.getValue());
        packet.write(status);
        packet.write(1);
        
        return packet.getPacket();
    }    
}
