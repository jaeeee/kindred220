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
	    qm.sendYesNo("�� Ǫ�� ���� ����� ���� �߱����� ���͵��� �����ϰ� ���� �� �ϱ��? ���� ���� ������ �𸣴� ���� ������ ���� �������Կ�. �غ�Ǽ̳���?");
        } else if (status == 1) {
            qm.sendNext("Ȥ��, ������ ���� �߻��ϸ� ���� �� �����ּ���. �׷�, �ϳ�... ��... ��!");
        } else if (status == 2) {
	    qm.timeMoveMap(102040600,931050402,60 * 7);
            qm.spawnMob(9300471,0,0);
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}