


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2081005

	���ǽ� �̸� : �ɷκ�

	���ǽð� �ִ� �� : ������ ���� �Ա�

	���ǽ� ���� : ������ ���� ����


*/
var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        if (cm.getMorphState() == 2210003) {
            cm.sendNextS("���ᱺ. � ������. ȥ���ϴ��� �츮 �������� �����Ͻô� ���ϼ�.", 1);
        } else {
            cm.sendNextS("�ΰ��̱�! ���Ⱑ ����� �Դ���! ���� �������!", 1);
        }
    } else if (status == 1) {
        if (cm.getMorphState() == 2210003) {
            cm.warp(240050000);
            cm.dispose();
        } else {
            cm.warp(240040500);
            cm.getPlayer().addHP(-(cm.getPlayer().getStat().getHp()/2));
            cm.dispose();
        }
    }
}
