/*
������ : ljw5992@naver.com
�� �ּ��� �������� �����ּ���.
*/


importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var chance1 = Math.floor(Math.random()*2570+1);
var itemchance = chance1;



function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("���߿�����~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
var j_coin = cm.itemQuantity(4310034);
				cm.sendNext("#r#e������! �κ��丮 ������ �� Ȯ�����ּ���! (���� �Ұ���)#k#n\r\n\r\n�ȳ��ϼ��� #d#h0##k��. ���ڴ�� #b�丮#k����.\r\n���ڿ� #r#e���긮�� �����۵�#k#n�� �߰��Ǿ����!\r\n������ ���ǿ� #b����Ƽ�� ����#k #r1��#k�� ���� �־��.\r\n������ �Ͻø� �޼ҿ� ���� �������� ������ �־��.\r\n����! #e#r���� ������#k#n���� ���´ٴ� �ҹ��� �־��...... \r\n\r\n�������� ����Ƽ�� ���� : #r#n#e"+j_coin+"#n#k#d ��");
			}
		else if (status == 1) {
var j_coin = cm.itemQuantity(4310034);
			if (cm.haveItem(4310034)) {
			cm.sendOk("#i4310034# �� ����ؼ� #r����#k�� �Ͻðھ��?\r\n#k\r\n\r\n �������� ����Ƽ������ : #r#n"+j_coin+"#k#d ��");
			}
			else if (!cm.haveItem(4310034)) {
			cm.sendOk("�̷�... ����Ƽ�� ������ �Ѱ��� �����ñ���?");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4310034, -1);
			if ((itemchance >= 1) && (itemchance <= 20)) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
			cm.gainMeso(1000000);
			cm.sendOk("#e#r1000000 �޼� ��÷!#k#n #k#n �� �̰͹ۿ� �ȳ��ñ�...");
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �����ε�");
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
			cm.gainMeso(1000000);
			cm.sendOk("#e#r1000000 �޼� ��÷!#k#n ����������...�Ф�");
			}
			else if (itemchance == 71) {
			cm.gainMeso(50000000);
			cm.sendOk("#e#r50000000 �޼� ��÷!#k#n �������� ��� �ƴѰ�?");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� 50000000 �޼Ҹ� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if (itemchance == 72) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 73) {
			cm.gainMeso(50000000);
			cm.sendOk("#e#r50000000 �޼� ��÷!#k#n �������� ��� �ƴѰ�?");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� 50000000 �޼Ҹ� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 74) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 75) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �����ε�");
			}
			else if (itemchance == 76) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 77) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �����ε�");
			}
			else if (itemchance == 78) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� ���� �̵��ε�?");
			}
			else if (itemchance == 79) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� ���� �̵��ε�?");
			}
			else if (itemchance == 80) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� ���� �̵��ε�?");
			}	
			else if (itemchance == 81) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 82) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� ���� �̵��ε�?");
			}
			else if (itemchance == 83) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 84) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �����ε�");
			}
			else if (itemchance == 85) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 86) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 87) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");

			
			}
			else if (itemchance == 88) {
			cm.gainItem(4310034, 10);
			cm.sendOk("#e#r����Ƽ������ 10��!#k#n �� ���� �����ѹ� �纸����!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 10���� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 89) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 90) {
			cm.gainItem(4310034, 10);
			cm.sendOk("#e#r����Ƽ������ 10��!#k#n �� ���� �����ѹ� �纸����!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 10���� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 91) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� ���� �ƴѰ�?");
			}
			else if (itemchance == 92) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �����ε�");
			}
			else if (itemchance == 93) {
			cm.gainItem(4310034, 10);
			cm.sendOk("#e#r����Ƽ������ 10��!#k#n �� ���� �����ѹ� �纸����!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 10���� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 94) {
			cm.gainItem(4310034, 10);
			cm.sendOk("#e#r����Ƽ������ 10��!#k#n �� ���� �����ѹ� �纸����!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 10���� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 95) {
			cm.gainItem(4310034, 10);
			cm.sendOk("#e#r����Ƽ������ 10��!#k#n �� ���� �����ѹ� �纸����!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 10���� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 96) {
			cm.gainItem(4310034, 10);
			cm.sendOk("#e#r����Ƽ������ 10��!#k#n �� ���� �����ѹ� �纸����!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 10���� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 97) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �̵� �ƴѰ�?");
			}
			else if (itemchance == 98) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �̵� �ƴѰ�?");
			}
			else if (itemchance == 99) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �̵��ΰ� ������?");
			}
			else if (itemchance == 100) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �̵��ε�..");
			}
			else if (itemchance == 101) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �̵��̾�!");
			}
			else if (itemchance == 102) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �̵��ΰ� ������?");
			}
			else if (itemchance == 103) {
			cm.gainMeso(5000000);
			cm.sendOk("#e#r5000000 �޼� ��÷!#k#n �������� �̵� �ƴѰ�?");
			}
			else if (itemchance == 104) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n �̰� ���ص� �ƴϰ� �̵浵 �ƴϿ�~");
			}
			else if (itemchance == 105) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n �̰� ���ص� �ƴϰ� �̵浵 �ƴϿ�~");
			}
			else if (itemchance == 106) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n �̰� ���ص� �ƴϰ� �̵浵 �ƴϿ�~");
			}
			else if (itemchance == 107) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n �̰� ���ص� �ƴϰ� �̵浵 �ƴϿ�~");
			}
			else if (itemchance == 108) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n �̰� ���ص� �ƴϰ� �̵浵 �ƴϿ�~");
			}
			else if (itemchance == 109) {
			cm.gainItem(4310034, 2);
			cm.sendOk("#e#r����Ƽ������ 2��!#k#n �׷���...�ϳ� �̵�ó� �ѹ��� ���?");
			}
			else if (itemchance == 110) {
			cm.gainItem(4310034, 2);
			cm.sendOk("#e#r����Ƽ������ 2��!#k#n �׷���...�ϳ� �̵�ó� �ѹ��� ���?");
			}
			else if (itemchance == 111) {
			cm.gainItem(4310034, 2);
			cm.sendOk("#e#r����Ƽ������ 2��!#k#n �׷���...�ϳ� �̵�ó� �ѹ��� ���?");
			}
			else if (itemchance == 112) {
			cm.gainItem(4310034, 2);
			cm.sendOk("#e#r����Ƽ������ 2��!#k#n �׷���...�ϳ� �̵�ó� �ѹ��� ���?");
			}
			else if (itemchance == 113) {
			cm.gainItem(4310034, 2);
			cm.sendOk("#e#r����Ƽ������ 2��!#k#n �׷���...�ϳ� �̵�ó� �ѹ��� ���?");
			}
			else if (itemchance == 114) {
			cm.gainItem(4310034, 2);
			cm.sendOk("#e#r����Ƽ������ 2��!#k#n �׷���...�ϳ� �̵�ó� �ѹ��� ���?");
			}
			else if (itemchance == 115) {
			cm.gainItem(4310034, 5);
			cm.sendOk("#e#r����Ƽ������ 5��!#k#n �ƹ����� ���ϼ��� ������ �����");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 5���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 116) {
			cm.gainItem(4310034, 5);
			cm.sendOk("#e#r����Ƽ������ 5��!#k#n �ƹ����� ���ϼ��� ������ �����");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 5���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 117) {
			cm.gainItem(4310034, 5);
			cm.sendOk("#e#r����Ƽ������ 5��!#k#n �ƹ����� ���ϼ��� ������ �����");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 5���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 118) {
			cm.gainItem(4310034, 5);
			cm.sendOk("#e#r����Ƽ������ 5��!#k#n �ƹ����� ���ϼ��� ������ �����");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 5���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 119) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n ���α� �Դϴ�...�Ф�");
			}
			else if (itemchance == 120) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n ���α� �Դϴ�...�Ф�");
			}
			else if (itemchance == 121) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n ���α� �Դϴ�...�Ф�");
			}
			else if (itemchance == 122) {
			cm.gainMeso(50000000);
			cm.sendOk("#e#r50000000 �޼� ��÷!#k#n �� �� ��¼�µ�...");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� 50000000 �޼Ҹ� ȹ���ϼ̽��ϴ�!"));
			
			}
			else if (itemchance == 123) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n ���α� �Դϴ�...�Ф�");
			}
			else if (itemchance == 124) {
			cm.gainMeso(50000000);
			cm.sendOk("#e#r50000000 �޼� ��÷!#k#n �� �� ��¼�µ�...");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� 50000000 �޼Ҹ� ȹ���ϼ̽��ϴ�!"));
			
			}
			else if (itemchance == 125) {
			cm.gainMeso(50000000);
			cm.sendOk("#e#r50000000 �޼� ��÷!#k#n �� �� ��¼�µ�...");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� 50000000 �޼Ҹ� ȹ���ϼ̽��ϴ�!"));
			
			}
			else if (itemchance == 126) {
			cm.gainMeso(50000000);
			cm.sendOk("#e#r50000000 �޼� ��÷!#k#n �� �� ��¼�µ�...");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� 50000000 �޼Ҹ� ȹ���ϼ̽��ϴ�!"));
			
			}
			else if (itemchance == 127) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 128) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 129) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 130) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 131) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 132) {
			cm.gainMeso(100000000);
			cm.sendOk("#e#r100000000 �޼� ��÷!#k#n �� ��¥ ����� ������. �Ҷҹ�� �ѱ׸� �ϽǷ���?");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� 100000000 �޼Ҹ� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 133) {
			cm.gainMeso(100000000);
			cm.sendOk("#e#r100000000 �޼� ��÷!#k#n �� ��¥ ����� ������. �Ҷҹ�� �ѱ׸� �ϽǷ���?");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� 100000000 �޼Ҹ� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 134) {
			cm.gainItem(1003172, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 135) {
			cm.gainItem(1102275, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 136) {
			cm.gainItem(1082295, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 137) {
			cm.gainMeso(100000000);
			cm.sendOk("#e#r100000000 �޼� ��÷!#k#n �� ��¥ ����� ������. �Ҷҹ�� �ѱ׸� �ϽǷ���?");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "����������������������"+cm.getPlayer().getName()+"�Բ��� �������� 100000000 �޼Ҹ� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if (itemchance == 138) {
			cm.gainItem(1052314, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 139) {
			cm.gainItem(1072485, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 140) {
			cm.gainItem(1302152, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 141) { 
			cm.gainItem(1312065, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 142) { 
			cm.gainItem(1322096, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 143) { 
			cm.gainItem(1402095, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 144) { 
			cm.gainItem(1412065, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 145) { 
			cm.gainItem(1422066, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 146) { 
			cm.gainItem(1432086, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 147) {
			cm.gainItem(1442116, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 148) { 
			cm.gainItem(1003173, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 149) { 
			cm.gainItem(1102276, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 150) { 
			cm.gainItem(1082296, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 151) { 
			cm.gainItem(1052315, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 152) { 
			cm.gainItem(1072486, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 153) { 
			cm.gainItem(1372084, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 154) { 
			cm.gainItem(1382104, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 155) { 
			cm.gainItem(1003175, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 156) { 
			cm.gainItem(1102278, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 157) { 
			cm.gainItem(1082298, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 158) { 
			cm.gainItem(1052317, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 159) { 
			cm.gainItem(1072488, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 160) { 
			cm.gainItem(1332130, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 161) { 
			cm.gainItem(1342036, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 162) { 
			cm.gainItem(1362019, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if ((itemchance >= 163) && (itemchance <= 184)) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 184) { 
			cm.sendOk("#r�ʾƾƾƾƾƾƾ�!#k ������ȸ�� �ٽ� �����غ�����.");
			
	
			}
			else if (itemchance == 185) { 
			cm.sendOk("#r�ʾƾƾƾƾƾƾ�!#k ������ȸ�� �ٽ� �����غ�����.");

			}
			else if (itemchance == 186) { 
			cm.gainItem(1472122, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 187) { 
			cm.gainItem(1003174, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 188) { 
			cm.gainItem(1102277, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 189) { 
			cm.gainItem(1082297, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 190) { 
			cm.gainItem(1052316, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 191) { 
			cm.gainItem(1072487, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 192) { 
			cm.gainItem(1462099, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 193) { 
			cm.gainItem(1522018, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 194) { 
			cm.gainItem(1003176, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 195) { 
			cm.gainItem(1082299, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 196) { 
			cm.gainItem(1052318, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 197) { 
			cm.gainItem(1072489, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 198) { 
			cm.gainItem(1482084, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 199) { 
			cm.gainItem(1492085, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 200) { 
			cm.gainItem(1532018, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 201) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 202) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 203) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 204) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 205) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 206) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 207) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 208) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 209) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 210) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 211) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 212) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 213) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 214) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 215) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 216) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 217) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 218) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 219) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 220) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 221) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 222) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 223) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 224) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 225) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 226) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 227) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 228) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 229) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 230) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 231) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 232) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 233) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 234) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 235) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 236) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 237) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 238) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 239) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 240) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 241) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 242) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 243) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 244) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 245) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 246) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 247) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 248) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 249) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 250) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 251) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 252) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 253) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 254) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 255) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 256) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 257) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 258) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 259) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 260) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 261) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 262) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 263) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 264) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 265) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 266) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 267) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 268) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 269) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 270) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 271) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 272) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 273) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 274) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 275) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 276) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 277) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 278) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 279) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 280) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if (itemchance == 281) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 282) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 283) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 284) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 285) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 286) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 287) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 288) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 289) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 290) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 291) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 292) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 293) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 294) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 295) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 296) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 297) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 298) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 299) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if (itemchance == 300) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if ((itemchance >= 301) && (itemchance <= 600)) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if ((itemchance >= 601) && (itemchance <= 800)) {
			cm.gainMeso(500000);
			cm.sendOk("#e#r500000 �޼� ��÷!#k#n #k#n �� �̰͹ۿ� �ȳ��ñ�...");
			}
			else if ((itemchance >= 801) && (itemchance <= 820)) {
			cm.gainItem(4310034, 5);
			cm.sendOk("#e#r����Ƽ������ 5��!#k#n �ƹ����� ���ϼ��� ������ �����");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ����Ƽ������ 5���� ȹ���ϼ̽��ϴ�!"));
			}
			else if ((itemchance >= 821) && (itemchance <= 920)) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n ���α� �Դϴ�...�Ф�");
			}
			else if ((itemchance >= 921) && (itemchance <= 1000)) {
			cm.gainItem(4310034, 2);
			cm.sendOk("#e#r����Ƽ������ 1��!#k#n ���� �ϳ��ް� �ѹ� ��!");
			}
			else if ((itemchance >= 1001) && (itemchance <= 1100)) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if ((itemchance >= 1101) && (itemchance <= 1300)) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if ((itemchance >= 1301) && (itemchance <= 1500)) {
			cm.gainMeso(3000000);
			cm.sendOk("#e#r3000000 �޼� ��÷!#k#n ���α� �Դϴ�...�Ф�");
			}
			else if ((itemchance >= 1501) && (itemchance <= 1550)) {
			cm.gainItem(4310034, 2);
			cm.sendOk("#e#r����Ƽ������ 2��!#k#n �׷���...�ϳ� �̵�ó� �ѹ��� ���?");
			}
			else if ((itemchance >= 1501) && (itemchance <= 1600)) {
			cm.gainItem(4310016, 1); cm.sendOk("#e#r�ʾƾƾƾƾƾƾ�!#k#n ������ȸ�� �ٽ� �����غ�����.");
			}
			else if ((itemchance >= 1601) && (itemchance <= 2000)) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if ((itemchance >= 2001) && (itemchance <= 2005)) {
			cm.gainItem(1142249, 1);
			cm.sendOk("#e#r���¾� ��Ű���̡�#k#n�� ȹ���ϼ̽��ϴ�!!!!!!!!! ���� ���!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� [���¾� ��Ű���̡�] ������ ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if ((itemchance >= 2005) && (itemchance <= 2015)) {
			cm.gainItem(1122104, 1);
			cm.sendOk("#e#r����¡ �� ���Ʈ#k#n�� ȹ���ϼ̽��ϴ�! �����׿�~");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�� ��������������������"+cm.getPlayer().getName()+"�Բ��� �������� [����¡ �� ���Ʈ]�� ȹ���ϼ̽��ϴ�!"));

			}
			else if ((itemchance >= 2016) && (itemchance <= 2018)) {
			cm.gainItem(1122150, 1);
			cm.sendOk("#e#r���̳����� �Ҵ�Ʈ#k#n�� ȹ���ϼ̽��ϴ�! ���� ���ϵ����~");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�� ��������������"+cm.getPlayer().getName()+"�Բ��� �������� [���̳����� �Ҵ�Ʈ]�� ȹ���ϼ̽��ϴ�!"));
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));

			}
			else if ((itemchance >= 2019) && (itemchance <= 2025)) {
			cm.gainItem(2046374, 1);
			cm.sendOk("#e#r��Ʋ�� �ð��� ����#k#n�� ȹ���ϼ̽��ϴ�! ���� ���ϵ����~");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�� ��������������������			"+cm.getPlayer().getName()+"�Բ��� �������� [��Ʋ�� �ð��� ����]�� ȹ���ϼ̽��ϴ�!"));
			}
			else if ((itemchance >= 2026) && (itemchance <= 2325)) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r����!#k#n �׷��� ������ �ʾҳ׿�");
			}
			else if ((itemchance >= 2326) && (itemchance <= 2525)) {
			cm.gainItem(4310016, 1);
			cm.sendOk("#e#r�ʾƾƾƾƾ�!#k#n ���������� �Ф�");
			}
			else if (itemchance == 2326) {
			cm.gainItem(1222014, 1);
			cm.sendOk("#e#r���!#k#n ���� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���� ��� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2327) {
			cm.gainItem(1222044, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2328) {
			cm.gainItem(1212044, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2329) {
			cm.gainItem(1302248, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2330) {
			cm.gainItem(1312135, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2331) {
			cm.gainItem(1322181, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2332) {
			cm.gainItem(1332205, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2333) {
			cm.gainItem(1342075, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2334) {
			cm.gainItem(1362074, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2335) {
			cm.gainItem(1372161, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2336) {
			cm.gainItem(1382192, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2337) {
			cm.gainItem(1402172, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2338) {
			cm.gainItem(1412122, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2339) {
			cm.gainItem(1422124, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2340) {
			cm.gainItem(1432150, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2341) {
			cm.gainItem(1442202, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2342) {
			cm.gainItem(1452189, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2343) {
			cm.gainItem(1462177, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2344) {
			cm.gainItem(1472197, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2345) {
			cm.gainItem(1482151, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2346) {
			cm.gainItem(1492162, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2347) {
			cm.gainItem(1522078, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2348) {
			cm.gainItem(1532081, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2349) {
			cm.gainItem(1222044, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2350) {
			cm.gainItem(1212044, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2351) {
			cm.gainItem(1302248, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2352) {
			cm.gainItem(1312135, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2353) {
			cm.gainItem(1322181, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2354) {
			cm.gainItem(1332205, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2355) {
			cm.gainItem(1342075, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2356) {
			cm.gainItem(1362074, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2357) {
			cm.gainItem(1372161, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2358) {
			cm.gainItem(1382192, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2359) {
			cm.gainItem(1402172, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2360) {
			cm.gainItem(1412122, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2361) {
			cm.gainItem(1422124, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2362) {
			cm.gainItem(1432150, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2363) {
			cm.gainItem(1442202, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2364) {
			cm.gainItem(1452189, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2365) {
			cm.gainItem(1462177, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2366) {
			cm.gainItem(1472197, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2367) {
			cm.gainItem(1482151, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2368) {
			cm.gainItem(1492162, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2369) {
			cm.gainItem(1522078, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2370) {
			cm.gainItem(1532081, 1);
			cm.sendOk("#e#r���!#k#n ���긮�� �������� �̾Ҿ��!!!!");
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "��������������������"+cm.getPlayer().getName()+"�Բ��� �������� ���긮�� ���õ巡���� ȹ���ϼ̽��ϴ�!"));
			}
	cm.dispose();
		}
	}
}

