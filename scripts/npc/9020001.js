

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
		var sungwoo = "#kȲ�ݴ�ǳ��, �������߸� �������� �޼ҷ� ��ȯ������ ȣȣȣ.\r\n\r\n#l";
		sungwoo += "��#b#L1##rȲ�ݴ�ǳ�� 1���� 150�� �޼ҷ� ��ȯ�մϴ�.\r\n#l";
		sungwoo += "��#b#L3##rȲ�ݴ�ǳ�� 10���� 1500�� �޼ҷ� ��ȯ�մϴ�.\r\n#l";
		sungwoo += "��#b#L4##r�������� 10���� 1500�� �޼ҷ� ��ȯ�մϴ�.\r\n#l";
		sungwoo += "��#b#L2##r�������� 1���� 150�� �޼ҷ� ��ȯ�մϴ�.\r\n#l";
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
} else if (selection == 1) {
        if (cm.haveItem(4033247, 1)){
               cm.gainItem(4033247,-1);
               cm.gainMeso(1500000);
               cm.sendOk("100�� �޼Ҹ� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
}
} else if (selection == 11) {
               if(cm.getMeso() >= 700000){
               cm.gainItem(5000296,1);
               cm.gainMeso(-700000);
               cm.sendOk("������ �̶�Ŭ ť�� 30���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               }
} else if (selection == 8) {
               if(cm.getMeso() >= 3000000){
               cm.gainItem(5062010,30);
               cm.gainMeso(-3000000);
               cm.sendOk("�� ť�� 30���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               }
} else if (selection == 10) {
               if(cm.getMeso() >= 500000){
               cm.gainItem(2460003,50);
               cm.gainMeso(-500000);
               cm.sendOk("������ 50���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 2) {
        if (cm.haveItem(4310016, 1)){
               cm.gainItem(4310016,-1);
               cm.gainMeso(1500000);
               cm.sendOk("100�� �޼Ҹ� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 3) {
        if (cm.haveItem(4033247, 10)){
               cm.gainItem(4033247,-10);
               cm.gainMeso(15000000);
               cm.sendOk("Ȳ�� 10���� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 4) {
        if (cm.haveItem(4310016, 10)){
               cm.gainItem(4310016,-10);
               cm.gainMeso(15000000);
               cm.sendOk("�������� �� �����ϼŽ��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 5) {
               if(cm.getMeso() >= 300000){
               cm.gainItem(2049408,1);
               cm.gainMeso(-300000);
               cm.sendOk("����ɷ� �ο��ֹ��� 1���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 6) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049301,1);
               cm.gainMeso(-100000); 
              cm.sendOk("���ȭ �ֹ��� 1���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
} else if (selection == 7) {
               if(cm.getMeso() >= 500000){
               cm.gainItem(2049303,1);
               cm.gainMeso(-500000);
               cm.sendOk("��� ���ȭ �ֹ��� 1���� �����ϼ̽��ϴ�.");
               cm.dispose();
               } else {
               cm.sendOk("������ �����ϱ⿣, �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
}
}
}
}

