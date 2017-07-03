importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendNextS("마을 바깥으로 나가보자. 일단 #r변형된 스텀프#k 20마리 정도만 사냥해보면 될 것 같다.",2);
qm.dispose();
}
}
}