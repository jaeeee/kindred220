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
    if (mode == 2) {
        status++;  
    }

	if (status == 0) {

		cm.sendSpirit("���ƾ� ū�ϳ���\r\n���� ��� ��� ���̿� ���� ��Ʈ���� #b��Ÿ#k�� ��ġ�Ǿ� ���Ⱦ�!!\r\n#r#L0#��ȭ�� �׸��Ѵ�#l  #L1#���񸮸� �����ش�#l ",true,0);

	} else if (status == 1) {
		if (selection == 0) {
			cm.sendSpirit("\r\n�����ټ� ���ٸ� ��¿������...\r\n�ƽ����� �ٸ� ����� �˾ƺ����� �Ұ�..",false,0);
			cm.dispose();
		} else if (selection == 1) {
			cm.sendSpirit("����ϰ� ���� #b��Ÿ#k�� ����� �������� �־� �ʸ� ����Ѵٸ� \r\n���ݹٷ� #b��Ÿ#k�� �ִ°����� ���� �����ֵ��� �Ұ�!!\r\n#r#L0#���ݹٷ� �̵��Ѵ�#l  #L1#��õڿ� �̵��Ѵ�#l",true,0);
		}
	} else if (status == 2) {
		if (selection == 0) {
			var error = "";
			if (cm.getPlayerCount(910141101) > 3) {
				error = "�̹� �ٸ� �������� #b��Ÿ#k�� ���Ϸ� ���Ű���."
			} else if (cm.getPlayer().getLevel() < 100) {
				error = "100���� �̻���� ������ ������";
			}
			if (error != "") {
				cm.sendSpirit("\r\n" + error,false,0);
				cm.dispose();
				return;
			}
			if (!cm.BossCheck1("Beta",3)) {
				cm.sendSpirit("��Ƽ���� �Ϸ����� ����Ƚ���� �ʰ��ѻ���� �־�, ����� �Ϸ� ������ 3������ ������",false,0);
				cm.dispose();
				return;
			}
			cm.BossAdd1("Beta");
			cm.resetMap(910141101);
			cm.warp(910141101);
			cm.��Ÿ����();
			cm.dispose();
	
		}
	}
}