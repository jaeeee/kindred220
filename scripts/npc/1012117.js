


/*

	���� ���ǽ�

*/

var status = 0;
var beauty = 0;
var facenew;
var colors;
var hairnew;
var haircolor;
var skin = Array(0, 1, 2, 3, 4, 9, 10, 11, 12, 13);
var fhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31400, 31410, 31420, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31590, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31740, 31750, 31780, 31790, 31800, 31810, 31820, 31840, 31850, 31860, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 31990, 34040, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34660, 34670, 34680, 34690, 34700, 34710, 34720, 34730, 34740, 34750, 34760, 34770, 34780, 34790, 34800, 34810, 34820, 34830, 34840, 34850, 34860, 34870, 34880, 34900, 34910, 34940, 34950, 34960, 34970, 37000, 37010, 37020, 37030, 37040, 37060, 37070, 37090, 37100, 37110, 37120, 37130, 37140, 37190, 37210, 37220, 37230, 37240, 37250, 37260, 37280, 37300, 37310, 37320, 37330, 37340, 37350, 37370, 37380, 37400, 37450, 37460, 37490, 37500, 37510, 37520, 37530, 37560, 37570, 37580, 37610, 37620, 37630, 37640, 37650, 37660, 37670, 37680, 37690, 37700, 37710, 37720, 37730, 37740, 37750, 37760, 37770, 37780);
var newhair = Array(37790, 37800, 37810, 37820, 37830, 37840, 37850, 37860, 37880, 37910, 37920, 37940, 37950, 37960, 37970, 37980, 37990, 38000, 38010, 38020, 38030, 38040, 38050, 38060, 38070, 38090, 38100, 38110, 38120, 38130, 38270, 38280, 38290, 38300, 38310, 38390, 38400, 38410, 38420, 38430, 38440, 38460, 38470, 38490, 38520, 38540, 38560, 38570, 38580, 38590, 38600, 38610, 38620, 38630, 38640, 38650, 38660, 38670, 38690, 38700, 38730, 38740, 38750, 38760, 38800, 38810, 38840, 38860, 38880, 38910, 38940);
var mhair = Array(30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30560, 30570, 30590, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30700, 30710, 30730, 30760, 30770, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30910, 30930, 30940, 30950, 33030, 33060, 33070, 33080, 33090, 33110, 33120, 33130, 33150, 33170, 33180, 33190, 33210, 33220, 33250, 33260, 33270, 33280, 33310, 33330, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33480, 33500, 33510, 33520, 33530, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33990, 36010, 36020, 36030, 36040, 36050, 36070, 36080, 36090, 36100, 36130, 36140, 36150, 36160, 36170, 36180, 36190, 36210, 36220, 36230, 36240, 36250, 36300, 36310, 36330, 36340, 36350, 36380, 36390, 36400, 36410, 36420, 36430, 36440, 36450, 36460, 36470, 36480, 36510, 36520, 36530, 36570, 36580, 36590, 36620, 36630, 36640, 36650, 36670, 36680, 36690, 36700, 36710, 36720, 36730, 36740, 36750, 36760, 36770, 36780, 36790, 36800, 36810, 36820, 36830, 36840, 36850, 36860, 36900, 36910, 36920, 36940, 36950, 36980, 36990);
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20024, 20025, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20055, 20056, 20057, 20058, 20059, 20060, 20061, 20062, 20063, 20064, 20065, 20066, 20067, 20068, 20069, 20070, 20071, 20072, 20074, 20075, 20076, 20077, 20080, 20081, 20082, 20083, 20084, 20085, 20086, 20087, 20088, 20089, 20090, 20093, 20094, 20095, 20097, 20098, 20099);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21023, 21024, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 21059, 21060, 21061, 21062, 21063, 21064, 21065, 21066, 21067, 21069, 21070, 21071, 21072, 21073, 21074, 21075, 21077, 21078, 21079, 21080, 21081, 21082, 21083, 21084, 21085, 21086, 21089, 21090, 21091, 21092, 21093, 21094, 21095, 21096, 21097, 21098);

