/*
	Description: 	Quest -  Verifying the Farm Situation
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendOk("����? �� ������ ��! ���� ���� �� �� �Ǹ� �츮�� �� �԰� ��ھ�? ��? ��, �ٽ� ���� �ɾ �̹����� �� ������!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("�� �ֺ��̾� �׷��ٰ� �ĵ�, ���� �ʱ��� ���찡 ����ٸ� Ŭ���ε�. ���� �Ͽ� ��û���� ���ذ� �� �� �����ݾ�. �̸��̸� ������ ���ڸ� �����ؾ߰ھ�. �׷���?");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendOk("�׷��׷�, ���� �� �ƿ�. �׷� #b���� �߽���#k�� ���� #b�ƺ�#k���� ���� �� ������ ����� ��. ���ʵ� ������ ���찡 �þ��ٰ� �ϸ� �� �� ũ�� ������ �������� �ؾ� �� �� ������ ���̾�.");
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
	qm.sendOk("��? �� ���� ���̳�,����? �� ����� ��� ���ö��� ��� �� �� �ƴ��װ� �ƺ��� �ٺ��� ��������� ���� �ٵ�.. ��? ���忡 ������� �þ��İ�?");
    } else if (status == 1) {
	qm.sendNext("�۽��? ���찡 �þ����� �پ����� �ٺ��� �� ���캼 ƴ�� ������. #b����#k���� �̻��ϰ� ���ڰ� �ְŵ�.������ ������� ������ ���� ���� ������..");
	qm.gainExp(260);
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendPrev("��, �׷��� �� �ʿ� ������ ���찡 �þ������� �𸣰ڱ���. �������� ���� �� ������ �� ����. ��...");
	qm.dispose();
    }
}