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
var chat = "#e#r����#k #e#b��ų������#k#n�� ����ϰ��ִ� #e#r��� ���̾�~!#k#n ��� �մϴ�.\r\n";
chat += "#e#b��ų������#k#n�� �غ��ðھ��?\r\n\r\n";
chat += "#b[���� 100] : 1�� ��ų������\r\n";
chat += "[���� 130] : 2�� ��ų������\r\n";
chat += "[���� 150] : 3�� ��ų������\r\n";
chat += "[���� 180] : 4�� ��ų������\r\n";
chat += "[���� 190] : ������ ����\r\n";
if(cm.getPlayer().getLevel() >= 190) {
chat += "#b#L1#�� �����췹�� �� ���� �ϰڽ��ϴ�.#l\r\n";
}
if(cm.getPlayer().getLevel() >= 100) {
chat += "#b#L0# 1�� ��ų�����͸� �ϰڽ��ϴ�.#l\r\n";
} 
if(cm.getPlayer().getLevel() >= 130) {
chat += "#b#L2# 2�� ��ų�����͸� �ϰڽ��ϴ�. (WP 500 �̻�)#l\r\n";
}
if(cm.getPlayer().getLevel() >= 150) {
chat += "#b#L3# 3�� ��ų�����͸� �ϰڽ��ϴ�. (WP 1000 �̻�)#l\r\n";
}
if(cm.getPlayer().getLevel() >= 180) {
chat += "#b#L4# 4�� ��ų�����͸� �ϰڽ��ϴ�. (WP 1500 �̻�)#l\r\n";
}

cm.sendSimple(chat);
} else if (status == 1) {
if (selection == 1) {
cm.teachSkill(100001283,1,1);
cm.sendOk("#e#b�����췹��#k#n ������ �Ϸ� �Ͽ����ϴ�.");
cm.dispose();
} else if (selection == 0) {
if(cm.getJob() == 10112) {
if (cm.getPlayer().getLevel() >= 100) {
cm.sendOk("#e#b��ų������#k#n �� �Ϸ� �Ǿ����ϴ�.");
cm.getPlayer().maxskill1(10100);
cm.dispose();
}
} else {
cm.sendOk("#e#r����#k#n �������� �����մϴ�.");
cm.dispose();
}

} else if (selection == 2) {
if (cm.getPlayer().getLevel() >= 130 && cm.getPlayer().getWP() >= 500) {
cm.sendOk("#e#b��ų������#k#n �� �Ϸ� �Ǿ����ϴ�.");
cm.getPlayer().maxskill1(10110);
cm.getPlayer().setWP(cm.getPlayer().getWP() - 500);
cm.dispose();
} else {
cm.sendOk("#e#r����#k#n �������� �����մϴ�.  (wp 500 �̻�)");
cm.dispose();
}

} else if (selection == 3) {
if(cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getWP() >= 1000) {
cm.sendOk("#e#b��ų������#k#n �� �Ϸ� �Ǿ����ϴ�.");
cm.getPlayer().maxskill1(10111);
cm.getPlayer().setWP(cm.getPlayer().getWP() - 1000);
cm.dispose();
} else {
cm.sendOk("#e#r����#k#n �������� �����մϴ�.  (wp 1000 �̻�)");
cm.dispose();
}

} else if (selection == 4) {
if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getWP() >= 1500) {
cm.sendOk("#e#b��ų������#k#n �� �Ϸ� �Ǿ����ϴ�.");
cm.getPlayer().maxskill1(10112);
cm.getPlayer().setWP(cm.getPlayer().getWP() - 1500);
cm.dispose();
} else {
cm.sendOk("#e#r����#k#n �������� �����մϴ�. �Ǵ� (wp 1500 �̻�)");
cm.dispose();
}

}
} else {
cm.dispose();
}
}
