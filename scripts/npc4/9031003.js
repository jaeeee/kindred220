


/*

	���� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : Ƽ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9031003

	���ǽ� �̸� : ���̼�

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ������
������ &lt;���̽��� ��> (910001000)

	���ǽ� ���� : ��� ������ ������


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
        var menu = "���ڰ� ���� ��ű����� �����ϴ�~ ��� ���ۿ� ������ �ֳ�?\r\n";
        menu += "#L0##b#e��� ����#n�� ���� ������ ��´�.#l\r\n";
        if (cm.getProfession(2) != MapleProfessionType.EQUIP.getValue()) {
            menu += "#L1##e��� ����#n�� ����.#l\r\n";
        }
        if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue()) {
            menu += "#L2##e��� ����#n�� �ʱ�ȭ �Ѵ�.#l\r\n";
        }
        if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue() && cm.getPlayer().getProfession().getSecondProfessionExp() == GameConstants.getProfessionExpNeededForLevel(cm.getPlayer().getProfession().getSecondProfessionLevel())) {
            menu += "#L3##e��� ����#n�� ������ �� �ܰ� �ø���.#l\r\n";
        }
        cm.sendSimple(menu);
    } else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendOk("��� ������ ���õ� ������ ������ �̿��Ͽ� ���� ������ ����� �ŷ����� ����̶��.");
            cm.dispose();
            return;
        } else if (selection == 1) {
            if (cm.getProfession(1) == MapleProfessionType.MINING.getValue() && cm.getProfession(2) == MapleProfessionType.NONE.getValue()) {
                cm.sendYesNo("#b��� ����#k�� ������� �ͳ�? ����� #b5000 �޼�#k���. ���� ������� �ͳ�?\r\n#b(���� ���� �Ͻ� ������� ���� : 1��)");
            } else if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendOk("�̹� ���ݼ��� ���� �� ������? �׷��ٸ� #b���ݼ�#k�� �غ��°� ���?");
                cm.dispose();
                return;
            } else if (cm.getProfession(2) == MapleProfessionType.ACC.getValue()) {
                cm.sendOk("�̹� �ڳ״� ��ű� ������ ���� ������? �׷��ٸ� ��������� ��� �� ���ٳ�.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("��� ������ ä���� ��� �Ŀ� ������ �� �� �ִٳ�. ä���� �������� #b���#k���Լ� ��� �� ����.");
                cm.dispose();
                return;
            }
        } else if (selection == 2) {
            if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue()) {
                cm.sendYesNo("��� ������ ����� ���� ���·� �ʱ�ȭ�ϴ°�? ���ݱ��� ���� ������ ���õ��� ��� �ʱ�ȭ �ȴٳ�. ���� �ʱ�ȭ �ϰ� �ͳ�?");
            }
        } else if (selection == 3) {
            if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue()) {
                cm.sendYesNo("#b��� ����#k�� ������ �Ѵܰ� �÷��ְڳ�. ������� #b"+(cm.getPlayer().getProfession().getSecondProfessionLevel()*100000)+"�޼�#k ���. ���� ���� �ͳ�?");
            }
        }
    } else if (status == 2) {
        if (select == 1) {
            if (cm.getPlayer().getMeso() >= 5000) {
                cm.gainMeso(-5000);
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.setProfession(2, MapleProfessionType.EQUIP.getValue());
                cm.sendOk("��� ������ ������ �˷��־��ٳ�. �׸��� ���õ��� �� ���ԵǸ� ��� ������ ������ �ø� �� ������ �� �ٽ� ã�ƿ���. �� �ڼ��� ������ �˷��ְڳ�.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("�޼Ұ� �����ѵ�? �̾������� ���� ������ ��� ������ ������ �� �� ���ٳ�.");
                cm.dispose();
                return;
            }
        } else if (select == 2) {
            cm.deleteProfession(2);
            cm.sendOk("��� ���� ����� �ʱ�ȭ�ߴٳ�. �ٽ� ���� �ʹٸ� �������� ã�ƿ���.");
            cm.dispose();
        } else if (select == 3) {
            if (cm.getPlayer().getMeso() >= (cm.getPlayer().getProfession().getSecondProfessionLevel()*100000)) {
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainMeso(-(cm.getPlayer().getProfession().getSecondProfessionLevel()*100000));
                cm.levelUpProfession(2);
                cm.sendOk("��� ������ ����� �Ѵܰ� �ö��ٳ�.");
                cm.dispose();
            } else {
                cm.sendOk("�޼Ҵ� ����� ������ �ִ°ǰ�?");
                cm.dispose();
            }
        }
    }
}