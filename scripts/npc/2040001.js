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
		cm.sendSimple("#r �Ŀ����� 20000 = [��ɽ� ����ġ15% �߰�����]\r\n �Ŀ����� 50000 = [��ɽ� ����ġ25% �߰�����]\r\n �Ŀ����� 100000 = [��ɽ� ����ġ50% �߰�����]\r\n �Ŀ����� 200000 = [��ɽ� ����ġ100% �߰�����]#k\r\n#L0##r[Read]#k#b[Life�¶���]�Ŀ���� �˾ƺ���#k#l\r\n\r\n#L101##r[HOT]#k#b[Life�¶���] �Ŀ������� ����#k#l\r\n\r\n#L104##r[NEW]#k#g[Life�¶���] �Ŀ�����Ʈ ����#k#l\r\n\r\n#L102##r[NEW]#k#b[Life�¶���] ��� �ý��� ��ȭ !!#k#l\r\n\r\n#L103##r[NEW]#k#b[Life�¶���] ��� ��/�� ��ȭ !!#k#l");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("��ǰ���Ŀ��� �Ʒ���Ŀ� �°� �ۼ��ؼ� ���Ϸ� �����ּ���\r\n��ǰ���̸� : \r\n��ǰ���ɹ�ȣ : \r\n��ǰ�ǹ�������(���ǸӴ��ϰ��) : \r\n��ǰ�Ǳݾ� : \r\n���޹����г��� : \r\n kki_looking@naver.com ���� �̷��� ��Ŀ����纸���ø�\r\n�ִ��� ���������ص帮�ڽ��ϴ�.\r\n����ǥ�� www.coreple.kr.pe ������ �Ŀ�����������\r\n�ѿ�� �� �ٸ�������״� �����Ŀ��̺Ұ����մϴ�.");
		} else if (selection == 1) {
			cm.openShop(20121125);
		} else if (selection == 5) {
			cm.openShop(9000153);
      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(2095000);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(9250006);
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
        cm.openNpc(1012122);
	return;

      } else if (selection == 12) {
        cm.dispose();
        cm.openNpc(9330003);
	return;

      } else if (selection == 20) {
        cm.dispose();
        cm.openNpc(9201014);
	return;

      } else if (selection == 102) {
        cm.dispose();
        cm.openNpc(9000030);
	return;

      } else if (selection == 103) {
        cm.dispose();
        cm.openNpc(9000013);
	return;

      } else if (selection == 104) {
        cm.dispose();
        cm.openNpc(9000175);
	return;

      } else if (selection == 100) {
        cm.dispose();
        cm.openNpc(2101018);
	return;

      } else if (selection == 101) {
        cm.dispose();
        cm.openNpc(1002002);
	return;
		}
		cm.dispose();
	}
    
}
