


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 




var maps = new Array(

new Array(980000000, 50000),
new Array(926100600, 50000),
new Array(401060100, 50000)

);

var mapNames = new Array("#b[��õ Lv 10 ~ 18] �ٶ��ɼ�Ǯ", "#b[��õ Lv 18 ~ 22] ���� ���4");
var status = -1;
var select = -1;

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
        
        //cm.dispose();
        //cm.openNpc(9000086);
        //return;
        var place = "���� ���� �� ��Ƽ����Ʈ�� ����ڴ�.\r\n���� �̵��ϰ� ������?\r\n��� 5���޼Ҹ� �ް� �̵���������.\r\n#r";
          	place += "#h #��. ���� �̵��Ͻðھ��?#n";
		for (var i = 0; i < maplist.length; i++) {
		place += "\r\n#b#L" + i + "# " + map[i] + "#l";
                }
    } else if (status == 1) {
        select = selection;
        cm.sendYesNo("������� ���� #b#m"+maps[select][0]+"##k �¾�? ����� "+maps[select][1]+"�޼Ҿ�. ���� �̵��ϰ� �;�?");
    } else if (status == 2) {
        if (cm.getPlayer().getMeso() >= maps[select][1]) {
            cm.gainMeso(-maps[select][1]);
            cm.warp(maps[select][0]);
            cm.dispose();
        } else {
            cm.sendOk("�޼Ҵ� �� ������ �ִ°� �¾�? �ٽ��ѹ� Ȯ���� ��.");
            cm.dispose();
        }
    }
}

*/
var status = 0;
var maps = new Array("100020200", "100040400", "101040000", "103040400", "222010000", "260020700", "261020300", "261020400", "261010102", "251010402", "240020000", "240020400", "240020200", "240030000", "211060100", "211060300", "270020100", "240040510", "240040511");
var mapNames = new Array("#b[��õ Lv 10 ~ 18] �ٶ��ɼ�Ǯ", "#b[��õ Lv 18 ~ 22] ���� ���4", "#b[��õ Lv 22 ~ 30] ������ ��", "#b[��õ Lv 30 ~ 45] 7�� 8�� A����", "#b[��õ Lv 45 ~ 62] ����Ա�", "#b[��õ Lv 62 ~ 70] ��������1", "#d[��õ Lv 70 ~ 77] ������ C-1 ����", "#d[��õ Lv 77 ~ 85] ������ C-2 ����", "#d[��õ Lv 85 ~ 100] ������ 202ȣ", "#d[��õ Lv 100 ~ 110] ������ ������ �ұ�2", "#d[��õ Lv 110 ~ 120] ���� ��Ÿ��ν��� ���� ", "#d[��õ Lv 110 ~ 120] Ǫ�� ��Ÿ��ν��� ����", "#d[��õ Lv 110 ~ 120] ���� ��Ÿ��ν��� ����", "#r[��õ Lv 120 ~ 130] ���� �� �Ա�", "#r[��õ Lv 130 ~ 140] ���� �Ʒ�1", "#r[��õ Lv 130 ~ 140] ���� �Ʒ�2", "#r[��õ Lv 140 ~ 150] ��ȸ�Ǳ� 1", "#r[��õ Lv 140 ~ 150] ���� ���� ����", "#r[��õ Lv 150 ~ 160] ������ ���� ����");
var maplist = new Array("401000000", "104000000", "120000000", "100000000", "102000000", "101000000", "103000000", "105000000", "130000000", "310000000", "200000000", "220000000", "222000000", "250000000", "240000000", "260000200", "261000000", "230000000", "211000000", "251000000", "270000100");
var map = new Array("#r[NEW]#k �︮�ÿ�", "�����ױ�", "��ƿ����", "��׽ý�", "�丮��", "�����Ͼ�", "Ŀ�׽�Ƽ", "�����ǿ��", "������", "������Ÿ��", "������", "���긮��", "�Ʒ�����", "����", "������", "�Ƹ���Ʈ", "����Ƽ��", "����Ƹ���", "������", "���ʸ���", "�ð��� ����");

