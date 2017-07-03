/*
 포탈
*/
importPackage(Packages.community);
var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        if (cm.getPlayer().getParty() == null) {
            cm.sendOk("파티를 이루고 있는건가? 파티 없이는 입장할 수 없네.");
            cm.dispose();
            return;
        }
        /*if (!cm.allExpCheckTimeValue("Zakum_BattleStartTime", 3600 * 6) && isChaos(cm) == 0) {
            cm.sendOk("자쿰은 6시간마다 한번씩만 도전할 수 있습니다. 원정대원중 자쿰에 도전할 수 없는 사람이 있습니다.");
            cm.dispose();
            return;
        }
        if (!cm.allExpCheckTimeValue("ZakumHorntail_BattleStartTime", 3600 * 12) && isChaos(cm) == 1) {
            cm.sendOk("카오스자쿰은 12시간마다 한번씩만 도전할 수 있습니다. 원정대원중 카오스자쿰에 도전할 수 없는 사람이 있습니다.");
            cm.dispose();
            return;
        }*/
        cm.sendYesNo("자쿰의 제단으로 이동하고 싶은가? 현재 맵에 있는 모든 원정대원이 한번에 이동된다네.");
    } else if (status == 1) {
     /*  if (!cm.getClient().getChannelServer().getMapFactory().getMap(cm.getPlayer().getMapId() - 100).isExpiredMapTimer() && !cm.getPlayer().hasGmLevel(6)) {
            cm.sendOk("전투가 이미 시작되어 지금은 입장할 수 없네.");
            cm.dispose();
            return;
        }
        if (cm.getClient().getChannelServer().getMapFactory().getMap(280030000 + isChaos(cm)).getCharactersSize() > 0) {
            cm.sendOk("이미 다른 원정대가 입장하였네. 미안하지만 다음에 다시 와주게.");
            cm.dispose();
            return;
        }*/
        cm.resetMap(280030100);
        cm.allPartyWarp(280030100, true);
        cm.startEventTimer(2300000);
        cm.dispose();
    }
}

function isChaos(cm) {
    return cm.getClient().getChannel() % 2;
}
