/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package constants.programs;

import java.util.concurrent.ScheduledFuture;
import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import packet.creators.UIPacket;
import tools.CPUSampler;
import tools.DeadLockDetector;

/**
 *
 * @author Asteria
 */
public class Clean {
    private static transient ScheduledFuture<?> start;
    private static int timeo = 0;
    public static void main(String[] args) {
         if (start == null) {
            start = tools.Timer.WorldTimer.getInstance().register(new Runnable() {
                public void run() {
                    if (timeo == 0) {
                        CPUSampler.getInstance().start();
                        System.out.println("CPUSampler Thread Start!!");
                        DeadLockDetector clean = new DeadLockDetector(10,(byte)1);
                        clean.run();
                        timeo++;
                    } else if (timeo == -1) {
                        timeo = 0;
                    } else if (timeo != 0) {
                        CPUSampler.getInstance().start();
                        System.out.println("CPUSampler Thread Start!!");
                        DeadLockDetector clean = new DeadLockDetector(10,(byte)1);
                        clean.run();
                        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(1, "서버최적화가 진행중입니다. 다소 렉이 유발될수도 있으니 양해 부탁드립니다."));
                        timeo++;
                    }
                }
            }, 3600000 * 3);
        }
    }
}
