importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendNext("어떻게 하면 여기서 나갈 수 있어?");
} else if (status == 1) {
qm.sendNextS("저쪽에 밖으로 나갈 수 있는 출구가 있어.출구를 통해서 밖으로 나가면 될 것 같아.",2);
} else if (status == 2) {
qm.sendNext("그건 이미 백 번도 더 시도해봤어. 하지만 밖으로 나갈 수 없었는걸.");
} else if (status == 3) {
qm.sendNextS("밖으로 나갈 수 없었다고? 출구가 막혀있나? 알았어. 내가 한 번 확인해볼게.",2);
} else if (status == 4) {
qm.sendNext("빨리 확인해줘. 나 정말 여기서 나가고 싶단 말야....");
} else if (status == 5) {
qm.getPlayer().setKeyValue("lutat","start");
qm.dispose();
}
}
}