package handler.channel;

import constants.GameConstants;
import client.*;
import client.MapleCharacter;
import client.items.IEquip.ScrollResult;
import client.items.*;
import client.skills.InnerAbillity;
import client.skills.InnerSkillValueHolder;
import client.skills.SkillEntry;
import client.skills.SkillFactory;
import client.stats.DiseaseStats;
import client.stats.PlayerStat;
import community.MaplePartyCharacter;
import constants.ServerConstants;
import constants.programs.RewardScroll;
import database.MYSQL;
import launch.world.WorldBroadcasting;
import packet.creators.CashPacket;
import packet.creators.MainPacketCreator;
import packet.creators.PetPacket;
import packet.transfer.read.ReadingMaple;
import scripting.NPCScriptManager;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import server.items.StructRewardItem;
import server.life.MapleLifeProvider;
import server.life.MapleMonster;
import server.maps.*;
import server.quest.MapleQuest;
import server.shops.MapleShopFactory;
import tools.CurrentTime;
import tools.Pair;
import tools.RandomStream.Randomizer;
import java.awt.Point;
import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;
import java.util.Map.Entry;
import packet.creators.PlayerShopPacket;
import packet.creators.SoulWeaponPacket;
import packet.creators.UIPacket;
import packet.skills.ZeroSkill;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.life.MobSkillFactory;
import server.life.OverrideMonsterStats;
import server.shops.HiredMerchant;
import server.shops.IMapleCharacterShop;
import tools.HexTool;

public class InventoryHandler {

    static boolean success = false;
    static int blackcube = 0;

    public static int potential(int level, int a, boolean top, int itemId) {
        ItemInformation ii = ItemInformation.getInstance();
        int option = 0;
        do {
            option = top ? ii.getPotentialOptionID(Math.min(5, Randomizer.nextInt(200) < 1 ? Randomizer.rand(level - Randomizer.rand(-2, -(a + 1)), level + 1) : level + 1), GameConstants.getOptionType(itemId)) : ii.getPotentialOptionID(Math.min(5, Randomizer.nextInt(200) < 1 ? Randomizer.rand(level - Randomizer.rand(-2, -(a + 1)), level + 1) : level + 1), GameConstants.getOptionType(itemId));
        } while((option >= 12000 && option < 13000) || (option >= 22000 && option < 23000) || (option >= 32000 && option < 33000) || (option >= 42000 && option < 43000));
        return option;
    }

    public static int potentialA(int level, int a, boolean top, int itemId) {
        ItemInformation ii = ItemInformation.getInstance();
        int option = 0;
        do {
            option = ii.getPotentialOptionID(Math.min(5, Randomizer.nextInt(200) < 1 ? Randomizer.rand(level - Randomizer.rand(-2, -(a + 1)), level + 1) : level + 1), GameConstants.getOptionType(itemId));
        } while(option < 12001 || (option > 12801 && option < 22001) || (option > 22802 && option < 32001) || (option > 32802 && option < 42001) || option > 42802);
        return option;
    }

    public static void ItemMove(ReadingMaple rh, MapleClient c) {
        rh.skip(4);
        MapleInventoryType type = MapleInventoryType.getByType(rh.readByte());
        short src = rh.readShort();
        short dst = rh.readShort();
        short quantity = rh.readShort();
        if (src < 0 && dst > 0) {
            InventoryManipulator.unequip(c, src, dst);
        } else if (dst < 0) {
            InventoryManipulator.equip(c, src, dst);
        } else if (dst == 0) {
            InventoryManipulator.drop(c, type, src, quantity);
        } else {
            InventoryManipulator.move(c, type, src, dst);
        }
    }

    public static void ItemSort(final ReadingMaple rh, final MapleClient c) {
        rh.readInt();
        final MapleInventoryType pInvType = MapleInventoryType.getByType(rh.readByte());
        if (pInvType == MapleInventoryType.UNDEFINED) {
            c.getPlayer().ea();
            return;
        }
        final MapleInventory pInv = c.getPlayer().getInventory(pInvType); //Mode should correspond with MapleInventoryType

        boolean sorted = false;

        while (!sorted) {
            final byte freeSlot = (byte) pInv.getNextFreeSlot();
            if (freeSlot != -1) {
                byte itemSlot = -1;
                for (byte i = (byte) (freeSlot + 1); i <= pInv.getSlotLimit(); i++) {
                    if (pInv.getItem(i) != null) {
                        itemSlot = i;
                        break;
                    }
                }
                if (itemSlot > 0) {
                    InventoryManipulator.move(c, pInvType, itemSlot, freeSlot);
                } else {
                    sorted = true;
                }
            } else {
                sorted = true;
            }
        }
        c.getSession().write(MainPacketCreator.finishedSort(pInvType.getType()));

    }

    public static void ItemGather(final ReadingMaple rh, final MapleClient c) {
        // [41 00] [E5 1D 55 00] [01]
        // [32 00] [01] [01] // Sent after

        rh.readInt();
        final byte mode = rh.readByte();
        final MapleInventoryType invType = MapleInventoryType.getByType(mode);
        MapleInventory Inv = c.getPlayer().getInventory(invType);

        final List<IItem> itemMap = new LinkedList<IItem>();
        for (IItem item : Inv.list()) {
            itemMap.add(item.copy()); // clone all  items T___T.

        }
        for (IItem itemStats : itemMap) {
            InventoryManipulator.removeById(c, invType, itemStats.getItemId(), itemStats.getQuantity(), true, false);
        }

        final List<IItem> sortedItems = sortItems(itemMap);
        for (IItem item : sortedItems) {
            InventoryManipulator.addFromDrop(c, item, false);
        }
        c.getSession().write(MainPacketCreator.finishedGather(mode));
        c.getPlayer().ea();
        itemMap.clear();
        sortedItems.clear();
    }

    private static List<IItem> sortItems(final List<IItem> passedMap) {
        final List<Integer> itemIds = new ArrayList<Integer>(); // empty list.

        for (IItem item : passedMap) {
            itemIds.add(item.getItemId()); // adds all item ids to the empty list to be sorted.

        }
        Collections.sort(itemIds); // sorts item ids

        final List<IItem> sortedList = new LinkedList<IItem>(); // ordered list pl0x <3.

        for (Integer val : itemIds) {
            for (IItem item : passedMap) {
                if (val == item.getItemId()) { // Goes through every index and finds the first value that matches

                    sortedList.add(item);
                    passedMap.remove(item);
                    break;
                }
            }
        }
        return sortedList;
    }

    public static void UseRewardItem(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        byte slot = (byte) rh.readShort();
        int itemId = rh.readInt();
        IItem toUse = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(slot);
        receiveReward(slot, itemId, toUse, c);
        c.getSession().write(MainPacketCreator.resetActions());
    }
    public static void receiveReward(byte slot, int itemId, IItem toUse, MapleClient c) {
        MapleCharacter chr = c.getPlayer();
        if (itemId == 2022309) {
            int[] rewardItems = {2000000, 2000001, 2000002, 2000003, 2000004, 2000005, 2000006, 2001000, 2001001, 2001002, 2001515, 2001516, 2001517, 2001518, 2001519, 2001520, 2001521, 2001522, 2001523, 2001524, 2001525, 2001526, 2001527, 2001528, 2001529, 2001530, 2001531, 2001532, 2001533, 2001534, 2001535, 2020000, 2020001, 2020002, 2020003, 2020004, 2020005, 2020006, 2020007, 2020008, 2020009, 2020010, 2020011, 4170000, 4170001, 4170002, 4170003, 4170004, 4170005, 4170006, 4170007, 4170009};
            int rand = Randomizer.rand(1, 100);
            String effect = "Effect/BasicEff/FindPrize/Success";
            if (rand > 20 && rand <= 70) {
                int itemid = rewardItems[Randomizer.rand(0, rewardItems.length - 1)];
                InventoryManipulator.addById(c, itemid, (short) (itemid > 4000000 ? 1 : 10));
            } else if (rand > 10 && rand <= 20) {
                InventoryManipulator.addById(c, RewardScroll.getInstance().getRewardScroll(), (short) 1);
            } else if (rand <= 10) {
                InventoryManipulator.addById(c, 4001163, (short) 1);
            } else {
                InventoryManipulator.addById(c, 4001519, (short) 1);
                effect = "Effect/BasicEff/FindPrize/Failure";
            }
            InventoryManipulator.removeById(c, MapleInventoryType.USE, 2022309, 1, false, false);

            c.getSession().write(MainPacketCreator.showRewardItemAnimation(2022309, effect));
            chr.getMap().broadcastMessage(chr, MainPacketCreator.showRewardItemAnimation(2022309, effect, chr.getId()), false);
        } else if (toUse != null && toUse.getQuantity() >= 1 && toUse.getItemId() == itemId) {
            ItemInformation ii = ItemInformation.getInstance();
            Pair<Integer, List<StructRewardItem>> rewards = ii.getRewardItem(itemId);

            if (rewards != null) {
                for (StructRewardItem reward : rewards.getRight()) {
                    if (Randomizer.nextInt(rewards.getLeft()) < reward.prob) { // Total prob
                        if (chr.getInventory(GameConstants.getInventoryType(reward.itemid)).getNextFreeSlot() > -1) {
                            if (GameConstants.getInventoryType(reward.itemid) == MapleInventoryType.EQUIP) {
                                IItem item = ii.getEquipById(reward.itemid);
                                if (reward.period != -1) {
                                    item.setExpiration(System.currentTimeMillis() + (reward.period * 60 * 60 * 10));
                                }
                                if (reward.statGrade > 0) {
                                    ((Equip) item).setStr((short) (11 - reward.statGrade));
                                    ((Equip) item).setDex((short) (11 - reward.statGrade));
                                    ((Equip) item).setInt((short) (11 - reward.statGrade));
                                    ((Equip) item).setLuk((short) (11 - reward.statGrade));
                                }
                                item.setGMLog(CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "에서 호출된 " + itemId + " 아이템에서 랜덤 보상으로 얻은 아이템.");
                                InventoryManipulator.addbyItem(c, item);
                            } else {
                                InventoryManipulator.addById(c, reward.itemid, reward.quantity, null, null, 0, CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "에서 호출된 " + itemId + " 아이템에서 랜덤 보상으로 얻은 아이템.");
                            }

                            InventoryManipulator.removeById(c, GameConstants.getInventoryType(itemId), itemId, 1, false, false);

                            c.getSession().write(MainPacketCreator.showRewardItemAnimation(reward.itemid, reward.effect));
                            chr.getMap().broadcastMessage(chr, MainPacketCreator.showRewardItemAnimation(reward.itemid, reward.effect, chr.getId()), false);
                            break;
                        } else {
                            chr.dropMessage(6, "인벤토리 공간이 부족합니다.");
                        }
                    }
                }
            }
        }

    }

    public static void UseItem(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        if (!chr.isAlive() || chr.hasDisease(DiseaseStats.POTION)) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        rh.skip(4);
        byte slot = (byte) rh.readShort();
        int itemId = rh.readInt();
        IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem(slot);

        if (toUse == null || toUse.getQuantity() < 1 || toUse.getItemId() != itemId) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        if (!FieldLimitType.PotionUse.check(chr.getMap().getFieldLimit())) {
            if (ItemInformation.getInstance().getItemEffect(toUse.getItemId()).applyTo(chr)) {
                InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
            }
        } else {
            c.getSession().write(MainPacketCreator.resetActions());
        }
    }
    
    public static Equip 환생의불꽃(Equip eq) {
        Equip 장비 = (Equip)ItemInformation.getInstance().getEquipById(eq.getItemId());
        if (Randomizer.rand(1,2) == 1) {
            eq.setStr((short)장비.getStr());
        } else {
            eq.setStr((short)(장비.getStr() + (Randomizer.nextInt(20) + 1)));
        }
        if (Randomizer.rand(1,2) == 1) {
            eq.setDex((short)장비.getDex());
        } else {
            eq.setDex((short)(장비.getDex() + (Randomizer.nextInt(20) + 1)));
        }        
        if (Randomizer.rand(1,2) == 1) {
            eq.setInt((short)장비.getInt());
        } else {
            eq.setInt((short)(장비.getInt() + (Randomizer.nextInt(20) + 1)));
        }      
        if (Randomizer.rand(1,2) == 1) {
            eq.setLuk((short)장비.getLuk());
        } else {
            eq.setLuk((short)(장비.getLuk() + (Randomizer.nextInt(20) + 1)));
        }      
        if (Randomizer.rand(1,2) == 1) {
            if (GameConstants.isWeapon(eq.getItemId())) {
                eq.setWatk((short)장비.getWatk());
            } else {
                eq.setWatk((short)장비.getWatk());
            }
        } else {
            eq.setWatk((short)(장비.getWatk() + (Randomizer.nextInt((GameConstants.isWeapon(eq.getItemId()) ? 10 : 5)) + 1)));
        }   
        if (Randomizer.rand(1,2) == 1) {
            if (GameConstants.isWeapon(eq.getItemId())) {
                eq.setMatk((short)장비.getMatk());
            } else {
                eq.setMatk((short)장비.getMatk());
            }
        } else {
            eq.setMatk((short)(장비.getMatk() + (Randomizer.nextInt((GameConstants.isWeapon(eq.getItemId()) ? 10 : 5)) + 1)));
        }      
        if (Randomizer.rand(1,2) == 1) {
            eq.setWdef((short)장비.getWdef());
        } else {
            eq.setWdef((short)(장비.getWdef() + (Randomizer.nextInt(10) + 1)));
        }  
        if (Randomizer.rand(1,2) == 1) {
            eq.setMdef((short)장비.getMdef());
        } else {
            eq.setMdef((short)(장비.getMdef() + (Randomizer.nextInt(10) + 1)));
        }      
        if (!GameConstants.isWeapon(eq.getItemId())) {
            if (Randomizer.rand(1,2) == 1) {
                eq.setAllStatP((byte)0);
            } else {
                eq.setAllStatP((byte)(Randomizer.nextInt(4) + 1));
            }
        }
        if (Randomizer.rand(1,2) == 1) {
            byte downlevel = (byte)(Randomizer.nextInt(30) + 1);
            if (downlevel > ItemInformation.getInstance().getReqLevel(eq.getItemId())) {
                eq.setDownLevel((byte)(ItemInformation.getInstance().getReqLevel(eq.getItemId()) - 1));
            } else {
                eq.setDownLevel((byte)downlevel);
            }
        } else {
            eq.setDownLevel((byte)0);
        }
        if (GameConstants.isWeapon(eq.getItemId())) {
            if (Randomizer.rand(1,2) == 1) {
                eq.setBossDamage((byte)Randomizer.nextInt(4));
            } else {
                eq.setBossDamage((byte)0);
            }
            if (Randomizer.rand(1,2) == 1) {
                eq.setAllDamageP((byte)Randomizer.nextInt(4));
            } else {
                eq.setAllDamageP((byte)0);
            }
            if (Randomizer.rand(1,2) == 1) {
                eq.setIgnoreWdef((short)Randomizer.nextInt(4));
            } else {
                eq.setIgnoreWdef((short)0);
            }
        }
        eq.setOwner(Randomizer.rand(1, 2) == 1 ? "어두운 빛" : "신성한 빛");
        return eq;
    }

    public static void UseReturnScroll(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        if (!chr.isAlive()) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        rh.skip(4);
        byte slot = (byte) rh.readShort();
        int itemId = rh.readInt();
        IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem(slot);

        if (toUse == null || toUse.getQuantity() < 1 || toUse.getItemId() != itemId) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        if (!FieldLimitType.PotionUse.check(chr.getMap().getFieldLimit())) {
            if (ItemInformation.getInstance().getItemEffect(toUse.getItemId()).applyReturnScroll(chr)) {
                InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
            } else {
                c.getSession().write(MainPacketCreator.resetActions());
            }
        } else {
            c.getSession().write(MainPacketCreator.resetActions());
        }
    }

    public static boolean UseUpgradeScroll(byte slot, byte dst, MapleClient c, MapleCharacter chr) {
        boolean whiteScroll = false;
        boolean recovery = false;

        ItemInformation ii = ItemInformation.getInstance();

        IEquip toScroll;
        IEquip zeroScroll = null;
        IEquip check = null;
        if (dst < 0) {
            toScroll = (IEquip) chr.getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
            if (GameConstants.isBetaWeapon(toScroll.getItemId())) {
                check = (IEquip) toScroll.copy();
                zeroScroll = (IEquip) chr.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -11);
            }
        } else { // legendary spirit
            toScroll = (IEquip) chr.getInventory(MapleInventoryType.EQUIP).getItem(dst);
        }
        if (toScroll == null) {
            return false;
        }
        byte oldLevel = toScroll.getLevel();
        byte oldEnhance = toScroll.getEnhance();
        byte oldState = toScroll.getState();
        int oldFlag = toScroll.getFlag();
        byte oldSlots = toScroll.getUpgradeSlots();

        IItem scroll = chr.getInventory(MapleInventoryType.USE).getItem(slot);
        if (scroll == null) {
            scroll = chr.getInventory(MapleInventoryType.CASH).getItem(slot);
        } else if (!GameConstants.isSpecialScroll(scroll.getItemId())
                && !GameConstants.isCleanSlate(scroll.getItemId())
                && !GameConstants.isEquipScroll(scroll.getItemId())
                && !GameConstants.isPotentialScroll(scroll.getItemId())
                && !GameConstants.isRebirhFireScroll(scroll.getItemId())
                && //  !GameConstants.isProstyScroll(scroll.getItemId()) && 
                (!GameConstants.isEpicScroll(scroll.getItemId()))
                && (scroll.getItemId() / 10000 != 204)) {
            scroll = chr.getInventory(MapleInventoryType.CASH).getItem(slot);
        }
        if (scroll == null) {
            chr.dropMessage(1, "현재 준비중인 시스템입니다.(1)");
            c.getSession().write(MainPacketCreator.getInventoryFull());
            return false;
        }
        if (!GameConstants.isSpecialScroll(scroll.getItemId())
                && !GameConstants.isCleanSlate(scroll.getItemId())
                && !GameConstants.isEquipScroll(scroll.getItemId())
                && scroll.getItemId() != 2049360 && scroll.getItemId() != 2049361
                && !GameConstants.isPotentialScroll(scroll.getItemId())
                && (!GameConstants.isEpicScroll(scroll.getItemId()))) {
            /* 1. 프로텍트, 세이프티 등 특수 주문서가 아니고, 
             * 2. 백의 주문서가 아니고, 
             * 3. 장비강화 주문서가 아니고, 
             * 4. 잠재부여 주문서가 아니고, 
             * 5. 안드로이드 기계심장이 아니고
             * 6. 에픽 잠재 부여 주문서가 아니고 마법화살이 아닐때
             * 
             */
            
            /* 보조무기 */
            int[] itemId = {1352100, 1352101, 1352102, 1352103, 1352104, 1352105, 1352106, 1352107, 1352000, 1352001, 1352002, 1352003, 1352004, 1352005, 1352006, 1352007, 1099000, 1099001, 1099002, 1099003, 1099004, 1098000, 1098001, 1098002, 1098003, 1352500, 1352501, 1352502, 1352503, 1352504, 1352600, 1352601, 1352602, 1352603, 1352604, 1672020, 1352400, 1352401, 1352402, 1352403, 1352200, 1352201, 1352202, 1352203, 1352204, 1352205, 1352210, 1352211, 1352212, 1352213, 1352214, 1352215, 1352220, 1352221, 1352222, 1352223, 1352224, 1352225, 1352230, 1352231, 1352232, 1352233, 1352234, 1352235, 1352240, 1352241, 1352242, 1352243, 1352244, 1352245, 1352250, 1352251, 1352252, 1352253, 1352254, 1352255, 1352260, 1352261, 1352262, 1352263, 1352264, 1352265, 1352270, 1352271, 1352272, 1352273, 1352274, 1352275, 1352280, 1352281, 1352282, 1352283, 1352284, 1352285, 1352290, 1352291, 1352292, 1352293, 1352294, 1352295, 1352404, 1352405, 1352505, 1352605, 1352700, 1352701, 1352702, 1352703, 1352704, 1352705, 1352900, 1352901, 1352902, 1352903, 1352904, 1352905, 1352910, 1352911, 1352912, 1352913, 1352914, 1352915, 1352920, 1352921, 1352922, 1352923, 1352924, 1352925, 1352926, 1352927, 1352930, 1352931, 1352932, 1352933, 1352934, 1352940, 1352941, 1352942, 1352943, 1352944, 1352950, 1352951, 1352952, 1352953, 1352954, 1352955, 1352960, 1352961, 1352962, 1352963, 1352964, 1352965, 1352970, 1352971, 1352972, 1352973, 1352974, 1353000, 1353001, 1353002, 1353003, 1353004, 1353005};
            for (int i = 0; i < itemId.length; i++) {
                if (toScroll.getItemId() == itemId[i]) {
                    if (toScroll.getUpgradeSlots() == 0) {
                        chr.send(MainPacketCreator.getInventoryFull());
                    }
                    chr.dropMessage(1, "주문서를 사용할 수 없는 아이템입니다.");
                    return false;
                }
            }
            if (toScroll.getUpgradeSlots() < 1 && (toScroll.getItemId() / 1000) != 1352 /*&& (toScroll.getItemId() / 10000) != 167*/ && toScroll.getUpgradeSlots() < ii.getUpgradeScrollUseSlot(scroll.getItemId()) && (toScroll.getItemId() / 100) != 1099 && (toScroll.getItemId() / 100) != 1098) {
                chr.dropMessage(1, "주문서를 사용할 수 없는 아이템입니다.");
                c.getSession().write(MainPacketCreator.getInventoryFull());
                return false;
            }
        } else if (GameConstants.isEquipScroll(scroll.getItemId())) {
            /*
             * 1. 장비강화 주문서일때,
             * 장비 업횟수가 1 이상 남아있거나,
             * 장비강화 횟수가 15강 이상이거나,
             * 캐시일때
             * 
             */
            if (toScroll.getUpgradeSlots() >= 1 || toScroll.getEnhance() >= 15 || ii.isCash(toScroll.getItemId())) {
                c.getSession().write(MainPacketCreator.getInventoryFull());
                chr.dropMessage(1, "RETURN 2");
                return false;
            }
        } else if (GameConstants.isPotentialScroll(scroll.getItemId())) {
            /* 1. 잠재 부여 주문서일때,
             * 이미 잠재가 붙어있거나,
             * 업횟수가 0인 동시에 0강상태이거나, 마법 화살이나 기계심장이 아닐때
             * 
             */
            if (toScroll.getState() >= 1 || ((toScroll.getLevel() == 0 && toScroll.getUpgradeSlots() == 0) && ((toScroll.getItemId() / 1000) != 1352 && (toScroll.getItemId() / 10000) != 167 && (toScroll.getItemId() / 100) != 1099 && (toScroll.getItemId() / 100) != 1098)) || ii.isCash(toScroll.getItemId())) {
                c.getSession().write(MainPacketCreator.getInventoryFull());
                chr.dropMessage(1, "RETURN 3");
                return false;
            }
        }
        if (!GameConstants.canScroll(toScroll.getItemId()) && !GameConstants.isChaosScroll(toScroll.getItemId())) {
            /* 주문서를 바를 수 없는 템 (메카닉템이거나, 에반드래곤템이거나, 몬스터라이딩 아이템)
             * 이면서 동시에 혼돈의 주문서일때
             */
            c.getSession().write(MainPacketCreator.getInventoryFull());
            chr.dropMessage(1, "RETURN 4");
            return false;
        }
        if ((GameConstants.isCleanSlate(scroll.getItemId()) || GameConstants.isTablet(scroll.getItemId()) || GameConstants.isChaosScroll(scroll.getItemId())) && (ii.isCash(toScroll.getItemId()))) {
            c.getSession().write(MainPacketCreator.getInventoryFull());
            chr.dropMessage(1, "RETURN 5");
            return false;
        }
        if (GameConstants.isTablet(scroll.getItemId()) && toScroll.getDurability() < 0) { //not a durability item
            //      c.getSession().write(MainPacketCreator.getInventoryFull());
            //      chr.dropMessage(1, "RETURN 6");
            //      return false;
        } else if (!GameConstants.isTablet(scroll.getItemId()) && toScroll.getDurability() >= 0) {
            c.getSession().write(MainPacketCreator.getInventoryFull());
            chr.dropMessage(1, "RETURN 7");
            return false;
        }

