/*

	레인         : [Rain_MS@nate.com]

	엔피시아이디 : 9000132

	엔피시 이름  : 월묘도령

	엔피시 설명  : 쥬얼링, 쥬얼벨트 교환 스크립트


*/

var count;
var time = "#fUI/UIToolTip/Item/Equip/Star/Star#"

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
	if (cm.getPlayer()) {
            var chat = "쥬얼 크래프트 시스템에 대해 알고 싶어?\r\n";
	    chat += "#e#b#L102#"+time+"쥬얼 크래프트#k#n란?\r\n";
	    chat += "#L104#"+time+"합성에 필요한 #e#b보석#k#n의 종류는?\r\n";
	    chat += "#e#b#L100#"+time+"쥬얼 링#k#n 제작 하기\r\n";
	    chat += "#e#b#L101#"+time+"쥬얼벨트#k#n 제작 하기";
	    cm.sendSimple(chat);
	}
        } else if (status == 1) {
	    if (selection == 100) {
	       var chat = "안녕하세요 #h0#님! 지금 저는 #e#b이쁜 쥬얼링#n#k을 만들고있어요. 쥬얼 링은 벨트와 달리 몹을 잡거나 보스레이드에서 확률로 얻어요~\r\n#e#r쥬얼 크래프트 링#n#k 과 #e#r쥬얼#n#k이 합치면 #e#b이쁜 쥬얼링#n#k이 탄생 !!";
	       chat += "\r\n\r\n#b아래 물품을 골라주세요.#k\r\n";
	       chat += "\r\n#L1##i4440000#  +  #i1112762#  =  #i1112763#   #e(#z1112763#)#n";
	       chat += "\r\n#L2##i4441000#  +  #i1112762#  =  #i1112767#   #e(#z1112767#)#n";
	       chat += "\r\n#L3##i4442000#  +  #i1112762#  =  #i1112771#   #e(#z1112771#)#n";
	       chat += "\r\n#L4##i4443000#  +  #i1112762#  =  #i1112775#   #e(#z1112775#)#n\r\n\r\n"; // S급 링
	       chat += "\r\n#L5##i4440100#  +  #i1112762#  =  #i1112764#   #e(#z1112764#)#n";
	       chat += "\r\n#L6##i4441100#  +  #i1112762#  =  #i1112768#   #e(#z1112768#)#n";
	       chat += "\r\n#L7##i4442100#  +  #i1112762#  =  #i1112772#   #e(#z1112772#)#n";
	       chat += "\r\n#L8##i4443100#  +  #i1112762#  =  #i1112776#   #e(#z1112776#)#n\r\n\r\n"; // A급 링
	       chat += "\r\n#L9##i4440200#  +  #i1112762#  =  #i1112765#    #e(#z1112765#)#n";
	       chat += "\r\n#L10##i4441200#  +  #i1112762#  =  #i1112769#    #e(#z1112769#)#n";
	       chat += "\r\n#L11##i4442200#  +  #i1112762#  =  #i1112773#    #e(#z1112773#)#n";
	       chat += "\r\n#L12##i4443200#  +  #i1112762#  =  #i1112777#    #e(#z1112777#)#n\r\n\r\n"; // B급 링
	       chat += "\r\n#L13##i4440300#  +  #i1112762#  =  #i1112766#    #e(#z1112766#)#n";
	       chat += "\r\n#L14##i4441300#  +  #i1112762#  =  #i1112770#    #e(#z1112770#)#n";
	       chat += "\r\n#L15##i4442300#  +  #i1112762#  =  #i1112774#    #e(#z1112774#)#n";
	       chat += "\r\n#L16##i4443300#  +  #i1112762#  =  #i1112778#    #e(#z1112778#)#n\r\n\r\n"; // C급 링
	       cm.sendSimple(chat);

	 } else if (selection == 101) {
	       var chatt = "안녕하세요 #h0#님! 지금 저는 #e#b이쁜 쥬얼벨트#n#k를 만들고있어요.\r\n#e#r쥬얼 크래프트 링#n#k 과 #e#r쥬얼#n#k이 합치면 #e#b이쁜 쥬얼링#n#k이 탄생 !!";
	       chatt += "\r\n\r\n#b아래 물품을 골라주세요.#k\r\n";
	       chatt += "\r\n#L17##i4440000#  +  #i1132191#  =  #i1132192#   #e(#z1132192#)#n";
	       chatt += "\r\n#L18##i4441000#  +  #i1132191#  =  #i1132196#   #e(#z1132196#)#n";
	       chatt += "\r\n#L19##i4442000#  +  #i1132191#  =  #i1132200#   #e(#z1132200#)#n";
	       chatt += "\r\n#L20##i4443000#  +  #i1132191#  =  #i1132204#   #e(#z1132204#)#n\r\n\r\n"; // S급 벨트
	       chatt += "\r\n#L21##i4440100#  +  #i1132191#  =  #i1132193#   #e(#z1132193#)#n";
	       chatt += "\r\n#L22##i4441100#  +  #i1132191#  =  #i1132197#   #e(#z1132197#)#n";
	       chatt += "\r\n#L23##i4442100#  +  #i1132191#  =  #i1132201#   #e(#z1132201#)#n";
	       chatt += "\r\n#L24##i4443100#  +  #i1132191#  =  #i1132205#   #e(#z1132205#)#n\r\n\r\n"; // A급 벨트
	       chatt += "\r\n#L25##i4440200#  +  #i1132191#  =  #i1132194#   #e(#z1132194#)#n";
	       chatt += "\r\n#L26##i4441200#  +  #i1132191#  =  #i1132198#   #e(#z1132198#)#n";
	       chatt += "\r\n#L27##i4442200#  +  #i1132191#  =  #i1132202#   #e(#z1132202#)#n";
	       chatt += "\r\n#L28##i4443200#  +  #i1132191#  =  #i1132206#   #e(#z1132206#)#n\r\n\r\n"; // B급 벨트
	       chatt += "\r\n#L29##i4440300#  +  #i1132191#  =  #i1132195#   #e(#z1132195#)#n";
	       chatt += "\r\n#L30##i4441300#  +  #i1132191#  =  #i1132199#   #e(#z1132199#)#n";
	       chatt += "\r\n#L31##i4442300#  +  #i1132191#  =  #i1132203#   #e(#z1132203#)#n";
	       chatt += "\r\n#L32##i4443300#  +  #i1132191#  =  #i1132207#   #e(#z1132207#)#n\r\n\r\n"; // C급 벨트
	       cm.sendSimple(chatt);

             } else if (selection == 102) { // 쥬얼 크래프트 란?
           	cm.sendOk("쥬얼 크래프트는 아무런 능력이 없는 아이템에 특별한 힘을 가진 보석을 합성하면, 보석이 가지고 있는 능력치를 장비 아이템으로 이전 시켜주는 특별한 장치야.");
		cm.dispose();
             } else if (selection == 103) { // 쥬얼 시너지 란?
           	cm.sendOk("#i2048402# 이게 바로 쥬얼 시너지야. 혹시 너한테 필요하지 않은 쥬얼 이 두개 이상 있다면, 쥬얼 시너지를 이용해봐. 너한테 필요 없는 두개의 쥬얼을 합성하여 네가 원하는 쥬얼을 얻을 수 있을지도 몰라.");
		cm.dispose();
             } else if (selection == 104) { // 합성에 필요한 종류는?
           	cm.sendOk("#i1112762# 쥬얼 크래프트 링에 능력치를 합성하기 위해선 특별한 보석이 필요해. 능력치가 깃들여진 마법이 부여된 특별한 보석. 그걸 우리는 쥬얼이라고 불러.");
		cm.dispose();
             } else if (selection == 105) { // 시너지 시스템
		cm.dispose();
                cm.openNpc(9000040);
		return;

}
        } else if (status == 2) {
	    }  if (selection == 1) {
		if (cm.haveItem(4440000, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112763)) {
		        cm.sendOk("S급 힘의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4440000, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112763, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}	
				
	    }  if (selection == 2) {
		if (cm.haveItem(4441000, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112767)) {
		        cm.sendOk("S급 행운의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4441000, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112767, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 3) {
		if (cm.haveItem(4442000, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112771)) {
		        cm.sendOk("S급 지혜의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4442000, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112771, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 4) {
		if (cm.haveItem(4443000, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112775)) {
		        cm.sendOk("S급 민첩함의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4443000, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112775, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 5) {
		if (cm.haveItem(4440100, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112764)) {
		        cm.sendOk("A급 힘의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4440100, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112764, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 6) {
		if (cm.haveItem(4441100, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112768)) {
		        cm.sendOk("A급 행운의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4441100, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112768, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 7) {
		if (cm.haveItem(4442100, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112772)) {
		        cm.sendOk("A급 지혜의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4442100, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112772, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 8) {
		if (cm.haveItem(4443100, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112776)) {
		        cm.sendOk("A급 민첩함의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4443100, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112776, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 9) {
		if (cm.haveItem(4440200, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112765)) {
		        cm.sendOk("B급 힘의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4440200, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112765, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 10) {
		if (cm.haveItem(4441200, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112769)) {
		        cm.sendOk("B급 행운의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4441200, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112769, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 11) {
		if (cm.haveItem(4442200, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112773)) {
		        cm.sendOk("B급 지혜의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4442200, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112773, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 12) {
		if (cm.haveItem(4443200, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112777)) {
		        cm.sendOk("B급 민첩함의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4443200, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112777, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 13) {
		if (cm.haveItem(4440300, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112766)) {
		        cm.sendOk("C급 힘의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4440300, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112766, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 14) {
		if (cm.haveItem(4441300, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112770)) {
		        cm.sendOk("C급 행운의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4441300, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112770, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 15) {
		if (cm.haveItem(4442300, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112774)) {
		        cm.sendOk("C급 지혜의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4442300, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112774, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 16) {
		if (cm.haveItem(4443300, 1) && (cm.haveItem(1112762, 1))) {
		    if (cm.canHold(1112778)) {
		        cm.sendOk("C급 민첩함의 쥬얼링을 구매하였습니다.");

			cm.gainItem(4443300, -1);
			cm.gainItem(1112762, -1);
			cm.gainItem(1112778, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}	

        } else if (status == 3) {
	    }  if (selection == 17) {
		if (cm.haveItem(4440000, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132192)) {
		        cm.sendOk("S급 힘의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4440000, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132192, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}	
				
	    }  if (selection == 18) {
		if (cm.haveItem(4441000, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132196)) {
		        cm.sendOk("S급 행운의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4441000, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132196, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 19) {
		if (cm.haveItem(4442000, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132200)) {
		        cm.sendOk("S급 지혜의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4442000, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 20) {
		if (cm.haveItem(4443000, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132204)) {
		        cm.sendOk("S급 민첩함의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4443000, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132204, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 21) {
		if (cm.haveItem(4440100, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132193)) {
		        cm.sendOk("A급 힘의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4440100, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132193, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 22) {
		if (cm.haveItem(4441100, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132197)) {
		        cm.sendOk("A급 행운의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4441100, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132197, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 23) {
		if (cm.haveItem(4442100, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132201)) {
		        cm.sendOk("A급 지혜의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4442100, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132201, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 24) {
		if (cm.haveItem(4443100, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132205)) {
		        cm.sendOk("A급 민첩함의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4443100, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132205, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 25) {
		if (cm.haveItem(4440200, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132194)) {
		        cm.sendOk("B급 힘의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4440200, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132194, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 26) {
		if (cm.haveItem(4441200, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132198)) {
		        cm.sendOk("B급 행운의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4441200, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132198, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 27) {
		if (cm.haveItem(4442200, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132202)) {
		        cm.sendOk("B급 지혜의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4442200, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132202, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 28) {
		if (cm.haveItem(4443200, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132206)) {
		        cm.sendOk("B급 민첩함의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4443200, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132206, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 29) {
		if (cm.haveItem(4440300, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132195)) {
		        cm.sendOk("C급 힘의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4440300, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132195, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 30) {
		if (cm.haveItem(4441300, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132199)) {
		        cm.sendOk("C급 행운의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4441300, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132199, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 31) {
		if (cm.haveItem(4442300, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132203)) {
		        cm.sendOk("C급 지혜의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4442300, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132203, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}
	    }  if (selection == 32) {
		if (cm.haveItem(4443300, 1) && (cm.haveItem(1132191, 1))) {
		    if (cm.canHold(1132207)) {
		        cm.sendOk("C급 민첩함의 쥬얼벨트를 구매하였습니다.");

			cm.gainItem(4443300, -1);
			cm.gainItem(1132191, -1);
			cm.gainItem(1132207, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("\r\n#e#r[ 재료가 부족합니다. ]#l#n");
		    cm.dispose();

}	
		}
	}
}




