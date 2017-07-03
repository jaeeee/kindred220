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
	qm.sendYesNo("이제 마지막 봉인만이 남았어. 용이 그려진 문 밖에 있는 봉인의 수호자를 처치해줘.");
} else if (status == 1) {
	qm.sendNext("지금까지와 비교도 할 수 없을 정도로 엄청난 기운이 느껴져. 분명 치열한 전투가 벌어질 테니 철저히 준비하고 가도록 해.");
} else if (status == 2) {
	qm.startQuest(30012);
	qm.getPlayer().setKeyValue("balum","start");
	qm.dispose();
}
}
}