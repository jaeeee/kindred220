/*
 *  한글화 : 쿠션씨 (pok_showinfo@nate.com)
 */


function start() {
    cm.sendYesNo("장식은 할만큼 하고 추억은 쌓을만큼 다 쌓앗어? 으음.. 그럼 나갈레?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000000);
    } else {
	cm.sendNext("나가고 싶을때 나에게 대화를 해줘~");
    }
    cm.dispose();
}