/* 이 주석은 지우지 마셨으면 합니다.

출처 : 자유인 (timeisruunin) by Miracle CMNT

*/

importPackage(Packages.client.items);

var item = new Array(new Array(5064000,3000000), new Array(5064100,3000000), new Array(5064300,3000000), new Array(5064003,4500000), new Array(2049004,3000000), new Array(5062009,350000), new Array(5062010,350000), new Array(5041001,400000), new Array(5510000,350000), new Array(5121032,150000), new Array(5072000,80000),new Array(5076000,100000),new Array(5390000,150000), new Array(5390001,150000), new Array(5390002, 150000), new Array(5390006,250000), new Array(5390009,300000),new Array(5390010,350000), new Array(5390014,360000), new Array(5390015, 370000), new Array(5390016,400000), new Array(5390017,450000));
var status = -1;

var slot;
var meso;
var itemmeso;
var item;

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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	slot = cm.getPlayer().getInventory(BelowInventoryType.CASH).getNumFreeSlot();
	meso = cm.getPlayer().getMeso();
	var a ="#b#h ##k님, 구매하실 아이템을 선택해주세요. \r\n\r\n#b"

/* 아이템 구매 시작 */
        a += "#r#e[소모성 주문서]#k\r\n";
    for (var i = 0; i < 5; i++) {
        a += "#L"+i+"##i"+item[i][0]+"# #z"+item[i][0]+"# #n("+ ( item[i][1] / 10000 ) +"만 메소)\r\n#e";
    }
	a +="\r\n\r\n#l#r[게임 편의 아이템]#k\r\n"
        for (var ii = 5; ii < 10; ii++) {
        a += "#L"+ii+"##i"+item[ii][0]+"# #z"+item[ii][0]+"# #n("+ ( item[ii][1] / 10000 ) +"만 메소)\r\n#e";
	}
	a +="\r\n\r\n#l#r[메신저 아이템]#k\r\n"
        for (var ii = 10; ii < 22; ii++) {
        a += "#L"+ii+"##i"+item[ii][0]+"# #z"+item[ii][0]+"# #n("+ ( item[ii][1] / 10000 ) +"만 메소)\r\n#e";
	}
  cm.sendSimple(a);
	} else if (status == 1) {
            if (selection == 4) {
            cm.sendGetNumber("#e선택한 아이템 : #n#i"+item[4][0]+"# #b#z"+item[4][0]+"\r\n\r\n\r\n#k구매를 원하시는 아이템의 개수를 적어주세요.\r\n#Cgray##e인벤토리의 여유공간×100개 이상#n은 구매할 수 없습니다.",1,1,cm.getPlayer().getInventory(BelowInventoryType.USE).getNumFreeSlot()*100);            itemmeso = item[4][1];
            item = item[4][0];

            } else {
            cm.sendGetNumber("#e선택한 아이템 : #n#i"+item[selection][0]+"# #b#z"+item[selection][0]+"\r\n\r\n\r\n#k구매를 원하시는 아이템의 개수를 적어주세요.\r\n#Cgray##e인벤토리의 여유공간×100개 이상#n은 구매할 수 없습니다.",1,1,slot*100);
            itemmeso = item[selection][1];
            item = item[selection][0];
        }           

	} else if (status == 2) {
//	    var prise = total/100000000 < 0.1 ? total/10000 : total/100000000 < 1 ? total/10000000 : total/100000000
//	    var currency = total/100000000 < 0.1 ? "만" : total/100000000 < 1? "천 만" : "억"
	    name = Packages.server.items.ItemInformation.getInstance().getName(item);
            total = selection * itemmeso;
            if (meso < total) {
                cm.sendOk("#h #님이 보유하신 메소의 양이 부족합니다.");
	    } else if (total > 2147483647) {
		cm.sendOk("총 아이템의 구매 금액이 #b21억 4748만 3647 메소#k를 넘었습니다. #h #님이 구매하려는 아이템의 총 가격은 #r"+total/100000000+"억 메소#k 입니다. 다시 한 번 확인 후 구매를 시도해주세요.")
            } else {
	    cm.getPlayer().dropMessage(6, "스티브 잡상 : "+name+" "+selection+"개를 구매하였습니다. 인벤토리를 확인해주세요.");
                cm.gainItem(item, selection);
                cm.gainMeso(-total);
                cm.getPlayer().getClient().getSession().write(Packages.packet.creators.MainPacketCreator.sendHint("#e#b#z"+item+"# #r"+selection+"개#k 구매에 성공하였습니다!",400,20));
            }
            cm.dispose();
	

}
}