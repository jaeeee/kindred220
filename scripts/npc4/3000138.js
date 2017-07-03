/*

엔젤릭 블레스, 버서크링, 도미네이트 목걸이 교환 스크립트.

 

투신의증표 20개 -> 엔젤릭 블레스 교환

투신의증표 50개 -> 버서커링 교환

투신의증표 120개 -> 도미네이트 목걸이 교환

 

* 이걸 응용하시면 더욱 더 다양한 아이템을 교환할 수 있습니다 'ㅁ' 



*/



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
            var chat = "단풍잎은 내가 전부 교환해주겠다..#b\r\n";
	    chat += "\r\n#L1##r단풍잎#k으로 메소 주화 교환하기.";
	    cm.sendSimple(chat);

} if (selection == 1) {
	       var chat = "#e참고로 교환한 주화는 일반상점에 팔면 해당 메소로 바꿀수잇다. #n\r\n";
	       chat += "\r\n#L400#[20개] 100만 메소 주화";
	       chat += "\r\n#L401#[150개]1000만 메소 주화";
	       chat += "\r\n#L402#[450개]3000만 메소 주화";
               chat += "\r\n#L403#[750개]5000만 메소 주화";
               chat += "\r\n#L404#[1500개]1억 메소 주화";
               chat += "\r\n#L405#[2850개]2억 메소 주화";
	       cm.sendSimple(chat);


	    }  if (selection == 400) {
		if (cm.haveItem(4001126,20)) {
		    if (cm.canHold(4001550)) {
			cm.gainItem(4001126, -20);
			cm.gainItem(4001550, 1);
		        cm.sendOk("교환완료");
			cm.dispose();
		    } else {
		        cm.sendOk("기타창에 빈 공간이 있는지 다시 한번 확인해 주게나!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.");
		    cm.dispose();

}

	    }  if (selection == 401) {
		if (cm.haveItem(4001126,150)) {
		    if (cm.canHold(4001208)) {
			cm.gainItem(4001126, -150);
			cm.gainItem(4001208, 1);
		        cm.sendOk("교환완료");
			cm.dispose();
		    } else {
		        cm.sendOk("기타창에 빈 공간이 있는지 다시 한번 확인해 주게나!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.");
		    cm.dispose();

}

	    }  if (selection == 402) {
		if (cm.haveItem(4001126,450)) {
		    if (cm.canHold(4001209)) {
			cm.gainItem(4001126, -450);
			cm.gainItem(4001209, 1);
		        cm.sendOk("교환완료");
			cm.dispose();
		    } else {
		        cm.sendOk("기타창에 빈 공간이 있는지 다시 한번 확인해 주게나!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.");
		    cm.dispose();

}

            }  if (selection == 403) {
		if (cm.haveItem(4001210,750)) {
		    if (cm.canHold(1052461)) {
			cm.gainItem(4001126, -750);
			cm.gainItem(4001210, 1);
		        cm.sendOk("교환완료");
			cm.dispose();
		    } else {
		        cm.sendOk("기타창에 빈 공간이 있는지 다시 한번 확인해 주게나!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.");
		    cm.dispose();

}

            }  if (selection == 404) {
		if (cm.haveItem(4001126,1500)) {
		    if (cm.canHold(4001211)) {
			cm.gainItem(4001126, -1500);
			cm.gainItem(4001211, 1);
		        cm.sendOk("교환완료");
			cm.dispose();
		    } else {
		        cm.sendOk("기타창에 빈 공간이 있는지 다시 한번 확인해 주게나!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.");
		    cm.dispose();

}

	    }  if (selection == 405) {
		if (cm.haveItem(4001126,2850)) {
		    if (cm.canHold(4001212)) {
			cm.gainItem(4001126, -2850);
			cm.gainItem(4001212, 1);
		        cm.sendOk("교환완료");
			cm.dispose();
		    } else {
		        cm.sendOk("기타창에 빈 공간이 있는지 다시 한번 확인해 주게나!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.");
		    cm.dispose();

}
		}
	}
}



