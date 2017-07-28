/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package constants;

import client.MapleClient;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.io.UnsupportedEncodingException;
import java.net.InetAddress;
import java.net.URL;
import java.util.Properties;
import javax.swing.JOptionPane;

public class ServerConstants {
    
    /* 서버 설정 */
    public static String Host;

    public static int startMap;
    public static byte defaultFlag;
    public static int serverCount;
    public static int LoginPort; 
    public static int ChannelPort;
    public static int cashShopPort;
    
    public static boolean isLocal = false;
        
    public static int defaultExpRate;
    public static int defaultMesoRate;
    public static int defaultDropRate;
    public static int defaultCashRate;
    public static int defaultBossCashRate;
    
    public static int maxDrop;
    public static int bossMaxDrop;
    
    public static int defaultMaxChannelLoad = 50;
    
    public static int cshopNpc = 0; 
    public static int chatlimit = 0;
    
    /* DB 설정 */ 
    public static int dbPort;
    public static String dbHost;
    public static String dbUser;
    public static String dbPassword;
    
    /* Message 설정 및 이벤트 설정*/
    public static String recommendMessage = "";
    public static String serverName = "";
    public static String serverMessage = "";
    public static String serverWelcome = "";
    public static String eventMessage = "";
    public static String serverHint = "";
    public static String beginner = "";
    public static String serverNotice = "";
    public static String serverNotititle = "";
    public static String serverNotification = "";
    public static String events = "";
    public static String serverCheckMessage = "Now " + serverName + " A check of the server.\r\n For more information, refer to the homepage.\r\n [Reason : Stabilization System]";
    
    /* 개발 설정 */    
    public static boolean serverCheck;
    
    /* 기타 설정 */
    public static boolean isResourceDispose = false;
    public static boolean UnlockMaxDamage = true;
    public static boolean feverTime = true;
    public static boolean useMaxDrop;
    public static boolean useBossMaxDrop;
    public static boolean showPackets = false; 
    public static boolean realese = true; 
    public static String path = ""; 
    public static String windowsDumpPath = ""; 
    
    /* 버전 설정 */
    public static short MAPLE_VERSION;
    public static byte subVersion;
    public static final byte check = 1;
    
    /* 기타 설정 2 */
    public static String hp_skillid_dummy = ""; 
    public static String hp_skillid_real[]; 
     
