/*
Cosmos Project ��׾�
*/
var select = -1;

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

        if (selection == 200) {
if (cm.getPlayer().getJob() == 6100 && cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352500);
 cm.fakeRelog();
 cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getJob() == 6110 && cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352501);
 cm.fakeRelog();
 cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getJob() == 6111 && cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352502);
 cm.fakeRelog();
 cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getJob() == 6112 && cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352503);  //ī���� ����
 cm.fakeRelog();
 cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}
}
}