


/*

	���� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ���̽��� ��


	���ǽ� ���� : ��б���/���ʹ� ����


*/


var status = -1;
importPackage(Packages.client);
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue() && cm.getQuestStatus(3196) < 2) {
            cm.sendYesNo("��Ÿÿ�� ���� ������ ���ڳ�? ��Ÿÿ�� ����ä�� ���Ǹ� �� ���߸� ��� ������ �̿��� �� �ִٳ�.");
        } else if (cm.getProfession(1) == MapleProfessionType.MINING.getValue() && cm.getQuestStatus(3198) < 2) {
            cm.sendYesNo("����� �������� ���ڳ�? ����� ä�� ���Ǹ� �� ���߸� ��� ������ �̿��� �� �ִٳ�.");
        } else if (cm.getProfession(1) == MapleProfessionType.NONE.getValue()) {
            cm.sendOk("�ڳ�.. ���� ��������� ����� ���� �� ������? �̰��� ��������� ����߸� �� �� �ִٳ�.");
            cm.dispose();
            return;
        } else if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue() && cm.getQuestStatus(3196) == 2) {
            cm.sendSimple("���� ���� �ͳ�? (���ѽð� 10��, �Ϸ� ������ ���� ����)#b\r\n#b#L0##m910001003##l\r\n#L1##m910001004##l\r\n#L2##m910001007##l\r\n#L3##m910001009##l\r\n");
        } else if (cm.getProfession(1) == MapleProfessionType.MINING.getValue() && cm.getQuestStatus(3198) == 2) {
            cm.sendSimple("���� ���� �ͳ�? (���ѽð� 10��, �Ϸ� ������ ���� ����)#b\r\n#b#L0##m910001005##l\r\n#L1##m910001006##l\r\n#L2##m910001008##l\r\n#L3##m910001010##l\r\n");
        }
    } else if (status == 1) {
        if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue() && cm.getQuestStatus(3195) >= 0 && cm.getQuestStatus(3196) < 2) {
            if (cm.getQuestStatus(3195) >= 1) {
                cm.warp(910001001);
                cm.dispose();
            } else {
                cm.sendOk("���� ��Ÿÿ�� ����ä�� ���Ǹ� ���� ���� �� ����. ���Ǹ� ���� �� �ٽ� ã�ƿ��Գ�.");
                cm.dispose();
            }
        } else if (cm.getProfession(1) == MapleProfessionType.MINING.getValue() && cm.getQuestStatus(3197) >= 0 && cm.getQuestStatus(3198) < 2) {
            if (cm.getQuestStatus(3197) >= 1) {
                cm.warp(910001002);
                cm.dispose();
            } else {
                cm.sendOk("���� ����� ä�� ���Ǹ� ���� ���� �� ����. ���Ǹ� ���� �� �ٽ� ã�ƿ��Գ�.");
                cm.dispose();
            }
        } else if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue() && cm.getQuestStatus(3196) == 2) {
            if (selection == 0) {
                if (cm.haveItem(4001482, 1)) {
                    cm.gainItem(4001482, -1);
                    cm.timeMoveMap(910001000, 910001003, 600);
                } else {
                    cm.sendOk("�ڳ�.. #b#t4001482##k�� �� ������ �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.");
                    cm.dispose();
                    return;
                }
            } else if (selection == 1) {
                if (cm.haveItem(4001483, 1)) {
                    cm.gainItem(4001483, -1);
                    cm.timeMoveMap(910001000, 910001004, 600);
                } else {
                    cm.sendOk("�ڳ�.. #b#t4001483##k�� �� ������ �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.");
                    cm.dispose();
                    return;
                }
            } else if (selection == 2) {
                if (cm.haveItem(4001570, 1)) {
                    cm.gainItem(4001570, -1);
                    cm.timeMoveMap(910001000, 910001007, 600);
                } else {
                    cm.sendOk("�ڳ�.. #b#t4001570##k�� �� ������ �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.");
                    cm.dispose();
                    return;
                }
            } else if (selection == 3) {
                if (cm.haveItem(4001572, 1)) {
                    cm.gainItem(4001572, -1);
                    cm.timeMoveMap(910001000, 910001009, 600);
                } else {
                    cm.sendOk("�ڳ�.. #b#t4001572##k�� �� ������ �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.");
                    cm.dispose();
                    return;
                }
            }
            
        } else if (cm.getProfession(1) == MapleProfessionType.MINING.getValue() && cm.getQuestStatus(3198) == 2) {
            
            if (selection == 0) {
                if (cm.haveItem(4001480, 1)) {
                    cm.gainItem(4001480, -1);
                    cm.timeMoveMap(910001000, 910001005, 600);
                } else {
                    cm.sendOk("�ڳ�.. #b#t4001480##k�� �� ������ �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.");
                    cm.dispose();
                    return;
                }
            } else if (selection == 1) {
                if (cm.haveItem(4001481, 1)) {
                    cm.gainItem(4001481, -1);
                    cm.timeMoveMap(910001000, 910001006, 600);
                } else {
                    cm.sendOk("�ڳ�.. #b#t4001481##k�� �� ������ �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.");
                    cm.dispose();
                    return;
                }
            } else if (selection == 2) {
                if (cm.haveItem(4001569, 1)) {
                    cm.gainItem(4001569, -1);
                    cm.timeMoveMap(910001000, 910001008, 600);
                } else {
                    cm.sendOk("�ڳ�.. #b#t4001569##k�� �� ������ �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.");
                    cm.dispose();
                    return;
                }
            } else if (selection == 3) {
                if (cm.haveItem(4001571, 1)) {
                    cm.gainItem(4001571, -1);
                    cm.timeMoveMap(910001000, 910001010, 600);
                } else {
                    cm.sendOk("�ڳ�.. #b#t4001571##k�� �� ������ �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.");
                    cm.dispose();
                    return;
                }
            }
        }
    }
}


