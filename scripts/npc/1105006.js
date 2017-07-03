


/*

	코어온라인 소스 팩의 스크립트 입니다.

        제작 : 티썬

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 

	엔피시 설명 : 


*/


var status = -1;

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
                    cm.sendSimple("#bCore MS#l#kon #r[Manrep release]#l#kThe script in charge of the field.\r\n#e★★★ Let's take a manrep? !! ★★★#n \r\n\r\n#L0##r[Level: 200]#n #bManrep release#k\r\n\r\n\r\n#L1##r[Level: 120]#n #bCygnus manrep release");
        } else if (status == 1) {
            if (selection == 0) {
             cm.dispose();
             cm.openNpc(1402101);
           }else if (selection == 1) {
             cm.dispose();
             cm.openNpc(2159359);
    }
}
}