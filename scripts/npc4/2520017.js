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
		var shop = "#L0##i1312199# �ۼַ��� ����\r\n";
		shop += "#L1##i1004422# �ۼַ��� ��\r\n";
		cm.sendSimple(shop);
	}
	else if (status == 1) {
		if (selection == 0) { 
			var item = "   #e#b�ۼַ��� �������#n#k�� ���� ���� #e#bȯ��#n#k�մϴ�.\r\n\r\n#e#b   500�� �޼ҷ�#k ���ϴ� #e#b����#n#k�� #e#b����#n#k�ϼ���.\r\n\r\n\r\n";
			item += "#L1212115##e#b#i1212115#   #z1212115# (���̴� �ε�)\r\n\r\n";
			item += "#L1222109##e#b#i1222109#   #z1222109# (�ҿ� ����)\r\n\r\n";
			item += "#L1232109##e#b#i1232109#   #z1232109# (�������)\r\n\r\n";
			item += "#L1242116##e#b#i1242116#   #z1242116# (�������ҵ�)\r\n\r\n";
			item += "#L1302333##e#b#i1302333#   #z1302333# (�Ѽհ�)\r\n\r\n";
			item += "#L1312199##e#b#i1312199#   #z1312199# (�Ѽյ���)\r\n\r\n";
			item += "#L1322250##e#b#i1322250#   #z1322250# (�Ѽյб�)\r\n\r\n";
			item += "#L1332274##e#b#i1332274#   #z1332274# (�ܰ�)\r\n\r\n";
			item += "#L1342101##e#b#i1342101#   #z1342101# (���̵�)\r\n\r\n";
			item += "#L1362135##e#b#i1362135#   #z1362135# (����)\r\n\r\n";
			item += "#L1372222##e#b#i1372222#   #z1372222# (�ϵ�)\r\n\r\n";
			item += "#L1382259##e#b#i1382259#   #z1382259# (������)\r\n\r\n";
			item += "#L1402251##e#b#i1402251#   #z1402251# (�μհ�)\r\n\r\n";
			item += "#L1412177##e#b#i1412177#   #z1412177# (�μյ���)\r\n\r\n";
			item += "#L1422184##e#b#i1422184#   #z1422184# (�μյб�)\r\n\r\n";
			item += "#L1432214##e#b#i1432214#   #z1432214# (â)\r\n\r\n";
			item += "#L1442268##e#b#i1442268#   #z1442268# (����)\r\n\r\n";
			item += "#L1452252##e#b#i1452252#   #z1452252# (Ȱ)\r\n\r\n";
			item += "#L1462239##e#b#i1462239#   #z1462239# (����)\r\n\r\n";
			item += "#L1472261##e#b#i1472261#   #z1472261# (�ƴ�)\r\n\r\n";
			item += "#L1482216##e#b#i1482216#   #z1482216# (��Ŭ)\r\n\r\n";
			item += "#L1492231##e#b#i1492231#   #z1492231# (��)\r\n\r\n";
			item += "#L1522138##e#b#i1522138#   #z1522138# (��� �����)\r\n\r\n";
			item += "#L1532144##e#b#i1532144#   #z1532144# (�ڵ� ĳ��)\r\n\r\n";
			cm.sendSimple(item);
		} else if (selection == 1) {
			var item = "   #e#b�ۼַ��� ������#n#k�� ���� ���� #e#bȯ��#n#k�մϴ�.\r\n\r\n#e#b#i4310034# ����Ƽ�� ���� #r35��#n#k�� ���ϴ� #e#b��#n#k�� #e#b����#n#k�ϼ���.\r\n\r\n\r\n\r\n   ";
			item += "#e#r----------<����>----------#k#n\r\n";
			item += "#L1004422##e#b#i1004422#   #z1004422#\r\n\r\n";
			item += "#L1052882##e#b#i1052882#   #z1052882#\r\n\r\n";
			item += "#L1102775##e#b#i1102775#   #z1102775#\r\n\r\n";
			item += "#L1082636##e#b#i1082636#   #z1082636#\r\n\r\n";
			item += "#L1073030##e#b#i1073030#   #z1073030##l\r\n\r\n\r\n\r\n\r\n   ";
			item += "#e#r---------<������>---------#k#n\r\n";
			item += "#L1004423##e#b#i1004423#   #z1004423#\r\n\r\n";
			item += "#L1052887##e#b#i1052887#   #z1052887#\r\n\r\n";
			item += "#L1102794##e#b#i1102794#   #z1102794#\r\n\r\n";
			item += "#L1082637##e#b#i1082637#   #z1082637#\r\n\r\n";
			item += "#L1073032##e#b#i1073032#   #z1073032##l\r\n\r\n\r\n\r\n\r\n   ";
			item += "#e#r----------<�ü�>----------#k#n\r\n";
			item += "#L1004424##e#b#i1004424#   #z1004424#\r\n\r\n";
			item += "#L1052888##e#b#i1052888#   #z1052888#\r\n\r\n";
			item += "#L1102795##e#b#i1102795#   #z1102795#\r\n\r\n";
			item += "#L1082638##e#b#i1082638#   #z1082638#\r\n\r\n";
			item += "#L1073033##e#b#i1073033#   #z1073033##l\r\n\r\n\r\n\r\n\r\n   ";
			item += "#e#r----------<����>----------#k#n\r\n";
			item += "#L1004425##e#b#i1004425#   #z1004425#\r\n\r\n";
			item += "#L1052889##e#b#i1052889#   #z1052889#\r\n\r\n";
			item += "#L1102796##e#b#i1102796#   #z1102796#\r\n\r\n";
			item += "#L1082639##e#b#i1082639#   #z1082639#\r\n\r\n";
			item += "#L1073034##e#b#i1073034#   #z1073034##l\r\n\r\n\r\n\r\n\r\n   ";
			item += "#e#r----------<����>----------#k#n\r\n";
			item += "#L1004426##e#b#i1004426#   #z1004426#\r\n\r\n";		
			item += "#L1052890##e#b#i1052890#   #z1052890#\r\n\r\n";
			item += "#L1102797##e#b#i1102797#   #z1102797#\r\n\r\n";
			item += "#L1082640##e#b#i1082640#   #z1082640#\r\n\r\n";
			item += "#L1073035##e#b#i1073035#   #z1073035##l";
			cm.sendSimple(item);
		} 
	} if (status == 2) {
		if (cm.canHold(selection)) {
			if (selection > 1200000 && cm.haveMeso(5000000)) {
				cm.gainMeso(-5000000);
				cm.gainMeso(selection, 1);
				cm.sendOk("#e#b#i"+selection+"#   #z"+selection+"##n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			} else if (selection < 1200000 && cm.haveMeso(5000000)) {
				cm.gainMeso(-5000000);
				cm.gainMeso(selection, 1);
				cm.sendOk("#e#b#i"+selection+"#   #z"+selection+"##n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			} else {
				cm.sendOk("#e#b�޼Ұ� #e#r����#n#k���� ������ #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else {
			cm.sendOk("#e#r��������#n#k â�� �� �� ���� �ƴ��� #e#bȮ��#n#k�� �ּ���.");
			cm.dispose();
		}
	}
}