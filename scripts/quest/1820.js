/*
�̺��� �ý��� ��ũ1 ����Ʈ - ���־�

���� ����
*/

importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
	    qm.sendOk("start");
	    qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.sendOk("ó������ �ý��ۿ� �����ϸ� �ְ� �Ǹ� ����ġ ���� ���� �Ͼ ���� �ֽ��ϴ�. ���־��� �Ͻ� ���� ��õ�մϴ�.");
        qm.dispose();
    } else {
         status++;
         if (status == 0) {
	if (qm.getQuestStatus(1806) == 0) {
	     qm.forceStartQuest();
	     qm.sendOk("#b���� �����⸦ �۵�#k��Ű��, ���Ͱ� ��Ÿ���� �����մϴ�..\r\n������ ���� Ǯ �� #e#b20����#k#n ������ óġ�Ͻʽÿ�.");
	     //qm.dispose();
	} else {
	      qm.sendNext("#o9306000# 20������ óġ�ϼ̽��ϱ�?"); //ȹ�� ����ǥ ���� ������5
	}
         } else if (status == 1) {
	
	qm.sendOk("���� ���α׷��� ����Ǿ����ϴ�.");
         } else if (status == 2) {
	qm.sendNextPrev("���� ��Ų ���� �ھ� 1���� ���޵Ǿ����ϴ�. �̺��� �ý����� �����Ͻ� ��, �ھ� ���� �� ������ �Ͻø�, ��ȭ�� ü���Ͻ� �� �ֽ��ϴ�.");
	//����Ʈ�Ϸ�
	qm.dispose();
         }
    }
}