

/*
    CelphisMs NPC 파일
*/


var status = 0;
var selected = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
 cm.dispose();
 return;
    }
    if (mode == 1)
 status++;
    else
 status--;
	if (status == 0) {
		if (cm.getPlayer().getMapId() != 910044000) {
			cm.warp(910044000);
			cm.dispose();
		//} else if (cm.getPlayer().hasGmLevel(6)) {
                } else {
		cm.sendSimple("#b#L0#난투장에 입장하겠습니다.#l\r\n");
		}
   	} else if (status == 1) {
		selected = selection;
		if (selection == 0) {
			cm.sendYesNo("난투장는 최소 3명이상이 필요합니다. 난투장은 스킬을 이용하여 상대방을 죽이면 pvp포인트가 증가합니다. 입장하시겠습니까?");
		}
	} else if (status == 2) {
		if (selected == 0) {
			if (cm.getMap().getCharactersSize() >= 3) {
				if (cm.getPlayerCount(130000101) > 0) {
					cm.sendOk("전투가 끝날 때 까지 기다려주세요.");
				} else {
					cm.InterPVP();
				}
			} else {
				cm.sendOk("3명이상이 되야 합니다.");
			}
		cm.dispose();
	}
 }
}


