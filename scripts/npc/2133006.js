importPackage (Packages.server.quest);

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
	cm.sendOk("������ ���̱� ������ ������ �������� �����մϴ�.");
	cm.dispose();            
	return;        
	}        
	if (mode == 1)            
	status++;        
	else           
	status--;    

	if (status == 0) {
		if(cm.getQuestStatus(31229) != 0) {
	cm.sendYesNo("�� ���� ���ǳ׾��� ����ó�Դϴ�.\r\n������� ���� �ڿ��Դ� �ſ� ������ ���Դϴ�.\r\n�׷��� �����Ͻðڽ��ϱ�?");
		} else {
	cm.getPlayer().dropMessage(5, "������ �� �� ����.");
		}
	} else if (status == 1) {
	cm.dispose();
	cm.warp(300030310, 0);
	cm.killAllMob();
	cm.spawnMob(5250007, 58, 150);
	}

}
}