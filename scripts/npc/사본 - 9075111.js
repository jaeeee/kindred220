


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	유기 에 의해 만들어 졌습니다.

	엔피시아이디 : 9075111

	엔피시 이름 : 문 교수

	엔피시가 있는 맵 : 헤네시스 : 리나의 집 (100000003)

	엔피시 설명 : MISSINGNO


*/


var status = -1;

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


	    var vh = cm.itemQuantity(4033311); // 반레온머리칼
	    var zs = cm.itemQuantity(4033302); // 자쿰돌조각
	    var hs = cm.itemQuantity(4033303); // 혼테일 비늘
	    var pb = cm.itemQuantity(4032002); // 핑크빈 구슬
	    var ah = cm.itemQuantity(4033312); // 아카이럼의 수염
	    var hh = cm.itemQuantity(4033304); // 힐라의 머리칼
	    var ss = cm.itemQuantity(4000659); // 시그너스의 써클릿
	    var item = new Array("4033311", "4033302", "4033303", "4032002", "4033312", "4033304", "4000659");

	    if (vh >= 1 || zs >= 1 || hs >= 1 || pb >= 1 || vh >= 1 || vh >= 1 || vh >= 1){
		var sel = "#L1##b모두 다 모아왔습니다. 메그너스 코인으로 바꿔주세요.#k";
		}else {
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
	 } if (selection == 1) {
	      if (cm.haveItem(4000659, 1)) {
		 if (cm.canHold(4310058)) {
			 cm.sendOk("감사합니다 모험가 #b#L0##k님. 보상으로 타일런트 아이템을 구할 수 있는 #4310058#을 드리겠습니다.");
			 cm.gainItem(4000659, -1);
			 cm.gainItem(4310058, 1);
			 cm.dispose();
		}else {		         
			 cm.sendOk("인벤토리에 빈 공간이 없습니다.");
		         cm.dispose();
		}	
		}else{
		         cm.sendOk("부족한 아이템이 있습니다.");
		         cm.dispose();
		}
		}else{
			 cm.dispose();
		}
		}
