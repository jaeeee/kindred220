var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("#e#b행복한 마을#n#k에서 좀 더 머무르면서 #e#b즐거운 시간#n#k 보내길 바래.");
	cm.safeDispose();
    }
    if (status == 0) {
	cm.sendYesNo("원래 있던 곳으로 되돌아갈래?");
    } else if (status == 1) {
	cm.warp(511000000);
	cm.dispose();
    }
}