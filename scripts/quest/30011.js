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
	qm.sendYesNo("이번에는 왕관이 그려진 문 밖에 있는 봉인의 수호자를 처치해줘.");
} else if (status == 1) {
	qm.sendNext("왕관이 그려진 문 밖에서 느껴지는 기운 또한 만만치 않아. 절대 방심하면 안돼!");
	qm.startQuest(30011);
	qm.getPlayer().setKeyValue("quean","start");
	qm.dispose();
}
}
}