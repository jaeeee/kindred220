importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8900000; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 400; //�ʿ��� ������ ����
var map = 105200610; //���ڵ�
var bn = "ī���� �ǿ���"; //�����̸�
var back = 1000000; //���ư� �� �ڵ�
var x = -181; //��ȯx��ǥ 
var y = -100; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("�ȳ��ϼ���. #b��Ƽ��#k����մϴ�. �ǿ����� ��ȯ�ϰ�����Űǰ���? #b(4�� ��Ƽ ����)#k\r\n#L1##bī���� �ǿ��� ��ȯ#L2#ũ�ν����� �������� ����\r\n#L3#���̶�� �޼����� �ݺ��ɽ� Ŭ��<ų�ýý���>");
		
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

		} else if(selection == 3) {
    	    		cm.killAllMob();
			cm.dispose();

		} else if(selection == 2) {
	        if (cm.haveItem(1142354,1)){
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[ũ�ν����� �������� ����] "+ cm.getPlayer().getName()+" �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ��ȯ�ϼ̽��ϴ�!")); // ���� ä�ü����˸� �޼��� 
	        cm.spawnMob(boss,x,y);
	        cm.dispose();
	        } else {
	        cm.sendOk("��Ÿ������ #bũ�ν����� ������#k�� �ƴϽʴϴ�.");
	        cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


