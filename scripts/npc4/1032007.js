/*
    	! �� ��ũ��Ʈ�� Pure Developmest of KMS�� �Ϻ��Դϴ�.
    	! �� ��ũ��Ʈ�� ���� ������ ���� ������ �Ұ����մϴ�.
    	! �� �ּ��� �������� ���ǰ� ������ ������ �����մϴ�.
    	Copyright �� 2012 Scripts Maker	�絹�� <rhkddbs_4399@naver.com>
					��ũ�� <doomgate17@naver.com>
					��ȣ <baekhoms@naver.com>
					������ <junir0542@naver.com>
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    cm.sendNext("�ȳ��ϼ���? ���� ������ �ȳ��� �ҿ��̶�� �մϴ�. ���丮�� ���Ϸ��带 ���� �ٸ� �������� ���� �����̽Ű���? �� �������� ���ø��� ����� #b������ �����̼�#k���� ���ϴ� �谡 #b������ �������� 15�и��� ���#k�ϰ� �ֽ��ϴ�.");
        } else if (status == 1) {
	    cm.sendNextPrev("�����񽺷� ���ǰŶ�� ������ �ִ� #bü��#k���� ���� �ɾ� �ּ���.");
        } else if (status == 2) {
	    cm.sendPrev("���, �� �������� �ص� ���༱�� Ÿ���� ������ �޼Ҹ� ���� ǥ�� ��� ������ ����Ƽ�� ���ݼ������ ȹ�������� ������ ����Ǵ� �������� �����ؼ� ����� ���༱�� �����ϱ�� �����ߴ�ϴ�. ��? �׷� ������ �� �԰� ��İ��? ���� ������. ���ο��� ������ �ְŵ��.");
	    cm.dispose();
	}
    }
}