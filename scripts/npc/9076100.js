importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var chance1 = Math.floor(Math.random()*500+1);
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
var j_coin = cm.getMeso();
				cm.sendNext("#r#e������! �κ��丮 ������ �� Ȯ�����ּ���! (�Һ�,���,��Ÿ)(���� �Ұ���)#k#n\r\n\r\n�ȳ��ϼ��� #d#h0##k��. �޼ҵ��ڴ�� #b���Ǿ�#k����.\r\n������ ���ǿ� #b�޼�#k #r1000��#k���� ���� �־��.\r\n#r������ �ʹ� �� ������ �ñ�������� �����ϼ���!\r\n\r\n�������� �޼� : #r#n#e"+j_coin+"#n#k#d �޼�");
			}
		else if (status == 1) {
var j_coin = cm.getMeso();
			if (cm.getMeso() >= 10000000) {
			cm.sendOk("#r1000���޼�#k�� ����ؼ� #r����#k�� �Ͻðھ��?\r\n#k\r\n\r\n �������� �޼� : #r#n"+j_coin+"#k#d �޼�");
			}
			else if (cm.getMeso() <= 10000000) {
			cm.sendOk("�̷�... 1000���޼Ұ� �����ñ���?");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainMeso(-10000000);
			if (itemchance == 1) {
			cm.gainMeso(1000000000);
			cm.sendOk("#e#r10�� �޼� ��÷!#k#n �͸� �ù� ����������");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� 10�� �޼Ҹ� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if (itemchance == 2) {
			cm.gainItem(4001126, 5000);
			cm.sendOk("#e#r��ǳ�� 5õ�� ��÷!#k#n\r\n ��~");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ��ǳ�� 5õ���� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if (itemchance == 3) {
			cm.gainItem(1112585, 1);
			cm.sendOk("#e#r#i1112585##z1112585# ��÷!#k#n #k#n ��!");
			}
			else if (itemchance == 4) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r#i4310034##z4310034# ��÷!#k#n #k#n ��!");
			}
			else if (itemchance == 5) {
			cm.gainItem(2049360, 1);
			cm.sendOk("#e#r#i2049360##z2049360# ��÷!#k#n #k#n ��!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ���� ���ȭ �ֹ����� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if (itemchance == 6) {
			cm.gainItem(2049153, 1);
			cm.sendOk("#e#r#i2049153##z2049153# ��÷!#k#n #k#n ��!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ���� ������ ȥ���� �ֹ����� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if (itemchance == 7) {
			cm.gainItem(2049704, 1);
			cm.sendOk("#e#r#i2049704# �����帮 ���� �ֹ��� 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 8) && (itemchance <= 10)) {
			cm.gainItem(4310034, 1);
			cm.sendOk("#e#r#i4310034##z4310034# ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 10) && (itemchance <= 19)) {
			cm.gainItem(4001109, 1);
			cm.sendOk("#e#r#i4001109##z4001109# ��÷!#k#n #k#n ��!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ���� ��ȭ���� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if ((itemchance >= 20) && (itemchance <= 24)) {
			cm.gainItem(4001163, 1);
			cm.sendOk("#e#r#i4001163##z4001163# ��÷!#k#n #k#n ��!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ���� ��ȣ���� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if ((itemchance >= 25) && (itemchance <= 30)) {
			cm.gainItem(1112585, 1);
			cm.sendOk("#e#r#i1112585##z1112585# ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 31) && (itemchance <= 49)) {
			cm.gainItem(1022123, 1);
			cm.sendOk("#e#r#i1022123##z1022123# ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 50) && (itemchance <= 58)) {
			cm.gainItem(2049160, 1);
			cm.sendOk("#e#r#i2049160##z2049160# ��÷!#k#n #k#n ��!");
			}
			else if (itemchance == 59) {
			cm.gainItem(4310059, 1);
			cm.sendOk("#e#r#i4310059##z4310059# 1�� ��÷!#k#n #k#n ��!");
			}
			else if (itemchance == 60) {
			cm.gainItem(4310059, 20);
			cm.sendOk("#e#r#i4310059##z4310059# 20�� ��÷!#k#n #k#n �� ���� 20��? �Ϲ̷�");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� �������� 20���� ȹ�� �ϼ̽��ϴ�!!!!!!!"));
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if ((itemchance >= 61) && (itemchance <= 69)) {
			cm.gainItem(4310059, 1);
			cm.sendOk("#e#r#i4310059##z4310059# 1�� ��÷!#k#n #k#n ��!");
			}
			else if (itemchance == 62) {
			cm.gainItem(4310034, 10);
			cm.sendOk("#e#r#i4310034##z4310059# 34�� ��÷!#k#n #k#n �� �׷��� 100���� �������!?!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡ�"+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ����Ƽ�� ���� 10���� ȹ�� �ϼ̽��ϴ�!�ڡڡ�"));
			}
			else if (itemchance == 63) {
			cm.gainItem(4310034, 100);
			cm.sendOk("#e#r#i4310034##z4310034# 100�� ��÷!#k#n #k#n �� 100��!!!!! ���߳� ���ھ�!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ����Ƽ�� ���� 100���� ȹ�� �ϼ̽��ϴ�!!!!!!!"));
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if ((itemchance >= 70) && (itemchance <= 74)) {
			cm.gainItem(1122104, 1);
			cm.sendOk("#e#r#i1122104##z1122104# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 75) && (itemchance <= 79)) {
			cm.gainItem(1012239, 1);
			cm.sendOk("#e#r#i1012239##z1012239# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 80) && (itemchance <= 84)) {
			cm.gainItem(1112584, 1);
			cm.sendOk("#e#r#i1112584##z1112584# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 85) && (itemchance <= 89)) {
			cm.gainItem(1032093, 1);
			cm.sendOk("#e#r#i1032093##z1032093# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 90) && (itemchance <= 94)) {
			cm.gainItem(1132085, 1);
			cm.sendOk("#e#r#i1132085##z1132085# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 95) && (itemchance <= 99)) {
			cm.gainItem(3010063, 1);
			cm.sendOk("#e#r#i3010063##z3010063# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 100) && (itemchance <= 104)) {
			cm.gainItem(3010007, 1);
			cm.sendOk("#e#r#i3010007##z3010007# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 105) && (itemchance <= 109)) {
			cm.gainItem(3010008, 1);
			cm.sendOk("#e#r#i3010008##z3010008# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 110) && (itemchance <= 129)) {
			cm.gainItem(2430368, 1);
			cm.sendOk("#e#r#i2430368##z2430368# 1�� ��÷!#k#n #k#n ��!");
			}
			else if (itemchance == 130) {
			cm.gainItem(5062005, 100);
			cm.sendOk("#e#r#i5062005##z5062005# 100�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 131) && (itemchance <= 149)) {
			cm.gainItem(1112400, 1);
			cm.sendOk("#e#r#i1112400##z1112400# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 150) && (itemchance <= 179)) {
			cm.gainItem(2430694, 1);
			cm.sendOk("#e#r#i2430694##z2430694# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 180) && (itemchance <= 189)) {
			cm.gainItem(4001126, 1000);
			cm.sendOk("#e#r#i4001126##z4001126# 1000�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 190) && (itemchance <= 199)) {
			cm.gainItem(4310059, 1);
			cm.sendOk("#e#r#i4310059##z4310059# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 200) && (itemchance <= 209)) {
			cm.gainItem(4310027, 1);
			cm.sendOk("#e#r#i4310027##z4310027# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 210) && (itemchance <= 219)) {
			cm.gainItem(5062005, 100);
			cm.sendOk("#e#r#i5062005##z5062005# 100�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 220) && (itemchance <= 229)) {
			cm.gainMeso(50000000);
			cm.sendOk("#e#r5õ���޼� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 230) && (itemchance <= 239)) {
			cm.gainMeso(100000000);
			cm.sendOk("#e#r1��޼� ��÷!#k#n #k#n ��! ������?");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� 1��޼Ҹ� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if ((itemchance >= 250) && (itemchance <= 269)) {
			cm.gainItem(5062005, 30);
			cm.sendOk("#e#r#i5062005##z5062005# 1�� ��÷!#k#n #k#n ��");
			}
			else if ((itemchance >= 270) && (itemchance <= 289)) {
			cm.gainItem(4001126, 100);
			cm.sendOk("#e#r#i4001126##z4001126# 1�� ��÷!#k#n #k#n ��");
			}
			else if ((itemchance >= 290) && (itemchance <= 309)) {
			cm.gainItem(4310059, 1);
			cm.sendOk("#e#r#i4310059##z4310059# 1�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 310) && (itemchance <= 329)) {
			cm.gainItem(4001126, 500);
			cm.sendOk("#e#r#i4001126##z4001126# 500�� ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 330) && (itemchance <= 379)) {
			cm.gainItem(4001126, 100);
			cm.sendOk("#e#r#i4001126##z4001126# 100�� ��÷!#k#n #k#n ��");
			}
			else if ((itemchance >= 380) && (itemchance <= 429)) {
			cm.gainMeso(1000000);
			cm.sendOk("#e#r100���޼� ��÷!#k#n #k#n ��");
			}
			else if ((itemchance >= 381) && (itemchance <= 430)) {
			cm.gainMeso(1000000);
			cm.sendOk("#e#r100���޼� ��÷!#k#n #k#n ��");
			}
			else if ((itemchance >= 382) && (itemchance <= 431)) {
			cm.gainMeso(1000000);
			cm.sendOk("#e#r100���޼� ��÷!#k#n #k#n ��");
			}
			else if ((itemchance >= 383) && (itemchance <= 432)) {
			cm.gainMeso(1000000);
			cm.sendOk("#e#r100���޼� ��÷!#k#n #k#n ��");
			}
			else if ((itemchance >= 384) && (itemchance <= 433)) {
			cm.gainMeso(1000000);
			cm.sendOk("#e#r100���޼� ��÷!#k#n #k#n ��");
			}
			else if (itemchance == 430) {
			cm.gainItem(1662002,1);
			cm.sendOk("#e#r#i1662002##z1662002# ��÷!#k#n #k#n ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ����� �ȵ���̵�(��)�� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if (itemchance == 431) {
			cm.gainItem(1662003,1);
			cm.sendOk("#e#r#i1662003##z1662003# ��÷!#k#n #k#n ��!!!!");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� ����� �ȵ���̵�(��)�� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if ((itemchance >= 432) && (itemchance <= 450)) {
			cm.gainItem(4310034,1);
			cm.sendOk("#e#r#i4310034##z4310034# ��÷!#k#n #k#n ��!");
			}
			else if ((itemchance >= 451) && (itemchance <= 470)) {
			cm.gainItem(4310015,1);
			cm.sendOk("#e#r���̿���! �����Ѱ�����! �ҽ��ϴϱ� #i4310015##z4310015# �̰ų��԰� ��������");
			}
			else if ((itemchance >= 471) && (itemchance <= 500)) {
			cm.gainItem(4001126,1);
			cm.sendOk("#e#r���̿���! �����Ѱ�����! �ҽ��ϴϱ� #i4001126##z4001126# �̰ų��԰� ��������");
			}
			else if ((itemchance >= 472) && (itemchance <= 500)) {
			cm.gainItem(4001126,1);
			cm.sendOk("#e#r���̿���! �����Ѱ�����! �ҽ��ϴϱ� #i4001126##z4001126# �̰ų��԰� ��������");
			}
			else if ((itemchance >= 473) && (itemchance <= 500)) {
			cm.gainItem(4001126,1);
			cm.sendOk("#e#r���̿���! �����Ѱ�����! �ҽ��ϴϱ� #i4001126##z4001126# �̰ų��԰� ��������");
			}
			else if ((itemchance >= 474) && (itemchance <= 500)) {
			cm.gainItem(4001126,1);
			cm.sendOk("#e#r���̿���! �����Ѱ�����! �ҽ��ϴϱ� #i4001126##z4001126# �̰ų��԰� ��������");
			}
			else if ((itemchance >= 475) && (itemchance <= 500)) {
			cm.gainItem(4001126,1);
			cm.sendOk("#e#r���̿���! �����Ѱ�����! �ҽ��ϴϱ� #i4001126##z4001126# �̰ų��԰� ��������");
			}
			else if ((itemchance >= 476) && (itemchance <= 500)) {
			cm.gainItem(4001126,1);
			cm.sendOk("#e#r���̿���! �����Ѱ�����! �ҽ��ϴϱ� #i4001126##z4001126# �̰ų��԰� ��������");
			}
			else if ((itemchance >= 477) && (itemchance <= 500)) {
			cm.gainItem(4001126,1);
			cm.sendOk("#e#r���̿���! �����Ѱ�����! �ҽ��ϴϱ� #i4001126##z4001126# �̰ų��԰� ��������");
			}
			else if ((itemchance >= 501) && (itemchance <= 505)) {
			cm.gainItem(2046318,1);
			cm.sendOk("#e#r#i2046318##z2046318#  �ä� �ǰ�");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� �Ǽ����� ���ݷ� 15%�ֹ����� ȹ�� �ϼ̽��ϴ�!"));
			}
			else if ((itemchance >= 506) && (itemchance <= 510)) {
			cm.gainItem(2046319,1);
			cm.sendOk("#e#r#i2046319##z2046319#  �ä� �Ǹ�");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� �Ǽ����� ���� 15%�ֹ����� ȹ�� �ϼ̽��ϴ�!"));
			}
			if (itemchance == 507) {
			cm.gainMeso(10000000000);
			cm.sendOk("#e#r100�� �޼� ��÷!#k#n ������ �� ���ǻ��;");
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� �޼ҵ������� 100�� �޼Ҹ� ȹ�� �ϼ̽��ϴ�!!!!!!"));
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "�ڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡڡ�"));
			}
			else if ((itemchance >= 508) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}
			else if ((itemchance >= 509) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}
			else if ((itemchance >= 511) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}
			else if ((itemchance >= 512) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}
			else if ((itemchance >= 513) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}
			else if ((itemchance >= 514) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}
			else if ((itemchance >= 516) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}
			else if ((itemchance >= 517) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}
			else if ((itemchance >= 518) && (itemchance <= 515)) {
			cm.gainMeso(100);
			cm.sendOk("#e#r100 �޼� ��÷!#k#n �ȳ�?;");
			}


	cm.dispose();
		}
	}
}

