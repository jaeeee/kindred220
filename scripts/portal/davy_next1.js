function enter(pi) {
     if (pi.getPlayer().getEventInstance().getProperty("DavyzonePQ_Gate") == 1) {
         var em = pi.getEventManager("PartyQuest").readyInstance();
         pi.getEventInstance().unregisterAll();
         em.setProperty("StartMap",925100400 + "");
         em.setProperty("LeaveMap",925100700 + "");
         em.startEventTimer(300000);
         em.registerParty(pi.getParty(),pi.getMap());
         pi.getEventInstance().setProperty("DavyzonePQ_Gate","0");
     } else {
         pi.playerMessage("������ ��Ż�� ���εǾ� �ֽ��ϴ�.");
     }
 }


