


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	황혼 에 의해 만들어 졌습니다.

	엔피시아이디 : 9010017

	엔피시 이름 : 개발자의 인형

	엔피시가 있는 맵 : 빅토리아로드 : 엘리니아 (180000000)

	엔피시 설명 : MISSINGNO


*/

var status = -1;
importPackage(Packages.launch);
var select = -1;
var time = -1;
var rate = -1;
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        if (cm.getPlayer().hasGmLevel(6))
        cm.sendSimple("관리자 기능\r\n#L0#이벤트메세지변경#l\r\n#L1#경험치이벤트#l\r\n#L2#드롭배율이벤트#l\r\n#L3#메소배율이벤트#l\r\n#L4#캐시배율이벤트#l\r\n#L5#주문서성공률이벤트#l\r\n#L6#임시이벤트메세지변경#l\r\n\r\n");
        else
            cm.dispose();
    }
    else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendGetText("이벤트메세지");
        } else if (selection == 1) {
            cm.sendGetNumber("배율",1,1,1000);
        } else if (selection == 2) {
            cm.sendGetNumber("배율",1,1,1000);
        } else if (selection == 3) {
            cm.sendGetNumber("배율",1,1,1000);
        } else if (selection == 4) {
            cm.sendGetNumber("배율",1,1,1000);
        } else if (selection == 5) {
            cm.sendGetNumber("증가률",1,1,1000);
        } else if (selection == 6) {
            cm.sendGetText("이벤트메세지");
        }
    } else if (status == 2) {
        if (select == 0) {
            var text = cm.getText();
            LoginServer.getInstance().setEventMessage(text);
            cm.dispose();
            cm.sendOk("ok");
        } else if (select == 1) {
            rate = selection;
            cm.sendGetNumber("지속시간(초)",1,1,300000);
        } else if (select == 2) {
            rate = selection;
            cm.sendGetNumber("지속시간(초)",1,1,300000);
        } else if (select == 3) {
            rate = selection;
            cm.sendGetNumber("지속시간(초)",1,1,300000);
        } else if (select == 4) {
            rate = selection;
            cm.sendGetNumber("지속시간(초)",1,1,300000);
        } else if (select == 5) {
            rate = selection;
            cm.sendGetNumber("지속시간(초)",1,1,300000);
        } else if (select == 6) {
            var text = cm.getText();
            cm.sendGetNumber("지속시간(초)",1,1,300000);
        }
    } else if (status == 3) {
        if (select == 1) {
            time = selection;
            cm.setExpEvent(rate, time);
            cm.sendOk("ok");
        } else if (select == 2) {
            time = selection;
            cm.setDropEvent(rate, time);
            cm.sendOk("ok");
        } else if (select == 3) {
            time = selection;
            cm.setMesoEvent(rate, time);
            cm.sendOk("ok");
        } else if (select == 4) {
            time = selection;
            cm.sendGetNumber("지속시간(초)",1,1,300000);
        } else if (select == 5) {
            time = selection;
            cm.sendGetNumber("지속시간(초)",1,1,300000);
        } else if (select == 6) {
            time = selection;
            cm.setTempMessage(text, time);
            cm.sendOk("ok");
        }
        cm.dispose();
    }
}
