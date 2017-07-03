/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.items;

import client.MapleCharacter;
import client.MapleClient;
import client.items.Equip;
import client.items.MapleInventory;
import client.items.MapleInventoryType;
import client.stats.EquipStats;
import constants.GameConstants;
import constants.ServerConstants;
import database.MYSQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import launch.ChannelServer;
import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import packet.creators.PacketProvider;
import static packet.creators.PacketProvider.getTime;
import packet.opcode.SendPacketOpcode;
import packet.transfer.read.ReadingMaple;
import packet.transfer.write.WritingPacket;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import tools.RandomStream.Randomizer;

/**
 *
 * @author �����
 */
public class MapleAuction {
    private static String �ߺ�üũ = "";
    
    public static void Handle(ReadingMaple rm, MapleClient c) {
        byte type = rm.readByte();
        switch (type) {
            case 1: {
                rm.readInt();
                int itemid = rm.readInt();
                short quantity = (short) rm.readInt();
                long meso = rm.readLong(); //����
                long mesos = rm.readLong(); //��ñ��Ű�
                if (mesos == 0) {
                	c.getPlayer().dropMessage(1, "You must enter an instant purchase (��ñ��Ű�) value.");
                	return;
                }
                rm.readInt();
                byte invtype = rm.readByte();
                byte pos = (byte) rm.readInt();
                AuctionSavetoDB(itemid, invtype, pos, quantity, (mesos * quantity), c.getPlayer().getName(), c.getPlayer());
                AuctionOpen(c);
                AuctionMessage(c, (byte) 1, (byte) 0);
                WorldBroadcasting.broadcastSmega(MainPacketCreator.itemMegaphone("���׸�ġ : ��(��) [" + c.getPlayer().getName() + "]���� " + mesos + "�޼ҷ� ����忡 ����� �ϼ̽��ϴ�." .toString() , true, c.getChannel(), c.getPlayer().getInventory(MapleInventoryType.getByType((byte) invtype)).getItem(pos)).getBytes());
                InventoryManipulator.removeFromSlot(c, MapleInventoryType.getByType((byte) invtype), (byte) pos, (short) quantity, false);
                c.getPlayer().saveToDB(false, false);
                c.getPlayer().ea();
                break;
            }
            case 5: {
                rm.skip(12);
                c.getPlayer().dropMessage(1, "��ñ��Ÿ� �̿��� ���� �մϴ�.");
                c.getPlayer().ea();
                break;
            }
            case 3: {
                int invid = rm.readInt();
                long mesoss = rm.readLong();
                if (c.getPlayer().getMeso() < mesoss) {
                    c.getPlayer().dropMessage(1, "You don't have enough mesos.");
                    c.getPlayer().ea();
                    return;
                }
                int itemcode = �����������ڵ�(invid);
                if (itemcode == 0) {
                    c.getPlayer().dropMessage(1, "�̹� �ٸ��в��� �����ϼ̰ų� �Ǹ��ڰ� ȸ���� ������ �Դϴ�.");
                    c.getPlayer().ea();
                    return;
                }
                if (!(c.getPlayer().getInventory(GameConstants.getInventoryType(itemcode)).getNextFreeSlot() > -1)) {
                    c.getPlayer().dropMessage(1, "Not enough inventory space to complete action.");
                    c.getPlayer().ea();
                    return;
                }
                c.getPlayer().gainMeso(-mesoss, false);
                for (ChannelServer cs : ChannelServer.getAllInstances()) {
                    MapleCharacter chr = null;
                    chr = cs.getPlayerStorage().getCharacterByName(��������������(invid));
                    if (chr != null) {
                        chr.dropMessage(1, "Your " + ItemInformation.getInstance().getName(itemcode) + "has been sold. Please collect your earnings.");
                    }
                }
                ����������(c.getPlayer(),invid);
                �����ŷ��Ϸ�(��������������(invid),mesoss);
                ���������ۻ���(invid);
                AuctionOpen(c);
                c.getPlayer().dropMessage(1, "Purchase complete. Please check your inventory.");
                c.getPlayer().ea();
                break;
            }
            case 7:
            {
                {
                rm.skip(4);
                int size = rm.readInt();
                rm.skip(1);
                int itemid = rm.readInt();
                if (size > 1) {
                   c.getPlayer().dropMessage(1, "��Ȯ�� �˻��� ���� ������ �̸��� ��� �Է��� �ֽʽÿ�.");
                   c.getPlayer().ea();
                   return;
                }
                if (!�˻����������ۿ���(itemid)) {
                   c.getPlayer().dropMessage(1, "�˻��� �������� �������� �ʽ��ϴ�.");
                   c.getPlayer().ea();
                   return;
                }
                �˻���������(c,itemid);
                c.getPlayer().dropMessage(1, "�˻��� �Ϸ� �Ǿ����ϴ�.");
                c.getPlayer().ea();
                break;
                }
            }
        }
    }
    
