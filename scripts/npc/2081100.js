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
		if (cm.getJob() == 112 || cm.getJob() == 122 || cm.getJob() == 132) {
			cm.sendYesNo("���ݰ� �ٸ� ���ο� ����� ���ϳ�?");
		} else {
			cm.sendOk("���������� ���谡 �������� ��밡���ϰ�, ���谡 ������ �ΰ�� �ڽ��� ������ �´� NPC�� ã�ư��ֱ� �ٶ��.");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.sendNextS("�׷� ���ο� ����� ���� ������ �ռ� ���� ������ ���� �������ְڳ�.", 1);
	} else if (status == 2) {
		cm.sendNextS("���������� �ϸ� ���� ���� ��� ��ų�� sp�� �ʱ�ȭ�ȴٳ�. �����͸����� ����Ͽ� �ø� �� ��ų�� ������ ������ ���� �ʱ�ȭ����. ��, ���� �ް� �ִ� ������ �ʱ�ȭ �Ǵ� �����ϰ�.", 1);
	} else if (status == 3) {
		cm.sendNextS("���� ������� �������� ������ �ʿ��ϴٳ�. ������ ���ų� ���ڶ�ٸ� �޼Ҹ� �����ص� ������ ������ �ִٸ� ������ �켱������ �ް� �ֳ�. ��ũ���丮������ �������Ϳ��� ���� ���� ������ ����� �� �ִٳ�.", 1);
	} else if (status == 4) {
		cm.sendNextS("����������, ������ �밡�� �Ҹ�Ǵ� �������� ����� �ڳ��� ������ ���������� Ƚ���� ����Ͽ� �����ϳ�. �ɽ�Ǯ�̷� ����� �ٲٸ� �׸�ŭ �δ��� ���ٴ� �����.", 1);
	} else if (status == 5) {
		cm.sendNextS("�⼳�� �����. �׷� ����� �ٲ� �� �ִ� ����� ������ �����ְڳ�.", 1);
	} else if (status == 6) {
		cm.getClient().getSession().write(UIPacket.OpenUI(0xA4));
		cm.dispose();
		}
	}
}