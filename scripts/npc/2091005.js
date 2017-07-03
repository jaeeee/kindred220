
/*
무릉도장 이동 스크립트
제작자 : 가군(qor6101@naver.com)

*/

var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
	cm.sendOk("훗! 잘 생각해보라고~~");
        cm.dispose();
        return;
    }
    if (mode == 1) 
	status++;
    else 
	status--;
    if (status == 0) {
	if (cm.getPlayer().getMapId() == 925060600) {
   	var dojo = "여기까지 무사히 잘왔다니 놀랍네. 하지만 앞으로는 쉽지 않을걸? 어디 계속 도전해 보겠어?\r\n#r[현재까지 경과 시간 : 리플레이(플레이영상)을 보고 판단바랍니다]";
    	dojo += "#b\r\n#L1#회복, 버프 효과를 받고 싶어.";
    	dojo += "#b\r\n#L2#계속 도전해볼게.";
    	dojo += "#b\r\n#L0#밖으로 나가겠어.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925061200) {
   	var dojo = "여기까지 무사히 잘왔다니 놀랍네. 하지만 앞으로는 쉽지 않을걸? 어디 계속 도전해 보겠어?\r\n#r[현재까지 경과 시간 : 리플레이(플레이영상)을 보고 판단바랍니다]";
    	dojo += "#b\r\n#L1#회복, 버프 효과를 받고 싶어.";
    	dojo += "#b\r\n#L2#계속 도전해볼게.";
    	dojo += "#b\r\n#L0#밖으로 나가겠어.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925061800) {
   	var dojo = "여기까지 무사히 잘왔다니 놀랍네. 하지만 앞으로는 쉽지 않을걸? 어디 계속 도전해 보겠어?\r\n#r[현재까지 경과 시간 : 리플레이(플레이영상)을 보고 판단바랍니다]";
    	dojo += "#b\r\n#L1#회복, 버프 효과를 받고 싶어.";
    	dojo += "#b\r\n#L2#계속 도전해볼게.";
    	dojo += "#b\r\n#L0#밖으로 나가겠어.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925062400) {
   	var dojo = "여기까지 무사히 잘왔다니 놀랍네. 하지만 앞으로는 쉽지 않을걸? 어디 계속 도전해 보겠어?\r\n#r[현재까지 경과 시간 : 리플레이(플레이영상)을 보고 판단바랍니다]";
    	dojo += "#b\r\n#L1#회복, 버프 효과를 받고 싶어.";
    	dojo += "#b\r\n#L2#계속 도전해볼게.";
    	dojo += "#b\r\n#L0#밖으로 나가겠어.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925063000) {
   	var dojo = "여기까지 무사히 잘왔다니 놀랍네. 하지만 앞으로는 쉽지 않을걸? 어디 계속 도전해 보겠어?\r\n#r[현재까지 경과 시간 : 리플레이(플레이영상)을 보고 판단바랍니다]";
    	dojo += "#b\r\n#L1#회복, 버프 효과를 받고 싶어.";
    	dojo += "#b\r\n#L2#계속 도전해볼게.";
    	dojo += "#b\r\n#L0#밖으로 나가겠어.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925063600) {
   	var dojo = "여기까지 무사히 잘왔다니 놀랍네. 하지만 앞으로는 쉽지 않을걸? 어디 계속 도전해 보겠어?\r\n#r[현재까지 경과 시간 : 리플레이(플레이영상)을 보고 판단바랍니다]";
    	dojo += "#b\r\n#L1#회복, 버프 효과를 받고 싶어.";
    	dojo += "#b\r\n#L2#계속 도전해볼게.";
    	dojo += "#b\r\n#L0#밖으로 나가겠어.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925064200) {
   	var dojo = "여기까지 무사히 잘왔다니 놀랍네. 하지만 앞으로는 쉽지 않을걸? 어디 계속 도전해 보겠어?\r\n#r[현재까지 경과 시간 : 리플레이(플레이영상)을 보고 판단바랍니다]";
    	dojo += "#b\r\n#L1#회복, 버프 효과를 받고 싶어.";
    	dojo += "#b\r\n#L2#계속 도전해볼게.";
    	dojo += "#b\r\n#L0#밖으로 나가겠어.";
	cm.sendSimple(dojo);
    } else {
	cm.sendYesNo("훗! 뭐야 벌써 포기하는거야? 그러니까 만용은 부리지 말라고 했잖아. 정말 포기하고 나가겠어?");
	select = 0;
	}
    } else if (status == 1) {
	if (selection == 0) {
		cm.sendYesNo("훗! 뭐야 벌써 포기하는거야? 그러니까 만용은 부리지 말라고 했잖아. 정말 포기하고 나가겠어?");
		select = 0;
	} else if (selection == 1) {
 		cm.sendYesNo("#b체력 / 마력 5000 회복#k 을 사용하면 패널티 5000캐쉬가 적용되는데, 괜찮겠어?");
		select = 1;
	} else if (selection == 2) {
    	if (cm.getPlayer().getMapId() == 925061200) {
		cm.warp(925061300, 0);
		cm.spawnMob(9305310, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925061800) {
		cm.warp(925061900, 0);
		cm.spawnMob(9305315, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925062400) {
		cm.warp(925062500, 0);
		cm.spawnMob(9305320, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925063000) {
		cm.warp(925063100, 0);
		cm.spawnMob(9305325, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925063600) {
		cm.warp(925063700, 0);
		cm.spawnMob(9305330, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925064200) {
		cm.warp(925064300, 0);
		cm.spawnMob(9305335, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925060600) {
		cm.warp(925060700, 0);
		cm.spawnMob(9305305, 141,7);
		cm.dispose();
	}
 	} else {
    	if (select == 0) { 
		cm.resetMap(925060100);
	    	cm.resetMap(925060200);
	    	cm.resetMap(925060300);
	    	cm.resetMap(925060400);
	    	cm.resetMap(925060500);
	    	cm.resetMap(925060600);
	    	cm.resetMap(925060700);
	    	cm.resetMap(925060800);
	    	cm.resetMap(925060900);
	    	cm.resetMap(925061000);
	    	cm.resetMap(925061100);
	    	cm.resetMap(925061200);
	    	cm.resetMap(925061300);
	    	cm.resetMap(925061400);
	    	cm.resetMap(925061500);
	    	cm.resetMap(925061600);
	    	cm.resetMap(925061700);
	    	cm.resetMap(925061800);
	    	cm.resetMap(925061900);
	    	cm.resetMap(925062000);
	    	cm.resetMap(925062100);
	    	cm.resetMap(925062200);
	    	cm.resetMap(925062300);
	    	cm.resetMap(925062400);
	    	cm.resetMap(925062500);
	    	cm.resetMap(925062600);
	    	cm.resetMap(925062700);
	    	cm.resetMap(925062800);
	    	cm.resetMap(925062900);
	    	cm.resetMap(925063000);
	    	cm.resetMap(925063100);
	    	cm.resetMap(925063200);
	    	cm.resetMap(925063300);
	    	cm.resetMap(925063400);
	    	cm.resetMap(925063500);
	    	cm.resetMap(925063600);
	    	cm.resetMap(925063700);
	    	cm.resetMap(925063800);
	    	cm.resetMap(925063900);
	    	cm.resetMap(925064000);
	    	cm.resetMap(925064100);
	    	cm.resetMap(925064200);
	    	cm.resetMap(925064300);
	    	cm.resetMap(925064400);
	    	cm.resetMap(925064500);
	    	cm.resetMap(925064600);
	    	cm.resetMap(925064700);
		cm.warp(925020002, 0);
		cm.playerMessage(5, "변덕이 죽 끓듯 하군.");
		cm.dispose();
		}
	}
    } else if (status == 2) {
    	if (select == 0) { 
	    	cm.resetMap(925060100);
	    	cm.resetMap(925060200);
	    	cm.resetMap(925060300);
	    	cm.resetMap(925060400);
	    	cm.resetMap(925060500);
	    	cm.resetMap(925060600);
	    	cm.resetMap(925060700);
	    	cm.resetMap(925060800);
	    	cm.resetMap(925060900);
	    	cm.resetMap(925061000);
	    	cm.resetMap(925061100);
	    	cm.resetMap(925061200);
	    	cm.resetMap(925061300);
	    	cm.resetMap(925061400);
	    	cm.resetMap(925061500);
	    	cm.resetMap(925061600);
	    	cm.resetMap(925061700);
	    	cm.resetMap(925061800);
	    	cm.resetMap(925061900);
	    	cm.resetMap(925062000);
	    	cm.resetMap(925062100);
	    	cm.resetMap(925062200);
	    	cm.resetMap(925062300);
	    	cm.resetMap(925062400);
	    	cm.resetMap(925062500);
	    	cm.resetMap(925062600);
	    	cm.resetMap(925062700);
	    	cm.resetMap(925062800);
	    	cm.resetMap(925062900);
	    	cm.resetMap(925063000);
	    	cm.resetMap(925063100);
	    	cm.resetMap(925063200);
	    	cm.resetMap(925063300);
	    	cm.resetMap(925063400);
	    	cm.resetMap(925063500);
	    	cm.resetMap(925063600);
	    	cm.resetMap(925063700);
	    	cm.resetMap(925063800);
	    	cm.resetMap(925063900);
	    	cm.resetMap(925064000);
	    	cm.resetMap(925064100);
	    	cm.resetMap(925064200);
	    	cm.resetMap(925064300);
	    	cm.resetMap(925064400);
	    	cm.resetMap(925064500);
	    	cm.resetMap(925064600);
	    	cm.resetMap(925064700);
		cm.warp(925020002, 0);
		cm.playerMessage(5, "변덕이 죽 끓듯 하군.");
		cm.dispose();
	} else if (select == 1) {
	    if(cm.getPlayer().getNX() >= 5000) {
                cm.getPlayer().addHP(5000);
                cm.getPlayer().addMP(5000);
                cm.gainNX (-5000);
		cm.playerMessage("<체력 / 마력 회복 5000 회복[5000 캐쉬]> 을 사용하며, 총 캐쉬 보유량이 5000 감소하였습니다.");
		cm.dispose();
	} else {
		cm.playerMessage("버프 사용에 필요한 캐쉬가 부족합니다.");
		cm.dispose();
				}
			}
		}
	}