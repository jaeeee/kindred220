importPackage(Packages.server.items);

var status = 0;
var sel = -1;
var itemList = Array (5030000, 5030002, 5030004, 5030008); // 아이템 목록 
var day = Array (7,1,7,1,7,1,7,1);
var pch = Array (7900,7900,7900,7900,7900,7900,7900,1200);
var status2 = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (status <= 2 && mode == 0) {
            cm.dispose();
            return;
        }  
        if (mode == 0) {
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("How may I help you? \r\n\r\n#b#L2#Open Storage#l\r\n#L1#Open Auction House#l\r\n#L0#Collect Sales & Retrieve Items#l");
        } else if (status == 1) {
            if (selection == 0) {	
		if (cm.getPlayer().getLevel() < 100) {
			cm.sendOk("You must be at least level 100 to use this.");
			cm.dispose();
			return;
		}
		cm.sendSimple("What would you like to do? \r\n\r\n#b#L0#Collect Sales Profits#l\r\n#L1#Retrieve Items#l");	
            } else if (selection == 2) {
		cm.sendStorage();
		cm.dispose();
           } else if (selection == 1) {
		if (cm.getPlayer().getLevel() < 100) {
			cm.sendOk("You must be at least level 100 to use this.");
			cm.dispose();
			return;
		}
		cm.openUI(161);
	MapleAuction.AuctionOpen(cm.getClient());
	cm.dispose();
            }
        } else if (status == 2) {
            	sel = selection;
		if (sel == 0) {
			if (MapleAuction.경매장메소회수(cm.getPlayer().getName()) == 0) {
				cm.sendOk("I don't think you have anything to collect.");
				cm.dispose();
			} else {
				cm.gainMeso(MapleAuction.경매장메소회수(cm.getPlayer().getName()));
				cm.sendOk(MapleAuction.경매장메소회수(cm.getPlayer().getName()) + " mesos have been retrieved.");
				MapleAuction.메소회수완료(cm.getPlayer().getName());
				cm.getPlayer().saveToDB(false,false);
				cm.dispose();
			}
		} else if (sel == 1) {
			cm.sendSimple(MapleAuction.경매장아이템회수(cm.getPlayer().getName()));
		}
	} else if (status == 3) {
		if (selection > 0) {
			MapleAuction.아이템회수(cm.getClient(),selection);
			cm.getPlayer().saveToDB(false,false);
			cm.dispose();
		} else {
			cm.dispose();
		}
	}
    }
}