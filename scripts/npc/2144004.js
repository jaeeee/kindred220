/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	캐논슈터 에 의해 만들어 졌습니다.

	엔피시아이디 : 2144004

	엔피시 이름 : 셰릴

	엔피시가 있는 맵 : 헤네시스 : 리나의 집 (100000003)

	엔피시 설명 : MISSINGNO


*/

var status = -1;

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
		if (cm.getPlayer().getKeyValue("cross") == null) {
			var chat = "저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n";
			chat += "#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n";
			chat += "#L1##d진정한 헌터의 길#l";
			cm.sendSimple(chat);
		} else if (cm.getPlayer().getKeyValue("cross") == "6") {
			cm.sendOk("#b크로스헌터 UI#k를 통해서 #e[Chapter 1]#n 보상을 받아 주세요.");
			cm.dispose();
		} else if (cm.getPlayer().getKeyValue("cross") == "12") {
			cm.sendOk("#b크로스헌터 UI#k를 통해서 #e[Chapter 2]#n 보상을 받아 주세요.");
			cm.dispose();
		} else if (cm.getPlayer().getKeyValue("cross") == "18") {
			cm.sendOk("#b크로스헌터 UI#k를 통해서 #e[Chapter 3]#n 보상을 받아 주세요.");
			cm.dispose();
		} else if (cm.getPlayer().getKeyValue("cross") == "24") {
			cm.sendOk("#b크로스헌터 UI#k를 통해서 #e[Chapter 4]#n 보상을 받아 주세요.");
			cm.dispose();
		} else if (cm.getPlayer().getKeyValue("cross") == "25") {
			cm.sendOk("저희 크로스헌터 대신 하여 모든 챕터를 완료해주셔서 정말 감사 드립니다.");
			cm.dispose();
		} else {
			var chat = "저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n";
			chat += "#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n#d";
			if (cm.getPlayer().getKeyValue("cross") == "1") {
				chat += "#L2#변형된 대우를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "2") {
				chat += "#L3#변형된 루루모모를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "3") {
				chat += "#L4#변형된 호문스페큘러를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "4") {
				chat += "#L5#변형된 디트와 로이를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "5") {
				chat += "#L6#변형된 키메라를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "7") {
				chat += "#L7#변형된 마스터 호브를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "8") {
				chat += "#L8#변형된 마스터 하프를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "9") {
				chat += "#L9#변형된 마뇽을 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "10") {
				chat += "#L10#변형된 마뇽을 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "11") {
				chat += "#L11#변형된 켄타우로스 킹을 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "13") {
				chat += "#L12#변형된 타이머를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "14") {
				chat += "#L13#변형된 리치를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "15") {
				chat += "#L14#변형된 요괴선사를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "16") {
				chat += "#L15#변형된 요괴 지네를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "17") {
				chat += "#L16#변형된 파풀라투스를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "19") {
				chat += "#L17#변형된 피아누스를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "20") {
				chat += "#L18#변형된 레비아탄을 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "21") {
				chat += "#L19#변형된 도도를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "22") {
				chat += "#L20#변형된 릴리노흐를 처치 하자#l";
			} else if (cm.getPlayer().getKeyValue("cross") == "23") {
				chat += "#L21#변형된 라이카를 처치 하자#l";
			}
			cm.sendSimple(chat); 
		}
	} else if (status == 1) {
		if (selection == 2) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 1 : 헌터의 자격>\r\n#b#n#L" + 931050415 + "#[Plan 1 : 변현된 대우 처치]");
		} else if (selection == 3) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 1 : 헌터의 자격>\r\n#b#n#L" + 931050434 + "#[Plan 2 : 변형된 루루모모 처치]");
		} else if (selection == 4) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 1 : 헌터의 자격>\r\n#b#n#L" + 931050435 + "#[Plan 3 : 변형된 호문스페큘러 처치]");
		} else if (selection == 5) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 1 : 헌터의 자격>\r\n#b#n#L" + 931050417 + "#[Plan 4 : 변형된 디트와 로이 처치]");
		} else if (selection == 6) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 1 : 헌터의 자격>\r\n#b#n#L" + 931050424 + "#[Plan 5 : 변형된 키메라 처치]");
		} else if (selection == 7) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 2 : 헌터의 증명>\r\n#b#n#L" + 931050419 + "#[Plan 1 : 변형된 마스터 호브 처치]");
 		} else if (selection == 8) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 2 : 헌터의 증명>\r\n#b#n#L" + 931050420 + "#[Plan 2 : 변형된 마스터 하프 처치]");			
		} else if (selection == 9) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 2 : 헌터의 증명>\r\n#b#n#L" + 931050425 + "#[Plan 3 : 변형된 마뇽 처치]");			
		} else if (selection == 10) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 2 : 헌터의 증명>\r\n#b#n#L" + 931050426 + "#[Plan 4 : 변형된 그리프 처치]");
		} else if (selection == 11) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 2 : 헌터의 증명>\r\n#b#n#L" + 931050422 + "#[Plan 5 : 켄타우로스 킹 처치]");
		} else if (selection == 12) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 3 : 끝없는 헌터의 길>\r\n#b#n#L" + 931050413 + "#[Plan 1 : 변형된 타이머 처치]");			
		} else if (selection == 13) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 3 : 끝없는 헌터의 길>\r\n#b#n#L" + 931050428 + "#[Plan 2 : 변형된 리치 처치]");			
		} else if (selection == 14) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 3 : 끝없는 헌터의 길>\r\n#b#n#L" + 931050436 + "#[Plan 3 : 변형된 요괴선사 처치]");			
		} else if (selection == 15) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 3 : 끝없는 헌터의 길>\r\n#b#n#L" + 931050418 + "#[Plan 4 : 변형된 요괴 지네 처치]");			
		} else if (selection == 16) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 3 : 끝없는 헌터의 길>\r\n#b#n#L" + 931050427 + "#[Plan 5 : 변형된 파풀라투스 처치]");			
		} else if (selection == 17) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 4 : 전설의 헌터>#k\r\n#b#n#L" + 931050429 + "#[Plan 1 : 변형된 피아누스 처치]");
		} else if (selection == 18) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 4 : 전설의 헌터>#k\r\n#b#n#L" + 931050430 + "#[Plan 2 : 변형된 레비아탄 처치]");
		} else if (selection == 19) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 4 : 전설의 헌터>#k\r\n#b#n#L" + 931050431 + "#[Plan 3 : 변형된 도도 처치]");
		} else if (selection == 20) {
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 4 : 전설의 헌터>#k\r\n#b#n#L" + 931050432 + "#[Plan 4 : 변형된 릴리노흐 처치]");
		} else if (selection == 21) {	
			cm.sendSimple("저기... 죄송한데 저를 잠시 도와 주시겠어요?\r\n\r\n#e<Chapter 4 : 전설의 헌터>#k\r\n#b#n#L" + 931050433 + "#[Plan 5 : 변형된 라이카 처치]");
		} else {
			if (cm.getPlayer().getLevel() >= 100) {
				cm.sendNext("반갑습니다. 저는 #b크로스헌터#k 요원 셰릴 이라고 합니다.");
			} else {
				cm.sendOk("#b크로스헌터#k는 레벨 100 이상부터 진행이 가능 합니다.");
				cm.dispose();
			}
		}
	} else if (status == 2) {
		if (cm.getPlayer().getKeyValue("cross") == null) {
			cm.sendNextS("저기 미안한데 #b크로스헌터#k 라는게 뭐지?",2);
		} else {
			if (cm.getPlayerCount(selection) > 0) {
				cm.sendOk("죄송하지만, 이미 다른 분께서 몬스터를 처치 중입니다. 잠시 기다려 주시거나 다른 채널을 이용해 주시면 감사하겠어요.");
				cm.dispose();
				return;
			}
			cm.timeMoveMap(100000000, selection, 1400);
			cm.killAllMob();
			cm.resetMap(selection);
			switch(selection) {
				case 931050415:
					cm.spawnMob(9300477,347,275);
				break;
				case 931050434:
					cm.spawnMob(9300878,-25,315);
				break;
				case 931050435:
			 		cm.spawnMob(9300879,-71,167);
				break;
				case 931050417:
					cm.spawnMob(9801015,-83,167);
				break;
				case 931050424:
					cm.spawnMob(9300510,-422,-405);
				break;
				case 931050419:
					cm.spawnMob(9300479,1812,332);
				break;
				case 931050420:
					cm.spawnMob(9300480,152,422);
				break;
				case 931050425:
					cm.spawnMob(9300511,-105,452);
				break;
				case 931050426:
					cm.spawnMob(9300512,-45,452);
				break;
				case 931050422:
					cm.spawnMob(9300482,584,422);
				break;
				case 931050413:
					cm.spawnMob(9300475,89,972);
				break;
				case 931050428:
					cm.spawnMob(9300514,1419,94);
				break;
				case 931050436:
					cm.spawnMob(9300880,450,543);
				break;
				case 931050418:
					cm.spawnMob(9300478,571,171);
				break;
				case 931050427:
					cm.spawnMob(9300513,-276,-386);
				break;
				case 931050429:
					cm.spawnMob(9300515,586,168);
				break;
				case 931050430:
					cm.spawnMob(9300516,-163,2481);
				break;
				case 931050431:
					cm.spawnMob(9300517,-82,-570);
				break;
				case 931050432:
					cm.spawnMob(9300518,137,181);
				break;
				case 931050433:
					cm.spawnMob(9300519,-121,181);
				break;
			
			}
			cm.sendOk("부디, 무사히 돌아 와 주시길 바랍니다.");
			cm.dispose();
		}
	} else if (status == 3) {
		cm.sendNext("#b크로스헌터#k란 이 공간 과는 또 다른 공간에서 발생하는 몬스터들을 처치하는 비밀요원 집단 입니다.");
	} else if (status == 4) {
		cm.sendNextS("그렇구나.. 그런 집단에서 나에게는 무슨 용무가 있는거지?",2);
	} else if (status == 5) {
		cm.sendNext("그런데 몇일전 그 공간에서 저희들이 감당할수 없을 정도의 강력한 몬스터들이 생기기 시작했습니다.");
	} else if (status == 6) {
		cm.sendNext("저희 들의 피해는 범잡을수 없을정도로 컷고, 현재는 싸울수있는 병사들이 없을정도로 심각합니다.");
	} else if (status == 7) {
		cm.sendNext("그래서 저희는 #b" + cm.getName() + "#k님 에게 저희 대신 그 몬스터들의 처치를 부탁드릴려는 겁니다.");
	} else if (status == 8) {
		cm.sendNextS("(으음.. 몬스터 처치쯤이야 간단한 일이지만..)\r\n그런 너희들도 처치 못하는 몬스터들을 과연 내가 처치할수 있을까?",2);
	} else if (status == 9) {
		cm.sendNext("#b" + cm.getName() + "#k님의 실력이라면 충분히 가능할거라고 믿고 있습니다. 거기다 저희들도 지원을 아끼지 않을거구요.");
	} else if (status == 10) {
		cm.sendNextS("좋아! 내가 몬스터들을 처치 해 보겠어!!",2);
	} else if (status == 11) {
		cm.sendNext("정말 감사합니다.. 이 다음 부터 저에게 찾아와 주시면 몬스터가 있는 다른 공간으로 보내드리도록 하겠습니다.");
		cm.getPlayer().setKeyValue("cross","1");
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}
