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
if(cm.getPlayer().getKeyValue("luta") == "start") {
cm.sendNext("어서오십시오. 기다리고 있었습니다.");
}
} else if (status == 1) {
cm.sendNextS("급한 일이라고 해서 달려왔습니다. 대체 무슨일이 일어난 건가요?",2);
} else if (status == 2) {
cm.sendNext("메이플 연합에 보고된 중요한 정보가 있어, 알려드리고자 급하게 불렀습니다. 정보에 따르면, 최근 슬리피우드 북쪽 지역에 이전에는 없었던 새로운 지역이 나타났다고 합니다.");
} else if (status == 3) {
cm.sendNext("문제는 이 지역에서 아주 강력한 어둠의 기운이 느껴진다는 것입니다. 메이플 연합에서는 혹시 검은 마법사 일당의 아지트가 아닐까 추측하고 있습니다만, 이 또한 확실한 것은 아닙니다.");
} else if (status == 4) {
cm.sendNext("이미 시그너스 기사단을 파견하여 새로운 지역을 탐사하고 있으나, 짙은 안개와 무성한 수풀이 시야를 가로막아 지형조차 제대로 파악하지 못한 상황입니다.");
} else if (status == 5) {
cm.sendNextS("그럼 제가 무엇을 해야 합니까?",2);
} else if (status == 6) {
cm.sendNext("그러니 #b" + cm.getPlayer().getNmae() + "가#k 도와주셨으면 합니다. 지금 즉시 #b조용한 습지#k로 보내드릴테니, 그곳과 연결된 새로운 지역을 탐사해 주십시오. 그리고 혹시 무언가 발견하게 되면 바로 제게 보고 해주십시오.");
} else if (status == 7) {
cm.sendNext("그럼 지금 즉시 신수의 힘으로 #b조용한 습지#k 로 옮겨드리겠습니다.");
cm.dispose();
}
}
}