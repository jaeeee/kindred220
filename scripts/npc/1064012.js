


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�Ҵ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1064013

	���ǽ� �̸� : �ι�° ������ ��

	���ǽð� �ִ� �� : ��Ÿ�� : �Ŵ��� �Ѹ� (105200000)

	���ǽ� ���� : MISSINGNO


*/

var status = -1;
var check = 0;

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
	if (cm.getPlayer().getMapId() == 105200200) {
		cm.dispose();
		return;
	}
	if(cm.getPlayer().getMapId() == 105200130) {
	if(cm.getMonsterCount(105200130) > 0) {
	cm.sendYesNo("���� ���� ��ȣ�� óġ�� �����ϰڽ��ϱ�?");
		} else {
	cm.sendOk("��Ÿ�񽺷� �̵����� �帮�ڽ��ϴ�.");
		}
	} else {
	cm.sendSimple("#e#r<��Ÿ�� ���� ���� �Ա�>#n#k\r\n��Ÿ�� ���� ������ ��ȣ���� #r�ݹ�#k�� ��Ű�� �ִ� �������� ���� ���̴�.#rŬ���� �������κ��� 24�ð��� ������ Ŭ���� ����� �ʱ�ȭ �˴ϴ�.\r\n\r\n#L0##b#i4033611##z4033611#�� ����Ͽ� �븻 ���� �̵��Ѵ�. (100���� �̻�)#l\r\n#L1##i4033611##z4033611#�� ����Ͽ� ī���� ���� �̵��Ѵ�.(180���� �̻�)");
	}
    } else if (status == 1) {
	if(selection == 1) {
	cm.sendOk("ī���� �ý����� �غ����Դϴ�.");
	cm.dispose();
	return;
	} else if(cm.getPlayer().getMapId() == 105200130) {
	cm.warp(105200000);
	cm.dispose();
	if(cm.getPlayer().getKeyValue("banban") != "clear") {
	cm.getPlayer().setKeyValue("banban","clear");
	if (cm.getPlayer().getKeyValue("lutaclear") == null)
	cm.openNpc(1064002);
	}
	} else {
	if(cm.getPlayer().getParty() == null) {
	cm.sendNextS("��Ƽ�� �ʿ��ϱ�. ��Ƽ�� ������ �ٽ� �ͺ���.",2);
	cm.dispose();
	return;
	}
	if (!cm.isLeader()) {
		cm.sendOk("��Ƽ�常�� ���� ��û�� �� �� �ֽ��ϴ�.");
		cm.dispose();
		return;
	}
	if (!cm.getPlayer().isGM()) {
		if(cm.getPlayer().getParty().getMembers().size() <= 1) {
			cm.sendNextS("1�� �̻��� ���ᰡ �ʿ��ϱ�. �Բ� �� ���Ḧ ã�ƺ���.",2);
			cm.dispose();
			return;
		}
	}
	if(cm.getPlayerCount(105200110) > 1) {
	cm.sendOk("�̹� �ٸ� ������ #r�ݹ�#k�� óġ�ϰ� �ִ� ���Դϴ�.");
	cm.dispose();
	return;
	}
	if(cm.allPartyItem(4033611,1)) {
	cm.sendOk("#b�ð��� ƴ����#k �����ϱ� ���ؼ��� #i4033611##b#z4033611##k�� �ʿ��մϴ�.");
	cm.dispose();
	return;
	}
	cm.resetMap(105200100);
	cm.allPartyWarp(105200100,true);
	cm.showEffect(true,"Gstar/start");
	cm.getPlayer().getMap().respawn(true);
	cm.dispose();
}
} else {
cm.dispose();
}
}