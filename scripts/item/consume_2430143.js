/*
������ : ����(pongpong___@naver.com / unfix_@naver.com)
*/
var status;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    if (!cm.canHold(2430143)) {
                cm.sendOk("�κ��丮 ������ �����մϴ�.");
		cm.dispose();
		return;
	    }
            cm.gainItem(2430143, -1);
		cm.getPlayer().addFame(10);
                cm.fakeRelog();
                cm.updateChar();
	    cm.getPlayer().dropMessage(1, "�������� "+cm.getPlayer().getName()+"�������� �� ���극�� ���п� �α⵵�� ����Ͽ����ϴ�.");
	    cm.dispose();
            
        } else { 
            cm.dispose();
        }
    }
}