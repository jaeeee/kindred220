var cash = 0;

function start() {
 if (true) {
    var tmp_str = "";
    tmp_str += "#fn�������##fs18# #e#d:: ��� �ý��� ::#n#k\r\n ";
    tmp_str += "#fn�������##fs13##L2##r[HOT]#k#b�����ϱ�#k";
    tmp_str += "#L59##r[��õ]#k#bȯ��/����#k";
����tmp_str += "#L122##r[�ʼ�]#k#b�⼮üũ#k#l\r\n";����
    tmp_str += " #L15##r[�ʼ�]#k#b�����ϱ�#k";
    tmp_str += "#L66##r[��]#k#b�Ŀ���û#k";
    tmp_str += "#L188##r[�̵�]#k#b��������#k#l\r\n";
    tmp_str += " #L132##r#e[LK]#n#b ��ŷ";
    tmp_str += "#L99##r[���]#k#b ��������#k";
    tmp_str += "#L121##r[��ų]#b ��ų������#l\r\n";
    tmp_str += " #L120##r#e[��ȯ]#n#b�޼ұ�ȯ ";
    tmp_str += "#L299##r[�ʼ�]#b (����)�Խ���#k";��
    tmp_str += "#L300##r[���]#b �ζ�#l\r\n\r\n\r\n";������
    tmp_str += "#fn�������##fs18# #e#d:: ���ο� ������ ::#n#k\r\n ";
    tmp_str += "#fn�������##fs13##L745##r[NEW]#k#b���Ʋ#k";
    tmp_str += "#L6##e#r[NEW]#b #n#e������#n#k";
    tmp_str += "#L7778##r[EVENT]#b �ʿ���ȭ#l\r\n"; 
    tmp_str += " #L7777##r[���]#b �����Ƽ";      
    tmp_str += " #L5447##r[NEW]#b ��������"; 
    tmp_str += " #L5448##r[HOT]#b ����";       
    cm.sendSimple (tmp_str);	
	} else {
    var tmp_str = "��� �������� �̵�";
    tmp_str += "#b\r\n#L16#�������� �̵��Ѵ�";
    cm.sendSimple (tmp_str);
	}
}

