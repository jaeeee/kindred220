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
	cm.sendSimple("팔딱팔딱 신선한 물고기 다삽니다용~\r\n#r#k#b\r\n\r\n#b#L2##i4001188##z4001188#   한마리에 20포인트줄게!#I#k");
    } else if (status == 1) {
	if (selection == 0) {
		cm.sendStorage();
		cm.dispose();
	} else if (selection == 1) {
		cm.sendCompose();
		cm.dispose();
	} else if (selection == 2) {
	         cm.sendGetText("몇마리나 파시겠습니까?");
	}
    } else if (status == 2) {
	
			if (cm.haveItem(4001188, cm.getText())) {
                                cm.getPlayer().addFPT(cm.getText() * 20);
				cm.gainItem(4001188, -cm.getText());
				cm.sendOk("그럼 즐거운 하루되세요~");
                                cm.dispose();
			} else {
				cm.sendOk("야이개새꺄! 머리카락으로 눈을가리고있어도 보일건보여새꺄! 제대로가져와임마!");
                                cm.dispose();
			}


    }
}
