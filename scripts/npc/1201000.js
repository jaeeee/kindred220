/*

Copyright ⓒ 2013 Spirit Corporaion. All Rights Reserved.

leader.스피릿온라인 (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.우비 (guri__s@nate.com)
Make.공석 (iureal@nate.com)

이 스크립트는 스피릿온라인에만 사용됩니다.
만약 유출이 되더라도 이 주석은 삭제하지 않으셨으면 좋겠습니다.

*/

var status = 0;
var jessicaj = new Array(15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
var jessicarebirth = new Array(20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);

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
		var jessica = "안녕하세요.\r\n";
		jessica += "#r환생#k을 담당하고있는 #b리린#k입니다.\r\n\r\n#b";
		jessica += "#L0#환생이 뭔가요?\r\n";
		jessica += "#L1#환생을 부탁드립니다.";
		cm.sendSimple(jessica);

	} else if (status == 1) {
		if (selection == 0) {
			var jessica2 = "#r환생#k이란?\r\n\r\n#b";
			jessica2 += "레벨 250 > 200\r\n";
			jessica2 += "Abillit Points 15 ~ 30 랜덤 지급\r\n";
			jessica2 += "환생포인트 20 ~ 30 랜덤 지급\r\n\r\n#k";
			jessica2 += "#e새롭게#n 다시 태어나는것을 말합니다.";
			cm.sendPrev(jessica2);
			cm.dispose();

		} else if (selection == 1) {
			var jessica = jessicaj[Math.floor(Math.random() * jessicaj.length)];
			var jessica2 = jessicarebirth[Math.floor(Math.random() * jessicarebirth.length)];
			var Jessica = cm.getPlayer().getRebirth() + jessica2;
			if (cm.getPlayer().getLevel() == 250) {
				cm.getPlayer().setLevel(200);
				cm.gainAp(jessica);
				cm.getPlayer().setRebirth(Jessica);
				cm.getPlayer().saveToDB(false, false);
				cm.reloadChar();
				cm.sendOk("#bAbillit Points + " + jessica + "\r\n환생 포인트 + " + jessica2 + "\r\n환생 포인트 합계 : " + cm.getPlayer().getRebirth() + "\r\n\r\n#r새롭게 다시 태어나신걸 축하드립니다.");
				cm.dispose();
			} else {
				cm.sendOk("#r필요 조건#k\r\n\r\n#b레벨 250\r\n#k다시 태어나실만큼 강하지 못하시군요.");
				cm.dispose();
				}
}
}
}
}