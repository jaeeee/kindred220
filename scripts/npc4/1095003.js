/*

본 스크립트는 스피릿스타일 운영 목적으로 제작되었습니다.

*/
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
		
		var chat = "안녕? 나는 #r발레리#k 라고해!";
		chat += "\r\n진정한 강함이 뭔지 궁금하다면 나에게 맞겨 보는건 어때?";
		chat += "\r\n그렇게한다면 내가 #r하이퍼 스킬#k을 알려 주도록 하지!!";
		chat += "\r\n\r\n#L0##b하이퍼 스킬을 배운다.#l";
		cm.sendSimple(chat);

	} else if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayer().getLevel() >= 140) {
				cm.HyperSkillMax();
				cm.sendOk("너의 레벨에 맞는 #r하이퍼 스킬#k을 마스터 시켰어!!");
				cm.dispose();
			} else {
				cm.sendOk("#r하이퍼 스킬#k은 레벨 140 이상부터 배울수 있다구!!");
				cm.dispose();
			}
		} 
}
}
}