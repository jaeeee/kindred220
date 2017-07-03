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
if(cm.getPlayer().getKeyValue("lutaclear") == "start") {
cm.sendSimple("������ ���ؼ���� �� �����̶� �س� �� �ֽ��ϱ�?\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] ������� ��ȣ�� (�Ϸᰡ��)#l");
} else if(cm.getQuestStatus(30012) == 2 && cm.getPlayer().getKeyValue("lutaclear") != "clear") {
cm.sendNext("������� ��ð� ���̽��ϱ�?");
} else if(cm.getPlayer().getKeyValue("fluta") == "start" || cm.getPlayer().getKeyValue("lutaclear") == "clear") {
cm.sendYesNo("�ż��� ������ ��Ÿ�񽺷� �̵��Ͻðڽ��ϱ�?");
} else if(cm.getPlayer().getMapId() == 105010200) {
if(cm.getPlayer().getLevel() < 125) {
cm.sendNextS("��.. ���� �̷����� ��Ż�� �־���?",2);
} else {
cm.sendNextS("��濡 �Ȱ��� �ڿ��ؼ� �þ߸� ������ �� ����. ���� ������ �𸣴� �����ؾ߰ڴ�.",2);
}
cm.dispose();
} else if (cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendSimple("������ ���ؼ���� �� �����̶� �س� �� �ֽ��ϱ�?\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n#L0##d[��Ÿ��] ������� ��ȣ��#l");
} else if (cm.getQuestStatus(30007) == 2) {
cm.sendSimple("������ ���ؼ���� �� �����̶� �س� �� �ֽ��ϱ�?\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[��Ÿ��] ������� ���� (�Ϸᰡ��)#l");
} else if(cm.getPlayer().getKeyValue("luta") == "start") {
cm.sendNext("����ʽÿ�. ��ٸ��� �־����ϴ�.");
} else {
cm.dispose();
}
} else if (status == 1) {
if(cm.getPlayer().getKeyValue("lutaclear") == "start") {
cm.sendNext("�����մϴ�. ��� ���п� ������� �����ϰ� ��ȣ�� �� �ְ� �Ǿ����ϴ�.");
} else if(cm.getQuestStatus(30012) == 2 && cm.getPlayer().getKeyValue("lutaclear") != "clear") {
cm.sendNextS("�ñ׳ʽ� ���ܰ� �Բ� ���� ���� �ֽ��ϴ�. ��,��ħ ���� ���׿�.",2);
} else if(cm.getPlayer().getKeyValue("fluta") == "start" || cm.getPlayer().getKeyValue("lutaclear") == "clear") {
if(cm.getQuestStatus(30008) == 0) {
cm.startQuest(30008);
}
cm.warp(105200000);
cm.sendOk("��ſ��� ������ ������ �Բ��ϱ�..");
cm.dispose();
} else if(cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendNext("������ ���տ����� ��� ������ ����� ���⿡ ���߽�Ű��� �����߽��ϴ�.");
} else if(cm.getPlayer().getQuestStatus(30007) == 2) {
cm.sendNext("���ο� ������ Ž��� ��� ��ġ�̽��ϱ�? ������ ���� �ʾ� Ȥ�� ���� ���� ���� ���� �ƴѰ� �����߽��ϴ�.");
} else {
cm.sendNextS("���� ���̶�� �ؼ� �޷��Խ��ϴ�. ��ü �������� �Ͼ �ǰ���?",2);
}
} else if (status == 2) {
if(cm.getPlayer().getKeyValue("lutaclear") == "start") {
cm.sendNext("�̿� ������ ���տ����� ��ſ��� #r<������� ��ȣ��>#k Īȣ�� ������ ������� �����Ͽ����ϴ�.\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i1142536##z1142536# 1��\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 355000 + 5325(���� �߰� ����ġ) exp");
cm.completeQuest(30008);
} else if(cm.getQuestStatus(30012) == 2) {
cm.sendNext("��ٸ��� �־����ϴ�. �������!");
} else if(cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendNextS("������ ���տ��� �����شٴ� �Ƚ��̿���.",2);
} else if(cm.getQuestStatus(30007) == 2) {
cm.sendNextS("�׵��� ��û�� �ϵ��� �־����ϴ�.",2);
} else {
cm.sendNext("������ ���տ� ����� �߿��� ������ �־�, �˷��帮���� ���ϰ� �ҷ����ϴ�. ������ ������, �ֱ� �����ǿ�� ���� ������ �������� ������ ���ο� ������ ��Ÿ���ٰ� �մϴ�.");
} 
} else if (status == 3) {
if(cm.getPlayer().getKeyValue("lutaclear") == "start") {
cm.sendNext("������ ������� ������ �����س������� ��� ������ ����� ���� �ƴմϴ�. ������� �����ߴ� ������ ������� ������� �Ű��� ���� �ڴʰ� �˾�æ �� �����ϴ�. �׵��� #r������ ��ȣ�ڵ��� �ٽ� ��Ȱ��Ű��#k, ������ ����� ������ ���丮�� ���Ϸ��带 ���� ��Ű�� �ϰ� �ֽ��ϴ�.");
} else if(cm.getQuestStatus(30012) == 2) {
cm.sendNext("�������. ����� ���� ������ ��ٸ��� �־���ϴ�.",1101000);
} else if(cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendNext("������� ���� ������ ���� ���� �����翡 ������ ��ŭ ���� ���Դϴ�. ���� ���� �����縦 ������ �͵� ������� ������ �����ٸ� �Ұ������� ���Դϴ�. ������ �� �ο����� ������� �ް��� �õ����Ȱ�, �ﷹ���� �ܿ� ���� ������� #b������ �ٿ�#k�� ������ ���丮�� ���Ϸ���� �Ѿ�Խ��ϴ�.");
} else if(cm.getQuestStatus(30007) == 2) {
cm.sendNextS("(������Ʈ���� ��Ÿ�񽺿��� �־��� �ϵ��� ��� �����־���.)",2);
} else {
cm.sendNext("������ �� �������� ���� ������ ����� ����� �������ٴ� ���Դϴ�. ������ ���տ����� Ȥ�� ���� ������ �ϴ��� ����Ʈ�� �ƴұ� �����ϰ� �ֽ��ϴٸ�, �� ���� Ȯ���� ���� �ƴմϴ�.");
} 
} else if (status == 4) {
if(cm.getPlayer().getKeyValue("lutaclear") == "start") {
cm.sendNext("�׵��� ���� ���� ���ؼ��� ����� �������� ������ �ʿ��մϴ�. �����ε� ������ ������ ��ȭ�� ���� �����ֽñ� �ٶ��ϴ�.");
cm.getPlayer().setKeyValue("lutaclear","clear");
cm.dispose();
} else if(cm.getQuestStatus(30012) == 2) {
cm.sendNext("���Ⱑ �����걸��... ���� ���۰�? �Դٰ� �����ϰ� �ƴ���. ����, �������� ǫ ��� �� �ְھ�.",1064024);
} else if(cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendNext("�׷��� ����� ���ڱ� ����������� ���� ������ �ϴ��� ���İ����� �ƴѰ� �����ߴµ�, �׷� ������ ���� ȭ���ϰ� �־��ٴ�...");
} else if(cm.getQuestStatus(30007) == 2) {
cm.sendNext("....���� �������. �� ��� ���� ����̶��, �̰� ���� ū���� �ƴ� �� �����ϴ�. ���� �� ����� �ٷθ� �˾Ҵ� ������� ���簡 Ȯ�ε� ���� ȯ���Ҹ��� ��������, ������� ���� �븮�� ��ü�Ҹ��� �������� �ִٴ°� ������ �ɰ��� ��������.");
} else {
cm.sendNext("�̹� �ñ׳ʽ� ������ �İ��Ͽ� ���ο� ������ Ž���ϰ� ������, £�� �Ȱ��� ������ ��Ǯ�� �þ߸� ���θ��� �������� ����� �ľ����� ���� ��Ȳ�Դϴ�.");
} 
} else if (status == 5) {
if(cm.getQuestStatus(30012) == 2) {
cm.sendNext("#b" + cm.getPlayer().getName() + "#k! ���ݱ��� ���� ������. �װ� �����ٸ� �� ��Ÿ�񽺿��� ���� �� ������ �ž�.",1064024);
} else if(cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendNext("��¶�� ������� �ݵ�� ���ѳ��߸� �մϴ�. ������� �븮�� �ڵ��� ��ü�� ���������� �𸣰����� ���� �ǵ��� �ƴ� �� �и��մϴ�. �׷� �ڵ��� �տ� ������� ���� �Ѿ�ٸ� � ���� ������ �� �𸣴� �� �Դϴ�.");
} else if(cm.getQuestStatus(30007) == 2) {
cm.sendNextS("��Ÿ�񽺴� ���� ����� ����� ������ ���¶� ������� ���� ������ϰ� �ֽ��ϴ�. �ѽö� ���� ������� ���ؾ߸� �ؿ�.",2);
} else {
cm.sendNextS("�׷� ���� ������ �ؾ� �մϱ�?",2);
}
}  else if (status == 6) {
if(cm.getQuestStatus(30012) == 2) {
cm.sendNextS("�ƴϾ�. �׷� ����. ���߿� �� �ٽ� ������.",2);
} else if(cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendNextS("������ ������� ������ ��ȣ�ϴ� �ڵ��� ���� ȣ��ȣ�������� ���� �� �մϴ�.",2);
} else if(cm.getQuestStatus(30007) == 2) {
cm.sendNext("�˰ڽ��ϴ�. �ϴ� ������ ���տ� �� ����� �˸��� ��å�� ����ڽ��ϴ�. ��� �� �ٽ� ���� �ɾ��ֽðڽ��ϱ�?");
cm.getPlayer().setKeyValue("luta","clear");
cm.dispose();
} else {
cm.sendNext("�׷��� #b" + cm.getPlayer().getName() + "��#k �����ּ����� �մϴ�. ���� ��� #b������ ����#k�� �����帱�״�, �װ��� ����� ���ο� ������ Ž���� �ֽʽÿ�. �׸��� Ȥ�� ���� �߰��ϰ� �Ǹ� �ٷ� ���� ���� ���ֽʽÿ�.");
} 
} else if (status == 7) {
if(cm.getQuestStatus(30012) == 2) {
cm.sendNext("(��������)",1064024);
} else if(cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendYesNo("��� ����� �׵��� ������ ���� ���ϰ� �ִٸ� ���� ���� �ο��� �ɰڱ���. ��ŵ� �� �ӹ��� ���� ���¾��ֽðڽ��ϱ�? ������ �� �Ѹ��� �����̶� ������ ��Ȳ�Դϴ�.");
} else {
cm.sendNext("�׷� ���� ��� �ż��� ������ #b������ ����#k �� �Űܵ帮�ڽ��ϴ�.");
}
} else if (status == 8) {
if(cm.getQuestStatus(30012) == 2) {
cm.sendNext("������ �ż��� ��ȣ �Ʒ� �ູ�� �� �ٽñ�...");
cm.getPlayer().setKeyValue("lutaclear","start");
cm.dispose();
} else if(cm.getPlayer().getKeyValue("luta") == "clear") {
cm.sendNext("����� ��⿡ ���Ǹ� ǥ�մϴ�. ���� ������ ��ȣ�ڵ��� óġ�Ͽ� ��������� �ɸ� ������ Ǯ���ֽʽÿ�. �׸��� ������� ��������� �����ϰ� �������ֽñ� �ٶ��ϴ�.");
} else {
cm.warp(105010000);
cm.completeQuest(30001);
cm.completeQuest(30000);
cm.getPlayer().setKeyValue("luta","start");
cm.sendNextS("��, ���⿡ ���ο� ������ ���ϴ� ���� �ִ�.\r\n(������ ���� ���� �ִ� ��Ż)",2);
cm.dispose();
}
} else if (status == 9) {
cm.sendNext("�̹� ������ ���տ��� ����� ���⿡ ���� ������ ��ǥ������ �ߺ��� �ڵ��� �̹� ��Ÿ�񽺿� �����߰ڱ���. �׵�� ���� ���� �ݵ�� ������� ���س��ñ� �ٶ��ϴ�.");
} else if (status == 10) {
cm.sendNext("�����ε� �ż��� ������ ��𿡼����� ��Ÿ�񽺷� �̵��� �� �ֵ��� ���͵帮�ڽ��ϴ�.");
cm.startQuest(30008);
cm.getPlayer().setKeyValue("fluta","start");
cm.dispose();
}
}
}