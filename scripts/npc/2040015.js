


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012123
	
	엔피시 이름 : 써니

	엔피시가 있는 맵 : 광장헤어샵

	엔피시 설명 : 안드로이드메이크업


*/






/*

	성형 엔피시

*/

var status = 0;
var beauty = 0;
var facenew;
var colors;
var hairnew;
var haircolor;
var mface = Array(23000, 23001, 23002, 23003, 23005, 23006, 23008, 23010, 23011, 23012, 23016);
var mhair = Array(30000, 30010, 30020, 30030, 30040, 30050, 30060, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30560, 30570, 30590, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30700, 30710, 30730, 30760, 30770, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30910, 30930, 30940, 30950, 33030, 33060, 33070, 33080, 33090, 33110, 33120, 33130, 33150, 33170, 33180, 33190, 33210, 33220, 33250, 33260, 33270, 33280, 33310, 33330, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33480, 33500, 33510, 33520, 33530, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33990, 36010, 36020, 36030, 36040, 36050, 36070, 36080, 36090, 36100, 36130, 36140, 36150, 36160, 36170, 36180, 36190, 36210, 36220, 36230, 36240, 36250, 36330, 36340, 36350, 36380, 36390, 36400, 36410, 36420, 36460, 36470, 36480, 36510, 36520, 36530, 36570, 36580, 36590, 36620, 36630, 36640, 36650, 36670, 36690, 36700, 36710, 36720, 36730, 36740, 36750, 36760, 36780, 36790, 36800, 36810, 36820, 36830, 36840, 36850, 36860, 36940, 36950, 36980, 36990, 35000, 35010, 35020, 35030, 35040, 35050, 35060, 35070, 35080, 35090, 35100, 35150);
var fface = Array(24001, 24002, 24003, 24004, 24007, 24012);
var fhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31400, 31410, 31420, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31590, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31740, 31750, 31780, 31790, 31800, 31810, 31820, 31840, 31850, 31860, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 31990, 34040, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34660, 34670, 34680, 34690, 34700, 34710, 34720, 34730, 34740, 34750, 34760, 34770, 34780, 34790, 34800, 34810, 34820, 34830, 34840, 34850, 34860, 34870, 34880, 34900, 34910, 34940, 34950, 34960, 34970, 37000, 37010, 37020, 37030, 37040, 37060, 37070, 37090, 37100, 37110, 37120, 37130, 37140, 37210, 37220, 37230, 37240, 37250, 37260, 37300, 37310, 37320, 37330, 37340, 37350, 37370, 37380, 37400, 37450, 37460, 37490, 37500, 37510, 37520, 37530, 37570, 37580, 37610, 37620, 37630, 37640, 37650, 37660, 37670, 37690, 37700, 37710, 37720, 37730, 37740, 37750, 37760, 37770, 37780, 37790, 37800, 37810, 37820, 37830, 37840, 37850, 37860, 37940, 37950, 37960, 37970, 37980, 37990, 38000, 38010, 38020, 38030, 38040, 38050, 38060, 38070, 38090, 38100, 38110, 38120, 38130, 38270, 38280);
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
        if (cm.getPlayer().getAndroid() == null) {
            cm.sendOk("안드로이드가 없는 분은 안드로이드 메이크업을 하실 수 없습니다. 안드로이드와 함께 찾아와 주세요. 아 참 그냥 안드로이드가 아니라 #r고급형 안드로이드#k 이어야 해요~");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getAndroid().getItemId() != 1662002 && cm.getPlayer().getAndroid().getItemId() != 1662003) {
            cm.sendOk("고급형 안드로이드만 성형과 머리손질이 가능합니다.");
            cm.dispose();
            return;
        }
	    cm.sendSimple("모든 안드로이드 성형과 머리손질은 #b#i4310066# #t4310066# 5개#k로 이용하실 수 있습니다. \r\n\r\n#L3##b얼굴#k#l\r\n#L4##b렌즈#k#l");
    } else if (status == 1) {
	if (cm.getAndroidGender() == 0) {if (selection == 1) {
		beauty = 2;
		hairnew = Array();
		for (var i = 0; i < mhair.length; i++) {
		    if (mhair[i] == 30100 || mhair[i] == 30010) {
			hairnew.push(mhair[i]);
		    } else {
			hairnew.push(mhair[i] + parseInt(cm.getPlayer().getAndroid().getHair() % 10));
		    }
		}
		cm.askAvatarAndroid("원하는 아바타를 선택해주세요.", hairnew);
	    } else if (selection == 2) {
		beauty = 3;
		haircolor = Array();
		var current = parseInt(cm.getPlayer().getAndroid().getHair() / 10) * 10;
		if (current == 30100) {
		    haircolor = Array(current, current + 1, current + 2, current + 3, current + 4, current + 5, current + 6, current + 7);
		} else if (current == 30010) {
		    haircolor = Array(current);
		} else {
		    for (var i = 0; i < 8; i++) {
			haircolor.push(current + i);
		    }
		}
		cm.askAvatarAndroid("원하는 아바타를 선택해주세요.", haircolor);
	    } else if (selection == 3) {
		beauty = 4;
		facenew = Array();
		for (var i = 0; i < mface.length; i++) {
		    if (mface[i] == 20021 || mface[i] == 20022) {
			facenew.push(mface[i]);
		    } else {
			facenew.push(mface[i] + cm.getPlayer().getAndroid().getFace() % 1000 - (cm.getPlayer().getAndroid().getFace() % 100));
		    }
		}
		cm.askAvatarAndroid("원하는 아바타를 선택해주세요.", facenew);
	    } else if (selection == 4) {
		beauty = 5;
		var current = cm.getPlayer().getAndroid().getFace() % 100 + 23000;
		colors = Array();
		if (current == 20021 || current == 20022) {
		    colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 600);
		} else if (current == 20041 || current == 20042) {
		    colors = Array(current, current + 100, current + 200, current + 300);
		} else {
		    colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500);
		}
		cm.askAvatarAndroid("원하는 아바타를 선택해주세요.", colors);
	    }
	} else {
            if (selection == 1) {
		beauty = 2;
		hairnew = Array();
		for (var i = 0; i < fhair.length; i++) {
		    hairnew.push(fhair[i] + parseInt(cm.getPlayer().getAndroid().getHair() % 10));
		}
		cm.askAvatarAndroid("원하는 아바타를 선택해주세요.", hairnew);
	    } else if (selection == 2) {
		beauty = 3;
		haircolor = Array();
		var current = parseInt(cm.getPlayer().getAndroid().getHair() / 10) * 10;
		for (var i = 0; i < 8; i++) {
		    haircolor.push(current + i);
		}
		cm.askAvatarAndroid("원하는 아바타를 선택해주세요.", haircolor);
	    } else if (selection == 3) {
		beauty = 4;
		facenew = Array();
		for (var i = 0; i < fface.length; i++) {
		    facenew.push(fface[i] + cm.getPlayer().getAndroid().getFace() % 1000 - (cm.getPlayer().getAndroid().getFace() % 100));
		}
		cm.askAvatarAndroid("원하는 아바타를 선택해주세요.", facenew);
	    } else if (selection == 4) {
		beauty = 5;
		var current = cm.getPlayer().getAndroid().getFace() % 100 + 24000;
		colors = Array();
 		if (current == 21139 || current == 21140) {
		    colors = Array(current, current + 100, current + 200);
		} else {
		colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600);
		} cm.askAvatarAndroid("원하는 아바타를 선택해주세요.", colors);
	    }
	}
    } else if (status == 2) {
        selection = selection & 0xFF;
        if (!cm.haveItem(4310066, 5)) {
            cm.sendOk("#b#i4310066# #t4310066# 5개#k가 필요합니다. 아이템을 제대로 갖고 계신것이 맞는지 확인해 주세요.");
            cm.dispose();
            return;
        }
        else if (beauty == 2 || beauty == 6)
	    cm.setHairAndroid(hairnew[selection]);
        else if (beauty == 3)
	    cm.setHairAndroid(haircolor[selection]);
        else if (beauty == 4 || beauty == 7)
	    cm.setFaceAndroid(facenew[selection]);
        else if (beauty == 5)
	    cm.setFaceAndroid(colors[selection]);
        cm.gainItem(4310066, -5);
        cm.dispose();
	   
    }
}
