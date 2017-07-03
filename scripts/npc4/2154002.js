/*

Copyright ⓒ 2013 Spirit Corporaion. All Rights Reserved.

leader.스피릿온라인 (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.우비 (guri__s@nate.com)
Make.공석 (iureal@nate.com)

이 스크립트는 스피릿온라인에만 사용됩니다.
만약 유출이 되더라도 이 주석은 삭제하지 않으셨으면 좋겠습니다.

*/

var status = 0;
var jessica = Math.floor(Math.random() * 90);

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
	if (cm.haveItem(4310067, 100)) {
	if (cm.getPlayer().getStat().getMaxHp() < 60000 && cm.getPlayer().getStat().getMaxMp() < 60000) {
		cm.sendNext("안녕하세요. #b" + cm.getPlayer().getName() + "님#k 메이플스토리 퀴즈 담당 #b르티에#k 입니다. \r\nOX퀴즈를 모두 맞추실 경우에는 플레이어님의 HP와 MP를 1000 올려드립니다.\r\n자, 그럼 이제 시작해볼까요?\r\n\r\n#r");
	} else {
		cm.sendOk("HP, MP는 50000이상은. 스크립트로 올리실수 없습니다.");
		cm.dispose();
		}
	} else {
		cm.sendOk("OX 퀴즈를 진행하시려면 아래와 같은 아이템이 필요합니다.\r\n\r\n#b#i4310067# #t4310067# 100개");
		cm.dispose();
		}
	} else if (status == 1) {
	if (jessica > 0 && jessica < 10) {
		cm.sendGetText("#b우리 서버의 이름은?");
		status = 1;

	} else if (jessica > 10 && jessica < 20) {
		cm.sendGetText("#b지금 존재하는 최강 보스몬스터는?");
		status = 2;

	} else if (jessica > 20 && jessica < 30) {
		cm.sendGetText("#b ac㎡ + (ad+bc)m + bd 를 인수분해하여라 (띄어쓰기 하지말고)");
		status = 3;

	} else if (jessica > 30 && jessica < 40) {
		cm.sendGetText("#b레벨업을 할때마다 주어지는 코인의 이름은? \r\n#r(뛰어쓰기포함)");
		status = 4;

	} else if (jessica > 40 && jessica < 50) {
		cm.sendGetText("#b휴먼 온라인의 홈페이지 주소는?");
		status = 5;

	} else if (jessica > 50 && jessica < 60) {
		cm.sendGetText("#b매니저 부매니저는 누구?");
		status = 6;

	} else if (jessica > 60 && jessica < 70) {
		cm.sendGetText("#b감정 돋보기(최상급)의 정확한 가격은? \r\n#r(뛰어쓰기 포함)\r\n#b예 : ????만 ????원"); // 12만8처넌
		status = 7;

	} else if (jessica > 70 && jessica < 80) {
		cm.sendGetText("#b원숭이의 캐시 가격은? \r\n#b예 : ????만 ????원"); // 5천원
		status = 8;

	} else if (jessica > 80 && jessica < 90) {
		cm.sendGetText("#bNPC중 제일 띠꺼운 NPC는? \r\n#r(뛰어쓰기포함)");
		status = 9;
	} else {
		cm.sendOk("#b아쉽게도.. 문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 2) {
	if (cm.getText().equals("휴먼 온라인")) {
		cm.sendGetText("#b ac㎡ + (ad+bc)m + bd 를 인수분해하여라 (띄어쓰기 하지말고)");
		status = 10;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 3) {
	if (cm.getText().equals("벨룸")) {
		cm.sendGetText("#b레벨업을 할때마다 주어지는 코인의 이름은? \r\n#r(뛰어쓰기포함)");
		status = 11;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 4) {
	if (cm.getText().equals("(am+b)(cm+d)")) {
		cm.sendGetText("#b감정 돋보기(최상급)의 정확한 가격은? \r\n#r(뛰어쓰기 포함)\r\n#b예 : ????만 ????원");
		status = 12;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 5) {
	if (cm.getText().equals("pc방 코인")) {
		cm.sendGetText("#bNPC중 제일 띠꺼운 NPC는? \r\n#r(뛰어쓰기포함)");
		status = 13;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 6) {
	if (cm.getText().equals("http://word.ce.do")) {
		cm.sendGetText("#b스크립트 제작자는 누구 빠돌이?");
		status = 14;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 7) {
	if (cm.getText().equals("휴먼씨 꺄르씨")) {
		cm.sendGetText("#b우리 서버의 이름은?");
		status = 15;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 8) {
	if (cm.getText().equals("12만 8000원")) {
		cm.sendGetText("#b원숭이의 캐시 가격은? \r\n#b예 : ????만 ????원");
		status = 16;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 9) {
	if (cm.getText().equals("8300원")) {
		cm.sendGetText("#b지금 존재하는 최강 보스몬스터는?");
		status = 17;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 10) {
	if (cm.getText().equals("몽롱 할배")) {
		cm.sendGetText("#b휴먼 온라인의 홈페이지 주소는?");
		status = 18;
	} else {
		cm.sendOk("#b아쉽게도..문제를 틀리셨네요.");
		cm.dispose();
		}

	} else if (status == 11) {
	if (cm.getText().equals("(am+b)(cm+d)")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.gainItem(4310067, -50);
		cm.getPlayer().saveToDB(false, false);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + ""); 
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}

	} else if (status == 12) {
	if (cm.getText().equals("pc방코인 코인")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}

	} else if (status == 13) {
	if (cm.getText().equals("12만 8000원")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}

	} else if (status == 14) {
	if (cm.getText().equals("몽롱 할배")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}

	} else if (status == 15) {
	if (cm.getText().equals("휴먼씨 꺄르씨")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}

	} else if (status == 16) {
	if (cm.getText().equals("휴먼온라인")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}

	} else if (status == 17) {
	if (cm.getText().equals("8300원")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.gainItem(4310067, -50);
		cm.getPlayer().saveToDB(false, false);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + ""); 
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}

	} else if (status == 18) {
	if (cm.getText().equals("벨룸")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.gainItem(4310067, -50);
		cm.getPlayer().saveToDB(false, false);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + ""); 
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}

	} else if (status == 19) {
	if (cm.getText().equals("휴먼.매니아.한국")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.gainItem(4310067, -50);
		cm.getPlayer().saveToDB(false, false);
		cm.reloadChar();
		cm.sendOk("축하합니다! 모든 문제를 맞추셨습니다.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b최대 HP, MP + 1000\r\n합계 : Hp : " + jessh + " Mp : " + jessm + ""); 
		cm.dispose();
	} else {
		cm.sendOk("#b으악!! 마지막 1문제에서 틀리시다니..안타까워요.");
		cm.dispose();
		}
}
}
}