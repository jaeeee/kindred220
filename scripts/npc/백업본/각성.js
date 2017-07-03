/*

Copyright ⓒ 2013 Spirit Corporaion. All Rights Reserved.

leader.단풍잎온라인
이 스크립트는 단풍잎온라인에만 사용됩니다.
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
		var jessica = "반가워!!\r\n";
		jessica += "나는 #r각성#k을 담당하고있는 #r발레리#k라고해!!\r\n#b";
                jessica += "#r" + cm.getPlayer().getName() + "#k 너의 성배포인트는 #b" + cm.getPlayer().getSSpirit() + " #k포인트 만큼있어.\r\n#b";
		jessica += "#L0#각성이 뭔지 궁금해!!\r\n";
		jessica += "#L1#각성을 부탁할게";
		cm.sendSimple(jessica);

	} else if (status == 1) {
		if (selection == 0) {
			var jessica2 = "#r각성#k이란?\r\n\r\n#b";
			jessica2 += "레벨 200 > 180\r\n";
			jessica2 += "Abillit Points 15 ~ 30 랜덤 지급\r\n";
			jessica2 += "성배포인트 20 ~ 30 랜덤 지급\r\n\r\n#k";
			jessica2 += "#e새롭게#n 다시 태어나는것을 말하는거야 환생과 비슷하지만 보상은 다르지";
			cm.sendPrev(jessica2);
			cm.dispose();
		} else if (selection == 1) {
			var jessica = jessicaj[Math.floor(Math.random() * jessicaj.length)];
			var jessica2 = jessicarebirth[Math.floor(Math.random() * jessicarebirth.length)];
			var Jessica = cm.getPlayer().getSSpirit() + jessica2;
                      if(cm.getPlayer().getJob() != 10112) {
			if (cm.getPlayer().getLevel() >= 200) {
				cm.getPlayer().setLevel(180);
				cm.gainAp(jessica);
				cm.getPlayer().setRebirth(Jessica);
				cm.getPlayer().saveToDB(false, false);
				cm.reloadChar();
				cm.sendOk("#bAbillit Points + " + jessica + "\r\n성배 포인트 + " + jessica2 + "\r\n성배 포인트 합계 : " + cm.getPlayer().getSSpirit() + "\r\n\r\n#r새롭게 다시 태어난걸 축하해!!");
				cm.dispose();
	                } else {
				cm.sendOk("#r필요 조건#k\r\n\r\n#b레벨 200\r\n#k다시 태어날만큼 강하지 못한거같은대?");
				cm.dispose();
		        } 
} else {
                                cm.sendOk("#r제로#k 직업은 #b각성#k 이 불가능해!!");
                                cm.dispose();
}
}
}
}
}