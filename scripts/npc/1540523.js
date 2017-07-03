importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var mobcode = Array(8240098, 8240099, 8240104, 8240105);

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
		var check = "   #e안녕하세요. #e#b#h0#님!!!#n#k\r\n   저희 #e#r휴먼온라인#n#k에서는 #e#b보스 스우#n#k를 미리 #e#r체험#n#k해 보실\r\n   수 있도록 #e#b준비#n#k하였답니다. 한번 #e#b구경#n#k해 보시겠어여?\r\n\r\n";
		if (cm.getPlayer().getMapId() == 350060416) {
			if (cm.getMonsterCount(350060416) < 1) {
				check += "#L1##e#b스우 체험하기(2단계)\r\n";
				check += "#L5##e#b스우 체험하기(3단계) (체험할 맵으로 이동됩니다.)\r\n";
				check += "#L2##e#b헤네시스로 돌아가기\r\n";
			} else {
				check += "#L2##e#b헤네시스로 돌아가기\r\n";
				check += "#L3##n#r(몬스터가 없는데 스우 체험하기가 없다면 클릭)";
			}
		} else if (cm.getPlayer().getMapId() == 350060416) {
			if (cm.getMonsterCount(350060416) < 1) {
				check += "#L1##e#b스우 체험하기(3단계)\r\n";
				check += "#L2##e#b헤네시스로 돌아가기\r\n";
			} else {
				check += "#L2##e#b헤네시스로 돌아가기\r\n";
				check += "#L3##n#r(몬스터가 없는데 스우 소환하기가 없다면 클릭)";
			}
		} else if (cm.getPlayer().getMapId() == 302090300) {
			check += "#L4##e#b스우 체험하기 (스토리가 시작됩니다.)\r\n";
		} else {
			check += "#L0##e#b스우 체험하기 (체험할 맵으로 이동됩니다.)\r\n";
		}
		cm.sendSimple(check);
	} else if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayerCount(302090300) > 5 || cm.getPlayerCount(350060180) > 5 || cm.getPlayerCount(350060416) > 5) {
				cm.sendOk("이미 다른 파티가 #e#r스우#n#k를 #e#b사냥 중#n#k 입니다.\r\n#e#r다른 채널#n#k에서 #e이용#n#k해 주세요.");
				cm.dispose();
			} else {
				cm.warp(302090300);
				cm.dispose();
			}
		} else if (selection == 1) {
			if (cm.getPlayer().getMapId() == 350060180) {
				cm.spawnMob(mobcode[0], -150, -16);
				cm.dispose();
			} else if (cm.getPlayer().getMapId() == 350060416) {
				cm.spawnMob(mobcode[1], 0, -16);
				cm.dispose();
			}				
		} else if (selection == 2) {
			cm.dispose();
			cm.warp(100000000);
		} else if (selection == 3) {
			cm.killAllMob();
			cm.sendOk("#e#r오류#n#k가 #e#b해결#n#k되었습니다. #e#b정상#n#k적으로 #e#b이용 가능#n#k합니다.");
			cm.dispose();
		} else if (selection == 5) {
			cm.dispose();
			cm.warp(350060416);
		} else if (selection == 4) {
			cm.sendNext("#e검은 마법사#n는 날 이곳에서 #e#b사람#n#k으로 만들어 주었지...\r\n이 곳에서 말이야... #e#b평온의 숲#n#k에서...");				
		} 
	} else if (status == 2) {
		cm.sendNextPrevS("음 이 #e#b맵#n#k이름을 보아하니 #e#b하얀 마법사#n#k가 #e#r각성#n#k해서 #e#r검은 마법사#n#k가 된거구나?", 2);
	} else if (status == 3) {
		cm.sendNextPrev("맞아... 하지만 난 #e#r아리아 여제#n#k를 죽이고 #e#b팬텀#n#k에게 죽임을 당함으로써 그 죗값을 치루었지...");
	} else if (status == 3) {
		cm.sendNextPrev("솔직히 난 #e#b사람#n#k이 되고 나서는 조금 #e#r불안#n#k했어... #e#b오르카#n#k와 떨어지게 될까 봐...");
	} else if (status == 4) {
		cm.sendNextPrevS("겔리메르가 오르카에게 너의 영혼팔이를 해서 속였자나? 안그래?", 2);
	} else if (status == 5) {
		cm.sendNextPrev("...");
	} else if (status == 6) {
		cm.sendYesNoS("스우가 할말을 잃은 듯 하다... 스우를 위해 스우로 빙의된 보스를 처치하자.\r\n\r\n#e#r(현재 테스트 중인 보스 몬스터이므로 참고 바랍니다.)", 2);
	} else if (status == 7) {
		cm.warp(350060180);
		cm.dispose();
	}
}
