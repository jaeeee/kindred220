


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2084003

	���ǽ� �̸� : ��帮ġ

	���ǽð� �ִ� �� : ����ũ�ε� : ��帮ġ�� ����â�� (910160000)

	���ǽ� ���� : MISSINGNO


*/

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
        cm.sendYesNo("Żȯ�� �����ϰ� �ٽ� ������ ���ư��ڳ�?");
    } else if (status == 1) {
        if (cm.getPlayer().getEventInstance() != null) {
            cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
        }
        cm.warp(100000000);
        cm.dispose();
     } else {
     cm.dispose();
      }

}
