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
            var chat = "안녕하세요. #b루미너스#k는 제가 맞고있답니다. \r\n#b루미너스#k는 두가지의 종류로 나뉩니다. \r\n\r\n";
            chat += "\r\n#L0#네 알겠습니다. 루미너스로 전직 시켜주세요.";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                var beginner = "  네 그럼 계열을 선택해주시면 다음 계열로 전직이됩니다.\r\n";
                beginner += "\r\n#L0##e#d어둠#k#n 계열을 선택하겠습니다.";
                beginner += "\r\n#L1##e#b빛#k#n 계열을 선택하겠습니다.";
                cm.sendSimple(beginner);
            } else if (selection == 1) {
                var beginner = "  #r<시그너스>#k";
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
                var beginner = "  #r<영웅>#k";
                beginner += "\r\n#L15##b아란#k";
                beginner += "\r\n#L16##b에반#k";
                beginner += "\r\n#L17##b루미너스#k";   
                beginner += "\r\n#L18##b메르세데스#k";
                beginner += "\r\n#L19##b팬텀#k";
                cm.sendSimple(beginner);
            } else if (selection == 4) {
                var beginner = "  #r<노바>#k";
                beginner += "\r\n#L20##b카이져#k";
                beginner += "\r\n#L21##b엔젤릭버스터#k";
                cm.sendSimple(beginner);
              }
        } else if (status == 2) { // 어둠
            if (selection == 0) {
            cm.resetStats(4,4,10,4);
		cm.warp(1000000,0);cm.changeJob(2700);
	    	cm.gainSp(2);
                cm.getPlayer().setFace(20075);
                cm.getPlayer().setHair(36195);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1052497, 0, 5, 0, 7, 0, 0); //전신 빛
                cm.addEquip(-7, 1072700, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-9, 1102442, 0, 5, 5, 7, 0, 0); //망토
                cm.addEquip(-10, 1352400, 0, 0, 0, 0, 0, 0); //오브
                cm.gainItem(1212000, 1); //샤이닝 로드
	  	cm.teachSkill(20040190,1,1); // 연합의 의지
		cm.gainItem(1142479,1); //어둠
		cm.teachSkill(20040217, 1, 1); // 이클
		cm.teachSkill(27001100, 0, 20);
		cm.teachSkill(27000207, 0, 5); // 빛스킬
                cm.teachSkill(27001100, 0, 20);
                cm.warp(1000000);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<어둠에 물든 자> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
                cm.dispose();
          } else if (selection == 1) { // 빛
                //cm.gainExp(15);
                //cm.gainExp(34);
                //cm.gainExp(57);
                //cm.gainExp(92);
                //cm.gainExp(135);
                //cm.gainExp(372);
                //cm.gainExp(560);
            cm.resetStats(4,4,10,4);
		cm.warp(1000000,0);cm.changeJob(2700);
	    	cm.gainSp(2);
                cm.getPlayer().setFace(20075);
                cm.getPlayer().setHair(36195);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1052495, 0, 5, 0, 7, 0, 0); //전신 빛
                cm.addEquip(-7, 1072700, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-9, 1102442, 0, 5, 5, 7, 0, 0); //망토
                cm.addEquip(-10, 1352400, 0, 0, 0, 0, 0, 0); //오브
		cm.gainItem(1142478,1); //빛
                cm.gainItem(1212000, 1); //샤이닝 로드
	  	cm.teachSkill(20040190,1,1); // 연합의 의지
		cm.teachSkill(20040218, 1, 1);
		cm.teachSkill(20041222, 1, 1);
		cm.teachSkill(20040221, 1, 1);
                cm.teachSkill(27001201, 0, 20);
                cm.teachSkill(27000106, 0, 5);
		cm.teachSkill(20040216, 1, 1); // 선파
                cm.warp(1000000);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<빛을 되찾은 자> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
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
			cm.gainMeso(10000000);
