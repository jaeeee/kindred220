var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("�����ϰ� �����ض�.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("������ �� ���ΰ�? �ǵ��� ���� ����. �����ϰ� �����ϵ���. ���� �ҿ� �������� ���� ���ڴ°�?");
    } else if (status == 1) {
	qm.sendNext("�״��� ���� �ҿ� �����Ϳ� �����ϵ��� �������. ���Ŀ� �� �������� �ʹٸ� ����â(SŰ)���� ������ ������ �÷���. ��ƴٸ� #b�ڵ����#k�� ����ص� ����.");
	qm.gainItem(1302077,1);
	qm.gainItem(1142066,1);
	qm.changeJob(1100);
	qm.forceCompleteQuest();
	qm.showinfoMessage("<���ñ���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
    } else if (status == 2) {
	qm.sendNextPrev("�״��� ���, ��Ÿ �������� ������ ������ �÷� �־���. ���μ� �ʿ��� �͵�� ä�쵵��.");
    } else if (status == 3) {
	qm.sendNextPrev("���� �״뿡�� �ణ�� #bSP#k�� ���������� #bSkill �޴�#k�� ���� ��ų�� ��쵵��. ����, ó������ ���� �ø� �� �ִ� �� �ƴϴ�. �ٸ� ��ų�� ������ �ʰ�� ��� �� ���� ��ų�� �ִ�.");
    } else if (status == 4) {
	qm.sendNextPrev("����� ���� �޸� �ҿ� �����Ͱ� �� �̻� �װ� �Ǹ� �׵��� �׾Ҵ� ����ġ�� �Ϻθ� ���� �� �ִٴ� ���� ����ϵ���.");
    } else if (status == 5) {
	qm.sendNextPrev("�׷�... �ñ׳ʽ� ������ ���μ� �β����� ���� ����� �����ٿ�.");
	qm.safeDispose();
    }
}