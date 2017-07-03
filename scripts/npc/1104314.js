/* 이 주석은 지우지 마셨으면 합니다.

출처 : 자유인 (timeisruunin) by Miracle CMNT

*/

importPackage(Packages.client.items);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendGetText("#b#i5064003# #z5064003##kPlease enter the number of.\r\n#Cgray#(Per 4,500,000 method)");
	} else if (status == 1) {
	var text = cm.getText();
	cm.sendYesNo("Really #b"+text+"#kWould you like to buy a dog? The price #b#e"+text*4500000+" #n#kSmile.");
	
} else if (status == 2) {
	var leftslot = cm.getPlayer().getInventory(DbgInventoryType.CASH).getNumFreeSlot();
	var text = cm.getText();
	if (leftslot < text*1/100) {
	cm.sendOk("This space is insufficient space in the cache. Please enter biwoosi by the number of cache space, or the space currently vacant space.\r\n#Cgray#(The cache window, Cannes #z5064003# 100 to enter and caches windows there is a total of 60 spaces.)");
	cm.dispose();


} else if (cm.getMeso() < text*4500000) {

	var meso1 = cm.getMeso();
	var meso2 = text*4500000;
	var money = meso2-meso1;
	cm.sendOk("Method is low. Please check below for details.#e\r\n\r\n#Cgray#The price of the item : #r"+meso2+"#k Methodist#b (Count : "+text+"dog)#k\r\n#Cgray#Meso holdings : #r"+meso1+"#k Methodist\r\n#Cgray#Lack Methodist : #r"+money+"#k Methodist");		
cm.dispose();

	
} else {
	var meso1 = cm.getMeso();
	var meso2 = text*4500000;
	var money2 = meso1-meso2;
cm.gainItem(5064003, text);
	cm.gainMeso(-meso2);
	cm.sendOk("It has succeeded in purchasing. Please use the following addition.\r\n\r\n#r#e[Selling Items] #b#z5064003##k ×"+text+"#n\r\n#r#e[Purchase price] #b"+meso2+"#k Methodist\r\n#r[Remaining methods]#k #b"+money2+"#k Methodist");
	cm.dispose();
}
}
}