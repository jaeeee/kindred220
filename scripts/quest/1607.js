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
	    qm.sendNext("�̷� �쿬��...���⼭ �� �˰� ��׿�?");
        } else if (status == 1) {
            qm.sendNextPrevS("(...�̷� ���� �� �����ٴ�. �� �� Ŀ�׽�Ƽ ����ö���� ������� �̻��� �����ڳ�...) ��. �� �����׿�...",3);
        } else if (status == 2) {
	    qm.sendNext("���� ���� �߱� ������ ���췯 �Դٰ�, �� �̻��� ����Ʈ�� �߰ߵǾ��ٰ� ������. Ȥ�� ���� ���̳���?");
        } else if (status == 3) {
            qm.sendNextPrevS("��. ������ �������� ���̷��� ���ְ��� óġ�ϴٰ� �þ��. ���� ����� �վ��� ������ �� ���Ҿ��.",3);
        } else if (status == 4) {
            qm.sendYesNo("�ʹ� �ñ��ϱ���! ���� �װ����� �ȳ��� �ֽ� �� �������? ���� �� ���� ��ο���...");
        } else if (status == 5) {
            qm.sendYesNo("�׷� ������ �������� �ٷ� ����غ����?");
        } else if (status == 6) {
            qm.sendNext("�׷� ���� �ٷ� ����.");
        } else if (status == 7) {
	    qm.warp(102040600,0);
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}