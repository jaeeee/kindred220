importPackage(Packages.packet.creators);

var status = -1;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
	cm.dispose();
	} else {
	if (mode == 0) {
	cm.dispose();            
	return;        
	}        
	if (mode == 1)            
	status++;        
	else           
	status--;    

	if (status == 0) {
		if(cm.getQuestStatus(3870) != 2 && !cm.haveItem(4032603)) {
		cm.sendNext("�� ���� ���� ���� �����Դϴ�. ���ư� �ּ���.");
		} else {
		cm.sendOk("�� ���� ������ ���ѵ� ���Դϴ�. �ƹ��� ���� �� �����ϴ�. ���ư� �ּ���.");
		cm.dispose();
		}
	} else if (status == 1) {
		cm.sendNextPrevS("���� ��������̰� �������� ������ٰ� ������ϴ�. �� ��ã�ƾ� �� ������ �־��. ���� ���ּ���.", 2);
	} else if (status == 2) {
		cm.sendNextPrev("�� ���� �ʹ� ������ �����Դϴ�. �������� �� ����� ����� ���غ��̴±���. �׷� �ѹ��� �� ���Ƶ帱�״� �÷� ���ٰ� ��������. 5���� ������ ���ƿ��� ������ ���� ã���� ���ڽ��ϴ�,");
	} else if (status == 3) {
		cm.dispose();
		cm.timeMoveMap(252010300, 925120000, 300);
		cm.killAllMob();
		cm.spawnMob(9100024, -746, -225);
	}
	
}
}