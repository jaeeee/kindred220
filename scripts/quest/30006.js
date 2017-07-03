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
qm.sendNextS("일단 네 봉인을 풀기 위해서는 먼저 침입자들의 정체부터 파악해야 할 것 같아.",2);
} else if (status == 1) {
qm.sendNext("하지만 그들은 이미 모두 떠나 버렸는걸?");
} else if (status == 2) {
qm.sendNextS("혹시 남아있는 단서가 있을지 모르니까 찾아보자. 혹시 저기에 있는 네 개의 문에 대해서 알고 있는 게 있어?",2);
} else if (status == 3) {
qm.sendNext("저 문은 나를 봉인한 녀석들이 만들어놓고 갔어. 나도 저 문 밖으로 나가보려고 계속 시도해봤는데, 내게 걸려있는 봉인 때문인지 나갈 수가 없었어.");
} else if (status == 4) {
qm.sendNextS("혹시 저 문 밖에 무언가 단서가 될만한 것이 남아있지 않을까? 내가 한 번 저 문으로.... 어? 이게 뭐지?",2);
} else if (status == 5) {
qm.showWZEffect("Effect/Summon.img/36",0);
qm.sendNext("와아, 네 몸이 하얗게 빛나고 있어!");
} else if (status == 6) {
qm.sendNextS("대체 이게 무슨 일이지? 어, 어? 모,몸이 빨려 들어간다!",2);
} else if (status == 7) {
qm.sendNext("#b" + qm.getPlayer().getName() + "#k!!!");
} else if (status == 8) {
qm.warp(105200410);
qm.dispose();
}
}
}