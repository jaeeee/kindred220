


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	�ɳ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2080000

	���ǽ� �̸� : ��

	���ǽð� �ִ� �� : �̳����� : ������ (240000000)

	���ǽ� ���� : ���� �ռ� �����


*/

var status;
var select;
function start() {
    status = -1;
	action(1, 0, 0);
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
		if (cm.getQuestStatus(7301) >= 1) {
			cm.sendSimple("����~ ������ ���� Ư���� ��Ź�� �־� �� �� ������? ���� �Ϸ� �°���?#b\r\n\r\n#L1#�ڴϾ��� �ܵ��� �ʿ��ؿ�.#l\r\n#L2#��� �����ϰ� �;��.#l");
		} else {
			cm.sendYesNo("���� ��� ������ ������. ��� �����ϰ� �;�?");
		}


	} else if (status == 1) {
		select = selection;
		if (selection == 1) {
			cm.sendYesNo("#b�ڴϾ��� �ܵ�#k�� �ʿ��ϴٴ� ����? #b�ڴϾ��� �ܵ�#k�� ������� #b������ �ܵ�#k�� �����ϴ� ����ۿ� ����. #b������ �ܵ�#k�� �����Ϸ��� ������ ���� ��ᰡ �ʿ�����. �����ھ�?\r\n\r\n#b#i4001079# #z4001079# 1��\r\n#i4011001# #z4011001# 1��\r\n#i4011002# #z4011002# 1��");
		} else {
			cm.sendOk("REPAIR");
			cm.dispose();
		}
	} else if (status == 2) {
		if (select == 1) {
			if (cm.haveItem(4001079,1) && cm.haveItem(4011001,1) && cm.haveItem(4011002,1) && cm.canHold(4011078)) {
				cm.gainItem(4001079,-1);
				cm.gainItem(4011001,-1);
				cm.gainItem(4011002,-1);
				cm.gainItem(4001078,1);
				cm.dispose();
			} else {
				cm.sendOk("�κ��丮 ������ �������, �Ǵ� �������� ����� ���� �ִ°��� Ȯ���� ��.");
				cm.dispose();
			}
		}
	}


else { 
		cm.dispose();
	}
    }
}
