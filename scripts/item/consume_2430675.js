/*
 * ������Ʈ : 1.2.214 SpiritStyle
 * Script Author : �Ͽ�(ifhayo)4021031
 * �� �ּ��� ������ �ʾ��ּ����� ���ڽ��ϴ�.
 *
 */


importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var itemid = new Array(1702486, 1081013, 1051391, 1071077, 1080007, 1050321, 1070060, 1702504, 1050335, 1051405, 1702528, 1004192, 1072943, 1003109, 1052275, 1072448, 1702275, 1102245, 1003816, 1003817, 1003818, 1003819, 1003820, 1702269, 1702270, 1702271, 1702272, 1702273, 
1001075, 1102356, 1702347, 1003422, 1050226, 1051276, 1070024, 1071036, 1050152, 1002943, 1051180, 1004197, 1004212, 1002885, 1003131, 1003132, 1003133, 1003913, 1001062, 1081007, 1051220, 1702291, 1000042, 1100001, 1050178, 1070019, 1000062, 1001089, 
1040192, 1041194, 1060180, 1061203, 1702416, 1702488, 1000051, 1001077, 1102367, 1050228, 1051279, 1072646, 1702348, 1000050, 1001076, 1050227, 1051278, 1102707, 1102708, 1702217, 1702415, 1003831, 1003945, 1102608, 1050296, 1051362, 1072852, 1004000, 1082580, 1052674, 1072877, 
1702471, 1000069, 1001092, 1050311, 1051383, 1072901, 1102667, 1004081, 1052655, 1072856, 1000070, 1001093, 1050312, 1051384, 1072908, 
1082580, 1702486, 1081013, 1051391, 1071077, 1080007, 1050321, 1070060, 1702504, 1050335, 1051405, 1702528, 1004192, 1072943, 1003109, 1052275, 1072448, 1702275, 1102245, 1003816, 1003817, 1003818, 1003819, 1003820, 1702269, 1702270, 1702271, 1702272, 1702273, 
1001075, 1102356, 1702347, 1003422, 1050226, 1051276, 1070024, 1071036, 1050152, 1002943, 1051180, 1004197, 1004212, 1002885, 1003131, 1003132, 1003133, 1003913, 1001062, 1081007, 1051220, 1702291, 1000042, 1100001, 1050178, 1070019, 1000062, 1001089, 
1040192, 1041194, 1060180, 1061203, 1702416, 1702488, 1000051, 1001077, 1102367, 1050228, 1051279, 1072646, 1702348, 1000050, 1001076, 1050227, 1051278, 1102707, 1102708, 1702217, 1702415, 1003831, 1003945, 1102608, 1050296, 1051362, 1072852, 1004000, 1082580, 1052674, 1072877, 
1702471, 1000069, 1001092, 1050311, 1051383, 1072901, 1102667, 1004081, 1052655, 1072856, 1000070, 1001093, 1050312, 1051384, 1072908, 
1082580)
var itemNed = 2430675

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
	var itemQty = itemSet == 1050226 ? 5 : 1
	cm.gainItem(itemSet, itemQty);
	cm.gainItem(itemNed, -1);
		if(itemSet == 1050226 || itemSet == 1702488 || itemSet == 1102367 || itemSet == 1051405 || itemSet == 1072448) {
				if(itemSet == 1702486) {
				cm.getPlayer().send(MainPacketCreator.getGMText(6, "�������� ȹ���Ͽ����ϴ�. (������ ��Ʈ)"));
				} else if(itemSet == 1702486) {
				cm.getPlayer().send(MainPacketCreator.getGMText(6, "�������� ȹ���Ͽ����ϴ�. (���� ���̺� �丣�ҳ�)"));
				} else if(itemSet == 1003422) {
				cm.getPlayer().send(MainPacketCreator.getGMText(6, "�������� ȹ���Ͽ����ϴ�. (������ ��Ʈ"));

				} else {
				cm.getPlayer().send(MainPacketCreator.getGMText(6, "�������� ȹ���Ͽ����ϴ�. ("+Packages.server.items.ItemInformation.getInstance().getName(itemSet)+")"));
				}
		} else {
	cm.getPlayer().send(MainPacketCreator.getGMText(6, "�������� ȹ���Ͽ����ϴ�. ("+Packages.server.items.ItemInformation.getInstance().getName(itemSet)+")"));
		}
	cm.dispose();
	}
}
}