var select = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
 cm.sendSimple("��What shall I change for you? #n#b\r\n#L1##i2541007# Hair#l�� #n#b\r\n#L69##i5150061# Hair 2 (female only)#l��#n#b\r\n#L3##i5152057# Face#l#e��#n#b\r\n#n#L6##i1662039# Android\r\n\r\n#L0##i5153015# #bSkin color#l��#n#b\r\n#L2##i5151036# Hair color#l #n#b\r\n #L4##i5152100# Eye color#l ");
    } else if (status == 1) {
        if (selection == 6) {
            cm.dispose();
            cm.openNpc(1012123);
            return;
        }
        
        
	if (cm.getPlayer().getGender() == 0) {
	    if (selection == 0) {
		beauty = 1;
		cm.askAvatar("���ϴ� �Ǻθ� �������ּ���.", skin);
	    } else if (selection == 1) {
		beauty = 2;
		hairnew = Array();
		for (var i = 0; i < mhair.length; i++) {
		    if (mhair[i] == 30100 || mhair[i] == 30010) {
			hairnew.push(mhair[i]);
		    } else {
			hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair() % 10));
		    }
		}
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", hairnew);
} else if (selection == 69) {
		beauty = 2;
		hairnew = Array();
		for (var i = 0; i < newhair.length; i++) {
		    hairnew.push(newhair[i] + parseInt(cm.getPlayer().getHair() % 10));
		}
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", hairnew);
	    } else if (selection == 2) {
		beauty = 3;
		haircolor = Array();
		var current = parseInt(cm.getPlayer().getHair() / 10) * 10;
		if (current == 30100) {
		    haircolor = Array(current, current + 1, current + 2, current + 3, current + 4, current + 5, current + 6, current + 7);
		} else if (current == 30010) {
		    haircolor = Array(current);
		} else {
		    for (var i = 0; i < 8; i++) {
			haircolor.push(current + i);
		    }
		}
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", haircolor);
	    } else if (selection == 3) {
		beauty = 4;
		facenew = Array();
		for (var i = 0; i < mface.length; i++) {
		    if (mface[i] == 20021 || mface[i] == 20022) {
			facenew.push(mface[i]);
		    } else {
			facenew.push(mface[i] + cm.getPlayer().getFace() % 1000 - (cm.getPlayer().getFace() % 100));
		    }
		}
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", facenew);
	     } else if (selection == 4) {
		beauty = 5;
		var current = cm.getPlayerStat("FACE") % 100 + 21000;
		colors = Array();
		if (current == 21027 || current == 21028 || current == 21029 || current == 21030 || current == 21031 || current == 21053 || current == 21054 || current == 21046 || current == 21047) {
			colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600);
		} else {
			colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
		}
		cm.sendStyle("Pick an eye color that you would like.", colors);
	    }
	} else {
	    if (selection == 0) {
		beauty = 1;
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", skin);
	    } else if (selection == 1) {
		beauty = 2;
		hairnew = Array();
		for (var i = 0; i < fhair.length; i++) {
		    hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair() % 10));
		}
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", hairnew);
   		} else if (selection == 69) {
		beauty = 2;
		hairnew = Array();
		for (var i = 0; i < newhair.length; i++) {
		    hairnew.push(newhair[i] + parseInt(cm.getPlayer().getHair() % 10));
		}
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", hairnew);
	    } else if (selection == 2) {
		beauty = 3;
		haircolor = Array();
		var current = parseInt(cm.getPlayer().getHair() / 10) * 10;
		for (var i = 0; i < 8; i++) {
		    haircolor.push(current + i);
		}
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", haircolor);
	    } else if (selection == 3) {
		beauty = 4;
		facenew = Array();
		for (var i = 0; i < fface.length; i++) {
		    facenew.push(fface[i] + cm.getPlayer().getFace() % 1000 - (cm.getPlayer().getFace() % 100));
		}
		cm.askAvatar("���ϴ� �ƹ�Ÿ�� �������ּ���.", facenew);
	  } else if (selection == 4) {
		beauty = 5;
		var current = cm.getPlayerStat("FACE") % 100 + 21000;
		colors = Array();
		if (current == 21027 || current == 21028 || current == 21029 || current == 21030 || current == 21031 || current == 21053 || current == 21054 || current == 21046 || current == 21047) {
			colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600);
		} else {
			colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
		}
		cm.sendStyle("Pick an eye color that you would like.", colors);
	    }
	}
        if (selection == 5) {
            select = selection;
            cm.sendYesNo("����ȯ�� ���� �Ͻðڽ��ϱ�?");
        }
    } else if (status == 2) {
        selection = selection & 0xFF;
        if (beauty == 1)
	    cm.setAvatar(4000000, skin[selection]);
        else if (beauty == 2 || beauty == 6)
	    cm.setAvatar(4000000, hairnew[selection]);
        else if (beauty == 3)
	    cm.setAvatar(4000000, haircolor[selection]);
        else if (beauty == 4 || beauty == 7)
	    cm.setAvatar(4000000, facenew[selection]);
        else if (beauty == 5)
	    cm.setAvatar(4000000, colors[selection]);
        if (select == 5) {
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setHair(31002);
                cm.getPlayer().setFace(21700);
                cm.getPlayer().setGender(1);
            } else if (cm.getPlayer().getGender() == 1) {
                cm.getPlayer().setHair(30000);
                cm.getPlayer().setFace(20100);
                cm.getPlayer().setGender(0);
            }
            cm.fakeRelog();
            cm.updateChar();
        }
        cm.dispose();
	   
    }
}
