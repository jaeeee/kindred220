importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

function start() {
    cm.askAcceptDecline("������ ������ ������... �ٽ� ���� �����縦 �ҷ��� �� �־�!..��, �̻���... �� ���� �����縦 �ҷ����� �ʴ� ����? �� ����� ����? ���� ������ʹ� ���� �ٸ�... ũ�ƾƾ�!\r\n\r\n#b(Ű�������� ����� ���� ���.)");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getPlayer().getMapId(), 2141000);
	cm.forceStartReactor(cm.getPlayer().getMapId(), 2709000);
	WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[���¶���] : " + cm.getPlayer().getName() + "���� ��ũ���� ��ȯ�Ͽ����ϴ�."));
    }
    cm.dispose();
}