
var status = 0;
var map = 0;
function start() {
    if (cm.getPlayer().getMapId() == 221023200) { //100��
        if (cm.getMeso() >= 50000)
            cm.sendYesNo("#b50000�޼�#k �� 2��° ������ ���� �ִ� ������ ž 70������ �̵��Ͻðڽ��ϱ�?");
        else {
            cm.sendOk("�ι�° ������ ���� �ִ� ������ �����̵� �� �� �ִ� ���̴�. ������ #b50000�޼�#k ���̴� Ȱ��ȭ ��ų �� ����.");
            cm.dispose();
        }
    } else if (cm.getPlayer().getMapId() == 221022100) { //70��
        status = -1;
        map = 221023200;
        action (1,0,0);
    } else if (cm.getPlayer().getMapId() == 221021500) { //35��
        if (cm.getMeso() >= 50000) {
            cm.sendSimple("#b50000�޼�#k�� �� ������ ���� Ȱ��ȭ �� �� �ֽ��ϴ�. ��������� �̵��Ͻðڽ��ϱ�?#b\r\n#L0#�ι�° ������ �� (70��)#l\r\n#L1#�׹�° ������ �� (1��)#l");
        } else {
            cm.sendOk("�ι�°�� �׹�° ������ ���� �ִ� ������ �����̵� �� �� �ִ� ���̴�. ������ #b50000�޼�#k ���̴� Ȱ��ȭ ��ų �� ����.");
            cm.dispose();
        }
    } else if (cm.getPlayer().getMapId() == 221020000) { //1��
        if (cm.getMeso() >= 50000)
            cm.sendYesNo("#b50000�޼�#k �� 3��° ������ ���� �ִ� ������ ž 35������ �̵��Ͻðڽ��ϱ�?");
        else {
            cm.sendOk("����° ������ ���� �ִ� ������ �����̵� �� �� �ִ� ���̴�. ������ #b50000�޼�#k ���̴� Ȱ��ȭ ��ų �� ����.");
            cm.dispose();
        }
    }
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 221023200) { //100��
        if (mode < 1) {
            cm.dispose();
            return;
        } else {
            cm.gainMeso(-50000);
            cm.warp(221022100, "go00");
        }
        cm.dispose();
    } else if (cm.getPlayer().getMapId() == 221022100) { //70��
        if (mode == -1)
            cm.dispose();
        else {
            if (status >= 0 && mode == 0) {
                cm.dispose();
                return;
            }
            if (mode == 1)
                status++;
            else
                status--;
            if (status == 0) {
                if (cm.getMeso() >= 50000)
                    cm.sendSimple("#b50000�޼�#k�� �� ������ ���� Ȱ��ȭ �� �� �ֽ��ϴ�. ��������� �̵��Ͻðڽ��ϱ�?#b\r\n#L0#ù��° ������ �� (100��)#l\r\n#L1#����° ������ �� (35��)#l");
                else {
                    cm.sendOk("ù��°�� ����° ������ ���� �ִ� ������ �����̵� �� �� �ִ� ���̴�. ������ #b50000�޼�#k ���̴� Ȱ��ȭ ��ų �� ����.");
                    cm.dispose();
                }
            }
            else if (status == 1) {
                if (selection == 0)
                    cm.sendYesNo("#b50000�޼�#k �� 1��° ������ ���� �ִ� ������ ž 100������ �̵��Ͻðڽ��ϱ�?");
                else {
                    cm.sendYesNo("#b50000�޼�#k �� 3��° ������ ���� �ִ� ������ ž 35������ �̵��Ͻðڽ��ϱ�?");
                    map = 221021500;
                }
            } else if (status == 2) {
                cm.gainMeso(-50000);
                cm.warp(map, "go00");
                cm.dispose();
            }
        }
    } else if (cm.getPlayer().getMapId() == 221021500) { //35��
        if (mode < 1) {
            cm.dispose();
            return;
        } else {
            status++;
            if (status == 1) {
                if (selection == 0) {
                    cm.sendYesNo("#b50000�޼�#k �� 2��° ������ ���� �ִ� ������ ž 70������ �̵��Ͻðڽ��ϱ�?");
                    map = 221022100;
                } else {
                    cm.sendYesNo("#b50000�޼�#k �� 4��° ������ ���� �ִ� ������ ž 1������ �̵��Ͻðڽ��ϱ�?");
                    map = 221020000;
                }
            } else if (status == 2) {
                cm.gainMeso(-50000);
                cm.warp(map, "go00");
                cm.dispose();
            }
        }
    } else if (cm.getPlayer().getMapId() == 221020000) { //1��
        if (mode > 0) {
            cm.gainMeso(-50000);
            cm.warp(221021500, "go00");
        }
        cm.dispose();
    }
}