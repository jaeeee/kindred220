/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
