function start() {
    cm.sendYesNo("이 곳에서 나오시겠어여?");
} function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000000);
    } else {
	cm.sendNext("어때? 마음에 드는가 본데... 나가고 싶으면 이따가 나를 불러줘~~");
    }   cm.dispose();
}