var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && status == 2) {
            qm.sendNext("�����̾��ٸ鼭 �� �׷��� �ֱ����Ÿ�����? ��Ե� �ܱ迡 �����ݾƿ�? ���������� �ϴ� ��! �����ϰ� ���� �ſ���.");
            qm.dispose();
	    return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("��, �׷� ���� ������ ��������� �� �ΰ� ���� �ܰ�� �Ѿ��, ���� �ܰ谡 ���İ��? ��� ���� ����ݾƿ�. ���� �����縦 �� �濡 ��ġ�� �� ���� ������ ������ ������ �����ϴ� �ſ���.");
        } else if (status == 1) {
            qm.sendNextPrev("����� ���ſ� �����̾��� �� Ȯ�������� �װž� ���� �� �� ���, ���� �������� ���ְ� �ƴϷ��� ���� �ӿ� �׷��� �����־����� ���� ������ �� �翬���ݾƿ�? �ϴ��� �� ���� ������ Ǯ����߰ھ��. ��� �ϴ��İ��?");
        } else if (status == 2) {
            qm.askAcceptDecline("ü���� �����̴�! ������ ���� ü�º���! ...��� ���� �𸣼���? �翬�� #b���� ü�� �ܷ�#k�� �ؾ���. ...��, ����� �Ҿ����� �𸣽ðڱ���. �� �𸣼ŵ� �����ƿ�. ���� �غ��ø� �� �״ϱ�. �׷� �ٷ� ���� ü�� �ܷÿ� �����?");
        } else if (status == 3) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode > 0)
            status++;
        else
            status--;
        if (status > 0) {
            qm.sendNext("�����Ĵ� ��ġ�Ͻ� �ǰ���? �ϱ�, �� ������ �⺻�߿� �⺻. �� ���� �ֵѷ��� �� �� �ִ� ������ ���ε� ���ϸ� â������. ��ϸ��� ���� ���߷��� ����? ������ �ص� �β����׿�.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 15 #t2000022# \r\n#i2000023# 15 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 320 exp");
        } else if (status == 1) {
            qm.gainItem(2000022, 15);
            qm.gainItem(2000023, 15);
            qm.forceCompleteQuest();
            qm.gainExp(320);
            qm.sendNext("��Ϻ��� �� ���� ������ ���� �������� �ܷ��� �ϱ⿣ �� ��ġ�� ü���̿���. � ���� �ܰ�� �Ѿ��. ���� �ܰ� ��\r\n���� �� �غ� �Ǹ� ���� �ɾ� �ּ���.");
            qm.dispose();
        }
    }
}