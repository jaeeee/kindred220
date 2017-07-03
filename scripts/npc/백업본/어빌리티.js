var status = 0;
var itemList = Array (4310066); // 아이템 목록 
var number = Array (10000000); // 포인트
var sel = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
if (status == 0) {
	cm.sendSimple("저는 #b겨울#k의 힘으로 #b어빌리티#k를 강화할수있는 능력을 가지고 있습니다. 해보시겠어요?\r\n#k#l#L1##b어빌리티 강화가 뭔지 알고싶어.#k\r\n#L0##b어빌리티 강화를 하겠습니다.\r\n#L3##b이너어빌리티 아이템을 구입하겠습니다.");
} else if (status == 1) {
if (selection == 0) {
	     if (cm.haveItem(4310066,5)) {
              cm.getPlayer().randAP1();
              cm.gainItem(4310066, -5);
              cm.dispose();
            } else {
                cm.sendOk("#i4310066##b윈터 코인#k 없이는 어빌리티 강화를 할수 없습니다.");
                cm.dispose();
            }
	} else if (selection == 1) {
		cm.sendOk("어빌리티 강화란 #i4310066##b윈터 코인#k 으로 저의 \r\n겨울의 힘을 사용하여 당신의 어빌리티를 강화하는것입니다. 어빌리티 강화시에는 랜덤으로 #r어빌리티 포인트#k가 5~20 가 상승되죠.#k\r\n어빌리티 포인트가 높을수록 어빌리티가 잘나온답니다.");
		cm.dispose();
} else if (selection == 2) {
cm.sendSimple("#b어빌리티 초기화#k를 하기위해선 제가 판매하고있는 \r\n#b어빌리티 초기화#k주문서가 필요합니다.\r\n#L0##b어빌리티 초기화 주문서를 구매하겠습니다.\r\n#L1#어빌리티 초기화 주문서를 사용하겠습니다.");
} else if (selection == 3) {
    var list = "어떤 아이템을 구매하시겠어요?\r\n";
    list += "#L0##b#i2702000# #z2702000#  5000000 메소#l";
   cm.sendSimple(list);
//cm.sendOk("dd");
 status = 3;
} else if (selection == 4) {
cm.sendYesNo("#b이너어빌리티#k 를 개방하기 위해서는 수수료 500만 메소가 \r\n필요합니다. 정말로 개방 하시겠어요? \r\n#r(개방할시 팅깁니다.");
sel = selection;
}
} else if (status == 2) {
if (sel == 4) {
if(cm.getMeso() >= 5000000) {
cm.getPlayer().innerLevelUp();
cm.getPlayer().innerLevelUp();
cm.getPlayer().innerLevelUp();
cm.gainMeso(-5000000);
cm.reloadChar();
cm.sendOk("#b이너어빌리티#k 개방을 완료 하였습니다.");
cm.dispose();
} else {
cm.sendOk("메소가 부족 하십니다.");
cm.dispose();
}
}if (selection == 0) {
cm.sendGetText("#b어빌리티 초기화 주문서 한개당 1000만 메소 입니다.");
} else if (selection == 1) {
if(cm.haveItem(5050100,1)) {
cm.sendOk("#b어빌리티 초기화#k 가 완료되었습니다.");
cm.resetStats(4,4,4,4);
cm.gainItem(5050100,-1);
cm.dispose();
} else {
cm.sendOk("#b어빌리티 초기화 주문서#k 가 없습니다.");
cm.dispose();
}
}
} else if (status == 3) {
if(cm.getMeso() >= cm.getText() * 1000000) {
cm.sendOk("#b어빌리티 초기화 주문서#k 는 조심히 사용해주십시오.");
cm.gainItem(5050100,cm.getText());
cm.gainMeso(-cm.getText() * 1000000);
cm.dispose();
} else {
cm.sendOk("메소가 부족하십니다.");
cm.dispose();
}
} else if (status == 4) {
 sel = 1;
 cm.sendYesNo("정말 #b#t"+ 2702000 +"##k을(를) 교환하시겟습니까?");
} else if (status == 5) {
        if (cm.getPlayer().getMeso() >= 5000000) {
            if (cm.canHold(2702000)) {
                cm.gainItem(2702000,1);
                cm.gainMeso(-5000000);
                cm.sendOk("아이템교환을 완료하엿습니다.");
                cm.dispose();
            } else {
                cm.sendOk("아이템을 교환하고싶으면 메소를 가지고오세요");
                cm.dispose();
            }
        } else {
            cm.sendOk("500만 메소가 필요합니다.");
            cm.dispose();
        }
    } 
}
}