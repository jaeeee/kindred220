var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	qm.sendYesNo("이번에는 찻주전자가 그려진 문 밖에 있는 봉인의 수호자를 처지해줘.");
} else if (status == 1) {
	qm.sendNext("이번에는 좀 더 강력한 기운이 느껴지니까 만반의 준비를 해야 할거야.");
	qm.getPlayer().setKeyValue("pier","start");
	qm.startQuest(30010);
	qm.dispose();
} 
}
}