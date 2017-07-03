/*

Copyright ⓒ 2013 Spirit Corporaion. All Rights Reserved.

leader.스피릿온라인 (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.우비 (guri__s@nate.com)
Make.공석 (iureal@nate.com)

이 스크립트는 스피릿온라인에만 사용됩니다.
만약 유출이 되더라도 이 주석은 삭제하지 않으셨으면 좋겠습니다.

*/

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
		var jessica = "스피릿 온라인 만능 #bNPC#k입니다.\r\n";
		jessica += "무엇을 도와드릴까요?\r\n\r\n#b";
		jessica += "#e#r  <캐시샵>#n\r\n#b";
                jessica += "#L18#캐시 충전 ";
		jessica += "#L17#캐시샵 이동\r\n\r\n\r\n#l";
		jessica += "#e#r  <캐릭터 부분>#n\r\n#b";
                jessica += "#L9#전직 ";
                jessica += "#L2#스킬마스터 ";
                jessica += "#L12#보조 방어구 장착\r\n\r\n\r\n#l";
                jessica += "#e#r  <세력 관련>#n#b\r\n";
                jessica += "#L13#세력 버프 ";
                jessica += "#L19#점령된맵 확인\r\n\r\n\r\n#l";
		jessica += "#e#r  <편의 기능>#n#b\r\n";
		jessica += "#L1#대륙 이동 ";
                jessica += "#L3#게시판 이용\r\n\r\n\r\n#l";
		jessica += "#e#r  <전문 기술>#n#b\r\n";
                jessica += "#L11#마이스터 빌 ";
                jessica += "#L21#전문기술 상점\r\n";
		cm.sendSimple(jessica);

	} else if (status == 1) {
	if (selection == 0) {
		cm.dispose();
		cm.openNpc(1012000);

	} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(1012000);

	} else if (selection == 2) {
                if(cm.getPlayer().getJob() == 10112) {
                cm.sendOk("#e#b제로#n#k 직업군은 #r#e베타#n#k 에게서만 스킬마스터가 가능합니다.");
                cm.dispose();
                return;
                } 
                cm.sendOk("스킬마스터가 완료되었습니다.\r\n#e@스킬마스터#n#k 명령어로도 스킬마스터가 가능합니다.");
                cm.getPlayer().maxSkillMaster();
                cm.dispose();
	} else if (selection == 3) {
		cm.dispose();
		cm.openNpc(9010014);

	} else if (selection == 4) {
		cm.sendSimple(cm.getForceMap(cm.getPlayer().getSia()));
		cm.dispose();

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
                cm.sendOk("스피릿스타일 전직은 자동전직으로 되어있습니다.");
                cm.dispose();
	} else if (selection == 8) {
		cm.dispose();
		cm.openNpc(1095003);

        } else if (selection == 10) {
                cm.warp(100000000);
                cm.dispose();

        } else if (selection == 11) {
                cm.warp(910001000);
                cm.dispose();

	} else if (selection == 12) {
		cm.dispose();
		cm.openNpc(9900000);

        } else if (selection == 13) {
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
               cm.sendPendant();
               cm.dispose();

        } else if (selection == 17) {
		cm.dispose();
		cm.enterCS();
		return;
        } else if (selection == 18) {
                cm.sendOk("캐시충전은 @캐시 충전할금액 을 이용하시면 됩니다.\r\n#r예 : @캐시 1000");
                cm.dispose();
        } else if (selection == 19) {
  cm.sendOk(cm.getForceMap(cm.getPlayer().getSia()));
  cm.dispose();
        } else if (selection == 20) {
                if(cm.getMeso() >= 1000000) {
                  cm.sendOk("100만메소를 소비하여 라이딩스킬을 배우셨습니다.");
                  cm.teachSkill(80001000, 1, 1);
                  cm.dispose();
                } else {
                  cm.sendOk("메소가 부족하여 라이딩 스킬을 배울수 없습니다.");
                  cm.dispose();
             }
        } else if (selection == 21) {
            var spirit = "어떤 재료를 구입하시겟어요?\r\n\r\n";
            spirit += "#r#L1#각종 재료상점#l#k";
            spirit += "#b#L2#하/중/상 결정상점#l#k\r\n";
            cm.sendSimple(spirit);
		status = 1;
	} else if (selection == 22) {
           cm.sendSimple(cm.notic());
           cm.dispose();
         }
        } else if (status == 2) {
            if (selection == 1) {
            cm.openShop(9000064);
            cm.dispose();
           } else if (selection == 2) {
            cm.openShop(2159342);
            cm.dispose();
}
}
}
}