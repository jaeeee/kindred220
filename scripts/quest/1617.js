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

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
	    qm.sendYesNo("���۽����� ���ȿ� ���̰ڱ���. �˼�������, ����� �츮�� �Բ� �� �ڰ��� �ִ����� ���� Ȯ���غ��� �ɱ��? �ڰݵ� ���� �̿��� �츮�� �̾߱⸦ �Ժη� ������ ���� �����ϱ��. �������ðڽ��ϱ�?");
	} else if (status == 1) {
	    qm.sendNext("�� �����ϴ�. �׷� ������ �׽�Ʈ�� ���� ��Ź�帳�ϴ�. ���� �ִ� �� ������ ���Ǹ� �ð� ���� ����ġ�ø� �˴ϴ�. �׷� �����غ���.");
        } else if (status == 2) {
	    qm.warp(931050510,0);
	    qm.spawnMob(9300474,0,0);
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}