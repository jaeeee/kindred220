
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        if (cm.getPlayer().getKeyValue("mapleWarriorbook_received") == null && cm.getPlayer().getLevel() >= 121) {
            if (!cm.haveItem(4000613, 600)) {
                cm.sendOk("#b#i4000613##t4000613##k 600���� ��ƴ� �ּ���..!! �׷�... ���� ... ���� �����ؿ�..������ �帱�Կ�..");
                cm.dispose();
                return;
            } else {
                if (!cm.canHold(2280003)) {
                    cm.sendOk("�κ��丮 ������ �����ؿ�...!!");
                    cm.dispose();
                    return;
                }
                cm.gainItem(4000613, -600);
                cm.gainItem(2280003, 1);
                cm.getPlayer().setKeyValue("mapleWarriorbook_received", "1");
                cm.sendOk("����... �� �����̿���. �Һ����� Ȯ�����ּ���.");
                WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "[����] "+cm.getPlayer().getName()+"���� [������ ���] ��ų�� ����Ʈ�� �ϼ��ϼ̽��ϴ�!"));
                cm.dispose();
                return;
            }
        } else {
            cm.sendOk("....��½...");
        }
        cm.dispose();
        return;
    }
}
