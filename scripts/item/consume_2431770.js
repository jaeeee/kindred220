/*

     [ PlatinumMS ]

     �� ��ũ��Ʈ�� PlatinumMS ���� ������ ��ũ��Ʈ �Դϴ�.

     ��ũ��Ʈ �뵵 : 70���� ������

*/

importPackage(Packages.client.items);
var status = -1;

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
		    cm.gainItem(1003529, 1);
		    cm.gainItem(1052457, 1);
		    cm.gainItem(1102394, 1);
	            cm.gainItem(1082430, 1);
		    cm.gainItem(1072660, 1);
		    cm.gainItem(1112742, 1);
		    cm.gainItem(1132151, 1);
	            cm.gainItem(1152088, 1);
	            cm.gainItem(1122196, 1);
	            cm.gainItem(1152088, 1);
	            cm.gainItem(1672010, 1);
	            cm.gainItem(1662014, 1);
	            cm.gainItem(1012318, 1);

	    cm.gainItem(2431770, -1);
                    cm.sendOk("#e#r�ѽ� ��Ÿ��#k#n �̿÷� ��Ʈ�� �����˽��ϴ�. ��ſ� �ѽ� ��Ÿ�� �Ǽ���!");
                    cm.dispose();
                    return;

                    }
        
    }
}