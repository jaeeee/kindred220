importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8840000; //���� �ڵ�
var item = 4310059; //�ʿ��� ������ �ڵ�
var count = 1; //�ʿ��� ������ ����
var map = 211070100; //���ڵ�
var bn = "�� ����"; //�����̸�
var back = 100000000; //���ư� �� �ڵ�
var x = -205; //��ȯx��ǥ
var y = -181; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#i"+item+"# #r"+count+"��#k�� "+bn+"�� ���� ��ȯ�ϰڴ°�..?  \r\n\r\n#L1##r#i"+item+"# #r"+count+"��#k�� "+bn+" ��ȯ\r\n#l#L2#������ ����#l#k\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
 if (cm.getMonsterCount(211070100) > 0) {
			cm.sendOk("��� ���͸� �����Ű�� ���ƿ��Ŷ�....");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ���� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��ϴ�. ������ ��.");
			cm.dispose();
		} else {     
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "::::::::["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� �ݷ��� �� ��ȯ�ϼ̽��ϴ�.::::::::")); 
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


