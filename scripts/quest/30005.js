var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
qm.sendNextS("대체 어쩌다가 이곳에 오게 된거야? 여긴 너같은 어린아이가 있기엔 적합하지 않은 곳인데.",2);
} else if (status == 1) {
qm.sendNext("루타비스는 아주 오래 전에 내가 만든 곳이야.");
} else if (status == 2) {
qm.sendNextS("여길 네가 만들었다고? 그게 무슨 소리야?",2);
} else if (status == 3) {
qm.sendNext("원래는 힘을 회복하려고 이 대륙의 중심에 자리를 잡았떤 건데, 지금은 어둠의 기운이 가득해서 버티는 것조차도 힘들어.");
} else if (status == 4) {
qm.sendNextS("네가 무슨 말을 하는지 모르겠어. 대체 넌 누구야?",2);
} else if (status == 5) {
qm.sendNext("내 이름은 알리샤, 사람들은 나를 #r세계수#k라고도 불러.");
} else if (status == 6) {
qm.sendNextS("세계수? 네가 세계수라고? 생명의 힘을 지녔다는 세계수? 세계수는 아주 오래 전에 사라졌다고 들었어.",2);
} else if (status == 7) {
qm.sendNext("응. 검은 마법사와 싸우면서 약해진 힘을 회복하려고 여기에 잠들어 있었어. 이곳은 대륙의 중심이라 생명의 기운이 넘쳐흐르거든.");
} else if (status == 8) {
qm.sendNextS("그럼 수백 년 전부터 힘을 회복하기 위해서 이곳에 있었따는 거야? 너무 엄청난 이야기라서 잘 믿기지 않아. 혹시 내가 꿈을 꾸고 있는건 아니겠지?",2);
} else if (status == 9) {
qm.sendSimple("한시라도 빨리 이곳에서 나가고 싶어!\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n#L0##d[루타비스] 소녀의 정체 (완료가능)#l");
} else if (status == 10) {
qm.sendNextS("네가 진짜 세계수라면, 왜 이곳에서 나가지 못하고 있는 거야? 루타비스를 네가 만들었다면 밖으로 나가는 건 문제없을 텐데.",2);
} else if (status == 11) {
qm.sendNext("이게 다 그 녀석들 때문이야!");
} else if (status == 12) {
qm.sendNextS("그 녀석들이라니?",2);
} else if (status == 13) {
qm.sendNext("여기에 잠들기 전에 이 주변에 결계를 쳐놨는데, 얼마 전에 결계를 깨고 이곳에 침입한 녀석들이 있었어, 결계가 깨지는 충격으로 나도 잠에서 깨어났는데, 녀석들이 날 잡아가려고 했어.");
} else if (status == 14) {
qm.sendNextS("침입자들이라면 혹시 검은 마법사의 수하들이야?",2);
} else if (status == 15) {
qm.sendNext("그건 잘 모르겠어. 모두 후드를 쓰고 있어서 얼굴이 잘 보이지 않았거든. 아, 맞다. 한 쪽 눈에 안대를 한 마족 남자애가 대장처럼 보였어.");
} else if (status == 16) {
qm.showEffect(false,"rootabyss/demian");
qm.sendNextS("한 쪽 눈에 안대를 한 마족이라고? 대체 그건 누구지?",2);
} else if (status == 17) {
qm.sendNext("내 힘이 아직 다 회복되지 않은 걸 확인하고는 내가 완전히 힘을 되찾으면 그때 데려가겠다면서 나를 이곳에 봉인시켜버렸어.");
} else if (status == 18) {
qm.sendNextS("너를 여기에 봉인시켰다고? 그래서 밖으로 나갈 수 없었던 거야?",2);
} else if (status == 19) {
qm.sendNext("응. 아무리 밖으로 나가보려고 해도 도저히 나갈 수가 없어. 게다가 녀석이 루타비스에 어둠의 힘을 채워넣었어. 어둠의 기운 때문에 아무런 힘도 쓸 수가 없어...");
} else if (status == 20) {
qm.sendNext("이대로 가다가는 힘을 모두 되찾기도 전에 어둠이 나를 집어삼기고 말거야. 그러니까 제발 나 좀 도와줘. 빨리 여기서 벗어나야 해!");
qm.completeQuest(30005);
qm.dispose();
}
}
}