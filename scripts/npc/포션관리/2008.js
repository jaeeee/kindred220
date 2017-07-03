/*

�������� NPC by����

*/

importPackage(java.lang);

var status = -1;
var select = -1;
var potion =  Array(2000001, 2000008, 2000002, 2000009, 2000006, 2000011, 2022003, 2001001, 2020012, 2020013, 2020014, 2020015, 2000005);
var need =    Array(2000000, 2000007, 2000001, 2000008, 2000003, 2000010, 2000002, 2022003, 2001001, 2020012, 2000006, 2020014, 2000004);
var need2 =  Array(0,            0,           0,            0,           0,            0,           2000000, 0,            0,           2022003, 2000003, 2000006, 2000006);
var need3 =  Array(0,            0,           0,            0,           0,            0,           0,            0,           0,           0,            0,            2000003, 0);
var quantity =   Array(3, 3, 2, 2, 3, 3, 3, 2, 2, 1, 13, 1, 1);
var quantity2 = Array(0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1,   3, 1);
var quantity3 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   1, 0);
var index = 0;
var count = 0;
var melt = Array(2000000, 2000001, 2000002, 2000006);
var hard = Array(2000007, 2000008, 2000009, 2000011);

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
        if (status == 0 || status == 1 || status == 2 || status == 4 || status == 3) {
            if (status == 2 || status == 4 || status == 3) cm.sendNext("������ ������ ����� ������ ���� ������ �̿����ּ���~");
            cm.dispose();
            return;
        } else {
            status--;
        }
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("�ȳ��ϼ���? ���� ������ ����ϰ� �ִ� #b#p" + cm.getNpc() + "##k�Դϴ�.\r\n������ ���͵帱���?\r\n#b#L0#���� �����ϱ� #r(��ȯ �Ұ��� Ư���� ��찡 �ƴ� ����)#b\r\n#L1#���� ������ �����ΰ���?\r\n#L2#���� ������ #r(��ȯ �Ұ��� Ư���� ��찡 �ƴ� ����)#b\r\n#L3#���� ���̱� #r(��ȯ �Ұ��� Ư���� ��찡 �ƴ� ����)#b\r\n#L4#�ƹ��͵� �ƴϿ���.");
    } else if (status == 1) {
        select = selection;
        var exchange = "";
        if (select == 0) {
            for (var i = 0; i < potion.length; i++) {
                exchange += "#b#L" + (i + 5) + "##i" + potion[i] + "# #t" + potion[i] + "##k\r\n";
            }
            cm.sendSimple("�����Ͻ� ������ ������ �ּ���.\r\n" + exchange);
        } else if (select == 1) {
            cm.sendOk("#b���� ����#k�̶� �뷮�� ���� ���ǵ��� �����Ͽ� �뷮�� ���� �������� ����� ����Դϴ�. ���� ���� �����̶� ������ ������~");
            cm.dispose();
        } else if (select == 2 || select == 3) {
            for (var i = 0; i < (select == 2 ? melt.length : hard.length); i++) {
                exchange += "#b#L" + (i + 5) + "##i" + (select == 2 ? melt[i] : hard[i]) + "# #t" + (select == 2 ? melt[i]: hard[i]) + "##k " + (select == 2 ? "������" : "���̱�") + "\r\n";
            }
            cm.sendSimple((select == 2 ? "����" : "����") + " ������ ������ �ּ���.\r\n" + exchange);
        } else if (select == 4) {
            cm.sendNext("������ ������ ����� ������ ���� ������ �̿����ּ���~");
            cm.dispose();
        }
    } else if (status == 2) {
        index = selection - 5;
        if (select == 0) {
            cm.askAcceptDecline("#b#i" + potion[index] + "# #t" + potion[index] + "##k��(��) �����ϱ� ���ؼ��� #b#i" + need[index] + " # #t" + need[index] + "##k #r" + quantity[index] + "��#k" + (need2[index] == 0 ? "" : "�� #b#i" + need2[index] + "# #t" + need2[index] + "##k #r" + quantity2[index] + "��") + (need3[index] == 0 ? "" : "#k�� #b#i" + need3[index] + "# #t" + need3[index] + "##k #r" + quantity3[index] + "��") + "#k�� �ʿ��մϴ�.\r\n\r\n���� �����Ͻðھ��?");
        } else if (select == 2 || select == 3) {
            cm.sendGetText("�� ���� #b#t" + (select == 2 ? melt[index] : hard[index]) + "##k��(��) " + (select == 2 ? "����" : " ����") + "�ðھ��? #r(" + cm.itemQuantity((select == 2 ? melt[index] : hard[index])) + "�� ����)");
        }
    } else if (status == 3) {
        if (select == 0) {
            cm.sendGetText("�� ���� �����Ͻðھ��? #r(" + (need2[index] == 0 ? Math.floor((cm.itemQuantity(need[index]) / quantity[index])) : need3[index] == 0 ? Math.min(Math.floor((cm.itemQuantity(need[index]) / quantity[index])), Math.floor((cm.itemQuantity(need2[index]) / quantity2[index]))) : Math.min(Math.floor((cm.itemQuantity(need[index]) / quantity[index])), Math.floor((cm.itemQuantity(need2[index]) / quantity2[index])), Math.floor((cm.itemQuantity(need3[index]) / quantity3[index])))) + "�� ���� ����)#k");
        } else if (select == 2 || select == 3) {
            count = cm.getText();
            if (isNaN(count) || count == null || count <= 0) {
                cm.sendOk("1�� �̻��� ������ �Է����ּ���.");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity((select == 2 ? melt[index] : hard[index])) >= count) {
                cm.askAcceptDecline("������  #b#i" + (select == 2 ? melt[index] : hard[index]) + "# #t" + (select == 2 ? melt[index] : hard[index]) + "##k #r" + count + "��#k�� " + (select == 2 ? "����" : "����") + "�ðھ��?");
            } else {
                cm.sendOk("#b#i" + (select == 2 ? melt[index] : hard[index]) + "# #t" + (select == 2 ? melt[index] : hard[index]) + "##k �� #r#e�����մϴ�.#n#k");
                cm.dispose();
            }
        }
    } else if (status == 4) {
        if (select == 0) {
            count = cm.getText();
            if (isNaN(count) || count == null || count <= 0) {
                cm.sendOk("1�� �̻��� ������ ������ �Է����ּ���.");        
                cm.dispose();
                return;
            }
            if ((cm.itemQuantity(need[index]) >= quantity[index] * count)  && (cm.itemQuantity(need2[index]) >= quantity2[index] * count) && (cm.itemQuantity(need3[index]) >= quantity3[index] * count)) {
                cm.askAcceptDecline("#b#i" + need[index] + " # #t" + need[index] + "##k #r" + quantity[index] * count + "��#k" + (need2[index] == 0 ? "" : "�� #b#i" + need2[index] + "# #t" + need2[index] + "##k #r" + quantity2[index] + "��#k")  + (need3[index] == 0 ? "" : "�� #b#i" + need3[index] + "# #t" + need3[index] + "##k #r" + quantity3[index] + "��#k") + "�� �����Ͽ� #b#i" + potion[index] + "# #t" + potion[index] + "##r " + count + "��#k�� ����ðھ��?");
            } else {
                cm.sendOk("#b#i" + potion[index] + "# #t" + potion[index] + "##r " + count + "��#k�� �����ϱ� ���ؼ��� #b#i" + need[index] + " # #t" + need[index] + "##k #r" + quantity[index] * count + "��#k" + (need2[index] == 0 ? "" : "�� #b#i" + need2[index] + "# #t" + need2[index] + "##k #r" + quantity2[index] + "��#k") + (need3[index] == 0 ? "�� �ʿ��մϴ�." : "�� #b#i" + need3[index] + "# #t" + need3[index] + "##k #r" + quantity3[index] + "��#k�� �ʿ��մϴ�.")  + "\r\n\r\n#e#r��ᰡ �����մϴ�.#k#n");
                cm.dispose();
            }
        } else if (select == 2 || select == 3) {
            cm.gainItem(select == 2 ? melt[index] : hard[index], -count);
            cm.gainItem(select == 2 ? hard[index] : melt[index], count);
            cm.sendOk("#b#i" + (select == 2 ? melt[index] : hard[index]) + "##t " + (select == 2 ? melt[index] : hard[index]) + "# #r" + count + "��#k�� " + (select == 2 ? "����" : "�쿩") + " #b#i" + (select == 2 ? hard[index] : melt[index]) + "# #t" + (select == 2 ? hard[index] : melt[index]) + "# #r" +count + "��#k�� ������ϴ�.\r\n������ �� �̿����ּ���~");
            cm.dispose();
        }
    } else if (status == 5) {
            cm.gainItem(need[index], -(quantity[index] * count));
            if (need2[index] != 0) cm.gainItem(need2[index], -(quantity2[index] * count));
            if (need3[index] != 0) cm.gainItem(need3[index], -(quantity3[index] * count));
            cm.gainItem(potion[index], count);
            cm.sendOk("#b#i" + need[index] + " # #t" + need[index] + "##k #r" + quantity[index] * count + "��#k" + (need2[index] == 0 ? "" : "�� #b#i" + need2[index] + "# #t" + need2[index] + "##k #r" + quantity2[index] + "��#k") + (need3[index] == 0 ? "" : "�� #b#i" + need3[index] + "# #t" + need3[index] + "##k #r" + quantity3[index] + "��#k") + "�� �����Ͽ� #b#i" + potion[index] + "# #t" + potion[index] + "##r " + count + "��#k�� ������ϴ�. \r\n������ �� �̿����ּ���~");
            cm.dispose();
    }
}

/*function euclid(x, y) {
    var n = 0;
    while (1) {
        n = x % y;
        if (n == 0) return y;
        x = y;
        y = n;
    }
}

function euclid2(x, y) {
    return x * y / euclid(x, y);
}
*/
