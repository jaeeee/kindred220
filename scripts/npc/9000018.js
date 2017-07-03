var status = -1;

function start() {
	action(1,0,0);
}

function action(mode, type, selection) {
if (mode == 1) { status++;
} else { cm.dispose(); return; }

if (status == 0) {
	cm.sendSimple("안녕하세요. #e#b#h ##n#k님,\r\n#h #님은 #e#r프리미엄PC방#n#k에서 접속하셨습니다. 프리미엄PC방에서 접속하신 분들에게는 #b프리미엄 PC방 훈장#k을 지급 해 드리고 있습니다.\r\n#L0##i1142145##t1142145#");

} else if (status == 1) {
	cm.gainItem(1142145, 1);
	cm.dispose();
}
}