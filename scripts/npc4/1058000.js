/*
	�� ��ũ��Ʈ�� �������� �����Դϴ�.
	�������� KMS �������� ����������ϴ�.

	���̹� : ����(seonwoo__@naver.com)
*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        if (cm.getMorphState() == 2210003) {
            cm.sendNextS("���ᱺ. � ������. ȥ���ϴ��� �츮 �������� �����Ͻô� ���ϼ�.", 1);
        } else {
            cm.sendNextS("#e�ٷ���!!#k (#r����#k ��ư�� ������� �ϴ°Ͱ���.)", 1);
        }
    } else if (status == 1) {
        if (cm.getMorphState() == 2210003) {
            cm.warp(1000000,0);cm.changeJob(400);
            cm.dispose();
        } else {
            cm.warp(1000000,0);cm.changeJob(400);
            cm.dispose();
        }
    }
}
