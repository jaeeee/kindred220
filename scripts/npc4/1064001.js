var status = 0;
var quest = 0;

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
if(cm.getPlayer().getQuestStatus(30008) == 1) {
cm.dispose();
} else if(cm.getPlayer().getKeyValue("ba") == "attack") {
cm.sendSimple("한시라도 빨리 이곳에서 나가고 싶어!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 봉인 당한 세계수 (완료가능)#l");
} else if(cm.getPlayer().getKeyValue("lutas") == "start") {
cm.sendSimple("한시라도 빨리 이곳에서 나가고 싶어!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 거대한 뿌리 탈출2 (완료가능)#l");
} else if(cm.getPlayer().getKeyValue("lutat") == "start" && cm.getPlayer().getMapId() == 105010200) {
cm.sendNextS("뭐야 출구는 아무 문제도 없잖아? 다시 돌아가야겠다.",2);
cm.dispose();
} else if(cm.getPlayer().getKeyValue("lutat") == "start" && cm.getPlayer().getMapId() != 105010200) {
cm.sendSimple("한시라도 빨리 이곳에서 나가고 싶어!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 거대한 뿌리 탈출1 (완료가능)#l");
} else if(cm.getPlayer().getKeyValue("luta") == "start" && cm.getQuestStatus(30002) == 0) {
cm.sendOk("일어나... 일어나......");
cm.dispose();
} else if (cm.getQuestStatus(30002) == 1) {
cm.sendNextS("역시 출구가 있었어, 소녀에게 출구가 있다고 말해줘야겠다.",2);
} else {
cm.dispose();
}
} else if (status == 1) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
cm.sendOk("앗,#b" + cm.getPlayer().getName() + "#k! 다시 돌아왔구나!\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#143000 + 4290(감성 추가 경험치) exp");
cm.completeQuest(30006);
cm.dispose();
} else if(cm.getPlayer().getKeyValue("lutas") == "start") {
cm.sendNext("확인해봤어?");
} else if(cm.getPlayer().getKeyValue("lutat") == "start") {
cm.sendNext("확인해봤어?");
} else {
cm.sendSimple("한시라도 빨리 이곳에서 나가고 싶어!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 의문의 소녀 (완료가능)#l");
}
} else if (status == 2) {
if(cm.getPlayer().getKeyValue("lutas") == "start") {
cm.sendNextS("이번에도 주문서에는 아무런 문제도 없었어.",2);
} else if(cm.getPlayer().getKeyValue("lutat") == "start") {
cm.sendNextS("응. 출구는 밖으로 문제없이 이어져 있던걸.",2);
} else {
if(selection == 0) {
cm.sendOk("여기서 나갈 수 있는 방법을 찾았어?\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#135000 + 4050(감성 추가 경험치) exp");
cm.completeQuest(30002);
cm.dispose();
}
} 
} else if (status == 3) {
if(cm.getPlayer().getKeyValue("lutas") == "start") {
cm.sendNext("그럼 이번에도 실패네... 난 정말 밖으로 나갈 수 없는 걸까...?");
cm.completeQuest(30004);
cm.dispose();
} else if (cm.getPlayer().getKeyValue("lutat") == "start") {
cm.sendNext("정말? 그럼 진짜 나만 못 나가는 건가 보네.....");
cm.completeQuest(30003);
cm.dispose();
} 
}
}
}