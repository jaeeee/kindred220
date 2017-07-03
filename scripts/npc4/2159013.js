
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
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
        if (cm.getPlayer().getKeyValue("mapleWarriorbook_received") == null && cm.getPlayer().getLevel() >= 121) {
            if (!cm.haveItem(4000613, 600)) {
                cm.sendOk("#b#i4000613##t4000613##k 600개만 모아다 주세요..!! 그럼... 제가 ... 고이 간직해온..선물을 드릴게요..");
                cm.dispose();
                return;
            } else {
                if (!cm.canHold(2280003)) {
                    cm.sendOk("인벤토리 공간이 부족해요...!!");
                    cm.dispose();
                    return;
                }
                cm.gainItem(4000613, -600);
                cm.gainItem(2280003, 1);
                cm.getPlayer().setKeyValue("mapleWarriorbook_received", "1");
                cm.sendOk("여기... 제 선물이에요. 소비탭을 확인해주세요.");
                WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "[축하] "+cm.getPlayer().getName()+"님이 [메이플 용사] 스킬북 퀘스트를 완수하셨습니다!"));
                cm.dispose();
                return;
            }
        } else {
            cm.sendOk("....훌쩍...");
        }
        cm.dispose();
        return;
    }
}
