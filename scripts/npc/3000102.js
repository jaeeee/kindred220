importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8800000; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 200; //�ʿ��� ������ ����
var map = 280030100; //���ڵ�
var bn = "����"; //�����̸�
var back = 1000000; //���ư� �� �ڵ�
var x = 7; //��ȯx��ǥ 
var y = -160; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("�̽�ƽ �������� ���׿� ħ���� �����ּ���...!\r\n\r\n(/) #r#eEASY#k#n������ ��ü�� �����Ǿ����ϴ�.\r\n(/) #r#eHARD#k#n���� ���� �̿��� �Ұ����մϴ�.\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#b#L1##b���׿� ħ�� ó��");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
				if (cm.getPlayer().getParty() == null) {
				cm.sendOk("��Ƽ�� ������ ������ �Ұ����ؿ�.");
			        cm.dispose();
			} else if (!cm.isLeader()) {
				cm.sendOk("��Ƽ���� ����������!");
				cm.dispose();
		        } else if (!cm.allMembersHere()) {
				cm.sendOk("�ٸ� ����������� ��𰣰���?");
				cm.dispose();
			} else if (cm.getClient().getChannelServer().getMapFactory().getMap(940020000).getCharactersSize() > 0) {
				cm.sendOk("�̹� �ٸ� �����밡 ħ���� �����ſ�!");
				cm.dispose();
		} else {    
		        cm.allPartyWarp(940020000, true);
	                cm.getPlayer().send(MainPacketCreator.sendHint("� ��Ÿ������ ������!",300,20));
	                cm.getPlayer().send(UIPacket.detailShowInfo("���׿��� �̽�ƽ �����鿡 ���� ħ�� ���Ͽ����ϴ�!"));
			cm.dispose();
                }

		} else if(selection == 3) {
    	    		cm.killAllMob();
			cm.dispose();

		} else if(selection == 2) {
	        if (cm.haveItem(1142354,1)){
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[ũ�ν����� �������� ����] "+ cm.getPlayer().getName()+" �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� "+bn+"�� ��ȯ�ϼ̽��ϴ�!")); // ���� ä�ü����˸� �޼��� 
	        cm.spawnMob(boss,x,y);
 		cm.spawnMob(8800003,-20,-216);
 		cm.spawnMob(8800004,-20,-216);
 		cm.spawnMob(8800005,-20,-216);
 		cm.spawnMob(8800006,-20,-216);
 		cm.spawnMob(8800007,-20,-216);
 		cm.spawnMob(8800008,-20,-216);
 		cm.spawnMob(8800009,-20,-216);
 		cm.spawnMob(8800010,-20,-216);
	        cm.dispose();
	        } else {
	        cm.sendOk("��..�ڳ״� #bũ�ν����� ������#k�� �ƴѵ�?");
	        cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


