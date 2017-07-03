/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.items;

import client.MapleAndroid;
import client.MaplePet;
import client.MapleCharacter;
import constants.ServerConstants;
import constants.GameConstants;
import database.MYSQL;
import database.MYSQLException;
import handler.channel.InventoryHandler;
import server.items.MapleCashInventory;
import server.items.MapleStorage;
import server.items.ItemInformation;
import server.items.MerchItemPackage;
import tools.Pair;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 *
 */
public class ItemFactory {

    public enum InventoryType {

        INVENTORY, STORAGE, MERCHANT, CASHSHOP
    }

    public static byte getType(ItemFactory.InventoryType type) {
        if (type == ItemFactory.InventoryType.CASHSHOP) {
            return 4;
        } else if (type == ItemFactory.InventoryType.MERCHANT) {
            return 3;
        } else if (type == ItemFactory.InventoryType.STORAGE) {
            return 2;
        } else if (type == ItemFactory.InventoryType.INVENTORY) {
            return 1;
        }
        return 0;

    }

    public static void addItem(MapleCharacter hp, IItem item, MapleInventoryType type) {
        hp.getInventory(type).addFromDB(item);
    }

    public static void loadItemsFromPlayer(MapleCharacter hp) {
        loadItems(hp, ItemFactory.InventoryType.INVENTORY, null, null, null);
    }

    public static void loadItemsFromMerchant(MerchItemPackage pack) {
        loadItems(null, ItemFactory.InventoryType.MERCHANT, null, pack, null);
    }
       
    public static void loadItemsFromStorage(MapleStorage store) {
        loadItems(null, ItemFactory.InventoryType.STORAGE, store, null, null);
    }

    public static void loadItemsFromCashShopInventory(MapleCashInventory cash) {
        loadItems(null, ItemFactory.InventoryType.CASHSHOP, null, null, cash);
    }

