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
         cm.sendNext("저를 구해주셔서 정말 감사합니다. 이제 가엾은 도라지들도 포악한 데비존의 지배에서 벗어나게 될 거에요. 그럼 밖으로 내보내 드리겠습니다. 밖에서 다시 말을 걸어 주세요.");
     } else if (status == 1) {
         cm.getEventInstance().unregisterPlayer(cm.getPlayer());
         cm.warp(925100600,0);
         cm.dispose();
     } else if (status == 2) {
         var gift = "#b데비존#k을 물리치고 저를 구해주셔서 정말 감사합니다. 무엇을 도와드릴까요?#b\r\n";
         gift += "\r\n#L0#데비존의 모자 조각을 받는다.";
         gift += "\r\n#L1#이곳에서 퇴장한다.";
         cm.sendSimple(gift);
     } else if (status == 3) {
         if (selection == 0) {
             if (cm.getPlayer().getKeyValue("DavyzonePQ_Gift") == 0) {
                 cm.sendNext("총" + cm.getPlayer().getKeyValue("DavyzonePQ_KillMonster") + "마리의 몬스터를 처치하셨네요. 데비존 모자조각" + ((cm.getPlayer().getKeyValue("DavyzonePQ_KillMonster") - (cm.getPlayer().getKeyValue("DavyzonePQ_KillMonster") % 10)) / 10) + "개를 드리겠습니다.");
             } else {
                 cm.sendOk("이미 모자조각을 받으셨네요.");
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



