importPackage(Packages.packet.creators);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.askAcceptDecline("������ �����ø� ����ŷ�� #b���뿡 ��!#k �ϰ� �����ϴ�~!\r\n���� �ٷ� ����ŷ�� ����Ͻðھ��?\r\n\r\n#r(��� ��� �������� �κ��丮���� ������ϴ�.)#k");
    } else if (status == 1) {
        cm.gainItem(5680222, -1);
        cm.getPlayer().updateInfoQuest(26544, "c=1;0=0");
        cm.sendNext("§~����ŷ�� ���뿡 �����Ǿ����.\r\n���â(����ŰE)�� #bĳ����#k�� ���� #fUI/UIWindow4.img/Equip/Cash/BtShop/normal/0# �� ���� ������ ����ŷ�� Ȯ���Ͻ� �� �ִ�ϴ�.\r\n\r\n���� �ٷ� ����ŷ�� �ź��� ����� ����� ������~");
        cm.dispose();
    }	
}


