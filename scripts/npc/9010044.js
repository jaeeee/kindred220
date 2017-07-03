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
        cm.sendOk("즐거운 모험 하게나!!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
	var chat = "안녕하신가!! #b" + cm.getPlayer().getName() + "#k" + (cm.getPlayer().getGender() == 0 ? "군" : "양") + "추석연휴에도 스피릿에 있는다고 고생이 많군!!";
	chat += " 그런 자네를 위해 내가 이렇게 추석선물로 아이템을 나눠줄려고 왓다네.\r\n\r\n";
	chat += "#b#L0##i2430010#유물 포인트로 아이템을 교환 한다.";
	cm.sendSimple(chat);
	} else if (status == 1) {
		var text = "내가 줄 수 있는 아이템들은 이렇게 있다네\r\n\r\n";
		text += "#e▶ 누적된 유물 포인트 : " + cm.getPlayer().getStoneP(0) + "#n\r\n\r\n";
		for (var i = 0; i < itemid.length; i ++) {
			text += "#L" + i + "#" + (cm.getPlayer().getStoneP(0) < number[i] ? "#Cgray#" : "#b") + "#i" + itemid[i] + "# #z" + itemid[i] + "# [" + cm.getPlayer().getStoneP(0) + " / " + number[i] + "]\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 2) {
		if (cm.getPlayer().getStoneP(0) >= number[selection]) {
			if (!cm.canHold(itemid[selection])) {
				cm.sendOk("인벤토리에 공간을 확보한후 다시 와주게나");
				cm.dispose();
				return;
			}
			cm.gainItem(itemid[selection],1);
			cm.sendOk(number[selection] + "포인트를 사용하여 " + cm.getPlayer().getStoneP(-number[selection]) + "포인트가 남았다네");
			cm.dispose();
		} else {
			cm.sendOk("아이템을 사고싶은 마음은 잘 알겠다만 포인트가 부족하군");
			cm.dispose();
		}
	}
}


