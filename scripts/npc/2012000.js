/*
    	! 이 스크립트는 Pure Developmest of KMS의 일부입니다.
    	! 이 스크립트는 무단 수정과 무단 배포가 불가능합니다.
    	! 이 주석은 제작자의 동의가 있을시 수정이 가능합니다.
    	Copyright ⓒ 2012 Scripts Maker	루돌프 <rhkddbs_4399@naver.com>
					주크블랙 <doomgate17@naver.com>
					백호 <baekhoms@naver.com>
					엘도라도 <junir0542@naver.com>
*/

var status = 0;
var rudolph = 0;
var rudolphs = 0;

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
	    var chat = "저는 각 지역으로 향하는 배를 안내해 드리고 있답니다. 어떤 지역으로 여행하실 건가요? 비행간격을 확인해 드릴게요.#b\r\n";	
	    chat += "\r\n#L0#빅토리아 아일랜드";
	    chat += "\r\n#L1#루디브리엄 성";
	    chat += "\r\n#L2#리프레 마을";
	    chat += "\r\n#L3#무릉 마을";
	    chat += "\r\n#L4#아리안트";
	    chat += "\r\n#L5#에레브";
	    chat += "\r\n#L6#에델슈타인";
	    cm.sendSimple(chat);
	} else if (status == 1) {
	    if (selection == 0) {
		cm.sendNext("빅토리아 아일랜드로 가시려는 건가요? 높은 나무로 우거진 숲이 아름다운 곳이죠. 빅토리아로 향하는 배는 #b정각을 기준으로 매 15분마다 출발#k하고 있답니다.");
	    } else if (selection == 1) {
		cm.sendNext("루더스 호수의 루디브리엄 성으로 가시는 건가요? 장난감으로 이뤄진 유쾌한 마을이죠. 루디브리엄 성으로 향하는 배는 #b정각을 기준으로 매 10분마다 출발#k하고 있답니다.");
	    } else if (selection == 2) {
		cm.sendNext("미나르 숲의 리프레로 가시는 건가요? 하플링과 함께하는 아기자기한 마을이죠. 리프레로 향하는 배는 #b정각을 기준으로 매 10분마다 출발#k하고 있답니다.");
	    } else if (selection == 3) {
		cm.sendNext("무릉도원의 무릉으로 가시려는 건가요? 오르비스와 무릉간에 운행되는 배는 없습니다. 대신 무릉의 주민인 #b학이 운행하는 1인용 택시가 항시 대기#k하고 있으니 빠르게 이용하실 수 있어요.");
	    } else if (selection == 4) {
		cm.sendNext("니할사막의 아리안트로 가시려는 건가요? 사막처럼 뜨거운 열정을 가진 사람들이 사는 곳이죠. 아리안트로 향하는 지니는 #b정각을 기준으로 매 10분마다 출발#k하고 있답니다.");
	    } else if (selection == 5) {
		cm.sendNext("에레브로 가시려는 건가요? 여제 시그너스와 그녀의 기사들이 함께 하는 신수의 수호를 받는 아름다운 섬이죠. 에레브로 향하는 #b1인용 배는 항상 대기#k하고 있으니 빠르게 이용하실 수 있어요.");
	    } else if (selection == 6) {
		cm.sendNext("에델슈타인으로 가시려는 건가요? 위험한 자들의 지배에 대항하여 싸우는 강렬한 의지를 가진 사람들이 사는 곳이죠. 에델슈타인으로 향하는 #b1인용 비행선은 항상 대기#k하고 있으니 빠르게 이용하실 수 있어요.");
	    }
	    rudolph = selection;
	} else if (status == 2) {
	    if (rudolph == 0) {
		cm.sendNextPrev("빅토리아로 가는 비행선을 이용하시려면 오른편에 있는 #b정거장 안내원 이스#k에게 말을 걸어주세요. 이스가 빅토리아행 정거장으로 안내해 드릴 거예요.");
		cm.dispose();
	    } else if (rudolph == 1) {
		cm.sendNextPrev("루디브리엄으로 가는 비행선을 이용하시려면 오른편에 있는 #b정거장 안내원 이스#k에게 말을 걸어 주세요. 이스가 루디브리엄행 정거장으로 안내해 드릴 거예요.");
		cm.dispose();
	    } else if (rudolph == 2) {
		cm.sendNextPrev("리프레로 가는 비행선을 이용하시려면 오른편에 있는 #b정거장 안내원 이스#k에게 말을 걸어 주세요. 이스가 리프레행 정거장으로 안내해 드릴 거예요.");
		cm.dispose();
	    } else if (rudolph == 3) {
		cm.sendNextPrev("다만 무료로 운행되는 비행선과는 달리 택시는 일정 메소가 요금으로 부과되어 있습니다. 무릉까지는 #b1500메소#k에 운행되고 있으니, 적절한 금액을 준비한 후에 이용해주세요.");
	    } else if (rudolph == 4) {
		cm.sendNextPrev("아리안트로 가는 비행선을 이용하시려면 오른편에 있는 #b정거장 안내원 이스#k에게 말을 걸어 주세요. 이스가 아리안트행 정거장으로 안내해 드릴 거예요.");
		cm.dispose();
	    } else if (rudolph == 5) {
		cm.sendNextPrev("에레브로 가는 비행선을 이용하시려면 오른편에 있는 #b정거장 안내원 이스#k에게 말을 걸어 주세요. 이스가 에레브행 정거장으로 안내해 드릴 거예요.");
		cm.dispose();
	    } else if (rudolph == 6) {
		cm.sendNextPrev("에델슈타인으로 가는 비행선을 이용하시려면 오른편에 있는 #b정거장 안내원 이스#k에게 말을 걸어 주세요. 이스가 에델슈타인행 정거장으로 안내해 드릴 거예요.");
		cm.dispose();
	    }
	    rudolphs = rudolph;
	} else if (status == 3) {
	    if (rudolphs == 3) {
		cm.sendNextPrev("무릉으로 가는 학을 이용하시려면 오른편에 있는 #b정거장 안내원 이스#k에게 말을 걸어 주세요. 이스가 무릉행 정거장으로 안내해 드릴 거예요.");	
		cm.dispose();
	    }
	}
    }
}