    public static void loadItems(final MapleCharacter hp, final ItemFactory.InventoryType invtype, final MapleStorage storage, final MerchItemPackage pack, final MapleCashInventory cash) {
        try {
            byte invstype;
            invstype = getType(invtype);
            Connection con = MYSQL.getConnection();
            PreparedStatement ps;
            if (invtype == ItemFactory.InventoryType.INVENTORY) {
                ps = con.prepareStatement("SELECT * FROM inventoryitems LEFT JOIN inventoryequipment USING (inventoryitemid) WHERE characterid = ? AND type = ? AND issale = 0  ");
                ps.setInt(1, hp.getId());
            } else if (invtype == ItemFactory.InventoryType.MERCHANT) {
                ps = con.prepareStatement("SELECT * FROM inventoryitems LEFT JOIN inventoryequipment USING (inventoryitemid) WHERE packageId = ? AND type = ?");
                ps.setInt(1, pack.getPackageid());
            } else {
                ps = con.prepareStatement("SELECT * FROM inventoryitems LEFT JOIN inventoryequipment USING (inventoryitemid) WHERE accountid = ? AND type = ? ");
                if (invtype == ItemFactory.InventoryType.STORAGE) {
                    ps.setInt(1, storage.getAccId());
                } else if (invtype == ItemFactory.InventoryType.CASHSHOP) {
                    ps.setInt(1, cash.getAccId());
                }
            }
            ps.setInt(2, invstype);
            ResultSet rs = ps.executeQuery();

            long expiration;
            boolean isCash;
            MapleInventoryType type;

            Item item;
            List<IItem> items = new ArrayList<IItem>();
            MaplePet pet;
            MapleAndroid android;
            while (rs.next()) {
                type = MapleInventoryType.getByType(rs.getByte("inventorytype"));
                expiration = rs.getLong("expiredate");
                isCash = rs.getInt("isCash") == 1;
                if (type.equals(MapleInventoryType.EQUIP) || type.equals(MapleInventoryType.EQUIPPED)) {
                    final Equip equip = new Equip(rs.getInt("itemid"), rs.getShort("position"), rs.getShort("flag"));
                    equip.setOwner(rs.getString("owner"));
                    equip.setQuantity(rs.getShort("quantity"));
                    equip.setAcc(rs.getShort("acc"));
                    equip.setAvoid(rs.getShort("avoid"));
                    equip.setDex(rs.getShort("dex"));
                    equip.setHands(rs.getShort("hands"));
                    equip.setHp(rs.getShort("hp"));
                    equip.setInt(rs.getShort("int"));
                    equip.setJump(rs.getShort("jump"));
                    equip.setLuk(rs.getShort("luk"));
                    equip.setMatk(rs.getShort("matk"));
                    equip.setMdef(rs.getShort("mdef"));
                    equip.setMp(rs.getShort("mp"));
                    equip.setSpeed(rs.getShort("speed"));
                    equip.setStr(rs.getShort("str"));
                    equip.setWatk(rs.getShort("watk"));
                    equip.setWdef(rs.getShort("wdef"));
                    equip.setItemLevel(rs.getByte("itemLevel"));
                    if (ItemInformation.getInstance().getMaxLevelEquip(equip.getItemId()) > 0 && equip.getItemLevel() == 0) {
                        equip.setItemLevel((byte) 1);
                    }
                    equip.setItemEXP(rs.getInt("itemEXP"));
                    equip.setViciousHammer(rs.getByte("ViciousHammer"));
                    equip.setDurability(rs.getInt("durability"));
                    equip.setEnhance(rs.getByte("enhance"));
                    equip.setPotential1(rs.getInt("potential1"));
                    equip.setPotential2(rs.getInt("potential2"));
                    equip.setPotential3(rs.getInt("potential3"));
                    equip.setPotential4(rs.getInt("potential4"));
                    equip.setPotential5(rs.getInt("potential5"));
                    equip.setPotential6(rs.getInt("potential6"));
                    equip.setPotential7(rs.getInt("potential7"));
                    equip.setanvil(rs.getInt("anvil"));
                    equip.setHpR(rs.getShort("hpR"));
                    equip.setMpR(rs.getShort("mpR"));         
                    equip.setState(rs.getByte("state"));
                    equip.setLines(rs.getByte("lines"));
                    equip.setFire((rs.getByte("fire")));
                    equip.setUpgradeSlots(rs.getByte("upgradeslots"));
                    equip.setLevel(rs.getByte("level"));
                    equip.setBossDamage(rs.getByte("bossdmg"));
                    equip.setAllDamageP(rs.getByte("alldmgp"));
                    equip.setAllStatP(rs.getByte("allstatp"));
                    equip.setDownLevel(rs.getShort("downlevel"));
                    equip.setIgnoreWdef(rs.getShort("IgnoreWdef"));
                    equip.setSoulName(rs.getShort("soulname"));
                    equip.setSoulEnchanter(rs.getShort("soulenchanter"));
                    equip.setSoulPotential(rs.getShort("soulpotential"));
                    equip.setSoulSkill(rs.getInt("soulskill"));
                    equip.setStarForce(rs.getByte("starforce"));
                    equip.setExpiration(expiration);
                    equip.setCash(isCash);
                    if (rs.getInt("isAndroid") > 0) {
                        android = MapleAndroid.loadFromDb(equip.getItemId(), rs.getInt("uniqueid"));
                        equip.setAndroid(android);
                    }
                    equip.setUniqueId(rs.getInt("uniqueid"));
                    equip.setGMLog(rs.getString("GM_Log"));
                    
                    int e = 1;
                    if (equip.getState() > 1) {
                        int[] potentials = {equip.getPotential1(), equip.getPotential2(), equip.getPotential3(), equip.getPotential4(), equip.getPotential5(), equip.getPotential6()};
                        for (int i : potentials) {
                            if (i > 0) {
                                int id = equip.getItemId();
                                if (i == 60002 || i == 31001 || i == 31002 || i == 31003 || i == 31004 || (GameConstants.getOptionType(id) != 10 && (i % 1000 == 70 || i % 1000 == 71 || i % 1000 == 291 || i % 1000 == 292 || i % 1000 == 601 || i % 1000 == 602 || i % 1000 == 603 || i >= 60000))) {
                                    int level = equip.getState() - 16;
                                    int temp = level;
                                    int a = 0;
                                    while (temp > 1) {
                                        if (temp > 1) {
                                            --temp;
                                            ++a;
                                        }
                                    }

                                    int option = InventoryHandler.potential(level, a, e == 1 ? true : false, id);
                                    if (e == 1)
                                        equip.setPotential1(option);
                                    else if (e == 2)
                                        equip.setPotential2(option);
                                    else if (e == 3)
                                        equip.setPotential3(option);
                                    else if (e == 4)
                                        equip.setPotential4(option);
                                    else if (e == 5)
                                        equip.setPotential5(option);
                                    else if (e == 6)
                                        equip.setPotential6(option);

                                }
                            }
                            e++;
                        }
                    }
                
                    if (invtype == ItemFactory.InventoryType.INVENTORY) {
                        hp.getInventory(type).addFromDB(equip);
                    } else if (invtype == ItemFactory.InventoryType.STORAGE) {
                        storage.getItems().add(equip);
                    } else if (invtype == ItemFactory.InventoryType.MERCHANT) {
                        items.add(equip);
                    } else if (invtype == ItemFactory.InventoryType.CASHSHOP) {
                        cash.getInventory().add(equip);
                    }
                } else {
                    item = new Item(rs.getInt("itemid"), rs.getShort("position"), rs.getShort("quantity"), rs.getByte("flag"));
                    item.setOwner(rs.getString("owner"));
                    item.setExpiration(expiration);
                    item.setGMLog(rs.getString("GM_Log"));
                    item.setGiftFrom(rs.getString("giftFrom"));
                    item.setCash(isCash);
                    if (rs.getInt("isPet") > 0) {
                        pet = MaplePet.loadFromDb(item.getItemId(), rs.getInt("uniqueid"), item.getPosition());
                        item.setPet(pet);
                    }
                    item.setUniqueId(rs.getInt("uniqueid"));
                    if (invtype == ItemFactory.InventoryType.INVENTORY) {
                        hp.getInventory(type).addFromDB(item);
                    } else if (invtype == ItemFactory.InventoryType.STORAGE) {
                        storage.getItems().add(item);
                    } else if (invtype == ItemFactory.InventoryType.MERCHANT) {
                        items.add(item);
                    } else if (invtype == ItemFactory.InventoryType.CASHSHOP) {
                        cash.getInventory().add(item);
                    }
                }
            }
            if (invtype == ItemFactory.InventoryType.MERCHANT) {
                pack.setItems(items);
            }

        } catch (Exception e) {
            System.err.println("DB에서 아이템을 로딩하는데 실패했습니다.");
            if (!ServerConstants.realese) e.printStackTrace();
        }
    }

