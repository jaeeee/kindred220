


/*

	���� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 2083000
	
	���ǽ� �̸� : ���� ��ȣ����

	���ǽð� �ִ� �� : ���� �Ա�

	���ǽ� ���� : �� ������� ��ǥ üũ -> ����
false

*/
importPackage(Packages.Dbg.community);

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
        if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� �̷�� ���� �ʾ� ��ȣ ������ ���� �� �����ϴ�.");
            cm.dispose();
            return;
        }
        if (!cm.haveItem(4001086, 1)) {
            cm.sendOk("��ȣ������ �о�� ������, ���� ���ڰ� �����ִ��� �� �� �����ϴ�. ȥ���� ������̶�� ���� �� ���� �� �����ϴ�.");
            cm.dispose();
            return;
        }
        cm.sendYesNo("��ȣ������ �������� ���� �ڷ� ���� ���Ƚ��ϴ�. ���� �̿��ؼ� �����Ͻðڽ��ϱ�?");
    } else if (status == 1) {
        cm.allPartyWarp(240050400,false);
        cm.dispose();
    }
}