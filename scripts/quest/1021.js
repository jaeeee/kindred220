/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : �����̵���

	���ǽ� ���� : ����Ʈ


*/

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
            if (qm.getPlayer().getGender() == 0) {
                qm.sendNext("����, ��~ ���� ��� ����? ����! ���� ���ο� �����ڵ鿡�� ���������� �˷��ִ� ����, ������.");
	    } else {
                qm.sendNext("����, ������~ ���� ��� ����? ����! ���� ���ο� �����ڵ鿡�� ���������� �˷��ִ� ����, ������.");
	    }
	} else if (status == 1)
            qm.sendNextPrev("�׷��� ���� �϶�� ���׳ı�? ������! you�� ȣ����� ����! ���� ����~ �̰� ���� �����ؼ� �ϴ� ���̾�.");
        else if (status == 2)
            qm.askAcceptDecline("��... �׷� �峭 �� �ĺ���? ����!");
        else if (status == 3) {
	    if (qm.getPlayer().getKeyValue("Roger_Apple") == null)
                qm.getPlayer().addHP(-25);
            if (!qm.haveItem(2010007))
                qm.gainItem(2010007, 1);
            qm.sendNext("�����? HP�� 0�� �Ǹ� ū�ϳ��ٱ�. ��, #r������ ���#k�� �� �״� �Ծ��. ���� ���ž�. ������ â�� ��� ����Ŭ���غ�. ������â�� #bIŰ#k�� ������ ������ �����ٱ�.");
        } else if (status == 4) {
	    qm.getPlayer().setKeyValue("Roger_Apple","1");
            qm.sendPrev("���� �� ������ ���, ���� �Ծ�� ��. ������ �ٷ� HP�� ȸ���Ǵ� ���� ���� �ž�. HP�� ���� ȸ���� �� �ٽ� ���� �ɾ���.");
        } else if (status == 5) {
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
            qm.sendNext("�������� �Դ� ��... �? ��������? ������ �ϴ� ���Կ� #b���� ������#k���� ������ ���� �ִٱ�. ������? ����~ ������ �������� ������ ������ �־ �˾Ƽ� ȸ���Ǳ⵵ ��. �����ٴ� ������ ������ �ʺ� ������ �̷� ȸ���� ������ ���� ����̾�.");
        } else if (status == 1) {
            qm.sendNextPrev("���Ҿ�! ���� �� ������� ������ ����. ������ �Ϸ��� �� ����־� �ϴ� �Ŵϱ� ������ ���� �϶�! ������ �� �����.");
        } else if (status == 2) {
            qm.sendNextPrev("���� ������ �� �� �ִ°� ���������. �ƽ����� ���� ������� �� �ð��̷α�. �ƹ��ɷ� ������ �϶�. �׷� �߰�~!!!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
        } else if (status == 3) {
            qm.forceCompleteQuest();
            qm.gainExp(10);
            qm.gainItem(2010000, 3);
            qm.gainItem(2010009, 3);
            qm.dispose();
        }
    }
}