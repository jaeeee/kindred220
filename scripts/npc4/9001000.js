var status = 0;
var points;
var sel;
var sel2;
var itemList = Array (1002357,1003112,1002971,1052202,1003621,1052526,1003622,1052527,1122000,1122076,1402179,1402180); // ������ ��� 
var number = Array (50,80,60,60,1000,1000,1500,1500,1000,2000,3000,5000);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (status <= 2 && mode == 0) {
            cm.dispose();
            return;
        }  
        if (mode == 0) {
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("������ ȭ�� ! ���� �Ʒ����� ���� �Ͻð� ��������?#k#k\r\n\r\n#b#L0##b���� �Ʒ����� �����ϰڽ��ϴ�.#l\r\n\r\n\r\n#L4##r����ǰ ��ȯ�ϱ�#l");
        } else if (status == 1) {
            if (selection == 0) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("��Ƽ���� �����û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
                cm.dispose();
                return;
            }
if (cm.getClient().getChannelServer().getMapFactory().getMap(950200100).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
   try {
                var em = cm.getEventManager("MonsterArea");
                em.startInstance(cm.getPlayer());
                cm.resetMap(950200100);
                cm.allPartyWarp(950200100, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 1) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("��Ƽ���� �����û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(950200100).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("MonsterArea");
                em.startInstance(cm.getPlayer());
                cm.resetMap(950200100);
                cm.allPartyWarp(950200100, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 2) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("��Ƽ���� �����û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(921160400).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter2");
                em.startInstance(cm.getPlayer());
                cm.resetMap(272000600);
                cm.allPartyWarp(272000600, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 3) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("��Ƽ���� �����û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(921160400).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter3");
                em.startInstance(cm.getPlayer());
                cm.resetMap(921160400);
                cm.allPartyWarp(921160400, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 4) {
		var where = "��ȯ������ ������ ���";
		for (var i = 0; i < itemList.length; i++) {
			where += "\r\n#L" + i + "##b#i" + itemList[i] + ":# (" + number[i] + " ����Ʈ)";
		}
                cm.sendSimple(where);
            }
        } else if (status == 2) {
            sel = selection;
            cm.sendYesNo("#b" + number[sel] + "#k����Ʈ�� �ʿ��մϴ�. ������ ��ȯ�Ͻðڽ��ϱ�?");
        } else if (status == 3) {
            if (cm.getPlayer().getboss() >= number[sel]) {
                if (cm.canHold(itemList[sel])) {
                    cm.sendOk("#b#t"+itemList[sel]+"##k��(��) �����ϼ̽��ϴ�.");
                    cm.gainItem(itemList[sel], 1);
                    cm.getPlayer().addboss(-number[sel]);
                    cm.dispose();
                } else {
                    cm.sendOk("�κ��丮�� ������� �����մϴ�.");
                    cm.dispose();
                }
            } else {
                cm.sendOk("��ȯ�� ���� ����Ʈ�� �����մϴ�.");
                cm.dispose();
            }
    }
}
}