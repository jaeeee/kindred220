


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	즐즐 에 의해 만들어 졌습니다.

	엔피시아이디 : 2081005

	엔피시 이름 : 케로벤

	엔피시가 있는 맵 : 생명의 동굴 입구

	엔피시 설명 : 생명의 동굴 입장


*/
var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        if (cm.getMorphState() == 2210003) {
            cm.sendNextS("동료군. 어서 들어가보게. 혼테일님이 우리 동족들을 소집하시는 중일세.", 1);
        } else {
            cm.sendNextS("인간이군! 여기가 어디라고 왔느냐! 당장 사라져라!", 1);
        }
    } else if (status == 1) {
        if (cm.getMorphState() == 2210003) {
            cm.warp(240050000);
            cm.dispose();
        } else {
            cm.warp(240040500);
            cm.getPlayer().addHP(-(cm.getPlayer().getStat().getHp()/2));
            cm.dispose();
        }
    }
}
