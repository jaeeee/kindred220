var status;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else	
            status--;
        if (status == 0) {
cm.setDamageSkin("20");
cm.showMessage("������ ��Ų�� ���� �Ǿ����ϴ�.");
cm.dispose();
}
}
}