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
	    qm.sendNext("�װͺ���. ������Ʈ��. �� ���� ���� ����� �Ǹ� �̾�޾Ұ�, �׸��� �ڰ��� ������ �̷��� �Ǹ��ϰ� �����ϼ��ݾƿ�.");
        } else if (status == 1) {
            qm.sendNextPrev("��. �׻� �׷����� �������� ������ �´� �� �����ϴ�. ���� ���� �����ϱ� ������ �� �ҳ⿡�Դ� ���� ����� �Ǹ� �̾�� �ڰ��� �ִ� �� ������.");
        } else if (status == 2) {
            qm.sendNextPrevS("�츮 �ƹ����� ���� ��翴�ٰ��? ���� ���� ��簡 �� �Ŷ�� �ǰ���? ���� �׳� ����� �ҳ��� ���̿���. �� ���� �̸����� ����...",3);
        } else if (status == 3) {
            qm.askAcceptDecline("������ ����� ���Դϴ�. ������ ���� ������ �¾ �ڽ��� ����� �Ž����� ���������� ���ھ��. ����� ���ؼ� �׸��� �� ������ ���带 ���ؼ���.");
        } else if (status == 4) {
	    qm.warp(130000000,0);
	    qm.getPlayer().setLevel(10);
            qm.forceStartQuest();
	    qm.getPlayer().changeJob(5100);
	    qm.getPlayer().gainSP(1);
            qm.sendNextPrev("��ſ��� �̸��� �ʿ��� �� ������. '������ �¾ ���'�̶�� ���� '#b������#k'�� �����? ��ſ��� ���� �� ��︮�� �� ���ƿ�. ���� ���� �Բ� ������� ����. ���ο� ���� ���۵Ǳ⿡ �� ����ŭ ���� ���� �����ϱ��.");
            qm.dispose();
	}
    }
}
