
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
	chat += "#e#r   [��������]#k#n\r\n\r\n";
	for(var i = 0; i < 3; i ++) {
	chat += "#L" + i + "##e�������� " + (i + 1) + "�� ������ �̵�#l\r\n";
	}
	chat += "\r\n\r\n\r\n#e#r   [�ΰ��̵�]#k#n\r\n";
	chat += "#L3##e���ý� �������� �̵�#l\r\n";
	chat += "#L4#������ �ܼ�ƮȦ�� �̵�#l\r\n";
	cm.sendSimple(chat);
    } else if (status == 1) {
		cm.warp(mapid[selection]);
		cm.dispose();
    }
}


