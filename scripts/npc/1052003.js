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
	var chat = "#r현재 캐시샵에서 판매되지 않고 있는 템을 팔고 있습니다.\r\n\r\n#n"
	chat += "#L8##b< 모자 >\r\n";
	chat += "#L9##b< 갑옷 >\r\n";
	chat += "#L11##b< 장갑 >\r\n";
	chat += "#L10##b< 신발 >\r\n";
	chat += "#L3##b< 무기 >\r\n";
	chat += "#L2##b< 반지 >\r\n";
	chat += "#L4##b< 날개 >\r\n";
	chat += "#L12##b< 얼굴장식 >\r\n";
	 //chat += "#L4##r[2]#b 놀라운 장비 강화주문서 - #i2049361# 1000개\r\n";
	 //chat += "#L6##r[5]#b 스탯공격력 200만 ↑ - 보스필드\r\n\r\n";

	    cm.sendSimple(chat);



		
         } else if (status == 1) {

	if (selection >= 99999) {
		cm.dispose();
	}
        else if (selection == 1) {
                var warpmain = "#b프리미엄 사냥터#k는 기존 사냥터와는 달리 #r빠른 레벨업#k을 경험하실 수 있는 장소입니다. 등급에 따라 이용하실 수 있는 사냥터는 #e일반회원 사냥터#n와#e특별회원 사냥터#n가 있습니다. 어느 사냥터의 설명을 들으시겠습니까?\r\n";
                warpmain += "\r\n#L4##b프리미엄 사냥터#r(일반)#b에 대한 정보입니다.";
                warpmain += "\r\n#L5##b프리미엄 사냥터#r(특별)#b에 대한 설명을 듣겠습니다..";
                cm.sendSimple(warpmain);

             } else if (selection == 2001) {
		cm.dispose();
		cm.enterCS();
		return;
	     } else if (selection == 10002) {
		cm.warp(910001000,0);
		cm.dispose();
	     } else if (selection == 2000) {
		cm.sendOk("#i4031683##b#t4031683#를 얻을 수 있는 방법 \r\n\r\n1. 사냥을 한다 황금단풍잎을 먹는다\r\n2. 만능택시 클릭 후 황단상점에서 구입 \r\n3. 다시 프리미엄을 눌러보면 활성화가 되어있다.");
		cm.dispose();
		return;
            } else if (selection == 2) {
cm.openShop(12345);
cm.dispose();

            } else if (selection == 11) {
cm.openShop(123456);
cm.dispose();
            } else if (selection == 12) {
cm.openShop(55);
cm.dispose();




            } else if (selection == 3) { 
cm.openShop(22);
cm.dispose();



            } else if (selection == 4) {
cm.openShop(23);
cm.dispose();
           } else if (selection == 8) {
cm.openShop(33);
cm.dispose();
           } else if (selection == 9) {
cm.openShop(34);
cm.dispose();
           } else if (selection == 10) {
cm.openShop(44);
cm.dispose();


            } else if (selection == 5) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 입장이 불가능합니다.");
            cm.dispose();
            return;
}           if (!cm.isLeader()) {
                cm.sendOk("파티장이 입장신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(957018000).getCharactersSize() > 0) {
             cm.sendOk("이미 다른유저가 이용중입니다.다른채널을 이용해주세요");
             cm.dispose();
             return;
    }
		if (cm.haveItem(4310027, 2000)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("이동중");
                                cm.TimeMoveMap(957018000, 100000000, 900);
			cm.gainItem(4310027, -2000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드 코인이 부족합니다.");
		    cm.dispose();

}

            } if (selection == 6) {

       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 입장이 불가능합니다.");
            cm.dispose();
            return;
}           if (!cm.isLeader()) {
                cm.sendOk("파티장이 입장신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(240050200).getCharactersSize() > 0) {
             cm.sendOk("이미 다른 유저가 보스레이드를 이용중입니다.\r\n다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
             cm.dispose();
             return;
    }
		if (cm.haveItem(4310027, 2000)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("이동중");
                        cm.warp(272010200,0);
                        cm.gainItem(4310027, -2000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("레전드 코인이 부족합니다.");
		    cm.dispose();

}
             } else if (selection == 3017) {
		cm.gainItem(4031683, 100);
		cm.sendOk("#i4031683# 지급완료");
		cm.dispose();
}
        } else if (status == 2) {
	    if (selection == 9999) {
		cm.dispose();
		cm.openNpc(1022003);
            }else if (selection == 4) {
                var vlig = "#b#e프리미엄 사냥터#r(일반)#b에 대한 정보입니다.\r\n\r\n#r[사냥터 기본 정보]\r\n　#k추천 레벨 #n: Lv.13 ~ Lv.200　　#e입장 비용 #n: 100만 메소\r\n\r\n#r#e[몬스터 관련 정보]\r\n　#k몬스터 #n: Lv.37 힙합 냥이단 졸개(HP : 150,000)\r\n　#e경험치 #n: 30,000x경험치배율\r\n\r\n#r#e[부가서비스 정보]\r\n　#Cgray##n해당 난이도에서는 부가서비스를 이용하실 수 없습니다.\r\n";
                cm.sendSimple(vlig);

            } else if (selection == 5) {
                var hunt = "#b#e프리미엄 사냥터#r(특별)#b에 대한 정보입니다.\r\n\r\n#r[사냥터 기본 정보]\r\n#k　추천 레벨 #n: Lv.50 ~ Lv.250　　　#e입장 비용 #n: 0 메소\r\n#r#e입장 조건 #n: #i4031683##b마야의 사랑의 증표 1000개 이상 보유\r\n\r\n#r#e[몬스터 관련 정보]\r\n#k#n　몬스터 : Lv.37 힙합 냥이단 간부(HP: 15,000,000)\r\n　경험치: 200,000x경험치배율\r\n\r\n#r#e[부가서비스 정보]#k　(●: 가능 / ◎: 불가능)\r\n●제자리 환생　　●특별 상점 이용";
                cm.sendSimple(hunt);

	    }

	    cm.dispose();
		}
    	}
}


