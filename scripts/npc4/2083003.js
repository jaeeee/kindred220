


/*

	퓨어 온라인 소스 팩의 스크립트 입니다.

        제작 : 주크블랙

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 

	엔피시 설명 : 


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
                eim.broadcastPlayerMsg(6, "두 번째 미로방의 문이 열렸습니다.");
                cm.sendOk("두 번째 미로방의 문이 열렸습니다.");
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
                eim.broadcastPlayerMsg(6, "세 번째 미로방의 문이 열렸습니다.");
                cm.sendOk("세 번째 미로방의 문이 열렸습니다.");
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
                eim.broadcastPlayerMsg(6, "네 번째 미로방의 문이 열렸습니다.");
                cm.sendOk("네 번째 미로방의 문이 열렸습니다.");
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
                eim.broadcastPlayerMsg(6, "다섯 번째 미로방의 문이 열렸습니다.");
                cm.sendOk("다섯 번째 미로방의 문이 열렸습니다.");
                cm.gainItem(4001091, -1);
                eim.setProperty("Maze05open", "1");
                eim.addAchievementRatio(5);
                cm.dispose();
            } else {
                cm.sendOk("...");
                cm.dispose();
            }
        } else {
            cm.sendOk("미로방을 모두 클리어하셨습니다.");
            cm.dispose();
        }
    }
}


