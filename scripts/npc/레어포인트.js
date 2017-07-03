/*

레어도 강화 스크립트
copyright.c rave_kyt@nate.com


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
        cm.sendSimple("#r레어 시스템#k은 무기의 레어옵션을 설정하는 시스템이야.\r\n필요한 레어포인트는 #r#e5000#n#k포인트야!\r\n\r\n#e현재나의 레어포인트 : #r"+cm.getPlayer().getRarePT()+"#n#k\r\n#e현재나의 등급 : "+cm.getPlayer().getRare()+"\r\n현재나의 경험치 : "+cm.getPlayer().getRareExp()+"\r\n#n#k\r\n#L0#레어 시스템 이용하기#l");
    } else if (status == 1) {
	cm.sendSimple("강화를 하고싶은 무기를 골라봐!" + cm.getAllEquip());
    } else if (status == 2) {
        se = cm.getEquip(selection);
        cm.sendYesNo("니가 선택한 아이템이 정말 아래와 같은지 확인해봐 정말로 할꺼야?\r\n#b#i" + se.getItemId() + "#");  
    } else if (status == 3) {
	cm.Rare(se);
    }
}
