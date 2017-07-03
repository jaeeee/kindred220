/* 레베카

//	chat +="#Cgray#　현재 프리미엄 사냥터는 운영을 종료하였습니다.#k";
 */

importPackage(Packages.packet.creators);

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
	if (cm.getMapId() != 910180000 && cm.getMapId() !=910170000) {
	var chat = "In charge of the special item drop-regional movement #bCesar#k A.";
	chat +="\r\n";
	//chat +="#r#e[]#k#n\r\n";
	//if (cm.haveItem(1003142)){
	//chat +="#b#e#L22#운영자가 되고 싶습니다.#n#l\r\n\r\n"
	chat +="#b#L01#Please describe the drop area.#l\r\n\r\n\r\n#k";
	chat +="#r#e           [저스티스 드롭지역]#k#n\r\n#b";
	chat +="#L2#드롭지역 #b저스티스#k 를 입장하겠습니다.#l\r\n";
	chat +="#L12#드롭지역 #b저스티스#k 지역 안내서#l";
	chat +="\r\n\r\n\r\n";
	chat +="#r#e           [보스코인 드롭지역]#k#n\r\n#b";
	chat +="#L3#드롭지역 #b보스코인#k 를 입장하겠습니다.#l\r\n";
	chat +="#L13#드롭지역 #b보스코인#k 지역 안내서#l";
	chat +="\r\n\r\n\r\n";
	chat +="#r#e           [Royal Style 쿠폰 드롭지역]#k#n\r\n#b";
	chat +="#L4#드롭지역 #bRoyal Style#k 를 입장하겠습니다.#l\r\n";
	chat +="#L14#드롭지역 #bRoyal Style#k 지역 안내서#l";
	chat +="\r\n\r\n\r\n";
	chat +="#b#e                 [특별 고객 전용메뉴]#k#n\r\n#b";
	if (cm.haveItem(4032130,100)){
	chat +="#L10#Special Areas#r모든드롭지역#k로 이동하고 싶습니다.#l\r\n";
	chat +="#L15#Special Areas #b모든드롭지역#k 사냥터 안내서#l";
	chat +="\r\n\r\n\r\n";
	}else{
	chat +="#L59##Cgray##i4310027# #z4310027# 50개 소지시 활성화됩니다..#l";
	chat +="\r\n\r\n\r\n";
}
//해당 플레이어가 GM일때
//	if (cm.getPlayer().hasGmLevel(6)){
//	chat +="#r#e[관리자 전용메뉴]#k#n\r\n#b";
//	chat +="#L20##i4032130# #z4032130#을 발급받는다.#l\r\n";
//	chat +="#L21##i1003142# #z1003142#을 발급받는다.#l\r\n";
//	chat +="#L24##i5530142# 배율 설정을 변경한다.#l\r\n";
//	chat +="#L23##i1522094# 파프니르 무기를 제작한다#l";
	chat +="\r\n\r\n\r\n";

	       cm.sendSimple(chat);
//사냥터(이 엔피시는 특별 전용)
	} else {
	cm.dispose();
	cm.openNpc(9070007);
	}

/***** 선택문 *****/

