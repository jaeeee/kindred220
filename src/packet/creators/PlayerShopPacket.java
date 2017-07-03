/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package packet.creators;

import client.MapleClient;
import client.MapleCharacter;
import client.items.IItem;
import constants.GameConstants;
import packet.transfer.write.Packet;
import packet.opcode.SendPacketOpcode;
import server.items.MerchItemPackage;
import server.shops.HiredMerchant;
import server.shops.IMapleCharacterShop;
import server.shops.MapleCharacterShop;
import server.shops.MapleCharacterShopItem;
import tools.Pair;
import packet.transfer.write.WritingPacket;
import server.shops.AbstractPlayerStore.BoughtItem;
import java.util.List;
import server.shops.AbstractPlayerStore;

public class PlayerShopPacket {

    
    public static final Packet sendPlayerShopBox(final MapleCharacter c) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.UPDATE_CHAR_BOX.getValue());
	packet.writeInt(c.getId());
	addAnnounceBox(packet, c);
        
	return packet.getPacket();
    }
        
    public static final void addAnnounceBox(final WritingPacket packet, final MapleCharacter chr) {
        if (chr.getPlayerShop() != null && chr.getPlayerShop().isOwner(chr) && chr.getPlayerShop().getShopType() != 1) {
            addInteraction(packet, chr.getPlayerShop());
        } else {
            packet.write(0);
        }
    }

    public static final void addInteraction(final WritingPacket packet, IMapleCharacterShop shop) {
        packet.write(shop.getGameType());
        packet.writeInt(((AbstractPlayerStore) shop).getObjectId());
        packet.writeMapleAsciiString(shop.getDescription());
        packet.write(shop.getPassword().length() > 0 ? 1 : 0); //password = false
        packet.write(shop.getItemId() % 10);
        packet.write(shop.getSize()); //current size
        packet.write(shop.getMaxSize()); //full slots... 4 = 4-1=3 = has slots, 1-1=0 = no slots
        packet.write(shop.isOpen() ? 0 : 1);
    }

    public static final Packet sendTitleBox() {
	final WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.SEND_TITLE_BOX.getValue());
	packet.write(7);
        
	return packet.getPacket();
    }
    
    public static final Packet alreadyOpenedShop(int channel, int room) {
	final WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.SEND_TITLE_BOX.getValue());
	packet.write(8);
        packet.writeInt(910000000 + room);
        packet.write(channel);
	return packet.getPacket();
    }

    public static final Packet getHiredMerch(final MapleCharacter chr, final HiredMerchant merch, final boolean firstTime) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
        packet.write(0x14);
        packet.write(6);
        packet.write(7);
        packet.writeShort(merch.getVisitorSlot(chr));
        packet.writeInt(merch.getItemId());
        packet.writeMapleAsciiString("고용상인");
        for (final Pair<Byte, MapleCharacter> storechr : merch.getVisitors()) {
            packet.write(storechr.left);
            PacketProvider.addPlayerLooks(packet, storechr.right, false);
           
            packet.writeMapleAsciiString(storechr.right.getName());
            packet.writeShort(storechr.right.getJob());
        }
        packet.write(-1);
        if (merch.isOwner(chr)) {
            packet.writeShort(merch.getMessages().size());
            for (int i = 0; i < merch.getMessages().size(); i++) {
                packet.writeMapleAsciiString(merch.getMessages().get(i).getLeft());
                packet.write(merch.getMessages().get(i).getRight());
            }
        } else {
            packet.writeShort(0); // Messages  
        }
        packet.writeMapleAsciiString(merch.getOwnerName());
        if (merch.isOwner(chr)) {
            packet.writeInt(merch.getTimeLeft());
            packet.write(firstTime ? 1 : 0);
            packet.write(merch.getBoughtItems().size());
            for (BoughtItem SoldItem : merch.getBoughtItems()) {
                packet.writeInt(SoldItem.id);
                packet.writeShort(SoldItem.quantity); // number of purchased
                packet.writeLong(SoldItem.totalPrice); // total price
                packet.writeMapleAsciiString(SoldItem.buyer); // name of the buyer
            }
            packet.writeLong(merch.getMeso());
        }
        packet.writeInt(1492); // TODO : value
        packet.writeMapleAsciiString(merch.getDescription());
        packet.write(16); // official is 16 (slot) not 10
        packet.writeLong(merch.getMeso()); // meso
        packet.write(merch.getItems().size());
        for (final MapleCharacterShopItem item : merch.getItems()) {
            packet.writeShort(item.bundles);
            packet.writeShort(item.item.getQuantity());
            packet.writeLong(item.price); //v192 4byte.
            PacketProvider.addItemInfo(packet, item.item, true, true, null);
        }
        packet.writeShort(0);
        return packet.getPacket();
    }

    public static final Packet getPlayerStore(final MapleCharacter chr, final boolean firstTime) {
	final WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
	IMapleCharacterShop ips = chr.getPlayerShop();
	switch (ips.getShopType()) {
            case IMapleCharacterShop.PLAYER_SHOP:
                packet.write(0x14);
                packet.write(5);
                packet.write(7);
                break;
	}
        packet.writeShort(ips.getVisitorSlot(chr));
	PacketProvider.addPlayerLooks(packet, ((MapleCharacterShop) ips).getMCOwner(), false);
	packet.writeMapleAsciiString(ips.getOwnerName());
        packet.writeShort(((MapleCharacterShop) ips).getMCOwner().getJob());
	for (final Pair<Byte, MapleCharacter> storechr : ips.getVisitors()) {
	    packet.write(storechr.left);
	    PacketProvider.addPlayerLooks(packet, storechr.right, false);
	    packet.writeMapleAsciiString(storechr.right.getName());
            packet.writeShort(storechr.right.getJob());
	}
	packet.write(0xFF);
        packet.writeInt(2665);
	packet.writeMapleAsciiString(ips.getDescription());
	packet.write(0x10);
	packet.write(ips.getItems().size());
        packet.writeShort(0);
	for (final MapleCharacterShopItem item : ips.getItems()) {
	    packet.writeShort(item.bundles);
	    packet.writeShort(item.item.getQuantity());
	    packet.writeInt(item.price);
	    PacketProvider.addItemInfo(packet, item.item, true, true, null);
	}
	return packet.getPacket();
    }

    public static final Packet shopChat(final String message, final int slot) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
	packet.write(0x18);
	packet.write(0x19);
	packet.write(slot);
	packet.writeMapleAsciiString(message);

	return packet.getPacket();
    }

    public static final Packet shopErrorMessage(final int error, final int type, final int msg) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
	packet.write(error);
	packet.write(type);
	packet.write(msg);

	return packet.getPacket();
    }

    public static final Packet spawnHiredMerchant(final HiredMerchant hm) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.SPAWN_HIRED_MERCHANT.getValue());
	packet.writeInt(hm.getOwnerId());
	packet.writeInt(hm.getItemId());
	packet.writePos(hm.getPosition());
        packet.writeShort(0);
	packet.writeMapleAsciiString(hm.getOwnerName());
        PacketProvider.addInteraction(packet, hm);
	return packet.getPacket();
    }

    public static final Packet destroyHiredMerchant(final int id) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.DESTROY_HIRED_MERCHANT.getValue());
	packet.writeInt(id);

	return packet.getPacket();
    }

    public static final Packet shopItemUpdate(final IMapleCharacterShop shop) {
	final WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
	packet.write(0x4B);
	if (shop.getShopType() == IMapleCharacterShop.HIRED_MERCHANT) {
	    packet.writeInt(0);
            packet.writeInt(0); // 202v
	}
	packet.write(shop.getItems().size());
	for (final MapleCharacterShopItem item : shop.getItems()) {
	    packet.writeShort(item.bundles);
	    packet.writeShort(item.item.getQuantity());
	    packet.writeInt(item.price);
            packet.writeInt(0); //v192
	    PacketProvider.addItemInfo(packet, item.item, true, true, null);
	}
        packet.writeShort(0);
	return packet.getPacket();
    }

    public static final Packet shopVisitorAdd(final MapleCharacter chr, final int slot) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
	packet.write(11);
	packet.write(slot);
	PacketProvider.addPlayerLooks(packet, chr, false);
	packet.writeMapleAsciiString(chr.getName());
	packet.writeShort(chr.getJob());

	return packet.getPacket();
    }

    public static final Packet shopVisitorLeave(final byte slot) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
	packet.write(51); //1.2.220+ 패킷 수정요망.
	packet.write(slot);

	return packet.getPacket();
    }

    public static final Packet updateHiredMerchant(final HiredMerchant shop) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.UPDATE_HIRED_MERCHANT.getValue());
	packet.writeInt(shop.getOwnerId());
        PacketProvider.addInteraction(packet, shop);

	return packet.getPacket();
    }

    public static final Packet merchItem_Message(final byte op) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.MERCH_ITEM_MSG.getValue());
	packet.write(op);

	return packet.getPacket();
    }
    
    
    public static final Packet merchItem_checkSPW(final boolean success) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.MERCH_ITEM_STORE.getValue());
	packet.write(0x27);
        packet.write(success ? 0 : 1);

	return packet.getPacket();
    }

      public static final Packet merchItemStore(final byte op) {
	final WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.MERCH_ITEM_STORE.getValue());
	packet.write(op);
	switch (op) {
	    case 0x29:
		packet.writeLong(0);
                packet.writeInt(0);
		break;
	    default:
		packet.write(0);
		break;
	}
	return packet.getPacket();
    }

    public static final Packet merchItemStore_ItemData(final MerchItemPackage pack) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.MERCH_ITEM_STORE.getValue());
	packet.write(0x28);
	packet.writeInt(9030000); // Fredrick
	packet.writeInt(32272); // pack.getPackageid()
	packet.write0(5);
	packet.writeLong(pack.getMesos());
	packet.write0(3);
	packet.write(pack.getItems().size());
	for (final IItem item : pack.getItems()) {
	    PacketProvider.addItemInfo(packet, item, true, true, null);
	}
	packet.writeShort(0);
	return packet.getPacket();
    }
    
    public static final Packet cannotBackItem() {
	final WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.MERCH_ITEM_STORE.getValue());
	packet.write(0x28);
	packet.writeInt(9030000); // Fredrick
	packet.writeInt(999999999); // pack.getPackageid()
	packet.write(0);
	return packet.getPacket();
    }
    

    public static final Packet merchantBlackListView(final List<String> blackList) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
        packet.write(0x38); //v192
        packet.writeShort(blackList.size());
        for (int i = 0; i < blackList.size(); i++) {
            if (blackList.get(i) != null) {
                packet.writeMapleAsciiString(blackList.get(i));
            }
        }
        return packet.getPacket();
    }

    public static final Packet merchantVisitorView(List<String> visitor) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
        packet.write(0x37); //v192
        packet.writeShort(visitor.size());
        for (String visit : visitor) {
            packet.writeMapleAsciiString(visit);
            packet.writeInt(1);
        }
        return packet.getPacket();
    }
    
    public static final Packet MaintanceCheck(boolean correct, int oid) { // show when closed the shop
        final WritingPacket packet = new WritingPacket();
        // 0x28 = All of your belongings are moved successfully.
        packet.writeShort(SendPacketOpcode.PLAYER_INTERACTION.getValue());
        packet.write(0x1E); //v192
        packet.write(0x13);
        packet.write(6);
        packet.write(correct ? 1: 0);
        packet.writeInt(oid);
        packet.write(0);
        return packet.getPacket();
    }
    
}