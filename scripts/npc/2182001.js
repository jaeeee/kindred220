// �ƽ��� �繫��� ���� ��ũ��Ʈ
var status = -1;
var select = -1;

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
		var text = "����... ���� ���̿�? #b";
		text += "\r\n#L0# �ع��� Ŭ���� ������ ������ �Խ��ϴ�.#l";
		text += "\r\n#L1# �ƽ��� �ع��� ���� ������ ������ �Խ��ϴ�.#l";
		text += "\r\n#b#L4# �ƽ��Ͽ��� ���� �� �ִ� �Ϳ� ���� �ٽ� ��� �ͽ��ϴ�.#l#k";
		text += "\r\n#b#L5# �ع��� �������� �ٽ� ��� �ͽ��ϴ�.#l#k";
		text += "\r\n\r\n#b#e���� ���� ȹ�� ���� ���� : #r0#k #b/ 150#k#n";
        cm.sendSimple(text);
    } else if (status == 1) {
		if (selection == 0)
		{
			cm.sendNext("��.. �����޵� ������ ���� �� ������. ������ �ع����� �� ��带 Ŭ������ ������ ����� �ΰ�, ��ϵ� ���θ� ������ �ְ� �־�. �ع����� Ŭ�����ϰ� �ٽ� �� ������.");
			cm.dispose();
		} else if (selection == 1)
		{ //getBonus=0
			cm.sendOk("���� ������ �ع����� ���۵��� �ʾұ�. ���� �ع����� ��� ���尡 ������ 8�� ���Ŀ� �ٽ� ã�ƿ�����.")
			cm.dispose();
		} else if (selection == 4)
		{
			cm.sendOk("������ ���ǿ��� ��ϰ������� �� ���� �ִٸ� ���ǿ����� ��������...")
			cm.dispose();
		} else if (selection == 5)
		{
			cm.sendOk("�ع��� �̺�Ʈ�� �̱��� �����Դϴ�.")
			cm.dispose();
			}
		}
	}
