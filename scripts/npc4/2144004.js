/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	ĳ���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2144004

	���ǽ� �̸� : �θ�

	���ǽð� �ִ� �� : ��׽ý� : ������ �� (100000003)

	���ǽ� ���� : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
	if (status == 0) {
		if (cm.getPlayer().getKeyValue("cross") == null) {
			var chat = "����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n";
			chat += "#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n";
			chat += "#L1##d������ ������ ��#l";
			cm.sendSimple(chat);
		} else if (cm.getPlayer().getKeyValue("cross") == "6") {
			cm.sendOk("#bũ�ν����� UI#k�� ���ؼ� #e[Chapter 1]#n ������ �޾� �ּ���.");
			cm.dispose();
		} else if (cm.getPlayer().getKeyValue("cross") == "12") {
			cm.sendOk("#bũ�ν����� UI#k�� ���ؼ� #e[Chapter 2]#n ������ �޾� �ּ���.");
			cm.dispose();
		} else if (cm.getPlayer().getKeyValue("cross") == "18") {
			cm.sendOk("#bũ�ν����� UI#k�� ���ؼ� #e[Chapter 3]#n ������ �޾� �ּ���.");
			cm.dispose();
		} else if (cm.getPlayer().getKeyValue("cross") == "24") {
			cm.sendOk("#bũ�ν����� UI#k�� ���ؼ� #e[Chapter 4]#n ������ �޾� �ּ���.");
			cm.dispose();
		} else if (cm.getPlayer().getKeyValue("cross") == "25") {
			cm.sendOk("���� ũ�ν����� ��� �Ͽ� ��� é�͸� �Ϸ����ּż� ���� ���� �帳�ϴ�.");
			cm.dispose();
		} else {
			var chat = "����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n";
			chat += "#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n#d";
			if (cm.getPlayer().getKeyValue("cross") == "1") {
				chat += "#L2#������ ��츦 óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "2") {
				chat += "#L3#������ ����� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "3") {
				chat += "#L4#������ ȣ������ŧ���� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "4") {
				chat += "#L5#������ ��Ʈ�� ���̸� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "5") {
				chat += "#L6#������ Ű�޶� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "7") {
				chat += "#L7#������ ������ ȣ�긦 óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "8") {
				chat += "#L8#������ ������ ������ óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "9") {
				chat += "#L9#������ ������ óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "10") {
				chat += "#L10#������ ������ óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "11") {
				chat += "#L11#������ ��Ÿ��ν� ŷ�� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "13") {
				chat += "#L12#������ Ÿ�̸Ӹ� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "14") {
				chat += "#L13#������ ��ġ�� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "15") {
				chat += "#L14#������ �䱫���縦 óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "16") {
				chat += "#L15#������ �䱫 ���׸� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "17") {
				chat += "#L16#������ ��Ǯ�������� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "19") {
				chat += "#L17#������ �Ǿƴ����� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "20") {
				chat += "#L18#������ �����ź�� óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "21") {
				chat += "#L19#������ ������ óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "22") {
				chat += "#L20#������ �������带 óġ ����#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "23") {
				chat += "#L21#������ ����ī�� óġ ����#l";
			}
			cm.sendSimple(chat); 
		}
	} else if (status == 1) {
		if (selection == 2) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 1 : ������ �ڰ�>\r\n#b#n#L" + 931050415 + "#[Plan 1 : ������ ��� óġ]");
		} else if (selection == 3) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 1 : ������ �ڰ�>\r\n#b#n#L" + 931050434 + "#[Plan 2 : ������ ����� óġ]");
		} else if (selection == 4) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 1 : ������ �ڰ�>\r\n#b#n#L" + 931050435 + "#[Plan 3 : ������ ȣ������ŧ�� óġ]");
		} else if (selection == 5) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 1 : ������ �ڰ�>\r\n#b#n#L" + 931050417 + "#[Plan 4 : ������ ��Ʈ�� ���� óġ]");
		} else if (selection == 6) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 1 : ������ �ڰ�>\r\n#b#n#L" + 931050424 + "#[Plan 5 : ������ Ű�޶� óġ]");
		} else if (selection == 7) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 2 : ������ ����>\r\n#b#n#L" + 931050419 + "#[Plan 1 : ������ ������ ȣ�� óġ]");
 		} else if (selection == 8) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 2 : ������ ����>\r\n#b#n#L" + 931050420 + "#[Plan 2 : ������ ������ ���� óġ]");			
		} else if (selection == 9) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 2 : ������ ����>\r\n#b#n#L" + 931050425 + "#[Plan 3 : ������ ���� óġ]");			
		} else if (selection == 10) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 2 : ������ ����>\r\n#b#n#L" + 931050426 + "#[Plan 4 : ������ �׸��� óġ]");
		} else if (selection == 11) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 2 : ������ ����>\r\n#b#n#L" + 931050422 + "#[Plan 5 : ��Ÿ��ν� ŷ óġ]");
		} else if (selection == 12) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 3 : ������ ������ ��>\r\n#b#n#L" + 931050413 + "#[Plan 1 : ������ Ÿ�̸� óġ]");			
		} else if (selection == 13) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 3 : ������ ������ ��>\r\n#b#n#L" + 931050428 + "#[Plan 2 : ������ ��ġ óġ]");			
		} else if (selection == 14) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 3 : ������ ������ ��>\r\n#b#n#L" + 931050436 + "#[Plan 3 : ������ �䱫���� óġ]");			
		} else if (selection == 15) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 3 : ������ ������ ��>\r\n#b#n#L" + 931050418 + "#[Plan 4 : ������ �䱫 ���� óġ]");			
		} else if (selection == 16) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 3 : ������ ������ ��>\r\n#b#n#L" + 931050427 + "#[Plan 5 : ������ ��Ǯ������ óġ]");			
		} else if (selection == 17) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 4 : ������ ����>#k\r\n#b#n#L" + 931050429 + "#[Plan 1 : ������ �Ǿƴ��� óġ]");
		} else if (selection == 18) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 4 : ������ ����>#k\r\n#b#n#L" + 931050430 + "#[Plan 2 : ������ �����ź óġ]");
		} else if (selection == 19) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 4 : ������ ����>#k\r\n#b#n#L" + 931050431 + "#[Plan 3 : ������ ���� óġ]");
		} else if (selection == 20) {
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 4 : ������ ����>#k\r\n#b#n#L" + 931050432 + "#[Plan 4 : ������ �������� óġ]");
		} else if (selection == 21) {	
			cm.sendSimple("����... �˼��ѵ� ���� ��� ���� �ֽðھ��?\r\n\r\n#e<Chapter 4 : ������ ����>#k\r\n#b#n#L" + 931050433 + "#[Plan 5 : ������ ����ī óġ]");
		} else {
			if (cm.getPlayer().getLevel() >= 100) {
				cm.sendNext("�ݰ����ϴ�. ���� #bũ�ν�����#k ��� �θ� �̶�� �մϴ�.");
			} else {
				cm.sendOk("#bũ�ν�����#k�� ���� 100 �̻���� ������ ���� �մϴ�.");
				cm.dispose();
			}
		}
	} else if (status == 2) {
		if (cm.getPlayer().getKeyValue("cross") == null) {
			cm.sendNextS("���� �̾��ѵ� #bũ�ν�����#k ��°� ����?",2);
		} else {
			if (cm.getPlayerCount(selection) > 0) {
				cm.sendOk("�˼�������, �̹� �ٸ� �в��� ���͸� óġ ���Դϴ�. ��� ��ٷ� �ֽðų� �ٸ� ä���� �̿��� �ֽø� �����ϰھ��.");
				cm.dispose();
				return;
			}
			cm.timeMoveMap(100000000, selection, 1400);
			cm.killAllMob();
			cm.resetMap(selection);
			switch(selection) {
				case 931050415:
					cm.spawnMob(9300477,347,275);
				break;
				case 931050434:
					cm.spawnMob(9300878,-25,315);
				break;
				case 931050435:
			 		cm.spawnMob(9300879,-71,167);
				break;
				case 931050417:
					cm.spawnMob(9801015,-83,167);
				break;
				case 931050424:
					cm.spawnMob(9300510,-422,-405);
				break;
				case 931050419:
					cm.spawnMob(9300479,1812,332);
				break;
				case 931050420:
					cm.spawnMob(9300480,152,422);
				break;
				case 931050425:
					cm.spawnMob(9300511,-105,452);
				break;
				case 931050426:
					cm.spawnMob(9300512,-45,452);
				break;
				case 931050422:
					cm.spawnMob(9300482,584,422);
				break;
				case 931050413:
					cm.spawnMob(9300475,89,972);
				break;
				case 931050428:
					cm.spawnMob(9300514,1419,94);
				break;
				case 931050436:
					cm.spawnMob(9300880,450,543);
				break;
				case 931050418:
					cm.spawnMob(9300478,571,171);
				break;
				case 931050427:
					cm.spawnMob(9300513,-276,-386);
				break;
				case 931050429:
					cm.spawnMob(9300515,586,168);
				break;
				case 931050430:
					cm.spawnMob(9300516,-163,2481);
				break;
				case 931050431:
					cm.spawnMob(9300517,-82,-570);
				break;
				case 931050432:
					cm.spawnMob(9300518,137,181);
				break;
				case 931050433:
					cm.spawnMob(9300519,-121,181);
				break;
			
			}
			cm.sendOk("�ε�, ������ ���� �� �ֽñ� �ٶ��ϴ�.");
			cm.dispose();
		}
	} else if (status == 3) {
		cm.sendNext("#bũ�ν�����#k�� �� ���� ���� �� �ٸ� �������� �߻��ϴ� ���͵��� óġ�ϴ� ��п�� ���� �Դϴ�.");
	} else if (status == 4) {
		cm.sendNextS("�׷�����.. �׷� ���ܿ��� �����Դ� ���� �빫�� �ִ°���?",2);
	} else if (status == 5) {
		cm.sendNext("�׷��� ������ �� �������� ������� �����Ҽ� ���� ������ ������ ���͵��� ����� �����߽��ϴ�.");
	} else if (status == 6) {
		cm.sendNext("���� ���� ���ش� �������� ���������� �ư�, ����� �ο���ִ� ������� ���������� �ɰ��մϴ�.");
	} else if (status == 7) {
		cm.sendNext("�׷��� ����� #b" + cm.getName() + "#k�� ���� ���� ��� �� ���͵��� óġ�� ��Ź�帱���� �̴ϴ�.");
	} else if (status == 8) {
		cm.sendNextS("(����.. ���� óġ���̾� ������ ��������..)\r\n�׷� ����鵵 óġ ���ϴ� ���͵��� ���� ���� óġ�Ҽ� ������?",2);
	} else if (status == 9) {
		cm.sendNext("#b" + cm.getName() + "#k���� �Ƿ��̶�� ����� �����ҰŶ�� �ϰ� �ֽ��ϴ�. �ű�� ����鵵 ������ �Ƴ��� �����ű���.");
	} else if (status == 10) {
		cm.sendNextS("����! ���� ���͵��� óġ �� ���ھ�!!",2);
	} else if (status == 11) {
		cm.sendNext("���� �����մϴ�.. �� ���� ���� ������ ã�ƿ� �ֽø� ���Ͱ� �ִ� �ٸ� �������� �����帮���� �ϰڽ��ϴ�.");
		cm.getPlayer().setKeyValue("cross","1");
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}
