


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 9000008
	
	���ǽ� �̸� : ������

	���ǽð� �ִ� �� : Ŀ�׽�Ƽ

	���ǽ� ���� : �ڹ��� ���� ����


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
        if (cm.haveItem(2350002, 1)) {
        	cm.sendGetText("���� �̸��� ���ְڴ���. \r\n#r*���� ������ ���� �г��� ������ �Ϸ��ϸ� �������� �˴ϴ�.\r\n(�ùٸ��� ���� �г����� ������� �ʽ��ϴ�.#r#n[������� ���⳪ Ư������,�ߺ��Ǵ� �г���(���ɿ��ǽ� - �������� ���� Ȯ��])#r#k[����4���̻�,�ѱ�2���̻��Դϴ�.]");
	} else {
		cm.sendOk("������ ��. �г��� ����� ���� �� ã�ƿ� ����� �ʿ� ���� ��.�г��� ������� �Ŀ����� - �ý���&���ο� �ִ���");
		cm.dispose();
        }
    } else if (status == 1) {
	var name = cm.getText();
        cm.gainItem(2350002, -1);
	cm.setName(name);
        cm.dispose();
    }
}


