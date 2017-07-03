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
		var shop = "#e#r<휴먼온라인> #e#b후원/홍보 상점#n#k에 오신 것을 #e#b환영#n#k합니다.\r\n\r\n\r\n#e#b#i4310034#   저스티스 코인#k#n으로 원하는 #e#b아이템#n#k을 #e#b구매#n#k하실 수 있습니다.\r\n\r\n\r\n";
		shop += "#L0##e#b파프니르 상점 (무기)\r\n";
		shop += "#L1##e#b루타비스 상점 (모자,상의,하의)\r\n";
		shop += "#L2##e#b타일런트 상점 (망토,장갑,신발,벨트)\r\n";
		cm.sendSimple(shop);
	}
	else if (status == 1) {
		if (selection == 0) { 
		var weapon = "#e#b파프니르 상점#n#k에 오신 것을 #e#b환영#n#k합니다.\r\n\r\n#e#b#i4310034#   저스티스 코인 #r30개#n#k로 원하는 #e#b무기#n#k를 #e#b선택#n#k하세요.\r\n\r\n\r\n";
		weapon += "#L1212063##e#b#i1212063#   #z1212063#\r\n\r\n";
		weapon += "#L1222058##e#b#i1222058#   #z1222058#\r\n\r\n";
		weapon += "#L1232057##e#b#i1232057#   #z1232057#\r\n\r\n";
		weapon += "#L1242060##e#b#i1242060#   #z1242060# (힘,민첩)\r\n\r\n";
		weapon += "#L1242061##e#b#i1242061#   #z1242061# (민첩,행운)\r\n\r\n";
		weapon += "#L1302275##e#b#i1302275#   #z1302275#\r\n\r\n";
		weapon += "#L1312153##e#b#i1312153#   #z1312153#\r\n\r\n";
		weapon += "#L1322203##e#b#i1322203#   #z1322203#\r\n\r\n";
		weapon += "#L1332225##e#b#i1332225#   #z1332225#\r\n\r\n";
		weapon += "#L1342082##e#b#i1342082#   #z1342082#\r\n\r\n";
		weapon += "#L1362090##e#b#i1362090#   #z1362090#\r\n\r\n";
		weapon += "#L1372177##e#b#i1372177#   #z1372177#\r\n\r\n";
		weapon += "#L1382208##e#b#i1382208#   #z1382208#\r\n\r\n";
		weapon += "#L1402196##e#b#i1402196#   #z1402196#\r\n\r\n";
		weapon += "#L1412135##e#b#i1412135#   #z1412135#\r\n\r\n";
		weapon += "#L1422140##e#b#i1422140#   #z1422140#\r\n\r\n";
		weapon += "#L1432167##e#b#i1432167#   #z1432167#\r\n\r\n";
		weapon += "#L1442223##e#b#i1442223#   #z1442223#\r\n\r\n";
		weapon += "#L1452205##e#b#i1452205#   #z1452205#\r\n\r\n";
		weapon += "#L1462193##e#b#i1462193#   #z1462193#\r\n\r\n";
		weapon += "#L1472214##e#b#i1472214#   #z1472214#\r\n\r\n";
		weapon += "#L1482168##e#b#i1482168#   #z1482168#\r\n\r\n";
		weapon += "#L1492179##e#b#i1492179#   #z1492179#\r\n\r\n";
		weapon += "#L1522094##e#b#i1522094#   #z1522094#\r\n\r\n";
		weapon += "#L1532098##e#b#i1532098#   #z1532098#\r\n\r\n";
		cm.sendSimple(weapon);
		} else if (selection == 1) {
		var cloth = "#e#b루타비스 상점#n#k에 오신 것을 #e#b환영#n#k합니다.\r\n\r\n#e#b#i4310034#   저스티스 코인 #r20개#n#k로 원하는 #e#b방어구#n#k를 #e#b선택#n#k하세요.\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<모자>#k#n\r\n";
		cloth += "#L1003797##e#b#i1003797#   #z1003797#\r\n\r\n";
		cloth += "#L1003798##e#b#i1003798#   #z1003798#\r\n\r\n";
		cloth += "#L1003799##e#b#i1003799#   #z1003799#\r\n\r\n";
		cloth += "#L1003800##e#b#i1003800#   #z1003800#\r\n\r\n";
		cloth += "#L1003801##e#b#i1003801#   #z1003801##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<상의>#k#n\r\n";
		cloth += "#L1042254##e#b#i1042254#   #z1042254#\r\n\r\n";
		cloth += "#L1042255##e#b#i1042255#   #z1042255#\r\n\r\n";
		cloth += "#L1042256##e#b#i1042256#   #z1042256#\r\n\r\n";
		cloth += "#L1042257##e#b#i1042257#   #z1042257#\r\n\r\n";
		cloth += "#L1042258##e#b#i1042258#   #z1042258##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<하의>#k#n\r\n";		
		cloth += "#L1062165##e#b#i1062165#   #z1062165#\r\n\r\n";
		cloth += "#L1062166##e#b#i1062166#   #z1062166#\r\n\r\n";
		cloth += "#L1062167##e#b#i1062167#   #z1062167#\r\n\r\n";
		cloth += "#L1062168##e#b#i1062168#   #z1062168#\r\n\r\n";
		cloth += "#L1062169##e#b#i1062169#   #z1062169#\r\n\r\n";
		cm.sendSimple(cloth);
		} else if (selection == 2) {
		var cloth = "#e#b타일런트 상점#n#k에 오신 것을 #e#b환영#n#k합니다.\r\n\r\n#e#b#i4310034#   저스티스 코인 #r20개#n#k로 원하는 #e#b방어구#n#k를 #e#b선택#n#k하세요.\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<망토>#k#n\r\n";
		cloth += "#L1102481##e#b#i1102481#   #z1102481#\r\n\r\n";
		cloth += "#L1102482##e#b#i1102482#   #z1102482#\r\n\r\n";
		cloth += "#L1102483##e#b#i1102483#   #z1102483#\r\n\r\n";
		cloth += "#L1102484##e#b#i1102484#   #z1102484#\r\n\r\n";
		cloth += "#L1102485##e#b#i1102485#   #z1102485##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<장갑>#k#n\r\n";
		cloth += "#L1082543##e#b#i1082543#   #z1082543#\r\n\r\n";
		cloth += "#L1082544##e#b#i1082544#   #z1082544#\r\n\r\n";
		cloth += "#L1082545##e#b#i1082545#   #z1082545#\r\n\r\n";
		cloth += "#L1082546##e#b#i1082546#   #z1082546#\r\n\r\n";
		cloth += "#L1082547##e#b#i1082547#   #z1082547##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<신발>#k#n\r\n";		
		cloth += "#L1072743##e#b#i1072743#   #z1072743#\r\n\r\n";
		cloth += "#L1072744##e#b#i1072744#   #z1072744#\r\n\r\n";
		cloth += "#L1072745##e#b#i1072745#   #z1072745#\r\n\r\n";
		cloth += "#L1072746##e#b#i1072746#   #z1072746#\r\n\r\n";
		cloth += "#L1072747##e#b#i1072747#   #z1072747##l\r\n\r\n\r\n\r\n\r\n   ";
		cloth += "#e#r<벨트>#k#n\r\n";
		cloth += "#L1132174##e#b#i1132174#   #z1132174#\r\n\r\n";
		cloth += "#L1132175##e#b#i1132175#   #z1132175#\r\n\r\n";
		cloth += "#L1132176##e#b#i1132176#   #z1132176#\r\n\r\n";
		cloth += "#L1132177##e#b#i1132177#   #z1132177#\r\n\r\n";
		cloth += "#L1132178##e#b#i1132178#   #z1132178#\r\n\r\n";
		cm.sendSimple(cloth);
		} 
	} if (status == 2) {
		if (cm.canHold(selection)) {
			if (selection > 1200000 && cm.haveItem(4310034, 30)) {
			cm.gainItem(4310034, -30);
			cm.gainItem(selection, 1);
			cm.sendOk("#e#b#i"+selection+"#   #z"+selection+"##n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
			cm.dispose();
			} else if (selection < 1200000 && cm.haveItem(4310034, 20)) {
			cm.gainItem(4310034, -20);
			cm.gainItem(selection, 1);
			cm.sendOk("#e#b#i"+selection+"#   #z"+selection+"##n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
			cm.dispose();
			} else {
			cm.sendOk("#e#b#i4310034#   저스티스 코인#n#k이 #e#r부족#n#k하지 않은지 #e#b확인#n#k해주세요.");
			cm.dispose();
			}
		} else {
			cm.sendOk("#e#r장비아이템#n#k 창이 꽉 찬 것이 아닌지 #e#b확인#n#k해 주세요.");
			cm.dispose();
		}
	}
}