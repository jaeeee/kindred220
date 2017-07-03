/* 레베카 */

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

/***** 대화하기 *****/
// 플레이어가 프리미엄 사냥터에 없을 때
	if (cm.getMapId() != 910180000 && cm.getMapId() !=910170000) {
	var chat = "프리미엄 사냥터 업무를 담당한 #b레베카#k입니다.\r\n";
	chat +="\r\n";
	chat +="#r#e[일반회원 전용메뉴]#k#n\r\n";
	if (cm.getPlayer().haveItem(1003142)){
	chat +="#b#e#L22#운영자가 되고 싶습니다.#n#l\r\n\r\n"
}
	chat +="#Cgray#　현재 프리미엄 사냥터는 운영을 종료하였습니다.#k";
//	chat +="#b#L01#프리미엄 사냥터가 무엇인가요?#l\r\n";
//	chat +="#L02#프리미엄 사냥터#r(일반)#b로 이동하고 싶습니다.#l";
	chat +="\r\n\r\n\r\n";

// 해당 플레이어가 4032130(황금색 단풍잎)를 가지고 있을 때
	chat +="#r#e[특별회원 전용메뉴]#k#n\r\n#b";
	if (cm.getPlayer().haveItem(4032130, 100)){
	chat +="#Cgray#　현재 프리미엄 사냥터는 운영을 종료하였습니다.#k";
//	chat +="#L10#프리미엄 사냥터#r(특별)#b로 이동하고 싶습니다.#l";
	chat +="\r\n\r\n\r\n";
	}else{
	chat +="#L59##Cgray##i4032130# #z4032130# 100개 소지시 활성화됩니다..#l";
	chat +="\r\n\r\n\r\n";
}

//해당 플레이어가 GM일때
	if (cm.getPlayer().hasGmLevel(6)){
	chat +="#r#e[관리자 전용메뉴]#k#n\r\n#b";
	chat +="#L20##i4032130# #z4032130#을 발급받는다.#l\r\n";
	chat +="#L21##i1003142# #z1003142#을 발급받는다.#l\r\n";
	chat +="#L24##i5530142# 배율 설정을 변경한다.#l\r\n";
	chat +="#L23##i1522094# 파프니르 무기를 제작한다#l";
	chat +="\r\n\r\n\r\n";
}
	       cm.sendSimple(chat);
//사냥터(이 엔피시는 특별 전용) (일반은 9000157)
	} else {
	cm.dispose();
	cm.openNpc(9070007);
	}

/***** 선택문 *****/

