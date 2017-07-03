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
var itemid = new Array(1212067, 1222062, 1232061, 1242066, 1302278, 1312156, 1322206, 1332228, 1362093, 1372180, 1382212, 1402200, 1412138, 1422143, 1432170, 1442226, 1452208, 1462196, 1472217, 1482171, 1492182, 1522097, 1532101)
var itemNed = 2028208

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