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
    }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var skin = "���ϴ� #e#b������ ��Ų#n#k�� �����ϼ���.\r\n#e#b3000 �Ŀ�����Ʈ#n#k�� #e#r����#n#k�˴ϴ�.\r\n" +
		"���� #e#b"+cm.getPlayer().getName()+"#n#k���� #e#b"+cm.getRC()+"����Ʈ#n#k�� �����ϰ� �ֽ��ϴ�.\r\n\r\n";
		skin += "#L2431965##e#b#i2431965#  �⺻ ������ ��Ų\r\n";		//0��
		skin += "#L2431966##e#b#i2431966#  �����ж����� ������ ��Ų\r\n";	//1��
		skin += "#L2431967##e#b#i2431967#  ũ��Ƽ�ƽ� ������ ��Ų\r\n";		//2��
		skin += "#L2432131##e#b#i2432131#  ��Ƽ ����Ʈ ������ ��Ų\r\n";	//3��
		skin += "#L2432153##e#b#i2432153#  ����Ƽ�� ������ ��Ų\r\n";		//4��
		skin += "#L2432154##e#b#i2432154#  ������ ���� �Ѱ� ������ ��Ų\r\n";	//5��
		skin += "#L2432207##e#b#i2432207#  Ŭ�� ��׽ý� ������ ��Ų\r\n";	//6��
		skin += "#L2432354##e#b#i2432354#  �޸� ũ�������� ������ ��Ų\r\n";	//7��
		skin += "#L2432355##e#b#i2432355#  �� �ɼ��� ������ ��Ų\r\n";		//8��
		skin += "#L2432465##e#b#i2432465#  �⸮���� ������ ��Ų\r\n";		//9��
		skin += "#L2432479##e#b#i2432479#  ���ν��� ������ ��Ų\r\n";		//10��
		skin += "#L2432526##e#b#i2432526#  Ű���� ������ ������ ��Ų\r\n";	//11��
		skin += "#L2432532##e#b#i2432532#  ������ ���ٶ� ������ ��Ų\r\n";	//12��
		skin += "#L2432592##e#b#i2432592#  �ַκδ� ������ ��Ų\r\n";		//13��
		skin += "#L2432640##e#b#i2432640#  ���̳ʼ��� ������ ��Ų\r\n";		//14��
		skin += "#L2432710##e#b#i2432710#  ��Ȳ���� ������ ��Ų\r\n";		//15��
		skin += "#L2432836##e#b#i2432836#  �հ� ������ ��Ų\r\n";		//16��
		skin += "#L2432973##e#b#i2432973#  ����� ������ ��Ų\r\n";		//17��
		skin += "#L2433063##e#b#i2433063#  ��Ÿ�÷��� ������ ��Ų\r\n";		//18��
		skin += "#L2433178##e#b#i2433178#  2014 �ҷ��� ������ ��Ų\r\n";	//20��	
		cm.sendSimple(skin);
	} if (status == 1) {
		if (cm.getRC() >= 3000 && !cm.haveItem(selection) && cm.canHold(selection)) {
			cm.gainItem(selection, 1);
			cm.gainRC(-3000);
			cm.sendOk("#e#b#i"+selection+"#   #z"+selection+"##n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.\r\n#e#b���� ����Ʈ : "+cm.getRC());
			cm.dispose();
		} else {
			cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� #i"+selection+"#   #z"+selection+"##n#k�� �̹�\r\n������ �ִ��� #e#bȮ��#n#k���ּ���.");
			cm.dispose();
		}
	}
}
