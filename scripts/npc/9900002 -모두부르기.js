var status = -1;

function start() {
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++
        if (status == 0) {
	if (cm.getPlayer().hasGmLevel(6)) {
		//cm.getPlayer().getMap().getPortal("join00").setScriptName("cannot");
		    var it = cm.getClient().getChannelServer().getPlayerStorage().getAllCharacters().values().iterator();
                    while (it.hasNext()) {
                        var chr = it.next();
			//chr.changeMap(cm.getPlayer().getMap(), cm.getPlayer().getMap().getPortal(0));
			var name = "";
			name += chr.getName();
			cm.sendOk(name);
                    }
	} else {
		cm.sendOk("누르지 좀 말라고 ㅡㅡ");
	}
		cm.dispose();
	}
    }
}