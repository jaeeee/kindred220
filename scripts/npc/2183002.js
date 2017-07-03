// 아스완 칭룽 스크립트
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
        cm.sendOk("찬란했던 아스완의 역사가 이리 비참한 끝을 보게 될 줄 누가 알았겠는가? 역사는 끝났지만 백성들의 고통은 끝나지 않았으니...");
    }
}