// 아스완 이아손 스크립트
var status = -1;
var select = -1;

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
        
        cm.dispose();
        cm.sendOk("지하의 보석 아스완, 그 과거의 영광은 다 어디로 갔단 말인가.");
    }
}