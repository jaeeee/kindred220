


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�Ҵ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2540013

	���ǽ� �̸� : ��ũ��Ÿ

	���ǽð� �ִ� �� : ������ ž "�� �õ�" : ���� 3�� (992003000)

	���ǽ� ���� : ǲ���� Ž�谡


*/
importPackage(Packages.packet.creators);
importPackage(Packages.client);
importPackage(Packages.constants);
importPackage(Packages.launch.world);

var status = -1;

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
	if(cm.getPlayer().getMap().getTheSid3Check(1) < 1000) {
	cm.sendSimple("�ȳ��ϼ���! ���� ������ Ž���� ������ ��ũ��Ÿ ��� �ؿ�!! �׷��� ���� ǲ����� �׷��� ���͸� ����ϴ°� �� ��������.. �׷��� ���ε� ���� ����ؼ� #b#t4009238##k �� 1,000 ���� �����ֽðھ��? �� ������ �ϰ�; �׷���!!\r\n\r\n#L0##b#t4009238# �� �ش�.#l");
	} else {
	cm.sendOk("�ȳ��ϼ���! ���� ������ Ž���� ������ ��ũ��Ÿ ��� �ؿ�!!");
	cm.dispose();
	}
    } else if (status == 1) {
	cm.sendGetNumber("��� ���� �ֽðھ��?\r\n#b(���� ���� ������ �� ���� ������ " + cm.getPlayer().getMap().getTheSid3Check(1) + " ������!)",1,1,1000);
	} else if (status == 2) {
	if(cm.haveItem(4009238,selection)) {
	cm.gainItem(4009238,-selection);
	cm.getPlayer().getMap().setTheSid3Check(1,selection,false);
	if(cm.getPlayer().getMap().getTheSid3Check(1) >= 1000) {
	cm.sendOk("���� ������! ���п� ������ �Ҽ��ְ� �Ǿ����!");
	if(cm.getPlayer().getMap().getTheSid3Check(0) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(1) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(2) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(3) >= 1000) {
	cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotic(6,"[�� �õ�] " + cm.getPlayer().getParty().getLeader().getName() + "���� ��Ƽ�� �� �õ� 3���� �����Ͽ����ϴ�."));
	GameConstants.setTheSid(GameConstants.getTheSidTower(cm.getPlayer().getMapId()), GameConstants.getTheSidMap((GameConstants.getTheSidTower(cm.getPlayer().getMapId()) + 1)), cm.getPlayer());
	cm.getPlayer().getMap().TheSidClear();
	cm.gainPartyItem(4009238,-10000);
	cm.gainPartyItem(4009237,-10000);
	}
	cm.dispose();
	} else {
	cm.sendOk("���� ������! ���� �˵� � ���� �����ּ���!!");
	cm.dispose();
	}
		} else {
	cm.sendOk("������ ���� �ٷ��� �ǿ常 ���ϽŰ� ���ƿ�!!");
	cm.dispose();
		}
	} else {
	cm.dispose();
	}
}