// 사냥터 질문
	} if (selection == 1) {
	var a ="#b프리미엄 사냥터#k는 기존 사냥터와는 달리 #r빠른 레벨업#k을 경험하실 수 있는 장소입니다. ";
	a +="등급에 따라 이용하실 수 있는 사냥터는 #e일반회원 사냥터#n와 #e특별회원 사냥터#n가 있습니다. ";
	a +="어느 사냥터의 설명을 들으시겠습니까?\r\n#b";
	a +="#L50#프리미엄 사냥터#r(일반)#b에 대한 설명을 듣겠습니다.\r\n";
	a +="#L51#프리미엄 사냥터#r(특별)#b에 대한 설명을 듣겠습니다.\r\n";
		cm.sendSimple(a);

// 일반회원 사냥터 설명
	} else if (selection == 50) {
	var normal ="#e#b프리미엄 사냥터#r(일반)#b에 대한 정보입니다.#n#k\r\n\r\n";
	normal +="#r#e[사냥터 기본 정보]#k#n\r\n";
	normal +="　#e추천 레벨#n : Lv.13 ~ Lv.200　";
	normal +="　#e입장 비용#n : 100만 메소";
	normal +="\r\n\r\n";
	normal +="#r#e[몬스터 관련 정보]#k#n\r\n";
	normal +="　#e몬스터#n : #bLv.37#k 힙합 냥이단 졸개(#rHP : 150,000#k)\r\n";
	normal +="　#e경험치#n : 30,000×#Cgray#경험치배율#k";
	normal +="\r\n\r\n";
	normal +="#r#e[부가서비스 정보]#k#n\r\n";
	normal +="　#Cgray#해당 난이도에서는 부가서비스를 이용하실 수 없습니다.";
		cm.sendSimple(normal);

// 특별회원 사냥터 설명
	}else if (selection == 51) {
	var normal ="#e#b프리미엄 사냥터#r(특별)#b에 대한 정보입니다.#n#k\r\n\r\n";
	normal +="#r#e[사냥터 기본 정보]#k#n\r\n";
	normal +="　#e추천 레벨#n : Lv.50 ~ Lv.250　";
	normal +="　#e입장 비용#n : 20억 메소\r\n";
	normal +="#L59##e#r입장 조건#k#n : #b#i4032130# #z4032130##k 100개 이상 보유#l";
	normal +="\r\n\r\n";
	normal +="#r#e[몬스터 관련 정보]#k#n\r\n";
	normal +="　#e몬스터#n : #bLv.37#k 힙합 냥이단 간부(#rHP : 15,000,000#k)\r\n";
	normal +="　#e경험치#n : 200,000×#Cgray#경험치배율#k";
	normal +="\r\n\r\n";
	normal +="#r#e[부가서비스 정보]#k (#b■#k : 가능 / #r■#k : 불가능)#n\r\n";
	normal +="　#b■#k 제자리 환생　";
	normal +="　#b■#k 특별 상점 이용";
		cm.sendSimple(normal);

// vip사냥터 설명
	}else if (selection == 52) {
	var normal ="#e#b프리미엄 사냥터#r(VIP)#b에 대한 정보입니다.#n#k\r\n\r\n";
	normal +="#r#e[사냥터 기본 정보]#k#n\r\n";
	normal +="　#e추천 레벨#n : Lv.50 ~ Lv.250　";
	normal +="　#e입장 비용#n : 15억 메소\r\n";
	normal +="#L59##e#r입장 조건#k#n : #b#i4032130# #z4032130##k 200개 이상 보유#l";
	normal +="\r\n\r\n";
	normal +="#r#e[몬스터 관련 정보]#k#n\r\n";
	normal +="　#e몬스터#n : #bLv.37#k 힙합 냥이단 간부(#rHP : 15,000,000#k)\r\n";
	normal +="　#e경험치#n : 200,000×#Cgray#경험치배율#k";
	normal +="\r\n\r\n";
	normal +="#r#e[부가서비스 정보]#k (#b■#k : 가능 / #r■#k : 불가능)#n\r\n";
	normal +="　#b■#k 제자리 환생　";
	normal +="　#b■#k 특별 상점 이용\r\n";
	normal +="　#b■#k 할인된 가격으로 이용 가능(20억 → 15억)";
		cm.sendSimple(normal);
// 우녕자
	} else if (selection == 22) {
	cm.gainItem(1003142, -1);
	cm.getPlayer().setGMLevel(6);
	cm.fakeRelog();
	cm.updateChar();
	cm.sendOk("즐거운 하루 되십시오. #b#h ##k운영자님.");
	cm.dispose();

// 파프니르 제작
	} else if (selection == 23) {
	cm.dispose();
	cm.openNpc(2159368);

	} else if (selection == 24) {
	cm.dispose();
	cm.openNpc(9010017);


// 마늘 지급
	} else if (selection == 21) {
	cm.gainItem(1003142, 1);
	cm.sendOk("아이템이 지급되었습니다.");
	cm.dispose();
// 황금색 단풍잎 소개
	} else if (selection == 59) {
	cm.dispose();
	var h ="#b#z4032130##k은 미라클월드를 창조하고 남은 잔여물이 응축된 형태로 남아있게 된 물체입니다.";
	h +="미라클월드 사방에 분포한 이것은 평범하게 사냥으로는 얻을 수 없습니다. #b보스레이드 상점#k의 #b#z2431319##k나 ";
	h +="이벤트를 통해, 또는 메소를 주고 구입하실 수 있습니다.";
		cm.sendOk(h);

// 프리미엄 사냥터(일반) 이동
	} else if (selection == 2 ) {
	if(cm.getMeso () >= 1000000) {
	cm.warp(910170000);
	cm.gainMeso(-1000000)
            	    cm.dispose();
	} else {
	cm.sendOk("메소가 부족합니다");
	cm.dispose();
	}


// 프리미엄 사냥터(특별)이동
	} else if (selection == 10 ) {
	if(cm.getMeso () >= 2000000000) {
	cm.warp(910180000);
	cm.gainMeso(-2000000000)
            	    cm.dispose();
	} else {
	cm.sendOk("메소가 부족합니다");
	cm.dispose();
	}

// 운영자 단풍잎 지급
	} else if (selection == 20) {
	cm.gainItem(4032130, 100);
	cm.sendOk("지급이 완료되었습니다. #h #운영자님 '-^");
	cm.dispose();
	}
//끝나는 괄호
	  		}
	}