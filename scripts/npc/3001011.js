


/*

���Ⱝȭ ��ũ��Ʈ
copyright.c class_adm@nate.com


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
        cm.sendSimple("#r��ȭ�ý���#k�� ���⸦ ��ȭ�� �� �ý����̾�.\r\n�ʿ��� �������� #i4001109#��.\r\n #r#e�Ƹ´�! #i4001163#�̰������� ���Ⱑ �����°� �������־�!\r\n������, ������ �������� ȯ�������� �������̵带 �ؾ���.#k\r\n\r\n#L0#��ȭ�ý��� �̿��ϱ�#l");
    } else if (status == 1) {
	cm.sendSimple("��ȭ�� �ϰ���� ���⸦ ����!\r\n" + cm.getWeaponEquip());
    } else if (status == 2) {
        se = cm.getEquip(selection);
        cm.sendYesNo("�ϰ� ������ �������� ���� �Ʒ��� ������ Ȯ���غ� ������ �Ҳ���?\r\n#b#i" + se.getItemId() + "#");  
    } else if (status == 3) {
	cm.soonsak(se);
    }
}
