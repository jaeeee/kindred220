importPackage(Packages.constants);

var cost;
var item;
var use = 0;
var status = 0;
var point = 0;
var pt2;
var pt;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
        var text = "#b안녕하세요?\r "+AboutRave.serverName+"온라인 레어시스템을 알려주는 엔피씨 입니다.\r\n무엇이 궁금하십니까?#k\r\n";
	text += "#k\r\n#L1##r["+AboutRave.serverName+"온라인] 레어 시스템이란 ?\r\n";
	text += "#k\r\n#L3##b["+AboutRave.serverName+"온라인] 레어 포인트를 얻고싶어요!\r\n";
	text += "#L2#["+AboutRave.serverName+"온라인] 레어 시스템을 이용하겠습니다.#n#k";
	cm.sendSimple(text);
} else if (selection == 2) {
	cm.dispose();
        cm.openNpc(1022000);
	return;
} else if (selection == 1) {
               cm.sendSimple (" 고르세요. #d" +
            "#k\r\n#L0##r레어 시스템 이란 무엇인가요?" +
            "#k\r\n#L4##r레어 등급이란 무엇인가요?");
 } else if (selection == 3) {
               cm.sendSimple (" #e#r레어 포인트를 얻고싶나요?#n#k" +
            "#k\r\n#L7# (20p)     #r홍보포인트 1포인트당#n" +
            "#k\r\n#L8# (5p)     #r후원포인트 1포인트당#n");
} else if (status == 2) {
	sel = selection;
	if (sel == 0) {
        cm.sendOk ("\r\n #b레어 시스템이란 레어포인트 5000으로 갖가지 아이템으로 레어포인트를 획득하여 레어옵션(보공,총뎀,올텟등)을 추가적으로 장비에 부여하는 시스템을 말합니다.");
	cm.dispose();
   } else if (sel == 4) {
        cm.sendOk ("\r\n #b레어등급이란 레어시스템 경험치에 비례해서 레벨이 정해지는데 그것을 레어 등급이라합니다.\r\n레어등급이 높을수록 추가옵션 능력치가 높습니다.");
	cm.dispose();
   } else if (sel == 6) {
	item = 4310066;
	cost = 25;
	use = 2;
	cm.sendGetText("#i"+item+"##z"+item+"# 1개당 "+cost+"포인트로 전환하실수있습니다.\r\n몇개를 전환하시겠습니까?");
   } else if (sel == 5) {
	item = 4310016;
	cost = 10;
	use = 2;
	cm.sendGetText("#i"+item+"##z"+item+"# 1개당 "+cost+"포인트로 전환하실수있습니다.\r\n몇개를 전환하시겠습니까?");
   } else if (sel == 7) {
	point = 1;
	cost = 20;
	use = 1;
	cm.sendGetText("#b홍보포인트 1포인트당#r 레어포인트 20포인트#k로 전환할수있습니다.\r\n얼마나 전환하시겠습니까?");
   } else if (sel == 8) {
	point = 2;
	cost = 5;
	use = 1;
	cm.sendGetText("#b후원포인트 1포인트당#r 레어포인트 5포인트#k로 전환할수있습니다.\r\n얼마나 전환하시겠습니까?");
}
   } else if (status == 3) {
	if (cm.getText() < 0) {
	cm.dispose();
	}
	if (use == 2) {
	pt2 = cm.getText();
	cm.sendYesNo("정말 #i"+item+"##z"+item+"# "+pt2+"개를 "+(cost*pt2)+"레어 포인트로 전환하시겠습니까?");
 } 
	pt = cm.getText();
	if (point == 1 && cm.getPlayer().getHBPT() >= pt) {
		cm.getPlayer().addRarePT((cost*pt));
		cm.sendOk("홍보 #r#e"+pt+"#n#k 포인트를 사용하여 레어포인트 #e#b"+(cost*pt)+"#n#k 포인트만큼 획득하였습니다.");
		cm.getPlayer().gainHBPT(-pt);
		cm.dispose();
}	 if (point == 2 && cm.getPlayer().getHPT() >= pt) {
		cm.getPlayer().addRarePT((cost*pt));
		cm.sendOk("후원 #r#e"+pt+"#n#k 포인트를 사용하여 레어포인트 #e#b"+(cost*pt)+"#n#k 포인트만큼 획득하였습니다.");
		cm.getPlayer().gainHPT(-pt);
		cm.dispose();
}
 } else if (status == 4) {
 if (cm.haveItem(item,pt2,false,true)) {
 cm.sendOk("#i"+item+"##z"+item+"# "+pt2+"개를 "+(cost*pt2)+"레어 포인트로 전환하였습니다.");
 cm.gainItem(item, -pt2);
 cm.getPlayer().addRarePT((cost*pt2));
 cm.dispose();
	    }else {
	    cm.sendOk("레어포인트가 부족합니다. 레어포인트는 5000 이 필요합니다.");   
	    cm.dispose();
    }
}
}
}