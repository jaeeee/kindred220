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
    if (mode == -1 || mode == 0) {
        qm.dispose();
	return;
    } else {
	status++;
	if (status == 0) {
	    qm.sendSimple("��ο� ���忡 ���� �ñ��Ѱ�? ����� �����غ��ڴ°�?#b\r\n\r\n#L0#���� ���� ��ŷ�� ���� �ͽ��ϴ�.#l\r\n#L1#��ü ��ο� ��ŷ�� ���� �ͽ��ϴ�.#l"); 
	} else if (status == 1) {
            if (selection == 0) {
                var rank = Packages.MedalRanking.getCurrentRank(qm.getPlayer().getId(), qm.getPlayer().getMapId()+"_��ο�");
                if (rank == -1) {
                    qm.sendOk("���� �ƹ��� ������ ��ϵ��� �ʾҴٳ�.");
                    qm.dispose();
                    return;
                }
                qm.sendOk("���� �ڳ��� ������ #b"+rank+"#k�� ���.");
                qm.dispose();
            } else {
		qm.dispose();
	    }
        }
    }
}