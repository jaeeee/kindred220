var select = -1;
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
	cm.sendSimple("Some creeps from the Maple World have invaded Grandis. We need to find out who it is and shut them down. \r\n\r\n#b#L0#Enter Dimension Invasion.#l");
		} else if (status == 1) {
	if(selection == 0) {
	if(cm.getParty() == null) {
	cm.sendOk("파티도 없이 디멘션 인베이드에 입장할려는 건가?");
	cm.dispose();
	return;
	}
	if(!cm.isLeader()) {
	cm.sendOk("파티장 만이 디멘션 인베이드에 입장신청을 할수있다네.");
	cm.dispose();
	return;
	}
	if(cm.getPlayerCount(940021000) > 0) {
	cm.sendOk("이미 다른자가 디멘션 인베이드에 입장해 있다네.");
	cm.dispose();
	return;
	}
	cm.resetMap(940021000);
	cm.PartyTimeMove(940020000,940021000,1500);
	cm.getPlayer().getMap().리셋디멘션인베이드();
	cm.getPlayer().getMap().디멘션인베이드(1,cm.getPlayer());
	cm.dispose();
	}
}
	}
}