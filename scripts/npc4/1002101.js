var status = 0;

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
	var chat = "#bȯ���� �ִ� 3������ ������ �����մϴ�.#k\r\n\r\n#r1��°���� = �α⵵200, Ap150\r\n2��°���� = �α⵵300, Ap300\r\n3��°���� = �α⵵500, Ap450#k\r\n\r\n#b������ �α⵵ 1000�� 1���� �����մϴ�.";
		chat += "\r\n#L1#ȯ���� �ϰڽ��ϴ�.";
		chat += "\r\n#L2#������ �ϰڽ��ϴ�.";
	cm.sendSimple(chat);

} if (selection == 1) {
	if (cm.getPlayerStat("LVL") == 200 && cm.getPlayer().getFame() == 0) {
	cm.getPlayer().setLevel(10);
	cm.getPlayer().gainAp(150);
	cm.getPlayer().addFame(200);
	cm.fakeRelog();
	cm.updateChar();
	cm.sendOk("#bù��° ȯ���� �Ϸ� �Ǿ����ϴ�.");
	cm.dispose();
	} else {
		if (cm.getPlayerStat("LVL") == 200 && cm.getPlayer().getFame() == 200) {
		cm.getPlayer().setLevel(10);
		cm.getPlayer().gainAp(300);
		cm.getPlayer().addFame(300);
		cm.fakeRelog();
		cm.updateChar();
		cm.sendOk("#b�ι�° ȯ���� �Ϸ� �Ǿ����ϴ�.");
		cm.dispose();

	} else {
		if (cm.getPlayerStat("LVL") == 200 && cm.getPlayer().getFame() == 500) {
		cm.getPlayer().setLevel(10);
		cm.getPlayer().gainAp(450);
		cm.getPlayer().addFame(500);
		cm.fakeRelog();
		cm.updateChar();
		cm.sendOk("#b����° ȯ���� �Ϸ� �Ǿ����ϴ�.");
		cm.dispose();

	} else {
		if (cm.getPlayerStat("LVL") <= 199) {
	   	cm.sendOk("#b���� 200�� �ȵǼ̱���? ���� 200�� �ǽ� �� �ٽ� ã���ּ���.");
		cm.dispose();

	} else {
		if (cm.getPlayer().getFame() >= 501) {
	   	cm.sendOk("\r\n#b�̹� �� 3���� ȯ���� �����ϼ̽��ϴ�.\r\n�� �̻� ȯ���� �Ͻ� �� �����ϴ�.");
		cm.dispose();	
						}
					}
				}
			}
		}
	}
}
if (status == 1) {
} if (selection == 2) {
	if (cm.getPlayerStat("LVL") == 200 && cm.getPlayer().getFame() == 1000) {
	cm.getPlayer().setLevel(10);
	cm.getPlayer().skillReset();
	cm.changeJob(0);
	cm.getPlayer().addFame(1);
	cm.fakeRelog();
	cm.updateChar();
	cm.sendOk("\r\n#b������ �Ϸ� �Ǿ����ϴ�.\r\n������ �� 1���� �����մϴ�.");
	cm.dispose();
	} else {
		if (cm.getPlayer().getFame() >= 1001) {
		cm.sendOk("\r\n#b�̹� ������ �ϼ̱���?\r\n������ �� 1���� �����մϴ�.");
		cm.dispose();
	} else {
		if (cm.getPlayerStat("LVL") <= 199) {
	   	cm.sendOk("#b���� 200�� �ȵǼ̱���? ���� 200�� �ǽ� �� �ٽ� ã���ּ���.");
		cm.dispose();
	} else {
		if (cm.getPlayer().getFame() <= 999) {
	   	cm.sendOk("#b�α⵵�� �����Ͻñ���? 3���� ȯ���� �Ͻð� �ٽ� ã���ּ���.");
		cm.dispose();


					}
				}
			}
		}
	}
}
