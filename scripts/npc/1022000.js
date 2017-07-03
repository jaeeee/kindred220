/*
     Copyright ⓒ 2012- ONLineWorld Allright Reserved.

    본 스크립트는 온라인월드의 개발자인 OnS온 라인이 제작한 스크립트입니다.
    재 배포 및 게시, 또 다른 서버 드라이브에 포함해 배포하는 것을 금하며,
    제작자의 허락 없이 본 주석을 지우는 것을 허용하지 아니합니다.

    오류가 나지 않는 이상 본 스크립트를 수정 할 수 없고,
    만약 무단으로 사용되고 있음을 알게 되면

    OnS온 라인<kkong1001@naver.com>에게 연락을 해주시길 바랍니다.

    NPC : 장비
 */

var chat = "#b#h0##k님 안녕하세요! 각종만능상점이에요.\r\n";
var menu = ["#b전사 상점#k", "#b마법사 상점#k", "#b궁수 상점#k\r\n", "#b도적 상점#k", "#b해적 상점#k\r\n"];
var common = [["안드로이드", 121211], ["모자", 10001], ["귀고리", 10004], ["상의", 10007], ["장갑", 10008], ["한벌옷", 10009], ["하의", 10010]];
var warrior =  [["한손도끼", 10116], ["두손도끼", 10117], ["한손둔기", 10118], ["두손둔기", 10119], ["폴암", 10126], ["창", 10127], ["한손검", 10129], ["두손검", 10130], ["데스페라도", 10115]];
var mage = [["스태프", 10228], ["완드", 10231], ["샤이닝로드", 10232]];
var archer = [["화살", 10416], ["활", 10320], ["석궁", 10322], ["듀얼보우건", 10337]];
var thief = [["아대", 10421], ["표창", 11], ["단검", 10423], ["에너지소드", 10801], ["블레이드", 10431], ["케인", 10436]];
var pirate = [["캐논", 10515], ["소울슈터", 10533], ["너클", 10525]];
var cash = [[" #b1.모든 주문서들,인장 + 7락(+7)/얼티밋(+9),", 10601], ["2.고급주문서 #r잠재,장강,황망,레잠 등", 9000152]];
var Soul = [["물약,돋보기,몬스터파크 티켓", 9020004]];
var vvvv = [["보급형 안드로이드", 121211], ["각종 장신구(견장,링,벨트,펜던트 등)", 121212]];
var vvvf = [["각종 #r[HOT&NEW]#k 한 의자들 (1)", 121213], ["각종 #r[HOT&NEW]#k 한 의자들 (2)", 121214], ["각종 #r[HOT&NEW]#k 한 의자들 (3)", 121215]];
var vvvd = [["각종 #r[HOT&NEW]#k 한 초보자용무기들", 1021001]];
var vvvq = [["#r[NEW] 큐브 ,코인교환 상점#k", 123456]];

c = -1;
npc = 0;

function start() {
	//cm.dispose();
    var text = "";
    for (var i = 0; i < menu.length; i++) text+= "#L" + i + "#" + menu[i] + "#l";
    cm.sendSimple(text);
}

function action(m, t, s) {
    if (m != 1) {
        cm.dispose();
        return;
    } else npc++;
    if (npc == 1) {
        c = s;
        talk = "#b";
        for (var j = 0; j < shops(s).length; j++) talk += "#L" + j + "# " + shops(s)[j][0] +"#l\r\n";
        cm.sendSimple(talk);
    } else if (npc == 2) {
        cm.openShop(shops(c)[s][1]);
        cm.dispose();
    }
}

function shops(s) {
    s -= 1;
    switch (s) {
        case -1: return warrior;
        case 0: return mage;
        case 1: return archer;
        case 2: return thief;
        case 3: return pirate;
        case 4: return vvve;
        case 5: return vvvq;
        case 6: return cash;
        case 7: return coin;
        case 8: return vvvv;
        case 9: return vvvf;
        case 10: return vvvd;
    }
    return common;
}
