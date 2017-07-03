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
	    var chat = "저는 도박 프로그램을 운영중인 컴퓨터입니다.";
	    chat += "\r\n#L0##b돈 따먹기#k (#Cgray#2배#k)#l";
            chat += "       #L1##b가위 바위 보#k (#Cgray#2배#k)";
	    chat += "\r\n#L2##b슬롯 머신 룰렛#k (#Cgray#3배#k)#l";
	    chat += "#L3##b지뢰 찾기#k (#Cgray#재미#k)";
    	    cm.sendSimple(chat);

             } else if (selection == 0) {
		cm.dispose();
		cm.openNpc(9200001);
             } else if (selection == 1) {
		cm.dispose();
		cm.openNpc(9220073);
             } else if (selection == 2) {
		cm.dispose();
		cm.openNpc(2470009);
             } else if (selection == 3) {
		cm.dispose();
		cm.openNpc(9001001);
		}
	}
}
