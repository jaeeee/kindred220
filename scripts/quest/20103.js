var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("���� �����ϼ���.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("�����Ͻô� �ǰ���...? ...�ǵ��� ���� �����ϴ�. ������ ������ ����� �����ϰ� ����ϴ�.");
    } else if (status == 1) {
	qm.sendNext("�������� ����� ���� �극��Ŀ�Դϴ�. ���� ��Ų� �ɷ��� ���� �帮�ڽ��ϴ�...");
        qm.gainItem(1452051,1);
        qm.gainItem(1142066,1);
	qm.changeJob(1300);
	qm.forceCompleteQuest();
	qm.showinfoMessage("<���ñ���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
    } else if (status == 2) {
	qm.sendNextPrev("���� ����� ���� �극��Ŀ�Դϴ�. �������� �ʹٸ� ����â(SŰ)���� ������ ������ �ø����� �ϼ���. #b�ڵ����#k�� ������ �޴´ٸ� ���� ������ �ø� �� ���� �̴ϴ�.");
    } else if (status == 3) {
	qm.sendNextPrev("���� �극��Ŀ�μ� �ʿ��� ������ ���� �״� ����� ���, ��Ÿ �������� ������ ������ �÷� ��Ƚ��ϴ�.");
    } else if (status == 4) {
	qm.sendNextPrev("��Ų� �ణ�� #bSP#k�� �����߽��ϴ�. #bSkill �޴�#k�� ���� ��ų�� ���ʽÿ�. ��Ȥ �ٸ� ��ų�� ������ �ʰ�� ��� �� ���� ��ų�� ������ �� ������ ���ð� ��ų�� �ø��ʽÿ�.");
    } else if (status == 5) {
	qm.sendNextPrev("����� ���� �޸� ���� �극��Ŀ�� �� �̻� �װ� �Ǹ� �׵��� �׾Ҵ� ����ġ�� �Ϻθ� ���� �� �ֽ��ϴ�. �ε� �����Ͻñ�.");
    } else if (status == 6) {
        qm.sendNextPrev("�׷�... �ñ׳ʽ� ������ ���μ� �������� ����� ����� �����ֽñ�...");
	qm.safeDispose();
    }
}