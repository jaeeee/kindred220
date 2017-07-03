importPackage(Packages.packet.creators);

var status = -1;

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
		if(cm.getQuestStatus(3870) != 2 && !cm.haveItem(4032603)) {
		cm.sendNext("이 곳은 출입 금지 지역입니다. 돌아가 주세요.");
		} else {
		cm.sendOk("이 곳은 출입이 제한된 곳입니다. 아무나 들어가실 수 없습니다. 돌아가 주세요.");
		cm.dispose();
		}
	} else if (status == 1) {
		cm.sendNextPrevS("흰털 대장원숭이가 이쪽으로 사라졌다고 들었습니다. 꼭 되찾아야 할 물건이 있어요. 들어가게 해주세요.", 2);
	} else if (status == 2) {
		cm.sendNextPrev("이 곳은 너무 위험한 지역입니다. 하지만… 뭐 당신은 충분히 강해보이는군요. 그럼 한번만 눈 감아드릴테니 올룬 들어갔다가 나오세요. 5분이 지나도 돌아오지 않으면 제가 찾으러 가겠습니다,");
	} else if (status == 3) {
		cm.dispose();
		cm.timeMoveMap(252010300, 925120000, 300);
		cm.killAllMob();
		cm.spawnMob(9100024, -746, -225);
	}
	
}
}