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
		cm.sendSimple("#n\r\n#b                  타임온라인#l#k에 #r강화 시스템입니다.#k\r\n#r#L1#보석 장착 강화#k#l#b#L2#아이템 최대 강화#l#k#d#L0#아이템 속성 강화#l#k");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("#e현재 속성 강화 시스템은 준비중이며 옵션 최대 시스템과 보석 장착 시스템을 이용해주시길 바랍니다.#k");
      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(3000149);
	return;

      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(3001011);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(2150004);
	return;

		}
		cm.dispose();
	}
    
}
