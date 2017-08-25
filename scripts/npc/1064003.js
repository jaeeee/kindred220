/**
Root Abyss coin exchange NPC.
**/
var status = -1;
var itemid = Array(2028154,2028155,2028161);
var number = Array(20,25,40);

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
		cm.dispose();
		return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        var chat = "Would you like to exchange your #i4310064#?";
	chat += "\r\n\r\n#b";
	for (var i = 0; i < itemid.length; i++) {
		chat += "#L" + i + "##i" + itemid[i] + "##z" + itemid[i] + "# : #i4310064# " + number[i] + "x\r\n";
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
