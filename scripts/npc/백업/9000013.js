/*
제작자 : 연이 (ljw5992@naver.com) / (dbg_yeane@nate.com)
*/

var want;
var potential1;
var potential2;
var potential3;
var thing;

var mage = new Array(new Array(1, 1003173, 1), new Array(1, 1102276, 1), new Array(1, 1082296, 1), new Array(1, 1052315, 1), new Array(1, 1072486, 1)); //법사 - 드래곤테일

var archer = new Array(new Array(1, 1003174, 1), new Array(1, 1102277, 1), new Array(1, 1082297, 1), new Array(1, 1052316, 1), new Array(1, 1072487, 1)); //궁수 - 팔콘윙

var thief = new Array(new Array(1, 1003175, 1), new Array(1, 1102278, 1), new Array(1, 1082298, 1), new Array(1, 1052317, 1), new Array(1, 1072488, 1)); //도적 - 레이븐혼

var knight = new Array(new Array(1, 1003172, 1),new Array(1, 1102275, 1), new Array(1, 1082295, 1), new Array(1, 1052314, 1), new Array(1, 1072485, 1)); //전사 - 라이온하트

var pirate = new Array(new Array(1, 1003176, 1), new Array(1, 1102279, 1), new Array(1, 1082299, 1), new Array(1, 1052318, 1), new Array(1, 1072489, 1)); //해적 - 샤크투

var itemCategorys = new Array("법사　 　- 　　드래곤테일","궁수　　 - 　　팔콘윙","도적　　 - 　　레이븐혼","전사　　 - 　　라이온하트","해적　　 - 　　샤크투스");

var status = -1;
var menuSelect = -1;
var select = -1;
var levelselect = -1;

var grade;

var cost = 0;
	
