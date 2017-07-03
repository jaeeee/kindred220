달력 = new Date();

년   = 달력.getFullYear();
월   = 달력.getMonth() + 1;
일   = 달력.getDate();
일요 = 달력.getDay();
전후 = 달력.getHours() < 12 ? "오전" : "오후"			
시   = 달력.getHours() > 12 ? 달력.getHours() - 12 : 달력.getHours();
분   = 달력.getMinutes();
초   = 달력.getSeconds();
요일 = 일요 == 0 ? "일요일" : 일요 == 1 ? "월요일" : 일요 == 2 ? "화요일" : 일요 == 3 ? "수요일" : 일요 == 4 ? "목요일" : 일요 == 5 ? "금요일" : "토요일";
시간 = ""+년+"년 "+월+"월 "+일+"일 "+요일+" "+전후+" "+시+"시 "+분+"분 "+초+"초 ";


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
		var chat = "#e서버 시간#n │ "+시간+"\r\n";
		chat += "#e채널 배율#n │ 경험치 #r150#k배, 메소 #r10#k, 드롭 #r10#k배\r\n\r\n";
		chat += "#L9000002##r⊙#k 메리스토리 초기자원 받기.\r\n"; //이벤트, 공지사항
		chat += "#L9001040##r⊙#k 메이플스토리 핫타임 이벤트!\r\n"; 	   //이벤트, 공지사항
		chat += "\r\n#L1##fUI/UIToolTIP/Item/Equip/Star/Star##b이동시스템#k을 이용하고싶습니다.\r\n";
		chat += "#L2##b상점시스템#k을 이용하고싶습니다.\r\n";
		chat += "#L1012109##b컨텐츠시스템#k을 이용하고싶습니다.\r\n";
		cm.sendSimple(chat);
	} else if (status == 1) {
		if (selection > 0) {
		cm.dispose();
		cm.openNpc(selection);
		}
	} else if (status == 2) {
		cm.dispose();
	}
}