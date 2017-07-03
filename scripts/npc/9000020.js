


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000020

	엔피시 이름 : 스피넬

	엔피시가 있는 맵 : 빅토리아로드 : 엘리니아 (180000000)

	엔피시 설명 : 세계여행가이드


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
        cm.sendOk("후원을 담당맡고 있는 스피넬은 내 여동생이야. 우리는 아주 친한 자매였지. 동생이 후원아이템을 맡게 된 이유는 30년전 비행기 추락사고였어. 내가 세계여행가이드로 활동하였을때. 비행기 사고로 비행사 , 탑승 고객들이 모두 죽고 우리자매만 비상 낙하산으로 살았지. 그래서 해양구조대의 도움으로 살게되었어. 후원을 많이씩 해주면 우리자매 생계 유지에 도움이 되니까 해주면 정말 고맙겠어.");
        cm.dispose();
        return;
    }
}
