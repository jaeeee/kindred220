var arr = new Array(951000200,951000210,951000220,951000230,951000240,951000250,951000260,951000270);
var map = Math.floor(Math.random()*arr.length+1);

importPackage(Packages.packet.creators);

var status = -1;

function start() {
        if (cm.getPlayer().getParty() != null){
	cm.getPlayer().send(MainPacketCreator.showEffect("monsterPark/extremeBoss"))
        cm.sendYesNo("������ũ �ͽ�Ʈ���� �����Ͻðھ��?");
	}
	else
	cm.sendOk("�����Ͻ÷��� ������ ��Ƽ�÷��� ���Դϴ�. #b��Ƽ��#k�� ���� ������ �����Ͻ� �� �־��.");
}

function action(mode, type, selection) {
	mode==1?status++:cm.dispose();
	if (status == 0) {        
		var party = cm.getPlayer().getParty();
		if (party == null) {
			if (!cm.haveItem(4001760, 1)) {
				cm.sendOk("��Ƽ�� �� ������� �������� ���� ��Ƽ���� �ֽ��ϴ�.\r\n#r#i4001760# #t4001760##k�� �־�� ������ �� �ֽ��ϴ�.");
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
				cm.sendOk("��Ƽ���� �����û�� �� �� �ֽ��ϴ�.");
				cm.dispose();
			}
			if (!cm.allMembersHere()) {
				cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
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
			cm.sendOk("��Ƽ�� �� ������� �������� ���� ��Ƽ���� �ֽ��ϴ�.\r\n#r#i4001760# #t4001760##k�� �־�� ������ �� �ֽ��ϴ�.");
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