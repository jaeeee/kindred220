/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ������ ��

	���ǽ� ���� : 1.5����������Ʈ


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
	    qm.sendOk("���� ������ �����ž�? �����϶�. �� �׷��� �ð��� ���� ����� �ƴϰŵ�.");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("�̵����� ����ϱ� ���ؼ��� 2���� ������ �������Ѿ� �ؿ�. ù°,����20�̻��̾���ϰ�, ��°, �ڰ��� ���� ���θ��� ������ �ִٰ� �������� ������ ���� #b����#k�� �����;� �ؿ�.");
        } else if (status == 1) {
            qm.sendNextPrev("������ �������� ���߰� ���شٴ� ������ ������ �����ؼ� ��Ÿ���� ����������. #b��ȭ���� ��ó, �����ǹ�#k���� ���� ����. ������ �濡 �ִ� #b�������� Ÿ��#k�ؼ� ����߸��� Ź�ϰ� ���� �ſ���.");
        } else if (status == 2) {
            qm.askAcceptDecline("#bŹ���� ������ ����Ŭ���ؼ� ��Ʈ���� ����#k�� ���� �� �ִ�ϴ�. ���� ��ſ��� ������ ������ �� �ڰ��� �ִٸ� ������. ���� ���� �� �ִ� ������ �ƴϹǷ� ����ϼž� �ؿ�. �ƽðھ��? �׷� �����ϸ� ����� ������ ������ ������.");
        } else if (status == 3) {
	    qm.forceStartQuest();
	    qm.warp(910350000, 0);
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
            qm.sendYesNo("�Ǹ��ϱ���. ������ ����� �����߳׿�. ���� �ٷ� �̵����� ������ ��ų�� ������ھ��? ����Ѵٸ� ����� ���� ���� ���� ��Ű��.");
        } else if (status == 1) {
	    qm.gainItem(4032616, -1);
            qm.forceCompleteQuest();
            qm.getPlayer().changeJob(430);
            qm.gainItem(1342000, 1);
	    qm.sendNext("�������� ����� #b���̵�#k����. �׻� �ںν��� ���� ��Ȱ�ϼ���.");
	    qm.dispose();
        }
    }
}