var normalprice = 0;
var planeallow = true;
var boatmap = 200090300;
var arrivemap = 250000100;
var planemap = 200110041;
var normaltime = 2 * 60;
var woodtime = 70;
var redtime = 30;
var arriveMap = "���� ��������";


var status=0;
var select=-1;
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
	
if(cm.getMap().getId() == 200000141) {
        if (status == 0) {
		var msg = arriveMap+" ���� ����մϴ�! ž���Ͻðڽ��ϱ�?#b\r\n\r\n#L0#"+arriveMap+" ���� (-"+normalprice+"�޼�)#l\r\n";
		if (cm.getPlayer().getSkillLevel(80001027) > 0 && planeallow) {
			msg += "#L1#��������� ��� (-3000�޼�)#l\r\n";
		}
		if (cm.getPlayer().getSkillLevel(80001028) > 0 && planeallow) {
			msg += "#L2#��������� ��� (-5000�޼�)#l\r\n";
		}
		cm.sendSimple(msg);
		
	} else if (status == 1) {
		select = selection;
		if (selection == 0)
			cm.sendYesNo("����� #b"+normalprice+" �޼�#k��, �ҿ�ð��� #b"+normaltime/60+"��#k �̿���. ���� ����� ���ðھ��?");
		else if (selection == 1) {
			if(cm.getMeso() >= 3000) {
				cm.giveBuff(80001027,1);
				cm.TimeMoveMap(planemap, arrivemap, woodtime);
				cm.gainMeso(-3000);
				cm.dispose();
			} else {
				cm.sendOk("�޼Ұ� �����ϽŰ� ��������!");
				cm.dispose();
			}
		} else if (selection == 2) {
			if(cm.getMeso() >= 5000) {
				cm.giveBuff(80001028,1);
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
} else if (cm.getMap().getId() == 250000100) {



normalprice = 0;
planeallow = true;
boatmap = 200090310;
arrivemap = 200000100;
planemap = 200110040;
normaltime = 2 * 60;
woodtime = 70;
redtime = 30;
arriveMap = "������ ����������";





	if (status == 0) {
		var msg = arriveMap+" ���� ����մϴ�! ž���Ͻðڽ��ϱ�?#b\r\n\r\n#L0#"+arriveMap+" ���� (-"+normalprice+"�޼�)#l\r\n";
		if (cm.getPlayer().getSkillLevel(80001027) > 0 && planeallow) {
			msg += "#L1#��������� ��� (-3000�޼�)#l\r\n";
		}
		if (cm.getPlayer().getSkillLevel(80001028) > 0 && planeallow) {
			msg += "#L2#��������� ��� (-5000�޼�)#l\r\n";
		}
			msg += "#L3#���ʸ����� ���� (-1000�޼�)#l\r\n";
		cm.sendSimple(msg);
		
	} else if (status == 1) {
		select = selection;
		if (selection == 0)
			cm.sendYesNo("����� #b"+normalprice+" �޼�#k��, �ҿ�ð��� #b"+normaltime/60+"��#k �̿���. ���� ����� ���ðھ��?");
		else if (selection == 1) {
			if(cm.getMeso() >= 3000) {
				cm.giveBuff(80001027,1);
				cm.TimeMoveMap(planemap, arrivemap, woodtime);
				cm.gainMeso(-3000);
				cm.dispose();
			} else {
				cm.sendOk("�޼Ұ� �����ϽŰ� ��������!");
				cm.dispose();
			}
		} else if (selection == 2) {
			if(cm.getMeso() >= 5000) {
				cm.giveBuff(80001028,1);
				cm.TimeMoveMap(planemap, arrivemap, redtime);
				cm.gainMeso(-5000);
				cm.dispose();
			} else {
				cm.sendOk("�޼Ұ� �����ϽŰ� ��������!");
				cm.dispose();
			}
		} else if (selection == 3) {
			if(cm.getMeso() >= 1000) {
				cm.warp(251000000,0);
				cm.gainMeso(-1000);
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
} else if (cm.getMap().getId() == 251000000) {
	if (status == 0) {
		cm.sendSimple("������������ ���ư��� ��������?\r\n\r\n#b#L0#������������ ���ư���(-2000�޼�)#l");
	} else if (status == 1) {
		cm.sendYesNo("�޼Ҵ� 2000�޼Ұ� �ʿ��մϴ�. ���� ������������ ���ư��ðڽ��ϱ�?");
	} else if (status == 2) {
		if (cm.getPlayer().getMeso() >= 2000) {
			cm.warp(250000100,0);
			cm.dispose();
			cm.gainMeso(-2000);
		} else {
			cm.sendOk("�޼Ұ� �����Ͻ� �� ��������..");
			cm.dispose();
			return;
		}
	}



}


    }
}
	    
