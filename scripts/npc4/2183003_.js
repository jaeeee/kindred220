/*

     [ PlatinumMS ]

     이 스크립트는 PlatinumMS 에서 제작한 스크립트 입니다.

     스크립트 용도 : 아스완 해방전 NPC

*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.openPQUI(68);
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        var txt1 = "#e<아스완 해방전>#n 아스완 해방전에 참여하시겠습니까?\r\n";
        txt1 += "#b#L0# 힐라를 직접 처치한다. (레벨 120이상)\r\n";
        txt1 += "#b#L1# 아스완 해방전에 참여한다.\r\n";
        cm.sendSimple(txt1);
    } else if (status == 1) {
        if (selection == 0) {
            var txt2 = "힐라의 탑 입구로 보내드리겠습니다. 힐라를 꼭 물리쳐주세요.";
            cm.sendSimple(txt2);
        } else if (selection == 1) {
            var txt3 = "명성치는 언제든 획득하실 수 있습니다.\r\n\r\n#b#e해방전 시간이 아니어도 컨텐츠 이용은 가능합니다.";
            cm.sendYesNo(txt3);
        }
    } else if (status == 2) {
        cm.openPQUI(68);
        cm.dispose();
    }
}