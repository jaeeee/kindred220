var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("#e#b�ູ�� ����#n#k���� �� �� �ӹ����鼭 #e#b��ſ� �ð�#n#k ������ �ٷ�.");
	cm.safeDispose();
    }
    if (status == 0) {
	cm.sendYesNo("���� �ִ� ������ �ǵ��ư���?");
    } else if (status == 1) {
	cm.warp(511000000);
	cm.dispose();
    }
}