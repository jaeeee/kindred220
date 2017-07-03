


/*

힐라 난이도 스크립트


*/

var status = -1;

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
    if (mode== 1) {
        status++;
    }

    if (status == 0) { 
        cm.sendSimple("힐라원정대 난이도를 선택하여 주세요.\r\n#k\r\n#L0#노멀모드#k\r\n#L1#하드모드");
      } else if (selection == 0) {
        cm.warp (262030300,0);
      } else if (selection == 1) {
        cm.warp (262031300,0);
        cm.dispose();
    }
}
