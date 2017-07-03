importPackage(Packages.packet.creators);
importPackage(Packages.packet.skills);
importPackage(Packages.constants);
importPackage(Packages.handler.duey);

var status = -1;
var sel = 0;
var cash = "#fUI/SpiritNPC.img/BtAllReset/mouseOver/0#";
var vote = "#fUI/SpiritNPC.img/BtAllReset/pressed/0#";
var warp = "#fUI/SpiritNPC.img/backgrnd2#";
var shop = "#fUI/SpiritNPC.img/backgrnd#";
var help = "#fUI/SpiritNPC.img/BtAllReset/disabled/0#";
var constants = "#fUI/SpiritNPC.img/BtAllReset/normal/0#";

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
       /// cm.sendOk("��ſ� ���� �Ǽ���.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        var rand = Math.random() * 1000;
	var chat = "#e#b���¶��� #bLv."+cm.getPlayer().getLevel()+" #r#h ##k�� ȯ���մϴ�!\r\n#e#b���¶���#n#k�� #e#r����������#n#k #e#d�Ʒ��� �����ȳ��� ���ø� \r\n�˴ϴ�.";
	chat += "\r\n��#L0#" + cash + "#l ";
	chat += "#L1#" + vote + "#l";
	chat += "\r\n��#L2#" + warp + "#l ";
	chat += "#L3#" + shop + "#l";
	chat += "\r\n��#L4#" + help + "#l ";
	chat += "#L5#" + constants + "#l\r\n\r\n\r\n";
	if (cm.getPlayer().hasGmLevel(6)){
	chat += "#e#b  �ؼ����������#n#k\r\n";
	chat += "#L6##e�����ۺ���     ";
	chat += "#L7##e����������     ";
	chat += "#L8##e��������       \r\n";
	chat += "#L9##e�ø�����        ";
	chat += "#L10##eDB����         ";
	chat += "#L11##e������������   ";
	chat += "#L12##e����������   ";
}
	cm.sendSimple(chat);
  } else if (status == 1) {
	if(selection == 0) {
		sel = 100;
		cm.sendYesNo("���� #bĳ�ü�#k�� �̿��Ͻðھ��? #rŰ������ #eESC#n�� ���� �۾��� ����� �� �ֽ��ϴ�.#k");
	} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(9000230);
	} else if (selection == 2) {
		cm.dispose();
		cm.openNpc(1012000);
	} else if (selection == 3) {
		cm.warp(1000000, 0)
	} else if (selection == 4) {
		var notice = "#e#r[���� ������ �ȳ�]#k#n\r\n"
		notice += "��1. ���� ��� : NOBLE,���̳�\r\n��2. ���� ������ : ��������\r\n\r\n"
	notice += "#e#r[���� ��� �ȳ�]#k#n\r\n"
		notice += "��1. �ֿ� ��� ���ǽô� ��� �߾� ���忡 �ֽ��ϴ�.\r\n";
		notice += "��2. ���¶����� �ڵ����� �ý����� ����ϰ� �ֽ��ϴ�.\r\n";
                notice += "��3. �Ŀ����� �ñ����� �Ŀ������� ���ø� �ڼ��ϰ� ���Ǽ� �ֽ��ϴ�..\r\n";
		notice += "��4. ĳ�ø� ��� ����� #e\"����� �ϰų� ĳ�� ������ ���� ĳ�ðŷ�(@ĳ��)\"#n�� �Ͻø�˴ϴ�.\r\n\r\n";
		notice += "#e#r[���� ���ǻ��� �ȳ�]#k#n\r\n"
		notice += "��1. ������ ��Ӿ� ��� �� �ο�(�ο�����)�� �� ��쿡�� ������ ������ �ʰ� #e���� ����#n�� ���� �� �ֽ��ϴ�.";
        notice += "\r\n\r\n#e#r[���� ����� �ȳ�]#k#n\r\n"
                notice += "��1. �����е鰣�� ���뵵 �ſ� �߿��մϴ� ������ ������� ������� #e���¶��� ����#n�鿡�� ���� �����Ͻð� ���� �𸣰ڴ� �����ø� ����� ã���ּ���.";
		cm.sendNext(notice);
		cm.dispose();
	} else if (selection == 5) {
		var text = "�����¶��� #bLv."+cm.getPlayer().getLevel()+" #r#h ##k�� ȯ���մϴ�.\r\n\r\n";
		text += "��#e#r< �ΰ� ��� >#n\r\n";
		text += "#b#L1012008#�̴ϰ��ӿ� ���� ���� ���#l\r\n";
		text += "#L12101#���� ���� ��ŷ Ȯ���ϱ�#l\r\n";
		text += "#L9010033#���� ���� �ٲٱ�#l\r\n";
		text += "#L9072200#Ŭ����� ��ȭ�� ������ ��ȯ�ϱ�#l\r\n";
                text += "#L1095003#������ �����۽�ų �������ϱ�#l\r\n";
		text += "#L2411023#���¶��� ȯ���ϱ�#l\r\n";
		text += "#L2411025#���¶��� �����ϱ�#l\r\n";		                               
		cm.sendSimple(text);
	} else if (selection == 6) {
		cm.dispose();
		cm.openNpc(9090008);
	} else if (selection == 7) {
		cm.dispose();
		cm.openNpc(9900002);
	} else if (selection == 8) {
		cm.dispose();
		cm.openNpc(1052013);
	} else if (selection == 9) {
		cm.dispose();
		cm.openNpc(1052012);
	} else if (selection == 10) {
		cm.dispose();
		cm.openNpc(9900001);
	} else if (selection == 11) {
		cm.dispose();
		cm.openNpc(9090102);
	} else if (selection == 12) {
		cm.dispose();
		cm.openNpc(9000056);
	}
  } else if (status == 2) {
	if(sel == 100) {
	cm.dispose();
	cm.enterCS();
	} else {
	sel = selection;
	if (sel > 0) {
	cm.dispose();
	cm.openNpc(sel);
	}
	}
	} else {
		cm.dispose();
	}
}