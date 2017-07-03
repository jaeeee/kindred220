function enter(pi) {
     var keyValue = ["Gate","Token_1","Token_2","Token_3"];
     if (pi.getPlayer().getEventInstance().getProperty("DavyzonePQ_Gate") == 1) {
         var em = pi.getEventManager("PartyQuest").readyInstance();
         pi.getEventInstance().unregisterAll();
         em.setProperty("StartMap",925100100 + "");
         em.setProperty("LeaveMap",925100700 + "");
         em.startEventTimer(420000);
         em.registerParty(pi.getParty(),pi.getMap());
         for (i = 0; i < 4; i++) {
             pi.getEventInstance().setProperty("DavyzonePQ_" + keyValue[i],"0");
         }
         pi.getEventInstance().setProperty("DavyzonePQ_Monster",null);
     } else {
         pi.playerMessage("��� ���͸� �����ľ� ���� ��ҷ� �̵��� �� �ֽ��ϴ�.");
     }
 }


