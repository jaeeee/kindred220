/*
 * @Author 바이러스(v_ir_us) / 하요(ifhayo)
 */
var list1 = [1112900,1112901,1112908,1112924,1112925,1112926]; // 캐릭터 반지 아이템
var list2 = [1002186,1012289,1032024,1022079,1072153,1082102,1102039]; // 투명 세트
var list3 = [1002785,1022068,1042142,1062093,1702155,1112904]; // 바캉스 레인보우
var list4 = [1003109,1052275,1072448,1102245,1702275]; // 로얄 레인보우
var list5_1 = [1003398,1003399,1003400,1003401,1003402]; // 기사단장 1세트
var list5_2 = [1702269,1702270,1702271,1702272,1702273]; // 기사단장 2세트
var list6 = [1001075,1051277,1071037,1102356,1702347]; // 시그너스 세트
var list7 = [1003422,1050226,1051276,1070024,1071036,1102355]; // 비커밍 팬텀 세트
var list8 = [1000050,1001076,1050227,1051278,1702348]; // 윈터 스노우 세트
var list9 = [1000051,1001077,1050228,1051279,1072646,1102367]; // 엘븐 스피릿
var list10 = [1002943,1050152,1051180,1702217]; // 마린 보이 세트
var list11 = [1002995,1052209,1051192,1702289]; // 로얄 네이비
var list12 = [1003636,1052536,1102491,1702375]; // 아쿠아 세트
var list13_5 = [1042241,1062156,1702367,1042237,1062043,1702368]; // 핑크3/블랙3 수피아 세트
var list14_5 = [1050210,1051256,1702334,1050142,1051166,1702174]; // 천공의 시엘 세트3/퓨전 한복 세트3
var list15 = [1003217,1050188,1070006,1102290,1702306]; // 꽃도령 세트
var list16_5 = [1001085,1051302,1071044,1000058,1050247,1070028]; // 꽃아씨3/늘푸른 사또3
var list17_5 = [1002885,1051261,1001065,1051252,1071031,1702328]; // 인형의 집2/핑크엔젤4
var list18_5 = [1001062,1051220,1081007,1000042,1050178,1070019]; // 엘리자베스3/나폴레옹 세트3
var list19 = [1000062,1040192,1060180,1001089,1041194,1061203]; // 샤오슈 토끼 세트
var list20 = [1002824,1003083,1102349,1003855,1052245,1072438]; //식목일 세트
var list21 = [1003842,1051349,1072816,1082525,1102554]; // 서큐버스 세트
var list22 = [1003831,1052605,1072808,1082520,1702415]; // 아기양 잠옷
var list23 = [1003503,1050232,1051282,1702352]; // 오후의 홍차
var list24 = [1052579,1072782,1082505,1702399]; // 제논틱 세트
var list25 = [1003867,1042264,1060182,1061206,1072823,1082527]; // 골프 세트
var list26 = [1003865,1050284,1051350,1072821,1102564,1702423]; // 금방울 세트
var list27 = [1003892,1051352,1072831,1102583,1702433]; // 샐리맨더 세트
var list28 = [1003909,1050291,1051357,1072836,1102593,1702442]; // 메이플 야구 세트
var list29 = [1003920,1050293,1051359,1072843,1702446]; // 시원한 바다 세트
var list30 = [1003945,1050296,1051362,1072852,1102608,1702451]; // 슈퍼스타 세트
var list31 = [1003953,1050298,1051365,1072859,1102616,1102617]; // 신의 아이 세트
var list32 = [1003776,1052587,1082493,1702454]; // 퍼펙트 하프물범 세트
var list33 = [1003957,1003958,1050300,1051367,1072862,1102619]; // 아이스 썸머 세트
var list34 = [1003965,1052661,1082549,1702461]; // 꼬꼬닭 세트
var list35 = [1003971,1003972,1050302,1051369,1072868,1102621]; // 메이드 버클러 세트
var list36 = [1003955,1050299,1051366,1072860,1082555,1702456]; // 마스터 페어리 세트
var list37 = [1003968,1052667,1082552,1072867,1702467]; // 폭신폭신 구름양 세트
var list38 = [1003951,1051374,1072857,1003952,1051375,1072858]; // 오데트/오딜 네로 세트
var list39 = [1004003,1004004,1052074,1082166,1072742]; // 그레이/핑크 네로 세트
var list40 = [1003998,1050304,1051372,1072876,1082565,1702468]; // 초코퐁듀 세트
var list41 = [1004000,1052674,1072877,1082560,1702471]; // 어둠의 소악마 세트
var list42 = [1004002,1050305,1051373,1070057,1071074,1102632]; // 암염의 속죄자 세트
var list43 = [1002962,1002973,1050153,1051182,1072748,1102620]; // 이국적인 축제 세트
var list44 = [1000069,1001092,1050311,1051383,1072901,1102667]; // 은월 세트
var list45 = [1003853,1082524,1072817,1004081,1052655,1072856]; // blavy엔젤3/소울베어3 세트
var list46 = [1000070,1001093,1050312,1051384,1082580,1072908]; // 마스터 포니 세트
var list47 = [1000072,1001095,1050310,1051382,1072897,1102669]; // 쇼퍼홀릭 세트
var weapons = [1702291,1702361,1702365,1702364,1702155,1702196,1702211,1702400,1702366,1702398,1702416,1702397,1702424,1702444,1702443,1702340,1702466,1702453,1702457,1702464,1702473,1702470,1702476,1702458,1702486,1702487,1702488,1702485,1702497,1702455,1702405,1702469]; // 업그레이드 무기
var seraphim = [1702180,1702188,1702313,1702314,1702315,1702316]; // 업그레이드 세라핌
var listname = ["","캐릭터 반지 아이템","투명 아이템 세트","바캉스 레인보우 세트","로얄 레인보우 세트","기사단장 세트","시그너스 세트","비커밍 팬텀 세트","윈터 스노우 세트","엘븐 스피리 세트","마린 보이/걸 세트","로얄 네이비 세트","아쿠아 세트","핑크/블랙 수피아 세트","천공의 시엘/퓨전 한복 세트","꽃도령 세트","꽃아씨/늘푸른 사또 세트","인형의 집/핑크엔젤 세트","엘리자베스/나폴레옹 세트","샤오슈 토끼 세트","식목일 세트","서큐버스 세트#r(여)#b","아기양 잠옷 세트","오후의 홍차 세트","제논틱 세트","골프 세트","금방울 세트","샐리맨더 세트#r(여)#b","메이플 야구 세트","시원한 바다 세트","슈퍼스타 세트","신의 아이 세트","퍼펙트 하프물범 세트","아이스 썸머 세트","꼬꼬닭 세트","메이드/버클러 세트","마스터 페어리 세트","폭신폭신 구름양 세트","오데트/오딜 네로 세트#r(여)#b","그레이/핑크 네로 세트","초코퐁듀 세트","어둠의 소악마 세트","암염의 속죄자 세트","이국적인 축제 세트","은월 세트","Blavy 엔젤/소울베어 세트","마스터 포니 세트","쇼퍼홀릭 세트","업그레이드 무기","업그레이드 세라핌"]
        
