/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : Ű��

	���ǽð� �ִ� �� : ������ ��4

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
	    qm.sendOk("�Ϲݰ��ݵ� ���� �ʿ������� ����� �⺻�� ���� ��ų������.");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("��ٸ��� �־����ϴ�. #h # ��. �� �̸��� Ű��. ���� �� ��°�Դϴ�. �Ϲݰ��ݿ� ���� ���̴ٰ��? �׷� ���� �ܰ�� �翬�� �����ϰ� ��ð���? �ٷ� #b��ų#k�Դϴ�. ������ ���忡���� ��ų������ ���� �߿��ϴ�ϴ�.");
        } else if (status == 1) {
	    qm.sendNextPrev("�������� �ϸ� ��ų ����Ʈ�� ���� �� �ֽ��ϴ�. ��ſ��Ե� ������� ��ų ����Ʈ�� ���� �ٵ���, #bKŰ#k�� ���� ��ųâ���� ���ϴ� ��ų�� ������ ��ų ����Ʈ�� �����Ͽ� ��ų�� �÷� ������. �̷��� �ø� #b��ų�� �����Կ� �÷� ������ �ξ� ����ϱ� ���մϴ�.#k");
        } else if (status == 2) {
	    qm.askAcceptDecline("��, �׷� ��Ա� ���� �ٷ� ���������Դϴ�. �� �ֺ����� Ƽ����� ���� �ִµ���, #b������ ������ ��ų�� ����� #rƼ�� 3����#k�� ����� �� �� ���ŷ� #bƼ���� ����#k�� 1�� ������ �ּ���. �׷� ��ٸ��ڽ��ϴ�.");        
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
            qm.sendNext("Ƽ�긦 ��ġ�ϰ� Ƽ���� ������ �������̱���. �Ǹ��մϴ�. #b�������� ��簡 �Ǹ� �������� �� ������ ��ų����Ʈ�� 3��#k ������ �� �ֽ��ϴ�. �׷�, ȭ��ǥ�� ���� �������� �޿� ���� ���� �ܰ踦 ����ϰ� �ִ� #bŰ��#k�� ������ �� ���� �̴ϴ�.\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#fUI/UIWindow.img/QuestIcon/8/0# 40 exp");
        } else if (status == 1) {
	    qm.gainItem(4000483, -1);          
	    qm.forceCompleteQuest();
            qm.gainExp(40);
	    qm.dispose();
        }
    }
}