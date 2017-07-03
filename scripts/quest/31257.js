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
            qm.sendYesNo("\r\n가엾은 마족 주민들을 모두 탈출시겨 주었나?");
        } else if (status == 1) {
            qm.sendNext("휴, 고마워. 석상이 되어버린 이 보잘것없는 마법사는 도무지 저들을 도울 방법이 없지 뭔가. 마침 자네가 와서 저들은 살았어.");
        } else if (status == 2) {
            qm.sendSimple("자네가 싸웠던 자들… 그러니까 성채 상층에 있던 병사들의 정체를 알고 있나? 그들은 원래 옛 크림슨우드의 주민들이며, 한때 긍지높은 병사들이었어. 하지만 지금은 완전히 타락해 버리고 말았지.\r\n\r\n#L0##b 어째서 타락한 것인가요?#l");
        } else if (status == 3) {
            qm.sendNext("글쎄, 난들 아나? 모든 것의 시작은 마스테리아를 휩쓴 대전쟁이었지만, 대다수가 그 전쟁의 원인조차 모르고 있는 것을…");
        } else if (status == 4) {
            qm.sendNextPrev("나는 수백 년동안 성채 안에서 같은 곳만 지키고 있으니, 바깥에서 정확히 무슨 일이 얼아나고 있는지도 알 수 없어. 답답한 노릇이지.");
        } else if (status == 5) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}