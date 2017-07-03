var status = -1;

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
    if (mode == 2) {
        status++;  
    }

	if (status == 0) {

		cm.sendSpirit("으아앙 큰일났네\r\n내가 잠깐 잠든 사이에 나의 파트너인 #b베타#k가 납치되어 버렸어!!\r\n#r#L0#대화를 그만한다#l  #L1#라즐리를 도와준다#l ",true,0);

	} else if (status == 1) {
		if (selection == 0) {
			cm.sendSpirit("\r\n도와줄수 없다면 어쩔수없지...\r\n아쉽지만 다른 사람을 알아보도록 할게..",false,0);
			cm.dispose();
		} else if (selection == 1) {
			cm.sendSpirit("희미하게 나마 #b베타#k의 기운이 느껴지고 있어 너만 허락한다면 \r\n지금바로 #b베타#k가 있는곳으로 워프 시켜주도록 할게!!\r\n#r#L0#지금바로 이동한다#l  #L1#잠시뒤에 이동한다#l",true,0);
		}
	} else if (status == 2) {
		if (selection == 0) {
			var error = "";
			if (cm.getPlayerCount(910141101) > 3) {
				error = "이미 다른 누군가가 #b베타#k를 구하러 간거같아."
			} else if (cm.getPlayer().getLevel() < 100) {
				error = "100레벨 이상부터 워프가 가능해";
			}
			if (error != "") {
				cm.sendSpirit("\r\n" + error,false,0);
				cm.dispose();
				return;
			}
			if (!cm.BossCheck1("Beta",3)) {
				cm.sendSpirit("파티원중 하루입장 제한횟수를 초과한사람이 있어, 참고로 하루 입장은 3번까지 가능해",false,0);
				cm.dispose();
				return;
			}
			cm.BossAdd1("Beta");
			cm.resetMap(910141101);
			cm.warp(910141101);
			cm.베타구출();
			cm.dispose();
	
		}
	}
}