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

var talk = "";
var menu = ["견장","타일런트","파프니르"];
var common = [["여제 견장",20010]];
var warrior = [["타일런트 벨트", 10007],["타일런트 신발",10008],["타일런트 망토",10009]];
var mage = [["파프니르 무기",20012],["파프니르 장비",20013]];
var archer = [["모자", 10401], ["신발", 10405], ["상의", 10407], ["장갑", 10408], ["한벌옷", 10409], ["하의", 10410], ["방패", 10412],["아대", 10421], ["단검", 10423],["에너지소드", 10648], ["한손검", 10429], ["블레이드", 10431],["케인", 10436]];
var thief = [["모자", 10501], ["신발", 10505], ["장갑", 10508], ["한벌옷", 10509], ["무기", 10515], ["총", 10524], ["너클", 10525], ["소울슈터", 10533]];
var pirate = [["모자", 10601], ["얼굴장식", 10602], ["눈장식", 10603], ["귀고리", 10604], ["신발", 10605], ["망토", 10606], ["상의", 10607], ["장갑", 10608], ["한벌옷", 10609], ["하의", 10610], ["반지", 10611], ["방패", 10612], ["무기", 10615], ["완드", 10631]];
var cash = [["타일런트 벨트", 10007],["타일런트 신발",10008],["타일런트 망토",10009],["여제 견장",20010],["여제 망토",20022],["파프니르 무기",20012],["파프니르 장비",20013],["공용",20011]];
var coin = "";

c = -1;
npc = 0;

function start() {
	//cm.dispose();
    var text = "#r각종 고렙 무기, 방어구 상점 입니다.#b\r\n";
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
        case -1: return common;
        case 0: return warrior;
        case 1: return mage;
        case 2: return archer;
        case 3: return thief;
        case 4: return pirate;
        case 5: return cash;
        case 6: return coin;
    }
    return common;
}