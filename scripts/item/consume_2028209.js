/*
 * ������Ʈ : 1.2.214 SpiritStyle
 * Script Author : �Ͽ�(ifhayo)
 * �� �ּ��� ������ �ʾ��ּ����� ���ڽ��ϴ�.
 *
 */


importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var itemid = new Array(1003864, 1102563, 1052613, 1012377, 1122253, 1132229)
var itemNed = 2028209

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
	cm.getPlayer().send(MainPacketCreator.getGMText(6, "�������� ȹ���Ͽ����ϴ�. ("+Packages.server.items.ItemInformation.getInstance().getName(itemSet)+")"));
	cm.dispose();
	}
}
}