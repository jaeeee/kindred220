/*

	Ndrive ������ȯ ��ũ��Ʈ

	���ǽþ��̵� : 1012112

	���ǽ� �̸� : �丮

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý����� (100000200)

	���ǽ� ���� : ������ȯ


*/
importPackage(Packages.client);
var status = 0;

function start() {
    status = -1;
    action (1, 0, 0);
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
        var chat = "#e���� #r����������ȯ#k NPC�Դϴ�.\r\n���Ͻô� �������� ����ּ���.#n\r\n\r\n#b�� �������� : #e"+(cm.getPlayer().getRelic()) +"��#n\r\n\r\n\r\n";
        chat += "���� Comming Soon";
        chat += "#b#L2##i3010365##z3010365# #r(�ʿ����� : 2222��)#l\r\n";
        chat += "#b#L4##i1003527##z1003527# #r(�ʿ����� : 22000��)#l\r\n";
        chat += "#b#L8##i1112941##z1112941# #r(�ʿ����� : 14444��)#l\r\n";
        chat += "#b#L9##i4001832##z4001832# x5000 #r(�ʿ����� : 30000��)#l\r\n";
        chat += "#b#L0##i1142407##z1142407# #r(�ʿ����� : 30000��)#l\r\n";
        chat += "#b#L5##i1022138##z1022138# #r(�ʿ����� : 36000��)#l\r\n";
        chat += "#b#L3##i1012316##z1012316# #r(�ʿ����� : 44000��)#l\r\n";
        chat += "#b#L6##i1112320##z1112320# #r(�ʿ����� : 6666��)#l\r\n";
       chat += "#b#L7##i1112940##z1112940# #r(�ʿ����� : 14444��)#l\r\n";
       chat += "#b#L8##i1112941##z1112941# #r(�ʿ����� : 14444��)#l\r\n";
        cm.sendSimple(chat);
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayer().getRelic() >= 30000) {
                cm.sendYesNo("#e���� #i1142407##b#z1142407##k���� ��ȯ�Ͻðڽ��ϱ�?#n");
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
            }
         } else if (selection == 2) {
            if (cm.getPlayer().getRelic() >= 2222) {
                cm.sendYesNo("#e���� #i3010365##b#z3010365##k�� ��ȯ�Ͻðڽ��ϱ�?#n");
                status++;
                status++;
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
            }
         } else if (selection == 3) {
            if (cm.getPlayer().getRelic() >= 44000) {
                cm.sendYesNo("#e���� #i1012316##b#z1012316##k���� ��ȯ�Ͻðڽ��ϱ�?#n");
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
            }
         } else if (selection == 4) {
            if (cm.getPlayer().getRelic() >= 22000) {
                cm.sendYesNo("#e���� #i1003527##b#z1003527##k�� ��ȯ�Ͻðڽ��ϱ�?#n");
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
            }
         } else if (selection == 5) {
            if (cm.getPlayer().getRelic() >= 36000) {
                cm.sendYesNo("#e���� #i1022138##b#z1022138##k���� ��ȯ�Ͻðڽ��ϱ�?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
            }
         } else if (selection == 6) {
            if (cm.getPlayer().getRelic() >= 6666) {
                cm.sendYesNo("#e���� #i1112320##b#z1112320##k���� ��ȯ�Ͻðڽ��ϱ�?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
}
 } else if (selection == 7) {
            if (cm.getPlayer().getRelic() >= 14444) {
                cm.sendYesNo("#e���� #i1112940##b#z1112940##k���� ��ȯ�Ͻðڽ��ϱ�?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
}
 } else if (selection == 8) {
            if (cm.getPlayer().getRelic() >= 14444) {
                cm.sendYesNo("#e���� #i1112941##b#z1112941##k���� ��ȯ�Ͻðڽ��ϱ�?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
            }
         
 } else if (selection == 9) {
            if (cm.getPlayer().getRelic() >= 30000) {
                cm.sendYesNo("#e���� #i4001832##z4001832#x5000#k ���� ��ȯ�Ͻðڽ��ϱ�?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r��������#k�� �����մϴ�.#n");
                cm.dispose();
            }
         }         
    } else if (status == 2) {
       cm.getPlayer().addRelic(-30000);
       cm.gainItem(1142407, 1);
       cm.dispose();
    } else if (status == 3) {
       cm.getPlayer().addRelic(-500);
       cm.gainItem(2000005, 20);
       cm.dispose();
    } else if (status == 4) {
       cm.getPlayer().addRelic(-2222);
       cm.gainItem(3010365, 1);
       cm.dispose();
    } else if (status == 5) {
       cm.getPlayer().addRelic(-44000);
       cm.gainItem(1012316, 1);
       cm.dispose();
    } else if (status == 6) {
       cm.getPlayer().addRelic(-22000);
       cm.gainItem(1003527, 1);
       cm.dispose();
    } else if (status == 7) {
       cm.getPlayer().addRelic(-36000);
       cm.gainItem(1022138, 1);
       cm.dispose();
    } else if (status == 8) {
       cm.getPlayer().addRelic(-6666);
       cm.gainItem(1112320, 1);
       cm.dispose();
    } else if (status == 9) {
       cm.getPlayer().addRelic(-14444);
       cm.gainItem(1112940, 1);
       cm.dispose();
    } else if (status == 10) {
       cm.getPlayer().addRelic(-14444);
       cm.gainItem(1112941, 1);
       cm.dispose();
       } else if (status == 11) {
       cm.getPlayer().addRelic(-30000);
       cm.gainItem(4001832, 5000);
       cm.dispose();    
    }
  }
}