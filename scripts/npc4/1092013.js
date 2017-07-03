/*

제작자 : ljw5992@naver.com / dbg_yeane@nate.com
기능 수정 : time_amd@nate.com

*/

 

var status = -1;

function start() {
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        /*
        상점 셀렉션은 0부터 99까지
        이동 셀렉션은 100부터 199까지
        컨텐츠 셀렉션은 200부터 299까지
        운영자 설렉션은 300부터 399까지
        */
        var choose = "#fs 13#< 후원상점 >#k\r\n";
        //choose += "#L4##fn돋움##r[추석이벤트]후원 상점#k\r\n";
        choose += "#L1##fn돋움##fs 12##b후원 상점#k\r\n";       
        choose += "#L2##fs 12##b후원 상점2(남자)#k\r\n";
        choose += "#L3##fs 12##b후원 상점2(여자)#k\r\n";
        choose += "#L5##fs 12##e#b후원 강화[25성]#n\r\n";

        if (cm.getPlayer().hasGmLevel(100)){

  }
        cm.sendSimple(choose);

    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
            cm.enterCS();
            cm.dispose();
 } else if (s == 1) {
  cm.openNpc (1032005);
 } else if (s == 2) {
  cm.openNpc (2400010);
 } else if (s == 3) {
  cm.openNpc (1032100);
 } else if (s == 4) {
  cm.openNpc (1530200);
 } else if (s == 5) {
  cm.openNpc (1052125);
        }
    }
}
