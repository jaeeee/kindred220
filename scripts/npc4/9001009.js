importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var mobcode = Array(9302021, 9302022, 9302023, 9302024, 9302025, 9302026, 9302027, 9302028, 9302029, 9302030, 9302031, 9302032, 9302033, 9302034, 9302035, 9302036, 9302037);

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
		var huwon = "   #e�ȳ��ϼ���. #e#b#h0#��!!!#n#k\r\n   ���� #e#r�޸տ¶���#n#k�� ���Ű��� ȯ���մϴ�.\r\n\r\n";
		if (cm.getPlayer().getMapId() == 927000100) {
			huwon += "   #e#b�� ����#n#k�� ���Ͽ� �� ���� #e#r50����#n#k�� #e#b��ȯ#n#k �����մϴ�.\r\n   (#e#b����#n#k�� ���� #e#b����ġ#n#k�� �ٲ�ϴ�.)\r\n\r\n";
			huwon += "#L1##e#b���� 1 ~ 150 �������� ��ȯ�ϱ�\r\n";
			huwon += "#L100000000##e#b������ ���ư���\r\n\r\n";
			huwon += "#L3##r(���Ͱ� ���µ� �ִٰ� ��� ���⸦ Ŭ���� �ּ���.)";
		} else if (cm.getPlayer().getMapId() == 927000110) {
			huwon += "   #e#b�� ����#n#k�� ���Ͽ� �� ���� #e#r50����#n#k�� #e#b��ȯ#n#k �����մϴ�.\r\n\r\n";
			huwon += "#L2##e#b���� 151 ~ 250 �������� ��ȯ�ϱ�\r\n";
			huwon += "#L100000000##e#b������ ���ư���\r\n\r\n";
			huwon += "#L3##r(���Ͱ� ���µ� �ִٰ� ��� ���⸦ Ŭ���� �ּ���.)";
		} else {
	    	huwon += "   #e#b#i4310067# #z4310067##n#k��#r50��#k ������ #e#����#k#n#k�� #e#b�̿�#n#k�Ͻ� ��\r\n   �ֽ��ϴ�. ���? #e#b�� ��#n#k #e#r�̿�#n#k�� ���Ƿ���?\r\n\r\n";
		huwon += "#L927000100##e#b���� 1 ~ 150 ��������� �̵��ϱ�\r\n";
		huwon += "#L927000110##e#b���� 151 ~ 250 ��������� �̵��ϱ�";
		}
		cm.sendSimple(huwon);
	} else if (status == 1) {
		if (selection == 100000000) {
			cm.dispose();
			cm.warp(selection);
		} else if (selection == 1) {
			if (cm.getPlayer().getLevel() >=150) {
			cm.warp(927000110);
			cm.sendOk("#e#b���� 151 ~ 250 �����#n#k�� #e#b�̿�#n#k�� �ּ���.");
			cm.dispose();
			} else if (cm.getMonsterCount(927000100) > 0) {
			cm.sendOk("#e#b��� ����#n#k�� ������ �� #e#b��ȯ#n#k �����մϴ�.");
			cm.dispose();
			} else {
			if (cm.getPlayer().getLevel() < 50) {
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[�޸տ¶���] : " + cm.getPlayer().getName() + "���� ����������� ���͸� ��ȯ�Ͽ����ϴ�."));
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());					
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
			} else if (cm.getPlayer().getLevel() >= 50 || cm.getPlayer().getLevel() < 100) {
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[�޸տ¶���] : " + cm.getPlayer().getName() + "���� ����������� ���͸� ��ȯ�Ͽ����ϴ�."));
				cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
			} else if (cm.getPlayer().getLevel() >= 100 || cm.getPlayer().getLevel() < 150) {
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[�޸տ¶���] : " + cm.getPlayer().getName() + "���� ����������� ���͸� ��ȯ�Ͽ����ϴ�."));
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				}
			}
			cm.dispose();
		} else if (selection == 2) {
 			if (cm.getMonsterCount(927000110) > 0) {
			cm.sendOk("#e#b��� ����#n#k�� ������ �� #e#b��ȯ#n#k �����մϴ�.");
			cm.dispose();
			} else {
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[�޸տ¶���] : " + cm.getPlayer().getName() + "���� ����������� ���͸� ��ȯ�Ͽ����ϴ�."));
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
				cm.dispose();
			}
		} else if (selection == 3) {
			cm.killAllMob();
			cm.sendOk("#e#r����#n#k�� #e#b�ذ�#n#k�Ǿ����ϴ�. #e#b����#n#k������ #e#b�̿� ����#n#k�մϴ�.");
			cm.dispose();
		} else {
			if (cm.getPlayerCount(selection) > 0) {
				cm.sendOk("�̹� �ٸ� ������ #e#r���������#n#k�� #e#b�̿� ��#n#k �Դϴ�.\r\n#e#r�ٸ� ä��#n#k���� #e�̿�#n#k�� �ּ���.");
				cm.dispose();
			} else if (cm.haveItem(4310067, -50)) {
				cm.warp(selection);
				cm.dispose();
			} else {
				cm.sendOk("#e#b#i4310067# #z4310067##n#k�� �ִ��� #e#rȮ��#n#k�� �ּ���.");
				cm.dispose();
			}		
		}
	}
}

