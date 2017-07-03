importPackage(Packages.packet.creators);

var status = -1;
var sel = 0;
var essok = Array ("여기는 에델슈타인의 레벤 광산 지하의 연구실입니다. 이볼빙 시스템을 진행하실 수 있습니다.","이볼빙 시스템은 육체의 완전한 진화를 목적으로 만들어진 훈련 시스템입니다. 진화를 위한 모든 환경적 요건은 사용자에 맞출 수 있게 구성되며 모든 과정은 이볼빙 시스템에서 지원하는 가상세계에서 이루어집니다.","이볼빙 시스템을 통제하는 인공지능 제어장치 ESS입니다. 사용자의 편리를 위해 이와 같은 형태를 띄고 있습니다.","시스템의 오류로 이전 자료는 확인할 수 없습니다.","이볼빙 시스템 안내를 시작하겠습니다.\r\n\r\n#e[접속방법]#n\r\n1. 차원의 거울을 통해 이볼빙 시스템 연구소로 이동\r\n2. ESS를 클릭, 이볼빙 시스템 시작\r\n3. 시스템 회로 탭의 START버튼 클릭 시, 가상 공간으로 이동\r\n","코어에 대한 안내를 시작하겠습니다.\r\n\r\n#e코어#n는 여러가지 #b#e기능#n#k을 가지고 있습니다.\r\n\r\n#e1. 가상 세계의 공간 변경#n\r\n- 배경 이미지, 몬스터 이미지, 배경 음악 변경\r\n\r\n#e2. 리워드 관련 기능 변경#n\r\n- 특정 아이템 드롭 ( 장비, 약초, 광물 등 )\r\n- 드롭률 향상\r\n\r\n#e3. 몬스터 관련 기능 변경#n\r\n- 몬스터 레벨 변경\r\n- 몬스터 HP 변경\r\n- 몬스터 개체수 증가\r\n- 특정 몬스터 추가\r\n\r\n#e4. 기타#n\r\n- 파티 플레이 시 추가 경험치 지급\r\n- 훈련 프로그램 추가\r\n");
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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
	var chat = "이볼빙 시스템을 시작합니다.#b\r\n\r\n";
	chat += "#L0#이볼빙 시스템에 접속한다.#l\r\n";
	chat += "#L1#이볼빙 시스템에 대한 안내를 듣는다.#l";
	cm.sendSimple(chat);
	} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().send(MainPacketCreator.openUI(100));
//	cm.getPlayer().send(MainPacketCreator.sendPacket("C9 00 03 00 01 04 00 02"));
	cm.dispose();
	} else if(selection == 1) {
	var chatq = "이볼빙 시스템에 대한 도움말이 필요하시면 말씀하십시오.#b\r\n\r\n";
	chatq += "#L0#여긴 어디야?#l\r\n";
	chatq += "#L1#이볼빙 시스템은 뭐지?#l\r\n";
	chatq += "#L2#너는 누구야?#l\r\n";
	chatq += "#L3#군당장 스우와는 어떤 관계지?#l\r\n";
	chatq += "#L4#뭘 하면 되지?#l\r\n";
	chatq += "#L5#이볼빙 시스템 안내 프로그램을 보고싶어.#l\r\n";
	chatq += "#L6#코어가 뭐야?#l";
	cm.sendSimple(chatq);
		} 
	} else if (status == 2) {
	cm.sendNext(essok[selection]);
	sel = selection;
	if(selection != 5 && selection != 6) {
	cm.dispose();
		}
	} else if (status == 3) {
		if(sel==5) {
		cm.sendNext("#e이볼빙 시스템UI 안내#n\r\n\r\n#b#e1. 시스템 회로 탭#n#k\r- 이볼빙 시스템 가상 세계의 환경 조건을 변경할 수 있는 회로.\r\n- #r코어 슬롯#k과 #r코어 보관함#k으로 구성되어 있다.\r\n\r\n#e[코어]#n\r- 가상세계의 환경을 변경시키는 물체\r- 코어 보관함에 있는 코어를 코어 슬롯에 장착해서 사용할 수 있다.\r\n\r\n#e[코어 보관함]#n\r\n- 코어를 보관할 수 있다.\r\n- 획득한 코어는 자동으로 보관함으로 이동된다.\r\n");
		} else if(sel == 6) {
		cm.sendNext("#e코어를 획득하는 방법#n은 3가지 입니다.\r\n\r\n1. 훈련 프로그램 완료 시 랜덤하게 획득\r\n2. 시스템 몬스터를 처치 시 일정 확률로 드롭\r\n3. #p9075110#을 통해 구입\r\n(이볼빙 코인은 시스템 몬스터를 잡거나, 각 링크에서 프로그램을 완료해서 획득할 수 있다.)");
		}
	} else if (status == 4) {
		if(sel == 5) {
		cm.sendNext("#e#b2. 실험실 구조 탭#n#k\r\n\r\n#e[링크 연결 노선도]#n\r\n- 총 9개의 링크로 구성\r\n- 링크 1~5 접속 가능, 링크6~9는 시스템 개선 퀘스트를 통해 확장할 수 있다.\r\n\r\n#e[훈련 프로그램]#n\r\n- 각 링크별로 기본 프로그램 수행 가능\r\n- 프로그램의 진행 상태는 아이콘으로 구별할 수 있다.");
		} else if (sel == 6) {
		cm.sendNext("원하는 기능의 코어를 이볼빙 시스템UI에 장착하면 가상 세계가 그에 따라 변경되게 됩니다.\r\n\r\n#e[코어의 장착 규칙]#n\r\n1. 코어는 동일한 형태의 슬롯에만 장착할 수 있다.\r\n(둥근 형태의 코어는 둥근 슬롯에만 장착할 수 있습니다.)\r\n2. 동일한 기능의 코어는 중복 장착할 수 없습니다.\r\n(드롭률 10% 증가 코어와 드롭률 20% 증가 코어는 함께 장착할 수 없습니다.)\r\n\r\n#e[코어의 장착 방법]#n\r\n1. 코어 보관함에서 더블 클릭하거나, 드래그 앤 드롭으로 슬롯에 장착할 수 있습니다.\r\n\r\n#e[코어의 해제 방법]#n\r\n1. 코어 슬롯에서 더블 클릭하거나, 드래그 앤 드롭으로 보관함으로 이동할 수 있습니다.\r\n\r\n#e[코어 제거 방법]#n\r\n1. 보관함의 코어를 이볼빙 시스템UI 밖으로 드래그 앤 드롭할 경우, 코어는 영구 삭제됩니다.");
		}
	} else if (status == 5) {
		if(sel == 5) {
		cm.sendNext("#e#b3. 이볼빙 시스템 보상#n#k\r\n\r\n[코인샵]\r\n- 이볼빙 시스템 연구소 입구의 #b머신-C2#k를 통해 필요한 아이템을 구매할 수 있다.\r\n\r\n\r\n이볼빙 시스템은 #r파티로도 입장 가능#k하며, 이 외에도 다양한 기능을 가지고 있습니다.\r\n\r\n이볼빙 시스템 안내를 종료합니다.");
		cm.dispose();
		} else if (sel == 6) {
		cm.sendNext("다양한 기능의 코어를 장착해서 이볼빙 시스템을 원하는 공간으로 바꿀 수 있습니다.\r\n\r\n이상 코어에 관한 안내를 종료합니다.");
		cm.dispose();
		}
	}
}