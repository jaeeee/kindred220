var status = 0;
var quest = 0;

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
if(cm.getPlayer().getQuestStatus(30008) == 1) {
cm.dispose();
} else if(cm.getPlayer().getKeyValue("ba") == "attack") {
cm.sendSimple("�ѽö� ���� �̰����� ������ �;�!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] ���� ���� ����� (�Ϸᰡ��)#l");
} else if(cm.getPlayer().getKeyValue("lutas") == "start") {
cm.sendSimple("�ѽö� ���� �̰����� ������ �;�!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] �Ŵ��� �Ѹ� Ż��2 (�Ϸᰡ��)#l");
} else if(cm.getPlayer().getKeyValue("lutat") == "start" && cm.getPlayer().getMapId() == 105010200) {
cm.sendNextS("���� �ⱸ�� �ƹ� ������ ���ݾ�? �ٽ� ���ư��߰ڴ�.",2);
cm.dispose();
} else if(cm.getPlayer().getKeyValue("lutat") == "start" && cm.getPlayer().getMapId() != 105010200) {
cm.sendSimple("�ѽö� ���� �̰����� ������ �;�!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] �Ŵ��� �Ѹ� Ż��1 (�Ϸᰡ��)#l");
} else if(cm.getPlayer().getKeyValue("luta") == "start" && cm.getQuestStatus(30002) == 0) {
cm.sendOk("�Ͼ... �Ͼ......");
cm.dispose();
} else if (cm.getQuestStatus(30002) == 1) {
cm.sendNextS("���� �ⱸ�� �־���, �ҳ࿡�� �ⱸ�� �ִٰ� ������߰ڴ�.",2);
} else {
cm.dispose();
}
} else if (status == 1) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
cm.sendOk("��,#b" + cm.getPlayer().getName() + "#k! �ٽ� ���ƿԱ���!\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#143000 + 4290(���� �߰� ����ġ) exp");
cm.completeQuest(30006);
cm.dispose();
} else if(cm.getPlayer().getKeyValue("lutas") == "start") {
cm.sendNext("Ȯ���غþ�?");
} else if(cm.getPlayer().getKeyValue("lutat") == "start") {
cm.sendNext("Ȯ���غþ�?");
} else {
cm.sendSimple("�ѽö� ���� �̰����� ������ �;�!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] �ǹ��� �ҳ� (�Ϸᰡ��)#l");
}
} else if (status == 2) {
if(cm.getPlayer().getKeyValue("lutas") == "start") {
cm.sendNextS("�̹����� �ֹ������� �ƹ��� ������ ������.",2);
} else if(cm.getPlayer().getKeyValue("lutat") == "start") {
cm.sendNextS("��. �ⱸ�� ������ �������� �̾��� �ִ���.",2);
} else {
if(selection == 0) {
cm.sendOk("���⼭ ���� �� �ִ� ����� ã�Ҿ�?\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#135000 + 4050(���� �߰� ����ġ) exp");
cm.completeQuest(30002);
cm.dispose();
}
} 
} else if (status == 3) {
if(cm.getPlayer().getKeyValue("lutas") == "start") {
cm.sendNext("�׷� �̹����� ���г�... �� ���� ������ ���� �� ���� �ɱ�...?");
cm.completeQuest(30004);
cm.dispose();
} else if (cm.getPlayer().getKeyValue("lutat") == "start") {
cm.sendNext("����? �׷� ��¥ ���� �� ������ �ǰ� ����.....");
cm.completeQuest(30003);
cm.dispose();
} 
}
}
}