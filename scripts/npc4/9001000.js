var status = 0;
var points;
var sel;
var sel2;
var itemList = Array (1002357,1003112,1002971,1052202,1003621,1052526,1003622,1052527,1122000,1122076,1402179,1402180); // 아이템 목록 
var number = Array (50,80,60,60,1000,1000,1500,1500,1000,2000,3000,5000);

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
            cm.sendSimple("전장의 화신 ! 몬스터 아레나로 입장 하시고 싶으세요?#k#k\r\n\r\n#b#L0##b몬스터 아레나로 입장하겠습니다.#l\r\n\r\n\r\n#L4##r전리품 교환하기#l");
        } else if (status == 1) {
            if (selection == 0) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 입장이 불가능합니다.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("파티장이 입장신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
                cm.dispose();
                return;
            }
if (cm.getClient().getChannelServer().getMapFactory().getMap(950200100).getCharactersSize() > 0) {
             cm.sendOk("이미 다른 유저가 보스레이드를 이용중입니다.\r\n다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
             cm.dispose();
             return;
    }
   try {
                var em = cm.getEventManager("MonsterArea");
                em.startInstance(cm.getPlayer());
                cm.resetMap(950200100);
                cm.allPartyWarp(950200100, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 1) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 입장이 불가능합니다.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("파티장이 입장신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(950200100).getCharactersSize() > 0) {
             cm.sendOk("이미 다른 유저가 보스레이드를 이용중입니다.\r\n다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("MonsterArea");
                em.startInstance(cm.getPlayer());
                cm.resetMap(950200100);
                cm.allPartyWarp(950200100, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 2) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 입장이 불가능합니다.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("파티장이 입장신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(921160400).getCharactersSize() > 0) {
             cm.sendOk("이미 다른 유저가 보스레이드를 이용중입니다.\r\n다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter2");
                em.startInstance(cm.getPlayer());
                cm.resetMap(272000600);
                cm.allPartyWarp(272000600, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 3) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 입장이 불가능합니다.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("파티장이 입장신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(921160400).getCharactersSize() > 0) {
             cm.sendOk("이미 다른 유저가 보스레이드를 이용중입니다.\r\n다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter3");
                em.startInstance(cm.getPlayer());
                cm.resetMap(921160400);
                cm.allPartyWarp(921160400, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
        } else if (selection == 4) {
		var where = "교환가능한 아이템 목록";
		for (var i = 0; i < itemList.length; i++) {
			where += "\r\n#L" + i + "##b#i" + itemList[i] + ":# (" + number[i] + " 포인트)";
		}
                cm.sendSimple(where);
            }
        } else if (status == 2) {
            sel = selection;
            cm.sendYesNo("#b" + number[sel] + "#k포인트가 필요합니다. 정말로 교환하시겠습니까?");
        } else if (status == 3) {
            if (cm.getPlayer().getboss() >= number[sel]) {
                if (cm.canHold(itemList[sel])) {
                    cm.sendOk("#b#t"+itemList[sel]+"##k을(를) 구매하셨습니다.");
                    cm.gainItem(itemList[sel], 1);
                    cm.getPlayer().addboss(-number[sel]);
                    cm.dispose();
                } else {
                    cm.sendOk("인벤토리에 빈공간이 부족합니다.");
                    cm.dispose();
                }
            } else {
                cm.sendOk("교환을 위한 포인트가 부족합니다.");
                cm.dispose();
            }
    }
}
}