


/*

	ǻ�� �¶��� �ҽ� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : ������ ����

	��Ż ���� : �Ǿƴ����� ����


*/

var map = 230040420;

function enter(pi) {
    if (!pi.checkTimeValue("Pianus_BattleStartTime", 3600 * 4)) {
        pi.getPlayer().message(5, "�Ǿƴ����� 4�ð����� �ѹ����� ������ �� �ֽ��ϴ�.");
        return false;
    }
    pi.setTimeValueCurrent("Pianus_BattleStartTime");
    pi.playPortalSE();
    pi.warp(map);
    return true;
}
