/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package constants.programs;

import java.io.IOException;
import java.util.concurrent.ScheduledFuture;
import launch.ChannelServer;
import launch.Start;
import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import client.MapleCharacter;

/**
 *
 * @author 김승현
 */
public class AutoReboot {
    private static transient ScheduledFuture<?> time;
    private static int timeo = 0;
    private static String path = "";
    
    public static void main(final String args[]) {
        if (time == null) {
            time = tools.Timer.WorldTimer.getInstance().register(new Runnable() {
                public void run() {
                    if (timeo == 0) {
//                        System.out.println("15분 주기로 과부화를 검사 합니다.");
                        //path = args[1];
                        timeo++;
                    } else if (timeo == -1) {
                        timeo = 0;
                    } else if (timeo != 0) {
                        if (Runtime.getRuntime().totalMemory() >= 40000000000L) {
                            WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(1, "자동 리붓합니다. 불편을 끼쳐드려 죄송합니다. 10초간 리붓이 진행됩니다.\r\n#e#r반드시 로그아웃해주세요."));
                            try {
                                Thread.sleep(10000L);
                            } catch (Exception ex) {
                                ex.printStackTrace();
                            }
                            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                                cserv.getPlayerStorage().disconnectAll();
                                cserv.saveAllMerchant();
                                        for (ChannelServer cs : ChannelServer.getAllInstances()) {
            for (MapleCharacter chr : cs.getPlayerStorage().getAllCharacters().values()) {
                chr.saveToDB(false,false);
            }
        }
                            }
                            runFile();
                            System.exit(1);
                        }
                        timeo++;
                    }
                }
            }, 15 * 60000);
        }
    }
    
    public static void runFile() {
        Runtime rt = Runtime.getRuntime(); 
        try{

        rt.exec(Start.path + "\\자동리붓기.exe");
        

        }catch(IOException e){

        }
    }
}
