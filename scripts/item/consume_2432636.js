importPackage(Packages.constants);
importPackage(Packages.packet.creators);

var status = -1;

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
	sT = cm.getPlayer().getKeyValue("damageskin");
	showN = sT ==  1 ? "�����ж�����" :
		sT ==  2 ? "ũ��Ƽ�ƽ�" :
		sT ==  3 ? "��Ƽ ����Ʈ" :
		sT ==  4 ? "����Ƽ��" :
		sT ==  5 ? "������ ���� �Ѱ�" :
		sT ==  6 ? "Ŭ�� ��׽ý�" :
		sT ==  7 ? "�޸� ũ��������" :
		sT ==  8 ? "�� �ɼ���" :
		sT ==  9 ? "�˸�����" :
		sT == 10 ? "���ν���" :
		sT == 11 ? "Ű���� ������" :
		sT == 12 ? "������ ���ٶ�" :
		sT == 13 ? "�ַκδ�" : 
		sT == 14 ? "���̳ʼ���" :
		sT == 15 ? "��Ȳ����" :
		sT == 16 ? "�հ�" : "";

	sS = cm.getPlayer().getKeyValue2("DS_SAVE");
	showS = sS ==  1 ? "�����ж�����" :
		sS ==  2 ? "ũ��Ƽ�ƽ�" :
		sS ==  3 ? "��Ƽ ����Ʈ" :
		sS ==  4 ? "����Ƽ��" :
		sS ==  5 ? "������ ���� �Ѱ�" :
		sS ==  6 ? "Ŭ�� ��׽ý�" :
		sS ==  7 ? "�޸� ũ��������" :
		sS ==  8 ? "�� �ɼ���" :
		sS ==  9 ? "�˸�����" :
		sS == 10 ? "���ν���" :
		sS == 11 ? "Ű���� ������" :
		sS == 12 ? "������ ���ٶ�" :
		sS == 13 ? "�ַκδ�" :
		sS == 14 ? "���̳ʼ���" :
		sS == 15 ? "��Ȳ����" :
		sS == 16 ? "�հ�" : "";

	xX = sS != 0 ? "��" : "��";
	yY = sS != 0 ? " ������ ��Ų#k�Դϴ�." : "#k�����ϴ�.";
	Xx = sT != 0 ? "��" : "��";
	Yy = sT != 0 ? " ������ ��Ų#k�Դϴ�." : "#k�����ϴ�.";

		if(sT == null) { cm.getPlayer().setKeyValue("damageskin", "0") }
		if(sS == null) { cm.getPlayer().setKeyValue2("DS_SAVE", "0") }
	var text = "���Ͻô� ����� ������ �ּ���.\r\n\r\n";
	text += "#L1##b ���� ���� ���� ������ ��Ų�� �����Ѵ�.#k\r\n";
	text += "�� - ���� ����Ǿ� �ִ� ������ ��Ų"+Xx+" #b"+showN+""+Yy+"\r\n\r\n";
	text += "#L2##b ����Ǿ� �ִ� ������ ��Ų�� �����Ѵ�.#k\r\n";
	text += "�� - ���� ����� ������ ��Ų"+xX+" #b"+showS+""+yY+"";
	cm.sendSimple(text);
		
	} else if (status == 1) {
		Sort = selection == 1 ? 1 : 2
		switch(selection) {
			case 1:
			sT != 0 ? cm.sendYesNo("���� #b"+showN+" ������ ��Ų#k�� �����Ͻðڽ��ϱ�? ������ ����Ǿ� �ִ� ������ ��Ų�� ������ �����˴ϴ�.") :
				  cm.sendNext("�⺻ ������ ��Ų�� ������ �� �����ϴ�.");
			return;

			case 2:
			sS != 0 ? cm.sendYesNo("����� ������ ��Ų�� �����Ϸ� �Ͻô±���!\r\n#b���� ����� "+showN+" ������ ��Ų#k ��� #b"+showS+" ������ ��Ų#k�� �����Ű�ðڽ��ϱ�?") :
				  cm.sendNext("���� ����� ������ ��Ų�� �����ϴ�.");
			return;
		}
	} else if (status == 2) {
		switch(Sort) {
			case 1:
			if(sT != 0) {
			saveDS(sT);
			cm.sendNext("#b"+showN+" ������ ��Ų#k�� ����Ǿ����ϴ�.");
			}
			cm.dispose();
			return;

			case 2:
			if(sS != 0) {
			ReloadDS();
			cm.sendNext("#b"+showS+" ������ ��Ų#k�� ����Ǿ����ϴ�.");
			}
			cm.dispose();
			return;
		}
	}
}
}







function saveDS(i) {
	cm.getPlayer().setKeyValue2("DS_SAVE", i);
}

function ReloadDS() {
	switch(sS) {
		case 0:
		cm.getPlayer().setKeyValue("damageskin", 0);
		return;

		case 1:
		cm.getPlayer().setKeyValue("damageskin", 1);
		return;

		case 2:
		cm.getPlayer().setKeyValue("damageskin", 2);
		return;

		case 3:
		cm.getPlayer().setKeyValue("damageskin", 3);
		return;

		case 4:
		cm.getPlayer().setKeyValue("damageskin", 4);
		return;

		case 5:
		cm.getPlayer().setKeyValue("damageskin", 5);
		return;

		case 6:
		cm.getPlayer().setKeyValue("damageskin", 6);
		return;

		case 7:
		cm.getPlayer().setKeyValue("damageskin", 7);
		return;

		case 8:
		cm.getPlayer().setKeyValue("damageskin", 8);
		return;

		case 9:
		cm.getPlayer().setKeyValue("damageskin", 9);
		return;

		case 10:
		cm.getPlayer().setKeyValue("damageskin", 10);
		return;

		case 11:
		cm.getPlayer().setKeyValue("damageskin", 11);
		return;

		case 12:
		cm.getPlayer().setKeyValue("damageskin", 12);
		return;

		case 13:
		cm.getPlayer().setKeyValue("damageskin", 13);
		return;

		case 14:
		cm.getPlayer().setKeyValue("damageskin", 14);
		return;

		case 15:
		cm.getPlayer().setKeyValue("damageskin", 15);
		return;

		case 16:
		cm.getPlayer().setKeyValue("damageskin", 16);
		return;

	}
}