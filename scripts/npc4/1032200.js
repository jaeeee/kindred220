


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	엔젤릭버스터 에 의해 만들어 졌습니다.

	엔피시아이디 : 10200

	엔피시 이름 : 헬레나

	엔피시가 있는 맵 : 피릿시스 : 피릿시스 (100000000)

	엔피시 설명 : 궁수 전직관


*/
importPackage(Packages.constants);
importPackage(Packages.packet.creators);
importPackage(Packages.handler.경매);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	cm.sendSimple("안녕하세요? #b" + cm.getPlayer().getName() + "#k님! 저는 저~~~기 멀리서 \r\n#b" + cm.getPlayer().getName() + "#k님의 계정성별을 설정 해드리기위해서 찾아온 라니아 라고 해요!!성별설정이 안되는 직업은 이번설정을통해 성별이 고정됩니다.\r\n\r\n#L0##b남자(Male)#r\r\n#L1#여자(Female)");
    } else if (status == 1) {
		cm.getClient().setGender(selection);
		cm.sendOk("이제 로그인창으로 이동되실건데!! 당황하지마시고 다시 들어오시면 계정 성별이 변경되 있을거에요~ 그럼 다음에 또 만나요!!");
	} else if (status == 2) {
		cm.sendOk("팅겨라씨발아");
		cm.sendOk("팅겨라씨발아");
		cm.dispose();
	}
}
