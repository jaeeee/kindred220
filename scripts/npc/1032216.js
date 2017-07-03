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
            var chat = "�ȳ��ϼ���. #b��̳ʽ�#k�� ���� �°��ִ�ϴ�. \r\n#b��̳ʽ�#k�� �ΰ����� ������ �����ϴ�. \r\n\r\n";
            chat += "\r\n#L0#�� �˰ڽ��ϴ�. ��̳ʽ��� ���� �����ּ���.";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                var beginner = "  �� �׷� �迭�� �������ֽø� ���� �迭�� �����̵˴ϴ�.\r\n";
                beginner += "\r\n#L0##e#d���#k#n �迭�� �����ϰڽ��ϴ�.";
                beginner += "\r\n#L1##e#b��#k#n �迭�� �����ϰڽ��ϴ�.";
                cm.sendSimple(beginner);
            } else if (selection == 1) {
                var beginner = "  #r<�ñ׳ʽ�>#k";
                beginner += "\r\n#L5##b�ҿ︶����#k";
                beginner += "\r\n#L6##b�÷������ڵ�#k";
                beginner += "\r\n#L7##b����극��Ŀ#k";   
                beginner += "\r\n#L8##b����Ʈ��Ŀ#k";
                beginner += "\r\n#L9##b��Ʈ����Ŀ#k";
                beginner += "\r\n#L10##b������#k";
                cm.sendSimple(beginner);
            } else if (selection == 2) {
                var beginner = "  #r<����������>#k";
                beginner += "\r\n#L11##b���󽽷��̾�#k";
                beginner += "\r\n#L12##b��Ʋ������#k";
                beginner += "\r\n#L13##b���ϵ�����#k";   
                beginner += "\r\n#L14##b��ī��#k";
                cm.sendSimple(beginner);
            } else if (selection == 3) {
                var beginner = "  #r<����>#k";
                beginner += "\r\n#L15##b�ƶ�#k";
                beginner += "\r\n#L16##b����#k";
                beginner += "\r\n#L17##b��̳ʽ�#k";   
                beginner += "\r\n#L18##b�޸�������#k";
                beginner += "\r\n#L19##b����#k";
                cm.sendSimple(beginner);
            } else if (selection == 4) {
                var beginner = "  #r<���>#k";
                beginner += "\r\n#L20##bī����#k";
                beginner += "\r\n#L21##b������������#k";
                cm.sendSimple(beginner);
              }
        } else if (status == 2) { // ���
            if (selection == 0) {
            cm.resetStats(4,4,10,4);
		cm.warp(1000000,0);cm.changeJob(2700);
	    	cm.gainSp(2);
                cm.getPlayer().setFace(20075);
                cm.getPlayer().setHair(36195);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1052497, 0, 5, 0, 7, 0, 0); //���� ��
                cm.addEquip(-7, 1072700, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-9, 1102442, 0, 5, 5, 7, 0, 0); //����
                cm.addEquip(-10, 1352400, 0, 0, 0, 0, 0, 0); //����
                cm.gainItem(1212000, 1); //���̴� �ε�
	  	cm.teachSkill(20040190,1,1); // ������ ����
		cm.gainItem(1142479,1); //���
		cm.teachSkill(20040217, 1, 1); // ��Ŭ
		cm.teachSkill(27001100, 0, 20);
		cm.teachSkill(27000207, 0, 5); // ����ų
                cm.teachSkill(27001100, 0, 20);
                cm.warp(1000000);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<��ҿ� ���� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
                cm.dispose();
          } else if (selection == 1) { // ��
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
                cm.addEquip(-5, 1052495, 0, 5, 0, 7, 0, 0); //���� ��
                cm.addEquip(-7, 1072700, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-9, 1102442, 0, 5, 5, 7, 0, 0); //����
                cm.addEquip(-10, 1352400, 0, 0, 0, 0, 0, 0); //����
		cm.gainItem(1142478,1); //��
                cm.gainItem(1212000, 1); //���̴� �ε�
	  	cm.teachSkill(20040190,1,1); // ������ ����
		cm.teachSkill(20040218, 1, 1);
		cm.teachSkill(20041222, 1, 1);
		cm.teachSkill(20040221, 1, 1);
                cm.teachSkill(27001201, 0, 20);
                cm.teachSkill(27000106, 0, 5);
		cm.teachSkill(20040216, 1, 1); // ����
                cm.warp(1000000);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<���� ��ã�� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
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
        /* �ñ׳ʽ� ���� - ����(dcin_s) */
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
cm.addEquip(-10, 1098000, 0, 10, 5, 7, 0, 0);  // ����
cm.fakeRelog();
cm.updateChar();
cm.warp(960030101, 0);
                cm.dispose();
        /* ���������� ���� - ����(dcin_s) */
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
           /* ���� ���� - ����(dcin_s) */
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
			cm.gainItem(1142478, 1); //������ã����
			cm.gainItem(1352400, 1); //����Ʈ����
                        cm.gainItem(2022178, 50);
                        cm.gainItem(2022178, 50);
                        cm.gainItem(2000019, 100);
                        cm.gainItem(2000019, 100);
                        cm.gainItem(2000019, 100);
			cm.gainItem(1212001, 1); //�÷���
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
           /* ��� ���� - ����(dcin_s) */
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
			//cm.gainItem(1352500, 1);//���������
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
			cm.gainItem(1222001, 1);//����������
			cm.gainItem(1142495, 1);//������ǰ����
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