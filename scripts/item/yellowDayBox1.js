


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/

var status = -1;
importPackage(Packages.tools.RandomStream);
importPackage(Packages.client.items);

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
        cm.sendYesNo("���ε� ���ڸ� ���ðڽ��ϱ�? �ִ� ĳ�� �ѵ��� 90�� ĳ�� �Դϴ�.");
    } else if (status == 1) {
        var leftslot = cm.getPlayer().getNX();
        if (leftslot >= 700000) {
            cm.sendOk("ĳ�� �ִ� �ѵ��� 90�� ĳ�� �Դϴ�. ���� ĳ�� ������ �ʰ��Ͽ� �� ���ڸ� �� �� �����ϴ�.");
            cm.dispose();
            return;
        }
        cm.gainItem(2430026, -1);
        var cash = Randomizer.rand(10000, 100000);
        cm.getPlayer().modifyCSPoints(1, cash, true);
        cm.sendOk("���ε� �ڹ��迡�� �Ʒ��� �������� ���Խ��ϴ�.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#e#b"+cash+"ĳ��");
        
        cm.dispose();
    }
}


