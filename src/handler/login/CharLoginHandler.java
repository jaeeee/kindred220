/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package handler.login;

import client.*;
import client.items.Equip;
import client.items.Item;
import client.items.MapleInventory;
import client.items.MapleInventoryType;
import client.skills.SkillFactory;
import constants.ServerConstants;
import constants.GameConstants;
import database.MYSQL;
import java.rmi.RemoteException;
import java.sql.SQLException;
import launch.helpers.MapleLoginHelper;
import launch.helpers.MapleLoginWorker;
import launch.helpers.MapleNewCharJobType;
import packet.creators.LoginPacket;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;
import server.quest.MapleQuest;
import tools.KoreanDateUtil;
import java.io.File;
import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import launch.ChannelServer;
import launch.rmi.LoginRegistryImpl;

public class CharLoginHandler {
    public static int canjoin = 1;
    private static boolean loginFailCount(MapleClient c) {
	c.loginAttempt++;
	if (c.loginAttempt > 5) {
	    return true;
	}
	return false;
    }

    public static void login(ReadingMaple rh, MapleClient c) {
        rh.skip(22);
	String login = rh.readMapleAsciiString();
	String pwd = rh.readMapleAsciiString();
       
	c.setAccountName(login);
	boolean ipBan = c.hasBannedIP();
	boolean macBan = false;

        int checkId = AutoRegister.checkAccount(c, login, pwd);
        if (!GameConstants.isServerReady()) {
            c.send(MainPacketCreator.serverNotice(1, "It is loading the server data. Please wait."));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        }
       if (checkId == 0) { //���� ������ ���̵��϶�
            if (canjoin == 1) {
                AutoRegister.registerAccount(c, login, pwd);
                c.send(MainPacketCreator.serverNotice(1, "Account created.\r\nPlease log in again."));
                c.send(LoginPacket.getLoginFailed(20));
                return;
            } else {
                c.send(MainPacketCreator.serverNotice(1, "A reboot of the server, please try again later."));
                c.send(LoginPacket.getLoginFailed(20));
            }
        } else if (checkId == 1) { //���� ã�� ����
            c.send(MainPacketCreator.serverNotice(1, "There is no corresponding account.\r\n" + ServerConstants.serverName + " Ȩ��������\r\n���� �����ϼż� ȸ��������\r\nPlease."));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        } else if (checkId == 2) { //php����
            c.send(MainPacketCreator.serverNotice(1, "Page error occurred. Please try again later."));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        } else if (checkId == 3) { //����
            c.send(MainPacketCreator.serverNotice(1, "It does not meet the level of the site. After receiving an account, please use the ratings up."));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        } else if (checkId == 6) { //Ƚ���ʰ�
            c.send(MainPacketCreator.serverNotice(1, "You have exceeded the maximum number of created accounts per IP available."));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        }

	int loginok = c.login(login, pwd, ipBan || macBan);
	Calendar tempbannedTill = c.getTempBanCalendar();
	if (loginok == 0 && (ipBan || macBan)) {
	    loginok = 3;
	    if (ipBan || macBan) {
		MapleCharacter.ban(c.getSession().getRemoteAddress().toString().split(":")[0], "Enforcing account ban, account " + login, false);
	    }
	}
        if (ServerConstants.serverCheck && !c.isGm()) {
            c.send(MainPacketCreator.serverNotice(1, ServerConstants.serverCheckMessage));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        }
        if (loginok != 0) {
            if (!loginFailCount(c)) {
                c.getSession().write(LoginPacket.getLoginFailed(loginok));
            }
        } else if (tempbannedTill.getTimeInMillis() != 0) {
	    if (!loginFailCount(c)) {
		c.getSession().write(LoginPacket.getTempBan(KoreanDateUtil.getTempBanTimestamp(tempbannedTill.getTimeInMillis()), c.getBanReason()));
	    }
	} else {
	    c.loginAttempt = 0;
	    MapleLoginWorker.registerClient(c);
	}
    }
    
