


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
        if (cm.getPlayer().getKeyValue(cm.getNpc()+"_Pure") == null) {
            cm.sendOk("ǻ��ǻ��~ ǻ��~ǻ��~  ǻ��ǻ��ǻ��ǻ��~~ ǻ��~ǻ��~");
            cm.gainItem(4031120, 1);
            cm.gainExp(1000);
            cm.getPlayer().setKeyValue(cm.getNpc()+"_Pure", "1");
        } else {
            cm.sendOk("ǻ��ǻ��~");
        }
    } else {
        cm.dispose();
        if (cm.haveItem(4031120, 3)) {
            cm.openNpc(9901011);
        }
    }
}


