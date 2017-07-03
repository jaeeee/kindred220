


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 9000008
	
	엔피시 이름 : 몽땅따

	엔피시가 있는 맵 : 커닝시티

	엔피시 설명 : 자물쇠 따기 달인


*/


var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        if (cm.haveItem(2350002, 1)) {
        	cm.sendGetText("너의 이름을 따주겠다해. \r\n#r*부정 방지를 위해 닉네임 변경을 완료하면 접속종료 됩니다.\r\n(올바르지 않은 닉네임은 변경되지 않습니다.#r#n[예를들어 띄어쓰기나 특수문자,중복되는 닉네임(만능엔피시 - 정보보기 에서 확인])#r#k[영어4자이상,한글2자이상입니다.]");
	} else {
		cm.sendOk("꺼지라 해. 닉네임 변경권 없이 날 찾아온 사람은 필요 없다 해.닉네임 변경권은 후원상점 - 올스텟&코인에 있다해");
		cm.dispose();
        }
    } else if (status == 1) {
	var name = cm.getText();
        cm.gainItem(2350002, -1);
	cm.setName(name);
        cm.dispose();
    }
}


