/*

���� : �� ��(kkilook_adm)

*/
importPackage(net.sf.odinms.client);
var status = 0;
var itemList = Array (4310027, 4310066, 1662002, 1662003, 1142076); // ������ ��� 
var itemnum = Array (10, 100, 1, 1, 1); // ������ ���� (������� ������ ������ �����Ѿ����۸�)
var number = Array (5000, 2000, 2000, 2000, 20000); // ����Ʈ
var sel = -1;

function start() {
   status = -1;
   action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
    if (status <= 1 && mode == 0) {
        cm.dispose();
        return;
    }  
    if (mode == 0) {
        cm.dispose();
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendYesNo("�ȳ��ϼ���? #b"+cm.getPlayer().getName() + "#k ��\r\n���� #eȯ�� ����#n�Դϴ�.\r\n����� #rȯ�� ����Ʈ#k�� ���� #b������#k �� ��ȯ�ص帮���ս��ϴ�.");
    } else if (status == 1) {
        var list = "���� ȯ�� ����Ʈ�� ��ȯ������ �����۵��Դϴ�.\r\n#e#r��[���� ����] 100�� // [����] �ý���200/����100 \r\n[�̺�Ʈ ����] 10��";
        for (var i = 0; i < itemList.length; i++)
        list += "\r\n#L" + i + "##i"+itemList[i]+"##b#t" + itemList[i] + "#  #r(" + cm.getPlayer().getFame() + "#k / #r" + number[i] + "P)#k";
        cm.sendSimple(list);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("���� #b#t"+ itemList[sel] +"##k��(��) ��ȯ�Ͻðٽ��ϱ�?");
    } else if (status == 3) {
        if (cm.getPlayer().getFame() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gainItem(itemList[sel], itemnum[sel]);
                cm.getPlayer().addFame(-number[sel]);
                cm.sendNext("ȯ�� ����Ʈ�� �����۱�ȯ�� �Ϸ��Ͽ����ϴ�.");
            } else {
                cm.sendOk("ȯ�� ����Ʈ�� �������� ��ȯ�Ͻð�ʹٸ� ���������������Ͽ� ȯ���� �Ͻñ�ٶ��ϴ�.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#b"+ cm.getPlayer().getName() +"#k. ���� ����Ʈ�� �������� ��ȯ�ϱ⿡�� �����մϴ�.");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendOk(cm.getPlayer().getName()+"���� ȯ�� ����Ʈ�� #b" +number[sel] + "#k�� ��ŭ ���ҵǾ����ϴ�."); 
        cm.dispose();
    }
  }
}
