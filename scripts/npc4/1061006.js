


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 헤네시스

	엔피시 설명 : 주문서 교환


*/

var itemsz0 = new Array(new Array(18, 1212115, 18), new Array(18, 1222109, 18), new Array(18, 1232109, 18), new Array(18, 1242116, 18), new Array(18, 1302333, 18), new Array(18, 1312199, 18), new Array(18, 1322250, 18), new Array(18, 1332274, 18));
var itemsz1 = new Array(new Array(18, 1342101, 18), new Array(18, 1362135, 18), new Array(18, 1372222, 18), new Array(18, 1382259, 18), new Array(18, 1402251, 18), new Array(18, 1412177, 18), new Array(18, 1422184, 18), new Array(18, 1522138, 18), new Array(18, 1532144, 18));
var itemsz2 = new Array(new Array(18, 1432214, 18), new Array(18, 1442268, 18), new Array(18, 1452252, 18), new Array(18, 1462239, 18), new Array(18, 1472261, 18), new Array(18, 1462193, 18), new Array(18, 1482216, 18), new Array(18, 1492231, 18));

var itemCategorys = new Array("앱솔랩스 무기를 얻고싶습니다[1]", "앱솔랩스 무기를 얻고싶습니다[2]",  "앱솔랩스 무기를 얻고싶습니다[3]");


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
	var leaf = cm.itemQuantity(40310067);
        var trade = "#b앱솔랩스 아이템#k 상점입니다. 어떤 아이템을 원하세요?\r\n아, 참고로 앱솔랩스 아이템은 #b#i4310067##z4310067##k 18개로 교환하실수 있습니다. #b#i4310067##z4310067##k은 #r기능시스템 #k에서 교환한다고 하네요.\r\n";
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
            cm.sendOk("인벤토리가 가득 찼거나 레전드 코인이 부족한것 같네요.");
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