var warp = new Array("������ ���ڽ��ϴ�!", "����ͷ� ���ڽ��ϴ�!");
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 1 && mode == 0) {
            cm.sendNext("�� ������~");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("\r\n\r\n#b#h ##k��.\r\n���� ���� �� ��Ƽ����Ʈ ����� �Դϴ�.");
	} else if (status == 1) {
		var msg = "#h #��, �ý÷� ������� ���ðھ��?#n";
		for (var i = 101; i < 102; i++) {
		msg += "\r\n#b#L" + i + "# " + warp[i-100] + "#l";
		}
		cm.sendSimple(msg);
	} else if (status == 4) {
          	var place = "#h #��. ���� �̵��Ͻðھ��?#n";
		for (var i = 0; i < maplist.length; i++) {
		place += "\r\n#b#L" + i + "# " + map[i] + "#l";
                }
           	cm.sendSimple(place);
        } else if (status == 5) {
		    selectedMap = selection;
                    cm.sendYesNo("������ �� ������ �̵��Ͻðڽ��ϱ�?\r\n���ƿ��Ƕ����� #b@��׽ý�#k ��ɾ ����Ͻø� �˴ϴ�.");
        } else if (status == 6) {
                        cm.warp(maplist[selectedMap], 0);
                       // cm.dispose();
	} else if (status == 7) {
          	var where = "#h #��. ���� �̵��Ͻðھ��?#n";
		for (var i = 0; i < maps.length; i++) {
		where += "\r\n#b#L" + i + "# " + mapNames[i] + "#l";
                }
           	cm.sendSimple(where);
        } else if (status == 8) {
		    selectedMap = selection;
                    cm.sendYesNo("������ �� ����ͷ� �̵��Ͻðڽ��ϱ�?\r\n���ƿ��Ƕ����� #b@��׽ý�#k ��ɾ ����Ͻø� �˴ϴ�.");
        } else if (status == 9) {
                        cm.warp(maps[selectedMap], 0);
                        cm.dispose();
	} else if (selection == 100) {
		cm.sendNext("\r\n�̵������� ���� ����Ʈ�� �ҷ��ɴϴ�.")
		status++;
	} else if (selection == 101) {
		cm.sendNext("\r\n�̵������� ����� ����Ʈ�� �ҷ��ɴϴ�.")
		status++;
		status++;
		status++;
		status++;
		}
	}
}

