function start() {
     status = -1;
     action(1, 0, 0);
 }

 function action(mode, type, selection) {
     if (mode == -1) {
         cm.dispose();
     } else {
         if (mode == 0) {
             if (status == 1) {
                 cm.sendNext("�ٽ� �� ������ ���� ���� �ɾ� �ְ�.");
             }
             cm.dispose();
             return;
         }
         if (mode == 1)
             status++;
         else
             status--;
         if (status == 0) {
             var main = "������ �ϰڳ�?#b\r\n";
             main += "\r\n#L0#������ �̾߱⸦ ��´�.";
             main += "\r\n#L1#���������� ������.";
             cm.sendSimple(main);
         } else if (status == 1) {
             if (selection == 0) {
                 if (cm.getMapId() == 925100000) {
                     cm.sendNext("��ȭ�� �����ϴ�.");
                     cm.dispose();
                 } else if (cm.getMapId() == 925100100) {
                     if (cm.getPlayer().getEventInstance().getProperty("DavyzonePQ_Monster") == null) {
                         cm.sendNext("�����ϰ�! �̰������� ���� �������� ���������� �𸣴� ���ϼ�. ������ �׷��ٰ� �̰��� �׳� ������ �� ����. �������� ���� ��ҷ� ���� ��Ż�� ������ ������ �ɾ� �ξ����� ������.");
                     } else {
                         cm.sendNext("��ȭ�� �����ϴ�.");
                         cm.dispose();
                     }
                 } else if (cm.getMapId() == 925100400) {
                     cm.worldMessage(6,"���踦 ã�� �������� ���� �� ������ ������ ���� �ݾƾ� �մϴ�.");
                     cm.sendNext("�ڳ׵��� �������� �ö�ź ���� ��� ������ �˰� �Ǿ��ٳ�. ����̾��� �༮����� ���� ���������� ����. �̴�ζ�� ���� �����״� �켱 �������� ������ ���� �ݾƾ� �Ұɼ�.");
                 } else {
                     cm.sendNext("��ȭ�� �����ϴ�.");
                     cm.dispose();
                 }
             } else if (selection == 1) {
                 cm.sendYesNo("����Ʈ�� �ߴ��ϰ� �� ������ �����ڳ�?");
             }
             rudy = selection;
         } else if (status == 2) {
             if (rudy == 0) {
                 if (cm.getMapId() == 925100100) {
                     cm.sendNextPrev("������ Ǫ�µ� �ʿ��� ���� #b������ ��ǥ#k���. �������� �����ϴ� ��������. �������� ���� �տ� �������� �����ϸ� ������ �ڿ��� Ǯ���ɼ�. �׷��� �̰��� �ִ� �������� ����� #b������ ��ǥ#k�� ���� ������ �ָ�, ��Ż�� ������ Ǯ�� ���ڳ�.");
                 } else if (cm.getMapId() == 925100400) {
                     cm.sendNextPrev("���� �ݴµ� �ʿ��� #b������ �迭��#k�� �������� ������ �����ɼ�. �׵��� ����ġ�� �������� ���� �ݰԳ�!");
                     cm.dispose();
                 }
             } else if (rudy == 1) {
                 cm.getEventInstance().unregisterPlayer(cm.getPlayer());
                 cm.warp(925100700,0);
                 cm.dispose();
             }
         } else if (status == 3) {
             cm.sendNextPrev("���� �� �������� �������� �ɼ�. �׵��� ����ġ�� #b���� ������ ��ǥ#k�� 20�� �̻� ���ؿ��Գ�.");
         } else if (status == 4) {
             cm.getEventInstance().setProperty("DavyzonePQ_Monster","0");
             cm.getPlayer().spawnDavyMonster();
             cm.dispose();
         }
     }
 }



