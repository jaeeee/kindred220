var status = 0;
var itemList = Array (5062200,5062201,2700000,2700100,2700300,2700400,2700500,2700600,2700700,2700800,2700900,2701000); // 아이템 목록 
var number = Array (300000,400000,100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000); // 포인트
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
	cm.sendSimple("저는 #r고대 드래곤#k의 힘으로 #b어빌리티#k를 강화할수있는 능력을가지고있습니다. 보아하니 #b어빌리티#k를 강화\r\n하러 오신거같으신대 한번 해보시겠어요?\r\n#k#l#L1##b어빌리티 강화가 뭐죠?#k\r\n#L0##b이너 어빌리티를 개방 하겠습니다.");
} else if (status == 1) {
if (selection == 0) {
	     if (cm.haveItem(4000244,10)) {
		cm.getPlayer().innerLevelUp();
		cm.gainItem(4000244,-10);
		cm.sendOk("성공적으로 #b이너 어빌리티#k를 개방 하였습니다.");
		cm.dispose();
            } else {
                cm.sendOk("#i4000244##b드래곤의 영혼#k 없이는 어빌리티 강화를 할수 없습니다.");
                cm.dispose();
            }
	} else if (selection == 1) {
		cm.sendOk("어빌리티 강화란 #i4000244##b드래곤의 영혼#k 으로 저의 \r\n고대 드래곤의 힘을 사용하여 당신의 어빌리티를 강화하는것입니다. 어빌리티 강화시에는 잠재된 힘 #r이너 어빌리티#k가 개방됩니다.");
		cm.dispose();
} else if (selection == 2) {
cm.sendSimple("#b어빌리티 초기화#k를 하기위해선 제가 판매하고있는 \r\n#b어빌리티 초기화#k주문서가 필요합니다.\r\n#L0##b어빌리티 초기화 주문서를 구매하겠습니다.\r\n#L1#어빌리티 초기화 주문서를 사용하겠습니다.");
} else if (selection == 3) {
        var list = "어떤 아이템을 구매하시겠어요?\r\n";
        for (var i = 0; i < itemList.length; i++)
	list += "\r\n#L" + i + "##b#i" + itemList[i] + ":# #t" + itemList[i] + "# #b" + number[i] + "메소#k";
        cm.sendSimple(list);
        status = 3;
} 
} else if (status == 2) {
if (selection == 0) {
cm.sendGetText("#b어빌리티 초기화 주문서 한개당 100만 메소 입니다.");
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
 sel = selection;
 cm.sendYesNo("정말 #b#t"+ itemList[sel] +"##k을(를) 교환하시겟습니까?");
} else if (status == 5) {
        if (cm.getPlayer().getMeso() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gainItem(itemList[sel],1);
                cm.gainMeso(-number[sel]);
                cm.sendNext("아이템교환을 완료하엿습니다.");
                cm.dispose();
            } else {
                cm.sendOk("아이템을 교환하고싶으면 메소를 가지고오세요");
                cm.dispose();
            }
        } else {
            cm.sendOk("메소가 부족하십니다.");
            cm.dispose();
        }
    } 
}
}