    public static void AuctionMessage(MapleClient c, byte message, byte sub) {    
        WritingPacket packet = new WritingPacket();        
        /*       
            1 : ���         
            0 : ���� 1 : ���� ���� ���� 2 : ������ ���� 3 : ��� ������ ���� 4 : �Ǹ� ���� ���� ���� 5 : ���� ������ > ��� ���Ű�        
            2 : ���        
            3 : ��� ����        
            0 : ���� 3 : �ڽ��� ����Ѱ� X 4: �޼� ���� 5 : ���� ����        
            4 : ����         
            0 : ����  1 : �ְ� ���� 2 : ������ �̹� ��ȸ ���� 3 : ��� ���� �������� ���� 4 : �ڽ����� ���� �Ұ� 5 : �̹� �ְ� 6 : �޼� ���� 7 : �̼��� ������ 8 ; ���� �ݾ��� �ʹ� ����(���� �������� 5%�̻�) 9 : ���� ����        
            5 : ����         
            0 : ����  5 : �� ����        
            6 : ��ȯ        
            0 : ���� 3 : �κ� ����        
        */        
        packet.writeShort(SendPacketOpcode.AUCTION.getValue());       
        packet.write(message);        
        packet.write(sub);        
        
        c.getSession().write(packet.getPacket());
        c.getSession().write(MainPacketCreator.resetActions());
    }
    
    public static long �����޼�ȸ��(String name) {
        long i = 0;
        try {
            PreparedStatement dueydb = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionmeso WHERE name = ?");
            dueydb.setString(1, name);
            ResultSet rs = dueydb.executeQuery();
            while (rs.next()) {
                i += rs.getLong("mesos");
            }
            rs.close();
            dueydb.close();
        } catch (SQLException ex) {
            
        }
        return i;
    }
    
    public static void �޼�ȸ���Ϸ�(String name) {
            try {
                PreparedStatement ps;
                ps = MYSQL.getConnection().prepareStatement("DELETE FROM auctionmeso WHERE name = ?");
                ps.setString(1, name);
                ps.execute();
                ps.close();
            } catch (SQLException ex) {

            }
    }
    
    public static void �����ŷ��Ϸ�(String name,long meso) {
        try {
            PreparedStatement dueydb = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionmeso WHERE name = ?");
            dueydb.setString(1, name);
            ResultSet rs = dueydb.executeQuery();
            if (rs.next()) {
                Connection con = MYSQL.getConnection();
                PreparedStatement ps = con.prepareStatement("UPDATE auctionmeso SET mesos = ? WHERE name = ?");
                ps.setLong(1, (�����޼�ȸ��(name) + meso));
                ps.setString(2,name);
                ps.executeUpdate();
                ps.close();
            } else {
                Connection con = MYSQL.getConnection();
                PreparedStatement ps = null;
                String query = "INSERT into `auctionmeso` (`mesos`, `name`) VALUES ('";
                query = new StringBuilder().append(query).append(meso).toString();
                query = new StringBuilder().append(query).append("', '").toString();
                query = new StringBuilder().append(query).append(name).toString();
                query = new StringBuilder().append(query).append("')").toString();
                ps = con.prepareStatement(query);
                ps.executeUpdate();
                ps.close();
            }
        } catch (SQLException ex) {
            if (ServerConstants.realese) {
                ex.printStackTrace();
            }
        }
    }
    
    public static int ����(String a) {
        int b = 0;
        try {
            PreparedStatement dueydb = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE name = ?");
            dueydb.setString(1, a);
            ResultSet rs = dueydb.executeQuery();
            while (rs.next()) {
                if (System.currentTimeMillis() > rs.getLong("time")) {
                    b ++;
                }
            }
            rs.close();
            dueydb.close();
        } catch (SQLException ex) {
            
        }
        return b;
    }
    
    public static String ����������ȸ��(String name) {
        String a = "Which item would you like to remove from the auction house?\r\n\r\n#b";
        int num = -1;
        try {
            PreparedStatement dueydb = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE name = ?");
            dueydb.setString(1, name);
            ResultSet rs = dueydb.executeQuery();
            while (rs.next()) {
                num ++;
                a = a + "#L" + rs.getInt("inventoryitemid") + "##i" + rs.getInt("itemid") + "# #t" + rs.getInt("itemid") + "##l\r\n";
            }
            rs.close();
            dueydb.close();
        } catch (SQLException ex) {
            
        }
        if (num == -1) {
            return "You do not have any items up for sale.";
        } else {
            return a;
        }
     }
    
