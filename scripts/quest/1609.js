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
	    qm.sendYesNo("��! ��, #b������ ��������4#k�� ��� ���Ƿ糪�� ���డ���� �ڽ��� ������ �ʴ��ϴ���? ���� ���� ���� �ַ�������. �����ô°� ���? ���Ƿ糪�� #r������ ��������4#k�� �ִ� ������ ��� �־��. �����񽺷� ���÷��� ����������, ������ ���������� ���ż� ���༱�� Ÿ�ø� �ǿ�. �� ��������. �Ƽ���?");
        } else if (status == 1) {
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}