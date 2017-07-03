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
    }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	var enter = "#e#b싸이의 콘서트 홀#n#k에 오신 여러분을 #e#b환영#n#k합니다.\r\n#e#b이 곳#n#k에서는 간단한 #e#b미니게임#n#k과 함께 #e#b노래변경#n#k 및 #e#b메소도박#n#k을 할 수 있습니다. \r\n\r\n";
	enter += "#L0##e#r휴먼마을#k로 #e#b이동\r\n\r\n";
//	enter += "#L1##e#b[가위바위보]#l   ";
	enter += "#L2##e#b[지뢰찾기]#l    ";
	enter += "#L3##e#b[도박하기]#l    ";
//	enter += "#L4##e#b[오목세트]#l     ";	
//	enter += "#L5##e#b[그림찾기]#k#n#k#n\r\n"; //멀티체크필	
//	// 오류있음
	enter += "#L6##e#b[노가다맵]#l#k#n\r\n";
	enter += "#L10##e#b[점괘뽑기]#l    ";
	enter += "#L7##e#b[노래듣기]#l    ";	
	enter += "#L8##e#b[포토존]#l       ";
//	enter += "#L9##e#b[OX퀴즈맵]";
        enter += "#L11##e#b[가위바위보]#l       ";  
	cm.sendSimple(enter);
	}
    else if (status == 1) {
	if (selection == 0) {
	cm.dispose();
	cm.warp(100000000);
	} else if (selection == 1) {
	var RPS = "#e#b가위바위보#k 보상#n으로 얻은 #e#b연승증명서#n#k는 #e#b메소#n#k로 #e교환#n 가능합니다.\r\n\r\n";
	RPS += "#L26##e#b [가위바위보]#n#k 놀이하기\r\n";
	RPS += "#L27##e#b [연승증명서]#n#k 교환하기\r\n";
	cm.sendSimple(RPS);
	} else if (selection == 2) {
	cm.dispose(); 
	cm.openNpc(9220067);
	} else if (selection == 3) {
	cm.dispose(); 
	cm.openNpc(9220068);
        } else if (selection == 11) {
	cm.dispose(); 
	cm.openNpc(9000019);
	} else if (selection == 4) {
	var omok = "#e#r어떤 #b오목세트#n#k를 #e#r지급#n#k받으시겠습니까?\r\n\r\n";
	omok += "#L41##i4080005##e#b [돼지, 버섯]#k 오목세트\r\n";
	omok += "#L42##i4080000##e#b [슬라임, 버섯]#k 오목세트\r\n";
	omok += "#L43##i4080002##e#b [슬라임, 돼지]#k 오목세트\r\n";
	omok += "#L44##i4080004##e#b [돼지, 옥토퍼스]#k 오목세트\r\n";
	omok += "#L45##i4080003##e#b [옥토퍼스, 버섯]#k 오목세트\r\n";
	omok += "#L46##i4080001##e#b [슬라임, 옥토퍼스]#k 오목세트\r\n";
	omok += "#L47##i4080007##e#b [블록퍼스, 트릭스터]#k 오목세트\r\n";
	omok += "#L48##i4080006##e#b [블록퍼스, 핑크 테니]#k 오목세트\r\n";
	omok += "#L49##i4080008##e#b [핑크 테니, 트릭스터]#k 오목세트\r\n";
	omok += "#L50##i4080009##e#b [팬더 테니, 블록퍼스]#k 오목세트\r\n";
	omok += "#L51##i4080011##e#b [팬더 테니, 트릭스터]#k 오목세트\r\n";
	omok += "#L52##i4080010##e#b [팬더 테니, 핑크 테니]#k 오목세트\r\n";
	cm.sendSimple(omok);
	} else if (selection == 5) {
	cm.gainItem(4080100, 1);
	cm.sendOk("#i4080100# #e#b같은그림찾기세트#k 지급#n이 #e#b완료#n#k되었습니다.\r\n#e즐거운 시간#n 보내세요!!");
	cm.dispose(); 
	} else if (selection == 6) {
		var event = "Human online #e#b노가다맵#k#n을 #e#b이용#n#k하게 된 여러분,\r\n#e#b메소#n#k가 없다고 #e#b좌절#n#k하지 말라구.\r\n이 #e#b노가다맵#n#k을 완료하면 적당한 #e#b보상#n#k을 받을 수 있을거야.\r\n\r\n";
		event += "#L53##e#d#b[펫 산책로]#k - 루디브리엄#k#n\r\n";
		event += "#L54##e#d#b[펫 산책로]#k - 헤네시스#k#k#n\r\n";
		event += "#L55##e#d#b[끈기의 숲]#k 1단계#k#n\r\n";
		event += "#L56##e#d#b[공사장]#kB1#k#n\r\n";
		event += "#L57##e#d#b[공사장]#kB2#n#k#n\r\n";
		event += "#L58##e#d#b[끈기의 숲]#k 2단계#k#n\r\n";
		event += "#L59##e#d#b[인내의 숲]#k 1단계#k#n\r\n";
		event += "#L60##e#d#b[공사장]#kB3#k#n\r\n";
		event += "#L61##e#d#b[인내의 숲]#k 2단계#k#n\r\n";
		event += "#L62##e#d#b[끈기의 숲]#k 3단계#k#n\r\n";
		cm.sendSimple(event);
	} else if (selection == 7) {
	var music = "#e#bHuman online#n#k에서는 #e#b노래#n#k를 #e#b변경#n#k하여 들을 수 있도록 하고 있지. #e#b뮤지션#n#k인 #e#b나#n#k, #e#b싸이#n#k의 #e#b특권#n#k 아니겟어?\r\n\r\n";
	music += "#L31##d#e 젠틀맨\r\n";
	music += "#L32##d#e 행오버\r\n";
	music += "#L33##d#e 눈코입\r\n";
	music += "#L34##d#e 강남스타일\r\n";
	music += "#L35##d#e HouseAppeal\r\n";
	music += "#L36##d#e FantasticBaby\r\n";
	music += "#L38##d#e Let It Go!\r\n";
	music += "#L39##d#e 블랙헤븐 엔딩 BGM\r\n";
/*	music += "#L37##d#e#b [대만야시장]#n#k\r\n";
	if (cm.getPlayer().isGM()) {
	music += "\r\n이 밑은 #e#bGM만#n#k 볼 수 있음.\r\n\r\n";
	music += "#L100##e#b 메인 BGM\r\n";
	music += "#L101##e#b 에반 튜토리얼\r\n";
	music += "#L102##e#b 행복한 마을\r\n";
	music += "#L103##e#b 오르비스 탑\r\n";
	music += "#L104##e#b 루디브리엄 비행선\r\n";
	music += "#L105##e#b 에오스 탑 내부\r\n";
	music += "#L106##e#b 에오스 탑 외부\r\n";
	music += "#L107##e#b 시계 탑 하층\r\n";
	music += "#L108##e#b 그레이의 숲\r\n";
	music += "#L109##e#b 마티안의 숲\r\n";
	music += "#L110##e#b 아랫마을\r\n";
	music += "#L111##e#b 아랫마을 사냥터\r\n";
	music += "#L112##e#b 아쿠아리움 서쪽바다\r\n";
	music += "#L113##e#b 마가티아\r\n";
	music += "#L114##e#b 코크타운\r\n";
	music += "#L115##e#b 리프레\r\n";
	music += "#L116##e#b 아리안트\r\n";
	music += "#L117##e#b 노틸러스\r\n";
	music += "#L118##e#b 음?\r\n";
	music += "#L119##e#b 안개바다의 유령선\r\n";
	music += "#L120##e#b 커닝스퀘어\r\n";
	music += "#L121##e#b 커닝스퀘어 필드\r\n";
	music += "#L122##e#b 커닝스퀘어 지하철\r\n";
	music += "#L123##e#b 에델슈타인\r\n";
	music += "#L124##e#b 상하이 필드\r\n";
	music += "#L125##e#b 과자성\r\n";
	music += "#L126##e#b 사쿠라마을(JMS)\r\n";
	music += "#L127##e#b 서문정\r\n";
	} */
	cm.sendSimple(music);
	} else if (selection == 8) {
	var photo = "#e#b포토존#n#k에서는 #e#b스크린샷#n#k을 찍을 수 있습니다.\r\n#e#b화면#n#k을 #e#b800 X 600#n#k으로 맞추고 #e#b스크린샷#n#k을 찍으시는 것이 좋습니다.\r\n";
//	photo += "#L71##e#b[포토존 1]#k 입장#k하기\r\n";
//	photo += "#L72##e#b[포토존 2]#k 입장#k하기\r\n";
	photo += "#L73##e#b[웨딩케이크]#k 스튜디오\r\n";
	photo += "#L74##e#b[웨딩박스]#k 스튜디오\r\n";
	photo += "#L75##e#b[행복한마을]#k 입장#k하기\r\n";
	cm.sendSimple(photo);
	} else if (selection == 9) {
	var event = "#e#b입장#n#k하실 #e#b이벤트#n#k를 #e#b선택#n#k해주세요.\r\n";
	event += "#L80##e#b[OX퀴즈맵]#k 입장하기\r\n";
//	event += "#L81##e#b[고지를 향해서]#k 입장하기\r\n";
//	event += "#L82##e#b[올라올라]#k 입장하기\r\n"; // 1번맵
//	event += "#L83##e#b[올라올라]#k 입장하기\r\n"; // 2번맵
//	event += "#L84##e#b[올라올라]#k 입장하기\r\n"; // 3번맵
//	event += "#L85##e#b[올라올라]#k 입장하기\r\n"; // 4번맵 
	cm.sendSimple(event);
	} else if (selection == 10) {
	cm.dispose();
	cm.openNpc(9220070);
	}
    }
    else if (status == 2) {
			if (selection == 0) {
				cm.dispose();
				cm.warp(100000000);
			} else if (selection == 1) {
				cm.dispose();
				cm.warp(101000000);
			} else if (selection == 2) {
				cm.dispose();
				cm.warp(102000000);
			} else if (selection == 3) {
				cm.dispose();
				cm.warp(103000000);
			} else if (selection == 4) {
				cm.dispose();
				cm.warp(104000000);
			} else if (selection == 5) {
				cm.dispose();
				cm.warp(105000000);
			} else if (selection == 6) {
				cm.dispose();
				cm.warp(120000000);
			} else if (selection == 7) {
				cm.dispose();
				cm.warp(130000000);
			} else if (selection == 8) {
				cm.dispose();
				cm.warp(140000000);
			} else if (selection == 9) {
				cm.dispose();
				cm.warp(200000000);
			} else if (selection == 10) {
				cm.dispose();
				cm.warp(211000000);
			} else if (selection == 11) {
				cm.dispose();
				cm.warp(220000000);
			} else if (selection == 12) {
				cm.dispose();
				cm.warp(221000000);
			} else if (selection == 13) {
				cm.dispose();
				cm.warp(222000000);
			} else if (selection == 14) {
				cm.dispose();
				cm.warp(230000000);
			} else if (selection == 15) {
				cm.dispose();
				cm.warp(240000000);
			} else if (selection == 16) {
				cm.dispose();
				cm.warp(250000000);
			} else if (selection == 17) {
				cm.dispose();
				cm.warp(251000000);
			} else if (selection == 18) {
				cm.dispose();
				cm.warp(260000000);
 			} else if (selection == 19) {
				cm.dispose();
				cm.warp(261000000);
			} else if (selection == 20) {
				cm.dispose();
				cm.warp(270000000);
			} else if (selection == 21) {
				cm.dispose();
				cm.warp(219000000);
			} else if (selection == 26) {
				cm.dispose();
				cm.sendRPS();
			} else if (selection == 27) {
			var wins = "\r\n"
			wins += "#L1##e#b[1연승 증명서]#k 교환#n하기 - #e#b1000#k메소\r\n";
			wins += "#L2##e#b[2연승 증명서]#k 교환#n하기 - #e#b1500#k메소\r\n";
			wins += "#L3##e#b[3연승 증명서]#k 교환#n하기 - #e#b3500#k메소\r\n";
			wins += "#L4##e#b[4연승 증명서]#k 교환#n하기 - #e#b10000#k메소\r\n";
			wins += "#L5##e#b[5연승 증명서]#k 교환#n하기 - #e#b35000#k메소\r\n";
			wins += "#L6##e#b[6연승 증명서]#k 교환#n하기 - #e#b100000#k메소\r\n";
			wins += "#L7##e#b[7연승 증명서]#k 교환#n하기 - #e#b350000#k메소\r\n";
			wins += "#L8##e#b[8연승 증명서]#k 교환#n하기 - #e#b1000000#k메소\r\n";
			wins += "#L9##e#b[9연승 증명서]#k 교환#n하기 - #e#b3500000#k메소\r\n";
			wins += "#L10##e#b[10연승 증명서]#k 교환#n하기 - #e#b10000000#k메소\r\n";
			cm.sendSimple(wins);
			}	else if (selection == 31) {
					cm.dispose();
					cm.changeMusic("젠틀맨/젠틀맨");
				} else if (selection == 32) {
					cm.dispose();
					cm.changeMusic("행오버/행오버");
				} else if (selection == 33) {
					cm.dispose();
					cm.changeMusic("눈코입/눈코입");
				} else if (selection == 34) {
					cm.dispose();
					cm.changeMusic("강남스타일/강남스타일");
				} else if (selection == 35) {
					cm.dispose();
					cm.changeMusic("HouseAppeal/HouseAppeal");
				} else if (selection == 36) {
					cm.dispose();
					cm.changeMusic("FantasticBaby/FantasticBaby");
				} else if (selection == 37) {
					cm.dispose();
					cm.changeMusic("BgmTW/NightField");
				} else if (selection == 38) {
					cm.dispose();
					cm.changeMusic("BgmUI/Title_Frozen");
				} else if (selection == 39) {
					cm.dispose();
					cm.changeMusic("Bgm41/PromiseOfHeaven");
			} else if (selection == 41) {
				cm.gainItem(4080005, 1);
				cm.sendOk("#i4080005##e#b [돼지, 버섯]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 42) {
				cm.gainItem(4080000, 1);
				cm.sendOk("#i4080000##e#b [슬라임, 버섯]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 43) {
				cm.gainItem(4080002, 1);
				cm.sendOk("#i4080002##e#b [슬라임, 돼지]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 44) {
				cm.gainItem(4080004, 1);
				cm.sendOk("#i4080004##e#b [돼지, 옥토퍼스]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 45) {
				cm.gainItem(4080003, 1);
				cm.sendOk("#i4080003##e#b [옥토퍼스, 버섯]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 46) {
				cm.gainItem(4080001, 1);
				cm.sendOk("#i4080001##e#b [슬라임, 옥토퍼스]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 47) {
				cm.gainItem(4080007, 1);
				cm.sendOk("#i4080007##e#b [블록퍼스, 트릭스터]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 48) {
				cm.gainItem(4080006, 1);
				cm.sendOk("#i4080006##e#b [블록퍼스, 핑크 테니]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 49) {
				cm.gainItem(4080008, 1);
				cm.sendOk("#i4080008##e#b [핑크 테니, 트릭스터]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 50) {
				cm.gainItem(4080009, 1);
				cm.sendOk("#i4080009##e#b [팬더 테니, 블록퍼스]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 51) {
				cm.gainItem(4080011, 1);
				cm.sendOk("#i4080011##e#b [팬더 테니, 트릭스터]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요!!\r\n");
				cm.dispose();
			} else if (selection == 52) {
				cm.gainItem(4080010, 1);
				cm.sendOk("#i4080010##e#b [팬더 테니, 핑크 테니]#k 오목세트 #b지급#n#k이 #e#b완료#n#k되었습니다. \r\n#e즐거운 시간#n 보내세요.\r\n");
				cm.dispose();
			} else if (selection == 53) {
				cm.dispose();
				cm.warp(220000006, 0);
			} else if (selection == 54) {
				cm.dispose();
				cm.warp(100000202, 0);
			} else if (selection == 55) {
				cm.dispose();
				cm.warp(910530000, 0);
			} else if (selection == 56) {
				cm.dispose();
				cm.warp(910360000, 0);
			} else if (selection == 57) {
				cm.dispose();
				cm.warp(910360100, 0);
			} else if (selection == 58) {
				cm.dispose();
				cm.warp(910530100, 0);
			} else if (selection == 59) {
				cm.dispose();
				cm.warp(910130000, 0);
			} else if (selection == 60) {
				cm.dispose();
				cm.warp(910360200, 0);
			} else if (selection == 61) {
				cm.dispose();
				cm.warp(910130100, 0);
			} else if (selection == 62) {
				cm.dispose();
				cm.warp(910530200, 0);
			} else if (selection == 71) {
				cm.dispose();
				cm.warp(970000000);
			} else if (selection == 72) {
				cm.dispose();
				cm.warp(970000100);
			} else if (selection == 73) {
				cm.dispose();
				cm.warp(680000300);
			} else if (selection == 74) {
				cm.dispose();
				cm.warp(680000401);
			} else if (selection == 75) {
				cm.dispose();
				cm.warp(209000000);
			} else if (selection == 80) {
				//cm.sendOk("#e#b해당맵#n#k은 #eGM#n이 #e#b이벤트#n#k를 #e#b시작#n#k할 때만 #e#b입장#n#k할 수 있습니다.\r\n");
				cm.dispose();
				cm.warp(109050001);
			} else if (selection == 81) {
				cm.sendOk("#e#b해당맵#n#k은 #eGM#n이 #e#b이벤트#n#k를 #e#b시작#n#k할 때만 #e#b입장#n#k할 수 있습니다.\r\n");
				cm.dispose();
			//	cm.warp(109040000);
			} else if (selection == 82) {
				cm.sendOk("#e#b해당맵#n#k은 #eGM#n이 #e#b이벤트#n#k를 #e#b시작#n#k할 때만 #e#b입장#n#k할 수 있습니다.\r\n");
				cm.dispose();
			//	cm.warp(109030101);
			} else if (selection == 83) {
				cm.sendOk("#e#b해당맵#n#k은 #eGM#n이 #e#b이벤트#n#k를 #e#b시작#n#k할 때만 #e#b입장#n#k할 수 있습니다.\r\n");
				cm.dispose();
			//	cm.warp(109030201);
			} else if (selection == 84) {
				cm.sendOk("#e#b해당맵#n#k은 #eGM#n이 #e#b이벤트#n#k를 #e#b시작#n#k할 때만 #e#b입장#n#k할 수 있습니다.\r\n");
				cm.dispose();
			//	cm.warp(109030301);
			} else if (selection == 85) {
				cm.sendOk("#e#b해당맵#n#k은 #eGM#n이 #e#b이벤트#n#k를 #e#b시작#n#k할 때만 #e#b입장#n#k할 수 있습니다.\r\n");
				cm.dispose();
			//	cm.warp(109030401);
			} else if (selection == 100) {
				cm.dispose();
				cm.changeMusic("BgmUI/Title");
			} else if (selection == 101) {
				cm.dispose();
				cm.changeMusic("Bgm00/DragonDream");
			} else if (selection == 102) {
				cm.dispose();
				cm.changeMusic("Bgm04/WhiteChristmas");
			} else if (selection == 103) {
				cm.dispose();
				cm.changeMusic("Bgm06/ComeWithMe");
			} else if (selection == 104) {
				cm.dispose();
				cm.changeMusic("Bgm06/FlyingInABlueDream");
			} else if (selection == 105) {
				cm.dispose();
				cm.changeMusic("Bgm07/FunnyTimeMaker");
			} else if (selection == 106) {
				cm.dispose();
				cm.changeMusic("Bgm07/HighEnough");
			} else if (selection == 107) {
				cm.dispose();
				cm.changeMusic("Bgm07/WhereverYouAre");
			} else if (selection == 108) {
				cm.dispose();
				cm.changeMusic("Bgm08/FindingForest");
			} else if (selection == 109) {
				cm.dispose();
				cm.changeMusic("Bgm08/LetsHuntAliens");
			} else if (selection == 110) {
				cm.dispose();
				cm.changeMusic("Bgm11/DownTown");
			} else if (selection == 111) {
				cm.dispose();
				cm.changeMusic("Bgm11/DarkMountain");
			} else if (selection == 112) {
				cm.dispose();
				cm.changeMusic("Bgm11/ShiningSea");
			} else if (selection == 113) {
				cm.dispose();
				cm.changeMusic("Bgm12/Dispute");
			} else if (selection == 114) {
				cm.dispose();
				cm.changeMusic("Bgm13/CokeTown");
			} else if (selection == 115) {
				cm.dispose();
				cm.changeMusic("Bgm13/Leafre");
			} else if (selection == 116) {
				cm.dispose();
				cm.changeMusic("Bgm14/Ariant");
			} else if (selection == 117) {
				cm.dispose();
				cm.changeMusic("Bgm15/Nautilus");
			} else if (selection == 118) {
				cm.dispose();
				cm.changeMusic("Bgm18/WolfAndSheep");
			} else if (selection == 119) {
				cm.dispose();
				cm.changeMusic("Bgm20/GhostShip");
			} else if (selection == 120) {
				cm.dispose();
				cm.changeMusic("Bgm21/KerningSquare");
			} else if (selection == 121) {
				cm.dispose();
				cm.changeMusic("Bgm21/KerningSquareField");
			} else if (selection == 122) {
				cm.dispose();
				cm.changeMusic("Bgm21/KerningSquareSubway");
			} else if (selection == 123) {
				cm.dispose();
				cm.changeMusic("Bgm22/EdelsteinCity");
			} else if (selection == 124) {
				cm.dispose();
				cm.changeMusic("BgmCN/ShanghaiField");
			} else if (selection == 125) {
				cm.dispose();
				cm.changeMusic("BgmEvent/wichTower");
			} else if (selection == 126) {
				cm.dispose();
				cm.changeMusic("BgmJp/Yume");
			} else if (selection == 127) {
				cm.dispose();
				cm.changeMusic("BgmTW/YoTaipei");
			}
		}

	else if (status == 3) {
		if (selection == 1){
			if (cm.haveItem(4031332) == true) {
				cm.gainItem(4031332, -1);
				cm.gainMeso(1000);
				cm.sendOk("#e#b1000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[1연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.haveItem(4031333) == true) {
				cm.gainItem(4031333, -1);
				cm.gainMeso(1500);
				cm.sendOk("#e#b1500#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[2연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 3) {
			if (cm.haveItem(4031334) == true) {
				cm.gainItem(4031334, -1);
				cm.gainMeso(3500);
				cm.sendOk("#e#b3500#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[3연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.haveItem(4031335) == true) {
				cm.gainItem(4031335, -1);
				cm.gainMeso(10000);
				cm.sendOk("#e#b10000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[4연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 5) {
			if (cm.haveItem(4031336) == true) {
				cm.gainItem(4031336, -1);
				cm.gainMeso(35000);
				cm.sendOk("#e#b35000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			} 
			else {
				cm.sendOk("#e#b[5연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}  
		} else if (selection == 6) {
			if (cm.haveItem(4031337) == true) {
				cm.gainItem(4031337, -1);
				cm.gainMeso(100000);
				cm.sendOk("#e#b100000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[6연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 7) {
			if (cm.haveItem(4031338) == true) {
				cm.gainItem(4031338, -1);
				cm.gainMeso(350000)
				cm.sendOk("#e#b350000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[7연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 8) {
			if (cm.haveItem(4031339) == true) {
				cm.gainItem(4031339, -1);
				cm.gainMeso(1000000);
				cm.sendOk("#e#b1000000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[8연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 9) {
			if (cm.haveItem(4031340) == true) {
				cm.gainItem(4031340, -1);
				cm.gainMeso(3500000);
				cm.sendOk("#e#b3500000#k메소#n와 #e#b2만#k캐시#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[9연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 10){
			if (cm.haveItem(4031341) == true) {
				cm.gainItem(4031341, -1);
				cm.gainMeso(10000000);
				cm.sendOk("#e#b10000000#k메소#n와 #e#b10만#k캐시#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[10연승 증명서]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		}
	}
}