    public static void ������ȸ��(MapleClient c, int invid) {
        try {
            PreparedStatement dueydb = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE inventoryitemid = ?");
            dueydb.setInt(1, invid);
            ResultSet rs = dueydb.executeQuery();
            if (rs.next()) {
                if (!(c.getPlayer().getInventory(GameConstants.getInventoryType(rs.getInt("itemid"))).getNextFreeSlot() > -1)) {
                    c.getPlayer().dropMessage(1, "�κ��丮�� ������ �����Ͽ� ȸ���� �� �� �����ϴ�.");
                    c.getPlayer().ea();
                    return;
                }
                ����������(c.getPlayer(),invid);
                ���������ۻ���(invid);
                c.getPlayer().dropMessage(1, "������ ȸ���� �Ϸ� �Ǿ����ϴ�.");
                c.getPlayer().ea();
            } else {
                c.getPlayer().dropMessage(1, "�̹� �ŷ��� �Ϸ�� ������ �Դϴ�.");
                c.getPlayer().ea();
            }
        } catch (SQLException ex) {
            
        }
    }
    
    public static void ���������ۻ���(int invid) {
            try {
                PreparedStatement ps;
                ps = MYSQL.getConnection().prepareStatement("DELETE FROM auctionitem WHERE inventoryitemid = ?");
                ps.setInt(1, invid);
                ps.execute();
                ps.close();
            } catch (SQLException ex) {

            }
        }
    
    public static void ����������(MapleCharacter chr, int invid) {
        try {
            PreparedStatement dueydb = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE inventoryitemid = ?");
            dueydb.setInt(1, invid);
            ResultSet rs = dueydb.executeQuery();
            if (rs.next()) {
                if(rs.getInt("inventorytype") == 1) {
                    Equip equip = (Equip) ItemInformation.getInstance().getEquipById(rs.getInt("itemid"));
                    equip.setUpgradeSlots((byte)rs.getInt("upgradeslots"));
                    equip.setLevel((byte)rs.getInt("level"));
                    equip.setStr((short)rs.getInt("str"));
                    equip.setDex((short)rs.getInt("dex"));
                    equip.setInt((short)rs.getInt("int"));
                    equip.setLuk((short)rs.getInt("luk"));
                    equip.setHp((short)rs.getInt("hp"));
                    equip.setMp((short)rs.getInt("mp"));
                    equip.setWatk((short)rs.getInt("watk"));
                    equip.setMatk((short)rs.getInt("matk"));
                    equip.setWdef((short)rs.getInt("wdef"));
                    equip.setMdef((short)rs.getInt("mdef"));
                    equip.setAcc((short)rs.getInt("acc"));
                    equip.setAvoid((short)rs.getInt("avoid"));
                    equip.setHands((short)rs.getInt("hands"));
                    equip.setSpeed((short)rs.getInt("speed"));
                    equip.setJump((short)rs.getInt("jump"));
                    equip.setViciousHammer((byte)rs.getInt("ViciousHammer"));
                    equip.setItemLevel((byte)rs.getInt("itemLevel"));
                    equip.setItemEXP(rs.getInt("itemEXP"));
                    equip.setDurability(rs.getInt("durability"));
                    equip.setEnhance((byte)rs.getInt("enhance"));
                    equip.setState((byte)rs.getInt("state"));
                    equip.setLines((byte)rs.getInt("lines"));
                    equip.setPotential1(rs.getInt("potential1"));
                    equip.setPotential2(rs.getInt("potential2"));
                    equip.setPotential3(rs.getInt("potential3"));
                    equip.setPotential4(rs.getInt("potential4"));
                    equip.setPotential5(rs.getInt("potential5"));
                    equip.setPotential6(rs.getInt("potential6"));
                    equip.setPotential7(rs.getInt("potential7"));
                    equip.setFire((byte)rs.getInt("fire"));
                    equip.setDownLevel((byte)rs.getInt("downlevel"));
                    equip.setBossDamage((byte)rs.getInt("bossdmg"));
                    equip.setAllDamageP((byte)rs.getInt("alldmgp"));
                    equip.setAllStatP((byte)rs.getInt("allstatp"));
                    equip.setIgnoreWdef((short)rs.getInt("IgnoreWdef"));
                    equip.setSoulName((short)rs.getShort("soulname"));
                    equip.setSoulEnchanter((short)rs.getShort("soulenchanter")); 
                    equip.setSoulPotential((short)rs.getShort("soulpotential"));
                    equip.setSoulSkill(rs.getInt("soulskill"));
                    equip.setStarForce(rs.getByte("starforce"));
                    InventoryManipulator.addFromDrop(chr.getClient(), equip, false);
                } else if (rs.getInt("inventorytype") != 0) {
                    chr.gainSpirit(rs.getInt("itemid"), rs.getInt("quantity"));
                }
            }
        } catch (Exception ex) {
            if (ServerConstants.realese) { 
                ex.printStackTrace();
            }
        }
    }
    
    public static int �����������ڵ�(int invid) {
        int i = 0;
        try {
            PreparedStatement ����� = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE inventoryitemid = " + invid); //������ ����
            ResultSet �����R = �����.executeQuery();
            if (�����R.next()) {
                i = �����R.getInt("itemid");
            }
            �����.close();
            �����R.close();
        } catch (SQLException ex) {
            
        }
        return i;
    }
    
