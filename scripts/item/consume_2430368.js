importPackage(Packages.client.items.MapleInventory);
importPackage(Packages.handler.channel.InventoryHandler);
importPackage(java.lang);
var status = -1;

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
        var leftslot = cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot();
        if (leftslot < 2) {
            cm.sendOk("인벤토리 공간이 최소한 1칸은 필요합니다. 빼빼로의 재료를얻고 #r팩스 스타일#k만의 이벤트를 즐겨보세요!!");
            cm.dispose();
            return;
        }
        var rand = Math.random() * 20;
        if (rand < 5) {
            cm.gainItem(4031938, 1);
        } else if (rand < 3) {
            cm.gainItem(4031122, 1);
        } else if (rand < 2) {
            cm.gainItem(4031703, 1);
        } else if (rand < 2) {//55
            cm.gainItem(2430218, 1);
        } else if (rand < 3) {
            cm.gainItem(4000313, 30);
        } else if (rand < 2) {
            cm.gainItem(5062002, 50);
        } else if (rand < 3) {
            cm.gainItem(2049704, 3);
}
        cm.gainItem(2430368, -1);
        cm.dispose();
    }
}


