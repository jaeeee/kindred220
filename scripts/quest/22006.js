var status = -1;

function end(mode, type, selection) {
	status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
		    qm.dispose();
			return;
		}
	}
	if (status == 0) {
		qm.sendNext("����, ���ƿԴ�? ��, �� ���� �� ���ö��뵵 �����Ա��� ���ϱ⵵ ����. ��? ���� ��� �ϸ� �� Ű��İ�?.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2022621# 20 #t2022621#s \r\n#i2022622# 20 #t2022622# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 270 exp");
	} else if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(4032450, -1);
		qm.gainItem(2022621, 20);
		qm.gainItem(2022622, 20);
		qm.gainExp(270);
		qm.sendOk("���� ��ȭ��Ű�� �� ���� ����� ������ ��ȭ�⸦ ���� �� ���� �����ϴܴ�. �׷��� ���� #b��Ÿ#k�� ��ȭ�⸦ �ϳ� ������ �־��� �� ������, ��Ÿ���� �޶�� �ϸ� ���� ������?");
		qm.dispose();
	}
}