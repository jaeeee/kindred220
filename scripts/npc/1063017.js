


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
        if (eim.getProperty("2P_Progress").equals("2") && eim.getProperty("1P_Progress").equals("2")) {
            var progress = Integer.parseInt(eim.getProperty("allProgress"));
            if (progress == 30) {
                progress += 10;
                eim.setProperty("allProgress", progress+"");
                cm.getPlayer().getMap().broadcastMessage(cm.getPlayer(), UIPacket.AchievementRatio(progress), true);
                cm.getPlayer().getMap().startMapEffect("�ٸ� �ʿ� �ִ� ������ ã�ҽ��ϴ�! ������ ���������� ����ŵ�ϴ�.. �ٽ� ó�� ��ġ�� �ִ� ������ ã�ƾ� �մϴ�!", 5120035);
                cm.dispose();
            } else if (progress == 40) {
                cm.sendOk("������ �ƹ��� ������ �����ϴ�.");
                cm.dispose();
            } else if (progress == 50) {
                cm.sendNext("���ڱ� ������ ���� ������ ���ϱ� �����߽��ϴ�! �ݴ��� ���� ���� ���� ������ �� �����ϴ�.");
            } else if (progress == 60) {
                cm.sendOk("�ݴ��� ���� ���� ���� ���� �� �����ϴ�. �� ������ �մϴ�!");
                cm.dispose();
            } else if (progress == 70) {
                cm.sendOk("���� ���� ������ �ֽ��ϴ�.");
                cm.dispose();
            }
        } else {
            cm.sendOk("������ �ƹ��� ������ �����ϴ�. ���� ���ᰡ �������� �ʾƼ� �׷� ������ ���Դϴ�.");
            cm.dispose();
            return;
        }
    } else if (status == 1) {
        var eim = cm.getPlayer().getEventInstance();
        var progress = Integer.parseInt(eim.getProperty("allProgress"));
        if (progress == 50) {
            progress += 20;
            eim.setProperty("allProgress", progress+"");
            cm.getPlayer().getMap().broadcastMessage(cm.getPlayer(), UIPacket.AchievementRatio(progress), true);
//            cm.getPlayer().getMap().startMapEffect("������ ��򰡿��� �̻��� ����� �����ϴ�. �̻��� ����� �ٿ��� ã�� ���־��մϴ�!", 5120035);
//            for (var i = 0; i < 10 ; i++) {
//                //69, 2714
//                var pos = new Point(-352, 100);
//                var mob = PureLifeProvider.getMonster(9800014);
//                mob.disableDrops();
//                eim.registerMonster(mob);
//                eim.setProperty("9800014", "10");
//                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(mob, pos);
//            }
            var it = eim.getPlayers().iterator();
            var text = "���͸� ��� ��ҽ��ϴ�! ��� �� ���� ���������� �̵��˴ϴ�.";
            while (it.hasNext()) {
                var chr = it.next();
                chr.send(UIPacket.showInfo(text));
                chr.send(MainPacketCreator.getGMText(7, text));
                chr.send(MainPacketCreator.showEffect("monsterPark/clear"));
                chr.send(MainPacketCreator.playSound("Party1/Clear"));
                chr.send(UIPacket.AchievementRatio(progress));
            }
            eim.schedule("moveAll", 5000);
            cm.dispose();
        }
    }
}


