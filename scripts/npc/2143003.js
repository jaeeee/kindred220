/*
만든이:권씨아저씨(nicky8209)
기사단 요새:정령의 터
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
                var spir = "정령의 터로 가려는거군. 아 참, 새로운 정령의 터가 발견되었어. 시그너스 정원 열쇠를 이곳에서 구할 수 있는거라며? 평화를 위해 계속 노력해 줘.#b\r\n";
                spir += "\r\n#L0#소울(빛)을 잡으러 가겠습니다."; 
                spir += "\r\n#L1#플레임(화염)을 잡으러 가겠습니다.";
                spir += "\r\n#L2#스톰(바람)을 잡으러 가겠습니다.";
                spir += "\r\n#L3#다크니스(어둠)를 잡으러 가겠습니다.";
                spir += "\r\n#L4#라이트닝(번개)을 잡으러 가겠습니다.";
                cm.sendSimple(spir);	
        } else if (status == 1) {
		if (selection == 0) {
		    cm.warp(271030201,1);
		    cm.dispose();
		} else if (selection == 1) {
            	    cm.warp(271030202,1);
            	    cm.dispose();
            	} else if (selection == 2) {
            	    cm.warp(271030203,1);
            	    cm.dispose();
            	} else if (selection == 3) {
            	    cm.warp(271030204,1);
            	    cm.dispose();
            	} else if (selection == 4) {
            	    cm.warp(271030205,1);
            	    cm.dispose();
	        }
	    }
	}
    }