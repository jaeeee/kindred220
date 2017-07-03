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
	if ((cm.getChannelNumber() == 3 || cm.getChannelNumber() == 4)) {
	    cm.sendNext("���� ��� ä�ο����� #b�븻 ��� ȥ���� ������#k ������ �����մϴ�. �ٸ� ��忡 �����ϰ� �����ø� �˸��� ä�η� �̵��� �ּ���.");
	} else if ((cm.getChannelNumber() == 7 || cm.getChannelNumber() == 8)) {
	    cm.sendNext("���� ��� ä�ο����� #bī���� ��� ȥ���� ������#k ������ �����մϴ�. �ٸ� ��忡 �����ϰ� �����ø� �˸��� ä�η� �̵��� �ּ���.");
	} else {
	    cm.sendOk("�� ä�ο����� #e<ȥ���� ������>#n�� ������ �� �����ϴ�. �븻 ȥ������ 3��, 4�� ä��, ī���� ȥ������ 7��, 8�� ä���� �̿��� �ּ���.");
	    cm.dispose();
	}
    } else if (status == 1) {
        if ((cm.getChannelNumber() == 3 || cm.getChannelNumber() == 4)) {
	var chat = "#e<�븻 ��� ȥ���� ������>#n\r\n\r\n������ ������ ����, ����� ���� ȥ������ ����ĥ �غ� �Ǿ��°�?\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ֽñ� �ٶ��ϴ�.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ֽñ� �ٶ��ϴ�.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b���������� ���� ������ �ֽñ� �ٶ��ϴ�.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != DbgExpeditionType.NORMAL_HORNTAIL) {
	    chat += "\r\n#b��� ȥ���� �����밡 �´��� �ٽ� �ѹ� Ȯ�� �� �ּ���.#k";
	    cm.sendNext(chat);
 	} else {
	    chat += "\r\n#L0##bȥ���� ������ ������ ��û�Ѵ�.#k";
	    cm.sendSimple(chat);
	}
	} else {
	var chat = "#e<ī���� ��� ȥ���� ������>#n\r\n\r\n������ ������ ����, ����� ���� ȥ������ ����ĥ �غ� �Ǿ��°�?\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ֽñ� �ٶ��ϴ�.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b�����븦 ������ ��, ���������� ���� ������ �ֽñ� �ٶ��ϴ�.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b���������� ���� ������ �ֽñ� �ٶ��ϴ�.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != DbgExpeditionType.CHAOS_HORNTAIL) {
	    chat += "\r\n#bī���� ȥ���� �����밡 �´��� �ٽ� �ѹ� Ȯ�� �� �ּ���.#k";
	    cm.sendNext(chat);
 	} else {
	    chat += "\r\n#L0##bȥ���� ������ ������ ��û�Ѵ�.#k";
	    cm.sendSimple(chat);
	}
}
   } else if (status == 2) {
       if (selection == 0) {
	if ((cm.getChannelNumber() == 3 || cm.getChannelNumber() == 4) && cm.getPlayerCount(240060000) == 0 && cm.getPlayerCount(240060100) == 0 && cm.getPlayerCount(240060200) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "���� ������ ������ �����ϼ̽��ϴ�. ������ ���� �ð��� ����Ǳ� ���� �ʿ� ������ �ּ���..");
            cm.allExpeditionWarp(240060000);
            cm.closeMapDoor(240050400, 4500);
    	    cm.killAllMob();
	    cm.resetMap(240060000);
	    cm.resetMap(240060100);
  	    cm.resetMap(240060200);
            cm.scheduleTimeMoveMap(240050500, 240060000, 4500, true);
            cm.scheduleTimeMoveMap(240050500, 240060100, 4500, true);
            cm.scheduleTimeMoveMap(240050500, 240060200, 4500, true);
            cm.scheduleBossRaidMap(4500);
            cm.allExpSetTimeValueCurrent("Horntail_BattleStartTime");
            cm.setLastBossMap(240060000);
     	    cm.dispose();
	} else if ((cm.getChannelNumber() == 7 || cm.getChannelNumber() == 8) && cm.getPlayerCount(240060001) == 0 && cm.getPlayerCount(240060101) == 0 && cm.getPlayerCount(240060201) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "���� ������ ������ �����ϼ̽��ϴ�. ������ ���� �ð��� ����Ǳ� ���� �ʿ� ������ �ּ���..");
            cm.allExpeditionWarp(240060001);
            cm.closeMapDoor(240050400, 9000);
    	    cm.killAllMob();
	    cm.resetMap(240060001);
	    cm.resetMap(240060101);
  	    cm.resetMap(240060201);
            cm.scheduleTimeMoveMap(240050500, 240060001, 9000, true);
            cm.scheduleTimeMoveMap(240050500, 240060101, 9000, true);
            cm.scheduleTimeMoveMap(240050500, 240060201, 9000, true);
            cm.scheduleBossRaidMap(9000);
            cm.allExpSetTimeValueCurrent("ChaosHorntail_BattleStartTime");
            cm.setLastBossMap(240060001);
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