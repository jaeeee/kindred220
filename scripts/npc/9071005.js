

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
        
        if (cm.getPlayer().getEventInstance() == null) {
            cm.warp(951000000);
            cm.dispose();
            return;
        }
        cm.sendYesNo("뭐? 벌써 나가겠다고? 정말 나가고 싶은가?");
        
    } else if (status == 1) {
      cm.sendNext("이런.. 근성이 없구먼.. 뭐 나가고 싶다면 내보내 주겠네. 다음에 또 보세나.")  ;
    } else if (status == 2) {
        var eim = cm.getPlayer().getEventInstance();
        if (cm.getPlayer().getParty() != null) {
            if (!cm.isLeader()) {
                eim.leftParty(cm.getPlayer());
            } else {
                eim.disbandParty();
            }
        } else {
            eim.unregisterPlayer(cm.getPlayer());
            cm.warp(951000000);
        }
        cm.dispose();
    }
}
