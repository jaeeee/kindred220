/* 
                 Yang Online 1.2.169
                       ��� - b_b_secret@naver.com
*/
var status;

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
			var str = "#e�����ý��丮#n�� ĳ�ñ�ȯ �ý����Դϴ�.\r\n�Ʒ���Ͽ��� �ɼ��� �������ּ���.\r\n#b";
			str += "#L8#�ؽ�ĳ�ø� �޼ҷ� ��ȯ�մϴ�.#l\r\n";
			str += "#L9#�޼Ҹ� �ؽ�ĳ�÷� ��ȯ�մϴ�.#l";
			cm.sendSimple(str);
		} else if (status == 1) {
				if (selection == 8) {
					var str1 = "��ȯ�Ͻ� ���� �ؽ�ĳ�ø� �������ּ���.#b\r\n";
					str1 += "#L0#�ؽ�ĳ�� 1õ���� 5���޼ҷ� ��ȯ�մϴ�.#l\r\n";
					str1 += "#L1#�ؽ�ĳ�� 5õ���� 30���޼ҷ� ��ȯ�մϴ�.#l\r\n";
					str1 += "#L2#�ؽ�ĳ�� 1������ 70���޼ҷ� ��ȯ�մϴ�.#l\r\n";
					str1 += "#L3#�ؽ�ĳ�� 10������ 400���޼ҷ� ��ȯ�մϴ�.#l";
					cm.sendSimple(str1);
				} else if (selection == 9) {
					var str2 = "��ȯ�Ͻ� ���� �ؽ�ĳ�ø� �������ּ���.#b\r\n";
					str2 += "#L4#10���޼Ҹ� 2õĳ�÷� ��ȯ�մϴ�.#l\r\n";
					str2 += "#L5#30���޼Ҹ� 5õĳ�÷� ��ȯ�մϴ�.#l\r\n";
					str2 += "#L6#70���޼Ҹ� 1��ĳ�÷� ��ȯ�մϴ�.#l\r\n";
					str2 += "#L7#400���޼Ҹ� 10��ĳ�÷� ��ȯ�մϴ�.#l\r\n";
					cm.sendSimple(str2);
				}
			
        } else if (status == 2) {
				if (selection == 0) {
					cm.sendOk("#b#h ##k���� �����Ͻ� �����Դϴ�.\r\n\r\n#b��� �޼� : 5���޼�\r\n#r�Ҵ� �ؽ�ĳ�� : 1õĳ��");
					if (cm.getNX() >= 1000) {
						cm.gainMeso(50000);
						cm.getPlayer().modifyCSPoints(1, -1000, false);
						cm.dispose();
					}
				} else if (selection == 1) {
					cm.sendOk("#b#h ##k���� �����Ͻ� �����Դϴ�.\r\n\r\n#b��� �޼� : 30���޼�\r\n#r�Ҵ� �ؽ�ĳ�� : 5õĳ��");
					if (cm.getNX() >= 5000) {
						cm.gainMeso(300000);
						cm.getPlayer().modifyCSPoints(1, -5000, false);
						cm.dispose();
					}
				} else if (selection == 2) {
					cm.sendOk("#b#h ##k���� �����Ͻ� �����Դϴ�.\r\n\r\n#b��� �޼� : 70���޼�\r\n#r�Ҵ� �ؽ�ĳ�� : 1��ĳ��");
					if (cm.getNX() >= 10000) {
						cm.gainMeso(700000);
						cm.getPlayer().modifyCSPoints(1, -10000, false);
						cm.dispose();
					}
				} else if (selection == 3) {
					cm.sendOk("#b#h ##k���� �����Ͻ� �����Դϴ�.\r\n\r\n#b��� �޼� : 400���޼�\r\n#r�Ҵ� �ؽ�ĳ�� : 10��ĳ��");
					if (cm.getNX() >= 100000) {
						cm.gainMeso(4000000);
						cm.getPlayer().modifyCSPoints(1, -100000, false);
						cm.dispose();
					}
				} else if (selection == 4) {
					cm.sendOk("#b#h ##k���� �����Ͻ� �����Դϴ�.\r\n\r\n#b��� �ؽ�ĳ�� : 1õĳ��\r\n#r�Ҵ� �޼� : 10�� �޼�");
					if (cm.getMeso() >= 100000) {
						cm.gainMeso(-100000);
						cm.getPlayer().modifyCSPoints(1, 1000, false);
						cm.dispose();
					}
				} else if (selection == 5) {
					cm.sendOk("#b#h ##k���� �����Ͻ� �����Դϴ�.\r\n\r\n#b��� �ؽ�ĳ�� : 5õĳ��\r\n#r�Ҵ� �޼� : 30�� �޼�");
					if (cm.getMeso() >= 300000) {
						cm.gainMeso(-300000);
						cm.getPlayer().modifyCSPoints(1, 5000, false);
						cm.dispose();
					}
				} else if (selection == 6) {
					cm.sendOk("#b#h ##k���� �����Ͻ� �����Դϴ�.\r\n\r\n#b��� �ؽ�ĳ�� : 1��ĳ��\r\n#r�Ҵ� �޼� : 70�� �޼�");
					if (cm.getMeso() >= 700000) {
						cm.gainMeso(-700000);
						cm.getPlayer().modifyCSPoints(1, 10000, false);
						cm.dispose();
					}
				} else if (selection == 7) {
					cm.sendOk("#b#h ##k���� �����Ͻ� �����Դϴ�.\r\n\r\n#b��� �ؽ�ĳ�� : 10��ĳ��\r\n#r�Ҵ� �޼� : 400�� �޼�");
					if (cm.getMeso() >= 4000000) {
						cm.gainMeso(-4000000);
						cm.getPlayer().modifyCSPoints(1, 100000, false);
						cm.dispose();
					}
				}
			}
		}
}