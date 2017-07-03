/*
 
KMS 1.2.174 메이플스토리 프로젝트

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
            var chat = "난 신규 유저 전직을 담당하고있는 발레리야, 반가워.#n#k#n#k";
            chat += "\r\n#L0##b모험가 (Adventurer)#k";
            chat += "\r\n#L1##b시그너스 (Cygnus)#k";
            chat += "\r\n#L2##b레지스탕스 (Resistance)#k";
            chat += "\r\n#L3##b영웅 (Hero)#k";
            chat += "\r\n#L4##b노바 (Nova)#k";
            chat += "\r\n#L5##b제로 (Zero)#k";
            chat += "\r\n#L6##b은월 (Eunwol)#k\r\n\r\n";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                var beginner = "  #e< 모험가 (Adventurer) >#n";
                beginner += "\r\n#L0##b선택의 갈림길#k\r\n\r\n";
                beginner += "#l  #e< 모험가 (Special) >#n";
                beginner += "\r\n#L1000##b캐논슈터#k";
                beginner += "\r\n#L1010##b듀얼블레이드#k";
                cm.sendSimple(beginner);
            } else if (selection == 1) {
                var beginner = "  #e< 시그너스 (Cygnus) >#n";
                beginner += "\r\n#L5##b소울마스터#k";
                beginner += "\r\n#L6##b플레임위자드#k";
                beginner += "\r\n#L7##b윈드브레이커#k";   
                beginner += "\r\n#L8##b나이트워커#k";
                beginner += "\r\n#L9##b스트라이커#k";
                beginner += "\r\n#L10##b미하일#k";
                cm.sendSimple(beginner);
            } else if (selection == 2) {
                var beginner = "  #e< 레지스탕스 (Resistance) >#n";
                beginner += "\r\n#L23##b제논#k";
                beginner += "\r\n#L22##b데몬어벤져#k";
                beginner += "\r\n#L11##b데몬슬레이어#k";
                beginner += "\r\n#L12##b배틀메이지#k";
                beginner += "\r\n#L13##b와일드헌터#k";   
                beginner += "\r\n#L14##b메카닉#k";
                cm.sendSimple(beginner);
            } else if (selection == 3) {
                var beginner = "  #e< 영웅 (Hero) >#n";
                beginner += "\r\n#L15##b아란#k";
                beginner += "\r\n#L16##b에반#k";
                beginner += "\r\n#L17##b루미너스#k";   
                beginner += "\r\n#L18##b메르세데스#k";
                beginner += "\r\n#L19##b팬텀#k";
                cm.sendSimple(beginner);
            } else if (selection == 4) {
                var beginner = "  #e< 노바 (Nova) >#n";
                beginner += "\r\n#L20##b카이저#k";
                beginner += "\r\n#L21##b엔젤릭버스터#k";
                cm.sendSimple(beginner);
            } else if (selection == 5) {
                var beginner = "  #e< 제로 (Zero) >#n";
                beginner += "\r\n#L24##b제로#k";
                cm.sendSimple(beginner);
            } else if (selection == 6) {
                var beginner = "  #e< 은월 (Eunwol) >#n";
                beginner += "\r\n#L25##b은월#k";
                cm.sendSimple(beginner);
              }
        } else if (status == 2) {
            if (selection == 0) {
                cm.warp(1020000, 0);
                cm.dispose();
          } else if (selection == 1) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.changeJob(200);
                cm.warp(101072000, 0);
	        cm.gainItem(1372005, 1);
	        cm.gainItem(1382100, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
            } else if (selection == 2) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.changeJob(300);
                cm.warp(101072000, 0);
	        cm.gainItem(1452002, 1);
	        cm.gainItem(1462092, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
            } else  if (selection == 3) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.changeJob(400);
                cm.warp(101072000, 0);
	        cm.gainItem(1332102, 1);
	        cm.gainItem(1472000, 1);
	        cm.gainItem(2070006, 3000);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
            } else if (selection == 4) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.changeJob(500);
                cm.warp(101072000, 0);
	        cm.gainItem(1482000, 1);
	        cm.gainItem(1492109, 1);
	        cm.gainItem(2330000, 3000);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
            } else if (selection == 1000) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(501);
                cm.getPlayer().setKeyValue("AutoJob", "530");
                cm.warp(101072000, 0);
	        cm.gainItem(1532000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
            } else if (selection == 1010) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "430");
                cm.fakeRelog();
                cm.updateChar();
                cm.dispose();
                cm.warp(101072000, 0);
	        cm.gainItem(1332102, 1);
	        cm.gainItem(1342000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
            } else if (selection == 5) { 
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(1100);
                cm.getPlayer().setKeyValue("AutoJob", "1110");
                cm.teachSkill(10001254,1,1);
                cm.warp(101072000, 0);
	        cm.gainItem(1302007, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 6) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(1200);
                cm.getPlayer().setKeyValue("AutoJob", "1210");
                cm.warp(101072000, 0);
                cm.teachSkill(10001254,1,1);
	        cm.gainItem(1382100, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 7) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(1300);
                cm.getPlayer().setKeyValue("AutoJob", "1310");
                cm.teachSkill(10001254,1,1);
                cm.warp(101072000, 0);
	        cm.gainItem(1452002, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 8) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(1400);
                cm.getPlayer().setKeyValue("AutoJob", "1410");
                cm.teachSkill(10001254,1,1);
                cm.warp(101072000, 0);
	        cm.gainItem(1472000, 1);
	        cm.gainItem(2070006, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!.");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 9) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(1500);
                cm.getPlayer().setKeyValue("AutoJob", "1510");
                cm.teachSkill(10001254,1,1);
                cm.warp(101072000, 0);
	        cm.gainItem(1482000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 10) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(5100);
                cm.getPlayer().setKeyValue("AutoJob", "5110");
                cm.teachSkill(10001254,1,1);
                cm.warp(101072000, 0);
	        cm.gainItem(1302007, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 11) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.warp(101072000, 0);
	        cm.gainItem(1322122, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainMeso(50000000);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.dispose();
           } else if (selection == 12) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(3200);
                cm.getPlayer().setKeyValue("AutoJob", "3210");
                cm.warp(101072000, 0);
	        cm.gainItem(1382100, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 13) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.teachSkill(30001061,1,1);
                cm.getPlayer().changeJob(3300);
                cm.getPlayer().setKeyValue("AutoJob", "3310");
                cm.warp(931000500, 0);
	        cm.gainItem(1462092, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 14) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(3500);
                cm.getPlayer().setKeyValue("AutoJob", "3510");
                cm.teachSkill(30001068,1,1); // 메카닉 대쉬
                cm.warp(101072000, 0);
	        cm.gainItem(1492109, 1);
	        cm.gainItem(2330000, 3000);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 15) { 
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(2100);
                cm.getPlayer().setKeyValue("AutoJob", "2110");
                cm.warp(101072000, 0);
	        cm.gainItem(1442144, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 16) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(2200);
                cm.getPlayer().setKeyValue("AutoJob", "2210");
                cm.warp(101072000, 0);
	        cm.gainItem(1372005, 1);
	        cm.gainItem(1382100, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 17) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.teachSkill(20040218,1,1);
                cm.teachSkill(20040221,1,1);
                cm.teachSkill(20041222,1,1);
                cm.teachSkill(20040216,1,1);
                cm.getPlayer().changeJob(2700);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
                cm.teachSkill(27001100,1,1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.warp(101072000, 0);
	        cm.gainItem(1212000, 1);
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 18) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(2300);
                cm.getPlayer().setKeyValue("AutoJob", "2310");
                cm.warp(101072000, 0);
	        cm.gainItem(1522000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 19) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.teachSkill(20031207,1,1);
                cm.teachSkill(20031208,1,1);
                cm.getPlayer().changeJob(2400);
                cm.getPlayer().setKeyValue("AutoJob", "2410");
                cm.warp(101072000, 0);
	        cm.gainItem(1362000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 20) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.teachSkill(60001216,1,1); // 리셔플스위치: 방어모드 -- 0차 스킬 시작
                cm.teachSkill(60001217,1,1); // 리셔플스위치: 공격모드 
                cm.teachSkill(60001218,1,1); // 버티컬 커넥트
                cm.teachSkill(60000219,1,1); // 트랜스피규레이션
                cm.teachSkill(60000222,1,1); // 아이원 월
                cm.teachSkill(60001225,1,1); // 커맨드 -- 0차 스킬 끝
                cm.getPlayer().changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
                cm.addEquip(-11, 1402177, 27, 0, 0, 0, 0, 0); //카이저 무기         
                cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0);  // -10, 아이템코드, 옵션들
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(101072000, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 21) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.teachSkill(60011216,1,1); // 석세서 -- 0차 스킬 시작
                cm.teachSkill(60010217,1,1); // 트루 석세서
                cm.teachSkill(60011218,1,1); // 매지컬 리프트 
                cm.teachSkill(60011219,1,1); // 소울 컨트랙트
                cm.teachSkill(60011221,1,1); // 코디네이트 
                cm.teachSkill(60011222,1,1); // 드레스 업 -- 0차 스킬 끝
                cm.getPlayer().changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                cm.addEquip(-11, 1222000, 18, 0, 0, 0, 0, 0); //엔젤릭버스터 무기      
                cm.addEquip(-10, 1352600, 0, 0, 0, 0, 0, 0);  // -10, 아이템코드, 옵션들
                cm.fakeRelog();
                cm.updateChar();
                cm.dispose();
                cm.warp(101072000, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 22) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(3101);
                cm.getPlayer().setKeyValue("AutoJob", "3120");
                cm.warp(101072000, 0);
	        cm.gainItem(1232000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 23) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.getPlayer().changeJob(3600);
                cm.getPlayer().setKeyValue("AutoJob", "3610");
                cm.warp(101072000, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2431110, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 24) {
                cm.warp(101072000, 0);
                cm.changeJob(10100);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(2590004, 10);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
	        cm.getPlayer().send(MainPacketCreator.sendHint("2차 스킬 습득 레벨 : 110",150,20));
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 25) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.gainExp(1242);
                cm.gainExp(1242);
                cm.gainExp(1242);
                cm.gainExp(1242);
                cm.gainExp(1242);
                cm.gainExp(1242);
                cm.gainExp(1242);
                cm.gainExp(1490);
                cm.gainExp(1788);
                cm.gainExp(2145);
                cm.gainExp(2574);
                cm.gainExp(3088);
                cm.getPlayer().changeJob(2500);
                cm.getPlayer().setKeyValue("AutoJob", "2510");
	        cm.gainItem(2431110, 1);
                cm.warp(101072000, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(1353101, 1);
	        cm.gainItem(1353102, 1);
	        cm.gainItem(1353103, 1);
	        cm.gainItem(1353104, 1);
                cm.gainSponserItem(1112941,'[이벤트]',100,20,0);
                cm.sendOk("불편한거있으면 카페에 문의해주길바래!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 1011) {
                cm.sendOk("나이트워커 직업은 이용이 불가능합니다.");
                cm.dispose();
           } else if (selection == 1012) {
                cm.sendOk("카이저 직업은 이용이 불가능합니다.");
                cm.dispose();
           }
	}
    }
}