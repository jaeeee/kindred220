/*
타임(time_amd@nate.com)
*/

var status = 0;
var beauty = 0;
var selectioned = 0;
var colors;
var hairnew;
var facenew;
var haircolor;
var skin = Array(0,1,2,3,4,9,10,11,12,13);
var mface = Array(20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20024,20025,20027,20028,20029,20030,20031,20032,20037,20040,20043,20044,20045,20046,20047,20048,20049,20050,20053,20055,20056,20057,20058,20059,20060,20061);
var mhair = Array(30000,30020,30030,30040,30050,30060,30100,30110,30120,30130,30140,30150,30160,30170,30180,30190,30200,30210,30220,30230,30240,30250,30260,30270,30280,30290,30300,30310,30320,30330,30340,30350,30360,30370,30400,30410,30420,30440,30450,30460,30470,30480,30490,30510,30520,30530,30540,30560,30570,30590,30610,30620,30630,30640,30650,30660,30670,30680,30700,30710,30730,30760,30770,30790,30800,30810,30820,30830,30840,30850,30860,30870,30880,30910,30930,30940,30950,33030,33060,33070,33080,33090,33110,33120,33130,33150,33170,33180,33190,33220,33250,33260,33270,33280,33310,33330,33350,33360,33370,33380,33390,33400,33410,33430,33440,33450,33460,33480,33500,33510,33520,33530,33550,33580,33590,33600,33610,33620,33630,33640,33660,33670,33680,33690,33700,33730,33740,33760,33770,33780,33790,33800,33810);
var fface = Array(21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019,21020,21021,21023,21024,21026,21027,21028,21029,21030,21031,21033,21035,21036,21038,21041,21042,21043,21044,21045,21046,21047,21048,21052,21053,21054,21055,21056,21057,21058);
var fhair = Array(31000,31010,31020,31030,31040,31050,31060,31070,31080,31090,31100,31110,31120,31130,31140,31150,31160,31170,31180,31190,31200,31210,31220,31230,31240,31250,31260,31270,31280,31290,31300,31310,31320,31330,31340,31350,31400,31410,31420,31440,31450,31460,31470,31480,31490,31510,31520,31530,31540,31550,31560,31590,31610,31620,31630,31640,31650,31670,31680,31690,31700,31710,31720,31740,31750,31780,31790,31800,31810,31820,31840,31850,31860,31880,31890,31910,31920,31930,31940,31950,31990,34040,34070,34080,34090,34100,34110,34120,34130,34140,34150,34160,34170,34180,34190,34210,34220,34240,34250,34260,34270,34310,34320,34330,34340,34360,34370,34380,34400,34410,34420,34430,34440,34450,34470,34480,34490,34510,34540,34560,34590,34600,34610,34620,34630,34640,34660,34670,34680,34690,34700,34710,34730,34740,34750,34770,34780,34790);

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
            var chat = "저는 자동 전직이 안되는 사람을 돕는사람이에요.#b\r\n";
            chat += "\r\n#L0#전직을 하겠습니다.";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                var jobmain = "직업을 선택하세요.#b\r\n";
                jobmain += "\r\n#L0#(전사,궁수,법사,도적,해적,캐논,듀블) 전직";
                jobmain += "\r\n#L1#(아란,에반,팬텀,메세,루미.은월) 전직";
                jobmain += "\r\n#L2#(메카닉,배메,와헌,데몬,제논) 전직";		
                jobmain += "\r\n#L3#(소마,나워,플위,스커,윈브,미하일) 전직";
                jobmain += "\r\n#L4#(카이저,엔젤릭버스터) 전직";
                cm.sendSimple(jobmain);
			}
        } else if (status == 2) {
            if (selection == 0) {
                var adve = "직업을 선택하세요.#b\r\n";
                adve += "\r\n#L0#전사로 전직을 하겠습니다.";
                adve += "\r\n#L1#궁수로 전직을 하겠습니다.";
                adve += "\r\n#L2#마법사로 전직을 하겠습니다.";
                adve += "\r\n#L3#도적으로 전직을 하겠습니다.";
                adve += "\r\n#L4#해적으로 전직을 하겠습니다.";
                adve += "\r\n#L5#캐논슈터로 전직을 하겠습니다.";
                adve += "\r\n#L6#듀얼블레이드로 전직을 하겠습니다.";
                cm.sendSimple(adve);
            } else if (selection == 1) {
                var hero = "직업을 선택하세요.#b\r\n";
                hero += "\r\n#L7#아란으로 전직을 하겠습니다.";
                hero += "\r\n#L8#에반으로 전직을 하겠습니다.";
                hero += "\r\n#L9#팬텀으로 전직을 하겠습니다.";
                hero += "\r\n#L10#메르세데스로 전직을 하겠습니다.";
                hero += "\r\n#L22#루미너스로 전직을 하겠습니다.";
                hero += "\r\n#L23#은월로 전직을 하겠습니다.";
                cm.sendSimple(hero);
	    } else if (selection == 999) {
		cm.dispose();

		cm.openNpc(9000127);
		return;
            } else if (selection == 2) {
                var resy = "직업을 선택하세요..#b\r\n";
                resy += "\r\n#L11#메카닉로 전직을 하겠습니다.";
                resy += "\r\n#L12#배틀메이지로 전직을 하겠습니다.";
                resy += "\r\n#L13#와일드헌터로 전직을 하겠습니다.";
                resy += "\r\n#L14#데몬슬레이어로 전직을 하겠습니다.";
                resy += "\r\n#L20#데몬어벤져로 전직을 하겠습니다.";
                resy += "\r\n#L21#제논으로 전직을 하겠습니다.";
                cm.sendSimple(resy);
            } else if (selection == 3) {
                var cygn = "직업을 선택하세요.#b\r\n";
		cygn += "\r\n#L38#미하일로 전직을 하겠습니다.";
                cygn += "\r\n#L15#소울마스터로 전직을 하겠습니다.";
                cygn += "\r\n#L16#나이트워커로 전직을 하겠습니다.";
                cygn += "\r\n#L17#스트라이커로 전직을 하겠습니다.";
                cygn += "\r\n#L18#플레임위자드로 전직을 하겠습니다.";
                cygn += "\r\n#L19#윈드브레이커로 전직을 하겠습니다.";
                cm.sendSimple(cygn);
            } else if (selection == 4) {
                var nova = "직업을 선택하세요.#b\r\n";
		nova += "\r\n#L39#카이저로 전직을 하겠습니다.";
		nova += "\r\n#L40#엔젤릭 버스터로 전직을 하겠습니다.";
                cm.sendSimple(nova);
				}
			selectioned = selection;
			} else if (status == 3) {
			selection = selection & 0xFF;
            if (selectioned == 0) {
			if (selection == 0) {
		    var warrior = "전사에 대해 알고 싶은가?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                        warrior += "\r\n#L0#전사로 전직을 하겠습니다.";
						cm.sendSimple(warrior);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 100) {
                    	warrior += "\r\n#L1#파이터로 전직을 하겠습니다.";
						warrior += "\r\n#L2#페이지로 전직을 하겠습니다.";
						warrior += "\r\n#L3#스피어맨으로 전직을 하겠습니다.";
						cm.sendSimple(warrior);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130) {
                    	warrior += "\r\n#L4#3차 전직을 하겠습니다.";
						cm.sendSimple(warrior);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 10 == 1) {
                    	warrior += "\r\n#L4#4차 전직을 하겠습니다.";
						cm.sendSimple(warrior);
					}
					else {
		   				warrior += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(warrior);
					}
		} else if (selection == 1) {
		    var bowman = "궁수의 길을 알고 싶으신가요?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	bowman += "\r\n#L5#궁수로 전직을 하겠습니다.";
						cm.sendSimple(bowman);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 300) {
                    	bowman += "\r\n#L6#헌터로 전직을 하겠습니다.";
						bowman += "\r\n#L7#사수로 전직을 하겠습니다.";
						cm.sendSimple(bowman);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 310 || cm.getJob() == 320) {
                    	bowman += "\r\n#L8#3차 전직을 하겠습니다.";
						cm.sendSimple(bowman);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 10 == 1) {
                    	bowman += "\r\n#L8#4차 전직을 하겠습니다.";
						cm.sendSimple(bowman);
					}
					else {
		   				bowman += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(bowman);
					}
		} else if (selection == 2) {
		    var magician = "마법사가 되고 싶은 자 내게로...#b\r\n";
                    if (cm.getPlayer().getLevel() >= 8 && cm.getJob() == 0) {
                    	magician += "\r\n#L9#마법사로 전직을 하겠습니다.";
						cm.sendSimple(magician);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 200) {
                    	magician += "\r\n#L10#위자드(불,독)로 전직을 하겠습니다.";
						magician += "\r\n#L11#위자드(얼음,번개)로 전직을 하겠습니다.";
						magician += "\r\n#L12#클레릭으로 전직을 하겠습니다.";
						cm.sendSimple(magician);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) {
                    	magician += "\r\n#L13#3차 전직을 하겠습니다.";
						cm.sendSimple(magician);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 10 == 1) {
                    	magician += "\r\n#L13#4차 전직을 하겠습니다.";
						cm.sendSimple(magician);
					}
					else {
		   				magician += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(magician);
					}
		} else if (selection == 3) {
		    var thief = "어이,자네! 도적이 되고 싶은가?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	thief += "\r\n#L14#도적으로 전직을 하겠습니다.";
						cm.sendSimple(thief);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 400) {
                    	thief += "\r\n#L15#어쌔신으로 전직을 하겠습니다.";
						thief += "\r\n#L16#시프로 전직을 하겠습니다.";
						cm.sendSimple(thief);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 410 || cm.getJob() == 420) {
                    	thief += "\r\n#L17#3차 전직을 하겠습니다.";
						cm.sendSimple(thief);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 10 == 1) {
                    	thief += "\r\n#L17#4차 전직을 하겠습니다.";
						cm.sendSimple(thief);
					}
					else {
		   				thief += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(thief);
					}
		} else if (selection == 4) {
		    var pirate = "해적은 아무나 되는게 아니라고!#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	pirate += "\r\n#L18#해적으로 전직을 하겠습니다.";
						cm.sendSimple(pirate);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 500) {
                    	pirate += "\r\n#L19#인파이터로 전직을 하겠습니다.";
						pirate += "\r\n#L20#건슬링거로 전직을 하겠습니다.";
						cm.sendSimple(pirate);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 510 || cm.getJob() == 520) {
                    	pirate += "\r\n#L21#3차 전직을 하겠습니다.";
						cm.sendSimple(pirate);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 10 == 1) {
                    	pirate += "\r\n#L21#4차 전직을 하겠습니다.";
						cm.sendSimple(pirate);
					}
					else {
		   				pirate += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(pirate);
					}
		} else if (selection == 5) {
		    var canon = "캐논슈터가 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	canon += "\r\n#L22#캐논슈터(1차)로 전직을 하겠습니다.";
						cm.sendSimple(canon);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 501) {
                    	canon += "\r\n#L23#캐논슈터(2차)로 전직을 하겠습니다.";
						cm.sendSimple(canon);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 530) {
                    	canon += "\r\n#L24#캐논슈터(3차)로 전직을 하겠습니다.";
						cm.sendSimple(canon);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() == 531) {
                    	canon += "\r\n#L24#캐논슈터(4차)로 전직을 하겠습니다.";
						cm.sendSimple(canon);
					}
					else {
		   				canon += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(canon);
					}
		} else if (selection == 6) {
		    var dual = "조용히... 오늘은 소란스러움이 귀찮군요.#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	dual += "\r\n#L25#도적으로 전직을 하겠습니다.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 20 && cm.getJob() == 400) {
                    	dual += "\r\n#L26#세미듀어러로 전직을 하겠습니다.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 430) {
                    	dual += "\r\n#L27#듀어러로 전직을 하겠습니다.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 50 && cm.getJob() == 431) {
                    	dual += "\r\n#L27#듀얼마스터로 전직을 하겠습니다.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 432) {
                    	dual += "\r\n#L27#슬래셔로 전직을 하겠습니다.";
						cm.sendSimple(dual);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() == 433) {
                    	dual += "\r\n#L27#듀얼블레이드로 전직을 하겠습니다.";
						cm.sendSimple(dual);
					}
					else {
		   				dual += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(dual);
					}
		}
            } else if (selectioned == 1) {
		if (selection == 7) {
		    var aran = "도대체가 주인이라는 녀석이...#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	aran += "\r\n#L28#아란(1차)으로 전직을 하겠습니다.";
						cm.sendSimple(aran);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2100) {
                    	aran += "\r\n#L29#아란(2차)으로 전직을 하겠습니다.";
						cm.sendSimple(aran);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	aran += "\r\n#L30#아란(3차)으로 전직을 하겠습니다.";
						cm.sendSimple(aran);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	aran += "\r\n#L30#아란(4차)으로 전직을 하겠습니다.";
						cm.sendSimple(aran);
					}
					else {
		   				aran += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(aran);
					}
		} else if (selection == 8) {
		    var evan = "에반이 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	evan += "\r\n#L31#에반(1차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 20 && cm.getJob() == 2200) {
                    	evan += "\r\n#L32#에반(2차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2210) {
                    	evan += "\r\n#L33#에반(3차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 40 && cm.getJob() == 2211) {
                    	evan += "\r\n#L33#에반(4차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 50 && cm.getJob() == 2212) {
                    	evan += "\r\n#L33#에반(5차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 2213) {
                    	evan += "\r\n#L33#에반(6차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 80 && cm.getJob() == 2214) {
                    	evan += "\r\n#L33#에반(7차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() == 2215) {
                    	evan += "\r\n#L33#에반(8차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() == 2216) {
                    	evan += "\r\n#L33#에반(9차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
                    else if (cm.getPlayer().getLevel() >= 160 && cm.getJob() == 2217) {
                    	evan += "\r\n#L33#에반(10차)으로 전직을 하겠습니다.";
						cm.sendSimple(evan);
					}
					else {
		   				evan += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(evan);
					}
		} else if (selection == 9) {
		    var phantom = "팬텀이 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	phantom += "\r\n#L34#팬텀(1차)으로 전직을 하겠습니다.";
						cm.sendSimple(phantom);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2400) {
                    	phantom += "\r\n#L35#팬텀(2차)으로 전직을 하겠습니다.";
						cm.sendSimple(phantom);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	phantom += "\r\n#L36#팬텀(3차)으로 전직을 하겠습니다.";
						cm.sendSimple(phantom);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	phantom += "\r\n#L36#팬텀(4차)으로 전직을 하겠습니다.";
						cm.sendSimple(phantom);
					}
					else {
		   				phantom += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(phantom);
					}
		} else if (selection == 10) {
		    var mercedes = "메르세데스가 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	mercedes += "\r\n#L37#메르세데스(1차)로 전직을 하겠습니다.";
						cm.sendSimple(mercedes);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2300) {
                    	mercedes += "\r\n#L38#메르세데스(2차)로 전직을 하겠습니다.";
						cm.sendSimple(mercedes);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	mercedes += "\r\n#L39#메르세데스(3차)로 전직을 하겠습니다.";
						cm.sendSimple(mercedes);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	mercedes += "\r\n#L39#메르세데스(4차)로 전직을 하겠습니다.";
						cm.sendSimple(mercedes);
					}
					else {
		   				mercedes += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(mercedes);
					}
		} else if (selection == 22) {
		    var LumiNus = "루미너스가 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	LumiNus += "\r\n#L76#루미너스(1차)로 전직을 하겠습니다.";
						cm.sendSimple(LumiNus);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2700) {
                    	LumiNus += "\r\n#L77#루미너스(2차)로 전직을 하겠습니다.";
						cm.sendSimple(LumiNus);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	LumiNus += "\r\n#L78#루미너스(3차)로 전직을 하겠습니다.";
						cm.sendSimple(LumiNus);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	LumiNus += "\r\n#L78#루미너스(4차)로 전직을 하겠습니다.";
						cm.sendSimple(LumiNus);
					}
					else {
		   				LumiNus += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(LumiNus);
					}
                } else if (selection == 23) {
		    var eunwol = "은월이 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	eunwol += "\r\n#L79#은월(1차)로 전직을 하겠습니다.";
						cm.sendSimple(eunwol);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 2500) {
                    	eunwol += "\r\n#L80#은월(2차)로 전직을 하겠습니다.";
						cm.sendSimple(eunwol);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	eunwol += "\r\n#L81#은월(3차)로 전직을 하겠습니다.";
						cm.sendSimple(eunwol);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	eunwol += "\r\n#L81#은월(4차)로 전직을 하겠습니다.";
						cm.sendSimple(eunwol);
					}
					else {
		   				eunwol += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(eunwol);
					}
		}
            } else if (selectioned == 2) {
		if (selection == 11) {
		    var mechanic = "기술의 집약체, 메카닉에 관심 있습니까?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	mechanic += "\r\n#L40#메카닉(1차)으로 전직을 하겠습니다.";
						cm.sendSimple(mechanic);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3500) {
                    	mechanic += "\r\n#L41#메카닉(2차)으로 전직을 하겠습니다.";
						cm.sendSimple(mechanic);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	mechanic += "\r\n#L42#메카닉(3차)으로 전직을 하겠습니다.";
						cm.sendSimple(mechanic);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	mechanic += "\r\n#L42#메카닉(4차)으로 전직을 하겠습니다.";
						cm.sendSimple(mechanic);
					}
					else {
		   				mechanic += "\r\n넌 직업을 못가지겠네";
						cm.sendOk(mechanic);
					}
		} else if (selection == 12) {
		    var battle = "싸우는 마법사, 배틀메이지에 관심이 있는 건가?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	battle += "\r\n#L43#배틀메이지(1차)로 전직을 하겠습니다.";
						cm.sendSimple(battle);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3200) {
                    	battle += "\r\n#L44#배틀메이지(2차)로 전직을 하겠습니다.";
						cm.sendSimple(battle);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	battle += "\r\n#L45#배틀메이지(3차)로 전직을 하겠습니다.";
						cm.sendSimple(battle);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	battle += "\r\n#L45#배틀메이지(4차)로 전직을 하겠습니다.";
						cm.sendSimple(battle);
					}
					else {
		   				battle += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(battle);
					}
		} else if (selection == 13) {
		    var wild = "두려움 없는 궁수, 와일드헌터에 관심 있어?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	wild += "\r\n#L46#와일드헌터(1차)로 전직을 하겠습니다.";
						cm.sendSimple(wild);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3300) {
                   		wild += "\r\n#L47#와일드헌터(2차)로 전직을 하겠습니다.";
						cm.sendSimple(wild);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	wild += "\r\n#L48#와일드헌터(3차)로 전직을 하겠습니다.";
						cm.sendSimple(wild);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	wild += "\r\n#L48#와일드헌터(4차)로 전직을 하겠습니다.";
						cm.sendSimple(wild);
					}
					else {
		   				wild += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(wild);
					}
		} else if (selection == 14) {
		    var demon = "데몬슬레이어가 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	demon += "\r\n#L49#데몬슬레이어(1차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3100) {
                    	demon += "\r\n#L50#데몬슬레이어(2차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	demon += "\r\n#L51#데몬슬레이어(3차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	demon += "\r\n#L51#데몬슬레이어(4차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
					else {
		   				demon += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(demon);
					}
		} else if (selection == 20) {
		    var demon = "데몬어벤져가 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	demon += "\r\n#L70#데몬어벤져(1차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3101) {
                    	demon += "\r\n#L71#데몬어벤져(2차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 20) {
                    	demon += "\r\n#L72#데몬어벤져(3차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 21) {
                    	demon += "\r\n#L72#데몬어벤져(4차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
					else {
		   				demon += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(demon);
					}
		} else if (selection == 21) {
		    var demon = "제논이 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	demon += "\r\n#L73#제논(1차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 3600) {
                    	demon += "\r\n#L74#제논(2차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	demon += "\r\n#L75#제논(3차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	demon += "\r\n#L75#제논(4차)로 전직을 하겠습니다.";
						cm.sendSimple(demon);
					}
					else {
		   				demon += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(demon);
					}
				}
			} else if (selectioned == 3) {
		if (selection == 15) {
		    var soul = "빛의 기사, 소울마스터에 관심이 있는 건가?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	soul += "\r\n#L52#소울마스터(1차)로 전직을 하겠습니다.";
						cm.sendSimple(soul);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1100) {
                    	soul += "\r\n#L53#소울마스터(2차)로 전직을 하겠습니다.";
						cm.sendSimple(soul);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	soul += "\r\n#L54#소울마스터(3차)로 전직을 하겠습니다.";
						cm.sendSimple(soul);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	soul += "\r\n#L54#소울마스터(4차)로 전직을 하겠습니다.";
						cm.sendSimple(soul);
					}
					else {
		   				soul += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(soul);
					}
		} else if (selection == 16) {
		    var walker = "어둠의 기사, 나이트워커에 관심이 있나?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	walker += "\r\n#L55#나이트워커(1차)로 전직을 하겠습니다.";
						cm.sendSimple(walker);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1400) {
                    	walker += "\r\n#L56#나이트워커(2차)로 전직을 하겠습니다.";
						cm.sendSimple(walker);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	walker += "\r\n#L57#나이트워커(3차)로 전직을 하겠습니다.";
						cm.sendSimple(walker);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	walker += "\r\n#L57#나이트워커(4차)로 전직을 하겠습니다.";
						cm.sendSimple(walker);
					}
					else {
		   				walker += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(walker);
					}
		} else if (selection == 17) {
		    var striker = "번개의 기사, 스트라이커에 관심이 있는 거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	striker += "\r\n#L58#스트라이커(1차)로 전직을 하겠습니다.";
						cm.sendSimple(striker);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1500) {
                    	striker += "\r\n#L59#스트라이커(2차)로 전직을 하겠습니다.";
						cm.sendSimple(striker);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	striker += "\r\n#L60#스트라이커(3차)로 전직을 하겠습니다.";
						cm.sendSimple(striker);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	striker += "\r\n#L60#스트라이커(4차)로 전직을 하겠습니다.";
						cm.sendSimple(striker);
					}
					else {
		   				striker += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(striker);
					}
		} else if (selection == 18) {
		    var flame = "불의 기사, 플레임위자드에 관심이 있으신 건가요?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	flame += "\r\n#L61#플레임위자드(1차)로 전직을 하겠습니다.";
						cm.sendSimple(flame);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1200) {
                    	flame += "\r\n#L62#플레임위자드(2차)로 전직을 하겠습니다.";
						cm.sendSimple(flame);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	flame += "\r\n#L63#플레임위자드(3차)로 전직을 하겠습니다.";
						cm.sendSimple(flame);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	flame += "\r\n#L63#플레임위자드(4차)로 전직을 하겠습니다.";
						cm.sendSimple(flame);
					}
					else {
		   				flame += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(flame);
					}
		} else if (selection == 19) {
		    var wind = "바람의 기사, 윈드브레이커에 관심이 있나요?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	wind += "\r\n#L64#윈드브레이커(1차)로 전직을 하겠습니다.";
						cm.sendSimple(wind);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 1300) {
                    	wind += "\r\n#L65#윈드브레이커(2차)로 전직을 하겠습니다.";
						cm.sendSimple(wind);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	wind += "\r\n#L66#윈드브레이커(3차)로 전직을 하겠습니다.";
						cm.sendSimple(wind);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	wind += "\r\n#L66#윈드브레이커(4차)로 전직을 하겠습니다.";
						cm.sendSimple(wind);
					}
					else {
		   				wind += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(wind);
					}
		} else if (selection == 38) {
		    var light = "빛의 기사, 미하일에 관심이 있는 건가?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	light += "\r\n#L67#미하일(1차)로 전직을 하겠습니다.";
						cm.sendSimple(light);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 5100) {
                    	light += "\r\n#L68#미하일(2차)로 전직을 하겠습니다.";
						cm.sendSimple(light);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	light += "\r\n#L69#미하일(3차)로 전직을 하겠습니다.";
						cm.sendSimple(light);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	light += "\r\n#L69#미하일(4차)로 전직을 하겠습니다.";
						cm.sendSimple(light);
					}
					else {
		   				light += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(light);
					}
				}
		} else if (selection == 39) {
		    var kaiser = "카이저가 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	kaiser += "\r\n#L185#카이저(1차)로 전직을 하겠습니다.";
						cm.sendSimple(kaiser);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 6100) {
                    	kaiser += "\r\n#L186#카이저(2차)로 전직을 하겠습니다.";
						cm.sendSimple(kaiser);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() == 6110) {
                    	kaiser += "\r\n#L187#카이저(3차)로 전직을 하겠습니다.";
						cm.sendSimple(kaiser);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() == 6111) {
                    	kaiser += "\r\n#L188#카이저(4차)로 전직을 하겠습니다.";
						cm.sendSimple(kaiser);


					} else {
		   				kaiser += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(kaiser);

				}
		} else if (selection == 40) {
		    var angelicbuster = "엔젤릭 버스터가 되고 싶은거야?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
                    	angelicbuster += "\r\n#L82#엔젤릭 버스터(1차)로 전직을 하겠습니다.";
						cm.sendSimple(angelicbuster);
					}
                    else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 6500) {
                    	angelicbuster += "\r\n#L83#엔젤릭 버스터(2차)로 전직을 하겠습니다.";
						cm.sendSimple(angelicbuster);
					}
                    else if (cm.getPlayer().getLevel() >= 60 && cm.getJob() % 100 == 10) {
                    	angelicbuster += "\r\n#L84#엔젤릭 버스터(3차)로 전직을 하겠습니다.";
						cm.sendSimple(angelicbuster);
					}
                    else if (cm.getPlayer().getLevel() >= 100 && cm.getJob() % 100 == 11) {
                    	angelicbuster += "\r\n#L84#엔젤릭 버스터(4차)로 전직을 하겠습니다.";
						cm.sendSimple(angelicbuster);


					} else {
		   				angelicbuster += "\r\n전직할 조건이 충족되지 않아.";
						cm.sendOk(angelicbuster);

				}
			}
        } else if (status == 4) {
	    if (selection == 0) {
		cm.resetStats(35,4,4,4);
		cm.changeJob(100); 
	    } else if (selection == 1) {
		cm.changeJob(110); 
	    } else if (selection == 2) {
		cm.changeJob(120);
	    } else if (selection == 3) {
		cm.changeJob(130);
	    } else if (selection == 4) {
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 5) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(300);
	    } else if (selection == 6) {
		cm.changeJob(310);
	    } else if (selection == 7) {
		cm.changeJob(320);
	    } else if (selection == 8) {
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 9) {
		cm.resetStats(4,4,20,4);
		cm.changeJob(200); 
	    } else if (selection == 10) {
		cm.changeJob(210);
	    } else if (selection == 11) { 
		cm.changeJob(220);
	    } else if (selection == 12) { 
		cm.changeJob(230);
	    } else if (selection == 13) { 
		cm.changeJob(cm.getJob() +1); 
	    } else if (selection == 14) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(400);
	    } else if (selection == 15) { 
		cm.changeJob(410);
	    } else if (selection == 16) { 
		cm.changeJob(420); 
	    } else if (selection == 17) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 18) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(500); 
	    } else if (selection == 19) { 
		cm.changeJob(510);
	    } else if (selection == 20) { 
		cm.changeJob(520); 
	    } else if (selection == 21) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 22) {
		cm.changeJob(501);
	    } else if (selection == 23) { 
		cm.changeJob(530);
		cm.teachSkill(110,1,0);
	    } else if (selection == 24) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 25) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(400);
	    } else if (selection == 26) { 
		cm.changeJob(430);
	    } else if (selection == 27) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 28) {
		cm.resetStats(35,4,4,4);
		cm.changeJob(2100);
	    } else if (selection == 29) {  
		cm.changeJob(2110); 
	    } else if (selection == 30) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 31) {
		cm.changeJob(2200);
	    } else if (selection == 32) { 
		cm.changeJob(2210);
	    } else if (selection == 33) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 34) {
            	if (cm.getPlayer().getGender() == 0) {
                    cm.getPlayer().setFace(20659);
                    cm.getPlayer().setHair(33703);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1050222,0,3,0,7,0,0);
                    cm.addEquip(-7,1070023,0,2,0,7,0,0);
                    cm.addEquip(-11,1362000,17,0,0,7,0,0);
                    cm.addEquip(-9,1102347,0,5,5,7,0,0);
            	} else {
                    cm.getPlayer().setFace(21656);
                    cm.getPlayer().setHair(34703);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1051272,0,3,0,7,0,0);
                    cm.addEquip(-7,1071035,0,2,0,7,0,0);
                    cm.addEquip(-11,1362000,17,0,0,7,0,0);
                    cm.addEquip(-9,1102347,0,5,5,7,0,0);
            	}
            	cm.resetStats(4,25,4,4);
            	cm.changeJob(2400);
            	cm.teachSkill(20031203,1,0);
            	cm.teachSkill(20030204,1,0);
            	cm.teachSkill(20031205,1,0);
            	cm.teachSkill(20030206,1,0);
            	cm.teachSkill(20031207,1,0);
            	cm.teachSkill(20031208,1,0);
            	cm.teachSkill(20031209,1,0);
            	cm.gainItem(1362000,1);
            	cm.getPlayer().gainSP(3);
            	cm.fakeRelog();
            	cm.updateChar();
	    } else if (selection == 35) { 
		cm.changeJob(2410);
	    } else if (selection == 36) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 37) {
            	if (cm.getPlayer().getGender() == 0) {
                    cm.getPlayer().setFace(20557);
                    cm.getPlayer().setHair(33453);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1050192,0,3,0,7,0,0);
                    cm.addEquip(-7,1072519,0,2,0,7,0,0);
                    cm.addEquip(-11,1522038,17,0,0,7,0,0);
            	} else {
                    cm.getPlayer().setFace(21555);
                    cm.getPlayer().setHair(34423);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1051237,0,3,0,7,0,0);
                    cm.addEquip(-7,1072519,0,2,0,7,0,0);
                    cm.addEquip(-11,1522038,17,0,0,7,0,0);
            	}
           	cm.resetStats(4,25,4,4);
                cm.changeJob(2300);
            	cm.teachSkill(20020109,1,0);
            	cm.teachSkill(20021110,1,0);
            	cm.teachSkill(20020111,1,0);
            	cm.teachSkill(20020112,1,0);
            	cm.gainItem(3010211,1);
                cm.getPlayer().gainSP(3);
                cm.fakeRelog();
                cm.updateChar();
	    } else if (selection == 38) { 
		cm.changeJob(2310);
	    } else if (selection == 39) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 40) {
		cm.changeJob(3500);
	    } else if (selection == 41) { 
		cm.changeJob(3510);
	    } else if (selection == 42) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 43) {
		cm.changeJob(3200); 
	    } else if (selection == 44) { 
		cm.changeJob(3210); 
	    } else if (selection == 45) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 46) {
		cm.changeJob(3300);
	    } else if (selection == 47) { 
		cm.changeJob(3310);
	    } else if (selection == 48) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 49) {
            	if (cm.getPlayer().getGender() == 0) {
                    cm.getPlayer().setFace(20248);
                    cm.getPlayer().setHair(33531);
                    cm.getPlayer().setFace2(1012280);
                    cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1050191,0,3,0,7,0,0);
                    cm.addEquip(-7,1072518,0,2,0,7,0,0);
                    cm.addEquip(-11,1322123,17,0,0,7,0,0);
                    cm.addEquip(-10,1099000,0,10,5,7,0,20);
            	} else {
                    cm.getPlayer().setFace(21246);
                    cm.getPlayer().setHair(34411);
                    cm.getPlayer().setFace2(1012280);
                   cm.getPlayer().setSkinColor(0);
                    cm.resetEquip();
                    cm.addEquip(-5,1051236,0,3,0,7,0,0);
                    cm.addEquip(-7,1072518,0,2,0,7,0,0);
                    cm.addEquip(-11,1322123,17,0,0,7,0,0);
                    cm.addEquip(-10,1099000,0,10,5,7,0,20);
            	}
                cm.resetStats(35,4,4,4);
                cm.changeJob(3100);
            	cm.teachSkill(30011109,1,0);
            	cm.teachSkill(30010110,1,0);
            	cm.teachSkill(30010111,1,0);
            	cm.teachSkill(30010112,1,0);
            	cm.teachSkill(30010185,1,0);
                cm.getPlayer().getStat().setMaxMp(5);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.getPlayer().setSkinColor(0);
                cm.getPlayer().gainSP(3);
                cm.fakeRelog();
                cm.updateChar();
	    } else if (selection == 50) { 
		cm.changeJob(3110);
		cm.removeEquip(1099000);
        cm.addEquip(-10,1099002,0,30,15,7,150,50);
	    } else if (selection == 51) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 52) {
		cm.resetStats(35,4,4,4);
		cm.changeJob(1100);
	    } else if (selection == 53) { 
		cm.changeJob(1110); 
	    } else if (selection == 185) { 
		cm.changeJob(6100);
	    } else if (selection == 186) { 
		cm.changeJob(cm.getJob() +10);  
	    } else if (selection == 187) { 
		cm.changeJob(cm.getJob() +1); 
	    } else if (selection == 188) { 
		cm.changeJob(cm.getJob() +1); 
	    } else if (selection == 54) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 55) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(1400);
	    } else if (selection == 56) { 
		cm.changeJob(1410);
	    } else if (selection == 57) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 58) {
		cm.resetStats(35,4,4,4);
		cm.changeJob(1500);
	    } else if (selection == 59) { 
		cm.changeJob(1510);
	    } else if (selection == 60) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 61) {
		cm.resetStats(4,4,20,4);
		cm.changeJob(1200);
	    } else if (selection == 62) { 
		cm.changeJob(1210);
	    } else if (selection == 63) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 64) {
		cm.resetStats(4,25,4,4);
		cm.changeJob(1300); 
	    } else if (selection == 65) { 
		cm.changeJob(1310); 
	    } else if (selection == 66) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 67) {
		cm.changeJob(5100);
		cm.getPlayer().gainSP(3);
		cm.resetStats(35,4,4,4);
	    } else if (selection == 68) { 
		cm.changeJob(5110); 
	    } else if (selection == 69) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 71) { 
		cm.changeJob(3120);
	    } else if (selection == 72) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 74) { 
		cm.changeJob(3610);
	    } else if (selection == 75) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 76) { 
		cm.changeJob(2700);
	    } else if (selection == 77) { 
		cm.changeJob(2710);
	    } else if (selection == 78) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 79) { 
		cm.changeJob(2500);
	    } else if (selection == 80) { 
		cm.changeJob(2510);
	    } else if (selection == 81) { 
		cm.changeJob(cm.getJob() +1);
	    } else if (selection == 82) { 
		cm.changeJob(6500);
	    } else if (selection == 83) { 
		cm.changeJob(6510);
	    } else if (selection == 84) { 
		cm.changeJob(cm.getJob() +1);
            }
            cm.expandInventory(1,4);
            cm.expandInventory(2,4);
            cm.expandInventory(3,4);
            cm.expandInventory(4,4);
	    cm.dispose();
		}
    }
}