var seclist = [1112135,1112141,1112142,1112144,1112146,1112148,1112150,1112238,1112252,1112253,1112256,1112258,1112259,1112262];
var badge = [1182006,1182011,1182023,1182067,1182064,1182069];
var caps = [1004029,1003492,1003493,1003494,1003495,1003496,1003131,1003132,1003133,1003846,1003847,1003860,1003873,1003874,1003875,1003876,1003877,1003878,1004034,1003542,1003543,1003544,1003545,1003546,1003547,1004026,1004027,1004028,1003807,1003954,1003901];
var accessory_1 = [1022223,1022188,1022174,1022177,1022187,1022196];
var accessory_2 = [1012450,1012374,1012415,1012379,1012176,1012388,1012384];
var coats = [1042292,1042238,1042240,1042265,1042260,1042287,1042267,1042268,1042269,1042271,1042272,1042278,1042285,1042286,1042290,1042279,1042280,1042281,1042282]; // 1042287 / 1042285 커트(?)
var pants = [1062174,1062185,1062171,1062172,1062174,1062176,1062179];
var longcoats = [1050316,1051387,1052671,1050215,1051262,1052618,1052619];
var capes = [1102546,1102547,1102548,1102376,1102377,1102378,1102307,1102308,1102309,1102466,1102572,1102624,1102630,1102450,1102451,1102643,1102511,1102629,1102615,1102625];
var seclistname = ["","명찰 반지 아이템","말풍선 반지 아이템","뱃지 아이템","업그레이드 모자","업그레이드 악세서리","업그레이드 상의","업그레이드 하의","업그레이드 한벌옷","업그레이드 망토"];

function start() {
	 status = -1;
   	mile = "(가격 : #Cgray#1000#r + ＠#Cgray#마일리지#k)\r\n";
	showInfo();
}

