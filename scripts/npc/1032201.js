importPackage
var status = 0;
var sele = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var chat = "�ȳ��ϼ���? #b" +cm.getPlayer().getName() + "#k��\r\n���� �����Ϳ��忡�� ������ �����ϰ��ִ� #r��Ͼ�#k ����ؿ�.\r\n";
            chat += "#L2##b�����̶��� ����??#l\r\n";
	    chat += "#L1##b������ ����ϰھ�!!#l\r\n";
	    if(cm.getPlayer().getGMLevel() >= 6)
            chat += "#L0#���� ��ȣ ����#l";
	    cm.sendSimple(chat);
        } else if (status == 1) {
	    sele = selection;
	    if (sele == 0) {
    	    	cm.sendGetText("������,����");
            } else if (sele == 1) {
    	    	cm.sendGetText("#r�����͸Ŵ���#k #b�Կ��Լ�\r\n�߱޹����� ������ȣ�� �Է����ּ���\r\n#r(EX:ABCDE-12345-FGHIJ-67891-KLNMO)");
	    } else if (sele == 2) {
                cm.sendOk("#b����#k�����ؼ� �ñ��ϽŰ�����?\r\n�׷��ٸ� #r��Ͼ�#k �� �ڼ��ϰ� ������ �ص帱�Կ�.\r\n#b����#k�� #d�����͸Ŵ���#k�Ը� �߱��� �����ϸ�\r\n#b����#k������ϸ� �������� �׵��Ҽ��ֽ��ϴ�.\r\n#b����#k���ִ� �������� �������� �ٸ���\r\n#r�ѹ� ����� ���� �� �ߺ������ �Ұ����մϴ�.");
                cm.dispose();
        } 
      } else if (status == 2) {
	    itemSelection = selection;
	    if (sele == 0) {
	      cm.sendOk(cm.�������(cm.getText()));
	      cm.dispose();
            } else if (sele == 1) {
	     	cm.sendOk(cm.�����Է�(cm.getText()));
cm.dispose();
            }
	 
	} 
    }
}