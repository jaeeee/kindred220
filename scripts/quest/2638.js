/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ������ ��

	���ǽ� ���� : 2����������Ʈ


*/

importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else if (mode == 0 && status < 3)
            status--;
	else if (mode == 0 && status == 3) {
	    qm.sendOk("������ ������ ��������� �̾߱��� ������. ���� ã�� �� ������ �����ΰ���?");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("���� �����ϱ� ���ؼ��� �� ���� ������ �ʿ��ؿ�. ����� �׸��� �ɷ��� �������, ���迡 ����ؾ߸� ����. �������ƿ�. ����̶�� ����� ������ �״ϱ��.");
        } else if (status == 1) {
            qm.askAcceptDecline("���� ���� ������ ���� ������ ���̵�� �ο��, �׵�κ��� ���� ������ ����������. �̰��� ����� ������ ����� ���� �÷�. �����ϸ� �ٷ� ��������.");        
        } else if (status == 2) {
	    qm.forceStartQuest();
	    qm.warp(910350300,0);
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("���� ����� ������ �ٶ󺸴� ���� �ƴ϶�, Ÿ���� ��ų �ɷ��� ���� �̵����� ����ڸ��� ��� �� �ִ� ����.");
        } else if (status == 1) {
	    qm.sendNextPrev("�츮�� Ȧ�� �ο�� �ڵ�������, �ڽŸ��� ���ؼ� �ο����� �� �ſ�. �װ��� �ܼ��� ������ ��... ������ �ٶ���� �ϴ°� ���� �ڿ��� ����.");
        } else if (status == 2) {
	    qm.sendNextPrev("���� �ڵ��� ���� �ο� �� �ִ°��� �����ϴ� �� �̹� ������ �����̾���, ����� �׿� �Ǹ��� ����߾��.");
        } else if (status == 3) {
	    qm.sendNextPrev("...���� ���� ������ ���׿�. �ƹ����� ������ ��... ���Ϳ� �ѷ� �ο� ��¦�� ���ϴ� �� �����ּ�����. �׸��� ���� ��� �ּ̾��.");
        } else if (status == 4) {            
	    qm.sendNext("�� ���� �׷��� ��ó�� ��ŵ� ������ ������ ���� �ο�� �ٷ���...");
	    qm.forceCompleteQuest();
	    qm.gainItem(4031013, -30);
            qm.getPlayer().changeJob(431);
	    qm.hasSkill(4311003);
	    qm.dispose();
        }
    }
}