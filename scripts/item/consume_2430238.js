/*
������ : ����(pongpong___@naver.com / unfix_@naver.com)
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
	if (cm.getPlayer().getMapId() == 931000312) {
	cm.sendOk("�����ʿ��� ����Ҽ� �����ϴ�");
	cm.dispose()
	} else {
            var chat = "�̵��Ͻ� ���� �������ּ���.";
            chat += "\r\n#L99#��׽ý�";
            chat += "\r\n#L1#�����ױ�";
            chat += "\r\n#L2#�����Ͼ�";
            chat += "\r\n#L3#Ŀ�׽�Ƽ";
            chat += "\r\n#L4#��ƿ����";
            chat += "\r\n#L5#�丮��";
            chat += "\r\n#L6#�����ǿ��";
            chat += "\r\n#L7#����������";
            chat += "\r\n#L8#������";
            chat += "\r\n#L9#������";
            chat += "\r\n#L10#���긮��";
            chat += "\r\n#L11#������";
            chat += "\r\n#L12#����";
            chat += "\r\n#L13#�Ƹ���Ʈ";
            chat += "\r\n#L14#����Ƽ��";
            chat += "\r\n#L15#����Ƹ���";
            chat += "\r\n#L16#����";
            chat += "\r\n#L17#���ʸ���";
            chat += "\r\n#L18#������Ÿ��";
            chat += "\r\n#L19#������";
            chat += "\r\n#L20#�̷��� ��";
            chat += "\r\n#L21#�����ǵ���";
            chat += "\r\n#L22#�ð�ž�� �ٿ�";
            chat += "\r\n#L23#�Ǿƴ����� ����";
            chat += "\r\n#L24#������ ���� �Ա�";
            chat += "\r\n#L25#ī���� ������ ���� �Ա�";
            cm.sendSimple(chat);
}
            } else if (selection == 0) {
		cm.gainItem(2430238, -1);
                cm.warp(100000000);
                cm.dispose();
            } else if (selection == 99) {
		cm.gainItem(2430238, -1);
                cm.warp(100000000);
                cm.dispose();
            } else if (selection == 1) {
		cm.gainItem(2430238, -1);
                cm.warp(104000000);
                cm.dispose();
            } else if (selection == 2) {
		cm.gainItem(2430238, -1);
                cm.warp(101000000);
                cm.dispose();
            } else if (selection == 3) {
		cm.gainItem(2430238, -1);
                cm.warp(103000000);
                cm.dispose();
            } else if (selection == 4) {
		cm.gainItem(2430238, -1);
                cm.warp(120000000);
                cm.dispose();
            } else if (selection == 5) {
		cm.gainItem(2430238, -1);
                cm.warp(102000000);
                cm.dispose();
            } else if (selection == 6) {
		cm.gainItem(2430238, -1);
                cm.warp(105000000);
                cm.dispose();
            } else if (selection == 7) {
		cm.gainItem(2430238, -1);
                cm.warp(104020000);
                cm.dispose();
            } else if (selection == 8) {
		cm.gainItem(2430238, -1);
                cm.warp(200000000);
                cm.dispose();
            } else if (selection == 9) {
		cm.gainItem(2430238, -1);
                cm.warp(211000000);
                cm.dispose();
            } else if (selection == 10) {
		cm.gainItem(2430238, -1);
                cm.warp(220000000);
                cm.dispose();
            } else if (selection == 11) {
		cm.gainItem(2430238, -1);
                cm.warp(240000000);
                cm.dispose();
            } else if (selection == 12) {
		cm.gainItem(2430238, -1);
                cm.warp(140000000);
                cm.dispose();
            } else if (selection == 13) {
		cm.gainItem(2430238, -1);
                cm.warp(260000000);
                cm.dispose();
            } else if (selection == 14) {
		cm.gainItem(2430238, -1);
                cm.warp(261000000);
                cm.dispose();
            } else if (selection == 15) {
		cm.gainItem(2430238, -1);
                cm.warp(230000000);
                cm.dispose();
            } else if (selection == 16) {
		cm.gainItem(2430238, -1);
                cm.warp(250000000);
                cm.dispose();
            } else if (selection == 17) {
		cm.gainItem(2430238, -1);
                cm.warp(251000000);
                cm.dispose();
            } else if (selection == 18) {
		cm.gainItem(2430238, -1);
                cm.warp(310000000);
                cm.dispose();
            } else if (selection == 19) {
		cm.gainItem(2430238, -1);
                cm.warp(130000000);
                cm.dispose();
            } else if (selection == 20) {
                if (cm.getPlayer().getLevel() >= 160) {
		cm.gainItem(2430238, -1);
                cm.warp(271000000);
                cm.dispose();
		 }else {
		cm.sendOk("�˼������� �̷��ǹ��� 160���� �̻� �̵��� �����ϴ�ϴ�");
		cm.dispose();
}
	    } else if (selection == 21) {
			if (cm.haveItem(4000267,1) && cm.haveItem(4001078,1) && cm.haveItem(4001076,1) && cm.haveItem(2430457,1) && cm.haveItem(4001075,1) && cm.haveItem(4001077,10) && cm.getLevel() <120) {
            	cm.gainItem(2430457, -1);
	    	cm.gainItem(4001075, -1);
	    	cm.gainItem(4001077, -10);
	    	cm.gainItem(4001076, -1);
	    	cm.gainItem(4001078, -1);
	    	cm.gainItem(4000267, -1);
	    	cm.gainItem(2430238, -1);
		cm.warp(240060200);
		cm.dispose();
		    } else {
		        cm.sendOk("�̵��Ͻ÷��� ȥ���� �� ������� 6���� ���� 120�� �Ѿ߾� �մϴ�.");
		        cm.dispose();
}
	    } else if (selection == 22) {
		cm.gainItem(2430238, -1);
		cm.warp(220080001);
		cm.dispose();
	    } else if (selection == 23) {
		cm.gainItem(2430238, -1);
		cm.warp(230040420);
		cm.dispose();
	    } else if (selection == 24) {
		if (cm.getPlayer().getLevel() >120) {
		cm.gainItem(2430238, -1);
		cm.warp(211042400);
		cm.dispose();
		} else {
		cm.sendOkS("�� ���� 120������ �ȵǴ� ���� ����",2);
		cm.dispose();
}
	    } else if (selection == 25) {
		if (cm.getPlayer().getLevel() >120) {
		cm.gainItem(2430238, -1);
		cm.warp(211042401);
		cm.dispose();
		} else {
		cm.sendOkS("�� ���� 120������ �ȵǴ� ���� ����",2);
		cm.dispose();
}
		}
}
	}
