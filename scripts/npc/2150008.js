var normalprice = 800;
var planeallow = true;
var boatmap = 200090710;
var arrivemap = 104020130;
var planemap = 200110071;
var normaltime = 6 * 60;
var woodtime = 6 * 60;
var redtime = 4 * 60;
var arriveMap = "�������� ����������";


var status=0;
var select=-1;
function start() {
    status = -2;
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
	if (status == -1) {
		cm.sendSimple("�������� ������� �����񽺷� �����ϰ� ����. ���� ������ �;�?\r\n\r\n#b#L0#�������� ���������� ����#l\r\n#L1#�����񽺷� ����#l#k");
	}


        else if (status == 0) {
		if (selection == 1) {
			cm.dispose();
			cm.openNpc(2150008, "1012003");
		} else {
		var msg = arriveMap+" ���� ����մϴ�! ž���Ͻðڽ��ϱ�?#b\r\n\r\n#L0#"+arriveMap+" ���� (-"+normalprice+"�޼�)#l\r\n";
		if (cm.getPlayer().getSkillLevel(80001027) > 0 && planeallow) {
			msg += "#L1#��������� ��� (-3000�޼�)#l\r\n";
		}
		if (cm.getPlayer().getSkillLevel(80001028) > 0 && planeallow) {
			msg += "#L2#��������� ��� (-5000�޼�)#l\r\n";
		}
		cm.sendSimple(msg);
		}
	} else if (status == 1) {
		select = selection;
		if (selection == 0)
			cm.sendYesNo("����� #b"+normalprice+" �޼�#k��, �ҿ�ð��� #b"+normaltime/60+"��#k �̿���. ���� ����� ���ðھ��?");
		else if (selection == 1) {
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
		if(cm.getMeso() >= normalprice) {
			cm.gainMeso(-normalprice);
			cm.TimeMoveMap(boatmap, arrivemap, normaltime);
			cm.dispose();
		} else {
			cm.sendOk("�̺��̺�.. "+normalprice+" �޼Ҵ� ����� ���� �ִ°ž�?");
			cm.dispose();
		}
		
	}


    }
}
	    
