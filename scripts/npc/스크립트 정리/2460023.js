function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; } if (mode == 1) status++; else status--;

       if (status == 0) {
	    var chat = "#e<파티 : 보스원정대>#n\r\n\r\n"
	    chat += "안녕하세요. 리안 월드 여러분 저는 참 궁금한 점이 많아요. 왜냐면 저희가 석상이 되어 있는 동안 리안 월드가 옛날과 다르게 그것도 엄청 다르게 변해있었습니다. "; 
                    chat += "주변에서 말하는 것을 저는 들었습니다. #r검은 마법사#k가 수많은 보스들을 데리고 리안 월드를 공격하고 있는다는 것을 그래서 여러분들의 도움이 필요합니다. 도와주세요!!\r\n";
	    chat += "\r\n#r( 권장 레벨 : 100이상 )";
                    chat += "\r\n#b#L1# 자쿰 원정대 #l";
	    chat += "#L2# 카오스 자쿰 원정대 #l\r\n";
	    chat += "\r\n#r( 권장 레벨 : 120이상 )";
	    chat += "\r\n#b#L3# 노말 혼테일 원정대 #l";
	    chat += "#b#L4# 카오스 혼테일 원정대 #l\r\n";
	    chat += "\r\n#r( 권장 레벨 : 160이상 )";
	    chat += "\r\n#b#L5# 핑크빈 원정대 #l";
	    chat += "#b#L6# 카오스 핑크빈 원정대 #l\r\n";
	    chat += "\r\n#r( 권장 레벨 : 140이상 )";
	    chat += "\r\n#b#L7# 반 레온 원정대 #l";
	    chat += "#b#L8# 아카이럼 원정대 #l";
	    chat += "#b#L9# 힐라 원정대 #l\r\n";
	    chat += "\r\n#r( 권장 레벨 : 170이상 )";
	    chat += "\r\n#b#L10# 시그너스 원정대 #l";
	    chat += "#b#L11# 매그너스 원정대 #l";

	    cm.sendSimple(chat);

             } else if (selection == 1) {
		cm.warp(211042400);
		cm.dispose();

             } else if (selection == 2) {
		cm.warp(211042401);
		cm.dispose();

             } else if (selection == 3) {
		cm.warp(240050400);
		cm.dispose();

             } else if (selection == 4) {
		cm.warp(240050400);
		cm.dispose();

             } else if (selection == 5) {
		cm.warp(270040000);
		cm.dispose();

             } else if (selection == 6) {
		cm.warp(270040000);
		cm.dispose();

             } else if (selection == 7) {
		cm.warp(230030101);
		cm.dispose();

             } else if (selection == 8) {
		cm.warp(230030101);
		cm.dispose();

             } else if (selection == 9) {
		cm.warp(230030101);
		cm.dispose();

            } else if (selection == 10) {
		cm.warp(230030101);
		cm.dispose();

            } else if (selection == 11) {
		cm.warp(109090000,0);
		cm.dispose();
	    cm.dispose();
		}
    	}
}

