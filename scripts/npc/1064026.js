var status = 0;
var i = 0;
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
var rank = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM timetower WHERE id = 0 ORDER BY number DESC LIMIT 1").executeQuery();
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
		var chat = "�ð��� ���̶��� �����ϴ°Ŷ�� �����Ͻó���..\r\n";
		chat += "\r\n���� �ð����� �ɰ��ϰ� ��Ʋ�� ";
		chat += "������ �ð��� ��Ʋ�� ���� ������� �մϴ�. ";
		chat += "������ ���������� ������ �� ��Ʋ���� �ٽ� ������ ������� �ǵ����߸� �մϴ�. ";
		chat += "�ε� �ϱ׷��� �ð��� ž�� �����ֽðڽ��ϱ� ��翩...\r\n\r\n";
		chat += "#e<�׷��� ����Ʈ>#n\r\n";
		chat += "\r\n#b����Ʈ : �ϱ׷��� �ð���ž Ŭ����#k";
                while (rank.next()) {
		i = rank.getInt("number");
		chat += "\r\n#d���� " +rank.getString("charid") + " ���� ��Ƽ�� " + rank.getInt("number") + " ������ Ŭ���� �Ͽ����ϴ�.#k\r\n\r\n";
		}
		chat += "#L0##b�ϱ׷��� �ð���ž�� ���ؼ� ������ ���ͽ��ϴ�.#l\r\n";
		chat += "#L1#�ϱ׷��� �ð���ž�� ����������� �ǵ����� ���ڽ��ϴ�.#l";
                chat += "";
		cm.sendSimple(chat);
		} else if (status == 1) {
		if(selection == 0) {
			cm.sendOk("�ϱ׷��� �ð���ž�� ������� ������ �׷��� ����Ʈ�Դϴ�.\r\n�ϱ׷��� �ð���ž�� 100������ �����ϸ� 50�� �̻��� Ŭ���� �Ҷ����� �����۹ڽ��� ���޵˴ϴ�.\r\n#b(�����۹ڽ����� ���� �������� Ŭ������ ������ �޶����ϴ�)#k\r\n�ϱ׷��� �ð���ž�� �ٸ������� 1���� Ŭ�����ϸ� �������� 2������ �ٷ� �ö󰥼� �ֽ��ϴ�.\r\n������ Ŭ��� ���������� �ش������� �Ϸ簣 �ϱ׷��� �ð���ž ������ ���Ҽ� �����ϴ�.\r\n�Ϸ� �ִ� 2�� ������ �����ϸ� �ϱ׷��� �ð���ž�� ��Ƽ�θ� ������ �����մϴ�.");
			cm.dispose();
		} else if (selection == 1) {
				cm.sendYesNo("#b�ϱ׷��� �ð���ž  <" + (i + 1) + "> ���� ���� �غ��ðڽ��ϱ�..");
			} 
		} else if (status == 2) {
			if(cm.getParty() == null) {
				cm.sendOk("�ϱ׷��� �ð���ž�� ��Ƽ�θ� ������ �����մϴ�.");
				cm.dispose();
				return;
			} 
			if(!cm.isLeader()) {
				cm.sendOk("�ϱ׷��� �ð���ž ������ ��Ƽ�常�� ��û�Ҽ� �ֽ��ϴ�.");
				cm.dispose();
				return;
			}
			    var q = cm.getEventManager("TimeTower");
                            if (!cm.TimeTowerCheck()) {
			        cm.sendOk("��Ƽ���� ���� ���������� Ƚ���� �ʰ��� ����� �ֽ��ϴ�.");
                                cm.dispose();
                            } else {
                                cm.TimeTowerAdd();
			        q.startInstance(cm.getParty(), cm.getMap());
                                cm.dispose();
			}
		}
	}
}