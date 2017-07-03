/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import constants.GameConstants;
import client.MapleClient;
import client.MaplePet;
import client.MapleCharacter;
import client.items.IItem;
import client.items.ISkill;
import client.items.MapleInventoryType;
import client.items.PetCommand;
import client.items.PetDataFactory;
import client.skills.SkillFactory;
import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import packet.creators.PetPacket;
import packet.transfer.read.ReadingMaple;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import server.movement.LifeMovementFragment;
import tools.RandomStream.Randomizer;
import java.awt.Point;
import java.util.ArrayList;
import java.util.List;

public class PetHandler {
    public static void SpawnPet(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
	rh.skip(4);
	byte slot = rh.readByte();
        IItem item = chr.getInventory(MapleInventoryType.CASH).getItem(slot);
        MaplePet pet = item.getPet();
        if (pet != null) {
            List<Integer> petbufflist = new ArrayList<Integer>(3);
            
            if (chr.getPetIndex(pet) != -1) { //펫 해제
                 for(MaplePet pet_ : chr.getPets()) {
                    if(pet_ != null) {
                        int petbuffid = GameConstants.getPetBuff(pet_.getPetItemId());
                        if (petbuffid == 0) continue;
                        if (petbuffid != 0) {
                            if (petbufflist.contains(petbuffid) && petbuffid != 13 && petbuffid != 17) {
                                for (int i = 0; i < 3; i++) {
                                    if (!petbufflist.contains(petbuffid + i)) {
                                        petbufflist.add(petbuffid + i);
                                        break;
                                    }
                                }
                            } else
                                petbufflist.add(GameConstants.getPetBuff(pet_.getPetItemId()));
                        }
                    }
                }
                for(Integer skill : petbufflist) {
                    chr.changeSkillLevel(SkillFactory.getSkill(80000000 + skill), (byte) 0, (byte) 0);
                }
                chr.unequipPet(pet, false, false);
                c.getSession().write(MainPacketCreator.resetActions());
                return;
	    }
            Point pos = chr.getPosition();
            pet.setPos(pos);
            pet.setFh(chr.getMap().getFootholds().findMaple(pet.getPos()).getId());
            pet.setStance(0);
            chr.addPet(pet);

            chr.getMap().broadcastMessage(chr, PetPacket.showPet(chr, pet, false, false), true);
            chr.updatePet();
            
            for(MaplePet pet_ : chr.getPets()) {
                if(pet_ != null) {
                    int petbuffid = GameConstants.getPetBuff(pet_.getPetItemId());
                    if (petbuffid == 0) continue;
                    if (petbuffid != 0) {
                        if (petbufflist.contains(petbuffid) && petbuffid != 13 && petbuffid != 17) {
                            for (int i = 0; i < 3; i++) {
                                if (!petbufflist.contains(petbuffid + i)) {
                                    petbufflist.add(petbuffid + i);
                                    break;
                                }
                            }
                        } else
                            petbufflist.add(GameConstants.getPetBuff(pet_.getPetItemId()));
                    }
                }
           }
           for(Integer skill : petbufflist) {
               chr.changeSkillLevel(SkillFactory.getSkill(80000000 + skill), (byte) 1, (byte) 1);
           }
        }
        c.getSession().write(MainPacketCreator.resetActions());
    }

    public static void Pet_AutoPotion(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
	rh.skip(5);
	byte slot = rh.readByte();
	IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem(slot);

	if (!chr.isAlive() || toUse == null || toUse.getQuantity() < 1) {
	    c.getSession().write(MainPacketCreator.resetActions());
	    return;
	}
	InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
	ItemInformation.getInstance().getItemEffect(toUse.getItemId()).applyTo(chr);
    }

    public static void PetChat(ReadingMaple slea, MapleCharacter chr) {
        int petid = slea.readInt();
        slea.skip(4);
        int command = slea.readShort();
        String text = slea.readMapleAsciiString();
	chr.getMap().broadcastMessage(chr, PetPacket.petChat(chr.getId(), command, text, (byte) petid), true);
    }

