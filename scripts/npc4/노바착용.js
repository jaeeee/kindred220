


/*

�ɴ��� ����

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
cm.addEquip(-10, 1352500, 10, 10, 10, 10, 10, 10);  // -10, �������ڵ�, �ɼǵ�
cm.fakeRelog();
cm.updateChar();
    }
}