        IItem wscroll = null;

        // Anti cheat and validation
        List<Integer> scrollReqs = ii.getScrollReqs(scroll.getItemId());
        if (scrollReqs.size() > 0 && !scrollReqs.contains(toScroll.getItemId())) {
            c.getSession().write(MainPacketCreator.getInventoryFull());
            chr.dropMessage(1, "RETURN 8");
            return false;
        }

        if (whiteScroll) { //요것?
            wscroll = chr.getInventory(MapleInventoryType.USE).findById(2340000);
            if (wscroll == null) {
                whiteScroll = false;
            }
        }
        if (scroll.getItemId() == 2049115 && toScroll.getItemId() != 1003068) {
            //ravana
            chr.dropMessage(1, "RETURN 9");
            return false;
        }
        if (GameConstants.isTablet(scroll.getItemId())) {
            switch (scroll.getItemId() % 1000 / 100) {
                case 0: //1h
                    if (GameConstants.isTwoHanded(toScroll.getItemId()) || !GameConstants.isWeapon(toScroll.getItemId())) {
                        chr.dropMessage(1, "RETURN 10");
                        return false;
                    }
                    break;
                case 1: //2h
                    if (!GameConstants.isTwoHanded(toScroll.getItemId()) || !GameConstants.isWeapon(toScroll.getItemId())) {
                        chr.dropMessage(1, "RETURN 11");
                        return false;
                    }
                    break;
                case 2: //armor
                    if (GameConstants.isAccessory(toScroll.getItemId()) || GameConstants.isWeapon(toScroll.getItemId())) {
                        chr.dropMessage(1, "RETURN 12");
                        return false;
                    }
                    break;
                case 3: //accessory
                    if (!GameConstants.isAccessory(toScroll.getItemId()) || GameConstants.isWeapon(toScroll.getItemId())) {
                        chr.dropMessage(1, "RETURN 13");
                        return false;
                    }
                    break;
            }
        } else if (!GameConstants.isAccessoryScroll(scroll.getItemId()) && !GameConstants.isChaosScroll(scroll.getItemId()) && !GameConstants.isCleanSlate(scroll.getItemId()) && !GameConstants.isEquipScroll(scroll.getItemId()) && !GameConstants.isPotentialScroll(scroll.getItemId()) && !GameConstants.isEightRockScroll(scroll.getItemId()) && !GameConstants.isEpicScroll(scroll.getItemId()) && !GameConstants.isSpecialScroll(scroll.getItemId()) && scroll.getItemId() != 2049360 && scroll.getItemId() != 2049361 && !GameConstants.isRebirhFireScroll(scroll.getItemId()) && !GameConstants.isProstyScroll(scroll.getItemId())) {
            if (!ii.canScroll(scroll.getItemId(), toScroll.getItemId()) && !ii.notReturn(toScroll.getItemId())) {
                chr.dropMessage(1, "10주년 주문서는 3월 중순에 오픈됩니다.");
                return false;
            }
        }
        if (GameConstants.isAccessoryScroll(scroll.getItemId()) && !GameConstants.isAccessory(toScroll.getItemId())) {
            chr.dropMessage(1, "RETURN 15");
            return false;
        }
        if (scroll.getQuantity() <= 0) {
            chr.dropMessage(1, "RETURN 16");
            return false;
        }

        // Scroll Success/ Failure/ Curse
        IEquip scrolled = (IEquip) ii.scrollEquipWithId(toScroll, scroll, whiteScroll, chr);
        ScrollResult scrollSuccess;
        if (scrolled == null) {
            scrollSuccess = IEquip.ScrollResult.CURSE;
        } else if (scroll.getItemId() == 5064200 || GameConstants.isRebirhFireScroll(scroll.getItemId())) {
            scrollSuccess = IEquip.ScrollResult.SUCCESS;
        } else if (scrolled.getLevel() > oldLevel || scrolled.getEnhance() > oldEnhance || scrolled.getState() > oldState || scrolled.getFlag() > oldFlag) {
            scrollSuccess = IEquip.ScrollResult.SUCCESS;
        } else if ((GameConstants.isCleanSlate(scroll.getItemId()) && scrolled.getUpgradeSlots() > oldSlots)) {
            scrollSuccess = IEquip.ScrollResult.SUCCESS;
        } else {
            scrollSuccess = IEquip.ScrollResult.FAIL;
            if (ItemFlag.RECOVERY.check(toScroll.getFlag())) {
                recovery = true;
            }
        }
        if (scrolled == null) {
            if (GameConstants.isZeroWeapon(toScroll.getItemId())) {
                resetZeroWeapon(chr);
                InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, scroll.getPosition(), (short) 1, false, false);
                chr.send(MainPacketCreator.resetActions());
                scrollSuccess = IEquip.ScrollResult.FAIL;
                chr.getMap().broadcastMessage(chr, MainPacketCreator.getScrollEffect(c.getPlayer().getId(), scrollSuccess, scroll.getItemId(), toScroll.getItemId()), true);
                return false;
            }
        }
        /* Update */
        if (recovery) {
            chr.dropMessage(5, "주문서의 효과로 사용된 주문서가 차감되지 않았습니다.");
        } else {
            chr.getInventory(MapleInventoryType.USE).removeItem(scroll.getPosition(), (short) 1, false);
        }
        if (ItemFlag.RECOVERY.check(toScroll.getFlag())) {
            toScroll.setFlag((short) (toScroll.getFlag() - ItemFlag.RECOVERY.getValue()));
        }

        if (ItemFlag.SAFETY.check(toScroll.getFlag())) {
            toScroll.setFlag((short) (toScroll.getFlag() - ItemFlag.SAFETY.getValue()));
        }

        if (ItemFlag.PROTECT.check(toScroll.getFlag())) {
            toScroll.setFlag((short) (toScroll.getFlag() - ItemFlag.PROTECT.getValue()));
        }
        if (ItemFlag.LUKCYDAY.check(toScroll.getFlag())) {
            toScroll.setFlag((short) (toScroll.getFlag() - ItemFlag.LUKCYDAY.getValue()));
        }
        final Equip zeroEquip = (Equip) zeroScroll;
        final Equip srcEquip = (Equip) toScroll;
        if (zeroScroll != null) {
            zeroEquip.setAcc((short) (zeroEquip.getAcc() + srcEquip.getAcc() - check.getAcc()));
            zeroEquip.setAllDamageP((byte) (zeroEquip.getAllDamageP() + srcEquip.getAllDamageP() - check.getAllDamageP()));
            zeroEquip.setAllStatP((byte) (zeroEquip.getAllStatP() + srcEquip.getAllStatP() - check.getAllStatP()));
            zeroEquip.setAmazing(srcEquip.isAmazing());
            zeroEquip.setAvoid((short) (zeroEquip.getAvoid() + srcEquip.getAvoid() - check.getAvoid()));
            zeroEquip.setBossDamage((byte) (zeroEquip.getBossDamage() + srcEquip.getBossDamage() - check.getBossDamage()));
            zeroEquip.setDex((short) (zeroEquip.getDex() + srcEquip.getDex() - check.getDex()));
            zeroEquip.setDownLevel((short) (zeroEquip.getDownLevel() + srcEquip.getDownLevel() - check.getDownLevel()));
            zeroEquip.setDurability((int) (zeroEquip.getDurability() + srcEquip.getDurability() - check.getDurability()));
            zeroEquip.setEnhance((byte) (zeroEquip.getEnhance() + srcEquip.getEnhance() - check.getEnhance()));
            zeroEquip.setFire((byte) (zeroEquip.getFire() + srcEquip.getFire() - check.getFire()));
            zeroEquip.setFlag(srcEquip.getFlag());
            zeroEquip.setHands((short) (zeroEquip.getHands() + srcEquip.getHands() - check.getHands()));
            zeroEquip.setHp((short) (zeroEquip.getHp() + srcEquip.getHp() - check.getHp()));
            zeroEquip.setHpR((short) (zeroEquip.getHpR() + srcEquip.getHpR() - check.getHpR()));
            zeroEquip.setIgnoreWdef((short) (zeroEquip.getIgnoreWdef() + srcEquip.getIgnoreWdef() - check.getIgnoreWdef()));
            zeroEquip.setInt((short) (zeroEquip.getInt() + srcEquip.getInt() - check.getInt()));
            zeroEquip.setItemEXP((int) (zeroEquip.getItemEXP() + srcEquip.getItemEXP() - check.getItemEXP()));
            zeroEquip.setItemLevel((byte) (zeroEquip.getItemLevel() + srcEquip.getItemLevel() - check.getItemLevel()));
            zeroEquip.setJob(srcEquip.getJob());
            zeroEquip.setJump((short) (zeroEquip.getJump() + srcEquip.getJump() - check.getJump()));
            zeroEquip.setLevel((byte) (zeroEquip.getLevel() + srcEquip.getLevel() - check.getLevel()));
            zeroEquip.setLines(srcEquip.getLines());
            zeroEquip.setLuk((short) (zeroEquip.getLuk() + srcEquip.getLuk() - check.getLuk()));
            zeroEquip.setMatk((short) (zeroEquip.getMatk() + srcEquip.getMatk() - check.getMatk()));
            zeroEquip.setMdef((short) (zeroEquip.getMdef() + srcEquip.getMdef() - check.getMdef()));
            zeroEquip.setMp((short) (zeroEquip.getMp() + srcEquip.getMp() - check.getMp()));
            zeroEquip.setMpR((short) (zeroEquip.getMpR() + srcEquip.getMpR() - check.getMpR()));
            zeroEquip.setPotential1(srcEquip.getPotential1());
            zeroEquip.setPotential2(srcEquip.getPotential2());
            zeroEquip.setPotential3(srcEquip.getPotential3());
            zeroEquip.setPotential4(srcEquip.getPotential4());
            zeroEquip.setPotential5(srcEquip.getPotential5());
            zeroEquip.setPotential6(srcEquip.getPotential6());
            zeroEquip.setPotential7(srcEquip.getPotential7());
            zeroEquip.setSoulEnchanter(srcEquip.getSoulEnchanter());
            zeroEquip.setSoulName(srcEquip.getSoulName());
            zeroEquip.setSoulPotential(srcEquip.getSoulPotential());
            zeroEquip.setSoulSkill(srcEquip.getSoulSkill());
            zeroEquip.setSpeed((short) (zeroEquip.getSpeed() + srcEquip.getSpeed() - check.getSpeed()));
            zeroEquip.setStarForce(srcEquip.getStarForce());
            zeroEquip.setState(srcEquip.getState());
            zeroEquip.setStr((short) (zeroEquip.getStr() + srcEquip.getStr() - check.getStr()));
            zeroEquip.setUpgradeSlots(srcEquip.getUpgradeSlots());
            zeroEquip.setViciousHammer(srcEquip.getViciousHammer());
            zeroEquip.setWatk((short) (zeroEquip.getWatk() + srcEquip.getWatk() - check.getWatk()));
            zeroEquip.setWdef((short) (zeroEquip.getWdef() + srcEquip.getWdef() - check.getWdef()));
            zeroEquip.setanvil(srcEquip.getanvil());
            zeroScroll = zeroEquip;
        }
        if (scrollSuccess == IEquip.ScrollResult.CURSE) {
            c.getSession().write(MainPacketCreator.scrolledItem(scroll, toScroll, true, false));
            if (dst < 0) {
                chr.getInventory(MapleInventoryType.EQUIPPED).removeItem(toScroll.getPosition());
            } else {
                chr.getInventory(MapleInventoryType.EQUIP).removeItem(toScroll.getPosition());
            }
        } else {
            c.getSession().write(MainPacketCreator.scrolledItem(scroll, scrolled, false, false));
            if (zeroScroll != null) {
                c.getSession().write(MainPacketCreator.scrolledItem(scroll, zeroScroll, false, false));
            }
        }
        chr.getMap().broadcastMessage(chr, MainPacketCreator.getScrollEffect(c.getPlayer().getId(), scrollSuccess, scroll.getItemId(), toScroll.getItemId()), true);

        // equipped item was scrolled and changed
        if (dst < 0 && (scrollSuccess == IEquip.ScrollResult.SUCCESS || scrollSuccess == IEquip.ScrollResult.CURSE)) {
            chr.equipChanged();
        }
        return true;
    }

    public static void UseSkillBook(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        rh.skip(4);
        byte slot = (byte) rh.readShort();
        int itemId = rh.readInt();
        IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem(slot);

        if (toUse == null || toUse.getQuantity() < 1 || toUse.getItemId() != itemId) {
            return;
        }
        Map<String, Integer> skilldata = ItemInformation.getInstance().getSkillStats(toUse.getItemId());
        if (skilldata == null) { // Hacking or used an unknown item
            return;
        }
        boolean canuse = false, successs = false;
        int skill = 0, maxlevel = 0;

        int SuccessRate = skilldata.get("success");
        int ReqSkillLevel = skilldata.get("reqSkillLevel");
        int MasterLevel = skilldata.get("masterLevel");

        byte i = 0;
        Integer CurrentLoopedSkillId;
        for (;;) {
            CurrentLoopedSkillId = skilldata.get("skillid" + i);
            i++;
            if (CurrentLoopedSkillId == null) {
                break; // End of data
            }
            if (Math.floor(CurrentLoopedSkillId / 100000) == chr.getJob() / 10) {
                ISkill CurrSkillData = SkillFactory.getSkill(CurrentLoopedSkillId);
                if (chr.getOriginSkillLevel(CurrSkillData) >= ReqSkillLevel && chr.getMasterLevel(CurrSkillData) < MasterLevel) {
                    canuse = true;
                    if (Randomizer.nextInt(99) <= SuccessRate && SuccessRate != 0) {
                        successs = true;
                        ISkill skill2 = CurrSkillData;
                        chr.changeSkillLevel(skill2, chr.getOriginSkillLevel(skill2), (byte) MasterLevel);
                    } else {
                        successs = false;
                    }
                    InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
                    break;
                } else { // Failed to meet skill requirements
                    canuse = false;
                }
            }
        }
        c.getPlayer().ea();
        if (!canuse) {
            c.getPlayer().message(5, "스킬북 또는 마스터리북을 사용할 수 없습니다.");
        } else if (!successs) {
            c.getPlayer().message(5, "스킬북 또는 마스터리북을 사용했지만 아무런 효과도 일어나지 않았습니다.");
        } else if (successs) {
            c.getPlayer().message(5, "스킬북 또는 마스터리북의 효과가 그대로 몸에 스며들었습니다.");
        }
    }

    public static void UseCatchItem(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        rh.skip(4);
        byte slot = (byte) rh.readShort();
        int itemid = rh.readInt();
        MapleMonster mob = chr.getMap().getMonsterByOid(rh.readInt());
        IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem(slot);

        if (toUse != null && toUse.getQuantity() > 0 && toUse.getItemId() == itemid && mob != null) {
            switch (itemid) {
                case 2270002: { // Characteristic Stone
                    MapleMap map = chr.getMap();

                    if (mob.getHp() <= mob.getMobMaxHp() / 2) {
                        map.broadcastMessage(MainPacketCreator.catchMonster(mob.getId(), (byte) 1));
                        map.killMonster(mob, chr, true, false, (byte) 0);
                        InventoryManipulator.removeById(c, MapleInventoryType.USE, itemid, 1, false, false);
                    } else {
                        map.broadcastMessage(MainPacketCreator.catchMonster(mob.getId(), (byte) 0));
                        chr.dropMessage(5, "몬스터가 너무 강해서 잡을 수 없습니다.");
                    }
                    break;
                }
                case 2270000: { // Pheromone Perfume
                    if (mob.getId() != 9300101) {
                        break;
                    }
                    MapleMap map = c.getPlayer().getMap();

                    map.broadcastMessage(MainPacketCreator.catchMonster(mob.getId(), (byte) 1));
                    map.killMonster(mob, chr, true, false, (byte) 0);
                    InventoryManipulator.addById(c, 1902000, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "에서 호출된 페로몬 향수로 얻은 아이템");
                    InventoryManipulator.removeById(c, MapleInventoryType.USE, itemid, 1, false, false);
                    break;
                }
                case 2270003: { // Cliff's Magic Cane
                    if (mob.getId() != 9500320) {
                        break;
                    }
                    MapleMap map = c.getPlayer().getMap();

                    if (mob.getHp() <= mob.getMobMaxHp() / 2) {
                        map.broadcastMessage(MainPacketCreator.catchMonster(mob.getId(), (byte) 1));
                        map.killMonster(mob, chr, true, false, (byte) 0);
                        InventoryManipulator.removeById(c, MapleInventoryType.USE, itemid, 1, false, false);
                    } else {
                        map.broadcastMessage(MainPacketCreator.catchMonster(mob.getId(), (byte) 0));
                        chr.dropMessage(5, "몬스터가 너무 강해서 잡을 수 없습니다.");
                    }
                    break;
                }
            }
        }
        c.getSession().write(MainPacketCreator.resetActions());
        //   c.getPlayer().setAPQScore(c.getPlayer().getAPQScore() + 1);
        // c.getPlayer().getMap().broadcastMessage(MainPacketCreator.updateAriantPQRanking(c.getPlayer().getName(), c.getPlayer().getAPQScore(), false));
    }

    private static int[] dmgskinitem = {2431965,2431966,2431967,2432131,2432153,2432154,2432207,2432354,2432355,2432465,2432479,2432526,2432532,2432592,2432640,2432710,2432836,2432973,2433063,2433456,2433178,2433715,2433804,5680343,2433913,2433980,2433981,2433990,2433919,2434248,2434273,2434274,2434390,2434391,5680365};
    private static int[] dmgskinnum = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,23,24,25,26,27,28,29,32,34,35,36,38,39,40};

    public static void UseScriptedNPCItem(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        rh.skip(4);
        byte slot = (byte) rh.readShort();
        int itemId = rh.readInt();
        IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem(slot);
        IItem toUseCash = chr.getInventory(MapleInventoryType.CASH).getItem(slot);

        if (itemId == 5680222) { //마네킹
            //c.getPlayer().updateInfoQuest(26544, "c=1;0=0");
            NPCScriptManager.getInstance().start(c, 9000216);
            //InventoryManipulator.removeById(c, MapleInventoryType.CASH, 5680222, 1, false, false);
        }
        if (itemId == 5680157) {
            NPCScriptManager.getInstance().start(c, 9000172);
        }
        if (toUse != null && toUse.getQuantity() >= 1 && toUse.getItemId() == itemId) {
            switch (toUse.getItemId()) {
                case 2430007: // Blank Compass
                {
                    MapleInventory inventory = chr.getInventory(MapleInventoryType.SETUP);
                    InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (byte) 1, false);

                    if (inventory.countById(3994102) >= 20 // Compass Letter "North"
                            && inventory.countById(3994103) >= 20 // Compass Letter "South"
                            && inventory.countById(3994104) >= 20 // Compass Letter "East"
                            && inventory.countById(3994105) >= 20) { // Compass Letter "West"
                        InventoryManipulator.addById(c, 2430008, (short) 1); // Gold Compass
                        InventoryManipulator.removeById(c, MapleInventoryType.SETUP, 3994102, 20, false, false);
                        InventoryManipulator.removeById(c, MapleInventoryType.SETUP, 3994103, 20, false, false);
                        InventoryManipulator.removeById(c, MapleInventoryType.SETUP, 3994104, 20, false, false);
                        InventoryManipulator.removeById(c, MapleInventoryType.SETUP, 3994105, 20, false, false);
                    } else {
                        InventoryManipulator.addById(c, 2430007, (short) 1); // Blank Compass
                    }
                    NPCScriptManager.getInstance().start(c, 2084001);
                    break;
                }
                case 2430008: // Gold Compass
                {
                    MapleMap map;
                    boolean warped = false;

                    for (int i = 390001000; i <= 390001004; i++) {
                        map = c.getChannelServer().getMapFactory().getMap(i);

                        if (map.getCharactersSize() == 0) {
                            chr.changeMap(map, map.getPortal(0));
                            warped = true;
                            break;
                        }
                    }
                    if (warped) { // Removal of gold compass
                        InventoryManipulator.removeById(c, MapleInventoryType.USE, 2430008, 1, false, false);
                    } else { // Or mabe some other message.
                        c.getPlayer().dropMessage(5, "지금은 사용할 수 없습니다.");
                    }
                    break;
                }
                case 2430016: {//아이스박스
                    int rand = Randomizer.rand(1, 100);
                    if (rand >= 0 && rand < 20) {
                        c.getPlayer().gainItem(4310129, (short) Randomizer.rand(1, 10), false, -1, null);
                    } else if (rand >= 20 && rand < 40) {
                        c.getPlayer().gainItem(1012070, (short) 1, false, 259200000, null);
                    } else if (rand >= 40 && rand < 43) {
                        c.getPlayer().gainItem(2049511, (short) 1, false, -1, null);
                    } else if (rand >= 43 && rand < 54) {
                        c.getPlayer().gainItem(4001832, (short) 100, false, -1, null);
                    } else if (rand >= 54 && rand < 56) {
                        c.getPlayer().gainItem(Randomizer.rand(0, 1) == 0 ? 2430969 : 2430970, (short) 1, false, -1, null);
                    } else if (rand >= 56 && rand < 58) {
                        c.getPlayer().gainMeso(Randomizer.rand(100000, 1000000), true, false, true);
                    } else if (rand >= 58 && rand < 60) {
                        Integer[] skins = GameConstants.getDamageSkinsTradeBlock();
                        c.getPlayer().gainItem(skins[Randomizer.rand(0, skins.length - 1)], (short) 1, false, -1, null);
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(7, c.getPlayer().getName() + "님이 아이스 박스에서 데미지 스킨을 뽑으셨습니다. 축하드립니다."));
                    } else if (rand >= 60 && rand < 75) {
                        c.getPlayer().gainItem(2001513, (short) 5, false, -1, null);
                    } else if (rand >= 75 && rand < 85) {
                        c.getPlayer().gainItem(2001514, (short) 5, false, -1, null);
                    } else if (rand >= 85 && rand < 95) {
                        c.getPlayer().gainItem(2001505, (short) 5, false, -1, null);
                    } else if (rand >= 95 && rand < 100) {
                        c.getPlayer().gainItem(1442039, (short) 1, true, -1, null);
                    }
                    InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (byte) 1, false);
                    break;
                }
                case 2430969: {//썸머로이드 (남)
                    c.getPlayer().gainItem(1662019, (short) 1, false, -1, null);
                    c.getPlayer().gainItem(1672021, (short) 1, false, -1, null);
                    InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (byte) 1, false);
                    break;
                }
                case 2430970: {//썸머로이드 (여)
                    c.getPlayer().gainItem(1662020, (short) 1, false, -1, null);
                    c.getPlayer().gainItem(1672021, (short) 1, false, -1, null);
                    InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (byte) 1, false);
                    break;
                }
