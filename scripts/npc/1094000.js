var status = 0;
var time = "#fUI/UIToolTip/Item/Equip/Star/Star#"
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
    cm.sendSimple ("안녕하세요?\r\n저는 미니게임/도박을 맡고있는 #b바트#k 라고합니다.\r\n" + "#k\r\n#L1##r"+time+" 지뢰찾기#k 게임을 이용하겠습니다." +"\r\r#k#L91##b"+time+" 원하는배팅#k 도박을 하겠습니다." +"#k\r\n#L81##b"+time+" 룰렛#k 도박을 하겠습니다." +"#k\r\n#L82##b"+time+" 가위바위보#k 도박을 하겠습니다." +"#k\r\n#L84##b"+time+" 빙고#k 도박을 하겠습니다." +"#k\r\n#L85##b"+time+" 인디언홀덤#k 도박을 하겠습니다.");
      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(9001001);
      } else if (selection == 81) {
        cm.dispose();
        cm.openNpc(9074006);
      } else if (selection == 82) {
        cm.dispose();
        cm.openNpc(9000019);
      } else if (selection == 84) {
        cm.dispose();
        cm.openNpc(1022002);
      } else if (selection == 85) {
        cm.dispose();
        cm.openNpc(1102003);
      } else if (selection == 91) {
        cm.dispose();
        cm.openNpc(9010018);
  
      	    } 
         }
      }