/*

페니르프로젝트2014

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
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendOk("고렙 컨텐츠 기반\r\n#L0#테스트");
        cm.dispose();
        return;
    }
}
