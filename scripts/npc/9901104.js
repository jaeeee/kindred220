


/*

	���� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 9071002
	
	���ǽ� �̸� : �޸�

	���ǽð� �ִ� �� : ������ũ

	���ǽ� ���� : ������ũ Ƽ�� ��ȯ����


*/


var status = -1;
var select = 0;
importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.Harmony.tools);

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
        cm.sendSimple("#b��Ȳ������ ��100���� ��ƿ��ø� �޼Ҹ��帳�ϴ�!#k\r\n#b#e#L0##t4000001#�� �޼ҷ� �ٲߴϴ�.#n#l#k");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.sendYesNo("#e#b#t4000001##k#n�� ���� �ٸ����Űſ���?");
        } else if (select == 1) {
            cm.sendYesNo("���� #b#t4001515##k 10��� #b#t4001516##k 1���� �ٲܲ���?");
        } else if (select == 2) {
            cm.sendYesNo("���� #b#t4001521##k 10��� #b#t4001522##k 1���� �ٲܲ���?");
        } else if (select == 3) {
            cm.sendSimple("��~���� �̷��� �ȵ�����, ��� �� ����� ���Ƽ� Ư���� �Ǹ��ϴ°ž�. #rƼ�� ������ ������� 1�δ� �Ϸ翡 �� 5��#k�� �Ȳ���. ��, ���ǰָ����� ����̾�! \r\n#b#L0##t4001514# 5�� �޼�#l\r\n#L1##t4001516# 10�� �޼�#l\r\n#L2##t4001522# 20�� �޼�#l#k");
        }
    } else if (status == 2) {
        if (select == 0) {
            if (!cm.haveItem(4000001, 100)) {
                cm.sendOk("�ٸ����Ű� �����������?");
                cm.dispose();
                return;
            }
            if (!cm.canHold(4001133)) {
                cm.sendOk("�κ��丮â�� 1ĭ ���� ����");
                cm.dispose();
                return;
            }
            cm.gainMeso(5000000);
            cm.sendOk("�ٸ�ƿ��˱���! ������ ������ �޼� 500���޼Ҹ� �帮�ٽ��ϴ�!");
            cm.gainItem(4000001, -100);
            cm.dispose();
        } else if (select == 1) {
            if (!cm.haveItem(4001515, 80)) {
                cm.sendOk("ī��Ű 100���� ���µ� �մϴ�. � ��ƴ��ּ���.");
                cm.dispose();
                return;
            }
            if (!cm.canHold(4001516)) {
                cm.sendOk("�� �κ��丮 ��Ÿ ���� �� ���� ������?");
                cm.dispose();
                return;
            }
            cm.sendOk("Ƽ���� �� �޾���? �׷� ������ũ���� ��ſ� �ð� �������� ��~ ������.");
            cm.gainItem(4001515, -10);
            cm.gainItem(4001516, 1);
            cm.dispose();
        } else if (select == 2) {
            if (!cm.haveItem(4001521, 10)) {
                cm.sendOk("���� ���ݾ�. Ƽ�� ������ ����� ���� �ִ°� �¾�?");
                cm.dispose();
                return;
            }
            if (!cm.canHold(4001522)) {
                cm.sendOk("�� �κ��丮 ��Ÿ ���� �� ���� ������?");
                cm.dispose();
                return;
            }
            cm.sendOk("Ƽ���� �� �޾���? �׷� ������ũ���� ��ſ� �ð� �������� ��~ ������.");
            cm.gainItem(4001521, -10);
            cm.gainItem(4001522, 1);
            cm.dispose();
        } else if (select == 3) {
            var meso = 0;
            var itemid = 0;
            var questid = 0;
            if (selection == 0) {
                meso = 50000;
                itemid = 4001514;
                questid = 7902;
            }
            if (selection == 1) {
                meso = 100000;
                itemid = 4001516;
                questid = 7903;
            }
            if (selection == 2) {
                meso = 200000;
                itemid = 4001522;
                questid = 7904;
            }
            if (cm.getPlayer().getMeso() < meso) {
                cm.sendOk("��.. ������ �޼Ұ� �����Ѱ� ������? �ٽ� �ѹ� Ȯ���� ��.");
                cm.dispose();
                return;
            }
            if (!cm.canHold(itemid)) {
                cm.sendOk("�� �κ��丮 ��Ÿ���� �� ���� ����. ���� �ٽ� ���� �ɾ���~");
                cm.dispose();
                return;
            }
            var date = Calendar.getInstance().get(Calendar.YEAR)%100+"/"+StringUtil.getLeftPaddedStr(Calendar.getInstance().get(Calendar.MONTH)+"", "0", 2)+"/"+Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
            if (cm.getPlayer().getOneInfoQuest(questid, "eNum").equals("5") && cm.getPlayer().getOneInfoQuest(questid, "lastDate").equals(date)) {
                cm.sendOk("�� �̹� ���� 5���� �����߾�. �� �̻��� �����~ �̷��� ���ǰָ��� ��ġæ�ٱ�. ���� �ٽ� ��~");
                cm.dispose();
                return;
            }
            cm.gainMeso(-meso);
            cm.gainItem(itemid, 1);
            if (!cm.getPlayer().getOneInfoQuest(questid, "lastDate").equals(date)) {
                cm.getPlayer().updateOneInfoQuest(questid, "eNum", "1");
                cm.getPlayer().updateOneInfoQuest(questid, "lastDate", date);
            } else {
                var eNum = Integer.parseInt(cm.getPlayer().getOneInfoQuest(questid, "eNum"));
                cm.getPlayer().updateOneInfoQuest(questid, "eNum", (eNum+1)+"");
            }
            cm.sendOk("�׷� ������ũ���� ��ſ� �ð� ����~");
            cm.dispose();
            
        }
    }
}


