


/*



*/


var status = -1;

function start() {
	var a1 = cm.itemQuantity(2431965); 
	var a2 = cm.itemQuantity(2431966);
	var a3 = cm.itemQuantity(2431967);
	var a4 = cm.itemQuantity(2432084);
	var a5 = cm.itemQuantity(2432153);
	var a6 = cm.itemQuantity(2432154);
	var a7 = cm.itemQuantity(2432207);
	var s1 = cm.itemQuantity(2432354); 
	var s2 = cm.itemQuantity(2432355);
	var s3 = cm.itemQuantity(2432465);
	var s4 = cm.itemQuantity(2432479);
	var s5 = cm.itemQuantity(2432526);
	var s6 = cm.itemQuantity(2432532);
	var s7 = cm.itemQuantity(2432592);
	var s8 = cm.itemQuantity(4310058);
	    if (a1 >= 1 && a2 >= 1 && a3 >= 1 && a4 >= 1 && a5 >= 1 && a6 >= 1 && a7 >= 1 && s1 >= 1 && s2 >= 1 && s3 >= 1 && s4 >= 1 && s5 >= 1 && s6 >= 1 && s7 >= 1){
		var sel = "#L1##b모두 다 모아왔습니다. 데미지 스킨을 배울수 잇게 재료를 주세요.#k";
		} else {
		sel = "#L0##b아직 모두 모으지 못했습니다.#k";
		}
	    if (s8 >= 1) {
	       var see = "#L2##b데미지스킨을 배우겟습니다#k";
		} else {
		sel = "#L0##b아직 모두 모으지 못했습니다.#k";
		}
	    var chat = ""
            chat += "오셨군요. 저는 데미지 스킨이라는 특수한 스킬을 전수하는 임무를 맡은 불량 청소년 이라고 합니다";
	    chat += "혹시 보스를 잡으시고 #i2431965#같은 특정드랍 아이템들을 얻으신적이 있으십니까?";
	    chat += "메이플월드가 소란스러워져서 원인을 파악하던중 난제에 봉착해 문제를 겪고 있습니다.";
	    chat += "메이플 월드의 평화를 위해 아래의 아이템들을 얻으시면 저에게 가져다 주시기 바랍니다.\r\n";
	    chat += "──────────────────────────";
	    chat += "#i2431965##z2431965#　　　#b("+a1+"/1)#k\r\n";
	    chat += "#i2431966##z2431966#　　　 　#b("+a2+"/1)#k\r\n";
	    chat += "#i2431967##z2431967#　　　 　 #b("+a3+"/1)#k\r\n";
	    chat += "#i2432084##z2432084#　　　　　#b("+a4+"/1)#k\r\n";
	    chat += "#i2432153##z2432153#　　 　 #b("+a5+"/1)#k\r\n";
	    chat += "#i2432154##z2432154#　　　  　#b("+a6+"/1)#k\r\n";
	    chat += "#i2432207##z2432207#　　　#b("+a7+"/1)#k\r\n";
	    chat += "#i2432354##z2432354#　　　#b("+s1+"/1)#k\r\n";
	    chat += "#i2432355##z2432355#　　　 　#b("+s2+"/1)#k\r\n";
	    chat += "#i2432465##z2432465#　　　 　 #b("+s3+"/1)#k\r\n";
	    chat += "#i2432479##z2432479#　　　　　#b("+s4+"/1)#k\r\n";
	    chat += "#i2432526##z2432526#　　 　 #b("+s5+"/1)#k\r\n";
	    chat += "#i2432532##z2432532#　　　  　#b("+s6+"/1)#k\r\n";
	    chat += "#i2432592##z2432592#　　　  　#b("+s7+"/1)#k\r\n";
	    chat += "──────────────────────────";
	    chat += ""+sel+"";
	    chat += ""+see+"";
	    cm.sendSimple(chat);
}

function action(mode, type, selection) {
        cm.dispose();
	if (selection == 0) {
			 cm.sendOk("모두 다 모아온 후에 말을 걸어 주십시오");
		         cm.dispose();
	} else if (selection == 1) {
	    	 if (cm.canHold(4310058)) {
		        cm.sendOk("감사합니다 모험가 #b#h ##k님. 보상으로 데미지스킨 아이템을 구할 수 있는 #i4310058# #z4310058# 을 드리겠습니다.");
			cm.gainItem(2431965, -1);
			cm.gainItem(2431966, -1);
			cm.gainItem(2431967, -1);
			cm.gainItem(2432084, -1);
			cm.gainItem(2432153, -1);
			cm.gainItem(2432154, -1);
			cm.gainItem(2432207, -1);
			cm.gainItem(2432354, -1);
			cm.gainItem(2432355, -1);
			cm.gainItem(2432465, -1);
			cm.gainItem(2432479, -1);
			cm.gainItem(2432526, -1);
			cm.gainItem(2432532, -1);
			cm.gainItem(2432592, -1);
		        cm.gainItem(4310058, 1);
			cm.dispose();
		} else {		         
			 cm.sendOk("인벤토리에 빈 공간이 없습니다.");
		         cm.dispose();	
			}
/*	    } else {		         
		 cm.sendOk("해당되는 아이템을 전부 가지고 있는지 확인해주세요");
		 cm.dispose();	
		 }*/
	} else {
	cm.sendOk("생각을 다시 해주시고 말을 걸어 주세요");
	cm.dispose();
		}
	}