/*
�ƾ߳�(riel0216)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1|| mode == 0) {
 cm.sendOk("�˰ھ�.. �ٸ�����鿡�� ������ ��û�غ���..");
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
        cm.sendNext("\r\n#r#e����#k#n�� ���ϰ�;�..\r\n������.. ��ȥ�� �� �� ������..?");
    } else if (status == 1) {
 cm.sendNext("#fs25##fn���##r#e ����!! ��!!");
    } else if (status == 2) {
        cm.sendNextS("��?? ��?? ���� �θ��ž�??",2);
    } else if (status == 3) {
        cm.sendYesNo("�׷�! #h # #e���� �� �������� �ʰھ�?#n \r\n\r\n#r#e��Ƽ�÷��� : �ּ� 0���ʿ� #k\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#b#b ũ���� �����ش�.");   
} else if (status == 4) {
 if (cm.getPlayer().getParty() == null) {
 cm.sendOk("ȥ�ڼ��¾ȵ�..�ٸ���Ƽ���� ��Ƽ�� �̷����...");
        cm.dispose();
 } else if (!cm.isLeader()) {
 cm.sendOk("���� ��Ƽ���ϰ� �����Ѵٱ�...");
 cm.dispose();
 } else if (!cm.allMembersHere()) {
 cm.sendOk("�ٸ���Ƽ������ ��� ����??");
 cm.dispose();
 return;
 } else if(cm.getPlayer().getParty().getMembers().size() <= 0) {
 cm.sendOk("�ּ� 0���� ��Ƽ���� �ʿ���..");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(992017000) > 0) {
 cm.sendOk("�̴̹ٸ� ��Ƽ�÷��̾ #r�����#k�� �������̾�");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(900020200) > 0) {
 cm.sendOk("�̴̹ٸ� ��Ƽ�÷��̾ #r�����#k�� �������̾�");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(900020210) > 0) {
 cm.sendOk("�̴̹ٸ� ��Ƽ�÷��̾ #r�����#k�� �������̾�");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(900020220) > 0) {
 cm.sendOk("�̴̹ٸ� ��Ƽ�÷��̾ #r�����#k�� �������̾�");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(957020001) > 0) {
 cm.sendOk("�̴̹ٸ� ��Ƽ�÷��̾ #r�����#k�� �������̾�");
 cm.dispose();
 return;
 }{
 cm.allPartyWarp(992017000, true);
 cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("����ӿ� �̷θ� ���ٺ��� ��Ż�� �־�!!!..."));
 cm.dispose();
                }   
    }

} 