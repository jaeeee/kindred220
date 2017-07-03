


/*

	퓨어 온라인 소스 팩의 스크립트 입니다.

        제작 : 주크블랙

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 

	엔피시 설명 : 




var maps = new Array(

new Array(980000000, 50000),
new Array(926100600, 50000),
new Array(401060100, 50000)

);

var mapNames = new Array("#b[추천 Lv 10 ~ 18] 바람꽃수풀", "#b[추천 Lv 18 ~ 22] 골렘의 사원4");
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
        var place = "나는 보스 및 파티퀘스트의 담당자다.\r\n어디로 이동하고 싶으냐?\r\n대신 5만메소를 받고 이동시켜주지.\r\n#r";
          	place += "#h #님. 어디로 이동하시겠어요?#n";
		for (var i = 0; i < maplist.length; i++) {
		place += "\r\n#b#L" + i + "# " + map[i] + "#l";
                }
    } else if (status == 1) {
        select = selection;
        cm.sendYesNo("가고싶은 곳이 #b#m"+maps[select][0]+"##k 맞아? 요금은 "+maps[select][1]+"메소야. 정말 이동하고 싶어?");
    } else if (status == 2) {
        if (cm.getPlayer().getMeso() >= maps[select][1]) {
            cm.gainMeso(-maps[select][1]);
            cm.warp(maps[select][0]);
            cm.dispose();
        } else {
            cm.sendOk("메소는 잘 가지고 있는거 맞아? 다시한번 확인해 봐.");
            cm.dispose();
        }
    }
}

*/
var status = 0;
var maps = new Array("100020200", "100040400", "101040000", "103040400", "222010000", "260020700", "261020300", "261020400", "261010102", "251010402", "240020000", "240020400", "240020200", "240030000", "211060100", "211060300", "270020100", "240040510", "240040511");
var mapNames = new Array("#b[추천 Lv 10 ~ 18] 바람꽃수풀", "#b[추천 Lv 18 ~ 22] 골렘의 사원4", "#b[추천 Lv 22 ~ 30] 루팡의 숲", "#b[추천 Lv 30 ~ 45] 7층 8층 A구역", "#b[추천 Lv 45 ~ 62] 까막산입구", "#b[추천 Lv 62 ~ 70] 사헬지대1", "#d[추천 Lv 70 ~ 77] 연구소 C-1 구역", "#d[추천 Lv 77 ~ 85] 연구소 C-2 구역", "#d[추천 Lv 85 ~ 100] 연구소 202호", "#d[추천 Lv 100 ~ 110] 빨간코 해적단 소굴2", "#d[추천 Lv 110 ~ 120] 붉은 켄타우로스의 영역 ", "#d[추천 Lv 110 ~ 120] 푸른 켄타우로스의 영역", "#d[추천 Lv 110 ~ 120] 검은 켄타우로스의 영역", "#r[추천 Lv 120 ~ 130] 용의 숲 입구", "#r[추천 Lv 130 ~ 140] 성벽 아래1", "#r[추천 Lv 130 ~ 140] 성벽 아래2", "#r[추천 Lv 140 ~ 150] 후회의길 1", "#r[추천 Lv 140 ~ 150] 죽은 용의 둥지", "#r[추천 Lv 150 ~ 160] 남겨진 용의 둥지");
var maplist = new Array("401000000", "104000000", "120000000", "100000000", "102000000", "101000000", "103000000", "105000000", "130000000", "310000000", "200000000", "220000000", "222000000", "250000000", "240000000", "260000200", "261000000", "230000000", "211000000", "251000000", "270000100");
var map = new Array("#r[NEW]#k 헬리시움", "리스항구", "노틸러스", "헤네시스", "페리온", "엘리니아", "커닝시티", "슬리피우드", "에레브", "에델슈타인", "오르비스", "루디브리엄", "아랫마을", "무릉", "리프레", "아리안트", "마가티아", "아쿠아리움", "엘나스", "백초마을", "시간의 신전");

