importPackage(Packages.client.items);
var status = -1;
var jessicaj = new Array(15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
var jessicarebirth = new Array(20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);

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
var chat = "������ ������ ���ϴ°�?\r\n";
chat += "�׷��ٸ� #b���� ����Ʈ#k�� ������ ������ ã�ƺ��°� �?\r\n\r\n";
chat += "#e#r���� �������� ���� ����Ʈ : #k" + cm.getPlayer().getGP() + "\r\n";
chat += "#r#e���� ������ ���Ǹ� ����Ʈ : #k" + cm.getPlayer().getSpiritp() + "\r\n";
chat += "\r\n#e<���� �ȳ�>#n#b\r\n";
chat += "\r\n	��������Ʈ�� ������ �������� ȹ�� ���� �մϴ�.\r\n";
chat += "	������ �ϱ����ؼ� [500 ���� ����Ʈ]�� �ʿ��մϴ�.\r\n";
chat += "	������ �����ÿ��� AP�� ���Ǹ�����Ʈ�� ȹ�� �մϴ�.\r\n";

cm.sendYesNo(chat);
} else if (status == 1) {
if(cm.getPlayer().getGP() >= 500) {
var jessica = jessicaj[Math.floor(Math.random() * jessicaj.length)];
var jessica2 = jessicarebirth[Math.floor(Math.random() * jessicarebirth.length)];
var Jessica = cm.getPlayer().getSpiritp() + jessica2;
cm.gainAp(jessica);
cm.getPlayer().gainGP(-500);
cm.getPlayer().addSpiritPoint(jessica2);
cm.sendOk("#bAbillit Points + " + jessica + "\r\n���Ǹ� ����Ʈ + " + jessica2 + "\r\n���Ǹ� ����Ʈ �հ� : " + cm.getPlayer().getSpiritp() + "\r\n\r\n#r����#k �Ѱ��� �����Ѵ�.");
cm.dispose();
} else {
cm.sendOk("���� ����Ʈ�� Ȯ���� ���ִ°ǰ�?");
cm.dispose();
}
} else {
cm.dispose();
}
}
}