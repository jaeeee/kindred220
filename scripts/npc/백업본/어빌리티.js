var status = 0;
var itemList = Array (4310066); // ������ ��� 
var number = Array (10000000); // ����Ʈ
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
	cm.sendSimple("���� #b�ܿ�#k�� ������ #b�����Ƽ#k�� ��ȭ�Ҽ��ִ� �ɷ��� ������ �ֽ��ϴ�. �غ��ðھ��?\r\n#k#l#L1##b�����Ƽ ��ȭ�� ���� �˰�;�.#k\r\n#L0##b�����Ƽ ��ȭ�� �ϰڽ��ϴ�.\r\n#L3##b�̳ʾ����Ƽ �������� �����ϰڽ��ϴ�.");
} else if (status == 1) {
if (selection == 0) {
	     if (cm.haveItem(4310066,5)) {
              cm.getPlayer().randAP1();
              cm.gainItem(4310066, -5);
              cm.dispose();
            } else {
                cm.sendOk("#i4310066##b���� ����#k ���̴� �����Ƽ ��ȭ�� �Ҽ� �����ϴ�.");
                cm.dispose();
            }
	} else if (selection == 1) {
		cm.sendOk("�����Ƽ ��ȭ�� #i4310066##b���� ����#k ���� ���� \r\n�ܿ��� ���� ����Ͽ� ����� �����Ƽ�� ��ȭ�ϴ°��Դϴ�. �����Ƽ ��ȭ�ÿ��� �������� #r�����Ƽ ����Ʈ#k�� 5~20 �� ��µ���.#k\r\n�����Ƽ ����Ʈ�� �������� �����Ƽ�� �߳��´�ϴ�.");
		cm.dispose();
} else if (selection == 2) {
cm.sendSimple("#b�����Ƽ �ʱ�ȭ#k�� �ϱ����ؼ� ���� �Ǹ��ϰ��ִ� \r\n#b�����Ƽ �ʱ�ȭ#k�ֹ����� �ʿ��մϴ�.\r\n#L0##b�����Ƽ �ʱ�ȭ �ֹ����� �����ϰڽ��ϴ�.\r\n#L1#�����Ƽ �ʱ�ȭ �ֹ����� ����ϰڽ��ϴ�.");
} else if (selection == 3) {
    var list = "� �������� �����Ͻðھ��?\r\n";
    list += "#L0##b#i2702000# #z2702000#  5000000 �޼�#l";
   cm.sendSimple(list);
//cm.sendOk("dd");
 status = 3;
} else if (selection == 4) {
cm.sendYesNo("#b�̳ʾ����Ƽ#k �� �����ϱ� ���ؼ��� ������ 500�� �޼Ұ� \r\n�ʿ��մϴ�. ������ ���� �Ͻðھ��? \r\n#r(�����ҽ� �ñ�ϴ�.");
sel = selection;
}
} else if (status == 2) {
if (sel == 4) {
if(cm.getMeso() >= 5000000) {
cm.getPlayer().innerLevelUp();
cm.getPlayer().innerLevelUp();
cm.getPlayer().innerLevelUp();
cm.gainMeso(-5000000);
cm.reloadChar();
cm.sendOk("#b�̳ʾ����Ƽ#k ������ �Ϸ� �Ͽ����ϴ�.");
cm.dispose();
} else {
cm.sendOk("�޼Ұ� ���� �Ͻʴϴ�.");
cm.dispose();
}
}if (selection == 0) {
cm.sendGetText("#b�����Ƽ �ʱ�ȭ �ֹ��� �Ѱ��� 1000�� �޼� �Դϴ�.");
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
 sel = 1;
 cm.sendYesNo("���� #b#t"+ 2702000 +"##k��(��) ��ȯ�Ͻðٽ��ϱ�?");
} else if (status == 5) {
        if (cm.getPlayer().getMeso() >= 5000000) {
            if (cm.canHold(2702000)) {
                cm.gainItem(2702000,1);
                cm.gainMeso(-5000000);
                cm.sendOk("�����۱�ȯ�� �Ϸ��Ͽ����ϴ�.");
                cm.dispose();
            } else {
                cm.sendOk("�������� ��ȯ�ϰ������ �޼Ҹ� �����������");
                cm.dispose();
            }
        } else {
            cm.sendOk("500�� �޼Ұ� �ʿ��մϴ�.");
            cm.dispose();
        }
    } 
}
}