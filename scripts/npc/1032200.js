


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	������������ �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 10200

	���ǽ� �̸� : �ﷹ��

	���ǽð� �ִ� �� : �Ǹ��ý� : �Ǹ��ý� (100000000)

	���ǽ� ���� : �ü� ������


*/
importPackage(Packages.constants);
importPackage(Packages.packet.creators);
importPackage(Packages.handler.���);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	cm.sendSimple("�ȳ��ϼ���? #b" + cm.getPlayer().getName() + "#k��! ���� ��~~~�� �ָ��� \r\n#b" + cm.getPlayer().getName() + "#k���� ���������� ���� �ص帮�����ؼ� ã�ƿ� ��Ͼ� ��� �ؿ�!!���������� �ȵǴ� ������ �̹����������� ������ �����˴ϴ�.\r\n\r\n#L0##b����(Male)#r\r\n#L1#����(Female)");
    } else if (status == 1) {
		cm.getClient().setGender(selection);
		cm.sendOk("���� �α���â���� �̵��ǽǰǵ�!! ��Ȳ�������ð� �ٽ� �����ø� ���� ������ ����� �����ſ���~ �׷� ������ �� ������!!");
	} else if (status == 2) {
		cm.sendOk("�ðܶ󾾹߾�");
		cm.sendOk("�ðܶ󾾹߾�");
		cm.dispose();
	}
}
