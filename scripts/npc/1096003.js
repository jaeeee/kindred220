var status = 0;
var sel = 0;

var ��ġ = Array (2049301,2049401,1662000,1662001,1672000,1662002,1662003,1672022);
var ��ġ���� = Array (15,15,30,30,30,50,50,50);
var ��ġ = Array (1662004,1662005,1662006,1662009,1662010,1662011,1662012,1662013,1662014,1662015,1662016,1662019,1662020,1672027,1672040);
var ��ġ���� = Array (30,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
var ��ġ = Array (5064000,5064100,5064300,2470007);
var ��ġ���� = Array(10,10,10,10)
var ��ġ���� = 2000; //�޼ҷ� ��ȯ�Ҷ��� ����
var ��ġ���� = 5000; //�޼ҷ� ��ȯ�Ҷ��� ����
var ��ġ���� = 5000; //�޼ҷ� ��ȯ�Ҷ��� ����

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
		var jessica = "���ø� �ϴ� ������ ������ ���� ������ �ٴٸ� ����������..\r\n\r\n#b";
		jessica += "#L0#���ð� ������?\r\n";
		jessica += "#L1#���� ��ǰ ����\r\n";
		jessica += "#L2#����� ��ȯ";
		cm.sendSimple(jessica);

        } else if (status == 1) {
	if (selection == 0) {
		cm.sendPrev("#b����#k�� ���İ�?\r\n\r\n#b�̳�#k�� �̿��ؼ� #b�����#k�� ��°�����.");
		cm.dispose();

	} else if (selection == 1) {
		sel = 1;
		var jessica2 = "�ѹ� ��󺸰�\r\n\r\n#b";
		jessica2 += "#L0##i3010432# ���� ���� (3.000.000)\r\n";
		jessica2 += "#L1##i2430996# �̳� ���� (300.000)";
		cm.sendSimple(jessica2);

	} else if (selection == 2) {
			var chat = "�ѹ� ��󺸰�\r\n\r\n";
       			chat += "#L18181818##i4001189# #b����⸦ �޼ҷ� ��ȯ#l\r\n#e";
			chat += "\r\n\r\n#k#e<��ġ>#n#b\r\n";
			{
				for (var i = 0; i < ��ġ.length; i ++) {
					chat += "#L" + i + "# #i" + ��ġ[i] + "# #z" + ��ġ[i] + "# : ��ġ(" + ��ġ����[i] + ")#l\r\n";
				}
			}
			chat += "\r\n\r\n#k#e<��ġ>#n#b\r\n";
			{
				for (var i = 0; i < ��ġ.length; i ++) {
					chat += "#L" + ((i + 1) * 1000) + "# #i" + ��ġ[i] + "# #z" + ��ġ[i] + "# : ��ġ(" + ��ġ����[i] + ")#l\r\n";
				}
			}
			chat += "\r\n\r\n#k#e<��ġ>#n#b\r\n";
			{
				for (var i = 0; i < ��ġ.length; i ++) {
					chat += "#L" + ((i + 1) * 50000) + "# #i" + ��ġ[i] + "# #z" + ��ġ[i] + "# : ��ġ(" + ��ġ����[i] + ")#l\r\n";
				}
			}
			cm.sendSimple(chat);
		}
        } else if (status == 2) {
		if (sel == 1) {
			if (selection == 0) {
				if (cm.getMeso() >= 3000000) {
					cm.gainItem(3010432, 1);
					cm.gainMeso(-3000000);
					cm.sendOk("�������� ��! �̿����ֱ� �ٶ��.");
					cm.dispose();
				} else {
					cm.sendOk("300�� �޼Ұ� �ִ°� Ȯ���Ѱ�? ��..������ �ٽ� ã�ƿ��ְԳ�" );
					cm.dispose();
				}
     			} else if (selection == 1) {
              	 		 if (cm.getMeso() >= 300000) {
               				 cm.gainItem(2430996, 30);
               				 cm.gainMeso(-300000);
               				 cm.sendOk("�������� ��! �̿����ֱ� �ٶ��.");
               				 cm.dispose();
        			} else {
             	 	     	   cm.sendOk("30�� �޼Ұ� �ִ°� Ȯ���Ѱ�? ��..������ �ٽ� ã�ƿ��ְԳ�" );
				}
			}
		} else {
			if (selection == 18181818) {
				var chat1 = "�޼ҷ� ��ȯ�� ����⸦ ������ �ְԳ�.\r\n\r\n#b";
				chat1 += "#L4001187##i4001187##t4001187# ������ " + ��ġ���� + " �޼�\r\n";
				chat1 += "#L4001188##i4001188##t4001188# ������ " + ��ġ���� + " �޼�\r\n";
				chat1 += "#L4001189##i4001189##t4001189# ������ " + ��ġ���� + " �޼�\r\n";
				cm.sendSimple(chat1);
			} else if (selection >= 50000) {
				sel = parseInt(((selection - 1) / 50000));
				if (cm.haveItem(4001189,��ġ����[sel])) {
					if (cm.canHold(��ġ[sel])) {
						cm.gainItem(4001189,-��ġ����[sel]);
						cm.gainItem(��ġ[sel],1);
						cm.sendOk("�������� �� ã�ƿ� �ְԳ�");
						cm.dispose();
					} else {
						cm.sendOk("�������� ���� ������ �����ϱ���");
						cm.dispose();
					}
				} else {
					cm.sendOk("��ġ�� Ȯ���� ������ �ִ°հ�?");
					cm.dispose();
				}
			} else if (selection >= 1000) {
				sel = parseInt(((selection - 1) / 1000));
				if (cm.haveItem(4001188,��ġ����[sel])) {
					if (cm.canHold(��ġ[sel])) {
						cm.gainItem(4001188,-��ġ����[sel]);
						cm.gainItem(��ġ[sel],1);
						cm.sendOk("�������� �� ã�ƿ� �ְԳ�");
						cm.dispose();
					} else {
						cm.sendOk("�������� ���� ������ �����ϱ���");
						cm.dispose();
					}
				} else {
					cm.sendOk("��ġ�� Ȯ���� ������ �ִ°հ�?");
					cm.dispose();
				}
			} else {
				sel = selection;
				if (cm.haveItem(4001187,��ġ����[sel])) {
					if (cm.canHold(��ġ[sel])) {
						cm.gainItem(4001187,-��ġ����[sel]);
						cm.gainItem(��ġ[sel],1);
						cm.sendOk("�������� �� ã�ƿ� �ְԳ�");
						cm.dispose();
					} else {
						cm.sendOk("�������� ���� ������ �����ϱ���");
						cm.dispose();
					}
				} else {
					cm.sendOk("��ġ�� Ȯ���� ������ �ִ°հ�?");
					cm.dispose();
				}
			}
		}
	} else if (status == 3) {
		sel = selection;
		cm.sendGetNumber("��ȯ�� ������ �Է��� �ְԳ�.", 0, 1, 100);
	} else if (status == 4) {
		if (cm.haveItem(sel,selection)) {
			cm.gainItem(sel,-selection);
			cm.gainMeso((sel == 4001187 ? ��ġ���� : sel == 4001188 ? ��ġ���� : ��ġ����) * selection);
			cm.sendOk("�������� �� ã�ƿ� �ְԳ�");
			cm.dispose();
		} else {
			cm.sendOk("#t" + sel + "#�� Ȯ���� ������ �ִ°հ�?");
			cm.dispose();
		}
	}
    }
}