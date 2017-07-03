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
	qm.sendNext("어떻게 된거야? 갑자기 사라져서 깜짝 놀랐어.");
} else if (status == 1) {
	qm.sendNextS("그들이 나를 소환했어.",2);
} else if (status == 2) {
	qm.sendNext("그들이라니? 혹시 나를 봉인시킨 그 나쁜 녀석들 말이야?");
} else if (status == 3) {
	qm.sendNextS("응.더이상 이곳에 머문다면 가만 두지 않겠다고 나를 위협하는데,하마터면 목숨까지 잃을 뻔 했어.",2);
} else if (status == 4) {
	qm.sendNext("설마.... 그들의 협박에 겁먹은 건 아니지? 나를 도와주겠다고 약속한 거, 지킬거지?");
} else if (status == 5) {
	qm.sendNextS("물론이야. 어차피 이렇게 된 이상 그들과의 협상은 불가능하니 맞서 싸워야지. 다만, 나혼자서는 무리일 것 같아.",2);
} else if (status == 6) {
	qm.sendNext("그럼 어떡하지? 나는 봉인된 데다가 어둠의 기운 때문에 힘을 쓸수가 없는걸.");
} else if (status == 7) {
	qm.sendNextS("일단 메이플 연합에 이 사실을 알려야겠어. 메이플 연합이 도와준다면 네 봉인을 해제할 수 있는 방법을 찾을 수 있을 거야.",2);
} else if (status == 8) {
	qm.sendNextS("나는 지금 즉시 에레브로 갈게. 메이플 연합의 책사인 나인하트에게 루타비스에서 있었던 일들을 보고하고, 네 봉인을 풀 수 있는 방법도 논의 해볼게.",2);
} else if (status == 9) {
	qm.sendNext("알았어. 그치만 빨리 돌아와야해? 어둠의 기운이 점점 숨을 조여와. 이제 남은 시간이 얼마 없는 것 같아.....");
} else if (status == 10) {
	qm.sendNextS("걱점아. 금방 다녀올게. 자, 그럼 바로 나인하트 님에게 가야겠다.",2);
} else if (status == 11) {
	qm.completeQuest(30007);
	qm.warp(100000000);
	qm.dispose();
}
}
}