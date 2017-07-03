var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("������, �̷� ���� �����ϴ� �ߴ��� ������ ����� ��� ���ö��� ���԰� �Ա�. ������ �ռ�����, ������ ���ڸ�, �� ������ �Ź��� �ؾ��µ�. ���� �Ǹ����� �������� ���̾�.");
	} else if (status == 1) {
            qm.sendNextPrev("�ƹ�ư ��ħ �� �Ա���. ������� �� �迡 �ƺ� ��Ź �ϳ��� ������� ������?");
        } else if (status == 2) {
            qm.sendNextPrev("����� ��� ������ �������� �� �̻��ϴܴ�. ���� ȭ�� ���ų� ¥���� �θ��� ���� ����. �װ� �����ż� ���õ� ���� ���ͺôµ�, �ƴϳ� �ٸ��� ������ �� ����� ��� ��Ÿ���� �հ� ������ ���ĳ��� ����̱���.");
        } else if (status == 3) {
            qm.askAcceptDecline("�������� ã�ƿ��� ���� �ϴ� ������ ��Ÿ������ ���ĳ��� ���� �ʰڴ�? ������ �׷��� ���� ������ �� �ƴ϶� �����丷�� �� �� ������ ��ĥ �� ���� �� ������. ������ #b�����丷#k�� #b3��#k�� ���ش��ָ� ���� �ٵ�...");
        } else if (status == 4) {
            qm.forceStartQuest();
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
	    qm.gainExp(210);
	    qm.gainItem(3010097,1);
	    qm.gainItem(2022621,15);
	    qm.gainItem(2022622,15);
            qm.forceCompleteQuest();
            qm.sendNext("��, �����丷�� �� ���ؿ� �Ŵ�? ���ϱ���. �׷� ������ �� �ָ� �ɱ�... ����, �װ� �־���.\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i3010097# ưư�� ���� ���� 1��\r\n#i2022621# ���ִ� ���� 15��\r\n#i2022622# ���ִ� �ֽ� 15��\r\n#fUI/UIWindow.img/QuestIcon/8/0# 210 exp");
        } else if (status == 1) {
            qm.sendNextPrev("��, ��Ÿ���� ����� ���� ���ڷ� ���� �� ���ڶ���. ����� �׷��� ưư�ؼ� ������ �ž�. �� ����.");
        } else if (status == 2) {
            qm.askAcceptDecline("�̷�, ������ �ϳ� �� �ֱ���. ��Ÿ���� ������ ƴ�� Ÿ �¾ �� �� ���� ���� #b�Ʊ� ����#k �� ������ ����ģ ����̾�. ����� �浵 ���״� �ƹ����� ���� ã���� ���� �� �� ������. ������ �������� �ʰڴ�?");
        } else if (status == 3) {
            qm.forceStartQuest(22005);
            qm.dispose();
        }
    }
}