var status = -1;

importPackage(Packages.tools.RandomStream);
importPackage(Packages.client.inventory);
importPackage(java.lang);

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
        cm.sendYesNo("�ڵ������� ���� ���� �� ���ðڽ��ϱ�? #b��� �κ��丮 ������ 5ĭ �̻�#k�ʿ��մϴ�. ����, �����޼Ұ� 20�� �̸��̾�� �մϴ�.");
    } else if (status == 1) {
        var item = "�ڵ������� ���� �Ʒ��� �������� ���Խ��ϴ�.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n";
	var leftslot1 = cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot();
        if (leftslot1 < 5) {
            cm.sendOk("�κ��丮 ������ �ּ��� 5ĭ�� �ʿ��մϴ�. ��ġ ���� ������ 5ĭ�̻� ����ֽ� �� �ٽ� �����ּ���.");
            cm.dispose();
            return;
        }
	var leftslot3 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot();
        if (leftslot3 < 5) {
            cm.sendOk("�κ��丮 ������ �ּ��� 5ĭ�� �ʿ��մϴ�. ��� ���� ������ 5ĭ�̻� ����ֽ� �� �ٽ� �����ּ���.");
            cm.dispose();
            return;
        }
        if (cm.getMeso() > 2147400000) {
            cm.sendOk("21�� �޼� �̻��� �������̽� �е��� �޼Ҹ� ȭ��� ��ȯ���ֽ� �� ����ϼ���.");
            cm.dispose();
            return;
        }
        
        var normalequip = new Array(1003265,1003367,1003049,1003216,1001055,1003009,1003541,1002720,1003207,1001090,1003237,1003220,1003543,1003520,1003779,1003792,1002846,1051253,1051175,1051348);
        var rareequip = new Array(1102511,1102487,1102326,1102325,1102389,1102273,1102380,1102358,1702277,1702350,1702397,1702306,1702347,1702291,1702357,1003548,1003549,1001062,1702357,1050210,1051256,1050234,1051284,1081007,1051220,1000042,1100001,1102420,1050178,1070019);
        var rareacc = new Array(1702182,1702399,1702330,1702365, 1702304,1003965, 1052661, 1082549, 1702446, 1702443, 1702444, 1702442, 1702433, 1702451,1112110, 1112111, 1112220, 1112221, 1012105, 1112253, 1112142, 1112258, 1112146);
        var cube = new Array(
        new Array(5062006, 5),
        new Array(5062006, 10)

);
        var leaf = new Array(new Array(4001126, 1), new Array(4001126, 2), new Array(4001126, 3), new Array(4001126, 4), new Array(4310034, 1), new Array(4310015, 1), new Array(4310034, 1), new Array(4310015, 1), new Array(4020009, 0));
        
        cm.gainItem(2430495, -1);
        for (var i = 0; i < 2 + Randomizer.nextInt(3); i++) {
            var rand = Math.floor(Math.random() * 30);
            if (rand < 10) {
                var calculate = Math.floor(Math.random() * normalequip.length);
                item += "#i"+normalequip[calculate]+"# #z"+normalequip[calculate]+"# 1��\r\n";
                cm.gainItem(normalequip[calculate], 1);
            } else if (rand < 20) {
                var calculate = Math.floor(Math.random() * rareequip.length);
                item += "#i"+rareequip[calculate]+"# #z"+rareequip[calculate]+"# 1��\r\n";
                cm.gainItem(rareequip[calculate], 1);
            } else if (rand < 30 && Randomizer.isSuccess(50)) {
                var calculate = Math.floor(Math.random() * rareacc.length);
                item += "#i"+rareacc[calculate]+"# #z"+rareacc[calculate]+"# 1��\r\n";
                cm.gainItem(rareacc[calculate], 1);
            } else if (rand < 30) {
                var calculate = Math.floor(Math.random() * cube.length);
                item += "#i"+cube[calculate][0]+"# #t"+cube[calculate][0]+"# "+cube[calculate][1]+"��\r\n";
                cm.gainItem(cube[calculate][0], cube[calculate][1]);
            } else if (rand < 30) {
                var meso = 0;
                if (Randomizer.isSuccess(98)) {
                    meso = Randomizer.rand(10000000, 50000000);
                } else if (Randomizer.isSuccess(50)) {
                    meso = Randomizer.rand(50000000, 150000000);
                } else if (Randomizer.isSuccess(50)) {
                    meso = Randomizer.rand(300000000, 500000000);
                } else {
                    meso = Randomizer.rand(10000000, 333300000);
                }
                item += "#e#b"+meso+"#k#n �޼�\r\n";
                cm.gainMeso(meso);
            } else {
                var calculate = Math.floor(Math.random() * leaf.length);
                var quantity = 0;
                if (leaf[calculate][1] == 0) {
                    quantity = Randomizer.rand(2, 10);
                } else if (leaf[calculate][1] == 1) {
                    quantity = Randomizer.rand(10, 50);
                } else if (leaf[calculate][1] == 2) {
                    quantity = Randomizer.rand(80, 300);
                } else if (leaf[calculate][1] == 3) {
                    quantity = Randomizer.rand(300, 500);
                } else if (leaf[calculate][1] == 4) {
                    quantity = Randomizer.rand(500, 1000);
                }
                item += "#i"+leaf[calculate][0]+"# #t"+leaf[calculate][0]+"# "+quantity+"��\r\n";
                cm.gainItem(leaf[calculate][0], quantity);
            }
        }
        cm.sendOk(item);
        cm.dispose();
    }
}


