
function start() {
 if (true) {
            var chat = "#fn나눔고딕 ExtraBold##fs16##e#r유화온라인 컨텐츠 #n#k#fs15#";
chat += "\r\n#L10##e#b[보스레이드]#k#r #d무릉도장#k#n";
chat += "\r\n#L9##e#b[보스레이드]#k#r #d피라미드#k#n";
chat += "\r\n#L11##e#b[이동]#k#r #d스우해방#k#n";
chat += "\r\n#L18##e#b[던전]#k#d #d해저의탑[더시드]#k#n";
chat += "\r\n#L50##e#b[이동]#k #d베타#k#n";
chat += "\r\n#L77##e#b[PVP]#k #d디멘트 인베이드 입장 #n";
chat += "\r\n#L78##e#b[PVP]#k #d늑대와 양 술래잡기#n";
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
	cm.warp(926010000,0);
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
	 } else if (selection == 11) {
	cm.warp(310000004,0);
	cm.dispose();
        } else if (selection == 4) {
        cm.warp(109040000,0);
        cm.dispose();
 } else if (selection == 10) {
        cm.warp(925020001,0);
        cm.dispose();
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
        	    cm.openNpc(2411024);
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
    




