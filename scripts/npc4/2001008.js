/*
 *  �ѱ�ȭ : ��Ǿ� (pok_showinfo@nate.com)
 */


function start() {
    cm.sendYesNo("����� �Ҹ�ŭ �ϰ� �߾��� ������ŭ �� �׾Ѿ�? ����.. �׷� ������?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000000);
    } else {
	cm.sendNext("������ ������ ������ ��ȭ�� ����~");
    }
    cm.dispose();
}