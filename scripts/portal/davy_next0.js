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
         pi.playerMessage("모든 몬스터를 물리쳐야 다음 장소로 이동할 수 있습니다.");
     }
 }


