/* �� �ּ��� ������ �������� �մϴ�.

��ó : ������ (timeisruunin) by Miracle CMNT

*/

importPackage(Packages.client.items);

var item = new Array(new Array(5064000,3000000), new Array(5064100,3000000), new Array(5064300,3000000), new Array(5064003,4500000), new Array(2049004,3000000), new Array(5062009,350000), new Array(5062010,350000), new Array(5041001,400000), new Array(5510000,350000), new Array(5121032,150000), new Array(5072000,80000),new Array(5076000,100000),new Array(5390000,150000), new Array(5390001,150000), new Array(5390002, 150000), new Array(5390006,250000), new Array(5390009,300000),new Array(5390010,350000), new Array(5390014,360000), new Array(5390015, 370000), new Array(5390016,400000), new Array(5390017,450000));
var status = -1;

var slot;
var meso;
var itemmeso;
var item;

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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	slot = cm.getPlayer().getInventory(BelowInventoryType.CASH).getNumFreeSlot();
	meso = cm.getPlayer().getMeso();
	var a ="#b#h ##k��, �����Ͻ� �������� �������ּ���. \r\n\r\n#b"

/* ������ ���� ���� */
        a += "#r#e[�Ҹ� �ֹ���]#k\r\n";
    for (var i = 0; i < 5; i++) {
        a += "#L"+i+"##i"+item[i][0]+"# #z"+item[i][0]+"# #n("+ ( item[i][1] / 10000 ) +"�� �޼�)\r\n#e";
    }
	a +="\r\n\r\n#l#r[���� ���� ������]#k\r\n"
        for (var ii = 5; ii < 10; ii++) {
        a += "#L"+ii+"##i"+item[ii][0]+"# #z"+item[ii][0]+"# #n("+ ( item[ii][1] / 10000 ) +"�� �޼�)\r\n#e";
	}
	a +="\r\n\r\n#l#r[�޽��� ������]#k\r\n"
        for (var ii = 10; ii < 22; ii++) {
        a += "#L"+ii+"##i"+item[ii][0]+"# #z"+item[ii][0]+"# #n("+ ( item[ii][1] / 10000 ) +"�� �޼�)\r\n#e";
	}
  cm.sendSimple(a);
	} else if (status == 1) {
            if (selection == 4) {
            cm.sendGetNumber("#e������ ������ : #n#i"+item[4][0]+"# #b#z"+item[4][0]+"\r\n\r\n\r\n#k���Ÿ� ���Ͻô� �������� ������ �����ּ���.\r\n#Cgray##e�κ��丮�� ����������100�� �̻�#n�� ������ �� �����ϴ�.",1,1,cm.getPlayer().getInventory(BelowInventoryType.USE).getNumFreeSlot()*100);            itemmeso = item[4][1];
            item = item[4][0];

            } else {
            cm.sendGetNumber("#e������ ������ : #n#i"+item[selection][0]+"# #b#z"+item[selection][0]+"\r\n\r\n\r\n#k���Ÿ� ���Ͻô� �������� ������ �����ּ���.\r\n#Cgray##e�κ��丮�� ����������100�� �̻�#n�� ������ �� �����ϴ�.",1,1,slot*100);
            itemmeso = item[selection][1];
            item = item[selection][0];
        }           

	} else if (status == 2) {
//	    var prise = total/100000000 < 0.1 ? total/10000 : total/100000000 < 1 ? total/10000000 : total/100000000
//	    var currency = total/100000000 < 0.1 ? "��" : total/100000000 < 1? "õ ��" : "��"
	    name = Packages.server.items.ItemInformation.getInstance().getName(item);
            total = selection * itemmeso;
            if (meso < total) {
                cm.sendOk("#h #���� �����Ͻ� �޼��� ���� �����մϴ�.");
	    } else if (total > 2147483647) {
		cm.sendOk("�� �������� ���� �ݾ��� #b21�� 4748�� 3647 �޼�#k�� �Ѿ����ϴ�. #h #���� �����Ϸ��� �������� �� ������ #r"+total/100000000+"�� �޼�#k �Դϴ�. �ٽ� �� �� Ȯ�� �� ���Ÿ� �õ����ּ���.")
            } else {
	    cm.getPlayer().dropMessage(6, "��Ƽ�� ��� : "+name+" "+selection+"���� �����Ͽ����ϴ�. �κ��丮�� Ȯ�����ּ���.");
                cm.gainItem(item, selection);
                cm.gainMeso(-total);
                cm.getPlayer().getClient().getSession().write(Packages.packet.creators.MainPacketCreator.sendHint("#e#b#z"+item+"# #r"+selection+"��#k ���ſ� �����Ͽ����ϴ�!",400,20));
            }
            cm.dispose();
	

}
}