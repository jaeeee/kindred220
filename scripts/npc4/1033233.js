


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 

	엔피시 설명 : 


*/


importPackage(java.awt);
importPackage(java.lang);
importPackage(Packages.tools.RandomStream);
importPackage(Packages.packet.creators);
importPackage(Packages.server.life);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        var eim = cm.getPlayer().getEventInstance();
        if (eim == null) {
            cm.warp(100000000);
            cm.dispose();
            return;
        }
        var progress = Integer.parseInt(eim.getProperty("allProgress"));
        if (progress == 70) {
            cm.sendNext("어...어떻게 여기까지 오신거죠...? 혹시 저를 구하러....");
        } else {
            cm.dispose();
            return;
        }
    } else if (status == 1) {
        cm.sendNext("뒤.. 뒤를 조심하세요!!");
    } else if (status == 2) {
        var eim = cm.getPlayer().getEventInstance();
        var mobid = 8220018;
        for (var i = 0; i< 10; i++) {
            var pos = new Point(Randomizer.rand(-150, 800), 18);
            var mob = PureLifeProvider.getMonster(mobid);
            mob.disableDrops();
            eim.registerMonster(mob);
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(mob, pos);
        }
        for (var i = 0; i< 10; i++) {
            var pos = new Point(Randomizer.rand(-35, 562), -282);
            var mob = PureLifeProvider.getMonster(mobid);
            mob.disableDrops();
            eim.registerMonster(mob);
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(mob, pos);
        }
        cm.dispose();
    }
}


