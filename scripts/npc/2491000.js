


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	이랜드온라인 에 의해 만들어 졌습니다.

	엔피시아이디 : 2491000

	엔피시 이름 : 안내자

	엔피시가 있는 맵 : 골드비치 : 수상한 바다 (914200000)

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
        cm.sendOk("편리상점에서 <낚시의자>를 구매하고, 미끼를구해서 의자를 클릭하면 낚시가 된다네...");
        cm.dispose();
        return;
    }
}
