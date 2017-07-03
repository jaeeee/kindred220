var status = 0;

 

 function start() {
     status = -1;
     action(1, 0, 0);
 }

 

 function action(mode, type, selection) {
     if (mode == 1) 
         status++;
     else 
         status--;
     if (status == 0) {
         cm.sendNext("저 험한 길을 어떻게 건너 온 거에요? 대단해요. #b화산의 숨결#k은 여기 있습니다. 이걸 오빠에게 전해주세요. 이제 곧 당신들이 원하는 것을 만나게 되겠군요.");
     } else if (status == 1) {
         cm.gainItem(4031062,1);
         cm.getEventInstance().unregisterPlayer(cm.getPlayer());
         cm.warp(211042300,0);
         cm.forceCompleteQuest(100002);
         cm.dispose();
     }
 }