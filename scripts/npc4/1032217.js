


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
        var cps = "#e#h ##n�� #r�ѽ� ��Ÿ��#k �ҷ��� �佺Ƽ�����̶� ���� �ҷ��������Ծ�þ��!! ���?\r\n";
	cps += "#L1##b�̻�\r\n";
	cps += "#L2#����#k\r\n";
	if (cm.haveItem(2022255, 15)) {
	cps += "#L6##r��ƿӴ�#k";
}
	cm.sendSimple(cps);
	} else if (selection == 1) {
 	var cps1 = "�׷��� �̹��� #e���#n�� ���� ȣ������ũ�� ����µ� �����ֽǼ��ֳ���?\r\n";
	cps1 += "#L3##b�츮 ��Ͼư� ���ʹ޶�� ���е��������!\r\n";
	cps1 += "#L2#�ٻ�#k";
	cm.sendSimple(cps1);
	} else if (selection == 2) {
	cm.sendOk("���ڴ� �Ф�");
	cm.dispose();
	} else if (selection == 3) {
 	var cps2 = "#v2022255# #t2022255# 15���� ��ƿ��ּ���!!\r\n";
	cps2 += "#L8##b�ðܵ�\r\n";
	cps2 += "#L2#�ٻ�#k";
	cm.sendSimple(cps2);
} else if (selection == 6) {
cm.name(1182009, 300, 100, 0);
cm.gainItem(3010279, 1);
cm.gainItem(2520000, 1);
cm.warp(229000000, 0)
cm.gainItem(2022255, -15);
cm.gainItem(2022256, 70);
cm.sendOk("'#e#r����� ��������#k�� ���Ǽ��ֽ��ϴ�!!'")
}
}
   
