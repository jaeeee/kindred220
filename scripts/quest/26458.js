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
	if(qm.haveItem(4000047,1)) {
	qm.sendOk("#b�����̾� PC��#k ����Ʈ�� �Ϸ��ϱ� ���ؼ� #d�����̾�PC�� ����#k �Ŵ��� ������ �ֽʽÿ�");
	cm.dispose();
	} else {
	qm.sendNext("#b�����̾� PC��#k �̶� ���� PC�濡 �����ϸ� ������ ������ ������ #r���Ǹ� ��Ÿ��#k ������ �ٸ��ϴ�. #bȫ�� �̺�Ʈ#k �� ���������ν� ���� �����Ҽ� �ֽ��ϴ�.");
			}
		} else if (status == 1) {
	qm.sendNext("#bȫ�� �̺�Ʈ#k �� �����ϰ� ���� #b����������#k �Բ��� #z4000047# �� ������ �ֽ��ϴ�. #z4000047# �� ������ �ֽø� #b#z1142145#����#k �� �帮�ڽ��ϴ�.\r\n\r\n#e<�����̾� PC�� ���� �߰��ɼ�>#n\r\n#i1142145##b#z1142145#����#k �� �����ϰ� ��ɽ� 5%�� �߰�����ġ�� ȹ���Ҽ� �ֽ��ϴ�.\r\n#r���� ����� #z1142145#���� �� ������ϴ�.");
		} else if (status == 2) {
	qm.sendNext("#b�����̾� PC��#k �̺�Ʈ�� ���� �ݺ� ����Ʈ �Դϴ�.");
	qm.dispose();
		}
	}
}