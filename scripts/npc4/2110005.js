


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	냥냥 에 의해 만들어 졌습니다.

	엔피시아이디 : 2110005

	엔피시 이름 : 낙타 택시

	엔피시가 있는 맵 : 버닝로드 : 아리안트 북문 밖 (260020000)

	엔피시 설명 : MISSINGNO


*/

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
        if (cm.getPlayer().getMapId() == 260020000) {
            cm.sendYesNo("#b100000메소#k를 지불하고 사헬지대3으로 가시겠습니까?");
        }
        if (cm.getPlayer().getMapId() == 260020700) {
            cm.sendYesNo("#b100000메소#k를 지불하고 아리안트 북문 밖으로 가시겠습니까?");
        }
    } else if (status == 1) {
        if (cm.getPlayer().getMapId() == 260020000) {
            if (cm.getPlayer().getMeso() >= 100000) {
                cm.warp(260020700);
                cm.gainMeso(-100000);
                cm.dispose();
            } else {
                cm.sendOk("잠깐... 메소가 부족하신데요!");
                cm.dispose();
                return;
            }
        } else if (cm.getPlayer().getMapId() == 260020700) {
            if (cm.getPlayer().getMeso() >= 100000) {
                cm.warp(260020000);
                cm.gainMeso(-100000);
                cm.dispose();
            } else {
                cm.sendOk("잠깐... 메소가 부족하신데요!");
                cm.dispose();
                return;
            }
        }
    }
}
