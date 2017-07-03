
/* 퀵무브 - 자유시장 */


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
        if (cm.getPlayer().getLevel() < 10) {
            cm.getPlayer().message(5, "#b<자유 시장>#k은 레벨 10이상만 입장 가능합니다.");
            return false;
        }
        cm.sendYesNo("다른 유저들과 아이템을 거래할 수 있는 #c<자유 시장>#으로 이동한다.");
    } else if (status == 1) {
        cm.saveLocation("FREE_MARKET_SHOP");
        cm.warp(910000000, 0);
        cm.dispose();
    }
}


