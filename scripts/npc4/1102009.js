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
if(cm.getPlayer().getKeyValue("luta") == "start") {
cm.sendNext("����ʽÿ�. ��ٸ��� �־����ϴ�.");
}
} else if (status == 1) {
cm.sendNextS("���� ���̶�� �ؼ� �޷��Խ��ϴ�. ��ü �������� �Ͼ �ǰ���?",2);
} else if (status == 2) {
cm.sendNext("������ ���տ� ����� �߿��� ������ �־�, �˷��帮���� ���ϰ� �ҷ����ϴ�. ������ ������, �ֱ� �����ǿ�� ���� ������ �������� ������ ���ο� ������ ��Ÿ���ٰ� �մϴ�.");
} else if (status == 3) {
cm.sendNext("������ �� �������� ���� ������ ����� ����� �������ٴ� ���Դϴ�. ������ ���տ����� Ȥ�� ���� ������ �ϴ��� ����Ʈ�� �ƴұ� �����ϰ� �ֽ��ϴٸ�, �� ���� Ȯ���� ���� �ƴմϴ�.");
} else if (status == 4) {
cm.sendNext("�̹� �ñ׳ʽ� ������ �İ��Ͽ� ���ο� ������ Ž���ϰ� ������, £�� �Ȱ��� ������ ��Ǯ�� �þ߸� ���θ��� �������� ����� �ľ����� ���� ��Ȳ�Դϴ�.");
} else if (status == 5) {
cm.sendNextS("�׷� ���� ������ �ؾ� �մϱ�?",2);
} else if (status == 6) {
cm.sendNext("�׷��� #b" + cm.getPlayer().getNmae() + "��#k �����ּ����� �մϴ�. ���� ��� #b������ ����#k�� �����帱�״�, �װ��� ����� ���ο� ������ Ž���� �ֽʽÿ�. �׸��� Ȥ�� ���� �߰��ϰ� �Ǹ� �ٷ� ���� ���� ���ֽʽÿ�.");
} else if (status == 7) {
cm.sendNext("�׷� ���� ��� �ż��� ������ #b������ ����#k �� �Űܵ帮�ڽ��ϴ�.");
cm.dispose();
}
}
}