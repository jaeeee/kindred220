/*
    	! �� ��ũ��Ʈ�� Hina Developmest of KMS�� �Ϻ��Դϴ�.
    	! �� ��ũ��Ʈ�� ���� ������ ���� ������ �Ұ����մϴ�.
    	! �� �ּ��� �������� ���ǰ� ������ ������ �����մϴ�.
    	Copyright �� 2012 Scripts Maker	�絹�� <rhkddbs_4399@naver.com>
					Ƽ�� <doomgate17@naver.com>
					��ȣ <baekhoms@naver.com>
					������ <junir0542@naver.com>
*/

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
            if (qm.getQuestStatus(23212) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(23212) == 1) {
		qm.askAcceptDecline("�� ���� ����� �ǽ��� �����ϰڽ��ϴ�. ������ �ִ��� ������ �������ּ���.");
	    }
        } else if (status == 1) {
            qm.sendNextS("#b(�̻��� ����� ������ ������ �� ����.)#k",3);
        } else if (status == 2) {
	    qm.getPlayer().changeJob(3110);
	    qm.forceCompleteQuest();
            qm.sendPrev("��.��.��.��. �� ��Ź �帳�ϴ�. ���� �Ҹ� ���� ������ ���ð� �� ���������� �ٷ� ���� �ż���.");
            qm.dispose();
	}
    }
}