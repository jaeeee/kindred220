/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.life;

public class BanishInfo {

    private int map;
    private String portal, msg;

    public BanishInfo(String msg, int map, String portal) {
	this.msg = msg;
	this.map = map;
	this.portal = portal;
    }

    public int getMap() {
	return map;
    }

    public String getPortal() {
	return portal;
    }

    public String getMsg() {
	return msg;
    }
}