/*
var status = 0;
var beauty = 0;
var selectioned = 0;
var selectiones = 0;
var colors;
var hairnew;
var facenew;
var haircolor;
var skin = Array(0, 1, 2, 3, 4, 9, 10, 11, 12, 13);
var mface = Array(20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20024,20025,20027,20028,20029,20030,20031,20032,20036,20037,20040,20043,20044,20045,20046,20047,20048,20049,20050,20053,20055,20056,20057,20058,20059,20060,20061,20062,20063,20064,20065,20066,20067,20068,20069);
var mhair = Array(30000,30020,30030,30040,30050,30060,30100,30110,30120,30130,30140,30150,30160,30170,30180,30190,30200,30210,30220,30230,30240,30250,30260,30270,30280,30290,30300,30310,30320,30330,30340,30350,30360,30370,30400,30410,30420,30440,30450,30460,30470,30480,30490,30510,30520,30530,30540,30560,30570,30590,30610,30620,30630,30640,30650,30660,30670,30680,30700,30710,30730,30760,30770,30790,30800,30810,30820,30830,30840,30850,30860,30870,30880,30910,30930,30940,30950,33030,33060,33070,33080,33090,33110,33120,33130,33150,33170,33180,33190,33210,33220,33250,33260,33270,33280,33310,33330,33350,33360,33370,33380,33390,33400,33410,33430,33440,33450,33460,33480,33500,33510,33520,33530,33550,33580,33590,33600,33610,33620,33630,33640,33660,33670,33680,33690,33700,33710,33720,33730,33740,33750,33760,33770,33780,33790,33800,33810,33820,33830,33930,33940,33950,33960);
var fface = Array(21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019,21020,21021,21023,21024,21026,21027,21028,21029,21030,21031,21033,21035,21036,21038,21041,21042,21043,21044,21045,21046,21047,21048,21052,21053,21054,21055,21056,21057,21058,21059,21060,21061,21062,21063,21064);
var fhair = Array(31000,31010,31020,31030,31040,31050,31060,31070,31080,31090,31100,31110,31120,31130,31140,31150,31160,31170,31180,31190,31200,31210,31220,31230,31240,31250,31260,31270,31280,31290,31300,31310,31320,31330,31340,31350,31400,31410,31420,31440,31450,31460,31470,31480,31490,31510,31520,31530,31540,31550,31560,31590,31610,31620,31630,31640,31650,31670,31680,31690,31700,31710,31720,31740,31750,31780,31790,31800,31810,31820,31840,31850,31860,31880,31890,31910,31920,31930,31940,31950,31990,34040,34070,34080,34090,34100,34110,34120,34130,34140,34150,34160,34170,34180,34190,34210,34220,34230,34240,34250,34260,34270,34310,34320,34330,34340,34360,34370,34380,34400,34410,34420,34430,34440,34450,34470,34480,34490,34510,34540,34560,34590,34600,34610,34620,34630,34640,34660,34670,34680,34690,34700,34710,34720,34730,34740,34750,34760,34770,34780,34790,34800,34810,34820,34830,34840,34850,34860,34870);

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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var chat = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
            chat += "\r\n#L1#�̵��� �ϰڽ��ϴ�.";
            chat += "\r\n#L2#������ �ϰڽ��ϴ�.";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendOk("������ �����ϽǼ� �ֽ��ϴ�.");
                cm.dispose();
            } else if (selection == 1) {
                var warpmain = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                warpmain += "\r\n#L5#������ �̵��� �ϰڽ��ϴ�.";
                warpmain += "\r\n#L6#����ͷ� �̵��� �ϰڽ��ϴ�.";   
                warpmain += "\r\n#L7#������ ��ġ�Ϸ� ���ڽ��ϴ�.";   
                cm.sendSimple(warpmain);
            } else if (selection == 2) {
                var beautymain = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                beautymain += "\r\n#L8#���� �ٲٰڽ��ϴ�.";
                beautymain += "\r\n#L9#�Ӹ��� �ٲٰڽ��ϴ�.";
                beautymain += "\r\n#L10#�Ǻ��� ���� �ٲٰڽ��ϴ�.";
                beautymain += "\r\n#L11#�Ӹ��� ���� �ٲٰڽ��ϴ�.";
                beautymain += "\r\n#L12#������ ���� �ٲٰڽ��ϴ�.";  
                beautymain += "\r\n#L13#������ �ٲٰڽ��ϴ�.";  
                cm.sendSimple(beautymain);
            } else if (selection == 3) {
                cm.sendOk("������ �����ϽǼ� �ֽ��ϴ�.");
                cm.dispose();
            }
        } else if (status == 2) {
            if (selection == 0) {
                var adve = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                adve += "\r\n#L0#����� ������ �ϰڽ��ϴ�.";
                adve += "\r\n#L1#�ü��� ������ �ϰڽ��ϴ�.";
                adve += "\r\n#L2#������� ������ �ϰڽ��ϴ�.";
                adve += "\r\n#L3#�������� ������ �ϰڽ��ϴ�.";
                adve += "\r\n#L4#�������� ������ �ϰڽ��ϴ�.";
                adve += "\r\n#L5#ĳ���ͷ� ������ �ϰڽ��ϴ�.";
                adve += "\r\n#L6#�����̵�� ������ �ϰڽ��ϴ�.";
                cm.sendSimple(adve);
            } else if (selection == 1) {
                var hero = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                hero += "\r\n#L7#�ƶ����� ������ �ϰڽ��ϴ�.";
                hero += "\r\n#L8#�������� ������ �ϰڽ��ϴ�.";
                hero += "\r\n#L9#�������� ������ �ϰڽ��ϴ�.";
                hero += "\r\n#L10#�޸��������� ������ �ϰڽ��ϴ�.";
                cm.sendSimple(hero);
            } else if (selection == 2) {
                var resy = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                resy += "\r\n#L11#��ī�з� ������ �ϰڽ��ϴ�.";
                resy += "\r\n#L12#��Ʋ�������� ������ �ϰڽ��ϴ�.";
                resy += "\r\n#L13#���ϵ����ͷ� ������ �ϰڽ��ϴ�.";
                resy += "\r\n#L14#���󽽷��̾�� ������ �ϰڽ��ϴ�.";
                cm.sendSimple(resy);
            } else if (selection == 3) {
                var cygn = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                cygn += "\r\n#L15#�ҿ︶���ͷ� ������ �ϰڽ��ϴ�.";
                cygn += "\r\n#L16#����Ʈ��Ŀ�� ������ �ϰڽ��ϴ�.";
                cygn += "\r\n#L17#��Ʈ����Ŀ�� ������ �ϰڽ��ϴ�.";
                cygn += "\r\n#L18#�÷������ڵ�� ������ �ϰڽ��ϴ�.";
                cygn += "\r\n#L19#����극��Ŀ�� ������ �ϰڽ��ϴ�.";
                cm.sendSimple(cygn);
	    } else if (selection == 4) {
                var cygn = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                cygn += "\r\n#L38#�����Ϸ� ������ �ϰڽ��ϴ�.";
                cm.sendSimple(cygn);
            } else if (selection == 5) {
                var vlig = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                vlig += "\r\n#L20#�������� �̵��� �ϰڽ��ϴ�."; 
                vlig += "\r\n#L21#������� �̵��� �ϰڽ��ϴ�.";
                vlig += "\r\n#L22#���췼�� �̵��� �ϰڽ��ϴ�.";
                vlig += "\r\n#L23#��׽ý��� �̵��� �ϰڽ��ϴ�.";
                vlig += "\r\n#L24#�����ϾƷ� �̵��� �ϰڽ��ϴ�.";
                vlig += "\r\n#L25#�丮������ �̵��� �ϰڽ��ϴ�."; 
                vlig += "\r\n#L26#Ŀ�׽�Ƽ�� �̵��� �ϰڽ��ϴ�.";
                vlig += "\r\n#L27#������Ÿ������ �̵��� �ϰڽ��ϴ�.";
                cm.sendSimple(vlig);
            } else if (selection == 6) {
                var hunt = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                hunt += "\r\n#L28#[001 - 010] ���� �ؾȰ�";
                hunt += "\r\n#L29#[011 - 035] ���ɹ����� ��";
                hunt += "\r\n#L30#[036 - 050] 7�� 8�� A����";
                hunt += "\r\n#L31#[051 - 070] ���� �� �縷";
                hunt += "\r\n#L32#[071 - 100] ������ C-2 ����";
                hunt += "\r\n#L33#[101 - 120] ������ ������ �ұ�2"; 
                cm.sendSimple(hunt);
            } else if (selection == 7) {
                var boss = "������ ���忡 ���� ���� ȯ���մϴ�.#b\r\n";
                boss += "\r\n#L34#[�Ǿƴ���] �Ǿƴ����� ����"; 
                boss += "\r\n#L35#[��Ǯ������] �ð�ž�� �ٿ�"; 
                boss += "\r\n#L36#[����] ������ ����"; 
                boss += "\r\n#L37#[ȥ����] ȥ������ ����"; 
                boss += "\r\n#L41#[��ũ��] �ŵ��� Ȳȥ"; 
                boss += "\r\n#L38#[ī��������] ī���� ������ ����"; 
                boss += "\r\n#L39#[ī����ȥ����] ī���� ȥ������ ����"; 
                boss += "\r\n#L40#[����] �ñ׳ʽ��� ����"; 
                cm.sendSimple(boss);
            } else if (selection == 8) {
                if (cm.getPlayer().getGender() == 0) {
                    beauty = 1;
                    facenew = Array();
                    for (var i = 0; i < mface.length; i++) {
                        if (mface[i] == 20021 || mface[i] == 20022) {
                            facenew.push(mface[i]);
                        } else {
                            facenew.push(mface[i] + cm.getPlayer().getFace() % 1000 - (cm.getPlayer().getFace() % 100));
                        }
                    }
                    cm.askAvatar("������ ���忡 ���� ���� ȯ���մϴ�.",facenew);
                } else {
                    beauty = 1;
                    facenew = Array();
                    for (var i = 0; i < fface.length; i++) {
                        if (fface[i] == 20021 || fface[i] == 20022) {
                            facenew.push(fface[i]);
                        } else {
                            facenew.push(fface[i] + cm.getPlayer().getFace() % 1000 - (cm.getPlayer().getFace() % 100));
                        }
                    }
                    cm.askAvatar("������ ���忡 ���� ���� ȯ���մϴ�.",facenew);
                }
            } else if (selection == 9) {
                if (cm.getPlayer().getGender() == 0) {
                    beauty = 2;
                    hairnew = Array();
                    for (var i = 0; i < mhair.length; i++) {
                        if (mhair[i] == 30100 || mhair[i] == 30010) {
                            hairnew.push(mhair[i]);
                        } else {
                            hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair() % 10));
                        }
                    }
                    cm.askAvatar("������ ���忡 ���� ���� ȯ���մϴ�.",hairnew);
                } else {
                    beauty = 2;
                    hairnew = Array();
                    for (var i = 0; i < fhair.length; i++) {
                        if (fhair[i] == 30100 || fhair[i] == 30010) {
                            hairnew.push(fhair[i]);
                        } else {
                            hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair() % 10));
                        }
                    }
                    cm.askAvatar("������ ���忡 ���� ���� ȯ���մϴ�.",hairnew);
                }
            } else if (selection == 10) {
                beauty = 3;
                cm.askAvatar("������ ���忡 ���� ���� ȯ���մϴ�.",skin);
            } else if (selection == 11) {
                beauty = 4;
                haircolor = Array();
                var current = parseInt(cm.getPlayer().getHair() / 10) * 10;
                if (current == 30100) {
                    haircolor = Array(current,current + 1,current + 2,current + 3,current + 4,current + 5,current + 6,current + 7);
                } else if (current == 30010) {
                    haircolor = Array(current);
                } else {
                    for (var i = 0; i < 8; i++) {
                        haircolor.push(current + i);
                    }
                }
                cm.askAvatar("������ ���忡 ���� ���� ȯ���մϴ�.",haircolor);
            } else if (selection == 12) {
                beauty = 5;
                var current = cm.getPlayer().getFace() % 100 + 20000;
                colors = Array();
                if (current == 20021 || current == 20022) {
                    colors = Array(current,current + 100,current + 200,current + 300,current + 400,current + 600,current + 700);
                } else if (current == 20041 || current == 20042) {
                    colors = Array(current,current + 100,current + 200,current + 300);
                } else {
                    colors = Array(current,current + 100,current + 200,current + 300,current + 400,current + 500,current + 600,current + 700);
                cm.askAvatar("������ ���忡 ���� ���� ȯ���մϴ�.",colors);
                }
            } else if (selection == 13) {
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
            cm.dispose();
        }
	    selectioned = selection;
        } else if (status == 3) {
	    selection = selection & 0xFF;
	    if (beauty == 1) {
            	cm.setAvatar(4000000,facenew[selection]);
                cm.dispose();
            } else if (beauty == 2) {
            	cm.setAvatar(4000000,hairnew[selection]);
                cm.dispose();
            } else if (beauty == 3) {
            	cm.setAvatar(4000000,skin[selection]);
                cm.dispose();
            } else if (beauty == 4) {
            	cm.setAvatar(4000000,haircolor[selection]);
                cm.dispose();
            } else if (beauty == 5) {
            	cm.setAvatar(4000000,colors[selection]);
                cm.dispose();
            } else if (selectioned == 0) {
		if (selection == 0) {
		    var warrior = "���翡 ���� �˰� ������?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                        warrior += "\r\n#L0#����� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 100)
                    	warrior += "\r\n#L1#�����ͷ� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 100)
                    	warrior += "\r\n#L2#�������� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 100)
                    	warrior += "\r\n#L3#���Ǿ������ ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130)
                    	warrior += "\r\n#L4#3�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	warrior += "\r\n#L4#4�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(warrior);
		} else if (selection == 1) {
		    var bowman = "�ü��� ���� �˰� �����Ű���?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	bowman += "\r\n#L5#�ü��� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 300)
                    	bowman += "\r\n#L6#���ͷ� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 300)
                    	bowman += "\r\n#L7#����� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 310 || cm.getJob() == 320)
                    	bowman += "\r\n#L8#3�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	bowman += "\r\n#L8#4�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(bowman);
		} else if (selection == 2) {
		    var magicion = "�����簡 �ǰ� ���� �� ���Է�...#b\r\n";
                    if (cm.getLevel() >= 8 && cm.getJob() == 0)
                    	magicion += "\r\n#L9#������� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 200)
                    	magicion += "\r\n#L10#���ڵ�(��,��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 200)
                    	magicion += "\r\n#L11#���ڵ�(����,����)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 200)
                    	magicion += "\r\n#L12#Ŭ�������� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)
                    	magicion += "\r\n#L13#3�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	magicion += "\r\n#L13#4�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(magicion);
		} else if (selection == 3) {
		    var thief = "����,�ڳ�! ������ �ǰ� ������?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	thief += "\r\n#L14#�������� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 400)
                    	thief += "\r\n#L15#��ؽ����� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 400)
                    	thief += "\r\n#L16#������ ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 410 || cm.getJob() == 420)
                    	thief += "\r\n#L17#3�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	thief += "\r\n#L17#4�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(thief);
		} else if (selection == 4) {
		    var pirat = "������ �ƹ��� �Ǵ°� �ƴ϶��!#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	pirat += "\r\n#L18#�������� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 500)
                    	pirat += "\r\n#L19#�������ͷ� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 500)
                    	pirat += "\r\n#L20#�ǽ����ŷ� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 510 || cm.getJob() == 520)
                    	pirat += "\r\n#L21#3�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	pirat += "\r\n#L21#4�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(pirat);
		} else if (selection == 5) {
		    var canon = "ĳ���Ͱ� �ǰ� �����ž�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	canon += "\r\n#L22#ĳ����(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 501)
                    	canon += "\r\n#L23#ĳ����(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 530)
                    	canon += "\r\n#L24#ĳ����(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() == 531)
                    	canon += "\r\n#L24#ĳ����(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(canon);
		} else if (selection == 6) {
		    var dual = "������... ������ �Ҷ��������� ��������.#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	dual += "\r\n#L25#�������� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 20 && cm.getJob() == 400)
                    	dual += "\r\n#L26#���̵��� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 430)
                    	dual += "\r\n#L27#���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 50 && cm.getJob() == 431)
                    	dual += "\r\n#L27#��󸶽��ͷ� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 432)
                    	dual += "\r\n#L27#�����ŷ� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() == 433)
                    	dual += "\r\n#L27#�����̵�� ������ �ϰڽ��ϴ�.";  
		    cm.sendSimple(dual);
		}
            } else if (selectioned == 1) {
		if (selection == 7) {
		    var aran = "����ü�� �����̶�� �༮��...#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 2000)
                    	aran += "\r\n#L28#�ƶ�(1��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 2100)
                    	aran += "\r\n#L29#�ƶ�(2��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	aran += "\r\n#L30#�ƶ�(3��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	aran += "\r\n#L30#�ƶ�(4��)���� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(aran);
		} else if (selection == 8) {
		    var evan = "������ �ǰ� �����ž�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 2001)
                    	evan += "\r\n#L31#����(1��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 20 && cm.getJob() == 2200)
                    	evan += "\r\n#L32#����(2��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 2210)
                    	evan += "\r\n#L33#����(3��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 40 && cm.getJob() == 2211)
                    	evan += "\r\n#L33#����(4��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 50 && cm.getJob() == 2212)
                    	evan += "\r\n#L33#����(5��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 60 && cm.getJob() == 2213)
                    	evan += "\r\n#L33#����(6��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 80 && cm.getJob() == 2214)
                    	evan += "\r\n#L33#����(7��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 100 && cm.getJob() == 2215)
                    	evan += "\r\n#L33#����(8��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() == 2216)
                    	evan += "\r\n#L33#����(9��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 160 && cm.getJob() == 2217)
                    	evan += "\r\n#L33#����(10��)���� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(evan);
		} else if (selection == 9) {
		    var pantom = "������ �ǰ� �����ž�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	pantom += "\r\n#L34#����(1��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 2400)
                    	pantom += "\r\n#L35#����(2��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	pantom += "\r\n#L36#����(3��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	pantom += "\r\n#L36#����(4��)���� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(pantom);
		} else if (selection == 10) {
		    var mercedes = "�޸��������� �ǰ� �����ž�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	mercedes += "\r\n#L37#�޸�������(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 2300)
                    	mercedes += "\r\n#L38#�޸�������(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	mercedes += "\r\n#L39#�޸�������(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	mercedes += "\r\n#L39#�޸�������(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(mercedes);
		}
            } else if (selectioned == 2) {
		if (selection == 11) {
		    var mecanic = "����� ����ü, ��ī�п� ���� �ֽ��ϱ�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 3000)
                    	mecanic += "\r\n#L40#��ī��(1��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 3500)
                    	mecanic += "\r\n#L41#��ī��(2��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	mecanic += "\r\n#L42#��ī��(3��)���� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	mecanic += "\r\n#L42#��ī��(4��)���� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(mecanic);
		} else if (selection == 12) {
		    var battle = "�ο�� ������, ��Ʋ�������� ������ �ִ� �ǰ�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 3000)
                    	battle += "\r\n#L43#��Ʋ������(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 3200)
                    	battle += "\r\n#L44#��Ʋ������(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	battle += "\r\n#L45#��Ʋ������(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	battle += "\r\n#L45#��Ʋ������(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(battle);
		} else if (selection == 13) {
		    var whild = "�η��� ���� �ü�, ���ϵ����Ϳ� ���� �־�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 3000)
                    	whild += "\r\n#L46#���ϵ�����(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 3300)
                   	whild += "\r\n#L47#���ϵ�����(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	whild += "\r\n#L48#���ϵ�����(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	whild += "\r\n#L48#���ϵ�����(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(whild);
		} else if (selection == 14) {
		    var demon = "���󽽷��̾ �ǰ� �����ž�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	demon += "\r\n#L49#���󽽷��̾�(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 3100)
                    	demon += "\r\n#L50#���󽽷��̾�(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	demon += "\r\n#L51#���󽽷��̾�(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	demon += "\r\n#L51#���󽽷��̾�(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(demon);
		}
            } else if (selectioned == 3) {
		if (selection == 15) {
		    var soul = "���� ���, �ҿ︶���Ϳ� ������ �ִ� �ǰ�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	soul += "\r\n#L52#�ҿ︶����(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1100)
                    	soul += "\r\n#L53#�ҿ︶����(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	soul += "\r\n#L54#�ҿ︶����(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	soul += "\r\n#L54#�ҿ︶����(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(soul);
		} else if (selection == 16) {
		    var walker = "����� ���, ����Ʈ��Ŀ�� ������ �ֳ�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	walker += "\r\n#L55#����Ʈ��Ŀ(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1400)
                    	walker += "\r\n#L56#����Ʈ��Ŀ(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	walker += "\r\n#L57#����Ʈ��Ŀ(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	walker += "\r\n#L57#����Ʈ��Ŀ(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(walker);
		} else if (selection == 17) {
		    var straker = "������ ���, ��Ʈ����Ŀ�� ������ �ִ� �ž�?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	straker += "\r\n#L58#��Ʈ����Ŀ(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1500)
                    	straker += "\r\n#L59#��Ʈ����Ŀ(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	straker += "\r\n#L60#��Ʈ����Ŀ(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	straker += "\r\n#L60#��Ʈ����Ŀ(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(straker);
		} else if (selection == 18) {
		    var flame = "���� ���, �÷������ڵ忡 ������ ������ �ǰ���?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	flame += "\r\n#L61#�÷������ڵ�(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1200)
                    	flame += "\r\n#L62#�÷������ڵ�(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	flame += "\r\n#L63#�÷������ڵ�(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	flame += "\r\n#L63#�÷������ڵ�(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(flame);
		} else if (selection == 19) {
		    var wind = "�ٶ��� ���, ����극��Ŀ�� ������ �ֳ���?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	wind += "\r\n#L64#����극��Ŀ(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1300)
                    	wind += "\r\n#L65#����극��Ŀ(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	wind += "\r\n#L66#����극��Ŀ(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	wind += "\r\n#L66#����극��Ŀ(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(wind);
		}
	    } else if (selectioned == 4) {
		if (selection == 38) {
		    var wind = "���� ���, �����Ͽ� ������ �ֳ���?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 5000)
                    	wind += "\r\n#L67#������(1��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 5100)
                    	wind += "\r\n#L68#������(2��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	wind += "\r\n#L69#������(3��)�� ������ �ϰڽ��ϴ�.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	wind += "\r\n#L70#������(4��)�� ������ �ϰڽ��ϴ�.";
		    cm.sendSimple(wind);
		}
            } else if (selectioned == 5) {
		if (selection == 20) {
		    cm.warp(140000000,0);
		    cm.dispose();
		} else if (selection == 21) {
            	    cm.warp(130000000,0);
            	    cm.dispose();
            	} else if (selection == 22) {
            	    cm.warp(101050000);
            	    cm.dispose();
            	} else if (selection == 23) {
            	    cm.warp(100000000);
            	    cm.dispose();
            	} else if (selection == 24) {
            	    cm.warp(101000000);
            	    cm.dispose();
            	} else if (selection == 25) {
            	    cm.warp(102000000);
            	    cm.dispose();
            	} else if (selection == 26) {
            	    cm.warp(103000000);
            	    cm.dispose();
            	} else if (selection == 27) {
                    cm.warp(310000000);
            	    cm.dispose();
		}
            } else if (selectioned == 6) {
            	if (selection == 28) {
            	    cm.warp(3000100);
            	    cm.dispose();
            	} else if (selection == 29) {
            	    cm.warp(100020400);
            	    cm.dispose();
            	} else if (selection == 30) {
            	    cm.warp(103040400);
            	    cm.dispose();
            	} else if (selection == 31) {
            	    cm.warp(260020300);
            	    cm.dispose();
            	} else if (selection == 32) {
            	    cm.warp(261020400);
            	    cm.dispose();
            	} else if (selection == 33) {
            	    cm.warp(251010402);
            	    cm.dispose();
		}
            } else if (selectioned == 7) {
            	if (selection == 34) {
            	    cm.warp(230040420);
            	    cm.dispose();
            	} else if (selection == 35) {
            	    cm.warp(220080001);
            	    cm.dispose();
            	} else if (selection == 36) {
           	    cm.warp(280030000);
           	    cm.dispose();
            	} else if (selection == 37) {
            	    cm.warp(240060200);
            	    cm.dispose();
            	} else if (selection == 38) {
            	    cm.warp(280030001);
            	    cm.dispose();
            	} else if (selection == 39) {
            	    cm.warp(240060201);
            	    cm.dispose();
            	} else if (selection == 40) {
            	    cm.warp(271040100);
            	    cm.dispose();
            	} else if (selection == 41) {
            	    cm.warp(270050100);
            	    cm.dispose();
		}
            }
	    selectiones = selectioned;
        } else if (status == 4) {
	    if (selection == 0) {
		cm.changeJob(100); 
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 1) {
		cm.changeJob(110); 
	    } else if (selection == 2) {
		cm.changeJob(120);
	    } else if (selection == 3) {
		cm.changeJob(130);
	    } else if (selection == 4) {
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 5) {
		cm.changeJob(300);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 6) {
		cm.changeJob(310);
	    } else if (selection == 7) {
		cm.changeJob(320);
	    } else if (selection == 8) {
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 9) {
		cm.changeJob(200); 
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 10) {
		cm.changeJob(210);
	    } else if (selection == 11) { 
		cm.changeJob(220);
	    } else if (selection == 12) { 
		cm.changeJob(230);
	    } else if (selection == 13) { 
		cm.changeJob(cm.getJob() +1); 
	    } else if (selection == 14) {
		cm.changeJob(400);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 15) { 
		cm.changeJob(410);
	    } else if (selection == 16) { 
		cm.changeJob(420); 
	    } else if (selection == 17) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 18) {
		cm.changeJob(500); 
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 19) { 
		cm.changeJob(510);
	    } else if (selection == 20) { 
		cm.changeJob(520); 
	    } else if (selection == 21) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 22) {
		cm.changeJob(501);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 23) { 
		cm.changeJob(530);
	    } else if (selection == 24) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 25) {
		cm.changeJob(400);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 26) { 
		cm.changeJob(430);
	    } else if (selection == 27) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 28) {
		cm.changeJob(2100);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 29) {  
		cm.changeJob(2110); 
	    } else if (selection == 30) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 31) {
		cm.changeJob(2200);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 32) { 
		cm.changeJob(2210);
	    } else if (selection == 33) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 34) {
		cm.changeJob(2400);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 35) { 
		cm.changeJob(2410);
	    } else if (selection == 36) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 37) {
		cm.changeJob(2300);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 38) { 
		cm.changeJob(2310);
	    } else if (selection == 39) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 40) {
		cm.changeJob(3500);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 41) { 
		cm.changeJob(3510);
	    } else if (selection == 42) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 43) {
		cm.changeJob(3200); 
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 44) { 
		cm.changeJob(3210); 
	    } else if (selection == 45) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 46) {
		cm.changeJob(3300);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 47) { 
		cm.changeJob(3310);
	    } else if (selection == 48) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 49) {
		cm.changeJob(3100);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 50) { 
		cm.changeJob(3110);
	    } else if (selection == 51) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 52) {
		cm.changeJob(1100);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 53) { 
		cm.changeJob(1110); 
	    } else if (selection == 54) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 55) {
		cm.changeJob(1400);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 56) { 
		cm.changeJob(1410);
	    } else if (selection == 57) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 58) {
		cm.changeJob(1500);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 59) { 
		cm.changeJob(1510);
	    } else if (selection == 60) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 61) {
		cm.changeJob(1200);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 62) { 
		cm.changeJob(1210);
	    } else if (selection == 63) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 64) {
		cm.changeJob(1300); 
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 65) { 
		cm.changeJob(1310); 
	    } else if (selection == 66) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 67) { 
		cm.changeJob(5100);
		cm.setAp(cm.getLevel() * 5);
	    } else if (selection == 68) { 
		cm.changeJob(5110);
	    } else if (selection == 69) { 
		cm.changeJob(5111);
	    } else if (selection == 70) { 
		cm.changeJob(5112);
	    }
	    cm.dispose();
	}
    }
}
*/

