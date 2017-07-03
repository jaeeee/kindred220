/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package constants.programs;

import client.MapleCharacter;
import constants.ServerConstants;
import java.io.File;
import tools.Timer.WorldTimer;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import launch.ChannelServer;

/**
 *
 * @author 최주원(sch2307@nate.com)
 */
public class DatabaseBackup {
    private static int time = 0;
    public static DatabaseBackup instance = null;
    public static DatabaseBackup getInstance() {
        if (instance == null) {
            instance = new DatabaseBackup();
        }
        return instance;
    }
        
    
    public void startTasking() {
        WorldTimer tMan = WorldTimer.getInstance();
        Runnable r = new Runnable() {
            public void run() {
                if (time == 0) {
                    System.out.println("[!] 현 시간부로 30분 주기로 데이터베이스 자동 백업 프로그램이 작동.");
                    time++;
                } else if (time == -1) {
                    time = 0;
                } else {
                try {
                    
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) { //데이터베이스 저장 전, 데이터베이스 저장.
                        cserv.saveAllMerchant();
                        for (MapleCharacter hp : cserv.getPlayerStorage().getAllCharacters().values()) {
                            if (hp != null)
                                hp.saveToDB(false, false);
                        }
                    }
                    
                    MedalRanking.getInstance().save();
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");
                    String name = sdf.format(Calendar.getInstance().getTime());
                    Process p = null;
                    File toDel = null;
                    
                    p = Runtime.getRuntime().exec("cmd /C \""+ ServerConstants.windowsDumpPath + "mysqldump\" -u"+ ServerConstants.dbUser +" -p"+ ServerConstants.dbPassword +" arcstory > DBBackup\\GameServer\\"+name+".sql");
                    p = Runtime.getRuntime().exec("cmd /C \""+ ServerConstants.path + "\\NmsBackzip\" -9 DBBackup\\GameServer\\" + name + ".sql");
                    p.getInputStream().read();
                    
                    try {
                        p.waitFor();
                    } finally {
                        p.destroy();
                    }
                    
                    toDel = new File("DBBackup\\GameServer\\" + name + ".sql");
                    System.out.println("[알림] '" + name + "' 날짜의 게임서버 데이터베이스 자동 백업이 완료되었습니다.");
                    toDel.delete();
                    
                } catch (IOException e) {
                    System.out.println("[알림] 데이터베이스 자동 백업이 실패하였습니다.");
                    e.printStackTrace();
                } catch (Exception e) {
                    System.err.println("[오류] 데이터베이스 자동 백업을 실행 중 알 수 없는 오류가 발생했습니다.");
                    e.printStackTrace();
                    }
                }
            }
        };
        tMan.register(r, 1800000);
    }
}
