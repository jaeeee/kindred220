


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	팬더 에 의해 만들어 졌습니다.

	엔피시아이디 : 2540014

	엔피시 이름 : 플레타

	엔피시가 있는 맵 : 해저의 탑 "더 시드" : 해저 3층 (992003000)

	엔피시 설명 : 노련한 탐험가


*/
importPackage(Packages.packet.creators);
importPackage(Packages.client);
importPackage(Packages.constants);
importPackage(Packages.launch.world);

var status = -1;
var itemid = 0;
var check = 0;

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
	cm.sendSimple("내이름은 플레타 노련한 탐험가 라고도 불리지 이봐 음.. 너의 이름은 #b" + cm.getPlayer().getName() + "#k..? 좋은 이름이군.. 너에게 부탁이 있다 나는 지금 배도 고프고 연구도 해보고 싶고 하지만 나에겐 현재 그럴 힘이 없지. 그래서 말인데 너가 #b#t4009237# 1,000 개와 #t4009238# 1,000 개#k 를 나에게 구해다줘.\r\n\r\n#L0##b#t4009237# 을 준다.\r\n#L1##t4009238# 을 준다.");
    } else if (status == 1) {
	itemid = selection == 0 ? 4009237 : 4009238;
	check = selection == 0 ? 2  : 3;
	cm.sendGetNumber("몇개의 알을 주겠어?\r\n#b(현재까지 나에게 준 #t" + itemid + "# 의 갯수는 " + cm.getPlayer().getMap().getTheSid3Check(check) + " 개야.)",1,1,1000);
	} else if (status == 2) {
	if(cm.haveItem(itemid,selection)) {
	cm.gainItem(itemid,-selection);
	cm.getPlayer().getMap().setTheSid3Check(check,selection,false);
	if(cm.getPlayer().getMap().getTheSid3Check(2) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(3) >= 1000) {
	cm.sendOk("정말 고마워!! 설마 설마 했는데 정말로 이많은 알들을 구해오다니 넌 엄청난 녀석이구나!!");
	if(cm.getPlayer().getMap().getTheSid3Check(0) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(1) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(2) >= 1000 && cm.getPlayer().getMap().getTheSid3Check(3) >= 1000) {
	cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "[더 시드] " + cm.getPlayer().getParty().getLeader().getName() + "님의 파티가 더 시드 3층을 공략 했습니다."));
	GameConstants.setTheSid(GameConstants.getTheSidTower(cm.getPlayer().getMapId()), GameConstants.getTheSidMap((GameConstants.getTheSidTower(cm.getPlayer().getMapId()) + 1)), cm.getPlayer());
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3초 뒤 로비로 이동됩니다."));
	cm.TheSidClear();
	cm.gainPartyItem(4009238,-10000);
	cm.gainPartyItem(4009237,-10000);
	}
	} else {
	cm.sendOk("정말 고마워!! 이 텐션으로 남은 알들도 빨리 모아오도록 해!!");
	}
	cm.dispose();
	
		}
	} else {
	cm.dispose();
	}
}
