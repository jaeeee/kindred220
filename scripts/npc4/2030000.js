var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 1) {
	cm.sendNext("준비가 됬다면 다시 말을 걸어 주게.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("자네... 이 곳을 지나 더 멀고 깊은 곳으로 가보고 싶은 모양이로군... 하지만 저 너머부터는 상당히 포악하고 재빠른 녀석들이 우글대고 있어 아무리 준비를 했다 하더라도 섣불리 다가가서는 안돼. 오래 전 우리 마을의 용감한 청년들도 마을을 위협하는 녀석들을 끝장내겠다며 안으로 들어갔지만... 영영 돌아오지 못하고 말았지...");
    } else if (status == 1) {
	if (cm.getPlayer().getLevel() >= 50) {
	    cm.sendYesNo("혹시 안에 들어갈 작정이라면 생각을 바꾸는 것이 좋을 것일세. 하지만 정 들어가고 싶다면... 안에서도 살아남을 수 있을 정도로 강한 자들만이 내 허락하에 들어갈 수가 있다네. 더 이상의 피는 보고 싶지 않단 말일세. 어디 보자... 흠! 자네는 꽤 강해 보이는군. 어떤가, 저 안으로 들어가고 싶은가?");
	} else {
	    cm.sendPrev("혹시 안에 들어갈 작정이라면 생각을 바꾸는 것이 좋을 것일세. 하지만 정 들어가고 싶다면... 안에서도 살아남을 수 있을 정도로 강한 자들만이 내 허락하에 들어갈 수가 있다네. 더 이상의 피는 보고 싶지 않단 말일세. 어디 보자... 흠! 자네는 아직 레벨 50을 넘지 못했군, 용기는 가상하지만 단념하게.");
	    cm.dispose();
	}
    } else if (status == 2) {
	cm.warp(211040300,5);
	cm.dispose();
    }
}