


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 9071003
	
	���ǽ� �̸� : ������ũ ��Ʋ

	���ǽð� �ִ� �� : ��������, ������ũ

	���ǽ� ���� : ��Ʋ


*/


var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        if (cm.getMapId() != 951000000)
            cm.sendYesNo("I love you. Are you sure you want to always go to the full enjoyment of the new Monster Park syupigelman? Oh you know from the new Extreme Monster Park? Try ~");
        else
            cm.sendYesNo("Would you like to return to the square?");
    } else if (status == 1) {
        if (cm.getMapId() != 951000000) {
            if (cm.getClient().getChannel() != 1) {
                cm.sendYesNo("Are you sure you want to go?")
            } else {
                cm.saveLocation("MONSTERPARK");
                cm.warp(951000000, 0);
                cm.dispose();
            }
        } else {
            cm.warp(100000000);
            cm.dispose();
        }
    } else if (status == 2) {
        if (cm.getMapId() != 951000000) {
            cm.saveLocation("MONSTERPARK");
            cm.warp(951000000);
        }
    }
}


