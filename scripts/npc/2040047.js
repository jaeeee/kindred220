var status;

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection){
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    var mapId = cm.getPlayer().getMapId();
    if (mapId == 922010000) {
        if (status == 0) {
            cm.sendNext("See you next time.");
        } else {
            cm.warp(1000000);
            cm.removeAll(4001023);
            cm.removeAll(4001022);
            cm.getEventManager("LudiPQ").setProperty("LPQOpen" , "true");
            cm.getEventManager("LudiPQbonus").setProperty("LPQbonusOpen" , "true");
            cm.dispose();
        }
    } else {
        if (status == 0) {
            var outText = "Once you leave the tower, you'll have to restart the whole party quest if you want to try it again.  Do you still want to leave this map?";
            if (mapId == 922011000) {
                outText = "Are you ready to leave this map?";
            }
            cm.sendYesNo(outText);
        } else if (mode == 1) {
            var eim = cm.getPlayer().getEventInstance(); // Remove them from the PQ!
            if (eim == null)
                cm.warp(922010000, "st00"); // Warp player
            else if (cm.isLeader()) {
                cm.getEventManager("LudiPQ").setProperty("LPQOpen" , "true");
                eim.disbandParty();
            }
            else
                eim.leftParty(cm.getPlayer());
            cm.dispose();
        }
    }
}