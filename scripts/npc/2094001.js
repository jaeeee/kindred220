function start() {
     status = cm.getMapId() == 925100500 ? -1 : 1;
     action(1, 0, 0);
 }

 function action(mode, type, selection) {
     if (mode != 1) {
         cm.dispose();
         return;
     } else 
         status++;
     if (status == 0) {
         cm.sendNext("���� �����ּż� ���� �����մϴ�. ���� ������ �������鵵 ������ �������� ���迡�� ����� �� �ſ���. �׷� ������ ������ �帮�ڽ��ϴ�. �ۿ��� �ٽ� ���� �ɾ� �ּ���.");
     } else if (status == 1) {
         cm.getEventInstance().unregisterPlayer(cm.getPlayer());
         cm.warp(925100600,0);
         cm.dispose();
     } else if (status == 2) {
         var gift = "#b������#k�� ����ġ�� ���� �����ּż� ���� �����մϴ�. ������ ���͵帱���?#b\r\n";
         gift += "\r\n#L0#�������� ���� ������ �޴´�.";
         gift += "\r\n#L1#�̰����� �����Ѵ�.";
         cm.sendSimple(gift);
     } else if (status == 3) {
         if (selection == 0) {
             if (cm.getPlayer().getKeyValue("DavyzonePQ_Gift") == 0) {
                 cm.sendNext("��" + cm.getPlayer().getKeyValue("DavyzonePQ_KillMonster") + "������ ���͸� óġ�ϼ̳׿�. ������ ��������" + ((cm.getPlayer().getKeyValue("DavyzonePQ_KillMonster") - (cm.getPlayer().getKeyValue("DavyzonePQ_KillMonster") % 10)) / 10) + "���� �帮�ڽ��ϴ�.");
             } else {
                 cm.sendOk("�̹� ���������� �����̳׿�.");
                 cm.dispose();
             }
         } else if (selection == 1) {
             cm.warp(925100700,0);
             cm.dispose();
         }
     } else if (status == 4) {
         cm.getPlayer().setKeyValue("DavyzonePQ_Gift","1");
         cm.gainItem(4001455,(cm.getPlayer().getKeyValue("DavyzonePQ_KillMonster") - (cm.getPlayer().getKeyValue("DavyzonePQ_KillMonster") % 10)) / 10);
         cm.dispose();
     }
 }



