var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
        if (status == 0) {
		cm.sendSimple("#n\r\n#b�ھ�¶���#l#k�� #r[�������] �����̶���#l#k#k\r\n\r\n#L2##r[�ھ�¶���] ������� ��������#k#l\r\n#L3##b[�ھ�¶���] ������� ����#k#l");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("#e�Ŀ��ϽǺе��� �������ӽ� [�г��� : �� ��]�� �ŷ�Go~#k#n\r\n[�г��� : �� ��]�� �������� ���������\r\n����Ʈ�� : kki_look ���� �Ŀ������ּ���\r\nä�ù� 1��1 ��û : �� ��(kkilook_adm)\r\n[5õ�� = ����Ʈ 5000]  [2���� = ����Ʈ 20000]#k");
		} else if (selection == 1) {
			cm.openShop(20121125);
		} else if (selection == 5) {
			cm.openShop(9000153);
      } else if (selection == 2) {
        cm.dispose();
        cm.warp(910001000, 0);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(9031000);
	return;

      } else if (selection == 4) {
        cm.dispose();
        cm.openNpc(9201005);
	return;

      } else if (selection == 10) {
        cm.dispose();
        cm.openNpc(9050009);
	return;

      } else if (selection == 11) {
        cm.dispose();
        cm.openNpc(2159329);
	return;

      } else if (selection == 12) {
        cm.dispose();
        cm.openNpc(9330003);
	return;

      } else if (selection == 20) {
        cm.dispose();
        cm.openNpc(9201014);
	return;

      } else if (selection == 21) {
        cm.dispose();
        cm.openNpc(1012114);
	return;

      } else if (selection == 100) {
        cm.dispose();
        cm.openNpc(2101018);
	return;
		}
		cm.dispose();
	}
    
}
