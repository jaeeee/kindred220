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
            qm.sendNext("하지만 저의 영원한 재료셔틀 동효가 가지고 있었습니다.");
        } else if (status == 1) {
            qm.sendNextPrev("이걸 사용한다면 될것같군요.");
        } else if (status == 2) {
            qm.sendNextPrev("제 일은 여기까지 같습니다. 앞으로 저를 클릭하시면 드래곤라이더 퀘스트가 가능합니다.");
        } else if (status == 3) {
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}