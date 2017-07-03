


/*

KMS 1.2.174 메이플스토리 프로젝트

*/


var status = -1;
var select = 0;
importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.hina.tools);

function start() {
	var time = new Date();
	var day = time.getDay();
	switch(day){
		case 0:
		var d = "일요일";
		break;
		case 1:
		var d = "월요일";
		break;
		case 2:
		var d = "화요일";
		break;
		case 3:
		var d = "수요일";
		break;
		case 4:
		var d = "목요일";
		break;
		case 5:
		var d = "금요일";
		break;
		case 6:
		var d = "토요일";
		break;
		default:
	}
		var month = time.getMonth();
		var date = time.getDate();
		var hour = time.getHours();
		if (hour <= 12){
			var ap = "am";
		}else{
			var ap = "pm";
			hour +- 12;
		}
		var min = time.getMinutes();
		var sec = time.getSeconds();
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
        cm.sendSimple("현재 #b페니르스토리#k에서 홍보 이벤트를 진행중입니다! 자세한 내용은 #r카페 홍보 이벤트 공지#k를 꼭 참고해주세요.\r\n\r\n#L0##b홍보 코인 상점\r\n#L1#레벨업 코인 상점#k\r\n\r\n\r\n#l홍보 코인 < #i4310057# #b#t4310057##k >\r\n레벨업 코인 < #i4310029# #b#t4310029##k >\r\n#l레벨업 코인 획득 레벨 < #e100,120,140,160,180,200#n >");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.dispose();
            cm.openShop(2510034);
        }
        if (select == 2) {
		cm.dispose();
		cm.enterCS();
        }
        if (select == 1) {
            cm.dispose();
            cm.openNpc(1512004);
        }
        if (select == 3) {
            cm.dispose();
            cm.openNpc(1012103);
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
        if (select == 11) {
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
    } else if (status == 2) {
        if (select == 1) {
            cm.gainItem(2430191, 1);
            cm.sendOk("아이템 지급이 완료되엇습니다.");
            cm.dispose();
        }
    }
}