case 2431965:   //기본 데미지 스킨
case 2431966:   //디지털라이즈 데미지 스킨
case 2431967:   //크리티아스 데미지 스킨
case 2432131:   //파티 퀘스트 데미지 스킨
case 2432153:   //임팩티브 데미지 스킨
case 2432154:   //달콤한 전통 한과 데미지 스킨
case 2432207:   //클럽 헤네시스 데미지 스킨
case 2432354:   //메리 크리스마스 데미지 스킨
case 2432355:   //눈 꽃송이 데미지 스킨
case 2432465:   //얄리샤의 데미지 스킨
case 2432479:   //도로시의 데미지 스킨
case 2432526:   //키보드 워리어 데미지 스킨
case 2432532:   //살랑살랑 봄바람 데미지 스킨
case 2432592:   //솔로부대 데미지 스킨
case 2432640:   //레미너선스 데미지 스킨
case 2432710:   //주황버섯 데미지 스킨
case 2432836:   //왕관 데미지 스킨
case 2432973:   //모노톤 데미지 스킨
case 2433063:   //스타플래닛 데미지 스킨
case 2433456:   //한글날 데미지 스킨
case 2433178:   //2014 할로윈 데미지 스킨
case 2433715:   //색동 데미지 스킨
case 2433804:   //커플부대 데미지 스킨
case 5680343:   //별별 데미지 스킨
case 2433913:   //예티X페페 데미지 스킨
case 2433980:   //슬라임X주황버섯 데미지 스킨
case 2433981:   //핑크빈 데미지 스킨
case 2433990:   //돼지바 데미지 스킨
case 2433919:   //주황버섯 데미지 스킨
case 2434248:   //무지개 봉봉 데미지 스킨
case 2434273:   //밤하늘 데미지 스킨
case 2434274:   //마시멜로 데미지 스킨
case 2434390:   //곰돌이 데미지 스킨
case 2434391:   //파왕 데미지 스킨
case 5680365:   //폭염 데미지 스킨

                {
                    if (!GameConstants.isZero(chr.getJob())) {
                        int itemid = toUse.getItemId();
                        MapleQuest quest = MapleQuest.getInstance(7291);
                        MapleQuestStatus queststatus = new MapleQuestStatus(quest, (byte) 1);
                        int skinnum = GameConstants.getDamageSkinNumberByItem(itemid);
                        String skinString = String.valueOf(skinnum);
                        queststatus.setCustomData(skinString == null ? "0" : skinString);
                        c.getPlayer().updateQuest(queststatus);
                        c.send(MainPacketCreator.showQuestMessage("데미지 스킨이 변경되었습니다."));
                        chr.getMap().broadcastMessage(chr, MainPacketCreator.showForeignDamageSkin(chr, skinnum), false);
                        InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (byte) 1, false);
                    } else {
                        c.send(MainPacketCreator.showQuestMessage("제로 직업군은 데미지 스킨을 사용해도 아무 효과도 얻을 수 없다."));
                    }
                    break;
                }
                default: {
                    ItemInformation ii = ItemInformation.getInstance();
                    int npcId = ii.getScriptedItemNpc(itemId);
                    String script = ii.getScriptedItemScript(itemId);
                    IItem item = c.getPlayer().getInventory(GameConstants.getInventoryType(itemId)).getItem(slot);
                    if (item == null || item.getItemId() != itemId || item.getQuantity() < 1 || npcId == 0) {
                        c.getPlayer().ea();
                        return;
                    }
                    NPCScriptManager.getInstance().start(c, npcId, script.isEmpty() ? null : script);
                    c.getPlayer().ea();
                }
            }
        }
        c.getSession().write(MainPacketCreator.resetActions());
    }

    public static void UseSummonBag(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        if (!chr.isAlive()) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        System.out.println(rh);
        rh.skip(4);
        byte slot = (byte) rh.readShort();
        int itemId = rh.readInt();
        IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem(slot);
        if (toUse != null && toUse.getQuantity() >= 1 && toUse.getItemId() == itemId) {
            InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
            if (c.getPlayer().isGM() || !FieldLimitType.SummoningBag.check(chr.getMap().getFieldLimit())) {
                List<Pair<Integer, Integer>> toSpawn = ItemInformation.getInstance().getSummonMobs(itemId);
                if (toSpawn == null) {
                    c.getSession().write(MainPacketCreator.resetActions());
                    return;
                }
                MapleMonster ht;
                int type = 0;
                for (int i = 0; i < toSpawn.size(); i++) {
                    if (Randomizer.nextInt(99) <= toSpawn.get(i).getRight()) {
                        ht = MapleLifeProvider.getMonster(toSpawn.get(i).getLeft());
                        chr.getMap().spawnMonster_sSack(ht, chr.getPosition(), type);
                    }
                }
            }
        }
        c.getSession().write(MainPacketCreator.resetActions());
    }

    public static void UseGoldenHammer(ReadingMaple rh, MapleClient c) {
        rh.skip(4); // Tick
        byte slot = (byte) rh.readInt();
        int itemId = rh.readInt();
        rh.skip(4);
        byte victimslot = (byte) rh.readInt();
        IItem toUse = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(slot);
        Equip victim = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(victimslot);
        if (toUse == null || toUse.getItemId() != itemId || toUse.getQuantity() < 1) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        c.getSession().write(CashPacket.GoldenHammer(true, success));
        victim.setViciousHammer((byte) 1);
        if ((itemId == 2470001 || itemId == 2470002) && Randomizer.nextInt(100) > 50) {
            victim.setUpgradeSlots((byte) (victim.getUpgradeSlots() + 1));
            success = true;
        } else if (itemId == 2470000) {
            victim.setUpgradeSlots((byte) (victim.getUpgradeSlots() + 1));
            success = true;
        }
        c.getSession().write(MainPacketCreator.updateSpecialItemUse(victim, victim.getType()));
        InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, (byte) slot, (short) 1, true);
    }

    public static void HammerEffect(ReadingMaple rh, MapleClient c) {
        rh.skip(8);
        c.getSession().write(CashPacket.GoldenHammer(false, success));
    }

    public static void UseMannequin(final ReadingMaple rh, final MapleClient c) {
        rh.skip(4);
        int value = rh.readInt();
        switch (value) {
            case 0: // 추가하기
                c.getPlayer().updateInfoQuest(26544, "c=1;0=0;h0=" + c.getPlayer().getHair());
                c.getPlayer().setSecondHair(c.getPlayer().getHair());
                c.send(MainPacketCreator.DummyBlueStar(value));
                break;
            case 1: // 서로바꾸기
                c.send(MainPacketCreator.DummyBlueStar(value));
                c.getPlayer().setAskguildid(c.getPlayer().getHair());
                c.getPlayer().updateInfoQuest(26544, "c=1;0=0;h0=" + c.getPlayer().getHair());
                c.getPlayer().setHair(c.getPlayer().getSecondHair());
                List<Pair<PlayerStat, Long>> statups = new ArrayList<Pair<PlayerStat, Long>>(2);
                c.getPlayer().setHair(c.getPlayer().getSecondHair());
                statups.add(new Pair<PlayerStat, Long>(PlayerStat.HAIR, Long.valueOf(c.getPlayer().getHair())));
                c.getSession().write(MainPacketCreator.updatePlayerStats(statups, c.getPlayer().getJob()));
                c.getPlayer().setSecondHair(c.getPlayer().getAskGuildid());
                c.send(MainPacketCreator.DummyBlueStar(3));
                break;
            case 2: // 제거하기
                c.getPlayer().updateInfoQuest(26544, "c=1;0=0");
                c.send(MainPacketCreator.DummyBlueStar(value));
                break;
        }
    }

    @SuppressWarnings("empty-statement")
    public static void UseCashItem(ReadingMaple rh, MapleClient c) {
        rh.skip(4);
        byte slot = (byte) rh.readShort();
        int itemId = rh.readInt();

        IItem toUse = c.getPlayer().getInventory(MapleInventoryType.CASH).getItem(slot);
        if (toUse == null || toUse.getItemId() != itemId || toUse.getQuantity() < 1) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }

        boolean used = false;

        switch (itemId) {
            case 5043000: { // NPC Teleport Rock
                short questid = rh.readShort();
                int npcid = rh.readInt();
                MapleQuest quest = MapleQuest.getInstance(questid);

                if (c.getPlayer().getQuest(quest).getStatus() == 1 && quest.canComplete(c.getPlayer(), npcid)) {
                    MapleMap map = c.getChannelServer().getMapFactory().getMap(MapleLifeProvider.getNPCLocation(npcid));
                    if (map.containsNPC(npcid) != -1) {
                        c.getPlayer().changeMap(map, map.getPortal(0));
                    }
                    used = true;
                }
                break;
            }
            case 2320000: // The Teleport Rock
            case 5041000: // VIP Teleport Rock
            case 5040000: // The Teleport Rock
            case 5040001: // The Teleport Rock
            case 5041001: { // Teleport Coke
                if (rh.available() > 0) {
                    if (rh.readByte() == 0) {
                        MapleMap target = c.getChannelServer().getMapFactory().getMap(rh.readInt());
                        if (!FieldLimitType.VipRock.check(c.getPlayer().getMap().getFieldLimit())) { //Makes sure this map doesn't have a forced return map
                            c.getPlayer().changeMap(target, target.getPortal(0));
                            used = true;
                        }
                    }
                } else {
                }
            }
            case 5040006:
            case 5040007:
            case 5040008:
            case 5041002:
            case 5041003:
            case 5041004:
            case 5041005:
            case 5041006:
            case 5041007:
                if (rh.available() > 0) {
                    if (rh.readByte() == 0) {
                        MapleMap target = c.getChannelServer().getMapFactory().getMap(rh.readInt());
                        if (!FieldLimitType.VipRock.check(c.getPlayer().getMap().getFieldLimit())) { //Makes sure this map doesn't have a forced return map
                            c.getPlayer().changeMap(target, target.getPortal(0));
                            used = true;
                        }
                    }
                    if (c.getPlayer().getKeyValue("cash_" + toUse.getItemId() + "_lastUsed") == null) {
                        c.getPlayer().setKeyValue("cash_" + toUse.getItemId() + "_lastUsed", "0");
                    }
                    long lastused = Long.parseLong(c.getPlayer().getKeyValue("cash_" + toUse.getItemId() + "_lastUsed"));
                    long time = 1800000;
                    if (lastused + time > System.currentTimeMillis()) {
                        long lefttime = lastused + time - System.currentTimeMillis();
                        lefttime /= 1000;
                        int min = (int) (lefttime / 60);
                        int sec = (int) (lefttime % 60);
                        String msg = min + "분 " + sec + "초 후 아이템을 사용할 수 있습니다.";
                        c.getPlayer().message(1, "아이템을 아직 사용할 수 없습니다.\r\n\r\n같은 아이템은 하나의 아이템으로 인식됩니다.\r\n\r\n" + msg);
                        break;
                    }
                    c.send(MainPacketCreator.itemCooldown(itemId, toUse.getUniqueId()));
                    c.getPlayer().setKeyValue("cash_" + toUse.getItemId() + "_lastUsed", System.currentTimeMillis() + "");
                    break;
                } else {
                    break;
                }
            case 5050000: { // AP Reset
                List<Pair<PlayerStat, Long>> statupdate = new ArrayList<Pair<PlayerStat, Long>>(2);
                int apto = rh.readInt();
                int apfrom = rh.readInt();

                if (apto == apfrom) {
                    break; // Hack
                }
                int job = c.getPlayer().getJob();
                MapleCharacterStat playerst = c.getPlayer().getStat();
                used = true;

                switch (apto) { // AP to
                    case 64: // str
                        if (playerst.getStr() >= 999) {
                            used = false;
                        }
                        break;
                    case 128: // dex
                        if (playerst.getDex() >= 999) {
                            used = false;
                        }
                        break;
                    case 256: // int
                        if (playerst.getInt() >= 999) {
                            used = false;
                        }
                        break;
                    case 512: // luk
                        if (playerst.getLuk() >= 999) {
                            used = false;
                        }
                        break;
                }
                switch (apfrom) { // AP to
                    case 64: // str
                        if (playerst.getStr() <= 4) {
                            used = false;
                        }
                        break;
                    case 128: // dex
                        if (playerst.getDex() <= 4) {
                            used = false;
                        }
                        break;
                    case 256: // int
                        if (playerst.getInt() <= 4) {
                            used = false;
                        }
                        break;
                    case 512: // luk
                        if (playerst.getLuk() <= 4) {
                            used = false;
                        }
                        break;
                }
                if (used) {
                    switch (apto) { // AP to
                        case 64: { // str
                            int toSet = playerst.getStr() + 1;
                            playerst.setStr(toSet);
                            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.STR, (long) toSet));
                            break;
                        }
                        case 128: { // dex
                            int toSet = playerst.getDex() + 1;
                            playerst.setDex(toSet);
                            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.DEX, (long) toSet));
                            break;
                        }
                        case 256: { // int
                            int toSet = playerst.getInt() + 1;
                            playerst.setInt(toSet);
                            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.INT, (long) toSet));
                            break;
                        }
                        case 512: { // luk
                            int toSet = playerst.getLuk() + 1;
                            playerst.setLuk(toSet);
                            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.LUK, (long) toSet));
                            break;
                        }
                    }
                    switch (apfrom) { // AP from
                        case 64: { // str
                            int toSet = playerst.getStr() - 1;
                            playerst.setStr(toSet);
                            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.STR, (long) toSet));
                            break;
                        }
                        case 128: { // dex
                            int toSet = playerst.getDex() - 1;
                            playerst.setDex(toSet);
                            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.DEX, (long) toSet));
                            break;
                        }
                        case 256: { // int
                            int toSet = playerst.getInt() - 1;
                            playerst.setInt(toSet);
                            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.INT, (long) toSet));
                            break;
                        }
                        case 512: { // luk
                            int toSet = playerst.getLuk() - 1;
                            playerst.setLuk(toSet);
                            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.LUK, (long) toSet));
                            break;
                        }
                    }
                    c.getSession().write(MainPacketCreator.updatePlayerStats(statupdate, true, c.getPlayer().getJob()));
                }
                break;
            }
            case 5050005:
            case 5050006:
            case 5050007:
            case 5050008:
            case 5050009:
            case 5050001: // SP Reset (1st job)
            case 5050002: // SP Reset (2nd job)
            case 5050003: // SP Reset (3rd job)
            case 5050004: { // SP Reset (4th job)
                int skill1 = rh.readInt();
                int skill2 = rh.readInt();

                ISkill skillSPTo = SkillFactory.getSkill(skill1);
                ISkill skillSPFrom = SkillFactory.getSkill(skill2);

                if (skillSPTo.isBeginnerSkill() || skillSPFrom.isBeginnerSkill()) {
                    break;
                }
                if ((c.getPlayer().getSkillLevel(skillSPTo) + 1 <= skillSPTo.getMaxLevel()) && c.getPlayer().getSkillLevel(skillSPFrom) > 0) {
                    c.getPlayer().changeSkillLevel(skillSPFrom, (byte) (c.getPlayer().getSkillLevel(skillSPFrom) - 1), c.getPlayer().getMasterLevel(skillSPFrom));
                    c.getPlayer().changeSkillLevel(skillSPTo, (byte) (c.getPlayer().getSkillLevel(skillSPTo) + 1), c.getPlayer().getMasterLevel(skillSPTo));
                    used = true;
                }
                break;
            }
            case 5051001: {
                Map<ISkill, SkillEntry> skills = c.getPlayer().getSkills();
                int[] skillpoints = c.getPlayer().getRemainingSps();

                List<Pair<ISkill, Byte>> toRemove = new ArrayList<Pair<ISkill, Byte>>();
                for (Entry<ISkill, SkillEntry> e : skills.entrySet()) {
                    if (!GameConstants.isBeginnerJob(e.getKey().getId() / 10000) && (e.getKey().getId() / 10000 <= 5112)) {
                        skillpoints[GameConstants.getSkillBookForSkill(e.getKey().getId())] += e.getValue().skillevel;
                        toRemove.add(new Pair<ISkill, Byte>(e.getKey(), e.getValue().masterlevel));
                    }
                }
                for (Pair<ISkill, Byte> s : toRemove) {
                    c.getPlayer().changeSkillLevel(s.getLeft(), (byte) 0, s.getRight());
                }
                c.getPlayer().setRemainingSps(skillpoints);
                c.getSession().write(MainPacketCreator.updateSp(c.getPlayer(), false, GameConstants.isExtendedSPJob(c.getPlayer().getJob())));
                used = true;
                break;
            }
            case 5050100: {
                List<Pair<PlayerStat, Long>> stats = new ArrayList<Pair<PlayerStat, Long>>(2);
                final MapleCharacter chr = c.getPlayer();
                int total = chr.getStat().getStr() + chr.getStat().getDex() + chr.getStat().getLuk() + chr.getStat().getInt() + chr.getRemainingAp();
                total -= 4;
                chr.getStat().setStr(4);
                total -= 4;
                chr.getStat().setDex(4);
                total -= 4;
                chr.getStat().setInt(4);
                total -= 4;
                chr.getStat().setLuk(4);
                chr.setRemainingAp(total);
                stats.add(new Pair<PlayerStat, Long>(PlayerStat.STR, (long) 4));
                stats.add(new Pair<PlayerStat, Long>(PlayerStat.DEX, (long) 4));
                stats.add(new Pair<PlayerStat, Long>(PlayerStat.INT, (long) 4));
                stats.add(new Pair<PlayerStat, Long>(PlayerStat.LUK, (long) 4));
                stats.add(new Pair<PlayerStat, Long>(PlayerStat.AVAILABLEAP, (long) total));
                c.getSession().write(MainPacketCreator.updatePlayerStats(stats, false, c.getPlayer().getJob()));
                used = true;
                break;
            }
            case 5155000: { // 카르타의 진주
                c.getPlayer().updateInfoQuest(7784, "sw=0");
                c.send(MainPacketCreator.showKartaEffect());
                InventoryManipulator.removeById(c, MapleInventoryType.CASH, itemId, (short) 1, false, false);
                break;
            }
            case 5500000: { // Magic Hourglass 1 day
                final IItem item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(rh.readShort());
                final ItemInformation ii = ItemInformation.getInstance();
                final int days = 1;
                if (item != null && !GameConstants.isAccessory(item.getItemId()) && item.getExpiration() > -1 && !ii.isCash(item.getItemId()) && System.currentTimeMillis() + (100 * 24 * 60 * 60 * 1000L) > item.getExpiration() + (days * 24 * 60 * 60 * 1000L)) {
                    item.setExpiration(item.getExpiration() + (days * 24 * 60 * 60 * 1000));
                    c.getPlayer().forceReAddItem(item, MapleInventoryType.EQUIPPED);
                    used = true;
                }
                break;
            }
            case 5500001: { // Magic Hourglass 7 day
                final IItem item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(rh.readShort());
                final ItemInformation ii = ItemInformation.getInstance();
                final int days = 7;
                if (item != null && !GameConstants.isAccessory(item.getItemId()) && item.getExpiration() > -1 && !ii.isCash(item.getItemId()) && System.currentTimeMillis() + (100 * 24 * 60 * 60 * 1000L) > item.getExpiration() + (days * 24 * 60 * 60 * 1000L)) {
                    item.setExpiration(item.getExpiration() + (days * 24 * 60 * 60 * 1000));
                    c.getPlayer().forceReAddItem(item, MapleInventoryType.EQUIPPED);
                    used = true;
                }
                break;
            }
            case 5500002: { // Magic Hourglass 20 day
                final IItem item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(rh.readShort());
                final ItemInformation ii = ItemInformation.getInstance();
                final int days = 20;
                if (item != null && !GameConstants.isAccessory(item.getItemId()) && item.getExpiration() > -1 && !ii.isCash(item.getItemId()) && System.currentTimeMillis() + (100 * 24 * 60 * 60 * 1000L) > item.getExpiration() + (days * 24 * 60 * 60 * 1000L)) {
                    item.setExpiration(item.getExpiration() + (days * 24 * 60 * 60 * 1000));
                    c.getPlayer().forceReAddItem(item, MapleInventoryType.EQUIPPED);
                    used = true;
                }
                break;
            }
            case 5500005: { // Magic Hourglass 50 day
                final IItem item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(rh.readShort());
                final ItemInformation ii = ItemInformation.getInstance();
                final int days = 50;
                if (item != null && !GameConstants.isAccessory(item.getItemId()) && item.getExpiration() > -1 && !ii.isCash(item.getItemId()) && System.currentTimeMillis() + (100 * 24 * 60 * 60 * 1000L) > item.getExpiration() + (days * 24 * 60 * 60 * 1000L)) {
                    item.setExpiration(item.getExpiration() + (days * 24 * 60 * 60 * 1000));
                    c.getPlayer().forceReAddItem(item, MapleInventoryType.EQUIPPED);
                    used = true;
                }
                break;
            }
            case 5500006: { // Magic Hourglass 99 day
                final IItem item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(rh.readShort());
                final ItemInformation ii = ItemInformation.getInstance();
                final int days = 99;
                if (item != null && !GameConstants.isAccessory(item.getItemId()) && item.getExpiration() > -1 && !ii.isCash(item.getItemId()) && System.currentTimeMillis() + (100 * 24 * 60 * 60 * 1000L) > item.getExpiration() + (days * 24 * 60 * 60 * 1000L)) {
                    item.setExpiration(item.getExpiration() + (days * 24 * 60 * 60 * 1000));
                    c.getPlayer().forceReAddItem(item, MapleInventoryType.EQUIPPED);
                    used = true;
                }
                break;
            }
            case 5064000: {
                Equip toScroll;
                short dst = rh.readShort();
                if (dst < 0) {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
                } else {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
                }
                short flag = toScroll.getFlag();
                flag |= ItemFlag.PROTECT.getValue();
                toScroll.setFlag(flag);
                c.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
                c.send(MainPacketCreator.scrolledItem(toUse, toScroll, false, false));
                c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MainPacketCreator.getScrollEffect(c.getPlayer().getId(), toUse.getItemId(), toScroll.getItemId()), true);
                used = true;
                break;
            }
            case 5064100: {
                Equip toScroll;
                short dst = rh.readShort();
                if (dst < 0) {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
                } else {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
                }
                short flag = toScroll.getFlag();
                flag |= ItemFlag.SAFETY.getValue();
                toScroll.setFlag(flag);
                c.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
                c.send(MainPacketCreator.scrolledItem(toUse, toScroll, false, false));
                c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MainPacketCreator.getScrollEffect(c.getPlayer().getId(), toUse.getItemId(), toScroll.getItemId()), true);
                used = true;
                break;
            }
            case 5064300: {
                Equip toScroll;
                short dst = rh.readShort();
                if (dst < 0) {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
                } else {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
                }
                short flag = toScroll.getFlag();
                flag |= ItemFlag.RECOVERY.getValue();
                toScroll.setFlag(flag);
                c.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
                c.send(MainPacketCreator.scrolledItem(toUse, toScroll, false, false));
                c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MainPacketCreator.getScrollEffect(c.getPlayer().getId(), toUse.getItemId(), toScroll.getItemId()), true);
                used = true;
                break;
            }
            case 5063000: {
                Equip toScroll;
                short dst = rh.readShort();
                if (dst < 0) {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
                } else {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
                }
                short flag = toScroll.getFlag();
                flag |= ItemFlag.LUKCYDAY.getValue();
                toScroll.setFlag(flag);
                c.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
                used = true;
                c.send(MainPacketCreator.scrolledItem(toUse, toScroll, false, false));
                c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MainPacketCreator.getScrollEffect(c.getPlayer().getId(), toUse.getItemId(), toScroll.getItemId()), true);
                break;
            }
            case 5063100: {
                Equip toScroll;
                short dst = rh.readShort();
                if (dst < 0) {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
                } else {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
                }
                short flag = toScroll.getFlag();
                if (!ItemFlag.LUKCYDAY.check(flag) && !ItemFlag.PROTECT.check(flag)) {
                    flag |= ItemFlag.LUKCYDAY.getValue();
                    flag |= ItemFlag.PROTECT.getValue();
                    toScroll.setFlag(flag);
                    c.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
                    used = true;
                    c.send(MainPacketCreator.scrolledItem(toUse, toScroll, false, false));
                    c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MainPacketCreator.getScrollEffect(c.getPlayer().getId(), toUse.getItemId(), toScroll.getItemId()), true);
                } else {
                    c.getPlayer().ea();
                    return;
                }
                break;
            }
            case 5064200: {
                Equip toScroll;
                rh.skip(4);
                short dst = rh.readShort();
                if (dst < 0) {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
                } else {
                    toScroll = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
                }
                if (toScroll != null) {
                    Equip origin = (Equip) ItemInformation.getInstance().getEquipById(toScroll.getItemId());
                    toScroll.setAcc(origin.getAcc());
                    toScroll.setAvoid(origin.getAvoid());
                    toScroll.setDex(origin.getDex());
                    toScroll.setHands(origin.getHands());
                    toScroll.setHp(origin.getHp());
                    toScroll.setHpR(origin.getHpR());
                    toScroll.setInt(origin.getInt());
                    toScroll.setJump(origin.getJump());
                    toScroll.setLevel(origin.getLevel());
                    toScroll.setLuk(origin.getLuk());
                    toScroll.setMatk(origin.getMatk());
                    toScroll.setMdef(origin.getMdef());
                    toScroll.setMp(origin.getMp());
                    toScroll.setMpR(origin.getMpR());
                    toScroll.setSpeed(origin.getSpeed());
                    toScroll.setStr(origin.getStr());
                    toScroll.setUpgradeSlots(origin.getUpgradeSlots());
                    toScroll.setWatk(origin.getWatk());
                    toScroll.setWdef(origin.getWdef());
                    toScroll.setEnhance((byte) 0);
                    toScroll.setViciousHammer((byte) 0);
                    c.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
                    c.send(MainPacketCreator.scrolledItem(toUse, toScroll, false, false));
                    c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MainPacketCreator.getScrollEffect(c.getPlayer().getId(), toUse.getItemId(), toScroll.getItemId()), true);
                    used = true;
                } else {
                    c.getPlayer().dropMessage(1, "눌 오류가 발생했습니다. 오류게시판에 어떤아이템을 사용하셨는지 자세히 설명해주세요.");
                }
                break;
            }
            case 5060000: { // Item Tag
                IItem item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(rh.readByte());

                if (item != null && item.getOwner().equals("")) {
                    item.setOwner(c.getPlayer().getName());
                    used = true;
                } else {
                    c.getPlayer().message(1, "사용할 수 없는 아이템 입니다.");
                }
                break;
            }
            case 5062100: { //메이플 미라클 큐브
                IItem item = null;
                int tar = rh.readInt();
                if (tar < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    if (eq.getState() >= 17) {
                        eq.renewPotential();
                        c.getSession().write(MainPacketCreator.scrolledItem(toUse, item, false, true));
                        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062100));
                        c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                        InventoryManipulator.addById(c, 2430112, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "에서 호출된 " + itemId + " 아이템에서 미라클 큐브 조각 보상으로 얻은 아이템.");
                        used = true;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                } else {
                    c.getPlayer().dropMessage(5, "소비 아이템 여유 공간이 부족하여 잠재능력 재설정을 실패하였습니다.");
                }
                break;
            }
            case 5062000: { // 미라클 큐브
                IItem item = null;
                int tar = rh.readInt();
                if (tar < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    if (eq.getState() >= 17) {
                        eq.renewPotential();
                        c.getSession().write(MainPacketCreator.scrolledItem(toUse, item, false, true));
                        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062000));
                        c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                        InventoryManipulator.addById(c, 2430112, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "에서 호출된 " + itemId + " 아이템에서 미라클 큐브 조각 보상으로 얻은 아이템.");
                        used = true;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                } else {
                    c.getPlayer().dropMessage(5, "소비 아이템 여유 공간이 부족하여 잠재능력 재설정을 실패하였습니다.");
                }
                break;
            }
            case 5062002: { // 마스터 미라클 큐브
                IItem item = null;
                int tar = rh.readInt();
                if (tar < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    if (eq.getState() >= 17) {
                        eq.renewPotential();
                        c.getSession().write(MainPacketCreator.scrolledItem(toUse, item, false, true));
                        c.getSession().write(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062002));
                        c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                        InventoryManipulator.addById(c, 2430481, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "에서 호출된 " + itemId + " 아이템에서 마스터 미라클 큐브 조각으로 얻은 아이템.");
                        used = true;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                } else {
                    c.getPlayer().dropMessage(5, "소비 아이템 여유 공간이 부족하여 잠재능력 재설정을 실패하였습니다.");
                }
                break;
            }
            case 5062009: { // 레드큐브
                IItem item = null;
                Equip Alpha = null;
                int tar = rh.readInt();
                if (tar < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                }
                MapleInventory useInventory = c.getPlayer().getInventory(MapleInventoryType.USE);
                if (GameConstants.isZero(c.getPlayer().getJob())) {
                    Alpha = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    if (eq.getState() >= 17) {
                        IItem glass = null;
                        ItemInformation ii = ItemInformation.getInstance();
                        int reqLevel = ii.getReqLevel(eq.getItemId()) / 10;
                        InventoryManipulator.addById(c, 2431893, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "에서 호출된 " + itemId + " 아이템에서 레드 큐브 조각으로 얻은 아이템.");
                        InventoryManipulator.addById(c, 2460003, (short) 1, null, null, 0, "");
                        glass = useInventory.findById(2460003);
                        eq.renewPotential();
                        if ((glass.getItemId() == 2460004 && reqLevel <= 20) || (glass.getItemId() == 2460005 || (glass.getItemId() == 2460003 || (glass.getItemId() == 2460002 && reqLevel <= 12) || (glass.getItemId() == 2460001 && reqLevel <= 7) || (glass.getItemId() == 2460000 && reqLevel <= 3)))) {
                            if (eq.getState() == 1) { //레어
                                int rand = Randomizer.nextInt(100);
                                if (eq.getLines() == 0) {
                                    if (Randomizer.nextInt(100) < 30) {
                                        eq.setLines((byte) 3);
                                    } else {
                                        eq.setLines((byte) 2);
                                    }
                                }
                                if (rand < 5) { //에픽
                                    eq.setState((byte) 18);
                                } else if (rand < 3) { //유니크
                                    eq.setState((byte) 19);
                                } else {
                                    eq.setState((byte) 17);
                                }
                            } else {
                                eq.setState((byte) (eq.getState() + 16));
                            }
                            int level = eq.getState() - 16;
                            int temp = level;
                            int a = 0;
                            while (temp > 1) {
                                if (temp > 1) {
                                    --temp;
                                    ++a;
                                }
                            }
                            eq.setPotential1(potential(level, a, true, eq.getItemId()));
                            eq.setPotential2(potential(level, a, false, eq.getItemId()));
                            eq.setPotential3(eq.getLines() == 3 ? potential(level, a, false, eq.getItemId()) : 0);
                        } else {
                            c.getSession().write(MainPacketCreator.getInventoryFull());
                            return;
                        }
                        if (Alpha != null) {
                            Alpha.setState(eq.getState());
                            Alpha.setLines(eq.getLines());
                            Alpha.setPotential1(eq.getPotential1());
                            Alpha.setPotential2(eq.getPotential2());
                            Alpha.setPotential3(eq.getPotential3());
                        }
                        InventoryManipulator.removeById(c, MapleInventoryType.USE, 2460003, (short) 1, false, false);
                        useInventory.removeItem(glass.getPosition(), (short) 1, false);
                        c.getSession().write(MainPacketCreator.scrolledItem(glass, item, false, true));
                        c.getSession().write(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062009));
                        c.getSession().write(MainPacketCreator.RedCubeStart(c.getPlayer(), item, 5062009));
                        if (tar > 0) {
                            c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                        } else {
                            c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIPPED);
                            if (Alpha != null) {
                                c.getPlayer().send(MainPacketCreator.updateEquipSlot(Alpha));
                            }
                        }
                        c.getPlayer().ea();
                        used = true;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                } else {
                    c.getPlayer().dropMessage(5, "소비 아이템 여유 공간이 부족하여 잠재능력 재설정을 실패하였습니다.");
                }
                break;
            }

            case 5062090: { //메모리얼 큐브 [임시]
                IItem item = null;
                int tar = rh.readInt();
                if (tar < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    if (eq.getState() >= 17) {
                        Equip neq = (Equip) eq.copy();
                        neq.renewPotential();
                        int level = neq.getState();
                        neq.setState((byte) (neq.getState() + 16));
                        int temp = level;
                        int a = 0;
                        while (temp > 1) {
                            if (temp > 1) {
                                --temp;
                                ++a;
                            }
                        }
                        neq.setPotential1(potential(level, a, true, neq.getItemId()));
                        neq.setPotential2(potential(level, a, false, neq.getItemId()));
                        neq.setPotential3(neq.getLines() == 3 ? potential(level, a, false, neq.getItemId()) : 0);
                        c.getSession().write(MainPacketCreator.MemorialCubeWindow(neq));
                        c.getPlayer().MemorialE = neq;
                        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062090));
                        // c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                        InventoryManipulator.addById(c, 2431445, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "");
                        used = false;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                } else {
                    c.getPlayer().dropMessage(5, "소비 인벤토리의 공간이 부족하여 잠재 설정을 할 수 없습니다.");
                }
                break;
            }
            case 5062010: {
                IItem item = null;
                int tar = rh.readInt();
                if (tar > 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    Equip neq = (Equip) eq.copy();
                    c.getPlayer().MemorialE = neq;
                    if (eq.getState() >= 17) {
                        int rand = Randomizer.nextInt(100);
                        if (eq.getLines() == 2) {
                            if (Randomizer.nextInt(100) < 90) {
                                eq.setLines((byte) 3);
                            } else {
                                eq.setLines((byte) 2);
                            }
                        }
                        if (eq.getState() == 1 || eq.getState() == 17) {
                            if (rand < 70) {
                                eq.setState((byte) 18);
                            } else {
                                eq.setState((byte) 17);
                            }

                        } else if (eq.getState() == 18) {
                            if (rand < 60) {
                                eq.setState((byte) 19);
                            } else {
                                eq.setState((byte) 18);
                            }
                        } else if (eq.getState() == 19) {
                            if (rand < 50) {
                                eq.setState((byte) 20);
                            } else {
                                eq.setState((byte) 19);
                            }
                        }

                        int level = eq.getState() - 16;
                        int temp = level;
                        int a = 0;
                        while (temp > 1) {
                            if (temp > 1) {
                                --temp;
                                ++a;
                            }
                        }
                        eq.setPotential1(potential(level, a, true, eq.getItemId()));
                        eq.setPotential2(potential(level, a, false, eq.getItemId()));
                        eq.setPotential3(eq.getLines() == 3 ? potential(level, a, false, eq.getItemId()) : 0);
                        c.getSession().write(MainPacketCreator.BlackCubeStart(c.getPlayer(), item, 5062010));
                        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062010));
                        InventoryManipulator.addById(c, 2431894, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "");
                        used = true;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                } else {
                    c.getPlayer().dropMessage(5, "소비 인벤토리의 공간이 부족하여 잠재 설정을 할 수 없습니다.");
                }
                break;
            }
            case 5062005: { //어메이징미라클큐브
                IItem item = null;
                int tar = rh.readInt();
                if (tar < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    if (eq.getState() >= 17) {
                        eq.setAmazing(true);
                        eq.renewPotential();
                        c.getSession().write(MainPacketCreator.scrolledItem(toUse, item, false, true));
                        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062005));
                        c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                        InventoryManipulator.addById(c, 2430759, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "");
                        used = true;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                } else {
                    c.getPlayer().dropMessage(5, "소비 인벤토리의 공간이 부족하여 잠재 설정을 할 수 없습니다.");
                }
                break;
            }
            case 5062500: { // 에디셔널 미라클 큐브
                IItem item = null;
                int tar = rh.readInt();
                if (tar < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    if (eq.getPotential4() > 0) {
                        eq.setState((byte) (eq.getState() + 32));
                        c.getSession().write(MainPacketCreator.scrolledItem(toUse, item, false, true));
                        c.getSession().write(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062500));
                        c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                        InventoryManipulator.addById(c, 2430915, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "에서 호출된 " + itemId + " 아이템에서 마스터 미라클 큐브 조각으로 얻은 아이템.");
                        used = true;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                    Equip zeros = null;
                    if (GameConstants.isZero(c.getPlayer().getJob())) {
                        if (tar == -11) {
                            zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10);
                        } else if (tar == -10) {
                            zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11);
                        }
                    }
                    if (zeros != null) {
                        Equip aweapon = (Equip)item;
                        zeros.setState(aweapon.getState());
                        zeros.setLines(aweapon.getLines());
                        zeros.setPotential4(aweapon.getPotential4());
                        zeros.setPotential5(aweapon.getPotential5());
                        zeros.setPotential6(aweapon.getPotential6());
                        c.getPlayer().send(MainPacketCreator.updateEquipSlot(zeros));
                    }
                    InventoryHandler.MagnifyingGlass(c, (byte)0, (byte)tar);
                } else {
                    c.getPlayer().dropMessage(5, "소비 아이템 여유 공간이 부족하여 잠재능력 재설정을 실패하였습니다.");
                }
                break;
            }
            case 5062006: { //플래티넘 미라클큐브
                IItem item = null;
                int tar = rh.readInt();
                if (tar < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) tar);
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) tar);
                }
                if (item != null && c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1) {
                    Equip eq = (Equip) item;
                    if (eq.getState() >= 18) {
                        eq.setAmazing(true);
                        eq.renewPotential();
                        c.getSession().write(MainPacketCreator.scrolledItem(toUse, item, false, true));
                        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showCubeEffect(c.getPlayer().getId(), 5062006));
                        c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                        InventoryManipulator.addById(c, 2431427, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "");
                        used = true;
                    } else {
                        c.getPlayer().dropMessage(5, "Make sure your equipment has a potential.");
                    }
                } else {
                    c.getPlayer().dropMessage(5, "소비 인벤토리의 공간이 부족하여 잠재 설정을 할 수 없습니다.");
                }
                break;
            }

            case 5069000: // 마스터피스
            case 5069001: { // 프리미엄 마스터피스
                int masterlevel = 1;
                if (c.getPlayer().getGender() == 0) {
                    int[] mitem = {1072860, 1050299, 1702456, 1003955, 1082555, 1082565, 1102632, 1102420, 1102537, 1102621, 1102619, 1102608, 1102593, 1102583, 1082527, 1082520, 1003998, 1004002, 1003548, 1003971, 1003957, 1003945, 1003909, 1003892, 1003867, 1003831, 1702468, 1702473, 1702357, 1702406, 1702464, 1702457, 1702451, 1702442, 1702433, 1702424, 1702415, 1050304, 1050305, 1050234, 1050283, 1050302, 1050300, 1051367, 1050296, 1050291, 1050285, 1051352, 1042264, 1060182, 1052605, 1072876, 1070057, 1072868, 1072862, 1072852, 1072836, 1072831, 1072823, 1072808};
                    int Random = (int) Math.floor(Math.random() * mitem.length);
                    int mpitem = mitem[Random];
                    switch (mpitem) {
                        case 1003955:
                        case 1050299:
                        case 1051366:
                        case 1072860:
                        case 1702456:
                        case 1082555:
                            masterlevel = 3;
                            break;
                        default:
                            masterlevel = 1;
                            break;
                    }
                    rh.skip(5);
                    MapleInventoryType basetype = MapleInventoryType.getByType(rh.readByte());
                    IItem baseitem = c.getPlayer().getInventory(basetype).getItem(rh.readShort());
                    MapleInventoryType basictype = MapleInventoryType.getByType(rh.readByte());
                    IItem basicitem = c.getPlayer().getInventory(basictype).getItem(rh.readShort());
                    InventoryManipulator.addById(c, mpitem, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "마스터피스로 얻은 아이템");
                    InventoryManipulator.removeFromSlot(c, basetype, baseitem.getPosition(), (short) 1, false);
                    InventoryManipulator.removeFromSlot(c, basictype, basicitem.getPosition(), (short) 1, false);
                    IItem masterpix = c.getPlayer().getInventory(MapleInventoryType.EQUIP).findById(mpitem);
                } else {
                    int[] fitem = {1072860, 1051366, 1702456, 1003955, 1082555, 1082565, 1102632, 1102420, 1102537, 1102621, 1102619, 1102608, 1102593, 1102583, 1082527, 1082520, 1003998, 1004002, 1003549, 1003972, 1003958, 1003945, 1003909, 1003892, 1003867, 1003831, 1702468, 1702473, 1702357, 1702406, 1702464, 1702457, 1702451, 1702442, 1702433, 1702424, 1702415, 1051372, 1051373, 1051284, 1051347, 1051369, 1050300, 1051367, 1051362, 1051357, 1050285, 1051352, 1042264, 1061206, 1052605, 1072876, 1071074, 1072868, 1072862, 1072852, 1072836, 1072831, 1072823, 1072808};
                    int Random = (int) Math.floor(Math.random() * fitem.length);
                    int mpitem = fitem[Random];
                    switch (mpitem) {
                        case 1003955:
                        case 1050299:
                        case 1051366:
                        case 1072860:
                        case 1702456:
                        case 1082555:
                            masterlevel = 3;
                            break;
                        default:
                            masterlevel = 1;
                            break;
                    }
                    rh.skip(5);
                    MapleInventoryType basetype = MapleInventoryType.getByType(rh.readByte());
                    IItem baseitem = c.getPlayer().getInventory(basetype).getItem(rh.readShort());
                    MapleInventoryType basictype = MapleInventoryType.getByType(rh.readByte());
                    IItem basicitem = c.getPlayer().getInventory(basictype).getItem(rh.readShort());
                    InventoryManipulator.addById(c, mpitem, (short) 1, null, null, 0, CurrentTime.getAllCurrentTime() + "마스터피스로 얻은 아이템");
                    InventoryManipulator.removeFromSlot(c, basetype, baseitem.getPosition(), (short) 1, false);
                    InventoryManipulator.removeFromSlot(c, basictype, basicitem.getPosition(), (short) 1, false);
                    IItem masterpix = c.getPlayer().getInventory(MapleInventoryType.EQUIP).findById(mpitem);
                }
                rh.skip(16); // v99 B6 2B 03 00 00 00 00 A1 B6 2B 03 00 00 00 00
                break;
            }
            case 5520001: //p.karma
            case 5520000: { // Karma
                byte invtype = (byte) rh.readInt();
                short invslot = (short) rh.readInt();
                MapleInventoryType type = MapleInventoryType.getByType(invtype);
                IItem item = c.getPlayer().getInventory(type).getItem(invslot);

                if (item != null) {
                    if ((itemId == 5520000 && ItemInformation.getInstance().isKarmaEnabled(item.getItemId())) || (itemId == 5520001 && ItemInformation.getInstance().isPKarmaEnabled(item.getItemId()))) {
                        if ((GameConstants.isEquip(item.getItemId()) && !ItemFlag.KARMA_EQ.check(item.getFlag())) || (!GameConstants.isEquip(item.getItemId()) && !ItemFlag.KARMA_USE.check(item.getFlag()))) {
                            short flag = item.getFlag();
                            if (ItemFlag.UNTRADEABLE.check(flag)) {
                                flag -= ItemFlag.UNTRADEABLE.getValue();
                            } else if (type == MapleInventoryType.EQUIP) {
                                flag |= ItemFlag.KARMA_EQ.getValue();
                            } else {
                                flag |= ItemFlag.KARMA_USE.getValue();
                            }
                            item.setFlag(flag);
                            c.getPlayer().forceReAddItem_NoUpdate(item, type);
                            c.getSession().write(MainPacketCreator.updateSpecialItemUse(item, type.getType()));
                            used = true;
                        }
                    }
                }
                break;
            }
            case 5521000: { // 쉐어 네임 택
                MapleInventoryType type = MapleInventoryType.getByType((byte) rh.readInt());
                IItem item = c.getPlayer().getInventory(type).getItem((short) rh.readInt());
                short flag = item.getFlag();
                flag |= ItemFlag.TRADE_ON_ACCOUNT.getValue();
                item.setFlag(flag);
                c.getSession().write(MainPacketCreator.updateSpecialItemUse(item, type.getType()));
                used = true;
                break;
            }
            /*case 5060028: { // 판도라의 상자
             ItemInformation ii = ItemInformation.getInstance();
             byte inventory2 = (byte) rh.readInt();
             byte slot2 = (byte) rh.readInt();
             rh.readInt();
             int[] coin2 = {4310008, 4310080, 4310015, 4310080, 4310015, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126};
             int[] dropItems2 = {2049100, 2049116, 2048702, 2048703, 2048701, 2049300, 2049100, 2049116, 2048702, 2048703, 2048701, 2049300, 1002551, 1082168, 1072273, 1092060, 1052075, 1302059, 1312031, 1322052, 1232010, 1402036, 1412026, 1432038, 1442045, 1002773, 1082164, 1072268, 1052076, 1382036, 1372032, 1212010, 1332049, 1332050, 1342010, 1362015, 1242010, 1472051, 1472052, 1002550, 1052072, 1082167, 1072272, 1452044, 1462039, 1522014, 1002551, 1082168, 1072273, 1092060, 1052075, 1302059, 1312031, 1322052, 1232010, 1402036, 1412026, 1432038, 1442045, 1002773, 1082164, 1072268, 1052076, 1382036, 1372032, 1212010, 1332049, 1332050, 1342010, 1362015, 1242010, 1472051, 1472052, 1002550, 1052072, 1082167, 1072272, 1452044, 1462039, 1522014, 1002547, 1052071, 1082163, 1072269, 1222010, 1482013, 1492013, 1532014, 1002649, 1052134, 1082216, 1072321, 2049100, 2049116, 2049300, 2049100, 2049116, 2049300};

             int[] coin = {2049300, 4001785, 4001784, 4310008, 4310066, 4310015, 4310066, 4310015, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4310008, 4310066, 4310015, 4310066, 4310015, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4310008, 4310066, 4310015, 4310066, 4310015, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4310008, 4310066, 4310015, 4310066, 4310015, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126, 4001126};
             int[] dropItems = {2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 2049100, 1012376, 1122252, 1003863, 1102562, 1052612, 1212066, 1222061, 1232060, 1242065, 1302277, 1312155, 1322205, 1332227, 1362092, 1372179, 1382211, 1402199, 1412137, 1422142, 1432169, 1442225, 1452207, 1462195, 1472216, 1482170, 1492181, 1522096, 1532100, 2049100, 2049116, 2049122, 2049153, 2048704, 2048702, 2048703, 2048701, 2049300, 2049100, 2049116, 2049122, 2049153, 2048704, 2048702, 2048703, 2048701, 2049300};

             int itemda = dropItems[Randomizer.rand(0, dropItems.length - 1)];
             int coin1 = coin[Randomizer.rand(0, coin.length - 1)];
             int itemda1 = dropItems2[Randomizer.rand(0, dropItems2.length - 1)];
             int coin3 = coin2[Randomizer.rand(0, coin2.length - 1)];
             short 갯수 = (short) Randomizer.rand(1, 5);
             short quantity = (short) Randomizer.rand(1, 5);
             IItem item2 = c.getPlayer().getInventory(MapleInventoryType.getByType(inventory2)).getItem((short) slot2);
             if (item2 != null) {
             if ((c.getPlayer().getFever() == 0) || (c.getPlayer().getFever() == 90)) {
             c.getPlayer().addFever(10);
             } else if (c.getPlayer().getFever() == 10) {
             c.getPlayer().addFever(8);
             } else if (c.getPlayer().getFever() == 100) {
             InventoryManipulator.addById(c, coin1, quantity);
             c.getPlayer().setFever(10);
             } else {
             c.getPlayer().addFever(9);
             }
             String text = null;
             switch (c.getPlayer().getFever()) {
             case 10:
             text = "03 67 1A 00 73 75 6D 3D 31 30 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 31 30";
             break;
             case 18:
             text = "03 67 1A 00 73 75 6D 3D 31 38 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 31 38";
             break;
             case 27:
             text = "03 67 1A 00 73 75 6D 3D 32 37 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 32 37";
             break;
             case 36:
             text = "03 67 1A 00 73 75 6D 3D 33 36 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 33 36";
             break;
             case 45:
             text = "03 67 1A 00 73 75 6D 3D 34 35 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 34 35";
             break;
             case 54:
             text = "03 67 1A 00 73 75 6D 3D 35 34 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 35 34";
             break;
             case 63:
             text = "03 67 1A 00 73 75 6D 3D 36 33 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 36 33";
             break;
             case 72:
             text = "03 67 1A 00 73 75 6D 3D 37 32 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 37 32";
             break;
             case 81:
             text = "03 67 1A 00 73 75 6D 3D 38 31 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 38 31";
             break;
             case 90:
             text = "03 67 1A 00 73 75 6D 3D 39 30 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 39 30";
             break;
             case 100:
             text = "03 67 1C 00 73 75 6D 3D 31 30 38 3B 69 64 3D 35 30 36 30 30 32 38 3B 67 61 75 67 65 3D 31 30 30";
             }

             c.getSession().write(MainPacketCreator.showFandoraInfo(text));
             if (c.getPlayer().getFever() == 100) {
             InventoryManipulator.removeFromSlot(c, MapleInventoryType.getByType(inventory2), (byte) slot2, (short) 1, false);
             InventoryManipulator.addFromDrop(c, ii.randomizeStatspig((Equip) ii.getEquipById(itemda), false), true);
             c.getSession().write(MainPacketCreator.getNPCTalk(9000159, (byte) 2, new StringBuilder().append("판도라의 열쇠로 판도라의 상자를 열었습니다.\r\n판도라의 상자를 한 번 더 열어보시겠습니까?\r\n#e현재 Fever게이지:#r").append(c.getPlayer().getFever()).append("%#k#n\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v").append(itemda).append("##z").append(itemda).append("# 1개").toString(), "", (byte) 0));
             WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(20, new StringBuilder().append(c.getPlayer().getName()).append("님이 판도라상자 스페셜 에서 ").append(ii.getName(itemda)).append(" 를 얻었습니다.").toString()));
             } else {
             InventoryManipulator.removeFromSlot(c, MapleInventoryType.getByType(inventory2), (byte) slot2, (short) 1, false);
             InventoryManipulator.addFromDrop(c, ii.randomizeStatspig((Equip) ii.getEquipById(itemda1), false), true);
             c.getSession().write(MainPacketCreator.getNPCTalk(9000159, (byte) 2, new StringBuilder().append("판도라의 열쇠로 판도라의 상자를 열었습니다.\r\n판도라의 상자를 한 번 더 열어보시겠습니까?\r\n#e현재 Fever게이지:#r").append(c.getPlayer().getFever()).append("%#k#n\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v").append(itemda1).append("##z").append(itemda1).append("# 1개").toString(), "", (byte) 0));
             }
             }

             remove(c, itemId);
             }
             */
            case 5044000:
            case 5044001:
            case 5044002:
            case 5044006:
            case 5044007: { // 텔레포트 월드맵
                rh.readByte();
                if (c.getPlayer().getKeyValue("cash_" + toUse.getItemId() + "_lastUsed") == null) {
                    c.getPlayer().setKeyValue("cash_" + toUse.getItemId() + "_lastUsed", "0");
                }
                long lastused = Long.parseLong(c.getPlayer().getKeyValue("cash_" + toUse.getItemId() + "_lastUsed"));
                long time = 180000;
                if (lastused + time > System.currentTimeMillis()) {
                    long lefttime = lastused + time - System.currentTimeMillis();
                    lefttime /= 1000;
                    int min = (int) (lefttime / 60);
                    int sec = (int) (lefttime % 60);
                    String msg = min + "분 " + sec + "초 후 아이템을 사용할 수 있습니다.";
                    c.getPlayer().message(1, "아이템을 아직 사용할 수 없습니다.\r\n\r\n같은 아이템은 하나의 아이템으로 인식됩니다.\r\n\r\n" + msg);
                    break;
                }
                c.send(MainPacketCreator.itemCooldown(itemId, toUse.getUniqueId()));
                c.getPlayer().setKeyValue("cash_" + toUse.getItemId() + "_lastUsed", System.currentTimeMillis() + "");

                MapleMap target = c.getChannelServer().getMapFactory().getMap(rh.readInt());
                c.getPlayer().changeMap(target, target.getPortal(0));
                break;
            }
            case 5060001: { // Sealing Lock
                MapleInventoryType type = MapleInventoryType.getByType((byte) rh.readInt());
                IItem item = c.getPlayer().getInventory(type).getItem((short) rh.readInt());
                if (item != null && item.getExpiration() == -1) {
                    short flag = item.getFlag();
                    flag |= ItemFlag.LOCK.getValue();
                    item.setFlag(flag);
                    c.getPlayer().forceReAddItem(item, type);
                    used = true;
                }
                break;
            }
            case 5061000: { // Sealing Lock 7 days
                MapleInventoryType type = MapleInventoryType.getByType((byte) rh.readInt());
                IItem item = c.getPlayer().getInventory(type).getItem((short) rh.readInt());
                if (item != null && item.getExpiration() == -1) {
                    short flag = item.getFlag();
                    flag |= ItemFlag.LOCK.getValue();
                    item.setFlag(flag);
                    item.setExpiration(System.currentTimeMillis() + (7 * 24 * 60 * 60 * 1000L));
                    c.getPlayer().forceReAddItem(item, type);
                    used = true;
                }
                break;
            }
            case 5061001: { // Sealing Lock 30 days
                MapleInventoryType type = MapleInventoryType.getByType((byte) rh.readInt());
                IItem item = c.getPlayer().getInventory(type).getItem((short) rh.readInt());
                if (item != null && item.getExpiration() == -1) {
                    short flag = item.getFlag();
                    flag |= ItemFlag.LOCK.getValue();
                    item.setFlag(flag);
                    item.setExpiration(System.currentTimeMillis() + (30 * 24 * 60 * 60 * 1000L));
                    c.getPlayer().forceReAddItem(item, type);
                    used = true;
                }
                break;
            }
            case 5061002: { // Sealing Lock 90 days
                MapleInventoryType type = MapleInventoryType.getByType((byte) rh.readInt());
                IItem item = c.getPlayer().getInventory(type).getItem((short) rh.readInt());
                if (item != null && item.getExpiration() == -1) {
                    short flag = item.getFlag();
                    flag |= ItemFlag.LOCK.getValue();
                    item.setFlag(flag);
                    item.setExpiration(System.currentTimeMillis() + (90 * 24 * 60 * 60 * 1000L));
                    c.getPlayer().forceReAddItem(item, type);
                    used = true;
                }
                break;
            }
            case 5061003: { // Sealing Lock 365 days
                MapleInventoryType type = MapleInventoryType.getByType((byte) rh.readInt());
                IItem item = c.getPlayer().getInventory(type).getItem((short) rh.readInt());
                if (item != null && item.getExpiration() == -1) {
                    short flag = item.getFlag();
                    flag |= ItemFlag.LOCK.getValue();
                    item.setFlag(flag);
                    item.setExpiration(System.currentTimeMillis() + (365 * 24 * 60 * 60 * 1000L));
                    c.getPlayer().forceReAddItem(item, type);
                    used = true;
                }
                break;
            }

            case 5071000: { // Megaphone
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    String message = rh.readMapleAsciiString();

                    if (message.length() > 65) {
                        break;
                    }
                    StringBuilder sb = new StringBuilder();
                    addMedalString(c.getPlayer(), sb);
                    sb.append(c.getPlayer().getName());
                    sb.append(" : ");
                    sb.append(message);

                    c.getPlayer().getMap().broadcastMessage(MainPacketCreator.serverNotice(2, sb.toString()));
                    //        LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("확성기", c.getPlayer(), message));

                    used = true;
                } else {
                    c.getPlayer().dropMessage(5, "현재 확성기를 사용할 수 없습니다.");
                }
                break;
            }
            case 5077000: { // 3 line Megaphone
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    byte numLines = rh.readByte();
                    if (numLines > 3) {
                        return;
                    }
                    List<String> messages = new LinkedList<String>();
                    String message;
                    for (int i = 0; i < numLines; i++) {
                        message = rh.readMapleAsciiString();
                        if (message.length() > 65) {
                            break;
                        }
                        messages.add(addMedalString(c.getPlayer()) + " " + c.getPlayer().getName() + " : " + message);
                    }
                    boolean ear = rh.readByte() > 0;
                    c.getChannelServer().broadcastSmegaPacket(MainPacketCreator.tripleSmega(messages, ear, c.getChannel()));
                    //     LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("세줄확성기", c.getPlayer(), messages.get(0)));
                    //      LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("세줄확성기", c.getPlayer(), messages.get(1)));
                    //      LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("세줄확성기", c.getPlayer(), messages.get(2)));
                    used = true;
                } else {
                    c.getPlayer().dropMessage(5, "현재 확성기를 사용할 수 없습니다.");
                }
                break;
            }
            case 5072000: { // Super Megaphone
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    String message = rh.readMapleAsciiString();

                    if (message.length() > 65) {
                        break;
                    }

                    StringBuilder sb = new StringBuilder();
                    addMedalString(c.getPlayer(), sb);
                    sb.append(c.getPlayer().getName());
                    sb.append(" : ");
                    sb.append(message);

                    boolean ear = rh.readByte() != 0;

                    WorldBroadcasting.broadcastSmega(MainPacketCreator.serverNotice(3, c.getChannel(), sb.toString(), ear).getBytes());
                    //          LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("고확", c.getPlayer(), message));
                    used = true;
                } else {
                    c.getPlayer().dropMessage(5, "현재 확성기를 사용할 수 없습니다.");
                }
                break;
            }
            case 5076000: { // Item Megaphone
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    String message = rh.readMapleAsciiString();

                    if (message.length() > 65) {
                        break;
                    }
                    StringBuilder sb = new StringBuilder();
                    addMedalString(c.getPlayer(), sb);
                    sb.append(c.getPlayer().getName());
                    sb.append(" : ");
                    sb.append(message);

                    boolean ear = rh.readByte() > 0;

                    IItem item = null;
                    if (rh.readByte() == 1) { //item
                        byte invType = (byte) rh.readInt();
                        byte pos = (byte) rh.readInt();
                        item = c.getPlayer().getInventory(MapleInventoryType.getByType(invType)).getItem(pos);
                    }

                    WorldBroadcasting.broadcastSmega(MainPacketCreator.itemMegaphone(sb.toString(), ear, c.getChannel(), item).getBytes());
                    //        LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("아확", c.getPlayer(), message));
                    used = true;
                } else {
                    c.getPlayer().dropMessage(5, "현재 확성기를 사용할 수 없습니다.");
                }
                break;
            }
            case 5090100: // Wedding Invitation Card
            case 5090000: { // Note
                String sendTo = rh.readMapleAsciiString();
                String msg = rh.readMapleAsciiString();
                c.getPlayer().sendNote(sendTo, msg);
                //       LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("쪽지전송", c.getPlayer(), "[대상 : "+sendTo+"] "+msg));
                used = true;
                break;
            }
            case 5100000: { // Congratulatory Song
                c.getPlayer().getMap().broadcastMessage(MainPacketCreator.musicChange("Jukebox/Congratulation"));
                c.getSession().write(MainPacketCreator.CongratulationMusicBox(c.getPlayer().getName(), itemId));
                used = true;
                break;
            }
            case 5170000: { // 펫작명하기
                try {
                    int petid = rh.readInt();
                    rh.skip(4);
                    final List<MaplePet> Allpets = new ArrayList<>();
                    for (IItem item : c.getPlayer().getInventory(MapleInventoryType.CASH).list()) {
                        if (GameConstants.isPet(item.getItemId())) {
                            Allpets.add(item.getPet());
                        }
                    }
                    final MapleInventory inventory = c.getPlayer().getInventory(MapleInventoryType.CASH);
                    for (MaplePet pet : Allpets) {
                        if (pet.getUniqueId() == petid) {
                            String nName = rh.readMapleAsciiString();
                            if (nName.getBytes().length > 13) {
                                c.getPlayer().dropMessage(1, "글자수가 13자리가 넘었습니다. 이름을 다시 설정해주세요.");
                                break;
                            }
                            pet.setName(nName);
                            c.getSession().write(PetPacket.updatePet(c.getPlayer(), pet, false, c.getPlayer().getPetLoot()));
                            if (c.getPlayer().getPetIndex(pet) != -1) {
                                c.getPlayer().getMap().broadcastMessage(c.getPlayer(), CashPacket.changePetName(c.getPlayer(), nName, c.getPlayer().getPetIndex(pet)), true);
                            }
                            c.getSession().write(MainPacketCreator.resetActions());
                            used = true;
                            break;
                        }
                    }
                } catch (Exception ex) {
                    if (!ServerConstants.realese) ex.printStackTrace();
                }
                break;
            }

            case 5530268:  // 아이템막기
            case 5530269:
            case 5530341:
            case 5530342:
            case 5530271:
            case 5530272:
            case 5530344:
            case 5530194:
            case 5530195:
            case 5530052:
            case 5530053:
            case 5530292:
            case 5530293:
            case 5680063:
            case 5530111:
            case 5530124: {
                c.getPlayer().dropMessage(1, "현재 이 아이템은 사용하실 수 없습니다.");
                c.getSession().write(MainPacketCreator.getInventoryFull());
                return;
            }

            case 5190000:
            case 5190001:
            case 5190002:
            case 5190003:
            case 5190004:
            case 5190005:
            case 5190006:
            case 5190010: //펫 스킬 장착
            case 5190011:
            case 5190012:
            case 5191000:
            case 5191001:
            case 5191002:
            case 5191003:
            case 5191004: { //펫 스킬 해제
                int uniqueId = rh.readInt();
                MaplePet pet = null;
                int petIndex = c.getPlayer().getPetIndex(uniqueId);
                if (petIndex >= 0) { //장착중인 펫일때
                    pet = c.getPlayer().getPet(petIndex);
                } else {
                    pet = c.getPlayer().getInventory(MapleInventoryType.CASH).findByUniqueId(uniqueId).getPet();
                }
                if (pet == null) {
                    c.getPlayer().dropMessage(1, "펫을 찾는데 실패하였습니다!");
                    c.getSession().write(MainPacketCreator.resetActions());
                    return;
                }
                if (itemId >= 5191000 && itemId <= 5191004) {
                    pet.removeSkillId(itemId);
                    pet.removeSkillValue(itemId - 1000);
                } else {
                    pet.addSkillId(itemId);
                    pet.addSkillValue(itemId);
                }
                c.getPlayer().getMap().broadcastMessage(PetPacket.updatePet(c.getPlayer(), pet, false, c.getPlayer().getPetLoot()));
                used = true;
                break;
            }
            case 5700000: { //안드로이드 작명 쿠폰
                if (c.getPlayer().getAndroid() == null) {
                    return;
                }
                rh.skip(8);
                String nName = rh.readMapleAsciiString();
                MapleAndroid android = c.getPlayer().getAndroid();
                android.setName(nName);
                used = true;
                c.getPlayer().updateAndroid();
                break;
            }
            case 5200000: { // Bronze Sack of Mesos
                c.getPlayer().gainMeso(1000000, true, false, true);
                c.getSession().write(MainPacketCreator.resetActions());
                used = true;
                break;
            }
            case 5200001: { // Silver Sack of Mesos
                c.getPlayer().gainMeso(1500000, true, false, true);
                c.getSession().write(MainPacketCreator.resetActions());
                used = true;
                break;
            }
            case 5200002: { // Gold Sack of Mesos
                c.getPlayer().gainMeso(2000000, true, false, true);
                c.getSession().write(MainPacketCreator.resetActions());
                used = true;
                break;
            }
            case 5240000:
             case 5240001:
             case 5240002:
             case 5240003:
             case 5240004:
             case 5240005:
             case 5240006:
             case 5240007:
             case 5240008:
             case 5240009:
             case 5240010:
             case 5240011:
             case 5240012:
             case 5240013:
             case 5240014:
             case 5240015:
             case 5240016:
             case 5240017:
             case 5240018:
             case 5240019:
             case 5240020:
             case 5240021:
             case 5240022:
             case 5240023:
             case 5240025:
             case 5240026:
             case 5240027:
             case 5240028:
             case 5240024:
             case 5240030:
             case 5240032:
             case 5240035:
             case 5240039:
             case 5240042:
             case 5240043:
             case 5240047:
             case 5240049:
             case 5240053:
             case 5240054:
             case 5240055:
             case 5240059:
             case 5240060:
             case 5240061:
             case 5240065:
             case 5240067:
             case 5240069:
             case 5240070:
             case 5240071:
             case 5240072:
             case 5240073:
             case 5240074:
             case 5240077:
             case 5240078:
             case 5240081:
             case 5240082:
             case 5240083:
             case 5240084:
             case 5240085:
             case 5240086:
             case 5240087:
             case 5240088:
             case 5240089:
             case 5240090:
             case 5240091:
             case 5240112: { // Pet food
             for (MaplePet pet : c.getPlayer().getPets()) {
             if (!pet.canConsume(itemId)) {
             int petindex = c.getPlayer().getPetIndex(pet);
             pet.setFullness(100);
             if (pet.getCloseness() < 30000) {
             if (pet.getCloseness() + 100 > 30000) {
             pet.setCloseness(30000);
             } else {
             pet.setCloseness(pet.getCloseness() + 100);
             }
             if (pet.getCloseness() >= GameConstants.getClosenessNeededForLevel(pet.getLevel() + 1)) {
             pet.setLevel(pet.getLevel() + 1);
             c.getSession().write(PetPacket.showOwnPetLevelUp((byte) c.getPlayer().getPetIndex(pet)));
             c.getPlayer().getMap().broadcastMessage(PetPacket.showPetLevelUp(c.getPlayer(), (byte) petindex));
             }
             }
             c.getSession().write(PetPacket.updatePet(c.getPlayer(), pet, false, c.getPlayer().getPetLoot()));
             c.getPlayer().getMap().broadcastMessage(c.getPlayer(), PetPacket.commandResponse(c.getPlayer().getId(), (byte) 1, (byte) petindex, true), true);
             }
             }
             used = true;
             break;
             }
             
            case 5230001:
            case 5230000: {// owl of minerva
                final int itemSearch = rh.readInt();
                final List<HiredMerchant> hms = c.getChannelServer().searchMerchant(itemSearch);
                if (hms.size() > 0) {
                    c.getSession().write(CashPacket.getOwlSearched(itemSearch, hms));
                    used = true;
                } else {
                    c.getPlayer().dropMessage(1, "해당 아이템을 찾을 수 없습니다.");
                }
                break;
            }
            case 5450000: //보따리 상인 묘묘
            case 5450003:
                used = true;
            case 5450004:
            case 5450006:
            case 5450007:
                if (GameConstants.getBossReturnMap(c.getPlayer().getMapId()) == -1) {
                    MapleShopFactory.getInstance().getShop(9090000).sendShop(c);
                } else {
                    c.getPlayer().message(5, "여기서는 사용할 수 없습니다.");
                    used = false;
                }

                break;
            case 5370000: // ChalkBoard
            case 5370001: // BlackBoard
            case 5370002: {
                c.getPlayer().setChalkboard(rh.readMapleAsciiString());
                break;
            }
            case 5390000:
            case 5390001: // Cloud 9 Messenger
            case 5390002:
            case 5390006: // 우렁찬 호랑이
            case 5390009: // 친구라네
            case 5390010: // 유령
            case 5390014: // 사실 잘나가는
            case 5390015: // 엄청 잘나가는
            case 5390016:
            case 5390017: { // 제일 잘나가는{ // Loveholic Messenger
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "10 레벨 이상이어야합니다.");
                    break;
                }
                if (c.getPlayer().getMapId() == GameConstants.JAIL) {
                    c.getPlayer().dropMessage(5, "여기에서는 사용하실 수 없습니다.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    final List<String> lines = new LinkedList<>();
                    for (int i = 0; i < 4; i++) {
                        final String text = rh.readMapleAsciiString();
                        if (text.length() > 55) {
                            continue;
                        }
                        lines.add(text);
                    }
                    final boolean ear = rh.readByte() != 0;
                    WorldBroadcasting.broadcastSmega(MainPacketCreator.getAvatarMega(c.getPlayer(), c.getChannel(), itemId, lines, ear).getBytes());
                    used = true;
                } else {
                    c.getPlayer().dropMessage(5, "The usage of Megaphone is currently disabled.");
                }
                break;
            }
            case 5062402:
            case 5062400: {
                short viewSlot = (short) rh.readInt();
                short descSlot = (short) rh.readInt();
                Equip view_Item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(viewSlot);
                Equip desc_Item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(descSlot);
                if (view_Item.getPotential7() != 0) {
                    desc_Item.setPotential7(view_Item.getPotential7());
                } else {
                    String lol = ((Integer) view_Item.getItemId()).toString();
                    String ss = lol.substring(3, 7);
                    desc_Item.setPotential7(Integer.parseInt(ss));
                }
                c.getSession().write(MainPacketCreator.addMoruItem(desc_Item));
                used = true;
                break;
            }
            default:
                if (itemId / 10000 == 512) {
                    ItemInformation ii = ItemInformation.getInstance();
                    String msg = rh.readMapleAsciiString();
                    c.getPlayer().getMap().startMapEffect(msg, itemId);
                    //        LoggerChatting.writeLog(LoggerChatting.chatLog, LoggerChatting.getChatLogType("뿌리기", c.getPlayer(), "[아이템:"+itemId+"] "+msg));
                    int buff = ii.getStateChangeItem(itemId);
                    if (buff != 0) {
                        for (MapleCharacter mChar : c.getPlayer().getMap().getCharacters()) {
                            ii.getItemEffect(buff).applyTo(mChar);
                        }
                    }
                    used = true;
                } else if (itemId / 10000 == 524) { //펫먹이
                    for (MaplePet pet : c.getPlayer().getPets()) {
                        if (pet != null) {
                            if (pet.canConsume(itemId)) {
                                int petindex = c.getPlayer().getPetIndex(pet);
                                pet.setFullness(pet.getRepleteness(itemId));
                                int closeness = pet.getTameness(itemId);
                                if (pet.getCloseness() < 30000) {
                                    if (pet.getCloseness() + closeness > 30000) {
                                        pet.setCloseness(30000);
                                    } else {
                                        pet.setCloseness(pet.getCloseness() + closeness);
                                    }
                                    if (pet.getCloseness() >= GameConstants.getClosenessNeededForLevel(pet.getLevel() + 1)) {
                                        pet.setLevel(pet.getLevel() + 1);
                                        c.getSession().write(PetPacket.showOwnPetLevelUp((byte) c.getPlayer().getPetIndex(pet)));
                                        c.getPlayer().getMap().broadcastMessage(PetPacket.showPetLevelUp(c.getPlayer(), (byte) petindex));
                                    }
                                }
                                c.getSession().write(PetPacket.updatePet(c.getPlayer(), pet, false, c.getPlayer().getPetLoot()));
                                c.getPlayer().getMap().broadcastMessage(c.getPlayer(), PetPacket.commandResponse(c.getPlayer().getId(), (byte) 1, (byte) petindex, true), true);
                            }
                        }
                    }
                    used = true;
                } else if (itemId / 10000 == 553) {
                    InventoryHandler.receiveReward(slot, itemId, toUse, c);
                } else {
                    System.out.println("Unhandled CS item : " + itemId);
                    //System.out.println(rh.toString());
                }
                break;
        }

        if (used) {
            InventoryManipulator.removeById(c, MapleInventoryType.CASH, itemId, 1, true, false);
        } else {
            c.getSession().write(MainPacketCreator.resetActions());
        }

        if ((itemId == 5060002 || itemId == 5060022)) { //프리미엄 부화기, 요정의 물병
            ItemInformation ii = ItemInformation.getInstance();
            byte inventory2 = (byte) rh.readInt();
            byte slot2 = (byte) rh.readInt();
            rh.readInt();
            IItem item2 = c.getPlayer().getInventory(MapleInventoryType.getByType(inventory2)).getItem(slot2);
            if (item2 != null) {
                try {
                    Connection con = MYSQL.getConnection();
                    PreparedStatement ps;
                    if (itemId == 5060002 || itemId == 5060022) {
                        ps = con.prepareStatement("SELECT * FROM `incubatordata` ORDER BY RAND() LIMIT 1");

                        ResultSet rs = ps.executeQuery();
                        if (rs.next()) {
                            if (c.getPlayer().getInventory(ii.getInventoryType(rs.getInt("itemid"))).isFull()) {
                                c.getSession().write(MainPacketCreator.resetActions());
                                return;
                            }
                            InventoryManipulator.removeFromSlot(c, MapleInventoryType.getByType(inventory2), (byte) slot2, (short) 1, false);
                            if (ii.getInventoryType(rs.getInt("itemid")) == MapleInventoryType.EQUIP) {
                                InventoryManipulator.addFromDrop(c, ii.randomizeStats((Equip) ii.getEquipById(rs.getInt("itemid")), false), true);
                            } else {
                                InventoryManipulator.addById(c, rs.getInt("itemid"), (short) rs.getInt("amount"), null, -1);
                            }
                            /*if (itemId == 5060002) {
                             c.getSession().write(MainPacketCreator.getNPCTalk(9010000, (byte)0, "피그미 에그 안에서 아이템이 나왔습니다.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v" + rs.getInt("itemid") + "# " + ItemInformation.getInstance().getName(rs.getInt("itemid")) + " " + (short)rs.getInt("amount") + "개", "00 01", (byte)0));
                             WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, c.getPlayer().getName() + "님이 피그미에그에서 " + ii.getName(rs.getInt("itemid")) + " 를 얻었습니다."));
                             }*/
                            if (itemId == 5060022) {
                                c.getSession().write(MainPacketCreator.getNPCTalk(9010000, (byte) 0, "요정의 물병에서 아이템이 나왔습니다.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v" + rs.getInt("itemid") + "# " + ItemInformation.getInstance().getName(rs.getInt("itemid")) + " " + (short) rs.getInt("amount") + "개", "00 01", (byte) 0));
                                WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, c.getPlayer().getName() + "님이 요정의물병에서 " + ii.getName(rs.getInt("itemid")) + " 를 얻었습니다. 모두 축하해 주세요~"));
                            }
                        }
                        rs.close();
                        ps.close();
                    }
                } catch (Exception e) {

                    if (!ServerConstants.realese) e.printStackTrace();
                }
            }
            remove(c, itemId);
        }
    }

    public static void Pickup_Player(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        rh.skip(5); // [4] Seems to be tickcount, [1] always 0
        Point Client_Reportedpos = rh.readPos();
        MapleMapObject ob = chr.getMap().getMapObject(rh.readInt());
        rh.skip(5);
        if (ob == null || ob.getType() != MapleMapObjectType.ITEM) {
            c.getSession().write(MainPacketCreator.getInventoryFull());
            return;
        }
        MapleWorldMapItem mapitem = (MapleWorldMapItem) ob;

        if (mapitem.isPickedUp()) {
            c.getSession().write(MainPacketCreator.getInventoryFull());
            return;
        }
        if (mapitem.getOwner() != chr.getId() && chr.getMap().getEverlast()) {
            c.getSession().write(MainPacketCreator.getInventoryFull());
            return;
        } else if (mapitem.getOwner() != chr.getId() && mapitem.getDroppedTime() + 20000 > System.currentTimeMillis() && !mapitem.isPlayerDrop()) {
            if (chr.getParty() != null) {
                boolean canpickup = false;
                for (MaplePartyCharacter hpc : chr.getParty().getMembers()) {
                    if (hpc.getId() == mapitem.getOwner()) {
                        canpickup = true;
                    }
                }
                if (!canpickup) {
                    c.getSession().write(MainPacketCreator.getInventoryFull());
                    return;
                }
            } else {
                c.getSession().write(MainPacketCreator.getInventoryFull());
                return;
            }
        }
        double Distance = Client_Reportedpos.distanceSq(mapitem.getPosition());
        if (Distance > 2500) {
//	    chr.getCheatTracker().registerOffense(CheatingOffense.ITEMVAC_CLIENT, String.valueOf(Distance));
        } else if (chr.getPosition().distanceSq(mapitem.getPosition()) > 90000.0) {
//	    chr.getCheatTracker().registerOffense(CheatingOffense.ITEMVAC_SERVER);
        }
        if (mapitem.getMeso() > 0) {
            if (chr.getParty() != null && mapitem.getOwner() != chr.getId()) {
                final List<MapleCharacter> toGive = new LinkedList<MapleCharacter>();
                final int splitMeso = mapitem.getMeso() * 40 / 100;
                for (MaplePartyCharacter z : chr.getParty().getMembers()) {
                    MapleCharacter m = chr.getMap().getCharacterById_InMap(z.getId());
                    if (m != null && m.getId() != chr.getId()) {
                        toGive.add(m);
                    }
                }
                for (final MapleCharacter m : toGive) {
                    int mesoSize = splitMeso / toGive.size() + (m.getParty() != null ? (int) (mapitem.getMeso() / 20.0) : 0);
                    if (m.getSkillLevel(70000050) > 0) {
                        int rate = SkillFactory.getSkill(70000050).getEffect(m.getSkillLevel(70000050)).getSkillStats().getStats("mesoR");
                        mesoSize += (int) (mesoSize * (rate / 100.0D));
                    }
                    m.gainMeso(mesoSize, true);
                }
                int mesoSize = mapitem.getMeso() - splitMeso;
                if (chr.getSkillLevel(70000050) > 0) {
                    int rate = SkillFactory.getSkill(70000050).getEffect(chr.getSkillLevel(70000050)).getSkillStats().getStats("mesoR");
                    mesoSize += (int) (mesoSize * (rate / 100.0D));
                }
                chr.gainMeso(mesoSize, true);
            } else {
                int mesoSize = mapitem.getMeso();
                if (chr.getSkillLevel(70000050) > 0) {
                    int rate = SkillFactory.getSkill(70000050).getEffect(chr.getSkillLevel(70000050)).getSkillStats().getStats("mesoR");
                    mesoSize += (int) (mesoSize * (rate / 100.0D));
                }
                chr.gainMeso(mesoSize, true);
            }
            removeItem(chr, mapitem, ob);
            c.getSession().write(MainPacketCreator.getInventoryFull());
        } else {
            if (useItem(c, mapitem.getItemId())) {
                removeItem(c.getPlayer(), mapitem, ob);
                c.getSession().write(MainPacketCreator.getInventoryFull());

            } else {
                if (GameConstants.isEquip(mapitem.getItemId())) {
                    if (InventoryManipulator.checkSpace(c, mapitem.getItemId(), mapitem.getItem().getQuantity(), mapitem.getItem().getOwner())) {
                        //if (chr.getInventory(GameConstants.getInventoryType(mapitem.getItemId())).getNextFreeSlot() == -1) {
                        if (InventoryManipulator.addFromDrop(c, mapitem.getItem(), true, false, (long) 0, false) != -1) {
                            removeItem(chr, mapitem, ob);
                            checkPepeKing(chr, mapitem);
                            checkMonsterParkCoin(chr, mapitem);
                        }
                    } else {
                        chr.dropShowInfo("장비아이템 인벤토리가 꽉 차있어 아이템을 먹지 못합니다.");
                        c.getSession().write(MainPacketCreator.getInventoryFull());
                    }
                } else {
                    if (InventoryManipulator.checkSpace(c, mapitem.getItemId(), mapitem.getItem().getQuantity(), mapitem.getItem().getOwner())) {
                        if (InventoryManipulator.addFromDrop(c, mapitem.getItem(), true, false, (long) 0, false) != -1) {
                            removeItem(chr, mapitem, ob);
                            checkPepeKing(chr, mapitem);
                            checkMonsterParkCoin(chr, mapitem);
                        }
                    } else {
                        c.getSession().write(MainPacketCreator.getInventoryFull());
                        chr.dropShowInfo("아이템 인벤토리가 꽉 차있어 아이템을 먹지 못합니다.");
                    }
                }
            }
        }
    }

    public static void UsePetLoot(ReadingMaple rh, MapleClient c) {
        rh.skip(4);
        short mode = rh.readShort();
        c.getPlayer().setPetLoot(mode == 1);
        c.send(PetPacket.updatePetLootStatus(mode));
        for (int i = 0; i < c.getPlayer().getPets().length; ++i) {
            if (c.getPlayer().getPet(i) != null) {
                c.send(PetPacket.updatePet(c.getPlayer(), c.getPlayer().getPet(i), false, c.getPlayer().getPetLoot()));
            }
        }
    }

    public static void EditionalScroll(ReadingMaple rh, MapleClient c) {
        try {
            rh.skip(4);
            short mode = rh.readShort();
            /* 에디셔널 인장 */
            IItem toUse = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(mode);
            if ((toUse.getItemId() >= 2048305 && toUse.getItemId() <= 2048310)) {
                short slot = rh.readShort();
                IItem item;
                if (slot < 0) {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot); // 장비템
                } else {
                    item = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(slot); // 장비템
                }
                if (item != null) {
                    ItemInformation ii = ItemInformation.getInstance();
                    boolean succes = Randomizer.isSuccess(ii.getSuccess(item.getItemId(), c.getPlayer(), item));
                    if (succes) {
                        Equip eq = (Equip) item;
                        int option = 0, option2 = 0, option3_sbal = 0, level = 2;
                        option = ii.getPotentialOptionID(5, GameConstants.getOptionType(eq.getItemId()));
                        option2 = ii.getPotentialOptionID(5, GameConstants.getOptionType(eq.getItemId()));
                        option3_sbal = ii.getPotentialOptionID(5, GameConstants.getOptionType(eq.getItemId()));
                        if (Randomizer.nextInt(100) < 20) {
                            eq.setPotential4(option);
                            eq.setPotential5(option2);
                            eq.setPotential6(option3_sbal);
                        } else {
                            eq.setPotential4(option);
                            eq.setPotential5(option2);
                        }
                    } else {
                        InventoryManipulator.removeFromSlot(c, slot < 0 ? MapleInventoryType.EQUIPPED : MapleInventoryType.EQUIP, item.getPosition(), (short) 1, false);
                    }
                    Equip zeros = null;
                    if (GameConstants.isZero(c.getPlayer().getJob())) {
                        if (slot == -11) {
                            zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10);
                        } else if (slot == -10) {
                            zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11);
                        }
                    }
                    if (zeros != null) {
                        Equip aweapon = (Equip)item;
                        zeros.setState(aweapon.getState());
                        zeros.setLines(aweapon.getLines());
                        zeros.setPotential4(aweapon.getPotential4());
                        zeros.setPotential5(aweapon.getPotential5());
                        zeros.setPotential6(aweapon.getPotential6());
                        c.getPlayer().send(MainPacketCreator.updateEquipSlot(zeros));
                    }
                    c.getSession().write(MainPacketCreator.scrolledItem(toUse, item, !succes, true));
                    c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showStampEffect(c.getPlayer().getId(), toUse.getItemId(), succes));
                    InventoryManipulator.removeById(c, MapleInventoryType.USE, toUse.getItemId(), 1, true, false);
                    c.getPlayer().ea();
                }
            }
        } catch (Exception ex) {
            if (!ServerConstants.realese) ex.printStackTrace();
        }
    }

    public static void Pickup_Pet(ReadingMaple rh, MapleClient c, MapleCharacter chr) {

        int petz = rh.readInt();
        MaplePet pet = chr.getPet(petz);

        //00 00 00 00 01 10 34 4B 07 34 00 2E 00 B3 86 01 00 FA DF 7B AD
        rh.skip(1);
        rh.skip(4); //tick
        // [4] Zero, [4] Seems to be tickcount, [1] Always zero
        Point Client_Reportedpos = rh.readPos();
        MapleMapObject ob = chr.getMap().getMapObject(rh.readInt());

        if (ob == null || pet == null) {
            return;
        }

        MapleWorldMapItem mapitem = (MapleWorldMapItem) ob;
        if (mapitem.isPickedUp()) {
            return;
        }
        if (mapitem.getOwner() != chr.getId() && mapitem.isPlayerDrop()) {
            return;
        }
        if (mapitem.getOwner() != chr.getId() && ((!mapitem.isPlayerDrop() && mapitem.getDropType() == 0) || (mapitem.isPlayerDrop() && chr.getMap().getEverlast()))) {
            return;
        }
        if (!mapitem.isPlayerDrop() && mapitem.getDropType() == 1 && mapitem.getOwner() != chr.getId() && (chr.getParty() == null || chr.getParty().getMemberById(mapitem.getOwner()) == null)) {
            return;
        }
//        final double Distance = Client_Reportedpos.distanceSq(mapitem.getPosition());
//        if (Distance > 10000 && (mapitem.getMeso() > 0 || mapitem.getItemId() != 4001025)) {
//            chr.getCheatTracker().registerOffense(CheatingOffense.PET_ITEMVAC_CLIENT, String.valueOf(Distance));
//        } else if (pet.getPos().distanceSq(mapitem.getPosition()) > 640000.0) {
//            chr.getCheatTracker().registerOffense(CheatingOffense.PET_ITEMVAC_SERVER);
//
//        }

        if (mapitem.getMeso() > 0) {
            if (chr.getParty() != null && mapitem.getOwner() != chr.getId()) {
                final List<MapleCharacter> toGive = new LinkedList<MapleCharacter>();
                final int splitMeso = mapitem.getMeso() * 40 / 100;
                for (MaplePartyCharacter z : chr.getParty().getMembers()) {
                    MapleCharacter m = chr.getMap().getCharacterById_InMap(z.getId());
                    if (m != null && m.getId() != chr.getId()) {
                        toGive.add(m);
                    }
                }
                for (final MapleCharacter m : toGive) {
                    int mesoSize = splitMeso / toGive.size() + (m.getParty() != null ? (int) (mapitem.getMeso() / 20.0) : 0);
                    if (m.getSkillLevel(70000050) > 0) {
                        int rate = SkillFactory.getSkill(70000050).getEffect(m.getSkillLevel(70000050)).getSkillStats().getStats("mesoR");
                        mesoSize += (int) (mesoSize * (rate / 100.0D));
                    }
                    m.gainMeso(mesoSize, true);
                }
                int mesoSize = mapitem.getMeso() - splitMeso;
                if (chr.getSkillLevel(70000050) > 0) {
                    int rate = SkillFactory.getSkill(70000050).getEffect(chr.getSkillLevel(70000050)).getSkillStats().getStats("mesoR");
                    mesoSize += (int) (mesoSize * (rate / 100.0D));
                }
                chr.gainMeso(mesoSize, true);
            } else {
                int mesoSize = mapitem.getMeso();
                if (chr.getSkillLevel(70000050) > 0) {
                    int rate = SkillFactory.getSkill(70000050).getEffect(chr.getSkillLevel(70000050)).getSkillStats().getStats("mesoR");
                    mesoSize += (int) (mesoSize * (rate / 100.0D));
                }
                chr.gainMeso(mesoSize, true);
            }
            removeItem_Pet(chr, mapitem, petz);
        } else {
            if (ItemInformation.getInstance().isPickupRestricted(mapitem.getItemId()) || mapitem.getItemId() / 10000 == 291) {
            } else if (useItem(c, mapitem.getItemId())) {
                removeItem_Pet(chr, mapitem, petz);
            } else if (InventoryManipulator.checkSpace(c, mapitem.getItemId(), mapitem.getItem().getQuantity(), mapitem.getItem().getOwner())) {
                if (InventoryManipulator.addFromDrop(c, mapitem.getItem(), true, mapitem.getDropper() instanceof MapleMonster, (long) 0, true) != -1) {
                    removeItem_Pet(chr, mapitem, petz);
                    checkPepeKing(chr, mapitem);
                    checkMonsterParkCoin(chr, mapitem);
                }
            }
        }
    }

    public static final void removeItem_Pet(final MapleCharacter chr, final MapleWorldMapItem mapitem, int pet) {
        if (mapitem.getItemId() == 4430000) {
            int cashRate = ServerConstants.defaultCashRate;
            int cash = Randomizer.rand(mapitem.getItemId() == 4430000 ? 16 * cashRate : 1600 * cashRate, mapitem.getItemId() == 4430000 ? 22 * cashRate : 2200 * cashRate);
            chr.modifyCSPoints(1, cash, false);
            chr.send(UIPacket.showInfo(cash + "캐시를 획득하였습니다!"));
        }
        mapitem.setPickedUp(true);
        chr.getMap().broadcastMessage(MainPacketCreator.removeItemFromMap(mapitem.getObjectId(), 5, chr.getId(), true, pet));
        chr.getMap().removeMapObject(mapitem);
    }

    private static void checkMonsterParkCoin(MapleCharacter chr, MapleWorldMapItem mapitem) {
        if (chr.getMapId() >= 952000000 && chr.getMapId() < 955000000 && chr.getParty() != null && mapitem.getItemId() == 4310020 && !mapitem.isPlayerDrop()) {

            for (MapleCharacter hp : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
                if (hp.getId() == chr.getId()) {
                    continue;
                }
                if (chr.getMapId() != hp.getMapId()) {
                    continue;
                }
                hp.gainItem(mapitem.getItemId(), mapitem.getItem().getQuantity(), false, 0, "몬스터파크 기념 주화 파티로 같이먹음");
            }

        }
    }

    private static void checkPepeKing(MapleCharacter chr, MapleWorldMapItem mapitem) {
        if (2022570 <= mapitem.getItemId() && 2022574 >= mapitem.getItemId()) {
            List<Integer> removeOids = new ArrayList<Integer>();
            for (MapleMapObject mo : chr.getMap().getAllItems()) {
                MapleWorldMapItem hwmi = ((MapleWorldMapItem) mo);
                if (2022570 <= hwmi.getItemId() && 2022574 >= hwmi.getItemId()) {
                    removeOids.add(hwmi.getObjectId());
                    hwmi.setPickedUp(true);
                }
            }
            for (Integer z : removeOids) {
                chr.getMap().removeMapObject(z);
                chr.getMap().broadcastMessage(MainPacketCreator.removeItemFromMap(z, 0, -1));
            }
        } else if (2022575 <= mapitem.getItemId() && 2022579 >= mapitem.getItemId()) {
            List<Integer> removeOids = new ArrayList<Integer>();
            for (MapleMapObject mo : chr.getMap().getAllItems()) {
                MapleWorldMapItem hwmi = ((MapleWorldMapItem) mo);
                if (2022575 <= hwmi.getItemId() && 2022579 >= hwmi.getItemId()) {
                    removeOids.add(hwmi.getObjectId());
                    hwmi.setPickedUp(true);
                }
            }
            for (Integer z : removeOids) {
                chr.getMap().removeMapObject(z);
                chr.getMap().broadcastMessage(MainPacketCreator.removeItemFromMap(z, 0, -1));
            }
        } else if (2022580 <= mapitem.getItemId() && 2022584 >= mapitem.getItemId()) {
            List<Integer> removeOids = new ArrayList<Integer>();
            for (MapleMapObject mo : chr.getMap().getAllItems()) {
                MapleWorldMapItem hwmi = ((MapleWorldMapItem) mo);
                if (2022580 <= hwmi.getItemId() && 2022584 >= hwmi.getItemId()) {
                    removeOids.add(hwmi.getObjectId());
                    hwmi.setPickedUp(true);
                }
            }
            for (Integer z : removeOids) {
                chr.getMap().removeMapObject(z);
                chr.getMap().broadcastMessage(MainPacketCreator.removeItemFromMap(z, 0, -1));
            }
        }
    }

    private static boolean useItem(MapleClient c, int id) {
        if (GameConstants.isUse(id)) { // TO prevent caching of everything, waste of mem
            ItemInformation ii = ItemInformation.getInstance();
            byte consumeval = ii.isConsumeOnPickup(id);
            byte runval = ii.isRunOnPickup(id);
            if (consumeval > 0) {
                if (c.getPlayer().getMapId() == 109090300) {
                    for (MapleCharacter chr : c.getPlayer().getMap().getCharacters()) {
                        if (chr != null && ((id == 2022163 && c.getPlayer().isCatched == chr.isCatched) || ((id == 2022165 || id == 2022166) && c.getPlayer().isCatched != chr.isCatched))) {
                            if (id == 2022163) {
                                ii.getItemEffect(id).applyTo(chr);
                            } else if (id == 2022166) {
                                chr.giveDebuff(DiseaseStats.STUN, MobSkillFactory.getMobSkill(123, 1));
                            } else if (id == 2022165) {
                                chr.giveDebuff(DiseaseStats.SLOW, MobSkillFactory.getMobSkill(126, 1));
                            }
                        }
                    }
                    c.getSession().write(MainPacketCreator.getShowItemGain(id, (byte) 1));
                    return true;
                }
                if (consumeval == 2) {
                    if (c.getPlayer().getParty() != null) {
                        for (MaplePartyCharacter pc : c.getPlayer().getParty().getMembers()) {
                            MapleCharacter chr = c.getPlayer().getMap().getCharacterById_InMap(pc.getId());
                            if (chr != null) {
                                ii.getItemEffect(id).applyTo(chr);
                            }
                        }
                    } else {
                        ii.getItemEffect(id).applyTo(c.getPlayer());
                    }
                } else {
                    ii.getItemEffect(id).applyTo(c.getPlayer());
                }
                c.getSession().write(MainPacketCreator.getShowItemGain(id, (byte) 1));
                return true;
            }
            final MapleCharacter player = c.getPlayer();
            if (runval > 0) {
                if (runval == 1) {
                    /*
                     2432391 - 경험치(소)
                     2432392 - 경험치(대)
                     2432393 - 메소(소)
                     2432394 - 메소(대)
                     2432395 - 포션
                     2432396 - 방어구
                     2432397 - 무기
                     2432398 - 희귀 아이템
                     */
                    switch (id) {
                        case 2432391: //경험치(소) 50~80 17000
                            //레벨 + (-10~+10) + 
                            player.gainExp(player.getLevel() + Randomizer.rand(-10, 10) * 2, true, true, true);
                            break;
                        case 2432392: //경험치(대)
                            player.gainExp(player.getLevel() + Randomizer.rand(-10, 10) * 10, true, true, true);
                            break;
                        case 2432393: //메소(소)
                            player.gainMeso((Randomizer.rand(10, 20) * player.getLevel()) * ServerConstants.defaultMesoRate, true, false, true);
                            break;
                        case 2432394: //메소(대)
                            player.gainMeso((Randomizer.rand(100, 200) * player.getLevel()) * ServerConstants.defaultMesoRate, true, false, true);
                            break;
                        case 2432395: //포션
                            break;
                        case 2432396: //방어구
                            break;
                        case 2432397: //무기
                            break;
                        case 2432398: //희귀 아이템
                            break;
                    }
                    c.getSession().write(MainPacketCreator.getShowItemGainSimple(id, false));
                    return true;
                }
            }
        }
        return false;
    }

    private static void removeItem(MapleCharacter chr, MapleWorldMapItem mapitem, MapleMapObject ob) {
        if (mapitem.getItemId() == 4430000) {
            int cashRate = ServerConstants.defaultCashRate;
            int cash = Randomizer.rand(mapitem.getItemId() == 4430000 ? 16 * cashRate : 1600 * cashRate, mapitem.getItemId() == 4430000 ? 22 * cashRate : 2200 * cashRate);
            chr.modifyCSPoints(1, cash, false);
            chr.send(UIPacket.showInfo(cash + "캐시를 획득하였습니다!"));
        }
        mapitem.setPickedUp(true);
        chr.getMap().broadcastMessage(MainPacketCreator.removeItemFromMap(mapitem.getObjectId(), 2, chr.getId()), mapitem.getPosition());
        chr.getMap().removeMapObject(ob);
    }

    private static void addMedalString(MapleCharacter c, StringBuilder sb) {
        IItem medal = c.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -21);
        if (medal != null) { // Medal
            sb.append("<");
            sb.append(ItemInformation.getInstance().getName(medal.getItemId()));
            sb.append("> ");
        }
    }

    private static String addMedalString(MapleCharacter c) {
        IItem medal = c.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -21);
        String ret = "";
        if (medal != null) { // Medal
            ret += ("<");
            ret += (ItemInformation.getInstance().getName(medal.getItemId()));
            ret += ("> ");
        }
        return ret;
    }

    public static void UseStamp(ReadingMaple rh, MapleClient c) {
        rh.skip(4); // tick
        byte slot = (byte) rh.readShort(); // 인장 슬롯
        byte dst = (byte) rh.readShort(); // 대상 슬롯
        boolean sucstamp = false;
        ItemInformation ii = ItemInformation.getInstance();
        Equip toStamp;
        toStamp = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
        MapleInventory useInventory = c.getPlayer().getInventory(MapleInventoryType.USE);
        IItem stamp = useInventory.getItem(slot);
        if (Randomizer.isSuccess(ii.getSuccess(toStamp.getItemId(), c.getPlayer(), toStamp))) {
            toStamp.setLines((byte) 3);
            int level = toStamp.getState() - 16;
            int temp = level;
            int a = 0;
            while (temp > 1) {
                if (temp > 1) {
                    --temp;
                    ++a;
                }
            }
            toStamp.setPotential3(potential(level, a, true, toStamp.getItemId()));
            sucstamp = true;
        }

        useInventory.removeItem(stamp.getPosition(), (short) 1, false);
        c.getSession().write(MainPacketCreator.scrolledItem(stamp, toStamp, false, true));
        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showStampEffect(c.getPlayer().getId(), stamp.getItemId(), sucstamp));
        c.getPlayer().ea();
    }

    public static void UseEditionalStamp(ReadingMaple rh, MapleClient c) {
        rh.skip(4); // tick
        byte slot = (byte) rh.readShort(); // 인장 슬롯
        byte dst = (byte) rh.readShort(); // 대상 슬롯
        boolean sucstamp = false;
        ItemInformation ii = ItemInformation.getInstance();
        Equip toStamp;
        toStamp = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
        MapleInventory useInventory = c.getPlayer().getInventory(MapleInventoryType.USE);
        IItem stamp = useInventory.getItem(slot);
        if (Randomizer.isSuccess(ii.getSuccess(toStamp.getItemId(), c.getPlayer(), toStamp))) {
            //    toStamp.setLines((byte) 3);
            toStamp.setPotential6(ii.getPotentialOptionID(2, GameConstants.getOptionType(toStamp.getItemId())));
            sucstamp = true;
        }

        useInventory.removeItem(stamp.getPosition(), (short) 1, false);
        c.getSession().write(MainPacketCreator.scrolledItem(stamp, toStamp, false, true));
        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showStampEffect(c.getPlayer().getId(), stamp.getItemId(), sucstamp));
        c.getPlayer().ea();
    }

    public static void UseKarma(ReadingMaple rh, MapleClient c) {
        rh.skip(4); // tick
        byte slot = (byte) rh.readShort(); // 카르마 슬롯
        byte dst = (byte) rh.readShort(); // 대상 슬롯
        //      ItemInformation ii = ItemInformation.getInstance();
        Equip item;
        item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
        MapleInventory useInventory = c.getPlayer().getInventory(MapleInventoryType.USE);

        IItem stamp = useInventory.getItem(slot);
        if (stamp != null) {
            if (((GameConstants.isEquip(item.getItemId()) && !ItemFlag.KARMA_EQ.check(item.getFlag())) || (!GameConstants.isEquip(item.getItemId()) && !ItemFlag.KARMA_USE.check(item.getFlag()))) && (item.getFire() == -1 || item.getFire() > 0)) {
                short flag = item.getFlag();
                if (ItemFlag.UNTRADEABLE.check(flag)) {
                    flag -= ItemFlag.UNTRADEABLE.getValue();
                } else if (MapleInventoryType.EQUIP == MapleInventoryType.EQUIP) {
                    flag |= ItemFlag.KARMA_EQ.getValue();
                } else {
                    flag |= ItemFlag.KARMA_USE.getValue();
                }
                item.setFlag(flag);
                c.getPlayer().forceReAddItem_NoUpdate(item, MapleInventoryType.EQUIP);
                c.getSession().write(MainPacketCreator.updateSpecialItemUse(item, MapleInventoryType.EQUIP.getType()));
            }
        }
        if (item.getFire() > 0) {
            item.setFire((byte) (item.getFire() - 1));
        }
        useInventory.removeItem(stamp.getPosition(), (short) 1, false);
        //       c.getSession().write(MainPacketCreator.scrolledItem(stamp, item, false, true));
        //       c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showStampEffect(c.getPlayer().getId(), stamp.getItemId(), true));
        c.getPlayer().ea();
    }

    public static void MagnifyingGlass(MapleClient c, byte slot, byte dst) {
        ItemInformation ii = ItemInformation.getInstance();
        Equip toGlass;
        Equip zeroEquip = null;
        if (dst < 0) { //장착중인 장비
            toGlass = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
        } else {
            toGlass = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
        }
        if (GameConstants.isZeroWeapon(toGlass.getItemId())) {
            zeroEquip = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) (dst == -11 ? -10 : -11));
        }
        MapleInventory useInventory = c.getPlayer().getInventory(MapleInventoryType.USE);
        IItem glass = null;
        int reqLevel = ii.getReqLevel(toGlass.getItemId()) / 10;
        InventoryManipulator.addById(c, 2460003, (short) 1, null, null, 0, "");
        glass = useInventory.findById(2460003);
        if (glass == null) {
            c.getPlayer().dropMessage(1, "사용 가능한 돋보기를 찾을 수 없습니다.");
            c.getSession().write(MainPacketCreator.getInventoryFull());
            return;
        }
        if (toGlass.getState() >= 48) { // 에디셔널
            toGlass.setState((byte) (toGlass.getState() - 32));
      int level = 0;
      level = toGlass.getPotential4() >= 10000 ? (toGlass.getPotential4() / 10000) : (toGlass.getPotential4() / 100);
      if (level >= 4) {
          level = 4;
      }
      int rate = level == 3 ? 10 : level == 2 ? 20 : level == 1 ? 25 : 0;
      if (Randomizer.nextInt(100) < rate) {
        level++;
      }
      int temp = level;
      int a = 0;
      while (temp > 1) {
        if (temp > 1) {
          temp--;
          a++;
        }
      }
      if (toGlass.getPotential6() > 0) {
        toGlass.setPotential4(potentialA(level, a, true, toGlass.getItemId()));
        toGlass.setPotential5(potentialA(level, a, true, toGlass.getItemId()));
        toGlass.setPotential6(potentialA(level, a, true, toGlass.getItemId()));
      } else {
        toGlass.setPotential4(potentialA(level, a, true, toGlass.getItemId()));
        toGlass.setPotential5(potentialA(level, a, true, toGlass.getItemId()));
      }

        } else if ((glass.getItemId() == 2460004 && reqLevel <= 20) || (glass.getItemId() == 2460005 || (glass.getItemId() == 2460003 || (glass.getItemId() == 2460002 && reqLevel <= 12) || (glass.getItemId() == 2460001 && reqLevel <= 7) || (glass.getItemId() == 2460000 && reqLevel <= 3)))) {
            if (toGlass.getState() == 1) { //레어
                int rand = Randomizer.nextInt(100);
                if (toGlass.getLines() == 0) {
                    if (Randomizer.nextInt(100) < 30) {
                        toGlass.setLines((byte) 3);
                    } else {
                        toGlass.setLines((byte) 2);
                    }
                }
                if (rand < 5) { //에픽
                    toGlass.setState((byte) 18);
                } else if (rand < 3) { //유니크
                    toGlass.setState((byte) 19);
                } else {
                    toGlass.setState((byte) 17);
                }
            } else {
                toGlass.setState((byte) (toGlass.getState() + 16));
            }

            int level = toGlass.getState() - 16;
            int temp = level;
            int a = 0;
            while (temp > 1) {
                if (temp > 1) {
                    --temp;
                    ++a;
                }
            }
            toGlass.setPotential1(potential(level, a, true, toGlass.getItemId()));
            toGlass.setPotential2(potential(level, a, false, toGlass.getItemId()));
            toGlass.setPotential3(toGlass.getLines() == 3 ? potential(level, a, false, toGlass.getItemId()) : 0);
        } else {
            c.getSession().write(MainPacketCreator.getInventoryFull());
            return;
        }
        InventoryManipulator.removeById(c, MapleInventoryType.USE, 2460003, (short) 1, false, false);
        c.getSession().write(MainPacketCreator.scrolledItem(glass, toGlass, false, true));
        if (zeroEquip != null) {
            zeroEquip.setState(toGlass.getState());
            zeroEquip.setLines(toGlass.getLines());
            zeroEquip.setPotential1(toGlass.getPotential1());
            zeroEquip.setPotential2(toGlass.getPotential2());
            zeroEquip.setPotential3(toGlass.getPotential3());
            zeroEquip.setPotential4(toGlass.getPotential4());
            zeroEquip.setPotential5(toGlass.getPotential5());
            zeroEquip.setPotential6(toGlass.getPotential6());
        }
        if (zeroEquip != null) {
            c.getSession().write(MainPacketCreator.scrolledItem(glass, zeroEquip, false, true));
        }
        c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showMagnifyingEffect(c.getPlayer().getId(), toGlass.getPosition()));
        c.getPlayer().forceReAddItem_NoUpdate(toGlass, MapleInventoryType.EQUIP);
        c.getPlayer().ea();
    }

    public static void UseMemorialCube(ReadingMaple rh, MapleCharacter chr) {
        chr.getClient().getSession().write(MainPacketCreator.MemorialCube());
        if (rh.readByte() == 1) {
            chr.getInventory(MapleInventoryType.EQUIP).removeItem(chr.MemorialE.getPosition());
            chr.getInventory(MapleInventoryType.EQUIP).addItem(chr.MemorialE);
            chr.getClient().getSession().write(MainPacketCreator.scrolledItem(chr.getInventory(MapleInventoryType.CASH).findById(5062090), chr.MemorialE, false, true));
        }
        chr.MemorialE = null;
        InventoryManipulator.removeById(chr.getClient(), MapleInventoryType.CASH, 5062090, 1, true, false);
    }

    public static void UseSpecialScroll(ReadingMaple rh, MapleCharacter chr) {
        byte slot = (byte) rh.readShort();
        byte dst = (byte) rh.readShort();
        rh.skip(1);
        boolean use = false;
        Equip toScroll;
        if (dst < 0) {
            toScroll = (Equip) chr.getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
        } else {
            toScroll = (Equip) chr.getInventory(MapleInventoryType.EQUIP).getItem(dst);
        }
        IItem scroll = chr.getInventory(MapleInventoryType.CASH).getItem(slot);

        if (scroll == null || !GameConstants.isSpecialCSScroll(scroll.getItemId())) {
            scroll = chr.getInventory(MapleInventoryType.USE).getItem(slot);
            use = true;
        }

        if (!use) {
            if (scroll.getItemId() == 5064000) {
                short flag = toScroll.getFlag();
                flag |= ItemFlag.PROTECT.getValue();
                toScroll.setFlag(flag);
                chr.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
            } else if (scroll.getItemId() == 5064100) {
                short flag = toScroll.getFlag();
                flag |= ItemFlag.SAFETY.getValue();
                toScroll.setFlag(flag);
                chr.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
            } else if (scroll.getItemId() == 5064300) {
                short flag = toScroll.getFlag();
                flag |= ItemFlag.RECOVERY.getValue();
                toScroll.setFlag(flag);
                chr.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
            } else if (scroll.getItemId() == 5063000) {
                short flag = toScroll.getFlag();
                flag |= ItemFlag.LUKCYDAY.getValue();
                toScroll.setFlag(flag);
                chr.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
            } else if (scroll.getItemId() == 5063100) {
                short flag = toScroll.getFlag();
                if (!ItemFlag.LUKCYDAY.check(flag) && !ItemFlag.PROTECT.check(flag)) {
                    flag |= ItemFlag.LUKCYDAY.getValue();
                    flag |= ItemFlag.PROTECT.getValue();
                    toScroll.setFlag(flag);
                    chr.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
                } else {
                    chr.ea();
                    return;
                }
            }
            chr.getInventory(MapleInventoryType.CASH).removeItem(scroll.getPosition(), (short) 1, false);
        } else {
            if (scroll.getItemId() == 2531000) {
                short flag = toScroll.getFlag();
                flag |= ItemFlag.PROTECT.getValue();
                toScroll.setFlag(flag);
                chr.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
            } else if (scroll.getItemId() == 2532000) {
                short flag = toScroll.getFlag();
                flag |= ItemFlag.SAFETY.getValue();
                toScroll.setFlag(flag);
                chr.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
            } else if (scroll.getItemId() == 2530000 || scroll.getItemId() == 2530001 || scroll.getItemId() == 2530002) {
                short flag = toScroll.getFlag();
                flag |= ItemFlag.LUKCYDAY.getValue();
                toScroll.setFlag(flag);
                chr.send(MainPacketCreator.updateSpecialItemUse(toScroll, toScroll.getType()));
            }
            chr.getInventory(MapleInventoryType.USE).removeItem(scroll.getPosition(), (short) 1, false);
        }

        chr.send(MainPacketCreator.scrolledItem(scroll, toScroll, false, false));
        chr.getMap().broadcastMessage(chr, MainPacketCreator.getScrollEffect(chr.getId(), scroll.getItemId(), toScroll.getItemId()), true);
        if (dst < 0) {
            chr.equipChanged();
        }

    }

    private static void remove(MapleClient c, int itemId) {
        InventoryManipulator.removeById(c, MapleInventoryType.CASH, itemId, 1, true, false);
    }

    public static final void headTitle(ReadingMaple rh, MapleClient ha) {
        int itemid = rh.readInt();
//        short slot = (short) rh.readInt();
//        if (itemid != 0 && ha.getPlayer().getInventory(MapleInventoryType.SETUP).getItem(slot).getItemId() != itemid) {
//            if (!ha.getPlayer().isGM())
//                ha.getSession().close();
//            else //Packet Edit
//                ha.getPlayer().Message("[핵감지] 패킷 에디트 발견");
//        }
        ha.getPlayer().setHeadTitle(itemid);
        ha.getPlayer().getMap().broadcastMessage(MainPacketCreator.showHeadTitle(ha.getPlayer().getId(), itemid));
        ha.getPlayer().ea();
    }

    public final static void UseSoulEnchanter(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        rh.skip(4);
        //int enchantid = rh.readInt();
        short useslot = rh.readShort();
        short slot = rh.readShort();
        MapleInventory useInventory = c.getPlayer().getInventory(MapleInventoryType.USE);
        IItem equip;
        IItem enchanter = useInventory.getItem(useslot);
        //c.getPlayer().dropMessage(0, slot + "," + (slot == (short) -11 ? "true" : "false"));
        if (slot < 0) {
            equip = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot);
        } else {
            equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(slot);
        }
        Equip nEquip = (Equip) equip;
        nEquip.setSoulEnchanter((short) 9);
        Equip zeros = null;
        if (GameConstants.isZero(c.getPlayer().getJob())) {
            if (slot == -11) {
                zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10);
            } else if (slot == -10) {
                zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11);
            }
        }
        if (zeros != null) {
            zeros.setSoulEnchanter((short) 9);
            chr.send(MainPacketCreator.updateEquipSlot(zeros));
        }
        //chr.updateSoulWeapon(slot, nEquip);
        c.getSession().write(MainPacketCreator.scrolledItem(enchanter, nEquip, false, false));
        chr.getMap().broadcastMessage(chr, SoulWeaponPacket.showEnchanterEffect(chr.getId(), (byte) 1), true);
        InventoryManipulator.removeById(chr.getClient(), MapleInventoryType.USE, enchanter.getItemId(), 1, true, false);
