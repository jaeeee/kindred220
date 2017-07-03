/**
 * 
 * @author Daniel
 * Item upgrader
 * 
 * For Kindred.
 * @version 1.0
 * 
 */
var status =  0;
var selected;
var equip;
var dex;
var str;
var iint;
var luk;
var wa;
var ma;
var rand;
var crit;
var cost;

function start() {
	if (cm.getPlayer().getLevel() < 51) {
		cm.sendOk("Sorry, you need to be level 51 or higher to use this NPC.");
		cm.dispose();
		return;
	}
	if (cm.getPlayer().getLevel() >= 51 && cm.getPlayer().getLevel() <= 100) {
		cost = 1;
	}
	if (cm.getPlayer().getLevel() >= 101 && cm.getPlayer().getLevel() <= 150) {
		cost = 2;
	}
	if (cm.getPlayer().getLevel() >= 151 && cm.getPlayer().getLevel() <= 250) {
		cost = 3;
	}
	if (cm.EquipList(cm.getC()) == "") {
		cm.sendOk("There is nothing in your equip tab.");
		cm.dispose();
		return;
	}
	  cm.sendSimple("#rPlease read this carefully.#k \r\n Click an item to upgrade it. This will give that item random stats (0-#b" + cm.getPlayer().getLevel() + "#k)." + " The item cost will be based on your level. \r\n Current cost: #r" + cost + "#kx #i4033366# (You have #r" + cm.itemQuantity(4033366) + "#k) \r\n I can upgrade ANY equip item in your inventory, so please choose your items wisely. Potentials and soul stats will be kept. \r\n" + cm.EquipList(cm.getC()));
}

function action(mode, type, selection) { 
    if (mode < 1) { 
        cm.sendOk("Ok, see you next time!"); 
        cm.dispose(); 
        return; 
    } else { 
        status++; 
    } 
    	if (cm.itemQuantity(4033366) < cost) {
    		cm.sendOk("Sorry, you do not have enough #i4033366#. Amount required #r" + cost + "#k");
    		cm.dispose();
    		return;
    	} 
    	equip = cm.getEquip(selection);
        selected = selection;
        rand = Math.floor(Math.random()*cm.getPlayer().getLevel());
        crit = Math.floor(Math.random() * 10);
        if (crit == 3) {
        	rand *= 2;
        }
        cm.gainItem(4033366, -cost);
    	 dex = equip.getDex() + rand;
         str = equip.getStr() + rand;
         iint = equip.getInt() + rand;
         luk = equip.getLuk() + rand;
         wa = equip.getWatk() + rand;
         ma = equip.getMatk() + rand;
    	cm.gainEpicItem(selected, cm.getChar(), str, dex, iint, luk, wa, ma);
//    	cm.sendOk("All done! Stats were increased by: #r" + rand + "#k.");
    	cm.getPlayer().dropMessage(5, "Upgraded by " + rand + " stats.")
    	  cm.sendSimple("#rPlease read this carefully.#k \r\n Click an item to upgrade it. This will give that item random stats (0-#b" + cm.getPlayer().getLevel() + "#k)." + " The item cost will be based on your level. \r\n Current cost: #r" + cost + "#kx #i4033366# (You have #r" + cm.itemQuantity(4033366) + "#k) \r\n I can upgrade ANY equip item in your inventory, so please choose your items wisely. Potentials and soul stats will be kept. \r\n" + cm.EquipList(cm.getC()));
    	  status = 0;
    	if (rand >= 100 && crit == 3) {
    	cm.broadcastMessage(cm.getPlayer().getName() + " just upgraded an item by " + rand + " stats!");
    	}
    	
    }