var normalprice = 800;
var planeallow = false;
var boatmap = 200090030;
var arrivemap = 130000210;
var planemap = 0;
var normaltime = 3 * 60;
var woodtime = 3 * 60;
var redtime = 1 * 60;
var arriveMap = "에레브로";


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
				cm.gainMeso(-3000);
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


    }
}
	    
