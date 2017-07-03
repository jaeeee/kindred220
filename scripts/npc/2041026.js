/* 레이스스타일 물고기 환전소 입니다.
   본 스크립트의 제작권은 레이스매니저(class_adm@nate.com) 에게있습니다.
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
	cm.sendSimple("팔딱팔딱 신선한 물고기 다산다해\r\n#r#k#b\r\n\r\n#b#L2##i4001187##z4001187#   한마리에 10포인트줄게!#I#k");
    } else if (status == 1) {
	if (selection == 0) {
		cm.sendStorage();
		cm.dispose();
	} else if (selection == 1) {
		cm.sendCompose();
		cm.dispose();
	} else if (selection == 2) {
	         cm.sendGetText("몇마리나 팔꺼냐해");
	}
    } else if (status == 2) {
	
			if (cm.haveItem(4001187, cm.getText())) {
                                cm.getPlayer().addFPT(cm.getText() * 10);
				cm.gainItem(4001187, -cm.getText());
				cm.sendOk("흥 비싸게사준거다해.");
			} else {
				cm.sendOk("이씻빳새끼가 어디서 사기를치려냐해! 물고기 제대로가져오라해!");
			}


    }
}
