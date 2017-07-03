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
    }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var skin = "원하는 #e#b데미지 스킨#n#k을 선택하세요.\r\n#e#b3000 후원포인트#n#k가 #e#r차감#n#k됩니다.\r\n" +
		"현재 #e#b"+cm.getPlayer().getName()+"#n#k님은 #e#b"+cm.getRC()+"포인트#n#k를 소지하고 있습니다.\r\n\r\n";
		skin += "#L2431965##e#b#i2431965#  기본 데미지 스킨\r\n";		//0번
		skin += "#L2431966##e#b#i2431966#  디지털라이즈 데미지 스킨\r\n";	//1번
		skin += "#L2431967##e#b#i2431967#  크리티아스 데미지 스킨\r\n";		//2번
		skin += "#L2432131##e#b#i2432131#  파티 퀘스트 데미지 스킨\r\n";	//3번
		skin += "#L2432153##e#b#i2432153#  임팩티브 데미지 스킨\r\n";		//4번
		skin += "#L2432154##e#b#i2432154#  달콤한 전통 한과 데미지 스킨\r\n";	//5번
		skin += "#L2432207##e#b#i2432207#  클럽 헤네시스 데미지 스킨\r\n";	//6번
		skin += "#L2432354##e#b#i2432354#  메리 크리스마스 데미지 스킨\r\n";	//7번
		skin += "#L2432355##e#b#i2432355#  눈 꽃송이 데미지 스킨\r\n";		//8번
		skin += "#L2432465##e#b#i2432465#  얄리샤의 데미지 스킨\r\n";		//9번
		skin += "#L2432479##e#b#i2432479#  도로시의 데미지 스킨\r\n";		//10번
		skin += "#L2432526##e#b#i2432526#  키보드 워리어 데미지 스킨\r\n";	//11번
		skin += "#L2432532##e#b#i2432532#  살랑살랑 봄바람 데미지 스킨\r\n";	//12번
		skin += "#L2432592##e#b#i2432592#  솔로부대 데미지 스킨\r\n";		//13번
		skin += "#L2432640##e#b#i2432640#  레미너선스 데미지 스킨\r\n";		//14번
		skin += "#L2432710##e#b#i2432710#  주황버섯 데미지 스킨\r\n";		//15번
		skin += "#L2432836##e#b#i2432836#  왕관 데미지 스킨\r\n";		//16번
		skin += "#L2432973##e#b#i2432973#  모노톤 데미지 스킨\r\n";		//17번
		skin += "#L2433063##e#b#i2433063#  스타플래닛 데미지 스킨\r\n";		//18번
		skin += "#L2433178##e#b#i2433178#  2014 할로윈 데미지 스킨\r\n";	//20번	
		cm.sendSimple(skin);
	} if (status == 1) {
		if (cm.getRC() >= 3000 && !cm.haveItem(selection) && cm.canHold(selection)) {
			cm.gainItem(selection, 1);
			cm.gainRC(-3000);
			cm.sendOk("#e#b#i"+selection+"#   #z"+selection+"##n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.\r\n#e#b남은 포인트 : "+cm.getRC());
			cm.dispose();
		} else {
			cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 #i"+selection+"#   #z"+selection+"##n#k을 이미\r\n가지고 있는지 #e#b확인#n#k해주세요.");
			cm.dispose();
		}
	}
}
