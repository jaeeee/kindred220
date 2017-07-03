/*

	레인         : [Rain_MS@nate.com]

	엔피시아이디 : 9000131

	엔피시 이름  : 마법의 절구

	엔피시 설명  : 쥬얼 교환 스크립트


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
	       var leaf = cm.itemQuantity(4001126);
	       var quan = ((cm.itemQuantity(4001126) - (cm.itemQuantity(4001126) % 80)) / 80);
	       var chat = "안녕하세요 #h0#님! 저는 지금 단풍잎으로 \r\n#e#r쥬얼#k#n을 팔고있어요\r\n";
	       chat += "현재 #h0#님의 단풍잎 갯수는 #r#e"+ leaf +" #n#k개 입니다.#b"
	       chat += "\r\n\r\n아래 물품을 골라주세요.\r\n";
	       chat += "\r\n#L21##i4001126# (200개)    -    #i1132191# (#z1132191#)"; // 쥬얼 크래프트 벨트
	       //chat += "\r\n#L20##i4001126# (50개)    -    #i1112762# (#z1112762#)\r\n\r\n"; // 쥬얼 크래프트 링
	       chat += "\r\n#L1##i4001126# (300개)    -    #i4440000# (#z4440000#)";
	       chat += "\r\n#L2##i4001126# (300개)    -    #i4441000# (#z4441000#)";
	       chat += "\r\n#L3##i4001126# (300개)    -    #i4442000# (#z4442000#)";
	       chat += "\r\n#L4##i4001126# (300개)    -    #i4443000# (#z4443000#)\r\n\r\n"; // S급
	       chat += "\r\n#L5##i4001126# (150개)    -    #i4440100# (#z4440100#)";
	       chat += "\r\n#L6##i4001126# (150개)    -    #i4441100# (#z4441100#)";
	       chat += "\r\n#L7##i4001126# (150개)    -    #i4442100# (#z4442100#)";
	       chat += "\r\n#L8##i4001126# (150개)    -    #i4443100# (#z4443100#)\r\n\r\n"; // A급
	       chat += "\r\n#L9##i4001126# (50개)    -    #i4440200# (#z4440200#)";
	       chat += "\r\n#L10##i4001126# (50개)    -    #i4441200# (#z4441200#)";
	       chat += "\r\n#L11##i4001126# (50개)    -    #i4442200# (#z4442200#)";
	       chat += "\r\n#L12##i4001126# (50개)    -    #i4443200# (#z4443200#)\r\n\r\n"; // B급
	       chat += "\r\n#L13##i4001126# (30개)    -    #i4440300# (#z4440300#)";
	       chat += "\r\n#L14##i4001126# (30개)    -    #i4441300# (#z4441300#)";
	       chat += "\r\n#L15##i4001126# (30개)    -    #i4442300# (#z4442300#)";
	       chat += "\r\n#L16##i4001126# (30개)    -    #i4443300# (#z4443300#)\r\n\r\n"; // C급
	       chat += "\r\n#L17##i4001126# (500개) - #i2049139# (#z2049139#)";
	       chat += "\r\n#L18##i4001126# (300개) - #i2049140# (#z2049140#)";
	       chat += "\r\n#L19##i4001126# (200개) - #i2049141# (#z2049141#)"; // 쥬얼 크래프트 주문서
	       cm.sendSimple(chat);

	    }  if (selection == 21) {
		if (cm.haveItem(4001126, 200)) {
		    if (cm.canHold(1132191)) {
		        cm.sendOk("단풍잎으로 쥬얼 크래프트 벨트를 구매하였습니다.");

			cm.gainItem(4001126, -200);
			cm.gainItem(1132191, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 200개 필요 ]#l#n");
		    cm.dispose();

}

	    }  if (selection == 20) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(1112762)) {
		        cm.sendOk("단풍잎으로 쥬얼 크래프트 링을 구매하였습니다.");

			cm.gainItem(4001126, -50);
			cm.gainItem(1112762, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 50개 필요 ]#l#n");
		    cm.dispose();

}

	    }  if (selection == 1) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4440000)) {
		        cm.sendOk("단풍잎으로 S급 힘의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -300);
			cm.gainItem(4440000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 300개 필요 ]#l#n");
		    cm.dispose();

}	
				
	    }  if (selection == 2) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4441000)) {
		        cm.sendOk("단풍잎으로 S급 행운의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -300);
			cm.gainItem(4441000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 300개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 3) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4442000)) {
		        cm.sendOk("단풍잎으로 S급 지혜의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -300);
			cm.gainItem(4442000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 300개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 4) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4443000)) {
		        cm.sendOk("단풍잎으로 S급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -300);
			cm.gainItem(4443000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 300개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 5) {
		if (cm.haveItem(4001126, 150)) {
		    if (cm.canHold(4440100)) {
		        cm.sendOk("단풍잎으로 A급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -150);
			cm.gainItem(4440100, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 150개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 6) {
		if (cm.haveItem(4001126, 150)) {
		    if (cm.canHold(4441100)) {
		        cm.sendOk("단풍잎으로 A급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -150);
			cm.gainItem(4441100, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 150개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 7) {
		if (cm.haveItem(4001126, 150)) {
		    if (cm.canHold(4442100)) {
		        cm.sendOk("단풍잎으로 A급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -150);
			cm.gainItem(4442100, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 150개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 8) {
		if (cm.haveItem(4001126, 150)) {
		    if (cm.canHold(4443100)) {
		        cm.sendOk("단풍잎으로 A급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -150);
			cm.gainItem(4443100, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 150개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 9) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(4440200)) {
		        cm.sendOk("단풍잎으로 B급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -50);
			cm.gainItem(4440200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 50개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 10) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(4441200)) {
		        cm.sendOk("단풍잎으로 B급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -50);
			cm.gainItem(4441200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 50개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 11) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(4442200)) {
		        cm.sendOk("단풍잎으로 B급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -50);
			cm.gainItem(4442200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 50개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 12) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(4443200)) {
		        cm.sendOk("단풍잎으로 B급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -50);
			cm.gainItem(4443200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 50개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 13) {
		if (cm.haveItem(4001126, 30)) {
		    if (cm.canHold(4440300)) {
		        cm.sendOk("단풍잎으로 C급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -30);
			cm.gainItem(4440300, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 30개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 14) {
		if (cm.haveItem(4001126, 30)) {
		    if (cm.canHold(4441300)) {
		        cm.sendOk("단풍잎으로 C급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -30);
			cm.gainItem(4441300, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 30개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 15) {
		if (cm.haveItem(4001126, 30)) {
		    if (cm.canHold(4442300)) {
		        cm.sendOk("단풍잎으로 C급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -30);
			cm.gainItem(4442300, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 30개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 16) {
		if (cm.haveItem(4001126, 30)) {
		    if (cm.canHold(4443300)) {
		        cm.sendOk("단풍잎으로 C급 민첩함의 쥬얼을 구매하였습니다.");

			cm.gainItem(4001126, -30);
			cm.gainItem(4443300, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 30개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 17) {
		if (cm.haveItem(4001126, 500)) {
		    if (cm.canHold(2049139)) {
		        cm.sendOk("단풍잎으로 쥬얼링의 혼돈의 주문서 60%를 구매하였습니다.");

			cm.gainItem(4001126, -500);
			cm.gainItem(2049139, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 500개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 18) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(2049139)) {
		        cm.sendOk("단풍잎으로 쥬얼링의 놀라운 혼돈의 주문서 40% 구매하였습니다.");

			cm.gainItem(4001126, -300);
			cm.gainItem(2049139, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 300개 필요 ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 19) {
		if (cm.haveItem(4001126, 200)) {
		    if (cm.canHold(2049139)) {
		        cm.sendOk("단풍잎으로 쥬얼링의 긍정의 혼돈의 주문서 30% 구매하였습니다.");

			cm.gainItem(4001126, -200);
			cm.gainItem(2049139, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("단풍잎이 부족합니다.\r\n#e#r[ 단풍잎 200개 필요 ]#l#n ");
		    cm.dispose();

}
	 
		}
	}
}



