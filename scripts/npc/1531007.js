/*
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
	var chat = "#e#b메리스토리 #bLv."+cm.getPlayer().getLevel()+" #r#h ##k님 환영합니다!\r\n#e#b메리스토리#n#k의 #e#r서버설명은#n#k #e#d아래의 서버안내를 보시면 \r\n됩니다.";
	chat += "\r\n　#L0#" + cash + "#l ";
	chat += "#L1#" + vote + "#l";
	chat += "\r\n　#L2#" + warp + "#l ";
	chat += "#L3#" + shop + "#l";
	chat += "\r\n　#L4#" + help + "#l ";
	chat += "#L5#" + constants + "#l\r\n\r\n\r\n";
	if (cm.getPlayer().getGMLevel() > 9) {
	chat += "#e#b  ※서버관리기능#n#k\r\n";
	chat += "#L6##e아이템복구#l     ";
	chat += "#L7##e아이템제작#l     ";
	chat += "#L8##e현접헤제#l       \r\n";
	chat += "#L9##e팅맵헤제#l        ";
	chat += "#L10##eDB정리#l         ";
	chat += "#L11##e유저정보보기#l   ";
	chat += "#L12##e아이템전송#l     ";
	chat += "#L13##e후원지급#l        ";
	chat += "#L14##e쿼리제어#l        ";
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
		notice += "　1. 서버 운영자 : Human \r\n　2. 서버 개발팀 : Human Project \r\n\r\n"
	notice += "\r\n#e#r[서버 기능 안내]#k#n\r\n"
		notice += "　1. 주요 기능 엔피시는 모두 중앙 광장에 있습니다.\r\n";
		notice += "　2. 메리스토리는 자동전직 시스템을 사용하고 있습니다.\r\n";
                notice += "　3. 후원관련 궁금증은 후원업무를 보시면 자세하게 보실수 있습니다..\r\n";
		notice += "#e#r[서버 주의사항 안내]#k#n\r\n"
		notice += "　1. 과도한 비속어 사용 및 싸움(싸움유도)을 할 경우에는 이유를 따지지 않고 #e접속 제한#n을 당할 수 있습니다.";
        notice += "\r\n#e#r[서버 도우미 안내]#k#n\r\n"
                notice += "　1. 유저분들간의 소통도 매우 중요합니다 질문이 있을경우 운영진보다 #e메리스토리 유저#n들에게 먼저 질문하시고 정말 모르겠다 싶으시면 운영진을 찾아주세요.";
	notice += "\n\r\n#e#r[서버 컨텐츠 이용 안내]#k#n\r\n"	
                notice += "　#e#d1. 메리시스 상점가로 가고싶으시거나 자유시장을 이용하시고 싶으시면 마을(광장)의 MARKET PLACE 포탈을 통과해주세요.\r\n";
                notice += "　#e#d2. 자유시장에 사용할 고용상점을 사용하시고 싶으시면 캐시충전후 마을(광장)의 NPC 프레드릭 에게 구매하시면 됩니다.\r\n";
                cm.sendNext(notice);
		cm.dispose();
	} else if (selection == 5) {
		var text = "　메리스토리 #bLv."+cm.getPlayer().getLevel()+" #r#h ##k님 환영합니다.\r\n\r\n";
		text += "　#e#r< 부가 기능 >#n\r\n#b";
		text += "#L9010031#★Mary Story추천인★#l\r\n";
		text += "#L9010033#헤어와 성형 바꾸기#l\r\n";
                //text += "#L9201000##r파티퀘스트 입장#k#l\r\n";
		text += "#L12101#서버 종합 랭킹 확인하기#l\r\n";
		text += "#L2010011#메리스토리 길드시스템#l\r\n";
                text += "#L1002006#직업별 스킬 마스터하기#l\r\n";
                text += "#L2400006#메리스토리 제로직업 스킬마스터하기#l\r\n";
                text += "#L2400005#메리스토리 제로직업 무기지급받기#l\r\n";
                text += "#L1061008#♥메리스토리 환포상점♥#l\r\n";
		text += "#L1012005#♥메리스토리 환생하기♥#l\r\n";
		text += "#L2080008#메리스토리 변생하기#l\r\n\r\n";
                text += "#L9001040#★메리스토리 출석체크 하기★#l\r\n\r\n";
                text += "#L9001047#♥메리스토리 단풍잎교환♥#l\r\n\r\n";
		text += "#L1052013#현접헤제#l";
		text += "#L1052012#팅맵헤제";	
                text += "#L9000002#초자받기";
                text += "#L9000160#만능상점\r\n"; 
                text += "#L9000134##r레어뽑기";	
                text += "#L9030300#경매장이용";  
                text += "#L9000344#코디상점";                                 
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
	} else if (selection == 13) {
		cm.getPlayer().gainRC(2000000000);
		cm.sendOk("#e#b후원포인트#n#k 지급 #e#b완료!#n#k");
		cm.dispose();
	} else if (selection == 14) {
		cm.dispose();
		cm.openNpc(9120000);
	}
  } else if (status == 2) {
	if(sel == 100) {
	cm.dispose();
	cm.openCS();
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
*/
/*

와우플러스 만능엔피시

*/
importPackage(Packages.packet.creators);

