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
        qm.sendOk("���� ���� ������ ���� ���־� ���α׷��� �����Ͻ� ���� ��õ�մϴ�.");
        qm.dispose();
    } else {
         status++;
         if (status == 0) {
	if (qm.getQuestStatus(1806) == 0) {
	     qm.sendOk("�Ʒ� ���̴� #b���� �����⸦ �۵�#k��Ű��, ���Ͱ� ��Ÿ���� �����մϴ�..\r\n���� ���迡 ������ ��, #e#b#o9306000# 10����#k#n ������ óġ�Ͻʽÿ�");
	     qm.forceStartQuest();
	     qm.dispose();
	} else {
	      qm.sendNext("#o9306000# 10������ ��� óġ�ϼ̽��ϱ�?");
	}
         } else if (status == 1) {
	
	qm.sendNextPrev("���־� ���α׷��� ���������� ��ġ�̽��ϴ�. �̷� ������� �� ��ũ�� �̵�, �� ��ũ���� ���� ������ ���α׷��� �Ϸ��Ͻø� �˴ϴ�.");
         } else if (status == 2) {
	qm.sendNextPrev("���� ��Ų ���� �ھ� 1���� ���޵Ǿ����ϴ�. �̺��� �ý����� �����Ͻ� ��, �ھ� ���� �� ������ �Ͻø�, ��ȭ�� ü���Ͻ� �� �ֽ��ϴ�.");
	//����Ʈ�Ϸ�
	qm.dispose();
         }
    }
}