/*
 * SpiritProject
 * 팬더 spirit_m@nate.com
 * 이창용 dlckdyd93@nate.com
 * 우비 wellcome__v@nate.com
 * 동민 agneshyo-@nate.com
 * 고영익 rhduddlr6996@nate.com
 * 다루 dev_pay@nate.com
 * 아이유 iureal@nate.com
 * 박종원 dev_app1e@nate.com
 * 이관호 le554400@nate.com
 * 최주원 sch2307@nate.com
 * 이시혁 star_r2@nate.com
 */

package tools;

import client.MapleCharacter;
import constants.programs.ControlUnit;
import java.io.*;
import java.util.Properties;
import launch.ChannelServer;
import launch.LoginServer;
import packet.creators.UIPacket;
import server.items.ItemInformation;
import java.util.Scanner;
import launch.Start;
import packet.creators.MainPacketCreator;
import packet.opcode.RecvPacketOpcode;
import packet.opcode.SendPacketOpcode;
import scripting.PortalScriptManager;
import scripting.ReactorScriptManager;
import server.life.MapleMonsterProvider;
import server.shops.MapleShopFactory;
import tools.StringUtil;

/**
 *
 * @author 5차원
 */
public class Commands {
    private static String Command;
    private static String[] cmds;
    public static String packet1;
    private static String[] packetcmds;
    private static int a;
    public static void main(String args[]) {
          //System.out.println("[알림] \"도움말\"로 명령어를 보실 수 있습니다.");
          while(LoginServer.Running) {
                Scanner scan = new Scanner(System.in);
                Command = scan.nextLine();
                cmds = Command.split(" ");
                switch (cmds[0]) {
                    case "관리기" :
                        ControlUnit.main(args);
                        break;
                    default :
                         System.out.println("[알림] "+cmds[0]+" 는(은) 올바른 명령어가 아닙니다.");
                         System.out.println("[알림] 명령어들을 보고싶으시다면 '도움말'을 입력해주세요.");
                         break;
                }
          }
    }
}