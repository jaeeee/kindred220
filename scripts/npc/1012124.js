importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


//var boss = 8920000; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 5; //�ʿ��� ������ ����
var map = 105200310; //���ڵ�
var bn = "ī���� ���� ��"; //�����̸�
var back = 100000000; //���ư� �� �ڵ�
var x = 70; //��ȯx��ǥ 
var y = 135; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#i"+item+"# #r"+count+"��#k�� "+bn+"�� ��ȯ�ϰڽ��ϱ�? \r\n\r\n#L1##r#i"+item+"# #r"+count+"��#k�� "+bn+" ��ȯ\r\n#l#L2#������ ����#l#k\r\n\r\n#l#L3##b������̶���Ҷ�Ŭ�����ּ���.<ų�ýý���>\r\n		(������ ����� �����ʽ��ϴ�.)#l#k\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(4, "����������������������::::::::["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ��ȯ�ϼ̽��ϴ�.::::::::")); // ���� ä�ü����˸� �޼��� 
			cm.gainItem(item,-count);
 			cm.spawnMob(8920000,70,135);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0){
    	    		cm.killAllMob();
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "������������������["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ų�ý��׽��ϴ�.<��ƿ����>��������"));
			cm.dispose();
			}else {
			cm.sendOk("���� �Ѹ����� ��ȯ�Ǿ� ���� �ʽ��ϴ�.");
			}
		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


