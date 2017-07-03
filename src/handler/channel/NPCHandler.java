/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import constants.ServerConstants;
import constants.GameConstants;
import client.MapleClient;
import client.MapleCharacter;
import client.items.Equip;
import client.items.IItem;
import client.items.ItemFlag;
import client.items.MapleInventoryType;
import packet.creators.MainPacketCreator;
import packet.opcode.SendPacketOpcode;
import packet.transfer.read.ReadingMaple;
import packet.transfer.write.WritingPacket;
import scripting.NPCConversationManager;
import scripting.NPCScriptManager;
import server.items.MapleStorage;
import server.items.InventoryManipulator;
import server.life.MapleNPC;
import server.life.MaplePlayerNPC;
import server.quest.MapleQuest;
import server.shops.MapleShop;
import tools.RandomStream.Randomizer;

public class NPCHandler {
    
    public static void NPCAnimation(ReadingMaple slea, MapleClient c) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.NPC_ACTION.getValue());
        packet.write(slea.read((int) slea.available()));
       
        c.getSession().write(packet.getPacket());
    }
    
    public static final void NPCShop(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
	final byte bmode = rh.readByte();

	switch (bmode) {
	    case 0: {
		final MapleShop shop = chr.getShop();
		if (shop == null) {
		    return;
		}
		rh.skip(2);
		final int itemId = rh.readInt();
		final short quantity = rh.readShort();
		shop.buy(c, itemId, quantity);
		break;
	    }
	    case 1: {
		final MapleShop shop = chr.getShop();
		if (shop == null) {
		    return;
		}
		final byte slot = (byte) rh.readShort();
		final int itemId = rh.readInt();
		final short quantity = rh.readShort();
                try {
                    shop.sell(c, GameConstants.getInventoryType(itemId), slot, quantity);
                } catch (Exception e) {
                    if (!ServerConstants.realese) e.printStackTrace();
                }
		break;
	    }
	    case 2: {
		final MapleShop shop = chr.getShop();
		if (shop == null) {
		    return;
		}
		final byte slot = (byte) rh.readShort();
		shop.recharge(c, slot);
		break;
	    }
	    default:
		chr.setConversation(0);
		break;
	}
    }

    public static final void NPCTalk(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
	MapleNPC npc = null;
        int oid = rh.readInt();
        npc = (MapleNPC) chr.getMap().getNPCByOid(oid);
        if  (chr.getConversation() != 0) {
            c.getPlayer().dropMessage(1,"NPC와 대화를 시도하던 중 오류가 발생하였습니다.\r\n다시시도 해주십시오.");
	    NPCScriptManager.getInstance().dispose(c);
	    c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
	if (npc.hasShop()) {
	    chr.setConversation(1);
	    npc.sendShop(c);
	} else {
            if (chr.getConversation() == 0) {
                NPCScriptManager.getInstance().start(c, npc.getId());
            }
	}
    }

    public static final void QuestAction(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
	final byte action = rh.readByte();
	final int quest = rh.readShort2();
	switch (action) {
	    case 0: { // Restore lost item
		rh.skip(4);
		final int itemid = rh.readInt();
		MapleQuest.getInstance(quest).RestoreLostItem(chr, itemid);
		break;
	    }
	    case 1: { // Start Quest
		int npc = 0;
                if (rh.available() > 0) {
                    npc = rh.readInt();
                }
		MapleQuest.getInstance(quest).start(chr, npc);
		break;
	    }
	    case 2: { // Complete Quest
		final int npc = rh.readInt();
		rh.skip(4);

		if (rh.available() >= 4) {
		    MapleQuest.getInstance(quest).complete(chr, npc, rh.readInt());
		} else {
		    MapleQuest.getInstance(quest).complete(chr, npc);
		}
		c.getSession().write(MainPacketCreator.completeQuest((short) quest));
		c.getSession().write(MainPacketCreator.updateQuestInfo(c.getPlayer(), (short) quest, npc, (byte) 0x0A));
		// 6 = start quest
		// 7 = unknown error
		// 8 = equip is full
		// 9 = not enough mesos
		// 11 = due to the equipment currently being worn wtf o.o
		// 12 = you may not posess more than one of this item
		c.getSession().write(MainPacketCreator.showSpecialEffect(13)); // Quest completion
		chr.getMap().broadcastMessage(chr, MainPacketCreator.showSpecialEffect(chr.getId(), 13), false);
		break;
	    }
	    case 3: { // Forefit Quest
		MapleQuest.getInstance(quest).forfeit(chr);
		break;
	    }
	    case 4: { // Scripted Start Quest
		final int npc = rh.readInt();
		rh.skip(4);
		NPCScriptManager.getInstance().startQuest(c, npc, quest);
		break;
	    }
	    case 5: { // Scripted End Quest
		final int npc = rh.readInt();
		rh.skip(4);
		NPCScriptManager.getInstance().endQuest(c, npc, quest, false);
		c.getSession().write(MainPacketCreator.showSpecialEffect(13)); // Quest completion
		chr.getMap().broadcastMessage(chr, MainPacketCreator.showSpecialEffect(chr.getId(), 13), false);
		break;
	    }
	}
    }

    public static final void Storage(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
	final byte mode = rh.readByte();
	final MapleStorage storage = chr.getStorage();

	switch (mode) {
            case 3: { //Password compare
                if (!rh.readMapleAsciiString().equals(c.getSecondPassword())) {
                    c.send(MainPacketCreator.get2ndPWChecking(false));
                } else {  
                    storage.sendStorage(c);
                }
                break;
            }
	    case 4: { // Take Out
		final byte type = rh.readByte();
		final byte slot = storage.getSlot(MapleInventoryType.getByType(type), rh.readByte());
		final IItem item = storage.takeOut(slot);

                short flag = item.getFlag();

                if (ItemFlag.KARMA_EQ.check(flag)) {
                    item.setFlag((short) (flag - ItemFlag.KARMA_EQ.getValue()));
                } else if (ItemFlag.KARMA_USE.check(flag) && !GameConstants.isEquip(item.getItemId())) {
                    item.setFlag((short) (flag - ItemFlag.KARMA_USE.getValue()));
                }
		if (item != null) {
		    if (InventoryManipulator.checkSpace(c, item.getItemId(), item.getQuantity(), item.getOwner())) {
			InventoryManipulator.addFromDrop(c, item, false);
                        if (storage.iscompose) {
                            if (slot == 0) {
                                chr.dropMessage(1, "첫번째 장비템을 첫번째 슬롯으로 옮겨주세요.");
                            } else if (slot ==1) {
                                chr.dropMessage(1, "두번째 장비템을 두번째 슬롯으로 옮겨주세요.");
                            } else if (slot == 2) {
                                chr.dropMessage(1, "보조제를 세번째 슬롯으로 옮겨주세요.");
                            }
                        }
		    } else {
			storage.store(item);
			chr.dropMessage(1, "인벤토리 공간이 부족합니다.");
		    }
		    storage.sendTakenOut(c, GameConstants.getInventoryType(item.getItemId()));
		} else {
		    //AutobanManager.getInstance().autoban(c, "Trying to take out item from storage which does not exist.");
		    return;
		}
		break;
	    }
	    case 5: { // Store
		final byte slot = (byte) rh.readShort();
		final int itemId = rh.readInt();
		short quantity = rh.readShort();
		if (storage.isFull()) {
		    c.getSession().write(MainPacketCreator.getStorageFull());
		    return;
		}
		if (chr.getMeso() < 100) {
		    chr.dropMessage(1, "아이템을 맡길 위한 메소가 부족합니다.");
		} else {
		    MapleInventoryType type = GameConstants.getInventoryType(itemId);
		    IItem item = chr.getInventory(type).getItem(slot).copy();

		    if (GameConstants.isPet(item.getItemId())) {
			c.getSession().write(MainPacketCreator.resetActions());
			return;
		    }
		    if (item.getItemId() == itemId && (item.getQuantity() >= quantity || GameConstants.isThrowingStar(itemId) || GameConstants.isBullet(itemId))) {
			if (GameConstants.isThrowingStar(itemId) || GameConstants.isBullet(itemId)) {
			    quantity = item.getQuantity();
			}
                        if (!storage.iscompose) {
			chr.gainMeso(-100, false, true, false);
                        } else {
                            quantity = 1;
                            if (storage.getItems().size() == 0) {
                            chr.dropMessage(1, "두번째 장비템을 두번째 슬롯으로 옮겨주세요.");
                            } else if (storage.getItems().size() == 1) {
                            chr.dropMessage(1, "원하시는 보조제를 세번째 슬롯으로 옮겨주세요.");
                            } else if (storage.getItems().size() == 2) {
                                if (item.getItemId() !=  4025000 &&item.getItemId() != 4025001 && item.getItemId() != 4025002) {
                                    chr.dropMessage(1, "세번째 슬롯에는 보조제만 가능합니다.");
                                    return;
                                }
                            } else if (storage.getItems().size() == 3) {
                                    chr.dropMessage(1, "더이상 추가가 불가능합니다.");
                                    return;

                            }
                        }
			InventoryManipulator.removeFromSlot(c, type, slot, quantity, false);
			item.setQuantity(quantity);
			storage.store(item);
		    } else {
			return;
		    }
		}
		storage.sendStored(c, GameConstants.getInventoryType(itemId));
		break;
	    }
            case 6: {
               storage.arrange();
               storage.update(c);
               break;
            }
	    case 7: {
		long meso = rh.readLong();
		final long storageMesos = storage.getMeso();
		final long playerMesos = chr.getMeso();

		if ((meso > 0 && storageMesos >= meso) || (meso < 0 && playerMesos >= -meso)) {
		    if (meso < 0 && (storageMesos - meso) < 0) { // storing with overflow
			meso = -(9999999999L - storageMesos);
			if ((-meso) > playerMesos) { // should never happen just a failsafe
			    return;
			}
		    } else if (meso > 0 && (playerMesos + meso) < 0) { // taking out with overflow
			meso = (9999999999L - playerMesos);
			if ((meso) > storageMesos) { // should never happen just a failsafe
			    return;
			}
		    }
		    storage.setMeso(storageMesos - meso);
		    chr.gainMeso(meso, false, true, false);
		} else {
		    return;
		}
		storage.sendMeso(c);
		break;
	    }
	    case 8: {
                if (storage.iscompose) {
                     if (storage.getItems().isEmpty()) {
                            chr.dropMessage(1,"첫번째 슬롯에 장비템을 넣어주세요.\r\n합성을 취소하실려면 채널을 옮겨주세요.");
                            chr.setConversation(0);
                            NPCScriptManager.getInstance().dispose(c);
                     } else if (storage.getItems().size() == 1) {
                             IItem item = storage.getItems().get(0);
                             InventoryManipulator.addFromDrop(c, item, false);
                            chr.dropMessage(1,"두번째 슬롯에 장비템을 넣어주세요.\r\n합성을 취소하실려면 채널을 옮겨주세요.");
                            chr.setConversation(0);
                            NPCScriptManager.getInstance().dispose(c);
                     } else {
                         if (isNotCompare(storage.getItems().get(0).getItemId()) || isNotCompare(storage.getItems().get(1).getItemId())) {
                             IItem item = storage.getItems().get(0);
                             InventoryManipulator.addFromDrop(c, item, false);
                             chr.dropMessage(1,"보조제가 올바르지 못한 곳에 있습니다.\r\n합성을 취소하실려면 채널을 옮겨주세요.");
                             chr.setConversation(0);
                             NPCScriptManager.getInstance().dispose(c);
                         } else {
                            int rand = Randomizer.rand(1, 100);
                            if (storage.getItems().size() == 3) {
                                switch (storage.getItems().get(2).getItemId()) {
                                    case 4025000:rand += 5;break;
                                    case 4025001:rand += 7;break;
                                    case 4025002:rand += 10;break;
                                }
                         }
                            if (storage.getItems().size() >= 2) {
                                Equip item = (Equip) storage.getItems().get(0);
                                if (storage.getItems().get(0).getItemId() == storage.getItems().get(1).getItemId()) {
                                    if (rand > 40) {
                                        item.setState((byte) 1);
                                        InventoryManipulator.addFromDrop(c, item, false);
                                        chr.dropMessage(1,"장비템 합성에 성공하셨습니다.");
                                    } else {
                                        chr.dropMessage(1,"장비템 합성에 실패하셨습니다.");
                                    }
                                } else if (storage.getItems().get(0).getItemId() != storage.getItems().get(1).getItemId()) {
                                    if (rand > 60) {
                                        item.setState((byte) 1);
                                        InventoryManipulator.addFromDrop(c, item, false);
                                        chr.dropMessage(1,"장비템 합성을 성공하셨습니다.");
                                    } else {
                                        chr.dropMessage(1,"장비템 합성을 실패하셨습니다.");
                                    }
                                    chr.saveToDB(false, false);
                                }
                             } else {
                                chr.dropMessage(1,"장비템 합성을 취소하셨습니다..");
                             }
                         }
                     }
                } else {
                    storage.saveToDB();
                }
		storage.close();
		chr.setConversation(0);
                c.getSession().write(MainPacketCreator.resetActions());
		break;
	    }
	    default:
		System.out.println("Unhandled Storage mode : " + mode);
		break;
	}
    }
    
    public static final void NPCMoreTalk(final ReadingMaple rh, final MapleClient c) {
	final byte lastMsg = rh.readByte(); // 00 (last msg type I think)
        if (lastMsg == 9) {
            rh.skip(2);
        }
	final byte action = rh.readByte(); // 00 = end chat, 01 == follow

	final NPCConversationManager cm = NPCScriptManager.getInstance().getCM(c);

	if (cm == null || c.getPlayer().getConversation() == 0) {
	    return;
	}
	if (lastMsg == 3) {
	    if (action != 0) {
		cm.setGetText(rh.readMapleAsciiString());
		if (cm.getType() == 0) {
		    NPCScriptManager.getInstance().startQuest(c, action, lastMsg, -1);
		} else if (cm.getType() == 1) {
		    NPCScriptManager.getInstance().endQuest(c, action, lastMsg, -1);
		} else {
		    NPCScriptManager.getInstance().action(c, action, lastMsg, -1);
		}
	    } else {
		cm.dispose();
	    }
	} else {
	    int selection = -1;
	    if (rh.available() >= 4) {
		selection = rh.readInt();
	    } else if (rh.available() > 0) {
		selection = rh.readByte();
	    }
	    if (action != -1) {
		if (cm.getType() == 0) {
		    NPCScriptManager.getInstance().startQuest(c, action, lastMsg, selection);
		} else if (cm.getType() == 1) {
		    NPCScriptManager.getInstance().endQuest(c, action, lastMsg, selection);
		} else {
		    NPCScriptManager.getInstance().action(c, action, lastMsg, selection);
		}
	    } else {
		cm.dispose();
	    }
	}
    }
    
    public static boolean isNotCompare(int itemid) {
        if (itemid == 4025000 || itemid == 4025001 || itemid == 4025002) {
            return true;
        }
        return false;
    }
}
