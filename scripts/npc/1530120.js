
/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�Ҵ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1530120

	���ǽ� �̸� : �̸���

	���ǽð� �ִ� �� : ��׽ý� : ������ �� (100000003)

	���ǽ� ���� : �������̵�

	���̿� ���ǽ� �ڵ� : 2001002


*/

var status = -1;
var points;
var status2 = 0;
var sel;
var sel2;
var itemList = Array (1002357,1002971,1052202,1003621,1052526,1003622,1052527,1122000); // ������ ��� 
var number = Array (50,60,60,1000,1000,1500,1500,1000);
var map = Array (910340500,240050200,272000600,921160400);

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
        	cm.sendSpirit("�ý��� ���͵��� �����ٱ�?\r\n�׷��ٸ� ������ �������� ������ ���̵带 ��� ���ھ�?\r\n#r#L1#��ȭ�� �׸��Ѵ�.#l  #L0##r���� ���̵带 �̿��Ѵ�.#l",true,0);
	} else if (status == 1) {
		if (selection == 1) {
			cm.sendSpirit("����!!\r\n�̷��Ƶ� �� �ٻ� ���̶�!!\r\n�빫�� ������ ��ȭ�� �������� �ٷ�?",false,2001002);
			cm.dispose();
		} else {
			cm.sendSpirit("��� �̿� �غ��ھ�?\r\n#L0##r���� ���̵忡 �����Ѵ�.#l\r\n#L1#���� ���̵� ����Ʈ�� ��ȯ�Ѵ�.#l",true,0);
		}
	} else if (status == 2) {
		if (selection == 0) {
			status2 = 1;
			cm.sendSpirit("<���� ���̵� ���̵�>\r\n #b#L0##v03994115##l#L1##v03994116##l#L2##v03994117##l#L3##v03994118##l\r\n\r\n#L4##r��ȭ�� �׸��Ѵ�.#l",true,0);
		} else if (selection == 1) {
			var chat = "� �������� ��ȯ �ϰھ�?\r\n#b";
			chat += "���� " + cm.getPlayer().getName() + " ���� ����Ʈ�� " + cm.getPlayer().getboss() + "����Ʈ ��ŭ �־�\r\n\r\n";
			chat += "#k<��ȯ ������ ������>\r\n#r";
			for (var i = 0; i < itemList.length; i ++) {
			chat += "#L" + i + "##i" + itemList[i] + "# #z" + itemList[i] + "# : " + number[i] + "P\r\n";
			}
			cm.sendSpirit(chat,true,0);
		}
	} else if (status == 3) {
		if (status2 == 1) {
			if (selection == 4) {
				cm.sendSpirit("����!!\r\n�̷��Ƶ� �� �ٻ� ���̶�!!\r\n�빫�� ������ ��ȭ�� �������� �ٷ�?",false,2001002);
				cm.dispose();
			} else {
				var mapid = map[selection];
				var event = "newCharacter";
				event += selection != 0 ? selection : "";
				if (cm.getPlayer().getParty() == null) {
					cm.sendSpirit("\r\n�� ���� ��Ƽ�� ���� �����ҷ��� �ϴ°Ŵ�?\r\n���� ���̵�� �ʰ� ���� �ϴ°� ��ŭ �����Ѱ��� �ƴ϶�!!",false,2001002);
					cm.dispose();
					return;
				}

				if (!cm.isLeader()) {
					cm.sendSpirit("\r\n���� ���̵�� ��Ƽ�� ���� ���� ��û�� �Ҽ� �־�.",false,0);
					cm.dispose();
					return;
				}

				if (!cm.allMembersHere()) {
					cm.sendSpirit("\r\n��Ƽ�� ������ �������� �ʾҴµ� ������ �ҷ��� �ž�?",false,2001002);
					cm.dispose();
					return;
				}

				if (cm.getPlayerCount(mapid) > 0) {
					cm.sendSpirit("\r\n�̾������� �̹� �ٸ� ��Ƽ�� �������̵带 �̿� ���̾�,\r\n�ٸ� ä���� �̿� ���ְų� ��� ��ٷ� �ְھ�?",false,0);
					cm.dispose();
					return;
				}

				if (!cm.BossCheck("rade",5)) {
					cm.sendSpirit("\r\n��Ƽ���� �������� ���� �Ϸ� ���� Ƚ���� �ʰ��߾�.\r\n#r����� �������̵� �Ϸ� �̿� Ƚ���� 5ȸ�� ���ѵǾ��־�",false,0);
					cm.dispose();
					return;
				}

				try {
					cm.BossAdd("rade");
					cm.resetMap(mapid);
					cm.PartyTimeMove(100000000, mapid, 1800);
					cm.getPlayer().getMap().�������̵�((selection + 1),5000,8000);
					cm.dispose();
				} catch (err) {
					cm.sendOk(err);
					cm.dispose();
				}
			}
		} else {
			sel = selection;
			cm.sendSpirit("#b" + number[sel] + "#k����Ʈ�� �ʿ��ѵ� ������ ��ȯ �ϰھ�?\r\n�ѹ� ��ȯ�� �������� #rû��öȸ�� �Ұ���#k�ϴ� ������ ������!!\r\n#L0##r��ȯ �Ѵ�.#l  #L1#��ȯ ���� �ʴ´�.#l",true,0);
		} 
	} else if (status == 4) {
		if (selection == 0) {
			if (cm.getPlayer().getboss() >= number[sel]) {
				if (cm.canHold(itemList[sel])) {
					cm.sendSpirit("\r\n��! ���� �ʰ� ������ #i" + itemList[sel] + "##b#t" + itemList[sel] + "##k(��)��.\r\n�׷� ������ �� �̿��� �ֵ��� ����~",false,0);
					cm.getPlayer().addboss(-number[sel]);
					cm.gainItem(itemList[sel],1);
					cm.dispose();
				} else {
					cm.sendSpirit("���?\r\n�̺�! �� #b�κ��丮#k�� ������� ���°�?\r\n#b�κ��丮#k�� �������� �ٽ� ã�ƿ����� ��",false,0);
					cm.dispose();
				}
			} else {
				cm.sendSpirit("��, ����\r\n����Ʈ�� �����鼭 �������� ��ȯ�ҷ��� �ѰŴ�?\r\n����Ʈ�� Ȯ���� ��ƿ� �Ŀ� �ٽ� ã�ƿ����� ��!!",false,2001002);
				cm.dispose();
			}
		} else if (selection == 1) {
			cm.sendSpirit("\r\n�׷�?\r\n�׷� ������ �ٲ�� �������� �ٽ� ã�ƿ���~",false,0);
			cm.dispose();
		}
	}
}