    public static String ��������������(int invid) {
        String i = "";
        try {
            PreparedStatement ����� = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE inventoryitemid = " + invid); //������ ����
            ResultSet �����R = �����.executeQuery();
            while (�����R.next()) {
                i = �����R.getString("name");
            }
            �����.close();
            �����R.close();
        } catch (SQLException ex) {
            
        }
        return i;
    }
    
    public static boolean �˻����������ۿ���(int i) {
        try {
            PreparedStatement ����� = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE itemid = " + i); //������ ����
            ResultSet �����R = �����.executeQuery();
            if (�����R.next()) {
                return true;
            }
            �����.close();
            �����R.close();
        } catch (SQLException ex) {
            
        }
        return false;
    }
    
    public static int ����������������() {
        int i = 0;
        try {
            PreparedStatement ����� = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem"); //������ ����
            ResultSet �����R = �����.executeQuery();
            while (�����R.next()) {
                if (�������ߺ�üũ(�ߺ�üũ, �����R.getInt("itemid"))) {
                    i ++;
                }
                if (�ߺ�üũ.equals("")) {
                    �ߺ�üũ = String.valueOf(�����R.getInt("itemid"));
                } else {
                    �ߺ�üũ = �ߺ�üũ + "," + �����R.getInt("itemid");
                }
            }
            �����.close();
            �����R.close();
            �ߺ�üũ = "";
        } catch (SQLException ex) {}
        return i;
    }
    
    public static long �ð�() {
        Timestamp time = new Timestamp(System.currentTimeMillis());
        time.setSeconds(0);
        time.setNanos(0);
        time.setDate((time.getDate() + 2));
        return time.getTime();
    }
    
