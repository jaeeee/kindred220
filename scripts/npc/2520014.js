

/*

하요님이 그리운 멜론K(melon_dev@nate.com)
나의 11월달 마지막 작품이랄까?

*/

var status = -1;
var star = "#fUI/UIToolTip/Item/Equip/Star/Star#"

function start() {
    status = -1;
    action (1, 0, 0);
}


function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
    if (status == -1) {
       cm.dispose();
}
    if (status == 0) {
        var ask = "#e#b자격#n#k을 갖추신 분에게는 #e#r저의 힘#k#n을 나누어 드리겠습니다.\r\n\r\n"
            ask+= "#L0#"+star+"#b 어빌리티를 개방하기 위한 조건은 무엇인가요?\r\n";
            ask+= "#L1#"+star+"#b 어빌리티 재설정은 어떻게 하는 것인가요?\r\n";
         //   ask+= "#L2#"+star+"#b 지금 어빌리티를 개방해 보겠습니다.";
        cm.sendSimple(ask);
        return;
     } else if (status == 1) {
      if (selection == 0) {
        var how = "#r저의 힘#k을 받기 위해서는 아래와 같은 조건이 필요합니다.\r\n\r\n"; 
            how+= ""+star+" #r기타시스템에서 전구제거 를 하시면 모든\r\n";
            how+= ""+star+" #r어빌리티가 개방됩니다.";
            cm.sendOk(how);
            cm.dispose();
        } else if (selection == 1) {
        var reset = "#b어빌리티 재설정을 하려면 다음과 같은 아이템이 필요합니다.#k\r\n"
            reset+="#i2431174# #r[#t2431174#]#k\r\n이 아이템으로 명예치를 쌓아서 재설정 하실 수 있습니다.\r\n"
            reset+="#t2431174#는 모든몹에서 30%의 확률로 드랍됩니다."
            cm.sendOk(reset);
            cm.dispose();
            return;
       } else if (selection == 2) {
         if (cm.getPlayer().getLevel() < 130) {
            cm.sendOk("레벨이 #b130 이상#k되지 않으므로 힘을 드릴 수 없습니다.");
            cm.dispose();
         } else if (cm.getPlayer().getMeso() < 5000000) {
            cm.sendOk("메소가 부족해 힘을 드릴 수 없습니다.");
            cm.dispose();
          } else if (cm.getPlayer().getInnerLevel() >= 4) {
            cm.sendOk("이미 모든힘이 개방되었습니다.");
          } else {
            cm.getPlayer().innerLevelUp();
	    cm.getPlayer().dropMessage(6, "륀느에 의해 당신의 힘이 진화되었습니다.");
            cm.gainMeso(-5000000);
            cm.reloadChar();
            cm.dispose();
        }
       
}
}

    }


    

