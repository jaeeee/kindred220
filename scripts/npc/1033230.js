/* dhae0107 ���� */

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
        cm.sendYesNo("#e#n#r#e��Ƽ�÷��� : �ּ� 3���ʿ� #k\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#b#b ���츦 ���̷� ������ ���� ��������");   
} else if (status == 1) {
 if (cm.getPlayer().getParty() == null) {
 cm.sendOk("ȥ�ڼ��¾ȵ�..�ٸ���Ƽ���� ��Ƽ�� �̷����...");
        cm.dispose();
 } else if (!cm.isLeader()) {
 cm.sendOk("��Ƽ���� ���� �ɾ��ּ���!");
 cm.dispose();
 } else if (!cm.allMembersHere()) {
 cm.sendOk("�ٸ� ��Ƽ������ ����ֳ���??");
 cm.dispose();
 return;
 } else if(cm.getPlayer().getParty().getMembers().size() <= 3) {
 cm.sendOk("�ּ� 3���� ��Ƽ���� �ʿ���..");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(350060000) > 0) {
 cm.sendOk("�̴̹ٸ� ��Ƽ�÷��̾ #r�����#k�� �������̾�");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(957020001) > 0) {
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
 cm.allPartyWarp(350060000, true);
 cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("����ӿ� �̷θ� ���ٺ��� ��Ż�� �־�!!!..."));
 cm.dispose();
                }   
    }

} 

