var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && status == 5)  {
            qm.sendNextS("#b(�η��� ������ ������ ���� ���ȴ�. ������ �̴�� ����ĥ ���� ���µ�... ������ ������Ű�� �ٽ� ���� ����.)#k",3);
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("���� ���� ���� Ǯ���� �� ���׿�. �̷� ���߸��� ���� Ȥ���ϰ� �ܷ��� ����� �Ϻ��� ���� ü���� ���� �Ǵ� ��. ��, �׷� ����ؼ� ���� ü�� �ܷ��� �غ���.");
        } else if (status == 1) {
            qm.sendNextPrev("�׷� �̹����� #b�� ���� ����3#k�� ���� #r���繫��#k�� ��ġ�� ����. ��... #r20����#k ���� ��ġ�ϸ� ü�� �ܷÿ� ������ �� �ſ���. ��, � ����... ��? ���� �Ͻð� ���� �����̶� �����Ű���?");
        } else if (status == 2) {
            qm.sendNextPrevS("...���� ���� ���ڰ� �þ�� ���� �ʾ�?",3);
        } else if (status == 3) {
            qm.sendNextPrev("�þ�� �־��. ���, Ȥ�� 20�����δ� �����Ͻ� �ǰ���? �׷� �� 100������ ��ġ�� �����? �ƴ�, �ƴ���. �̿� �����ϴ� �ǵ� �����ǿ���� ����ó�� 999���� ��� ������...");
        } else if (status == 4) {
            qm.sendNextPrevS("��, �Ƴ�. �̴�ε� ����ϴ�.",3);
        } else if (status == 5) {
            qm.askAcceptDecline("��Ӿ��, �׷��� ����Ͻ� �� �����. ���� �������� ������ �������� �����̶�� ��ںС����� �˰� �ִ� �ɿ�. ���� �������� ����Ͻôٴ�...");
        } else if (status == 6) {
            qm.sendNextS("#b(�� �̻� ��� �ִٰ��� ���� 999���� ��ġ�� �ϰ� �� �� ���� ������ ���ȴ�.)#k",3);
        } else if (status == 7) {
            qm.sendNextPrev("�׷� ���繫�� 20���� ��ġ�� ��Ź �帱�Կ�.");
        } else if (status == 8) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("���繫�� ��� ��ġ�ϰ� ���ƿ��̱���. �� ���ڶ��� �ʾҳ���? ���� �� 300�������̶� �� ��ġ...\r\n\r\n#b(�� �ڿ��� �������� �帥��.)");
        } else if (status == 0) {
            qm.sendNext("...������ �������� �̹� ���� ü���� ��� ���� ������� �� ������ �׷� �ʿ�� ���� �� ���׿�.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 25 #t2000022# \r\n#i2000023# 25 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 550 exp");
        } else if (status == 1) {
            qm.gainItem(2000022,25);
            qm.gainItem(2000023,25);
            qm.forceCompleteQuest();
            qm.gainExp(550);
            qm.sendNext("���������� ���� ü���� �����ϱ�� �ؿ�. �׷� �غ� �Ǹ� ���� �ɾ� �ּ���.");
            qm.dispose();
        }
    }
}