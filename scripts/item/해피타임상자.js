


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/

var scroll = new Array(1002140,1002240,1002140,1002140,1002140,1002140,1002140,1002140,1002140);
var status = -1;
importPackage(java.lang);
importPackage(Packages.client.items);

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
        cm.sendYesNo("����Ÿ�� ���ڸ� ���ðڽ��ϱ�? �κ��丮 �Һ��ǿ� ������ ��ĭ �̻� �ʿ��մϴ�.");
    } else if (status == 1) {
        var leftslot = cm.getPlayer().getInventory(PureInventoryType.USE).getNumFreeSlot();
        if (leftslot < 1) {
            cm.sendOk("�κ��丮 ������ �ּ��� 1ĭ�� �ʿ��մϴ�. �Һ� ���� ������ 1ĭ�̻� ����ֽ� �� �ٽ� �����ּ���.");
            cm.dispose();
            return;
        }
        var item = "";
        for (var i = 0;i <= 2 + Math.floor(Math.random() * 3); i++) {
            var rand = Math.floor(Math.random() * 7);
            var itemid = 0;
            if (rand < 2) {
                itemid = scroll[Math.floor(Math.random() * scroll.length)];
            item += "#b#i"+itemid+"# #t"+itemid+"# 1��#k\r\n";
            cm.gainItem(itemid, 1);
        }
        cm.gainItem(2431110, -1);
        cm.sendOk("���ε� �ڹ��迡�� �Ʒ��� �������� ���Խ��ϴ�.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n"+item);
        
        cm.dispose();
    }
}
}

