


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	타임 에 의해 만들어 졌습니다.

	엔피시아이디 : 1012125

	엔피시 이름 : 주황버섯 수배표지판

	엔피시가 있는 맵 : 헤네시스 : 헤네시스 북쪽언덕 (100010000)

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
        cm.sendOk("#d안녕하세요 펫사용방법을 알려드리겠습니다\r\n#b펫을 구매하고 장착하신후 #k#n#r단축키 E 키#k#n를 누르면 자신의 \r\n장비를 확인할수있습니다. 거기에 장비,캐시,펫,A.D 라고 \r\n되어있을텐데요 거기서 펫을 눌러주신후 #r아이템줍기 스킬을 체크#k#n해주시고 #r펫구매상점에서 펫스킬 아이템줍기스킬 \r\n소유권 없는 아이템&메소 획득 스킬 등등을 등록해주셔야 \r\n모든아이템을 먹습니다!#k#n 감사합니다#r");
        cm.dispose();
        return;
    }
}
