function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; } if (mode == 1) status++; else status--;


        if (status == 0) {
	    var chat = "기초를 다지려면 여기가 제격이지. 어디에서 수련할래?\r\n#b"
	    chat += "#L1#모험가의 수련장1\r\n"; 
                    chat += "#L2#모험가의 수련장2\r\n";
	    chat += "#L3#모험가의 수련장3\r\n";
	    chat += "#L4#모험가의 수련장4\r\n";

	    cm.sendSimple(chat);

             } else if (selection == 1) {
		cm.warp(1010100,0); // 메이플로드 - 모험가 수련장1
		cm.dispose();

             } else if (selection == 2) {
		cm.warp(1010200,0); // 메이플로드 - 모험가 수련장2
		cm.dispose();

             } else if (selection == 3) {
		cm.warp(1010300,0); // 메이플로드 - 모험가 수련장3
		cm.dispose();

             } else if (selection == 4) {
		cm.warp(1010400,0); // 메이플로드 - 모험가 수련장4
		cm.dispose();
	    cm.dispose();
		}
    	}
}

