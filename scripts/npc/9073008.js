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
            cm.sendSimple("#b미스틱 필드#k를 보호하라 ! #b미스틱 필드#k에서 출몰하는 각양각색의 보스몬스터들을 물리쳐주세요 !\r\n\r\n\r\n    #fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#b#L0##b미스틱 필드(헤네시스)로 이동하겠습니다.\r\n#b#L1##b미스틱 필드(판테온)로 이동하겠습니다.\r\n#b#L2##b미스틱 필드(리프레)로 이동하겠습니다.#l");
        } else if (status == 1) {
            if (selection == 0) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 입장이 불가능합니다.");
            cm.dispose();
            return;
        }
/*
    var it = cm.getPlayer().getParty().getMembers().iterator();
    var partychr = null;
    var pass = true;
    var msg = "";
    while (it.hasNext()) {
    var partychar = it.next();
    if(partychar.getLevel() < 50){
    pass = false;
    msg += partychar.getName()+","
    }
    }
    if (!pass) {
    cm.sendOk("#b미스틱 필드 (헤네시스)#k 는 레벨 50 이상만 입장가능합니다.\r\n\r\n입장불가 파티원\r\n#b"+msg+"#k");
    cm.dispose();
    return;
    }
*/
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
		if (cm.getClient().getChannelServer().getMapFactory().getMap(931050800).getCharactersSize() > 0) {
             cm.sendOk("이미 다른 유저가 보스레이드를 이용중입니다.\r\n다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
             cm.dispose();
 	            return;
  		  }
  		 try {
                var em = cm.getEventManager("newCharacter");
                em.startInstance(cm.getPlayer());
                cm.resetMap(931050800);
                cm.allPartyWarp(931050800, true);
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
/*
    var it = cm.getPlayer().getParty().getMembers().iterator();
    var partychr = null;
    var pass = true;
    var msg = "";
    while (it.hasNext()) {
    var partychar = it.next();
    if(partychar.getLevel() < 100){
    pass = false;
    msg += partychar.getName()+","
    }
    }
    if (!pass) {
    cm.sendOk("#b미스틱 필드 (판테온)#k 는 레벨 100 이상만 입장가능합니다.\r\n\r\n입장불가 파티원\r\n#b"+msg+"#k");
    cm.dispose();
    return;
    }
*/
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
    if (cm.getClient().getChannelServer().getMapFactory().getMap(931050800).getCharactersSize() > 0) {
             cm.sendOk("이미 다른 유저가 보스레이드를 이용중입니다.\r\n다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter1");
                em.startInstance(cm.getPlayer());
                cm.resetMap(931050810);
                cm.allPartyWarp(931050810, true);
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
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티가 없으면 입장이 불가능합니다.");
            cm.dispose();
            return;
        }
/*
    var it = cm.getPlayer().getParty().getMembers().iterator();
    var partychr = null;
    var pass = true;
    var msg = "";
    while (it.hasNext()) {
    var partychar = it.next();
    if(partychar.getLevel() < 130){
    pass = false;
    msg += partychar.getName()+","
    }
    }
    if (!pass) {
    cm.sendOk("#b미스틱 필드 (판테온)#k 는 레벨 130 이상만 입장가능합니다.\r\n\r\n입장불가 파티원\r\n#b"+msg+"#k");
    cm.dispose();
    return;
    }
*/
            if (!cm.allMembersHere()) {
                cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
                cm.dispose();
                return;
            }
    if (cm.getClient().getChannelServer().getMapFactory().getMap(931050820).getCharactersSize() > 0) {
             cm.sendOk("이미 다른 유저가 보스레이드를 이용중입니다.\r\n다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
             cm.dispose();
             return;
    }
             try {
                var em = cm.getEventManager("newCharacter2");
                em.startInstance(cm.getPlayer());
                cm.resetMap(931050820);
                cm.allPartyWarp(931050820, true);
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
		cm.dispose();
            cm.openNpc(9070010);
            }
    }
}
}