var normalprice = 0;
var planeallow = true;
var boatmap = 200090300;
var arrivemap = 250000100;
var planemap = 200110041;
var normaltime = 2 * 60;
var woodtime = 70;
var redtime = 30;
var arriveMap = "무릉 도원으로";


var status=0;
var select=-1;
function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode != 1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
	
if(cm.getMap().getId() == 200000141) {
        if (status == 0) {
		var msg = arriveMap+" 지금 출발합니다! 탑승하시겠습니까?#b\r\n\r\n#L0#"+arriveMap+" 가기 (-"+normalprice+"메소)#l\r\n";
		if (cm.getPlayer().getSkillLevel(80001027) > 0 && planeallow) {
			msg += "#L1#나무비행기 사용 (-3000메소)#l\r\n";
		}
		if (cm.getPlayer().getSkillLevel(80001028) > 0 && planeallow) {
			msg += "#L2#빨간비행기 사용 (-5000메소)#l\r\n";
		}
		cm.sendSimple(msg);
		
	} else if (status == 1) {
		select = selection;
		if (selection == 0)
			cm.sendYesNo("요금은 #b"+normalprice+" 메소#k고, 소요시간은 #b"+normaltime/60+"분#k 이에요. 지금 출발해 보시겠어요?");
		else if (selection == 1) {
			if(cm.getMeso() >= 3000) {
				cm.giveBuff(80001027,1);
				cm.TimeMoveMap(planemap, arrivemap, woodtime);
				cm.gainMeso(-3000);
				cm.dispose();
			} else {
				cm.sendOk("메소가 부족하신것 같은데요!");
				cm.dispose();
			}
		} else if (selection == 2) {
			if(cm.getMeso() >= 5000) {
				cm.giveBuff(80001028,1);
				cm.TimeMoveMap(planemap, arrivemap, redtime);
				cm.gainMeso(-5000);
				cm.dispose();
			} else {
				cm.sendOk("메소가 부족하신것 같은데요!");
				cm.dispose();
			}
		}

	} else if (status == 2) {
		if(cm.getMeso() >= normalprice) {
			cm.gainMeso(-normalprice);
			cm.TimeMoveMap(boatmap, arrivemap, normaltime);
			cm.dispose();
		} else {
			cm.sendOk("이봐이봐.. "+normalprice+" 메소는 제대로 갖고 있는거야?");
			cm.dispose();
		}
		
	}
} else if (cm.getMap().getId() == 250000100) {



normalprice = 0;
planeallow = true;
boatmap = 200090310;
arrivemap = 200000100;
planemap = 200110040;
normaltime = 2 * 60;
woodtime = 70;
redtime = 30;
arriveMap = "오르비스 정거장으로";





	if (status == 0) {
		var msg = arriveMap+" 지금 출발합니다! 탑승하시겠습니까?#b\r\n\r\n#L0#"+arriveMap+" 가기 (-"+normalprice+"메소)#l\r\n";
		if (cm.getPlayer().getSkillLevel(80001027) > 0 && planeallow) {
			msg += "#L1#나무비행기 사용 (-3000메소)#l\r\n";
		}
		if (cm.getPlayer().getSkillLevel(80001028) > 0 && planeallow) {
			msg += "#L2#빨간비행기 사용 (-5000메소)#l\r\n";
		}
			msg += "#L3#백초마을로 가기 (-1000메소)#l\r\n";
		cm.sendSimple(msg);
		
	} else if (status == 1) {
		select = selection;
		if (selection == 0)
			cm.sendYesNo("요금은 #b"+normalprice+" 메소#k고, 소요시간은 #b"+normaltime/60+"분#k 이에요. 지금 출발해 보시겠어요?");
		else if (selection == 1) {
			if(cm.getMeso() >= 3000) {
				cm.giveBuff(80001027,1);
				cm.TimeMoveMap(planemap, arrivemap, woodtime);
				cm.gainMeso(-3000);
				cm.dispose();
			} else {
				cm.sendOk("메소가 부족하신것 같은데요!");
				cm.dispose();
			}
		} else if (selection == 2) {
			if(cm.getMeso() >= 5000) {
				cm.giveBuff(80001028,1);
				cm.TimeMoveMap(planemap, arrivemap, redtime);
				cm.gainMeso(-5000);
				cm.dispose();
			} else {
				cm.sendOk("메소가 부족하신것 같은데요!");
				cm.dispose();
			}
		} else if (selection == 3) {
			if(cm.getMeso() >= 1000) {
				cm.warp(251000000,0);
				cm.gainMeso(-1000);
				cm.dispose();
			} else {
				cm.sendOk("메소가 부족하신것 같은데요!");
				cm.dispose();
			}
			
		}

	} else if (status == 2) {
		if(cm.getMeso() >= normalprice) {
			cm.gainMeso(-normalprice);
			cm.TimeMoveMap(boatmap, arrivemap, normaltime);
			cm.dispose();
		} else {
			cm.sendOk("이봐이봐.. "+normalprice+" 메소는 제대로 갖고 있는거야?");
			cm.dispose();
		}
		
	}
} else if (cm.getMap().getId() == 251000000) {
	if (status == 0) {
		cm.sendSimple("무릉도원으로 돌아가고 싶으세요?\r\n\r\n#b#L0#무릉도원으로 돌아가기(-2000메소)#l");
	} else if (status == 1) {
		cm.sendYesNo("메소는 2000메소가 필요합니다. 정말 무릉도원으로 돌아가시겠습니까?");
	} else if (status == 2) {
		if (cm.getPlayer().getMeso() >= 2000) {
			cm.warp(250000100,0);
			cm.dispose();
			cm.gainMeso(-2000);
		} else {
			cm.sendOk("메소가 부족하신 것 같은데요..");
			cm.dispose();
			return;
		}
	}



}


    }
}
	    