function action(mode, type, selection) {
	cm.dispose();
	    if (selection == 0) {
            	    cm.openShop(600000); 
            } else if (selection == 1) {
            	    cm.openShop(1012004);
	    } else if (selection == 51) {
		if (cm.getPlayer().getLevel() >= 45) {
        		cm.playerMessage(1, "�����Ϳ� �����߽��ϴ�. ���ù���� ���̽� ���ǽø� Ŭ�����ּ���");
                	cm.warp(230020201);
		    } else {
			cm.sendOk("�����ʹ� ����45 �̻��Դϴ�.");
		}
            } else if (selection == 50) {
        	    cm.openNpc(2152015);
            } else if (selection == 175) {
        	    cm.warp(101050000);
 } else if (selection == 119) {
               cm.dispose();
		cm.openNpc(2154002);
            } else if (selection == 120) {
        	    cm.openNpc(3000138);
            } else if (selection == 121) {
        	    cm.openNpc(1002006);
            } else if (selection == 122) {
        	    cm.openNpc(9001040);
            } else if (selection == 7777) {
        	    cm.openNpc(1100004);
            } else if (selection == 7778) {
        	    cm.openNpc(1052100);
            } else if (selection == 150) {
        	    cm.openShop(9074001);
} else if (selection == 745) {
    cm.playerMessage(1, "���⼭�� ������ ���̳� �帳�� �ϸ鼭 ������ �ο� �� �ֽ��ϴ�!. ��� �� �ܿ� �ʿ��� ���� �ϰԵǸ� �����˴ϴ�. �׸��� ���� ���͸��� �Ǵ� [ ��:�ù� > (�ٸ�������״�)�̷� ] �˾Ƽ� 1�����̵� @���̵� �ϼ�");
        	    cm.warp(103050400);
            } else if (selection == 132) {
        	    cm.openNpc(1400003);
            } else if (selection == 99) {
        	    cm.openNpc(1012114);
            } else if (selection == 300) {
        	    cm.openNpc(9250022);
            } else if (selection == 9) {
        	    cm.openNpc(9010041);
            } else if (selection == 114) {
        	    cm.openNpc(2010002);
            } else if (selection == 55) {
        	    cm.openShop(2050001);
            } else if (selection == 66) {
        	    cm.openNpc(9040011);
            } else if (selection == 478) {
        	    cm.openNpc(2159433);
            } else if (selection == 59) {
        	    cm.openNpc(9076102);
            } else if (selection == 52) {
            	    cm.openNpc(9010031);
            } else if (selection == 53) {
            	    cm.openNpc(9000083);
            } else if (selection == 5447) {
            	    cm.openNpc(9000035);
            } else if (selection == 5448) {
            	    cm.openNpc(9000056);
} else if (selection == 188) {
        	    cm.warp(910000000);
            } else if (selection == 2) {
            	    cm.openNpc(9010033);
            } else if (selection == 3) {
            	    cm.openNpc(9901003);
            } else if (selection == 4) {
            	    cm.openNpc(2110005);
            } else if (selection == 5) {
            	    cm.openNpc(2150007);
            } else if (selection == 299) {
            	    cm.openNpc(1022107);
            } else if (selection == 6) {
            	    cm.openNpc(9000039);
            } else if (selection == 7) {
            	    cm.openNpc(1012102);
            } else if (selection == 8) {
		if (cm.haveItem(5155000, 2)) {
             		if (cm.getPlayer().getGender() == 0) {
                 	cm.getPlayer().setHair(31002);
                 	cm.getPlayer().setFace(21700);
                 	cm.getPlayer().setGender(1);
                	cm.gainItem(5155000,-2);
              	} else if (cm.getPlayer().getGender() == 1) {
                 	cm.getPlayer().setHair(30000);
                 	cm.getPlayer().setFace(20100);
                 	cm.getPlayer().setGender(0);
                 	cm.gainItem(5155000,-2);
             	}
            	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(6, "�����ý��丮 : ���Ͻô� ��� ������ ���� �Ǿ����ϴ�~ ���ۿ����� �⺻ �Ӹ��� �⺻ �󱼷� �Ǿ� ���ȳ׿�~ �̸� ��¼�� ��..�� ? �ε� ������ ���忡�� ��ſ� �ð� �ǽñ�~");
            	cm.playerMessage(5, "���� ��ȯ �ý��ۿ� ���� ������ �ٲ�� �̼��� �⺻ ���� �󱼷� �ٲ�����ϴ�.");			
            	cm.dispose();
	       } else {
	    	cm.sendOk("#rī��Ÿ�� ����#k�� �����մϴ�. �κ��丮 â�� Ȯ�����ּ���~ #b#i5155000# #t5155000##k�� #rĳ�ü� -> ��Ÿ -> ��Ƽ��#k���� ���Ű� �����մϴ�.");
            	cm.dispose();
	       }
	    } else if (selection == 9) {
		if (cm.getJob() == 3300) {
        		cm.playerMessage(5, "��Ծ���� �������� �����߽��ϴ�. ��Ծ �����Ͽ� HP�� ���� �� ��ȹ ��ų�� ��Ծ ��ȹ���ּ���.");
                	cm.warp(931000500);
		} else if (cm.getJob() == 3310) {
                	cm.warp(931000500);
            		cm.playerMessage(5, "��Ծ���� �������� �����߽��ϴ�. ��Ծ �����Ͽ� HP�� ���� �� ��ȹ ��ų�� ��Ծ ��ȹ���ּ���.");
		} else if (cm.getJob() == 3311) {
                	cm.warp(931000500);
            		cm.playerMessage(5, "��Ծ���� �������� �����߽��ϴ�. ��Ծ �����Ͽ� HP�� ���� �� ��ȹ ��ų�� ��Ծ ��ȹ���ּ���.");
		} else if (cm.getJob() == 3312) {
                   	cm.warp(931000500);
            		cm.playerMessage(5, "��Ծ���� �������� �����߽��ϴ�. ��Ծ �����Ͽ� HP�� ���� �� ��ȹ ��ų�� ��Ծ ��ȹ���ּ���.");
		    } else {
			cm.sendOk("����� #r���ϵ� ����#k�� �ƴϱ���, ������ �ٽ� Ȯ�� �� �ٽ� ���� �ɾ��ּ���~");
		}
            } else if (selection == 10) {
            	    cm.openNpc(9020000);
            } else if (selection == 11) {
            	    cm.gainItem(5155000, 20);
        	    cm.sendOk("#bī��Ÿ�� ����#k 20���� ���� �޾ҽ��ϴ�.");	
            } else if (selection == 12) {
            	    cm.gainMeso(1000000000);
        	    cm.sendOk("� �ڱ� #b10�� �޼�(1,00,000,000 �޼�)#k�� ���� �޾ҽ��ϴ�.");	
            } else if (selection == 13) {
        	    cm.openNpc(9050000);
            } else if (selection == 14) {
        	    cm.openNpc(2144016);
            } else if (selection == 15) {
        	    cm.openNpc(9310007);
            } else if (selection == 16) {
        	    cm.warp(101050000, 0);	
            } else if (selection == 17) {
		if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 112) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142009,1);	
            	    cm.playerMessage(5, "<����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 122) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142009,1);	
            	    cm.playerMessage(5, "<����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 132) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142009,1);	
            	    cm.playerMessage(5, "<����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 212) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142010,1);	
            	    cm.playerMessage(5, "<����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ������#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 222) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142010,1);	
            	    cm.playerMessage(5, "<����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ������#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 232) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142010,1);	
            	    cm.playerMessage(5, "<����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ������#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 312) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142011,1);	
            	    cm.playerMessage(5, "<�������� �ε�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 �ü�#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 322) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142011,1);	
            	    cm.playerMessage(5, "<�������� �ε�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 �ü�#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 412) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142012,1);	
            	    cm.playerMessage(5, "<�������� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 422) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142012,1);	
            	    cm.playerMessage(5, "<�������� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 434) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142012,1);	
            	    cm.playerMessage(5, "<�������� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r����� ���谡 �����̵�#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 512) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142013,1);	
            	    cm.playerMessage(5, "<������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 522) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142013,1);	
            	    cm.playerMessage(5, "<������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���谡 ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 532) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142013,1);	
            	    cm.playerMessage(5, "<������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r����� ���谡 ĳ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2112) {
        	    cm.teachSkill(20001005,1,1);
        	    cm.gainItem(1142133,1);	
            	    cm.playerMessage(5, "<���� �ƶ�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���� �ƶ�#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2218) {
        	    cm.teachSkill(20011005,1,1);
        	    cm.gainItem(1142158,1);	
            	    cm.playerMessage(5, "<������ �İ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r�巡�︶���� ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2312) {
        	    cm.teachSkill(20021005,1,1);
        	    cm.gainItem(1142340,1);	
            	    cm.playerMessage(5, "<������ ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r������ �� �޸�������#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2412) {
        	    cm.teachSkill(20031005,1,1);
        	    cm.gainItem(1142379,1);	
            	    cm.playerMessage(5, "<���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���� ����#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 3212) {
        	    cm.teachSkill(30001005,1,1);
        	    cm.gainItem(1142246,1);	
            	    cm.playerMessage(5, "<Ư������ ������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���������� �����(��Ʋ������)#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 3312) {
        	    cm.teachSkill(30001005,1,1);
        	    cm.gainItem(1142246,1);	
            	    cm.playerMessage(5, "<Ư������ ������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���������� �����(���ϵ�����)#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 3512) {
        	    cm.teachSkill(30001005,1,1);
        	    cm.gainItem(1142246,1);	
            	    cm.playerMessage(5, "<Ư������ ������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���������� �����(��ī��)#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 3112) {
        	    cm.teachSkill(30011005,1,1);
        	    cm.gainItem(1142345,1);	
            	    cm.playerMessage(5, "<������ ȭ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r����� ������ ���󽽷��̾�#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 5112) {
        	    cm.teachSkill(50001005,1,1);
        	    cm.gainItem(1142403,1);	
            	    cm.playerMessage(5, "<������ ���� ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� 200������ �޼��� #r���� ������ ������#k �������̱���, #b������ �޾Ƹ�#k�� #b�ش��ϴ� Ŭ������ �ְ� ����#k�� �޾��ּ���.");
            	    cm.dispose();
		} else if (cm.getPlayer().getJob() == 900) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142249,1);	
            	    cm.playerMessage(5, "<���¾� ��Ű���̡�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            	    cm.playerMessage(5, "<������ �޾Ƹ�> ��ų�� ȹ�� �ϼ̽��ϴ�.");
	    	    cm.sendOk("����� ���� �������� #r���#k �̽ñ���, #b������ �޾Ƹ�#k�� #b��Ű������ ��ǥ#k�� �޾��ּ���.");
            	    cm.dispose();
	       } else {
	    	cm.sendOk("���� ������ �ƴϽðų� ���� ������ ������ �Ϸ����� ���߽��ϴ�, �ڽ��� ������ �ٽ� Ȯ�� ���ּ���.");
            	cm.dispose();
	       }	
            } else if (selection == 18) {
		    cm.sendOk("#b��ǳ ������ ���#k 1���� ���މ���~ �� ����� ���ø� 1���� ����մϴ�! ��, ���� ĳ���ʹ� �ȵǴ°� �ƽ���?"); 
           	    cm.playerMessage(5, "<��ǳ ������ ���> 1���� ���޵Ǿ����ϴ�.");
        	    cm.gainItem(2430218,1);	
            	    cm.dispose();
	} else {
		cm.sendOk("�ٽ� �ѹ� �ѷ����°� ���?"); 
	}
}	