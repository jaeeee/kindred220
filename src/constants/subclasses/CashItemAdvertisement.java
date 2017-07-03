/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package constants.subclasses;

import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import tools.Pair;
import tools.RandomStream.Randomizer;
import tools.Timer;
import tools.Timer.WorldTimer;
import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 */
public class CashItemAdvertisement {
    private static List<Pair<Integer, String>> advertisementMessages = new LinkedList<Pair<Integer, String>>();
    
    public static void addMessage(int itemid, String message) {
        advertisementMessages.add(new Pair(itemid, message));
    }
    
    public static void startTasking() {
        Runnable r = new Runnable() {
            @Override
            public void run() {
                Pair<Integer, String> randomed = advertisementMessages.get(Randomizer.nextInt(advertisementMessages.size()));
                WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, randomed.getRight(), randomed.getLeft()));
            }
        };
        WorldTimer.getInstance().register(r, 180000L);
    }
}
