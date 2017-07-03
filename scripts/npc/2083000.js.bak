


/*

	히나 온라인 소스 팩의 스크립트 입니다.

        제작 : 티썬

	엔피시아이디 : 2083000
	
	엔피시 이름 : 결사대 암호석판

	엔피시가 있는 맵 : 동굴 입구

	엔피시 설명 : 명예 결사대원의 증표 체크 -> 입장
false

*/
importPackage(Packages.Dbg.community);

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
        if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티를 이루고 있지 않아 암호 석판을 읽을 수 없습니다.");
            cm.dispose();
            return;
        }
        if (!cm.haveItem(4001086, 1)) {
            cm.sendOk("암호석판을 읽어보려 하지만, 무슨 문자가 적혀있는지 알 수 없습니다. 혼테일 결사대원이라면 읽을 수 있을 것 같습니다.");
            cm.dispose();
            return;
        }
        cm.sendYesNo("암호석판이 빛나더니 석판 뒤로 문이 열렸습니다. 문을 이용해서 입장하시겠습니까?");
    } else if (status == 1) {
        cm.allPartyWarp(240050400,false);
        cm.dispose();
    }
}