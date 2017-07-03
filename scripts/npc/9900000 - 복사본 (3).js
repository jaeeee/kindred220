var arr = new Array(951000200,951000210,951000220,951000230,951000240,951000250,951000260,951000270);
var map = Math.floor(Math.random()*arr.length+1);

importPackage(Packages.packet.creators);

var status = -1;

function start() {
        if (cm.getPlayer().getParty() != null){
	cm.getPlayer().send(MainPacketCreator.showEffect("monsterPark/extremeBoss"))
        cm.sendYesNo("몬스터파크 익스트림에 입장하시겠어요?");
	}
	else
	cm.sendOk("입장하시려는 지역은 파티플레이 존입니다. #b파티장#k을 통해 입장을 진행하실 수 있어요.");
}

function action(mode, type, selection) {
	mode==1?status++:cm.dispose();
	if (status == 0) {        
		var party = cm.getPlayer().getParty();
		if (party == null) {
			if (!cm.haveItem(4001760, 1)) {
				cm.sendOk("파티원 중 입장권을 소지하지 않은 파티원이 있습니다.\r\n#r#i4001760# #t4001760##k이 있어야 입장할 수 있습니다.");
				cm.dispose();
			}
			cm.gainItem(4001760, -1);
			var em = cm.getEventManager("ExtremeMonsterPark");
			var eim = em.readyInstance();
			eim.setProperty("Global_StartMap", arr[map]);
			eim.setProperty("Global_ExitMap", "951000000");
			eim.setProperty("Global_MinPerson", "1");
			eim.setProperty("Global_RewardMap", "951000000");
			eim.setProperty("CurrentStage", "1");
			eim.startEventTimer(600000);
			eim.registerPlayer(cm.getPlayer());
			
			cm.dispose();
		} else {
			if (!cm.isLeader()) {
				cm.sendOk("파티장이 입장신청을 할 수 있습니다.");
				cm.dispose();
			}
			if (!cm.allMembersHere()) {
				cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
				cm.dispose();
			}
			var it = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
			var ticketPass = true;
			var levelPass = true;
			while (it.hasNext()) {
			var chr = it.next();
			if (!chr.haveItem(4001760, 1, false, true)) {
 				ticketPass = false;
				break;
 			}
			if (!checkLevel(chr.getLevel(), 40, 100)) {
				levelPass = false;
				break;
			}
		}
		if (!ticketPass) {
			cm.sendOk("파티원 중 입장권을 소지하지 않은 파티원이 있습니다.\r\n#r#i4001760# #t4001760##k이 있어야 입장할 수 있습니다.");
			cm.dispose();
		}
		var toRem = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
		while (toRem.hasNext()) {
			var chr = toRem.next();
			cm.gainItemTarget(chr, 4001760, -1); 
		}
			var em = cm.getEventManager("ExtremeMonsterPark");
			var eim = em.readyInstance();
			eim.setProperty("Global_StartMap", arr[map]);
			eim.setProperty("Global_ExitMap", "951000000");
			eim.setProperty("Global_MinPerson", "1");
			eim.setProperty("Global_RewardMap", "951000000");
			eim.setProperty("CurrentStage", "1");
			eim.startEventTimer(600000);
			eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
			cm.dispose();
		}
	}
}


function checkLevel(cur, min, max) {
    return (cur >= min && cur <= max);
}