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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
	if(cm.getPlayer().getKeyValue("belum") == "clear") {
	cm.sendSimple("������ �����ϰ� ���� ���⼭ ������!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] ������ ������ ��ȣ�� óġ (�Ϸᰡ��)#l");
	} else if(cm.getPlayer().getKeyValue("quean") == "clear") {
	cm.sendSimple("������ �����ϰ� ���� ���⼭ ������!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] ������ ������ ��ȣ�� óġ (�Ϸᰡ��)#l");
	} else if(cm.getPlayer().getKeyValue("pier") == "clear") {
	cm.sendSimple("������ �����ϰ� ���� ���⼭ ������!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] ������ ������ ��ȣ�� óġ (�Ϸᰡ��)#l");
	} else if(cm.getPlayer().getKeyValue("banban") == "clear") {
	cm.sendSimple("������ �����ϰ� ���� ���⼭ ������!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] ������ ������ ��ȣ�� óġ (�Ϸᰡ��)#l");
} 
} else if (status == 1) {
if(cm.getPlayer().getKeyValue("belum") == "clear") {
cm.sendNext("������ ���α��� ������ �ž�?");
} else if(cm.getPlayer().getKeyValue("quean") == "clear") {
cm.sendOk("������ ������ ������ �ž�?\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 357000 + 5355(���� �߰� ����ġ) exp");
} else if(cm.getPlayer().getKeyValue("pier") == "clear") {
cm.sendOk("������ ������ ������ �ž�?\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 320000 + 4800(���� �߰� ����ġ) exp");
} else if(cm.getPlayer().getKeyValue("banban") == "clear") {
cm.sendOk("������ ������ ������ �ž�?\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 320000 + 4800(���� �߰� ����ġ) exp");
}
} else if(status == 2) {
if(cm.getPlayer().getKeyValue("belum") == "clear") {
cm.sendNextS("��. �̰ɷ� ��� ������ ��ȣ�ڸ� óġ�߾�. ���� �װ� �ɷ��ִ� ���ε� ��� �������� �ž�.",2);
} else if(cm.getPlayer().getKeyValue("quean") == "clear") {
cm.sendNext("�� ���� �˾���� ����� ����� ������ ���������!");
cm.completeQuest(30011);
cm.dispose();
} else if(cm.getPlayer().getKeyValue("pier") == "clear") {
cm.sendOk("�� ���� �˾���� ����� ����� ���� ������ �� ����!");
cm.completeQuest(30010);
cm.dispose();
} else if(cm.getPlayer().getKeyValue("banban") == "clear") {
cm.sendOk("�� ���� �˾���� ����� ����� ������ ������ �� ����!");
cm.completeQuest(30009);
cm.dispose();
}
} else if (status == 3) {
cm.sendNext("��¾�� ���� ������. �� ���� �˾���� ����� ����� ���� �������� �ʾ�! ���� �ɷ��ִ� ������ ������ Ǯ�ȳ���!");
} else if (status == 4) {
cm.showEffect(false,"rootabyss/undo");
cm.completeQuest(30012);
cm.dispose();
}
}