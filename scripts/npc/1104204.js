importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8880000; //���� �ڵ�
var item = 4033113; //
var count = 210; // �ʿ��� ������ ����2
var map = 401060100; //���ڵ�
var bn = "�ű׳ʽ�"; //�����̸�
var back = 100000000; //���ư� �� �ڵ�
var x = 2431; //��ȯx��ǥ 
var y = -1300; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {
	var magnus = "#e������ ����#n�� ���� ���� ȯ���մϴ�. ���� #e�ű׳ʽ�#n�Դϴ�.\r\n"
	magnus += "#L1##i"+item+"# #r#z"+item+"##k #e"+count+"#n���� #e"+bn+"#n�� ��ȯ�Ѵ�.\r\n"
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
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "������ȯ�˸��� : "+cm.getPlayer().getName()+"���� "+(cm.getClient().getChannel()+1)+"ä�ο��� "+bn+"�� ��ȯ�߽��ϴ�.")); // ���� ä�ü����˸� �޼���
			cm.gainItem(item,-count);
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
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


