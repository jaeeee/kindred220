var status;
var boatevent = "Geenie";
var planeallow = true;
//var btf = ;
var select;
var woodtime = 4 * 60;
var redtime = 3 * 60;
var arrivemap = 200000100;
var planemap = 200110030;
var mapname = "������ ����������";
function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode != 1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var msg = mapname+" ���ð� �����ʴϱ�?\r\n\r\n#b#L0#"+mapname+" ���� �� ž��#l\r\n";
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
        	if (em.getProperty("entry") == "true") {

            		cm.sendYesNo("���� �迡 ž���� ������ �ִٰ� �մϴ�. "+mapname+" ���� �迡 ž���Ͻðڽ��ϱ�?");

		}
        	else if (em.getProperty("docked").equals("true")) {
            		cm.sendOk("�̹� �谡 ��� �غ��߿� �ֽ��ϴ�. ��߽ð� 1�� ������ ������ �����մϴ�. �˼������� ���� �踦 ��ٷ� �ֽñ� �ٶ��ϴ�.");
            		cm.dispose();
        	}
        	else {
            		cm.sendOk("�̹� �谡 ����ؼ� "+mapname+" �������Դϴ�. �� 10�и��� �谡 �����ϴ� ���ݸ� ��ٷ� �ֽñ� �ٶ��ϴ�.");
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
		cm.warp(cm.getMap().getId()+1,0);
		cm.dispose();
	}
    }
}