importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8840007; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 200; //�ʿ��� ������ ����
var map = 211070100; //���ڵ�
var bn = "�� ����"; //�����̸�
var back = 1000000; //���ư� �� �ڵ�
var x = -166; //��ȯx��ǥ 
var y = -181; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("�̰��� �� ������ �����Դϴ� �ߺ� ������ �Ϸ����˳��� ��.\r\n#L1##b�� ���� ��ȯ#L2#ũ�ν����� �������� ����\r\n#L3##b���̶�� �޼����� �ݺ��ɽ� Ŭ��<ų�ýý���>");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ� �մϴ�. �ߺ�");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�. �ߺ�");
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
	        cm.sendOk("�ߺ�! ����� #bũ�ν����� ������#k�� �ƴմϴ�. ��");
	        cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


