


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 헤네시스

	엔피시 설명 : 주문서 교환


*/

var itemsz0 = new Array(new Array(1, 1372161, 1), new Array(1, 1302248, 1), new Array(1, 1312135, 1), new Array(1, 1322181, 1), new Array(1, 1442202, 1));
var itemsz1 = new Array(new Array(1, 1212044, 1), new Array(1, 1372161, 1), new Array(1, 1382192, 1));
var itemsz2 = new Array(new Array(1, 1452189, 1), new Array(1, 1462177, 1), new Array(1, 1522078, 1));
var itemsz3 = new Array(new Array(1, 1242044, 1), new Array(1, 1332205, 1), new Array(1, 1342075, 1), new Array(1, 1472197, 1));
var itemsz4 = new Array(new Array(1, 1222044, 1), new Array(1, 1482151, 1), new Array(1, 1492162, 1), new Array(1, 1532081, 1));

var itemCategorys = new Array("전사", "마법사", "궁수", "도적", "해적");


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
	var leaf = cm.itemQuantity(4310058);
        var trade = "환영합니다. #b러브리스#k 상점입니다.\r\n#r러브리스 아이템#k은 #b2500의 환생포인트#k로 교환하실 수 있습니다.\r\n\r\n현재 환생포인트 : #b"+cm.getPlayer().getFame()+"#k\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "원하는 아이템을 골라보세요.\r\n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("환생포인트 2500을 #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#으로 교환 하시겠습니까?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.getPlayer().getFame()>=2500 && cm.canHold(itemsArray[select][1])) {
 	    cm.getPlayer().addFame(-2500);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("교환완료! 인벤토리를 확인해봐!");
            cm.dispose();
        } else {
            cm.sendOk("인벤토리가 가득 찼거나 환생포인트가 부족한것 같네요.");
            cm.dispose();
            return;
        }
    }
}

function getArray(sel) {
if (sel==0)return itemsz0;
if (sel==1)return itemsz1;
if (sel==2)return itemsz2;
if (sel==3)return itemsz3;
if (sel==4)return itemsz4;
}