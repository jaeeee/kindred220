var status = -1;

var main = new Array("�����ô�", "801000%801001%801002%801003%801004%801005%801006%801007", 810000,
"��� �ϴ� ����?", "802000%802001%802002%802003%802004%802005%802006", 820000);

var q_first = new Array("�뿹 �Ͽ�", "�밡�ٴ� �� �ϻ�������, �ʹ� ���� �� �ٶ����� �����ּ���.", 801000,
"���� ��ʽ�", "�ݿ��Ϸ� �ߴµ�, ���� ���̿� �ִ� �� ���� �����ΰ��䡦 ��.", 801001,
"KYI (�����ҿ���)", "ġŲ�� ������? �θ��� ������? �� �׻� ��εſ�! ��_��", 801002,
"�յ� ������", "���� ������� ������ �� ���� �븦 ��Ĩ�ϴ� �� �յ�����.", 801003,
"������ K", "���ϰ� �;��! �����ϱ� �Ⱦ��! �θ���", 801004,
"�뿹 �Ͽ�", "�� ���� ����� �ʹٰ� ������ 1���� ��4�ð��� ���� �����ϴ�.", 801005,
"z1�� �Ҵ�", "���� ���õ� �뵿�� �մϴ�.", 801006,
"���� �Ȱ� ������", "������ ���� ���� �޾Ƴ����� ���� �ѻ�� �� ������� �����ϴ� �͵� ���� ���Ⱦ��~! ���ӡ�. �̰� �۰��� �����ϴ� �������� �����ϱ�䡦?", 801007);

var q_second = new Array("z1�� �Ҵ�", "�ƽ����� ����ü ��� �ϸ� ������ �ǰ��䡦", 802000,
"�ַ� ������", "���õ� �������� �ø��׿�. ��ǳ�⸦ ���� �׷����� ��.", 802001,
"���� 1�� ��ʽ�", "���� 2���� ��� �ϴ� ����?", 802002,
"�뿹 �Ͽ�", "��� �ϸ� �������� �� ���·� ���� �� �ִ� ����? 12�ø� �Ǹ� ���� ���µ���", 802003,
"õ�� ���� �˰�", "�ҸӴϲ��� �����ϼ��� ���� ���� �� �޹ߺ���", 802004,
"KYI (�����ҿ���)", "�θ��� ���� �Ҳ��Ÿ��׿� ��� �ؾ� ����?", 802005,
"���� K", "���߰� �ڴ� �� ��� �ϴ� �ǰ���?��", 802006);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == 1) { status++;
} else { cm.dispose(); return; }
if (status > 2) {
status = 0;
}
if (status == 0) {
	var chat = "�������� ���� �ݷ����� Ȯ���� �� �ֽ��ϴ�.\r\n";
	for (var i = 0; i < main.length; i+=3) {
		var quest = main[i+1].split("%");

		for (var j = 0; j < quest.length; j++) {
			if (cm.getQuestStatus(quest[j]) == 2) {
				q_state = true;
				continue;

			} else {
				q_state = false;
				break;
			}
		}
		chat += "#L"+i+"#";
		chat += (q_state) ? "#b"+main[i]+"(�ϼ�)\r\n" : "#r"+main[i]+"(�̿ϼ�)\r\n";
	}
	cm.sendSimple(chat);

} else if (status == 1) {
	col = selection
	question = (selection == 0) ? q_first : (selection == 3) ? q_second : q_third;
	var chat = "�ݷ��� : "+main[selection]+"\r\n";

	for (var i = 0; i < question.length; i+=3) {
		q_com = (cm.getQuestStatus(question[i+2]) == 2) ? true : false;
		chat += q_com ? "#b" : "#r";
		chat += "#L"+i+"#"+question[i]+"�� ����\r\n";
	}
	if (q_state && cm.getQuestStatus(main[col+2]) == 0) {
		chat += "\r\n#b#L444#�ݷ��� ���� �ޱ�";
	}
	cm.sendSimple(chat);

} else if (status == 2) {
	if (selection == 444) {
		cm.gainItem(4310119, 10);
		cm.completeQuest(main[col+2]);
		cm.sendOk(main[col]+" �ݷ��� �������� #i4310119# #b#t4310119# 10��#k�� ȹ���߽��ϴ�. �������� �ݷ��� �޴����� ���� ������ Ȯ���� �� �ֽ��ϴ�.");
		cm.dispose();
	} else {
		cm.sendOk("#bTo. #e"+cm.getPlayer().getName()+"#n �Բ�..\r\n\r\n#k"+question[selection+1]+"\r\n\r\n#bFrom. "+question[selection]);
		cm.dispose();
	}
}
}