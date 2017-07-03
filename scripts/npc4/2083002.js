var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("여기서 나가시겠습니까?");
    } else if (status == 1) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 퇴장이 불가능합니다.");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getEventInstance() != null) {
            cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
        }
            cm.warp(100000000);
            cm.dispose();
}
}