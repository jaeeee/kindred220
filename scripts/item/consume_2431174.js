


/*

	���� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/

importPackage(Packages.client.items);
importPackage(Packages.client.inventory);
importPackage(java.lang);
importPackage(Packages.tools.RandomStream);

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
            var inner = Randomizer.rand(1);
            cm.getPlayer().addInnerExp(inner);
            cm.getPlayer().message("��ġ�� "+inner+"��ŭ ��� �Ͽ����ϴ�.");
            cm.gainItem(2431174, -1);
 cm.dispose();
    }
}