//useInventory.removeItem(useslot, (short) 1, false);
        chr.send(MainPacketCreator.resetActions());
    }

    public final static void UseSoulScroll(ReadingMaple rh, MapleClient c, MapleCharacter chr) {
        
        rh.skip(4);
        short useslot = rh.readShort();
        short slot = rh.readShort();
        MapleInventory useInventory = c.getPlayer().getInventory(MapleInventoryType.USE);
        IItem equip;
        IItem soul = useInventory.getItem(useslot);
        int soula = soul.getItemId() - 2590999;
        int soulid = soul.getItemId();
        boolean great = false;
        MapleDataProvider sourceData;
        sourceData = MapleDataProviderFactory.getDataProvider(new File("wz/Item.wz"));
        MapleData dd = sourceData.getData("SkillOption.img");
        int skillid = MapleDataTool.getIntConvert(dd.getChildByPath("skill/" + soula + "/skillId"));
        if (slot == (short) -11) {
            equip = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -11);
        } else {
            equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(slot);
        }
        if (chr.isEquippedSoulWeapon()) {
            chr.changeSkillLevel(chr.getEquippedSoulSkill(), (byte) -1, (byte) 0);
        }
        if (dd.getChildByPath("skill/" + soula + "/tempOption/1/id") != null) {
            great = true;
        }
        short statid = 0;
        if (great) {
            statid = (short)(MapleDataTool.getIntConvert(dd.getChildByPath("skill/" + soula + "/tempOption/"+ Randomizer.nextInt(7) + "/id")));
        } else {
            statid = (short)(MapleDataTool.getIntConvert(dd.getChildByPath("skill/" + soula + "/tempOption/0/id")));
        }
        Equip nEquip = (Equip) equip;
        nEquip.setSoulName(GameConstants.getSoulName(soulid));
        nEquip.setSoulPotential(statid);
        nEquip.setSoulSkill(skillid);
        Equip zeros = null;
        if (GameConstants.isZero(c.getPlayer().getJob())) {
            if (slot == -11) {
                zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10);
            } else if (slot == -10) {
                zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11);
            }
        }
        if (zeros != null) {
            zeros.setSoulName(nEquip.getSoulName());
            zeros.setSoulPotential(nEquip.getSoulPotential());
            zeros.setSoulSkill(nEquip.getSoulSkill());
            chr.send(MainPacketCreator.updateEquipSlot(zeros));
        }
        chr.changeSkillLevel(skillid, (byte) 1, (byte) 1);
        c.getSession().write(MainPacketCreator.scrolledItem(soul, nEquip, false, false));
        chr.getMap().broadcastMessage(chr, SoulWeaponPacket.showSoulScrollEffect(chr.getId(), (byte) 1, false), true);
        //useInventory.removeItem(useslot, (short) 1, false);
        InventoryManipulator.removeById(chr.getClient(), MapleInventoryType.USE, soulid, 1, true, false);
        chr.send(MainPacketCreator.resetActions());

    }

    public static void OwlMinerva(final ReadingMaple slea, final MapleClient c) {
        final byte slot = (byte) slea.readShort();
        final int itemid = slea.readInt();
        final IItem toUse = c.getPlayer().getInventory(MapleInventoryType.USE).getItem((short) slot);
        if (toUse != null && toUse.getQuantity() > 0 && toUse.getItemId() == itemid && itemid == 2310000 && !c.getPlayer().hasBlockedInventory()) {
            final int itemSearch = slea.readInt();
            final List<HiredMerchant> hms = c.getChannelServer().searchMerchant(itemSearch);
            if (hms.size() > 0) {
                c.getSession().write(CashPacket.getOwlSearched(itemSearch, hms));
                InventoryManipulator.removeById(c, MapleInventoryType.USE, itemid, 1, true, false);
            } else {
                c.getPlayer().dropMessage(1, "해당 아이템을 찾을 수 없습니다.");
            }
        }
        c.getSession().write(MainPacketCreator.resetActions());
    }

    public static void Owl(final ReadingMaple slea, final MapleClient c) {
        if (c.getPlayer().haveItem(5230000, 1, true, false) || c.getPlayer().haveItem(2310000, 1, true, false)) {
            if (c.getPlayer().getMapId() >= 910000000 && c.getPlayer().getMapId() <= 910000022) {
                c.getSession().write(CashPacket.getOwlOpen());
            } else {
                c.getPlayer().dropMessage(5, "자유시장에서만 쓰실 수 있습니다.");
                c.getSession().write(MainPacketCreator.resetActions());
            }
        }
    }
    public static final int OWL_ID = 2;

    public static void OwlWarp(final ReadingMaple slea, final MapleClient c) {
        if (!c.getPlayer().isAlive()) {
            c.getSession().write(CashPacket.getOwlMessage(4));
            return;
        } else if (c.getPlayer().getTrade() != null) {
            c.getSession().write(CashPacket.getOwlMessage(7));
            return;
        }
        if (c.getPlayer().getMapId() >= 910000000 && c.getPlayer().getMapId() <= 910000022 && !c.getPlayer().hasBlockedInventory()) {
            final int id = slea.readInt();
            final int map = slea.readInt();
            if (map >= 910000001 && map <= 910000022) {
                c.getSession().write(CashPacket.getOwlMessage(0));
                final MapleMap mapp = c.getChannelServer().getMapFactory().getMap(map);
                c.getPlayer().changeMap(mapp, mapp.getPortal(0));
                HiredMerchant merchant = null;
                List<MapleMapObject> objects;
                switch (OWL_ID) {
                    case 0:
                        objects = mapp.getAllHiredMerchant();
                        for (MapleMapObject ob : objects) {
                            if (ob instanceof IMapleCharacterShop) {
                                final IMapleCharacterShop ips = (IMapleCharacterShop) ob;
                                if (ips instanceof HiredMerchant) {
                                    final HiredMerchant merch = (HiredMerchant) ips;
                                    if (merch.getOwnerId() == id) {
                                        merchant = merch;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    case 1:
                        objects = mapp.getAllHiredMerchant();
                        for (MapleMapObject ob : objects) {
                            if (ob instanceof IMapleCharacterShop) {
                                final IMapleCharacterShop ips = (IMapleCharacterShop) ob;
                                if (ips instanceof HiredMerchant) {
                                    final HiredMerchant merch = (HiredMerchant) ips;
                                    if (merch.getStoreId() == id) {
                                        merchant = merch;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        final MapleMapObject ob = mapp.getMapObject(id, MapleMapObjectType.HIRED_MERCHANT);
                        if (ob instanceof IMapleCharacterShop) {
                            final IMapleCharacterShop ips = (IMapleCharacterShop) ob;
                            if (ips instanceof HiredMerchant) {
                                merchant = (HiredMerchant) ips;
                            }
                        }
                        break;
                }
                if (merchant != null) {
                    if (merchant.isOwner(c.getPlayer())) {
                        merchant.setOpen(false);
                        merchant.removeAllVisitors((byte) 16, (byte) 0);
                        c.getPlayer().setPlayerShop(merchant);
                        c.getSession().write(PlayerShopPacket.getHiredMerch(c.getPlayer(), merchant, false));
                    } else {
                        if (!merchant.isOpen()) {
                            c.getPlayer().dropMessage(1, "The owner of the store is currently undergoing store maintenance. Please try again in a bit.");
                        } else {
                            if (merchant.getFreeSlot() == -1) {
                                c.getPlayer().dropMessage(1, "You can't enter the room due to full capacity.");
                            } else if (merchant.isInBlackList(c.getPlayer().getName())) {
                                c.getPlayer().dropMessage(1, "이 상점에 입장 하실 수 없습니다.");
                            } else {
                                c.getPlayer().setPlayerShop(merchant);
                                merchant.addVisitor(c.getPlayer());
                                c.getSession().write(PlayerShopPacket.getHiredMerch(c.getPlayer(), merchant, false));
                            }
                        }
                    }
                } else {
                    c.getPlayer().dropMessage(1, "이 상점은 이미 닫혔습니다.");
                }
            } else {
                c.getSession().write(CashPacket.getOwlMessage(23));
            }
        } else {
            c.getSession().write(CashPacket.getOwlMessage(23));
        }
    }

    public static void UseBlackCube(MapleClient c, ReadingMaple rh) {
        rh.skip(4);
        byte BA = rh.readByte();
        Equip AE = null;
        Equip ZeroWeapon = null;
        if (c.getPlayer().MemorialE.getPosition() > 0) {
            AE = (Equip)(c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(c.getPlayer().MemorialE.getPosition()));
        } else {
            AE = (Equip)(c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(c.getPlayer().MemorialE.getPosition()));
        }
        if (BA == 7) {
            if (c.getPlayer().MemorialE.getPosition() > 0) {
                ((Equip)(c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(c.getPlayer().MemorialE.getPosition()))).set(c.getPlayer().MemorialE);
            } else {
                ((Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(c.getPlayer().MemorialE.getPosition())).set(c.getPlayer().MemorialE);
            }
        }
        if (GameConstants.isZeroWeapon(c.getPlayer().MemorialE.getItemId())) {
            ZeroWeapon = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11);
            ZeroWeapon.setState(AE.getState());
            ZeroWeapon.setLines(AE.getLines());
            ZeroWeapon.setPotential1(AE.getPotential1());
            ZeroWeapon.setPotential2(AE.getPotential2());
            ZeroWeapon.setPotential3(AE.getPotential3());
        }
        c.getPlayer().MemorialE = null;
        c.send(MainPacketCreator.updateEquipSlot(AE));
        if (ZeroWeapon != null) {
            c.send(MainPacketCreator.updateEquipSlot(ZeroWeapon));
        }
    }
    
    public static void resetZeroWeapon(final MapleCharacter chr) {
        Equip newa = (Equip)ItemInformation.getInstance().getEquipById(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11).getItemId());
        Equip newb = (Equip)ItemInformation.getInstance().getEquipById(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10).getItemId());
        ((Equip)chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11)).set(newa);
        ((Equip)chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10)).set(newb);
        chr.send(MainPacketCreator.updateEquipSlot(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11)));
        chr.send(MainPacketCreator.updateEquipSlot(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10)));
        chr.dropMessage(5, "제로의 장비는 파괴되는 대신 처음 상태로 되돌아갑니다.");
    }
}
