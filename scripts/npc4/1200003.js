var price;
var status = -1;

function start() {
    if (cm.getJobId() > 0 && cm.getJobId() <= 910 || cm.getJobId() > 1000 && cm.getJobId() <= 1512 || cm.getJobId() > 2000) {
        price = 800;
    } else {
        price = 80;
    }
    if (!cm.haveItem(4032338)) {
        cm.sendYesNo("Ȥ�� ������ �������� �ž�? �� �踦 Ÿ�� ���丮�� ���Ϸ����� #b�����ױ�#k���� ������ �� �� �ֱ� �ѵ�... #b��� "+ price +"#k�޼Ҹ� ���� ��. �����ױ��� ���ھ�?");
    } else {
        cm.sendNext("Ȥ�� ������ �������� �ž�? �� �踦 Ÿ�� ���丮�� ���Ϸ����� #b�����ױ�#k���� ������ �� �� �־�. ����� 800�޼��ε�... ���? �װ� ������ �����ݾ�?");
    }
}

function action(mode, type, selection){
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == -1) {
            cm.sendNext("�� ������ ������ ����.");
            cm.dispose();	
        }
        if (mode == 0 && status == 0) {
            cm.sendNext("�������� �ؾ� �� ���� ���� �������? �˾Ҿ�. ������ ������ �ִٸ� �¿��� �� �״ϱ�, ���߿� �ٽ� �����.");
            cm.dispose();	
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMeso() >= price && !cm.haveItem(4032338)) {
                cm.gainMeso(-price);
                cm.TimeMoveMap(200090071, 104000000, 60);
                cm.dispose();
            } else if (cm.getMeso() < price && !cm.haveItem(4032338)) {
                cm.sendNext("����~ �������� �츮 �踦 Ÿ���� �ϳ�? �踦 Ÿ���� ���� ���� �����~!");
                cm.dispose();	
            } else {
                cm.sendAcceptDecline("������ ������ ���� ����̶�� ��¥�� �¿��� �� ����. ��, �׷� �ٷ� �����ױ��� ����ϰھ�?");
            }
        } else if (status == 1) {
            if (cm.haveItem(4032338)) {
                cm.TimeMoveMap(200090071, 104000000, 60);
                cm.dispose();
            }
        }
    }
}

