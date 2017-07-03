


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 광장

	엔피시 설명 : 주문서 교환


*/

var itemsz0 = new Array(new Array(80, 1003946, 1), new Array(80, 1102612, 1), new Array(80, 1082540, 1), new Array(80, 1052647, 1), new Array(80, 1072853, 1), new Array(20, 1122262, 1), new Array(20, 1132242, 1));
var itemsz1 = new Array(new Array(100, 2430445, 1));

var itemCategorys = new Array("레볼루션 방어구 상점", "레볼루션 무기 상자 상점");


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
	var leaf = cm.itemQuantity(4001254);
        var trade = "레볼루션 템 상점이에요~ \r\n아, 참고로 레볼루션 템들은 #b[레볼루션 코인]#k 방어구는 80개, 악세서리는 20개, 무기 개당 200개로 교환하실수 있습니다.  #b[레볼루션 코인]#k은 #r몹 #k에게서얻는 코인이라네요.\r\n";
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
        cm.sendYesNo("레볼루션 코인 "+itemsArray[select][0]+"개를 #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#으로 교환 하시겠습니까?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4001254, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4001254, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("교환완료! 인벤토리를 확인해봐!");
            cm.dispose();
        } else {
            cm.sendOk("인벤토리가 가득 찼거나 단풍잎이 부족한것 같네요.");
            cm.dispose();
            return;
        }
    }
}

function getArray(sel) {
if (sel==0)return itemsz0;
if (sel==1)return itemsz1;
}