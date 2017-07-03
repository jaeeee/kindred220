var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
    cm.sendSimple ("#e< 랭킹 : 모든 랭킹 >#n\r\n\r\n저는 랭킹을 알려주는 랭킹 게시판입니다. 원하시는 것을 아래 항목에서 선택해주세요\r\n\r\n" +"#L81##r[ New ] #b레벨 랭킹#k" +"#k#L82##r[ HOT ] #b축복 포인트 랭킹#k");
      
       } else if (selection == 81) {
        cm.dispose();
        cm.openNpc(1400003);
       } else if (selection == 82) {
        cm.dispose();
        cm.openNpc(1002009);

     


      	    } 
         }
      }