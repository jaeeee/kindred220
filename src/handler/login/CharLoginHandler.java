/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
       if (checkId == 0) { //생성 가능한 아이디일때
            if (canjoin == 1) {
                AutoRegister.registerAccount(c, login, pwd);
                c.send(MainPacketCreator.serverNotice(1, "Account created.\r\nPlease log in again."));
                c.send(LoginPacket.getLoginFailed(20));
                return;
            } else {
                c.send(MainPacketCreator.serverNotice(1, "A reboot of the server, please try again later."));
                c.send(LoginPacket.getLoginFailed(20));
            }
        } else if (checkId == 1) { //계정 찾기 실패
            c.send(MainPacketCreator.serverNotice(1, "There is no corresponding account.\r\n" + ServerConstants.serverName + " 홈페이지에\r\n먼저 접속하셔서 회원가입을\r\nPlease."));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        } else if (checkId == 2) { //php오류
            c.send(MainPacketCreator.serverNotice(1, "Page error occurred. Please try again later."));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        } else if (checkId == 3) { //레벨
            c.send(MainPacketCreator.serverNotice(1, "It does not meet the level of the site. After receiving an account, please use the ratings up."));
            c.send(LoginPacket.getLoginFailed(20));
            return;
        } else if (checkId == 6) { //횟수초과
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
         if (JobType == MapleNewCharJobType.제로.getValue()) {
             newchar.setSecondGender(rh.readByte());
         } else {
            newchar.setGender(rh.readByte());
         }
         newchar.setSkinColor(rh.readByte());
         rh.skip(1);
         newchar.setFace(rh.readInt());
         newchar.setHair(rh.readInt());
        if (JobType == MapleNewCharJobType.데몬슬레이어.getValue() || JobType == MapleNewCharJobType.제논.getValue()) {
            newchar.setSecondFace(rh.readInt());
        }
        if (JobType == MapleNewCharJobType.제로.getValue()) {
            newchar.setGender((byte) 1);
            newchar.setSecondSkinColor((byte) 0);
            newchar.setSecondFace(21290);
            newchar.setSecondHair(37623);
        }
        int top = rh.readInt();
        int bottom = 0;
        if (JobType != MapleNewCharJobType.레지스탕스.getValue() && JobType != MapleNewCharJobType.메르세데스.getValue() && JobType != MapleNewCharJobType.데몬슬레이어.getValue() && JobType != MapleNewCharJobType.루미너스.getValue() && JobType != MapleNewCharJobType.카이저.getValue() && JobType != MapleNewCharJobType.엔젤릭버스터.getValue() && JobType != MapleNewCharJobType.제논.getValue() && JobType != MapleNewCharJobType.모험가.getValue() && JobType != MapleNewCharJobType.캐논슈터.getValue() && JobType != MapleNewCharJobType.듀얼블레이더.getValue() && JobType != MapleNewCharJobType.팬텀.getValue() && JobType != MapleNewCharJobType.제로.getValue()) {
            bottom = rh.readInt();
        }
        int cape = 0;
        if (JobType == MapleNewCharJobType.팬텀.getValue() || JobType == MapleNewCharJobType.루미너스.getValue() || JobType == MapleNewCharJobType.제로.getValue() || JobType == MapleNewCharJobType.은월.getValue()) {
            cape = rh.readInt();
        }
        int shoes = rh.readInt();
        int weapon = rh.readInt();
        int shield = 0;
        if (JobType == MapleNewCharJobType.데몬슬레이어.getValue()) {
            shield = rh.readInt();
        }
        if (!MapleCharacterUtil.canCreateChar(name) || MapleLoginHelper.getInstance().isForbiddenName(name)) { //생성 도중 중복닉네임 발견시
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
        
        if (JobType == MapleNewCharJobType.레지스탕스.getValue()) { //레지스탕스
            newchar.setMap(mapcode);
            newchar.setJob((short) 3000);
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161054, (byte) 0, (short) 1, (byte) 0));
            newchar.changeSkillLevel(SkillFactory.getSkill(30001061), (byte) 1, (byte) 1);
        } else if (JobType == MapleNewCharJobType.모험가.getValue() || JobType == MapleNewCharJobType.듀얼블레이더.getValue() || JobType == MapleNewCharJobType.캐논슈터.getValue()) { //모험가
            if (subCategory == 1) {
                newchar.setMap(mapcode);
            } else {
                newchar.setMap(mapcode);
            }
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161001, (byte) 0, (short) 1, (byte) 0));
            newchar.setJob((short) 0);
        } else if (JobType == MapleNewCharJobType.시그너스.getValue()) { //시그너스
            newchar.setMap(mapcode);
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161047, (byte) 0, (short) 1, (byte) 0));
            MapleQuestStatus status = newchar.getQuestNAdd(MapleQuest.getInstance(20022));
            status.setStatus((byte) 1);
            status.setCustomData("1"); // Cygnus quest
            newchar.changeSkillLevel(SkillFactory.getSkill(10001003), (byte) 1, (byte) 1); //장인의 혼
            newchar.changeSkillLevel(SkillFactory.getSkill(10001244), (byte) 1, (byte) 1); //엘리멘탈 슬래시
            newchar.changeSkillLevel(SkillFactory.getSkill(10001245), (byte) 1, (byte) 1); //져니 홈
            newchar.changeSkillLevel(SkillFactory.getSkill(10000246), (byte) 1, (byte) 1); //엘리멘탈 하모니
            newchar.changeSkillLevel(SkillFactory.getSkill(10001254), (byte) 1, (byte) 1); //워리어리프
            newchar.setJob((short) 1000);
        } else if (JobType == MapleNewCharJobType.아란.getValue()) { //아란
            newchar.setMap(mapcode);
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161048, (byte) 0, (short) 1, (byte) 0));
            newchar.setJob((short) 2000);
        } else if (JobType == MapleNewCharJobType.에반.getValue()) { //에반
            newchar.setMap(mapcode);
            newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161052, (byte) 0, (short) 1, (byte) 0));
            newchar.setJob((short) 2001);
            newchar.setKeyValue("Evan_SkillPointReceived", "1");
        } else if (JobType == MapleNewCharJobType.메르세데스.getValue()) { //메르세데스
            newchar.setMap(mapcode);
            newchar.setJob((short) 2002);
            newchar.changeSkillLevel(SkillFactory.getSkill(20020109), (byte) 1, (byte) 1); //엘프의 회복
            newchar.changeSkillLevel(SkillFactory.getSkill(20021110), (byte) 1, (byte) 1); //엘프의 축복
            newchar.changeSkillLevel(SkillFactory.getSkill(20020111), (byte) 1, (byte) 1); //스타일리쉬 무브
            newchar.changeSkillLevel(SkillFactory.getSkill(20020112), (byte) 1, (byte) 1); //왕의 자격
     newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161079, (byte) 0, (short) 1, (byte) 0));
        } else if (JobType == MapleNewCharJobType.데몬슬레이어.getValue()) { //데몬슬레이어
            newchar.setMap(mapcode);
            newchar.setJob((short) 3001);
            newchar.changeSkillLevel(SkillFactory.getSkill(30011109), (byte) 1, (byte) 1); //데빌 윙즈
            newchar.changeSkillLevel(SkillFactory.getSkill(30010110), (byte) 1, (byte) 1); //데몬 점프
        } else if (JobType == MapleNewCharJobType.제논.getValue()) { //제논
            newchar.setMap(mapcode);
            newchar.setJob((short) 3002);
            newchar.changeSkillLevel(SkillFactory.getSkill(30020232), (byte) 1, (byte) 1); //서플러스 서플라이
            newchar.changeSkillLevel(SkillFactory.getSkill(30020233), (byte) 1, (byte) 1); //하이브리드 로직
            newchar.changeSkillLevel(SkillFactory.getSkill(30020234), (byte) 1, (byte) 1); //멀티래터럴 I
            newchar.changeSkillLevel(SkillFactory.getSkill(30021235), (byte) 1, (byte) 1); //프로멧사 어썰트
            newchar.changeSkillLevel(SkillFactory.getSkill(30021236), (byte) 1, (byte) 1); //멀티 모드 링커
            newchar.changeSkillLevel(SkillFactory.getSkill(30021237), (byte) 1, (byte) 1); //에비에이션 리버티
            newchar.changeSkillLevel(SkillFactory.getSkill(30020240), (byte) 1, (byte) 1); //카모플라쥬
        } else if (JobType == MapleNewCharJobType.팬텀.getValue()) { //팬텀
            newchar.setMap(mapcode);
            newchar.setJob((short) 2003);
            newchar.changeSkillLevel(SkillFactory.getSkill(20031203), (byte) 1, (byte) 1); //리턴 오브 팬텀
            newchar.changeSkillLevel(SkillFactory.getSkill(20030204), (byte) 1, (byte) 1); //데들리 인스팅트
            newchar.changeSkillLevel(SkillFactory.getSkill(20031205), (byte) 1, (byte) 1); //팬텀 슈라우드
            newchar.changeSkillLevel(SkillFactory.getSkill(20030206), (byte) 1, (byte) 1); //하이 덱스터러티
            newchar.changeSkillLevel(SkillFactory.getSkill(20031207), (byte) 1, (byte) 1); //스틸 스킬
            newchar.changeSkillLevel(SkillFactory.getSkill(20031208), (byte) 1, (byte) 1); //스킬 매니지먼트
            newchar.changeSkillLevel(SkillFactory.getSkill(20031209), (byte) 1, (byte) 1); //저지먼트
            newchar.changeSkillLevel(SkillFactory.getSkill(20031260), (byte) 1, (byte) 1); //저지먼트 AUTO / MANUAL
        } else if (JobType == MapleNewCharJobType.미하일.getValue()) { //미하일
            newchar.setMap(mapcode);
            newchar.setJob((short) 5000);
            newchar.changeSkillLevel(SkillFactory.getSkill(50001214), (byte) 1, (byte) 1); //빛의 수호
        } else if (JobType == MapleNewCharJobType.루미너스.getValue()) { //루미너스
            newchar.setMap(mapcode);
            newchar.setJob((short) 2004);
            newchar.changeSkillLevel(SkillFactory.getSkill(20040219), (byte) 1, (byte) 1);  //이퀄리브리엄
            newchar.changeSkillLevel(SkillFactory.getSkill(20040216), (byte) 1, (byte) 1); //선파이어
            newchar.changeSkillLevel(SkillFactory.getSkill(20040217), (byte) 1, (byte) 1); //이클립스
            newchar.changeSkillLevel(SkillFactory.getSkill(20040218), (byte) 1, (byte) 1); //퍼미에이트
            newchar.changeSkillLevel(SkillFactory.getSkill(20040221), (byte) 1, (byte) 1); //파워오브라이트
            newchar.changeSkillLevel(SkillFactory.getSkill(20041222), (byte) 1, (byte) 1); //라이트 블링크
        } else if (JobType == MapleNewCharJobType.카이저.getValue()) { //카이저
            newchar.setMap(mapcode);
            newchar.setJob((short) 6000);
            newchar.changeSkillLevel(SkillFactory.getSkill(60001216), (byte) 1, (byte) 1); //리셔플 스위치 : 방어모드
            newchar.changeSkillLevel(SkillFactory.getSkill(60001217), (byte) 1, (byte) 1); //리셔플 스위치 : 공격모드
            newchar.changeSkillLevel(SkillFactory.getSkill(60001218), (byte) 1, (byte) 1); //바티컬커넥트
            newchar.changeSkillLevel(SkillFactory.getSkill(60001219), (byte) 1, (byte) 1); //아이언 윌
            newchar.changeSkillLevel(SkillFactory.getSkill(60001220), (byte) 1, (byte) 1); //트랜스피규레이션
            newchar.changeSkillLevel(SkillFactory.getSkill(60001221), (byte) 1, (byte) 1); //트랜스피규레이션
            newchar.changeSkillLevel(SkillFactory.getSkill(60001222), (byte) 1, (byte) 1); //트랜스피규레이션
            newchar.changeSkillLevel(SkillFactory.getSkill(60001225), (byte) 1, (byte) 1); //커맨드
        } else if (JobType == MapleNewCharJobType.엔젤릭버스터.getValue()) { //카이저
            newchar.setMap(mapcode);
            newchar.setJob((short) 6001);
            newchar.changeSkillLevel(SkillFactory.getSkill(60011216), (byte) 1, (byte) 1); //석세서
            newchar.changeSkillLevel(SkillFactory.getSkill(60011218), (byte) 1, (byte) 1); //매지컬 리프트
            newchar.changeSkillLevel(SkillFactory.getSkill(60011219), (byte) 1, (byte) 1); //소울 컨트랙트
            newchar.changeSkillLevel(SkillFactory.getSkill(60011220), (byte) 1, (byte) 1); //데이드림
            newchar.changeSkillLevel(SkillFactory.getSkill(60011221), (byte) 1, (byte) 1); //코디네이트
            newchar.changeSkillLevel(SkillFactory.getSkill(60011222), (byte) 1, (byte) 1); //드레스 업
        } else if (JobType == MapleNewCharJobType.제로.getValue()) {
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
        } else if (JobType == MapleNewCharJobType.은월.getValue()) {
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
        if (JobType == MapleNewCharJobType.데몬슬레이어.getValue()) {
            Equip shielde = new Equip(shield, (short) -10 , (byte) 0);
            shielde.setMp((short) 110);
            shielde.setHp((short) 200);
            shielde.setUpgradeSlots((byte) 7);
            shielde.setExpiration(-1);
            equip.addFromDB(shielde.copy());
        }
         if (JobType == MapleNewCharJobType.카이저.getValue() || JobType == MapleNewCharJobType.엔젤릭버스터.getValue()) {
             Equip js = new Equip(1352504, (short) -10, (byte) 0);
             if (JobType == MapleNewCharJobType.카이저.getValue()) {
                 js = null;
                 js = new Equip(1352504, (short) -10, (byte) 0);
             } else if (JobType == MapleNewCharJobType.엔젤릭버스터.getValue()) {
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
        if (JobType != MapleNewCharJobType.레지스탕스.getValue() && JobType != MapleNewCharJobType.메르세데스.getValue() && JobType != MapleNewCharJobType.데몬슬레이어.getValue() && JobType != MapleNewCharJobType.루미너스.getValue() && JobType != MapleNewCharJobType.카이저.getValue() && JobType != MapleNewCharJobType.엔젤릭버스터.getValue() && JobType != MapleNewCharJobType.제논.getValue() && JobType != MapleNewCharJobType.모험가.getValue() && JobType != MapleNewCharJobType.캐논슈터.getValue() && JobType != MapleNewCharJobType.듀얼블레이더.getValue() && JobType != MapleNewCharJobType.팬텀.getValue() && JobType != MapleNewCharJobType.제로.getValue()) { //데몬슬레이어, 레지스탕스, 메르세데스, 루미너스, 카이저, 엔버, 제논은 한벌옷.
            Equip bottome = new Equip(bottom, (short) -6, (byte) 0);
            bottome.setWdef((short) 2);
            bottome.setUpgradeSlots((byte) 7);
            bottome.setExpiration(-1);
            equip.addFromDB(bottome.copy());
        }
        if (JobType == MapleNewCharJobType.팬텀.getValue() || JobType == MapleNewCharJobType.루미너스.getValue() || JobType == MapleNewCharJobType.제로.getValue() || JobType == MapleNewCharJobType.은월.getValue()) {
            Equip capee = new Equip(cape, (short) -9, (byte) 0);
            capee.setWdef((short) 5);
            capee.setMdef((short) 5);
            capee.setUpgradeSlots((byte) 7);
            capee.setExpiration(-1);
            equip.addFromDB(capee.copy());
        }
        Equip weapone = new Equip(weapon, (short) -11, (byte) 0);
        if (JobType == MapleNewCharJobType.루미너스.getValue()) {
        weapone.setMatk((short) 17);
        } else {
        weapone.setWatk((short) 17);
        }
        weapone.setUpgradeSlots((byte) 7);
        weapone.setExpiration(-1);
        equip.addFromDB(weapone.copy());
        if (JobType == MapleNewCharJobType.제로.getValue()) {
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
