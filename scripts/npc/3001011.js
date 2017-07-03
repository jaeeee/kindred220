


/*

무기강화 스크립트
copyright.c class_adm@nate.com


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
        cm.sendSimple("#r강화시스템#k은 무기를 강화할 수 시스템이야.\r\n필요한 아이템은 #i4001109#야.\r\n #r#e아맞다! #i4001163#이게있으면 무기가 터지는걸 막을수있어!\r\n하지만, 저것을 얻을려면 환포상점과 보스레이드를 해야해.#k\r\n\r\n#L0#강화시스템 이용하기#l");
    } else if (status == 1) {
	cm.sendSimple("강화를 하고싶은 무기를 골라봐!\r\n" + cm.getWeaponEquip());
    } else if (status == 2) {
        se = cm.getEquip(selection);
        cm.sendYesNo("니가 선택한 아이템이 정말 아래와 같은지 확인해봐 정말로 할꺼야?\r\n#b#i" + se.getItemId() + "#");  
    } else if (status == 3) {
	cm.soonsak(se);
    }
}
