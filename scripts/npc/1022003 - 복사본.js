/*
홍보 스크립트
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
var meso;
var buymeso;


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
        var text = "안녕하세요 #b#h0##k님. 홍보상점에 오신것을 환영합니다.\r\n#r※아이템 추가 문의는 GM에게 해주세요.#k\r\n";
	text += "\r\n#r현재 홍보 이벤트가 진행중입니다. 카페를 확인해주세요.#k\r\n"
	text += "\r\n#e소지중인 홍보포인트#n : #r"+cm.getPP()+"#k포인트\r\n\r\n";

	text += "#L19# 메소 환전 (배율 1 : 80000)\r\n\r\n"
	text += "#L20# #i2430218# 1개(400원) - 레벨을 1 올려준다.\r\n";
	text += "#L23# #i2049129# 5개(3200원)\r\n";

	text += "#L1# #i4001126# 2000개(1000원)#l　";
	text += "#L2# #i4001126# 4000개(2000원)\r\n";

	text += "#L15# #i4310034# 10개 (2600원)　　";
	text += "#L16# #i4310058# 01개 (5200원)\r\n\r\n";

	text += "#L24# #i1142593# 1개(4900원)\r\n\r\n";

	text += "#L21# #i3010519# 1개(400원)　　　　　";
	text += "#L22# #i3010520# 1개(400원)\r\n";
        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 1){
	    item = 4001126;
	    cost = 1000;
	    quantity = 2000;
	    name = "단풍잎";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}else if (sel == 2) {
	    item = 4001126;
	    cost = 2000;                 //80
	    quantity = 4000;
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
	    quantity = 10;
	    cost = 2600;
	    name = "저스티스 코인";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 16) {
	    item = 4310058;
	    quantity = 1;
	    cost = 5200;
	    name = "매그너스 코인";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
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
	    buymeso =1;
	    cm.sendGetText("메소로 환전을 원하시는 홍보포인트를 입력해주세요\r\n비율은 #b1 : 80000#k입니다.");
	}else if (sel == 20) {
	    item = 2430218;
	    quantity = 1;
	    cost = 400;
	    name = "폭풍성장의 비약";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 21) {
	    item = 3010519;
	    quantity = 1;
	    cost = 400;
	    name = "거대 예티의자";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 22) {
	    item = 3010520;
	    quantity = 1;
	    cost = 400;
	    name = "거대 페페의자";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 23) {
	    item = 2049122;
	    cost = 3200;                 //80
	    quantity = 5;
	    name = "긍정의 혼돈 주문서 50%";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}else if (sel == 24) {
	    item = 1142593;
	    quantity = 1;
	    cost = 4900;
	    name = "★★13개의 별★★";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 25) {
	    item = 1102450;             //180
	    quantity = 1;
	    cost = 1500;
	    name = "안젤리크 아우라";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 26) {
	    item = 1102451;
	    quantity = 1;
	    cost = 1500;
	    name = "다크니스 아우라";
	    equip = 1;
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}
    }else if (status == 2){
if (buymeso == 1){
	meso = cm.getText();
	cm.sendYesNo("환전을 원하시는 홍보포인트가 #b"+meso+"원("+meso*80000+"메소)#k 맞습니까?");
	}else{
	cost1 = cost;
    if(cm.canHold(item)){
	    if (equip == 1) {
	        cm.sendGetText("선택한 아이템 (현재 가격 : #b"+cost+"포인트)#k\r\n\r\n#i"+item+"#\r\n#r올스 텟#k에 투자할 금액을 입력하세요\r\n#r100 홍보포인트#k = #b올스텟 6#k\r\n#r500 홍보포인트#k = #b공격력 3#k");
	    }else {
	    if(cm.getPP() >=cost) {
	    cm.gainItem(item,quantity);
	    cm.sendOk("구매하셨습니다.");
	    cm.playerMessage(""+(cost)+"원를 사용하여 "+name+" "+quantity+"개를 구매하셨습니다.");
	    cm.gainPP(-cost);
	    cm.dispose();
            cm.getPlayer().saveToDB(false, false); 
	    }else {
	    cm.sendOk("홍보포인트가 부족합니다.");   
	    cm.dispose();
	}
    }
	}else {
	cm.sendOk("인벤토리 공간이 부족합니다.");
	cm.dispose();
	}
}
    }else if (status == 3){
	if(buymeso == 1){
	    if(meso>0 &&cm.getPP() > meso&&cm.getMeso()+(meso*80000) > 2147483647){
		cm.sendOk("메소가 너무 많습니다.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getPP() > meso&&cm.getMeso()+(meso*80000) <= 2147483647){
		cm.gainMeso(meso*80000);
		cm.gainPP(-meso);
		cm.sendOk("홍보포인트를 메소로 환전하셨습니다.");
		cm.dispose();
	    }else{
		cm.sendOk("홍보포인트가 부족합니다.");
		cm.dispose();
		}
	}else{
	
	allstat = cm.getText()/100 * 6;
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){
	    cm.sendOk("정해진 홍보포인트의 단위에 맞추어 적어주세요.\r\n※(홍보포인트 100 = 올스텟 3)");
	    cm.dispose();
	}else{
	cm.sendGetText("선택한 아이템 (현재 가격 : #b"+cost2+"포인트#k)\r\n\r\n#i"+item+"#\r\n원하시는 #r공격력#k을 입력하세요\r\n#r100 홍보포인트#k = #b올스텟 6 / ("+text1+"포인트 (올스텟+"+allstat+"))#k\r\n#r500 홍보포인트#k = #b공격력 3#k");
        }
	}else{
	cm.sendOk("잘못 입력하셨습니다.");
	cm.dispose();
	}
}
    }else if(status == 4){
	damage = cm.getText()/500 * 3;
	text2 = cm.getText();
	if (text2 >= 0){
	cost3 = text2/1; 
	cost3 = cost2 + cost3;
	if (!(text2%500) == 0){
	    cm.sendOk("정해진 홍보포인트의 단위에 맞추어 적어주세요.\r\n※(홍보포인트 500 = 공격력 3)");
	    cm.dispose();
	}else{
	cm.sendYesNo("선택한 아이템 (현재 가격 : #b"+cost3+"#k)\r\n\r\n#i"+item+"#\r\n#r100 홍보포인트#k = #b올스텟 6 / ("+text1+"포인트 (올스텟+"+allstat+"))#k\r\n#r500 홍보포인트#k = #b공격력 3 / ("+text2+"포인트 (공격력+"+damage+"))#k\r\n\r\n※위의 아이템을 제작 하시겠습니까?");
    	}
	}else{
	cm.sendOk("잘못 입력하셨습니다.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getPP() >= cost3){
	cm.sendOk(""+(cost3)+"원를 사용하여 "+name+"을 제작하셨습니다.");
	cm.playerMessage(""+(cost3)+"원를 사용하여 "+name+"을 제작하셨습니다.");
	cm.gainSponserItem(item,'[홍보아이템]',allstat,damage,0);
	cm.gainPP(-cost3);
	cm.dispose(); 
	}else{
	cm.sendOk("홍보포인트가 부족합니다.");
	}
	}else{
	cm.dispose();
	}
}

