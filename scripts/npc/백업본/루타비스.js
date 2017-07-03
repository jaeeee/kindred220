


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 헤네시스

	엔피시 설명 : 주문서 교환


*/

var itemsz0 = new Array(new Array(13, 1003797, 13), new Array(13, 1042254, 13), new Array(13, 1062165, 13));
var itemsz1 = new Array(new Array(13, 1003799, 13), new Array(13, 1042256, 13), new Array(13, 1062167, 13));
var itemsz2 = new Array(new Array(13, 1003798, 13), new Array(13, 1042255, 13), new Array(13, 1062166, 13));
var itemsz3 = new Array(new Array(13, 1003800, 13), new Array(13, 1042257, 13), new Array(13, 1062168, 13));
var itemsz4 = new Array(new Array(13, 1003801, 13), new Array(13, 1042258, 13), new Array(13, 1062169, 13));

var itemCategorys = new Array("[전사]워리어", "[궁수]이글아이", "[법사]던위치", "[도적]어새신", "[해적]원더러");


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
	var leaf = cm.itemQuantity(4310029);
        var trade = "루타비스템 상점입니다. 어떤 아이템을 원하세요?\r\n아, 참고로 루타비스템들은 #b[레전드 코인]#k 13개로 교환하실수 있습니다. #b[레전드 코인]#k은 #r후원상점 #k에서얻는 코인으로 지급한다고 하네요.\r\n";
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
        cm.sendYesNo("레전드 코인 "+itemsArray[select][0]+"개를 #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#으로 교환 하시겠습니까?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310027, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310027, -itemsArray[select][0]);
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
if (sel==3)return itemsz3;
if (sel==4)return itemsz4;
}