importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8810026; //���� �ڵ�
var chaso = 8810130; // ī���� ���� �ڵ�
var item = 4033113; //�ʿ��� ������ �ڵ�
var count = 20; //�ʿ��� ������ ����
var Ccount = 35; //�ʿ��� ī���� ��ȯ ������ ����
var map = 240060200; //���ڵ�
var bn = "ȥ����"; //�����̸�
var Cbn = "ī���� ȥ����"; // ī���� ���� �̸�
var back = 100000000; //���ư� �� �ڵ�
var x = 140; //��ȯx��ǥ 
var y = 260; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {
	var magnus = "#eȥ������ ����#n�� ���� ���� ȯ���մϴ�. ���� #e�����Ѹ� ����#n�Դϴ�.\r\n"
	magnus += "#L1##i"+item+"# #r#z"+item+"# #e"+count+"��#k#n�� #e"+bn+"#n ��ȯ�Ѵ�.\r\n"
	magnus += "#L5##i"+item+"# #r#z"+item+"# #e"+Ccount+"��#k#n�� #e"+Cbn+"#n ��ȯ�Ѵ�.\r\n"
	magnus += "#L2##i2030000# ��׽ý��� ���ư���.\r\n"
	magnus += "#L3##e#r�ʵ� ���� ��� ���͸� �����Ѵ�."
	cm.sendSimple(magnus)

		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("�ʵ� ���� ���Ͱ� �����ֽ��ϴ�. ���Ͱ� ���̸� ����ֽð�, ������ �ʴ´ٸ� ���� ���� ���͸� �����ּ���.");

			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("#e"+bn+"#n��(��) ��ȯ�Ϸ��� #e#i"+item+"# #z"+item+"# "+count+"��#n�� �ʿ��մϴ�.");
			cm.dispose();
		} else {    
			cm.gainItem(item,-count);
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "������ȯ�˸��� : "+cm.getPlayer().getName()+"���� "+(cm.getClient().getChannel()+1)+"ä�ο��� "+bn+"�� ��ȯ�߽��ϴ�.")); // ���� ä�ü����˸� �޼��� 
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}


		} else if(selection == 5) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("�ʵ� ���� ���Ͱ� �����ֽ��ϴ�. ���Ͱ� ���̸� ����ֽð�, ������ �ʴ´ٸ� ���� ���� ���͸� �����ּ���.");

			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("#e"+bn+"#n��(��) ��ȯ�Ϸ��� #e#i"+item+"# #z"+item+"# "+count+"��#n�� �ʿ��մϴ�.");
			cm.dispose();
		} else {    
			cm.gainItem(item,-count);
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "������ȯ�˸��� : "+cm.getPlayer().getName()+"���� "+(cm.getClient().getChannel()+1)+"ä�ο��� "+Cbn+"�� ��ȯ�߽��ϴ�.")); // ���� ä�ü����˸� �޼��� 
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}


		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();
		} else if(selection == 3) {
    	    		cm.killAllMob();
			cm.dispose();
		} else {
			cm.sendOk("�ʵ� ���� ���Ͱ� �����ϴ�. �ٽ� Ȯ�����ּ���.");
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


