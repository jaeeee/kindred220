


/*

	���� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/


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
        if (cm.getQuestStatus(31251) == 1) {
           cm.gainItem(4030020,1);    
           cm.sendOk("����Ʈâ Ȯ�����ּ���");
            cm.dispose();
        }else if (cm.getQuestStatus(31254) == 1) {
           cm.gainItem(4030021,1);    
           cm.sendOk("����Ʈâ Ȯ�����ּ���");
            cm.dispose();
        } else {
            cm.sendOk("�̹� �Ϸ�");
            cm.dispose();
        }
    }
}


