


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	�ɳ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2110005

	���ǽ� �̸� : ��Ÿ �ý�

	���ǽð� �ִ� �� : ���׷ε� : �Ƹ���Ʈ �Ϲ� �� (260020000)

	���ǽ� ���� : MISSINGNO


*/

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
        if (cm.getPlayer().getMapId() == 260020000) {
            cm.sendYesNo("#b100000�޼�#k�� �����ϰ� ��������3���� ���ðڽ��ϱ�?");
        }
        if (cm.getPlayer().getMapId() == 260020700) {
            cm.sendYesNo("#b100000�޼�#k�� �����ϰ� �Ƹ���Ʈ �Ϲ� ������ ���ðڽ��ϱ�?");
        }
    } else if (status == 1) {
        if (cm.getPlayer().getMapId() == 260020000) {
            if (cm.getPlayer().getMeso() >= 100000) {
                cm.warp(260020700);
                cm.gainMeso(-100000);
                cm.dispose();
            } else {
                cm.sendOk("���... �޼Ұ� �����Ͻŵ���!");
                cm.dispose();
                return;
            }
        } else if (cm.getPlayer().getMapId() == 260020700) {
            if (cm.getPlayer().getMeso() >= 100000) {
                cm.warp(260020000);
                cm.gainMeso(-100000);
                cm.dispose();
            } else {
                cm.sendOk("���... �޼Ұ� �����Ͻŵ���!");
                cm.dispose();
                return;
            }
        }
    }
}
