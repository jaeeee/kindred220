/*
후원 스크립트
*/

var status = -1;

var cost;
var item;
var quantity;
var name;
var allstat;
var damage;
var upgrade;
var equip = 0;


function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.openShop (1012008);
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        var text = "안녕하세요 #b#h0##k님. 후원상점에 오신것을 환영합니다.\r\n";
	text += "\r\n소지중인 후원포인트 : "+cm.getRC()+"\r\n";
	text += "#L1# #i4001126# 1000개(1000원)　　";
	text += "#L2# #i4001126# 2000개(2000원)\r\n";
	text += "#L3# #i1002186# s:300/d:10 (5000원)　　";
        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 1){
	    item = 4001126;
	    cost = 1000;
	    quantity = 1000;
	    name = "단풍잎";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}else if (sel == 2) {
	    item = 4001126;
	    cost = 2000;
	    quantity = 2000;
	    name = "단풍잎";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}else if (sel == 3) {
	    item = 1002186;
	    cost = 5000;
	    quantity = 1;
	    name = "투명모자";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}

    }else if (status == 2){
	if(cm.getRC() >cost) {
	    if (equip == 1) {
	        cm.sendGetText("원하시는 올스텟을 입력하세요\r\n#r100후원포인트#k = #b올스텟3p#k\r\n#r500후원포인트#k = #b공격력3p#k");
	    }else {
	    cm.gainItem(item,quantity);
	    cm.sendOk("구매하셨습니다.");
	    cm.playerMessage(""+(cost)+"원를 사용하여 "+name+" "+quantity+"개를 구매하셨습니다.");
	    cm.gainRC(-cost);
	    cm.saveToDB(false,false);
	    cm.dispose();
	    }
	}else {
	    cm.sendOk("후원포인트가 부족합니다.");   
	    cm.dispose();
    }
    }else if (status == 3){
	allstat = cm.getText()/100 * 3;
	var text = cm.getText();
	if (!allstat%100 == 0){
	    cm.sendOk("정해진 후원포인트의 단위에 맞추어 적어주세요.\r\n※(후원포인트 100p = 올스텟3p)");
	    cm.dispose();
	}else{
	cm.sendGetText("선택한 아이템 "+item+"\r\n올스텟에 투자한 후원포인트 : "+text+"("+allstat+")\r\원하시는 공격력을 입력하세요\r\n#r500후원포인트#k = #b공격력3p#k");
    }
    }else if (status == 4){ //90
	damage = cm.getText()/500 * 3;
	var text = cm.getText();
	if (!damage%500 == 0){
	    cm.sendOk("정해진 후원포인트의 단위에 맞추어 적어주세요.\r\n※(후원포인트 500p = 공격력3p)");
	    cm.dispose();
	}
    }else if (status == 5){
	cm.sendOk("주문하신 아이템의 제작이 완료되었습니다.");
	cm.gainSponserItem(item,allstat,damage,0);
    }else{
	cm.dispose();
	}
    }