function action(mode,type,selection) {
	if (mode == 1) {
	status++;
	}
	if (mode == 0 || mode == -1) {
	cm.dispose();
	return;
}
	if (status == 0) {
	selected = selection;
	if (selected == 999999) {
	showSecondShop();
    } else if (selected == 19) {
        cm.sendGetNumber("메소로 환전을 원하시는 마일리지를 입력해주세요\r\n#r※ 1 마일리지#k = #b20000 메소#k",1,1,cm.getPlayer().getRC());
	} else if (selected == 1738){
	showExplanation();
	} else {
	itemid = selection;
	cm.sendYesNo("#b#i"+itemid+"# #z"+itemid+"# #r 1개#k를 #Cgray##e1000#n#r + @#k#e마일리지#n에 구매하시겠습니까?");
	cost = 1000;
}
	} else if (status == 1) {
	if (selected == 999999) {
	cost = capes.toString().search(selection) % 8 == 0 ? 2000 : badge.toString().search(selection) % 8 == 0 ? 3000 : 1500;
	itemid = selection;
	cm.sendYesNo("#b#i"+itemid+"# #z"+itemid+"# #r 1개#k를 #Cgray##e"+cost+"#n#r + @#k#e마일리지#n에 구매하시겠습니까?");
    } else if (selected == 19) {
        meso = selection;
        cm.sendYesNo("환전을 원하시는 마일리지가 #b"+meso+" 마일리지 맞습니까?\r\n#k환전 후 #r"+meso*20000+ "메소#k를 얻으실 수 있습니다.");
        meso *= 20000;
	} else {
        cm.sendGetNumber("\r\n#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 마일리지#k\r\n\r\n#r※ 100 마일리지#k = #b올스텟 ＋6#k\r\n",0,0,cm.getPlayer().getRC());
}
	} else if (status == 2) {
	if (selected == 999999) {
	cm.sendGetNumber("\r\n#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 마일리지#k\r\n\r\n#r※ 100 마일리지#k = #b올스텟 ＋6#k\r\n",0,0,cm.getPlayer().getRC());
        } else if (selected == 19) {
            if (cm.getMeso() + meso > 9999999999) {
                sendHint("메소가 너무 많습니다.",200,20);
                cm.dipsose();
            } else {
                cm.gainMeso(meso);
                cm.gainRC(meso / 20000);
                sendHint("마일리지를 메소로 환전하셨습니다.",250,20);
                cm.dispose();
            }
        } else {
	if (selection % 100 != 0) {
	sendHint("정해진 마일리지의 단위에 맞추어 적어주세요.\r\n#r※ 100 마일리지#k = #b올스텟 ＋6#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	allstat = selection/100 * 6;
	allstatprice = selection;
	cm.sendGetNumber("\r\n#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 마일리지#k\r\n\r\n#e#Cgray#※ "+allstatprice+" 마일리지 = 올스텟 ＋"+allstat+" #k#n\r\n#r※ 500 마일리지#k = #b공격력/마력 ＋3#k",0,0,cm.getPlayer().getRC());
}
}
	} else if (status == 3) {
	if (selected == 999999) {
	if (selection % 100 != 0) {
	sendHint("정해진 마일리지의 단위에 맞추어 적어주세요.\r\n#r※ 100 마일리지#k = #b올스텟 ＋6#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	allstat = selection/100 * 6;
	allstatprice = selection;
	cm.sendGetNumber("\r\n#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 마일리지#k\r\n\r\n#e#Cgray#※ "+allstatprice+" 마일리지 = 올스텟 ＋"+allstat+" #k#n\r\n#r※ 500 마일리지#k = #b공격력/마력 ＋3#k",0,0,cm.getPlayer().getRC());
}
	} else {
	if (selection % 500 != 0) {
	sendHint("정해진 마일리지의 단위에 맞추어 적어주세요.\r\n#r※ 500 마일리지#k = #b공격력/마력 ＋3#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	atk = selection/500 * 3;
	atkprice = selection;
	cm.sendYesNo("#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 마일리지\r\n\r\n#e#Cgray#※ "+allstatprice+" 마일리지 = #r올스텟 ＋"+allstat+" #Cgray##n\r\n#e#Cgray#※ "+atkprice+" 마일리지 = #r공격력/마력 ＋"+atk+" #k#n\r\n\r\n※ 이 아이템을 제작 하시겠습니까?");
}
}
	} else if (status == 4) {
	if (selected == 999999) {
	if (selection % 500 != 0) {
	sendHint("정해진 마일리지의 단위에 맞추어 적어주세요.\r\n#r※ 500 마일리지#k = #b공격력/마력 ＋3#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	atk = selection/500 * 3;
	atkprice = selection;
	cm.sendYesNo("#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 마일리지\r\n\r\n#e#Cgray#※ "+allstatprice+" 마일리지 = #r올스텟 ＋"+allstat+" #Cgray##n\r\n#e#Cgray#※ "+atkprice+" 마일리지 = #r공격력/마력 ＋"+atk+" #k#n\r\n\r\n※ 이 아이템을 제작 하시겠습니까?");
	}
	} else {
	makeSponserItem(itemid,allstat,atk);
	finish(cost,itemid);
}
        } else if (status == 5) {
         makeSponserItem(itemid,allstat,atk);
        finish(cost,itemid);
}
}

function finish(cost,itemid) {
    cm.sendOk("#b"+cost+" 마일리지#k를 사용하여 #b#i"+itemid+"# #z"+itemid+"##k을(를) 제작하였습니다.");
	cm.playerMessage(cost+" 마일리지를 사용하여 "+Packages.server.items.ItemInformation.getInstance().getName(itemid)+"을(를) 제작하였습니다.");
	cm.gainRC(-cost);
	cm.dispose();
}

function makeSponserItem(itemid,allstat,atk) {
	var ii = Packages.server.items.ItemInformation.getInstance();
	var item = ii.getEquipById(itemid);
	item.setStr(allstat);
	item.setDex(allstat);
	item.setInt(allstat);
	item.setLuk(allstat);
	item.setWatk(atk);
	item.setMatk(atk);
	item.setOwner("[마일리지샵]");
	Packages.server.items.InventoryManipulator.addFromDrop(cm.getC(),item,false);
}
        
function sendHint(message,x,y) {
	return cm.getPlayer().getClient().getSession().write(Packages.packet.creators.MainPacketCreator.sendHint(message,x,y));
}

function showInfo() {
    var text = "#e#r<신개념 서비스 : 마일리지샵>#n#k\r\n";
	text += "#L1738##e#z2431872# 획득 방법이 궁금하세요?#l#n\r\n\r\n";
	text += "　◆ #b#h #님의 보유 마일리지 : #e#r"+cm.getRC()+"#n#k\r\n";
	text += "　◆ 아이템 추가 문의는 관리자에에 문의해주세요.\r\n";
	text += "#L999999##d다음 페이지로 넘어가기 (1500원 이상 아이템)#k\r\n\r\n#l";
        text += "#e#b[특수 교환 아이템]#k#n\r\n#L19##i2028048# 메소로 교환하기 (1:20000)#l\r\n\r\n\r\n";
        text += showItemList(1,0,list1,list1.length,true);        text += showItemList(2,0,list2,list2.length,true);        text += showItemList(3,0,list3,list3.length,true);        text += showItemList(4,0,list4,list4.length,true);
        text += showItemList(5,0,list5_1,list5_1.length,true);        text += showItemList(5,0,list5_2,list5_2.length,false);        text += showItemList(6,0,list6,list6.length,true);        text += showItemList(7,0,list7,list7.length,true);
        text += showItemList(8,0,list8,list8.length,true);        text += showItemList(9,0,list9,list9.length,true);        text += showItemList(10,0,list10,list10.length,true);        text += showItemList(11,0,list11,list11.length,true);
        text += showItemList(12,0,list12,list12.length,true);        text += showItemList2(13,list13_5,0);        text += showItemList2(14,list14_5,0);        text += showItemList(15,0,list15,list15.length,true);
        text += showItemList2(16,list16_5,0);        text += showItemList2(17,list17_5,1);        text += showItemList2(18,list18_5,0);	text += showItemList(19,0,list19,list19.length,true);
	text += showItemList(20,0,list20,list20.length,true);	text += showItemList(21,0,list21,list21.length,true);	text += showItemList(22,0,list22,list22.length,true);
	text += showItemList(23,0,list23,list23.length,true);	text += showItemList(24,0,list24,list24.length,true);	text += showItemList(25,0,list25,list25.length,true);	
	text += showItemList(26,0,list26,list26.length,true);	text += showItemList(27,0,list27,list27.length,true);	text += showItemList(28,0,list28,list28.length,true);
	text += showItemList(29,0,list29,list29.length,true);	text += showItemList(30,0,list30,list30.length,true);	text += showItemList(31,0,list31,list31.length,true);
	text += showItemList(32,0,list32,list32.length,true);	text += showItemList(33,0,list33,list33.length,true);	text += showItemList(34,0,list34,list34.length,true);
	text += showItemList(35,0,list35,list35.length,true);	text += showItemList(36,0,list36,list36.length,true);	text += showItemList(37,0,list37,list37.length,true);
	text += showItemList(38,0,list38,list38.length,true);	text += showItemList(39,0,list39,list39.length,true);	text += showItemList(40,0,list40,list40.length,true);
	text += showItemList(41,0,list41,list41.length,true);	text += showItemList(42,0,list42,list42.length,true);	text += showItemList(43,0,list43,list43.length,true);
	text += showItemList(44,0,list44,list44.length,true);	text += showItemList2(45,list45,0);	text += showItemList(46,0,list46,list46.length,true);
	text += showItemList(47,0,list47,list47.length,true);	        
	cm.sendSimple(text);
}

function showSecondShop() {
	var i;
	var info = "(가격 : #Cgray#1500~3000#r + ＠#Cgray#마일리지#k)\r\n";
	var text = "#d이전 페이지로 돌아가려면 ESC를 눌러주세요.#k\r\n\r\n";
	text += "#e#b["+seclistname[1]+"]#k#n " + info;
	for (i = 0; i < 7; text += "#L"+seclist[i]+"##i"+seclist[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[2]+"]#k#n " + info;	
	for (i = 7; i < 14; text += "#L"+seclist[i]+"##i"+seclist[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[3]+"]#k#n " + info;	
	for (i = 0; i < badge.length; text += "#L"+badge[i]+"##i"+badge[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[4]+"]#k#n " + info;	
	for (i = 0; i < 6; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 6; i < 12; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 12; i < 18; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 18; i < 25; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 25; i < 31; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[5]+"]#k#n " + info;	
	for (i = 0; i < accessory_1.length; text += "#L"+accessory_1[i]+"##i"+accessory_1[i]+"##l",i++);	text += "\r\n";
	for (i = 0; i < accessory_2.length; text += "#L"+accessory_2[i]+"##i"+accessory_2[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[6]+"]#k#n " + info;
	for (i = 0; i < 6; text += "#L"+coats[i]+"##i"+coats[i]+"##l",i++);	text += "\r\n";
	for (i = 6; i < 13; text += "#L"+coats[i]+"##i"+coats[i]+"##l",i++);	text += "\r\n";
	for (i = 13; i < 19; text += "#L"+coats[i]+"##i"+coats[i]+"##l",i++);	text += "\r\n";
	text += "\r\n\r\n\r\n#e#b["+seclistname[7]+"]#k#n " + info;
	for (i = 0; i < pants.length; text += "#L"+pants[i]+"##i"+pants[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[8]+"]#k#n " + info;
	for (i = 0; i < longcoats.length; text += "#L"+longcoats[i]+"##i"+longcoats[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[9]+"]#k#n " + info;
	for (i = 0; i < 6; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	for (i = 6; i < 12; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	for (i = 12; i < 18; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	for (i = 18; i < 20; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	cm.sendSimple(text);
}

function showExplanation() {
	cm.sendOk("#e#r<신개념 서비스 : 마일지샵>#k : 마일리지를 얻어봅시다!~#n\r\n\r\n　① 보스를 잡으면 일정량의 마일리지를 획득합니다.\r\n　② 보스레이드 상점에서 구매할 수 있습니다.\r\n　③ 이벤트를 통해 획득할 수 있습니다.\r\n\r\n위 사항을 확인해주시고, 열심히 획득하시기 바랍니다.");
	    cm.dispose();
}

function showItemList2(num,arr,mode) {
    var text = "#e#b["+listname[num]+"]#k#n " + mile;
	var num = mode == 1 ? 2 : 3;
    for (var i = 0; i < num; text += "#L"+arr[i]+"##i"+arr[i]+"##l",i++);
    text += "　 ";
    for (var ii = num; ii < 6; text += "#L"+arr[ii]+"##i"+arr[ii]+"##l",ii++);
    text += "\r\n\r\n\r\n";
    return text;
}

function showItemList(num,b,arr,length,showname) {
    var text = "";
    if (showname) {
    text += "#e#b["+listname[num]+"]#k#n " + mile;
    }
    for (var i = b; i < length; text += "#L"+arr[i]+"##i"+arr[i]+"##l",i++);
    text += "\r\n\r\n\r\n";
    return text;
}