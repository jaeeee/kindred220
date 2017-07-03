/*
아야노(riel0216)
*/
var count;

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
	var sel = 0;
	       var leaf = cm.itemQuantity(4310063);
	       var quan = ((cm.itemQuantity(4310063) - (cm.itemQuantity(4310063) % 80)) / 80);
	       var chat = "#e#r원하시는 데미지스킨을 골라주세요.#k#n\r\n";
	       chat += "< 현재 #i4310063# 통합코인 갯수 #e:#n #r#e"+ leaf +" #n#k개 >#b"
	       chat += "\r\n#L1##i4310063# (1000개)  　  -　#i2431965#<-(미리보기용)";
	   //   chat += "\r\n#L2##i4310063# (1000개)  　  -　#i2431966#<-(미리보기용)";
	       chat += "\r\n#L3##i4310063# (1000개)  　  -　#i2431967#<-(미리보기용)";
	       chat += "\r\n#L4##i4310063# (1000개)  　  -　#i2432084#<-(미리보기용)";
	       chat += "\r\n#L5##i4310063# (1000개)  　  -　#i2432131#<-(미리보기용)";
	       chat += "\r\n#L6##i4310063# (1000개)  　  -　#i2432153#<-(미리보기용)";
	       chat += "\r\n#L7##i4310063# (1000개)  　  -　#i2432154#<-(미리보기용)";
	       chat += "\r\n#L8##i4310063# (1000개)  　  -　#i2432207#<-(미리보기용)";
	       chat += "\r\n#L9##i4310063# (1000개)  　  -　#i2432354#<-(미리보기용)";
	       chat += "\r\n#L10##i4310063# (1000개)  　  -  #i2432355#<-(미리보기용)";
	       chat += "\r\n#L11##i4310063# (1000개)  　  -　#i2432465#<-(미리보기용)";
	       chat += "\r\n#L12##i4310063# (1000개)  　  -　#i2432479#<-(미리보기용)";
	       chat += "\r\n#L13##i4310063# (1000개)  　  -　#i2432526#<-(미리보기용)";
	       chat += "\r\n#L14##i4310063# (1000개)  　  -　#i2432532#<-(미리보기용)";
	       cm.sendSimple(chat);
	 if (status == 1) {
		cm.gainItem(4310063,1);
		cm.dispose();
	}


	    }  if (selection == 9999) {
		    cm.dispose();

	    }  if (selection == 1) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2431965)) {
		        cm.sendOk("통합코인으로 #e기본 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2431965, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 2) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2431966)) {
		        cm.sendOk("통합코인 으로 #e디지털라이즈 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4031311, -1000);
			cm.gainItem(2431966, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}	
	    }  if (selection == 3) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2431967)) {
		        cm.sendOk("통합코인으로 #e크리티아스 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2431967, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}	
	    }  if (selection == 4) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432084)) {
		        cm.sendOk("통합코인 으로 #e디지털라이즈 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432084, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 5) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432131)) {
		        cm.sendOk("통합코인 으로 #e파티 퀘스트 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432131, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 6) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432153)) {
		        cm.sendOk("통합코인 으로 #e임팩티브 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432153, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 7) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432154)) {
		        cm.sendOk("통합코인 으로 #e달콤한 전통 한과 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432154, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 8) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432207)) {
		        cm.sendOk("통합코인 으로 #e클럽 헤네시스 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432207, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}	
	    }  if (selection == 9) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432354)) {
		        cm.sendOk("통합코인 으로 #e메리 크리스마스 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432354, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 10) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432355)) {
		        cm.sendOk("통합코인으로 #e눈 꽃송이 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432355, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 11) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432465)) {
		        cm.sendOk("통합코인 으로 #e알리샤의 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432465, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 12) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432479)) {
		        cm.sendOk("통합코인 으로 #e도로시의 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432479, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}	
	    }  if (selection == 13) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432526)) {
		        cm.sendOk("통합코인 으로 #e키보드 워리어 데미지 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432526, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();

}	
	    }  if (selection == 14) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432532)) {
		        cm.sendOk("통합코인 으로 #e살랑살랑 봄바람 데지미 스킨#n을 구매하였습니다.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432532, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("통합코인 이 부족합니다.");
		    cm.dispose();


}	
	
		
		

		}
	}
}