    public static void CharlistRequest(ReadingMaple rh, MapleClient c) {
        if (!GameConstants.isServerReady()) {
            c.send(MainPacketCreator.serverNotice(1, "["+ServerConstants.serverName+"]The current server is not ready.\r\n\r\nLoading because the necessary data is not available yet connected to the server.\r\n\r\nAfter a while, please reconnect."));
            return;
        }
        rh.skip(1);
	int server = rh.readByte();
	int channel = rh.readByte();

	c.setWorld(server);
        System.out.println("[!] (IP:"+ c.getSessionIPAddress().toString() +")  (ID:"+ c.getAccountName() +")  (Ch." + 
                (channel == 0 ? 1 : channel == 1 ? "20 years and over" : channel) + ") Connection attempts.");
	c.setChannel(channel);
        try {
            List<MapleCharacter> chars = c.loadCharacters();
            c.getSession().write(LoginPacket.charlist(c, c.isUsing2ndPassword(), chars));
            chars.clear();
            chars = null;
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
        }
    }
    
    public static void onlyRegisterSecondPassword(ReadingMaple rh, MapleClient c) {
        String secondpw = rh.readMapleAsciiString();
        
        c.setSecondPassword(secondpw);
        c.updateSecondPassword();
        c.send(LoginPacket.getSecondPasswordResult(true));
    }
     
    public static void registerSecondPassword(ReadingMaple rh, MapleClient c) {
        String originalPassword = rh.readMapleAsciiString(); 
        String changePassword = rh.readMapleAsciiString(); 
         
        if (!originalPassword.equals(c.getSecondPassword())) { 
            c.send(LoginPacket.getSecondPasswordResult(false));
        } else {
            c.setSecondPassword(changePassword);
            c.updateSecondPassword();
            c.send(LoginPacket.getSecondPasswordResult(true));
        }
    }
    
    public static void checkSecondPassword(ReadingMaple rh, MapleClient c) {
        String code = rh.readMapleAsciiString();
        
	if (!code.equals(c.getSecondPassword())) {
		c.send(LoginPacket.getSecondPasswordConfirm(false));
	} else {
		c.send(LoginPacket.getSecondPasswordConfirm(true));
	}
    }
    
