var status = -1;

var quest = new Array("�뿹 �Ͽ�", "�밡�ٴ� �� �ϻ�������, �ʹ� ���� �� �ٶ����� �����ּ���.", 801000,
"���� ��ʽ�", "�ݿ��Ϸ� �ߴµ�, ���� ���̿� �ִ� �� ���� �����ΰ��䡦 ��.", 801001,
"������ (�����ҿ���)", "ġŲ�� ������? �θ��� ������? �� �׻� ���εſ�! ��_��", 801002,
"�յ� ������", "���� ������� ������ �� ���� �븦 ��Ĩ�ϴ� �� �յ�����.", 801003,
"������ K", "���ϰ� �;��! �����ϱ� �Ⱦ��! �θ���", 801004,
"�뿹 �Ͽ�", "�� ���� ����� �ʹٰ� ������ 1���� ��4�ð��� ���� �����ϴ�.", 801005,
"z1�� �Ҵ�", "���� ���õ� �뵿�� �մϴ�.", 801006,
"���� �Ȱ� ������", "������ ���� ���� �޾Ƴ����� ���� �ѻ�� �� ������� �����ϴ� �͵� ���� ���Ⱦ��~! ���ӡ�. �̰� �۰��� �����ϴ� �������� �����ϱ�䡦?", 801007,
"z1�� �Ҵ�", "�ƽ����� ����ü ��� �ϸ� ������ �ǰ��䡦", 802000,
"�ַ� ������", "���õ� �������� �ø��׿�. ��ǳ�⸦ ���� �׷����� ��.", 802001,
"���� 1�� ��ʽ�", "���� 2���� ��� �ϴ� ����?", 802002,
"�뿹 �Ͽ�", "��� �ϸ� �������� �� ���·� ���� �� �ִ� ����? 12�ø� �Ǹ� ���� ���µ���", 802003,
"õ�� ���� �˰�", "�ҸӴϲ��� �����ϼ��� ���� ���� �� �޹ߺ���", 802004,
"KYI (�����ҿ���)", "�θ��� ���� �Ҳ��Ÿ��׿� ��� �ؾ� ����?", 802005,
"���� K", "���߰� �ڴ� �� ��� �ϴ� �ǰ���?��", 802006);

var quest_num = new Array();
var quest_name = new Array();
var quest_con = new Array();

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == 1) { status++;
} else { cm.dispose(); return; }

if (status == 0) {
if (cm.getQuestStatus(799999) == 0) {
	cm.completeQuest(799999);
	cm.gainItem(2432740, 1);
}
	cm.gainItem(2431693, -1);
	Math.floor(Math.random() * quest.length);
	for (var i = 2; i < quest.length; i+=3) {
		quest_num.push(quest[i]);
		quest_name.push(quest[i-2]);
		quest_con.push(quest[i-1]);
	}
	var ran = Math.floor(Math.random() * quest_num.length);
	cm.completeQuest(quest_num[ran]);
	cm.sendOk("#bTo. #e"+cm.getPlayer().getName()+"#n �Բ�..\r\n\r\n#k"+quest_con[ran]+"\r\n\r\n#bFrom. "+quest_name[ran]);
	cm.dispose();
}
}