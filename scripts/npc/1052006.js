


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1052006
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ����ö ��ǥ��

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
        var typed = false;
        var text = "�ȳ��ϼ���, ���� Ŀ�׽�Ƽ����ö�� ���Ϳ��, #b#p1052006##k��� �մϴ�. ���͵帱 ����� �����Ű���?\r\n\r\n";
        if (cm.getQuestStatus(2055) >= 1) {
            text+= "#b#L0#������B1 ����� ���� (1000�޼�)#l\r\n";
            typed = true;
        }
        if (cm.getQuestStatus(2056) >= 1) {
            text+= "#b#L1#������B2 ����� ���� (2000�޼�)#l\r\n";
            typed = true;
        }
        if (cm.getQuestStatus(2057) >= 1) {
            text+= "#b#L2#������B3 ����� ���� (3000�޼�)#l\r\n";
            typed = true;
        }
        if (typed) {
            cm.sendSimple(text);
        } else {
            cm.sendOk(text);
            cm.dispose();
        }
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            if (cm.getMeso() >= 1000 && cm.canHold(4031036)) {
                cm.gainMeso(-1000);
                cm.gainItem(4031036,1);
                cm.dispose();
            } else {
                cm.sendOk("#b1000 �޼�#k�� �и� ����� ���� ��Űǰ���? �ƴϸ� �κ��丮 ������ �����Ѱ� �ƴ��� Ȯ���� �ּ���.")
                cm.dispose();
            }
        } else if (select == 1) {
            if (cm.getMeso() >= 2000 && cm.canHold(4031037)) {
                cm.gainMeso(-2000);
                cm.gainItem(4031037,1);
                cm.dispose();
            } else {
                cm.sendOk("#b2000 �޼�#k�� �и� ����� ���� ��Űǰ���? �ƴϸ� �κ��丮 ������ �����Ѱ� �ƴ��� Ȯ���� �ּ���.")
                cm.dispose();
            }
        } else if (select == 2) {
            if (cm.getMeso() >= 3000 && cm.canHold(4031038)) {
                cm.gainMeso(-3000);
                cm.gainItem(4031038,1);
                cm.dispose();
            } else {
                cm.sendOk("#b3000 �޼�#k�� �и� ����� ���� ��Űǰ���? �ƴϸ� �κ��丮 ������ �����Ѱ� �ƴ��� Ȯ���� �ּ���.")
                cm.dispose();
            }
        }
    }
}


