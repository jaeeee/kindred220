var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            qm.sendNext("���� �����ǾƸ� ����� �غ� �� �ǽ� �ǰ���? �غ��� �� �ִ� �� ��� �غ��� �Ŀ� ����ϴ� �� ���ƿ�. ���� ���� ��ٰ� �� ����� ��������ϱ��.");
            qm.dispose();
	    return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.askAcceptDecline("�׷� ����ؼ� ���� ü�� �ܷ��� �ұ��? �غ�� �Ǽ̾��? ���� ����� ��� �ϼ̴��� ��ų�� ������ �����Կ� �÷� ���Ҵ��� �ٽ� �� �� Ȯ���Ͻ� �� ������ �ּ���.");
        } else if (status == 1) {
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
        if (status == 0) {
            qm.sendNext("�����ǾƸ� ��� ��ġ�ϰ� ���ƿ��̱���. Ȯ���� �����ٴ� ü���� �� ����� �� ���׿�. �׷��ϱ�... ����� �Ĵ��Ĵ� �ϴ� ����?\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 20 #t2000022# \r\n#i2000023# 20 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 450 exp");
        } else if (status == 1) {
            qm.gainItem(2000022,20);
            qm.gainItem(2000023,20);
            qm.forceCompleteQuest();
            qm.gainExp(450);
            qm.sendNext("�� �� ü���� ������ ��ϵ� ���ø� �� ������ �ſ���. �׷� ���� �ܰ� �ܷ��� �Ͻ� �Ÿ� ������ �ּ���.");
            qm.dispose();
        }
    }
}