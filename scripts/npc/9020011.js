function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var chat = "#e�ּ��̷α� .. �� �̻� ������������ . �ּ��� ~ �������� #n\r\n";
            chat += "\r\n#L0# �� ��° ����Ʈ�� �����մϴ�..";
            cm.sendSimple(chat);
        } else if (selection == 0) {
cm.spawnMob(8870000,0,0);
cm.dispose();
            
}

}
}