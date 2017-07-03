/*

                     ���ڿ� �� ���� ���� ����ȭ
                     ������ : ���� (qor6101@naver.com)
                     �� ��ũ��Ʈ�� õ��õ���丮 �������� �� �̴ϴ�.




*/

importPackage(Packages.community);

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) 
	status++;
    else 
	status--;
    if (status == 0) {
	if ((cm.getChannelNumber() == 6) && cm.getPlayer().getMapId() == 211070000) {
	var chat = "#e<�� ���� ������>#n\r\n\r\n������ ��翩. Ÿ���� ���ڿտ��� �¼� �غ� ��ġ�̽��ϱ�?\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ּ���.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ּ���..#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b���������� ���� ������ �ּ���.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != PureExpeditionType.VONLEON) {
	    chat += "\r\n#b�� ���� �����밡 �´��� �ٽ� �ѹ� Ȯ�� ���ּ���.#k";
	    cm.sendNext(chat);
     	  } else if (cm.getPlayer().getMapId() == 211070000) {
	    chat += "\r\n#L0##b�� ���� ������ ������ ��û�Ѵ�.#k";
	    cm.sendSimple(chat);
	}
    } else if (cm.getPlayer().getMapId() == 211070100) {
            cm.sendSimple("�����븦 ��ġ�� �� ������ �����ðڽ��ϱ�?#l\r\n\r\n#L1##b�����븦 ��ġ�� ������ �����ڽ��ϴ�.");
	} else {
	    cm.sendOk("�� ä�ο����� #e<�� ���� ������>#n�� ������ �� �����ϴ�. �� ���� ������� 6ä�� ������ ������ �����մϴ�.");
	    cm.dispose();
	}
   } else if (status == 1) {
       if (selection == 0) {
	if (cm.getPlayerCount(211070100) == 0 && cm.getPlayerCount(211070101) == 0 && cm.getPlayerCount(211070110) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "���� ������ ������ �����ϼ̽��ϴ�. ������ ���� �ð��� ����Ǳ� ���� �ʿ� ������ �ּ���.."); 
            cm.allExpeditionWarp(211070100);
            cm.allExpSetTimeValueCurrent("VonLeon_BattleStartTime");
            cm.closeMapDoor(211070000, 3600);
	    cm.removeNpc(cm.getMapId(),2161000);
   	    cm.killAllMob();
	    cm.resetMap(211070100);
	    cm.resetMap(211070101);
            cm.scheduleTimeMoveMap(211070100,211070100, 3600, true);
            cm.scheduleTimeMoveMap(211070100,211070101, 3600, true);
            cm.scheduleTimeMoveMap(211070100,211070110, 3600, true);
            cm.scheduleBossRaidMap(3600);
            cm.setLastBossMap(211070100);
            cm.getMap().spawnNpc(2161000, new java.awt.Point(0, -181));
            cm.dispose();
	} else {
	    cm.sendNext("�̹� �ٸ� �����밡 ������ �� ����Ʈ Ŭ��� �����ϰ� �ֽ��ϴ�.");
	    cm.dispose();
	}
       } else if (selection == 1) {
            if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
                cm.warp(211060801);
                cm.getParty().getExpedition().addDeadChar(cm.getPlayer().getId());
                cm.dispose();
            } else {
                cm.allExpeditionWarp(211060801);
	    	cm.removeNpc(cm.getMapId(),2161000);
   	    	cm.killAllMob();
                cm.getParty().getExpedition().setBossKilled(true);
                cm.mapMessage(5, "���������� ������ �����ϰų� �Ϸ��ϰ� ������ �����Ͽ�. ��� ��Ƽ���� ���ܿ��� ���� �Ͽ����ϴ�.");
	        cm.resetMap(211070100);
	        cm.resetMap(211070101);
                cm.dispose();
			}
            } else {
                cm.dispose();
   		 }
	}
}