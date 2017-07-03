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
qm.sendNext("돌아왔네. 네가 없는동안 엄청나게 많은 사람들이 왔어!");
} else if (status == 1) {
qm.sendNextS("다들 너를 도와 봉인을 풀기 위해 온 사람들이야. 메이플 연합에서 널 여기서 꺼내주기로 약속했으니까 이제 걱정하지마.",2);
} else if (status == 2) {
qm.sendNextS("그런데 네게 걸린 봉인을 해제하기 위해서는 저 문 밖에 있는 봉인의 수호자들을 처치해야만 해. 혹시 뭔가 아는 게 있어?",2);
} else if (status == 3) {
qm.sendNext("나는 여기를 벗어날 수 없어서 아무 것도 몰라. 그치만 어둠의 힘은 확실하게 느낄 수 있어.");
} else if (status == 4) {
qm.sendYesNo("시계가 그려진 문 밖에서 흘러드는 어둠의 힘이 가장 약하게 느껴져. 그러니까 시계가 그려진 문 밖에 있는 봉인의 수호자를 가장 먼저 처치해줘.");
} else if (status == 5) {
qm.sendNext("아마 혼자서는 힘들 거야. 가장 약하게 느껴진다고는 해도 온 몸이 찌릿찌릿할 정도인 걸. 그러니까 꼭 #r마음이 맞는 동료#k를 구하도록 해!");
qm.getPlayer().setKeyValue("banban","start");
qm.startQuest(30009);
qm.dispose();
}
}
}