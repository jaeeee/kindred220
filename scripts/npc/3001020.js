


/*

	히나 온라인 소스 팩의 스크립트 입니다.

        제작 : 티썬

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 동쪽성탑

	엔피시 설명 : 


*/


var status = -1;
var map = 300030310;
var exit = 300030300;
importPackage (java.util);
importPackage (Packages.tools);
importPackage (Packages.server.quest);
importPackage(java.awt);
importPackage(java.lang);
importPackage(Packages.tools.RandomStream);
importPackage(Packages.packet.creators);
importPackage(Packages.server.life);

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
        cm.sendSimple("급한 일입니다! 매그너스로 인해 힘을 잃은 우리로서는 당신의 도움이 절실합니다!\r\n#b#L0#매그너스 (노말 / 레벨 : 160이상)#l \r\n\r\n#b#L1#매그너스 (하드 / 레벨 : 160이상)#l#k")
    } else if (status == 1) {
 /*       var em = cm.getEventManager("MiniDungeon");
var count = cm.getPlayer().getKeyValue2("BossData5");
var count1 = cm.getPlayer().getKeyValue2("BossData6");
        if (em == null) {
            cm.getPlayer().message(5, "미니던전 스크립트에 오류가 발생했습니다. GM에게 문의해 주세요.");
            return false;
        }*/
        if (selection == 0) {
            if (cm.getPlayer().getParty() != null) {
                if (!cm.allMembersHere()) {
                    cm.getPlayer().message(5, "파티원이 모두 모여있어야 입장할 수 있습니다.");
                }
                if (!cm.isLeader()) {
                    cm.getPlayer().message(5, "파티장이 입장할 수 있습니다.");
                }
            if (!cm.allExpCheckTimeValue("Meg_BattleStartTime", 3600 * 12) && !cm.getPlayer().hasGmLevel(5)) {
                cm.sendOk("매그너스 노말 는 12시간마다 한번씩만 도전할 수 있습니다. 원정대원중 반 레온에 도전할 수 없는 사람이 있습니다.");
                cm.dispose();
                return;
            }
         if(cm.getPlayerCount(401060100) != 0){
                cm.sendOk("이미 안에 누군가있습니다.");
                cm.dispose();
}
                cm.getPlayer().setKeyValue2("BossData5", count + 1);
                cm.warpParty(401060100);
                cm.scheduleTimeMoveMap(401060100,401060100,3600,true);
      cm.getPlayer().getMap().spawnMonsterOnGroundMaple(Packages.server.life.MapleLifeProvider.getMonster(8880000), new java.awt.Point(2886, -1347));

            cm.mapMessage(6, "[알림] 보스 레이드 타임아웃매니저 - 매그너스 (노말) - 작동되었습니다. 행운을 빕니다!");
            
            cm.mapMessage(5, "[경고] 보스 레이드가 시작되어 현재 채널에 현재 보스 쿨타임이 시작됩니다.");
 } else {
            if (!cm.allExpCheckTimeValue("Meg_BattleStartTime", 3600 * 12) && !cm.getPlayer().hasGmLevel(5)) {
                cm.sendOk("매그너스 노말 는 12시간마다 한번씩만 도전할 수 있습니다. 원정대원중 반 레온에 도전할 수 없는 사람이 있습니다.");
                cm.dispose();
                return;
            }
         if(cm.getPlayerCount(401060100) != 0){
                cm.sendOk("이미 안에 누군가있습니다.");
                cm.dispose();
}
                cm.allExpSetTimeValueCurrent("Meg_BattleStartTime");
                cm.warp(401060100);

                cm.scheduleTimeMoveMap(401060100,401060100,3600,true);
      cm.getPlayer().getMap().spawnMonsterOnGroundMaple(Packages.server.life.MapleLifeProvider.getMonster(8880000), new java.awt.Point(2886, -1347));

            cm.mapMessage(6, "[알림] 보스 레이드 타임아웃매니저 - 매그너스 (노말) - 작동되었습니다. 행운을 빕니다!");
            
            cm.mapMessage(5, "[경고] 보스 레이드가 시작되어 현재 채널에 현재 보스 쿨타임이 시작됩니다.");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
 if (selection == 1) {
if (cm.getPlayer().getParty() != null) {
                if (!cm.allMembersHere()) {
                    cm.getPlayer().message(5, "파티원이 모두 모여있어야 입장할 수 있습니다.");
                }
                if (!cm.isLeader()) {
                    cm.getPlayer().message(5, "파티장이 입장할 수 있습니다.");
                }
            if (!cm.allExpCheckTimeValue("Meg1_BattleStartTime", 3600 * 12) && !cm.getPlayer().hasGmLevel(5)) {
                cm.sendOk("매그너스 하드 는 12시간마다 한번씩만 도전할 수 있습니다. 원정대원중 반 레온에 도전할 수 없는 사람이 있습니다.");
                cm.dispose();
                return;
            }
         if(cm.getPlayerCount(401060200) != 0){
                cm.sendOk("이미 안에 누군가있습니다.");
                cm.dispose();
}
                cm.allExpSetTimeValueCurrent("Meg1_BattleStartTime");
                cm.warpParty(401060200);
                cm.scheduleTimeMoveMap(401060200,401060200,3600,true);
      cm.getPlayer().getMap().spawnMonsterOnGroundMaple(Packages.server.life.MapleLifeProvider.getMonster(8880002), new java.awt.Point(2886, -1347));

            cm.mapMessage(6, "[알림] 보스 레이드 타임아웃매니저 - 매그너스 (하드) - 작동되었습니다. 행운을 빕니다!");
            
            cm.mapMessage(5, "[경고] 보스 레이드가 시작되어 현재 채널에 현재 보스 쿨타임이 시작됩니다.");
          } else {
            if (!cm.allExpCheckTimeValue("Meg1_BattleStartTime", 3600 * 12) && !cm.getPlayer().hasGmLevel(5)) {
                cm.sendOk("매그너스 하드 는 12시간마다 한번씩만 도전할 수 있습니다. 원정대원중 반 레온에 도전할 수 없는 사람이 있습니다.");
                cm.dispose();
                return;
            }
         if(cm.getPlayerCount(401060200) != 0){
                cm.sendOk("이미 안에 누군가있습니다.");
                cm.dispose();
}
                cm.allExpSetTimeValueCurrent("Meg1_BattleStartTime");
                cm.warp(401060200);
                cm.scheduleTimeMoveMap(401060200,401060200,3600,true);
      cm.getPlayer().getMap().spawnMonsterOnGroundMaple(Packages.server.life.MapleLifeProvider.getMonster(8880002), new java.awt.Point(2886, -1347));


            cm.mapMessage(6, "[알림] 보스 레이드 타임아웃매니저 - 매그너스 (하드) - 작동되었습니다. 행운을 빕니다!");
            
            cm.mapMessage(5, "[경고] 보스 레이드가 시작되어 현재 채널에 현재 보스 쿨타임이 시작됩니다.");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
}
}


