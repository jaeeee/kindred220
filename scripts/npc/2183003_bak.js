importPackage(java.lang);
var status = 0;
var map = 951000000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status <= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) status++;
    else status--;
    if (status == 0) {
		if (cm.getDateKey("boss") == null) {
            cm.setDateKey("boss", "0");
	}
        cm.sendSimple("#e<아스완 : 아스완해방전> #n\r\n여전히 아스완 지역을 배회하고 있는 힐라의 잔당들을 소탕하시겠습니까?#b\r\n\r\n#L0#힐라의 잔당을 소탕한다.(하루횟수제한: 5회)#l\r\n#L1#힐라를 직접 처치한다. (레벨: 120이상)#l");
    } else if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayer().getParty() != null) {
				if (cm.isLeader()) {
					if (cm.getPlayer().getParty().getMembers().size() >= 1 && cm.getPartyLevel(40, 255)) {
		   if (Integer.parseInt(cm.getDateKey("boss")) < 5) {
		       cm.setDateKey("boss",(Integer.parseInt(cm.getDateKey("boss"))+1)+"");
							switch (selection) {
								case 0:
									map = 955000100;
									break;
							}
							if (cm.getPlayerCount(Integer.parseInt(map)) == 0 && cm.getPlayerCount(Integer.parseInt(map) + 100) == 0 && cm.getPlayerCount(Integer.parseInt(map) + 200) == 0) {
								map = Integer.parseInt(map);
								
								var em = cm.getEventManager("AswanOffSeason");
								var eim = em.readyInstance();
								for (var i = 0; i < 3; i++) {
									cm.prepareAswanMob(Integer.parseInt(map) + (i * 100), em);
								}
								eim.setProperty("Global_StartMap", map);
								eim.setProperty("Global_ExitMap", "262010000");
								eim.setProperty("Global_MinPerson", "1");
								eim.setProperty("Global_RewardMap", "262010000");
								eim.setProperty("CurrentStage", "1");
								eim.startEventTimer(1200000);
								eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
								cm.getDateKey("boss");
								cm.dispose();
								return true;
							} else {
								cm.sendOk("누군가 이미 아스완 해방전에 도전중입니다.");
								cm.dispose();
								return true;
							}
						} else {
							cm.sendOk("파티원중 오늘 도전가능한 횟수를 초과한 멤버가 있습니다.");
							cm.dispose();
							return;
						}
					} else {
						cm.sendOk("파티원 중 레벨이 맞지 않는 파티원이 있습니다.\r\n레벨40 이상 레벨200 미만의 파티원만 입장할 수 있습니다.");
						cm.dispose();
						return;
					}
				} else {
					cm.sendOk("입장하시려는 지역은 파티플레이 존입니다. #b파티장#k을 통해 입장을 진행하실 수 있습니다.");
					cm.dispose();
					return;
				}
			} else {
				cm.sendOk("파티를 맺어야만 입장하실 수 있습니다.");
				cm.dispose();
				return;
			}
		} else if (selection == 1) {
			cm.sendNext("힐라의 탑 입구로 보내드리겠습니다. 힐라를 꼭 물리쳐주세요.");
		}
    } else if (status == 2) {
		cm.warp(262030000, 0);
		cm.dispose();
		return;
	}
}