cm.gainItem(1372043, 1);
cm.gainItem(1382100, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1452051, 1);
cm.gainItem(1462092, 1);
cm.gainItem(2060000, 3000);
cm.gainItem(2061000, 3000);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1482014, 1);
cm.gainItem(1492014, 1);
cm.gainItem(2330006, 3000);
cm.gainItem(2000013, 50);
cm.gainItem(2000014, 50);
cm.gainItem(3010000, 1);
cm.gainItem(1142107, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1302077, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1372043, 1);
cm.gainItem(1382100, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1452051, 1);
cm.gainItem(2060000, 3000);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1482014, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1302077, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(50001214, 1, 1);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.addEquip(-10, 1098000, 0, 10, 5, 7, 0, 0);  // 쉴드
cm.fakeRelog();
cm.updateChar();
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1322122, 1);
cm.gainItem(1099001, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20030190, 1, 1);
cm.teachSkill(30010185, 1, 1);
cm.teachSkill(30010110, 1, 1);
cm.teachSkill(30011159, 1, 1);
cm.teachSkill(30010111, 1, 1);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1382100, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20030190, 1, 1);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.teachSkill(21120005, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20030190, 1, 1);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.teachSkill(21120005, 1, 1);
cm.teachSkill(30001061, 1, 1);
cm.teachSkill(30001062, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1492014, 1);
cm.gainItem(3010000, 1);
cm.gainItem(1142242, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(30001000, 1, 1);
cm.teachSkill(30001068, 1, 1);
cm.teachSkill(30001001, 1, 1);
cm.teachSkill(30000002, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1442000, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1372043, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.warp(960030101, 0);
			cm.gainItem(1142478, 1); //빛을되찾은자
			cm.gainItem(1352400, 1); //라이트오브
                        cm.gainItem(2022178, 50);
                        cm.gainItem(2022178, 50);
                        cm.gainItem(2000019, 100);
                        cm.gainItem(2000019, 100);
                        cm.gainItem(2000019, 100);
			cm.gainItem(1212001, 1); //플레인
			cm.teachSkill(27001100, 1, 20);
			cm.teachSkill(27000106, 1, 5);
			cm.gainMeso(10000000);
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
			cm.gainMeso(10000000);
cm.gainItem(1522000, 1);
cm.gainItem(1352000, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20020109, 1, 1);
cm.teachSkill(20020111, 1, 1);
cm.teachSkill(20020112, 1, 1);
cm.teachSkill(20020190, 1, 1);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.warp(960030101, 0);
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
			cm.gainMeso(10000000);
cm.gainItem(1362000, 1);
cm.gainItem(1352100, 1);
cm.gainItem(3010000, 1);
cm.gainItem(2022178, 50);
cm.gainItem(2022178, 50);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.gainItem(2000019, 100);
cm.teachSkill(20030190, 1, 1);
cm.teachSkill(20030204, 1, 1);
cm.teachSkill(20030206, 1, 1);
cm.teachSkill(20031203, 1, 1);
cm.teachSkill(20031205, 1, 1);
cm.teachSkill(20031207, 1, 1);
cm.teachSkill(20031208, 1, 1);
cm.teachSkill(20031003, 1, 1);
cm.teachSkill(20031004, 1, 1);
cm.teachSkill(20031209, 1, 1);
cm.warp(960030101, 0);
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
			//cm.gainItem(1352500, 1);//노바의정수
			cm.gainItem(1142484, 1);
                        cm.gainItem(2022178, 50);
                        cm.gainItem(2022178, 50);
                        cm.gainItem(2000019, 100);
                        cm.gainItem(2000019, 100);
                        cm.gainItem(2000019, 100);
			cm.teachSkill(61001004, 1, 1);
			cm.teachSkill(61001005, 1, 1);
			cm.teachSkill(60000221, 1, 1);
			cm.teachSkill(60000220, 1, 1);
			cm.teachSkill(60000219, 1, 1);
			cm.teachSkill(60000222, 1, 1);

			cm.teachSkill(61110212, 1, 1);
			cm.teachSkill(61121201, 1, 1);
			cm.teachSkill(61121203, 1, 1);
			cm.teachSkill(61120219, 1, 1);
			cm.warp(960030101, 0);
			cm.gainMeso(10000000);
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
			cm.gainItem(1222001, 1);//퍼플헤이즈
			cm.gainItem(1142495, 1);//고대노바의계약자
                        cm.gainItem(2022178, 50);
                        cm.gainItem(2022178, 50);
                        cm.gainItem(2000019, 100);
                        cm.gainItem(2000019, 100);
                        cm.gainItem(2000019, 100);
			cm.warp(960030101, 0);
			cm.gainMeso(10000000);
                cm.dispose();
           }
	}
    }
}