    public static void PetCommand(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
	int petIndex = rh.readInt();
	if (petIndex == -1) {
	    return;
	}
	MaplePet pet = chr.getPet(petIndex);
        rh.skip(1);
	byte command = rh.readByte();
	PetCommand petCommand = PetDataFactory.getPetCommand(pet.getPetItemId(), (int) command);

	boolean success = false;
	if (Randomizer.nextInt(99) <= petCommand.getProbability()) {
	    success = true;
	    if (pet.getCloseness() < 30000) {
		int newCloseness = pet.getCloseness() + petCommand.getIncrease();
		if (newCloseness > 30000) {
		    newCloseness = 30000;
		}
		pet.setCloseness(newCloseness);
		if (newCloseness >= GameConstants.getClosenessNeededForLevel(pet.getLevel() + 1)) {
		    pet.setLevel(pet.getLevel() + 1);
		    c.getSession().write(PetPacket.showOwnPetLevelUp((byte) petIndex));
		    chr.getMap().broadcastMessage(PetPacket.showPetLevelUp(chr, (byte) petIndex));
		}
		c.getSession().write(PetPacket.updatePet(c.getPlayer(), pet, false, c.getPlayer().getPetLoot()));
	    }
	}
	chr.getMap().broadcastMessage(chr, PetPacket.commandResponse(chr.getId(), command, (byte) petIndex, success), true);
    }

    public static void PetFood(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
	int previousFullness = 100;
	c.getSession().write(MainPacketCreator.resetActions());
        
	for (MaplePet pet : chr.getPets()) {
            if (pet == null) {
                continue;
            }
            if (pet.getFullness() < previousFullness) {
                previousFullness = pet.getFullness();

                rh.skip(6);
                int itemId = rh.readInt();

                boolean gainCloseness = false;

                if (Randomizer.nextInt(99) <= 50) {
                    gainCloseness = true;
                }
                if (pet.getFullness() < 100) {
                    int newFullness = pet.getFullness() + 30;
                    if (newFullness > 100) {
                        newFullness = 100;
                    }
                    pet.setFullness(newFullness);
                    int index = chr.getPetIndex(pet);

                    if (gainCloseness && pet.getCloseness() < 30000) {
                        int newCloseness = pet.getCloseness() + 1;
                        if (newCloseness > 30000) {
                            newCloseness = 30000;
                        }
                        pet.setCloseness(newCloseness);
                        if (newCloseness >= GameConstants.getClosenessNeededForLevel(pet.getLevel() + 1)) {
                            pet.setLevel(pet.getLevel() + 1);

                            c.getSession().write(PetPacket.showOwnPetLevelUp((byte) index));
                            chr.getMap().broadcastMessage(PetPacket.showPetLevelUp(chr, (byte) index));
                        }
                    }
                    c.getSession().write(PetPacket.updatePet(chr, pet, false, chr.getPetLoot()));
                    chr.getMap().broadcastMessage(c.getPlayer(), PetPacket.commandResponse(chr.getId(), (byte) 1, (byte) index, true), true);
                } else {
                    if (gainCloseness) {
                        int newCloseness = pet.getCloseness() - 1;
                        if (newCloseness < 0) {
                            newCloseness = 0;
                        }
                        pet.setCloseness(newCloseness);
                        if (newCloseness < GameConstants.getClosenessNeededForLevel(pet.getLevel())) {
                            pet.setLevel(pet.getLevel() - 1);
                        }
                    }
                    c.getSession().write(PetPacket.updatePet(chr, pet, false, chr.getPetLoot()));
                    chr.getMap().broadcastMessage(chr, PetPacket.commandResponse(chr.getId(), (byte) 1, (byte) chr.getPetIndex(pet), false), true);
                }
                InventoryManipulator.removeById(c, MapleInventoryType.USE, itemId, 1, true, false);
                return;
            }
        }
    }

    public static void MovePet(ReadingMaple rh, MapleCharacter chr) {
	long slot = rh.readLong();
	rh.skip(9); // Start POS
        String originalrh = rh.toString();
	List<LifeMovementFragment> res = MovementParse.parseMovement(rh);
        if (chr.getPet(slot) != null) {
            if (res != null && res.size() != 0) { // map crash hack
                int petId = chr.getPet(slot).getUniqueId();
                if (slot == -1) {
                    return;
                }
                chr.getPet(slot).updatePosition(res);
                chr.getMap().broadcastMessage(chr, PetPacket.movePet(chr.getId(), petId, (byte) slot, res), false);
            } else {
                String t = "펫무브 packet : " + originalrh;
            }
        }
    }
    
    public static void RegisterPetBuff(ReadingMaple slea, MapleCharacter chr) {
        int petId = slea.readInt();
        int skillId = slea.readInt();
        int mode = slea.readByte();
        MaplePet pet = chr.getPet(petId);
        
        if (pet == null) {
            chr.dropMessage(1, "펫을 찾는데 실패하였습니다! 운영진에게 제보해주시기 바랍니다.");
            chr.ea();
            return;
        }
        
        if (mode == 0) { //register
            pet.setBuffSkillId(skillId);
        } else { //remove
            pet.setBuffSkillId(0);
        }
        chr.getClient().send(PetPacket.updatePet(chr, pet, false, chr.getPetLoot()));
    }    
}
