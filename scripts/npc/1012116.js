�޷� = new Date();

��   = �޷�.getFullYear();
��   = �޷�.getMonth() + 1;
��   = �޷�.getDate();
�Ͽ� = �޷�.getDay();
���� = �޷�.getHours() < 12 ? "����" : "����"			
��   = �޷�.getHours() > 12 ? �޷�.getHours() - 12 : �޷�.getHours();
��   = �޷�.getMinutes();
��   = �޷�.getSeconds();
���� = �Ͽ� == 0 ? "�Ͽ���" : �Ͽ� == 1 ? "������" : �Ͽ� == 2 ? "ȭ����" : �Ͽ� == 3 ? "������" : �Ͽ� == 4 ? "�����" : �Ͽ� == 5 ? "�ݿ���" : "�����";
�ð� = ""+��+"�� "+��+"�� "+��+"�� "+����+" "+����+" "+��+"�� "+��+"�� "+��+"�� ";


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
    }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var chat = "#e���� �ð�#n �� "+�ð�+"\r\n";
		chat += "#eä�� ����#n �� ����ġ #r150#k��, �޼� #r10#k, ��� #r10#k��\r\n\r\n";
		chat += "#L9000002##r��#k �޸����丮 �ʱ��ڿ� �ޱ�.\r\n"; //�̺�Ʈ, ��������
		chat += "#L9001040##r��#k �����ý��丮 ��Ÿ�� �̺�Ʈ!\r\n"; 	   //�̺�Ʈ, ��������
		chat += "\r\n#L1##fUI/UIToolTIP/Item/Equip/Star/Star##b�̵��ý���#k�� �̿��ϰ�ͽ��ϴ�.\r\n";
		chat += "#L2##b�����ý���#k�� �̿��ϰ�ͽ��ϴ�.\r\n";
		chat += "#L1012109##b�������ý���#k�� �̿��ϰ�ͽ��ϴ�.\r\n";
		cm.sendSimple(chat);
	} else if (status == 1) {
		if (selection > 0) {
		cm.dispose();
		cm.openNpc(selection);
		}
	} else if (status == 2) {
		cm.dispose();
	}
}