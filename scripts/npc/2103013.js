var mobcode = Array(9305400, 9305401, 9305402, 9305403, 9305404, 9305405, 9305406, 9305407, 9305408, 9305409, 9305410, 9305411, 9305412, 9305413, 9305414, 9305415, 9305416, 9305417, 9305418, 9305419, 9305420, 9305421, 9305422);
var choose;
//cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());

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
	if (cm.getPlayer().getMapId() > 926010000 && cm.getPlayer().getMapId() < 926024000) {
		if (cm.getMonsterCount(cm.getPlayer().getMapId()) > 0) {
			cm.sendSimple("#e#b#L0#포기하고 밖으로 나가기#l#n#k\r\n#L1##r(몬스터가 없는데 있다고 뜰시 여기를 클릭해 주세요.)");
			choose = 0;
		} else if (cm.getPlayer().getMapId() == 926010001) {
			cm.sendOk("#e#b모든 몬스터#n#k를 #e#r처치#n#k하셨습니다.\r\n#e#b확인#n#k을 누르시면 #e#r다음 맵#n#k으로 #e#b이동#n#k합니다.");
			choose = 1;
		} else if (cm.getPlayer().getMapId() == 926010002) {
			cm.sendOk("#e#b모든 몬스터#n#k를 #e#r처치#n#k하셨습니다.\r\n#e#b확인#n#k을 누르시면 #e#r다음 맵#n#k으로 #e#b이동#n#k합니다.");
			choose = 2;
		} else if (cm.getPlayer().getMapId() == 926010003) {
			cm.sendOk("#e#b모든 몬스터#n#k를 #e#r처치#n#k하셨습니다.\r\n#e#b확인#n#k을 누르시면 #e#r다음 맵#n#k으로 #e#b이동#n#k합니다.");
			choose = 3;
		} else if (cm.getPlayer().getMapId() == 926010004) {
			cm.sendOk("#e#b네트의 피라미드#n#k를 #e#r완료#n#k하셨습니다.\r\n#e#b확인#n#k을 누르시면 #e#b밖#n#k으로 #e#r이동#n#k합니다.");
			choose = 4;
		}	
	} else {
	cm.sendYesNo("#e#b네트의 피라미드#n#k에 #e#r입장#n#k하시겠습니까?");
	choose = 5;
	}
    } else if (status == 1) {
	if (choose == 0) {
		if (selection == 0) {
			cm.warp(926010000);
			cm.dispose();
		} else if (selection == 1) {
			cm.killAllMob();
			cm.sendOk("#e#r오류#n#k가 #e#b해결#n#k되었습니다. #e#b정상#n#k적으로 #e#b이용 가능#n#k합니다.");
			cm.dispose();
		}
	} else if (choose == 1) {
		cm.warp(926010002);
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[9],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[10],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[11],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[12],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[13],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.dispose();
	} else if (choose == 2) {
		cm.warp(926010003);
		cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[17],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[18],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[19],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[20],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[21],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[17],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[18],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[19],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[20],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[21],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[17],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[18],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[19],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[20],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[21],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[17],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[18],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[19],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[20],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[21],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[17],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[18],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[19],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[20],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[21],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[14],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[15],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[16],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[17],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[18],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[19],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[20],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[21],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.dispose();
	} else if (choose == 3) {
		cm.warp(926010004);
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[22],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.dispose();
	} else if (choose == 4) {
		cm.warp(926010000);
		cm.gainExp(30000000);
                cm.gainItem(4310067, 20);
		cm.dispose();
	} else if (choose == 5) {
		cm.warp(926010001);
		cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[0],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[1],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[2],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[3],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[4],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[5],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[6],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[7],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.spawnMob(mobcode[8],cm.getPlayer().getPosition().getX(),cm.getPlayer().getPosition().getY());
		cm.dispose();
	}
    }
}