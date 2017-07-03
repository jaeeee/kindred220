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
var menu = ["Public Stores", "Warrior Store", "Wizard Store", "Archer shops\r\n", "Rogue shops", "Pirates shops", "#r[NEW]#k#b 150 store my equipment\r\n\r\n", "#r[NEW]#k #bCube, coin exchange shop#k", "#k#r[HOT] #k#bvarious Scroll Shop\r\n", "#r[HOT] #k#bMagnifying Glass, Potion Shop", "#r  [NEW] #k#bAccessory shops#k\r\n", " #r[NEW] #k#bvarious Chairs Shops", "#r [NEW]#k#bBeginners only shops"];
var common = [["Android", 121211], ["hat", 10001], ["Earrings", 10004], ["top", 10007], ["Gloves", 10008], ["One clothes", 10009], ["pants", 10010]];
var warrior = [["hat", 10101], ["Shoes", 10105], ["top", 10107], ["Gloves", 10108], ["One clothes", 10109], ["pants", 10110], ["shield", 10112], ["One-Handed Axes", 10116], ["Hands ax", 10117], ["One-Handed Blunt", 10118], ["Blunt hands", 10119], ["Polearm", 10126], ["window", 10127], ["One-Handed Sword", 10129], ["Sword hands", 10130], ["Desperado", 10115], ["Zero Weapons", 1000112], ["Accessories for weapon", 10132], ["Full emblem", 13600]];
var mage = [["hat", 10201], ["Shoes", 10205], ["top", 10207], ["Gloves", 10208], ["One clothes", 10209], ["pants", 10210],["shield", 10212], ["Staff", 10228], ["Wands", 10231], ["Shining Road", 10232], ["Accessories for weapon", 10233], ["Full emblem", 13600]];
var archer = [["hat", 10301], ["Shoes", 10305], ["top", 10307], ["Gloves", 10308], ["One clothes", 10309], ["pants", 10310], ["arrow", 10416], ["bow", 10320], ["crossbow", 10322], ["Dual bowoogeon", 10337], ["Accessories for weapon", 10332], ["Full emblem", 13600]];
var thief = [["hat", 10401], ["Shoes", 10405], ["top", 10407], ["Gloves", 10408], ["One clothes", 10409], ["pants", 10410], ["shield", 10412], ["University with", 10421], ["Citation", 10416], ["dagger", 10423], ["Energy Sword", 10801], ["blade", 10431], ["Accessories for weapon", 10432], ["Caine", 10436], ["Full emblem", 13600]];
var pirate = [["hat", 10501], ["Shoes", 10505], ["Gloves", 10508], ["One clothes", 10509], ["Cloak", 10506], ["cannon", 10515], ["gun", 10524], ["bullet", 10416], ["Knuckles", 10525], ["Soul Shooter", 10533], ["Accessories for weapon", 10532], ["Eunwol secondary weapon", 12005], ["Full emblem", 13600]];
var cash = [[" #b1.All orders are, tensile + 7 films (+7) / Ultimate (+9)", 10601], ["2.Advanced orders #rPotential, the Yangtze River, hwangmang, including rejam", 9000152]];
var coin = [["Potion, glass, Monster Park Tickets", 1031100]];
var vvvv = [["Entry-level Android", 121211], ["various Accessories (straps, rings, belts, pendants, etc.)", 121212]];
var vvvf = [["various #r[HOT&NEW]#k Who chairs (1)", 121213], ["various #r[HOT&NEW]#k Who chairs (2)", 121214], ["various #r[HOT&NEW]#k Who chairs (3)", 121215]];
var vvvd = [["various #r[HOT&NEW]#k Weapons for a beginner", 1021001]];
var vvve = [["#r[NEW] 150 is the first equipment, weapons shop. \r\n(Highness, Eagle Eye, Fafnir, tailreonteu, etc.)#k", 12345]];
var vvvq = [["#r[NEW] Cube, coin exchange shop#k", 20131116]];

c = -1;
npc = 0;

function start() {
	//cm.dispose();
    var text = "Hello, #h0#sir? Please select the desired item.\r\n\r\n#b";
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
        case 5: return vvve;
        case 6: return vvvq;
        case 7: return cash;
        case 8: return coin;
        case 9: return vvvv;
        case 10: return vvvf;
        case 11: return vvvd;
    }
    return common;
}