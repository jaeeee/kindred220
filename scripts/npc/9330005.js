/*

���� : �� ��(kkilook_adm)

*/
importPackage(net.sf.odinms.client);
var status = 0;
var itemList = Array (4310066, 5200001, 5200002, 1672003, 1022144, 2470002, 2470007, 2049360, 2049153, 2049704, 1113014, 1112794, 1112748, 1012376, 1132228, 1152155, 1142002); // ������ ��� 
var itemnum = Array (10, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1); // ������ ���� (������� ������ ������ �����Ѿ����۸�)
var number = Array (7000, 3000, 5000, 10000, 80000, 3000, 100000, 100000, 100000, 100000, 48000, 50000, 50000, 300000, 500000, 500000, 1000000); // ����Ʈ
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
        cm.sendYesNo("�ȳ��ϼ���? #b"+cm.getPlayer().getName() + "#k ��\r\n���� #e���� ����#n�Դϴ�.\r\n����� #r���� ����Ʈ#k�� ���� #b������#k �� ��ȯ�ص帮���ս��ϴ�.");
    } else if (status == 1) {
        var list = "#e\r\n#r��[ ���� ] ����,���尭,���,������ 20�� �Դϴ�.\r\n#b��[ ���� ] ���� ������ �ɼ��� �ý��� 300�Դϴ�#n#k";
        for (var i = 0; i < itemList.length; i++)
        list += "\r\n#L" + i + "##i"+itemList[i]+"##b#z" + itemList[i] + "#  #r(" + cm.getPlayer().getFPT() + "#k / #r" + number[i] + "P)#k";
        cm.sendSimple(list);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("���� #b#t"+ itemList[sel] +"##k��(��) ��ȯ�Ͻðٽ��ϱ�?");
    } else if (status == 3) {
        if (cm.getPlayer().getFPT() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gainItem(itemList[sel], itemnum[sel]);
                cm.getPlayer().addFPT(-number[sel]);
                cm.sendNext("���� ����Ʈ�� �����۱�ȯ�� �Ϸ��Ͽ����ϴ�.");
            } else {
                cm.sendOk("���� ����Ʈ�� �������� ��ȯ�Ͻð�ʹٸ� ���� �������Ͽ� �̳��� �Ľñ�ٶ��ϴ�.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#b"+ cm.getPlayer().getName() +"#k. ���� ����Ʈ�� �������� ��ȯ�ϱ⿡�� �����մϴ�.");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendOk(cm.getPlayer().getName()+"���� ���� ����Ʈ�� #b" +number[sel] + "#k�� ��ŭ ���ҵǾ����ϴ�."); 
        cm.dispose();
    }
  }
}
