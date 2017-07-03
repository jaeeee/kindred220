
var status = 0;
var map = 0;
function start() {
    if (cm.getPlayer().getMapId() == 221023200) { //100층
        if (cm.getMeso() >= 50000)
            cm.sendYesNo("#b50000메소#k 로 2번째 에오스 돌이 있는 에오스 탑 70층으로 이동하시겠습니까?");
        else {
            cm.sendOk("두번째 에오스 돌이 있는 곳으로 순간이동 할 수 있는 돌이다. 하지만 #b50000메소#k 없이는 활성화 시킬 수 없다.");
            cm.dispose();
        }
    } else if (cm.getPlayer().getMapId() == 221022100) { //70층
        status = -1;
        map = 221023200;
        action (1,0,0);
    } else if (cm.getPlayer().getMapId() == 221021500) { //35층
        if (cm.getMeso() >= 50000) {
            cm.sendSimple("#b50000메소#k로 이 에오스 돌을 활성화 할 수 있습니다. 어느곳으로 이동하시겠습니까?#b\r\n#L0#두번째 에오스 돌 (70층)#l\r\n#L1#네번째 에오스 돌 (1층)#l");
        } else {
            cm.sendOk("두번째나 네번째 에오스 돌이 있는 곳으로 순간이동 할 수 있는 돌이다. 하지만 #b50000메소#k 없이는 활성화 시킬 수 없다.");
            cm.dispose();
        }
    } else if (cm.getPlayer().getMapId() == 221020000) { //1층
        if (cm.getMeso() >= 50000)
            cm.sendYesNo("#b50000메소#k 로 3번째 에오스 돌이 있는 에오스 탑 35층으로 이동하시겠습니까?");
        else {
            cm.sendOk("세번째 에오스 돌이 있는 곳으로 순간이동 할 수 있는 돌이다. 하지만 #b50000메소#k 없이는 활성화 시킬 수 없다.");
            cm.dispose();
        }
    }
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 221023200) { //100층
        if (mode < 1) {
            cm.dispose();
            return;
        } else {
            cm.gainMeso(-50000);
            cm.warp(221022100, "go00");
        }
        cm.dispose();
    } else if (cm.getPlayer().getMapId() == 221022100) { //70층
        if (mode == -1)
            cm.dispose();
        else {
            if (status >= 0 && mode == 0) {
                cm.dispose();
                return;
            }
            if (mode == 1)
                status++;
            else
                status--;
            if (status == 0) {
                if (cm.getMeso() >= 50000)
                    cm.sendSimple("#b50000메소#k로 이 에오스 돌을 활성화 할 수 있습니다. 어느곳으로 이동하시겠습니까?#b\r\n#L0#첫번째 에오스 돌 (100층)#l\r\n#L1#세번째 에오스 돌 (35층)#l");
                else {
                    cm.sendOk("첫번째나 세번째 에오스 돌이 있는 곳으로 순간이동 할 수 있는 돌이다. 하지만 #b50000메소#k 없이는 활성화 시킬 수 없다.");
                    cm.dispose();
                }
            }
            else if (status == 1) {
                if (selection == 0)
                    cm.sendYesNo("#b50000메소#k 로 1번째 에오스 돌이 있는 에오스 탑 100층으로 이동하시겠습니까?");
                else {
                    cm.sendYesNo("#b50000메소#k 로 3번째 에오스 돌이 있는 에오스 탑 35층으로 이동하시겠습니까?");
                    map = 221021500;
                }
            } else if (status == 2) {
                cm.gainMeso(-50000);
                cm.warp(map, "go00");
                cm.dispose();
            }
        }
    } else if (cm.getPlayer().getMapId() == 221021500) { //35층
        if (mode < 1) {
            cm.dispose();
            return;
        } else {
            status++;
            if (status == 1) {
                if (selection == 0) {
                    cm.sendYesNo("#b50000메소#k 로 2번째 에오스 돌이 있는 에오스 탑 70층으로 이동하시겠습니까?");
                    map = 221022100;
                } else {
                    cm.sendYesNo("#b50000메소#k 로 4번째 에오스 돌이 있는 에오스 탑 1층으로 이동하시겠습니까?");
                    map = 221020000;
                }
            } else if (status == 2) {
                cm.gainMeso(-50000);
                cm.warp(map, "go00");
                cm.dispose();
            }
        }
    } else if (cm.getPlayer().getMapId() == 221020000) { //1층
        if (mode > 0) {
            cm.gainMeso(-50000);
            cm.warp(221021500, "go00");
        }
        cm.dispose();
    }
}