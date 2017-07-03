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
var itemid = new Array(1003863, 1052612, 1102562, 1012376, 1122252, 1132228, 1113034)
var itemNed = 2028215

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