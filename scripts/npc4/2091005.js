
/*
�������� �̵� ��ũ��Ʈ
������ : ����(qor6101@naver.com)

*/

var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
	cm.sendOk("��! �� �����غ����~~");
        cm.dispose();
        return;
    }
    if (mode == 1) 
	status++;
    else 
	status--;
    if (status == 0) {
	if (cm.getPlayer().getMapId() == 925060600) {
   	var dojo = "������� ������ �߿Դٴ� �����. ������ �����δ� ���� ������? ��� ��� ������ ���ھ�?\r\n#r[������� ��� �ð� : ���÷���(�÷��̿���)�� ���� �Ǵܹٶ��ϴ�]";
    	dojo += "#b\r\n#L1#ȸ��, ���� ȿ���� �ް� �;�.";
    	dojo += "#b\r\n#L2#��� �����غ���.";
    	dojo += "#b\r\n#L0#������ �����ھ�.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925061200) {
   	var dojo = "������� ������ �߿Դٴ� �����. ������ �����δ� ���� ������? ��� ��� ������ ���ھ�?\r\n#r[������� ��� �ð� : ���÷���(�÷��̿���)�� ���� �Ǵܹٶ��ϴ�]";
    	dojo += "#b\r\n#L1#ȸ��, ���� ȿ���� �ް� �;�.";
    	dojo += "#b\r\n#L2#��� �����غ���.";
    	dojo += "#b\r\n#L0#������ �����ھ�.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925061800) {
   	var dojo = "������� ������ �߿Դٴ� �����. ������ �����δ� ���� ������? ��� ��� ������ ���ھ�?\r\n#r[������� ��� �ð� : ���÷���(�÷��̿���)�� ���� �Ǵܹٶ��ϴ�]";
    	dojo += "#b\r\n#L1#ȸ��, ���� ȿ���� �ް� �;�.";
    	dojo += "#b\r\n#L2#��� �����غ���.";
    	dojo += "#b\r\n#L0#������ �����ھ�.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925062400) {
   	var dojo = "������� ������ �߿Դٴ� �����. ������ �����δ� ���� ������? ��� ��� ������ ���ھ�?\r\n#r[������� ��� �ð� : ���÷���(�÷��̿���)�� ���� �Ǵܹٶ��ϴ�]";
    	dojo += "#b\r\n#L1#ȸ��, ���� ȿ���� �ް� �;�.";
    	dojo += "#b\r\n#L2#��� �����غ���.";
    	dojo += "#b\r\n#L0#������ �����ھ�.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925063000) {
   	var dojo = "������� ������ �߿Դٴ� �����. ������ �����δ� ���� ������? ��� ��� ������ ���ھ�?\r\n#r[������� ��� �ð� : ���÷���(�÷��̿���)�� ���� �Ǵܹٶ��ϴ�]";
    	dojo += "#b\r\n#L1#ȸ��, ���� ȿ���� �ް� �;�.";
    	dojo += "#b\r\n#L2#��� �����غ���.";
    	dojo += "#b\r\n#L0#������ �����ھ�.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925063600) {
   	var dojo = "������� ������ �߿Դٴ� �����. ������ �����δ� ���� ������? ��� ��� ������ ���ھ�?\r\n#r[������� ��� �ð� : ���÷���(�÷��̿���)�� ���� �Ǵܹٶ��ϴ�]";
    	dojo += "#b\r\n#L1#ȸ��, ���� ȿ���� �ް� �;�.";
    	dojo += "#b\r\n#L2#��� �����غ���.";
    	dojo += "#b\r\n#L0#������ �����ھ�.";
	cm.sendSimple(dojo);
    	} else if (cm.getPlayer().getMapId() == 925064200) {
   	var dojo = "������� ������ �߿Դٴ� �����. ������ �����δ� ���� ������? ��� ��� ������ ���ھ�?\r\n#r[������� ��� �ð� : ���÷���(�÷��̿���)�� ���� �Ǵܹٶ��ϴ�]";
    	dojo += "#b\r\n#L1#ȸ��, ���� ȿ���� �ް� �;�.";
    	dojo += "#b\r\n#L2#��� �����غ���.";
    	dojo += "#b\r\n#L0#������ �����ھ�.";
	cm.sendSimple(dojo);
    } else {
	cm.sendYesNo("��! ���� ���� �����ϴ°ž�? �׷��ϱ� ������ �θ��� ����� ���ݾ�. ���� �����ϰ� �����ھ�?");
	select = 0;
	}
    } else if (status == 1) {
	if (selection == 0) {
		cm.sendYesNo("��! ���� ���� �����ϴ°ž�? �׷��ϱ� ������ �θ��� ����� ���ݾ�. ���� �����ϰ� �����ھ�?");
		select = 0;
	} else if (selection == 1) {
 		cm.sendYesNo("#bü�� / ���� 5000 ȸ��#k �� ����ϸ� �г�Ƽ 5000ĳ���� ����Ǵµ�, �����ھ�?");
		select = 1;
	} else if (selection == 2) {
    	if (cm.getPlayer().getMapId() == 925061200) {
		cm.warp(925061300, 0);
		cm.spawnMob(9305310, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925061800) {
		cm.warp(925061900, 0);
		cm.spawnMob(9305315, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925062400) {
		cm.warp(925062500, 0);
		cm.spawnMob(9305320, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925063000) {
		cm.warp(925063100, 0);
		cm.spawnMob(9305325, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925063600) {
		cm.warp(925063700, 0);
		cm.spawnMob(9305330, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925064200) {
		cm.warp(925064300, 0);
		cm.spawnMob(9305335, 141,7);
		cm.dispose();
    	} else if (cm.getPlayer().getMapId() == 925060600) {
		cm.warp(925060700, 0);
		cm.spawnMob(9305305, 141,7);
		cm.dispose();
	}
 	} else {
    	if (select == 0) { 
		cm.resetMap(925060100);
	    	cm.resetMap(925060200);
	    	cm.resetMap(925060300);
	    	cm.resetMap(925060400);
	    	cm.resetMap(925060500);
	    	cm.resetMap(925060600);
	    	cm.resetMap(925060700);
	    	cm.resetMap(925060800);
	    	cm.resetMap(925060900);
	    	cm.resetMap(925061000);
	    	cm.resetMap(925061100);
	    	cm.resetMap(925061200);
	    	cm.resetMap(925061300);
	    	cm.resetMap(925061400);
	    	cm.resetMap(925061500);
	    	cm.resetMap(925061600);
	    	cm.resetMap(925061700);
	    	cm.resetMap(925061800);
	    	cm.resetMap(925061900);
	    	cm.resetMap(925062000);
	    	cm.resetMap(925062100);
	    	cm.resetMap(925062200);
	    	cm.resetMap(925062300);
	    	cm.resetMap(925062400);
	    	cm.resetMap(925062500);
	    	cm.resetMap(925062600);
	    	cm.resetMap(925062700);
	    	cm.resetMap(925062800);
	    	cm.resetMap(925062900);
	    	cm.resetMap(925063000);
	    	cm.resetMap(925063100);
	    	cm.resetMap(925063200);
	    	cm.resetMap(925063300);
	    	cm.resetMap(925063400);
	    	cm.resetMap(925063500);
	    	cm.resetMap(925063600);
	    	cm.resetMap(925063700);
	    	cm.resetMap(925063800);
	    	cm.resetMap(925063900);
	    	cm.resetMap(925064000);
	    	cm.resetMap(925064100);
	    	cm.resetMap(925064200);
	    	cm.resetMap(925064300);
	    	cm.resetMap(925064400);
	    	cm.resetMap(925064500);
	    	cm.resetMap(925064600);
	    	cm.resetMap(925064700);
		cm.warp(925020002, 0);
		cm.playerMessage(5, "������ �� ���� �ϱ�.");
		cm.dispose();
		}
	}
    } else if (status == 2) {
    	if (select == 0) { 
	    	cm.resetMap(925060100);
	    	cm.resetMap(925060200);
	    	cm.resetMap(925060300);
	    	cm.resetMap(925060400);
	    	cm.resetMap(925060500);
	    	cm.resetMap(925060600);
	    	cm.resetMap(925060700);
	    	cm.resetMap(925060800);
	    	cm.resetMap(925060900);
	    	cm.resetMap(925061000);
	    	cm.resetMap(925061100);
	    	cm.resetMap(925061200);
	    	cm.resetMap(925061300);
	    	cm.resetMap(925061400);
	    	cm.resetMap(925061500);
	    	cm.resetMap(925061600);
	    	cm.resetMap(925061700);
	    	cm.resetMap(925061800);
	    	cm.resetMap(925061900);
	    	cm.resetMap(925062000);
	    	cm.resetMap(925062100);
	    	cm.resetMap(925062200);
	    	cm.resetMap(925062300);
	    	cm.resetMap(925062400);
	    	cm.resetMap(925062500);
	    	cm.resetMap(925062600);
	    	cm.resetMap(925062700);
	    	cm.resetMap(925062800);
	    	cm.resetMap(925062900);
	    	cm.resetMap(925063000);
	    	cm.resetMap(925063100);
	    	cm.resetMap(925063200);
	    	cm.resetMap(925063300);
	    	cm.resetMap(925063400);
	    	cm.resetMap(925063500);
	    	cm.resetMap(925063600);
	    	cm.resetMap(925063700);
	    	cm.resetMap(925063800);
	    	cm.resetMap(925063900);
	    	cm.resetMap(925064000);
	    	cm.resetMap(925064100);
	    	cm.resetMap(925064200);
	    	cm.resetMap(925064300);
	    	cm.resetMap(925064400);
	    	cm.resetMap(925064500);
	    	cm.resetMap(925064600);
	    	cm.resetMap(925064700);
		cm.warp(925020002, 0);
		cm.playerMessage(5, "������ �� ���� �ϱ�.");
		cm.dispose();
	} else if (select == 1) {
	    if(cm.getPlayer().getNX() >= 5000) {
                cm.getPlayer().addHP(5000);
                cm.getPlayer().addMP(5000);
                cm.gainNX (-5000);
		cm.playerMessage("<ü�� / ���� ȸ�� 5000 ȸ��[5000 ĳ��]> �� ����ϸ�, �� ĳ�� �������� 5000 �����Ͽ����ϴ�.");
		cm.dispose();
	} else {
		cm.playerMessage("���� ��뿡 �ʿ��� ĳ���� �����մϴ�.");
		cm.dispose();
				}
			}
		}
	}