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
	var chat = "#r���� ĳ�ü����� �Ǹŵ��� �ʰ� �ִ� ���� �Ȱ� �ֽ��ϴ�.\r\n\r\n#n"
	chat += "#L8##b< ���� >\r\n";
	chat += "#L9##b< ���� >\r\n";
	chat += "#L11##b< �尩 >\r\n";
	chat += "#L10##b< �Ź� >\r\n";
	chat += "#L3##b< ���� >\r\n";
	chat += "#L2##b< ���� >\r\n";
	chat += "#L4##b< ���� >\r\n";
	chat += "#L12##b< ����� >\r\n";
	 //chat += "#L4##r[2]#b ���� ��� ��ȭ�ֹ��� - #i2049361# 1000��\r\n";
	 //chat += "#L6##r[5]#b ���Ȱ��ݷ� 200�� �� - �����ʵ�\r\n\r\n";

	    cm.sendSimple(chat);



		
         } else if (status == 1) {

	if (selection >= 99999) {
		cm.dispose();
	}
        else if (selection == 1) {
                var warpmain = "#b�����̾� �����#k�� ���� ����Ϳʹ� �޸� #r���� ������#k�� �����Ͻ� �� �ִ� ����Դϴ�. ��޿� ���� �̿��Ͻ� �� �ִ� ����ʹ� #e�Ϲ�ȸ�� �����#n��#eƯ��ȸ�� �����#n�� �ֽ��ϴ�. ��� ������� ������ �����ðڽ��ϱ�?\r\n";
                warpmain += "\r\n#L4##b�����̾� �����#r(�Ϲ�)#b�� ���� �����Դϴ�.";
                warpmain += "\r\n#L5##b�����̾� �����#r(Ư��)#b�� ���� ������ ��ڽ��ϴ�..";
                cm.sendSimple(warpmain);

             } else if (selection == 2001) {
		cm.dispose();
		cm.enterCS();
		return;
	     } else if (selection == 10002) {
		cm.warp(910001000,0);
		cm.dispose();
	     } else if (selection == 2000) {
		cm.sendOk("#i4031683##b#t4031683#�� ���� �� �ִ� ��� \r\n\r\n1. ����� �Ѵ� Ȳ�ݴ�ǳ���� �Դ´�\r\n2. �����ý� Ŭ�� �� Ȳ�ܻ������� ���� \r\n3. �ٽ� �����̾��� �������� Ȱ��ȭ�� �Ǿ��ִ�.");
		cm.dispose();
		return;
            } else if (selection == 2) {
cm.openShop(12345);
cm.dispose();

            } else if (selection == 11) {
cm.openShop(123456);
cm.dispose();
            } else if (selection == 12) {
cm.openShop(55);
cm.dispose();




            } else if (selection == 3) { 
cm.openShop(22);
cm.dispose();



            } else if (selection == 4) {
cm.openShop(23);
cm.dispose();
           } else if (selection == 8) {
cm.openShop(33);
cm.dispose();
           } else if (selection == 9) {
cm.openShop(34);
cm.dispose();
           } else if (selection == 10) {
cm.openShop(44);
cm.dispose();


            } else if (selection == 5) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
}           if (!cm.isLeader()) {
                cm.sendOk("��Ƽ���� �����û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(957018000).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ������� �̿����Դϴ�.�ٸ�ä���� �̿����ּ���");
             cm.dispose();
             return;
    }
		if (cm.haveItem(4310027, 2000)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("�̵���");
                                cm.TimeMoveMap(957018000, 100000000, 900);
			cm.gainItem(4310027, -2000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ ������ �����մϴ�.");
		    cm.dispose();

}

            } if (selection == 6) {

       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
}           if (!cm.isLeader()) {
                cm.sendOk("��Ƽ���� �����û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(240050200).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
		if (cm.haveItem(4310027, 2000)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("�̵���");
                        cm.warp(272010200,0);
                        cm.gainItem(4310027, -2000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ ������ �����մϴ�.");
		    cm.dispose();

}
             } else if (selection == 3017) {
		cm.gainItem(4031683, 100);
		cm.sendOk("#i4031683# ���޿Ϸ�");
		cm.dispose();
}
        } else if (status == 2) {
	    if (selection == 9999) {
		cm.dispose();
		cm.openNpc(1022003);
            }else if (selection == 4) {
                var vlig = "#b#e�����̾� �����#r(�Ϲ�)#b�� ���� �����Դϴ�.\r\n\r\n#r[����� �⺻ ����]\r\n��#k��õ ���� #n: Lv.13 ~ Lv.200����#e���� ��� #n: 100�� �޼�\r\n\r\n#r#e[���� ���� ����]\r\n��#k���� #n: Lv.37 ���� ���̴� ����(HP : 150,000)\r\n��#e����ġ #n: 30,000x����ġ����\r\n\r\n#r#e[�ΰ����� ����]\r\n��#Cgray##n�ش� ���̵������� �ΰ����񽺸� �̿��Ͻ� �� �����ϴ�.\r\n";
                cm.sendSimple(vlig);

            } else if (selection == 5) {
                var hunt = "#b#e�����̾� �����#r(Ư��)#b�� ���� �����Դϴ�.\r\n\r\n#r[����� �⺻ ����]\r\n#k����õ ���� #n: Lv.50 ~ Lv.250������#e���� ��� #n: 0 �޼�\r\n#r#e���� ���� #n: #i4031683##b������ ����� ��ǥ 1000�� �̻� ����\r\n\r\n#r#e[���� ���� ����]\r\n#k#n������ : Lv.37 ���� ���̴� ����(HP: 15,000,000)\r\n������ġ: 200,000x����ġ����\r\n\r\n#r#e[�ΰ����� ����]#k��(��: ���� / ��: �Ұ���)\r\n�����ڸ� ȯ��������Ư�� ���� �̿�";
                cm.sendSimple(hunt);

	    }

	    cm.dispose();
		}
    	}
}