var result_a = 0;
var result_b = 0;
var result_c = 0;
var result_d = 0;
var totalresult = 0;


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
	
        var trade = "안녕하세요. #b여제 방어구#k 제작 NPC입니다.\r\n제작하실 아이템의 직업을 선택해주세요.\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "원하는 아이템을 골라보세요.\r\n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #b[#z"+itemsArray[i][1]+"#]\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("선택하신 아이템이 #i"+itemsArray[select][1]+"##b[#z"+itemsArray[select][1]+"#]#k 맞습니까?");
    } else if (status == 3) {
	var itemsArray = getArray(menuSelect);
	levelselect = selection;
	var spfirst = "#b잠재 등급#k을 선택해주세요.\r\n";
	spfirst += "#L2000##r에픽#k 　　　#b[１０,０００,０００]#k\r\n";
	spfirst += "#L3000##r유니크#k 　　#b[３０,０００,０００]#k\r\n";
	spfirst += "#L4000##r레전드리#k 　#b[１００,０００,０００]#k\r\n";
	cm.sendSimple(spfirst);
    } else if (status == 4) {
		if (selection == 2000) {
		cost = 10000000;
		} else if (selection == 3000){
		cost = 30000000;
		} else if (selection == 4000){
		cost = 100000000;
		}
	result_a = cost;
 	if (selection == 2000) {
	thing = 2;
	grade = 18;
	var selfirst = "#r#e[에픽]#n#k을 선택하셨습니다. #b첫번째 세부 옵션#k을 선택해주세요.\r\n";
	selfirst += "#L20041##b힘#k　　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20042##b민첩#k　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20043##b지력#k　 　　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20044##b운#k　　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L30041##b힘#k　　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30042##b민첩#k　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30043##b지력#k　 　　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30044##b운#k　　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	cm.sendSimple(selfirst);
	} else if (selection == 3000){
	thing = 3;
	grade = 19;
	var selfirst = "#r#e[유니크]#n#k를 선택하셨습니다. #b첫번째 세부 옵션#k을 선택해주세요.\r\n";
	selfirst += "#L20041##b힘#k　　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20042##b민첩#k　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20043##b지력#k　 　　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20044##b운#k　　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L30041##b힘#k　　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30042##b민첩#k　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30043##b지력#k　 　　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30044##b운#k　　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L40041##b힘#k　　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
	selfirst += "#L40042##b민첩#k　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
	selfirst += "#L40043##b지력#k　 　　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
	selfirst += "#L40044##b운#k　　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
	cm.sendSimple(selfirst);
	} else if (selection == 4000){
	thing = 4;
	grade = 20;
	var selfirst = "#r#e[레전드리]#n#k를 선택하셨습니다. #b첫번째 세부 옵션#k을 선택해주세요.\r\n";
	selfirst += "#L20041##b힘#k　　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20042##b민첩#k　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20043##b지력#k　 　　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L20044##b운#k　　　 　　　#r６%#k　　　　#b[３０,０００,０００]#k\r\n";
	selfirst += "#L30041##b힘#k　　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30042##b민첩#k　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30043##b지력#k　 　　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L30044##b운#k　　　 　　　#r９%#k　　　　#b[８０,０００,０００]#k\r\n";
	selfirst += "#L40041##b힘#k　　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
	selfirst += "#L40042##b민첩#k　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
	selfirst += "#L40043##b지력#k　 　　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
	selfirst += "#L40044##b운#k　　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
	cm.sendSimple(selfirst);
	} 
	}else if (status == 5){
		if (selection == 20041 || selection == 20042 || selection == 20043|| selection == 20044){
		cost = 30000000;
		} else if (selection == 30041 ||selection == 30042 ||selection == 30043|| selection == 30044){
		cost = 80000000;
		} else if (selection == 40041 ||selection == 40042 ||selection == 40043|| selection == 40044){
		cost = 300000000;
		}
	result_b = cost;
	potential1 = selection
		if (selection >= 0 && thing == 2) {
		var seltwice = "#b두번째 세부 옵션#k을 선택해주세요.\r\n";
		seltwice += "#L20041##b힘#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20042##b민첩#k　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20043##b지력#k　 　　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20044##b운#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		cm.sendSimple(seltwice);
		}
		if (selection >= 0 && thing == 3) {
		var seltwice = "#b두번째 세부 옵션#k을 선택해주세요.\r\n";
		seltwice += "#L20041##b힘#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20042##b민첩#k　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20043##b지력#k　 　　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20044##b운#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L30041##b힘#k　　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30042##b민첩#k　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30043##b지력#k　 　　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30044##b운#k　　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		cm.sendSimple(seltwice);
		}
		if (selection >= 0 && thing == 4) {
		var seltwice = "#b두번째 세부 옵션#k을 선택해주세요.\r\n";
		seltwice += "#L20041##b힘#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20042##b민첩#k　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20043##b지력#k　 　　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20044##b운#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L30041##b힘#k　　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30042##b민첩#k　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30043##b지력#k　 　　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30044##b운#k　　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L40041##b힘#k　　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
		seltwice += "#L40042##b민첩#k　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
		seltwice += "#L40043##b지력#k　 　　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
		seltwice += "#L40044##b운#k　　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
		cm.sendSimple(seltwice);
		}
	}else if (status == 6){
		if (selection == 20041 || selection == 20042 || selection == 20043 || selection == 20044){
		cost = 30000000;
		} else if (selection == 30041 ||selection == 30042 ||selection == 30043|| selection == 30044){
		cost = 80000000;
		} else if (selection == 40041 ||selection == 40042 ||selection == 40043|| selection == 40044){
		cost = 300000000;
		}
	result_c = cost;
	potential2 = selection
		if (selection >= 0 && thing == 2) {
		var seltwice = "#b세번째 세부 옵션#k을 선택해주세요.\r\n";
		seltwice += "#L20041##b힘#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20042##b민첩#k　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20043##b지력#k　 　　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20044##b운#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		cm.sendSimple(seltwice);
		}
		if (selection >= 0 && thing == 3) {
		var seltwice = "#b세번째 세부 옵션#k을 선택해주세요.\r\n";
		seltwice += "#L20041##b힘#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20042##b민첩#k　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20043##b지력#k　 　　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20044##b운#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L30041##b힘#k　　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30042##b민첩#k　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30043##b지력#k　 　　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30044##b운#k　　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		cm.sendSimple(seltwice);
		}
		if (selection >= 0 && thing == 4) {
		var seltwice = "#b세번째 세부 옵션#k을 선택해주세요.\r\n";
		seltwice += "#L20041##b힘#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20042##b민첩#k　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20043##b지력#k　 　　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L20044##b운#k　　　 　　　#r６%#k　　　#b[３０,０００,０００]#k\r\n";
		seltwice += "#L30041##b힘#k　　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30042##b민첩#k　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30043##b지력#k　 　　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L30044##b운#k　　　 　　　#r９%#k　　　#b[８０,０００,０００]#k\r\n";
		seltwice += "#L40041##b힘#k　　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
		seltwice += "#L40042##b민첩#k　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
		seltwice += "#L40043##b지력#k　 　　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
		seltwice += "#L40044##b운#k　　　 　　　#r１２%#k　　　#b[３００,０００,０００]#k\r\n";
		cm.sendSimple(seltwice);
		}
	}else if (status == 7){
	potential3 = selection;
		if (selection == 20041 || selection == 20042 || selection == 20043|| selection == 20044){
		cost = 30000000;
		} else if (selection == 30041 ||selection == 30042 ||selection == 30043|| selection == 30044){
		cost = 80000000;
		} else if (selection == 40041 ||selection == 40042 ||selection == 40043|| selection == 40044){
		cost = 300000000;
		}
	result_d = cost;
	totalresult = result_a + result_b + result_c + result_d;

	var itemsArray = getArray(menuSelect);
	cm.sendYesNo("주문하신 아이템의 구매를 원하시면 #b#e[예]#n#k 아니라면 #r#e[아니오]#n#k를 눌러주세요.\r\n\r\n#e[총 제작비용]#n\r\n#b저스티스 코인#k : #r20개#k\r\n#b메소#k : #r"+totalresult+" 메소#k");
	}else if (status == 8){
	var itemsArray = getArray(menuSelect);
	if (cm.getMeso() >= totalresult){
		if (cm.canHold(itemsArray[select][1])){
			if (cm.haveItem(4310034, 20)){	
	cm.sendOk("주문하신 아이템의 제작이 완료되었습니다.");
        cm.gainPotentialItem(itemsArray[select][1],1,thing,grade,potential1,potential2,potential3);
	cm.gainMeso(-totalresult);
	cm.gainItem(4310034, -20);
	cm.dispose();
			}else{
			cm.sendOk("저스티스 코인이 부족합니다.");
			cm.dispose();
			}
		}else{
		cm.sendOk("인벤토리 공간이 부족합니다.");
		cm.dispose();
		}

	}else{
	cm.sendOk("메소가 부족합니다.");
	cm.dispose();
	}
    }
}

function getArray(sel) {
if (sel==0)return mage;
if (sel==1)return archer;
if (sel==2)return thief;
if (sel==3)return knight;
if (sel==4)return pirate;
}
