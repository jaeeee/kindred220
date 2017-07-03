importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendNextS("(이 정도면 사냥으로 조사할 수 있는 것도 대략 파악이 끝난것 같다. 이제 원래의 페리온으로 돌아가는 일만 남았다.)",2);
} else if (status == 1) {
qm.sendNextS("이런 미래의 모습을 매일같이 악몽으로 꾼다면 충분히 불안해할만 한 것 같다.",2);
} else if (status == 2) {
qm.sendNextS("이제 그만 페리온으로 돌아가자.",2);
} else if (status == 3) {
qm.warp(102000000);
qm.completeQuest(31909);
qm.dispose();
}
}
}