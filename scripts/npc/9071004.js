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
cm.sendYesNo("#r익스트림 몬스터파크#k \r\n[#r익스트림 몬스터파크#k] 를 이용하시겠습니까? 추천 레벨은 160이상입니다. \r\n#r(파티장만 티켓소지시 파티원 전체 입장가능/티켓없을시 무반응)");
} else if (status == 1) { 

var random = Math.floor(Math.random() * maps.length);
cm.gainItem(4001760, -1);
maps2 = maps[random]
cm.TimeMoveMap(maps2,100000000,600);
cm.allPartyWarp(maps2, true);
cm.dispose();
}
}


