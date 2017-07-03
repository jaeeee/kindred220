/*
 * @Author 바이러스(v_ir_us) / 하요(ifhayo)
 */
var list1 = [1000088,1050380,1073084,1102848,1702620]; // 키네시스 세트
var list2 = [1004568,1050372,1073079,1102844,1702607]; // 래빗마우스 세트
var list3 = [1004541,1050370,1073075,1702595,1102836]; // 티파티 세트
var list4 = [1004527,1050368,1070069,1102831,1702591]; // 플라잉 세트
var list5_1 = [1004530,1052942,1082657,1102685,1702505]; // 인형 세트
var list6 = [1004486,1050364,1073056,1102822,1702586]; // 봄 세트
var list7 = [1004528,1052941,1072783,1102832,1102766]; // 스우 세트
var list8 = [1004192,1050335,1072943,1102706,1702528,1112949]; // 멜로디 세트
var list9 = [1004180,1042319,1062207,1082588,1072934,1702523]; // 호이포이 무지개 세트
var list10 = [1004158,1050322,1070061,1102688,1702512]; // 파티 다이어리 세트
var list11 = [1004117,1050318,1702501]; // 프로포즈 세트
var list12 = [1000074,1050319,1070059,1102674,1702503]; // 버블버블 소풍 세트
var list13 = [1000090,1050384,1080009]; // 펭귄 세트
var weapons = [1702291,1702361,1702365,1702364,1702155,1702196,1702211,1702400,1702366,1702398,1702416,1702397,1702424,1702444,1702443,1702340,1702466,1702453,1702457,1702464,1702473,1702470,1702476,1702458,1702486,1702487,1702488,1702485,1702497,1702455,1702405,1702469]; // 업그레이드 무기
var seraphim = [1702180,1702188,1702313,1702314,1702315,1702316]; // 업그레이드 세라핌
var listname = ["","키네시스 세트","래빗마우스 세트","티파티 세트","플라잉 세트","인형 세트","봄 세트","스우 세트","멜로디 세트","호이포이 무지개 세트","파티 다이어리 세트","프로포즈 세트","버블버블 소풍 세트","펭귄 세트","엘사 세트","꽃도령 세트","꽃아씨/늘푸른 사또 세트","인형의 집/핑크엔젤 세트","엘리자베스/나폴레옹 세트","샤오슈 토끼 세트","식목일 세트","서큐버스 세트#r(여)#b","아기양 잠옷 세트","오후의 홍차 세트","제논틱 세트","골프 세트","금방울 세트","샐리맨더 세트#r(여)#b","메이플 야구 세트","시원한 바다 세트","슈퍼스타 세트","신의 아이 세트","퍼펙트 하프물범 세트","아이스 썸머 세트","꼬꼬닭 세트","메이드/버클러 세트","마스터 페어리 세트","폭신폭신 구름양 세트","오데트/오딜 네로 세트#r(여)#b","그레이/핑크 네로 세트","초코퐁듀 세트","어둠의 소악마 세트","암염의 속죄자 세트","이국적인 축제 세트","은월 세트","Blavy 엔젤/소울베어 세트","마스터 포니 세트","쇼퍼홀릭 세트","키네시스 세트","업그레이드 무기","업그레이드 세라핌"]
        
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
   	mile = "(가격 : #Cgray#1000#r + ＠#Cgray#후원포인트#k)\r\n";
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
        cm.sendGetText("아이템 몇개를 후원포인트로 교환하시겠습니까?\r\n#r※ 1개당 #k = #b10000후원포인트#k");
	} else if (selected == 1738){
	showExplanation();
	} else {
	itemid = selection;
	cm.sendYesNo("#b#i"+itemid+"# #z"+itemid+"# #r 1개#k를 #Cgray##e1000#n#r + @#k#e후원포인트#n에 구매하시겠습니까?");
	cost = 1000;
}
	} else if (status == 1) {
	if (selected == 999999) {
	cost = capes.toString().search(selection) % 8 == 0 ? 2000 : badge.toString().search(selection) % 8 == 0 ? 3000 : 1500;
	itemid = selection;
	cm.sendYesNo("#b#i"+itemid+"# #z"+itemid+"# #r 1개#k를 #Cgray##e"+cost+"#n#r + @#k#e후원포인트#n에 구매하시겠습니까?");
    } else if (selected == 19) {
        meso = cm.getText();
        cm.sendYesNo("환전을 원하시는 아이템갯수가 #b"+meso+" 개맞습니까?\r\n#k환전 후 #r"+meso*10000+ "후원포트#k를 얻으실 수 있습니다.");
	} else {
        cm.sendGetNumber("\r\n#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 후원포인트#k\r\n\r\n#r※ 1000 후원포인트#k = #b올스텟 ＋100#k\r\n",1,1,cm.getPlayer().getRC());
}
	} else if (status == 2) {
	if (selected == 999999) {
	cm.sendGetNumber("\r\n#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 후원포인트#k\r\n\r\n#r※ 1000 후원포인트#k = #b올스텟 ＋100#k\r\n",1,1,cm.getPlayer().getRC());
        } else if (selected == 19) {
            if (cm.haveItem(4310027, meso)) {
                cm.gainItem(4310027, -1*meso);
                cm.gainRC(10000 * meso);
                sendHint("템을 후원포인트로 교환하셨습니다.",200,20);
                cm.dispose();
            } else {
		sendHint("코인이 부족합니다.",200,20);
                cm.dipsose();
                cm.gainItem(4310027, -1*meso);
                cm.gainRC(10000 * meso);
                sendHint("템을 후원포인트로 교환하셨습니다.",200,20);
                cm.dispose();
        }
        } else {
	if (selection % 1000 != 0) {
	sendHint("정해진 후원포인트 단위에 맞추어 적어주세요.\r\n#r 1000 후원포인트#k = #b올스텟 ＋100#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	allstat = selection/2000 * 200;
	allstatprice = selection;
	cm.sendGetNumber("\r\n#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 후원포인트#k\r\n\r\n#e#Cgray#※ "+allstatprice+" 후원포인트 = 올스텟 ＋"+allstat+" #k#n\r\n#r※ 100 후원포인트#k = #b공격력/마력 ＋10#k",1,1,cm.getPlayer().getRC());
}
}
	} else if (status == 3) {
	if (selected == 999999) {
	if (selection % 100 != 0) {
	sendHint("정해진 후원포인트 단위에 맞추어 적어주세요.\r\n#r 1000 후원포인트#k = #b올스텟 ＋100#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	allstat = selection/2000 * 200;
	allstatprice = selection;
	cm.sendGetNumber("\r\n#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 후원포인트#k\r\n\r\n#e#Cgray#※ "+allstatprice+" 후원포인트 = 올스텟 ＋"+allstat+" #k#n\r\n#r※ 100 후원포인트#k = #b공격력/마력 ＋10#k",1,1,cm.getPlayer().getRC());
}
	} else {
	if (selection % 100 != 0) {
	sendHint("정해진 후원포인트 단위에 맞추어 적어주세요.\r\n#r 100 후원포인트#k = #b공격력/마력 ＋10#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	atk = selection/2000 * 200;
	atkprice = selection;
	cm.sendYesNo("#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 후원포인트\r\n\r\n#e#Cgray#※ "+allstatprice+" 후원포인트 = #r올스텟 ＋"+allstat+" #Cgray##n\r\n#e#Cgray#※ "+atkprice+" 후원포인트 = #r공격력/마력 ＋"+atk+" #k#n\r\n\r\n※ 이 아이템을 제작 하시겠습니까?");
}
}
	} else if (status == 4) {
	if (selected == 999999) {
	if (selection % 500 != 0) {
	sendHint("정해진 후원포인트 단위에 맞추어 적어주세요.\r\n#r 1000 후원포인트#k = #b공격력/마력 ＋100#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	atk = selection/2000 * 200;
	atkprice = selection;
	cm.sendYesNo("#e선택 아이템#n : #i"+itemid+"# #z"+itemid+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n 후원포인트\r\n\r\n#e#Cgray#※ "+allstatprice+" 후원포인트 = #r올스텟 ＋"+allstat+" #Cgray##n\r\n#e#Cgray#※ "+atkprice+" 후원포인트 = #r공격력/마력 ＋"+atk+" #k#n\r\n\r\n※ 이 아이템을 제작 하시겠습니까?");
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
    cm.sendOk("#b"+cost+" 후원포인트#k를 사용하여 #b#i"+itemid+"# #z"+itemid+"##k을(를) 제작하였습니다.");
	cm.playerMessage(cost+" 후원포인트를 사용하여 "+Packages.server.items.ItemInformation.getInstance().getName(itemid)+"을(를) 제작하였습니다.");
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
	item.setOwner("[후원아이템]");
	Packages.server.items.InventoryManipulator.addFromDrop(cm.getC(),item,false);
}
        
function sendHint(message,x,y) {
	return cm.getPlayer().getClient().getSession().write(Packages.packet.creators.MainPacketCreator.sendHint(message,x,y));
}

function showInfo() {
    var text = "#e#r<후원포인트 샵>#n#k\r\n";
	//text += "#L1738##e#z2431872# 획득 방법이 궁금하세요?#l#n\r\n\r\n";
	text += "　◆ #b#h #님의 보유 후원포인트 : #e#r"+cm.getRC()+"#n#k\r\n";
	text += "　◆ 아이템 추가 문의는 관리자에에 문의해주세요.\r\n";
	//text += "#e#b[명찰 등등 아이템]#k#n\r\n#L999999##fs 12##d다음 페이지로 넘어가기 #k\r\n\r\n#l";
        //text += "#e#b[특수 교환 아이템]#k#n\r\n#L19##i4310027# #e후포 교환하기#l (1:10000)\r\n\r\n\r\n";
        text += showItemList(1,0,list1,list1.length,true);        text += showItemList(2,0,list2,list2.length,true);        text += showItemList(3,0,list3,list3.length,true);        text += showItemList(4,0,list4,list4.length,true);
        text += showItemList(5,0,list5_1,list5_1.length,true);       
        text += showItemList(6,0,list6,list6.length,true);        
        text += showItemList(7,0,list7,list7.length,true);
        text += showItemList(8,0,list8,list8.length,true);        text += showItemList(9,0,list9,list9.length,true);        text += showItemList(10,0,list10,list10.length,true);        text += showItemList(11,0,list11,list11.length,true);
        text += showItemList(12,0,list12,list12.length,true);               
        text += showItemList(13,0,list13,list13.length,true);            
       
	cm.sendSimple(text);
}

function showSecondShop() {
	var i;
	var info = "(가격 : #Cgray#1500~3000#r + ＠#Cgray#후원포인트#k)\r\n";
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
	cm.sendOk("#e#r<신개념 서비스 : 후원포인트샵>#k : 후원포인트를 얻어봅시다!~#n\r\n\r\n　① 보스를 잡으면 일정량의 후원포인트를 획득합니다.\r\n　② 보스레이드 상점에서 구매할 수 있습니다.\r\n　③ 이벤트를 통해 획득할 수 있습니다.\r\n\r\n위 사항을 확인해주시고, 열심히 획득하시기 바랍니다.");
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