/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package tools;

import constants.ServerConstants;
import client.MapleCharacter;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;
import java.util.TimeZone;

/**
 *
 * @author 에반테이르
 */
public class LoggerChatting {
    
    public static String chatLog = "ChatLog.txt";
    
    public static void writeLog(String log, String text) {
        try {
            Calendar currentTime = Calendar.getInstance(TimeZone.getTimeZone("KST"), Locale.KOREAN);
            File file = new File("Settings/Logs/"+ log);
            
            FileOutputStream fos = new FileOutputStream(file, true);
            
            fos.write((currentTime.getTime().toLocaleString() + " "+text+""+System.getProperty("line.separator")).getBytes());
            fos.close();
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
        }
    }
    
    public static String getChatLogType(String type, MapleCharacter chr, String chattext) {
        return "["+type+"] "+chr.getName()+" : "+chattext + " 현재맵 : "+chr.getMap().getStreetName()+"-"+chr.getMap().getMapName()+" ("+chr.getMap().getId()+")";
    }
}
