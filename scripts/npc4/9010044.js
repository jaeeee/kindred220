importPackage(Packages.packet.creators);

var status = -1;

var itemid = Array(5064000,5064300,5064100,2049129,1003589, 1102445, 1082466, 1052498, 1072703, 1003590, 1102446, 1082467, 1052499, 1072704, 1003591, 1102447, 1082468, 1052500, 1072705, 1003592, 1102448, 1082469, 1052501, 1072706, 1003593, 1102449, 1082470, 1052502, 1072707, 1232040, 1302228, 1312117, 1322163, 1402152, 1412105, 1422108, 1432139, 1442183, 1212043, 1372140, 1382169, 1452171, 1462160, 1522072, 1332194, 1362068, 1472180, 1222043, 1242046, 1482141, 1492153, 1532075);
var number = Array(400,400,400,600,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000);

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
        cm.sendOk("��ſ� ���� �ϰԳ�!!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
	var chat = "�ȳ��ϽŰ�!! #b" + cm.getPlayer().getName() + "#k" + (cm.getPlayer().getGender() == 0 ? "��" : "��") + "�߼����޿��� ���Ǹ��� �ִ´ٰ� ����� ����!!";
	chat += " �׷� �ڳ׸� ���� ���� �̷��� �߼������� �������� �����ٷ��� �Ӵٳ�.\r\n\r\n";
	chat += "#b#L0##i2430010#���� ����Ʈ�� �������� ��ȯ �Ѵ�.";
	cm.sendSimple(chat);
	} else if (status == 1) {
		var text = "���� �� �� �ִ� �����۵��� �̷��� �ִٳ�\r\n\r\n";
		text += "#e�� ������ ���� ����Ʈ : " + cm.getPlayer().getStoneP(0) + "#n\r\n\r\n";
		for (var i = 0; i < itemid.length; i ++) {
			text += "#L" + i + "#" + (cm.getPlayer().getStoneP(0) < number[i] ? "#Cgray#" : "#b") + "#i" + itemid[i] + "# #z" + itemid[i] + "# [" + cm.getPlayer().getStoneP(0) + " / " + number[i] + "]\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 2) {
		if (cm.getPlayer().getStoneP(0) >= number[selection]) {
			if (!cm.canHold(itemid[selection])) {
				cm.sendOk("�κ��丮�� ������ Ȯ������ �ٽ� ���ְԳ�");
				cm.dispose();
				return;
			}
			cm.gainItem(itemid[selection],1);
			cm.sendOk(number[selection] + "����Ʈ�� ����Ͽ� " + cm.getPlayer().getStoneP(-number[selection]) + "����Ʈ�� ���Ҵٳ�");
			cm.dispose();
		} else {
			cm.sendOk("�������� ������ ������ �� �˰ڴٸ� ����Ʈ�� �����ϱ�");
			cm.dispose();
		}
	}
}


