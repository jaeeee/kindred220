/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : Ű��

	���ǽð� �ִ� �� : ������ ��3

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
	    qm.sendOk("�������� �ʹٸ� ������ �����ϴ� ���ۿ� ����.");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("����ϴ� ������� ���� ������ ������, ���� �������� �� #b�Ϲݰ���#k���� �����ϴ� �ž�. �տ� ���⸸ ��� �ִٸ� �������� �� �� �־�. ���� �տ� ���� �ֵθ��⸸ �ϸ� �ǰŵ�.");
        } else if (status == 1) {
	    qm.sendNextPrev("#bCtrl Ű#k�� ������ �Ϲݰ����� ��  �� �־�. ������ #bŰ���� �� ���� �Ʒ�#k�� �ִµ�... Ȥ�� ��ġ�� ������ �ʰ���? ��, �� �� Ȯ���غ�.");
        } else if (status == 2) {            
            qm.askAcceptDecline("Ȯ�������� �ٷ� ������ �غ��߰���? �� �ֺ����� �����꿡�� ���� ���� Ƽ�밡 ���� ������ �� �� ����� ������ ��. #r1����#k ��� �� �Ŀ� ���ƿ��� ������ �ֵ��� �Ұ�.");        
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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("��, Ƽ��� ������ ���� ����̳�? �? �������� ��������? �Ϲݰ����� ���������� �׸�ŭ ����. ������ �� ������ ��ų�� ���µ�... �װ� Ű���� �˷��� �ž�. �׺��� ����Ʈ ������� �ٰ�.");
        } else if (status == 1) {
	    qm.sendNext("������� ����. �԰� �ִ� �ʺ��ٴ� ������ ���� �� ���� �ž�. ���⿡�� ������. ȭ��ǥ�� ���� �������� �� ���� ������ #bŰ��#k�� �ִµ�, �� �ָ� ������ ���� ���� �����Դ� �� ���?\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1002869# ����� ����� ���� 1��\r\n#i1052177# ����� ȭ���� �κ� 1��\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30 exp");
        } else if (status == 2) {          
	    qm.forceCompleteQuest();
	    qm.gainItem(1002869, 1);
	    qm.gainItem(1052177, 1);
            qm.gainExp(30);
	    qm.dispose();
        }
    }
}