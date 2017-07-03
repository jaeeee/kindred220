


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 광장

	엔피시 설명 : 주문서 교환


*/

var itemsz0 = new Array(new Array(4, 1003859, 1), new Array(4, 1003855, 1), new Array(4, 1003853, 1), new Array(4, 1003848, 1), new Array(4, 1003849, 1), new Array(4, 1003850, 1), new Array(4, 1003851, 1), new Array(4, 1003847, 1), new Array(4, 1003846, 1), new Array(4, 1003845, 1), new Array(4, 1003844, 1), new Array(4, 1003839, 1), new Array(4, 1003838, 1), new Array(4, 1003837, 1), new Array(4, 1003836, 1), new Array(4, 1003816, 1), new Array(4, 1003817, 1), new Array(4, 1003818, 1), new Array(4, 1003819, 1), new Array(4, 1003820, 1), new Array(4, 1003779, 1), new Array(4, 1003778, 1), new Array(4, 1003777, 1), new Array(4, 1003739, 1), new Array(4, 1003541, 1), new Array(4, 1003542, 1), new Array(4, 1003543, 1), new Array(4, 1003639, 1), new Array(4, 1003640, 1), new Array(4, 1003641, 1), new Array(4, 1003642, 1), new Array(4, 1003538, 1), new Array(4, 1000044, 1), new Array(4, 1001064, 1), new Array(4, 1002665, 1), new Array(4, 1000042, 1), new Array(4, 1002943, 1), new Array(4, 1002995, 1));
var itemsz1 = new Array(new Array(4, 1052032, 1), new Array(4, 1052033, 1), new Array(4, 1052034, 1), new Array(4, 1052020, 1), new Array(4, 1052021, 1), new Array(4, 1052022, 1), new Array(4, 1052023, 1), new Array(4, 1051256, 1), new Array(4, 1050210, 1), new Array(4, 1051192, 1), new Array(4, 1052209, 1), new Array(4, 1050152, 1), new Array(4, 1051180, 1), new Array(4, 1052245, 1), new Array(4, 1052495, 1), new Array(4, 1052586, 1), new Array(4, 1052601, 1), new Array(4, 1052603, 1), new Array(4, 1052605, 1));
var itemsz2 = new Array(new Array(5, 1102376, 1), new Array(5, 1102377, 1), new Array(5, 1102378, 1), new Array(5, 1102356, 1), new Array(5, 1102288, 1), new Array(5, 1102389, 1), new Array(5, 1102390, 1), new Array(5, 1102450, 1), new Array(5, 1102451, 1), new Array(5, 1102452, 1), new Array(5, 1102466, 1), new Array(5, 1102546, 1), new Array(5, 1102547, 1), new Array(5, 1102548, 1));
var itemsz3 = new Array(new Array(6, 1702155, 1), new Array(6, 1702174, 1), new Array(6, 1702191, 1), new Array(6, 1702196, 1), new Array(6, 1702211, 1), new Array(6, 1702217, 1), new Array(6, 1702269, 1), new Array(6, 1702270, 1), new Array(6, 1702271, 1), new Array(6, 1702272, 1), new Array(6, 1702273, 1), new Array(6, 1702287, 1), new Array(6, 1702288, 1), new Array(6, 1702291, 1), new Array(6, 1702293, 1), new Array(6, 1702299, 1), new Array(6, 1702306, 1), new Array(6, 1702308, 1), new Array(6, 1702309, 1), new Array(6, 1702330, 1), new Array(6, 1702334, 1), new Array(6, 1702336, 1), new Array(6, 1702337, 1), new Array(6, 1702347, 1), new Array(6, 1702348, 1), new Array(6, 1702350, 1), new Array(6, 1702352, 1), new Array(6, 1702357, 1), new Array(6, 1702367, 1), new Array(6, 1702368, 1), new Array(6, 1702399, 1));

var itemCategorys = new Array("#b[ 4개 ]간지철철모자#k", "#b[ 4개 ]간지촬촬한벌#k", "#b[ 5개 ]간지출출망토#k", "#b[ 6개 ]간지착착무기#K");


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
	var leaf = cm.itemQuantity(4310027);
        var trade = "한정캐시 아이템 상점입니다. 어떤 아이템을 원하세요?\r\n아, 참고로 한정캐시 아이템은 #b[레전드 코인]#k 4,5,6개로 교환하실수 있습니다. #b[레전드 코인]#k은 #r후원&이벤트&홍보#k으로 지급한다고 하네요.\r\n";
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
}