/*
	Description: 	Quest -  Strange Farm
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendOk("��? Ȥ�� �������� ������ �Ŵ�? ���ٰ� �ֱ� ������ �׷��� �������� �� ���µ�...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("��, ��. ������ ���� �̾߱�� �׸��ϰ� �� �迡 �ƺ��� �� �� �� �����ַ�. �ƹ����� �̻����� �������� ������Ű���� �� �� ȥ����� �� �� ����. �׷��� ������ ���� #r����#k���� ȥ���ٿ�.");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendOk("���ٴ� �������� #bū ���ֱ�1#k���� �ִܴ�. �׷��� �׸��� ���� #r20����#k�� ȥ���ָ� �ȴܴ�. ������. ���� ������ �̷��� �Ǵ���. �����Ͽ� ������ �ٵǴ±�.");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendOk("��. �������� ȥ���ְ� �ӱ���? �� �ߴ�. ����,������.\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2022621# Declicious Milk 30\r\n#i2022622#Declicious Juice 30\r\n#fUI/UIWindow.img/QuestIcon/8/0#980 exp");
    } else if (status == 1) {
	qm.gainExp(980);
	qm.gainItem(2022621, 30);
	qm.gainItem(2022622, 30);
	qm.sendOk("��, �׷� �ƺ��� ��� ���ϸ�.");
	qm.forceCompleteQuest();
	qm.dispose();
    }
}