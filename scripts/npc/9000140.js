var cash = 0;
var status = -1;

function start() { 
    status = -1;
    action (1, 0, 0);   
 		if (cm.haveItem(4033324,1) || cm.haveItem(4220046,1) || cm.haveItem(4220178,1) || cm.haveItem(4220179,1) || cm.haveItem(4220175,1) || cm.haveItem(4220045,1)) {
	var sbal = "����� ���� ����Ʈ�� �������Դϴ�. ����Ʈ�� �Ϸ��ϼ˴ٸ� ����Ʈ ���� ��Ȳ�� ���ֽʽÿ�.\r\n\r\n";
        sbal += "#d#L20#����Ʈ ���� ��Ȳ ����\r\n#k";
	cm.sendSimple(sbal);
	} else {
	var jessica = "#b#e[�غ���]���ݼ� ����Ʈ ���#n#k\r\n\r\n ������ ����Ʈ�� �������ּ���\r\n\r\n";
        jessica += "#d#L1#�γ��� ���\r\n";
        jessica += "#L4#������ ���\r\n";
        jessica += "#L7#������ ���\r\n";
        jessica += "#L10#������ ���\r\n";
        jessica += "#L13#������ ���\r\n";
        jessica += "#L16#���ݼ����� ��\r\n#k";
	cm.sendSimple(jessica);
	}
}
function action(mode, type, selection) {
if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
}
    if (selection == 1) {
            cm.sendNext("#e#b ù��° ���ݼ� ����Ʈ <�γ�> :#k#n \r\n\r\n �ȳ� ���� ���� ���ݼ� ����Ʈ ������� ���ǽþ�, ���ݺ��� ���ݼ� ����Ʈ�� ���� ����� ������ �ֵ��� �Ұ�.\r\n�ϴ� #r���� �ִ� ������#k�� �Ἥ  �� #b�ش��ϴ� ������#k�� ����� �� ������ ������ ������ �ָ� �Ǵ°ž�! ");
    } else if (status == 2) {
            cm.sendYesNo("SYSTEM : ���ݼ� ����Ʈ�� ���� �Ͻðٽ��ϱ�?");
    } else if (status == 3) {
         if (cm.canHold(4033324) && cm.canHold(2512289)) {
            cm.gainItem(4033324,1);
            cm.gainItem(2512289,1);
            cm.sendOk("������ �����Ǹ� �Z���� �� �������� ���� ������ �������� ������ �ٰ�");
        cm.dispose();
 } else {
	cm.sendOk("��Ÿâ�̳� �Һ�â�� ��ĭ�̶� �����������");
	cm.dispose();
}
		    }
     if (selection == 4) {
      cm.sendYesNo("#e#b �ι�° ���ݼ� ����Ʈ <����> :#k#n \r\n\r\n �ȳ� ���� ���� ���ݼ� ����Ʈ ������� ���ǽþ�, ���ݺ��� ���ݼ� ����Ʈ 2���� ���� ����� ������ �ֵ��� �Ұ�.\r\n�ϴ� #r���� �ִ� ������#k�� �Ἥ  �� #b�ش��ϴ� ������#k�� ����� �� ������ ������ ������ �ָ� �Ǵ°ž�! ");
             status++;
             status++;
             status++;
} else if (status == 5) {
            cm.sendYesNo("SYSTEM : ���ݼ� ����Ʈ�� ���� �Ͻðٽ��ϱ�?2");
    } else if (status == 6) {
         if (cm.canHold(4220046) && cm.canHold(2511025)) {
            cm.gainItem(4220046,1);
            cm.gainItem(2512290,1);
            cm.sendOk("������ �����Ǹ� �Z���� �� �������� ���� ������ �������� ������ �ٰ�");
        cm.dispose();
 } else {
	cm.sendOk("��Ÿâ�̳� �Һ�â�� ��ĭ�̶� �����������");
	cm.dispose();
		    }
}
if (selection == 7) {
      cm.sendNext("#e#b����° ���ݼ� ����Ʈ <����> :#k#n \r\n\r\n �ȳ� ���� ���� ���ݼ� ����Ʈ ������� ���ǽþ�, ���ݺ��� ���ݼ� ����Ʈ 3���� ���� ����� ������ �ֵ��� �Ұ�.\r\n�ϴ� #r���� �ִ� ������#k�� �Ἥ  �� #b�ش��ϴ� ������#k�� ����� �� ������ ������ ������ �ָ� �Ǵ°ž�! ");
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
} else if (status == 8) {
            cm.sendYesNo("SYSTEM : ���ݼ� ����Ʈ�� ���� �Ͻðٽ��ϱ�?3");
    } else if (status == 9) {
         if (cm.canHold(4220178) && cm.canHold(2512268)) {
            cm.gainItem(4220178,1);
            cm.gainItem(2512267,1);
            cm.sendOk("������ �����Ǹ� �Z���� �� �������� ���� ������ �������� ������ �ٰ�");
        cm.dispose();
 } else {
	cm.sendOk("��Ÿâ�̳� �Һ�â�� ��ĭ�̶� �����������");
	cm.dispose();
		    }
}
if (selection == 10) {
      cm.sendNext("#e#b�׹�° ���ݼ� ����Ʈ <����> :#k#n \r\n\r\n �ȳ� ���� ���� ���ݼ� ����Ʈ ������� ���ǽþ�, ���ݺ��� ���ݼ� ����Ʈ 4���� ���� ����� ������ �ֵ��� �Ұ�.\r\n�ϴ� #r���� �ִ� ������#k�� �Ἥ  �� #b�ش��ϴ� ������#k�� ����� �� ������ ������ ������ �ָ� �Ǵ°ž�! ");
    } else if (status == 11) {
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
            cm.sendYesNo("SYSTEM : ���ݼ� ����Ʈ�� ���� �Ͻðٽ��ϱ�?4");
    } else if (status == 12) {
         if (cm.canHold(4220179) && cm.canHold(2512291)) {
            cm.gainItem(4220179,1);
            cm.gainItem(2512291,1);
            cm.sendOk("������ �����Ǹ� �Z���� �� �������� ���� ������ �������� ������ �ٰ�");
        cm.dispose();
 } else {
	cm.sendOk("��Ÿâ�̳� �Һ�â�� ��ĭ�̶� �����������");
	cm.dispose();
		    }
}
if (selection == 13) {
      cm.sendNext("#e#b�ټ���° ���ݼ� ����Ʈ <����> :#k#n \r\n\r\n �ȳ� ���� ���� ���ݼ� ����Ʈ ������� ���ǽþ�, ���ݺ��� ���ݼ� ����Ʈ 5���� ���� ����� ������ �ֵ��� �Ұ�.\r\n�ϴ� #r���� �ִ� ������#k�� �Ἥ  �� #b�ش��ϴ� ������#k�� ����� �� ������ ������ ������ �ָ� �Ǵ°ž�! ");
                 status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
} else if (status == 14) {
            cm.sendYesNo("SYSTEM : ���ݼ� ����Ʈ�� ���� �Ͻðٽ��ϱ�?5");
    } else if (status == 15) {
         if (cm.canHold(4220175) && cm.canHold(2512268)) {
            cm.gainItem(4220175,1);
            cm.gainItem(2512268,1);
            cm.sendOk("������ �����Ǹ� �Z���� �� �������� ���� ������ �������� ������ �ٰ�");
        cm.dispose();
 } else {
	cm.sendOk("��Ÿâ�̳� �Һ�â�� ��ĭ�̶� �����������");
	cm.dispose();
		    }
}
if (selection == 16) {
      cm.sendNext("#e#b������° ���ݼ� ����Ʈ <����> :#k#n \r\n\r\n �ȳ� ���� ���� ���ݼ� ����Ʈ ������� ���ǽþ�, ���ݺ��� ���ݼ� ����Ʈ 6���� ���� ����� ������ �ֵ��� �Ұ�.\r\n�ϴ� #r���� �ִ� ������#k�� �Ἥ  �� #b�ش��ϴ� ������#k�� ����� �� ������ ������ ������ �ָ� �Ǵ°ž�! ");
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;
             status++;   
 } else if (status == 17) {
            cm.sendYesNo("SYSTEM : ���ݼ� ����Ʈ�� ���� �Ͻðٽ��ϱ�?6");
    } else if (status == 18) {
         if (cm.canHold(4220045) && cm.canHold(2512271)) {
            cm.gainItem(4220045,1);
            cm.gainItem(2512271,1);
            cm.sendOk("������ �����Ǹ� �Z���� �� �������� ���� ������ �������� ������ �ٰ�");
        cm.dispose();
 } else {
	cm.sendOk("��Ÿâ�̳� �Һ�â�� ��ĭ�̶� �����������");
	cm.dispose();
		    }
}
if (selection == 20) {
cm.dispose();
cm.openNpc(2159362);
}
}