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
import launch.ChannelServer;

/**
 *
 * @author �������̸�
 */
public class WorldTimerRunner implements Runnable {
    
            
    @Override
    public void run() {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            for (MapleCharacter hp : cserv.getPlayerStorage().getAllCharacters().values()) {
                Run(hp);
            }
        }
    }
    
    public static void Run(MapleCharacter player) {
        
        
    }
    
}
