/*

��� ��ȭ ��ũ��Ʈ
copyright.c rave_kyt@nate.com


*/

var status = -1;
var se;

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
        cm.sendSimple("#r���� �ý���#k�� ������ ����ɼ��� �����ϴ� �ý����̾�.\r\n�ʿ��� ��������Ʈ�� #r#e5000#n#k����Ʈ��!\r\n\r\n#e���糪�� ��������Ʈ : #r"+cm.getPlayer().getRarePT()+"#n#k\r\n#e���糪�� ��� : "+cm.getPlayer().getRare()+"\r\n���糪�� ����ġ : "+cm.getPlayer().getRareExp()+"\r\n#n#k\r\n#L0#���� �ý��� �̿��ϱ�#l");
    } else if (status == 1) {
	cm.sendSimple("��ȭ�� �ϰ���� ���⸦ ����!" + cm.getAllEquip());
    } else if (status == 2) {
        se = cm.getEquip(selection);
        cm.sendYesNo("�ϰ� ������ �������� ���� �Ʒ��� ������ Ȯ���غ� ������ �Ҳ���?\r\n#b#i" + se.getItemId() + "#");  
    } else if (status == 3) {
	cm.Rare(se);
    }
}
