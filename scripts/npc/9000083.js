
var status = -1;
var mapid = Array(910000001,910000002,910000003,1000000, 511000000);

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
	var chat = "";
	chat += "#e#r   [자유시장]#k#n\r\n\r\n";
	for(var i = 0; i < 3; i ++) {
	chat += "#L" + i + "##e자유시장 " + (i + 1) + "번 방으로 이동#l\r\n";
	}
	chat += "\r\n\r\n\r\n#e#r   [부가이동]#k#n\r\n";
	chat += "#L3##e노블시스 상점가로 이동#l\r\n";
	chat += "#L4#싸이의 콘서트홀로 이동#l\r\n";
	cm.sendSimple(chat);
    } else if (status == 1) {
		cm.warp(mapid[selection]);
		cm.dispose();
    }
}


