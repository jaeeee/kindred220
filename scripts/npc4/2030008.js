/* ���� ����ȭ ��ũ��Ʈ
   ������ : ����(qor6101@naver.com) */

 var status = 0;
 var selectioned = 0;
 var selectiones = 0;
 var selectionet = 0;

 

 function start() {
     status = -1;
     action(1, 0, 0);
 }

 

 function action(mode, type, selection) {
     if (mode == -1) {
         cm.dispose();
     } else {
         if (mode == 0 || (mode == 0 && status == 1)) {
             cm.sendNext("�׷���... ������ ������ ������ �������ٸ� �ٽ� �� ã�ƿ� �ֱ� �ٶ��.");
             cm.dispose();
             return;
         }
         if (mode == 1)
             status++;
         else
             status--;
         if (status == 0) {
             if (cm.getQuestStatus(100000) == 1) {
                 var adobis = "��... ����. ��ŵ��� ����� �ڰ��� �Ǿ� ���̴±�. ��� �ܰ迡 ������ ���ڼ�?#b\r\n";
                 adobis += "\r\n#L0#�� ������ �����Ϸ� ������. (1�ܰ�)";
                 adobis += "\r\n#L1#���� ������ Ž���Ѵ�. (2�ܰ�)";
                 adobis += "\r\n#L2#������ ��û�Ѵ�. (3�ܰ�)";
                 adobis += "\r\n#L3#����Ʈ�� ���� ������ ��´�.";
                 cm.sendSimple(adobis);
             } else {
                 cm.sendNext("�� ���� ȥ�ڼ��� ���� �ذ��� �� ���� �̱����� ������ ����. Ȥ�ö� ������ ���� �ʹٸ� �������� ����� ������ �ִ� �� ������ ��ο��� ����Ʈ�� �޾ƿ����� �ϰ�.");
                 cm.dispose();
             }
         } else if (status == 1) {
             if (selection == 0) {
            if (cm.getPlayer().getParty() == null) {
                cm.sendOk("����Ʈ�� �޾ƿ� �� ��Ƽ�� �ξ� ��Ƽ���� ������ ���� �ɸ� �������� ����Ʈ�� ������ �� �ִٳ�. ��� �غ� �����ٸ� ��Ƽ������ ������ ���� �ɶ�� �����ְԳ�.");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.sendOk("����Ʈ�� �޾ƿ� �� ��Ƽ�� �ξ� ��Ƽ���� ������ ���� �ɸ� �������� ����Ʈ�� ������ �� �ִٳ�. ��� �غ� �����ٸ� ��Ƽ������ ������ ���� �ɶ�� �����ְԳ�.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("����Ʈ�� �޾ƿ� �� ��Ƽ�� �ξ� ��Ƽ���� ������ ���� �ɸ� �������� ����Ʈ�� ������ �� �ִٳ�. ��� �غ� �����ٸ� ��Ƽ������ ������ ���� �ɶ�� �����ְԳ�.");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("PartyQuest");
            if (em == null) {
                cm.sendOk("��Ƽ����Ʈ�� ���� ������ ����� ����. �̾������� ������ ������ �� ���ڳ�.");
                cm.dispose();
                return;
            }
            var eim = em.readyInstance();
            eim.setProperty("Global_StartMap", 280010000+"");
            eim.setProperty("Global_ExitMap", 280090000+"");
            eim.setProperty("Global_MinPerson", 1+"");
            eim.setProperty("Global_RewardMap", 280090000+"");
            eim.startEventTimer(1800000);
            eim.registerParty(cm.getParty(), cm.getPlayer().getMap());
            cm.dispose();
             } else if (selection == 1) {
                 if (cm.getQuestStatus(100001) < 2) {
                     cm.sendNext("�ڳ״� 1�ܰ踦 �������� �� ���� �׷�. 2�ܰ踦 �����ϱ� ���ؼ��� 1�ܰ踦 ���������� Ŭ���� �� ���¿��߸� �ϳ�. �켱 1�ܰ踦 Ŭ���� �ϰԳ�.");
                     cm.dispose();
                 } else if (cm.getQuestStatus(100002) == 2) {
                     cm.sendYesNo("��... �ڳ״� �̹� 2�ܰ踦 Ŭ���� �� ���� �ִ� ����̷α�. ������ ���Ѵٸ� �������� �� ������ �����ϴٳ�. ���... �ٽ� �� �� 2�ܰ迡 ������ ���ڴ°�?");
                 } else if (cm.getPlayer().getMap(), "Quest_Zakum01", "1") {
                     cm.sendYesNo("�ڳ״� 1�ܰ踦 ������ Ŭ���� �߱� �׷�. ������ ���� ���� ���� ������ ������ ���ؼ��� ���� ������ ��������. ���... 2�ܰ迡 ������ ���ڴ°�?");
                 } else {
                     cm.sendYesNo(" ");
                 }
             } else if (selection == 2) {
                 if (cm.getQuestStatus(100002) < 2) {
                     cm.sendNext("���� �ڳ״� ���� �ܰ踦 Ŭ���� ���� ���� �� ����. ���� �ܰ踦 Ŭ���� �� �Ŀ� �ٽ� �õ��� �ֱ� �ٶ��.");
                     cm.dispose();
                 } else if (cm.getQuestStatus(100003) == 2) {
                     cm.sendYesNo("��... �ڳ״� ������ #b���� ��#k�� ������ �� ����� �ƴѰ�. �׷��� ������ ���� �����ΰ�. �ٽ� �� �� #b���� ���� ����#k�� #bȭ���� ����#k�� �����Ͽ� #b���� ��#k�� ����� ���ٰ�?");
                 } else {
                     cm.sendYesNo("�ڳ״� 2�ܰ踦 ������ Ŭ���� �߱� �׷�. ������ ���� ���� ���� ������ ������ ���ؼ��� ������ ������ ���� �ִٳ�. ���... ���ݱ��� ��ƿ� �繰�� �����ؼ� ����� �� �� �ٰ�?");
                 }
             } else if (selection == 3) {
                 cm.sendNext("��� �ؾ��ϴ��� ���� ������ �ʴ� ����̷α���? �� ����Ʈ�� �Ϸ��� ����� ������ ���� ����Ʈ ���� ������ �޾ƿ;� �ϳ�. �׷��� �ʰ� �鿩���´ٰ� �߱� �ޱ� �ȴٱ�... ����Ʈ�� �޾ƿ� �̵�θ� ��Ƽ�� ������ �鿩���� �� �ֳ�.");
             }
         selectioned = selection;
         } else if (status == 2) {
             if (selectioned == 1) {
                 cm.sendNext("����! �������� �ڳ׸� �� ���� ��ֹ����� �ִ� ������ �̵��� ���ϼ�. �װ��� ���� ���ʿ��� �������ڰ� �ִµ� �������ڸ� �����ϸ� ������ ��ȯ�ϴ� �� �ʿ��� �������� ��� �� �ϳ��� ���� �� ���� �ž�. ��Ḧ �� ������ ������ �ְԳ�. �׷� �����ְ�!");
             } else if (selectioned == 2) {
                 cm.sendNext("��, #b���� ���� ����#k�� #bȭ���� ����#k�� �����ϸ� ������ �θ��µ� ������ ���ľ� �ϴ� �������� #b���� ��#k�� ���� �� ����. ������... ����...! ���ٽ��� ���� ���� �ʾ� ���� ���ϱⰡ ���� ������ �ƴ϶��. �׷��� Ȥ, #b������ ���� 30��#k�� ���ش� �� �� �ּ�? ��� �� ���� ���� ����... ����...");
             } else if (selectioned == 3) {
                 cm.sendNextPrev("������� �����س����� ��������� ������ ���� �� ���� �ɼ�. ���� ��ƿ���� ���� ��ƿ��� ������ ������ְڳ�. �� ������ ���ܿ� ��ġ���. �׷� ����� ���ϴ� �� ���� �� ���̳�. �׷��� ���ؼ��� ���� �� ������ �����Ͽ� #b���� ����#k�� �����;� �Ѵٳ�.");
             }
             selectiones = selectioned;
         } else if (status == 3) {
             if (selectiones == 1) {
                 if (cm.getQuestStatus(100002) < 2) {
                     cm.forceStartQuest(100002);
                 }
            var em = cm.getEventManager("PartyQuest");
            var eim = em.readyInstance();
            eim.setProperty("Global_StartMap", 280020000+"");
            eim.setProperty("Global_ExitMap", 280090000+"");
            eim.setProperty("Global_MinPerson", 1+"");
            eim.setProperty("Global_RewardMap", 280090000+"");
            eim.registerParty(cm.getParty(), cm.getPlayer().getMap());
            cm.dispose();
             } else if (selectiones == 2) {
                 if (cm.haveItem(4031061,1) && cm.haveItem(4031062,1) && cm.haveItem(4000051,30)) {
                     cm.sendNext("������, ������ȭ�� ���� �ݼ� ������ְڳ�.");
                 } else {
                     cm.sendNext("���� #b������ ���� 30��#k�� ���ؿ��� ���� �� ���� �׷�. �̰͸� ��ƿ� �شٸ� �׵��� �ڳ׵��� ������ �� ���� �����ؼ� Ư���� ������ ������� ���� �� ������ ������. ����, ���� �ܰ迡�� ���� #b���� ����#k�� #bȭ���� ����#k�� ���� ��ƿ;� �Ѵٴ� ���� ���� ����.");
                     cm.dispose();
                 }
             } else if (selectiones == 3) {
                 cm.sendNextPrev("�ű�� #b���� ����#k �ܿ��� ���̹����� �߰��� �� ���� �ɼ�. �װ� #b�ƿ��#k���� �������ָ� ������ �Ǵ� ���� ������� �ž�. ������ ������븦 �ǳʰ� #bȭ���� ����#k�� ���ؿ;� �Ѵٳ�. �賭�� ���̰�����... ������ ����� ���ؼ��� �ݵ�� �ʿ��� ���̶��.");
             }
             selectionet = selectiones;
         } else if (status == 4) {
             if (selectionet == 2) {
                 cm.gainItem(4031061,-1);
                 cm.gainItem(4031062,-1);
                 cm.gainItem(4000051,-30);
                 cm.gainItem(4001017,5);
                 cm.forceCompleteQuest(100003);
                 cm.sendNext("������. ��, ���� �� ���� ������ ������ �� �� ���� �ɼ�. �� #b���� ��#k�� ���� �־�߸� ���� ���� ������ �� �� �ִٳ�. ��, �� ����� ������ �����ϴٴ���...");
                 cm.dispose();
             } else if (selectionet == 3) {
                 cm.sendPrev("#bȭ���� ����#k���� ���ߴٸ� 1, 2�ܰ迡�� ���� #b���� ���� ����#k�� #bȭ���� ����#k�� �����ϴ� ���� �ʿ��ϴٳ�. ������ ���� �� �� ������ ���� ����. �� ���� �����ٸ� ������ ������ ������ �ϸ� ���� ����. ���� ������ �ʰ����� ������ �� ���Գ�.");
                 cm.dispose();
             }
         }
     }
 }  