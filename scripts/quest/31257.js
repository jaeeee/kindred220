/*
�Ķ�������
*/
importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
            qm.sendYesNo("\r\n������ ���� �ֹε��� ��� Ż��ð� �־���?");
        } else if (status == 1) {
            qm.sendNext("��, ����. ������ �Ǿ���� �� ���߰;��� ������� ������ ������ ���� ����� ���� ����. ��ħ �ڳװ� �ͼ� ������ ��Ҿ�.");
        } else if (status == 2) {
            qm.sendSimple("�ڳװ� �ο��� �ڵ顦 �׷��ϱ� ��ä ������ �ִ� ������� ��ü�� �˰� �ֳ�? �׵��� ���� �� ũ��������� �ֹε��̸�, �Ѷ� �������� ������̾���. ������ ������ ������ Ÿ���� ������ ������.\r\n\r\n#L0##b ��°�� Ÿ���� ���ΰ���?#l");
        } else if (status == 3) {
            qm.sendNext("�۽�, ���� �Ƴ�? ��� ���� ������ �����׸��Ƹ� �۾� �������̾�����, ��ټ��� �� ������ �������� �𸣰� �ִ� ������");
        } else if (status == 4) {
            qm.sendNextPrev("���� ���� �⵿�� ��ä �ȿ��� ���� ���� ��Ű�� ������, �ٱ����� ��Ȯ�� ���� ���� ��Ƴ��� �ִ����� �� �� ����. ����� �븩����.");
        } else if (status == 5) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}