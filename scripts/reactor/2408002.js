/*
 ȥ���� ��Ƽ����Ʈ ���� ����
 ���� : ��ũ��
*/
importPackage(Packages.client.items);
importPackage(Packages.packet.creators);
function act() {
    var eim = rm.getPlayer().getEventInstance();
    var mapid = rm.getPlayer().getMapId();
    var map = eim.getMapFactory().getMap(240050100);
    if (mapid == 240050101) { //ù��° �̷ι�
        var drop = new Item (4001088, 0, 1, 0);
        map.spawnItemDrop(map.getReactor(2402002), rm.getPlayer(), drop, map.getReactor(2402002).getPosition(), false, false);
        map.getReactor(2402002).setState(1);
        eim.addAchievementRatio(5);
        rm.mapMessage(6, "���谡 ���а� ��������ϴ�.");
        map.broadcastMessage(MainPacketCreator.serverNotice(6, "��¦�̴� ���� �Բ� ��򰡿��� ���谡 ��Ÿ�����ϴ�."));
    } else if (mapid == 240050102) { //�ι�° �̷ι�
        var drop = new Item (4001089, 0, 1, 0);
        map.spawnItemDrop(map.getReactor(2402002), rm.getPlayer(), drop, map.getReactor(2402002).getPosition(), false, false);
        map.getReactor(2402002).setState(0);
        eim.addAchievementRatio(5);
        rm.mapMessage(6, "���谡 ���а� ��������ϴ�.");
        map.broadcastMessage(MainPacketCreator.serverNotice(6, "��¦�̴� ���� �Բ� ��򰡿��� ���谡 ��Ÿ�����ϴ�."));
    } else if (mapid == 240050103) { //����° �̷ι�
        var drop = new Item (4001090, 0, 1, 0);
        map.spawnItemDrop(map.getReactor(2402002), rm.getPlayer(), drop, map.getReactor(2402002).getPosition(), false, false);
        map.getReactor(2402002).setState(1);
        eim.addAchievementRatio(5);
        rm.mapMessage(6, "���谡 ���а� ��������ϴ�.");
        map.broadcastMessage(MainPacketCreator.serverNotice(6, "��¦�̴� ���� �Բ� ��򰡿��� ���谡 ��Ÿ�����ϴ�."));
    } else if (mapid == 240050104) { //�׹�° �̷ι�
        var drop = new Item (4001091, 0, 1, 0);
        map.spawnItemDrop(map.getReactor(2402002), rm.getPlayer(), drop, map.getReactor(2402002).getPosition(), false, false);
        map.getReactor(2402002).setState(0);
        eim.addAchievementRatio(5);
        rm.mapMessage(6, "���谡 ���а� ��������ϴ�.");
        map.broadcastMessage(MainPacketCreator.serverNotice(6, "��¦�̴� ���� �Բ� ��򰡿��� ���谡 ��Ÿ�����ϴ�."));
    }
    
}
	
	