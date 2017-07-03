importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

function start() {
    cm.askAcceptDecline("여신의 거을만 있으면... 다시 검은 마법사를 불러낼 수 있어!..이, 이상해... 왜 검은 마법사를 불러내지 않는 거지? 이 기운은 뭐지? 검은 마법사와는 전혀 다른... 크아아악!\r\n\r\n#b(키르스턴의 어깨에 손을 댄다.)");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getPlayer().getMapId(), 2141000);
	cm.forceStartReactor(cm.getPlayer().getMapId(), 2709000);
	WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[노블온라인] : " + cm.getPlayer().getName() + "님이 핑크빈을 소환하였습니다."));
    }
    cm.dispose();
}