    public static void �˻���������(MapleClient c,int itemid) {
        �ߺ�üũ = "";
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.AUCTION.getValue());
        packet.write(7);
        packet.write(1);
        packet.writeInt(1);
        try {
               packet.writeInt(itemid);
               packet.writeInt(���������ۼ�("SELECT * FROM auctionitem WHERE itemid = " + itemid));
               PreparedStatement �����I = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE itemid = " + itemid);
               ResultSet �����IR = �����I.executeQuery();
               while (�����IR.next()) {
                   packet.writeInt(�����IR.getInt("inventoryitemid"));
                   packet.writeInt(�����IR.getInt("inventoryitemid"));
                   packet.writeInt(0);
                   packet.Hex("7A 93 5D 05 41 EB 27 01");
                   packet.writeInt(0);
                   packet.writeInt(1);
                   packet.writeInt(29);
                   packet.writeShort(26960);
                   packet.writeShort(29285);
                   packet.writeShort(26979);
                   packet.writeShort(26478);
                   packet.writeShort(24899);
                   packet.writeShort(25714);
                   packet.write(0);
                   packet.writeLong(�����IR.getLong("mesos"));
                   packet.writeLong(-1);
                   packet.writeLong(�����IR.getLong("mesos"));
                   packet.writeLong(PacketProvider.getTime(�����IR.getLong("time")));
                   packet.write0(5);
                   packet.write(0xC6);
                   packet.writeShort(64437);
                   packet.writeShort(64437);
                   packet.writeShort(64437);
                   packet.writeShort(52416);
                   packet.writeShort(52416);
                   packet.write(0);
                   packet.writeInt(-1);
                   packet.Hex("02 F0 00 66 00 00 00 00 80 69 2A 52 3A C5 CF 01 D0 07 00 00 00 00 00 00 00 00 00");
                   ��������������(packet,�����IR.getInt("inventoryitemid"));
           }
           �ߺ�üũ = "";
        } catch (SQLException ex) {

        }
        c.getSession().write(packet.getPacket());
        c.getSession().write(MainPacketCreator.resetActions());
    }
    
    
    public static void AuctionOpen(MapleClient c) {
        �ߺ�üũ = "";
        if (���������ۼ�("SELECT * FROM auctionitem") > 0) {
            WritingPacket packet = new WritingPacket();
            packet.writeShort(SendPacketOpcode.AUCTION.getValue());
            packet.write(7);
            packet.write(1);
            packet.writeInt(����������������());
            try {
               PreparedStatement ����� = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem"); //������ ����
               ResultSet �����R = �����.executeQuery();
               while (�����R.next()) {
                  if (�������ߺ�üũ(�ߺ�üũ, �����R.getInt("itemid"))) {
                   if (�ߺ�üũ.equals("")) {
                       �ߺ�üũ = String.valueOf(�����R.getInt("itemid"));
                   } else {
                       �ߺ�üũ = �ߺ�üũ + "," + �����R.getInt("itemid");
                   }
                   packet.writeInt(�����R.getInt("itemid"));
                   packet.writeInt(���������ۼ�("SELECT * FROM auctionitem WHERE itemid = " + �����R.getInt("itemid")));
                   PreparedStatement �����I = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE itemid = " + �����R.getInt("itemid"));
                   ResultSet �����IR = �����I.executeQuery();
                   while (�����IR.next()) {
                       packet.writeInt(�����IR.getInt("inventoryitemid"));
                       packet.writeInt(�����IR.getInt("inventoryitemid"));
                       packet.writeInt(0);
                       packet.Hex("7A 93 5D 05 41 EB 27 01");
                       packet.writeInt(0);
                       packet.writeInt(1);
                       packet.writeInt(29);
                       packet.writeShort(26960);
                       packet.writeShort(29285);
                       packet.writeShort(26979);
                       packet.writeShort(26478);
                       packet.writeShort(24899);
                       packet.writeShort(25714);
                       packet.write(0);
                       packet.writeLong(�����IR.getLong("mesos"));
                       packet.writeLong(-1);
                       packet.writeLong(�����IR.getLong("mesos"));
                       packet.writeLong(PacketProvider.getTime(�����IR.getLong("time")));
                       packet.write0(5);
                       packet.write(0xC6);
                       packet.writeShort(64437);
                       packet.writeShort(64437);
                       packet.writeShort(64437);
                       packet.writeShort(52416);
                       packet.writeShort(52416);
                       packet.write(0);
                       packet.writeInt(-1);
                       packet.Hex("02 F0 00 66 00 00 00 00 80 69 2A 52 3A C5 CF 01 D0 07 00 00 00 00 00 00 00 00 00");
                       ��������������(packet,�����IR.getInt("inventoryitemid"));
                   }
                   �����IR.close();
                   �����I.close();
                }
               }
               �����R.close();
               �����.close();
            } catch (SQLException ex) {
                
            }
            c.getSession().write(packet.getPacket());
            c.getSession().write(MainPacketCreator.resetActions());
        } else {
            c.getSession().write(MainPacketCreator.resetActions());
        }
    }
    
    public static boolean �������ߺ�üũ(String a, int i) {
        try {
        String b[] = a.split(",");
        for (String c : b) {
            if (Integer.parseInt(c) == i) {
                return false;
            }
        }
        } catch (Exception e) {}
        return true;
    }
    
    public static void ��������������(WritingPacket packet, int itemid) {
        try {
            PreparedStatement dueydb = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE inventoryitemid = ?");
            dueydb.setInt(1, itemid);
            ResultSet rs = dueydb.executeQuery();
            if (rs.next()) {
                    packet.write(0);
                    packet.write(rs.getInt("inventorytype") == 1 ? 1 : 2);
                    packet.writeInt(rs.getInt("itemid"));
                    packet.write(0);
                    packet.writeLong(getTime(-1));
                    packet.writeInt(-1);
                    if(rs.getInt("inventorytype") == 1) {
                        int equipStats = 0;
                          try {
                            for (EquipStats equipstat : EquipStats.values()) {
                                switch (equipstat.name()) {
                                    case "UPGRADE": {
                                        equipStats |= rs.getInt("upgradeslots") > 0 ? EquipStats.UPGRADE.getValue() : 0;
                                        break;
                                    }
                                    case "LEVEL":
                                        equipStats |= rs.getInt("level") > 0 ? EquipStats.LEVEL.getValue() : 0;
                                        break;
                                    case "STR":
                                        equipStats |= rs.getInt("str") > 0 ? EquipStats.STR.getValue() : 0;
                                        break;
                                    case "DEX":
                                        equipStats |= rs.getInt("dex") > 0 ? EquipStats.DEX.getValue() : 0;
                                        break;
                                    case "INT":
                                        equipStats |= rs.getInt("int") > 0 ? EquipStats.INT.getValue() : 0;
                                        break;
                                    case "LUK":
                                        equipStats |= rs.getInt("luk") > 0 ? EquipStats.LUK.getValue() : 0;
                                        break;
                                    case "HP":
                                        equipStats |= rs.getInt("hp") > 0 ? EquipStats.HP.getValue() : 0;
                                        break;
                                    case "MP":
                                        equipStats |= rs.getInt("mp") > 0 ? EquipStats.MP.getValue() : 0;
                                        break;
                                    case "WATK":
                                        equipStats |= rs.getInt("watk") > 0 ? EquipStats.WATK.getValue() : 0;
                                        break;
                                    case "MATK":
                                        equipStats |= rs.getInt("matk") > 0 ? EquipStats.MATK.getValue() : 0;
                                        break;
                                    case "WDEF":
                                        equipStats |= rs.getInt("wdef") > 0 ? EquipStats.WDEF.getValue() : 0;
                                        break;
                                    case "MDEF":
                                        equipStats |= rs.getInt("mdef") > 0 ? EquipStats.MDEF.getValue() : 0;
                                        break;
                                    case "ACC":
                                        equipStats |= rs.getInt("acc") > 0 ? EquipStats.ACC.getValue() : 0;
                                        break;
                                    case "AVOID":
                                        equipStats |= rs.getInt("avoid") > 0 ? EquipStats.AVOID.getValue() : 0;
                                        break;
                                    case "HANDS":
                                        equipStats |= rs.getInt("hands") > 0 ? EquipStats.HANDS.getValue() : 0;
                                        break;
                                    case "SPEED":
                                        equipStats |= rs.getInt("speed") > 0 ? EquipStats.SPEED.getValue() : 0;
                                        break;
                                    case "JUMP":
                                        equipStats |= rs.getInt("jump") > 0 ? EquipStats.JUMP.getValue() : 0;
                                        break;
                                    case "ITEMLEVEL":
                                        equipStats |= rs.getInt("itemLevel") != 0 ? EquipStats.ITEMLEVEL.getValue() : 0;
                                        break;
                                    case "ITEMEXP":
                                        equipStats |= rs.getInt("itemEXP") > 0 ? EquipStats.ITEMEXP.getValue() : 0;
                                        break;
                                    case "DURABILITY":
                                        equipStats |= rs.getInt("durability") != -1 ? EquipStats.DURABILITY.getValue() : 0;
                                        break;
                                    case "HAMMER":
                                        equipStats |= rs.getInt("ViciousHammer") > 0 ? EquipStats.HAMMER.getValue() : 0;
                                        break;
                                    case "DOWNLEVEL":
                                        equipStats |= rs.getInt("downlevel") > 0 ? EquipStats.DOWNLEVEL.getValue() : 0;
                                        break;
                                    case "BOSSDAMAGE":
                                        equipStats |= rs.getInt("bossdmg") > 0 ? EquipStats.BOSSDAMAGE.getValue() : 0;
                                        break;
                                    case "IGNOREWDEF":
                                        equipStats |= rs.getInt("IgnoreWdef") > 0 ? EquipStats.IGNOREWDEF.getValue() : 0;
                                        break;
                                }
                            }

                            packet.writeInt(equipStats);
                            for (EquipStats equipstat : EquipStats.values()) {
                                switch (equipstat.name()) {
                                    case "UPGRADE": {
                                        packet.write(rs.getInt("upgradeslots") > 0 ? rs.getInt("upgradeslots") : -88888);
                                        break;
                                    }
                                    case "LEVEL":
                                        packet.write(rs.getInt("level") > 0 ? rs.getInt("level") : -88888);
                                        break;
                                    case "STR":
                                        packet.writeShort(rs.getInt("str") > 0 ? rs.getInt("str") : -88888);
                                        break;
                                    case "DEX":
                                        packet.writeShort(rs.getInt("dex") > 0 ? rs.getInt("dex") : -88888);
                                        break;
                                    case "INT":
                                        packet.writeShort(rs.getInt("int") > 0 ? rs.getInt("int") : -88888);
                                        break;
                                    case "LUK":
                                        packet.writeShort(rs.getInt("luk") > 0 ? rs.getInt("luk") : -88888);
                                        break;
                                    case "HP":
                                        packet.writeShort(rs.getInt("hp") > 0 ? rs.getInt("hp") : -88888);
                                        break;
                                    case "MP":
                                        packet.writeShort(rs.getInt("mp") > 0 ? rs.getInt("mp") : -88888);
                                        break;
                                    case "WATK":
                                        packet.writeShort(rs.getInt("watk") > 0 ? rs.getInt("watk") : -88888);
                                        break;
                                    case "MATK":
                                        packet.writeShort(rs.getInt("matk") > 0 ? rs.getInt("matk") : -88888);
                                        break;
                                    case "WDEF":
                                        packet.writeShort(rs.getInt("wdef") > 0 ? rs.getInt("wdef") : -88888);
                                        break;
                                    case "MDEF":
                                        packet.writeShort(rs.getInt("mdef") > 0 ? rs.getInt("mdef") : -88888);
                                        break;
                                    case "ACC":
                                        packet.writeShort(rs.getInt("acc") > 0 ? rs.getInt("acc") : -88888);
                                        break;
                                    case "AVOID":
                                        packet.writeShort(rs.getInt("avoid") > 0 ? rs.getInt("avoid") : -88888);
                                        break;
                                    case "HANDS":
                                        packet.writeShort(rs.getInt("hands") > 0 ? rs.getInt("hands") : -88888);
                                        break;
                                    case "SPEED":
                                        packet.writeShort(rs.getInt("speed") > 0 ? rs.getInt("speed") : -88888);
                                        break;
                                    case "JUMP":
                                        packet.writeShort(rs.getInt("jump") > 0 ? rs.getInt("jump") : -88888);
                                        break;
                                    case "ITEMLEVEL":
                                        packet.write(rs.getInt("itemLevel") != 0 ? rs.getInt("itemLevel") : -88888);
                                        break;
                                    case "ITEMEXP":
                                        packet.writeLong(rs.getInt("itemEXP") > 0 ? rs.getInt("itemEXP") : -88888);
                                        break;
                                    case "DURABILITY":
                                        packet.writeInt(rs.getInt("durability") != -1 ? rs.getInt("durability") : -88888);
                                        break;
                                    case "HAMMER":
                                        packet.writeInt(rs.getInt("ViciousHammer") > 0 ? rs.getInt("ViciousHammer") : -88888);
                                        break;
                                    case "DOWNLEVEL":
                                        packet.write(rs.getInt("downlevel") > 0 ? rs.getInt("downlevel") : -88888);
                                        break;
                                    case "BOSSDAMAGE":
                                        packet.write(rs.getInt("bossdmg") > 0 ? rs.getInt("bossdmg") : -88888);
                                        break;
                                    case "IGNOREWDEF":
                                        packet.write(rs.getInt("IgnoreWdef") > 0 ? rs.getInt("IgnoreWdef") : -88888);
                                        break;
                                }
                            }
                        } catch (Exception ex) {
                            ex.printStackTrace();
                        }
                        int value = 4;
                        if (rs.getInt("alldmgp") != 0) {
                            value += 1;
                        }
                        if (rs.getInt("allstatp") != 0) {
                            value += 2;
                        }
                        if (rs.getInt("fire") >= 0) {
                            value += 8;
                        }
                        packet.writeInt(value);
                        if (rs.getInt("alldmgp") != 0) {
                            packet.write(rs.getInt("alldmgp"));
                        }
                        if (rs.getInt("allstatp") != 0) {
                            packet.write(rs.getInt("allstatp"));
                        }
                        packet.write(rs.getInt("fire")); //����
                        if (rs.getInt("fire") >= 0) {
                            packet.writeInt(Randomizer.nextInt());
                            packet.writeInt(0);
                        }
                        if (rs.getInt("starforce") > 25) {
                            packet.writeShort(0x100);
                            packet.write(0);
                            packet.write(0);
                        }
                        packet.writeShort(0);
                        packet.write(rs.getInt("state")); // State
                        packet.write(rs.getInt("enhance")); // Enchance
                        packet.writeShort(rs.getInt("potential1")); //����
                        packet.writeShort(rs.getInt("potential2")); //�Ĺ�
                        packet.writeShort(rs.getInt("potential3")); //�Ĺ�
                        packet.writeShort(rs.getInt("potential4")); //����ų� 1
                        packet.writeShort(rs.getInt("potential5")); //����ų� 2
                        packet.writeShort(rs.getInt("potential6")); //�ֵ�ų� 3
                        packet.writeShort(rs.getInt("potential7")); //��
                        packet.writeInt(-1);
                        packet.writeInt(-1);
                        packet.writeLong(PacketProvider.getTime(-2));
                        packet.writeInt(-1); 
                        packet.writeLong(0);
                        packet.writeLong(PacketProvider.getTime(-2));
                        packet.write0(16);
                        packet.writeShort(rs.getInt("soulname")); 
                        packet.writeShort(rs.getInt("soulenchanter"));
                        packet.writeShort(rs.getInt("soulpotential"));
                    } else {
                        packet.writeShort(rs.getInt("quantity"));
                        packet.writeShort(0);
                        packet.writeShort(0);
                        if (GameConstants.isThrowingStar(rs.getInt("itemid")) || GameConstants.isBullet(rs.getInt("itemid"))) {
                            packet.writeInt(2);
                            packet.writeShort(0x54);
                            packet.write(0);
                            packet.write(0x34);
                        }
                    }
                }
            dueydb.close();
            rs.close();
        } catch (SQLException ex) {

        }
    }
    
    public static int ���������ۼ�(String text) {
        int size = 0;
            try {
            PreparedStatement dueydb = MYSQL.getConnection().prepareStatement(text);
            ResultSet rs = dueydb.executeQuery();
            while (rs.next()) {
                size ++;
            }
            rs.close();
           } catch (SQLException ex) {}
      return size;
    }
    
        public static int getInventoryId() {
       int id = Randomizer.nextInt();
       try {
           ResultSet rs = MYSQL.getConnection().prepareStatement("SELECT * FROM auctionitem WHERE inventoryitemid = " + id).executeQuery();
           while (rs.next()) {
               int dumi = Randomizer.nextInt();
               while (dumi != id) {
                   id = Randomizer.nextInt();
               }
           }
           rs.close();
       } catch (SQLException ex) {}
       return id;
    }
    
    
    public static void AuctionSavetoDB(int itemid, int type, int pos, int quantity, long mesos, String name,MapleCharacter chr) {
        try {                                                                                              
            PreparedStatement pse = MYSQL.getConnection().prepareStatement("INSERT INTO auctionitem VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            MapleInventory inventory = chr.getInventory(MapleInventoryType.getByType((byte) type));
            if (type == 1) {
            Equip equip = (Equip) inventory.getItem((byte) pos);
                pse.setLong(1, mesos);
                pse.setInt(2, equip.getItemId());
                pse.setInt(3, 1);
                pse.setInt(4, equip.getUpgradeSlots());
                pse.setInt(5, equip.getLevel());
                pse.setInt(6, equip.getStr());
                pse.setInt(7, equip.getDex());
                pse.setInt(8, equip.getInt());
                pse.setInt(9, equip.getLuk());
                pse.setInt(10, equip.getHp());
                pse.setInt(11, equip.getMp());
                pse.setInt(12, equip.getWatk());
                pse.setInt(13, equip.getMatk());
                pse.setInt(14, equip.getWdef());
                pse.setInt(15, equip.getMdef());
                pse.setInt(16, equip.getAcc());
                pse.setInt(17, equip.getAvoid());
                pse.setInt(18, equip.getHands());
                pse.setInt(19, equip.getSpeed());
                pse.setInt(20, equip.getJump());
                pse.setInt(21, equip.getViciousHammer());
                pse.setInt(22, equip.getItemLevel());
                pse.setInt(23, equip.getItemEXP());
                pse.setInt(24, equip.getDurability());
                pse.setByte(25, equip.getEnhance());
                pse.setByte(26, equip.getState());
                pse.setByte(27, equip.getLines());
                pse.setInt(28, equip.getPotential1());
                pse.setInt(29, equip.getPotential2());
                pse.setInt(30, equip.getPotential3());
                pse.setInt(31, equip.getPotential4());
                pse.setInt(32, equip.getPotential5());
                pse.setInt(33, equip.getPotential6());
                pse.setInt(34, equip.getanvil());
                pse.setInt(35, equip.getHpR());
                pse.setInt(36, equip.getMpR());
                pse.setInt(37, equip.getPotential7());
                pse.setInt(38, equip.getFire());
                pse.setShort(39, equip.getDownLevel());
                pse.setByte(40, equip.getBossDamage());
                pse.setByte(41, equip.getAllDamageP());
                pse.setByte(42, equip.getAllStatP());
                pse.setShort(43, equip.getIgnoreWdef());
                pse.setShort(44, equip.getSoulName());
                pse.setShort(45, equip.getSoulEnchanter());
                pse.setInt(46, equip.getSoulPotential());
                pse.setInt(47, equip.getSoulSkill());
                pse.setInt(48, equip.getStarForce());
                pse.setInt(49, type);
                pse.setInt(50, getInventoryId());
                pse.setString(51, chr.getName());
                pse.setLong(52, �ð�());
                pse.executeUpdate();
            } else {
                pse.setLong(1, mesos);
                pse.setInt(2, itemid);
                pse.setInt(3, quantity);
                pse.setInt(4, 0);
                pse.setInt(5, 0);
                pse.setInt(6, 0);
                pse.setInt(7, 0);
                pse.setInt(8, 0);
                pse.setInt(9, 0);
                pse.setInt(10, 0);
                pse.setInt(11, 0);
                pse.setInt(12, 0);
                pse.setInt(13, 0);
                pse.setInt(14, 0);
                pse.setInt(15, 0);
                pse.setInt(16, 0);
                pse.setInt(17, 0);
                pse.setInt(18, 0);
                pse.setInt(19, 0);
                pse.setInt(20, 0);
                pse.setInt(21, 0);
                pse.setInt(22, 0);
                pse.setInt(23, 0);
                pse.setInt(24, 0);
                pse.setByte(25, (byte) 0);
                pse.setByte(26, (byte) 0);
                pse.setByte(27, (byte) 0);
                pse.setInt(28, 0);
                pse.setInt(29, 0);
                pse.setInt(30, 0);
                pse.setInt(31, 0);
                pse.setInt(32, 0);
                pse.setInt(33, 0);
                pse.setInt(34, 0);
                pse.setInt(35, 0);
                pse.setInt(36, 0);
                pse.setInt(37, 0);
                pse.setInt(38, 0);
                pse.setByte(39, (byte) 0);
                pse.setByte(40, (byte) 0);
                pse.setByte(41, (byte) 0);
                pse.setByte(42, (byte) 0);
                pse.setShort(43, (short) 0);
                pse.setShort(44, (short) 0);
                pse.setShort(45, (short) 0);
                pse.setInt(46, 0);
                pse.setInt(47, 0);
                pse.setInt(48, 0);
                pse.setInt(49, type);
                pse.setInt(50, getInventoryId());
                pse.setString(51, chr.getName());
                pse.setLong(52, �ð�());
                pse.executeUpdate();            
                }
            pse.close();
        } catch (SQLException ex) {
            if (ServerConstants.realese) {
                ex.printStackTrace();
            }
        }
    }
}
