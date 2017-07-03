/*
	곰고(leehodud302@naver.com)님의  스크립트 파일입니다.
*/
var status = -1;

function start() {
	status = -1;
	action (1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == 1) {
		status++;
	} else {
		status--;
		cm.dispose();
	}
	if (status == 0) {
		if(mode == 0)
			cm.dispose();
		else
			cm.sendGetText("검색할 캐시를 써주세요\r\n\r\n ");
	} else if (status == 1) {
		var itemid = cm.getText();
		cm.SearchItem(itemid);
	} else if (status == 2) {
		cm.sendOk("#i"+selection+"# #fs14##e#b#t"+selection+"##n#k#fs12#을(를) 획득하셨습니다.");
		cm.gainItem(selection ,1);
		cm.dispose();
	}
}