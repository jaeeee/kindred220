/*
 시그너스 입장
*/
importPackage(Packages.community);
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
            cm.sendYesNo("정말 이곳에서 나가고 싶나?");
        } else if (status == 1) {
	    cm.warp(100000000);
            cm.dispose();
        }
}
