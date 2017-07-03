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
		var huwon = "   #e안녕하세요. #e#b#h0#님!!!#n#k\r\n   저희 #e#r휴먼온라인#n#k에 오신것을 환영합니다.\r\n\r\n";
		if (cm.getPlayer().getMapId() == 927000100) {
			huwon += "   #e#b렉 방지#n#k를 위하여 한 번에 #e#r50마리#n#k씩 #e#b소환#n#k 가능합니다.\r\n   (#e#b레벨#n#k에 따라서 #e#b경험치#n#k가 바뀝니다.)\r\n\r\n";
			huwon += "#L1##e#b레벨 1 ~ 150 폭업몬스터 소환하기\r\n";
			huwon += "#L100000000##e#b마을로 돌아가기\r\n\r\n";
			huwon += "#L3##r(몬스터가 없는데 있다고 뜰시 여기를 클릭해 주세요.)";
		} else if (cm.getPlayer().getMapId() == 927000110) {
			huwon += "   #e#b렉 방지#n#k를 위하여 한 번에 #e#r50마리#n#k씩 #e#b소환#n#k 가능합니다.\r\n\r\n";
			huwon += "#L2##e#b레벨 151 ~ 250 폭업몬스터 소환하기\r\n";
			huwon += "#L100000000##e#b마을로 돌아가기\r\n\r\n";
			huwon += "#L3##r(몬스터가 없는데 있다고 뜰시 여기를 클릭해 주세요.)";
		} else {
	    	huwon += "   #e#b#i4310067# #z4310067##n#k이#r50개#k 있으면 #e#폭사#k#n#k를 #e#b이용#n#k하실 수\r\n   있습니다. 어때여? #e#b한 번#n#k #e#r이용#n#k해 보실래요?\r\n\r\n";
		huwon += "#L927000100##e#b레벨 1 ~ 150 폭업사냥터 이동하기\r\n";
		huwon += "#L927000110##e#b레벨 151 ~ 250 폭업사냥터 이동하기";
		}
		cm.sendSimple(huwon);
	} else if (status == 1) {
		if (selection == 100000000) {
			cm.dispose();
			cm.warp(selection);
		} else if (selection == 1) {
			if (cm.getPlayer().getLevel() >=150) {
			cm.warp(927000110);
			cm.sendOk("#e#b레벨 151 ~ 250 사냥터#n#k를 #e#b이용#n#k해 주세요.");
			cm.dispose();
			} else if (cm.getMonsterCount(927000100) > 0) {
			cm.sendOk("#e#b모든 몬스터#n#k를 잡으신 후 #e#b소환#n#k 가능합니다.");
			cm.dispose();
			} else {
			if (cm.getPlayer().getLevel() < 50) {
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[휴먼온라인] : " + cm.getPlayer().getName() + "님이 폭업사냥터의 몬스터를 소환하였습니다."));
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
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[휴먼온라인] : " + cm.getPlayer().getName() + "님이 폭업사냥터의 몬스터를 소환하였습니다."));
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
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[휴먼온라인] : " + cm.getPlayer().getName() + "님이 폭업사냥터의 몬스터를 소환하였습니다."));
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
			cm.sendOk("#e#b모든 몬스터#n#k를 잡으신 후 #e#b소환#n#k 가능합니다.");
			cm.dispose();
			} else {
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[휴먼온라인] : " + cm.getPlayer().getName() + "님이 폭업사냥터의 몬스터를 소환하였습니다."));
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
			cm.sendOk("#e#r오류#n#k가 #e#b해결#n#k되었습니다. #e#b정상#n#k적으로 #e#b이용 가능#n#k합니다.");
			cm.dispose();
		} else {
			if (cm.getPlayerCount(selection) > 0) {
				cm.sendOk("이미 다른 유저가 #e#r폭업사냥터#n#k를 #e#b이용 중#n#k 입니다.\r\n#e#r다른 채널#n#k에서 #e이용#n#k해 주세요.");
				cm.dispose();
			} else if (cm.haveItem(4310067, -50)) {
				cm.warp(selection);
				cm.dispose();
			} else {
				cm.sendOk("#e#b#i4310067# #z4310067##n#k이 있는지 #e#r확인#n#k해 주세요.");
				cm.dispose();
			}		
		}
	}
}

