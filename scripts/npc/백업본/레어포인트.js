importPackage(Packages.constants);

var cost;
var item;
var use = 0;
var status = 0;
var point = 0;
var pt2;
var pt;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
        var text = "#b�ȳ��ϼ���?\r "+AboutRave.serverName+"�¶��� ����ý����� �˷��ִ� ���Ǿ� �Դϴ�.\r\n������ �ñ��Ͻʴϱ�?#k\r\n";
	text += "#k\r\n#L1##r["+AboutRave.serverName+"�¶���] ���� �ý����̶� ?\r\n";
	text += "#k\r\n#L3##b["+AboutRave.serverName+"�¶���] ���� ����Ʈ�� ���;��!\r\n";
	text += "#L2#["+AboutRave.serverName+"�¶���] ���� �ý����� �̿��ϰڽ��ϴ�.#n#k";
	cm.sendSimple(text);
} else if (selection == 2) {
	cm.dispose();
        cm.openNpc(1022000);
	return;
} else if (selection == 1) {
               cm.sendSimple (" ������. #d" +
            "#k\r\n#L0##r���� �ý��� �̶� �����ΰ���?" +
            "#k\r\n#L4##r���� ����̶� �����ΰ���?");
 } else if (selection == 3) {
               cm.sendSimple (" #e#r���� ����Ʈ�� ���ͳ���?#n#k" +
            "#k\r\n#L7# (20p)     #rȫ������Ʈ 1����Ʈ��#n" +
            "#k\r\n#L8# (5p)     #r�Ŀ�����Ʈ 1����Ʈ��#n");
} else if (status == 2) {
	sel = selection;
	if (sel == 0) {
        cm.sendOk ("\r\n #b���� �ý����̶� ��������Ʈ 5000���� ������ ���������� ��������Ʈ�� ȹ���Ͽ� ����ɼ�(����,�ѵ�,���ݵ�)�� �߰������� ��� �ο��ϴ� �ý����� ���մϴ�.");
	cm.dispose();
   } else if (sel == 4) {
        cm.sendOk ("\r\n #b�������̶� ����ý��� ����ġ�� ����ؼ� ������ �������µ� �װ��� ���� ����̶��մϴ�.\r\n�������� �������� �߰��ɼ� �ɷ�ġ�� �����ϴ�.");
	cm.dispose();
   } else if (sel == 6) {
	item = 4310066;
	cost = 25;
	use = 2;
	cm.sendGetText("#i"+item+"##z"+item+"# 1���� "+cost+"����Ʈ�� ��ȯ�ϽǼ��ֽ��ϴ�.\r\n��� ��ȯ�Ͻðڽ��ϱ�?");
   } else if (sel == 5) {
	item = 4310016;
	cost = 10;
	use = 2;
	cm.sendGetText("#i"+item+"##z"+item+"# 1���� "+cost+"����Ʈ�� ��ȯ�ϽǼ��ֽ��ϴ�.\r\n��� ��ȯ�Ͻðڽ��ϱ�?");
   } else if (sel == 7) {
	point = 1;
	cost = 20;
	use = 1;
	cm.sendGetText("#bȫ������Ʈ 1����Ʈ��#r ��������Ʈ 20����Ʈ#k�� ��ȯ�Ҽ��ֽ��ϴ�.\r\n�󸶳� ��ȯ�Ͻðڽ��ϱ�?");
   } else if (sel == 8) {
	point = 2;
	cost = 5;
	use = 1;
	cm.sendGetText("#b�Ŀ�����Ʈ 1����Ʈ��#r ��������Ʈ 5����Ʈ#k�� ��ȯ�Ҽ��ֽ��ϴ�.\r\n�󸶳� ��ȯ�Ͻðڽ��ϱ�?");
}
   } else if (status == 3) {
	if (cm.getText() < 0) {
	cm.dispose();
	}
	if (use == 2) {
	pt2 = cm.getText();
	cm.sendYesNo("���� #i"+item+"##z"+item+"# "+pt2+"���� "+(cost*pt2)+"���� ����Ʈ�� ��ȯ�Ͻðڽ��ϱ�?");
 } 
	pt = cm.getText();
	if (point == 1 && cm.getPlayer().getHBPT() >= pt) {
		cm.getPlayer().addRarePT((cost*pt));
		cm.sendOk("ȫ�� #r#e"+pt+"#n#k ����Ʈ�� ����Ͽ� ��������Ʈ #e#b"+(cost*pt)+"#n#k ����Ʈ��ŭ ȹ���Ͽ����ϴ�.");
		cm.getPlayer().gainHBPT(-pt);
		cm.dispose();
}	 if (point == 2 && cm.getPlayer().getHPT() >= pt) {
		cm.getPlayer().addRarePT((cost*pt));
		cm.sendOk("�Ŀ� #r#e"+pt+"#n#k ����Ʈ�� ����Ͽ� ��������Ʈ #e#b"+(cost*pt)+"#n#k ����Ʈ��ŭ ȹ���Ͽ����ϴ�.");
		cm.getPlayer().gainHPT(-pt);
		cm.dispose();
}
 } else if (status == 4) {
 if (cm.haveItem(item,pt2,false,true)) {
 cm.sendOk("#i"+item+"##z"+item+"# "+pt2+"���� "+(cost*pt2)+"���� ����Ʈ�� ��ȯ�Ͽ����ϴ�.");
 cm.gainItem(item, -pt2);
 cm.getPlayer().addRarePT((cost*pt2));
 cm.dispose();
	    }else {
	    cm.sendOk("��������Ʈ�� �����մϴ�. ��������Ʈ�� 5000 �� �ʿ��մϴ�.");   
	    cm.dispose();
    }
}
}
}