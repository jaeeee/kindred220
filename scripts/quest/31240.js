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
            qm.sendYesNo("Ȥ�� #r�����׸���#k��� �̸��� ���� �˰� �ֳ�? �װ��� �������� �ӳ��� ����, �Ҿ���� �� �� ���� �ñ��ϴٸ� �����ϾƷ� �ͼ� ���� ���� �̾߱⸦ ���� ��� �� ���?\r\n\r\n#r(����Ʈ ������ �ڵ����� �����Ͼ��� ���� ���������� �̵��մϴ�.)");
        } else if (status == 1) {
            qm.sendNext("���� ���������� ��ٸ��� �ְڳ�.");
        } else if (status == 2) {
            qm.sendNextPrevS("(�����Ͼƿ��� ����� ������.)",2);
        } else if (status == 3) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}