/*
�������� �̵� ��ũ��Ʈ
������ : ����(qor6101@naver.com)

*/

importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.Dbg.community);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
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
    	var dojointro = "�츮 ��δ��� �������� �ְ�� ���� ������. �׷� �п��� �װ� �����ϰڴٰ�? ���߿� ��ȸ������.";
    	dojointro += "#b\r\n#L0#���� ���忡 �����غ���";
    	dojointro += "#b\r\n#L1#������ �㸮�츦 �ް� �;�.";
    	dojointro += "#b\r\n#L2#���� ���忡�� ���� �� �ִ� ������ Ȯ���ϰ� �;�.";
    	dojointro += "#b\r\n#L3#���� ������ ����?";
    	dojointro += "#b\r\n#L4#���� ���� ���� Ƚ���� Ȯ���ϰ� �;�.";
    	dojointro += "#b\r\n#L5#�㸮�츦 �ް� �;� #r(������ �㸮��� 7�ϰ� ��� ����)";
	cm.sendSimple(dojointro);
    } else if (status == 1) {
	if (selection == 0) {
    		var dojo = "���� ���忡�� #b�븻, �ϵ�, ��ŷ ���#k�� �����ؼ� ������ �� �־�. �븻 ��忡�� #r90���� �̻�#k, �ϵ� ��忡�� #r120���� �̻�#k, ��ŷ ���� #r130���� �̻�#k�̾�� ������ �� �־�. � ��忡 �����ϰھ�?";
    		dojo += "#b\r\n#L0#�븻 ���� �����ҷ�";
    		dojo += "#b\r\n#L1#�ϵ� ���� �����ҷ�";
    		dojo += "#r\r\n#L2#��ŷ ���� �����ҷ�";
		cm.sendSimple(dojo);
	} else if (selection == 1) {
		cm.sendYesNo("#b#i4001620# #z4001620##k�� ������, #b�㸮��#k�� �ٲ�. ��, �� �㸮��� ������ �ڿ� ������ϱ�. �� �ް� �ʹٸ� ������ ��ǥ�� �ٽ� ��ƿ���.");
	} else if (selection == 2) {
		cm.sendNext("���̵��� ������� ������ ��ǥ�� ��ƿ��� #b������ �㸮��#k�� ���� �� ����. ��, #r��ŷ ���#k�� �����ؼ� ����� ������ �ȿ� ����ٸ�, Ư���� ������ ���� �� �־�. ��, ���� ���� �Ƿ����δ� �̰� �ϳ��� �ޱ� ���������.#e\r\n\r\n< ������ ��ǥ ���� : ��ȿ�Ⱓ 7�� >#n\r\n#b#i1132112# #z1132112# #r(������ ��ǥ 50�� �ʿ�)\r\n#b#i1132113# #z1132113# #r(������ ��ǥ 100�� �ʿ�)\r\n#b#i1132114# #z1132114# #r(������ ��ǥ 200�� �ʿ�)\r\n#b#i1132115# #z1132115# #r(������ ��ǥ 250�� �ʿ�)#e#k\r\n\r\n< ��ŷ ��� ���� : ��ȿ�Ⱓ 1�� >#n\r\n#b#i1082392# #z1082392# #r(��ŷ 1��)\r\n#b#i1082393# #z1082393# #r(��ŷ 2�� ~ 5��)\r\n#b#i1082394# #z1082394# #r(��ŷ 5�� ~ 20��)");
		cm.dispose();
	} else if (selection == 3) {
		cm.sendOk("�츮 ��δ��� �������� ���� ���� ���̾�. �׷� ��δԲ��� ����� ���� �ٷ� �� ���� �����̶�� ������. ���� ������ 47���̳� �Ǵ� ���� �ǹ��̾�. �ϳ��ϳ� �ö󰡸鼭 �ڽ��� ������ �� �־�. ���� ���� �Ƿ����δ� ������ ���� ���������.");
		cm.dispose();
	} else if (selection == 4) {
		cm.sendOk("���� ���� ���� Ƚ���� �������̾�.");
		cm.dispose();
	} else if (selection == 5) {
   		var Balt1 = "���� ���� ������ #b" + cm.getPlayer().getDojo() + "#k �� �̾�. ��δ��� ��� �ִ� ������� �����Ͻ���. ���������� ���� ���� �̻� ȹ���ϸ�, ������ ���� �㸮�츦 ���� �� �־�.";
    		Balt1 += "\r\n#L3##i1132000# #z1132000#";
    		Balt1 += "\r\n#L4##i1132001# #z1132001#";
    		Balt1 += "\r\n#L5##i1132002# #z1132002#";
    		Balt1 += "\r\n#L6##i1132003# #z1132003#";
    		Balt1 += "\r\n#L7##i1132004# #z1132004#";
		cm.sendSimple(Balt1);
	}
    } else if (status == 2) {
		    if (selection == 0) {
	  		 if (cm.getPlayer().getLevel() >= 90) { 
				cm.sendOk("#b�븻 ���#k�� ������ ���� �ʾҾ�, #r��ŷ ���#k�� �̿��غ��� �ٷ�.");
				cm.dispose();
			} else {
               			cm.sendOk("�̺�! �츮 ��δ��� ����� ���°ž�? �츮 ��δ��� �ٻ� ���̶��! �ʰ��� �޺��Ƹ��� ��� �̵� ���� �����ϰڴٴ°ž�? ��� #b90����#k������ �Ǿ����� �ʰھ�?");
				cm.dispose();
			}
		    } else if (selection == 1) {
	  		if (cm.getPlayer().getLevel() >= 120) { 
				cm.sendOk("#b�ϵ� ���#k�� ������ ���� �ʾҾ�, #r��ŷ ���#k�� �̿��غ��� �ٷ�.");
				cm.dispose();
			} else {
               			cm.sendOk("�̺�! �츮 ��δ��� ����� ���°ž�? �츮 ��δ��� �ٻ� ���̶��! �ʰ��� �޺��Ƹ��� ��� �̵� ���� �����ϰڴٴ°ž�? ��� #b120����#k������ �Ǿ����� �ʰھ�?");
				cm.dispose();
			}
		    } else if (selection == 2) {
	  		 if (cm.getPlayer().getParty() != null) {
				cm.sendOk("������ ��Ƽ�� �����밡 ������ ���忡 ������ �� ����. ��ŷ���� �ַ��� ���� �𿩼� ���� �ö󰡴� ��찡 �߻��ϸ� �ȵ��ݾ�? ȥ�ڼ� ���� �ٷ�");
				cm.dispose();
			 } else if (cm.getPlayer().getLevel() >= 130 && cm.getPlayerCount(925060100) == 0 && cm.getPlayerCount(925060200) == 0 && cm.getPlayerCount(925060300) == 0 && cm.getPlayerCount(925060400) == 0 && cm.getPlayerCount(925060500) == 0 && cm.getPlayerCount(925060600) == 0 && cm.getPlayerCount(925060700) == 0 && cm.getPlayerCount(925060800) == 0 && cm.getPlayerCount(925060900) == 0 && cm.getPlayerCount(925061000) == 0 && cm.getPlayerCount(925061100) == 0 && cm.getPlayerCount(925061200) == 0 && cm.getPlayerCount(925061300) == 0 && cm.getPlayerCount(925061400) == 0 && cm.getPlayerCount(925061500) == 0 && cm.getPlayerCount(925061600) == 0 && cm.getPlayerCount(925061700) == 0 && cm.getPlayerCount(925061800) == 0 && cm.getPlayerCount(925061900) == 0 && cm.getPlayerCount(925062000) == 0 && cm.getPlayerCount(925062100) == 0 && cm.getPlayerCount(925062200) == 0 && cm.getPlayerCount(925062300) == 0 && cm.getPlayerCount(925062400) == 0 && cm.getPlayerCount(925062500) == 0 && cm.getPlayerCount(925062600) == 0 && cm.getPlayerCount(925062700) == 0 && cm.getPlayerCount(925062800) == 0 && cm.getPlayerCount(925062900) == 0 && cm.getPlayerCount(925063000) == 0 && cm.getPlayerCount(925063100) == 0 && cm.getPlayerCount(925063200) == 0 && cm.getPlayerCount(925063300) == 0 && cm.getPlayerCount(925063400) == 0 && cm.getPlayerCount(925063500) == 0 && cm.getPlayerCount(925063600) == 0 && cm.getPlayerCount(925063700) == 0 && cm.getPlayerCount(925063800) == 0 && cm.getPlayerCount(925063900) == 0 && cm.getPlayerCount(925064000) == 0 && cm.getPlayerCount(925064100) == 0 && cm.getPlayerCount(925064200) == 0 && cm.getPlayerCount(925064300) == 0 && cm.getPlayerCount(925064400) == 0 && cm.getPlayerCount(925064500) == 0 && cm.getPlayerCount(925064600) == 0 && cm.getPlayerCount(925064700) == 0) {
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
				cm.warp(925060100, 0);
				cm.spawnMob(9305300, 141,7);
				cm.playerMessage(6, "�Ұ� : ���ѽð��� 2���̴ϱ� ���� ����. ���� �ʰ� ���͸� �����߸��� ���� ������ �ö󰡸� ��!");
				cm.dispose();
			 } else if (cm.getPlayer().getLevel() >= 130) { 
                		cm.sendOk("�̹� �ٸ� �����ڰ� ���忡 ���� �ϰ� �־�. �ٸ� ä�ο��� ������ �ֱ� �ٷ�.");
				cm.dispose();
			 } else {
                		cm.sendOk("�̺�! �츮 ��δ��� ����� ���°ž�? �츮 ��δ��� �ٻ� ���̶��! �ʰ��� �޺��Ƹ��� ��� �̵� ���� �����ϰڴٴ°ž�? ��� #b130����#k������ �Ǿ����� �ʰھ�?");
				cm.dispose();
				}

		} else if (selection == 3) {
 		   if(cm.getPlayer().getDojo() >= 200 && cm.getPlayer().getLevel() >= 25) {
			cm.sendYesNo("#b#i1132000# #z1132000##k �� �ޱ� ���ؼ��� #b25���� �̻�#k�̾�� �ϸ�, ���� �������� #b200#k ���� �ʿ���. ���� ���⿡ �ʴ� �� ������ ��� �����ϴ� �� ����. ���� �㸮�츦 �ްھ�?");
		    	select = 0;
 		   } else if(cm.getPlayer().getLevel() >= 25){
			cm.sendNext("#b#i1132000# #z1132000##k �� �ޱ� ���ؼ��� #b25���� �̻�#k�̾�� �ϸ�, ���� �������� #b200#k�� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� ���������� �� �׾ƾ� �Ѵٰ�.");
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132000# #z1132000##k �� �ޱ� ���ؼ��� #b25���� �̻�#k�̾�� �ϸ�, ���� �������� #b200#k�� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� #b���� 25�̻�#k�� �Ǿ�� �Ѵٰ�.");
        		cm.dispose();
		}
		} else if (selection == 4) {
 		   if(cm.getPlayer().getDojo() >= 1800 && cm.getPlayer().getLevel() >= 35) {
			cm.sendYesNo("#b#i1132001# #z1132001##k �� �ޱ� ���ؼ��� #b35���� �̻�#k�̾�� �ϸ�, ���� �������� #b1800#k ���� �ʿ���. ���� ���⿡ �ʴ� �� ������ ��� �����ϴ� �� ����. ���� �㸮�츦 �ްھ�?");
		    	select = 1;
		   } else if(cm.getPlayer().getLevel() >= 35){
			cm.sendNext("#b#i1132001# #z1132001##k �� �ޱ� ���ؼ��� #b35���� �̻�#k�̾�� �ϸ�, ���� �������� #b1800#k ���� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� ���������� �� �׾ƾ� �Ѵٰ�.");
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132001# #z1132001##k �� �ޱ� ���ؼ��� #b35���� �̻�#k�̾�� �ϸ�, ���� �������� #b1800#k�� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� #b���� 35�̻�#k�� �Ǿ�� �Ѵٰ�.");
        		cm.dispose();
		}
		} else if (selection == 5) {
 		   if(cm.getPlayer().getDojo() >= 4000 && cm.getPlayer().getLevel() >= 45) {
			cm.sendYesNo("#b#i1132002# #z1132002##k �� �ޱ� ���ؼ��� #b45���� �̻�#k�̾�� �ϸ�, ���� �������� #b4000#k ���� �ʿ���. ���� ���⿡ �ʴ� �� ������ ��� �����ϴ� �� ����. ���� �㸮�츦 �ްھ�?");
		    	select = 2;
		   } else if(cm.getPlayer().getLevel() >= 45){
			cm.sendNext("#b#i1132002# #z1132002##k �� �ޱ� ���ؼ��� #b45���� �̻�#k�̾�� �ϸ�, ���� �������� #b4000#k ���� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� ���������� �� �׾ƾ� �Ѵٰ�.");
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132002# #z1132002##k �� �ޱ� ���ؼ��� #b45���� �̻�#k�̾�� �ϸ�, ���� �������� #b4000#k�� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� #b���� 45�̻�#k�� �Ǿ�� �Ѵٰ�.");
        		cm.dispose();
		}
		} else if (selection == 6) {
 		   if(cm.getPlayer().getDojo() >= 8000 && cm.getPlayer().getLevel() >= 60) {
			cm.sendYesNo("#b#i1132003# #z1132003##k �� �ޱ� ���ؼ��� #b60���� �̻�#k�̾�� �ϸ�, ���� �������� #b8000#k ���� �ʿ���. ���� ���⿡ �ʴ� �� ������ ��� �����ϴ� �� ����. ���� �㸮�츦 �ްھ�?");
		    	select = 3;
		   } else if(cm.getPlayer().getLevel() >= 60){
			cm.sendNext("#b#i1132003# #z1132003##k �� �ޱ� ���ؼ��� #b60���� �̻�#k�̾�� �ϸ�, ���� �������� #b8000#k ���� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� ���������� �� �׾ƾ� �Ѵٰ�.");
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132003# #z1132003##k �� �ޱ� ���ؼ��� #b60���� �̻�#k�̾�� �ϸ�, ���� �������� #b8000#k ���� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� #b���� 60�̻�#k�� �Ǿ�� �Ѵٰ�.");
        		cm.dispose();
		}
		} else if (selection == 7) {
 		   if(cm.getPlayer().getDojo() >= 17000 && cm.getPlayer().getLevel() >= 75) {
			cm.sendYesNo("#b#i1132004# #z1132004##k �� �ޱ� ���ؼ��� #b75���� �̻�#k�̾�� �ϸ�, ���� �������� #b17000#k ���� �ʿ���. ���� ���⿡ �ʴ� �� ������ ��� �����ϴ� �� ����. ���� �㸮�츦 �ްھ�?");
		    	select = 4;
		   } else if(cm.getPlayer().getLevel() >= 75){
			cm.sendNext("#b#i1132004# #z1132004##k �� �ޱ� ���ؼ��� #b75���� �̻�#k�̾�� �ϸ�, ���� �������� #b17000#k ���� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� ���������� �� �׾ƾ� �Ѵٰ�.");
        		cm.dispose();		} else {
			cm.sendNext("#b#i1132004# #z1132004##k �� �ޱ� ���ؼ��� #b75���� �̻�#k�̾�� �ϸ�, ���� �������� #b17000#k ���� �ʿ���.\r\n\r\n�װ� �� �㸮�츦 �������� #b���� 75�̻�#k�� �Ǿ�� �Ѵٰ�.");
        		cm.dispose();
		}
		} else {
   			var Balt = "� �㸮�츦 �ޱ� ����?";
    			Balt += "\r\n#b#L0##i1132112# #z1132112# #r(������ ��ǥ 50�� �ʿ�)";
    			Balt += "\r\n#b#L1##i1132113# #z1132113# #r(������ ��ǥ 100�� �ʿ�)";
    			Balt += "\r\n#b#L2##i1132114# #z1132114# #r(������ ��ǥ 200�� �ʿ�)";
    			Balt += "\r\n#b#L3##i1132115# #z1132115# #r(������ ��ǥ 250�� �ʿ�)";
			cm.sendSimple(Balt);
		}
	      } else if (status == 3) {
		if (selection == 0) {
	 	   if (cm.haveItem(4001620, 50)) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(4001620,-50);
			cm.gainItem(1132112,1, false, 604800000);
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132112# #z1132112##k �� ��� ���ؼ��� ���� ������ ������ �� ������ #r#b#i4001620# #z4001620# 50��#k�� �ʿ��մϴ�. ������ ��ǥ�� �� �ִ��� �ٽ� Ȯ�����ּ���.");
        		cm.dispose();
		}
		} else if (selection == 1) {
	 	   if (cm.haveItem(4001620, 100)) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(4001620,-100);
			cm.gainItem(1132113,1, false, 604800000);
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132113# #z1132113##k �� ��� ���ؼ��� ���� ������ ������ �� ������ #r#b#i4001620# #z4001620# 100��#k�� �ʿ��մϴ�. ������ ��ǥ�� �� �ִ��� �ٽ� Ȯ�����ּ���.");
        		cm.dispose();
		}
		} else if (selection == 2) {
	 	   if (cm.haveItem(4001620, 200)) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(4001620,-200);
			cm.gainItem(1132114,1, false, 604800000);
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132114# #z1132114##k �� ��� ���ؼ��� ���� ������ ������ �� ������ #r#b#i4001620# #z4001620# 200��#k�� �ʿ��մϴ�. ������ ��ǥ�� �� �ִ��� �ٽ� Ȯ�����ּ���.");
        		cm.dispose();
		}
		} else if (selection == 3) {
	 	   if (cm.haveItem(4001620, 250)) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(4001620,-250);
			cm.gainItem(1132115,1, false, 604800000);
        		cm.dispose(); 
		} else {
			cm.sendNext("#b#i1132115# #z1132115##k �� ��� ���ؼ��� #r#b#i4001620# #z4001620# 250��#k�� �ʿ��մϴ�. ������ ��ǥ�� �� �ִ��� �ٽ� Ȯ�����ּ���.");
        		cm.dispose();
		}
	} else {
		if (select == 0) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(1132000,1, false, 604800000);
        		cm.dispose();
		} else if (select == 1) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(1132001,1, false, 604800000);
        		cm.dispose();
		} else if (select == 2) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(1132002,1, false, 604800000);
        		cm.dispose(); 
		} else if (select == 3) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(1132003,1, false, 604800000);
        		cm.dispose(); 
		} else if (select == 4) {
			cm.sendNext("���� �������� ������ֵ��� ����. �㸮�츦 ����ٰ� �߳� ô ���� ����. �������� ���� ������ �ٷ� �� �ʷϻ� �㸮����!");
			cm.gainItem(1132004,1, false, 604800000);
        		cm.dispose(); 
			}
		}
	}
}