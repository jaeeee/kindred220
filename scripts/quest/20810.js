var status = -1;

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
            if (qm.getQuestStatus(20810) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20810) == 1) {
                qm.sendYesNo("������, ������簡 �Ǳ� ���� ��� ���迡 ����� ���� �����ؿ�. ������ �������� �Ӹ��� �����ϴ�ϴ�. ���� �ٷ� ��������� ������ ��ھ��?");
	    }
        } else if (status == 1) {
	    qm.changeJob(5110);
            qm.forceCompleteQuest();
	    qm.gainItem(1142400,1);
	    qm.showinfoMessage("<���� ���� ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.dispose();
        }
    }
}