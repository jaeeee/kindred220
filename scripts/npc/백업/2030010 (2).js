importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(java.util);
importPackage(Packages.client.stats);


//var boss = 8860000; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 100; //�ʿ��� ������ ����
var map = 280030100; //���ڵ�
var bn = "����"; //�����̸�
var back = 100000000; //���ư� �� �ڵ�
//var x = 7; //��ȯx��ǥ 
//var y = -160; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("�ڳ�, ������ �������°ǰ�?\r\n#L1##b������ ��ȯ�Ѵ�.\r\n\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("������ ��ȯ�Ϸ��� ��ǳ�� 100���� �ʿ��ϴٳ�.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(4, "["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ��ȯ�ϼ̽��ϴ�!")); // ���� ä�ü����˸� �޼��� 
			cm.gainItem(item,-count);
 			cm.spawnMob(8800000,-20,-216);
 			cm.spawnMob(8800003,-20,-216);
 			cm.spawnMob(8800004,-20,-216);
 			cm.spawnMob(8800005,-20,-216);
 			cm.spawnMob(8800006,-20,-216);
 			cm.spawnMob(8800007,-20,-216);
 			cm.spawnMob(8800008,-20,-216);
 			cm.spawnMob(8800009,-20,-216);
 			cm.spawnMob(8800010,-20,-216);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0){
    	    		cm.killAllMob();
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� óġ�ϼ̽��ϴ�!"));
			cm.dispose();
			}else {
			cm.sendOk("���� �Ѹ����� ��ȯ�Ǿ� ���� �ʾ�.");
			}
		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


