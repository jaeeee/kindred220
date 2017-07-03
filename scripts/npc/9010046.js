var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status--;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        var chat = "원하시는 충전금액을 고르시면됩니다~ 환불은 절대안되요!#b"
            chat += "#k\r\n#L1##b100,000 메소로 1000 캐시 바꾸기";
	    chat += "#k\r\n#L2##b1,000,000 메소로 10,000 캐시 바꾸기";
            chat += "#k\r\n#L3##b10,000,000 메소로 100,000 캐시 바꾸기";
	    cm.sendSimple(chat);
	} else if (status == 1) {
 	  if (selection == 1) {
              if (cm.getPlayer().getMeso() >= 100000) {
                  cm.sendOk ("100000 메소를 1000 캐시로 교환하였습니다!");
                  cm.gainMeso (-100000);
                  cm.gainNX (1000);
                  cm.dispose();
              } else {
                  cm.sendOk ("메소가 부족합니다!");
                  cm.dispose();
              }
          } else if (selection == 2) {
              if (cm.getPlayer().getMeso() >= 1000000) {
                  cm.sendOk ("1000000 메소를 10000 캐시로 교환하였습니다!");
                  cm.gainMeso (-1000000);
                  cm.gainNX (10000);
                  cm.dispose();
              } else {
                  cm.sendOk ("메소가 부족합니다!");
                  cm.dispose();
              }
          } else if (selection == 3) {
              if (cm.getPlayer().getMeso() >= 10000000) {
                  cm.sendOk ("1000000 메소를 100000 캐시로 교환하였습니다!");
                  cm.gainMeso (-10000000);
                  cm.gainNX (100000);
                  cm.dispose();
              } else {
                  cm.sendOk ("메소가 부족합니다!");
                  cm.dispose();
              }
          }
        }
}