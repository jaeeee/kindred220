


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�޸������� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1064003

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ��Ÿ�� : �Ŵ��� �Ѹ� (105200000)

	���ǽ� ���� : ������ ����


*/

var status = -1;
var itemid = Array(2028154,2028155,2028161);
var number = Array(200,250,400);

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
        var chat = "�� ���ſ� ���� ������� ���� ������ �״� �� �˾Ҵٴϱ��.";
	chat += "\r\n\r\n#b";
	for (var i = 0; i < itemid.length; i++) {
		chat += "#L" + i + "##i" + itemid[i] + "##z" + itemid[i] + "# : #i4310064# " + number[i] + "��\r\n";
	}
	cm.sendSimple(chat);
    } else if (status == 1) {
	if (cm.haveItem(4310064,number[selection])) {
		cm.sendOk("#b#z" + itemid[selection] + "##k�� ��ȯ�� �ص�Ⱦ��. �ѹ� #b" + cm.getPlayer().getName() + "#k���� ���� #b#z " + itemid[selection] + "##k�� ���� �غ�����!!");
		cm.gainItem(itemid[selection],1);
		cm.gainItem(4310064,-number[selection]);
		cm.dispose();
	} else {
		cm.sendOk("#b" + cm.getPlayer().getName() + "#k���� �������� #b#z4310064##k �δ� �������� ��ȯ�ϱ⿡�� �����ؿ�.");
		cm.dispose();
	}
    }
}
