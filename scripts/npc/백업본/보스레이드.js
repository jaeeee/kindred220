var status = 0;
var points;
var sel;
var sel2;
var itemList = Array (5064000, 5064100, 5064300, 1323011, 1492023, 1472068, 1462050, 1452057, 1432047, 1382057, 1372044, 1332074, 1332073, 1482023, 1442063, 1422037, 1412033, 1402046, 1322060, 1312037, 1302081, 1342011, 1532015, 1522015, 1334011); // ������ ��� 
var number = Array (2000, 2000, 2000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000);

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
            cm.sendSimple("��ǳ�� �¶����� �������̵� �Դϴ�. #k\n\r\r\n\r\n #b#L0##v03994115##l#L1##v03994116##l#L2##v03994117##l#L3##v03994118##l\r\n\r\n");
        } else if (status == 1) {
            if (selection == 0) {
            if (!cm.haveItem(4000313, 5)) {
                cm.sendOk("��Ƽ�� �� Ȳ�ݴ�ǳ���� �������� ���� ��Ƽ���� �ֽ��ϴ�.\r\n#r#i4000313# #t4000313##k�� 5�� �־�� ������ �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
if (cm.getClient().getChannelServer().getMapFactory().getMap(500000000).getCharactersSize() < 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
   try {
                var em = cm.getEventManager("newCharacter");
                em.startInstance(cm.getPlayer());
                cm.resetMap(500000000);
                cm.allPartyWarp(500000000, true);
		cm.gainItem(4000313, -5);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 1) {
            if (!cm.haveItem(4000313, 10)) {
                cm.sendOk("��Ƽ�� �� Ȳ�ݴ�ǳ���� �������� ���� ��Ƽ���� �ֽ��ϴ�.\r\n#r#i4000313# #t4000313##k�� 10�� �־�� ������ �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(500000000).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter1");
                em.startInstance(cm.getPlayer());
                cm.resetMap(500000000);
                cm.allPartyWarp(500000000, true);
		cm.gainItem(4000313, -10);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 2) {
            if (!cm.haveItem(4000313, 30)) {
                cm.sendOk("��Ƽ�� �� Ȳ�ݴ�ǳ���� �������� ���� ��Ƽ���� �ֽ��ϴ�.\r\n#r#i4000313# #t4000313##k�� 30�� �־�� ������ �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(500000000).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter2");
                em.startInstance(cm.getPlayer());
                cm.resetMap(500000000);
                cm.allPartyWarp(500000000, true);
		cm.gainItem(4000313, -30);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 3) {
            if (!cm.haveItem(4000313, 80)) {
                cm.sendOk("��Ƽ�� �� Ȳ�ݴ�ǳ���� �������� ���� ��Ƽ���� �ֽ��ϴ�.\r\n#r#i4000313# #t4000313##k�� 80�� �־�� ������ �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(500000000).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter3");
                em.startInstance(cm.getPlayer());
                cm.resetMap(500000000);
                cm.allPartyWarp(500000000, true);
		cm.gainItem(4000313, -80);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        }
    }
}
}