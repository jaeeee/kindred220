


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
        cm.sendNext("������ �� �ٽ� �������ְ�.");
    } else {
        if (cm.getPlayer().getEventInstance() != null) {
            cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
        }
        cm.removeAll(4001015); //����
        cm.removeAll(4001016); //��й���
        cm.removeAll(4001018); //���ǿ���
        if (cm.getClient().getChannel() % 2 == 1) { //ī���� ����
            cm.warp(211042301,1);
        } else { //��� ����
            cm.warp(211042300,1);
        }
        cm.dispose();
    }
}


