importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(java.awt);
importPackage(Packages.client);
importPackage(Packages.server.life);
importPackage(Packages.main.world);
importPackage(Packages.tools.RandomStream);

var boss = 9300600; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 200; //�ʿ��� ������ ����
var map = 940020000; //���ڵ�
var bn = "��Ÿ�� ħ��"; //�����̸�
var back = 1000000; //���ư� �� �ڵ�
var x = 2553; //��ȯx��ǥ 
var y = 29; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#e#r�����Ʒ���#n#b�� ���� �Ͻñ��� #n#e#r����#n#b�� �о��ּ���.\r\n#L5##e#r����\r\n#L1##fUI/UIWindow2/aswanStart/BtEasy/normal/0#\r\n#L2##fUI/UIWindow2/aswanStart/BtNormal/normal/0#\r\n#L3##fUI/UIWindow2/aswanStart/BtHard/normal/0#\r\n#L4##fUI/UIWindow2/aswanStart/BtHell/normal/0#");
		
		} else if(status == 1) {
                if (cm.getPlayer().getParty() == null) {
					cm.sendOk("��Ƽ ������ ������...");
					cm.dispose();
					return;
				}
				if (!cm.allMembersHere()) {
					cm.sendOk("ȥ�ڼ��� ���� �ƴұ��..?");
					cm.dispose();
					return;
				}
				if (!cm.isLeader()) {
					cm.sendOk("�ٸ� ������ ���� �غ��ô°� �����?");
					cm.dispose();
					return;
				}
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("���� �ʿ� ������ �����ֽ��ϴ�.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" ���� ��Ƽ�� "+(cm.getClient().getChannel()+1) +" ä�ο��� [EASY] ���� �Ʒ����� �����ϼ̽��ϴ�.")); // ���� ä�ü����˸� �޼���   
                        cm.playerMessage(5, "[EASY]��� �������͸� ����ֽñ� �ٶ��ϴ�.!");
                        cm.playerMessage(5, "[EASY] ���̵� ���� : ������ �׸��� ��� ���� 1��"); 
			cm.spawnMob(8950001,3800,45);
			cm.spawnMob(8950002,3800,45);
			cm.dispose();
                }

		} else if(selection == 5) {
                        cm.sendOk("#e#r��� ���ʹ� �ش� �ʿ� ���ÿ� ��ȯ �˴ϴ�.#n\r\n#e#g[EASY]#n �ϵ����� �븻��ī�̷� �븻�ݷ���\r\n#e#d[NORMAL]#n �ñ׳ʽ� �ϵ�ű׳ʽ� \r\n#e#b[HARD]#n ī���������� ī�����߿��� \r\n#e#r[HELL]#n ���� ī�����ݹ�");

		} else if(selection == 2) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("���� �ʿ� ������ �����ֽ��ϴ�.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" ���� ��Ƽ�� "+(cm.getClient().getChannel()+1) +" ä�ο��� [NORMAL] ���� �Ʒ����� �����ϼ̽��ϴ�.")); // ���� ä�ü����˸� �޼���   
                        cm.playerMessage(5, "[NORMAL]��� �������͸� ����ֽñ� �ٶ��ϴ�.!");
                        cm.playerMessage(5, "[NORMAL] ���̵� ���� : ������ �ű׳ʽ� ���� 1��"); 
			cm.spawnMob(8850011,3800,45);
			cm.spawnMob(8880010,3800,45);
			cm.dispose();


	        }
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("���� �ʿ� ������ �����ֽ��ϴ�.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" ���� ��Ƽ�� "+(cm.getClient().getChannel()+1) +" ä�ο��� [HARD] ���� �Ʒ����� �����ϼ̽��ϴ�.")); // ���� ä�ü����˸� �޼���   
                        cm.playerMessage(5, "[HARD]��� �������͸� ����ֽñ� �ٶ��ϴ�.!");
                        cm.playerMessage(5, "[HARD] ���̵� ���� : ������ ��Ŀ���� ���� 1��"); 
			cm.spawnMob(8920000,3800,45);
			cm.spawnMob(8900000,3800,45);
			cm.dispose();


	        }
		} else if(selection == 4) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("���� �ʿ� ������ �����ֽ��ϴ�.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" ���� ��Ƽ�� "+(cm.getClient().getChannel()+1) +" ä�ο��� [HELL] ���� �Ʒ����� �����ϼ̽��ϴ�.")); // ���� ä�ü����˸� �޼���   
                        cm.playerMessage(5, "[HELL]��� �������͸� ����ֽñ� �ٶ��ϴ�.!");
                        cm.playerMessage(5, "[HELL] ���̵� ���� : ������ ���۷��� ���� 1��"); 
			cm.spawnMob(8910000,3800,45);
			cm.spawnMob(8930100,3800,45);
			cm.dispose();


	        }


		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


