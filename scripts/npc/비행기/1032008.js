var status;
var boatevent = "Boats";
var planeallow = true;
var btf = 104020111;
var select;
var woodtime = 8 * 60;
var redtime = 6 * 60;
var arrivemap = 200000100;
var planemap = 200110000;

function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode <= 0)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var msg = "�����񽺷� ���ð� �����ʴϱ�?\r\n\r\n#b#L0#�����񽺷� ���� �� ž��#l\r\n";
		if (cm.getPlayer().getSkillLevel(80001027) > 0 && planeallow) {
			msg += "#L1#��������� ��� (-3000�޼�)#l\r\n";
		}
		if (cm.getPlayer().getSkillLevel(80001028) > 0 && planeallow) {
			msg += "#L2#��������� ��� (-5000�޼�)#l\r\n";
		}
		cm.sendSimple(msg);
	
	
	}

	else if (status == 1) {
	select = selection;
	if (select == 0) {
		var em = cm.getEventManager(boatevent);
        	if (em.getProperty("entry").equals("true")) {

            		cm.sendYesNo("���� �迡 ž���� ������ �ִٰ� �մϴ�. �����񽺷� ���� �迡 ž���Ͻðڽ��ϱ�?");

		}
        	else if (em.getProperty("docked").equals("true")) {
            		cm.sendOk("�̹� �谡 ��� �غ��߿� �ֽ��ϴ�. ��߽ð� 1�� ������ ������ �����մϴ�. �˼������� ���� �踦 ��ٷ� �ֽñ� �ٶ��ϴ�.");
            		cm.dispose();
        	}
        	else {
            		cm.sendOk("�̹� �谡 ����ؼ� ������ ������� �������Դϴ�. �� 15�и��� �谡 �����ϴ� ���ݸ� ��ٷ� �ֽñ� �ٶ��ϴ�.");
            		cm.dispose();
        	}
		
	} else if (selection == 1) {
			if(cm.getMeso() >= 3000) {
				cm.giveBuff(80001027, 1);
				cm.TimeMoveMap(planemap, arrivemap, woodtime);
                                cm.gainMeso(-3000);
                                cm.dispose();
			} else {
				cm.sendOk("�޼Ұ� �����ϽŰ� ��������!");
				cm.dispose();
			}
		} else if (selection == 2) {
			if(cm.getMeso() >= 5000) {
				cm.giveBuff(80001028, 1);
				cm.TimeMoveMap(planemap, arrivemap, redtime);
                                cm.gainMeso(-5000);
                                cm.dispose();
			} else {
				cm.sendOk("�޼Ұ� �����ϽŰ� ��������!");
				cm.dispose();
			}
		}



	} else if (status == 2) {
		cm.warp(btf,0);
		cm.dispose();
	}
    }
}