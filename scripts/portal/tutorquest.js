/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�. (���� : ������)
        ���� : OnS�� ����

	��Ż�� �ִ� �� : 130030001

	��Ż ���� : �����ϴ°� ����Ʈ üũ (20010 ~ 20014)


*/


function enter(pi) {
    var Qid = 20010;
    var Wmid = 130030002;
    var Nname = "Ű��";
    if (pi.getPlayer().getMapId() == 130030002) {
        Qid = 20011;
        Wmid = 130030003;
        Nname = "Ű��";
    } else if (pi.getPlayer().getMapId() == 130030003) {
        Qid = 20012;
        Wmid = 130030004;
        Nname = "Ű��";
    } else if (pi.getPlayer().getMapId() == 130030004) {
        Qid = 20013;
        Wmid = 130030005;
        Nname = "Ű��";
    }
    if (pi.getQuestStatus(Qid) == (Qid == 20010 ? 1:2)) {
        pi.warp(Wmid, 0);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, Nname+"���� ����Ʈ�� �ް� ������ �ֽʽÿ�.");
        return false;
    }
}