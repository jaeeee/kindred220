/*
 * ������Ʈ : 1.2.214 SpiritStyle
 * Author : ���Ǹ��Ŵ���(sprit_m)
 * Script Author : ���Ǹ��Ŵ���(sprit_m), �Ͽ�(ifhayo)
 * 2nd Author : ��ü��Ÿ(ldvhappy)
 * �� �ּ��� ������ �ʾ��ּ����� ���ڽ��ϴ�.
 *
 */

var spirit = 0;
var status = 0;
var list = new Array(
new Array(2049401, 4000021, 30, 4003004, 5, 4000048, 50, 10, 300000),
new Array(2049400, 2049401, 1, 4003004, 10, 4020009, 1, 10, 700000),
new Array(2049301, 4000021, 30, 4003004, 10, 4000048, 10, 5, 500000),

new Array(1152034, 4000021, 50, 4000053, 100, 4000266, 200, 10, 300000),
new Array(1152035, 4000021, 50, 4000053, 100, 4000266, 200, 10, 300000),
new Array(1152036, 4000021, 50, 4000053, 100, 4000266, 200, 10, 300000),
new Array(1152037, 4000021, 50, 4000053, 100, 4000266, 200, 10, 300000),


new Array(1152038, 1152034, 1, 4020009, 20, 4000267, 200, 30, 300000),
new Array(1152039, 1152035, 1, 4020009, 20, 4000267, 200, 30, 300000),
new Array(1152040, 1152036, 1, 4020009, 20, 4000267, 200, 30, 300000),
new Array(1152041, 1152037, 1, 4020009, 20, 4000267, 200, 30, 300000),

new Array(1152046, 1152038, 1, 4020009, 50, 4000274, 200, 50, 1000000),
new Array(1152047, 1152039, 1, 4020009, 50, 4000274, 200, 50, 1000000),
new Array(1152048, 1152040, 1, 4020009, 50, 4000274, 200, 50, 1000000),
new Array(1152049, 1152041, 1, 4020009, 50, 4000274, 200, 50, 1000000),

new Array(1152149, 1152046, 1, 2049301, 1, 4000021, 10, 10, 500000),
new Array(1152150, 1152047, 1, 2049301, 1, 4000021, 10, 10, 500000),
new Array(1152151, 1152048, 1, 2049301, 1, 4000021, 10, 10, 500000),
new Array(1152152, 1152049, 1, 2049301, 1, 4000021, 10, 10, 500000),

new Array(1152154, 1152149, 1, 1152150, 1, 1152151, 1, 1152152, 1, 4020009, 70, 4020013, 50, 300, 10000000),
new Array(1152155, 1152149, 1, 1152150, 1, 1152151, 1, 1152152, 1, 4020009, 50, 4020013, 50, 300, 10000000)

);



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
		if(cm.getPlayer().getKeyValue("S_1") != null) { cm.getPlayer().setKeyValue("S_1", 5) }
		if(cm.getPlayer().getKeyValue("S_2") != null) { cm.getPlayer().setKeyValue("S_2", 3) }

		var k = "#fUI/UIToolTip/Item/Equip/Star/Star#"
		var yk = "���ӿ� ������ �������� ���� �� �ִ�. ������ ���ϴ� �������� ������ ��������..#b\r\n";
		yk += "#L0#"+k+" #e�ֹ���#n�� �����Ѵ�.\r\n";
		yk += "#L1#"+k+" #e������#n�� �����Ѵ�.\r\n";
		yk += "#L2#"+k+" #e����� ������#n�� �����Ѵ�.\r\n";
		cm.sendSimpleS(yk, 2);
	}

	else if (status == 1) {
		var category = selection == 0 ? "�ֹ�����" : selection == 1 ? "��������" : "����� ��������"
		var chat = "������ ���Ͻô� "+category+" ��������. ������ ���� ���콺�� �ø��� �������� ������ �� �� �ִ�.#b\r\n\r\n"
		if (selection == 0) {
		chat += "#e#r[����ɷ� �ο� �ֹ���]#k#n\r\n";
		for (i = 0; i < 2; chat += "#b#L"+i+"##i"+list[i][0]+"# #z"+list[i][0]+"##l\r\n",i++); chat += "\r\n\r\n";
		chat += "#e#r[���ȭ �ֹ���]#k#n\r\n";
		for (i = 2; i < 3; chat += "#b#L"+i+"##i"+list[i][0]+"# #z"+list[i][0]+"##l\r\n",i++); chat += "\r\n\r\n";
		}

		else if (selection == 1) {
		chat += "#e#r[��� ���]#k#n\r\n";
		for (i = 3; i < 7; chat += "#b#L"+i+"##i"+list[i][0]+"# #z"+list[i][0]+"##l\r\n",i++); chat += "\r\n\r\n";
		chat += "#e#r[�ξ� ���]#k#n\r\n";
		for (i = 7; i < 11; chat += "#b#L"+i+"##i"+list[i][0]+"# #z"+list[i][0]+"##l\r\n",i++); chat += "\r\n\r\n";
		chat += "#e#r[���̴� �ξ� ���]#k#n\r\n";
		for (i = 11; i < 15; chat += "#b#L"+i+"##i"+list[i][0]+"# #z"+list[i][0]+"##l\r\n",i++); chat += "\r\n\r\n";
		}

		else if (selection == 2) {
		chat += "#e#r[���̴� �ξ� ���̽��� ���]#k#n��(���� ���� Ƚ�� : "+cm.getPlayer().getKeyValue("S_1")+"ȸ)\r\n";
		for (i = 15; i < 19; chat += "#b#L"+i+"##i"+list[i][0]+"# #z"+list[i][0]+"##l\r\n",i++); chat += "\r\n\r\n";
		chat += "#e#r[����� ���]#k#n��(���� ���� Ƚ�� : "+cm.getPlayer().getKeyValue("S_2")+"ȸ)\r\n";
		for (i = 19; i < 21; chat += "#b#L"+i+"##i"+list[i][0]+"# #z"+list[i][0]+"##l\r\n",i++); chat += "\r\n\r\n";
		}
		cm.sendSimpleS(chat, 2);
	}
	
	else if (status == 2) {
		item = selection;
			if(selection < 19) {
		var chat = "#b#z"+list[selection][0]+"##k�� ������� �Ʒ��� �ִ� ���� �ణ�� �����ᰡ �ʿ��ϴ�.\r\n\r\n#b"
		chat += "#i"+list[selection][1]+"# #z"+list[selection][1]+"# "+list[selection][2]+"��\r\n";
		chat += "#i"+list[selection][3]+"# #z"+list[selection][3]+"# "+list[selection][4]+"��\r\n";
		chat += "#i"+list[selection][5]+"# #z"+list[selection][5]+"# "+list[selection][6]+"��\r\n";
		chat += "#i4310119# #z4310119# "+list[selection][7]+"��\r\n";
		chat += "#i4031138# "+list[selection][8] / 10000+"�� �޼�";
		spirit = 1;
			} else {
		var chat = "#b#z"+list[selection][0]+"##k�� ������� �Ʒ��� �ִ� ���� �ణ�� �����ᰡ �ʿ��ϴ�.\r\n\r\n#b"
		chat += "#i"+list[selection][1]+"# #z"+list[selection][1]+"# "+list[selection][2]+"��\r\n";
		chat += "#i"+list[selection][3]+"# #z"+list[selection][3]+"# "+list[selection][4]+"��\r\n";
		chat += "#i"+list[selection][5]+"# #z"+list[selection][5]+"# "+list[selection][6]+"��\r\n";
		chat += "#i"+list[selection][7]+"# #z"+list[selection][7]+"# "+list[selection][8]+"��\r\n";
		chat += "#i"+list[selection][9]+"# #z"+list[selection][9]+"# "+list[selection][10]+"��\r\n";
		chat += "#i"+list[selection][11]+"# #z"+list[selection][11]+"# "+list[selection][12]+"��\r\n";
		chat += "#i4310119# #z4310119# "+list[selection][13]+"��\r\n";
		chat += "#i4031138# "+list[selection][14] / 10000+"�� �޼�";
		spirit = 2;
		}

		cm.sendNextS(chat, 2);
	}

	else if (status == 3) {
		if(spirit == 1) {
			if(cm.haveItem(list[item][1], list[item][2]) && cm.haveItem(list[item][3], list[item][4]) && cm.haveItem(list[item][5], list[item][6]) && cm.haveItem(4310119, list[item][7]) && cm.getMeso() > list[item][8]) {
				if(!cm.canHold(list[item][0])) {
				cm.sendNextS("�κ��丮�� ���� ������ ���ų� �����Ϸ��� �������� ���� �������� �� ����.", 2);
				cm.dispose();
				}
				else {
					if(list[item][0] < 1152149 || list[item][0] > 1152152) {
						cm.gainItem(list[item][0], 1);
						cm.gainItem(list[item][1], -list[item][2]);
						cm.gainItem(list[item][3], -list[item][4]);
						cm.gainItem(list[item][5], -list[item][6]);
						cm.gainItem(4310119, -list[item][7]);
						cm.gainMeso(-list[item][8]);
				cm.sendNextS("#b#i"+list[item][0]+"# #z"+list[item][0]+"##k �������� �����ϴµ� �����Ͽ���. �κ��丮�� Ȯ���غ���.", 2);

					} else {
						if(cm.getPlayer().getKeyValue("S_1") != 0) {
						cm.gainItem(list[item][0], 1);
						cm.gainItem(list[item][1], -list[item][2]);
						cm.gainItem(list[item][3], -list[item][4]);
						cm.gainItem(list[item][5], -list[item][6]);
						cm.gainItem(4310119, -list[item][7]);
						cm.gainMeso(-list[item][8]);
						} else {
						cm.sendNextS("���̴� �ξ� ���̽��� ��� ������ �������� �� �̻� ���� �� ����. �ٸ� �������� ����� ����.", 2);
						}
					}
				if(list[item][0] == 1152149 || list[item][0] == 1152150 || list[item][0] == 1152151 || list[item][0] == 1152152 )
					if(cm.getPlayer().getKeyValue("S_1") == 5) { cm.getPlayer().setKeyValue("S_1", 4) }
					else if(cm.getPlayer().getKeyValue("S_1") == 4) { cm.getPlayer().setKeyValue("S_1", 3) }
					else if(cm.getPlayer().getKeyValue("S_1") == 3) { cm.getPlayer().setKeyValue("S_1", 2) }
					else if(cm.getPlayer().getKeyValue("S_1") == 2) { cm.getPlayer().setKeyValue("S_1", 1) }
					else if(cm.getPlayer().getKeyValue("S_1") == 1) { cm.getPlayer().setKeyValue("S_1", 0) }
				cm.dispose();
				}
			}
			else {
			cm.sendNextS("��ᰡ �����ϰų� �����ᰡ ����. ��� ��ƿ� �� �ٽ� �õ��غ���.", 2);
			cm.dispose();
			}
		}
		else if(spirit == 2) {
		if(cm.getPlayer().getKeyValue("S_2") != 0) {
			if(cm.haveItem(list[item][1], list[item][2]) && cm.haveItem(list[item][3], list[item][4]) && cm.haveItem(list[item][5], list[item][6]) && cm.haveItem(list[item][7], list[item][8]) && cm.haveItem(list[item][9], list[item][10]) && cm.haveItem(list[item][11], list[item][12]) && cm.haveItem(4310119, list[item][13]) && cm.getMeso() > list[item][14]) {
				if(!cm.canHold(list[item][0])) {
				cm.sendNextS("�κ��丮�� ���� ������ ���ų� �����Ϸ��� �������� ���� �������� �� ����.", 2);
				cm.dispose();
				}
				else {
				cm.gainItem(list[item][0], 1);
				cm.gainItem(list[item][1], -list[item][2]);
				cm.gainItem(list[item][3], -list[item][4]);
				cm.gainItem(list[item][5], -list[item][6]);
				cm.gainItem(list[item][7], -list[item][8]);
				cm.gainItem(list[item][9], -list[item][10]);
				cm.gainItem(list[item][11], -list[item][12]);
				cm.gainItem(4310119, -list[item][13]);
				cm.gainMeso(-list[item][14]);
				cm.sendNextS("#b#i"+list[item][0]+"# #z"+list[item][0]+"##k �������� �����ϴµ� �����Ͽ���. �κ��丮�� Ȯ���غ���.", 2);
					if(cm.getPlayer().getKeyValue("S_2") == 3) { cm.getPlayer().setKeyValue("S_2", 2) }
					else if(cm.getPlayer().getKeyValue("S_2") == 2) { cm.getPlayer().setKeyValue("S_2", 1) }
					else if(cm.getPlayer().getKeyValue("S_2") == 1) { cm.getPlayer().setKeyValue("S_2", 0) }

				cm.dispose();
				}
			}
			else {
			cm.sendNextS("��ᰡ �����ϰų� �����ᰡ ����. ��� ��ƿ� �� �ٽ� �õ��غ���.", 2);
			cm.dispose();
			}
			}
			else {
			cm.sendNextS("���̽��� ���, ��Į�� ����� �� �̻� ���� �� ����. �ٸ� �������� ����� ����.",2 );
			cm.dispose();
			}
		}
	}
}
}