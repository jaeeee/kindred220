

var status = 0;

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
		var sungwoo = "#k���� ���� �̿뿡 ���� �����۵��� �Ǹ��ϰ��ִ� �Ҹſ�.\r\n\r\n#l";
		sungwoo += "#r#e     ���� ����[ ť�� ���� ������ ]#k#n\r\n";
		sungwoo += "��#b#L10##r1#k#b �޼ҷ� #i2460003##k(#t2460003#)#b 50�� ����#k\r\n#l";
		sungwoo += "��#b#L0##r30��#k#b �޼ҷ� #i5062000##k(#t5062000#)#b #k\r\n#l";
		sungwoo += "��#b#L1##r70��#k#b �޼ҷ� #i5062002##k(#t5062000#)#b 30�� ����#k\r\n#l";
		sungwoo += "��#b#L2##r100��#k#b �޼ҷ� #i5062005##k(#t5062005#)#b 30�� ����#k\r\n#l";
		sungwoo += "��#b#L3##r200��#k#b �޼ҷ� #i5062006##k(#t5062006#)#b 30�� ����#k\r\n#l";
		sungwoo += "��#b#L4##r300��#k#b �޼ҷ� #i5062009##k(#t5062009#)#b 100�� ����#k\r\n#l";
		sungwoo += "  #b#L13##r300��#k#b �޼ҷ� #i5062010##k(#t5062010#)#b 100�� ����#k\r\n#l";
                sungwoo += "  #b#L14##r300��#k#b �޼ҷ� #i5062500##k������ť#b 100�� ����#k\r\n#l\r\n";
		sungwoo += "#r#e      ��������[ �ֹ��� ���� ������ ]#k#n\r\n";
		sungwoo += "��#b#L5##r5��#k#b �޼ҷ� #i2049408##k#r#t2049408##k#b 5�� ����#k\r\n#l";
		sungwoo += "��#b#L6##r5��#k#b �޼ҷ� #i2049301##k#r#t2049301##b#k #b5�� ����#k\r\n#l";
		sungwoo += "��#b#L7##r10��#k#b �޼ҷ� #i2049303##k#r#t2049303##b#k #b10�� ����#k\r\n#l";
		sungwoo += "��#b#L8##r5��#k#b �޼ҷ� #i2049152##k#r���ȥ#k#b 7�� ����#k\r\n#l";
		sungwoo += "��#b#L11##r10��#k#b �޼ҷ� #i2049152##k#r���ȥ#k#b 15�� ����#k\r\n#l";
		sungwoo += "��#b#L9##r5��#k#b �޼ҷ� #i2049360##r���尭#k#b 250�� ����#k\r\n#l";
		sungwoo += "��#b#L12##r10��#k#b �޼ҷ� #i2049360##k#r���尭#k#b 550�� ����#k\r\n#l";
                sungwoo += "#r#e      ��������[ ��ȭ ���� ������ ]#k#n\r\n";
                sungwoo += "��#b#L50##r5��#k#b �޼ҷ� #i2470000##k(#t2470010#)#b 5�� ����#k\r\n#l";
                sungwoo += "��#b#L51##r5��#k#b �޼ҷ� #i2049509##k(#t2049509#)#b 5�� ����#k\r\n#l";
                sungwoo += "��#b#L52##r10��#k#b �޼ҷ� #i2048306##k(������)#b 10�� ����#k\r\n#l";
                sungwoo += "��#b#L53##r10��#k#b �޼ҷ� #i2048721##k(#t2048721#)#b 10�� ����#k\r\n#l";
                sungwoo += "��#b#L54##r10��#k#b �޼ҷ� #i5063100##k(#t5063100#)#b 100�� ����#k\r\n#l";
                sungwoo += "��#b#L55##r10��#k#b �޼ҷ� #i5064100##k(#t5064100#)#b 100�� ����#k\r\n#l";
                sungwoo += "��#b#L56##r10��#k#b �޼ҷ� #i5064000##k(#t5064000#)#b 100�� ����#k\r\n#l";
                sungwoo += "��#b#L57##r10��#k#b �޼ҷ� #i5064300##k(#t5064300#)#b 100�� ����#k\r\n#l";
		cm.sendSimple(sungwoo);

	} else if (status == 1) {
             if (selection == 0) {
               if(cm.getMeso() >= 300000){
               cm.gainItem(5062000,30);
               cm.gainMeso(-300000);
               cm.sendOk("�̶�Ŭ ť�� 30���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               
               }
} else if (selection == 13) {
               if(cm.getMeso() >= 3000000){
               cm.gainItem(5062010,100);
               cm.gainMeso(-3000000);
               cm.sendOk("�Ϸ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               }
} else if (selection == 12) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049360,550);
               cm.gainMeso(-100000);
               cm.sendOk("�Ϸ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               }
} else if (selection == 11) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049152,15);
               cm.gainMeso(-100000);
               cm.sendOk("�Ϸ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               }
} else if (selection == 1) {
               if(cm.getMeso() >= 700000){
               cm.gainItem(5062002,30);
               cm.gainMeso(-700000);
               cm.sendOk("������ �̶�Ŭ ť�� 30���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               }
} else if (selection == 8) {
               if(cm.getMeso() >= 50000){
               cm.gainItem(2049152,7);
               cm.gainMeso(-50000);
               cm.sendOk("ȥ���� �ֹ����� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               }
} else if (selection == 9) {
               if(cm.getMeso() >= 7000000){
               cm.gainItem(2049360,250);
               cm.gainMeso(-50000);
               cm.sendOk("���� ���ȭ �ֹ����� �����߽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
}
} else if (selection == 10) {
               if(cm.getMeso() >= 1){
               cm.gainItem(2460003,50);
               cm.gainMeso(-1);
               cm.sendOk("������ 50���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 2) {
               if(cm.getMeso() >= 1000000){
               cm.gainItem(5062005,30);
               cm.gainMeso(-1000000);
               cm.sendOk("�����¡ �̶�Ŭ ť�� 30���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 3) {
               if(cm.getMeso() >= 2000000){
               cm.gainItem(5062006,30);
               cm.gainMeso(-2000000);
               cm.sendOk("�÷�Ƽ�� �̶�Ŭ ť�� 30���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 4) {
               if(cm.getMeso() >= 3000000){
               cm.gainItem(5062009,100);
               cm.gainMeso(-3000000);
               cm.sendOk("���� ť�� 100���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 5) {
               if(cm.getMeso() >= 300000){
               cm.gainItem(2049704,5);
               cm.gainMeso(-50000);
               cm.sendOk("����ɷ� �ο��ֹ��� 1���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 6) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049301,5);
               cm.gainMeso(-50000); 
              cm.sendOk("���ȭ �ֹ��� 5���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 7) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049303,10);
               cm.gainMeso(-100000);
               cm.sendOk("��� ���ȭ �ֹ��� 10���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 50) {
               if(cm.getMeso() >= 50000){
               cm.gainItem(2470000,5);
               cm.gainMeso(-50000);
               cm.sendOk("Ȳ�ݸ�ġ 5���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 51) {
               if(cm.getMeso() >= 50000){
               cm.gainItem(2049509,5);
               cm.gainMeso(-50000);
               cm.sendOk("�ݺ� ������ 5���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 14) {
               if(cm.getMeso() >= 3000000){
               cm.gainItem(5062500,100);
               cm.gainMeso(-3000000);
               cm.sendOk(" ������ ����ų� �̶�Ŭ ť��100���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 52) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2048306,10);
               cm.gainMeso(-100000);
               cm.sendOk(" ����� ����ų� ����ɷ� �ο� ��ũ��100���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 53) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2048721,10);
               cm.gainMeso(-100000);
               cm.sendOk(" ������ ȯ���� �Ҳ�10���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 54) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(5063100,100);
               cm.gainMeso(-100000);
               cm.sendOk(" ��Ű ������Ʈ ����100���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 55) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(5064100,100);
               cm.gainMeso(-100000);
               cm.sendOk(" ������Ƽ ����100���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 56) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(5064000,100);
               cm.gainMeso(-100000);
               cm.sendOk(" ������Ʈ ����100���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 57) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(5064300,100);
               cm.gainMeso(-100000);
               cm.sendOk(" ��Ŀ���� ����100���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
}
}
}
}

