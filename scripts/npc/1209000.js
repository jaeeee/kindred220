var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendNext("이제 깨어났군요, 아란! 다친 곳은 괜찮은가요? ...네? 상황이요?");
	} else if (status == 1) {
	    cm.sendNextPrev("피난 준비는 거의 끝나가고 있어요. 탈 수 있는 사람들은 모두 방주에 태웠어요. 피난선이 비행하는 동안 신수가 지켜주기로 했으니 걱정할 건 아무것도 없어요. 이제 마무리만 끝나면 바로 빅토리아 아일랜드로 출발할 거예요.");
	} else if (status == 2) {
	    cm.sendNextPrev("아란의 동료들이요...? 그들은... 검은 마법사를 향해 떠났어요. 우리가 피난하는 동안 검은 마법사를 막겠다며... 네? 당신도 검은 마법사에게 가겠다고요? 안돼요! 당신은 부상자잖아요? 우리와 함께 도망쳐요!");
	} else if (status == 3) {
	    cm.forceStartQuest(21002,"1");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio",0);
	    cm.dispose();
	}
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
cm.sendSimple("상황은 급박해요. 어떤 부분에 대해 알고 싶은 건가요?\r\n#b#L0#검은 마법사는?\r\n#b#L1#피난 준비는?\r\n#L2#동료들은?");
	} else if (status == 1) {
	    if (selection == 0) {
		cm.sendNext("검은 마법사가 아주 가까이까지 와 있다고 해요. 검은 마법사의 부하가 된 용들 때문에 숲을 통해 나갈 수도 없어요. 그래서 피난선을 만든 거잖아요, 아란? 날아서 빅토리아 아일랜드로 도망치는 수밖에 없어서...");
	    } else if (selection == 1) {
		cm.sendNext("피난 준비는 거의 끝나가고 있어요. 탈 수 있는 사람은 모두 방주에 태웠어요. 이제 몇 명만 더 타면 빅토리아 아일랜드로 출발할수 있어요. 피난선이 비행하는 동안 하늘에서의 공격은 신수가 막아주기로 했어요... 더 이상 에레브에 지킬 사람이 남지 않았다며...");
	    } else if (selection == 2) {
		cm.sendNext("당신의 동료들... 그들이라면 이미 검은 마법사를 향해 떠났어요. 우리가 피난하는 동안 검은 마법사를 막겠다며... 당신은 다쳤으니 데리고 가지 않겠다고 했어요. 아이만 구하게 되면 당신도 우리와 함께 도망쳐요, 아란!");
	    }
	    cm.safeDispose();
	}
    }
}