/*
    
    ���ǽ� �̸� : ������ ���

    ���ǽ� ���� : �� ť�� ����

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
            var text = "#b#t2431894# #c2431894#��#k�� ������ �ֽ��ϴ�. ��� ���ȭ �ֹ����� #r5��#k, ����Ʈ ������ ������ #r15��#k, ����� ����ų� ����ɷ� �ο� �ֹ����� #r30��#k�� ����Ͽ� ��ȯ�� �� �ֽ��ϴ�.";
                text += "\r\n\r\n#b#L0##i2049300# #z2049300##l";
                text += "\r\n#b#L1##i2049512# #z2049512##l";
                text += "\r\n#b#L2##i2048307# #z2048307##l";
            cm.sendSimple(text);
        } else if(status == 1) {
            if (selection == 0) {
                if (cm.haveItem(2431486, 5)) {
		    cm.sendYesNo("���� #b#i2049300# #t2049300##k �� �ٲٽðڽ��ϱ�?");
		    select = 0;
                } else {
                    cm.sendNext("�˼������� #i2431486# #b#z2431486##k �� ������� ������ �� ���׿�.");
		    cm.dispose();
                }
	    } else if (selection == 1) {
                if (cm.haveItem(2431486, 15)) {
		    cm.sendYesNo("���� #b#i2049512# #t2049512##k �� �ٲٽðڽ��ϱ�?");
		    select = 1;
		} else {
                    cm.sendNext("�˼������� #i2431486# #b#z2431486##k �� ������� ������ �� ���׿�.");
		    cm.dispose();
		}        
	    } else if (selection == 2) {
                if (cm.haveItem(2431486, 30)) {
		    cm.sendYesNo("���� #b#i2048307# #t2048307##k �� �ٲٽðڽ��ϱ�?");
		    select = 2;
		} else {
                    cm.sendNext("�˼������� #i2431486# #b#z2431486##k �� ������� ������ �� ���׿�.");
		    cm.dispose();
		}        
            } else {
                cm.dispose();
            }
	} else if (status == 2) {
            if (select == 0) {
                if (cm.canHold(2049300)) {
                    cm.gainItem(2431486, -5);
                    cm.gainItem(2049300, 1);
		    cm.sendOk("��ȯ�� �Ϸ�Ǿ����ϴ�.");
                } else {
                    cm.sendNext("�˼������� �κ��丮 ������ ������� ������ �� ���׿�. #b�Һ�#k���� �κ��丮 ������ ����ּ���.");
                }
                cm.dispose();
	    } else if (select == 1) {
		if (cm.canHold(2049512)) {
                    cm.gainItem(2431486, -15);
                    cm.gainItem(2049512, 1);
		    cm.sendOk("��ȯ�� �Ϸ�Ǿ����ϴ�.");
                } else {
                    cm.sendNext("�˼������� �κ��丮 ������ ������� ������ �� ���׿�. #b�Һ�#k���� �κ��丮 ������ ����ּ���.");
                }
                cm.dispose();     
	    } else if (select == 2) {
		if (cm.canHold(2048307)) {
                    cm.gainItem(2431486, -30);
                    cm.gainItem(2048307, 1);
		    cm.sendOk("��ȯ�� �Ϸ�Ǿ����ϴ�.");
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