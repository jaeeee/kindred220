


/*

	���� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : Ƽ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9031005

	���ǽ� �̸� : ī����

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ����������� &lt;���̽��� ��> (910001000)

	���ǽ� ���� : ���ݼ��� ������


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
        var menu = "�ȳ��ϼ���. Ȥ�� ���ݼ��� ������������?\r\n";
        menu += "#L0##b#e���ݼ�#n�� ���� ������ ��´�.#l\r\n";
        if (cm.getProfession(2) == MapleProfessionType.NONE.getValue()) {
            menu += "#L1##e���ݼ�#n�� ����.#l\r\n";
        }
        
        
        if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue()) {
            menu += "#L2##e���ݼ�#n�� �ʱ�ȭ �Ѵ�.#l\r\n";
        }
        if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue() && cm.getPlayer().getProfession().getSecondProfessionExp() == GameConstants.getProfessionExpNeededForLevel(cm.getPlayer().getProfession().getSecondProfessionLevel())) {
            menu += "#L3##e���ݼ�#n�� ������ �� �ܰ� �ø���.#l\r\n";
        }
        cm.sendSimple(menu);
    } else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendOk("���ݼ��� ����� ������ �̿��Ͽ� �پ��� ������ ����� ����̶��ϴ�. HP�� MP�� ȸ���ϴ� ������� ����� ���ϰ� �� �� �ִ� �پ��� ���൵ ���� �� �־��. ���ݱ��� ü������ ���ߴ� �ű��� ���൵ �翬�� ���� �� �ֱ���.");
            cm.dispose();
            return;
        } else if (selection == 1) {
            if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendYesNo("#b���ݼ�#k�� ������ð� ��������? ����� #b5000 �޼�#k�Դϴ�. ���� ���ðھ��?\r\n#b(���� ���� �Ͻ� ������� ���� : 1��)");
            } else if (cm.getProfession(1) == MapleProfessionType.MINING.getValue()) {
                cm.sendOk("�̹� ä���� ���� �� ��������? �׷��ٸ� #b��� ����#k�̳� #b��ű� ����#k�� �غ��ô°� �����?");
                cm.dispose();
                return;
            } else {
                cm.sendOk("���ݼ��� ����ä���� ��� �Ŀ� ������ �帱 �� �ִ�ϴ�. ����ä���� ���������� ���ø� �ܿ� ������ ���ʸ� �ְ� �ִ� ����ä���� ������ #b��Ÿÿ#k���� ��� �� �־��.");
                cm.dispose();
                return;
            }
        } else if (selection == 2) {
            if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue()) {
                cm.sendYesNo("���ݼ��� ����� ���� ���·� �ʱ�ȭ�մϴ�. ���ݱ��� ������ ������ ���õ��� ��� �ʱ�ȭ �˴ϴ�. ���� �ʱ�ȭ �Ͻð� ��������?");
            }
        } else if (selection == 3) {
            if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue()) {
                cm.sendYesNo("#b���ݼ�#k�� ������ �Ѵܰ� �÷��帳�ϴ�. ������� #b"+(cm.getPlayer().getProfession().getSecondProfessionLevel()*100000)+"�޼�#k ���ϴ�. ���� ���� ��������?");
            }
        }
    } else if (status == 2) {
        if (select == 1) {
            if (cm.getPlayer().getMeso() >= 5000) {
                cm.gainMeso(-5000);
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.setProfession(2, MapleProfessionType.ALCHEMY.getValue());
                cm.sendOk("�ھ�~ ���ݼ��� ���� �⺻���� ������ �˷���Ⱦ��. �׸��� ���õ��� �� ���ԵǸ� ���ݼ��� ������ �ø� �� ������ �� ������ �ٽ� ã�ƿ��ּ���. ���ο� ������ �˷��帱�Կ�.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("�޼Ұ� ��.��.�ϽŰɿ�? �޼Ұ� �����Ͻø� ���ݼ��� ������ �帱 �� ����ϴ�.");
                cm.dispose();
                return;
            }
        } else if (select == 2) {
            cm.deleteProfession(2);
            cm.sendOk("���ݼ� ����� �ʱ�ȭ�ص�Ⱦ��. �ٽ� ���ð� �����ôٸ� �������� ã���ּ���!");
            cm.dispose();
        } else if (select == 3) {
            if (cm.getPlayer().getMeso() >= (cm.getPlayer().getProfession().getSecondProfessionLevel()*100000)) {
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainMeso(-(cm.getPlayer().getProfession().getSecondProfessionLevel()*100000));
                cm.levelUpProfession(2);
                cm.sendOk("���� ä���� ����� �Ѵܰ� �ö����! ���ϵ����~");
                cm.dispose();
            } else {
                cm.sendOk("�����ᰡ �����Ͻ� �� ��������? �ٽ� �ѹ� Ȯ���� ������~");
                cm.dispose();
            }
        }
    }
}
