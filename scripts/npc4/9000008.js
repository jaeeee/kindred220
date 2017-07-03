/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 9000008
	
	엔피시 이름 : 몽땅따

	엔피시가 있는 맵 : 커닝시티

	엔피시 설명 : 자물쇠 따기 달인


*/

importPackage(Packages.packet.creators);
importPackage(Packages.packet.skills);
importPackage(Packages.constants);
importPackage(Packages.handler.duey);
var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
	cm.completeQuest(30001);
	cm.completeQuest(30000);
        //cm.getPlayer().send(MainPacketCreator.ShowKartaInfo());
	//cm.getPlayer().send(MainPacketCreator.showKartaEffect());
        cm.dispose();
	cm.openNpc(1064001);
    }
}


