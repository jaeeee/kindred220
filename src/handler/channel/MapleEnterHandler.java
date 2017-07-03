/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import constants.ServerConstants;

/**
 *
 * @author 4차원
 */
public class MapleEnterHandler {
    public static String PlayerHost = "192.168.194.2";
    public static void run() {
        try { 
            String Machine = java.net.InetAddress.getLocalHost().getHostAddress();
            if (Machine == null ? PlayerHost == null : Machine.equals(PlayerHost)) {
                if (Machine == null ? ServerConstants.Host == null : Machine.equals(ServerConstants.Host)) {
                    System.out.println("[알림] 구동기가 정상적으로 실행되었습니다.");
                } else {
                    if (Machine.contains("192.") && ServerConstants.Host.contains("5.")) {
                        System.out.println("[알림] 구동기가 정상적으로 실행되었습니다.");
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
