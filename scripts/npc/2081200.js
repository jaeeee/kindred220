importPackage(Packages.packet.creators);

var status = 0;

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
		if (cm.getJob() == 212 || cm.getJob() == 222 || cm.getJob() == 232) {
			cm.sendYesNo("지금과 다른 새로운 운명을 원하시나요?");
		} else {
			cm.sendOk("자유전직은 모험가 직업군만 사용가능하며, 모험가 이실경우 자신의 직업에 맞는 NPC를 찾아가주세요.");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.sendNextS("그럼 새로운 운명을 위한 전직에 앞서 먼저 주의할 점을 설명해드리겠어요.", 1);
	} else if (status == 2) {
		cm.sendNextS("자유전직을 하면 현재 익힌 모든 스킬의 sp가 초기화됩니다. 마스터리북을 사용하여 늘린 각 스킬의 마스터 레벨도 역시 초기화되지요. 또, 현재 받고 있는 버프도 초기화 되니 주의하세요.", 1);
	} else if (status == 3) {
		cm.sendNextS("전직 비용으로 자유전직 코인이 필요해요. 코인이 없거나 모자라다면 메소를 지불해도 되지만 코인이 있다면 코인을 우선적으로 받고 있어요. 아크스토리에서는 보스몬스터에게 자유 전직 코인을 드롭할 수 있어요.", 1);
	} else if (status == 4) {
		cm.sendNextS("마지막으로, 자유전직 비용은 당신의 레벨과 자유전직한 횟수에 비례하여 증가해요. 심심풀이로 운명을 바꾸면 그만큼 부담이 간다는 얘기지요.", 1);
	} else if (status == 5) {
		cm.sendNextS("설명이 길어졌었군요. 그럼 당신이 바꿀 수 있는 운명의 직업을 보여드리겠어요.", 1);
	} else if (status == 6) {
		cm.getClient().getSession().write(UIPacket.OpenUI(0xA4));
		cm.dispose();
		}
	}
}