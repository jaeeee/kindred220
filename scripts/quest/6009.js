/*
파란돌륜군
*/

var status = -1;


function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("하지만 지금은 볼수없습니다.");
        } else if (status == 1) {
            qm.sendNextPrev("실망하지 마시기를...");
        } else if (status == 2) {
            qm.sendNextPrev("제 일은 여기까지 같습니다. 앞으로 저를 클릭하시면 자유전직이 가능합니다.");
        } else if (status == 3) {
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}