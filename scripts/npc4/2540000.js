importPackage(Packages.packet.creators);
importPackage(Packages.packet.skills);
importPackage(Packages.constants);


var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		chat = "ū���� ����!! #b�� �õ�#k�� �ر��ҷ��� ��!!\r\n\r\n";
		chat += "���� ���� �� ž�� �� #b�� �õ�#k�� ����� �༮���� �ر� ��Ű�� �־�! ";
		chat += "����� ����� �༮���� �����ϰ� #b�� �õ�#k�� �ر��� ������!!";
		chat += "\r\n\r\n#e#k<��Ƽ ����Ʈ �� �õ�>#n#k";
		chat += "\r\n#L0##b�� �õ忡 ���ؼ� ������ ����.\r\n";
		chat += "#e#k#k<�� �õ� ����>#n";
		chat += "\r\n#L2##fUI/UIWindow2.img/EvolvingSystem/BtStart/normal/0#";
		cm.sendSimple(chat);
		} else if (status == 1) {
		if(selection == 0) {
		cm.sendOk("#b�� �õ�#k �� ���ؼ��� ũ�� ���������� �ʾ� ���� ������ #bž ����#k�� �����ϰ� �Ǹ� ������ #r���͵�#k�� �ο�� �ɰž� �� #r���͵�#k�� �������ָ� �� ������ �ð��� �ʹ� ��ü�Ǹ� #r���͵�#k�� �ʹ����� �����ϰԵǴ� �ż��ϰ� Ŭ���� �������.");
		cm.dispose();
		} else if (selection == 1) {
		cm.getPlayer().send(MainPacketCreator.sendPacket("C6 01 D0"));
		cm.getPlayer().send(MainPacketCreator.���õ巩ŷ());
		cm.dispose();
		} else if (selection == 2) {
		if(cm.getParty() == null) {
		cm.sendOk("�� �õ�� ��Ƽ�θ� ������ ������.");
		cm.dispose();
		return;
		}
		if(!cm.isLeader()) {
		cm.sendOk("��Ƽ�常 �����û�� ������.");
		cm.dispose();
		return;
		}
		if(cm.getPlayerCount(992010000) > 0) {
		cm.sendOk("�̹� �ٸ� ��Ƽ�� �� �õ忡 �����߾� ��õڿ� ����.");
		cm.dispose();
		return;
		}
		if (!cm.TheSidCheck()) {
		cm.sendOk("��Ƽ���� �������� ���� �Ϸ� ���� Ƚ���� �ʰ� �ѰŰ���");
		cm.dispose();
		return;
		}
		cm.TheSidAdd();
		cm.resetMap(992010000);
		cm.resetMap(992018000);
		cm.resetMap(992030000);
		cm.resetMap(992040000);
		cm.TheSidMap(992010000,992000000,1800000);
		cm.getPlayer().getMap().startTheSid(1);
		cm.dispose();
			}		
		}
	}
}