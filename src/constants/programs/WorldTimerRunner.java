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
import launch.ChannelServer;

/**
 *
 * @author 에반테이르
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
