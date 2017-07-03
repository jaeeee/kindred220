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
		var start = "안녕하세요. #e#b환생, 변생#n#k시 필요한 레벨 0제 무기를 #e#b지급#n#k해 드리고 있습니다.\r\n";
		start += "#L1212000##e#b#i1212000#   #z1212000#\r\n\r\n";
		start += "#L1222000##e#b#i1222000#   #z1222000#\r\n\r\n";
		start += "#L1232000##e#b#i1232000#   #z1232000#\r\n\r\n";
		start += "#L1242000##e#b#i1242000#   #z1242000#\r\n\r\n";
		start += "#L1302000##e#b#i1302000#   #z1302000#\r\n\r\n";
		start += "#L1312000##e#b#i1312000#   #z1312000#\r\n\r\n";
		start += "#L1322000##e#b#i1322000#   #z1322000#\r\n\r\n";
		start += "#L1332000##e#b#i1332000#   #z1332000#\r\n\r\n";
		start += "#L1362000##e#b#i1362000#   #z1362000#\r\n\r\n";
		start += "#L1372000##e#b#i1372000#   #z1372000#\r\n\r\n";
		start += "#L1382000##e#b#i1382000#   #z1382000#\r\n\r\n";
		start += "#L1402000##e#b#i1402000#   #z1402000#\r\n\r\n";
		start += "#L1412000##e#b#i1412000#   #z1412000#\r\n\r\n";
		start += "#L1422000##e#b#i1422000#   #z1422000#\r\n\r\n";
		start += "#L1432000##e#b#i1432000#   #z1432000#\r\n\r\n";
		start += "#L1442000##e#b#i1442000#   #z1442000#\r\n\r\n";
		start += "#L1452000##e#b#i1452000#   #z1452000#\r\n\r\n";
		start += "#L1462000##e#b#i1462000#   #z1462000#\r\n\r\n";
		start += "#L1472000##e#b#i1472000#   #z1472000#\r\n\r\n";
		start += "#L1482000##e#b#i1482000#   #z1482000#\r\n\r\n";
		start += "#L1492000##e#b#i1492000#   #z1492000#\r\n\r\n";
		start += "#L1522000##e#b#i1522000#   #z1522000#\r\n\r\n";
		start += "#L1532000##e#b#i1532000#   #z1532000#\r\n\r\n";
		cm.sendSimple(start);
	} if (status == 1) {
		cm.gainItem(selection, 1);
		cm.sendOk("#e#b#i" + selection + "#   #z" + selection + "#아이템#n#k을 얻으셨습니다.");
		cm.dispose();
	}
}