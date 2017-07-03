/*
파란돌륜군
*/
importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
            qm.sendNextS("\r\n\r\n#b(리들리에게 들은 것을 하인즈에게 모두 말해주었더니 조사를 부탁받았다.)", 2);
        } else if (status == 1) {
            qm.sendNextS("\r\n\r\n#b(오른쪽 문으로 나가보자.)", 2);
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNextS("방금의 녀석은 뭐였지? 제법 강했다. 보통의 마족이라고 하기엔 무언가 이상한 기운을 뿜는 자였어.\r\n#b(하인즈에게 모든 상황들을 말해주었다.)", 2);
            qm.forceCompleteQuest();
        }
    }
}