importPackage(Packages.packet.creators);
importPackage(Packages.launch);

var status = 0;
var sel;

function start() {
    cm.sendSimple("������ �����ٱ�?\r\n#b#L0#��带 ����� �;��.#l\r\n#L1#��带 ��ü�ϰ� �;��.#l\r\n#L2#��� �ο����� �ø��� �;��.#l\r\n#L3#��忡�� Ż���ϰ� �;��.#l");
}

function action(mode, type, selection) {
    if (mode == -1 || (mode == 0 && status < 2)) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            sel = selection;
            if (selection == 0) {
                if (cm.getPlayer().getGuildId() > 0) {
                    cm.sendOk("�̹� ��尡 �ִ±�. ��带 ��ü�ϰ� ������ Ż���ϰ� ���Գ�.");
                    cm.dispose();
                } else
                    cm.sendYesNo("��! ��带 ����Ϸ� �Ա�... ��带 ����Ϸ��� #b150�� �޼�#k�� �ʿ��ϴٳ�. �غ�� �Ǿ����� ���̶� �ϰڳ�. ��~ ��带 ����ڴ°�?");
            } else if (selection == 1) {
                if (cm.getPlayer().getGuildId() < 1 || cm.getPlayer().getGuildRank() != 1) {
                    cm.sendOk("����常�� ��带 ��ü�� �� �ִٳ�.");
                    cm.dispose();
                } else {
                    cm.sendYesNo("��带 ���� ��ü�ϰ� ������?  �̷�...�̷�...  �ѹ� ��ü�� �ع����� �ڳ��� ���� ������ �����Ǿ�����ٳ�. �������� ��� Ư�ǵ� ���� �Բ� �������. �׷��� �ϰڴ°�?");
		}
            } else if (selection == 2) {
                if (cm.getPlayer().getGuildId() < 1 || cm.getPlayer().getGuildRank() != 1) {
                    cm.sendOk("����常�� ��带 Ȯ���� �� �ִٳ�.");
                    cm.dispose();
                } else {
                    cm.sendYesNo("���� ���� #b5#k�� Ȯ���ϴµ� #b500�� �޼�#k�� ��ٳ�, ���ٰ�?");
		}
            } else if (selection == 3) {
//		cm.getPlayer().getClient().getSession().write(MainPacketCreator.showGuildInfo(null));
//		cm.getPlayer().setGuildId(0);
//		cm.getPlayer().saveGuildStatus();
//		cm.getPlayer().getMap().broadcastMessage(cm.getPlayer(), MainPacketCreator.removePlayerFromMap(cm.getPlayer().getId()), false);
//		cm.getPalyer().getMap().broadcastMessage(cm.getPlayer(), MainPacketCreator.spawnPlayerMapobject(cm.getPlayer(),cm.getPlayer().getSoulSkillId()), false);
                ChannelServer.leaveGuild(cm.getPlayer().getMGC());
		cm.dispose();
            }
        } else if (status == 2) {
            if (sel == 0 && cm.getPlayer().getGuildId() <= 0) {
                cm.genericGuildMessage(3);
            } else if (cm.getPlayer().getGuildId() > 0 && cm.getPlayer().getGuildRank() == 1) {
                if (sel == 1) {
                    cm.disbandGuild();
                } else if (sel == 2) {
                    cm.increaseGuildCapacity();
                }
            }
            cm.dispose();
        }
    }
}
