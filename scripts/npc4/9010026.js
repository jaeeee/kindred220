function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
	cm.sendOk("�����Ͻ����ʰڽ��ϱ�?\r\n�׷�,�����ϰ������ �ٽÿ��ּ���.");
	cm.dispose();
	return;
	}
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	if (cm.haveItem(4001301) == 0) {
        cm.sendYesNo("#e#h ##n��?\r\n\r\n�����̺�Ʈ�� �����Ͻðڽ��ϱ�?");
    } else {
	cm.dispose();
	cm.openNpc(1012112);
}
    } else if (status == 1) {
        cm.sendNext("�������ּż� �����մϴ�!!\r\n#i4001301##b #t4001301##k���޵Ǿ����ϴ�.\r\n\r\n#e#r�ٽ� ��ȭ���ɾ��ּ���!#n#k");
	cm.gainItem(4001301, 1);
	cm.dispose();
    } else if (status == 2) {
        cm.sendNext("�׸��� ������ �ٽ� ���ɾ��ֽø� �丮 �� �ҷ��帱�Կ�.");
	cm.dispose();
    }
}
/*function start() {
    status = -1;
    action (1, 0, 0);
}

function start() {
 if (true) {
	    var chat = "#fn����##r#e[���� �帳�ϴ�]#k#n#b\r\n\r\n#fn����##e#r��ũ�� �Բ���#k#n#b�̹� �ڵ�� ���׽�Ʈ �̺�Ʈ����\r\n\r\n1���� �ϼ̽��ϴ�!#k";
	    //chat += "#L4##b[�ö�ö�]������ ���ؼ�#k#e#r(���̵�:�ڡڡڡ١�)#k#n\r\n";
   	    cm.sendSimple(chat);
}
}*/