/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : Ű��

	���ǽð� �ִ� �� : ������ ��1

	���ǽ� ���� : �ñ׳ʽ� Ʃ�丮��


*/

importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else if (mode == 0 && status < 3)
            status--;
	else if (mode == 0 && status == 3) {
	    qm.sendOk("����� ������ ������ ������ ������ �� �ִٳ�.");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("��? ������Ʈ�� ���´ٰ�? ����! �̾�, �̹��� ���� ���� �����ΰ�? �ݰ���. �ݰ���. �� �̸��� Ű��. �ڳ� ���� ��������� ����ġ�� ���ñ�������. ���� �ΰ��� �Ƴ�.");
        } else if (status == 1) {
	    qm.sendNextPrev("�츮�� �ǿ��� �Ҹ��� �����̾�. � ���� �翡 �ִ� �ż��� ������ ����? �ǿ�� �ż��� ���� �����̾�. �迭�� �� �ٸ�����...�������. �����꿡���� ��� ������ ���������� �ݹ� �ͼ������ž�.");
        } else if (status == 2) {
	    qm.sendNextPrev("��, Ȥ�� �˰� �־�? �� �����꿡�� ���ʹ� ���� ����. ����� ���� ���� ����� �����꿡 �ߵ� ���� �� ���ŵ�. �׷��� �������� ��. ������ �ż��� ���� ȯ����� ƼƼ�� ������� �� �Ŵϱ�.");
        } else if (status == 3) {            
            qm.askAcceptDecline("������ ����� ����! �׷�... �ڳ��� ������ �����ϴ�, ƼƼ���߿����� ���� ����� ƼƼ�� ��Ƶ� �ǰڱ�. #b������ ��2#k�� �ִ� #rƼ�� 15����#k ������ ����ϰڴ°�? ������ ��Ż�� Ÿ�� #b������ ��2#k�� ���� ����ϵ��� �ϰ�.");        
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
            qm.sendOK("��ȣ, Ƽ���� �� ��ġ�� �ǰ�? �������� ������? ����. �׷��ٷ� ���� �ܰ�� �Ѿ�� �ǰڱ�.\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2000020# ������� ���� ���� 10��\r\n#i2000021# ������� �Ķ� ���� 10��\r\n#fUI/UIWindow.img/QuestIcon/8/0# 430 exp");
        } else if (status == 1) {          
	    qm.forceCompleteQuest();
	    qm.gainItem(2000020, 10);
	    qm.gainItem(2000021, 10);
            qm.gainExp(430);
	    qm.dispose();
        }
    }
}