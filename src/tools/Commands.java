/*
 * SpiritProject
 * �Ҵ� spirit_m@nate.com
 * ��â�� dlckdyd93@nate.com
 * ��� wellcome__v@nate.com
 * ���� agneshyo-@nate.com
 * ���� rhduddlr6996@nate.com
 * �ٷ� dev_pay@nate.com
 * ������ iureal@nate.com
 * ������ dev_app1e@nate.com
 * �̰�ȣ le554400@nate.com
 * ���ֿ� sch2307@nate.com
 * �̽��� star_r2@nate.com
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
 * @author 5����
 */
public class Commands {
    private static String Command;
    private static String[] cmds;
    public static String packet1;
    private static String[] packetcmds;
    private static int a;
    public static void main(String args[]) {
          //System.out.println("[�˸�] \"����\"�� ��ɾ ���� �� �ֽ��ϴ�.");
          while(LoginServer.Running) {
                Scanner scan = new Scanner(System.in);
                Command = scan.nextLine();
                cmds = Command.split(" ");
                switch (cmds[0]) {
                    case "������" :
                        ControlUnit.main(args);
                        break;
                    default :
                         System.out.println("[�˸�] "+cmds[0]+" ��(��) �ùٸ� ��ɾ �ƴմϴ�.");
                         System.out.println("[�˸�] ��ɾ���� ��������ôٸ� '����'�� �Է����ּ���.");
                         break;
                }
          }
    }
}