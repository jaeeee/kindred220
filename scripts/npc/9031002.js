


/*

	���� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : Ƽ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9031002

	���ǽ� �̸� : ���

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ����������� &lt;���̽��� ��> (910001000)

	���ǽ� ���� : ä���� ������


*/
importPackage(Packages.client);
importPackage(Packages.constants);
var status = -1;
var select = -1;

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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        var menu = "�׷�. ä���� ������ �� #b���#k�Կ��� ���ϴ°��� �����ΰ�?\r\n";
        menu += "#L0##b#eä��#n�� ���� ������ ��´�.#l\r\n";
        if (cm.getProfession(1) != MapleProfessionType.MINING.getValue()) {
            menu += "#L1##eä��#n�� ����.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.MINING.getValue()) {
            menu += "#L2##eä��#n�� �ʱ�ȭ �Ѵ�.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.MINING.getValue() && cm.getPlayer().getProfession().getFirstProfessionExp() == GameConstants.getProfessionExpNeededForLevel(cm.getPlayer().getProfession().getFirstProfessionLevel())) {
            menu += "#L3##eä��#n�� ������ �� �ܰ� �ø���.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.MINING.getValue()) {
            menu += "#L4##b#t4011010#�� ��ȯ�Ѵ�.#k#l";
        }
        cm.sendSimple(menu);
    } else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendOk("ä���� ������ ���� ������ �ִ� ���� ������ ä���ϰ�, �Ƹ���� ��¦��¦�ϰ� ������ �� �ִ� ����̶��. �� ä������� �ִٸ� �������� ġ���� ����� ���� �η��� �ʴ� ������! �ƾ�!");
            cm.dispose();
            return;
        } else if (selection == 1) {
            if (cm.getProfession(1) == 0) {
                cm.sendYesNo("#bä��#k�� ���� �ͳ�? ����� #b5000 �޼�#k���. ���� ���� �ͳ�\r\n#b(���� ���� �Ͻ� ������� ���� : 0��)");
            } else {
                cm.sendOk("�̹� ����ä���� ���� �ִ� �� ������? �׷��ٸ� #b���ݼ�#k�� ã�ư� ���Գ�.");
                cm.dispose();
                return;
            }
        } else if (selection == 2) {
            if (cm.getProfession(1) == MapleProfessionType.MINING.getValue()) {
                cm.sendYesNo("ä���� ����� ���� ���·� �ʱ�ȭ �Ѵٳ�. ���� ���� ���� ������ ���õ��� ��� ��� ���ٵ�, ���� �ʱ�ȭ�� �Ұǰ�?");
            }
        } else if (selection == 3) {
            if (cm.getProfession(1) == MapleProfessionType.MINING.getValue()) {
                cm.sendYesNo("#bä��#k�� ������ �Ѵܰ� �÷��ְڳ�. ������� #b"+(cm.getPlayer().getProfession().getFirstProfessionLevel()*100000)+"�޼�#k �ϼ�.");
            }
        } else if (selection == 4) {
            if (cm.getProfession(1) == MapleProfessionType.MINING.getValue()) {
                cm.sendYesNo("#b#t4011010#�� 100��#k��ƿ��ø� #b#i2028067##t2028067# 1��#k�� ��ȯ���ְ� �ֳ�. ��ȯ�ϰ� ������?");
            }
        }
    } else if (status == 2) {
        if (select == 1) {
            if (cm.getPlayer().getMeso() >= 5000) {
                if (!cm.canHold(1512000)) {
                    cm.sendOk("��� �� ������ �� ĭ �̻� ����ְ�.");
                    cm.dispose();
                    return;
                }
                cm.gainMeso(-5000);
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainItem(1512000, 1);
                cm.setProfession(1, MapleProfessionType.MINING.getValue());
                cm.sendOk("����. ä���� ���������� ������.  ���õ��� �� ä�������� ������ �ø� �� ������ �ٽ� ã�ƿ���.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("�޼Ұ� ������ �� ������? �ٽ� �ѹ� Ȯ���� ����.");
                cm.dispose();
                return;
            }
        } else if (select == 2) {
            if (cm.getProfession(2) != 0) {
                cm.sendOk("�̹� ��������̳� ��ű� ������ ���� �ֳ�? 2�� ��������� ��� ���·δ� ����� �ʱ�ȭ�� �� ���ٳ�.");
                cm.dispose();
                return;
            }
            cm.deleteProfession(1);
            cm.sendOk("ä�� ����� ��� �ʱ�ȭ �ߴٳ�. �ٽ� ���� ������ ������ �ٽ� �����.");
            cm.dispose();
        } else if (select == 3) {
            if (cm.getPlayer().getMeso() >= (cm.getPlayer().getProfession().getFirstProfessionLevel()*100000)) {
                if (cm.getPlayer().getProfession().getFirstProfessionLevel() == 3) {
                    if (cm.canHold(2028067)) {
                        cm.gainItem(2028067, 1);
                    } else {
                        cm.sendOk("�Һ� �κ��丮 ������ ��ĭ �̻� ����ְ�.");
                        cm.dispose();
                        return;
                    }
                } else if (cm.getPlayer().getProfession().getFirstProfessionLevel() == 6) {
                    if (cm.canHold(4330004)) {
                        cm.gainItem(4330004, 1);
                    } else {
                        cm.sendOk("��Ÿ �κ��丮 ������ ��ĭ �̻� ����ְ�.");
                        cm.dispose();
                        return;
                    }
                }
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainMeso(-(cm.getPlayer().getProfession().getFirstProfessionLevel()*100000));
                cm.levelUpProfession(1);
                cm.sendOk("ä���� ����� �Ѵܰ� �ö��ٳ�. �����ϳ�~");
                cm.dispose();
            } else {
                cm.sendOk("�޼Ұ� �����Ѱ� �ƴ��� Ȯ���� ����");
                cm.dispose();
            }
        } else if (select == 4) {
            if (!cm.haveItem(4011010, 100)) {
                cm.sendOk("#t4011010#�� �� ���� �ִ°ǰ�?");
                cm.dispose();
                return;
            } else {
                cm.sendGetNumber("� ��ȯ�غ��� �ͳ�? ���� #b#c4011010##k���� #t4011010#�� �ִٳ�.", 1, 1, 100);
            }
        }
    } else if (status == 3) {
        if (select == 4) {
            if (cm.haveItem(4011010, selection * 100)) {
                cm.sendOk("��ȯ�� �Ϸ�Ǿ���.");
                cm.dispose();
                cm.gainItem(4011010, -(selection * 100));
                cm.gainItem(2028067, 1);
            }
        }
    }
}
