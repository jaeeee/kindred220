/*

���� : ���Ǹ��Ŵ���

*/
importPackage(net.sf.odinms.client);
var status = 0;
var itemList = Array (1152014, 1152015, 1152016, 1152017, 1152018, 1152019, 1152020, 1152021); // ������ ��� 
var itemnum = Array (20, 20, 20, 20, 30, 30, 30, 30, 1, 1, 1, 1); // ������ ���� (������� ������ ������ �����Ѿ����۸�)
var number = Array (30, 30, 30, 30, 50, 50, 50, 50, 3000, 3000, 3000, 100); // ����Ʈ
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
        cm.sendYesNo("�ȳ��ϼ���? #b"+cm.getPlayer().getName() + "#k ��\r\n���� #e���� ����#n�� �����ϴ����Դϴ�.\r\n����� #r��������Ʈ#k�� ���� #b������#k �� ��ȯ�ص帮���ս��ϴ�.");
    } else if (status == 1) {
        var list = "���� ��������Ʈ�� ��ȯ������ �����۵��Դϴ�.\r\n#e#r�ذ������� �ܴ��� ����� �ɼ��� �ý��� 20�Դϴ�.\r\n#b��ȥ�� ����� �ɼ��� �ý��� 30�Դϴ�.\r\n#n#r(����P : " + cm.getPlayer().getSpiritp() + "P)#k";
        for (var i = 0; i < itemList.length; i++)
        list += "\r\n#L" + i + "##i"+itemList[i]+"##b#t" + itemList[i] + "#   #r(����P : " + cm.getPlayer().getSpiritp() + "#k / #r" + number[i] + "P)#k";
        cm.sendSimple(list);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("���� #b#t"+ itemList[sel] +"##k��(��) ��ȯ�Ͻðٽ��ϱ�?");
    } else if (status == 3) {
        if (cm.getPlayer().getSpiritp() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gndnjs(itemList[sel], itemnum[sel],0,0);
                cm.getPlayer().addSpiritPoint(-number[sel]);
                cm.sendNext("��������Ʈ�� �����۱�ȯ�� �Ϸ��Ͽ����ϴ�.");
            } else {
                cm.sendOk("��������Ʈ�� �������� ��ȯ�Ͻð�ʹٸ� ���������������Ͽ� ���踦 �Ͻñ�ٶ��ϴ�.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#b"+ cm.getPlayer().getName() +"#k. ���� ����Ʈ�� �������� ��ȯ�ϱ⿡�� �����մϴ�.");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendOk(cm.getPlayer().getName()+"���� ��������Ʈ�� #b" +number[sel] + "#k�� ��ŭ �϶��Ǿ����ϴ�."); 
        cm.dispose();
    }
  }
}