    public static void saveItemsFromPlayer(MapleCharacter hp) {
        saveItems(hp, ItemFactory.InventoryType.INVENTORY, null, null, null);
    }

    public static void saveItemsFromStorage(MapleStorage store) {
        saveItems(null, ItemFactory.InventoryType.STORAGE, store, null, null);
    }

    public static void saveItemsFromMerchant(Pair<Integer, List<IItem>> pack) {
        saveItems(null, ItemFactory.InventoryType.MERCHANT, null, pack, null);
    }

    public static void saveItemsFromCashShop(MapleCashInventory cash) {
        saveItems(null, ItemFactory.InventoryType.CASHSHOP, null, null, cash);
    }

    public static void saveItems(MapleCharacter hp, ItemFactory.InventoryType invtype, MapleStorage store, Pair<Integer, List<IItem>> pack, MapleCashInventory cash) {
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("INSERT INTO inventoryitems (characterid, type, accountid, packageId, itemid, inventorytype, position, quantity, owner, GM_Log, uniqueid, expiredate, flag, giftFrom, isCash, isPet, isAndroid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", MYSQL.RETURN_GENERATED_KEYS);
            PreparedStatement pse = con.prepareStatement("INSERT INTO inventoryequipment VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            List<Pair<IItem, Byte>> items = new ArrayList<Pair<IItem, Byte>>();
            if (invtype == ItemFactory.InventoryType.INVENTORY) {
                for (MapleInventory iv : hp.getInventorys()) {
                        for (IItem item : iv.list()) {
                            items.add(new Pair(item, iv.getType().getType()));
                        }
                }
            }
            if (invtype == ItemFactory.InventoryType.STORAGE) {
                for (IItem item : store.getItems()) {
                    items.add(new Pair(item, item.getType()));
                }
            }
            if (invtype == ItemFactory.InventoryType.MERCHANT) {
                for (IItem item : pack.getRight()) {
                    items.add(new Pair(item, item.getType()));
                }
            }
            if (invtype == ItemFactory.InventoryType.CASHSHOP) {
                for (IItem item : cash.getInventory()) {
                    items.add(new Pair(item, item.getType()));
                }
            }
            for (Pair<IItem, Byte> item : items) {
                ps.setInt(1, invtype == ItemFactory.InventoryType.INVENTORY ? hp.getId() : -1);
                ps.setInt(2, getType(invtype));
                ps.setInt(3, (invtype == ItemFactory.InventoryType.STORAGE) ? store.getAccId() : invtype == ItemFactory.InventoryType.CASHSHOP ? cash.getAccId() : -1);
                ps.setInt(4, invtype == ItemFactory.InventoryType.MERCHANT ? pack.getLeft() : -1);
                ps.setInt(5, item.getLeft().getItemId());
                ps.setByte(6, item.getRight());
                ps.setInt(7, item.getLeft().getPosition());
                ps.setInt(8, item.getLeft().getQuantity());
                ps.setString(9, item.getLeft().getOwner());
                ps.setString(10, item.getLeft().getGMLog());
                ps.setInt(11, item.getLeft().getUniqueId());
                ps.setLong(12, item.getLeft().getExpiration());
                ps.setShort(13, item.getLeft().getFlag());
                ps.setString(14, item.getLeft().getGiftFrom());
                ps.setInt(15, item.getLeft().isCash() ? 1 : 0);
                ps.setInt(16, item.getLeft().getPet() != null ? 1 : 0);
                ps.setInt(17, item.getLeft().getAndroid() != null ? 1 : 0);
                ps.executeUpdate();
                ResultSet rs = ps.getGeneratedKeys();
                
                if (!rs.next()) {
                    rs.close();
                } else {
                    int itemid = rs.getInt(1);
                    rs.close();
                    
                if (item.getRight().equals(MapleInventoryType.EQUIP.getType()) || item.getRight().equals(MapleInventoryType.EQUIPPED.getType())) {
                    IEquip equip = (IEquip) item.getLeft();
                    pse.setInt(1, itemid);
                    pse.setInt(2, equip.getUpgradeSlots());
                    pse.setInt(3, equip.getLevel());
                    pse.setInt(4, equip.getStr());
                    pse.setInt(5, equip.getDex());
                    pse.setInt(6, equip.getInt());
                    pse.setInt(7, equip.getLuk());
                    pse.setInt(8, equip.getHp());
                    pse.setInt(9, equip.getMp());
                    pse.setInt(10, equip.getWatk());
                    pse.setInt(11, equip.getMatk());
                    pse.setInt(12, equip.getWdef());
                    pse.setInt(13, equip.getMdef());
                    pse.setInt(14, equip.getAcc());
                    pse.setInt(15, equip.getAvoid());
                    pse.setInt(16, equip.getHands());
                    pse.setInt(17, equip.getSpeed());
                    pse.setInt(18, equip.getJump());
                    pse.setInt(19, equip.getViciousHammer());
                    pse.setInt(20, equip.getItemLevel());
                    pse.setInt(21, equip.getItemEXP());
                    pse.setInt(22, equip.getDurability());
                    pse.setByte(23, equip.getEnhance());
                    pse.setByte(24, equip.getState());
                    pse.setByte(25, equip.getLines());
                    pse.setInt(26, equip.getPotential1());
                    pse.setInt(27, equip.getPotential2());
                    pse.setInt(28, equip.getPotential3());
                    pse.setInt(29, equip.getPotential4());
                    pse.setInt(30, equip.getPotential5());
                    pse.setInt(31, equip.getPotential6());
                    pse.setInt(32, equip.getanvil());
                    pse.setInt(33, equip.getHpR());
                    pse.setInt(34, equip.getMpR());
                    pse.setInt(35, equip.getPotential7());
                    pse.setInt(36, equip.getFire());
                    pse.setShort(37, equip.getDownLevel());
                    pse.setByte(38, equip.getBossDamage());
                    pse.setByte(39, equip.getAllDamageP());
                    pse.setByte(40, equip.getAllStatP());
                    pse.setShort(41, equip.getIgnoreWdef());
                    pse.setShort(42, equip.getSoulName());
                    pse.setShort(43, equip.getSoulEnchanter());
                    pse.setInt(44, equip.getSoulPotential());
                    pse.setInt(45, equip.getSoulSkill());
                    pse.setInt(46, equip.getStarForce());
                    pse.executeUpdate();
                    
                    if (equip.getAndroid() != null) {
                        equip.getAndroid().saveToDb();
                        }
                    }
                }
            }
            ps.close();
            pse.close();
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
        }
    }

    public static void deleteMerchantItem(int pid) {
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("DELETE FROM inventoryitems WHERE packageId = ? AND type = 3");
            ps.setInt(1, pid);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
        }
    }
}