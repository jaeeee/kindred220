


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/

importPackage(Packages.packet.creators);
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
        var eim = cm.getPlayer().getEventInstance();
        if (eim.getProperty("Maze02open") == null) {
            if (cm.haveItem(4001088, 1)) {
                eim.broadcastPacket(MainPacketCreator.showEffect("quest/party/clear"));
                eim.broadcastPacket(MainPacketCreator.playSound("Party1/Clear"));
                eim.broadcastPlayerMsg(6, "�� ��° �̷ι��� ���� ���Ƚ��ϴ�.");
                cm.sendOk("�� ��° �̷ι��� ���� ���Ƚ��ϴ�.");
                cm.gainItem(4001088, -1);
                eim.setProperty("Maze02open", "1");
                eim.addAchievementRatio(5);
                cm.dispose();
            } else {
                cm.sendOk("...");
                cm.dispose();
            }
        } else if (eim.getProperty("Maze03open") == null) {
            if (cm.haveItem(4001089, 1)) {
                eim.broadcastPacket(MainPacketCreator.showEffect("quest/party/clear"));
                eim.broadcastPacket(MainPacketCreator.playSound("Party1/Clear"));
                eim.broadcastPlayerMsg(6, "�� ��° �̷ι��� ���� ���Ƚ��ϴ�.");
                cm.sendOk("�� ��° �̷ι��� ���� ���Ƚ��ϴ�.");
                cm.gainItem(4001089, -1);
                eim.setProperty("Maze03open", "1");
                eim.addAchievementRatio(5);
                cm.dispose();
            } else {
                cm.sendOk("...");
                cm.dispose();
            }
        } else if (eim.getProperty("Maze04open") == null) {
            if (cm.haveItem(4001090, 1)) {
                eim.broadcastPacket(MainPacketCreator.showEffect("quest/party/clear"));
                eim.broadcastPacket(MainPacketCreator.playSound("Party1/Clear"));
                eim.broadcastPlayerMsg(6, "�� ��° �̷ι��� ���� ���Ƚ��ϴ�.");
                cm.sendOk("�� ��° �̷ι��� ���� ���Ƚ��ϴ�.");
                cm.gainItem(4001090, -1);
                eim.setProperty("Maze04open", "1");
                eim.addAchievementRatio(5);
                cm.dispose();
            } else {
                cm.sendOk("...");
                cm.dispose();
            }
        } else if (eim.getProperty("Maze05open") == null) {
            if (cm.haveItem(4001091, 1)) {
                eim.broadcastPacket(MainPacketCreator.showEffect("quest/party/clear"));
                eim.broadcastPacket(MainPacketCreator.playSound("Party1/Clear"));
                eim.broadcastPlayerMsg(6, "�ټ� ��° �̷ι��� ���� ���Ƚ��ϴ�.");
                cm.sendOk("�ټ� ��° �̷ι��� ���� ���Ƚ��ϴ�.");
                cm.gainItem(4001091, -1);
                eim.setProperty("Maze05open", "1");
                eim.addAchievementRatio(5);
                cm.dispose();
            } else {
                cm.sendOk("...");
                cm.dispose();
            }
        } else {
            cm.sendOk("�̷ι��� ��� Ŭ�����ϼ̽��ϴ�.");
            cm.dispose();
        }
    }
}


