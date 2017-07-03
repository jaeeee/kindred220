


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - asdwdbd에 의해 자동으로 만들어진 스크립트 입니다.

	엔피시아이디 : 1012002

	엔피시 이름 : 비셔스

	엔피시가 있는 맵 : 헤네시스 : 헤네시스 시장 (100000100)

	엔피시 설명 : 아이템 제작자


*/

var status = -1;
var selected = 0;

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
	cm.sendSimple("싱싱한 물고기를 메소로 교환해주겠내\r\n#b#L2#교환을 하겠습니다.");
    } else if (status == 1) {
	if (selection == 0) {
		cm.sendStorage();
		cm.dispose();
	} else if (selection == 1) {
		cm.sendCompose();
		cm.dispose();
	} else if (selection == 2) {
		cm.sendSimple("싱싱한 물고기를 메소로 교환해주겠내\r\n#b#L0##i4001187#(음치) 를 메소로 교환 (마리당 5만메소)\r\n#L1##i4001188#(몸치) 를 메소로 교환 (마리당 7만메소)\r\n#L2##i4001189#(박치) 를 메소로 교환 (마리당 10만메소)\r\n#k");
	}
    } else if (status == 2) {
		selected = selection;
			cm.sendGetText("몇마리를 나에게 팔겟나?");
    } else if (status == 3) {
		if (selected == 0) {
			if (cm.haveItem(4001187,cm.getText())) {
				cm.gainItem(4001187,-cm.getText());
				cm.gainMeso(50000 * cm.getText());
				cm.sendOk("물고기는 요긴하게 쓰겟내");
			} else {
				cm.sendOk("허허허 사기를치면 쓰나");
			}
		} else if (selected == 1) {
			if (cm.haveItem(4001188,cm.getText())) {
				cm.gainItem(4001188,-cm.getText());
				cm.gainMeso(70000 * cm.getText());
				cm.sendOk("물고기는 요긴하게 쓰겟내");
			} else {
				cm.sendOk("허허허 사기를치면 쓰나");
			}
		} else if (selected == 2) {
			if (cm.haveItem(4001189,cm.getText())) {
				cm.gainItem(4001189,-cm.getText());
				cm.gainMeso(100000 * cm.getText());
				cm.sendOk("물고기는 요긴하게 쓰겟내");
			} else {
				cm.sendOk("허허허 사기를치면 쓰나");
			}
		}
		cm.dispose();
    }
}
