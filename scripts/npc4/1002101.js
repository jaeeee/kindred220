var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	var chat = "#b환생은 최대 3번까지 진행이 가능합니다.#k\r\n\r\n#r1번째보상 = 인기도200, Ap150\r\n2번째보상 = 인기도300, Ap300\r\n3번째보상 = 인기도500, Ap450#k\r\n\r\n#b변생은 인기도 1000때 1번만 가능합니다.";
		chat += "\r\n#L1#환생을 하겠습니다.";
		chat += "\r\n#L2#변생을 하겠습니다.";
	cm.sendSimple(chat);

} if (selection == 1) {
	if (cm.getPlayerStat("LVL") == 200 && cm.getPlayer().getFame() == 0) {
	cm.getPlayer().setLevel(10);
	cm.getPlayer().gainAp(150);
	cm.getPlayer().addFame(200);
	cm.fakeRelog();
	cm.updateChar();
	cm.sendOk("#b첫번째 환생이 완료 되었습니다.");
	cm.dispose();
	} else {
		if (cm.getPlayerStat("LVL") == 200 && cm.getPlayer().getFame() == 200) {
		cm.getPlayer().setLevel(10);
		cm.getPlayer().gainAp(300);
		cm.getPlayer().addFame(300);
		cm.fakeRelog();
		cm.updateChar();
		cm.sendOk("#b두번째 환생이 완료 되었습니다.");
		cm.dispose();

	} else {
		if (cm.getPlayerStat("LVL") == 200 && cm.getPlayer().getFame() == 500) {
		cm.getPlayer().setLevel(10);
		cm.getPlayer().gainAp(450);
		cm.getPlayer().addFame(500);
		cm.fakeRelog();
		cm.updateChar();
		cm.sendOk("#b세번째 환생이 완료 되었습니다.");
		cm.dispose();

	} else {
		if (cm.getPlayerStat("LVL") <= 199) {
	   	cm.sendOk("#b레벨 200이 안되셨군요? 레벨 200이 되신 후 다시 찾아주세요.");
		cm.dispose();

	} else {
		if (cm.getPlayer().getFame() >= 501) {
	   	cm.sendOk("\r\n#b이미 총 3번의 환생을 진행하셨습니다.\r\n더 이상 환생을 하실 수 없습니다.");
		cm.dispose();	
						}
					}
				}
			}
		}
	}
}
if (status == 1) {
} if (selection == 2) {
	if (cm.getPlayerStat("LVL") == 200 && cm.getPlayer().getFame() == 1000) {
	cm.getPlayer().setLevel(10);
	cm.getPlayer().skillReset();
	cm.changeJob(0);
	cm.getPlayer().addFame(1);
	cm.fakeRelog();
	cm.updateChar();
	cm.sendOk("\r\n#b변생이 완료 되었습니다.\r\n변생은 딱 1번만 가능합니다.");
	cm.dispose();
	} else {
		if (cm.getPlayer().getFame() >= 1001) {
		cm.sendOk("\r\n#b이미 변생을 하셨군요?\r\n변생은 딱 1번만 가능합니다.");
		cm.dispose();
	} else {
		if (cm.getPlayerStat("LVL") <= 199) {
	   	cm.sendOk("#b레벨 200이 안되셨군요? 레벨 200이 되신 후 다시 찾아주세요.");
		cm.dispose();
	} else {
		if (cm.getPlayer().getFame() <= 999) {
	   	cm.sendOk("#b인기도가 부족하시군요? 3번의 환생을 하시고 다시 찾아주세요.");
		cm.dispose();


					}
				}
			}
		}
	}
}
