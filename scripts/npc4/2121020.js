


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
        var cps = "#e#h ##n�� #r3�ܰ迡 �����ϽŰ��� ���ϵ帳�ϴ� !#k ����!!!! ��Ʈ��!!! ��Ʈ�Ⱦ�!!! ��Ʈ�� �׿����!!\r\n";
	cps += "#L1##b�˰پ�\r\n";
	cps += "#L2#����#k\r\n";
	if (cm.haveItem(4001803, 20)) {
	cps += "#L6##r��ƿӴ�#k";
}
	cm.sendSimple(cps);
	} else if (selection == 1) {
 	var cps1 = "��Ʈ�����̸� #v4001803# #r#t4001803##k �����Ϳ� 20���� ��Ƽ� �ּ��� �¿�������...\r\n";
	cps1 += "#L8##b����\r\n";
	cps1 += "#L2#����#k";
	cm.sendSimple(cps1);
	} else if (selection == 2) {
	cm.sendOk("�����ѻ���");
	cm.dispose();
} else if (selection == 6) {
cm.gainItem(4033112, 1);
cm.warp(229000000, 0)
cm.gainItem(4001803, -20);
cm.gainItem(2022256, 40);
cm.name(1182009, 100, 50, 0);
cm.sendOk("'#e3�ܰ� ���  4�ܰ�� ���ʽÿ�.'")
}
}
   
