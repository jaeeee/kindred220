/*
������:�Ǿ�������(nicky8209)
���� ���:������ ��
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
                var spir = "������ �ͷ� �����°ű�. �� ��, ���ο� ������ �Ͱ� �߰ߵǾ���. �ñ׳ʽ� ���� ���踦 �̰����� ���� �� �ִ°Ŷ��? ��ȭ�� ���� ��� ����� ��.#b\r\n";
                spir += "\r\n#L0#�ҿ�(��)�� ������ ���ڽ��ϴ�."; 
                spir += "\r\n#L1#�÷���(ȭ��)�� ������ ���ڽ��ϴ�.";
                spir += "\r\n#L2#����(�ٶ�)�� ������ ���ڽ��ϴ�.";
                spir += "\r\n#L3#��ũ�Ͻ�(���)�� ������ ���ڽ��ϴ�.";
                spir += "\r\n#L4#����Ʈ��(����)�� ������ ���ڽ��ϴ�.";
                cm.sendSimple(spir);	
        } else if (status == 1) {
		if (selection == 0) {
		    cm.warp(271030201,1);
		    cm.dispose();
		} else if (selection == 1) {
            	    cm.warp(271030202,1);
            	    cm.dispose();
            	} else if (selection == 2) {
            	    cm.warp(271030203,1);
            	    cm.dispose();
            	} else if (selection == 3) {
            	    cm.warp(271030204,1);
            	    cm.dispose();
            	} else if (selection == 4) {
            	    cm.warp(271030205,1);
            	    cm.dispose();
	        }
	    }
	}
    }