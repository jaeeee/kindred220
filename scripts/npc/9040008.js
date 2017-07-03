importPackage
var status = 0;
var sele = 0;
var price = 0;
var itemSelection = 0;

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
	    var chat = "경매장 시스템입니다 : 항목을 선택해주세요 \r\n";
	    chat += "#L0#아이템 등록#l";
	    chat += "#L1#등록된 아이템 조회#l";
	    chat += "#L2#등록된 아이템 검색#l";
	    chat += "\r\n#L3#구매한 아이템 조회#l";
	    chat += "#L4#메소 조회#l\r\n\r\n#r(아이템 구매후 아이템을 찾아가지 않으시는 분들은 아이디 삭제 대상 입니다)";
    	    cm.sendSimple(chat);
        } else if (status == 1) {
	    sele = selection;
	    if (sele == 0) {
    	    	cm.sendSimple("등록하실 아이템을 선택해주세요 : \r\n" + cm.getAllItem());
            } else if (sele == 1) {
    	    	cm.sendSimple("등록된 아이템 목록입니다 : \r\n" + cm.getAllAuctionItemsToScript());
	    } else if (sele == 2) {
	        cm.sendGetText("검색어를 입력 해주세요.");
	    } else if (sele == 3) {
    	    	cm.sendSimple("구매한 아이템들 입니다. : \r\n" + cm.getAllBuyItemToScript());
	    } else if (sele == 4) {
   	    	cm.sendYesNo(cm.getPlayer().getAuctionMeso() + "메소를 받을 수 있습니다. 받으시겠습니까?");
	    }
        } else if (status == 2) {
	    itemSelection = selection;
	    if (sele == 0) {
	        cm.sendGetText("최저 낙찰가를 정해주세요!");
            } else if (sele == 1) {
	        cm.sendGetText(cm.itemDateSting(itemSelection) + "\r\n 얼마에 낙찰 하시겠습니까?");
            } else if (sele == 2) {
		cm.sendSimple("검색결과 : \r\n" + cm.searchAuctionItemFromString(cm.getText()));
		status = 1;
	        sele = 1;
	    } else if (sele == 3) {
	        cm.sendOk(cm.addAuction(itemSelection) ? "아이템을 구매했습니다." : "메소가 부족합니다.");
	    } else if (sele == 4) {
		cm.gainMeso(cm.getPlayer().getAuctionMeso());
		cm.getPlayer().setAuctionMeso(0);
	    }
	} else if (status == 3) {
	    price = cm.getText();
	    if (sele == 0) {
	    	cm.setAuctionItem(itemSelection, price);
            } else if (sele == 1) {
	        if (cm.setAuctionNow(price, itemSelection)) {
			cm.setNowChrId(itemSelection);
			cm.sendOk("낙찰에 성공했습니다!");
	        } else {
			cm.sendOk("낙찰에 실패했습니다!");
	        }
           	cm.dispose();
	    }
	}
    }
}