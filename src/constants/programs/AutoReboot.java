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
 * @author �����
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
//                        System.out.println("15�� �ֱ�� ����ȭ�� �˻� �մϴ�.");
                        //path = args[1];
                        timeo++;
                    } else if (timeo == -1) {
                        timeo = 0;
                    } else if (timeo != 0) {
                        if (Runtime.getRuntime().totalMemory() >= 40000000000L) {
                            WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(1, "�ڵ� �����մϴ�. ������ ���ĵ�� �˼��մϴ�. 10�ʰ� ������ ����˴ϴ�.\r\n#e#r�ݵ�� �α׾ƿ����ּ���."));
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

        rt.exec(Start.path + "\\�ڵ����ױ�.exe");
        

        }catch(IOException e){

        }
    }
}
