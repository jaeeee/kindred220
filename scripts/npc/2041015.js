


/*
 하이퍼 스킬 NPC  (CelphisOnline)


*/

var status = -1;
var hyper = "";
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	cm.sendSimple("하이퍼 스킬은 레벨 140부터 배우실 수 있습니다. \r\n#e#r하이퍼 스킬이 보이지 않을시엔 @스킬마스터를 치시고 하이퍼스킬창을 열어보세요.#n#k\r\n#L0#하이퍼 SP 받기#l\r\n#L1#하이퍼 스킬 배우기#l");
    } else if (status == 1) {
	if (selection == 0) {
           cm.sendOk(cm.giveHyperSp());
	   cm.dispose();
	} else {
	   cm.sendSimple("#L1#스탯 강화 패시브 스킬 배우기#l\r\n#L2#스킬 강화 패시브 스킬 배우기#l\r\n#L3#공격/버프 스킬 배우기#l");
	}
    } else if (status == 2) {
	   hyper = "hyper" + selection;
	   cm.sendSimple("SP : " + cm.getPlayer().getKeyValue2(hyper) + "\r\n" + cm.getHyperSkills(selection));
    } else if (status == 3) {
	cm.getPlayer().setKeyValue2(hyper, cm.getPlayer().getKeyValue2(hyper) - 1);
	cm.getPlayer().changeSkillLevel(selection, 1, 1);
	cm.sendOk("#s" + selection + "# #q" + selection+ "# 스킬을 배우셨습니다");
	cm.dispose();
    }
}
