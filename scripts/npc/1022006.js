/*
	 이 스크립트는 스크립트 메이커 JS루돌프(gwangyun1)가 제작하였습니다.
	 이 스크립트는 제한배포 되었으며 재배포가 불가능합니다.
         이 주석은 제작자의 동의가 있을시 수정이 가능합니다.
         Copyright (C) 2009 Script Maker JS루돌프 <gwangyun1@naver.com>
*/

var status = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status == 2 && mode == 0) {
			cm.sendOk("#r거절시 하는 말을 입력하세요.#k");
			cm.dispose();
			return;
	} else if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			cm.sendSimple("안녕하시게? 나는 고고학자 #b윈스턴#k이라고 하네.\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n#L0##d나무 심기#k#l");
                } else if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.STARTED) && cm.haveItem(4000195, 54)) {
			cm.sendSimple("안녕하시게? 나는 고고학자 #b윈스턴#k이라고 하네.\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d나무 심기(완료가능)#k#l");
		} else if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.STARTED)) {
			cm.sendSimple("안녕하시게? 나는 고고학자 #b윈스턴#k이라고 하네.\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d나무 심기(진행중)#k#l");
		} else {	
			cm.sendOk("안녕하시게? 나는 고고학자 #b윈스턴#k이라고 하네.");
			cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			status = 2;
			cm.sendAcceptDecline("요즘 들어 페리온 지역이 점점 더 황폐해 지고 있다네. 바위\r\n로 된 지형이 많은 이유도 있지만 이 근처에서 한창 유적을\r\n발굴하고 있어서 그 속도가 더 심해지고 있다네. 나 하나라도\r\n앞장서서 페리온 지역의 환경을 예전처럼 되돌리고 싶은데\r\n자네가 좀 도와줄 수 있겠나?");
		} else if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.STARTED)) {
			if(cm.haveItem(4000195, 54)) {
			cm.completeQuest(1568955);
			cm.gainItem(4000195, -54);
			cm.gainItem(2000000, 30)
			cm.gainExp(1500);
			cm.sendOk("묘목을 다 모아 왔는가?\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2000000# 빨간 포션 30개\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#   1500 exp");
			cm.dispose();
		} else {
			cm.sendOk("아직 #b묘목 54개#k를 못가져 오신 듯 하네요...");
			cm.dispose();
			}
		}
		} else if (status == 2) {
			cm.sendAcceptDecline("요즘 들어 페리온 지역이 점점 더 황폐해 지고 있다네. 바위\r\n로 된 지형이 많은 이유도 있지만 이 근처에서 한창 유적을\r\n발굴하고 있어서 그 속도가 더 심해지고 있다네. 나 하나라도\r\n앞장서서 페리온 지역의 환경을 예전처럼 되돌리고 싶은데\r\n자네가 좀 도와줄 수 있겠나?");
		} else if (status == 3) {
			cm.sendNext("기꺼이 나를 도와주겠다니 감사할 따름이라네. 페리온 주변\r\n이 점점 황폐해 지면서 새로운 몬스터들이 생겨나고 있다네.\r\n최근에 보고된 바로는 유적 발굴 지역 주변에 스텀프의 돌연\r\n변이인 #r고스텀프#k가 생겨났다고 하더군.");
		} else if (status == 4) {
			cm.sendNextPrev("내가 이 고스텀프를 연구해 본 결과 고스텀프의 머리 부분에\r\n있는 나뭇가지를 땅에 심으면 아주 큰 나무로 성장하게 된다\r\n는 것을 알아냈다네. 일종의 묘목인 셈이지. 자네가 유적 발\r\n굴지 쪽으로 가서 고스텀프를 퇴치하고 #b54개의 묘목#k을 모아\r\n다 주면 고맙겠네.");
		} else if (status == 5) {
			cm.startQuest(1568955);	
			cm.sendPrev("고스텀프는 유적 발굴지에서 자주 출몰한다네. 유적 발굴지\r\n는 여기서 동쪽으로 쭉 가다가 #r바위길III#k에 보면 위쪽에 포탈\r\n이 하나 있다네. 그 곳으로 들어가면 바로 유적 발굴지로 연\r\n결이 된다네.");
			cm.dispose();
			}
		}
	}