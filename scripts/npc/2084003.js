


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	제로 에 의해 만들어 졌습니다.

	엔피시아이디 : 2084003

	엔피시 이름 : 골드리치

	엔피시가 있는 맵 : 유니크로드 : 골드리치의 보물창고 (910160000)

	엔피시 설명 : MISSINGNO


*/

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
        cm.sendYesNo("탈환을 포기하고 다시 마을로 돌아가겠나?");
    } else if (status == 1) {
        if (cm.getPlayer().getEventInstance() != null) {
            cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
        }
        cm.warp(100000000);
        cm.dispose();
     } else {
     cm.dispose();
      }

}
