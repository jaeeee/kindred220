


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�Ҵ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2540012

	���ǽ� �̸� : ���ø�

	���ǽð� �ִ� �� : ������ ž "�� �õ�" : ���� 3�� (992003000)

	���ǽ� ���� : �λ���� Ž�谡


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
	if(cm.getPlayer().getMap().getTheSid3Check(0) < 1000) {
	cm.sendSimple("ũ��... ������ �ʰ� �Ǽ��� �ؼ� ��ġ�⳪ �ϰ�.. ���� ��Ź�� ����ټ� ������? ���� ���� ��ô ��Ⱑ ���� �׷��� ������ #b#t4009237##k �� 1,000�� ���� ������ ���� �ʰھ�?\r\n\r\n#L0##b#t4009237# �� �ش�.#l");
	} else {
	cm.sendOk("ũ��... ������ �ʰ� �Ǽ��� �ؼ� ��ġ�⳪ �ϰ�..");
	cm.dispose();
	}    
} else if (status == 1) {
//"��� ���� �ְھ�?\r\n#b(���� ���� ������ �� ���� ������ " + cm.getPlayer().getMap().getTheSid3Chcek(0) + "�� ��)"
	cm.sendGetNumber("��� ���� �ְھ�?\r\n#b���� ���� ������ �� ���� ������ " + cm.getPlayer().getMap().getTheSid3Check(0) + " ����.",1,1,1000);
	} else if (status == 2) {
	if(cm.haveItem(4009237,selection)) {
	cm.gainItem(4009237,-selection);
	cm.getPlayer().getMap().setTheSid3Check(0,selection,false);
	if(cm.getPlayer().getMap().getTheSid3Check(0) >= 1000) {
	cm.sendOk("���� ����! ���п� ��Ҿ�.");
	if(cm.getPlayer().getMap().getTheSid3Check(0) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(1) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(2) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(3) >= 1000) {
	cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotic(6,"[�� �õ�] " + cm.getPlayer().getParty().getLeader().getName() + "���� ��Ƽ�� �� �õ� 3���� �����Ͽ����ϴ�."));
	GameConstants.setTheSid(GameConstants.getTheSidTower(cm.getPlayer().getMapId()), GameConstants.getTheSidMap((GameConstants.getTheSidTower(cm.getPlayer().getMapId()) + 1)), cm.getPlayer());
	cm.getPlayer().getMap().TheSidClear();
	cm.gainPartyItem(4009238,-10000);
	cm.gainPartyItem(4009237,-10000);
	}
	} else {
	cm.sendOk("���� ����! ��ģ �������ؼ�.. ������ ���ѳ༮�̱���!");
	cm.dispose();
	}
	cm.dispose();
	} else {
	cm.sendOk("������ �ٷ��� ������ ��� ���� ������..");
	cm.dispose();
		}
	} else {
	cm.dispose();
	}
}
