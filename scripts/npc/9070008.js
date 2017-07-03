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
var buyrc;
var rc;


function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
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
        var text = "안녕하세요 #b#h0##k님. 홍보상점에 오신것을 환영합니다.\r\n";
	text += "\r\n#e소지중인 홍보포인트#n : #r"+cm.getPP()+"#k포인트\r\n";
	text += "\r\n#l#e<환전 시스템>#n\r\n";
	text += "#L1# 메소 환전 (배율 1 : 30000)\r\n"
	text += "#L18# #r#e[이벤트]#k후원포인트 환전 (배율 20 : 1)#n\r\n\r\n";
	text += "\r\n#l#e<홍보아이템 구매>#n\r\n";
	text += "#L2# #i4001126# X 100 (#b300P#k)  　";
	text += "#L3# #i4001126# X 1000 (#b3000P#k)\r\n";
	text += "#L4# #i4001126# X 5000 (#b15000P#k)";
	text += "#L5# #i4001126# X 10000 (#b30000P#k)\r\n";
	text += "#L6# #i4310034# X 1개 (#b3500P#k) 　";
	text += "#L7# #i4310034# X 3개 (#b10500P#k)\r\n";
	text += "#L8# #i4310034# X 5개 (#b17500P#k)  ";
	text += "#L9# #i4310034# X 10개 (#b35000P#k)\r\n";
	text += "#L10# #i2049122# X 1개 (#b4500P#k)　";
	text += "#L11# #i2049122# X 3개 (#b13500P#k)\r\n";
	text += "#L12# #i2049122# X 5개 (#b22500P#k) ";
	text += "#L13# #i2049122# X 10개 (#b45000P#k)\r\n";
	text += "#L14# #i5530123# X 1개 (#b5000P#k)　";
	text += "#L15# #i5530123# X 3개 (#b15000P#k)\r\n";
	text += "#L16# #i5530123# X 5개 (#b25000P#k) ";
	text += "#L17# #i5530123# X 10개 (#b50000P#k)\r\n";
        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 1) {
	    buymeso =1;
	    cm.sendGetText("메소로 환전을 원하시는 홍보포인트를 입력해주세요\r\n비율은 #b1 : 30000#k입니다.");
	} else if (sel == 2){
	    item = 4001126;
	    cost = 300;
	    quantity = 100;
	    name = "단풍잎";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 3){
	    item = 4001126;
	    cost = 3000;
	    quantity = 1000;
	    name = "단풍잎";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 4){
	    item = 4001126;
	    cost = 15000;
	    quantity = 5000;
	    name = "단풍잎";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 5){
	    item = 4001126;
	    cost = 30000;
	    quantity = 10000;
	    name = "단풍잎";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 6){
	    item = 4310034;
	    cost = 3500;
	    quantity = 1;
	    name = "저스티스 코인";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 7){
	    item = 4310034;
	    cost = 10500;
	    quantity = 3;
	    name = "저스티스 코인";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 8){
	    item = 4310034;
	    cost = 17500;
	    quantity = 5;
	    name = "저스티스 코인";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 9){
	    item = 4310034;
	    cost = 35000;
	    quantity = 10;
	    name = "저스티스 코인";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 10){
	    item = 2049122;
	    cost = 4500;
	    quantity = 1;
	    name = "긍정의 혼돈의 주문서 50%";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 11){
	    item = 2049122;
	    cost = 13500;
	    quantity = 3;
	    name = "긍정의 혼돈의 주문서 50%";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 12){
	    item = 2049122;
	    cost = 22500;
	    quantity = 5;
	    name = "긍정의 혼돈의 주문서 50%";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 13){
	    item = 2049122;
	    cost = 45000;
	    quantity = 10;
	    name = "긍정의 혼돈의 주문서 50%";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 14){
	    item = 5530123;
	    cost = 5000;
	    quantity = 1;
	    name = "8樂 주문서 상자";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 15){
	    item = 5530123;
	    cost = 15000;
	    quantity = 3;
	    name = "8樂 주문서 상자";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 16){
	    item = 5530123;
	    cost = 25000;
	    quantity = 5;
	    name = "8樂 주문서 상자";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 17){
	    item = 5530123;
	    cost = 50000;
	    quantity = 10;
	    name = "8樂 주문서 상자";
	    cm.sendOk("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	} else if (sel == 18){
	    if(cm.getPlayer().getGMLevel() != 2){
	        buyrc = 1;
	        cm.sendGetNumber("후원포인트로 환전하실 홍보포인트의 양을 입력해주세요.\r\n#Cgray#(배율 = 20 : 1) ex) 200000홍보포인트 - 10000후원포인트",20,10000,cm.getPP());
	    }else{
		cm.sendOk("홍보GM은 이용하실 수 없습니다.");
		cm.dispose();
	    }
	}
	}else if (status == 2){
		if (buymeso == 1 && buyrc != 1){
			meso = cm.getText();
			cm.sendYesNo("환전하시는 홍보포인트가 #b"+meso+"포인트("+meso*30000+"메소)#k 맞습니까?");
		}else if(buyrc == 1){
			rc = (selection-selection%20)/1;
			cm.sendYesNo("#b"+rc+"#k홍보포인트를 #b"+rc/20+"#k후원포인트로 환전하시겠습니까?");
		}else{
			cost1 = cost;
			if(cm.canHold(item) && buyrc != 1){
				if (equip == 1) {
					cm.sendGetText("선택한 아이템 (현재 가격 : #b"+cost+"포인트)#k\r\n\r\n#i"+item+"#\r\n#r올스 텟#k에 투자할 금액을 입력하세요\r\n#r100 홍보포인트#k = #b올스텟 6#k\r\n#r500 홍보포인트#k = #b공격력 3#k");
				} else {
					if(cm.getPP() >=cost) {
						cm.gainItem(item,quantity);
						cm.sendOk("구매하셨습니다.");
						cm.playerMessage(""+(cost)+" 포인트를 사용하여 "+name+" "+quantity+"개를 구매하셨습니다.");
						cm.gainPP(-cost);
						cm.dispose();
						cm.getPlayer().saveToDB(false, false); 
					} else {
						cm.sendOk("홍보포인트가 부족합니다.");   
						cm.dispose();
    					}
				}
			} else {
				cm.sendOk("인벤토리 공간이 부족합니다.");
				cm.dispose();
			}
		}

    }else if (status == 3){
	if(buymeso == 1){
	    if(meso>0 &&cm.getPP() > meso&&cm.getMeso()+(meso*30000) > 9999999999){
		cm.sendOk("메소가 너무 많습니다.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getPP() > meso&&cm.getMeso()+(meso*30000) <= 9999999999){
		cm.gainMeso(meso*30000);
		cm.gainPP(-meso);
		cm.sendOk("홍보포인트를 메소로 환전하셨습니다.");
		cm.dispose();
	    }else{
		cm.sendOk("홍보포인트가 부족합니다.");
		cm.dispose();
	    }
	}else if(buyrc = 1){
		cm.gainRC(rc/20);
		cm.sendOk(rc+"홍보포인트를 "+rc/20+"후원포인트로 환전하셨습니다.");
		cm.playerMessage(rc+"홍보포인트를 "+rc/20+"후원포인트로 환전하셨습니다.");
		cm.gainPP(-rc);	
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
	cm.sendGetText("선택한 아이템 (현재 가격 : #b"+cost2+"포인트#k)\r\n\r\n#i"+item+"#\r\n포인트하시는 #r공격력#k을 입력하세요\r\n#r100 홍보포인트#k = #b올스텟 6 / ("+text1+"포인트 (올스텟+"+allstat+"))#k\r\n#r500 홍보포인트#k = #b공격력 3#k");
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
	cm.sendOk(""+(cost3)+"포인트를 사용하여 "+name+"을 제작하셨습니다.");
	cm.playerMessage(""+(cost3)+" 포인트를 사용하여 "+name+"을 제작하셨습니다.");
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

