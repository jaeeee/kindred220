/*

Made by ����
���ܼ����������ֽñ�

*/

function start() {
    var tmp_str = "�ڰ��� �ִ� ����̶�� �ð� �� �ʿ� ���� ���ϴ� ������ �����帱 ���� �ֽ��ϴ�. �ڰ��� �ִ� ��쿡�� ���̿���... ���� ���ðھ��?";
    tmp_str += "\r\n#b#L0#�ŷ��� ����#l";
    tmp_str += "\r\n#b#L1#������ ����#l";
    tmp_str += "\r\n#b#L2#��Ÿ�� ����#l";
    cm.sendSimple (tmp_str);
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
         if (cm.getPlayer().getLevel() >= 140) {
      		cm.warp(270010000, "out00");
        	cm.dispose();
   	} else {
        	cm.sendOk("#b���� 140 �̻�#k�� �̵��� ������ �ڰ��Դϴ�. ����� �ڰ��� ���� �� ������...");
        	cm.dispose();
	}	
	} else if (selection == 1) {
         if (cm.getQuestStatus(3507) == 2) {
      		cm.warp(270020000, "out00");
      		cm.dispose();
  	 } else {
        	cm.sendOk("����� �� ������ �� �� �ִ� �ڰ��� ������. �ڰ��� �ִ� ����� �̵��� �����ؿ�...");
        	cm.dispose();
	}
	} else if (selection == 2) {
         if (cm.getQuestStatus(3514) == 2) {
      		cm.warp(270030000, "out00");
        	cm.dispose();
  	} else {
        	cm.sendOk("����� �� ������ �� �� �ִ� �ڰ��� ������. �ڰ��� �ִ� ����� �̵��� �����ؿ�...");
        	cm.dispose();
		}
	}
}