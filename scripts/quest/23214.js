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
	    qm.sendNext("��, ���ϴ�! �ű⿡ �ִ� ���� ��ȯ�� ����� �ƴ� ���� �� ����Դϴ�.");
        } else if (status == 1) {
	    qm.sendNextPrev("���� ���� ���� �����̱⿡ ������ ����ŭ ������ ������, �� ������ �� ���� ���̹Ƿ� ����� ���� �̴ϴ�. ����� �ٸ� �����̱� ������ ���� �ӹ����� �� ���ٴ� ���� ������ּ���!");
        } else if (status == 1) {
            qm.forceStartQuest();
	    qm.warp(931050120,0);
	    qm.spawnMob(9001037,0,0);
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
            qm.sendYesNo("������ ��̽��ϱ�? ������ �����ø� ���� ���¸� ���� �ϵ��� �ϰڽ��ϴ�.");
        } else if (status == 1) {
	    qm.getPlayer().changeJob(2111);
	    qm.forceCompleteQuest();
            qm.sendNext("������ �Ǿ��ٴ� ���� ��޴ϴ�. ������ �����ؼ� ���� ����ϴ� �ǰ��ϳ׿�. �̸� ���ư�����. ��? �����? �� ��������.");
        } else if (status == 2) {
            qm.sendPrev("���� ������ �� ���� ���� �ʹ� �Ἥ �׷� �Ŷ���!");
            qm.dispose();
        }
    }
}