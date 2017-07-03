


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	팬더 에 의해 만들어 졌습니다.

	엔피시아이디 : 2540012

	엔피시 이름 : 리플리

	엔피시가 있는 맵 : 해저의 탑 "더 시드" : 해저 3층 (992003000)

	엔피시 설명 : 부상당한 탐험가


*/
importPackage(Packages.packet.creators);
importPackage(Packages.client);
importPackage(Packages.constants);
importPackage(Packages.launch.world);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	if(cm.getPlayer().getMap().getTheSid3Check(0) < 1000) {
	cm.sendSimple("크윽... 나답지 않게 실수나 해서 다치기나 하고.. 저기 부탁좀 들어줄수 있을까? 지금 내가 무척 허기가 져서 그런데 나에게 #b#t4009237##k 를 1,000개 정도 가져다 주지 않겠어?\r\n\r\n#L0##b#t4009237# 을 준다.#l");
	} else {
	cm.sendOk("크윽... 나답지 않게 실수나 해서 다치기나 하고..");
	cm.dispose();
	}    
} else if (status == 1) {
//"몇개의 알을 주겠어?\r\n#b(현재 까지 나에게 준 알의 갯수는 " + cm.getPlayer().getMap().getTheSid3Chcek(0) + "개 야)"
	cm.sendGetNumber("몇개의 알을 주겠어?\r\n#b현재 까지 나에게 준 알의 갯수는 " + cm.getPlayer().getMap().getTheSid3Check(0) + " 개야.",1,1,1000);
	} else if (status == 2) {
	if(cm.haveItem(4009237,selection)) {
	cm.gainItem(4009237,-selection);
	cm.getPlayer().getMap().setTheSid3Check(0,selection,false);
	if(cm.getPlayer().getMap().getTheSid3Check(0) >= 1000) {
	cm.sendOk("정말 고마워! 덕분에 살았어.");
	if(cm.getPlayer().getMap().getTheSid3Check(0) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(1) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(2) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(3) >= 1000) {
	cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotic(6,"[더 시드] " + cm.getPlayer().getParty().getLeader().getName() + "님의 파티가 더 시드 3층을 공략하였습니다."));
	GameConstants.setTheSid(GameConstants.getTheSidTower(cm.getPlayer().getMapId()), GameConstants.getTheSidMap((GameConstants.getTheSidTower(cm.getPlayer().getMapId()) + 1)), cm.getPlayer());
	cm.getPlayer().getMap().TheSidClear();
	cm.gainPartyItem(4009238,-10000);
	cm.gainPartyItem(4009237,-10000);
	}
	} else {
	cm.sendOk("정말 고마워! 다친 나를위해서.. 너정말 착한녀석이구나!");
	cm.dispose();
	}
	cm.dispose();
	} else {
	cm.sendOk("나에게 줄려는 마음은 고마운데 알이 부족해..");
	cm.dispose();
		}
	} else {
	cm.dispose();
	}
}
