importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);
var status;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
        if (mode == 1)
            status++;
        else	
            status--;
        if (status == 0) {
	var chat = "� ��ų�� ������ �غ���?\r\n\r\n";
	chat += cm.�����͸���();
 	chat += "\r\n";
	chat += "#L0##r#fn����##fs14##e�����͸� �� ����� ����Ѵ�.#n#fs##fn##l";
	cm.sendSimpleS(chat,2);
	} else if (status == 1) {
	if (selection != -1 && selection != 0) {
	cm.teachSkill(selection,30,30);
	cm.sendOkS("�̰ɷ� ���� ���� �������ɱ�?",2);
	cm.gainItem(2431790,-1);
	}
	cm.dispose();
	} else if (status < 0) {
	cm.dispose();
    }
}