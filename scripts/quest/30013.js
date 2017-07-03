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
	qm.sendNext("이제 봉인이 모두 풀렸으니 밖으로 나갈 수 있게 됐어!");
} else if (status == 1) {
	qm.sendNextS("(나인하트는 세계수를 에레브로 데리고 오라고 했는데 어떡하지? 이제 루타비스를 벗어날 수 있게 되어서 저렇게 좋아하는데...)",2);
} else if (status == 2) {
	qm.sendNextS("자유의 몸이 된 걸 축하해. 그런데... 메이플 연합에서는 네가 에레브로 와 주길 바라고 있어.",2);
} else if (status == 3) {
	qm.sendNext("에레브에....?");
} else if (status == 4) {
	qm.sendNextS("응. 아무래도 네 힘을 노리는 세력이 많으니까, 에레브에서 여제와 신수의 보호를 받는 것이 안전할 거라고 판단한 것 같아. 하지만 어디까지나 선택은 네 몫이야. 싫으면 가지 않아도 돼. 그들은 네게 선택을 강요할 권리가 없어.",2);
} else if (status == 5) {
	qm.sendNext("....아냐. 맘대로 돌아다니다가는 나쁜 녀석들에게 힘을 빼앗길지도 몰라. 메이플 연합의 판단이 맞아. 아쉽기는 하지만 힘을 완전히 회복하기 전까지는 에레브에 있을게.");
} else if (status == 6) {
	qm.sendNextS("정말 괜찮겠어? 오랫동안 갇혀있어서 바깥세상을 맘껏 돌아다니고 싶어 했잖아.",2);
} else if (status == 7) {
	qm.sendNext("괜찮아. 힘이 다 회복되면 그때 자유를 만끽할래. 그땐, 내 힘을 노리는 녀석들따위 한 방에 날려줄테야!");
} else if (status == 8) {
	qm.sendNextS("좋아. 그럼 에레브로 가자. 혹시 무슨 일이 생길 지 모르니까 시그너스 기사단이 호위해 줄 거야.",2);
} else if (status == 9) {
	qm.getPlayer().getMap().spawnTempNpc(1102003, -195, 215, qm.getPlayer().getId());
	qm.getPlayer().getMap().spawnTempNpc(1102000, -94, 215, qm.getPlayer().getId());
	qm.getPlayer().getMap().spawnTempNpc(1102001,145,215,qm.getPlayer().getId());
	qm.getPlayer().getMap().spawnTempNpc(1102002,224,215,qm.getPlayer().getId());
	qm.sendNextS("준비됐지? 그럼 출발한다!",2);
} else if (status == 10) {
	qm.getPlayer().getMap().removeTempNpc(1102003,qm.getPlayer().getId());
	qm.getPlayer().getMap().removeTempNpc(1102000,qm.getPlayer().getId());
	qm.getPlayer().getMap().removeTempNpc(1102001,qm.getPlayer().getId());
	qm.getPlayer().getMap().removeTempNpc(1102002,qm.getPlayer().getId());
	qm.warp(100000000);
	qm.showEffect(false,"rootabyss/goEreb");
	qm.completeQuest(30013);
	qm.dispose();
}
}
}