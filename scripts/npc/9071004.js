var maps = new Array(951000200,951000210,951000220,951000230,951000240,951000250,951000260,951000270);
var status = -1;
var maps2;

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
cm.sendYesNo("#r�ͽ�Ʈ�� ������ũ#k \r\n[#r�ͽ�Ʈ�� ������ũ#k] �� �̿��Ͻðڽ��ϱ�? ��õ ������ 160�̻��Դϴ�. \r\n#r(��Ƽ�常 Ƽ�ϼ����� ��Ƽ�� ��ü ���尡��/Ƽ�Ͼ����� ������)");
} else if (status == 1) { 

var random = Math.floor(Math.random() * maps.length);
cm.gainItem(4001760, -1);
maps2 = maps[random]
cm.TimeMoveMap(maps2,100000000,600);
cm.allPartyWarp(maps2, true);
cm.dispose();
}
}


