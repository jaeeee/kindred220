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
            qm.sendNext("�ҵ����� ���� �ְ� �� �ž�? �׷� ���� �ʵ� ��ħ�� �Ծ�. ���� ��ħ���� ���� ������ġ��. ���� ������ ���Ծ�. ����. ����� �ҵ����� �����ֱ⸦ �� �����ָ� ��ħ�䵵 �� �ַ��� �ߴµ�.");
	} else if (status == 1) {
            qm.askAcceptDecline("��, #b������ġ#k�� �� �״� #b�� ������ �������� ����#k. ���� ������ �� ���� �����ôٴµ�?");
        } else if (status == 2) {
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
	    qm.gainItem(1003028,1);
	    qm.gainItem(2022621,5);
	    qm.gainItem(2022622,5);
	    qm.gainExp(60);
	    qm.forceCompleteQuest();
            qm.sendNext("��ħ���� �� �Ծ���, ����? �׷� ���� �ɺθ� �ϸ� ������ ������?\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1003028# ����� ��¤���� 1��\r\n#i2022621# ���ִ� ���� 5��\r\n#i2022622# ���ִ� �ֽ� 5��\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
            qm.dispose();
        }
    }
}