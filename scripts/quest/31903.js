importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendOk("잠시만, 숨 좀 고를 시간을 줘. 헉헉...");
qm.dispose();
}
}
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
qm.sendOk("잠시만, 숨 좀 고를 시간을 줘. 헉헉...");
} else if (status == 1) {
qm.sendNext("응? 이 마을에 무슨 일이 일어난 거냐고?\r\n\r\n그걸 몰라서 물어? 검은 마법사의... 힉! 아니아니, #e위대하신 검은 마법사님#n의 석상을 짓기 위한 대공사의 현장이 된 거지. 저 멀리에서 지어지고 있는 거대한 석상이 보이지? 완공되고 나면 어디에서든 볼 수 있게 될 거야. 페리온은 빅토리아 아일랜드에서 가장 높은 지역이니까 말이야.");
} else if (status == 2) {
qm.sendNext("이미 수백 수천 명의 페리온 원주민들이 저기에서 일하고 있어. 나는 원래 탐험가였지만... 중노동을 하지 않으면 더 이상 먹고 살 길이 없어. 일하지 않는 자는 먹을 수도 없으니까 말이야.");
} else if (status == 3) {

}
}
}