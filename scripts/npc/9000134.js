/*

Copyright �� 2013 Spirit Corporaion. All Rights Reserved.

leader.���Ǹ��¶��� (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.��� (guri__s@nate.com)
member.���� (iureal@nate.com)
member.����ε� ()


�� ��ũ��Ʈ�� ���Ǹ��¶��ο��� ���˴ϴ�.
���� ������ �Ǵ��� �� �ּ��� �������� ���������� ���ڽ��ϴ�.

*/

var status = 0;

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
		var chat = "�ȳ��ϼ���!! ���� #bHuman Project#k���� �������� ����ϰ��ִ� \r\n#bHuman[GM]#k��� �մϴ�! ";
		chat += "���� �̷��� #b�޸սý�#k�� �ִ� ������!! �ٷιٷ� #d���Ⱦ�����#k�� �Ǹ��ϱ� ���ؼ� �Ӵ�ϴ�~\r\n";
		chat += "#d���Ⱦ�����#k�� ���ı���? #b�޸ս��丮#k������ �����ִ� ��û #e������ ������#n�� ���ϴ� �ſ��� ";
		chat += "������ #d���Ⱦ�����#k�� �ս��� ȹ�� �Ҽ��� ����!! ������ #b(5õ��)50,000,000#k�޼Ҹ� �ֽø�";
	        chat += " #d���Ⱦ�����#k�� ȹ���Ҽ��ִ� �귿�� ���� �帱�Կ�!";
		chat += "\r\n\r\n#e[���� ����]#n\r\n\r\n";
		chat += "#i1112315##b#t1112315#";
		chat += "\r\n#i1112316##t1112316#";
		chat += "\r\n#i1112317##t1112317#";
		chat += "\r\n#i1112318##t1112318#";
		chat += "\r\n#i1112319##t1112319#";
		chat += "\r\n#i1112320##t1112320#";
		chat += "\r\n\r\n#k#e[���� ���Ʈ]#n\r\n\r\n";
		chat += "#i1122088##b#t1122088#";
		chat += "\r\n#i1122089##t1122089#";
		chat += "\r\n#i1122090##t1122090#";
		chat += "\r\n#i1122091##t1122091#";
		chat += "\r\n#i1122092##t1122092#";
		chat += "\r\n#i1122093##t1122093#";
		chat += "\r\n\r\n#k#e[�Ѹ� �Ѹ� �귿]#n#b";
		chat += "\r\n#L0#5õ�� �޼ҷ� �귿�� �����ڽ��ϴ�.#l";
		cm.sendSimple(chat);
        } else if (status == 1) {
		if (cm.getMeso() >= 50000000) {
			cm.sendOk("��~ �αٵα� #d���Ⱦ�����#k�� ���� �귿�� �����ϴ�!!");
	   	} else {
			cm.sendOk("�귿�� �����⿡�� �޼Ұ� �����Ѱ� ���ƿ�~");
			cm.dispose();
		}
	} else if (status == 2) {
		cm.gainMeso(-50000000);
		cm.getPlayer().���Ⱦ�����();
		cm.dispose();
	} else {
		cm.dispose();
	}
    }
}