


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 헤네시스

	엔피시 설명 : 주문서 교환


*/

var itemsz0 = new Array(new Array(5, 1003797, 5), new Array(5, 1042254, 5), new Array(5, 1062165, 5));
var itemsz1 = new Array(new Array(5, 1003799, 5), new Array(5, 1042256, 5), new Array(5, 1062167, 5));
var itemsz2 = new Array(new Array(5, 1003800, 5), new Array(5, 1042257, 5), new Array(5, 1062168, 5));
var itemsz3 = new Array(new Array(5, 1003798, 5), new Array(5, 1042255, 5), new Array(5, 1062166, 5));
var itemsz4 = new Array(new Array(5, 1003801, 5), new Array(5, 1042258, 5), new Array(5, 1062169, 5));


var itemCategorys = new Array("#r#i2022575# 전사 방어구\r\n", "#b#i2022577# 궁수 방어구\r\n", "#r#i2022578# 도적 방어구\r\n", "#b#i2022576# 마법사 방어구\r\n", "#r#i2022579# 해적 방어구#k");


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
	var leaf = cm.itemQuantity(4310067);
        var trade = "#b파프니르 방어구#k 상점입니다\r\n파프니르 무기는 #b#i4310067##z4310067##k으로 교환하실수가있습니다\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "#b원하시는 아이템을 골라보세요#k\r\n#e#r[꼭!]본 아이템은 교환시 환불및 취소가 불가능합니다#k#n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("#b동전 "+itemsArray[select][0]+"개를 #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#으로 교환 하시겠습니까?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310067, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310067, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("#b교환 완료 인벤토리를 확인해주세요#k");
            cm.dispose();
        } else {
            cm.sendOk("#b인벤토리가 가득 찾거나 후원 코인이 없네요#k");
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