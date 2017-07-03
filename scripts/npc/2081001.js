/*
	 이 스크립트는 스크립트 메이커 JS루돌프(gwangyun1)가 제작하였습니다.
	 이 스크립트는 제한배포 되었으며 재배포가 불가능합니다.
         이 주석은 제작자의 동의가 있을시 수정이 가능합니다.
         Copyright (C) 2009 Script Maker JS루돌프 <gwangyun1@naver.com>
*/

var status = -1;
var itemArray = Array(4004000, 4004001, 4004002, 4004003, 4004004);
var itemQuan = Array(5,5,5,5,5);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status == 3 && mode == 0) {
			cm.sendOk("보람찬 일이 될텐데... 다시 한번 생각해 보는건 어때?");
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
			if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			cm.sendSimple("처음 보는 얼굴인데?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n#L0##d쿠모의 부탁#k#l");
                } else if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.STARTED) && cm.haveItem(4000236, 48) && cm.haveItem(4000237, 28)) {
			cm.sendSimple("처음 보는 얼굴인데?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d쿠모의 부탁(완료가능)#k#l");
		} else if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.STARTED)) {
			cm.sendSimple("처음 보는 얼굴인데?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d쿠모의 부탁(진행중)#k#l");
		} else {	
			cm.sendOk("난 지금부터 받침대를 만들기 시작해야겠어. 튼튼한 받침대를 만들려면 오늘 하루종일 일해야겠는걸? ");
			cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			status = 2;
			cm.sendNext("처음 보는 얼굴인데? 반가워 난 쿠모라고해. 어이쿠! 방금 봤\r\n어? 이 알은 내가 돌보고 있는 알인데 부화할 때가 거의 다\r\n돼서 이렇게 흔들리는 일이 많아졌어.");
		} else if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.STARTED)) {
			if(cm.haveItem(4000236, 48) && cm.haveItem(4000237, 28)) {
			cm.completeQuest(2559009);
			cm.gainItem(4000236, -48);
			cm.gainItem(4000237, -28);
			var randmm = Math.floor(Math.random() * itemArray.length);
			cm.gainItem(itemArray[randmm], itemQuan[randmm]);
			cm.gainExp(42000);
			cm.sendOk("오랜만이야~ 온몸이 상처투성이네? 비틀의 뿔을 모아오는\r\n일이 힘들었나보구나? 그래도 내가 부탁한 뿔을 다 모아 오\r\n다니 정말 고마워.\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#   42000 exp\r\n\r\n#fUI/UIWindow.img/QuestIcon/5/0#");
			cm.dispose();
		} else {
			cm.sendOk("동쪽 숲에 사는 비틀은 강철보다 단단하기로 유명하지. 단단하면서도 표면이 부드러워서 알받침대를 만들기에는 그만이지. #b비틀의 뿔 48개#k와 #b듀얼 비틀의 뿔 28개#k는 다 구한거야?");
			cm.dispose();
			}
		}
		} else if (status == 2) {
			cm.sendNext("처음 보는 얼굴인데? 반가워 난 쿠모라고해. 어이쿠! 방금 봤\r\n어? 이 알은 내가 돌보고 있는 알인데 부화할 때가 거의 다\r\n돼서 이렇게 흔들리는 일이 많아졌어.");
		} else if (status == 3) {
			cm.sendAcceptDecline("아기 용이 태어나는 것은 기쁘지만 너무 많이 흔들리는 바람\r\n에 떨어질까봐 걱정이야. 튼튼한 받침대라도 있다면 다행일\r\n텐데 말이야. 어때? 받침대 만드는 일을 도와주지 않겠어?");
		} else if (status == 4) {
			cm.startQuest(2559009);
			cm.sendOk("네가 재료를 구해다 주면 받침대는 내가 만들게 나뭇가지로\r\n만들어도 좋겠지만 더 튼튼하게 만들려면 뭐니뭐니해도 비틀\r\n의 뿔이 최고지! 비틀의 뿔은 정말 튼튼하거든. #b비틀의 뿔 48\r\n개#k와 #b듀얼 비틀의 뿔 28개#k를 모아와 줘~");
			cm.dispose();
			}
		}
	}