


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	Ȳȥ �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9010017

	���ǽ� �̸� : �������� ����

	���ǽð� �ִ� �� : ���丮�Ʒε� : �����Ͼ� (180000000)

	���ǽ� ���� : MISSINGNO


*/

var status = -1;
importPackage(Packages.launch);
var select = -1;
var time = -1;
var rate = -1;
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
        if (cm.getPlayer().hasGmLevel(6))
        cm.sendSimple("������ ���\r\n#L0#�̺�Ʈ�޼�������#l\r\n#L1#����ġ�̺�Ʈ#l\r\n#L2#��ӹ����̺�Ʈ#l\r\n#L3#�޼ҹ����̺�Ʈ#l\r\n#L4#ĳ�ù����̺�Ʈ#l\r\n#L5#�ֹ����������̺�Ʈ#l\r\n#L6#�ӽ��̺�Ʈ�޼�������#l\r\n\r\n");
        else
            cm.dispose();
    }
    else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendGetText("�̺�Ʈ�޼���");
        } else if (selection == 1) {
            cm.sendGetNumber("����",1,1,1000);
        } else if (selection == 2) {
            cm.sendGetNumber("����",1,1,1000);
        } else if (selection == 3) {
            cm.sendGetNumber("����",1,1,1000);
        } else if (selection == 4) {
            cm.sendGetNumber("����",1,1,1000);
        } else if (selection == 5) {
            cm.sendGetNumber("������",1,1,1000);
        } else if (selection == 6) {
            cm.sendGetText("�̺�Ʈ�޼���");
        }
    } else if (status == 2) {
        if (select == 0) {
            var text = cm.getText();
            LoginServer.getInstance().setEventMessage(text);
            cm.dispose();
            cm.sendOk("ok");
        } else if (select == 1) {
            rate = selection;
            cm.sendGetNumber("���ӽð�(��)",1,1,300000);
        } else if (select == 2) {
            rate = selection;
            cm.sendGetNumber("���ӽð�(��)",1,1,300000);
        } else if (select == 3) {
            rate = selection;
            cm.sendGetNumber("���ӽð�(��)",1,1,300000);
        } else if (select == 4) {
            rate = selection;
            cm.sendGetNumber("���ӽð�(��)",1,1,300000);
        } else if (select == 5) {
            rate = selection;
            cm.sendGetNumber("���ӽð�(��)",1,1,300000);
        } else if (select == 6) {
            var text = cm.getText();
            cm.sendGetNumber("���ӽð�(��)",1,1,300000);
        }
    } else if (status == 3) {
        if (select == 1) {
            time = selection;
            cm.setExpEvent(rate, time);
            cm.sendOk("ok");
        } else if (select == 2) {
            time = selection;
            cm.setDropEvent(rate, time);
            cm.sendOk("ok");
        } else if (select == 3) {
            time = selection;
            cm.setMesoEvent(rate, time);
            cm.sendOk("ok");
        } else if (select == 4) {
            time = selection;
            cm.sendGetNumber("���ӽð�(��)",1,1,300000);
        } else if (select == 5) {
            time = selection;
            cm.sendGetNumber("���ӽð�(��)",1,1,300000);
        } else if (select == 6) {
            time = selection;
            cm.setTempMessage(text, time);
            cm.sendOk("ok");
        }
        cm.dispose();
    }
}
