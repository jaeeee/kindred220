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
	if (cm.getMapId() !=910180000) {
	var chat ="#b프리미엄 사냥터#r(일반)#k에 오신 것을 환영합니다!\r\n\r\n";
	chat +="#r#e[일반회원 전용메뉴]#k#n\r\n";
	chat +="#b#L03#프리미엄 사냥터#r(일반)#b에 대한 설명을 듣는다.#l\r\n";
	chat +="#b#L01#사냥을 마치고 마을로 돌아간다.#l\r\n";
	cm.sendSimple(chat);

	} else {
	var chat ="#b프리미엄 사냥터#r(특별)#k에 오신 것을 환영합니다!\r\n\r\n";
	chat +="#r#e[특별회원 전용메뉴]#k#n\r\n";
	chat +="#b#L02#프리미엄 사냥터#r(특별)#b에 대한 설명을 듣는다.#l\r\n";
	chat +="#b#L01#사냥을 마치고 마을로 돌아간다.#l";
	chat +="\r\n\r\n\r\n";
	chat +="#r#e[특별회원 부가서비스]#k#n\r\n#b";
	chat +="#L90#환생을 하겠습니다.\r\n";
	chat +="#L91##r#z2431349##b을 사겠습니다. (500만 메소)\r\n";
	cm.sendSimple(chat);
	}

// 해당 플레이어가 4032130(황금색 단풍잎)를 가지고 있을 때

/***** 선택문 *****/

// 사냥터 질문
	} if (selection == 1) {
	cm.dispose();
	cm.warp(1000000);
	cm.sendOk("다음에 또 이용해주세요. 감사합니다.");

// 특별회원 사냥터 설명
	}else if (selection == 2) {
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

// 일반사냥터 설명
	} else if (selection == 3) {
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


// 환생
	} else if (selection == 90) {
	cm.dispose();
	cm.openNpc(9000006);

// 홀심버프 쿠폰
	} else if (selection == 91 ) {
	if(cm.getMeso () >= 5000000) {
	cm.gainItem(2431349, 1)
	cm.gainMeso(-5000000)
            	    cm.dispose();
	} else {
	cm.sendOk("메소가 부족합니다");
	cm.dispose();
	}

// 황금색 단풍잎 소개
	} else if (selection == 59) {
	cm.dispose();
	var h ="#b#z4032130##k은 미라클월드를 창조하고 남은 잔여물이 응축된 형태로 남아있게 된 물체입니다.";
	h +="미라클월드 사방에 분포한 이것은 평범하게 사냥으로는 얻을 수 없습니다. #b보스레이드 상점#k의 #b#z2431319##k나 ";
	h +="이벤트를 통해, 또는 메소를 주고 구입하실 수 있습니다.";
		cm.sendOk(h);
}
//끝나는 괄호
	  		}
	}