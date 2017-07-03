
function start() {
 if (true) {
var chat = "#fn나눔고딕##fs20##e#r어떤 고급 상점 를 이용하시겠습니까?#n#k#fs15##k#n";
	    //chat += "#L4##b고지를 향해서#k#e#r(난이도:★★★☆☆)#k#n\r\n";
            chat += "#fs18#\r\n\r\n#e#r◎ 파프니르 상점#n#k#fs15#";
chat += "\r\n#L10##e#b[고급]#k#r #d파프니르 무기#k#n";
chat += "\r\n#L18##e#b[고급]#k#d #d파프니르 방어구#k#n";
chat += "#fs18#\r\n\r\n#e#r◎ 앱솔랩스 상점#n#k\r\n#fs15#";
chat += "\r\n#L5447##e#b[고급]#k #d앱솔랩스 무기 #n";
chat += "\r\n#L8410##e#b[고급]#k #d앱솔랩스 방어구#n";
chat += "#fs18#\r\n\r\n#e#r◎ 타일런트 상점#n#k\r\n#fs15";
chat += "\r\n#L6969##e#b[고급]#k #d각종 타일런트 < 셋트 >#n";

   	    cm.sendSimple(chat);
}
}
function action(mode, type, selection) {
cm.dispose();
        if (selection == 0) {
	cm.warp(280020000,0);
	cm.dispose();
	 } else if (selection == 1) {
	cm.warp(200080101,0);
	cm.dispose();
        } else if (selection == 2) {
	cm.warp(910130000,0);
	cm.dispose();
} else if (selection == 9) {
	cm.warp(301050300,0);
	cm.dispose();
 } else if (selection == 8) {
	cm.warp(123456789,0);
	cm.dispose();
	} else if (selection == 3) {
        cm.warp(910530000,0);
        cm.dispose();
} else if (selection == 7) {
        cm.warp(511000000);
        cm.dispose();
        } else if (selection == 4) {
        cm.warp(109040000,0);
        cm.dispose();
} else if (selection == 18) {
        	    cm.openNpc(1012111);
 } else if (selection == 10) {
        	    cm.openNpc(2040028);
} else if (selection == 5447) {
        	    cm.openNpc(1061006);
} else if (selection == 8410) {
        	    cm.openNpc(2002001);
} else if (selection == 6969) {
        	    cm.openNpc(1022000);
 } else if (selection == 11) {
        cm.warp(914100000,0);
        cm.dispose();
         } else if (selection == 18) {
        cm.warp(992000000,0);
        cm.dispose();
 } else if (selection == 21) {
        cm.warp(910002020,0);
        cm.getPlayer().Message(1, "★:::퀘스트 맵에 오신것을 환영합니다! 젠 엔피시를 클릭해주세요:::★");
        cm.dispose();
 } else if (selection == 15) {
        cm.warp(922030100,0);
        cm.getPlayer().Message(1, "★:::퀘스트 맵에 오신것을 환영합니다! 자하라 엔피시를 클릭해주세요:::★");
        cm.dispose();
         } else if (selection == 78) {
        cm.warp(109090000,0);
        cm.dispose();
 } else if (selection == 17) {
        cm.warp(951000000,0);
        cm.dispose();
         } else if (selection == 80) {
        cm.warp(910044000,0);
        cm.dispose();
 } else if (selection == 50) {
        	    cm.openNpc(9001009);
} else if (selection == 500) {
        	    cm.openNpc(1081001);
 } else if (selection == 14) {
        cm.warp(951000100,0);
        cm.getPlayer().Message(1, "★:::나갈 때는 @헤네시스로 나가주세요~:::★");
        cm.dispose();
        } else if (selection == 12) {
	cm.dispose();
	cm.openNpc(9010026);
	     } else if (selection == 77) {
if(cm.getPlayerCount(940020000) < 20) {
cm.warp(940020000);
cm.dispose();
} else {
cm.sendOk("최대 8명까지 입장할수 있습니다. 다른채널로 가시거나 기다려주시길바랍니다.");
}
	}
	}
    




