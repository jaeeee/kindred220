importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.handling.server.community);
importPackage(java.lang);

var status = 0;
var map = 262030100;
var lvmin = 120; //입장 최소레벨
var lvmax = 200; //입장 최대레벨

var off = false;
var on = false;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status <= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) status++;
    else status--;
    if (status == 0) {
        cm.sendSimple("#e<아스완 : 힐라 원정대> #n\r\n힐라의 음모를 저지하고, 아스완의 진정한 해방을 이뤄낼 준비는 되셨습니까? 다른 지역에 있는 원정대원이 있다면, 모두 모여 주세요.#b\r\n\r\n#L0#힐라 원정대 입장 신청을 한다.#l");
    } else if (status == 1) {
		if (selection == 0) {
			if (cm.getParty() == null) {
				cm.sendOk("가입된 파티가 없습니다.");
				cm.dispose();
				return;
			}
			if (cm.getParty().getExpeditionId() == -1) {
				cm.sendOk("가입된 파티나 원정대가 없습니다.");
				cm.dispose();
				return;
			}
			var chrs = cm.getClient().getChannelServer().getMapFactory().getMap(map).getCharacters().iterator();
			while (chrs.hasNext()) {
				var player = chrs.next();
				if (player.getParty().getExpeditionId() != cm.getParty().getExpeditionId()) {
					off = true; //다른 원정대
				} else if (player.getParty().getExpeditionId() == cm.getParty().getExpeditionId()) {
					on = true; //같은 원정대
				}
			}
            if (!off && World.Party.getExped(cm.getParty().getExpeditionId()).getLeader() == cm.getPlayer().getId()) {
				cm.sendSimple("#e<힐라 원정대>#n\r\n원하시는 모드를 선택해주세요.\r\n\r\n#L0#노말 모드 ( 레벨 120 이상 )#l\r\n#L1#하드 모드 ( 레벨 170 이상 )#l");
			} else if (World.Party.getExped(cm.getParty().getExpeditionId()).getLeader() != cm.getPlayer().getId()) {
				cm.sendOk("원정대장이 신청하시기 바랍니다.");
				cm.dispose();
			}
		}
	} else if (status == 2) {
		if (cm.getParty() == null || cm.getParty().getExpeditionId() == -1) {
			cm.sendOk("가입된 파티나 원정대가 없습니다.");
			cm.dispose();
		}
		if (selection == 0) {
			if (World.Party.getExped(cm.getParty().getExpeditionId()).getType() != ExpeditionType.HILA) {
				cm.sendOk("원정대장이 입장하지 않았거나 혼테일 원정대에 소속되어있지 않습니다.");
				cm.dispose();
				return;
			}
			if (World.Party.getExped(cm.getParty().getExpeditionId()).getAllMembers() < 2) {
				cm.sendOk("원정대가 2명 이상으로 구성되어야 입장할 수 있다..");
				cm.dispose();
				return;
			}
			//if (cm.getPlayerCount(map) == 0) 
				//cm.getClient().getChannelServer().getMapFactory().disposeMap(map);
			if (cm.getPlayerCount(Integer.parseInt(map)) == 0 && cm.getPlayerCount(Integer.parseInt(map) + 100) == 0 && cm.getPlayerCount(Integer.parseInt(map) + 200) == 0) {
				map = Integer.parseInt(map);
				
				var em = cm.getEventManager("AswanHillah");
				var eim = em.readyInstance();
				for (var i = 0; i < 3; i++) {
					cm.prepareAswanMob(Integer.parseInt(map) + (i * 100), em);
				}
				eim.setProperty("Global_StartMap", map);
				eim.setProperty("Global_ExitMap", "262010000");
				eim.setProperty("Global_MinPerson", "1");
				eim.setProperty("Global_RewardMap", "262010000");
				eim.setProperty("CurrentStage", "1");
				eim.setProperty("StageMob", "1");
				eim.startEventTimer(1200000);
				eim.registerExpedition(World.Party.getExped(cm.getParty().getExpeditionId()), cm.getPlayer().getMap());
				//cm.PartyDayAdd("aswan");
				cm.dispose();
				return true;
			} else {
				cm.sendOk("누군가 이미 힐라의 음모를 저지하고있습니다.");
				cm.dispose();
				return true;
			}
		}
	}
}