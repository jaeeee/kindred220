importPackage(Packages.server.items);
importPackage(Packages.handler.���);
var status = 0;
var sel = -1;
var itemList = Array (5030000, 5030002, 5030004, 5030008); // ������ ��� 
var day = Array (7,1,7,1,7,1,7,1);
var pch = Array (7900,7900,7900,7900,7900,7900,7900,1200);
var status2 = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (status <= 2 && mode == 0) {
            cm.dispose();
            return;
        }  
        if (mode == 0) {
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("�Ͼ�.. ���� ������ ������ ��絵�ȵǰ�..\r\n\r\n#b#L2#â�� �̿��ϱ�#l\r\n#L1#����� �̿��ϱ�#l\r\n#L0#����� ��ǰ,�޼� ȸ���ϱ�#l");
        } else if (status == 1) {
            if (selection == 0) {	
		if (cm.getPlayer().getLevel() < 100) {
			cm.sendOk("������ ���� �ڳ׿��� �����ٰ� ���� ���̴±�");
			cm.dispose();
			return;
		}
		cm.sendSimple("��� �̿� �ϰڳ�\r\n\r\n#b#L0#�޼� ȸ��#l\r\n#L1#������ ȸ��#l");	
            } else if (selection == 2) {
		cm.sendStorage();
           } else if (selection == 1) {
		if (cm.getPlayer().getLevel() < 100) {
			cm.sendOk("������ ���� �ڳ׿��� �����ٰ� ���� ���̴±�");
			cm.dispose();
			return;
		}
		cm.openUI(161);
		�����.��������(cm.getClient());
		cm.dispose();
            }
        } else if (status == 2) {
            	sel = selection;
		if (sel == 0) {
			if (�����.�����޼�ȸ��(cm.getPlayer().getName()) == 0) {
				cm.sendOk("�ڳ״� ȸ���� �޼Ұ� ���°� ����");
				cm.dispose();
			} else {
				cm.gainMeso(�����.�����޼�ȸ��(cm.getPlayer().getName()));
				cm.sendOk(�����.�����޼�ȸ��(cm.getPlayer().getName()) + "�޼Ҹ� ȸ�� �Ϸ� �Ͽ���");
				�����.�޼�ȸ���Ϸ�(cm.getPlayer().getName());
				cm.getPlayer().saveToDB(false,false);
				cm.dispose();
			}
		} else if (sel == 1) {
			cm.sendSimple(�����.����������ȸ��(cm.getPlayer().getName()));
		}
	} else if (status == 3) {
		if (selection > 0) {
			�����.������ȸ��(cm.getClient(),selection);
			cm.getPlayer().saveToDB(false,false);
			cm.dispose();
		} else {
			cm.dispose();
		}
	}
    }
}