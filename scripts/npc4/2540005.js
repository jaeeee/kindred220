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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
	if(cm.getPlayer().getMapId() == 992010000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("�Ŵ� �Ẕ́��� óġ�ϴٴ� �� ���� ���ϱ���!!");
	cm.dispose();
	return;
	}
	cm.sendSimple("������� �� ���־��� ���� ����!! ������ �� �õ�� ���⼭ ���̾ƴϾ� #b" + cm.getPlayer().getName() + "#k �ʰ� ���Ѵٸ� ���� ���������� �����ټ��� �־� ������ ������ ������ ���� �κ�� �����ֵ��� ���ٲ� ��� �ҷ�?\r\n\r\n#L0##b�κ�� ���ư���.\r\n#L1#���� ������ �ö󰣴�.#l");
	} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3�ʵ� �κ�� �̵��˴ϴ�."));
	cm.getPlayer().getMap().TheSidClear(10,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		} else if (selection == 1) {
	cm.allPartyWarp(992018000,true);
	cm.getPlayer().getMap().startTheSid(5);
	cm.dispose();
			}
		}
	} else if (cm.getPlayer().getMapId() == 992018000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("��ö �����۱��� óġ�ϴٴ� �� ���� ���ϱ���!!");
	cm.dispose();
	return;
	}
	cm.sendSimple("������� �� ���־��� ���� ����!! ������ �� �õ�� ���⼭ ���̾ƴϾ� #b" + cm.getPlayer().getName() + "#k �ʰ� ���Ѵٸ� ���� ���������� �����ټ��� �־� ������ ������ ������ ���� �κ�� �����ֵ��� ���ٲ� ��� �ҷ�?\r\n\r\n#L0##b�κ�� ���ư���.\r\n#L1#���� ������ �ö󰣴�.#l");
		} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3�ʵ� �κ�� �̵��˴ϴ�."));
	cm.getPlayer().getMap().TheSidClear(20,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		} else if (selection == 1) {
	cm.allPartyWarp(992030000,true);
	cm.getPlayer().getMap().startTheSid(6);
	cm.dispose();
			}
		}
	} else if(cm.getPlayer().getMapId() == 992030000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("�̿� ���� ���ڱ��� óġ�ϴٴ� �� ���� ���ϱ���!!");
	cm.dispose();
	return;
	}
	cm.sendSimple("������� �� ���־��� ���� ����!! ������ �� �õ�� ���⼭ ���̾ƴϾ� #b" + cm.getPlayer().getName() + "#k �ʰ� ���Ѵٸ� ���� ���������� �����ټ��� �־� ������ ������ ������ ���� �κ�� �����ֵ��� ���ٲ� ��� �ҷ�?\r\n\r\n#L0##b�κ�� ���ư���.\r\n#L1#���� ������ �ö󰣴�.#l");
		} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3�ʵ� �κ�� �̵��˴ϴ�."));
	cm.getPlayer().getMap().TheSidClear(30,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		} else if (selection == 1) {
	cm.allPartyWarp(992040000,true);
	cm.getPlayer().getMap().startTheSid(7);
	cm.dispose();
			}
		}
	} else if (cm.getPlayer().getMapId() == 992040000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("����ƺ���� óġ�ϴٴ� �� ���� ���ϱ���!!");
	cm.dispose();
	return;
	}
	cm.sendSimple("������� �� ���־��� ���� ����!! ������ �� �õ�� ���⼭ ���̾ƴϾ� #b" + cm.getPlayer().getName() + "#k �ʰ� ���Ѵٸ� ���� ���������� �����ټ��� �־� ������ ������ ������ ���� �κ�� �����ֵ��� ���ٲ� ��� �ҷ�?\r\n\r\n#L0##b�κ�� ���ư���.\r\n#L1#���� ������ �ö󰣴�.#l");
		} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3�ʵ� �κ�� �̵��˴ϴ�."));
	cm.getPlayer().getMap().TheSidClear(40,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		} else if (selection == 1) {
	cm.allPartyWarp(992050000,true);
	cm.getPlayer().getMap().startTheSid(8);
	cm.dispose();
			}
		}
	} else if (cm.getPlayer().getMapId() == 992050000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("�� �õ带 ���� #b" + cm.getPlayer() + "#k ��� ���̶�� �ҷ��ٱ~");
	cm.dispose();
	return;
	}
	cm.sendSimple("�� �õ带 ���Ѱ� ���� ������!! ���� ��ž�� ���ϴ� ���൵ ���̳���!! �ٽ��ѹ��� ������ ������ �׸��� ����!\r\n\r\n#L0##b�κ�� ���ư���.#l");
		} else if(status == 1) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3�ʵ� �κ�� �̵��˴ϴ�."));
	cm.getPlayer().getMap().TheSidClear(50,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		}
	}
}