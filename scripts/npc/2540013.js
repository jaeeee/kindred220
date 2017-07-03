


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	팬더 에 의해 만들어 졌습니다.

	엔피시아이디 : 2540013

	엔피시 이름 : 시크레타

	엔피시가 있는 맵 : 해저의 탑 "더 시드" : 해저 3층 (992003000)

	엔피시 설명 : 풋내기 탐험가


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
	if(cm.getPlayer().getMap().getTheSid3Check(1) < 1000) {
	cm.sendSimple("안녕하세요! 저는 이제막 탐험을 시작한 시크레타 라고 해요!! 그런데 아직 풋내기라 그런지 몬스터를 사냥하는게 좀 무서워요.. 그래서 말인데 저를 대신해서 #b#t4009238##k 를 1,000 개만 구해주시겠어요? 꼭 연구를 하고싶어서 그래요!!\r\n\r\n#L0##b#t4009238# 을 준다.#l");
	} else {
	cm.sendOk("안녕하세요! 저는 이제막 탐험을 시작한 시크레타 라고 해요!!");
	cm.dispose();
	}
    } else if (status == 1) {
	cm.sendGetNumber("몇개의 알을 주시겠어요?\r\n#b(현재 까지 저에게 준 알의 갯수는 " + cm.getPlayer().getMap().getTheSid3Check(1) + " 개에요!)",1,1,1000);
	} else if (status == 2) {
	if(cm.haveItem(4009238,selection)) {
	cm.gainItem(4009238,-selection);
	cm.getPlayer().getMap().setTheSid3Check(1,selection,false);
	if(cm.getPlayer().getMap().getTheSid3Check(1) >= 1000) {
	cm.sendOk("정말 고마워요! 덕분에 연구를 할수있게 되었어요!");
	if(cm.getPlayer().getMap().getTheSid3Check(0) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(1) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(2) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(3) >= 1000) {
	cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotic(6,"[더 시드] " + cm.getPlayer().getParty().getLeader().getName() + "님의 파티가 더 시드 3층을 공략하였습니다."));
	GameConstants.setTheSid(GameConstants.getTheSidTower(cm.getPlayer().getMapId()), GameConstants.getTheSidMap((GameConstants.getTheSidTower(cm.getPlayer().getMapId()) + 1)), cm.getPlayer());
	cm.getPlayer().getMap().TheSidClear();
	cm.gainPartyItem(4009238,-10000);
	cm.gainPartyItem(4009237,-10000);
	}
	cm.dispose();
	} else {
	cm.sendOk("정말 고마워요! 남은 알도 어서 빨리 구해주세요!!");
	cm.dispose();
	}
		} else {
	cm.sendOk("저에게 알을 줄려는 의욕만 강하신거 같아요!!");
	cm.dispose();
		}
	} else {
	cm.dispose();
	}
}
