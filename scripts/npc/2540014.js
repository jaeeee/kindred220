


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�Ҵ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2540014

	���ǽ� �̸� : �÷�Ÿ

	���ǽð� �ִ� �� : ������ ž "�� �õ�" : ���� 3�� (992003000)

	���ǽ� ���� : ����� Ž�谡


*/
importPackage(Packages.packet.creators);
importPackage(Packages.client);
importPackage(Packages.constants);
importPackage(Packages.launch.world);

var status = -1;
var itemid = 0;
var check = 0;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	cm.sendSimple("���̸��� �÷�Ÿ ����� Ž�谡 ��� �Ҹ��� �̺� ��.. ���� �̸��� #b" + cm.getPlayer().getName() + "#k..? ���� �̸��̱�.. �ʿ��� ��Ź�� �ִ� ���� ���� �赵 ������ ������ �غ��� �Ͱ� ������ ������ ���� �׷� ���� ����. �׷��� ���ε� �ʰ� #b#t4009237# 1,000 ���� #t4009238# 1,000 ��#k �� ������ ���ش���.\r\n\r\n#L0##b#t4009237# �� �ش�.\r\n#L1##t4009238# �� �ش�.");
    } else if (status == 1) {
	itemid = selection == 0 ? 4009237 : 4009238;
	check = selection == 0 ? 2  : 3;
	cm.sendGetNumber("��� ���� �ְھ�?\r\n#b(������� ������ �� #t" + itemid + "# �� ������ " + cm.getPlayer().getMap().getTheSid3Check(check) + " ����.)",1,1,1000);
	} else if (status == 2) {
	if(cm.haveItem(itemid,selection)) {
	cm.gainItem(itemid,-selection);
	cm.getPlayer().getMap().setTheSid3Check(check,selection,false);
	if(cm.getPlayer().getMap().getTheSid3Check(2) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(3) >= 1000) {
	cm.sendOk("���� ����!! ���� ���� �ߴµ� ������ �̸��� �˵��� ���ؿ��ٴ� �� ��û�� �༮�̱���!!");
	if(cm.getPlayer().getMap().getTheSid3Check(0) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(1) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(2) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(3) >= 1000) {
	cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "[�� �õ�] " + cm.getPlayer().getParty().getLeader().getName() + "���� ��Ƽ�� �� �õ� 3���� ���� �߽��ϴ�."));
	GameConstants.setTheSid(GameConstants.getTheSidTower(cm.getPlayer().getMapId()), GameConstants.getTheSidMap((GameConstants.getTheSidTower(cm.getPlayer().getMapId()) + 1)), cm.getPlayer());
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3�� �� �κ�� �̵��˴ϴ�."));
	cm.TheSidClear();
	cm.gainPartyItem(4009238,-10000);
	cm.gainPartyItem(4009237,-10000);
	}
	} else {
	cm.sendOk("���� ����!! �� �ټ����� ���� �˵鵵 ���� ��ƿ����� ��!!");
	}
	cm.dispose();
	
		}
	} else {
	cm.dispose();
	}
}
