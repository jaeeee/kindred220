/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package handler.channel;

import constants.ServerConstants;

/**
 *
 * @author 4����
 */
public class MapleEnterHandler {
    public static String PlayerHost = "192.168.194.2";
    public static void run() {
        try { 
            String Machine = java.net.InetAddress.getLocalHost().getHostAddress();
            if (Machine == null ? PlayerHost == null : Machine.equals(PlayerHost)) {
                if (Machine == null ? ServerConstants.Host == null : Machine.equals(ServerConstants.Host)) {
                    System.out.println("[�˸�] �����Ⱑ ���������� ����Ǿ����ϴ�.");
                } else {
                    if (Machine.contains("192.") && ServerConstants.Host.contains("5.")) {
                        System.out.println("[�˸�] �����Ⱑ ���������� ����Ǿ����ϴ�.");
                    } else {
                        System.exit(1);
                    }
                }
            } else {
                System.exit(1);
            }
        } catch (java.net.UnknownHostException error) {
            System.exit(1);
        }
    }
}
