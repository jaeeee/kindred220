


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2081010

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ������ ������ �� (924000002)

	���ǽ� ���� : MISSINGNO


*/
importPackage(Packages.packet.creators);
importPackage(Packages.client.stats);
var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
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
        if (cm.getPlayer().getEventInstance() != null) {
            try {
                cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
            } catch (err) {
                cm.getPlayer().setEventInstance(null);
            }
        }
        cm.getClient().send(MainPacketCreator.cancelDebuff(DiseaseStats.STUN));
        cm.warp(100000000);
        cm.dispose();
        return;
    }
}
