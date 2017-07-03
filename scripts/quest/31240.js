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
            qm.sendYesNo("혹시 #r마스테리아#k라는 이름의 땅을 알고 있나? 그곳은 마족들의 머나먼 고향, 잃어버린 땅 … 만약 궁금하다면 엘리니아로 와서 나를 만나 이야기를 마저 듣는 건 어떤가?\r\n\r\n#r(퀘스트 수락시 자동으로 엘리니아의 마법 도서관으로 이동합니다.)");
        } else if (status == 1) {
            qm.sendNext("마법 도서관에서 기다리고 있겠네.");
        } else if (status == 2) {
            qm.sendNextPrevS("(엘리니아에서 하인즈를 만나자.)",2);
        } else if (status == 3) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}