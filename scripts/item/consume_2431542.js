
/*

    ���� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : Ƽ��)

    ���ǽþ��̵� : ?
    
    ���ǽ� �̸� : ������ ���

    ���ǽð� �ִ� �� : ?

    ���ǽ� ���� : 40���� ������


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
	    cm.sendOk("���޿Ϸ�");
		cm.teachSkill(80001246, 1, 1);
	    cm.gainItem(2431542,-1);
	    cm.dispose();
        }
    }
}