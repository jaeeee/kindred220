/*

                     ������ ���� ������ ����ȭ
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
	if ((cm.getChannelNumber() == 5)) {
	var chat = "#e<��ũ�� ������>#n\r\n\r\nħ���ڴ� ������ �������� ���� �� �մϴ�. �׸� � �������� ���ϸ� ������ ���� �Ͼ �̴ϴ�.\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ּ���.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ּ���..#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b���������� ���� ������ �ּ���.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != DbgExpeditionType.PINKBEAN) {
	    chat += "\r\n#b��ũ�� �����밡 �´��� �ٽ� �ѹ� Ȯ�� ���ּ���.#k";
	    cm.sendNext(chat);
 	} else {
	    chat += "\r\n#L0##b��ũ�� ������ ������ ��û�Ѵ�.#k";
	    cm.sendSimple(chat);
	}
	} else if ((cm.getChannelNumber() == 4)) {
	var chat = "#e<ī���� ��ũ�� ������>#n\r\n\r\nħ���ڴ� ������ �������� ���� �� �մϴ�. �׸� � �������� ���ϸ� ������ ���� �Ͼ �̴ϴ�.\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ּ���.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ּ���..#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b���������� ���� ������ �ּ���.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != DbgExpeditionType.CHAOS_PINKBEAN) {
	    chat += "\r\n#bī���� ��ũ�� �����밡 �´��� �ٽ� �ѹ� Ȯ�� ���ּ���.#k";
	    cm.sendNext(chat);
 	} else {
	    chat += "\r\n#L0##bī���� ��ũ�� ������ ������ ��û�Ѵ�.#k";
	    cm.sendSimple(chat);
	}
	} else {
	    cm.sendOk("�� ä�ο����� #e<��ũ�� ������>#n�� ������ �� �����ϴ�. �븻 ��ũ���� 5�� ä��, ī���� ��ũ���� 4�� ä�ο����� ������ �����մϴ�.");
	    cm.dispose();
	}
    } else if (status == 1) {
       if (selection == 0) {
	if ((cm.getChannelNumber() == 5) && cm.getPlayerCount(270050100) == 0 && cm.getPlayerCount(270050200) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "���� ������ ������ �����ϼ̽��ϴ�. ������ ���� �ð��� ����Ǳ� ���� �ʿ� ������ �ּ���..");
            cm.allExpeditionWarp(270050100);
            cm.closeMapDoor(270050000, 3600);
	    cm.removeNpc(cm.getMapId(),2141000);
    	    cm.killAllMob();
	    cm.resetMap(270050100);
	    cm.resetMap(270050200);
            cm.scheduleTimeMoveMap(270050200, 270050100, 3600, true);
            cm.scheduleBossRaidMap(3600);
            cm.allExpSetTimeValueCurrent("Pinkbean_BattleStartTime");
            cm.setLastBossMap(270050100);
            cm.getMap().spawnNpc(2141000, new java.awt.Point(-190, -42));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820019), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820020), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820021), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820022), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820023), new java.awt.Point(5,44));
     	    cm.dispose();
	} else if ((cm.getChannelNumber() == 4) && cm.getPlayerCount(270051100) == 0 && cm.getPlayerCount(270051200) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "���� ������ ������ �����ϼ̽��ϴ�. ������ ���� �ð��� ����Ǳ� ���� �ʿ� ������ �ּ���..");
            cm.allExpeditionWarp(270051100);
            cm.closeMapDoor(270050000, 3600);
	    cm.removeNpc(cm.getMapId(),2141000);
    	    cm.killAllMob();
	    cm.resetMap(270051100);
	    cm.resetMap(270051200);
            cm.scheduleTimeMoveMap(270051200, 270051100, 3600, true);
            cm.scheduleBossRaidMap(3600);
            cm.allExpSetTimeValueCurrent("ChaosPinkbean_BattleStartTime");
            cm.setLastBossMap(270051100);
            cm.getMap().spawnNpc(2141000, new java.awt.Point(-190, -42));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820019), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820020), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820021), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820022), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820023), new java.awt.Point(5,44));
     	    cm.dispose();
	} else {
	    cm.sendNext("�̹� �ٸ� �����밡 ������ �� ����Ʈ Ŭ��� �����ϰ� �ֽ��ϴ�.");
	    cm.dispose();
	}
	} else {
	    cm.dispose();
		}
	}
}