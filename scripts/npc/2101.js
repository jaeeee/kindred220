importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);

var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("�η���ǰ�");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
        sel = selection;
		cm.sendYesNo("#r�ñ׳ʽ�#k�� ��ȯ�Ͻðٽ��ϱ�?");
     } else if (status == 1) {
  if (sel == 0) {
   if (cm.getMonsterCount(401060200) > 0) {
  cm.sendOk("�ٽ� �õ����ֽʽÿ�.");
  cm.killAllMob();
  cm.dispose();
 } else if (cm.getMeso() < 5000000) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� �ű׳ʽ��� ��ȯ�Ͽ����ϴ�.")); // ���� ä�ü����˸� �޼��� 
 cm.gainMeso(-5000000); // �޼� ������Ű��

 cm.spawnMob(8880000,2463,-1347);
 cm.dispose();
}
}
}
}