importPackage(java.sql);
importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.tools);

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
                var rute = "#r#e<��Ÿ�� ���� ���� �Ա�>#k#l#n\r\n";
                if(cm.haveItem(4310027,1)) {
                } else {
                }
rute += "��Ÿ�� ���� ������ ��ȣ���� #r�ǿ���#k�� ��Ű�� �ִ� �������� ���� ���̴�. #rŬ���� ����� ����� ��� ���� ����, ī������ ��� ���� ����� ������ �������� �ʱ�ȭ �˴ϴ�.#k\r\n";
                rute += "#L9##i4033611##b��񳪹� ���踦 ����Ͽ� �븻 ���� �̵��Ѵ�.(125���� �̻�)\r\n";
                rute += "#L11##i4033611##b��񳪹� ���踦 ����Ͽ� ī���� ���� �̵��Ѵ�.(180���� �̻�)";
                cm.sendSimple(rute);
        
        } else if (selection == 9) {
        if (cm.getPlayer().getParty() == null) {
            cm.playerMessage(5, "��Ƽ�� �������� �ʽ��ϴ�. ��Ƽ�� ������ �� ã�ƿ��ּ���.");
            cm.dispose();
            return;
            }
            if (!cm.allMembersHere()) {
                cm.playerMessage(5, "��Ƽ���� ���� ��ҿ� �����ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.playerMessage(5, "��Ƽ�常�� ���� ��û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
        if (cm.haveItem(4033611,1)) {
        cm.resetMap(105200200);
        cm.TimeMoveMap(105200200,105200000,900);
        cm.gainItem(4033611,-1);
        cm.spawnMob(7120111,806,221);
        cm.spawnMob(7120111,908,221);
        cm.spawnMob(7120111,1120,221);
        cm.spawnMob(7120111,1235,221);
        cm.spawnMob(7120111,1364,221);
        cm.spawnMob(7120111,1545,221);
        cm.spawnMob(7120111,1625,221);
        cm.spawnMob(7120111,1764,221);
        cm.spawnMob(7120111,1883,221);
        cm.spawnMob(7120111,1986,221);
        cm.spawnMob(7120111,2154,221);
        cm.spawnMob(7120111,2321,221);
        cm.spawnMob(7120111,2438,221);
        cm.spawnMob(7120111,2586,221);
        cm.spawnMob(7120111,2722,221);
        cm.spawnMob(7120111,2980,221);
        cm.spawnMob(7120111,3232,221);
        cm.dispose();
        } else {
        cm.sendOk("#i4033611##b#z4033611##k �����ѰŰ�������?");
        cm.dispose();
        }
        } else if (selection == 11) {
        if (cm.getPlayer().getParty() == null) {
            cm.playerMessage(5, "��Ƽ�� �������� �ʽ��ϴ�. ��Ƽ�� ������ �� ã�ƿ��ּ���.");
            cm.dispose();
            return;
            }
            if (!cm.allMembersHere()) {
                cm.playerMessage(5, "��Ƽ���� ���� ��ҿ� �����ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.playerMessage(5, "��Ƽ�常�� ���� ��û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
        if (cm.haveItem(4033611,1)) {
        cm.resetMap(105200600);
        cm.TimeMoveMap(105200600,105200000,900);
        cm.gainItem(4033611,-1);
        cm.spawnMob(7120113,806,221);
        cm.spawnMob(7120113,908,221);
        cm.spawnMob(7120113,1120,221);
        cm.spawnMob(7120113,1235,221);
        cm.spawnMob(7120113,1364,221);
        cm.spawnMob(7120113,1545,221);
        cm.spawnMob(7120113,1625,221);
        cm.spawnMob(7120113,1764,221);
        cm.spawnMob(7120113,1883,221);
        cm.spawnMob(7120113,1986,221);
        cm.spawnMob(7120113,2154,221);
        cm.spawnMob(7120113,2321,221);
        cm.spawnMob(7120113,2438,221);
        cm.spawnMob(7120113,2586,221);
        cm.spawnMob(7120113,2722,221);
        cm.spawnMob(7120113,2980,221);
        cm.spawnMob(7120113,3232,221);
        cm.dispose();
        } else {
        cm.sendOk("#i4033611##b#z4033611##k �����ѰŰ�������?");
        cm.dispose();
        }
}
}
}