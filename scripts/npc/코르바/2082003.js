
importPackage(Packages.packet.creators);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendSimple("날개가 있다면 그 곳에 갈 수도 있겠지. 허나 그것만으로는 부족해. 검보다 날카로운 바람 사이를 날려면 단단한 비늘 역시 필요하거든. 돌아오는 방법까지 아는 하프링은 이제 나뿐이지... 그곳에 가겠다면 변신시켜 주겠네. 자네의 지금 모습이 무엇이든 이 순간만큼은 #b드래곤#k이 되는 걸세...\r\n\r\n#L0##b드래곤으로 변신하고 싶어요.#k#l");
        //cm.getPlayer().cancelEffectFromBuffStat(BuffStats.MORPH, -1);
    } else if (status == 1) {
        cm.useItem(2210016);
        cm.getPlayer().getClient().getSession().write(MainPacketCreator.useItemMessage(2210016));
        cm.warp(200090500);
        cm.dispose();
    }
}


