var status = 0;
var itemList = Array (5062200,5062201,2700000,2700100,2700300,2700400,2700500,2700600,2700700,2700800,2700900,2701000); // ������ ��� 
var number = Array (300000,400000,100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000); // ����Ʈ
var sel = -1;

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
	cm.sendSimple("���� #r��� �巡��#k�� ������ #b�����Ƽ#k�� ��ȭ�Ҽ��ִ� �ɷ����������ֽ��ϴ�. �����ϴ� #b�����Ƽ#k�� ��ȭ\r\n�Ϸ� ���ŰŰ����Ŵ� �ѹ� �غ��ðھ��?\r\n#k#l#L1##b�����Ƽ ��ȭ�� ����?#k\r\n#L0##b�̳� �����Ƽ�� ���� �ϰڽ��ϴ�.");
} else if (status == 1) {
if (selection == 0) {
	     if (cm.haveItem(4000244,10)) {
		cm.getPlayer().innerLevelUp();
		cm.gainItem(4000244,-10);
		cm.sendOk("���������� #b�̳� �����Ƽ#k�� ���� �Ͽ����ϴ�.");
		cm.dispose();
            } else {
                cm.sendOk("#i4000244##b�巡���� ��ȥ#k ���̴� �����Ƽ ��ȭ�� �Ҽ� �����ϴ�.");
                cm.dispose();
            }
	} else if (selection == 1) {
		cm.sendOk("�����Ƽ ��ȭ�� #i4000244##b�巡���� ��ȥ#k ���� ���� \r\n��� �巡���� ���� ����Ͽ� ����� �����Ƽ�� ��ȭ�ϴ°��Դϴ�. �����Ƽ ��ȭ�ÿ��� ����� �� #r�̳� �����Ƽ#k�� ����˴ϴ�.");
		cm.dispose();
} else if (selection == 2) {
cm.sendSimple("#b�����Ƽ �ʱ�ȭ#k�� �ϱ����ؼ� ���� �Ǹ��ϰ��ִ� \r\n#b�����Ƽ �ʱ�ȭ#k�ֹ����� �ʿ��մϴ�.\r\n#L0##b�����Ƽ �ʱ�ȭ �ֹ����� �����ϰڽ��ϴ�.\r\n#L1#�����Ƽ �ʱ�ȭ �ֹ����� ����ϰڽ��ϴ�.");
} else if (selection == 3) {
        var list = "� �������� �����Ͻðھ��?\r\n";
        for (var i = 0; i < itemList.length; i++)
	list += "\r\n#L" + i + "##b#i" + itemList[i] + ":# #t" + itemList[i] + "# #b" + number[i] + "�޼�#k";
        cm.sendSimple(list);
        status = 3;
} 
} else if (status == 2) {
if (selection == 0) {
cm.sendGetText("#b�����Ƽ �ʱ�ȭ �ֹ��� �Ѱ��� 100�� �޼� �Դϴ�.");
} else if (selection == 1) {
if(cm.haveItem(5050100,1)) {
cm.sendOk("#b�����Ƽ �ʱ�ȭ#k �� �Ϸ�Ǿ����ϴ�.");
cm.resetStats(4,4,4,4);
cm.gainItem(5050100,-1);
cm.dispose();
} else {
cm.sendOk("#b�����Ƽ �ʱ�ȭ �ֹ���#k �� �����ϴ�.");
cm.dispose();
}
}
} else if (status == 3) {
if(cm.getMeso() >= cm.getText() * 1000000) {
cm.sendOk("#b�����Ƽ �ʱ�ȭ �ֹ���#k �� ������ ������ֽʽÿ�.");
cm.gainItem(5050100,cm.getText());
cm.gainMeso(-cm.getText() * 1000000);
cm.dispose();
} else {
cm.sendOk("�޼Ұ� �����Ͻʴϴ�.");
cm.dispose();
}
} else if (status == 4) {
 sel = selection;
 cm.sendYesNo("���� #b#t"+ itemList[sel] +"##k��(��) ��ȯ�Ͻðٽ��ϱ�?");
} else if (status == 5) {
        if (cm.getPlayer().getMeso() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gainItem(itemList[sel],1);
                cm.gainMeso(-number[sel]);
                cm.sendNext("�����۱�ȯ�� �Ϸ��Ͽ����ϴ�.");
                cm.dispose();
            } else {
                cm.sendOk("�������� ��ȯ�ϰ������ �޼Ҹ� �����������");
                cm.dispose();
            }
        } else {
            cm.sendOk("�޼Ұ� �����Ͻʴϴ�.");
            cm.dispose();
        }
    } 
}
}