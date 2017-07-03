/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
 * @author ���ֿ�(sch2307@nate.com)
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
                    System.out.println("[!] �� �ð��η� 30�� �ֱ�� �����ͺ��̽� �ڵ� ��� ���α׷��� �۵�.");
                    time++;
                } else if (time == -1) {
                    time = 0;
                } else {
                try {
                    
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) { //�����ͺ��̽� ���� ��, �����ͺ��̽� ����.
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
                    System.out.println("[�˸�] '" + name + "' ��¥�� ���Ӽ��� �����ͺ��̽� �ڵ� ����� �Ϸ�Ǿ����ϴ�.");
                    toDel.delete();
                    
                } catch (IOException e) {
                    System.out.println("[�˸�] �����ͺ��̽� �ڵ� ����� �����Ͽ����ϴ�.");
                    e.printStackTrace();
                } catch (Exception e) {
                    System.err.println("[����] �����ͺ��̽� �ڵ� ����� ���� �� �� �� ���� ������ �߻��߽��ϴ�.");
                    e.printStackTrace();
                    }
                }
            }
        };
        tMan.register(r, 1800000);
    }
}
