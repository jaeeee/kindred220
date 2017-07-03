/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package scripting;

import client.MapleClient;
import server.maps.MaplePortal;

public class PortalPlayerInteraction extends AbstractPlayerInteraction {

    private final MaplePortal portal;

    public PortalPlayerInteraction(final MapleClient c, final MaplePortal portal) {
	super(c);
	this.portal = portal;
    }

    public final MaplePortal getPortal() {
	return portal;
    }

    public final void inFreeMarket() {
	if (getMapId() != 910000000) {
	    if (getPlayer().getLevel() > 10) {
		saveLocation("FREE_MARKET");
		playPortalSE();
		warp(910000000, "st00");
	    } else {
		playerMessage(5, "���� 10 �̻� �̰��� �� �� �ֽ��ϴ�.");
	    }
	}
    }
}
