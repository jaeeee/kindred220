importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8880000; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 1000; //�ʿ��� ������ ����
var map = 401060200; //���ڵ�
var bn = "�ű׳ʽ�"; //�����̸�
var back = 1000000; //���ư� �� �ڵ�
var x = 7; //��ȯx��ǥ 
var y = -200; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("(������ ���� �� �����Ű���)");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ��ȯ�ϼ̽��ϴ�!")); // ���� ä�ü����˸� �޼��� 
			cm.gainItem(item,-count);
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


