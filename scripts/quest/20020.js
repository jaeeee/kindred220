/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : ������Ʈ

	���ǽð� �ִ� �� : ������

	���ǽ� ���� : �ñ׳ʽ� Ʃ�丮��


*/

importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else if (mode == 0 && status < 3)
            status--;
	else if (mode == 0 && status == 3) {
	    qm.sendOk("�����꿡 ���� ���� ȯ���մϴ�...");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("���� 10�� �� �� ���� �ϳ� ����Ͻ� ����̱���. �����ϴ�. ����� ���� ��������� ���, �������� ���ñ�簡 �� �ڰ��� ������ �����մϴ�. ������, �� ���� ���� �� ���� ���� �ͽ��ϴ�. ����� � ����� ���� ���� �����߽��ϱ�?");
        } else if (status == 1) {
            qm.sendNextPrev("����� ���� �� ������ �ƴմϴ�. ��� �տ� �غ�� ���� ��� �ټ� ����... � ���� �����ϰ� �����Դϴٸ�, ��� ��ȸ�ϴ� ���� ����߰�����. �׷��� ���� ��Ų� �����帮��. ����� ��簡 �� �����...");
        } else if (status == 2) {
            qm.sendSimple("����ϱ�? �������� �� �ڽ��� ����� �̸� ���ðڽ��ϱ�? �̹� � ��簡 ���� ���� ���Ҵٸ� ���� �ʾƵ� ��� �����ϴ�.\r\n#b#L0# �������� �� ����� ���� �;��.#l\r\n#L1# �������� �� ����� ���� �ʾƵ� �����ƿ�.");
        } else if (status == 3) {
	    select = selection;
        if (select == 0) {
            qm.warp(913040100,0);
	    qm.forceStartQuest();
            cm.dispose();
	} else if(select == 1) {
            cm.sendOK("�׷�����. ���� ������ �������ּ���.");
	    qm.forceCompleteQuest();
            qm.dispose();	
	    }	
	}
    }
}