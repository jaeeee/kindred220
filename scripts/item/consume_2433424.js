
/*

    ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

    ���ǽþ��̵� : ?
    
    ���ǽ� �̸� : ������ ���

    ���ǽð� �ִ� �� : ?

    ���ǽ� ���� : ť������ ��ȯ


*/
var status;
var select;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var text = "#b������ �̶�Ŭ ť�� ���� #r#c2431893#��#k�� ������ �ֽ��ϴ�. ���� ������ ������ #r10��#k, ��� ���ȭ �ֹ����� #r20��#k, ���� ����ɷ� �ֹ��� 80%�� #r30��#k�� ����Ͽ� ��ȯ�� �� �ֽ��ϴ�.\r\n\r\n";
                text += "#b#L0##i2049501# #z2049501##l\r\n";
		text += "#b#L1##i2049300# #z2049300##l\r\n";
		text += "#b#L2##i2049701# #z2049701##l";
            cm.sendSimple(text);
        } else if(status == 1) {
            if (selection == 0) {
                if (cm.haveItem(2431893, 10)) {
		    cm.sendYesNo("���� #b#i2049501# #z2049501##k�� �ٲٽðڽ��ϱ�?");
		    select = 0;
                } else {
                    cm.sendNext("�˼������� #b#z2431893##k�� ������� �����Ű� ���׿�.");
		    cm.dispose();
                }
            } else if (selection == 1) {
                if (cm.haveItem(2431893, 20)) {
		    cm.sendYesNo("���� #b#i2049300# #z2049300##k�� �ٲٽðڽ��ϱ�?");
		    select = 1;
		} else {
                    cm.sendNext("�˼������� #b#z2431893##k�� ������� �����Ű� ���׿�.");
		    cm.dispose();
		}
	    } else if (selection == 2) {
                if (cm.haveItem(2431893, 30)) {
		    cm.sendYesNo("���� #b#i2049701# #z20497010##k�� �ٲٽðڽ��ϱ�?");
		    select = 2;
		} else {
                    cm.sendNext("�˼������� #b#z2431893##k�� ������� �����Ű� ���׿�.");
		    cm.dispose();
		}        
            } else {
                cm.dispose();
            }
	} else if (status == 2) {
            if (select == 0) {
                if (cm.canHold(2049501)) {
                    cm.gainItem(2431893, -10);
                    cm.gainItem(2049501, 1);
		    cm.sendNext("��ȯ�� �Ϸ�Ǿ����ϴ�.");
                } else {
                    cm.sendNext("�˼������� �κ��丮 ������ ������� ������ �� ���׿�. #b�Һ�#k���� �κ��丮 ������ ����ּ���.");
                }
                cm.dispose();
            } else if (select == 1) {
		if (cm.canHold(2049300)) {
                    cm.gainItem(2431893, -20);
                    cm.gainItem(2049300, 1);
                } else {
                    cm.sendNext("�˼������� �κ��丮 ������ ������� ������ �� ���׿�. #b�Һ�#k���� �κ��丮 ������ ����ּ���.");
                }
                cm.dispose();
	    } else if (select == 2) {
		if (cm.canHold(2049701)) {
                    cm.gainItem(2431893, -30);
                    cm.gainItem(2049701, 1);
                } else {
                    cm.sendNext("�˼������� �κ��丮 ������ ������� ������ �� ���׿�. #b�Һ�#k���� �κ��丮 ������ ����ּ���.");
                }
                cm.dispose();        
            } else {
                cm.dispose();
            }
        } else { 
            cm.dispose();
        }
    }
}