
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
        cm.sendSimple("������ �ִٸ� �� ���� �� ���� �ְ���. �㳪 �װ͸����δ� ������. �˺��� ��ī�ο� �ٶ� ���̸� ������ �ܴ��� ��� ���� �ʿ��ϰŵ�. ���ƿ��� ������� �ƴ� �������� ���� ��������... �װ��� ���ڴٸ� ���Ž��� �ְڳ�. �ڳ��� ���� ����� �����̵� �� ������ŭ�� #b�巡��#k�� �Ǵ� �ɼ�...\r\n\r\n#L0##b�巡������ �����ϰ� �;��.#k#l");
        //cm.getPlayer().cancelEffectFromBuffStat(BuffStats.MORPH, -1);
    } else if (status == 1) {
        cm.useItem(2210016);
        cm.getPlayer().getClient().getSession().write(MainPacketCreator.useItemMessage(2210016));
        cm.warp(200090500);
        cm.dispose();
    }
}


