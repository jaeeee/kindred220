
var price;
var status = 0;

function start() {
    if (cm.getJobId() > 0 && cm.getJobId() <= 910 || cm.getJobId() > 1000 && cm.getJobId() <= 1512 || cm.getJobId() > 2000) {
        price = 800
    } else {
        price = 80;
    }
    cm.sendYesNo("Ȥ�� ���丮�� ���Ϸ��带 ���� �츮 ������ �� �����̾�? �� �踦 Ÿ�� #b����#k���� ������ �� �� �ֱ� �ѵ�... #b��� "+ price +"#k�޼Ҹ� ���� ��. �������� ���ھ�?");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.sendNext("��... �� ������ ������ ��¿ �� ����. �ΰ����Դ� �� ô�������� ��Ͽ��Դ� �� ���� �����ε�...");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        switch(status) {
            case 1:
            if (cm.getMeso() >= price) {
                cm.gainMeso(-price);
                cm.TimeMoveMap(200090060, 140020300, 60);
                cm.dispose();
            } else {
                cm.sendNext("����~ �������� �츮 �踦 Ÿ���� �ϳ�? �踦 Ÿ���� ���� ���� �����~!");
                cm.dispose();	
            }
        }
    }
}

