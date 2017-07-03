


/*

KMS 1.2.174 메이플스토리 프로젝트

*/


var status = -1;
var select = 0;
importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.hina.tools);

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendSimple("일부 자동전직이 안되는 직업들의 전직을 담당하고있습니다.\r\n#L1##b제로 스킬 습득#k");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.dispose();
            cm.openNpc(9000127);
        }
        if (select == 2) {
            cm.dispose();
            cm.openNpc(9000223);
        }
        if (select == 1) {
            cm.dispose();
            cm.openNpc(2510004);
        }
        if (select == 3) {
            cm.dispose();
            cm.openNpc(9000220);
        }
        if (select == 4) {
            cm.dispose();
            cm.openNpc(9000185);
        }
        if (select == 5) {
            cm.dispose();
            cm.openNpc(2182002);
        }
        if (select == 6) {
            cm.dispose();
            cm.openNpc(9000095);
        }
        if (select == 7) {
            cm.dispose();
            cm.openNpc(9000178);
        }
        if (select == 8) {
            cm.dispose();
	    cm.openNpc(1012000);
        }
        if (select == 9) {
            cm.dispose();
	    cm.openNpc(9010046);
        }
        if (select == 10) {
            cm.dispose();
	    cm.openNpc(2010011);
        }
        if (select == 11) { // 창고
            cm.dispose();
	    cm.openNpc(1012009);
        }
        if (select == 12) {
            cm.dispose();
	    cm.openNpc(1012117);
        }
        if (select == 13) {
	    cm.dispose();
	    cm.openNpc(9000006);
        }
        if (select == 14) {
	    cm.dispose();
	    cm.openNpc(1002009);
        }
        if (select == 15) {
	    cm.dispose();
	    cm.openNpc(9072200);
        }
        if (select == 16) {
	    cm.dispose();
	    cm.openNpc(1012121);
        }
        if (select == 17) {
	    cm.dispose();
	    cm.openNpc(9000172);
        }
        if (select == 18) {
	    cm.dispose();
	    cm.openNpc(2084001);
        }
        if (select == 19) {
	    cm.dispose();
	    cm.warp(951000000);
        }
        if (select == 20) {
	    cm.dispose();
	    cm.openNpc(9000252);
        }
        if (select == 21) {
	    cm.dispose();
	    cm.openNpc(9072201);
        }
        if (select == 22) {
	    cm.dispose();
	    cm.openNpc(1082004);
        }
        if (select == 23) {
	    cm.dispose();
	    cm.openNpc(9000052);
        }
        if (select == 24) {
	    cm.dispose();
	    cm.openNpc(2220000);
        }
        if (select == 25) {
	    cm.dispose();
	    cm.openNpc(9000234);
        }
        if (select == 26) {
	    cm.dispose();
	    cm.openNpc(9000056);
        }
        if (select == 27) {
	    cm.dispose();
	    cm.openNpc(9000056);
        }
        if (select == 28) {
	    cm.dispose();
	    cm.openNpc(2007);
        }
        if (select == 29) {
	    cm.dispose();
	    cm.openNpc(3000143);
        }
        if (select == 30) {
	    cm.dispose();
	    cm.openNpc(9062003);
        }
        if (select == 31) {
	    cm.dispose();
	    cm.openNpc(9000013);
        }
        if (select == 32) {
	    cm.dispose();
	    cm.openNpc(2084001);
        }
        if (select == 33) {
	    cm.dispose();
	    cm.openNpc(1402202);
        }
        if (select == 34) {
	    cm.dispose();
	    cm.openNpc(2159475);
        }
        if (select == 35) {
	    cm.dispose();
	    cm.openNpc(1500028);
        }
        if (select == 36) {
	    cm.dispose();
	    cm.openNpc(2520014);
        }
        if (select == 37) {
	    cm.dispose();
	    cm.openNpc(2510004);
        }
    } else if (status == 2) {
        if (select == 1) {
            cm.gainItem(2430191, 1);
            cm.sendOk("아이템 지급이 완료되엇습니다.");
            cm.dispose();
        }
    }
}


