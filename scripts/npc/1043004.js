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
	    var chat = "Hello #b#h0##kWelcome to 's auction house.\r\n";
	    if (cm.getAllBuyItemToScript().split("")[1] != null){
		chat += "#rThe items to be collected exists today. Go Please recovery.\r\n#k";
            }else{
		chat += "These items need to be recovered does not currently exist.\r\n";	
	    }
	    if (cm.getPlayer().getAuctionMeso() != 0){
		chat += "#rThe method currently exists to be recovered.\r\n#k";
            }else{
		chat += "The method to be currently collected does not exist.\r\n";	
	    }
	    chat += "\r\n#eMeso being in possession#n : "+cm.getPlayer().getMeso()+"\r\n\r\n";
	    chat += "#L0##dAuction item Register#l\r\n\r\n";
	    chat += "#L1#Registered viewed items#l";
	    chat += "#L2#Registered Item Search#l\r\n";
	    chat += "#L3#Views purchased item#l";
	    chat += "#L4#Auction rest of the query methods#l#k\r\n\r\n\r\n#r¢®¨ªWhen the purchase is completed or the time the auction ends, ways to recover the items within a week if you do not stop the cause of identity.#k";
    	    cm.sendSimple(chat);
        } else if (status == 1) {
	    sele = selection;
	    if (sele == 0) {
		if (cm.getAllItem().split("")[1] != null){
    	    	cm.sendSimple("Please select an item to register : \r\n" + cm.getAllItem());
		}else{
		cm.sendOk("The items to be registered does not exist.");
		cm.dispose();
		}
            } else if (sele == 1) {
		if (cm.getAllAuctionItemsToScript().split("")[1] != null){
    	    	cm.sendSimple("Registered items list : \r\n" + cm.getAllAuctionItemsToScript());
		}else{
		cm.sendOk("There is no registered items.");
		cm.dispose();
		}
	    } else if (sele == 2) {
	        cm.sendGetText("Please enter your search term.");
	    } else if (sele == 3) {
		if (cm.getAllBuyItemToScript().split("")[1] != null){
    	    	cm.sendSimple("The items are purchased. : \r\n" + cm.getAllBuyItemToScript());
		}else{
		cm.sendOk("You do not have to buy an item.");
		cm.dispose();
		}
	    } else if (sele == 4) {
   	    	cm.sendYesNo(cm.getPlayer().getAuctionMeso() + "You can get the method. Would you like to receive?");
	    }
        } else if (status == 2) {
	    itemSelection = selection;
	    if (sele == 0) {
	        cm.sendGetText("Please define the minimum tender price!");
            } else if (sele == 1) {
	        cm.sendGetText(cm.itemDateSting(itemSelection) + "\r\n Are you sure you want to bid on how much?");
            } else if (sele == 2) {
		if (cm.searchAuctionItemFromString(cm.getText()).split("")[1] != null){
		cm.sendSimple("Search Results : \r\n" + cm.searchAuctionItemFromString(cm.getText()));
		status = 1;
	        sele = 1;
		}else{
		cm.sendOk("The items that match the search results does not exist.");
		cm.dispose();
		}
	    } else if (sele == 3) {
	        cm.sendOk(cm.addAuction(itemSelection) ? "Purchased item." : "Method is low.");
		cm.dispose();
	    } else if (sele == 4) {
		cm.gainMeso(cm.getPlayer().getAuctionMeso());
		cm.getPlayer().setAuctionMeso(0);
		cm.dispose();
	    }
	} else if (status == 3) {
	    price = cm.getText();
	    if (sele == 0) {
	    	cm.setAuctionItem(itemSelection, price);
		cm.dispose();
            } else if (sele == 1) {
	        if (cm.setAuctionNow(price, itemSelection)) {
			cm.setNowChrId(itemSelection);
			cm.sendOk("Successfully bid!");
	        } else {
			cm.sendOk("Failed bid!");
	        }
           	cm.dispose();
	    }
	}
    }
}