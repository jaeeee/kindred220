/*
 * 프로젝트 : 1.2.214 SpiritStyle
 * Script Author : 하요(ifhayo)4021031
 * 이 주석은 지우지 않아주셨으면 좋겠습니다.
 *
 */


importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var itemid = new Array(4310119, 2023266, 4310119, 4310119, 2023265, 4310119, 4310119, 4310119, 4310119, 2023266, 2028208, 4310119, 4310119, 4310119, 4310119, 4310119, 2023265, 4310119, 4310119, 4310119, 4310119, 4310119, 4001832, 4001832, 4001832, 4001832, 4001832, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 
4310020, 2023266, 4310020, 2023266, 4001832, 4001832, 4001832, 4001832, 4001832, 4001832, 4001832, 4001832, 4001832, 4001832, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 4310020, 
3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 2028214, 3994720, 2050004, 4001832, 3994720, 3994720, 4001832, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 3994720, 
2000004, 2000004, 2000004, 2000004, 2050004, 2000004, 2050004, 2000004, 2000004, 2000004, 2050004, 2000004, 2000004, 2028215, 2000004, 2000004, 
2050004, 2050004, 2050004, 4001832, 4001832, 4001832, 4001832, 2050004, 2050004, 2050004, 2050004, 2050004, 2050004, 2050004, 2050004, 2000004, 2000004, 2000004, 2000004, 2000004, 4021031, 4021031, 4021031, 4021031, 4021031, 2000004, 2000004, 2000004, 2000004, 2000004, 2000004, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 2000005, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 2023265, 2023265, 2023265, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4021031, 4021031, 4021031, 4021031, 4021031, 4021031, 4021031, 4021031, 4310119, 4001832, 4001832, 4001832, 4001832, 4001832, 4001832, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4310119, 4001832, 4310119, 4310119, 4310119, 4310119, 4310119, 2050004, 4310119, 4310119, 4310119, 4310119)
var itemNed = 2431694

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
	var itemQty = itemSet == 4001832 ? 5 : 1
	cm.gainItem(itemSet, itemQty);
	cm.gainItem(itemNed, -1);
		if(itemSet == 4310119 || itemSet == 4310020 || itemSet == 3994720 || itemSet == 2000004 || itemSet == 4021031) {
				if(itemSet == 4310020) {
				cm.getPlayer().send(MainPacketCreator.getGMText(6, "아이템을 획득하였습니다. (몬스터파크 기념주화)"));
				} else if(itemSet == 4310119) {
				cm.getPlayer().send(MainPacketCreator.getGMText(6, "아이템을 획득하였습니다. (노블시스 코인)"));
				} else if(itemSet == 4021031) {
				cm.getPlayer().send(MainPacketCreator.getGMText(6, "아이템을 획득하였습니다. (주문의 흔적 "+itemQty+"개)"));

				} else {
				cm.getPlayer().send(MainPacketCreator.getGMText(6, "아이템을 획득하였습니다. ("+Packages.server.items.ItemInformation.getInstance().getName(itemSet)+")"));
				}
		} else {
	cm.getPlayer().send(MainPacketCreator.getGMText(6, "아이템을 획득하였습니다. ("+Packages.server.items.ItemInformation.getInstance().getName(itemSet)+")"));
		}
	cm.dispose();
	}
}
}