var meso = ["10000000", "15000000", "20000000", "35000000", "50000000", "100000000"];
var random1 = 1 + Math.floor(Math.random() * 5);

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 1) {
	status++;
    } else {
	status--;
	cm.dispose();
    }
    if (status == 0) {
	var main = "�ȳ��ϼ���. #e#bȫ�ڵ���#n#k�� #e#b���#n#k�ϴ� #e#b���ǽ�#n#k�Դϴ�.\r\n\r\n#e#b#i4310034#  #e#r����Ƽ�� ���� 1��#n#k�� #e#b�̿�#n#k�Ͻ� �� �ֽ��ϴ�.\r\n#e#b��÷#n#k �� #e#b10000000�޼�#n#k���� #e#b100000000�޼�#n#k�� #e#bȹ��#n#k�� �� �ֽ��ϴ�.\r\n\r\n";
	main += "#L0##i4310034#   #e#r�����ϱ�#n#k#l\r\n";
	cm.sendSimple(main);
    } else if (status == 1) {
	if (selection == 0) {
	    var random = "�Ʒ� #e#r����Ƽ�� ����#n#k �� #e#r�� ��#n#k�� #e#b����#n#k�� �ּ���.\r\n#e#b";
	    random += "#L1##v4310034##l   #L2##v4310034##l   #L3##v4310034##l   #L4##v4310034##l   #L5##v4310034##l";
	    cm.sendSimple(random);
	} else {
	    cm.sendOk("#e#b����#n#k�Դϴ�.");
	    cm.dispose();
	}
    } else if (status == 2) {
	if (cm.haveItem(4310034, 1)) {
	    if (selection == random1) {
		Givemeso = meso[parseInt(Math.random() * meso.length)]
		cm.sendOk("#e#b��÷#n#k�Ǽ˽��ϴ�.\r\n#e#b��÷��#n#k���� #b#e"+Givemeso+"�޼�#n#k�� #e#bȹ��#n#k�ϼ̽��ϴ�.");
		cm.gainItem(4310034, -1);
		cm.gainMeso(Givemeso);
		cm.dispose();
	    } else {
		cm.sendOk("#e#b��÷#n#k���� �ʾҽ��ϴ�. ���α� #e#b300���޼�#n#k�� #e#b����#n#k�Ǿ����ϴ�.#e#b���� ��ȸ#n#k�� ���������.");
		cm.gainItem(4310034, -1);
		cm.gainMeso(3000000);
		cm.dispose();
	    }
	} else {
	    cm.sendOk("#e#bȫ�ڵ���#n#k�� �ϱ� ���� #i4310034#   #e#r����Ƽ�� ���� 1��#n#k�� #e#b�ʿ�#n#k�մϴ�.");
	    cm.dispose();
	}
    }
}