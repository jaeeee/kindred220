var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((status == 0 || status == 1 || status == 2 || status == 4 || status == 6) && mode == 0) {
			cm.sendOk("Ȥ�ö� ������ ���Ŵٸ� �����Է�...........");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendSimple("�ȳ��ϼ���~ ���� �¶��ο� ù���� ����� �������� �������� ȯ���մϴ�~ ���� �����п��� ������ ���� �����ְ��� ���⿡ �ֽ��ϴ�~ ��! ������ �غ�� �Ǽ̴�����?\r\n\r\n\r\n#r���ǻ��� : ������, �ñ׳ʽ�(������ ����), ����������(���󽽷��̾� ����)�� �÷��� �Ͻ� �е� ������ �ش� Ŭ������ �������ֽñ� �ٶ��ϴ�. �� �� Ÿ �������� ��쿡�� ������ ���谡 �������� ĳ���͸� �������ּ���. �����մϴ�#b\r\n#L0#������ �����ϰڽ��ϴ�.#l#b\r\n#L1#������ �����ϱ� ���� #r����#b�� �����ϰ� �;��.#l");				
		} else if (status == 1) {		
			if (selection == 0) {
				cm.sendNext("�غ�� �� �ǽŰǰ���? �׷� ���̿¶��ο��� ��ſ� �ð��� ��������!\r\n\r\n\r\n#b���ǻ��� : ��ȭ�� ���߿� �ݰų� �ϸ� ������ ���� �ȵǴ� ��찡 �ֽ��ϴ�. ����!����!");
			} else if (selection == 1) {
				cm.sendSimple("ĳ���� ���� ���� ������ �ٲ��� ������ �ȵǴ� ������ �� ���� �����մϴ�. �׷� ������ ���� ��ȯ �ý����� ���ݿ� ���� �����ص帮�� �ֽ��ϴ�. ��������� �Ͻǰſ���??\r\n\r\n#L0##b���� ĳ���ͷ� ��ȯ#l\r\n#L1##b���� ĳ���ͷ� ��ȯ#l");
			} else {
			cm.dispose();
			}
		} else if (status == 2) {
		   if (selection == 0) {
                 	cm.getPlayer().setHair(31002);
                 	cm.getPlayer().setFace(21700);
                 	cm.getPlayer().setGender(1);
            		cm.fakeRelog();
            		cm.updateChar();
            		cm.playerMessage(5, "���� ��ȯ �ý��ۿ� ���� ������ �ٲ�� �̼��� �⺻ ���� �󱼷� �ٲ�����ϴ�.");			
            		cm.dispose();
		   } else if (selection == 1) {
                 	cm.getPlayer().setHair(30000);
                 	cm.getPlayer().setFace(20100);
                 	cm.getPlayer().setGender(0);
            		cm.fakeRelog();
            		cm.updateChar();
            		cm.playerMessage(5, "���� ��ȯ �ý��ۿ� ���� ������ �ٲ�� �̼��� �⺻ ���� �󱼷� �ٲ�����ϴ�.");			
            		cm.dispose();
		} else {
			cm.gainExp(1000);
			cm.gainExp(1000);
			cm.gainExp(1000);
			cm.gainExp(1000);
			cm.gainExp(10);
			cm.gainExp(135);
			cm.gainExp(372);
			cm.gainExp(560);
			cm.gainExp(840);
			cm.gainExp(1240);
			cm.gainMeso(10000000);
			cm.gainItem(2000013, 50);
			cm.gainItem(2000014, 50);
                 	cm.playerMessage(5, "����� ù �Լ� ���Ϸ�, ������ ���ǰ� �޼Ҹ� �帳�ϴ�. ���� �¶��ο��� ��ſ� �ð� �ǽñ� �ٶ��ϴ�~");			
       			cm.warp (910027200, 0);
			cm.dispose();
			}
		}
	}
}