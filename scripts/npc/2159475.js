


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	��ϸ����丮 �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000052

	���ǽ� �̸� : �밨�� ���

	���ǽð� �ִ� �� : ���ڼ� : ���� �ؾȰ� (3000100)

	���ǽ� ���� : MISSINGNO


*/

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
        cm.sendSimple("ȯ�����ϸ� �������� ���� �� �ִ� ȯ�� ����Ʈ�� ������ ��ȯ�� �����������ϴ�.\r\n#b#L0#ȯ���ϱ�\r\n#L1#ȯ�� ����Ʈ ��ȯ\r\n#L2#������ 1�� �ٲ�");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.dispose();
            cm.openNpc(9000006);
            }
        if (select == 1) {
            cm.dispose();
            cm.openNpc(9390020);
            }
        if (select == 2) {
            cm.dispose();
            cm.openNpc(2540011);
        }
    }
}
