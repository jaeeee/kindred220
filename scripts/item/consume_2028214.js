/*
 * 프로젝트 : 1.2.214 SpiritStyle
 * Script Author : 하요(ifhayo)
 * 이 주석은 지우지 않아주셨으면 좋겠습니다.
 *
 */


importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var itemid = new Array(1302277, 1312155, 1322205, 1232060, 1402199, 1412137, 1422142, 1432169, 1442225, 1372179, 1382211, 1212066, 1452207, 1462195, 1522096, 1332227, 1472216, 1362092, 1242065, 1482170, 1492181, 1532100, 1222061)
var itemNed = 2028214

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
	itemSet = itemid[Math.floor(Math.random() * itemid.length)];
	var itemQty = 1
	cm.gainItem(itemSet, itemQty);
	cm.gainItem(itemNed, -1);
	cm.getPlayer().send(MainPacketCreator.getGMText(6, "아이템을 획득하였습니다. ("+Packages.server.items.ItemInformation.getInstance().getName(itemSet)+")"));
	cm.dispose();
	}
}
}