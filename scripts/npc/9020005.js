importPackage(Packages.client);
importPackage(Packages.constants);


var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	var chat = "����� ������� ������ #b";
	if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue()) {
        chat += "��������#k �Դϴ�.#b";
        chat += "\r\n\r\n#L1##e��� ���� ���� ����Ʈ START#n";
if (cm.haveItem(4033324,1) || cm.haveItem(4220046,1) || cm.haveItem(4220178,1) || cm.haveItem(4220179,1) || cm.haveItem(4220175,1) || cm.haveItem(4220045,1)) {
         chat += "#e#r <������>#n#k"
}
}
        if (cm.getProfession(2) == MapleProfessionType.ACC.getValue()) {
        chat += "������Ŀ#k �Դϴ�.#b";
        chat += "\r\n\r\n#L2##e��ű� ���� ���� ����Ʈ START#n";
if (cm.haveItem(4033324,1) || cm.haveItem(4220046,1) || cm.haveItem(4220178,1) || cm.haveItem(4220179,1) || cm.haveItem(4220175,1) || cm.haveItem(4220045,1)) {
         chat += "#e#r <������>#n#k"
}
}
	if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue()) {
        chat += "���ݼ���#k �Դϴ�.#b";
        chat += "\r\n\r\n#L3##e���ݼ� ���� ����Ʈ START#n";
if (cm.haveItem(4033324,1) || cm.haveItem(4220046,1) || cm.haveItem(4220178,1) || cm.haveItem(4220179,1) || cm.haveItem(4220175,1) || cm.haveItem(4220045,1)) {
         chat += "#e#r <������>#n#k"
}
}

        if (cm.getProfession(1) == 0 && cm.getProfession(2) == 0) {
	chat += "���׿�..";
	chat += "\r\n\r\n����Ʈ�� �����Ͻ÷��� ������� ( ������� / ��ű����� / ���ݼ� ) �� ���� ���ʽÿ�.";
}
	cm.sendSimple(chat);
 }else if (status == 1){
	if (selection == 1){
cm.dispose();
cm.openNpc(9000134);
	}
	else if (selection == 2){
cm.dispose();
cm.openNpc(9000135);
	}
	else if (selection == 3){
	cm.dispose();
cm.openNpc(9000140);

		}
	}
}
