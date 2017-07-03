


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	즐즐 에 의해 만들어 졌습니다.

	엔피시아이디 : 2081010

	엔피시 이름 : 무스

	엔피시가 있는 맵 : 히든스트리트 : 수련장 나가는 길 (924000002)

	엔피시 설명 : MISSINGNO


*/
importPackage(Packages.packet.creators);
importPackage(Packages.client.stats);
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
        if (cm.getPlayer().getEventInstance() != null) {
            try {
                cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
            } catch (err) {
                cm.getPlayer().setEventInstance(null);
            }
        }
        cm.getClient().send(MainPacketCreator.cancelDebuff(DiseaseStats.STUN));
        cm.warp(100000000);
        cm.dispose();
        return;
    }
}
