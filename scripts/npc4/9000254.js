

/*
    CelphisMs NPC ����
*/


var status = 0;
var selected = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
 cm.dispose();
 return;
    }
    if (mode == 1)
 status++;
    else
 status--;
	if (status == 0) {
		if (cm.getPlayer().getMapId() != 910044000) {
			cm.warp(910044000);
			cm.dispose();
		//} else if (cm.getPlayer().hasGmLevel(6)) {
                } else {
		cm.sendSimple("#b#L0#�����忡 �����ϰڽ��ϴ�.#l\r\n");
		}
   	} else if (status == 1) {
		selected = selection;
		if (selection == 0) {
			cm.sendYesNo("������� �ּ� 3���̻��� �ʿ��մϴ�. �������� ��ų�� �̿��Ͽ� ������ ���̸� pvp����Ʈ�� �����մϴ�. �����Ͻðڽ��ϱ�?");
		}
	} else if (status == 2) {
		if (selected == 0) {
			if (cm.getMap().getCharactersSize() >= 3) {
				if (cm.getPlayerCount(130000101) > 0) {
					cm.sendOk("������ ���� �� ���� ��ٷ��ּ���.");
				} else {
					cm.InterPVP();
				}
			} else {
				cm.sendOk("3���̻��� �Ǿ� �մϴ�.");
			}
		cm.dispose();
	}
 }
}


