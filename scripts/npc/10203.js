/*
 
KMS 1.2.174 �����ý��丮 ������Ʈ

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
            var chat = "������ �ǰ� �����ǰ�?";
            chat += "\r\n#L0##b�������� �����ϰڽ��ϴ�.#k";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                var beginner = "  #e< ���� >#n";
                beginner += "\r\n#L0##b��ؽ�#k";
                beginner += "\r\n#L1##b����#k";
                cm.sendSimple(beginner);
            } else if (selection == 1) {
                var beginner = "  #e< �ñ׳ʽ� . Cygnus >#n";
                beginner += "\r\n#L5##b�ҿ︶����#k";
                beginner += "\r\n#L6##b�÷������ڵ�#k";
                beginner += "\r\n#L7##b����극��Ŀ#k";   
                beginner += "\r\n#L8##b����Ʈ��Ŀ#k";
                beginner += "\r\n#L9##b��Ʈ����Ŀ#k";
                beginner += "\r\n#L10##b������#k";
                cm.sendSimple(beginner);
            } else if (selection == 2) {
                var beginner = "  #e< ���������� . Resistance >#n";
                beginner += "\r\n#L23##b����#k";
                beginner += "\r\n#L22##b������#k";
                beginner += "\r\n#L11##b���󽽷��̾�#k";
                beginner += "\r\n#L12##b��Ʋ������#k";
                beginner += "\r\n#L13##b���ϵ�����#k";   
                beginner += "\r\n#L14##b��ī��#k";
                cm.sendSimple(beginner);
            } else if (selection == 3) {
                var beginner = "  #e< ���� . Hero >#n";
                beginner += "\r\n#L15##b�ƶ�#k";
                beginner += "\r\n#L16##b����#k";
                beginner += "\r\n#L17##b��̳ʽ�#k";   
                beginner += "\r\n#L18##b�޸�������#k";
                beginner += "\r\n#L19##b����#k";
                cm.sendSimple(beginner);
            } else if (selection == 4) {
                var beginner = "  #e< ��� . Nova >#n";
                //beginner += "\r\n#L20##bī����#k";
                beginner += "\r\n#L21##b������������#k";
                cm.sendSimple(beginner);
            } else if (selection == 5) {
                var beginner = "  #e< ���� . Zero >#n";
                beginner += "\r\n#L24##b����#k";
                cm.sendSimple(beginner);
            } else if (selection == 6) {
                var beginner = "  #e< ���� . Eunwol >#n";
                beginner += "\r\n#L25##b����#k";
                cm.sendSimple(beginner);
              }
        } else if (status == 2) {
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
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "410");
	        cm.gainItem(2431110, 1);
                cm.warp(101072000, 0);
                cm.gainMeso(50000000);
	        cm.gainItem(2430191, 1);
	        cm.gainItem(4001126, 10000);
                cm.gainSponserItem(1112941,'[�̺�Ʈ]',100,20,0);
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
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "420");
	        cm.gainItem(2431110, 1);
                cm.warp(101072000, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.gainMeso(50000000);
                cm.gainSponserItem(1112941,'[�̺�Ʈ]',100,20,0);
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
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "230");
                cm.warp(100030102, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
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
                cm.warp(100030102, 0);
	        cm.gainItem(1332102, 1);
	        cm.gainItem(1472000, 1);
	        cm.gainItem(2070006, 3000);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1482000, 1);
	        cm.gainItem(1492109, 1);
	        cm.gainItem(2330000, 3000);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1532000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1332102, 1);
	        cm.gainItem(1342000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1302007, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
                cm.teachSkill(10001254,1,1);
	        cm.gainItem(1382100, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1452002, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1472000, 1);
	        cm.gainItem(2070006, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!.");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1482000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1302007, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.getPlayer().changeJob(3100);
                cm.addEquip2(-10, 1099001);
                cm.fakeRelog();
                cm.updateChar();
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                cm.warp(100030102, 0);
	        cm.gainItem(1322122, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
                cm.gainMeso(50000000);
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
                cm.warp(100030102, 0);
	        cm.gainItem(1382100, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1492109, 1);
	        cm.gainItem(2330000, 3000);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1442144, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1372005, 1);
	        cm.gainItem(1382100, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
                cm.warp(100030102, 0);
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
                cm.warp(100030102, 0);
	        cm.gainItem(1522000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1362000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.teachSkill(60001216,1,1); // �����ý���ġ: ����� -- 0�� ��ų ����
                cm.teachSkill(60001217,1,1); // �����ý���ġ: ���ݸ�� 
                cm.teachSkill(60001218,1,1); // ��Ƽ�� Ŀ��Ʈ
                cm.teachSkill(60000219,1,1); // Ʈ�����ǱԷ��̼�
                cm.teachSkill(60000222,1,1); // ���̿� ��
                cm.teachSkill(60001225,1,1); // Ŀ�ǵ� -- 0�� ��ų ��
                cm.getPlayer().changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
                cm.addEquip(-11, 1402177, 27, 0, 0, 0, 0, 0); //ī���� ����         
                cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0);  // -10, �������ڵ�, �ɼǵ�
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100030102, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.teachSkill(60011216,1,1); // ������ -- 0�� ��ų ����
                cm.teachSkill(60010217,1,1); // Ʈ�� ������
                cm.teachSkill(60011218,1,1); // ������ ����Ʈ 
                cm.teachSkill(60011219,1,1); // �ҿ� ��Ʈ��Ʈ
                cm.teachSkill(60011221,1,1); // �ڵ����Ʈ 
                cm.teachSkill(60011222,1,1); // �巹�� �� -- 0�� ��ų ��
                cm.getPlayer().changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                cm.addEquip(-11, 1222000, 18, 0, 0, 0, 0, 0); //������������ ����      
                cm.addEquip(-10, 1352600, 0, 0, 0, 0, 0, 0);  // -10, �������ڵ�, �ɼǵ�
                cm.fakeRelog();
                cm.updateChar();
                cm.dispose();
                cm.warp(100030102, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(1232000, 1);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.warp(100030102, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
                cm.gainMeso(50000000);
                cm.dispose();
           } else if (selection == 24) {
                cm.changeJob(10100);
                cm.warp(100030102, 0);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
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
                cm.getPlayer().changeJob(2500);
                cm.getPlayer().setKeyValue("AutoJob", "2510");
                cm.resetStats(4,4,4,4);
                cm.addEquip(-11, 1482191, 15, 0, 0, 7, 0, 0); // ����
                cm.addEquip(-10, 1353100, 0, 0, 0, 0, 0, 0); // ���� ����
                cm.fakeRelog();
                cm.updateChar();
                cm.teachSkill(25001002, 25, 25);
                cm.teachSkill(25001003, 25, 25);
                cm.teachSkill(25001204, 20, 20);
                cm.teachSkill(25000105, 0, 0);
                cm.teachSkill(20050286, 2, 2);
                cm.teachSkill(20051284, 1, 1);
                cm.teachSkill(20050285, 1, 1);
                cm.teachSkill(20051287, 1, 1);
                cm.warp(100030102, 0);
	        cm.gainItem(4001126, 10000);
	        cm.gainItem(2430191, 1);
                cm.sendOk("�����Ѱ������� ī�信 �������ֱ�ٷ�!");
                cm.gainMeso(50000000);
                cm.dispose();
           }
	}
    }
}