var status = 0;

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
	if(cm.getPlayer().getMapId() == 141040000 || cm.getPlayer().getMapId() == 922000009 || cm.getPlayer().getMapId() == 922000000 || cm.getPlayer().getMapId() == 130000101 || cm.getPlayer().getMapId() == 123456789){
cm.sendOk("#fn바탕#여기선 트레이드를 이용하실수 없습니다. \r\n나가시려면 채팅창에 @마을로 나가주세요");
	   } else {
				var jessica = " 　#fUI/CashShop.img/CSStatus/BtN/normal/0#  #fn나눔고딕 Extrabold##fs20##r#h ##k #fn나눔고딕 Extrabold##fs16# 님의 정보입니다.#fn나눔고딕 Extrabold##fs12#\r\n 　#e레벨#n#b : "+ cm.getPlayer().getLevel() +"　#k#e메소#n#b : " + cm.getPlayer().getMeso()+ " #k#e원　후포#n#b : " + cm.getPlayer().getRC()+ " #k#ePoint#n";              
                if (cm.getJob() == 2217 || cm.getJob() == 2218){
      		jessica += "\r\n#L1##b#e에반 하이퍼#n(에반에게만 보이는 메뉴)#k";
}
      if (cm.getJob() == 3500 || cm.getJob() == 3510 || cm.getJob() == 3511){
      		jessica += "\r\n#L1482##b#e메카닉 전직하기#k";
}
                jessica += "\r\n\r\n　　　　#fUI/CashShop.img/CSEffect/hot/0#　　　 　　　  #fUI/CashShop.img/CSEffect/new/0#　　　　　　　#fUI/CashShop.img/CSEffect/event/0#\r\n#l　";
                jessica += "#L1##fs20##i5450011# #r상점#k  ";
                jessica += "#L2##fs20##i5044000# #b워프#k  ";
                jessica += "#L3##fs20##i3994247# #g기능#k";
		cm.sendSimple(jessica);
}
       

	} else if (status == 1) {
	if (selection == 0) {
		cm.dispose();
		cm.openNpc(2480013);

	} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(2142109);

	} else if (selection == 2) {
		cm.dispose();
		cm.openNpc(1012000);

	} else if (selection == 3) {
		cm.dispose();
		cm.openNpc(2134008);

	} else if (selection == 4) {
		cm.sendOk(cm.getForceMap(cm.getPlayer().getSia()));
		cm.dispose();
	} else if (selection == 1482) {
		cm.dispose();
cm.openNpc(9390013);

	} else if (selection == 5) {
		cm.dispose();
		cm.openNpc(2159380);

	} else if (selection == 6) {
		cm.dispose();
		cm.openNpc(9000000);
	} else if (selection == 7) {
		cm.openShop(9000064);
		cm.dispose();
        } else if (selection == 9) {
                cm.openShop(2159342);
                cm.dispose();
	} else if (selection == 8) {
		cm.dispose();
		cm.openNpc(2134008);
	} else if (selection == 22) {
		cm.dispose();
		cm.openNpc(2001000);
	} else if (selection == 23) {
		cm.dispose();
		cm.openNpc(1032008);
	} else if (selection == 24) {
		cm.dispose();
		cm.openNpc(9000058);
		} else if (selection == 111) {
cm.setDamageSkin("0");
cm.showMessage("데미지 스킨이 해제 되었습니다.");
cm.getPlayer().send(MainPacketCreator.resetAction());
return;
        } else if (selection == 10) {
                cm.warp(101050000);
                cm.dispose();
        } else if (selection == 11) {
                cm.warp(910001000);
                cm.dispose();
        } else if (selection == 21) {
                cm.warp(910000000);
                cm.dispose();
	} else if (selection == 12) {
		cm.dispose();
		cm.openNpc(9900000);
	} else if (selection == 88) {
		cm.dispose();
		cm.openNpc(2420040);
} else if (selection == 90) {
                cm.gainItem(2430675, 1);
		cm.dispose();
} else if (selection == 88) {
		cm.dispose();
		cm.openNpc(2420040);
 } else if (selection == 19) {
               if(cm.getPlayer().getSia() == 1){
               cm.getPlayer().HelloSia();
              cm.giveBuff(2311003,20);
          //     cm.teachSkill(80000007,3,3);
               cm.dispose();
               } else if(cm.getPlayer().getSia() == 2){
               cm.getPlayer().HelloSia1();
               cm.giveBuff(1101006,20);
               cm.dispose();
               }else{
               cm.sendOk("세력이 없다면 버프를 받을수 없습니다.");
}
	} else if (selection == 14) {
               cm.dispose();
		cm.openNpc(2154002);
        } else if (selection == 15) {
               cm.dispose();
               cm.openNpc(1012102);
        } else if (selection == 17) {
		cm.dispose();
		cm.EnterCS();
		return;
        } else if (selection == 18) {
                cm.dispose();
                cm.openNpc(9010032);

}
}
}
}