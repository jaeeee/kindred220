importPackage(Packages.packet.creators);

var status = 0;

function start() { 
	status = -1; 
	action(1, 0, 0); 
}

function action(mode, type, selection) { 

if (mode == -1) { 
	cm.dispose();
	 } else { 
		if (mode == 0) { 
			cm.dispose(); 
			return;
		}
	if (mode == 1) 
		status++; 
	else 
		status--;
	if (status == 0) {
		if (cm.getJob() == 212 || cm.getJob() == 222 || cm.getJob() == 232) {
			cm.sendYesNo("���ݰ� �ٸ� ���ο� ����� ���Ͻó���?");
		} else {
			cm.sendOk("���������� ���谡 �������� ��밡���ϸ�, ���谡 �̽ǰ�� �ڽ��� ������ �´� NPC�� ã�ư��ּ���.");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.sendNextS("�׷� ���ο� ����� ���� ������ �ռ� ���� ������ ���� �����ص帮�ھ��.", 1);
	} else if (status == 2) {
		cm.sendNextS("���������� �ϸ� ���� ���� ��� ��ų�� sp�� �ʱ�ȭ�˴ϴ�. �����͸����� ����Ͽ� �ø� �� ��ų�� ������ ������ ���� �ʱ�ȭ������. ��, ���� �ް� �ִ� ������ �ʱ�ȭ �Ǵ� �����ϼ���.", 1);
	} else if (status == 3) {
		cm.sendNextS("���� ������� �������� ������ �ʿ��ؿ�. ������ ���ų� ���ڶ�ٸ� �޼Ҹ� �����ص� ������ ������ �ִٸ� ������ �켱������ �ް� �־��. ��ũ���丮������ �������Ϳ��� ���� ���� ������ ����� �� �־��.", 1);
	} else if (status == 4) {
		cm.sendNextS("����������, �������� ����� ����� ������ ���������� Ƚ���� ����Ͽ� �����ؿ�. �ɽ�Ǯ�̷� ����� �ٲٸ� �׸�ŭ �δ��� ���ٴ� �������.", 1);
	} else if (status == 5) {
		cm.sendNextS("������ �����������. �׷� ����� �ٲ� �� �ִ� ����� ������ �����帮�ھ��.", 1);
	} else if (status == 6) {
		cm.getClient().getSession().write(UIPacket.OpenUI(0xA4));
		cm.dispose();
		}
	}
}