var warp = new Array("마을로 가겠습니다!", "사냥터로 가겠습니다!");
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
            cm.sendNext("또 오세요~");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("\r\n\r\n#b#h ##k님.\r\n저는 보스 및 파티퀘스트 담당자 입니다.");
	} else if (status == 1) {
		var msg = "#h #님, 택시로 어느곳을 가시겠어요?#n";
		for (var i = 101; i < 102; i++) {
		msg += "\r\n#b#L" + i + "# " + warp[i-100] + "#l";
		}
		cm.sendSimple(msg);
	} else if (status == 4) {
          	var place = "#h #님. 어디로 이동하시겠어요?#n";
		for (var i = 0; i < maplist.length; i++) {
		place += "\r\n#b#L" + i + "# " + map[i] + "#l";
                }
           	cm.sendSimple(place);
        } else if (status == 5) {
		    selectedMap = selection;
                    cm.sendYesNo("정말로 이 마을로 이동하시겠습니까?\r\n돌아오실때에는 #b@헤네시스#k 명령어를 사용하시면 됩니다.");
        } else if (status == 6) {
                        cm.warp(maplist[selectedMap], 0);
                       // cm.dispose();
	} else if (status == 7) {
          	var where = "#h #님. 어디로 이동하시겠어요?#n";
		for (var i = 0; i < maps.length; i++) {
		where += "\r\n#b#L" + i + "# " + mapNames[i] + "#l";
                }
           	cm.sendSimple(where);
        } else if (status == 8) {
		    selectedMap = selection;
                    cm.sendYesNo("정말로 이 사냥터로 이동하시겠습니까?\r\n돌아오실때에는 #b@헤네시스#k 명령어를 사용하시면 됩니다.");
        } else if (status == 9) {
                        cm.warp(maps[selectedMap], 0);
                        cm.dispose();
	} else if (selection == 100) {
		cm.sendNext("\r\n이동가능한 마을 리스트를 불러옵니다.")
		status++;
	} else if (selection == 101) {
		cm.sendNext("\r\n이동가능한 사냥터 리스트를 불러옵니다.")
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
            var chat = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
            chat += "\r\n#L1#이동을 하겠습니다.";
            chat += "\r\n#L2#성형을 하겠습니다.";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendOk("쟝에게 전직하실수 있습니다.");
                cm.dispose();
            } else if (selection == 1) {
                var warpmain = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                warpmain += "\r\n#L5#마을로 이동을 하겠습니다.";
                warpmain += "\r\n#L6#사냥터로 이동을 하겠습니다.";   
                warpmain += "\r\n#L7#보스를 퇴치하러 가겠습니다.";   
                cm.sendSimple(warpmain);
            } else if (selection == 2) {
                var beautymain = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                beautymain += "\r\n#L8#얼굴을 바꾸겠습니다.";
                beautymain += "\r\n#L9#머리를 바꾸겠습니다.";
                beautymain += "\r\n#L10#피부의 색을 바꾸겠습니다.";
                beautymain += "\r\n#L11#머리의 색을 바꾸겠습니다.";
                beautymain += "\r\n#L12#렌즈의 색을 바꾸겠습니다.";  
                beautymain += "\r\n#L13#성별을 바꾸겠습니다.";  
                cm.sendSimple(beautymain);
            } else if (selection == 3) {
                cm.sendOk("폴에게 구매하실수 있습니다.");
                cm.dispose();
            }
        } else if (status == 2) {
            if (selection == 0) {
                var adve = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                adve += "\r\n#L0#전사로 전직을 하겠습니다.";
                adve += "\r\n#L1#궁수로 전직을 하겠습니다.";
                adve += "\r\n#L2#마법사로 전직을 하겠습니다.";
                adve += "\r\n#L3#도적으로 전직을 하겠습니다.";
                adve += "\r\n#L4#해적으로 전직을 하겠습니다.";
                adve += "\r\n#L5#캐논슈터로 전직을 하겠습니다.";
                adve += "\r\n#L6#듀얼블레이드로 전직을 하겠습니다.";
                cm.sendSimple(adve);
            } else if (selection == 1) {
                var hero = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                hero += "\r\n#L7#아란으로 전직을 하겠습니다.";
                hero += "\r\n#L8#에반으로 전직을 하겠습니다.";
                hero += "\r\n#L9#팬텀으로 전직을 하겠습니다.";
                hero += "\r\n#L10#메르세데스로 전직을 하겠습니다.";
                cm.sendSimple(hero);
            } else if (selection == 2) {
                var resy = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                resy += "\r\n#L11#메카닉로 전직을 하겠습니다.";
                resy += "\r\n#L12#배틀메이지로 전직을 하겠습니다.";
                resy += "\r\n#L13#와일드헌터로 전직을 하겠습니다.";
                resy += "\r\n#L14#데몬슬레이어로 전직을 하겠습니다.";
                cm.sendSimple(resy);
            } else if (selection == 3) {
                var cygn = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                cygn += "\r\n#L15#소울마스터로 전직을 하겠습니다.";
                cygn += "\r\n#L16#나이트워커로 전직을 하겠습니다.";
                cygn += "\r\n#L17#스트라이커로 전직을 하겠습니다.";
                cygn += "\r\n#L18#플레임위자드로 전직을 하겠습니다.";
                cygn += "\r\n#L19#윈드브레이커로 전직을 하겠습니다.";
                cm.sendSimple(cygn);
	    } else if (selection == 4) {
                var cygn = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                cygn += "\r\n#L38#미하일로 전직을 하겠습니다.";
                cm.sendSimple(cygn);
            } else if (selection == 5) {
                var vlig = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                vlig += "\r\n#L20#리엔으로 이동을 하겠습니다."; 
                vlig += "\r\n#L21#에레브로 이동을 하겠습니다.";
                vlig += "\r\n#L22#에우렐로 이동을 하겠습니다.";
                vlig += "\r\n#L23#헤네시스로 이동을 하겠습니다.";
                vlig += "\r\n#L24#엘리니아로 이동을 하겠습니다.";
                vlig += "\r\n#L25#페리온으로 이동을 하겠습니다."; 
                vlig += "\r\n#L26#커닝시티로 이동을 하겠습니다.";
                vlig += "\r\n#L27#에델슈타인으로 이동을 하겠습니다.";
                cm.sendSimple(vlig);
            } else if (selection == 6) {
                var hunt = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                hunt += "\r\n#L28#[001 - 010] 얕은 해안가";
                hunt += "\r\n#L29#[011 - 035] 유령버섯의 숲";
                hunt += "\r\n#L30#[036 - 050] 7층 8층 A구역";
                hunt += "\r\n#L31#[051 - 070] 붉은 모래 사막";
                hunt += "\r\n#L32#[071 - 100] 연구소 C-2 구역";
                hunt += "\r\n#L33#[101 - 120] 빨간코 해적단 소굴2"; 
                cm.sendSimple(hunt);
            } else if (selection == 7) {
                var boss = "메이플 월드에 오신 것을 환영합니다.#b\r\n";
                boss += "\r\n#L34#[피아누스] 피아누스의 동굴"; 
                boss += "\r\n#L35#[파풀라투스] 시계탑의 근원"; 
                boss += "\r\n#L36#[자쿰] 자쿰의 제단"; 
                boss += "\r\n#L37#[혼테일] 혼테일의 동굴"; 
                boss += "\r\n#L41#[핑크빈] 신들의 황혼"; 
                boss += "\r\n#L38#[카오스자쿰] 카오스 자쿰의 제단"; 
                boss += "\r\n#L39#[카오스혼테일] 카오스 혼테일의 동굴"; 
                boss += "\r\n#L40#[여제] 시그너스의 전당"; 
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
                    cm.askAvatar("메이플 월드에 오신 것을 환영합니다.",facenew);
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
                    cm.askAvatar("메이플 월드에 오신 것을 환영합니다.",facenew);
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
                    cm.askAvatar("메이플 월드에 오신 것을 환영합니다.",hairnew);
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
                    cm.askAvatar("메이플 월드에 오신 것을 환영합니다.",hairnew);
                }
            } else if (selection == 10) {
                beauty = 3;
                cm.askAvatar("메이플 월드에 오신 것을 환영합니다.",skin);
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
                cm.askAvatar("메이플 월드에 오신 것을 환영합니다.",haircolor);
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
                cm.askAvatar("메이플 월드에 오신 것을 환영합니다.",colors);
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
		    var warrior = "전사에 대해 알고 싶은가?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                        warrior += "\r\n#L0#전사로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 100)
                    	warrior += "\r\n#L1#파이터로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 100)
                    	warrior += "\r\n#L2#페이지로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 100)
                    	warrior += "\r\n#L3#스피어맨으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130)
                    	warrior += "\r\n#L4#3차 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	warrior += "\r\n#L4#4차 전직을 하겠습니다.";
		    cm.sendSimple(warrior);
		} else if (selection == 1) {
		    var bowman = "궁수의 길을 알고 싶으신가요?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	bowman += "\r\n#L5#궁수로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 300)
                    	bowman += "\r\n#L6#헌터로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 300)
                    	bowman += "\r\n#L7#사수로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 310 || cm.getJob() == 320)
                    	bowman += "\r\n#L8#3차 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	bowman += "\r\n#L8#4차 전직을 하겠습니다.";
		    cm.sendSimple(bowman);
		} else if (selection == 2) {
		    var magicion = "마법사가 되고 싶은 자 내게로...#b\r\n";
                    if (cm.getLevel() >= 8 && cm.getJob() == 0)
                    	magicion += "\r\n#L9#마법사로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 200)
                    	magicion += "\r\n#L10#위자드(불,독)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 200)
                    	magicion += "\r\n#L11#위자드(얼음,번개)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 200)
                    	magicion += "\r\n#L12#클레릭으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)
                    	magicion += "\r\n#L13#3차 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	magicion += "\r\n#L13#4차 전직을 하겠습니다.";
		    cm.sendSimple(magicion);
		} else if (selection == 3) {
		    var thief = "어이,자네! 도적이 되고 싶은가?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	thief += "\r\n#L14#도적으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 400)
                    	thief += "\r\n#L15#어쌔신으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 400)
                    	thief += "\r\n#L16#시프로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 410 || cm.getJob() == 420)
                    	thief += "\r\n#L17#3차 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	thief += "\r\n#L17#4차 전직을 하겠습니다.";
		    cm.sendSimple(thief);
		} else if (selection == 4) {
		    var pirat = "해적은 아무나 되는게 아니라고!#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	pirat += "\r\n#L18#해적으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 500)
                    	pirat += "\r\n#L19#인파이터로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 500)
                    	pirat += "\r\n#L20#건슬링거로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 510 || cm.getJob() == 520)
                    	pirat += "\r\n#L21#3차 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 10 == 1)
                    	pirat += "\r\n#L21#4차 전직을 하겠습니다.";
		    cm.sendSimple(pirat);
		} else if (selection == 5) {
		    var canon = "캐논슈터가 되고 싶은거야?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	canon += "\r\n#L22#캐논슈터(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 501)
                    	canon += "\r\n#L23#캐논슈터(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 530)
                    	canon += "\r\n#L24#캐논슈터(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() == 531)
                    	canon += "\r\n#L24#캐논슈터(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(canon);
		} else if (selection == 6) {
		    var dual = "조용히... 오늘은 소란스러움이 귀찮군요.#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	dual += "\r\n#L25#도적으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 20 && cm.getJob() == 400)
                    	dual += "\r\n#L26#세미듀어러로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 430)
                    	dual += "\r\n#L27#듀어러로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 50 && cm.getJob() == 431)
                    	dual += "\r\n#L27#듀얼마스터로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() == 432)
                    	dual += "\r\n#L27#슬래셔로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() == 433)
                    	dual += "\r\n#L27#듀얼블레이드로 전직을 하겠습니다.";  
		    cm.sendSimple(dual);
		}
            } else if (selectioned == 1) {
		if (selection == 7) {
		    var aran = "도대체가 주인이라는 녀석이...#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 2000)
                    	aran += "\r\n#L28#아란(1차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 2100)
                    	aran += "\r\n#L29#아란(2차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	aran += "\r\n#L30#아란(3차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	aran += "\r\n#L30#아란(4차)으로 전직을 하겠습니다.";
		    cm.sendSimple(aran);
		} else if (selection == 8) {
		    var evan = "에반이 되고 싶은거야?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 2001)
                    	evan += "\r\n#L31#에반(1차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 20 && cm.getJob() == 2200)
                    	evan += "\r\n#L32#에반(2차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 2210)
                    	evan += "\r\n#L33#에반(3차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 40 && cm.getJob() == 2211)
                    	evan += "\r\n#L33#에반(4차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 50 && cm.getJob() == 2212)
                    	evan += "\r\n#L33#에반(5차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 60 && cm.getJob() == 2213)
                    	evan += "\r\n#L33#에반(6차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 80 && cm.getJob() == 2214)
                    	evan += "\r\n#L33#에반(7차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 100 && cm.getJob() == 2215)
                    	evan += "\r\n#L33#에반(8차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() == 2216)
                    	evan += "\r\n#L33#에반(9차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 160 && cm.getJob() == 2217)
                    	evan += "\r\n#L33#에반(10차)으로 전직을 하겠습니다.";
		    cm.sendSimple(evan);
		} else if (selection == 9) {
		    var pantom = "팬텀이 되고 싶은거야?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	pantom += "\r\n#L34#팬텀(1차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 2400)
                    	pantom += "\r\n#L35#팬텀(2차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	pantom += "\r\n#L36#팬텀(3차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	pantom += "\r\n#L36#팬텀(4차)으로 전직을 하겠습니다.";
		    cm.sendSimple(pantom);
		} else if (selection == 10) {
		    var mercedes = "메르세데스가 되고 싶은거야?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	mercedes += "\r\n#L37#메르세데스(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 2300)
                    	mercedes += "\r\n#L38#메르세데스(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	mercedes += "\r\n#L39#메르세데스(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	mercedes += "\r\n#L39#메르세데스(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(mercedes);
		}
            } else if (selectioned == 2) {
		if (selection == 11) {
		    var mecanic = "기술의 집약체, 메카닉에 관심 있습니까?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 3000)
                    	mecanic += "\r\n#L40#메카닉(1차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 3500)
                    	mecanic += "\r\n#L41#메카닉(2차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	mecanic += "\r\n#L42#메카닉(3차)으로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	mecanic += "\r\n#L42#메카닉(4차)으로 전직을 하겠습니다.";
		    cm.sendSimple(mecanic);
		} else if (selection == 12) {
		    var battle = "싸우는 마법사, 배틀메이지에 관심이 있는 건가?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 3000)
                    	battle += "\r\n#L43#배틀메이지(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 3200)
                    	battle += "\r\n#L44#배틀메이지(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	battle += "\r\n#L45#배틀메이지(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	battle += "\r\n#L45#배틀메이지(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(battle);
		} else if (selection == 13) {
		    var whild = "두려움 없는 궁수, 와일드헌터에 관심 있어?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 3000)
                    	whild += "\r\n#L46#와일드헌터(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 3300)
                   	whild += "\r\n#L47#와일드헌터(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	whild += "\r\n#L48#와일드헌터(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	whild += "\r\n#L48#와일드헌터(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(whild);
		} else if (selection == 14) {
		    var demon = "데몬슬레이어가 되고 싶은거야?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 0)
                    	demon += "\r\n#L49#데몬슬레이어(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 3100)
                    	demon += "\r\n#L50#데몬슬레이어(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	demon += "\r\n#L51#데몬슬레이어(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	demon += "\r\n#L51#데몬슬레이어(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(demon);
		}
            } else if (selectioned == 3) {
		if (selection == 15) {
		    var soul = "빛의 기사, 소울마스터에 관심이 있는 건가?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	soul += "\r\n#L52#소울마스터(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1100)
                    	soul += "\r\n#L53#소울마스터(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	soul += "\r\n#L54#소울마스터(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	soul += "\r\n#L54#소울마스터(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(soul);
		} else if (selection == 16) {
		    var walker = "어둠의 기사, 나이트워커에 관심이 있나?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	walker += "\r\n#L55#나이트워커(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1400)
                    	walker += "\r\n#L56#나이트워커(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	walker += "\r\n#L57#나이트워커(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	walker += "\r\n#L57#나이트워커(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(walker);
		} else if (selection == 17) {
		    var straker = "번개의 기사, 스트라이커에 관심이 있는 거야?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	straker += "\r\n#L58#스트라이커(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1500)
                    	straker += "\r\n#L59#스트라이커(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	straker += "\r\n#L60#스트라이커(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	straker += "\r\n#L60#스트라이커(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(straker);
		} else if (selection == 18) {
		    var flame = "불의 기사, 플레임위자드에 관심이 있으신 건가요?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	flame += "\r\n#L61#플레임위자드(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1200)
                    	flame += "\r\n#L62#플레임위자드(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	flame += "\r\n#L63#플레임위자드(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	flame += "\r\n#L63#플레임위자드(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(flame);
		} else if (selection == 19) {
		    var wind = "바람의 기사, 윈드브레이커에 관심이 있나요?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 1000)
                    	wind += "\r\n#L64#윈드브레이커(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 1300)
                    	wind += "\r\n#L65#윈드브레이커(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	wind += "\r\n#L66#윈드브레이커(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	wind += "\r\n#L66#윈드브레이커(4차)로 전직을 하겠습니다.";
		    cm.sendSimple(wind);
		}
	    } else if (selectioned == 4) {
		if (selection == 38) {
		    var wind = "빛의 기사, 미하일에 관심이 있나요?#b\r\n";
                    if (cm.getLevel() >= 10 && cm.getJob() == 5000)
                    	wind += "\r\n#L67#미하일(1차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 30 && cm.getJob() == 5100)
                    	wind += "\r\n#L68#미하일(2차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 70 && cm.getJob() % 100 == 10)
                    	wind += "\r\n#L69#미하일(3차)로 전직을 하겠습니다.";
                    if (cm.getLevel() >= 120 && cm.getJob() % 100 == 11)
                    	wind += "\r\n#L70#미하일(4차)로 전직을 하겠습니다.";
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

