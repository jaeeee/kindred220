importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var mobcode = Array(8240098, 8240099, 8240104, 8240105);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
    }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var check = "   #e�ȳ��ϼ���. #e#b#h0#��!!!#n#k\r\n   ���� #e#r�޸տ¶���#n#k������ #e#b���� ����#n#k�� �̸� #e#rü��#n#k�� ����\r\n   �� �ֵ��� #e#b�غ�#n#k�Ͽ���ϴ�. �ѹ� #e#b����#n#k�� ���ðھ?\r\n\r\n";
		if (cm.getPlayer().getMapId() == 350060416) {
			if (cm.getMonsterCount(350060416) < 1) {
				check += "#L1##e#b���� ü���ϱ�(2�ܰ�)\r\n";
				check += "#L5##e#b���� ü���ϱ�(3�ܰ�) (ü���� ������ �̵��˴ϴ�.)\r\n";
				check += "#L2##e#b��׽ý��� ���ư���\r\n";
			} else {
				check += "#L2##e#b��׽ý��� ���ư���\r\n";
				check += "#L3##n#r(���Ͱ� ���µ� ���� ü���ϱⰡ ���ٸ� Ŭ��)";
			}
		} else if (cm.getPlayer().getMapId() == 350060416) {
			if (cm.getMonsterCount(350060416) < 1) {
				check += "#L1##e#b���� ü���ϱ�(3�ܰ�)\r\n";
				check += "#L2##e#b��׽ý��� ���ư���\r\n";
			} else {
				check += "#L2##e#b��׽ý��� ���ư���\r\n";
				check += "#L3##n#r(���Ͱ� ���µ� ���� ��ȯ�ϱⰡ ���ٸ� Ŭ��)";
			}
		} else if (cm.getPlayer().getMapId() == 302090300) {
			check += "#L4##e#b���� ü���ϱ� (���丮�� ���۵˴ϴ�.)\r\n";
		} else {
			check += "#L0##e#b���� ü���ϱ� (ü���� ������ �̵��˴ϴ�.)\r\n";
		}
		cm.sendSimple(check);
	} else if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayerCount(302090300) > 5 || cm.getPlayerCount(350060180) > 5 || cm.getPlayerCount(350060416) > 5) {
				cm.sendOk("�̹� �ٸ� ��Ƽ�� #e#r����#n#k�� #e#b��� ��#n#k �Դϴ�.\r\n#e#r�ٸ� ä��#n#k���� #e�̿�#n#k�� �ּ���.");
				cm.dispose();
			} else {
				cm.warp(302090300);
				cm.dispose();
			}
		} else if (selection == 1) {
			if (cm.getPlayer().getMapId() == 350060180) {
				cm.spawnMob(mobcode[0], -150, -16);
				cm.dispose();
			} else if (cm.getPlayer().getMapId() == 350060416) {
				cm.spawnMob(mobcode[1], 0, -16);
				cm.dispose();
			}				
		} else if (selection == 2) {
			cm.dispose();
			cm.warp(100000000);
		} else if (selection == 3) {
			cm.killAllMob();
			cm.sendOk("#e#r����#n#k�� #e#b�ذ�#n#k�Ǿ����ϴ�. #e#b����#n#k������ #e#b�̿� ����#n#k�մϴ�.");
			cm.dispose();
		} else if (selection == 5) {
			cm.dispose();
			cm.warp(350060416);
		} else if (selection == 4) {
			cm.sendNext("#e���� ������#n�� �� �̰����� #e#b���#n#k���� ����� �־���...\r\n�� ������ ���̾�... #e#b����� ��#n#k����...");				
		} 
	} else if (status == 2) {
		cm.sendNextPrevS("�� �� #e#b��#n#k�̸��� �����ϴ� #e#b�Ͼ� ������#n#k�� #e#r����#n#k�ؼ� #e#r���� ������#n#k�� �Ȱű���?", 2);
	} else if (status == 3) {
		cm.sendNextPrev("�¾�... ������ �� #e#r�Ƹ��� ����#n#k�� ���̰� #e#b����#n#k���� ������ �������ν� �� �а��� ġ�����...");
	} else if (status == 3) {
		cm.sendNextPrev("������ �� #e#b���#n#k�� �ǰ� ������ ���� #e#r�Ҿ�#n#k�߾�... #e#b����ī#n#k�� �������� �ɱ� ��...");
	} else if (status == 4) {
		cm.sendNextPrevS("�ָ��޸��� ����ī���� ���� ��ȥ���̸� �ؼ� �ӿ��ڳ�? �ȱ׷�?", 2);
	} else if (status == 5) {
		cm.sendNextPrev("...");
	} else if (status == 6) {
		cm.sendYesNoS("���찡 �Ҹ��� ���� �� �ϴ�... ���츦 ���� ����� ���ǵ� ������ óġ����.\r\n\r\n#e#r(���� �׽�Ʈ ���� ���� �����̹Ƿ� ���� �ٶ��ϴ�.)", 2);
	} else if (status == 7) {
		cm.warp(350060180);
		cm.dispose();
	}
}
