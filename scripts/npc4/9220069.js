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
	var enter = "#e#b������ �ܼ�Ʈ Ȧ#n#k�� ���� �������� #e#bȯ��#n#k�մϴ�.\r\n#e#b�� ��#n#k������ ������ #e#b�̴ϰ���#n#k�� �Բ� #e#b�뷡����#n#k �� #e#b�޼ҵ���#n#k�� �� �� �ֽ��ϴ�. \r\n\r\n";
	enter += "#L0##e#r�޸ո���#k�� #e#b�̵�\r\n\r\n";
//	enter += "#L1##e#b[����������]#l   ";
	enter += "#L2##e#b[����ã��]#l    ";
	enter += "#L3##e#b[�����ϱ�]#l    ";
//	enter += "#L4##e#b[����Ʈ]#l     ";	
//	enter += "#L5##e#b[�׸�ã��]#k#n#k#n\r\n"; //��Ƽüũ��	
//	// ��������
	enter += "#L6##e#b[�밡�ٸ�]#l#k#n\r\n";
	enter += "#L10##e#b[�����̱�]#l    ";
	enter += "#L7##e#b[�뷡���]#l    ";	
	enter += "#L8##e#b[������]#l       ";
//	enter += "#L9##e#b[OX�����]";
        enter += "#L11##e#b[����������]#l       ";  
	cm.sendSimple(enter);
	}
    else if (status == 1) {
	if (selection == 0) {
	cm.dispose();
	cm.warp(100000000);
	} else if (selection == 1) {
	var RPS = "#e#b����������#k ����#n���� ���� #e#b��������#n#k�� #e#b�޼�#n#k�� #e��ȯ#n �����մϴ�.\r\n\r\n";
	RPS += "#L26##e#b [����������]#n#k �����ϱ�\r\n";
	RPS += "#L27##e#b [��������]#n#k ��ȯ�ϱ�\r\n";
	cm.sendSimple(RPS);
	} else if (selection == 2) {
	cm.dispose(); 
	cm.openNpc(9220067);
	} else if (selection == 3) {
	cm.dispose(); 
	cm.openNpc(9220068);
        } else if (selection == 11) {
	cm.dispose(); 
	cm.openNpc(9000019);
	} else if (selection == 4) {
	var omok = "#e#r� #b����Ʈ#n#k�� #e#r����#n#k�����ðڽ��ϱ�?\r\n\r\n";
	omok += "#L41##i4080005##e#b [����, ����]#k ����Ʈ\r\n";
	omok += "#L42##i4080000##e#b [������, ����]#k ����Ʈ\r\n";
	omok += "#L43##i4080002##e#b [������, ����]#k ����Ʈ\r\n";
	omok += "#L44##i4080004##e#b [����, �����۽�]#k ����Ʈ\r\n";
	omok += "#L45##i4080003##e#b [�����۽�, ����]#k ����Ʈ\r\n";
	omok += "#L46##i4080001##e#b [������, �����۽�]#k ����Ʈ\r\n";
	omok += "#L47##i4080007##e#b [����۽�, Ʈ������]#k ����Ʈ\r\n";
	omok += "#L48##i4080006##e#b [����۽�, ��ũ �״�]#k ����Ʈ\r\n";
	omok += "#L49##i4080008##e#b [��ũ �״�, Ʈ������]#k ����Ʈ\r\n";
	omok += "#L50##i4080009##e#b [�Ҵ� �״�, ����۽�]#k ����Ʈ\r\n";
	omok += "#L51##i4080011##e#b [�Ҵ� �״�, Ʈ������]#k ����Ʈ\r\n";
	omok += "#L52##i4080010##e#b [�Ҵ� �״�, ��ũ �״�]#k ����Ʈ\r\n";
	cm.sendSimple(omok);
	} else if (selection == 5) {
	cm.gainItem(4080100, 1);
	cm.sendOk("#i4080100# #e#b�����׸�ã�⼼Ʈ#k ����#n�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.\r\n#e��ſ� �ð�#n ��������!!");
	cm.dispose(); 
	} else if (selection == 6) {
		var event = "Human online #e#b�밡�ٸ�#k#n�� #e#b�̿�#n#k�ϰ� �� ������,\r\n#e#b�޼�#n#k�� ���ٰ� #e#b����#n#k���� ����.\r\n�� #e#b�밡�ٸ�#n#k�� �Ϸ��ϸ� ������ #e#b����#n#k�� ���� �� �����ž�.\r\n\r\n";
		event += "#L53##e#d#b[�� ��å��]#k - ���긮��#k#n\r\n";
		event += "#L54##e#d#b[�� ��å��]#k - ��׽ý�#k#k#n\r\n";
		event += "#L55##e#d#b[������ ��]#k 1�ܰ�#k#n\r\n";
		event += "#L56##e#d#b[������]#kB1#k#n\r\n";
		event += "#L57##e#d#b[������]#kB2#n#k#n\r\n";
		event += "#L58##e#d#b[������ ��]#k 2�ܰ�#k#n\r\n";
		event += "#L59##e#d#b[�γ��� ��]#k 1�ܰ�#k#n\r\n";
		event += "#L60##e#d#b[������]#kB3#k#n\r\n";
		event += "#L61##e#d#b[�γ��� ��]#k 2�ܰ�#k#n\r\n";
		event += "#L62##e#d#b[������ ��]#k 3�ܰ�#k#n\r\n";
		cm.sendSimple(event);
	} else if (selection == 7) {
	var music = "#e#bHuman online#n#k������ #e#b�뷡#n#k�� #e#b����#n#k�Ͽ� ���� �� �ֵ��� �ϰ� ����. #e#b������#n#k�� #e#b��#n#k, #e#b����#n#k�� #e#bƯ��#n#k �ƴϰپ�?\r\n\r\n";
	music += "#L31##d#e ��Ʋ��\r\n";
	music += "#L32##d#e �����\r\n";
	music += "#L33##d#e ������\r\n";
	music += "#L34##d#e ������Ÿ��\r\n";
	music += "#L35##d#e HouseAppeal\r\n";
	music += "#L36##d#e FantasticBaby\r\n";
	music += "#L38##d#e Let It Go!\r\n";
	music += "#L39##d#e ����� ���� BGM\r\n";
/*	music += "#L37##d#e#b [�븸�߽���]#n#k\r\n";
	if (cm.getPlayer().isGM()) {
	music += "\r\n�� ���� #e#bGM��#n#k �� �� ����.\r\n\r\n";
	music += "#L100##e#b ���� BGM\r\n";
	music += "#L101##e#b ���� Ʃ�丮��\r\n";
	music += "#L102##e#b �ູ�� ����\r\n";
	music += "#L103##e#b ������ ž\r\n";
	music += "#L104##e#b ���긮�� ���༱\r\n";
	music += "#L105##e#b ������ ž ����\r\n";
	music += "#L106##e#b ������ ž �ܺ�\r\n";
	music += "#L107##e#b �ð� ž ����\r\n";
	music += "#L108##e#b �׷����� ��\r\n";
	music += "#L109##e#b ��Ƽ���� ��\r\n";
	music += "#L110##e#b �Ʒ�����\r\n";
	music += "#L111##e#b �Ʒ����� �����\r\n";
	music += "#L112##e#b ����Ƹ��� ���ʹٴ�\r\n";
	music += "#L113##e#b ����Ƽ��\r\n";
	music += "#L114##e#b ��ũŸ��\r\n";
	music += "#L115##e#b ������\r\n";
	music += "#L116##e#b �Ƹ���Ʈ\r\n";
	music += "#L117##e#b ��ƿ����\r\n";
	music += "#L118##e#b ��?\r\n";
	music += "#L119##e#b �Ȱ��ٴ��� ���ɼ�\r\n";
	music += "#L120##e#b Ŀ�׽�����\r\n";
	music += "#L121##e#b Ŀ�׽����� �ʵ�\r\n";
	music += "#L122##e#b Ŀ�׽����� ����ö\r\n";
	music += "#L123##e#b ������Ÿ��\r\n";
	music += "#L124##e#b ������ �ʵ�\r\n";
	music += "#L125##e#b ���ڼ�\r\n";
	music += "#L126##e#b �������(JMS)\r\n";
	music += "#L127##e#b ������\r\n";
	} */
	cm.sendSimple(music);
	} else if (selection == 8) {
	var photo = "#e#b������#n#k������ #e#b��ũ����#n#k�� ���� �� �ֽ��ϴ�.\r\n#e#bȭ��#n#k�� #e#b800 X 600#n#k���� ���߰� #e#b��ũ����#n#k�� �����ô� ���� �����ϴ�.\r\n";
//	photo += "#L71##e#b[������ 1]#k ����#k�ϱ�\r\n";
//	photo += "#L72##e#b[������ 2]#k ����#k�ϱ�\r\n";
	photo += "#L73##e#b[��������ũ]#k ��Ʃ���\r\n";
	photo += "#L74##e#b[�����ڽ�]#k ��Ʃ���\r\n";
	photo += "#L75##e#b[�ູ�Ѹ���]#k ����#k�ϱ�\r\n";
	cm.sendSimple(photo);
	} else if (selection == 9) {
	var event = "#e#b����#n#k�Ͻ� #e#b�̺�Ʈ#n#k�� #e#b����#n#k���ּ���.\r\n";
	event += "#L80##e#b[OX�����]#k �����ϱ�\r\n";
//	event += "#L81##e#b[������ ���ؼ�]#k �����ϱ�\r\n";
//	event += "#L82##e#b[�ö�ö�]#k �����ϱ�\r\n"; // 1����
//	event += "#L83##e#b[�ö�ö�]#k �����ϱ�\r\n"; // 2����
//	event += "#L84##e#b[�ö�ö�]#k �����ϱ�\r\n"; // 3����
//	event += "#L85##e#b[�ö�ö�]#k �����ϱ�\r\n"; // 4���� 
	cm.sendSimple(event);
	} else if (selection == 10) {
	cm.dispose();
	cm.openNpc(9220070);
	}
    }
    else if (status == 2) {
			if (selection == 0) {
				cm.dispose();
				cm.warp(100000000);
			} else if (selection == 1) {
				cm.dispose();
				cm.warp(101000000);
			} else if (selection == 2) {
				cm.dispose();
				cm.warp(102000000);
			} else if (selection == 3) {
				cm.dispose();
				cm.warp(103000000);
			} else if (selection == 4) {
				cm.dispose();
				cm.warp(104000000);
			} else if (selection == 5) {
				cm.dispose();
				cm.warp(105000000);
			} else if (selection == 6) {
				cm.dispose();
				cm.warp(120000000);
			} else if (selection == 7) {
				cm.dispose();
				cm.warp(130000000);
			} else if (selection == 8) {
				cm.dispose();
				cm.warp(140000000);
			} else if (selection == 9) {
				cm.dispose();
				cm.warp(200000000);
			} else if (selection == 10) {
				cm.dispose();
				cm.warp(211000000);
			} else if (selection == 11) {
				cm.dispose();
				cm.warp(220000000);
			} else if (selection == 12) {
				cm.dispose();
				cm.warp(221000000);
			} else if (selection == 13) {
				cm.dispose();
				cm.warp(222000000);
			} else if (selection == 14) {
				cm.dispose();
				cm.warp(230000000);
			} else if (selection == 15) {
				cm.dispose();
				cm.warp(240000000);
			} else if (selection == 16) {
				cm.dispose();
				cm.warp(250000000);
			} else if (selection == 17) {
				cm.dispose();
				cm.warp(251000000);
			} else if (selection == 18) {
				cm.dispose();
				cm.warp(260000000);
 			} else if (selection == 19) {
				cm.dispose();
				cm.warp(261000000);
			} else if (selection == 20) {
				cm.dispose();
				cm.warp(270000000);
			} else if (selection == 21) {
				cm.dispose();
				cm.warp(219000000);
			} else if (selection == 26) {
				cm.dispose();
				cm.sendRPS();
			} else if (selection == 27) {
			var wins = "\r\n"
			wins += "#L1##e#b[1���� ����]#k ��ȯ#n�ϱ� - #e#b1000#k�޼�\r\n";
			wins += "#L2##e#b[2���� ����]#k ��ȯ#n�ϱ� - #e#b1500#k�޼�\r\n";
			wins += "#L3##e#b[3���� ����]#k ��ȯ#n�ϱ� - #e#b3500#k�޼�\r\n";
			wins += "#L4##e#b[4���� ����]#k ��ȯ#n�ϱ� - #e#b10000#k�޼�\r\n";
			wins += "#L5##e#b[5���� ����]#k ��ȯ#n�ϱ� - #e#b35000#k�޼�\r\n";
			wins += "#L6##e#b[6���� ����]#k ��ȯ#n�ϱ� - #e#b100000#k�޼�\r\n";
			wins += "#L7##e#b[7���� ����]#k ��ȯ#n�ϱ� - #e#b350000#k�޼�\r\n";
			wins += "#L8##e#b[8���� ����]#k ��ȯ#n�ϱ� - #e#b1000000#k�޼�\r\n";
			wins += "#L9##e#b[9���� ����]#k ��ȯ#n�ϱ� - #e#b3500000#k�޼�\r\n";
			wins += "#L10##e#b[10���� ����]#k ��ȯ#n�ϱ� - #e#b10000000#k�޼�\r\n";
			cm.sendSimple(wins);
			}	else if (selection == 31) {
					cm.dispose();
					cm.changeMusic("��Ʋ��/��Ʋ��");
				} else if (selection == 32) {
					cm.dispose();
					cm.changeMusic("�����/�����");
				} else if (selection == 33) {
					cm.dispose();
					cm.changeMusic("������/������");
				} else if (selection == 34) {
					cm.dispose();
					cm.changeMusic("������Ÿ��/������Ÿ��");
				} else if (selection == 35) {
					cm.dispose();
					cm.changeMusic("HouseAppeal/HouseAppeal");
				} else if (selection == 36) {
					cm.dispose();
					cm.changeMusic("FantasticBaby/FantasticBaby");
				} else if (selection == 37) {
					cm.dispose();
					cm.changeMusic("BgmTW/NightField");
				} else if (selection == 38) {
					cm.dispose();
					cm.changeMusic("BgmUI/Title_Frozen");
				} else if (selection == 39) {
					cm.dispose();
					cm.changeMusic("Bgm41/PromiseOfHeaven");
			} else if (selection == 41) {
				cm.gainItem(4080005, 1);
				cm.sendOk("#i4080005##e#b [����, ����]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 42) {
				cm.gainItem(4080000, 1);
				cm.sendOk("#i4080000##e#b [������, ����]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 43) {
				cm.gainItem(4080002, 1);
				cm.sendOk("#i4080002##e#b [������, ����]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 44) {
				cm.gainItem(4080004, 1);
				cm.sendOk("#i4080004##e#b [����, �����۽�]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 45) {
				cm.gainItem(4080003, 1);
				cm.sendOk("#i4080003##e#b [�����۽�, ����]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 46) {
				cm.gainItem(4080001, 1);
				cm.sendOk("#i4080001##e#b [������, �����۽�]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 47) {
				cm.gainItem(4080007, 1);
				cm.sendOk("#i4080007##e#b [����۽�, Ʈ������]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 48) {
				cm.gainItem(4080006, 1);
				cm.sendOk("#i4080006##e#b [����۽�, ��ũ �״�]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 49) {
				cm.gainItem(4080008, 1);
				cm.sendOk("#i4080008##e#b [��ũ �״�, Ʈ������]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 50) {
				cm.gainItem(4080009, 1);
				cm.sendOk("#i4080009##e#b [�Ҵ� �״�, ����۽�]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 51) {
				cm.gainItem(4080011, 1);
				cm.sendOk("#i4080011##e#b [�Ҵ� �״�, Ʈ������]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������!!\r\n");
				cm.dispose();
			} else if (selection == 52) {
				cm.gainItem(4080010, 1);
				cm.sendOk("#i4080010##e#b [�Ҵ� �״�, ��ũ �״�]#k ����Ʈ #b����#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�. \r\n#e��ſ� �ð�#n ��������.\r\n");
				cm.dispose();
			} else if (selection == 53) {
				cm.dispose();
				cm.warp(220000006, 0);
			} else if (selection == 54) {
				cm.dispose();
				cm.warp(100000202, 0);
			} else if (selection == 55) {
				cm.dispose();
				cm.warp(910530000, 0);
			} else if (selection == 56) {
				cm.dispose();
				cm.warp(910360000, 0);
			} else if (selection == 57) {
				cm.dispose();
				cm.warp(910360100, 0);
			} else if (selection == 58) {
				cm.dispose();
				cm.warp(910530100, 0);
			} else if (selection == 59) {
				cm.dispose();
				cm.warp(910130000, 0);
			} else if (selection == 60) {
				cm.dispose();
				cm.warp(910360200, 0);
			} else if (selection == 61) {
				cm.dispose();
				cm.warp(910130100, 0);
			} else if (selection == 62) {
				cm.dispose();
				cm.warp(910530200, 0);
			} else if (selection == 71) {
				cm.dispose();
				cm.warp(970000000);
			} else if (selection == 72) {
				cm.dispose();
				cm.warp(970000100);
			} else if (selection == 73) {
				cm.dispose();
				cm.warp(680000300);
			} else if (selection == 74) {
				cm.dispose();
				cm.warp(680000401);
			} else if (selection == 75) {
				cm.dispose();
				cm.warp(209000000);
			} else if (selection == 80) {
				//cm.sendOk("#e#b�ش��#n#k�� #eGM#n�� #e#b�̺�Ʈ#n#k�� #e#b����#n#k�� ���� #e#b����#n#k�� �� �ֽ��ϴ�.\r\n");
				cm.dispose();
				cm.warp(109050001);
			} else if (selection == 81) {
				cm.sendOk("#e#b�ش��#n#k�� #eGM#n�� #e#b�̺�Ʈ#n#k�� #e#b����#n#k�� ���� #e#b����#n#k�� �� �ֽ��ϴ�.\r\n");
				cm.dispose();
			//	cm.warp(109040000);
			} else if (selection == 82) {
				cm.sendOk("#e#b�ش��#n#k�� #eGM#n�� #e#b�̺�Ʈ#n#k�� #e#b����#n#k�� ���� #e#b����#n#k�� �� �ֽ��ϴ�.\r\n");
				cm.dispose();
			//	cm.warp(109030101);
			} else if (selection == 83) {
				cm.sendOk("#e#b�ش��#n#k�� #eGM#n�� #e#b�̺�Ʈ#n#k�� #e#b����#n#k�� ���� #e#b����#n#k�� �� �ֽ��ϴ�.\r\n");
				cm.dispose();
			//	cm.warp(109030201);
			} else if (selection == 84) {
				cm.sendOk("#e#b�ش��#n#k�� #eGM#n�� #e#b�̺�Ʈ#n#k�� #e#b����#n#k�� ���� #e#b����#n#k�� �� �ֽ��ϴ�.\r\n");
				cm.dispose();
			//	cm.warp(109030301);
			} else if (selection == 85) {
				cm.sendOk("#e#b�ش��#n#k�� #eGM#n�� #e#b�̺�Ʈ#n#k�� #e#b����#n#k�� ���� #e#b����#n#k�� �� �ֽ��ϴ�.\r\n");
				cm.dispose();
			//	cm.warp(109030401);
			} else if (selection == 100) {
				cm.dispose();
				cm.changeMusic("BgmUI/Title");
			} else if (selection == 101) {
				cm.dispose();
				cm.changeMusic("Bgm00/DragonDream");
			} else if (selection == 102) {
				cm.dispose();
				cm.changeMusic("Bgm04/WhiteChristmas");
			} else if (selection == 103) {
				cm.dispose();
				cm.changeMusic("Bgm06/ComeWithMe");
			} else if (selection == 104) {
				cm.dispose();
				cm.changeMusic("Bgm06/FlyingInABlueDream");
			} else if (selection == 105) {
				cm.dispose();
				cm.changeMusic("Bgm07/FunnyTimeMaker");
			} else if (selection == 106) {
				cm.dispose();
				cm.changeMusic("Bgm07/HighEnough");
			} else if (selection == 107) {
				cm.dispose();
				cm.changeMusic("Bgm07/WhereverYouAre");
			} else if (selection == 108) {
				cm.dispose();
				cm.changeMusic("Bgm08/FindingForest");
			} else if (selection == 109) {
				cm.dispose();
				cm.changeMusic("Bgm08/LetsHuntAliens");
			} else if (selection == 110) {
				cm.dispose();
				cm.changeMusic("Bgm11/DownTown");
			} else if (selection == 111) {
				cm.dispose();
				cm.changeMusic("Bgm11/DarkMountain");
			} else if (selection == 112) {
				cm.dispose();
				cm.changeMusic("Bgm11/ShiningSea");
			} else if (selection == 113) {
				cm.dispose();
				cm.changeMusic("Bgm12/Dispute");
			} else if (selection == 114) {
				cm.dispose();
				cm.changeMusic("Bgm13/CokeTown");
			} else if (selection == 115) {
				cm.dispose();
				cm.changeMusic("Bgm13/Leafre");
			} else if (selection == 116) {
				cm.dispose();
				cm.changeMusic("Bgm14/Ariant");
			} else if (selection == 117) {
				cm.dispose();
				cm.changeMusic("Bgm15/Nautilus");
			} else if (selection == 118) {
				cm.dispose();
				cm.changeMusic("Bgm18/WolfAndSheep");
			} else if (selection == 119) {
				cm.dispose();
				cm.changeMusic("Bgm20/GhostShip");
			} else if (selection == 120) {
				cm.dispose();
				cm.changeMusic("Bgm21/KerningSquare");
			} else if (selection == 121) {
				cm.dispose();
				cm.changeMusic("Bgm21/KerningSquareField");
			} else if (selection == 122) {
				cm.dispose();
				cm.changeMusic("Bgm21/KerningSquareSubway");
			} else if (selection == 123) {
				cm.dispose();
				cm.changeMusic("Bgm22/EdelsteinCity");
			} else if (selection == 124) {
				cm.dispose();
				cm.changeMusic("BgmCN/ShanghaiField");
			} else if (selection == 125) {
				cm.dispose();
				cm.changeMusic("BgmEvent/wichTower");
			} else if (selection == 126) {
				cm.dispose();
				cm.changeMusic("BgmJp/Yume");
			} else if (selection == 127) {
				cm.dispose();
				cm.changeMusic("BgmTW/YoTaipei");
			}
		}

	else if (status == 3) {
		if (selection == 1){
			if (cm.haveItem(4031332) == true) {
				cm.gainItem(4031332, -1);
				cm.gainMeso(1000);
				cm.sendOk("#e#b1000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[1���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.haveItem(4031333) == true) {
				cm.gainItem(4031333, -1);
				cm.gainMeso(1500);
				cm.sendOk("#e#b1500#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[2���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 3) {
			if (cm.haveItem(4031334) == true) {
				cm.gainItem(4031334, -1);
				cm.gainMeso(3500);
				cm.sendOk("#e#b3500#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[3���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.haveItem(4031335) == true) {
				cm.gainItem(4031335, -1);
				cm.gainMeso(10000);
				cm.sendOk("#e#b10000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[4���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 5) {
			if (cm.haveItem(4031336) == true) {
				cm.gainItem(4031336, -1);
				cm.gainMeso(35000);
				cm.sendOk("#e#b35000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			} 
			else {
				cm.sendOk("#e#b[5���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}  
		} else if (selection == 6) {
			if (cm.haveItem(4031337) == true) {
				cm.gainItem(4031337, -1);
				cm.gainMeso(100000);
				cm.sendOk("#e#b100000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[6���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 7) {
			if (cm.haveItem(4031338) == true) {
				cm.gainItem(4031338, -1);
				cm.gainMeso(350000)
				cm.sendOk("#e#b350000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[7���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 8) {
			if (cm.haveItem(4031339) == true) {
				cm.gainItem(4031339, -1);
				cm.gainMeso(1000000);
				cm.sendOk("#e#b1000000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[8���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 9) {
			if (cm.haveItem(4031340) == true) {
				cm.gainItem(4031340, -1);
				cm.gainMeso(3500000);
				cm.sendOk("#e#b3500000#k�޼�#n�� #e#b2��#kĳ��#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[9���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 10){
			if (cm.haveItem(4031341) == true) {
				cm.gainItem(4031341, -1);
				cm.gainMeso(10000000);
				cm.sendOk("#e#b10000000#k�޼�#n�� #e#b10��#kĳ��#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[10���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		}
	}
}




