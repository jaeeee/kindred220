importPackage(Packages.packet.creators);
importPackage(Packages.packet.skills);
importPackage(Packages.constants);
importPackage(Packages.handler.duey);

var status = -1;
var sel = 0;
var cash = "#fUI/SpiritNPC.img/BtAllReset/mouseOver/0#";
var vote = "#fUI/SpiritNPC.img/BtAllReset/pressed/0#";
var warp = "#fUI/SpiritNPC.img/backgrnd2#";
var shop = "#fUI/SpiritNPC.img/backgrnd#";
var help = "#fUI/SpiritNPC.img/BtAllReset/disabled/0#";
var constants = "#fUI/SpiritNPC.img/BtAllReset/normal/0#";

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
       /// cm.sendOk("즐거운 여행 되세요.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        var rand = Math.random() * 1000;
	var chat = "#e#b노블온라인 #bLv."+cm.getPlayer().getLevel()+" #r#h ##k님 환영합니다!\r\n#e#b노블온라인#n#k의 #e#r서버설명은#n#k #e#d아래의 서버안내를 보시면 \r\n됩니다.";
	chat += "\r\n　#L0#" + cash + "#l ";
	chat += "#L1#" + vote + "#l";
	chat += "\r\n　#L2#" + warp + "#l ";
	chat += "#L3#" + shop + "#l";
	chat += "\r\n　#L4#" + help + "#l ";
	chat += "#L5#" + constants + "#l\r\n\r\n\r\n";
	if (cm.getPlayer().hasGmLevel(6)){
	chat += "#e#b  ※서버관리기능#n#k\r\n";
	chat += "#L6##e아이템복구     ";
	chat += "#L7##e아이템제작     ";
	chat += "#L8##e현접헤제       \r\n";
	chat += "#L9##e팅맵헤제        ";
	chat += "#L10##eDB정리         ";
	chat += "#L11##e유저정보보기   ";
	chat += "#L12##e아이템전송   ";
}
	cm.sendSimple(chat);
  } else if (status == 1) {
	if(selection == 0) {
		sel = 100;
		cm.sendYesNo("정말 #b캐시샵#k을 이용하시겠어요? #r키보드의 #eESC#n를 눌러 작업을 취소할 수 있습니다.#k");
	} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(9000230);
	} else if (selection == 2) {
		cm.dispose();
		cm.openNpc(1012000);
	} else if (selection == 3) {
		cm.warp(1000000, 0)
	} else if (selection == 4) {
		var notice = "#e#r[서버 관리자 안내]#k#n\r\n"
		notice += "　1. 서버 운영자 : NOBLE,도미노\r\n　2. 서버 개발팀 : 에스터팀\r\n\r\n"
	notice += "#e#r[서버 기능 안내]#k#n\r\n"
		notice += "　1. 주요 기능 엔피시는 모두 중앙 광장에 있습니다.\r\n";
		notice += "　2. 노블온라인은 자동전직 시스템을 사용하고 있습니다.\r\n";
                notice += "　3. 후원관련 궁금증은 후원업무를 보시면 자세하게 보실수 있습니다..\r\n";
		notice += "　4. 캐시를 얻는 방법은 #e\"사냥을 하거나 캐시 마켓을 통해 캐시거래(@캐시)\"#n를 하시면됩니다.\r\n\r\n";
		notice += "#e#r[서버 주의사항 안내]#k#n\r\n"
		notice += "　1. 과도한 비속어 사용 및 싸움(싸움유도)을 할 경우에는 이유를 따지지 않고 #e접속 제한#n을 당할 수 있습니다.";
        notice += "\r\n\r\n#e#r[서버 도우미 안내]#k#n\r\n"
                notice += "　1. 유저분들간의 소통도 매우 중요합니다 질문이 있을경우 운영진보다 #e노블온라인 유저#n들에게 먼저 질문하시고 정말 모르겠다 싶으시면 운영진을 찾아주세요.";
		cm.sendNext(notice);
		cm.dispose();
	} else if (selection == 5) {
		var text = "　노블온라인 #bLv."+cm.getPlayer().getLevel()+" #r#h ##k님 환영합니다.\r\n\r\n";
		text += "　#e#r< 부가 기능 >#n\r\n";
		text += "#b#L1012008#미니게임에 대한 설명 듣기#l\r\n";
		text += "#L12101#서버 종합 랭킹 확인하기#l\r\n";
		text += "#L9010033#헤어와 성형 바꾸기#l\r\n";
		text += "#L9072200#클라라의 금화로 아이템 교환하기#l\r\n";
                text += "#L1095003#직업별 하이퍼스킬 마스터하기#l\r\n";
		text += "#L2411023#노블온라인 환생하기#l\r\n";
		text += "#L2411025#노블온라인 변생하기#l\r\n";		                               
		cm.sendSimple(text);
	} else if (selection == 6) {
		cm.dispose();
		cm.openNpc(9090008);
	} else if (selection == 7) {
		cm.dispose();
		cm.openNpc(9900002);
	} else if (selection == 8) {
		cm.dispose();
		cm.openNpc(1052013);
	} else if (selection == 9) {
		cm.dispose();
		cm.openNpc(1052012);
	} else if (selection == 10) {
		cm.dispose();
		cm.openNpc(9900001);
	} else if (selection == 11) {
		cm.dispose();
		cm.openNpc(9090102);
	} else if (selection == 12) {
		cm.dispose();
		cm.openNpc(9000056);
	}
  } else if (status == 2) {
	if(sel == 100) {
	cm.dispose();
	cm.enterCS();
	} else {
	sel = selection;
	if (sel > 0) {
	cm.dispose();
	cm.openNpc(sel);
	}
	}
	} else {
		cm.dispose();
	}
}