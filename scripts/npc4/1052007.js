


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1052007
	
	���ǽ� �̸� : ������

	���ǽð� �ִ� �� : 103020000

	���ǽ� ���� : ������


*/


var status = -1;
var select = 0;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        var text = "Ŀ�׽�Ƽ ����ö�� ��������.\r\n\r\n";
//        if (cm.getQuestStatus(2055) >= 1) {
//            text += "#e#L0##b3ȣ�������� - B1#l\r\n";
//        } else if (cm.getQuestStatus(2056) >= 1) {
//            text += "#e#L1##b3ȣ�������� - B2#l\r\n";
//        } else if (cm.getQuestStatus(2057) >= 1) {
//            text += "#e#L2##b3ȣ�������� - B3#l\r\n\r\n";
//        }
        text += "#n#L3##bĿ�׽������� ����ö Ÿ��#k#l\r\n";
        text += "#n#L4##bĿ�׽�Ƽ ����ö ����#k#l\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            if (cm.haveItem(4031036, 1)) {
                cm.gainItem(4031036, -1);
                cm.warp(103000900, 0);
                cm.dispose();
            } else {
                cm.sendOk("#b#v4031036##k �������� �ʿ��մϴ�.");
                cm.dispose();
            }
        } else if (select == 1) {
            if (cm.haveItem(4031037, 1)) {
                cm.gainItem(4031037, -1);
                cm.warp(103000903, 0);
                cm.dispose();
            } else {
                cm.sendOk("#b#v4031037##k �������� �ʿ��մϴ�.");
                cm.dispose();
            }
        } else if (select == 2) {
            if (cm.haveItem(4031038, 1)) {
                cm.gainItem(4031038, -1);
                cm.warp(103000906, 0);
                cm.dispose();
            } else {
                cm.sendOk("#b#v4031038##k �������� �ʿ��մϴ�.");
                cm.dispose();
            }
        } else if (select == 3) {
            cm.sendYesNo("#b#eĿ�׽����� ��#k#n���� ���� ������ ž���Ͻðڽ��ϱ�?");
        } else if (select == 4) {
            cm.sendYesNo("�ش� ������ ���Ͱ� ����� �� �־� �����մϴ�. ���� ���ðڽ��ϱ�?");
        }
    } else if (status == 2) {
        if (select == 3) {
            cm.timeMoveMap(103020020, 103020010, 14);
            cm.getPlayer().message(6, "���� ������ ���� Ŀ�׽�����, Ŀ�׽����� ���Դϴ�. ������ ���� �������Դϴ�.");
            cm.dispose();
        } else if (select == 4) {
            cm.warp(103020100, 0);
            cm.dispose();
        }
    }
}


