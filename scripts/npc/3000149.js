


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Aeos Development Source Script

	�빫�� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 10204

	���ǽ� �̸� : ī�̸�

	���ǽð� �ִ� �� :  :  (680000000)

	���ǽ� ���� : ���� ������


*/

var status = -1;
var se;

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
        cm.sendSimple("#r�Ӽ��ý���#k�� ���⿡ �Ӽ��� �ٸ� �� �ִ� �ý����̾�.\r\n�Ӽ��� #b����,����,���,����,���ο�,��#k �� 6������ �־�.\r\n�Ӽ� �ý����� �̿��� #b100���޼�#k �ʿ��� �������� #i4001163#��.\r\n\r\n#L0#�Ӽ��ý��� �̿��ϱ�#l");
    } else if (status == 1) {
	cm.sendSimple("�Ӽ��� �ְ���� ���⸦ ����!" + cm.getWeaponEquip());
    } else if (status == 2) {
        se = cm.getEquip(selection);
        cm.sendYesNo("�ϰ� ������ �������� ���� �Ʒ��� ������ Ȯ���غ� ������ �Ҳ���?\r\n#b#i" + se.getItemId() + "#");  
    } else if (status == 3) {
	cm.kanghwa(se);
    }
}
