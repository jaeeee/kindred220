var status;
var select;
var tt;
var price;
importPackage(Packages.client);
function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode != 1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		
		cm.sendSimple("�� ������ ���� ���ʳ��� �Բ��� �������.. �̳༮��ŭ�� ���� �� �� ����.\r\n\r\n#b#L0##s80001027# ���� ����� �뿩 (1�� - 15�� �޼�)#l\r\n#L1##s80001027# ���� ����� �뿩 (3�� - 40�� �޼�)#l\r\n#L2##s80001027# ���� ����� �뿩 (7�� - 90�� �޼�)#l\r\n\r\n#L3##s80001028# ���� ����� �뿩 (1�� - 30�� �޼�)#l\r\n#L4##s80001028# ���� ����� �뿩 (3�� - 80�� �޼�)#l\r\n#L5##s80001028# ���� ����� �뿩 (7�� - 180�� �޼�)#l\r\n");
		

	} else if (status == 1) {
		select = selection;
		
			var msg="������ #e";
			if (select <= 2) {
				msg+="#s80001027# ���� �����";
			} else {
				msg+="#s80001028# ���� �����";
			}
			msg += "#k#n �� ";
			if (select >= 3) tt = select - 3;
			else tt = select;
			if (tt == 0) tt = 1;
			else if (tt == 1) tt = 3;
			else if (tt == 2) tt = 7;
			msg += tt;
			msg += "�� ���� �뿩�غ��ٰ�? \r\n\r\n����� #b";
			if (tt == 1) price = 15;
			else if (tt == 3) price = 40;
			else if (tt == 7) price = 90;
			if (select >= 3) price *= 2;
			msg += price;
			msg +="��#k �޼� ���. ���? ������ ��������?";
			cm.sendYesNo(msg);
		
	} else if (status == 2) {
			if (cm.getMeso() >= price * 10000) {
				var skill = 80001027;
				if (select >= 3) skill++;
				//cm.getPlayer().changeSkillLevel(SkillFactory.getSkill(skill),1,1,java.lang.System.currentTimeMillis() + 1000 * 86400 * tt);
				cm.teachSkillPeriod(skill,1,1,tt);
				cm.getPlayer().Message("����⸦ ���������� �뿩�߽��ϴ�.");
				cm.gainMeso(-(price * 10000));
				cm.dispose();
			} else {
				cm.sendOk("�ڳ�.. �޼Ҵ� ����� ���� �ִ°ǰ�?");
				cm.dispose();
				return;
			}
	}
	
    }
}