// 사냥터 질문
	} if (selection == 1) {
        cm.dispose();
	var a ="Drop hunting areas는 일부 컨텐츠를 이용하기위해 준비된 시스템입니다.\r\n";
	a +="Drop hunting areas는 총 4종류로 구성되어 있습니다.";
	a +="각 지역마다 드롭하는 아이템이 각자 다릅니다.";
	a +="간혹 레어아이템도 드롭되기도 The.";
		cm.sendOk(a);
// 일반회원 사냥터 설명
	} else if (selection == 50) {
	var normal ="#e#b현재 까지 공개된 '#r 판도라 #k' 에 대한 설명입니다. #n#k\r\n\r\n";
	normal +="저희 월드에서 내려오는 고서에는 이러하게 적혀있습니다.";
	normal +="　#e빛이 깃든자#n #r성배#k 를 높게들고 나라를 구할것이다.\r\n";
	normal +="여기서 성배가 뜻하는것이 바로 '#r 판도라 #k' 라고 생각The.\r\n";
	normal +="하지만 #e빛이 깃든자#n 에 대해서는 아는 바가 없습니다.\r\n\r\n";
	normal +="일단 모험가님 전선에 뛰어들어 펠로스 연합을 막아주세요";
		cm.sendSimple(normal);

// 펠로스 연합의 알려진 전력
	}else if (selection == 51) {
	var normal ="#e#b펠로스 연합은 #r영웅#k과 #b모험가#k로 구성되어있습니다.n#k\r\n\r\n";
		cm.sendSimple(normal);

// vip사냥터 설명
	}else if (selection == 52) {
	var normal ="#e#b데로스 연합은 #r레지스탕스#k와 #b시그너스#k로 구성되어있습니다.#k\r\n\r\n";
		cm.sendSimple(normal);
// 우녕자
	} else if (selection == 22) {
	cm.gainItem(4001760, -1);
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
	cm.sendOk("This item has been paid.");
	cm.dispose();
// 황금색 단풍잎 소개
	} else if (selection == 59) {
	cm.dispose();
	var h ="#b#z4032130##kYou can buy the sponsor-point hasilsu 5000p.";
	h +="The drop rate of monsters in this legendary coin five times. ";
	h +="This is the average experience of the monster in 3 billion cheon 7 ~ 8 3 eok cloth.";
	h +="#z4032130#It is not consumed. #b#z4032130##kIf you are in possession of a possible entry into the infiniteThe.";
		cm.sendOk(h);
// 이지모드 안내
	} else if (selection == 12) {
	cm.dispose();
	var h ="#b< Maple Leaf drop-regional guidance >#k\r\n";
	h +="Name : However henchmen hip-hop cats\r\n";
	h +="Level : LV.30이상 \r\n";
	h +="maxHP : 50000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="EXP : 100 \r\n";	
	h +="Drop items :#i4310080#Others etc.  \r\n";	
	cm.sendOk(h);
// 노발모드 안내
	} else if (selection == 13) {
	cm.dispose();
	var h ="#b< 레드코인 드롭지역 안내 >#k\r\n";
	h +="Name : 붉은 도깨비\r\n";
	h +="Level : LV.100이상 \r\n";
	h +="maxHP : 5000000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="EXP : 100 \r\n";	
	h +="Drop items :#i4310088#Others etc.  \r\n";	
	cm.sendOk(h);
// 하드모드 안내
	} else if (selection == 14) {
	cm.dispose();
	var h ="#b< Royal Style Drop area guides >#k\r\n";
	h +="name : Connie fallen frozen\r\n";
	h +="name : Skeletal fallen regon\r\n";
	h +="level : LV.130이상 \r\n";
	h +="maxHP : 50000000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="Experience : 100 \r\n";	
	h +="Drop items :#i5680157#Others etc.  \r\n";	
	cm.sendOk(h);
// 특별모드 안내
	} else if (selection == 15) {
	cm.dispose();
	var h ="#b< Drop all local guide >#k\r\n";
	h +="name : Hip-hop cats only executive\r\n";
	h +="level : LV.30이상 \r\n";
	h +="maxHP : 100000 \r\n";
	h +="maxMP : 20000 \r\n";
	h +="Experience : 100 \r\n";	
	h +="Drop items :#i5680157##i4310088##i4310080#Drop rate twice that of!  \r\n";	
	cm.sendOk(h);
// 프리미엄 사냥터(이지) 이동
	} else if (selection == 2 ) {
	if(cm.haveItem (3994789, 1)) {
	cm.gainItem(3994789, -1);
	cm.warp(910170000);
	cm.getPlayer().send(MainPacketCreator.sendHint("Drop hunting areas #bJustice#k You have to stand.\r\nHave fun hunting",300,20));
	cm.dispose();
	} else {
	cm.sendOk("Drop hunting areas #b<저스티스>#k In order to demonstrate the #b#v3994789# One needs#kThe.\r\n#v3994789# silver #bConvenience store#kAvailable in..\r\nif, #v3994789#If you use both, #bConvenience storePurchase from#kplease do it.");
	cm.dispose();
	}
// 프리미엄 사냥터(노말) 이동
	} else if (selection == 3 ) {
	if(cm.haveItem (3994789, 1)) {
	cm.gainItem(3994789, -1);
	cm.warp(252020300);
	cm.getPlayer().send(MainPacketCreator.sendHint("Drop hunting areas #bThe Bosco#k You have to stand.\r\nHave fun hunting",300,20));
        cm.dispose;
	} else {
	cm.sendOk("Drop hunting areas #b<보스코인>#k In order to demonstrate the #b#v3994789# One needs#kThe.\r\n#v3994789# silver #bConvenience store#kAvailable in..\r\nif, #v3994789#If you use both, #bConvenience storePurchase from#kplease do it.");
	cm.dispose();
	}
// 프리미엄 사냥터(하드) 이동
	} else if (selection == 4 ) {
	if(cm.haveItem (3994789, 1)) {
	cm.gainItem(3994789, -1);
	cm.warp(272000400);
	cm.getPlayer().send(MainPacketCreator.sendHint("Drop hunting areas #bRoyal Style#k You have to stand.\r\nHave fun hunting",300,20));
        cm.dispose;
	} else {
	cm.sendOk("Drop hunting areas #b<Royal Style>#k In order to demonstrate the #b#v3994789# One needs#kThe.\r\n#v3994789# silver #bConvenience store#kAvailable in..\r\nif, #v3994789#If you use both, #bConvenience storePurchase from#kplease do it.");
	cm.dispose();
	}




// 프리미엄 사냥터(특별)이동
	} else if (selection == 10 ) {
	if(cm.getMeso () >= 1000) {
	cm.warp(910180000);
        cm.getPlayer().send(MainPacketCreator.sendHint("Special hunting  #bSpecial Areas#k You have to stand.\r\nHave fun hunting",300,20));
	cm.gainMeso(-1000)
        cm.dispose();
	} else {
	cm.sendOk("The lack Methodist");
	cm.dispose();
	}

// 운영자 단풍잎 지급
	} else if (selection == 20) {
	cm.gainItem(4032130, 100);
	cm.sendOk("The payment has been completed. #h #Ukon '-^");
	cm.dispose();
	}
//끝나는 괄호
	  		}
	}