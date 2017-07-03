
/*

자쿰 본섭화 스크립트
제작자 : 가군(qor6101@naver.com)

*/

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
         if (cm.haveItem(4031061,1)) {
             cm.sendNext("1단계를 훌륭히 해냈군 그래. 좋아... 자네를 #b아도비스#k가 있는 밖으로 내보내 주겠네. 그 전에! 이곳에서 얻은 특수한 아이템들은 밖으로 가지고 나갈 수 없게 되어 있네. 내보내 주면서 강제로 그 물건을 빼앗을 수도 있으니 참고해 주게나. 그럼 잘가게!");
         } else {
             cm.sendNext("도중에 포기한 모양이로군. 좋아... 자네를 지금 당장 밖으로 내보내 주겠네. 하지만 그 전에! 이곳에서 얻은 특수한 아이템들은 밖으로 가지고 나갈 수 없게 되어 있네. 내보내 주면서 강제로 다 물건을 빼앗을 수도 있으니 참고해 주게나. 그럼 잘가게!");
         }
     } else if (status == 1) {
         cm.removeAll(4001015);
         cm.removeAll(4001016);
         cm.removeAll(4001018);
         cm.warp(211042300,0);
         cm.dispose();
     }
 }
