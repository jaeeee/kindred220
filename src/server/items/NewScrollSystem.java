package server.items;

import client.MapleClient;
import client.MapleCharacter;
import client.items.Equip;
import client.items.IEquip.ScrollResult;
import client.items.IItem;
import client.items.Item;
import client.items.ItemFlag;
import client.items.MapleInventory;
import client.items.MapleInventoryType;
import client.items.MapleWeaponType;
import client.stats.EnchantEquipStats;
import client.stats.EquipStats;
import client.stats.PlayerStat;
import constants.GameConstants;
import constants.ServerConstants;
import handler.channel.InventoryHandler;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import packet.creators.MainPacketCreator;
import packet.creators.PacketProvider;
import packet.opcode.SendPacketOpcode;
import packet.transfer.read.ReadingMaple;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import provider.MapleData;
import provider.MapleDataTool;
import server.maps.MapleMap;
import tools.HexTool;
import tools.Pair;
import tools.RandomStream.Randomizer;

public class NewScrollSystem {

    private static int itemstaticcount;
    private static int itemstatic1;
    private static int itemstatic2;
    private static int itemstatic3;
    private static int itemstatic4;
    private static int itemstatic5;
    private static String scrollstring1;
    private static String scrollstring2;
    private static String scrollstring3;
    private static String scrollstring4;
    private static String scrollstring5;
    private static int scrollcount;
    private static int scrollacount;
    private static int scrollorder;
    private static int StarPer[] = {0, 0, 0};
    private static List<Pair<EnchantEquipStats, Integer>> stata = new ArrayList<Pair<EnchantEquipStats, Integer>>();
    
