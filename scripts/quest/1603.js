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
	    qm.sendNext("- ���� - �ֱ� ���� �߱� ���忡 ����� ���̷������ �������� ����ڰ� ����ǰ� �ֽ��ϴ�. ����ִ� �е��� ������ ��ٸ��� �ֽ��ϴ�. �ڼ��� ��Ȳ�� #r���� �߱��� ķ��#k�� �ִ� #b�߱����� ��#k���� �������ֽʽÿ�.");
        } else if (status == 1) {
            qm.sendYesNo("���� �ٷ� #r�丮��, �����߱���ķ��#k�� �̵��Ͻðڽ��ϱ�?");
        } else if (status == 2) {
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}