importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
	qm.sendNext("나, 여기서 나가고 싶어.");
    } else if (status == 1) {
	qm.sendNextS("뭐라고?",2);
} else if (status == 2) {
	qm.sendNext("여기서 나가고 싶다구.");
} else if (status == 3) {
	qm.sendNextS("대체 무슨 소리를 하는 거야? 여긴 어디야? 넌 누구고?",2);
} else if (status == 4) {
	qm.sendNext("여기? 여기는 루타비스야.나 여기서 나가고 싶어. 그러니까 나좀 도와줘.");
} else if (status == 5) {
	qm.sendNextS("(휴.... 계속 자기 말만 하고있잖아? 말이 안 통하는군.)",2);
} else if (status == 6) {
	qm.sendNextS("(아무래도 길을 잃은 것 같은데, 도와주어야 할까?)",2);
} else if (status == 7) {
	qm.sendNextS("알았어. 여기서 나갈 수 있는 방법을 찾아줄게.",2);
} else if (status == 8) {
	qm.sendNext("정말 나를 도와주는 거지? 약속했어!");
} else if (status == 9) {
	qm.sendNextS("음, 어딘가에 밖으로 나갈 수 있는 길이 있을텐데....",2);
} else if (status == 10) {
	qm.startQuest(30002);
	qm.dispose();
}
 }
}