/*
	본 스크립트는 선히팩의 파일입니다.
	선히팩은 KMS 기준으로 만들어졌습니다.

	네이버 : 선우(seonwoo__@naver.com)
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
            cm.sendNextS("#e꾸루루룩!!#k (#r다음#k 버튼을 누르라고 하는것같다.)", 1);
        }
    } else if (status == 1) {
        if (cm.getMorphState() == 2210003) {
            cm.warp(1000000,0);cm.changeJob(400);
            cm.dispose();
        } else {
            cm.warp(1000000,0);cm.changeJob(400);
            cm.dispose();
        }
    }
}
