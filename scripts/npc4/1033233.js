


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


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
            cm.sendNext("��...��� ������� ���Ű���...? Ȥ�� ���� ���Ϸ�....");
        } else {
            cm.dispose();
            return;
        }
    } else if (status == 1) {
        cm.sendNext("��.. �ڸ� �����ϼ���!!");
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