    public static void AddItemRecv(ReadingMaple rh, MapleClient c) {
        short position;
        Equip item;
        byte a = rh.readByte();
        if (a == 0) {
            rh.skip(4);
            position = rh.readShort();
            short sposition = rh.readShort();
            boolean success = false;
            if (position > 0) {
                item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(position);
            } else {
                item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(position);
            }
            
            
            int persent[] = {30, 100, 70};
            int persent1[] = {15, 100, 70, 30};
            int persentFever[] = {45, 100, 95};
            int persent1Fever[] = {25, 100, 95, 45};
            if (c.getPlayer().getGMLevel() > 5) {
                success = true;
            }
            if (scrollcount % 3 == 0 && scrollcount != 12) {
                if (ServerConstants.feverTime) {
                    if (Randomizer.isSuccess(persentFever[((sposition + 1) % 3)])) {
                        success = true;
                    }
                } else {
                    if (Randomizer.isSuccess(persent[((sposition + 1) % 3)])) {
                        success = true;
                    }
                }
            }
            if (scrollcount % 4 == 0 || scrollcount == 12) {
                if (ServerConstants.feverTime) {
                    if (Randomizer.isSuccess(persent1Fever[((sposition + 1) % 4)])) {
                        success = true;
                    }
                } else {
                    if (Randomizer.isSuccess(persent1[((sposition + 1) % 4)])) {
                        success = true;
                    }
                }
            }
            c.send(UpdateItemResult(item, success, sposition, c.getPlayer()));
            Equip zeros = null;
            if (GameConstants.isZero(c.getPlayer().getJob())) {
                if (item.getPosition() == -11) {
                    zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10);
                } else if (item.getPosition() == -10) {
                    zeros = (Equip)c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11);
                }
            }
            c.send(MainPacketCreator.updateEquipSlot(item));
            if (zeros != null) {
                c.send(MainPacketCreator.updateEquipSlot(zeros));
            }
        } else if (a == 0x32) {
            position = rh.readShort();
            int scrollcount = 0;
            rh.skip(2);
            if (position > 0) {
                item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(position);
            } else {
                item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(position);
            }
            c.send(AddItemOnSystem(c, scrollcount, item, a, ServerConstants.feverTime));
        } else if (a == 0x35) {//StarForceChance
            if (ServerConstants.feverTime || c.getPlayer().getGMLevel() > 0) {
                if (c.getPlayer().ForcingItem() > 0) {
                    item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short)(c.getPlayer().ForcingItem()));
                } else {
                    item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)(c.getPlayer().ForcingItem()));
                }
                StarSystem(c.getPlayer(), item, false);
            } else {
                c.getPlayer().send(StarForceChance());
            }
        } else if (a == 0x1) {//StarForceUpgrade!
            boolean chance = false;
            rh.skip(4);
            if (c.getPlayer().ForcingItem() > 0) {
                item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short)c.getPlayer().ForcingItem());
            } else {
                item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)c.getPlayer().ForcingItem());
            }
            if (rh.readByte() == 0) {
                chance = true;
            }
            StarSystem(c.getPlayer(), item, chance);
        } else if (a == 0x34) {
            short slot = rh.readShort();
            c.getPlayer().setForcingItem(slot);
            if (slot > 0) {
                item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(slot);
            } else {
                item = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot);
            }
            StarSystemSet(item, c.getPlayer());
            c.getPlayer().send(StarForceItemSet(item, StarForceMeso(item), StarPer[0], StarPer[1], StarPer[2]));
        }
    }
    
    public static int AddAllSmalls(int a) {
        int c = a;
        int b = 0;
        if (a <= 0) {
            return 0;
        } else {
            for (int i = 1; i < 2147483647; i++) {
                if ((a - i) > 0) {
                    c -= 1;
                    b += (a - i);
                } else {
                    break;
                }
            }
        }
        return b + a;
    }
    
    public static Pair<String, Boolean> isSuperial(int itemid) {
        if ((itemid >= 1102471 && itemid <= 1102475) || (itemid >= 1072732 && itemid <= 1072736) || (itemid >= 1132164 && itemid <= 1132168)) {
            return new Pair<String, Boolean>("Helisium", true);
        } else if ((itemid >= 1102476 && itemid <= 1102480) || (itemid >= 1072737 && itemid <= 1072741) || (itemid >= 1132169 && itemid <= 1132173)) {
            return new Pair<String, Boolean>("Nova", true);
        } else if ((itemid >= 1102481 && itemid <= 1102485) || (itemid >= 1072743 && itemid <= 1072747) || (itemid >= 1132174 && itemid <= 1132178 || (itemid >= 1082543 && itemid <= 1082547))) {
            return new Pair<String, Boolean>("Tilent", true);
        } else if ((itemid >= 1122241 && itemid <= 1122245)) {
            return new Pair<String, Boolean>("MindPendent", true);
        }
        return new Pair<String, Boolean>(null, false);
    }
    
    public static Packet StarForceItemSet(Equip item, long meso, int sucper, int downper, int desper) {
        WritingPacket Packet = new WritingPacket();
        Packet.writeShort(SendPacketOpcode.EQUIP_UPGRADE_SYSTEM.getValue());
        Packet.write(0x34);
        Packet.write(downper > 0 ? desper > 0 ? 2 : 1 : 0);
        Packet.writeLong(meso);
        Packet.writeInt(sucper * 10);
        Packet.writeInt(desper * 10);
        Packet.write(0);
        StarForceStat(item, Packet, item.getEnhance() == 0 ? 0 : (item.getEnhance() - 25));
        return Packet.getPacket();
    }
    
    public static EnchantEquipStats Stat1(Equip item, int ReqJob) {
        if (GameConstants.isWeapon(item.getItemId())) {
            if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SWORD1H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.AXE1H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.BLUNT1H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SWORD2H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.AXE2H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.BLUNT2H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SPEAR || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.POLE_ARM || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.KNUCKLE || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.HANDCANNON || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SWORD || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.TEDO || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.DAGGER || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.ENERGYSWORD) {
                return EnchantEquipStats.STR;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SOULSHOOTER || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.BOW || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.CROSSBOW || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.GUN || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.DUALBOW) {
                return EnchantEquipStats.DEX;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.WAND || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.STAFF || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.PLANE) {
                return EnchantEquipStats.INT;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.CLAW || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.CAIN || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.KATARA) {
                return EnchantEquipStats.LUK;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.DESPERADO) {
                return EnchantEquipStats.HP;
            }
        } else {
                switch (ReqJob) {
                    case 0:
                        return EnchantEquipStats.STR;
                    case 1:
                    case 16:
                        return EnchantEquipStats.STR;
                    case 2:
                        return EnchantEquipStats.INT;
                    case 4:
                        return EnchantEquipStats.DEX;
                    case 8:
                        return EnchantEquipStats.LUK;
                }
        }
        return null;
    }
    
    public static EnchantEquipStats Stat2(Equip item, int ReqJob) {
        if (GameConstants.isWeapon(item.getItemId())) {
            if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SWORD1H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.AXE1H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.BLUNT1H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SWORD2H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.AXE2H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.BLUNT2H || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SPEAR || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.POLE_ARM || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.KNUCKLE || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.HANDCANNON || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SWORD || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.TEDO || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.DAGGER || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.ENERGYSWORD) {
                return EnchantEquipStats.DEX;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.SOULSHOOTER || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.BOW || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.CROSSBOW || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.GUN || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.DUALBOW) {
                return EnchantEquipStats.STR;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.WAND || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.STAFF || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.PLANE) {
                return EnchantEquipStats.LUK;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.CLAW || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.CAIN || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.KATARA || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.DAGGER) {
                return EnchantEquipStats.DEX;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.DESPERADO) {
                return EnchantEquipStats.STR;
            }
        } else {
                switch (ReqJob) {
                    case 0:
                        return EnchantEquipStats.DEX;
                    case 1:
                    case 16:
                        return EnchantEquipStats.DEX;
                    case 2:
                        return EnchantEquipStats.LUK;
                    case 4:
                        return EnchantEquipStats.STR;
                    case 8:
                        return EnchantEquipStats.DEX;
                }
        }
        return null;
    }
    
    public static EnchantEquipStats Stat3(Equip item, int ReqJob) {
        if (GameConstants.isWeapon(item.getItemId())) {
            if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.ENERGYSWORD) {
                return EnchantEquipStats.LUK;
            } else if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.DESPERADO) {
                return EnchantEquipStats.DEX;
            }
        } else {
                switch (ReqJob) {
                    case 0:
                        return EnchantEquipStats.INT;
                    case 8:
                        return EnchantEquipStats.STR;
                    case 16:
                        return EnchantEquipStats.LUK;
                }
        }
        return null;
    }
    public static EnchantEquipStats Stat4(Equip item, int ReqJob) {
        if (!GameConstants.isWeapon(item.getItemId())) {
            switch (ReqJob) {
                case 0:
                    return EnchantEquipStats.LUK;
                }
        }
        return null;
    }
    public static EnchantEquipStats Atk(Equip item) {
        if (GameConstants.isWeapon(item.getItemId())) {
            if (GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.WAND || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.STAFF || GameConstants.getWeaponType(item.getItemId()) == MapleWeaponType.PLANE) {
                return EnchantEquipStats.MATK;
            } else {
                return EnchantEquipStats.WATK;
            }
        }
        return null;
    }
    
    public static void StarForceStat(Equip item, WritingPacket Packet, int enhance) {
        stata.removeAll(stata);
        int stats = 0;
        MapleWeaponType a;
        final ItemInformation ii = ItemInformation.getInstance();
        final MapleData IData = ii.getItemData(item.getItemId());
        final MapleData info = IData.getChildByPath("info");
        int Job = MapleDataTool.getInt("reqJob", info, 0);
        Pair<String, Boolean> superial = isSuperial(item.getItemId());
        if (superial.getRight()) {
            if (enhance >= 5 && enhance < 15) {
                if (superial.getLeft().equals("Helisium")) {
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WATK, 3 + AddAllSmalls(enhance - 5)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MATK, 3 + AddAllSmalls(enhance - 5)));
                } else if (superial.getLeft().equals("Nova")){
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WATK, 6 + AddAllSmalls(enhance - 5)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MATK, 6 + AddAllSmalls(enhance - 5)));
                } else if (superial.getLeft().equals("Tilent")){
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WATK, 9 + AddAllSmalls(enhance - 5)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MATK, 9 + AddAllSmalls(enhance - 5)));
                } else if (superial.getLeft().equals("MindPendent")){
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WATK, 9 + AddAllSmalls(enhance - 5)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MATK, 9 + AddAllSmalls(enhance - 5)));
                }
            } else {
                if (superial.getLeft().equals("Helisium")) {
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.STR, 5 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.DEX, 5 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.INT, 5 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.LUK, 5 + AddAllSmalls(enhance)));
                } else if (superial.getLeft().equals("Nova")){
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.STR, 10 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.DEX, 10 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.INT, 10 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.LUK, 10 + AddAllSmalls(enhance)));
                } else if (superial.getLeft().equals("Tilent")){
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.STR, 20 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.DEX, 20 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.INT, 20 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.LUK, 20 + AddAllSmalls(enhance)));
                } else if (superial.getLeft().equals("MindPendent")){
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.STR, 20 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.DEX, 20 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.INT, 20 + AddAllSmalls(enhance)));
                    stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.LUK, 20 + AddAllSmalls(enhance)));
                }
            }
        } else {
        if (GameConstants.isWeapon(item.getItemId())) {
                    if (ItemInformation.getInstance().getEquipStats(item.getItemId()).get("reqLevel") > 100) {
                        if (enhance < 15) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Atk(item), Atk(item) == EnchantEquipStats.WATK ? ((item.getWatk() / 50) + 1) : ((item.getMatk() / 50) + 1)));
                        } else {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Atk(item), Atk(item) == EnchantEquipStats.WATK ? ((item.getWatk() / 20) + 1) : ((item.getMatk() / 20) + 1)));
                        }
                        if (enhance >= 4 && enhance < 10) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 5));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 5));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 5)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 5)); }
                        } else if (enhance >= 10 && enhance < 15) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 7));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 7));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 7)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 7)); }
                        } else if (enhance >= 15 && enhance < 20) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 15));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 15));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 15)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 15)); }
                        } else if (enhance >= 20 && enhance < 25) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 30));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 30));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 30)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 30)); }
                        } else {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 3));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 3));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 3)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 3)); }
                        }
                        if (Stat1(item, Job) != EnchantEquipStats.HP && Stat2(item, Job) != EnchantEquipStats.HP && Stat3(item, Job) != EnchantEquipStats.HP && Stat4(item, Job) != EnchantEquipStats.HP) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.HP, 10));
                        }
                        stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MP, 10));
                    } else {
                        stata.add(new Pair<EnchantEquipStats, Integer>(Atk(item), Atk(item) == EnchantEquipStats.WATK ? ((item.getWatk() / 50) + 1) : ((item.getMatk() / 50) + 1)));
                        if (Stat1(item, Job) != EnchantEquipStats.HP && Stat2(item, Job) != EnchantEquipStats.HP && Stat3(item, Job) != EnchantEquipStats.HP && Stat4(item, Job) != EnchantEquipStats.HP) {
                        stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.HP, 5));
                        }
                        stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MP, 5));
                        stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 2));
                        stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 2));
                        if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 2)); }
                        if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 2)); }
                    }
        } else {
                    if (ItemInformation.getInstance().getEquipStats(item.getItemId()).get("reqLevel") > 100) {
                        if (enhance >= 4 && enhance < 10) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 5));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 5));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 5)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 5)); }
                        } else if (enhance >= 10 && enhance < 15) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 7));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 7));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 7)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 7)); }
                        } else if (enhance >= 15 && enhance < 20) {
                            if (enhance >= 17) {
                                stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WATK, enhance-4));
                                stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MATK, enhance-4));
                            }
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 15));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 15));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 15)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 15)); }
                        } else if (enhance >= 20 && enhance < 25) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WATK, enhance+2));
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MATK, enhance+2));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 30));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 30));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 30)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 30)); }
                        } else {
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 3));
                            stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 3));
                            if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 3)); }
                            if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 3)); }
                        }
                        if (Stat1(item, Job) != EnchantEquipStats.HP && Stat2(item, Job) != EnchantEquipStats.HP && Stat3(item, Job) != EnchantEquipStats.HP && Stat4(item, Job) != EnchantEquipStats.HP) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.HP, 50));
                        }
                        stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MP, 50));
                        if (enhance >= 4 && enhance < 10) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WDEF, 15));
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MDEF, 15));
                        } else if (enhance >= 10 && enhance < 15) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WDEF, 25));
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MDEF, 25));                    
                        } else if (enhance >= 15 && enhance < 20) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WDEF, 55));
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MDEF, 55));
                        } else if (enhance >= 20 && enhance < 25) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WDEF, 95));
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MDEF, 95));
                        } else {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WDEF, 9));
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MDEF, 9));
                        }
                    } else {
                        stata.add(new Pair<EnchantEquipStats, Integer>(Stat1(item, Job), 2));
                        stata.add(new Pair<EnchantEquipStats, Integer>(Stat2(item, Job), 2));
                        if (Stat3(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat3(item, Job), 2)); }
                        if (Stat4(item, Job) != null) { stata.add(new Pair<EnchantEquipStats, Integer>(Stat4(item, Job), 2)); }
                        if (Stat1(item, Job) != EnchantEquipStats.HP && Stat2(item, Job) != EnchantEquipStats.HP && Stat3(item, Job) != EnchantEquipStats.HP && Stat4(item, Job) != EnchantEquipStats.HP) {
                            stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.HP, 5));
                        }
                        stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MP, 5));
                        stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.WDEF, 5));
                        stata.add(new Pair<EnchantEquipStats, Integer>(EnchantEquipStats.MDEF, 5));
                    }
        }
        }
        for (int i = 0; i < stata.size(); i++) {
            stats |= stata.get(i).left.getValue();
        }
        if (Packet != null) {
            Packet.writeInt(stats);
            for (int i = 0; i < stata.size(); i++) {
                Packet.writeInt(stata.get(i).getRight());
            }
        }
    }
    
    public static Packet StarForceChance() {
        WritingPacket Packet = new WritingPacket();
        Packet.writeShort(SendPacketOpcode.EQUIP_UPGRADE_SYSTEM.getValue());
        Packet.write(HexTool.getByteArrayFromHexString("35 00 00 C8 3C 87"));
        return Packet.getPacket();
    }
    
    public static void StarSystemUpgrade(Equip equip, int success, MapleCharacter chr) {
        if (success == 1) {
            for (int i = 0; i < stata.size(); i++) {
                EquipStats use = null;
                switch (stata.get(i).getLeft().getValue()) {
                    case 0x1:
                        equip.setWatk((short)(equip.getWatk() + stata.get(i).getRight()));
                        break;
                    case 0x2:
                        equip.setMatk((short)(equip.getMatk() + stata.get(i).getRight()));
                        break;
                    case 0x4:
                        equip.setStr((short)(equip.getStr() + stata.get(i).getRight()));
                        break;
                    case 0x8:
                        equip.setDex((short)(equip.getDex() + stata.get(i).getRight()));
                        break;
                    case 0x10:
                        equip.setInt((short)(equip.getInt() + stata.get(i).getRight()));
                        break;
                    case 0x20:
                        equip.setLuk((short)(equip.getLuk() + stata.get(i).getRight()));
                        break;
                    case 0x40:
                        equip.setWdef((short)(equip.getWdef() + stata.get(i).getRight()));
                        break;
                    case 0x80:
                        equip.setMdef((short)(equip.getMdef() + stata.get(i).getRight()));
                        break;
                    case 0x100:
                        equip.setHp((short)(equip.getHp() + stata.get(i).getRight()));
                        break;
                    case 0x200:
                        equip.setMp((short)(equip.getMp() + stata.get(i).getRight()));
                        break;
                    case 0x400:
                        equip.setAcc((short)(equip.getAcc() + stata.get(i).getRight()));
                        break;
                    case 0x800:
                        equip.setAvoid((short)(equip.getAvoid() + stata.get(i).getRight()));
                        break;
                }
            }
            if (equip.getEnhance() > 25) {
                equip.setEnhance((byte)(equip.getEnhance() + 1));
            } else {
                equip.setEnhance((byte)26);
            }
        } else if (success == 0) {
            StarForceStat(equip, null, equip.getEnhance() >= 26 ? equip.getEnhance() - 26 : equip.getEnhance() - 1);
            for (int i = 0; i < stata.size(); i++) {
                EquipStats use = null;
                switch (stata.get(i).getLeft().getValue()) {
                    case 0x1:
                        equip.setWatk((short)(equip.getWatk() - stata.get(i).getRight()));
                        break;
                    case 0x2:
                        equip.setMatk((short)(equip.getMatk() - stata.get(i).getRight()));
                        break;
                    case 0x4:
                        equip.setStr((short)(equip.getStr() - stata.get(i).getRight()));
                        break;
                    case 0x8:
                        equip.setDex((short)(equip.getDex() - stata.get(i).getRight()));
                        break;
                    case 0x10:
                        equip.setInt((short)(equip.getInt() - stata.get(i).getRight()));
                        break;
                    case 0x20:
                        equip.setLuk((short)(equip.getLuk() - stata.get(i).getRight()));
                        break;
                    case 0x40:
                        equip.setWdef((short)(equip.getWdef() - stata.get(i).getRight()));
                        break;
                    case 0x80:
                        equip.setMdef((short)(equip.getMdef() - stata.get(i).getRight()));
                        break;
                    case 0x100:
                        equip.setHp((short)(equip.getHp() - stata.get(i).getRight()));
                        break;
                    case 0x200:
                        equip.setMp((short)(equip.getMp() - stata.get(i).getRight()));
                        break;
                    case 0x400:
                        equip.setAcc((short)(equip.getAcc() - stata.get(i).getRight()));
                        break;
                    case 0x800:
                        equip.setAvoid((short)(equip.getAvoid() - stata.get(i).getRight()));
                        break;
                }
            }
            equip.setEnhance((byte)(equip.getEnhance() > 26 ? equip.getEnhance() - 1 : equip.getEnhance() - 26));
        }
    }
    
    public static void StarSystemUpdate(Equip equip, int success, MapleCharacter chr, boolean isZeroWeapon) {
        if (!isZeroWeapon) {
            chr.gainMeso(-StarForceMeso(equip), false);
        }
        chr.send(UpdateItemStar(equip, success, chr));
        if (success == 2) {//실패&펑
            if (GameConstants.isZero(chr.getJob()) && (equip.getPosition() == -11 || equip.getPosition() == -10)) {
                    InventoryHandler.resetZeroWeapon(chr);
            } else {
                if (equip.getPosition() > 0) {
                    chr.getInventory(MapleInventoryType.EQUIP).removeItem(equip.getPosition());
                } else {
                    chr.getInventory(MapleInventoryType.EQUIPPED).removeItem(equip.getPosition());
                }
            }
        } else {
            chr.send(MainPacketCreator.updateEquipSlot(equip));
        }
    }
    
    public static void StarSystemSet(Equip equip, MapleCharacter chr) {
        int enhance = (equip.getEnhance() > 25 ? equip.getEnhance() - 25 : 0);
        switch (enhance) {
            case 0:
                StarPer[0] = 95;
                StarPer[1] = 0;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 50;
                    StarPer[1] = 0;
                    StarPer[2] = 0;
                }
                break;
            case 1:
                StarPer[0] = 90;
                StarPer[1] = 0;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 45;
                    StarPer[1] = 55;
                    StarPer[2] = 0;
                }
                break;
            case 2:
                StarPer[0] = 85;
                StarPer[1] = 0;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 40;
                    StarPer[1] = 60;
                    StarPer[2] = 0;
                }
                break;
            case 3:
                StarPer[0] = 85;
                StarPer[1] = 0;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 35;
                    StarPer[1] = 65;
                    StarPer[2] = 0;
                }
                break;
            case 4:
                StarPer[0] = 80;
                StarPer[1] = 0;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 35;
                    StarPer[1] = 65;
                    StarPer[2] = 0;
                }
                break;
            case 5:
                StarPer[0] = 75;
                StarPer[1] = 0;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 30;
                    StarPer[1] = 70;
                    StarPer[2] = 0;
                }
                break;
            case 6:
                StarPer[0] = 70;
                StarPer[1] = 30;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 30;
                    StarPer[1] = 70;
                    StarPer[2] = 0;
                }
                break;
            case 7:
                StarPer[0] = 65;
                StarPer[1] = 35;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 30;
                    StarPer[1] = 70;
                    StarPer[2] = 0;
                }
                break;
            case 8:
                StarPer[0] = 60;
                StarPer[1] = 40;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 25;
                    StarPer[1] = 74;
                    StarPer[2] = 1;
                }
                break;
            case 9:
                StarPer[0] = 55;
                StarPer[1] = 45;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 25;
                    StarPer[1] = 72;
                    StarPer[2] = 3;
                }
                break;
            case 10:
                StarPer[0] = 45;
                StarPer[1] = 0;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 20;
                    StarPer[1] = 75;
                    StarPer[2] = 5;
                }
                break;
            case 11:
                StarPer[0] = 35;
                StarPer[1] = 65;
                StarPer[2] = 0;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 15;
                    StarPer[1] = 75;
                    StarPer[2] = 10;
                }
                break;
            case 12:
                StarPer[0] = 30;
                StarPer[1] = 69;
                StarPer[2] = 1;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 10;
                    StarPer[1] = 75;
                    StarPer[2] = 15;
                }
                break;
            case 13:
                StarPer[0] = 30;
                StarPer[1] = 69;
                StarPer[2] = 1;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 3;
                    StarPer[1] = 30;
                    StarPer[2] = 67;
                }
                break;
            case 14:
                StarPer[0] = 30;
                StarPer[1] = 69;
                StarPer[2] = 1;
                if (isSuperial(equip.getItemId()).right) {
                    StarPer[0] = 1;
                    StarPer[1] = 20;
                    StarPer[2] = 79;
                }
                break;
            case 15:
                StarPer[0] = 30;
                StarPer[1] = 0;
                StarPer[2] = 1;
                break;
            case 16:
                StarPer[0] = 30;
                StarPer[1] = 68;
                StarPer[2] = 2;
                break;
            case 17:
                StarPer[0] = 30;
                StarPer[1] = 68;
                StarPer[2] = 2;
                break;
            case 18:
                StarPer[0] = 30;
                StarPer[1] = 67;
                StarPer[2] = 3;
                break;
            case 19:
                StarPer[0] = 30;
                StarPer[1] = 67;
                StarPer[2] = 3;
                break;
            case 20:
                StarPer[0] = 30;
                StarPer[1] = 0;
                StarPer[2] = 7;
                break;
            case 21:
                StarPer[0] = 30;
                StarPer[1] = 63;
                StarPer[2] = 7;
                break;
            case 22:
                StarPer[0] = 3;
                StarPer[1] = 78;
                StarPer[2] = 19;
                break;
            case 23:
                StarPer[0] = 2;
                StarPer[1] = 69;
                StarPer[2] = 29;
                break;
            case 24:
                StarPer[0] = 1;
                StarPer[1] = 59;
                StarPer[2] = 40;
                break;
        }
        if (ServerConstants.feverTime || chr.getGMLevel() > 0) {
            StarPer[0] = 100;
            StarPer[1] = 0;
            StarPer[2] = 0;
        }
    }
    
    public static void StarSystem(MapleCharacter chr, Equip equip, boolean isChance) {
        int success = 0; int FailAndDown = 0; int FailAndDestroy = 0; int meso = 0;
        int enhance = (equip.getEnhance() > 25 ? equip.getEnhance() - 25 : 0);
        switch (enhance) {
            case 0:
                success = 95;
                if (isSuperial(equip.getItemId()).right) {
                    success = 50;
                }
                if (isChance) {
                    success += 5;
                }
                break;
            case 1:
                success = 90;
                if (isSuperial(equip.getItemId()).right) {
                    success = 45;
                    FailAndDown = 55;
                }
                if (isChance) {
                    success += 5;
                }
                break;
            case 2:
                success = 85;
                if (isSuperial(equip.getItemId()).right) {
                    success = 40;
                    FailAndDown = 60;
                }
                if (isChance) {
                    success += 5;
                }
                break;
            case 3:
                success = 85;
                if (isSuperial(equip.getItemId()).right) {
                    success = 35;
                    FailAndDown = 65;
                }
                if (isChance) {
                    success += 5;
                }
                break;
            case 4:
                success = 80;
                if (isSuperial(equip.getItemId()).right) {
                    success = 35;
                    FailAndDown = 65;
                }
                if (isChance) {
                    success += 5;
                }
                break;
            case 5:
                success = 75;
                if (isSuperial(equip.getItemId()).right) {
                    success = 30;
                    FailAndDown = 70;
                }
                if (isChance) {
                    success += 5;
                }
                break;
            case 6:
                success = 70;
                FailAndDown = 30;
                if (isSuperial(equip.getItemId()).right) {
                    success = 30;
                    FailAndDown = 70;
                }
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 7:
                success = 65;
                FailAndDown = 35;
                if (isSuperial(equip.getItemId()).right) {
                    success = 30;
                    FailAndDown = 70;
                }
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 8:
                success = 60;
                FailAndDown = 40;
                if (isSuperial(equip.getItemId()).right) {
                    success = 25;
                    FailAndDown = 74;
                    FailAndDestroy = 1;
                }
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 9:
                success = 55;
                FailAndDown = 45;
                if (isSuperial(equip.getItemId()).right) {
                    success = 25;
                    FailAndDown = 72;
                    FailAndDestroy = 3;
                }
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 10:
                success = 45;
                if (isSuperial(equip.getItemId()).right) {
                    success = 20;
                    FailAndDown = 75;
                    FailAndDestroy = 5;
                }
                if (isChance) {
                    success += 5;
                }
                break;
            case 11:
                success = 35;
                FailAndDown = 65;
                if (isSuperial(equip.getItemId()).right) {
                    success = 15;
                    FailAndDown = 75;
                    FailAndDestroy = 10;
                }
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 12:
                success = 30;
                FailAndDown = 69;
                FailAndDestroy = 1;
                if (isSuperial(equip.getItemId()).right) {
                    success = 10;
                    FailAndDown = 75;
                    FailAndDestroy = 15;
                }
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 13:
                success = 30;
                FailAndDown = 69;
                FailAndDestroy = 1;
                if (isSuperial(equip.getItemId()).right) {
                    success = 3;
                    FailAndDown = 30;
                    FailAndDestroy = 67;
                }
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 14:
                success = 30;
                FailAndDown = 69;
                FailAndDestroy = 1;
                if (isSuperial(equip.getItemId()).right) {
                    success = 1;
                    FailAndDown = 20;
                    FailAndDestroy = 69;
                }
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 15:
                success = 30;
                FailAndDestroy = 1;
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 16:
                success = 30;
                FailAndDown = 68;
                FailAndDestroy = 2;
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 17:
                success = 30;
                FailAndDown = 68;
                FailAndDestroy = 2;
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 18:
                success = 30;
                FailAndDown = 67;
                FailAndDestroy = 3;
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 19:
                success = 30;
                FailAndDown = 67;
                FailAndDestroy = 3;
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 20:
                success = 30;
                FailAndDestroy = 7;
                if (isChance) {
                    success += 3;
                    FailAndDown -= 3;
                }
                break;
            case 21:
                success = 30;
                FailAndDown = 63;
                FailAndDestroy = 7;
                if (isChance) {
                    success += 5;
                    FailAndDown -= 5;
                }
                break;
            case 22:
                success = 3;
                FailAndDown = 78;
                FailAndDestroy = 19;
                if (isChance) {
                    success += 1;
                    FailAndDown -= 1;
                }
                break;
            case 23:
                success = 2;
                FailAndDown = 69;
                FailAndDestroy = 29;
                if (isChance) {
                    success += 1;
                    FailAndDown -= 1;
                }
                break;
            case 24:
                success = 1;
                FailAndDown = 59;
                FailAndDestroy = 40;
                if (isChance) {
                    success += 1;
                    FailAndDown -= 1;
                }
                break;
        }
        if (ServerConstants.feverTime || chr.getGMLevel() > 0) {
            success = 100;
            FailAndDown = 0;
            FailAndDestroy = 0;
        }
        Equip zeros = null;
        if (GameConstants.isZero(chr.getJob())) {
            if (equip.getPosition() == -11) {
                zeros = (Equip)(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10));
            } else if (equip.getPosition() == -10) {
                zeros = (Equip)(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11));
            }
        }
        if (Randomizer.isSuccess(success)) {
            if (zeros != null) {
                StarSystemUpdate(zeros, 1, chr, true);
            }
            StarSystemUpdate(equip, 1, chr, false);
        } else {//1 : 성공 3 : 유지 2 : 펑 0 : 떨어짐으로 추정
            int Total = 100 - success;//일단 100에서 확률을빼서 ex 3퍼 : 97퍼로만든다
            if (FailAndDown > 0 && FailAndDestroy > 0) { //내려갈 확률, 터질 확률 전부 있을때 //97
                if (Randomizer.isSuccess(FailAndDown, Total)) {//내려갈 확률에 걸린다면
                    if (zeros != null) {
                        StarSystemUpdate(zeros, 0, chr, true);
                    }
                    StarSystemUpdate(equip, 0, chr, false);
                } else {//터질 확률에 걸린다면
                    if (zeros != null) {
                        StarSystemUpdate(equip, 2, chr, true);
                    }
                    StarSystemUpdate(equip, 2, chr, false);
                }
            } else if (FailAndDown > 0 && FailAndDestroy == 0) {//내려갈 확률만 있다면
                if (zeros != null) {
                    StarSystemUpdate(equip, 0, chr, true);
                }
                StarSystemUpdate(equip, 0, chr, false);
            } else if (FailAndDown == 0 && FailAndDestroy == 0) {//등급 유지된다면
                if (zeros != null) {
                    StarSystemUpdate(equip, 3, chr, true);
                }
                StarSystemUpdate(equip, 3, chr, false);
            } else if (FailAndDown == 0 && FailAndDestroy > 0) {//터지는 확률만 있다면
                if (Randomizer.isSuccess(FailAndDestroy, Total)) {//펑
                    if (zeros != null) {
                        StarSystemUpdate(equip, 2, chr, true);
                    }
                    StarSystemUpdate(equip, 2, chr, false);
                } else {//유지
                    if (zeros != null) {
                        StarSystemUpdate(equip, 3, chr, true);
                    }
                    StarSystemUpdate(equip, 3, chr, false);
                }
            }
        }
    }
    
    public static int ItemJuhun(int scrollnumber) {
        int juhun = 0;
            int itemstatic[] = {itemstatic1, itemstatic2, itemstatic3, itemstatic4, itemstatic5};
            String itemstring[] = {scrollstring1, scrollstring2, scrollstring3, scrollstring4, scrollstring5};
            int a = 0;
            if (scrollcount % 3 == 0 && scrollcount != 12) {
                a = 3;
            } else if (scrollcount % 4 == 0 || scrollcount == 12) {
                a = 4;
            }
        if (((scrollnumber +1) % a) == 1) {//100%일때
            if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운" || itemstring[scrollnumber / a] == "체력") {
                juhun = 26;
            } else if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "마력(지력)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                juhun = 160;
            } else if (itemstring[scrollnumber / a] == "공격력" || itemstring[scrollnumber / a] == "마력") {
                juhun = 9;
            }
        } else if (((scrollnumber + 1) % a) == 2) {//70%일때
            if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운" || itemstring[scrollnumber / a] == "체력") {
                juhun = 34;
            } else if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "마력(지력)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                juhun = 200;
            } else if (itemstring[scrollnumber / a] == "공격력" || itemstring[scrollnumber / a] == "마력") {
                juhun = 11;
            }
        } else if ((((scrollnumber + 1)) % a) == 0) {//30%일때
            if (a == 4) {
            if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운" || itemstring[scrollnumber / a] == "체력") {
                juhun = 50;
            } else if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "마력(지력)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                juhun = 290;
            } else if (itemstring[scrollnumber / a] == "공격력" || itemstring[scrollnumber / a] == "마력") {
                juhun = 20;
            }
            } else {
            if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운" || itemstring[scrollnumber / a] == "체력") {
                juhun = 40;
            } else if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "마력(지력)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                juhun = 240;
            } else if (itemstring[scrollnumber / a] == "공격력" || itemstring[scrollnumber / a] == "마력") {
                juhun = 14;
            }
                                }
            } else if ((((scrollnumber + 1)) % a) == 3) {
            if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운" || itemstring[scrollnumber / a] == "체력") {
                juhun = 40;
            } else if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "마력(지력)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                juhun = 240;
            } else if (itemstring[scrollnumber / a] == "공격력" || itemstring[scrollnumber / a] == "마력") {
                juhun = 14;
            }
          }
        return juhun;
    }
    
    public static void Itemupgrade(Equip item, int scrollnumber, boolean success, MapleCharacter chr, boolean zeroWeapon) {//숫자별로
        int juhun = ItemJuhun(scrollnumber);
        int 주흔코드 = 4001832;//서버에서 다른템으로도 대체할수있도록만듬
        if (success) {
            int itemstatic[] = {itemstatic1, itemstatic2, itemstatic3, itemstatic4, itemstatic5};
            String itemstring[] = {scrollstring1, scrollstring2, scrollstring3, scrollstring4, scrollstring5};
            int a = 0;
            if (scrollcount % 3 == 0 && scrollcount != 12) {
                a = 3;
            } else if (scrollcount % 4 == 0 || scrollcount == 12) {
                a = 4;
            }
                    if (((scrollnumber +1) % a) == 1) {//100%일때
                        if (itemstring[scrollnumber / a] == "힘"){
                                item.setStr((short) (item.getStr() + 2));
                        } else if (itemstring[scrollnumber / a] == "민첩"){
                        item.setDex((short) (item.getDex() + 2));
                        } else if (itemstring[scrollnumber / a] == "지력") {
                        item.setInt((short) (item.getInt() + 2));
                        } else if (itemstring[scrollnumber / a] == "운") {
                        item.setLuk((short) (item.getLuk() + 2));
                        } else if (itemstring[scrollnumber / a] == "공격력(힘)") {
                            item.setStr((short) (item.getStr() + 1));
                        } else if (itemstring[scrollnumber / a] == "공격력(민첩)") {
                            item.setDex((short) (item.getDex() + 1));
                        } else if (itemstring[scrollnumber / a] == "공격력(운)") {
                            item.setLuk((short) (item.getLuk() + 1));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setInt((short) (item.getInt() + 1));
                        } else if (itemstring[scrollnumber / a] == "공격력(체력)" || itemstring[scrollnumber / a] == "체력") {
                            item.setHp((short) (item.getHp() + 55));
                        }
                        if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운") {
                            item.setHp((short) (item.getHp() + 20));
                            item.setWdef((short) (item.getWdef() + 2));
                            item.setMdef((short) (item.getMdef() + 2));
                        }
                        if (itemstring[scrollnumber / a] == "공격력") {
                            item.setWatk((short) (item.getWatk() + 1));
                        } else if (itemstring[scrollnumber / a] == "마력") {
                            item.setMatk((short) (item.getMatk() + 1));
                        }
                        if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                            item.setWatk((short) (item.getWatk() + 3));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setMatk((short) (item.getMatk() + 3));
                        }

                    } else if (((scrollnumber + 1) % a) == 2) {//70%일때
                        if (itemstring[scrollnumber / a] == "힘"){
                        item.setStr((short) (item.getStr() + 3));
                        } else if (itemstring[scrollnumber / a] == "민첩"){
                        item.setDex((short) (item.getDex() + 3));
                        } else if (itemstring[scrollnumber / a] == "지력") {
                        item.setInt((short) (item.getInt() + 3));
                        } else if (itemstring[scrollnumber / a] == "운") {
                        item.setLuk((short) (item.getLuk() + 3));
                        } else if (itemstring[scrollnumber / a] == "공격력(힘)") {
                            item.setStr((short) (item.getStr() + 2));
                        } else if (itemstring[scrollnumber / a] == "공격력(민첩)") {
                            item.setDex((short) (item.getDex() + 2));
                        } else if (itemstring[scrollnumber / a] == "공격력(운)") {
                            item.setLuk((short) (item.getLuk() + 2));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setInt((short) (item.getInt() + 2));
                        } else if (itemstring[scrollnumber / a] == "공격력(체력)" || itemstring[scrollnumber / a] == "체력") {
                            item.setHp((short) (item.getHp() + 110));
                        }
                        if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운") {
                            item.setHp((short) (item.getHp() + 40));
                            item.setWdef((short) (item.getWdef() + 4));
                            item.setMdef((short) (item.getMdef() + 4));
                        }
                        if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                            item.setWatk((short) (item.getWatk() + 5));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setMatk((short) (item.getMatk() + 5));
                        }
                        if (itemstring[scrollnumber / a] == "공격력") {
                            item.setWatk((short) (item.getWatk() + 2));
                        } else if (itemstring[scrollnumber / a] == "마력") {
                            item.setMatk((short) (item.getMatk() + 2));
                        }
                    } else if ((((scrollnumber + 1)) % a) == 0) {//30%일때
                        if (a == 4) {
                            if (itemstring[scrollnumber / a] == "힘"){
                            item.setStr((short) (item.getStr() + 7));
                            } else if (itemstring[scrollnumber / a] == "민첩"){
                            item.setDex((short) (item.getDex() + 7));
                            } else if (itemstring[scrollnumber / a] == "지력") {
                            item.setInt((short) (item.getInt() + 7));
                            } else if (itemstring[scrollnumber / a] == "운") {
                            item.setLuk((short) (item.getLuk() + 7));
                            } else if (itemstring[scrollnumber / a] == "공격력(힘)") {
                            item.setStr((short) (item.getStr() + 4));
                        } else if (itemstring[scrollnumber / a] == "공격력(민첩)") {
                            item.setDex((short) (item.getDex() + 4));
                        } else if (itemstring[scrollnumber / a] == "공격력(운)") {
                            item.setLuk((short) (item.getLuk() + 4));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setInt((short) (item.getInt() + 4));
                        } else if (itemstring[scrollnumber / a] == "공격력(체력)" || itemstring[scrollnumber / a] == "체력") {
                            item.setHp((short) (item.getHp() + 255));
                        }
                        if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운") {
                            item.setHp((short) (item.getHp() + 90));
                            item.setWdef((short) (item.getWdef() + 9));
                            item.setMdef((short) (item.getMdef() + 9));
                        }
                        if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                            item.setWatk((short) (item.getWatk() + 9));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setMatk((short) (item.getMatk() + 9));
                        }
                        if (itemstring[scrollnumber / a] == "공격력") {
                            item.setWatk((short) (item.getWatk() + 4));
                        } else if (itemstring[scrollnumber / a] == "마력") {
                            item.setMatk((short) (item.getMatk() + 4));
                        }
                        } else {
                        if (itemstring[scrollnumber / a] == "힘"){
                        item.setStr((short) (item.getStr() + 5));
                        } else if (itemstring[scrollnumber / a] == "민첩"){
                        item.setDex((short) (item.getDex() + 5));
                        } else if (itemstring[scrollnumber / a] == "지력") {
                        item.setInt((short) (item.getInt() + 5));
                        } else if (itemstring[scrollnumber / a] == "운") {
                        item.setLuk((short) (item.getLuk() + 5));
                        } else if (itemstring[scrollnumber / a] == "공격력(민첩)") {
                            item.setDex((short) (item.getDex() + 3));
                        } else if (itemstring[scrollnumber / a] == "공격력(운)") {
                            item.setLuk((short) (item.getLuk() + 3));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setInt((short) (item.getInt() + 3));
                        } else if (itemstring[scrollnumber / a] == "공격력(체력)" || itemstring[scrollnumber / a] == "체력") {
                            item.setHp((short) (item.getHp() + 180));
                        } else if (itemstring[scrollnumber / a] == "공격력(힘)") {
                            item.setStr((short) (item.getStr() + 3));
                        }
                        if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운") {
                            item.setHp((short) (item.getHp() + 70));
                            item.setWdef((short) (item.getWdef() + 7));
                            item.setMdef((short) (item.getMdef() + 7));
                        }
                        if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                            item.setWatk((short) (item.getWatk() + 7));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setMatk((short) (item.getMatk() + 7));
                        }
                        if (itemstring[scrollnumber / a] == "공격력") {
                            item.setWatk((short) (item.getWatk() + 3));
                        } else if (itemstring[scrollnumber / a] == "마력") {
                            item.setMatk((short) (item.getMatk() + 3));
                        }
                        }
                    } else if ((((scrollnumber + 1)) % a) == 3) {
                        if (itemstring[scrollnumber / a] == "힘"){
                        item.setStr((short) (item.getStr() + 5));
                        } else if (itemstring[scrollnumber / a] == "민첩"){
                        item.setDex((short) (item.getDex() + 5));
                        } else if (itemstring[scrollnumber / a] == "지력") {
                        item.setInt((short) (item.getInt() + 5));
                        } else if (itemstring[scrollnumber / a] == "운") {
                        item.setLuk((short) (item.getLuk() + 5));
                        } else if (itemstring[scrollnumber / a] == "공격력(민첩)") {
                            item.setDex((short) (item.getDex() + 3));
                        } else if (itemstring[scrollnumber / a] == "공격력(운)") {
                            item.setLuk((short) (item.getLuk() + 3));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setInt((short) (item.getInt() + 3));
                        } else if (itemstring[scrollnumber / a] == "공격력(체력)" || itemstring[scrollnumber / a] == "체력") {
                            item.setHp((short) (item.getHp() + 180));
                        } else if (itemstring[scrollnumber / a] == "공격력(힘)") {
                            item.setStr((short) (item.getStr() + 3));
                        }
                        if (itemstring[scrollnumber / a] == "힘" || itemstring[scrollnumber / a] == "민첩" || itemstring[scrollnumber / a] == "지력" || itemstring[scrollnumber / a] == "운") {
                            item.setHp((short) (item.getHp() + 70));
                            item.setWdef((short) (item.getWdef() + 7));
                            item.setMdef((short) (item.getMdef() + 7));
                        }
                        if (itemstring[scrollnumber / a] == "공격력(힘)" || itemstring[scrollnumber / a] == "공격력(민첩)" || itemstring[scrollnumber / a] == "공격력(운)" || itemstring[scrollnumber / a] == "공격력(체력)") {
                            item.setWatk((short) (item.getWatk() + 7));
                        } else if (itemstring[scrollnumber / a] == "마력(지력)") {
                            item.setMatk((short) (item.getMatk() + 7));
                        }
                        if (itemstring[scrollnumber / a] == "공격력") {
                            item.setWatk((short) (item.getWatk() + 3));
                        } else if (itemstring[scrollnumber / a] == "마력") {
                            item.setMatk((short) (item.getMatk() + 3));
                        }
                    }
            item.setLevel((byte) (item.getLevel() + 1));
            item.setUpgradeSlots((byte)((byte)item.getUpgradeSlots() - 1));
        } else {
            if (!ItemFlag.SAFETY.check(item.getFlag())) {
                item.setUpgradeSlots((byte)((byte)item.getUpgradeSlots() - 1));
            }
        }
        if (ItemFlag.SAFETY.check(item.getFlag())) {
            item.setFlag((short) (item.getFlag() - ItemFlag.SAFETY.getValue()));
        }
        if (!zeroWeapon) {
            chr.gainItem(주흔코드, (short)-juhun, false, 0, null);
        }
    }
    
    public static Packet UpdateItemStar(Equip equip, int success, MapleCharacter chr) {
        WritingPacket Packet = new WritingPacket();
        Packet.writeShort(SendPacketOpcode.EQUIP_UPGRADE_SYSTEM.getValue());
        Packet.write(0x65);
        Packet.writeInt(success);
        Packet.write(0);
        PacketProvider.addStarForceItemInfo(Packet, equip);
        StarSystemUpgrade(equip, success, chr);
        if (success != 4) {
        PacketProvider.addStarForceItemInfo(Packet, equip);
        }
        return Packet.getPacket();
    }
    
    public static Packet UpdateItemResult(Equip item, boolean success, int scrollnumber, MapleCharacter chr) {
        WritingPacket Packet = new WritingPacket();
        Packet.writeShort(SendPacketOpcode.EQUIP_UPGRADE_SYSTEM.getValue());
        Packet.write(0x64);
        Packet.write(1);
        Packet.writeInt(success ? 1 : 0);
        PacketProvider.addStarForceItemInfo(Packet, item);
        Equip zeros = null;
        if (GameConstants.isZero(chr.getJob())) {
            if (item.getPosition() == -11) {
                zeros = (Equip)chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10);
            } else if (item.getPosition() == -10) {
                zeros = (Equip)chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11);
            }
        }
        if (zeros != null) {
            Itemupgrade(zeros, scrollnumber, success, chr, true);
        }
        Itemupgrade(item, scrollnumber, success, chr, false);
        PacketProvider.addStarForceItemInfo(Packet, item);
        
        return Packet.getPacket();
    }
    
    public static void scrollstaticvoid(int job, int itemtype) {
        boolean a = false;
        boolean b = false;
        boolean c = false;
        if (itemtype > 120 && itemtype < 172) {//a = 무기
            a = true;
        } else if (itemtype == 108) {//b = 장갑
            b = true;
        } else {//c = 다른것들
            c = true;
        }
        if (a) {
            switch(job) {
                case 0:
                    itemstaticcount = 5;
                    scrollacount = 4;
                    itemstatic1 = 5; //힘
                    itemstatic2 = 18; //지력
                    itemstatic3 = 9; //민첩
                    itemstatic4 = 33; //운
                    itemstatic5 = 257; //체력
                    scrollstring1 = "공격력(힘)";
                    scrollstring2 = "마력(지력)";
                    scrollstring3 = "공격력(민첩)";
                    scrollstring4 = "공격력(운)";
                    scrollstring5 = "공격력(체력)";
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 1:
                    itemstaticcount = 2;
                    itemstatic1 = 5; //공격력(힘)
                    itemstatic2 = 257; //체력
                    scrollstring1 = "공격력(힘)";
                    scrollstring2 = "공격력(체력)";
                    scrollacount = 4;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 2:
                    itemstaticcount = 1;
                    itemstatic1 = 18; //마력(지력)
                    scrollstring1 = "마력(지력)";
                    scrollacount = 4;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 4:
                    itemstaticcount = 2;
                    itemstatic1 = 9; //공격력(민첩)
                    itemstatic2 = 257; //체력
                    scrollstring1 = "공격력(민첩)";
                    scrollstring2 = "공격력(체력)";
                    scrollacount = 4;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 8:
                    itemstaticcount = 2;
                    itemstatic1 = 33; //공격력(운)
                    itemstatic2 = 257; //체력
                    scrollstring1 = "공격력(운)";
                    scrollstring2 = "공격력(체력)";
                    scrollacount = 4;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 16:
                case 24:
                    itemstaticcount = 3;
                    itemstatic1 = 5; //공격력(힘)
                    itemstatic2 = 9; //공격력(민첩)
                    itemstatic3 = 257; //체력
                    scrollstring1 = "공격력(힘)";
                    scrollstring2 = "공격력(민첩)";
                    scrollstring3 = "공격력(체력)";
                    scrollacount = 4;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
            }
        } else if (b) {
            switch(job) {
                case 0:
                    itemstaticcount = 2;
                    itemstatic1 = 1; //공격력
                    itemstatic2 = 2; //마력
                    scrollstring1 = "공격력";
                    scrollstring2 = "마력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 1:
                    itemstaticcount = 1;
                    itemstatic1 = 1;
                    scrollstring1 = "공격력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 2:
                    itemstaticcount = 2;
                    itemstatic1 = 1; //공격력
                    itemstatic2 = 2; //마력
                    scrollstring1 = "공격력";
                    scrollstring2 = "마력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 4:
                    itemstaticcount = 1;
                    itemstatic1 = 1;
                    scrollstring1 = "공격력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 8:
                    itemstaticcount = 1;
                    itemstatic1 = 1;
                    scrollstring1 = "공격력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 16:
                    itemstaticcount = 1;
                    itemstatic1 = 1;
                    scrollstring1 = "공격력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
            }
        } else if (c) {
            switch(job) {
                case 0:
                    itemstaticcount = 5;
                    itemstatic1 = 452;
                    itemstatic2 = 464;
                    itemstatic3 = 456;
                    itemstatic4 = 480;
                    itemstatic5 = 448;
                    scrollstring1 = "힘";
                    scrollstring2 = "지력";
                    scrollstring3 = "민첩";
                    scrollstring4 = "운";
                    scrollstring5 = "체력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 1:
                    itemstaticcount = 2;
                    itemstatic1 = 452;
                    itemstatic2 = 448;
                    scrollstring1 = "힘";
                    scrollstring2 = "체력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 2:
                    itemstaticcount = 2;//주문서 종류의 갯수
                    itemstatic1 = 464;//주문서종류별 고유번호1
                    itemstatic2 = 448;//2
                    scrollstring1 = "지력";//주문서 종류별 이름
                    scrollstring2 = "체력";
                    scrollacount = 3;//주문서 종류별 주문서의 갯수
                    scrollcount = itemstaticcount * scrollacount;//총 주문서의 갯수(주문서종류 * 종류별주문서의갯수)
                    break;
                case 4:
                    itemstaticcount = 2;
                    itemstatic1 = 456;
                    itemstatic2 = 448;
                    scrollstring1 = "민첩";
                    scrollstring2 = "체력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 8:
                    itemstaticcount = 3;
                    itemstatic1 = 452;
                    itemstatic2 = 456;
                    itemstatic3 = 480;
                    scrollstring1 = "힘";
                    scrollstring2 = "민첩";
                    scrollstring3 = "운";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
                case 16:
                    itemstaticcount = 3;
                    itemstatic1 = 452;
                    itemstatic2 = 456;
                    itemstatic3 = 448;
                    scrollstring1 = "힘";
                    scrollstring2 = "민첩";
                    scrollstring3 = "체력";
                    scrollacount = 3;
                    scrollcount = itemstaticcount * scrollacount;
                    break;
            }
        }
    }
    public static Packet AddItemOnSystem(MapleClient c, int ScrollCount, Equip item, int a, boolean FeverTime) {
        WritingPacket Packet = new WritingPacket();
        Packet.writeShort(SendPacketOpcode.EQUIP_UPGRADE_SYSTEM.getValue());//옵코드 : 256 Recv : 169
        Packet.write(0x32);
        Packet.write(FeverTime ? 1 : 0);
        int itemtype = item.getItemId() / 10000;
        final ItemInformation ii = ItemInformation.getInstance();
        final MapleData IData = ii.getItemData(item.getItemId());
        final MapleData info = IData.getChildByPath("info");
        int Job = MapleDataTool.getInt("reqJob", info, 0);
        scrollstaticvoid(Job, itemtype);
        int itemstatic[] = {itemstatic1, itemstatic2, itemstatic3, itemstatic4, itemstatic5};
        String itemstring[] = {scrollstring1, scrollstring2, scrollstring3, scrollstring4, scrollstring5};
        String Persent[] = {"100% ", "70% ", "30% ", "15% "};
        int stata[] = {452, 464, 456, 480, 1, 2};//Str, Int, Dex, Luk, Atk, Matk
        int juhunatk[] = {160, 200, 240, 290};
        int juhundefence[] = {26, 34, 40};
        int juhunglove[] = {9, 11, 14};
        int statdefence1[] = {2, 3, 5};
        int statdefence2[] = {2, 4, 7};
        int statdefenceHP[] = {20, 40, 70};
        int statHP[] = {55, 115, 180};
        int statAtkHp[] = {55, 115, 180, 255};
        int stathpa[] = {1, 2, 4};
        int statWeapon[] = {1, 2, 3, 4};
        int statWeapona[] = {3, 5, 7, 9};
        Packet.write(scrollcount);
        for (int j = 0; j < itemstaticcount; j++) {
            for (int i = 0; i < scrollacount; i++) {
                Packet.writeInt(i);
                Packet.writeMapleAsciiString(Persent[i] + itemstring[j] + " 주문서");
                Packet.writeInt(itemstatic[j]);
                if (itemstatic[j] > 448 && itemstatic[j] <= 480) {
                    Packet.writeInt(statdefence1[i]);
                    Packet.writeInt(statdefence2[i]);
                    Packet.writeInt(statdefence2[i]);
                    Packet.writeInt(statdefenceHP[i]);
                    Packet.writeInt(juhundefence[i]);
                } else if (itemstatic[j] == 448) {
                    Packet.writeInt(statHP[i]);
                    Packet.writeInt(stathpa[i]);
                    Packet.writeInt(stathpa[i]);
                    Packet.writeInt(juhundefence[i]);
                } else if (itemstatic[j] == 1 || itemstatic[j] == 2) {
                    Packet.writeInt(statWeapon[i]);
                    Packet.writeInt(juhunglove[i]);
                } else if (itemstatic[j] == 5 || itemstatic[j] == 9 || itemstatic[j] == 18 || itemstatic[j] == 33) {
                    Packet.writeInt(statWeapona[i]);
                    Packet.writeInt(statWeapon[i]);
                    Packet.writeInt(juhunatk[i]);
                } else if (itemstatic[j] == 257) {
                    Packet.writeInt(statWeapona[i]);
                    Packet.writeInt(statAtkHp[i]);
                    Packet.writeInt(juhunatk[i]);
                }
                scrollorder++;
            }
        }
        return Packet.getPacket();
    }
    public static long StarForceMeso(Equip item) {
        long base = 0;
        int ReqLevel = ItemInformation.getInstance().getEquipStats(item.getItemId()).get("reqLevel");
        int enhance = item.getEnhance() > 25 ? item.getEnhance() - 25 : item.getEnhance();
        if (isSuperial(item.getItemId()).right) {
            switch(isSuperial(item.getItemId()).left) {
                case "Helisium":
                    return 5956600;
                case "Nova" :
                    return 18507900;
                case "Tilent" :
                    return 55832200;
            }
        } else {
        if (ReqLevel < 110) {
            base = 41000;
            return (base + (enhance * 40000));
        } else if (ReqLevel >= 110 && ReqLevel < 120) {
            base = 54200;
            return (base + (enhance * 53300));
        } else if (ReqLevel >= 120 && ReqLevel < 130) {
            if (enhance <= 9) {
                base = 70100;
                return (base + (enhance * 70200));
            } else {
                base = 5602100;
                return (base + ((enhance - 8) * 1509500));
            }
        } else if (ReqLevel >= 130 && ReqLevel < 140) {
            if (enhance <= 9) {
                base = 88900;
                return (base + (enhance * 98800));
            } else {
                base = 7122300;
                return (base + ((enhance - 8) * 2156500));
            }
        } else if (ReqLevel >= 140 && ReqLevel < 150) {
            if (enhance <= 9) {
                base = 110800;
                return (base + (enhance * 110900));
            } else {
                base = 8895400;
                return (base + ((enhance - 8) * 5706700));
            }
        } else if (ReqLevel >= 150) {
            if (enhance <= 9) {
                base = 136000;
                return (base + (enhance * 153600));
            } else {
                base = 10940700;
                return (base + ((enhance - 8) * 8930500));
                }
            }
        }
        return 0;
    }
}
