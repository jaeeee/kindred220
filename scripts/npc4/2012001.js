var status;
var boatevent = "Boats";
var planeallow = true;
var btf = 200000112;
var select;
var woodtime = 8 * 60;
var redtime = 6 * 60;
var arrivemap = 104020110;
var planemap = 200110001;

function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode <= 0)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var msg = "빅토리아 아일랜드로 가시고 싶으십니까?\r\n\r\n#b#L0#빅토리아 아일랜드로 가는 배 탑승#l\r\n";
		if (cm.getPlayer().getSkillLevel(80001027) > 0 && planeallow) {
			msg += "#L1#나무비행기 사용 (-3000메소)#l\r\n";
		}
		if (cm.getPlayer().getSkillLevel(80001028) > 0 && planeallow) {
			msg += "#L2#빨간비행기 사용 (-5000메소)#l\r\n";
		}
		cm.sendSimple(msg);
	
	
	}

	else if (status == 1) {
	select = selection;
	if (select == 0) {
		var em = cm.getEventManager(boatevent);
        	if (em.getProperty("entry").equals("true")) {

            		cm.sendYesNo("아직 배에 탑승할 여유가 있다고 합니다. 빅토리아 아일랜드로 가는 배에 탑승하시겠습니까?");

		}
        	else if (em.getProperty("docked").equals("true")){
            		cm.sendOk("이미 배가 출발 준비중에 있습니다. 출발시간 1분 전까지 입장이 가능합니다. 죄송하지만 다음 배를 기다려 주시기 바랍니다.");
            		cm.dispose();
        	}
        	else {
            		cm.sendOk("이미 배가 출발해서 빅토리아 아일랜드로 비행중입니다. 매 15분마다 배가 도착하니 조금만 기다려 주시기 바랍니다.");
            		cm.dispose();
        	}
		
	} else if (selection == 1) {
			if(cm.getMeso() >= 3000) {
				cm.giveBuff(80001027, 1);
				cm.TimeMoveMap(planemap, arrivemap, woodtime);
                                cm.gainMeso(-3000);
                                cm.dispose();
			} else {
				cm.sendOk("메소가 부족하신것 같은데요!");
				cm.dispose();
			}
		} else if (selection == 2) {
			if(cm.getMeso() >= 5000) {
				cm.giveBuff(80001028, 1);
				cm.TimeMoveMap(planemap, arrivemap, redtime);
                                cm.gainMeso(-5000);
                                cm.dispose();
			} else {
				cm.sendOk("메소가 부족하신것 같은데요!");
				cm.dispose();
			}
		}



	} else if (status == 2) {
		cm.warp(btf,0);
		cm.dispose();
	}
    }
}