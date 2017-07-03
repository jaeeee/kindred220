


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 헤네시스

	엔피시 설명 : 주문서 교환


*/

var itemsz0 = new Array(new Array(18, 1212063, 18), new Array(18, 1222058, 18), new Array(18, 1232057, 18), new Array(18, 1242060, 18), new Array(18, 1302275, 18), new Array(18, 1402196, 18), new Array(18, 1482168, 18), new Array(18, 1532098, 18));
var itemsz1 = new Array(new Array(18, 1322203, 18), new Array(18, 1332225, 18), new Array(18, 1342082, 18), new Array(18, 1362090, 18), new Array(18, 1372177, 18), new Array(18, 1382208, 18), new Array(18, 1492179, 18));
var itemsz2 = new Array(new Array(18, 1412135, 18), new Array(18, 1422140, 18), new Array(18, 1432167, 18), new Array(18, 1442223, 18), new Array(18, 1452205, 18), new Array(18, 1462193, 18), new Array(18, 1472214, 18), new Array(18, 1522094, 18));

var itemCategorys = new Array("파프니르 무기를 얻고싶습니다[1]", "파프니르 무기를 얻고싶습니다[2]",  "파프니르 무기를 얻고싶습니다[3]");


var status = -1;
var menuSelect = -1;
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
	var leaf = cm.itemQuantity(4310129);
        var trade = "#b파프니르 아이템#k 상점입니다. 어떤 아이템을 원하세요?\r\n아, 참고로 파프니르 아이템은 #b#i4310067##z4310067##k 18개로 교환하실수 있습니다. #b#i4310067##z4310067##k은 #r 초기자원으로500개지급 후원으로 지급합니당.#k\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "#r#e[꼭!]직업에 맞는 아이템을 고르세요 반품안됩니다.#n#k\r\n\r\n#b";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("동전 "+itemsArray[select][0]+"개를 #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#으로 교환 하시겠습니까?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310067, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310067, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("교환완료! 인벤토리를 확인해봐!");
            cm.dispose();
        } else {
            cm.sendOk("인벤토리가 가득 찼거나 후원 코인 이 부족한것 같네요.");
            cm.dispose();
            return;
        }
    }
}

function getArray(sel) {
if (sel==0)return itemsz0;
if (sel==1)return itemsz1;
if (sel==2)return itemsz2;
}