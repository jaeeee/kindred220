importPackage(Packages.scripting);

var status = 0;
var beauty = 0;
var selectioned = 0;
var colors;
var hairnew;
var facenew;
var haircolor;
var skin = Array(0, 1, 2, 3, 4, 9, 10, 11, 12, 13);
var mface = Array(20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20024,20025,20027,20028,20029,20030,20031,20032,20036,20037,20040,20043,20044,20045,20046,20047,20048,20049,20050,20053,20055,20056,20057,20058,20059,20060,20061,20062,20063,20064,20065,20066,20067,20068,20069);
var mhair = Array(30000,30020,30030,30040,30050,30060,30100,30110,30120,30130,30140,30150,30160,30170,30180,30190,30200,30210,30220,30230,30240,30250,30260,30270,30280,30290,30300,30310,30320,30330,30340,30350,30360,30370,30400,30410,30420,30440,30450,30460,30470,30480,30490,30510,30520,30530,30540,30560,30570,30590,30610,30620,30630,30640,30650,30660,30670,30680,30700,30710,30730,30760,30770,30790,30800,30810,30820,30830,30840,30850,30860,30870,30880,30910,30930,30940,30950,33030,33060,33070,33080,33090,33110,33120,33130,33150,33170,33180,33190,33210,33220,33250,33260,33270,33280,33310,33330,33350,33360,33370,33380,33390,33400,33410,33430,33440,33450,33460,33480,33500,33510,33520,33530,33550,33580,33590,33600,33610,33620,33630,33640,33660,33670,33680,33690,33700,33710,33720,33730,33740,33750,33760,33770,33780,33790,33800,33810,33820,33830,33930,33940,33950,33960);
var fface = Array(21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019,21020,21021,21023,21024,21026,21027,21028,21029,21030,21031,21033,21035,21036,21038,21041,21042,21043,21044,21045,21046,21047,21048,21052,21053,21054,21055,21056,21057,21058,21059,21060,21061,21062,21063,21064);
var fhair = Array(31000,31010,31020,31030,31040,31050,31060,31070,31080,31090,31100,31110,31120,31130,31140,31150,31160,31170,31180,31190,31200,31210,31220,31230,31240,31250,31260,31270,31280,31290,31300,31310,31320,31330,31340,31350,31400,31410,31420,31440,31450,31460,31470,31480,31490,31510,31520,31530,31540,31550,31560,31590,31610,31620,31630,31640,31650,31670,31680,31690,31700,31710,31720,31740,31750,31780,31790,31800,31810,31820,31840,31850,31860,31880,31890,31910,31920,31930,31940,31950,31990,34040,34070,34080,34090,34100,34110,34120,34130,34140,34150,34160,34170,34180,34190,34210,34220,34230,34240,34250,34260,34270,34310,34320,34330,34340,34360,34370,34380,34400,34410,34420,34430,34440,34450,34470,34480,34490,34510,34540,34560,34590,34600,34610,34620,34630,34640,34660,34670,34680,34690,34700,34710,34720,34730,34740,34750,34760,34770,34780,34790,34800,34810,34820,34830,34840,34850,34860,34870);
var mcolors = Array();
var fcolors = Array();
var mhairnew = Array();
var fhairnew = Array();
var mfacenew = Array();
var ffacenew = Array();
var mhaircolor = Array();
var fhaircolor = Array();
var mbeauty = 0;
var fbeauty = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0 || mode == -1) {
	cm.sendOk("이용해줘서 고마워요~ 생각이 있으면 다음에 또 오세요~");
        cm.dispose();
    } else {
        if (status == 1 && mode == 0) {
	    cm.sendOk("이용해줘서 고마워요~ 생각이 있으면 다음에 또 오세요~");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
                cm.sendSimple ("#r#h ##k님, 안녕하세요? 저는 일류 코디네이터이자, 천외천팩(천외천스토리) 1기 홍보 대사였던 #r날라리법사#k라고 합니다. #b천외천스토리#k에서 즐거운 시간은 보내시고 계신가요? 저에게 코디를 받으심은 정말 영광이 되실거에요~~ 선택해주세요!!\r\n#L0##g스킨 컬러 코디네이팅#l   #L1##k헤어 스타일 코디네이팅#l\r\n#L2##d헤어 컬러 코디네이팅#l   #L3##b아이 라인(얼굴) 코디네이팅#l\r\n#L4##r아이 컬러 코디네이팅#l\r\n\r\n#b% 코디 시스템을 이용할 때에는 1회당 #b#i5155000# #t5155000##b 1개가 필요하며, 캐시샵 -> 기타 -> 뷰티샵에서 구매가 가능합니다,#k");
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 1;
                cm.sendStyle("현존 KMS의 모든 스킨이 가능해! 빽섭 될 걱정은 말라구!", skin);
            } else if (selection == 1) {
                if (cm.getChar().getGender() == 0) {
                    mbeauty = 2;
                    mfacenew = Array();
                    for(var i = 0; i < mhair.length; i++) {
                        mhairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                    cm.askAvatar("KMS 1.2.174 버전까지의 헤어스스타일이 다 모였습니다. 어때요? 본서버에서 못 해본거 여기서 경험해 보시는것도..호호 제 실력 한번 보고 놀라면 안되요?", mhair);
                } else {
                    fbeauty = 2;
                    ffacenew = Array();
                    for(var i2 = 0; i2 < fhair.length; i2++) {
                        fhairnew.push(fhair[i2] + parseInt(cm.getChar().getHair() % 10));
                    }
                    cm.askAvatar("KMS 1.2.174 버전까지의 헤어스스타일이 다 모였습니다. 어때요? 본서버에서 못 해본거 여기서 경험해 보시는것도..호호 제 실력 한번 보고 놀라면 안되요?", fhair);
                }
            } else if (selection == 2) {
                if (cm.getChar().getGender() == 0) {
                    mbeauty = 3;
                    mhaircolor = Array();
                    var current = parseInt(cm.getChar().getHair() /10)*10;
                    for(var i = 0; i < 8; i++) {
                        mhaircolor.push(current + i);
                    }
                    cm.sendStyle("염색을 선택하셨군요~ 자 어느색으로 염색해드릴까요? 어떤 색이던지 다 가능합니다!!", mhaircolor);
                } else {
                    fbeauty = 3;
                    fhaircolor = Array();
                    var current = parseInt(cm.getChar().getHair() /10)*10;
                    for(var i2 = 0; i2 < 8; i2++) {
                        fhaircolor.push(current + i2);
                    }
                    cm.sendStyle("염색을 선택하셨군요~ 자 어느색으로 염색해드릴까요? 어떤 색이던지 다 가능합니다!!", fhaircolor);
                }
            } else if (selection == 3) {
                if (cm.getChar().getGender() == 0) {
                    mbeauty = 4;
                    mfacenew = Array();
                    for(var i = 0; i < mface.length; i++) {
                        mfacenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                    cm.sendStyle("KMS 1.2.174 까지 모든 얼굴로 성형수술이 가능하답니다~~ 자자 선택해주세요 싸게 해드릴게요 헤헤~~", mfacenew);
                } else {
                    fbeauty = 4;
                    ffacenew = Array();
                    for(var i2 = 0; i2 < fface.length; i2++) {
                        ffacenew.push(fface[i2] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                    cm.sendStyle("KMS 1.2.174 까지 모든 얼굴로 성형수술이 가능하답니다~~ 자자 선택해주세요 싸게 해드릴게요 헤헤~~", ffacenew);
                }
            } else if (selection == 4) {
                if (cm.getChar().getGender() == 0) {
                    mbeauty = 5;
                    var current = cm.getChar().getFace() % 100 + 20000;
                    mcolors = Array();
                    mcolors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                    cm.sendStyle("케시샵의 랜즈는 사용 할 수 없으시니 여기서 해주시길 바랍니다~~ 자 무슨 아이 컬러를 선택하시겠어요? 간혹가다 팅하는 색도 있으니 조심하시구요!!", mcolors);
                } else {
                    fbeauty = 5;
                    var current = cm.getChar().getFace() % 100 + 21000;
                    fcolors = Array();
                    fcolors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                    cm.sendStyle("케시샵의 랜즈는 사용 할 수 없으시니 여기서 해주시길 바랍니다~~ 자 무슨 아이 컬러를 선택하시겠어요? 간혹가다 팅하는 색도 있으니 조심하시구요!!", fcolors);
                }
	}
        } else if (status == 2) {
        selection = selection & 0xFF;
        if (!cm.haveItem(5155000, 1)) {
            cm.sendOk("#b#i5155000# #t5155000##k를 정말 가지고 계신가요?. 아이템을 제대로 갖고 있는 것이 맞는가 일단 확인 먼저 해주길 바랍니다.");
            cm.dispose();
            return;
        }
            if (beauty == 1) {
                cm.setSkin(skin[selection]);
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 피부 코디네이팅을 완료 하였습니다.");
 	    cm.gainItem(5155000,-1);
            cm.dispose();
            }
            if (mbeauty == 2) {
                cm.setHair(mhairnew[selection]);
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 헤어 코디네이팅을 완료 하였습니다.");
	    cm.gainItem(5155000,-1);
            cm.dispose();
            }
            if (fbeauty == 2) {
                cm.setHair(fhairnew[selection]);
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 헤어 코디네이팅을 완료 하였습니다.");
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.gainItem(5155000,-1);
            cm.dispose();
            }
            if (mbeauty == 3) {
                cm.setHair(mhaircolor[selection]);
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 염색 코디네이팅을 완료 하였습니다.");
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.gainItem(5155000,-1);
            cm.dispose();
            }
            if (fbeauty == 3) {
                cm.setHair(fhaircolor[selection]);
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 염색 코디네이팅을 완료 하였습니다.");
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.gainItem(5155000,-1);
            cm.dispose();
            }
            if (mbeauty == 4) {
                cm.setFace(mfacenew[selection]);
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 얼굴 코디네이팅을 완료 하였습니다.");
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.gainItem(5155000,-1);
            cm.dispose();
            }
            if (fbeauty == 4) {
                cm.setFace(ffacenew[selection]);
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 얼굴 코디네이팅을 완료 하였습니다.");
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.gainItem(5155000,-1);
            cm.dispose();
            }
            if (mbeauty == 5) {
                cm.setFace(mcolors[selection]);
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 눈 색상 코디네이팅을 완료 하였습니다.");
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.gainItem(5155000,-1);
            cm.dispose();
            }
            if (fbeauty == 5) {
                cm.setFace(fcolors[selection]);
	    cm.playerMessage(5, "카르타의 진주를 1개를 사용하여 1회 눈 색상 코디네이팅을 완료 하였습니다.");
	    cm.sendOk("자~ 손님이 원하시는 대로 코디가 완성이 되어어었답니다다다다다! 어디 한번 거울을 보는건 어때요? 정말 이쁘시군요~ 천사에요 천사! 역시 내 실력이라니까~~~ 흐흐!");
	    cm.gainItem(5155000,-1);
            cm.dispose();
            }

	}
   }
}