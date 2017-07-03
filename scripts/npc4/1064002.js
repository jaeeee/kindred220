var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
	if(cm.getPlayer().getKeyValue("belum") == "clear") {
	cm.sendSimple("봉인을 해제하고 나를 여기서 꺼내줘!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 북쪽의 봉인의 수호자 처치 (완료가능)#l");
	} else if(cm.getPlayer().getKeyValue("quean") == "clear") {
	cm.sendSimple("봉인을 해제하고 나를 여기서 꺼내줘!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 남쪽의 봉인의 수호자 처치 (완료가능)#l");
	} else if(cm.getPlayer().getKeyValue("pier") == "clear") {
	cm.sendSimple("봉인을 해제하고 나를 여기서 꺼내줘!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 서쪽의 봉인의 수호자 처치 (완료가능)#l");
	} else if(cm.getPlayer().getKeyValue("banban") == "clear") {
	cm.sendSimple("봉인을 해제하고 나를 여기서 꺼내줘!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 동쪽의 봉인의 수호자 처치 (완료가능)#l");
} 
} else if (status == 1) {
if(cm.getPlayer().getKeyValue("belum") == "clear") {
cm.sendNext("북쪽의 봉인까지 해제한 거야?");
} else if(cm.getPlayer().getKeyValue("quean") == "clear") {
cm.sendOk("남쪽의 봉인을 해제한 거야?\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 357000 + 5355(감성 추가 경험치) exp");
} else if(cm.getPlayer().getKeyValue("pier") == "clear") {
cm.sendOk("서쪽의 봉인을 해제한 거야?\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 320000 + 4800(감성 추가 경험치) exp");
} else if(cm.getPlayer().getKeyValue("banban") == "clear") {
cm.sendOk("동쪽의 봉인을 해제한 거야?\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 320000 + 4800(감성 추가 경험치) exp");
}
} else if(status == 2) {
if(cm.getPlayer().getKeyValue("belum") == "clear") {
cm.sendNextS("응. 이걸로 모든 봉인의 수호자를 처치했어. 이제 네게 걸려있던 봉인도 모두 해제됐을 거야.",2);
} else if(cm.getPlayer().getKeyValue("quean") == "clear") {
cm.sendNext("온 몸을 죄어오던 어둠의 기운이 이제는 희미해졌어!");
cm.completeQuest(30011);
cm.dispose();
} else if(cm.getPlayer().getKeyValue("pier") == "clear") {
cm.sendOk("온 몸을 죄어오던 어둠의 기운이 많이 약해진 것 같아!");
cm.completeQuest(30010);
cm.dispose();
} else if(cm.getPlayer().getKeyValue("banban") == "clear") {
cm.sendOk("온 몸을 죄어오던 어둠의 기운이 조금은 약해진 것 같아!");
cm.completeQuest(30009);
cm.dispose();
}
} else if (status == 3) {
cm.sendNext("어쩐지 몸이 가뿐해. 온 몸을 죄어오던 어둠의 기운이 전혀 느껴지지 않아! 내게 걸려있던 봉인이 완전히 풀렸나봐!");
} else if (status == 4) {
cm.showEffect(false,"rootabyss/undo");
cm.completeQuest(30012);
cm.dispose();
}
}