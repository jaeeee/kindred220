var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("�ٽ� ������ �����. ���� �� ���� ���� ��������.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("���� ������ �ǰ�? ...��ȸ�ص� �ǵ��� ����� ����. �����ϰ� �����϶��. ����Ʈ��Ŀ�� ���� ���ھ�?");
    } else if (status == 1) {
	qm.sendNext("�������� �� ����Ʈ��Ŀ��. ���ᰡ �� ������� �װ� �ɷ��� �� ��������.");
        qm.gainItem(1472061,1);
        qm.gainItem(1142066,1);
	qm.changeJob(1400);
	qm.forceCompleteQuest();
	qm.showinfoMessage("<���ñ���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
    } else if (status == 2) {
	qm.sendNextPrev("���� �� ����Ʈ��Ŀ��. �������� �ʹٸ� ����â(SŰ)���� ������ ������ �ø�����. ������ #b�ڵ����#k���� �ص� �ǰ�... ��, �ڵ������ �� �ϰ����� ���� �ø���.");
    } else if (status == 3) {
	qm.sendNextPrev("�ʿ��� �� ���Ƽ� ���, ��Ÿ �������� ������ ������ �� �÷Ⱦ�. �� ��Ծ� ��.");
    } else if (status == 4) {
	qm.sendNextPrev("�׸���, �װ� �ణ�� #bSP#k�� ���������� #bSkill �޴�#k�� ���� ��ų�� ��쵵�� ��. �� ���ۿ� �� �ø�������... ��. �װŶ� �÷� ���� ����ϱ� ���� �״�. ��, �ٸ� ��ų�� �����߸� �ø� �� �ִ� ��ų�� ������ �װ� �ǵ��� ��.");
    } else if (status == 5) {
	qm.sendNextPrev("����� ���� �޸� ����Ʈ��Ŀ�� �� �̻� �װ� �Ǹ� �׵��� �׾Ҵ� ����ġ�� �Ϻθ� ���� ���� �־�. �ڱ� ���� �ڱⰡ �˾Ƽ� ì����.");
    } else if (status == 6) {
        qm.sendNextPrev("�׷�... �ñ׳ʽ� ������ ���μ� �������� ���� ��ұ��� Ȯ���� ���ڰ�.");
	qm.safeDispose();
    }
}