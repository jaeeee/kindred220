var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && status == 2) {
            qm.sendNext("��... �� ������δ� ����� ���ƿ��� �������? �׷��� Ȥ�� �𸣴� �ٽ� �� �� ������ �ֽʽÿ�.");
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("������! �ȳ��ϼ���! ��? ����� ������ �� ��� �˾ҳİ��? �׾� �տ��� �� ���� �� ū ��Ҹ��� ���������� �翬�� ������. �̹� ���� �������� ���ƿ��̴ٴ� �ҹ��� ���� ������ �̴ϴ�.");
        } else if (status == 1) {
            qm.sendNextPrev("�׳�����, ��¾�� �������� ǥ���� �� �����ŵ���? ���� ������ �����Ű���? ��? ������ ���� �������� �𸣰ڴٰ��? �����Բ��� ����� ������ �̴ϱ�?! �׷� ����... ���� ���̳� ���� �ӿ� ���� �ִ� ���ۿ��� ����̱���.");
        } else if (status == 2) {
            qm.askAcceptDecline("��, �����̽ô� ���� �ֵѷ� ���� ���� �������� ���� ����\r\n�������? #b���� ���#k�� �غ��ø� ����ϱ�?");
        } else if (status == 3) {
            qm.forceStartQuest();
            qm.sendNext("��ħ �� �ֺ��� #rƩ�丮�� ����#k���� ���� ��µ�, �� #r3����#k�� ��ġ�� ���ʽÿ�. ���� ���������� �𸨴ϴ�.");
        } else if (status == 4) {
            qm.sendNextPrev("��, Ȥ�� ��ų ������ �ؾ������ �� �ƴմϱ�? #b��ų�� �� ���Կ� �÷� ������ ���ϰ� ����� �� �ֽ��ϴ�.#k ��ų�Ӹ� �ƴ϶� �Һ� �����۵� �ø� �� ������ �� Ȱ���Ͻʽÿ�.", 1);
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            qm.sendNext("���...? ������ ������ �ǰ���?");
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendYesNo("��... ǥ���� ���� ���� �������� �� ������ ����̳׿�... ������ ���� ���ʽÿ�. ��Ե� �� �� �̴ϴ�. ��, ���� ������ �帱 �״� ��������!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 10 #t2000022# \r\n#i2000023# 10 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
        } else if (status == 1) {
            qm.gainItem(2000022,10);
            qm.gainItem(2000023,10);
            qm.forceCompleteQuest();
            qm.gainExp(57);
            qm.sendNextS("#b(���� ��¥ �����̶�� �ص�... �ƹ��� �ɷµ� ���� ������ ���� ���� ������?)#k",3);
            qm.dispose();
        }
    }
}