    static {
        try {
            FileInputStream setting = new FileInputStream("Settings/ServerSettings.properties");
            Properties setting_ = new Properties();
            setting_.load(setting);
            setting.close();
            defaultFlag = Byte.parseByte(setting_.getProperty(toUni("Flag")));
            Host = new String(setting_.getProperty(toUni("아이피")).getBytes("ISO-8859-1"), "euc-kr");
            serverCount = Integer.parseInt(setting_.getProperty(toUni("서버개수")));
            LoginPort = Integer.parseInt(setting_.getProperty(toUni("로그인포트")));
            ChannelPort = Integer.parseInt(setting_.getProperty(toUni("채널포트")));
            cashShopPort = Integer.parseInt(setting_.getProperty(toUni("캐시샵포트")));
            
            if (KindredConstants.USING_SETTINGS == false) {
            	System.out.println("[System] Not using ServerSettings.properties rates.");
            	defaultExpRate = KindredConstants.EXP_RATE;
            	defaultDropRate = KindredConstants.DROP_RATE;
            	defaultMesoRate = KindredConstants.MESO_RATE;
            } else {
            	System.out.println("[System] Using ServerSettings.properties rates.");
                defaultExpRate = Integer.parseInt(setting_.getProperty(toUni("경험치배율")));
                defaultDropRate = Integer.parseInt(setting_.getProperty(toUni("드롭배율")));
                defaultMesoRate = Integer.parseInt(setting_.getProperty(toUni("메소배율")));
            }
            defaultCashRate = Integer.parseInt(setting_.getProperty(toUni("캐시배율")));
            defaultBossCashRate = Integer.parseInt(setting_.getProperty(toUni("보스캐시배율")));
            
            cshopNpc = Integer.parseInt(setting_.getProperty(toUni("캐시샵NPC")));
            
            serverName = new String(setting_.getProperty(toUni("서버이름")).getBytes("ISO-8859-1"), "euc-kr");
            serverMessage = new String(setting_.getProperty(toUni("서버메세지")).getBytes("ISO-8859-1"), "euc-kr");
            serverWelcome = new String(setting_.getProperty(toUni("서버환영메세지")).getBytes("ISO-8859-1"), "euc-kr");
            eventMessage = new String(setting_.getProperty(toUni("이벤트메세지")).getBytes("ISO-8859-1"), "euc-kr");
            beginner = new String(setting_.getProperty(toUni("처음시작공지")).getBytes("ISO-8859-1"), "euc-kr");
            serverNotice = new String(setting_.getProperty(toUni("서버알림메세지")).getBytes("ISO-8859-1"), "euc-kr"); 
            serverNotititle = new String(setting_.getProperty(toUni("서버공지제목")).getBytes("ISO-8859-1"), "euc-kr");
            serverNotification = new String(setting_.getProperty(toUni("서버공지내용")).getBytes("ISO-8859-1"), "euc-kr");
            recommendMessage = new String(setting_.getProperty(toUni("추천메세지")).getBytes("ISO-8859-1"), "euc-kr");
            serverHint = new String(setting_.getProperty(toUni("서버힌트")).getBytes("ISO-8859-1"), "euc-kr");
            
            dbHost = new String(setting_.getProperty(toUni("Arc.dbHost")).getBytes("ISO-8859-1"), "euc-kr");
            dbPort = Integer.parseInt(setting_.getProperty(toUni("Arc.dbPort")));
            dbUser = new String(setting_.getProperty(toUni("Arc.dbUser")).getBytes("ISO-8859-1"), "euc-kr");
            dbPassword = new String(setting_.getProperty(toUni("Arc.dbPassword")).getBytes("ISO-8859-1"), "euc-kr");
            
            events = new String(setting_.getProperty(toUni("이벤트")).getBytes("ISO-8859-1"), "euc-kr");
            
            startMap = Integer.parseInt(setting_.getProperty(toUni("시작맵")));
            serverHint = new String(setting_.getProperty(toUni("서버힌트")).getBytes("ISO-8859-1"), "euc-kr");
            
            MAPLE_VERSION = Short.parseShort(setting_.getProperty(toUni("클라이언트버전")));
            subVersion = Byte.parseByte(setting_.getProperty(toUni("마이너버전")));
            
            path = new String(setting_.getProperty(toUni("옵션경로지정")).getBytes("ISO-8859-1"), "euc-kr");
            windowsDumpPath = new String(setting_.getProperty(toUni("덤프경로지정")).getBytes("ISO-8859-1"), "euc-kr");
            
            serverCheck = Boolean.parseBoolean(setting_.getProperty(toUni("서버점검")));
            showPackets = Boolean.parseBoolean(setting_.getProperty(toUni("패킷출력")));
            useMaxDrop = Boolean.parseBoolean(setting_.getProperty(toUni("최대드랍사용")));
            useBossMaxDrop = Boolean.parseBoolean(setting_.getProperty(toUni("최대보스드랍사용")));
                        
            bossMaxDrop = Integer.parseInt(setting_.getProperty(toUni("최대보스드랍아이템개수")));
            maxDrop = Integer.parseInt(setting_.getProperty(toUni("최대드랍아이템개수")));
                        
        } catch (Exception e) {
            System.err.println("[Error] To invoke a server settings file it failed.");
            if (!realese) {
                e.printStackTrace();
            }
        }
    }
    
    public static int basePorts = (isLocal ? 100 : 0) + (ChannelPort); 

    protected static String toUni(String kor)
            throws UnsupportedEncodingException {
        return new String(kor.getBytes("KSC5601"), "8859_1");
    }
    
    public static String getServerHost(MapleClient ha) {
        try {
            return InetAddress.getByName(ServerConstants.Host).getHostAddress().replace("/", "");
        } catch (Exception e) {
            if (!ServerConstants.realese)
                e.printStackTrace();
        }
        return ServerConstants.Host;
    } 
}
