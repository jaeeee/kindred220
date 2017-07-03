


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	정글러 에 의해 만들어 졌습니다.

	엔피시아이디 : 2510012

	엔피시 이름 : 하얀 마법사

	엔피시가 있는 맵 : 메이플로드 : 단풍나무 언덕 (10000)

	엔피시 설명 : MISSINGNO


*/

var status = 0;

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
		var petbuy2 = "#L1##b신규펫을 구매하겠습니다!\r\n";
		cm.sendSimple(petbuy2);

        } else if (status == 1) {
	if (selection == 0) {
		cm.sendOk("#b친구#k가 무엇이냐고요??\r\n\r\n#b친구#k란 여러분이 #b펫#k이라 부르는것와 같습니다.");
		cm.dispose();

	} else if (selection == 1) {
		var petbuy = "한마리 골라보세요. 소중히다루셔야해요!\r\n";

		petbuy += "#b\r\n#L0##i5000290#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L1##i5000291#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L2##i5000292#를 선택합니다.#e (3.000.000)#n\r\n#k#l";
		petbuy += "#b\r\n#L3##i5000249#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L4##i5000250#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L5##i5000251#를 선택합니다.#e (3.000.000)#n\r\n#k#l";
		petbuy += "#b\r\n#L9##i5000089#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L10##i5000090#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L11##i5000091#를 선택합니다.#e (3.000.000)#n\r\n#k#l";
		petbuy += "#b\r\n#L12##i5000217#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L13##i5000221#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L14##i5000237#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L15##i5000201#를 선택합니다.#e (3.000.000)#n";
		petbuy += "#b\r\n#L6##i5000330#를 선택합니다.#e (3.000.000)#n";
		petbuy += "\r\n#L7##i5000331#를 선택합니다.#e (3.000.000)#n";
 	        petbuy += "\r\n#L8##i5000332#를 선택합니다.#e (3.000.000)#n\r\n#k#l";
		petbuy += "\r\n#L16##i5000225#를 선택합니다.#e (3.000.000)#n\r\n#k#l";
		cm.sendSimple(petbuy);

	} else if (selection == 2) {
               cm.dispose();
               cm.openNpc(9020004);
	}

        //천사
        } else if (status == 2) {
	if (selection == 0) {
		if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000290);
		cm.gainMeso(-3000000);
		cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
		cm.dispose();
	} else {
		ccm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
		cm.dispose();
	}
        } else if (selection == 1) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000291);

		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        } else if (selection == 2) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000292);

		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        //곰돌이
        } else if (selection == 3) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000249);

		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        } else if (selection == 4) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000250);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
	} else if (selection == 5) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000251);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        //군단장
        } else if (selection == 6) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000330);

		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        } else if (selection == 7) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000331);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
	} else if (selection == 8) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000332);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        //유니콘
        } else if (selection == 9) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000089);

		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        } else if (selection == 10) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000090);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
	} else if (selection == 11) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000091);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }


        //기타
        } else if (selection == 12) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000217);

		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        } else if (selection == 13) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000221);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
	} else if (selection == 14) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000091);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
        } else if (selection == 15) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000201);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }
	} else if (selection == 16) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000225);
		cm.gainMeso(-3000000);
                cm.sendOk("축하드립니다.친구가 당신을 선택하였군요.");
                cm.dispose();
        } else {
                cm.sendOk("최소한 친구를 같이 할 능력은 되어야하지 않겠습니까?");
        }


     }
   }
 }
}
