




/*

	���� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/

importPackage(Packages.client.items);
importPackage(java.lang);
importPackage(Packages.tools.RandomStream);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
var status = 0;
var ran = 300;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        var leftslot = cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot();
        if (leftslot < 1) {
            cm.sendOk("��Ÿâ �κ��丮�� 1ĭ ����ּ���.");
            cm.dispose();
            return;
        }
	ran = Randomizer.rand(300,300);
        if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431655# #b#z2431655##k�� ���Խ��ϴ�.");
            cm.gainItem(2431655, 1);
        } else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431656# #b#z2431656##k�� ���Խ��ϴ�.");
            cm.gainItem(2431656, 1);
        } else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431657# #b#z2431657##k�� ���Խ��ϴ�.");
            cm.gainItem(2431657, 1);
        } else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431658# #b#z2431658##k�� ���Խ��ϴ�.");
            cm.gainItem(2431658, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {  
            cm.sendOk("#i2431659# #b#z2431659##k�� ���Խ��ϴ�.");
            cm.gainItem(2431659, 1);
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431660# #b#z2431660##k�� ���Խ��ϴ�.");
            cm.gainItem(2431660, 1);
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431661# #b#z2431661##k�� ���Խ��ϴ�.");
            cm.gainItem(2431661, 1);
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431662# #b#z2431662##k�� ���Խ��ϴ�."); 
            cm.gainItem(2431662, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431709# #b#z2431709##k�� ���Խ��ϴ�.");
            cm.gainItem(2431709, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431710# #b#z2431710##k�� ���Խ��ϴ�.");
            cm.gainItem(2431710, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431711# #b#z2431711##k�� ���Խ��ϴ�.");
            cm.gainItem(2431711, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
	    cm.sendOk("#i2431752# #b#z2431752##k�� ���Խ��ϴ�.");
            cm.gainItem(2431752, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
	    cm.sendOk("#i2431753# #b#z2431753##k�� ���Խ��ϴ�.");
            cm.gainItem(2431753, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431895# #b#z2431895##k�� ���Խ��ϴ�.");
	    cm.gainItem(2431895, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431896# #b#z2431896##k�� ���Խ��ϴ�."); 
	    cm.gainItem(2431896, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431963# #b#z2431963##k�� ���Խ��ϴ�.");
	    cm.gainItem(2431963, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2431964# #b#z2431964##k�� ���Խ��ϴ�.");
	    cm.gainItem(2431964, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2432138# #b#z2432138##k�� ���Խ��ϴ�.");
	    cm.gainItem(2432138, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2432575# #b#z2432575##k�� ���Խ��ϴ�.");
	    cm.gainItem(2432575, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2432576# #b#z2432576##k�� ���Խ��ϴ�.");
	    cm.gainItem(2432576, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2432577# #b#z2432577##k�� ���Խ��ϴ�.");
	    cm.gainItem(2432577, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2432578# #b#z2432578##k�� ���Խ��ϴ�.");
	    cm.gainItem(2432578, 1); 
	} else if (Randomizer.nextInt(300) <= 20) {
            cm.sendOk("#i2432579# #b#z2432579##k�� ���Խ��ϴ�.");
	    cm.gainItem(2432579, 1); 
	} else {
	    cm.sendOk("��Ÿ������ #r��#k ! ������ȸ��....");
}
	cm.gainItem(2431183, -1);
        cm.dispose();
    }
}

