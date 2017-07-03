


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Aeos Development Source Script

	노무현 에 의해 만들어 졌습니다.

	엔피시아이디 : 10204

	엔피시 이름 : 카이린

	엔피시가 있는 맵 :  :  (680000000)

	엔피시 설명 : 해적 전직관


*/

var status = -1;
var se;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendSimple("#r속성시스템#k은 무기에 속성을 바를 수 있는 시스템이야.\r\n속성은 #b빙결,스턴,즉사,봉인,슬로우,독#k 총 6가지가 있어.\r\n속성 시스템을 이용료는 #b100만메소#k 필요한 아이템은 #i4001163#야.\r\n\r\n#L0#속성시스템 이용하기#l");
    } else if (status == 1) {
	cm.sendSimple("속성을 넣고싶은 무기를 골라봐!" + cm.getWeaponEquip());
    } else if (status == 2) {
        se = cm.getEquip(selection);
        cm.sendYesNo("니가 선택한 아이템이 정말 아래와 같은지 확인해봐 정말로 할꺼야?\r\n#b#i" + se.getItemId() + "#");  
    } else if (status == 3) {
	cm.kanghwa(se);
    }
}
