


/*

	���� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : Ƽ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9031001

	���ǽ� �̸� : ��Ÿÿ

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ����������� &lt;���̽��� ��> (910001000)

	���ǽ� ���� : ����ä���� ������


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
        var menu = "�ȳ��ϼ���. ������ ���͵帱���?\r\n";
        menu += "#L0##b#e���� ä��#n�� ���� ������ ��´�.#l\r\n";
        if (cm.getProfession(1) != MapleProfessionType.HERBALISM.getValue()) {
            menu += "#L1##e���� ä��#n�� ����.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
            menu += "#L2##e���� ä��#n�� �ʱ�ȭ �Ѵ�.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue() && cm.getPlayer().getProfession().getFirstProfessionExp() == GameConstants.getProfessionExpNeededForLevel(cm.getPlayer().getProfession().getFirstProfessionLevel())) {
            menu += "#L3##e���� ä��#n�� ������ �� �ܰ� �ø���.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
            menu += "#L4##b#t4022023#�� ��ȯ�Ѵ�.#k#l";
        }
        cm.sendSimple(menu);
    } else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendOk("���� ä���� ������ ���忡 �ִ� �������� �����ϰ� ȿ�� ���� ���ʸ� ä���ϰ�, ���ʸ� �̿��ؼ� ��Ḧ ���� �� �־��. ���ݼ��� �����ϽŴٸ� �ʼ����� ����� ������.");
            cm.dispose();
            return;
        } else if (selection == 1) {
            if (cm.getProfession(1) == 0 && cm.getProfession(2) == 0) {
                cm.sendYesNo("#b���� ä��#k�� ���ϴ�. ����� #b5000 �޼�#k�Դϴ�. ���� ���ðڽ��ϱ�?\r\n#b(���� ���� �Ͻ� ������� ���� : 0��)");
            } else if (cm.getProfession(2) != 0) {
              cm.sendOk("�̹� ���� ä���� ���� ��ſ�.");
              cm.dispose();
            } else {
                
                cm.sendOk("�̹� ä���� ���� ��Ű� ��������? ä���� ���� ���¿����� ���� ä���� ���� �� �����.");
                cm.dispose();
                return;
            }
        } else if (selection == 2) {
            if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendYesNo("#b���� ä��#k�� �ʱ�ȭ �մϴ�. �ٽ� ���÷��� �����Ḧ �ٽ� ���ž� �ϸ�, �ʱ�ȭ �Ͻø� �ٸ� ��������� ���� �� �ֽ��ϴ�. ����, ���ݱ��� �ø��� ������ ���õ��� �ʱ�ȭ �˴ϴ�. ���� �ʱ�ȭ �Ͻðڽ��ϱ�?");
            }
        } else if (selection == 3) {
            if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendYesNo("#b���� ä��#k�� ������ �Ѵܰ� �ø��ϴ�. ������� #b"+(cm.getPlayer().getProfession().getFirstProfessionLevel()*100000)+"�޼�#k �Դϴ�.");
            }
        } else if (selection == 4) {
            if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendYesNo("#b#t4022023#�� 100��#k��ƿ��ø� #b#i2028066##t2028066# 1��#k�� ��ȯ�� �帳�ϴ�. ��ȯ�Ͻð� ��������?");
            }
        }
    } else if (status == 2) {
        if (select == 1) {
            if (cm.getPlayer().getMeso() >= 5000) {
                if (!cm.canHold(1502000)) {
                    cm.sendOk("��� �� ������ �� ĭ �̻� ����ּ���.");
                    cm.dispose();
                    return;
                }
                cm.gainMeso(-5000);
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainItem(1502000, 1);
                cm.setProfession(1, MapleProfessionType.HERBALISM.getValue());
                cm.sendOk("����. ����ä���� ���������� �������ϴ�.  ���õ��� �� ä�������� ������ �ø� �� ������ �ٽ� ã�ƿ�����.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("�޼Ұ� �����Ͻ� �� ��������? �˼������� �޼Ұ� �����Ͻø� ��������� ���� �� ����ϴ�.");
                cm.dispose();
                return;
            }
        } else if (select == 2) {
            if (cm.getProfession(2) != 0) {
                cm.sendOk("�̹� ���ݼ��� ���� ��Ű� ��������? ���ݼ��� ���� �Խø� ���� ä���� �ʱ�ȭ�� �� �����ϴ�.");
                cm.dispose();
                return;
            }
            cm.deleteProfession(1);
            cm.sendOk("���� ä���� �ʱ�ȭ �Ǿ����ϴ�.");
            cm.dispose();
        } else if (select == 3) {
            if (cm.getPlayer().getMeso() >= (cm.getPlayer().getProfession().getFirstProfessionLevel()*100000)) {
                if (cm.getPlayer().getProfession().getFirstProfessionLevel() == 3) {
                    if (cm.canHold(2028066)) {
                        cm.gainItem(2028066, 1);
                    } else {
                        cm.sendOk("�Һ� �κ��丮 ������ ��ĭ �̻� ����ּ���.");
                        cm.dispose();
                        return;
                    }
                } else if (cm.getPlayer().getProfession().getFirstProfessionLevel() == 6) {
                    if (cm.canHold(4330000)) {
                        cm.gainItem(4330000, 1);
                    } else {
                        cm.sendOk("��Ÿ �κ��丮 ������ ��ĭ �̻� ����ּ���.");
                        cm.dispose();
                        return;
                    }
                }
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainMeso(-(cm.getPlayer().getProfession().getFirstProfessionLevel()*100000));
                cm.levelUpProfession(1);
                cm.sendOk("��. ����ä���� �ܰ谡 �Ѵܰ� ����߽��ϴ�.");
                cm.dispose();
            } else {
                cm.sendOk("�޼Ұ� �����ϽŰ� �ƴ��� Ȯ���� ������.");
                cm.dispose();
            }
        } else if (select == 4) {
            if (!cm.haveItem(4022023, 100)) {
                cm.sendOk("#t4022023#�� �� ���� ��Űǰ���? �ٽ� �ѹ� Ȯ���� ������.");
                cm.dispose();
                return;
            } else {
                cm.sendGetNumber("� ��ȯ�Ͻð� ��������? ���� #b#c4022023##k���� #t4022023#�� �ֽ��ϴ�.", 1, 1, 100);
            }
        }
    } else if (status == 3) {
        if (select == 4) {
            if (cm.haveItem(4022023, selection * 100)) {
                cm.sendOk("��ȯ�� �Ϸ�Ǿ����ϴ�.");
                cm.dispose();
                cm.gainItem(4022023, -(selection * 100));
                cm.gainItem(2028066, selection);
            }
        }
    }
}
