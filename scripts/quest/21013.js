var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
	if (mode == 0 && status == 0) {
	    qm.dispose();
	}
        if (mode == 0 && status == 1) {
            qm.sendNext("�����Բ��� �и� ������ �Ǵ� ������ �ſ���. ������� �����ּ���.");
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendSimple("��, ������... ��, ���� �˰� �;����.\r\n#b#L0#(���ݾ��ϴ� �� ����)#l");
        } else if (status == 1) {
            qm.askAcceptDecline("����, ���� �������� �������� ������ �����ϰ� ���� �� �־��µ�... ������ ������ �ٻڽ� �� ������... �� ������ ������ �޾��ֽðھ��?");
        } else if (status == 2) {
            qm.forceStartQuest();
            qm.sendNext("������ ���� �� �ֺ��� �ִ� ���� �ȿ� �־� �ξ����. ���ŷο�ð����� ���ڸ� �μ� �� �� �ȿ��� ����� #b�볪�� �� ��#k�� #b����#k�� ������ �ּ���. �׷� �ٷ� �����ؼ� �帱�Կ�.");
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
            qm.sendNext("��Ḧ ��� �������̱���? �׷� ��ø���, �̷��� ������ ������ �ϸ�... \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
        } else if (status == 1) {
            qm.gainItem(4032309,-1);
            qm.gainItem(4032310,-1);
            qm.gainItem(3010062, 1);
            qm.forceCompleteQuest();
            qm.gainExp(95);
            qm.sendNextPrev("��, ���� �ϼ��̿���! ����, �ƹ��� �����̶� �ǰ��� ���� ���� �Ŷ�� �����ؼ� �������� �����Կ��� ���ڸ� ������ �帮�� �;����.");
        } else if (status == 2) {
            qm.sendNextPrev("�����̶�� �ؼ� ������ ���� �� �ִ� �� �ƴ϶�� �����ؿ�. ������ �и� ��ġ�� ���� ���� �ְ�, ������ ���� ���� �ſ���. ������ �װ��� �غ��� �� �ֱ⿡ �����̶�� �Ű���?")
            qm.dispose();
        }
    }
}