


/*



*/


var status = -1;

function start() {
	var vh = cm.itemQuantity(4033311); // 반레온머리칼
	var zs = cm.itemQuantity(4033302); // 자쿰돌조각
	var hs = cm.itemQuantity(4033303); // 혼테일 비늘
	var pb = cm.itemQuantity(4032002); // 핑크빈 구슬
	var ah = cm.itemQuantity(4033312); // 아카이럼의 수염
	var hh = cm.itemQuantity(4033304); // 힐라의 머리칼
	var ss = cm.itemQuantity(4000659); // 시그너스의 써클릿

	    if (vh >= 1 && zs >= 1 && hs >= 1 && pb >= 1 && vh >= 1 && vh >= 1 && vh >= 1){
		var sel = "#L1##b모두 다 모아왔습니다. 메그너스 코인으로 바꿔주세요.#k";
		} else {
		sel = "#L0##b아직 모두 모으지 못했습니다.#k";
		}
	    var chat = ""
            chat += "오셨군요. 저는 크로스 헌터 소속의 문 교수라고 합니다.";
	    chat += "혹시 보스를 잡으시고 #i4033302#같은 특정드랍 아이템들을 얻으신적이 있으십니까?";
	    chat += "메이플월드가 소란스러워져서 원인을 파악하던중 난제에 봉착해 문제를 겪고 있습니다.";
	    chat += "메이플 월드의 평화를 위해 아래의 아이템들을 얻으시면 저에게 가져다 주시기 바랍니다.\r\n";
	    chat += "─────────────────────────────";
	    chat += "#i4033311##z4033311#　　　#b("+vh+"/1)#k\r\n";
	    chat += "#i4033302##z4033302#　　　 　#b("+zs+"/1)#k\r\n";
	    chat += "#i4033303##z4033303#　　　 　 #b("+hs+"/1)#k\r\n";
	    chat += "#i4032002##z4032002#　　　　　#b("+pb+"/1)#k\r\n";
	    chat += "#i4033312##z4033312#　　 　 #b("+ah+"/1)#k\r\n";
	    chat += "#i4033304##z4033304#　　　  　#b("+hh+"/1)#k\r\n";
	    chat += "#i4000659##z4000659#　　　#b("+ss+"/1)#k\r\n";
	    chat += "─────────────────────────────";
	    chat += ""+sel+"";
	    cm.sendSimple(chat);
}

function action(mode, type, selection) {
        cm.dispose();
	if (selection == 0) {
			 cm.sendOk("모두 다 모아온 후에 말을 걸어 주십시오");
		         cm.dispose();
	} else if (selection == 1) {
	    if (cm.haveItem(4033311, 1) && cm.haveItem(4033302, 1) && cm.haveItem(4033303, 1) && cm.haveItem(4032002, 1) && cm.haveItem(4033312, 1) && cm.haveItem(4033304, 1) && cm.haveItem(4000659, 1)) {
		 if (cm.canHold(4310058)) {
			 cm.sendOk("감사합니다 모험가 #b#h ##k님. 보상으로 타일런트 아이템을 구할 수 있는 #i4310058# #z4310058# 을 드리겠습니다.");
			 cm.gainItem(4033311, -1);
			 cm.gainItem(4033312, -1);
			 cm.gainItem(4033302, -1);
			 cm.gainItem(4033303, -1);
			 cm.gainItem(4033304, -1);
			 cm.gainItem(4000659, -1);
			 cm.gainItem(4032002, -1);
			 cm.gainItem(4310058, 1);
			 cm.dispose();
		} else {		         
			 cm.sendOk("인벤토리에 빈 공간이 없습니다.");
		         cm.dispose();	
			}
	    } else {		         
		 cm.sendOk("해당되는 아이템을 전부 가지고 있는지 확인해주세요");
		 cm.dispose();	
		 }
	} else {
	cm.sendOk("생각을 다시 해주시고 말을 걸어 주세요");
	cm.dispose();
		}
	}