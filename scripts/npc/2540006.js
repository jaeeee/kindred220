importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8860003; //���� �ڵ�
var chaso = 8810130; // ī���� ���� �ڵ�
var item = 3994385; //�ʿ��� ������ �ڵ�
var count = 2500; //�ʿ��� ������ ����
var Ccount = 35; //�ʿ��� ī���� ��ȯ ������ ����
var map = 240060200; //���ڵ�
var bn = "��ҿ� ������"; //�����̸�
var back = 401100200; //���ư� �� �ڵ�
var x = -200; //��ȯx��ǥ 
var y = 260; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {
	var magnus = "#b#e����� ���谡��.#n #r���� ������#k ���� �����ϱ� ���Ͽ� �̰����� �°հ�.. #e�켱 �ڳ׸� �׽�Ʈ �غ��ڳ�#k\r\e#r2�о�#k�� #b����#k�� ��� #r����#k�� ���Ͽ� \r\e#r���� ���丮�� �����Ͻÿ�#k.#n\r\n"
	magnus += "#L1##i"+item+"# #r#z"+item+"# #e"+count+"��#k#n�� #e"+bn+"#n ��ȯ�Ѵ�.\r\n"
	magnus += "#L2#���� ���丮�� �����Ѵ�.#r����#k�� @����..\r\n"
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
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "����Ʈ����˸��� : "+cm.getPlayer().getName()+"���� "+(cm.getClient().getChannel()+1)+"ä�ο��� "+bn+"�� ��ȯ�߽��ϴ�.")); // ���� ä�ü����˸� �޼��� 
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
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "����Ʈ����˸��� : "+cm.getPlayer().getName()+"���� "+(cm.getClient().getChannel()+1)+"ä�ο��� "+Cbn+"�� ��ȯ�߽��ϴ�.")); // ���� ä�ü����˸� �޼��� 
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

