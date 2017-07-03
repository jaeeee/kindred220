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
		var shop = "#e#r<휴먼온라인> #e#b여제상점#n#k에 오신 것을 #e#b환영#n#k합니다.\r\n#e#b1000000 메소#k#n로 원하는 #e#b아이템#n#k을 #e#b구매#n#k하실 수 있습니다.\r\n\r\n";
		shop += "#L0##e#b무기";
		shop += "#L1##e#b방어구\r\n";
		cm.sendSimple(shop);
	}
	else if (status == 1) {
		if (selection == 0) { 
		var weapon = "#e#b여제템 무기상점#n#k에 오신 것을 #e#b환영#n#k합니다.\r\n원하는 #e#b무기#n#k를 #e#b선택#n#k하세요.\r\n\r\n\r\n";
		weapon += "#L1212014##e#b#i1212014#   #z1212014#\r\n\r\n";
		weapon += "#L1222014##e#b#i1222014#   #z1222014#\r\n\r\n";
		weapon += "#L1232014##e#b#i1232014#   #z1232014#\r\n\r\n";
		weapon += "#L1242014##e#b#i1242014#   #z1242014# (힘,민첩)\r\n\r\n";
		weapon += "#L1242042##e#b#i1242042#   #z1242042# (민첩,행운)\r\n\r\n";
		weapon += "#L1302152##e#b#i1302152#   #z1302152#\r\n\r\n";
		weapon += "#L1312065##e#b#i1312065#   #z1312065#\r\n\r\n";
		weapon += "#L1322096##e#b#i1322096#   #z1322096#\r\n\r\n";
		weapon += "#L1332130##e#b#i1332130#   #z1332130#\r\n\r\n";
		weapon += "#L1342036##e#b#i1342036#   #z1342036#\r\n\r\n";
		weapon += "#L1362019##e#b#i1362019#   #z1362019#\r\n\r\n";
		weapon += "#L1372084##e#b#i1372084#   #z1372084#\r\n\r\n";
		weapon += "#L1382104##e#b#i1382104#   #z1382104#\r\n\r\n";
		weapon += "#L1402095##e#b#i1402095#   #z1402095#\r\n\r\n";
		weapon += "#L1412065##e#b#i1412065#   #z1412065#\r\n\r\n";
		weapon += "#L1422066##e#b#i1422066#   #z1422066#\r\n\r\n";
		weapon += "#L1432086##e#b#i1432086#   #z1432086#\r\n\r\n";
		weapon += "#L1442116##e#b#i1442116#   #z1442116#\r\n\r\n";
		weapon += "#L1452111##e#b#i1452111#   #z1452111#\r\n\r\n";
		weapon += "#L1462099##e#b#i1462099#   #z1462099#\r\n\r\n";
		weapon += "#L1472122##e#b#i1472122#   #z1472122#\r\n\r\n";
		weapon += "#L1482084##e#b#i1482084#   #z1482084#\r\n\r\n";
		weapon += "#L1492085##e#b#i1492085#   #z1492085#\r\n\r\n";
		weapon += "#L1522018##e#b#i1522018#   #z1522018#\r\n\r\n";
		weapon += "#L1532018##e#b#i1532018#   #z1532018#\r\n\r\n";
		cm.sendSimple(weapon);
		} else if (selection == 1) {
		var cloth = "#e#b여제템 방어구상점#n#k에 오신 것을 #e#b환영#n#k합니다.\r\n\r\n원하는 #e#b방어구#n#k를 #e#b선택#n#k하세요.\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<한벌옷>#k#n\r\n";
		cloth += "#L1052314##e#b#i1052314#   #z1052314#\r\n\r\n";
		cloth += "#L1052315##e#b#i1052315#   #z1052315#\r\n\r\n";
		cloth += "#L1052316##e#b#i1052316#   #z1052316#\r\n\r\n";
		cloth += "#L1052317##e#b#i1052317#   #z1052317#\r\n\r\n";
		cloth += "#L1052318##e#b#i1052318#   #z1052318##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<모자>#k#n\r\n";
		cloth += "#L1003172##e#b#i1003172#   #z1003172#\r\n\r\n";
		cloth += "#L1003173##e#b#i1003173#   #z1003173#\r\n\r\n";
		cloth += "#L1003174##e#b#i1003174#   #z1003174#\r\n\r\n";
		cloth += "#L1003175##e#b#i1003175#   #z1003175#\r\n\r\n";
		cloth += "#L1003176##e#b#i1003176#   #z1003176##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<망토>#k#n\r\n";
		cloth += "#L1102275##e#b#i1102275#   #z1102275#\r\n\r\n";
		cloth += "#L1102276##e#b#i1102276#   #z1102276#\r\n\r\n";
		cloth += "#L1102277##e#b#i1102277#   #z1102277#\r\n\r\n";
		cloth += "#L1102278##e#b#i1102278#   #z1102278#\r\n\r\n";
		cloth += "#L1102279##e#b#i1102279#   #z1102279##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<장갑>#k#n\r\n";
		cloth += "#L1082295##e#b#i1082295#   #z1082295#\r\n\r\n";
		cloth += "#L1082296##e#b#i1082296#   #z1082296#\r\n\r\n";
		cloth += "#L1082297##e#b#i1082297#   #z1082297#\r\n\r\n";
		cloth += "#L1082298##e#b#i1082298#   #z1082298#\r\n\r\n";
		cloth += "#L1082299##e#b#i1082299#   #z1082299##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<신발>#k#n\r\n";		
		cloth += "#L1072485##e#b#i1072485#   #z1072485#\r\n\r\n";
		cloth += "#L1072486##e#b#i1072486#   #z1072486#\r\n\r\n";
		cloth += "#L1072487##e#b#i1072487#   #z1072487#\r\n\r\n";
		cloth += "#L1072488##e#b#i1072488#   #z1072488#\r\n\r\n";
		cloth += "#L1072489##e#b#i1072489#   #z1072489##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<어깨장식>#k#n\r\n";
		cloth += "#L1152108##e#b#i1152108#   #z1152108#\r\n\r\n";
		cloth += "#L1152110##e#b#i1152110#   #z1152110#\r\n\r\n";
		cloth += "#L1152111##e#b#i1152111#   #z1152111#\r\n\r\n";
		cloth += "#L1152112##e#b#i1152112#   #z1152112#\r\n\r\n";
		cloth += "#L1152113##e#b#i1152113#   #z1152113#\r\n\r\n";
		cm.sendSimple(cloth);
		} 
	} if (status == 2) {
		if (cm.canHold(selection)) {
			if (selection > 1200000 && cm.getPlayer().getMeso() >= 1000000) {
			cm.gainMeso(-1000000);
			cm.gainItem(selection, 1);
			cm.sendOk("#e#b#i"+selection+"#   #z"+selection+"##n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
			cm.dispose();
			} else if (selection < 1200000 && cm.getPlayer().getMeso() >= 1000000) {
			cm.gainMeso(-1000000);
			cm.gainItem(selection, 1);
			cm.sendOk("#e#b#i"+selection+"#   #z"+selection+"##n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
			cm.dispose();
			} else {
			cm.sendOk("#e#b메소#n#k가 #e#r부족#n#k하지 않은지 #e#b확인#n#k해 주세요.");
			cm.dispose();
			}
		} else {
			cm.sendOk("#e#r장비아이템#n#k 창이 꽉 찬 것이 아닌지 #e#b확인#n#k해 주세요.");
			cm.dispose();
		}
	}
}