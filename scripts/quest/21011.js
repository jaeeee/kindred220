var status = -1;

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && status == 4) {
            qm.sendNext("��, �׷��ñ���. ���� �������� �ٻڽñ���... ��½. Ȥ�� ������ �ٲ�ø� �ٽ� ������ �ּ���.");
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("��, �����԰� �Բ� ��� ����� ����... ����... ���� �����̽Ű���? ������! �����ٴ� ���� ���� �������� ���� Ȯ���� ���� �ּ���! �̺��� �ٷ� ����?!");
        } else if (status == 1) {
            qm.sendNextPrev("...�˼��մϴ�. �����ؼ� �׸� �Ҹ��� ������ ���ҳ׿�. ��½. ������ ���� �����ؼ�... �ƾ�, ������ ��������... �����Բ����� ���� ��ڽðڱ���.");
        } else if (status == 2) {
            qm.sendNextPrev("�׷���... �����Բ����� ���⸦ �� ��� ��ô±���. �������� �ڽŸ��� ���Ⱑ �ִ� �ɷ� �ƴµ�... ��, ���� ������� �ο�� ���� �Ҿ������ ����̱���.");
        } else if (status == 3) {
            qm.sendYesNo("����̶�� �ϱ� �ʹ� �ʶ�������, #b�ϴ� �� ���̶� ��� �ٳ� �ּ���.#k �����Բ� �帮�� �����̿���. ������ �� �����δٴϴ� �� �ʹ� �̻��ϴϱ��. \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1302000# 1 #t1302000# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
        } else if (status == 4) {
            qm.gainItem(1302000,1);
            qm.forceCompleteQuest();
            qm.gainExp(35);
            qm.sendNextS("#b(��ų�� ���� �������� �ʾҴµ�... �˸��� �ſ� ������. ������ �� ���� ����� �� ���� �ֱ�� �� �ɱ�? ���� ��� �����ϴ� ����?)#k",3);
            qm.dispose();
        }
    }
}