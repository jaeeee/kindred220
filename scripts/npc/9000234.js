/* 레베카

//	chat +="#Cgray#　현재 프리미엄 사냥터는 운영을 종료하였습니다.#k";
 */

importPackage(java.lang);
importPackage(Packages.launch.world);
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
	var chat = "원하는 사냥터를 클릭하면되!\r\n#L161##b메소 사냥터#k (크로스헌터 마스터 전용)#k#n\r\n#L20##b스피드업 사냥터#k\r\n#L199##b다양한 코인 사냥터#k\r\n#L159##b일반 사냥터, 보스맵 이동#k";
	//chat +="#r#e[]#k#n\r\n";
	//if (cm.haveItem(1003142)){
	//chat +="#b#e#L22#운영자가 되고 싶습니다.#n#l\r\n\r\n"
	if (cm.haveItem(4032130,100)){
	chat +="#L10#특별지역#r모든 드롭지역#k으로 이동하고 싶습니다.#l\r\n";
	chat +="#L15#특별지역 #b모든 드롭지역#k 사냥터 안내#l";
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
	if(cm.haveItem (4033311, 1) && cm.haveItem (4001083, 1)) {
	cm.gainItem(4033311, -1);
	cm.gainItem(4001083, -1);
	cm.sendOk("#b크로스헌터#k의 길에 첫발을 내딛으신걸 축하드립니다. 앞으로 더욱 성장하시기 바랍니다.")
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[크로스헌터] "+ cm.getPlayer().getName()+"님께서 견습 크로스헌터가되셨습니다.")); // 전체 알림 
	cm.gainItem(1142350, 1);
	cm.dispose();
	} else {
	cm.sendOk("#i4033311# #b#t4033311##k, #i4001083# #b#t4001083##k\r\n보스를 잡고 증표로 위의 아이템을 모아오세요.");
	cm.dispose();
	}
// 일반회원 사냥터 설명
	} else if (selection == 50) {
	var normal ="#e#b현재 까지 공개된 '#r 판도라 #k' 에 대한 설명입니다. #n#k\r\n\r\n";
	normal +="저희 월드에서 내려오는 고서에는 이러하게 적혀있습니다.";
	normal +="　#e빛이 깃든자#n #r성배#k 를 높게들고 나라를 구할것이다.\r\n";
	normal +="여기서 성배가 뜻하는것이 바로 '#r 판도라 #k' 라고 생각합니다.\r\n";
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

	} else if (selection == 199) {
	cm.dispose();
	cm.openNpc(2084001);


// 마늘 지급
	} else if (selection == 21) {
	cm.gainItem(1003142, 1);
	cm.sendOk("아이템이 지급되었습니다.");
	cm.dispose();
// 황금색 단풍잎 소개
	} else if (selection == 59) {
	cm.dispose();
	var h ="#b#z4032130##k은 후원포인트 5000p로 구매하실수 있습니다.";
	h +="이 안의 몬스터의 레전드코인 드롭률은 5배입니다.";
	h +="이 안의 몬스터의 평균경험치는 3억7천~3억8천입니다.";
	h +="#z4032130#은 소모되지 않습니다. #b#z4032130##k을 소지하고 있으면 무한으로 입장이가능합니다.";
		cm.sendOk(h);
// 이지모드 안내
	} else if (selection == 12) {
	cm.dispose();
	var h ="#b< 10주년 단풍잎 드롭지역 안내 >#k\r\n";
	h +="이름 : 힙합 냥이단 졸개\r\n";
	h +="레벨 : LV.30이상 \r\n";
	h +="maxHP : 50000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="경험치 : 100 \r\n";	
	h +="드롭아이템 :#i4310080#외 등등  \r\n";	
	cm.sendOk(h);
// 노발모드 안내
	} else if (selection == 13) {
	cm.dispose();
	var h ="#b< 레드코인 드롭지역 안내 >#k\r\n";
	h +="이름 : 붉은 도깨비\r\n";
	h +="레벨 : LV.100이상 \r\n";
	h +="maxHP : 5000000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="경험치 : 100 \r\n";	
	h +="드롭아이템 :#i4310088#외 등등  \r\n";	
	cm.sendOk(h);
// 하드모드 안내
	} else if (selection == 14) {
	cm.dispose();
	var h ="#b< 로얄스타일 드롭지역 안내 >#k\r\n";
	h +="이름 : 타락한 코니언\r\n";
	h +="이름 : 타락한 스켈레곤\r\n";
	h +="레벨 : LV.130이상 \r\n";
	h +="maxHP : 50000000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="경험치 : 100 \r\n";	
	h +="드롭아이템 :#i5680157#외 등등  \r\n";	
	cm.sendOk(h);
// 특별모드 안내
	} else if (selection == 15) {
	cm.dispose();
	var h ="#b< 모든 드롭지역 안내 >#k\r\n";
	h +="이름 : 힙합 냥이단 간부\r\n";
	h +="레벨 : LV.30이상 \r\n";
	h +="maxHP : 100000 \r\n";
	h +="maxMP : 20000 \r\n";
	h +="경험치 : 100 \r\n";	
	h +="드롭아이템 :#i5680157##i4310088##i4310080#의 드롭률2배!  \r\n";	
	cm.sendOk(h);
	} else if (selection == 1001) {
	cm.dispose();
	var h ="#b< 타이믹 코인 드롭지역 안내 >#k\r\n";
	h +="이름 : 흰털 어미 원숭이\r\n";
	h +="레벨 : LV.120이상 \r\n";
	h +="maxHP : ?? \r\n";
	h +="maxMP : ?? \r\n";
	h +="경험치 : ?? \r\n";	
	h +="드롭아이템 : #i4310085# #b#z4310085##k";	
	cm.sendOk(h);
// 프리미엄 사냥터(이지) 이동
	} else if (selection == 2 ) {
	if(cm.haveItem (1142350, 1) && cm.haveItem (4001083, 1) && cm.haveItem(4033311, 1) && cm.haveItem(4033312, 1)) {
	cm.gainItem(4033311, -1);
	cm.gainItem(4001083, -1);
	cm.gainItem(4033312, -1);
	cm.gainItem(1142350, -1);
	cm.sendOk("이제 어엿한 #b정식 크로스헌터#k가되셧군요. 축하드립니다.")
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[크로스헌터] "+ cm.getPlayer().getName()+"님께서 정식 크로스헌터가되셨습니다.")); // 전체 알림 
	cm.gainItem(1142352, 1);
	cm.dispose();
	} else {
	cm.sendOk("#b견습 크로스헌터#k가 되시고난 후에 각 보스들을 잡고 그 증표로 아래 아이템들을 모아오세요.\r\n\r\n#e< 필요한 증표 >#n\r\n#i4001083# #b#t4001083##k, #i4033311# #b#t4033311##k\r\n#i4033312# #b#t4033312##k, #i1142350# #b#t1142350##k");
	cm.dispose();
	}
	} else if (selection == 1000 ) {
	if(cm.haveItem (3994789, 1)) {
	cm.gainItem(3994789, -1);
	cm.warp(252010300);
	cm.getPlayer().send(MainPacketCreator.sendHint("#b타이믹 코인#k 획득 지역에 입장하셨습니다.\r\n즐거운 사냥 되세요",300,20));
	cm.dispose();
	} else {
	cm.sendOk("입장하려면 #b#v3994789##k 한장이 필요합니다.");
	cm.dispose();
	}
// 프리미엄 사냥터(노말) 이동
	} else if (selection == 3 ) {
	if(cm.haveItem (1142352, 1) && cm.haveItem (4001083, 1) && cm.haveItem(4033311, 1) && cm.haveItem(4033312, 1) && cm.haveItem(4350029, 1) && cm.haveItem(4350031, 1) && cm.haveItem(4350032, 1) && cm.haveItem(4350033, 1)) {
	cm.gainItem(4033311, -1);
	cm.gainItem(4001083, -1);
	cm.gainItem(4033312, -1);
	cm.gainItem(1142352, -1);
	cm.gainItem(4350029, -1);
	cm.gainItem(4350031, -1);
	cm.gainItem(4350032, -1);
	cm.gainItem(4350033, -1);
	cm.sendOk("벌써 #b전문 크로스헌터#k가 되시다니 역시 제가보는눈은 틀림없습니다. 아무튼 축하드립니다.")
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[크로스헌터] "+ cm.getPlayer().getName()+"님께서 전문 크로스헌터가되셨습니다.")); // 전체 알림 
	cm.gainItem(1142353, 1);
	cm.dispose();
	} else {
	cm.sendOk("#b정식 크로스헌터#k가 되시고난 후에 각 보스들을 잡고 그 증표로 아래 아이템들을 모아오세요.\r\n\r\n#e< 필요한 증표 >#n\r\n#i4001083# #b#t4001083##k, #i4033311# #b#t4033311##k\r\n#i4033312# #b#t4033312##k, #i1142352# #b#t1142352##k\r\n#i4350029# #b#t4350029##k, #i4350031# #b#t4350031##k\r\n#i4350032# #b#t4350032##k, #i4350033# #b#t4350033##k");
	cm.dispose();
	}
// 프리미엄 사냥터(하드) 이동
	} else if (selection == 4 ) {
	if(cm.haveItem (1142353, 1) && cm.haveItem (4001083, 1) && cm.haveItem(4033311, 1) && cm.haveItem(4033312, 1) && cm.haveItem(4033312, 1) && cm.haveItem(4033304, 1) && cm.haveItem(4000659, 1) && cm.haveItem(1003719, 1) && cm.haveItem(1003721, 1) && cm.haveItem(1003722, 1)) {
	cm.gainItem(4033311, -1);
	cm.gainItem(4001083, -1);
	cm.gainItem(4033312, -1);
	cm.gainItem(4033312, -1);
	cm.gainItem(4033304, -1);
	cm.gainItem(4000659, -1);
	cm.gainItem(1003719, -1);
	cm.gainItem(1003721, -1);
	cm.gainItem(1003722, -1);
	cm.gainItem(1142353, -1);
	cm.sendOk("드디어 #b크로스헌터 마스터#k가되셧군요! 서버의 최정상에 도달하신걸 진심으로 축하드립니다. #b마스터 크로스헌터#k의 명예를 누리시길!")
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[크로스헌터] "+ cm.getPlayer().getName()+"님께서 페니르스토리 최강 크로스헌터 마스터가되셨습니다. 모두들 축하해주세요!")); // 전체 알림 
	cm.gainItem(1142354, 1);
	cm.dispose();
	} else {
	cm.sendOk("#b전문 크로스헌터#k가 되시고난 후에 각 보스들을 잡고 그 증표로 아래 아이템들을 모아오세요.\r\n\r\n#e< 필요한 증표 >#n\r\n#i4001083# #b#t4001083##k, #i4033311# #b#t4033311##k\r\n#i4033312# #b#t4033312##k, #i4033312# #b#t4033312#\r\n#i4033304# #b#t4033304##k, #i4000659# #b#t4000659##k\r\n#i1003719# #b#t1003719##k, #i1003721# #b#t1003721##k\r\n#i1003722# #b#t1003722##k, #i1142353# #b#t1142353##k");
	cm.dispose();
	}




// 프리미엄 사냥터(특별)이동
	} else if (selection == 10 ) {
	if(cm.getMeso () >= 1000) {
	cm.warp(910180000);
        cm.getPlayer().send(MainPacketCreator.sendHint("#b프리미엄 사냥터#k에 입장하셨습니다.\r\n즐거운 사냥 되세요",300,20));
	cm.gainMeso(-1000)
        cm.dispose();
	} else {
	cm.sendOk("메소가 부족합니다");
	cm.dispose();
	}

// 운영자 단풍잎 지급
	} else if (selection == 20) { // 스피드업 사냥터
	cm.dispose();
	cm.openNpc(9000247);
	} else if (selection == 161) {
	cm.dispose();
	cm.openNpc(2120003);
	} else if (selection == 159) {
	cm.dispose();
	cm.openNpc(1012000);
	}
//끝나는 괄호
	  		}
	}