


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�޸������� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1064004

	���ǽ� �̸� : �Ϻ�

	���ǽð� �ִ� �� : ��Ÿ�� : �Ŵ��� �Ѹ� (105200000)

	���ǽ� ���� : �������


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
        cm.sendSimple("������ ��ȣ�ڵ��� ������ ���ؼ� #b��񳪹� ����#k�� �ʿ��Ѱ� �˰��ֳ�?\r\n\r\n#L0##b#i4033611##z4033611#�� 400,000�޼ҷ� ����");
    } else if (status == 1) {
	if (selection == 0) {
		if (cm.getMeso() >= 400000) {
			cm.gainItem(4033611,1);	
			cm.gainMeso(-400000);
			cm.sendOk("�������� �� ã�ƿ� �ְԳ�");
			cm.dispose();
		} else {
			cm.sendOk("�޼ҵ� ���µ� ��񳪹� ���踦 ����� �Ѱǰ�?");
			cm.dispose();
		}
	}
	}
}
