var status = -1;

function start() {
	action(1,0,0);
}

function action(mode, type, selection) {
if (mode == 1) { status++;
} else { cm.dispose(); return; }

if (status == 0) {
	cm.sendSimple("�ȳ��ϼ���. #e#b#h ##n#k��,\r\n#h #���� #e#r�����̾�PC��#n#k���� �����ϼ̽��ϴ�. �����̾�PC�濡�� �����Ͻ� �е鿡�Դ� #b�����̾� PC�� ����#k�� ���� �� �帮�� �ֽ��ϴ�.\r\n#L0##i1142145##t1142145#");

} else if (status == 1) {
	cm.gainItem(1142145, 1);
	cm.dispose();
}
}