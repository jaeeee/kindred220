/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 9000008
	
	���ǽ� �̸� : ������

	���ǽð� �ִ� �� : Ŀ�׽�Ƽ

	���ǽ� ���� : �ڹ��� ���� ����


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


