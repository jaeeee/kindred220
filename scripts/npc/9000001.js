importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(java.awt);
importPackage(Packages.client);
importPackage(Packages.server.life);
importPackage(Packages.main.world);
importPackage(Packages.tools.RandomStream);

var boss = 8920100; //���� �ڵ�
var item = 4001126; //�ʿ��� ������ �ڵ�
var count = 200; //�ʿ��� ������ ����
var map = 940020000; //���ڵ�
var bn = "��Ÿ�� ħ��"; //�����̸�
var back = 1000000; //���ư� �� �ڵ�
var x = 2553; //��ȯx��ǥ 
var y = 29; //��ȯy��ǥ

var status = -1;

function timelimit(time, term) {
	var nowtime = new Date;
	var nowhour = nowtime.getHours();

	if((nowhour < time) || (nowhour > time + term)) {
		return 0;
	} else {
		return 1;
	}
}

        function start() { status = -1; action (1, 0, 0);}


function action(mode, type, selection) {
	if (mode == 0) { cm.dispose(); return; }
	if (mode == 1) { status++; }
	if (status == 0) {

	cm.sendSimple("���� ���� ����⿡ �����ϴ� �������� ���� �̺�Ʈ �Ŀ� ���ϸ����� ���޵˴ϴ�! ����⿡ �ö� �� ī�� ��ũ���� �Խ��ǿ� ���� ��ũ������ �÷��ּ���! ������ 3���� �Ŀ� ���ϸ����� ���޵˴ϴ�.\r\n\r\n#r#e��, ���� 6�� ~ ���� 9�� ���̿� �÷��߸� ����#k#n\r\n#L1##b�̺�Ʈ�� �γ��� �� �̵�");
		
		} else if(status == 1) {
		if((timelimit(18,3)) || (timelimit(18,3))) {
					cm.sendOk("�̺�Ʈ ���� �ð��� �ƴմϴ�.");
                                        dispose();
                                        return;
			cm.sendOK("�̺�Ʈ ���� �ð��� �ƴմϴ�.");	
				}
		if(selection == 1) {//��ȯ
                        cm.warp(910130102);
			cm.dispose();

		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("�����ִ� ������ ó�������ʰ� ���ϴ°���?");
			cm.dispose();
		} else {
                        cm.playerMessage(5, "��� ������ óġ �� �� ���̵��� �´� ������ ��� ��Ÿ���� ���� �� ������ ������������!");
                        cm.playerMessage(5, "HARD ���̵� ���� : �ű׳ʽ� ����");
                        cm.playerMessage(5, "��Ƽ���� ������ ������ä�� ��Ÿ������ ���� �ޱ� �޴��� Ŭ���ؾ��մϴ�.");      
			cm.spawnMob(8900000,1664,29);
			cm.spawnMob(8900001,1885,29);
			cm.spawnMob(8900002,2452,29);
			cm.spawnMob(8870000,2674,29);
			cm.spawnMob(8920000,2136,29);
			cm.dispose();
                }

		} else if(selection == 5) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("�����ִ� ������ ó�������ʰ� ���ϴ°���?");
		        cm.dispose();
			return;
			}
	                if (!cm.haveItem (4310058, 1)) {
			cm.sendOk("�ű׳ʽ� ������ ���� ������!\r\n(��Ƽ���� ���� �ϰ��־���մϴ�)");
			cm.dispose();
               	} else {
                        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "< "+(cm.getClient().getChannel()+1) +"ä�� > "+ cm.getPlayer().getName()+" ���� �����밡 ���׿� ħ���� ���� ���������� Ż���Ͽ����ϴ�! "));
                        cm.playerMessage(6, "�渱���� ������ �ް� ������ �̵��ϼ���.");    
			cm.allPartyWarp(940011000, true);
			cm.dispose();
	        }
		} else if(selection == 2) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("�����ִ� ������ ó�������ʰ� ���ϴ°���?");
			return;
			}
	                if (!cm.haveItem (4310059, 1)) {
			cm.sendOk("�׸��� ���δ� ������ ���� ������!\r\n(��Ƽ���� ���� �ϰ��־���մϴ�)");
			cm.dispose();
               	} else {
                        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "< "+(cm.getClient().getChannel()+1) +"ä�� > "+ cm.getPlayer().getName()+" ���� �����밡 ���׿� ħ���� ���� ���������� Ż���Ͽ����ϴ�! "));
                        cm.playerMessage(6, "��Ͼƿ��� ������ �ް� ������ �̵��ϼ���.");
			cm.allPartyWarp(910141110, true);  
			cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


