/* 
                 Yang Online 1.2.169
                       양님 - b_b_secret@naver.com
*/
var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var str = "#e메이플스토리#n의 캐시교환 시스템입니다.\r\n아래목록에서 옵션을 선택해주세요.\r\n#b";
			str += "#L8#넥슨캐시를 메소로 교환합니다.#l\r\n";
			str += "#L9#메소를 넥슨캐시로 교환합니다.#l";
			cm.sendSimple(str);
		} else if (status == 1) {
				if (selection == 8) {
					var str1 = "교환하실 양의 넥슨캐시를 선택해주세요.#b\r\n";
					str1 += "#L0#넥슨캐시 1천원을 5만메소로 교환합니다.#l\r\n";
					str1 += "#L1#넥슨캐시 5천원을 30만메소로 교환합니다.#l\r\n";
					str1 += "#L2#넥슨캐시 1만원을 70만메소로 교환합니다.#l\r\n";
					str1 += "#L3#넥슨캐시 10만원을 400만메소로 교환합니다.#l";
					cm.sendSimple(str1);
				} else if (selection == 9) {
					var str2 = "교환하실 양의 넥슨캐시를 선택해주세요.#b\r\n";
					str2 += "#L4#10만메소를 2천캐시로 교환합니다.#l\r\n";
					str2 += "#L5#30만메소를 5천캐시로 교환합니다.#l\r\n";
					str2 += "#L6#70만메소를 1만캐시로 교환합니다.#l\r\n";
					str2 += "#L7#400만메소를 10만캐시로 교환합니다.#l\r\n";
					cm.sendSimple(str2);
				}
			
        } else if (status == 2) {
				if (selection == 0) {
					cm.sendOk("#b#h ##k님이 결제하신 내역입니다.\r\n\r\n#b얻는 메소 : 5만메소\r\n#r잃는 넥슨캐시 : 1천캐시");
					if (cm.getNX() >= 1000) {
						cm.gainMeso(50000);
						cm.getPlayer().modifyCSPoints(1, -1000, false);
						cm.dispose();
					}
				} else if (selection == 1) {
					cm.sendOk("#b#h ##k님이 결제하신 내역입니다.\r\n\r\n#b얻는 메소 : 30만메소\r\n#r잃는 넥슨캐시 : 5천캐시");
					if (cm.getNX() >= 5000) {
						cm.gainMeso(300000);
						cm.getPlayer().modifyCSPoints(1, -5000, false);
						cm.dispose();
					}
				} else if (selection == 2) {
					cm.sendOk("#b#h ##k님이 결제하신 내역입니다.\r\n\r\n#b얻는 메소 : 70만메소\r\n#r잃는 넥슨캐시 : 1만캐시");
					if (cm.getNX() >= 10000) {
						cm.gainMeso(700000);
						cm.getPlayer().modifyCSPoints(1, -10000, false);
						cm.dispose();
					}
				} else if (selection == 3) {
					cm.sendOk("#b#h ##k님이 결제하신 내역입니다.\r\n\r\n#b얻는 메소 : 400만메소\r\n#r잃는 넥슨캐시 : 10만캐시");
					if (cm.getNX() >= 100000) {
						cm.gainMeso(4000000);
						cm.getPlayer().modifyCSPoints(1, -100000, false);
						cm.dispose();
					}
				} else if (selection == 4) {
					cm.sendOk("#b#h ##k님이 결제하신 내역입니다.\r\n\r\n#b얻는 넥슨캐시 : 1천캐시\r\n#r잃는 메소 : 10만 메소");
					if (cm.getMeso() >= 100000) {
						cm.gainMeso(-100000);
						cm.getPlayer().modifyCSPoints(1, 1000, false);
						cm.dispose();
					}
				} else if (selection == 5) {
					cm.sendOk("#b#h ##k님이 결제하신 내역입니다.\r\n\r\n#b얻는 넥슨캐시 : 5천캐시\r\n#r잃는 메소 : 30만 메소");
					if (cm.getMeso() >= 300000) {
						cm.gainMeso(-300000);
						cm.getPlayer().modifyCSPoints(1, 5000, false);
						cm.dispose();
					}
				} else if (selection == 6) {
					cm.sendOk("#b#h ##k님이 결제하신 내역입니다.\r\n\r\n#b얻는 넥슨캐시 : 1만캐시\r\n#r잃는 메소 : 70만 메소");
					if (cm.getMeso() >= 700000) {
						cm.gainMeso(-700000);
						cm.getPlayer().modifyCSPoints(1, 10000, false);
						cm.dispose();
					}
				} else if (selection == 7) {
					cm.sendOk("#b#h ##k님이 결제하신 내역입니다.\r\n\r\n#b얻는 넥슨캐시 : 10만캐시\r\n#r잃는 메소 : 400만 메소");
					if (cm.getMeso() >= 4000000) {
						cm.gainMeso(-4000000);
						cm.getPlayer().modifyCSPoints(1, 100000, false);
						cm.dispose();
					}
				}
			}
		}
}