/*
�̺��� �ý��� ��ũ3 ����Ʈ

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
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
	    qm.sendOk("���ƴٴϴ� #o9306002#�� �� ����ٴϸ� 50������ óġ�ϸ� �˴ϴ�.\r\n��ũ3 ���� ������ġ�� �۵��ϸ�, #o9306002#���� ������ġ �ֺ����� ������� �Ǵµ�, �׶��� ��ġ�� �ʰ� �̿��Ͻø� �� �� �����ϰ� ���α׷��� �����Ͻ� �� �ֽ��ϴ�.");
	    qm.forceCompleteQuest();
	    qm.dispose();
        }
    }
}