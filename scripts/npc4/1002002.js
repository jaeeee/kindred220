importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);



var boss = 8840000; //���� �ڵ�
var map = 272020200; //���ڵ�
var bn = "��ī�̷�"; //�����̸�
var back = 100000000; //���ư� �� �ڵ�
var x = 7; //��ȯx��ǥ 
var y = -160; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("1000���޼ҷ� "+bn+"�� ��ȯ�ϰڽ��ϱ�? \r\n\r\n#L1##r1000���޼ҷ� "+bn+" ��ȯ\r\n#l#L2#������ ����#l#k\r\n\r\n#l#L3##b������̶���Ҷ�Ŭ�����ּ���.<ų�ýý���>\r\n		(������ ����� �����ʽ��ϴ�.)#l#k\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
			cm.dispose();
		} else if (cm.getMeso() <= 10000000) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� 1000���޼Ұ� �ʿ��մϴ�.");
			cm.dispose();
		} else {    
			//WorldBroadcasting.broadcast(MainPacketCreator.getGMText(4, "����������������������::::::::["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ��ȯ�ϼ̽��ϴ�.::::::::")); // ���� ä�ü����˸� �޼��� 
			cm.gainMeso(-10000000);
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();
		} else if(selection == 3) {
    	    		cm.killAllMob();
			//WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "������������������["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ų�ý��׽��ϴ�.<��ƿ����>��������"));
			cm.dispose();
		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


