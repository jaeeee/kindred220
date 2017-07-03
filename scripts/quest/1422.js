var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    qm.sendNext("��ؽ�(Assassin)�� ���� ������ �����ϴ�.");
        } else if (status == 1) {
	    qm.sendNextPrev("��ؽ�(Assassin)�� ��ų�� ���� ������ �����ϴ�.");
        } else if (status == 2) {
	    qm.sendNextPrev("#b���̽�Ʈ#k�� ���� ��Ƽ������ ��� �̵��ӵ��� �������� �ø� �� �־� ���ϰ�, #b������ �������Ͻ�#k�� ������ ��Ұ� ģȭ���� ������ #bü��#k �� ��Ÿ �ɷ��� ������.");
        } else if (status == 3) {
	    qm.sendNextPrev("��... ���� �ʹ� ��� �����߰ڱ�. �׷� ��ؽ��� ���� �Ȱڳ�. �׷��ٸ� ������ ����. ��, �׷��ٰ� ������ ������ �ƴϾ�. �غ�� �����忡 �� ���͸� ����ġ�� #r����� ���� ��� ���� 30��#k�� ���� ������ �Ǵ� ������ ��������. �ٸ�... �Ϲ����� ���ͺ��� �� ���� �� ��������?");
        } else if (status == 4) {
	    qm.askAcceptDecline("������ ���ٰ� ������ �������� #b����Ʈ�� �����ϰ� �ٽ� ����#k�ؾ� ��. �׷��� �˾Ƽ� �� �غ��ؼ� �����. �׷� �ٷ� ���� �����̴�. �����ϸ� �ڳ׸� ������ ������ �����ڴ�.");
        } else if (status == 5) {
	    qm.warp(910370000,0);
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendYesNo("���� ������ ��� �����Ա�. �����ΰ�? �ʶ�� ��ؽ��� �Ǵ� �� ������ ���� �� ����. �׷�... �ٷ� ��ؽ����� ����� ����. �غ�� �Ǿ���?");
        } else if (status == 1) {
	    qm.changeJob(410);
	    qm.forceCompleteQuest();
	    qm.removeAll(4031013);
	    qm.gainItem(1142108,1);
	    qm.showinfoMessage("<�ִϾ� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("����. �ڳ״� �������� #b��ؽ�#k�̾�. ��ؽ��� ����� �ൿ�� �����ַ� ���� �����ϴ� ��. ���� ���ÿ� �����ϱ� �ٶ�ھ�.");
        } else if (status == 2) {
            qm.sendNext("��ؽ��� �������� ��. ������ �� ������ ���ڿ��� ����ϴ� ���� �ùٸ� ���� �ƴϾ�. �ڽ��� ������ �ִ� ���� ���� �Ͽ� ����ϴ� ��. �װ��� �������� �� �̻����� ����� ���̾�.");
            qm.dispose();
        }
    }
}