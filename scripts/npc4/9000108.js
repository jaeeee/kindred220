var status;
var itemid = Array(4310119,1112586,4310015,2049360,1112735);
var number = Array(1000,1,1000,1,1);
importPackage(Packages.tools.RandomStream);
importPackage(java.lang);
function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if (!cm.haveItem(2431156,1)) {
			cm.sendOk("������");
			cm.dispose();
			return;
		}
		var rand = Randomizer.nextInt(itemid.length);
		cm.sendOk("������~ ��Ÿ�� ���ڿ��� #i" + itemid[rand] + "##b #z" + itemid[rand] + "# " + number[rand] + "��#k�� ���Ծ�");
		cm.gainItem(itemid[rand],number[rand]);
		cm.gainItem(2431156,-1);
		cm.dispose();
        } else { 
            cm.dispose();
        }
    }
}