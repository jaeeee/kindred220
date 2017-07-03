importPackage(Packages.server.items);
importPackage(Packages.handler.경매);
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
            cm.sendSimple("하아.. 요즘 날씨가 참덥지 장사도안되고..\r\n\r\n#b#L2#창고 이용하기#l\r\n#L1#경매장 이용하기#l\r\n#L0#경매장 물품,메소 회수하기#l");
        } else if (status == 1) {
            if (selection == 0) {	
		if (cm.getPlayer().getLevel() < 100) {
			cm.sendOk("지금은 내가 자네에게 도와줄건 없어 보이는군");
			cm.dispose();
			return;
		}
		cm.sendSimple("어떤걸 이용 하겠나\r\n\r\n#b#L0#메소 회수#l\r\n#L1#아이템 회수#l");	
            } else if (selection == 2) {
		cm.sendStorage();
           } else if (selection == 1) {
		if (cm.getPlayer().getLevel() < 100) {
			cm.sendOk("지금은 내가 자네에게 도와줄건 없어 보이는군");
			cm.dispose();
			return;
		}
		cm.openUI(161);
		경매장.경매장오픈(cm.getClient());
		cm.dispose();
            }
        } else if (status == 2) {
            	sel = selection;
		if (sel == 0) {
			if (경매장.경매장메소회수(cm.getPlayer().getName()) == 0) {
				cm.sendOk("자네는 회수할 메소가 없는거 같군");
				cm.dispose();
			} else {
				cm.gainMeso(경매장.경매장메소회수(cm.getPlayer().getName()));
				cm.sendOk(경매장.경매장메소회수(cm.getPlayer().getName()) + "메소를 회수 완료 하였네");
				경매장.메소회수완료(cm.getPlayer().getName());
				cm.getPlayer().saveToDB(false,false);
				cm.dispose();
			}
		} else if (sel == 1) {
			cm.sendSimple(경매장.경매장아이템회수(cm.getPlayer().getName()));
		}
	} else if (status == 3) {
		if (selection > 0) {
			경매장.아이템회수(cm.getClient(),selection);
			cm.getPlayer().saveToDB(false,false);
			cm.dispose();
		} else {
			cm.dispose();
		}
	}
    }
}