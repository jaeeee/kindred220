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
         cm.sendNext("�� ���� ���� ��� �ǳ� �� �ſ���? ����ؿ�. #bȭ���� ����#k�� ���� �ֽ��ϴ�. �̰� �������� �����ּ���. ���� �� ��ŵ��� ���ϴ� ���� ������ �ǰڱ���.");
     } else if (status == 1) {
         cm.gainItem(4031062,1);
         cm.getEventInstance().unregisterPlayer(cm.getPlayer());
         cm.warp(211042300,0);
         cm.forceCompleteQuest(100002);
         cm.dispose();
     }
 }