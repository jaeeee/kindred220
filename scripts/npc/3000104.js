importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8880010; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 500; //�ʿ��� ������ ����
var map = 401060200; //���ڵ�
var bn = "�ű׳ʽ�"; //�����̸�
var back = 1000000; //���ư� �� �ڵ�
var x = 2381; //��ȯx��ǥ 
var y = -1347; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("�� ���� �ű׳ʽ��� ����, ���� �������������.\r\n#L1##fUI/UIWindow2/aswanStart/BtEasy/normal/0\r\n\r\n#L3##b���̶�� �޼����� �ݺ��ɽ� Ŭ��#k<ų�ýý���>\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list2\r\n\r\n\r\n#L8##b�ű׳ʽ��� ����#k");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ��մϴ�.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"(EASY)�� ��ȯ�ϼ̽��ϴ�!")); // ���� ä�ü����˸� �޼��� 
			cm.gainItem(item,-count);
			cm.spawnMob(boss,x,y);
			cm.dispose();
                }

		} else if(selection == 3) {
    	    		cm.killAllMob();
			cm.dispose();

		} else if(selection == 7) {
    	    		cm.sendOk("�غ����� �������Դϴ�, ���Ҿ� �����е��� �ǰ��� �ް��ֽ��ϴ�. ī�信 �ִ� �������忡 �����е��� �ǰ��� �����ּ���!");
			cm.dispose();

		} else if(selection == 8) {
    	    		cm.sendOk("�غ����� �������Դϴ�, ���Ҿ� �����е��� �ǰ��� �ް��ֽ��ϴ�. ī�信 �ִ� �������忡 �����е��� �ǰ��� �����ּ���!");
			cm.dispose();

		} else if(selection == 5) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ��մϴ�.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"(HELL)�� ��ȯ�ϼ̽��ϴ�!"));
			cm.gainItem(item,-count);
			cm.spawnMob(8880002,2381,-1347);
			cm.dispose();
                }

		} else if(selection == 6) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ��մϴ�.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(7, "["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"(HELL)�� ��ȯ�ϼ̽��ϴ�!")); 
			cm.gainItem(item,-count);
			cm.spawnMob(8880010,2381,-1347);
			cm.dispose();
                }

		} else if(selection == 2) {
	        if (cm.haveItem(1142354,1)){
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[ũ�ν����� �������� ����] "+ cm.getPlayer().getName()+" �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ��ȯ�ϼ̽��ϴ�!")); // ���� ä�ü����˸� �޼��� 
	        cm.spawnMob(boss,x,y);
	        cm.dispose();
	        } else {
	        cm.sendOk("����� #bũ�ν����� ������#k�� �ƴմϴ�.");
	        cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


