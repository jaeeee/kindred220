importPackage(java.lang);
var status = 0;
var map = 951000000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status <= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) status++;
    else status--;
    if (status == 0) {
		if (cm.getDateKey("boss") == null) {
            cm.setDateKey("boss", "0");
	}
        cm.sendSimple("#e<�ƽ��� : �ƽ����ع���> #n\r\n������ �ƽ��� ������ ��ȸ�ϰ� �ִ� ������ �ܴ���� �����Ͻðڽ��ϱ�?#b\r\n\r\n#L0#������ �ܴ��� �����Ѵ�.(�Ϸ�Ƚ������: 5ȸ)#l\r\n#L1#���� ���� óġ�Ѵ�. (����: 120�̻�)#l");
    } else if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayer().getParty() != null) {
				if (cm.isLeader()) {
					if (cm.getPlayer().getParty().getMembers().size() >= 1 && cm.getPartyLevel(40, 255)) {
		   if (Integer.parseInt(cm.getDateKey("boss")) < 5) {
		       cm.setDateKey("boss",(Integer.parseInt(cm.getDateKey("boss"))+1)+"");
							switch (selection) {
								case 0:
									map = 955000100;
									break;
							}
							if (cm.getPlayerCount(Integer.parseInt(map)) == 0 && cm.getPlayerCount(Integer.parseInt(map) + 100) == 0 && cm.getPlayerCount(Integer.parseInt(map) + 200) == 0) {
								map = Integer.parseInt(map);
								
								var em = cm.getEventManager("AswanOffSeason");
								var eim = em.readyInstance();
								for (var i = 0; i < 3; i++) {
									cm.prepareAswanMob(Integer.parseInt(map) + (i * 100), em);
								}
								eim.setProperty("Global_StartMap", map);
								eim.setProperty("Global_ExitMap", "262010000");
								eim.setProperty("Global_MinPerson", "1");
								eim.setProperty("Global_RewardMap", "262010000");
								eim.setProperty("CurrentStage", "1");
								eim.startEventTimer(1200000);
								eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
								cm.getDateKey("boss");
								cm.dispose();
								return true;
							} else {
								cm.sendOk("������ �̹� �ƽ��� �ع����� �������Դϴ�.");
								cm.dispose();
								return true;
							}
						} else {
							cm.sendOk("��Ƽ���� ���� ���������� Ƚ���� �ʰ��� ����� �ֽ��ϴ�.");
							cm.dispose();
							return;
						}
					} else {
						cm.sendOk("��Ƽ�� �� ������ ���� �ʴ� ��Ƽ���� �ֽ��ϴ�.\r\n����40 �̻� ����200 �̸��� ��Ƽ���� ������ �� �ֽ��ϴ�.");
						cm.dispose();
						return;
					}
				} else {
					cm.sendOk("�����Ͻ÷��� ������ ��Ƽ�÷��� ���Դϴ�. #b��Ƽ��#k�� ���� ������ �����Ͻ� �� �ֽ��ϴ�.");
					cm.dispose();
					return;
				}
			} else {
				cm.sendOk("��Ƽ�� �ξ�߸� �����Ͻ� �� �ֽ��ϴ�.");
				cm.dispose();
				return;
			}
		} else if (selection == 1) {
			cm.sendNext("������ ž �Ա��� �����帮�ڽ��ϴ�. ���� �� �������ּ���.");
		}
    } else if (status == 2) {
		cm.warp(262030000, 0);
		cm.dispose();
		return;
	}
}