


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 헤네시스

	엔피시 설명 : 주문서 교환


*/

var itemsz0 = new Array(new Array(1, 1102481, 1), new Array(1, 1102482, 1), new Array(1, 1102483, 1), new Array(1, 1102484, 1), new Array(1, 1102485, 1));
var itemsz1 = new Array(new Array(1, 1072743, 1), new Array(1, 1072744, 1), new Array(1, 1072745, 1), new Array(1, 1072746, 1), new Array(1, 1072747, 1));
var itemsz2 = new Array(new Array(1, 1132174, 1), new Array(1, 1132175, 1), new Array(1, 1132176, 1), new Array(1, 1132177, 1), new Array(1, 1132178, 1));

var itemCategorys = new Array("타일런트 클록", "타일런트 부츠", "타일런트 벨트");


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
        var trade = "타일런트 아이템 상점입니다. 어떤 아이템을 원하세요?\r\n아, 참고로 타일런트 아이템은 #b[매그너스 코인]#k으로 교환하실수 있습니다. #b[매그너스 코인]#k은 마을에 있는 #b[문 교수]#k가 특정아이템을 구해오면 준다더군요..\r\n";
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
        cm.sendYesNo("메그너스 코인 "+itemsArray[select][0]+"개를 #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#으로 교환 하시겠습니까?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310058, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310058, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("교환완료! 인벤토리를 확인해봐!");
            cm.dispose();
        } else {
            cm.sendOk("인벤토리가 가득 찼거나 메그너스 코인이 부족한것 같네요.");
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