/**
 * 
 * @author Daniel
 * Item exchanger.
 * 
 * For Kindred.
 * @version 1.0
 * 
 */

var status = 0;
var drugs = [4033366, 2049750, 2049153, 2590008, 2048305, 2048304];
var cost = [5000, 3000, 500, 2000, 5000, 2000];
var text;

function start() {
	text = " Would you like to purchase something? \r\n" 
			+ "#L0# #i4033366# Angelic Buster's Autograph - #r 10 levels & 5000 Maple Points #k \r\n"
			+ "#L1# #i2049750# Unique Potential Scroll 80% - #r 3000 Maple Points #k \r\n"
			+ "#L2# #i2049153# Incredible Chaos Scroll of Goodness 60% - #r 500 Maple Points #k \r\n"
			+ "#L60# Trade #r1000 Maple Points#k for #b1B Mesos#k \r\n"
			+ "#L3# #i2590008# Customized Soul Enchanter - #r2000 Maple Points#k \r\n"
			+ "#L4# #i2048305# Bonus Potential Scroll 70% - #r5000 Maple Points#k \r\n"
			+ "#L5# #i2048304# Perfect Bonus Potential Stamp - #r2000 Maple Points#k \r\n"
			+ "#L61# #i5062009# Red Cube x100 - #r10,000 Maple Points#k \r\n" 
			+ "#L62# #i5062010# Black Cube x100 - #r22,000 Maple Points#k \r\n"
			+ "#L63# #i5062500# Bonus Potential Cube x100 - #r30,000 Maple Points#k \r\n"
	 cm.sendSimple(text); 
}

function action(mode, type, selection) { 
    if (mode < 1) { 
        cm.sendOk("Ok, see you next time!"); 
        cm.dispose(); 
        return; 
    } else { 
        status++; 
    } 
    		if (selection == 60) {
    			if (cm.getPlayer().getCSPoints(2) < 1000) {
    				cm.sendOk("Sorry, you need at least 1000 Maple Points to complete this trade.");
    				cm.dispose();
    				return;
    			}
    			cm.getPlayer().modifyCSPoints(2, -1 * 1000, true);
    			cm.gainMeso(1000000000);
    			cm.sendOk("Thank you, enjoy your mesos!");
    			cm.dispose();
    			return;
    		}
    		if (selection == 61) {
    			if (cm.getPlayer().getCSPoints(2) < 10000) {
    				cm.sendOk("Sorry, you need at least 10000 Maple Points to complete this trade.");
    				cm.dispose();
    				return;
    			}
    			cm.getPlayer().modifyCSPoints(2, -1 * 10000, true);
    			cm.gainItem(5062009, 100);
    			cm.sendOk("Thank you, enjoy your cubes!");
    			cm.dispose();
    			return;
    		}
    		if (selection == 62) {
    			if (cm.getPlayer().getCSPoints(2) < 22000) {
    				cm.sendOk("Sorry, you need at least 22000 Maple Points to complete this trade.");
    				cm.dispose();
    				return;
    			}
    			cm.getPlayer().modifyCSPoints(2, -1 * 22000, true);
    			cm.gainItem(5062010, 100);
    			cm.sendOk("Thank you, enjoy your cubes!");
    			cm.dispose();
    			return;
    		}
    		   		if (selection == 63) {
    			if (cm.getPlayer().getCSPoints(2) < 30000) {
    				cm.sendOk("Sorry, you need at least 30000 Maple Points to complete this trade.");
    				cm.dispose();
    				return;
    			}
    			cm.getPlayer().modifyCSPoints(2, -1 * 30000, true);
    			cm.gainItem(5062500, 100);
    			cm.sendOk("Thank you, enjoy your cubes!");
    			cm.dispose();
    			return;
    		}
    		
    		if (cm.getPlayer().getLevel() < 20 && selection == 0) {
    		cm.sendOk("Sorry, you must be at least level 20 to buy this.");
    		cm.dispose();
    		return;
    		}
    		if (cm.getPlayer().getCSPoints(2) < cost[selection]) {
    			cm.sendOk("Sorry, you must have at least 5000 Maple Points to purchase this.");
    			cm.dispose();
    			return;
    		}
    		cm.gainItem(drugs[selection], 1); 
    		if (selection == 0) {
        	cm.getPlayer().setLevel(cm.getPlayer().getLevel() - 11);
    		cm.getPlayer().levelUp();
        	cm.getPlayer().gainExp(-cm.getPlayer().getExp(), false, false, true);
    		}
        	cm.getPlayer().modifyCSPoints(2, cost[selection] * -1, true);
        	cm.getPlayer().dropMessage(5, "Purchase complete. You spent " + cost[selection] + " Maple Points.")
       	 cm.sendSimple(text); 
        	 status = 0;
//            cm.dispose(); 
    }