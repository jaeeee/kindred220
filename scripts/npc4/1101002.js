


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

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
        if (cm.getQuestStatus(3507) == 1) {
            cm.completeQuest(3507);
            cm.sendOk("�Ҿ���� �߾��� ã�� ����Ʈ�� �Ϸ�Ǿ����ϴ�. #b��ȸ�� ���� �ȴ��� 1#k ����Ʈ�� ������ �ּ���.");
            cm.dispose();
        } else if (cm.getQuestStatus(3513) >= 1 && cm.getQuestStatus(3514) != 2) {
            if (cm.getMeso() >= 1000000) {
                cm.gainMeso(-1000000);
                cm.completeQuest(3514);
                cm.getPlayer().message(1, "'������ �Ĵ� ������' ����Ʈ�� �Ϸ�Ǿ����ϴ�. [������ ���� �ȴ��� 1] ����Ʈ�� ������ �ּ���.");
                cm.getPlayer().message(6, "'������ �Ĵ� ������' ����Ʈ�� �Ϸ�Ǿ����ϴ�. [������ ���� �ȴ��� 1] ����Ʈ�� ������ �ּ���.");
                cm.dispose();
            } else {
                cm.sendOk("'������ �Ĵ� ������' ����Ʈ�� �Ϸ��ϱ� ���ؼ��� 100�� �޼Ұ� �ʿ��մϴ�.");
                cm.dispose();
            }
        } else {
            cm.sendOk("�Ҿ���� �߾��� ã�� ����Ʈ�� ���� �� �̿��� �ּ���.");
            cm.dispose();
        }
    }
}


