


/*
 ������ ��ų NPC  (CelphisOnline)


*/

var status = -1;
var hyper = "";
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	cm.sendSimple("������ ��ų�� ���� 140���� ���� �� �ֽ��ϴ�. \r\n#e#r������ ��ų�� ������ �����ÿ� @��ų�����͸� ġ�ð� �����۽�ųâ�� �������.#n#k\r\n#L0#������ SP �ޱ�#l\r\n#L1#������ ��ų ����#l");
    } else if (status == 1) {
	if (selection == 0) {
           cm.sendOk(cm.giveHyperSp());
	   cm.dispose();
	} else {
	   cm.sendSimple("#L1#���� ��ȭ �нú� ��ų ����#l\r\n#L2#��ų ��ȭ �нú� ��ų ����#l\r\n#L3#����/���� ��ų ����#l");
	}
    } else if (status == 2) {
	   hyper = "hyper" + selection;
	   cm.sendSimple("SP : " + cm.getPlayer().getKeyValue2(hyper) + "\r\n" + cm.getHyperSkills(selection));
    } else if (status == 3) {
	cm.getPlayer().setKeyValue2(hyper, cm.getPlayer().getKeyValue2(hyper) - 1);
	cm.getPlayer().changeSkillLevel(selection, 1, 1);
	cm.sendOk("#s" + selection + "# #q" + selection+ "# ��ų�� ���̽��ϴ�");
	cm.dispose();
    }
}
