/*

�� ��ũ��Ʈ�� ���Ǹ���Ÿ�� � �������� ���۵Ǿ����ϴ�.

*/
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		
		var chat = "�ȳ�? ���� #r�߷���#k �����!";
		chat += "\r\n������ ������ ���� �ñ��ϴٸ� ������ �°� ���°� �?";
		chat += "\r\n�׷����Ѵٸ� ���� #r������ ��ų#k�� �˷� �ֵ��� ����!!";
		chat += "\r\n\r\n#L0##b������ ��ų�� ����.#l";
		cm.sendSimple(chat);

	} else if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayer().getLevel() >= 140) {
				cm.HyperSkillMax();
				cm.sendOk("���� ������ �´� #r������ ��ų#k�� ������ ���׾�!!");
				cm.dispose();
			} else {
				cm.sendOk("#r������ ��ų#k�� ���� 140 �̻���� ���� �ִٱ�!!");
				cm.dispose();
			}
		} 
}
}
}