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

	cm.sendSimple("#fUI/UIWindow2/aswan/rank/crown# #e#d���� ���̵�\r\n#L1##i3994115##L2##i3994116##L3##i3994117##L4##i3994118#\r\n#fUI/UIWindow2/AdditionalOptionTooltip/rare##L21##e#bȲ�� ��ǳ�� ŉ�� ����#n#k\r\n#L5##i3994115##L6##i3994116##L7##i3994117##L8##i3994118#\r\n#fUI/UIWindow2/AdditionalOptionTooltip/epic##L22##e#dȲ�� ��ǳ�� ŉ�� ����#n#k\r\n#L9##i3994115##L10##i3994116##L11##i3994117##L12##i3994118#\r\n#fUI/UIWindow2/AdditionalOptionTooltip/unique##L23##e#rȲ�� ��ǳ�� ŉ�� ����#n#k\r\n#L13##i3994115##L14##i3994116##L15##i3994117##L16##i3994118#\r\n#fUI/UIWindow2/AdditionalOptionTooltip/legendary##L23##e#gȲ�� ��ǳ�� ŉ�� ����");
		
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
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" ���� ��Ƽ�� "+(cm.getClient().getChannel()+1) +" ä�ο��� [EASY] ���� ���̵� �����ϼ̽��ϴ�.")); // ���� ä�ü����˸� �޼���   
                        cm.playerMessage(5, "[EASY]��� �������͸� ����ֽñ� �ٶ��ϴ�.!");
                        cm.playerMessage(5, "[EASY] ���̵� ���� : ������ �׸��� ��� ���� 1��"); 
			cm.spawnMob(8860000,0,0);
			cm.spawnMob(8870100,0,0);
			cm.spawnMob(8840007,0,0);
			cm.dispose();
                }

		} else if(selection == 5) {
                        cm.sendOk("#e#r��� ���ʹ� �ش� �ʿ� ���ÿ� ��ȯ �˴ϴ�.#n\r\n#e#g[EASY]#n �ϵ����� �븻��ī�̷� �븻�ݷ���\r\n#e#d[NORMAL]#n �ñ׳ʽ� �ϵ�ű׳ʽ� \r\n#e#b[HARD]#n ī���������� ī�����߿��� \r\n#e#r[HELL]#n ���� ī�����ݹ�");

		} else if(selection == 2) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("���� �ʿ� ������ �����ֽ��ϴ�.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" ���� ��Ƽ�� "+(cm.getClient().getChannel()+1) +" ä�ο��� [NORMAL] ���� ���̵� �����ϼ̽��ϴ�.")); // ���� ä�ü����˸� �޼���   
                        cm.playerMessage(5, "[NORMAL]��� �������͸� ����ֽñ� �ٶ��ϴ�.!");
                        cm.playerMessage(5, "[NORMAL] ���̵� ���� : ������ �ű׳ʽ� ���� 1��"); 
			cm.spawnMob(8850011,0,0);
			cm.spawnMob(8880010,0,0);
			cm.dispose();


	        }
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("���� �ʿ� ������ �����ֽ��ϴ�.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" ���� ��Ƽ�� "+(cm.getClient().getChannel()+1) +" ä�ο��� [HARD] ���� ���̵� �����ϼ̽��ϴ�.")); // ���� ä�ü����˸� �޼���   
                        cm.playerMessage(5, "[HARD]��� �������͸� ����ֽñ� �ٶ��ϴ�.!");
                        cm.playerMessage(5, "[HARD] ���̵� ���� : ������ ��Ŀ���� ���� 1��"); 
			cm.spawnMob(8920000,0,0);
			cm.spawnMob(8900000,0,0);
			cm.dispose();


	        }
		} else if(selection == 4) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("���� �ʿ� ������ �����ֽ��ϴ�.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" ���� ��Ƽ�� "+(cm.getClient().getChannel()+1) +" ä�ο��� [HELL] ���� ���̵� �����ϼ̽��ϴ�.")); // ���� ä�ü����˸� �޼���   
                        cm.playerMessage(5, "[HELL]��� �������͸� ����ֽñ� �ٶ��ϴ�.!");
                        cm.playerMessage(5, "[HELL] ���̵� ���� : ������ ���۷��� ���� 1��"); 
			cm.spawnMob(8910000,0,0);
			cm.spawnMob(8930100,0,0);
			cm.dispose();


	        }


		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


