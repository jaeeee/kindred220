/*

 * ������Ʈ : 1.2.214 SpiritStyle

 * Script Author : �Ͽ�(ifhayo)

 * �� �ּ��� ������ �ʾ��ּ����� ���ڽ��ϴ�.

 *

 */


var status = 0;

var itemid = new Array(1113070, 1032216, 1152155, 1113081, 1113082, 4310027, 4001126, 4310069, 2049360, 2049704, 4001715)

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

 var itemQty = itemSet == 4001715 ? 1 : 2049704 ? 5 : 2049360 ? 10 : 4001126 ? 1 : 4310027 ? 1 : 1113082 ? 1 : 1113070 ? 1 : itemSet == 1032216 ? 1 : itemSet == 1152155 ? 1 : itemSet == 1113081 ? 1 : 1

 cm.gainItem(itemSet, itemQty);
 cm.gainItem(2431404, -1);
 cm.dispose();

 }

}

}