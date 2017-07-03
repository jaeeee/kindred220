var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (cm.getPlayer().getMapId() != 140090000) {
        if (status == 0) {
	    cm.sendSimple("뭔가 궁금하신 게 있나요? 있다면 다시 한 번 설명해 드릴게\r\n요．\r\n#L0##b나는 누구지?#l\r\n#L1#여긴 어디지?#l\r\n#L2#넌 누구야?#l\r\n#L3#지금부터 해야 할 일을 알려줘.#l\r\n#L4#인벤토리에 대해 알려줘.#l\r\n#L5#스킬은 어떻게 올리지?#l\r\n#L6#장비 착용법을 알고 싶어.#l\r\n#L7#넌 누구야? 퀵슬롯은 어떻게 사용해?#l\r\n#L8#상자는 어떻게 부술 수 있어?#l\r\n#L9#의자에 앉고 싶어.#l");
	} else {
    	    cm.summonMsg(selection);
    	    cm.dispose();
	}
    } else {
    	if (cm.getInfoQuest(21019).equals("")) {
	    if (status == 0) {
	    	cm.sendNext("드디어 깨어나셨군요...!");
	    } else if (status == 1) {
	    	cm.sendNextPrevS("...넌?",2);
	    } else if (status == 2) {
	    	cm.sendNextPrev("기다리고 있었어요. 당신이... 검은 마법사와 싸우던 영웅이 깨어나기를...!");
	    } else if (status == 3) {
	    	cm.sendNextPrevS("...무슨 말을 하는 거지? 넌 누구지...?",2);
	    } else if (status == 4) {
	    	cm.sendNextPrevS("아니... 난 도대체 누구지...? 아무것도 기억나지 않아... 윽... 머리가 아파!",2);
	    } else if (status == 5) {
	    	cm.updateInfoQuest(21019,"helper=clear");
	    	cm.showWZEffect("Effect/Direction1.img/aranTutorial/face",0);
	    	cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin",0);
	    	cm.playerSummonHint(true);
	    	cm.dispose();
	    }
    	} else {
	    if (status == 0) {
	    	cm.sendNext("괜찮으세요?");
	    } else if (status == 1) {
	        cm.sendNextPrevS("난... 아무것도 기억나지 않아... 여기는 어디지? 그리고 넌 누구지?",2);
	    } else if (status == 2) {
	    	cm.sendNextPrev("침착하세요. 검은 마법사의 저주가 당신의 기억을 지웠으니... 아무것도 기억나지 않는다고 걱정하실 필요 없어요. 지금부터 궁금하신 것에 관해 차근차근 설명해 드릴게요.");
	    } else if (status == 3) {
	    	cm.sendNextPrev("당신은 영웅이에요. 수백 년 전 검은 마법사와 싸워 메이플 월드를 구했죠. 하지만 마지막 순간 검은 마법사의 저주에 걸려 얼음 속에 긴 시간 동안 잠들고 말았어요. 그러면서 기억도 모두 잃고 말았고요.");
	    } else if (status == 4) {
	    	cm.sendNextPrev("이곳은 리엔 섬이라고 해요. 검은 마법사가 당신을 가둔 곳이죠. 저주로 인해 기후에 맞지 않게 항상 얼음과 눈으로 뒤덮혀 있어요. 당신은 얼음 동굴 아주 깊숙한 곳에서 발견 되었어요.");
	    } else if (status == 5) {
	    	cm.sendNextPrev("제 이름은 리린이에요. 리엔 일족의 한 명이죠. 리엔 일족은 오래 전부터 예언에 따라 영웅이 돌아오길 기다려 왔어요. 그리고... 드디어 당신을 찾아내었어요. 지금. 바로 여기에서...");
	    } else if (status == 6) {
	    	cm.sendNextPrev("한 번에 너무 많은 설명을 드렸군요. 당장은 이해하지 못하셔도 상관 없어요. 점차 모든 것을 알게 되실 테니... #b그보다 어서 마을로 가요.#k 마을에 도착할 때까지 모르는 것이 있으면 제가 옆에서 알려드릴게요.");
	    } else if (status == 7) {
	    	cm.warp(140090100,0);
	    	cm.playerSummonHint(true);
	    	cm.dispose();
	    }
    	}
    }
}