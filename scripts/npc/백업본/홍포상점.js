/*

���� : �� ��(kkilook_adm)

*/
importPackage(net.sf.odinms.client);
var status = 0;
var itemList = Array (4310027, 4310066, 2049360); // ������ ��� 
var itemnum = Array (15, 200, 10)
var number = Array (100, 100, 1000); // ����Ʈ
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
        cm.sendYesNo("�ȳ��ϼ���? #b"+cm.getPlayer().getName() + "#k ��\r\n���� #eȫ�� ����#n�Դϴ�.\r\n����� #rȫ�� ����Ʈ#k�� ���� #b������#k �� ��ȯ�ص帮���ս��ϴ�.");
    } else if (status == 1) {
        var list = "���� ȫ�� ����Ʈ�� ��ȯ������ �����۵��Դϴ�.\r\n#e#r�ؿ��⼭ ���� ������ ������ 200���Դϴ�.\r\n#r�ؿ��⼭ �̺�Ʈ ������ ������ 15�� �Դϴ�.\r\n#r�ؿ��⼭ ���� ��� ��ȭ�� 10�� �Դϴ�.\r\n#n#b���� ���� ���� ȫ�� ����Ʈ�� (" + cm.getPlayer().getHBPT() + "P) �Դϴ�.#k";
        for (var i = 0; i < itemList.length; i++)
        list += "\r\n#L" + i + "##i"+itemList[i]+"##b#z" + itemList[i] + "#  #r(" + cm.getPlayer().getHBPT() + "#k / #r" + number[i] + "P)#k";
        cm.sendSimple(list);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("���� #b#t"+ itemList[sel] +"##k��(��) ��ȯ�Ͻðٽ��ϱ�?");
    } else if (status == 3) {
        if (cm.getPlayer().getHBPT() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gainitem(itemList[sel], itemnum[sel]);
                cm.getPlayer().gainHBPT(-number[sel]);
                cm.sendNext("ȫ�� ����Ʈ�� �����۱�ȯ�� �Ϸ��Ͽ����ϴ�.");
            } else {
                cm.sendOk("ȫ�� ����Ʈ�� �������� ��ȯ�Ͻð�ʹٸ� ȫ�� �������Ͽ� ������ �����ñ�ٶ��ϴ�.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#b"+ cm.getPlayer().getName() +"#k. ���� ����Ʈ�� �������� ��ȯ�ϱ⿡�� �����մϴ�.");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendOk(cm.getPlayer().getName()+"���� ȫ�� ����Ʈ�� #b" +number[sel] + "#k�� ��ŭ ���ҵǾ����ϴ�."); 
        cm.dispose();
    }
  }
}
