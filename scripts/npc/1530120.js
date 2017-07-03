
/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	팬더 에 의해 만들어 졌습니다.

	엔피시아이디 : 1530120

	엔피시 이름 : 이리나

	엔피시가 있는 맵 : 헤네시스 : 리나의 집 (100000003)

	엔피시 설명 : 보스레이드

	더미용 엔피시 코드 : 2001002


*/

var status = -1;
var points;
var status2 = 0;
var sel;
var sel2;
var itemList = Array (1002357,1002971,1052202,1003621,1052526,1003622,1052527,1122000); // 아이템 목록 
var number = Array (50,60,60,1000,1000,1500,1500,1000);
var map = Array (910340500,240050200,272000600,921160400);

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

	if (status == 0) {
        	cm.sendSpirit("시시한 몬스터들은 질린다구?\r\n그렇다면 강력한 보스들이 가득한 레이드를 즐겨 보겠어?\r\n#r#L1#대화를 그만한다.#l  #L0##r보스 레이드를 이용한다.#l",true,0);
	} else if (status == 1) {
		if (selection == 1) {
			cm.sendSpirit("으휴!!\r\n이래뵈도 나 바쁜 몸이라구!!\r\n용무가 없으면 대화좀 걸지말아 줄래?",false,2001002);
			cm.dispose();
		} else {
			cm.sendSpirit("어떤걸 이용 해보겠어?\r\n#L0##r보스 레이드에 입장한다.#l\r\n#L1#보스 레이드 포인트를 교환한다.#l",true,0);
		}
	} else if (status == 2) {
		if (selection == 0) {
			status2 = 1;
			cm.sendSpirit("<보스 레이드 난이도>\r\n #b#L0##v03994115##l#L1##v03994116##l#L2##v03994117##l#L3##v03994118##l\r\n\r\n#L4##r대화를 그만한다.#l",true,0);
		} else if (selection == 1) {
			var chat = "어떤 아이템을 교환 하겠어?\r\n#b";
			chat += "현재 " + cm.getPlayer().getName() + " 너의 포인트는 " + cm.getPlayer().getboss() + "포인트 만큼 있어\r\n\r\n";
			chat += "#k<교환 가능한 아이템>\r\n#r";
			for (var i = 0; i < itemList.length; i ++) {
			chat += "#L" + i + "##i" + itemList[i] + "# #z" + itemList[i] + "# : " + number[i] + "P\r\n";
			}
			cm.sendSpirit(chat,true,0);
		}
	} else if (status == 3) {
		if (status2 == 1) {
			if (selection == 4) {
				cm.sendSpirit("으휴!!\r\n이래뵈도 나 바쁜 몸이라구!!\r\n용무가 없으면 대화좀 걸지말아 줄래?",false,2001002);
				cm.dispose();
			} else {
				var mapid = map[selection];
				var event = "newCharacter";
				event += selection != 0 ? selection : "";
				if (cm.getPlayer().getParty() == null) {
					cm.sendSpirit("\r\n너 설마 파티도 없이 입장할려고 하는거니?\r\n보스 레이드는 너가 생각 하는것 만큼 만만한곳이 아니라구!!",false,2001002);
					cm.dispose();
					return;
				}

				if (!cm.isLeader()) {
					cm.sendSpirit("\r\n보스 레이드는 파티장 만이 입장 신청을 할수 있어.",false,0);
					cm.dispose();
					return;
				}

				if (!cm.allMembersHere()) {
					cm.sendSpirit("\r\n파티원 전원이 모이지도 않았는데 입장을 할려는 거야?",false,2001002);
					cm.dispose();
					return;
				}

				if (cm.getPlayerCount(mapid) > 0) {
					cm.sendSpirit("\r\n미안하지만 이미 다른 파티가 보스레이드를 이용 중이야,\r\n다른 채널을 이용 해주거나 잠시 기다려 주겠어?",false,0);
					cm.dispose();
					return;
				}

				if (!cm.BossCheck("rade",5)) {
					cm.sendSpirit("\r\n파티원중 누군가가 오늘 하루 입장 횟수를 초과했어.\r\n#r참고로 보스레이드 하루 이용 횟수는 5회로 제한되어있어",false,0);
					cm.dispose();
					return;
				}

				try {
					cm.BossAdd("rade");
					cm.resetMap(mapid);
					cm.PartyTimeMove(100000000, mapid, 1800);
					cm.getPlayer().getMap().보스레이드((selection + 1),5000,8000);
					cm.dispose();
				} catch (err) {
					cm.sendOk(err);
					cm.dispose();
				}
			}
		} else {
			sel = selection;
			cm.sendSpirit("#b" + number[sel] + "#k포인트가 필요한데 정말로 교환 하겠어?\r\n한번 교환한 아이템은 #r청약철회가 불가능#k하니 신중히 생각해!!\r\n#L0##r교환 한다.#l  #L1#교환 하지 않는다.#l",true,0);
		} 
	} else if (status == 4) {
		if (selection == 0) {
			if (cm.getPlayer().getboss() >= number[sel]) {
				if (cm.canHold(itemList[sel])) {
					cm.sendSpirit("\r\n자! 여기 너가 선택한 #i" + itemList[sel] + "##b#t" + itemList[sel] + "##k(이)야.\r\n그럼 다음에 또 이용해 주도록 해줘~",false,0);
					cm.getPlayer().addboss(-number[sel]);
					cm.gainItem(itemList[sel],1);
					cm.dispose();
				} else {
					cm.sendSpirit("어라?\r\n이봐! 너 #b인벤토리#k에 빈공간이 없는걸?\r\n#b인벤토리#k를 정리한후 다시 찾아오도록 해",false,0);
					cm.dispose();
				}
			} else {
				cm.sendSpirit("너, 설마\r\n포인트도 없으면서 아이템을 교환할려고 한거니?\r\n포인트를 확실히 모아온 후에 다시 찾아오도록 해!!",false,2001002);
				cm.dispose();
			}
		} else if (selection == 1) {
			cm.sendSpirit("\r\n그래?\r\n그럼 마음이 바뀌면 언제든지 다시 찾아와줘~",false,0);
			cm.dispose();
		}
	}
}
