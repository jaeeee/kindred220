var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((status == 0 || status == 1 || status == 2 || status == 4 || status == 6) && mode == 0) {
			cm.sendOk("혹시라도 결정이 서신다면 저에게로...........");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendSimple("안녕하세요~ 저희 온라인에 첫발을 내디신 여러분을 진심으로 환영합니다~ 저는 여러분에게 모험의 길을 열어주고자 여기에 있습니다~ 자! 모험의 준비는 되셨는지요?\r\n\r\n\r\n#r주의사항 : 미하일, 시그너스(미하일 제외), 레지스탕스(데몬슬레이어 포함)로 플레이 하실 분들 께서는 해당 클래스로 생성해주시길 바랍니다. 그 외 타 직업군의 경우에는 무조건 모험가 직업으로 캐릭터를 생성해주세요. 감사합니다#b\r\n#L0#모험을 시작하겠습니다.#l#b\r\n#L1#모험을 시작하기 전에 #r성별#b을 변경하고 싶어요.#l");				
		} else if (status == 1) {		
			if (selection == 0) {
				cm.sendNext("준비는 다 되신건가요? 그럼 연이온라인에서 즐거운 시간을 보내세요!\r\n\r\n\r\n#b주의사항 : 대화를 도중에 닫거나 하면 진행이 전혀 안되는 경우가 있습니다. 주의!주의!");
			} else if (selection == 1) {
				cm.sendSimple("캐릭터 전직 전에 성별을 바꾸지 않으면 안되는 직업이 몇 가지 존재합니다. 그런 이유로 성별 변환 시스템을 지금에 한해 지원해드리고 있습니다. 어느성별로 하실거에요??\r\n\r\n#L0##b여성 캐릭터로 전환#l\r\n#L1##b남성 캐릭터로 전환#l");
			} else {
			cm.dispose();
			}
		} else if (status == 2) {
		   if (selection == 0) {
                 	cm.getPlayer().setHair(31002);
                 	cm.getPlayer().setFace(21700);
                 	cm.getPlayer().setGender(1);
            		cm.fakeRelog();
            		cm.updateChar();
            		cm.playerMessage(5, "성별 전환 시스템에 의해 성별이 바뀌며 이성의 기본 헤어와 얼굴로 바뀌었습니다.");			
            		cm.dispose();
		   } else if (selection == 1) {
                 	cm.getPlayer().setHair(30000);
                 	cm.getPlayer().setFace(20100);
                 	cm.getPlayer().setGender(0);
            		cm.fakeRelog();
            		cm.updateChar();
            		cm.playerMessage(5, "성별 전환 시스템에 의해 성별이 바뀌며 이성의 기본 헤어와 얼굴로 바뀌었습니다.");			
            		cm.dispose();
		} else {
			cm.gainExp(1000);
			cm.gainExp(1000);
			cm.gainExp(1000);
			cm.gainExp(1000);
			cm.gainExp(10);
			cm.gainExp(135);
			cm.gainExp(372);
			cm.gainExp(560);
			cm.gainExp(840);
			cm.gainExp(1240);
			cm.gainMeso(10000000);
			cm.gainItem(2000013, 50);
			cm.gainItem(2000014, 50);
                 	cm.playerMessage(5, "당신의 첫 입성 축하로, 소정의 포션과 메소를 드립니다. 저희 온라인에서 즐거운 시간 되시길 바랍니다~");			
       			cm.warp (910027200, 0);
			cm.dispose();
			}
		}
	}
}