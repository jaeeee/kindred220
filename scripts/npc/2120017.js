


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�ѽ� ��Ÿ�Ͽ� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2120000

	���ǽ� �̸� : ����Ż�

	���ǽð� �ִ� �� : ��Ƽ�� �Ǽ� : �Խ�Ʈ��1 (229000010)

	���ǽ� ���� : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        var cps = "#e#h ##n�� #r2�ܰ迡 �����ϽŰ��� ���ϵ帳�ϴ� !#k �ܵ����������� ��Ź�� ����ֽ���?\r\n";
	cps += "#L1##b���� �˰ھ�\r\n";
	cps += "#L2#��?#k\r\n";
	if (cm.haveItem(4033324, 3)) {
	cps += "#L6##r��ƿӴ�#k";
}
	cm.sendSimple(cps);
	} else if (selection == 1) {
 	var cps1 = "������ ���ϳ׿� #r2�ܰ�#k �� ȣ�ڱ����� �߿���\r\n\r\n #v4033324# #e#t4033324##n 3���� ��ƿ��ּ��� �̰ɸ������� �и��������� ã�ƴ��ֽ���  #k\r\n";
	cps1 += "#L8##b����\r\n";
	cps1 += "#L2#����#k";
	cm.sendSimple(cps1);
	} else if (selection == 2) {
	cm.sendOk("�����ѻ���");
	cm.dispose();
} else if (selection == 6) {//2022256
cm.gainItem(4033111, 1);
cm.warp(229000000, 0)
cm.gainItem(4033324, -3);
cm.gainItem(2022256, 20);
cm.name(1182009, 50, 30,0);
cm.sendOk("'#e2�ܰ� ���  3�ܰ�� ���ʽÿ�.'")
}
}
   
