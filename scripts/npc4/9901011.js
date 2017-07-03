/* 
                 Yang Online 1.2.169
                       양님 - b_b_secret@naver.com
*/

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
            var chat = "#r#e새싹 온라인을 시작하기위해 직업군을 선택해주세요.#n#k";
            chat += "\r\n#L0##b모험가직업#k";
            chat += "\r\n#L1##b시그너직업#k";
            chat += "\r\n#L2##b레지스탕스#k";
            chat += "\r\n#L3##b영웅직업군#k";
            chat += "\r\n#L4##b노바직업군#k";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                var beginner = "  #r<모험가직업>#k";
                beginner += "\r\n#L0##b전사#k";
                beginner += "\r\n#L1##b마법사#k";
                beginner += "\r\n#L2##b궁수#k";   
                beginner += "\r\n#L3##b도적#k";
                beginner += "\r\n#L4##b해적#k";
                cm.sendSimple(beginner);
            } else if (selection == 1) {
                var beginner = "  #r<시그너직업>#k";
                beginner += "\r\n#L5##b소울마스터#k";
                beginner += "\r\n#L6##b플레임위자드#k";
                beginner += "\r\n#L7##b윈드브레이커#k";   
                beginner += "\r\n#L8##b나이트워커#k";
                beginner += "\r\n#L9##b스트라이커#k";
                beginner += "\r\n#L10##b미하일#k";
                cm.sendSimple(beginner);
            } else if (selection == 2) {
                var beginner = "  #r<레지스탕스>#k";
                beginner += "\r\n#L11##b데몬슬레이어#k";
                beginner += "\r\n#L12##b배틀메이지#k";
                beginner += "\r\n#L13##b와일드헌터#k";   
                beginner += "\r\n#L14##b메카닉#k";
                cm.sendSimple(beginner);
            } else if (selection == 3) {
                var beginner = "  #r<영웅직업군>#k";
                beginner += "\r\n#L15##b아란#k";
                beginner += "\r\n#L16##b에반#k";
                beginner += "\r\n#L17##b루미너스#k";   
                beginner += "\r\n#L18##b메르세데스#k";
                beginner += "\r\n#L19##b팬텀#k";
                cm.sendSimple(beginner);
            } else if (selection == 4) {
                var beginner = "  #r<노바직업군>#k";
                beginner += "\r\n#L20##b카이져#k";
                beginner += "\r\n#L21##b엔젤릭버스터#k";
                cm.sendSimple(beginner);
              }
        } else if (status == 2) {
        /* 모험가 제작 - 무니(dcin_s) */
            if (selection == 0) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.changeJob(100);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
                cm.dispose();
          } else if (selection == 1) {
                cm.gainExp(15);
                cm.gainExp(34);
                cm.gainExp(57);
                cm.gainExp(92);
                cm.gainExp(135);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.changeJob(200);
                cm.warp(100000000, 0);
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
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.warp(100000000, 0);
                cm.dispose();
        /* 시그너스 제작 - 무니(dcin_s) */
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
                cm.changeJob(1100);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(1200);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(1300);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(1400);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(1500);
                cm.warp(100000000, 0);
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
                cm.changeJob(5100);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
                cm.dispose();
        /* 레지스탕스 제작 - 무니(dcin_s) */
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
                cm.changeJob(3100);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(3200);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(3300);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(3500);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
                cm.dispose();
           /* 영웅 제작 - 무니(dcin_s) */
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
                cm.changeJob(2100);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(2200);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(2700);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(2300);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(2400);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
                cm.dispose();
           /* 노바 제작 - 무니(dcin_s) */
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
                cm.changeJob(6100);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
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
                cm.changeJob(6500);
                cm.warp(100000000, 0);
                cm.gainItem(1002995,1);
                cm.gainMeso(5000000);
                cm.dispose();
           }
	}
    }
}