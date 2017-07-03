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
var cost2;
var cost3;
var cost4;
var text1;
var text2;
var buymeso = 0;           //20
var meso;



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
        status++;             //40
    }

    if (status == 0) {
        var text = "안녕하세요 #b#h0##k님. 후원상점에 오신것을 환영합니다.\r\n";
	text += "\r\n#e소지중인 후원포인트#n : #r"+cm.getRC()+"#k\r\n\r\n";
	//text += "#L19# 메소 환전 (배율 1 : 40000)\r\n\r\n"
	text += "#L1# #i4001126# 1000개(1000원)　　";
	text += "#L2# #i4001126# 2000개(2000원)\r\n";

	text += "#L15# #i4310034# 20개 (2600원)　　";
	text += "#L16# #i4310058# 01개 (3500원)\r\n\r\n";

	text += "#L3# #i1002186# (500(+a)원)　　";
	text += "#L4# #i1102039# (500(+a)원)\r\n";
	text += "#L5# #i1072153# (500(+a)원)　　";
	text += "#L6# #i1082102# (500(+a)원)\r\n";
	text += "#L7# #i1032024# (500(+a)원)　　";
	text += "#L8# #i1022079# (500(+a)원)\r\n\r\n";

	text += "#L9# #i1102511# (1500(+a)원)　　";       //   60
	text += "#L10# #i1102466# (2000(+a)원)\r\n";
	text += "#L11# #i1102376# (1500(+a)원)　　";
	text += "#L12# #i1102377# (1500(+a)원)\r\n";
	text += "#L13# #i1102378# (1500(+a)원)　　";
	text += "#L14# #i1102290# (1200(+a)원)\r\n";
	text += "#L17# #i1102307# (1200(+a)원)　　";
	text += "#L18# #i1102308# (1200(+a)원)\r\n";

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
	    cost = 2000;                 //80
	    quantity = 2000;
	    name = "단풍잎";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}else if (sel == 3) {
	    item = 1002186;
	    quantity = 1;
	    cost = 500;
	    name = "투명모자";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 4) {
	    item = 1102039;
	    quantity = 1;
	    cost = 500;
	    name = "투명망토";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 5) {
	    item = 1072153;
	    quantity = 1;                   //100
	    cost = 500;
	    name = "투명신발";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 6) {
	    item = 1082102;
	    quantity = 1;
	    cost = 500;
	    name = "투명장갑";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 7) {
	    item = 1032024;
	    quantity = 1;
	    cost = 500;
	    name = "투명귀고리";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 8) {
	    item = 1022079;
	    quantity = 1;
	    cost = 500;
	    name = "투명안경";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 9) {
	    item = 1102511;
	    quantity = 1;
	    cost = 1500;
	    name = "엔젤케루빔";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 10) {
	    item = 1102466;
	    quantity = 1;
	    cost = 2000;
	    name = "노빌리타스아우라";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 11) {
	    item = 1102376;                //140
	    quantity = 1;
	    cost = 1500;
	    name = "프쉬케플로라";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 12) {
	    item = 1102377;
	    quantity = 1;
	    cost = 1500;
	    name = "프쉬케미스틱";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 13) {
	    item = 1102378;
	    quantity = 1;
	    cost = 1500;
	    name = "프쉬케멜로디";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 14) {            //160
	    item = 1102290;
	    quantity = 1;
	    cost = 1200;
	    name = "꽃비단날개띠";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 15) {
	    item = 4310034;
	    quantity = 20;
	    cost = 2600;
	    name = "저스티스 코인";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 16) {
	    item = 4310058;
	    quantity = 1;
	    cost = 3500;
	    name = "매그너스 코인";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 17) {
	    item = 1102307;             //180
	    quantity = 1;
	    cost = 1200;
	    name = "샤키엘의 날개";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 18) {
	    item = 1102308;
	    quantity = 1;
	    cost = 1200;
	    name = "베에모트의 날개";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 19) {
	    buymeso = 1
	    cm.sendGetText("얼마의 후원포인트를 환전하시겠습니까? (배율 1 : 40000)");
    }else if (status == 2){
	cost1 = cost;
    if (cm.canHold(item)){
	    if (equip == 1) {
	        cm.sendGetText("선택한 아이템 (현재 가격 : #b"+cost+"포인트#k)\r\n\r\n#i"+item+"#\r\n원하시는 #r올스텟#k을 입력하세요\r\n#r100 후원포인트#k = #b올스텟 6#k\r\n#r500 후원포인트#k = #b공격력 3#k");  //200
	    }else {
	    if (cm.getRC() > cost){
	    cm.gainItem(item,quantity);
	    cm.sendOk("구매하셨습니다.");
	    cm.playerMessage("#r"+(cost)+"#k원를 사용하여 #b"+name+"#k "+quantity+"개를 구매하셨습니다.");
	    cm.gainRC(-cost);
	    cm.saveToDB(false,false);
	    cm.dispose();		
	    }else{
		cm.sendOk("후원포인트가 부족합니다.");
		cm.dispose();
	    }
            }
	}else {
	    cm.sendOk("인벤토리 공간이 부족합니다.");   
	    cm.dispose();
    }
    }else if (status == 3){
	allstat = cm.getText()/100 * 6;
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){         //220
	    cm.sendOk("정해진 후원포인트의 단위에 맞추어 적어주세요.\r\n※(후원포인트 100 = 올스텟 3)");
	    cm.dispose();
	}else{
	cm.sendGetText("선택한 아이템 (현재 가격 : #b"+cost2+"포인트#k)\r\n\r\n#i"+item+"#\r\n원하시는 #r공격력#k을 입력하세요\r\n#r100 후원포인트#k = #b올스텟 6 / ("+text1+"포인트 (올스텟+"+allstat+"))#k\r\n#r500 후원포인트#k = #b공격력 3#k");
        }
	}
	}else{
	cm.sendOk("잘못 입력하셨습니다.");
	cm.dispose();
	}
    }else if(status == 4){
	damage = cm.getText()/500 * 3;
	text2 = cm.getText();
	if (text2 >= 0){
	cost3 = text2/1; 
	cost3 = cost2 + cost3;
	if (!(text2%500) == 0){
	    cm.sendOk("정해진 후원포인트의 단위에 맞추어 적어주세요.\r\n※(후원포인트 500 = 공격력 3)");
	    cm.dispose();
	}else{ //240
	cm.sendYesNo("선택한 아이템 (현재 가격 : #b"+cost3+"#k)\r\n\r\n#i"+item+"#\r\n원하시는 #r공격력#k을 입력하세요\r\n#r100 후원포인트#k = #b올스텟 6 / ("+text1+"포인트 (올스텟+"+allstat+"))#k\r\n#r500 후원포인트#k = #b공격력 3 / ("+text2+"포인트 (공격력+"+damage+"))#k\r\n\r\n※위의 아이템을 제작 하시겠습니까?");
    	}
	}else{
	cm.sendOk("잘못 입력하셨습니다.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getRC() >= cost3){
	cm.sendOk(""+(cost3)+"원를 사용하여 "+name+"을 제작하셨습니다.");
	cm.playerMessage(""+(cost3)+"원를 사용하여 "+name+"을 제작하셨습니다.");
	cm.gainSponserItem(item,allstat,damage,0);
	cm.gainRC(-cost3);
	cm.saveToDB(false,false);
	cm.dispose();
	}else{
	cm.sendOk("후원포인트가 부족합니다.");
	cm.dispose();
	}
	}else{
	cm.dispose();  //260
	}

}



