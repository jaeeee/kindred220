importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("�����̻��� ����");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
        sel = selection;
	cm.sendYesNo("#rī���� �ݹ�#k�� ��ȯ�Ͻðٽ��ϱ�?");
     } else if (status == 1) {
  if (sel == 0) {
   if (cm.getMonsterCount(105200120) > 0) {
  cm.sendOk("�ٽ� �õ����ֽʽÿ�.");
  cm.killAllMob();
  cm.dispose();
 } else if (cm.getMeso() < 5000000) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ī���� �ݹ��� ��ȯ�Ͽ����ϴ�.")); // ���� ä�ü����˸� �޼��� 
 cm.gainMeso(-5000000); // �޼� ������Ű��

 cm.spawnMob(8910000,-113,245);
 cm.dispose();
}
}
}
}