    public static void newConnection(MapleClient c) {
        Connection con = MYSQL.getConnection();
        if (ServerConstants.Host.equals(c.getSessionIPAddress().replace("/", "")) || ServerConstants.showPackets) {
            c.allowLoggin = true;
            return;
        } try {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM acceptip where ip = ?");
            ps.setString(1, c.getSession().getRemoteAddress().toString().split(":")[0]);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                c.allowLoggin = true;
            }
            rs.close();
            ps.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static void CheckCharName(String name, MapleClient c) {
	c.getSession().write(LoginPacket.charNameResponse(name, !MapleCharacterUtil.canCreateChar(name) || MapleLoginHelper.getInstance().isForbiddenName(name)));
    }
    
    public static void CreateChar(ReadingMaple rh, MapleClient c) {
         String name = rh.readMapleAsciiString();
         MapleCharacter newchar = MapleCharacter.getDefault(c);
         rh.skip(8);
         int JobType = rh.readInt(); // 1 = Adventurer, 0 = Cygnus, 2 = Aran
         short subCategory = rh.readShort();
         if (JobType == MapleNewCharJobType.����.getValue()) {
             newchar.setSecondGender(rh.readByte());
         } else {
            newchar.setGender(rh.readByte());
         }
         newchar.setSkinColor(rh.readByte());
         rh.skip(1);
         newchar.setFace(rh.readInt());
         newchar.setHair(rh.readInt());
        if (JobType == MapleNewCharJobType.���󽽷��̾�.getValue() || JobType == MapleNewCharJobType.����.getValue()) {
            newchar.setSecondFace(rh.readInt());
        }
        if (JobType == MapleNewCharJobType.����.getValue()) {
            newchar.setGender((byte) 1);
            newchar.setSecondSkinColor((byte) 0);
            newchar.setSecondFace(21290);
            newchar.setSecondHair(37623);
        }
        int top = rh.readInt();
        int bottom = 0;
        if (JobType != MapleNewCharJobType.����������.getValue() && JobType != MapleNewCharJobType.�޸�������.getValue() && JobType != MapleNewCharJobType.���󽽷��̾�.getValue() && JobType != MapleNewCharJobType.��̳ʽ�.getValue() && JobType != MapleNewCharJobType.ī����.getValue() && JobType != MapleNewCharJobType.������������.getValue() && JobType != MapleNewCharJobType.����.getValue() && JobType != MapleNewCharJobType.���谡.getValue() && JobType != MapleNewCharJobType.ĳ����.getValue() && JobType != MapleNewCharJobType.�����̴�.getValue() && JobType != MapleNewCharJobType.����.getValue() && JobType != MapleNewCharJobType.����.getValue()) {
            bottom = rh.readInt();
        }
        int cape = 0;
        if (JobType == MapleNewCharJobType.����.getValue() || JobType == MapleNewCharJobType.��̳ʽ�.getValue() || JobType == MapleNewCharJobType.����.getValue() || JobType == MapleNewCharJobType.����.getValue()) {
            cape = rh.readInt();
        }
        int shoes = rh.readInt();
        int weapon = rh.readInt();
        int shield = 0;
        if (JobType == MapleNewCharJobType.���󽽷��̾�.getValue()) {
            shield = rh.readInt();
        }
        if (!MapleCharacterUtil.canCreateChar(name) || MapleLoginHelper.getInstance().isForbiddenName(name)) { //���� ���� �ߺ��г��� �߽߰�
            c.send(MainPacketCreator.serverNotice(1, "An error occurred while generating a character!"));
            c.send(LoginPacket.getLoginFailed(30));
            return;
        }
        newchar.setSubcategory(subCategory);
        newchar.setName(name);
        if (c.isGm()) {
            newchar.setGMLevel((byte) 6);
        }
        
        int mapcode = ServerConstants.startMap;
        
        if (JobType == MapleNewCharJobType.����������.getValue()) { //����������
            newchar.setMap(mapcode);
            newchar.setJob((short) 3000);
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161054, (byte) 0, (short) 1, (byte) 0));
            newchar.changeSkillLevel(SkillFactory.getSkill(30001061), (byte) 1, (byte) 1);
        } else if (JobType == MapleNewCharJobType.���谡.getValue() || JobType == MapleNewCharJobType.�����̴�.getValue() || JobType == MapleNewCharJobType.ĳ����.getValue()) { //���谡
            if (subCategory == 1) {
                newchar.setMap(mapcode);
            } else {
                newchar.setMap(mapcode);
            }
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161001, (byte) 0, (short) 1, (byte) 0));
            newchar.setJob((short) 0);
        } else if (JobType == MapleNewCharJobType.�ñ׳ʽ�.getValue()) { //�ñ׳ʽ�
            newchar.setMap(mapcode);
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161047, (byte) 0, (short) 1, (byte) 0));
            MapleQuestStatus status = newchar.getQuestNAdd(MapleQuest.getInstance(20022));
            status.setStatus((byte) 1);
            status.setCustomData("1"); // Cygnus quest
            newchar.changeSkillLevel(SkillFactory.getSkill(10001003), (byte) 1, (byte) 1); //������ ȥ
            newchar.changeSkillLevel(SkillFactory.getSkill(10001244), (byte) 1, (byte) 1); //������Ż ������
            newchar.changeSkillLevel(SkillFactory.getSkill(10001245), (byte) 1, (byte) 1); //���� Ȩ
            newchar.changeSkillLevel(SkillFactory.getSkill(10000246), (byte) 1, (byte) 1); //������Ż �ϸ��
            newchar.changeSkillLevel(SkillFactory.getSkill(10001254), (byte) 1, (byte) 1); //�������
            newchar.setJob((short) 1000);
        } else if (JobType == MapleNewCharJobType.�ƶ�.getValue()) { //�ƶ�
            newchar.setMap(mapcode);
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161048, (byte) 0, (short) 1, (byte) 0));
            newchar.setJob((short) 2000);
        } else if (JobType == MapleNewCharJobType.����.getValue()) { //����
            newchar.setMap(mapcode);
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161052, (byte) 0, (short) 1, (byte) 0));
            newchar.setJob((short) 2001);
            newchar.setKeyValue("Evan_SkillPointReceived", "1");
        } else if (JobType == MapleNewCharJobType.�޸�������.getValue()) { //�޸�������
            newchar.setMap(mapcode);
            newchar.setJob((short) 2002);
            newchar.changeSkillLevel(SkillFactory.getSkill(20020109), (byte) 1, (byte) 1); //������ ȸ��
            newchar.changeSkillLevel(SkillFactory.getSkill(20021110), (byte) 1, (byte) 1); //������ �ູ
            newchar.changeSkillLevel(SkillFactory.getSkill(20020111), (byte) 1, (byte) 1); //��Ÿ�ϸ��� ����
            newchar.changeSkillLevel(SkillFactory.getSkill(20020112), (byte) 1, (byte) 1); //���� �ڰ�
     newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161079, (byte) 0, (short) 1, (byte) 0));
        } else if (JobType == MapleNewCharJobType.���󽽷��̾�.getValue()) { //���󽽷��̾�
            newchar.setMap(mapcode);
            newchar.setJob((short) 3001);
            newchar.changeSkillLevel(SkillFactory.getSkill(30011109), (byte) 1, (byte) 1); //���� ����
            newchar.changeSkillLevel(SkillFactory.getSkill(30010110), (byte) 1, (byte) 1); //���� ����
        } else if (JobType == MapleNewCharJobType.����.getValue()) { //����
            newchar.setMap(mapcode);
            newchar.setJob((short) 3002);
            newchar.changeSkillLevel(SkillFactory.getSkill(30020232), (byte) 1, (byte) 1); //���÷��� ���ö���
            newchar.changeSkillLevel(SkillFactory.getSkill(30020233), (byte) 1, (byte) 1); //���̺긮�� ����
            newchar.changeSkillLevel(SkillFactory.getSkill(30020234), (byte) 1, (byte) 1); //��Ƽ���ͷ� I
            newchar.changeSkillLevel(SkillFactory.getSkill(30021235), (byte) 1, (byte) 1); //���θ�� ���Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(30021236), (byte) 1, (byte) 1); //��Ƽ ��� ��Ŀ
            newchar.changeSkillLevel(SkillFactory.getSkill(30021237), (byte) 1, (byte) 1); //�����̼� ����Ƽ
            newchar.changeSkillLevel(SkillFactory.getSkill(30020240), (byte) 1, (byte) 1); //ī���ö���
        } else if (JobType == MapleNewCharJobType.����.getValue()) { //����
            newchar.setMap(mapcode);
            newchar.setJob((short) 2003);
            newchar.changeSkillLevel(SkillFactory.getSkill(20031203), (byte) 1, (byte) 1); //���� ���� ����
            newchar.changeSkillLevel(SkillFactory.getSkill(20030204), (byte) 1, (byte) 1); //���鸮 �ν���Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(20031205), (byte) 1, (byte) 1); //���� ������
            newchar.changeSkillLevel(SkillFactory.getSkill(20030206), (byte) 1, (byte) 1); //���� �����ͷ�Ƽ
            newchar.changeSkillLevel(SkillFactory.getSkill(20031207), (byte) 1, (byte) 1); //��ƿ ��ų
            newchar.changeSkillLevel(SkillFactory.getSkill(20031208), (byte) 1, (byte) 1); //��ų �Ŵ�����Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(20031209), (byte) 1, (byte) 1); //������Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(20031260), (byte) 1, (byte) 1); //������Ʈ AUTO / MANUAL
        } else if (JobType == MapleNewCharJobType.������.getValue()) { //������
            newchar.setMap(mapcode);
            newchar.setJob((short) 5000);
            newchar.changeSkillLevel(SkillFactory.getSkill(50001214), (byte) 1, (byte) 1); //���� ��ȣ
        } else if (JobType == MapleNewCharJobType.��̳ʽ�.getValue()) { //��̳ʽ�
            newchar.setMap(mapcode);
            newchar.setJob((short) 2004);
            newchar.changeSkillLevel(SkillFactory.getSkill(20040219), (byte) 1, (byte) 1);  //�������긮��
            newchar.changeSkillLevel(SkillFactory.getSkill(20040216), (byte) 1, (byte) 1); //�����̾�
            newchar.changeSkillLevel(SkillFactory.getSkill(20040217), (byte) 1, (byte) 1); //��Ŭ����
            newchar.changeSkillLevel(SkillFactory.getSkill(20040218), (byte) 1, (byte) 1); //�۹̿���Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(20040221), (byte) 1, (byte) 1); //�Ŀ��������Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(20041222), (byte) 1, (byte) 1); //����Ʈ ��ũ
        } else if (JobType == MapleNewCharJobType.ī����.getValue()) { //ī����
            newchar.setMap(mapcode);
            newchar.setJob((short) 6000);
            newchar.changeSkillLevel(SkillFactory.getSkill(60001216), (byte) 1, (byte) 1); //������ ����ġ : �����
            newchar.changeSkillLevel(SkillFactory.getSkill(60001217), (byte) 1, (byte) 1); //������ ����ġ : ���ݸ��
            newchar.changeSkillLevel(SkillFactory.getSkill(60001218), (byte) 1, (byte) 1); //��Ƽ��Ŀ��Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(60001219), (byte) 1, (byte) 1); //���̾� ��
            newchar.changeSkillLevel(SkillFactory.getSkill(60001220), (byte) 1, (byte) 1); //Ʈ�����ǱԷ��̼�
            newchar.changeSkillLevel(SkillFactory.getSkill(60001221), (byte) 1, (byte) 1); //Ʈ�����ǱԷ��̼�
            newchar.changeSkillLevel(SkillFactory.getSkill(60001222), (byte) 1, (byte) 1); //Ʈ�����ǱԷ��̼�
            newchar.changeSkillLevel(SkillFactory.getSkill(60001225), (byte) 1, (byte) 1); //Ŀ�ǵ�
        } else if (JobType == MapleNewCharJobType.������������.getValue()) { //ī����
            newchar.setMap(mapcode);
            newchar.setJob((short) 6001);
            newchar.changeSkillLevel(SkillFactory.getSkill(60011216), (byte) 1, (byte) 1); //������
            newchar.changeSkillLevel(SkillFactory.getSkill(60011218), (byte) 1, (byte) 1); //������ ����Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(60011219), (byte) 1, (byte) 1); //�ҿ� ��Ʈ��Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(60011220), (byte) 1, (byte) 1); //���̵帲
            newchar.changeSkillLevel(SkillFactory.getSkill(60011221), (byte) 1, (byte) 1); //�ڵ����Ʈ
            newchar.changeSkillLevel(SkillFactory.getSkill(60011222), (byte) 1, (byte) 1); //�巹�� ��
        } else if (JobType == MapleNewCharJobType.����.getValue()) {
            newchar.setMap(mapcode);
            newchar.setJob((short) 10112);
            newchar.setLevel(100);
            newchar.changeSkillLevel(SkillFactory.getSkill(100001262), (byte) 1, (byte) 1);
            newchar.changeSkillLevel(SkillFactory.getSkill(100000282), (byte) 1, (byte) 1);
            newchar.changeSkillLevel(SkillFactory.getSkill(100001263), (byte) 1, (byte) 1);
            newchar.changeSkillLevel(SkillFactory.getSkill(100001264), (byte) 1, (byte) 1);
            newchar.changeSkillLevel(SkillFactory.getSkill(100001265), (byte) 1, (byte) 1);
            newchar.changeSkillLevel(SkillFactory.getSkill(100001266), (byte) 1, (byte) 1);
            newchar.changeSkillLevel(SkillFactory.getSkill(100001268), (byte) 1, (byte) 1);
            newchar.changeSkillLevel(SkillFactory.getSkill(100000279), (byte) 5, (byte) 5);
        } else if (JobType == MapleNewCharJobType.����.getValue()) {
            newchar.setMap(mapcode);
            newchar.setJob((short) 2005);
        }
        newchar.setMap(mapcode);
        MapleInventory equip = newchar.getInventory(MapleInventoryType.EQUIPPED);
        Equip eq_top = new Equip(top, (short) -5 , (byte) 0);
        eq_top.setWdef((short) 3);
        eq_top.setUpgradeSlots((byte) 7);
        eq_top.setExpiration(-1);
        equip.addFromDB(eq_top.copy());
        if (JobType == MapleNewCharJobType.���󽽷��̾�.getValue()) {
            Equip shielde = new Equip(shield, (short) -10 , (byte) 0);
            shielde.setMp((short) 110);
            shielde.setHp((short) 200);
            shielde.setUpgradeSlots((byte) 7);
            shielde.setExpiration(-1);
            equip.addFromDB(shielde.copy());
        }
         if (JobType == MapleNewCharJobType.ī����.getValue() || JobType == MapleNewCharJobType.������������.getValue()) {
             Equip js = new Equip(1352504, (short) -10, (byte) 0);
             if (JobType == MapleNewCharJobType.ī����.getValue()) {
                 js = null;
                 js = new Equip(1352504, (short) -10, (byte) 0);
             } else if (JobType == MapleNewCharJobType.������������.getValue()) {
                 js = null;
                 js = new Equip(1352600, (short) -10, (byte) 0);
             }
            js.setWdef((short) 5);
            js.setMdef((short) 5);
            js.setUpgradeSlots((byte) 7);
            js.setExpiration(-1);
            equip.addFromDB(js.copy());
        }
        Equip shoese = new Equip(shoes, (short) -7 , (byte) 0);
        shoese.setWdef((short) 2);
        shoese.setUpgradeSlots((byte) 7);
        shoese.setExpiration(-1);
        equip.addFromDB(shoese.copy());
        if (JobType != MapleNewCharJobType.����������.getValue() && JobType != MapleNewCharJobType.�޸�������.getValue() && JobType != MapleNewCharJobType.���󽽷��̾�.getValue() && JobType != MapleNewCharJobType.��̳ʽ�.getValue() && JobType != MapleNewCharJobType.ī����.getValue() && JobType != MapleNewCharJobType.������������.getValue() && JobType != MapleNewCharJobType.����.getValue() && JobType != MapleNewCharJobType.���谡.getValue() && JobType != MapleNewCharJobType.ĳ����.getValue() && JobType != MapleNewCharJobType.�����̴�.getValue() && JobType != MapleNewCharJobType.����.getValue() && JobType != MapleNewCharJobType.����.getValue()) { //���󽽷��̾�, ����������, �޸�������, ��̳ʽ�, ī����, ����, ������ �ѹ���.
            Equip bottome = new Equip(bottom, (short) -6, (byte) 0);
            bottome.setWdef((short) 2);
            bottome.setUpgradeSlots((byte) 7);
            bottome.setExpiration(-1);
            equip.addFromDB(bottome.copy());
        }
        if (JobType == MapleNewCharJobType.����.getValue() || JobType == MapleNewCharJobType.��̳ʽ�.getValue() || JobType == MapleNewCharJobType.����.getValue() || JobType == MapleNewCharJobType.����.getValue()) {
            Equip capee = new Equip(cape, (short) -9, (byte) 0);
            capee.setWdef((short) 5);
            capee.setMdef((short) 5);
            capee.setUpgradeSlots((byte) 7);
            capee.setExpiration(-1);
            equip.addFromDB(capee.copy());
        }
        Equip weapone = new Equip(weapon, (short) -11, (byte) 0);
        if (JobType == MapleNewCharJobType.��̳ʽ�.getValue()) {
        weapone.setMatk((short) 17);
        } else {
        weapone.setWatk((short) 17);
        }
        weapone.setUpgradeSlots((byte) 7);
        weapone.setExpiration(-1);
        equip.addFromDB(weapone.copy());
        if (JobType == MapleNewCharJobType.����.getValue()) {
            Equip js = new Equip(1562000, (short) -10, (byte) 0);
            weapone.setUpgradeSlots((byte) 7);
            weapone.setExpiration(-1);
            equip.addFromDB(js.copy());
        }
        
    if (MapleCharacterUtil.canCreateChar(name) && !MapleLoginHelper.getInstance().isForbiddenName(name)) {
        MapleCharacter.saveNewCharToDB(newchar);
        MapleItempotMain.getInstance().newCharDB(newchar.getId());
        c.getSession().write(LoginPacket.addNewCharacterEntry(newchar, true));
        c.createdChar(newchar.getId());
    } else {
        c.getSession().write(LoginPacket.addNewCharacterEntry(newchar, false));
        }
      newchar = null;
    } 

    public static void DeleteChar(ReadingMaple rh, MapleClient c) {
	String Secondpw_Client = rh.readMapleAsciiString();
	int Character_ID = rh.readInt();
        MapleCharacter chr = MapleCharacter.loadCharFromDB(Character_ID, c, false);
	if (!c.login_Auth(Character_ID)) {
	    c.getSession().close();
	    return; // Attempting to delete other character
	}
	byte state = 0;
//        if (chr.getMeso() < 5000000) {
//            c.getSession().write(MainPacketCreator.serverNotice(1, "In order to delete a character must be in possession of 5,000,000 mesos to delete the character."));
//            c.getSession().write(LoginPacket.getLoginFailed(20));
//            chr = null;
//            return;
//        }
        if (Secondpw_Client == null) { // Client's hacking
            c.getSession().close();
            return;
        } else {
            if (!c.CheckSecondPassword(Secondpw_Client)) { // Wrong Password
                state = 0x14;
            }
        }
	if (state == 0) {
	    if (!c.deleteCharacter(Character_ID)) {
		state = 1; //actually something else would be good o.o
	    }
	}
	c.getSession().write(LoginPacket.deleteCharResponse(Character_ID, state));
    }

    public static void Character_WithoutSecondPassword(ReadingMaple rh, MapleClient c) {
        int charId = rh.readInt();
 
        if (c.getIdleTask() != null) {
            c.getIdleTask().cancel(true);
        }
        
        c.updateLoginState(MapleClient.LOGIN_SERVER_TRANSITION, c.getSessionIPAddress());
        c.getSession().write(MainPacketCreator.getServerIP(ServerConstants.basePorts + c.getChannel(), charId, ServerConstants.Host));
    }

    public static void Character_WithSecondPassword(ReadingMaple rh, MapleClient c) {
	String password = rh.readMapleAsciiString();
	int charId = rh.readInt();

	if (loginFailCount(c) || c.getSecondPassword() == null || !c.login_Auth(charId)) { // This should not happen unless player is hacking
	    c.getSession().close();
	    return;
	}

	if (c.CheckSecondPassword(password)) {
            if (c.getIdleTask() != null) {
                c.getIdleTask().cancel(true);
            }
            c.updateLoginState(MapleClient.LOGIN_SERVER_TRANSITION, c.getSessionIPAddress());
            c.getSession().write(MainPacketCreator.getServerIP(ServerConstants.basePorts + c.getChannel(), charId, ServerConstants.Host));
	} else {
	    c.getSession().write(LoginPacket.secondPwError((byte) 0x14));
	}
    }
    
    public static void updateCharCard(ReadingMaple rh, MapleClient c) {
        if(!c.isLoggedIn()) { c.getSession().close(); return; }
        Map<Integer, Integer> cid = new LinkedHashMap<Integer, Integer>();
        
        for(int i = 1; i <= 6; i++) {
            int charid = rh.readInt();
            cid.put(i, charid);
        }
        c.updateCharCard(cid);
    }
}
