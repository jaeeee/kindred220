var status;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var text = "#h #�� �ȳ��ϼ���, ������ ������ ������ ��ſ�Ű���?\r\n#b�̶�Ŭ ť�� ����#k�� #b����ο� �ֹ���#k�� ��ȯ�� �帮�� �ֽ��ϴ�. \r\n���� #r#c2430112##k���� �̶�Ŭ ť�� ������ �ֽ��ϴ�.\r\n���Ͻô� ��ȯ �׸��� ������ �ּ���.\r\n\r\n";
            if(cm.haveItem(2430112, 10)) {
                text += "#b#L0#���� 10���� 1���� #z2049401#�� ��ȯ�ϱ�.#l\r\n";
            } else {
                text += "#k#L0#���� 10���� 1���� #z2049401#�� ��ȯ�ϱ�.#l\r\n";
            }
            if(cm.haveItem(2430112, 15)) {
                text += "#b#L1#���� 15���� 1���� #z2049400#�� ��ȯ�ϱ�.#l\r\n";
            } else {
                text += "#k#L1#���� 15���� 1���� #z2049400#�� ��ȯ�ϱ�.#l\r\n";
            }
            text += "#L2##b��ȯ���� �ʰڽ��ϴ�.#l";
            cm.sendSimple(text);
        } else if(status == 1) {
            if(selection == 0) {
                if(cm.haveItem(2430112, 10)) {
                    if(cm.canHold(2049401)) {
                        cm.gainItem(2430112, -10);
                        cm.gainItem(2049401, 1);
                    } else {
                        cm.sendOk("�˼������� �κ��丮 ������ ������� ������ �� ���׿�. #b�Һ�#k���� �κ��丮 ������ ����ּ���.");
                    }
                } else {
                    cm.sendOk("�˼������� #b#z2430112##k�� ������� �����Ű� ���׿�.");
                }
                cm.dispose();
            } else if(selection == 1) {
                if(cm.haveItem(2430112, 15)) {
                    if(cm.canHold(2049400)) {
                        cm.gainItem(2430112, -15);
                        cm.gainItem(2049400, 1);
                    } else {
                        cm.sendOk("�˼������� �κ��丮 ������ ������� ������ �� ���׿�. #b�Һ�#k���� �κ��丮 ������ ����ּ���.");
                    }
                } else {
                    cm.sendOk("�˼������� #b#z2430112##k�� ������� �����Ű� ���׿�.");
                }
                cm.dispose();
            } else {
                cm.dispose();
            }
        } else { 
            cm.dispose();
        }
    }
}