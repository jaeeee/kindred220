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
		cm.sendSimple("#n\r\n#b                  Ÿ�ӿ¶���#l#k�� #r��ȭ �ý����Դϴ�.#k\r\n#r#L1#���� ���� ��ȭ#k#l#b#L2#������ �ִ� ��ȭ#l#k#d#L0#������ �Ӽ� ��ȭ#l#k");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("#e���� �Ӽ� ��ȭ �ý����� �غ����̸� �ɼ� �ִ� �ý��۰� ���� ���� �ý����� �̿����ֽñ� �ٶ��ϴ�.#k");
      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(3000149);
	return;

      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(3001011);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(2150004);
	return;

		}
		cm.dispose();
	}
    
}
