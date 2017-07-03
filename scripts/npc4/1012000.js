var status = 0;
var select = -1;

var names = Array("자쿰의 제단", "혼테일의 동굴", "신들의 황혼", "힐라의 탑", "아카이럼의 제단", "시그너스의 전당","폭군의 왕좌", "여왕의 성","심연의 동굴");
var boss = Array("자쿰, 카오스 자쿰", "혼테일, 카오스 혼테일", "핑크빈", "힐라", "아카이럼", "타락한 시그너스", "매그너스", "블러디 퀸", "벨룸");
var mid = Array("280030100", "240060200", "270050100", "262031300", "272020200", "271040100", "401060100", "105200310", "105200410");
var m = -1;
var k = "#fUI/UIToolTip/Item/Equip/Star/Star#"
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
	    var chat = "안녕하세요~! #p1012000#입니다. 다른 곳으로 안전하고 빠르게 이동하고 싶으신가요? 그렇다면 고객 만족을 최우선으로 생각하는 #b#p1012000##k를 이용해 해보세요. 특별히 무료로! 원하시는 곳까지 친절하게 셔다 드리고 있습니다.\r\n";
	    chat += "#b#L123456789#"+k+" #e낚시터#n로 이동하고 싶습니다.#l\r\n";
	    chat += "#b#L9071003#"+k+" #e몬스터 파크#n를 이용하고 싶습니다.#l\r\n";
	    chat += "#b#L184848484#"+k+" #e작을 하기 위한 전용 방#n으로 이동하겠습니다.#l\r\n";
	    if(cm.getPlayer().getJob() >= 3300 && cm.getPlayer().getJob() <= 3312) {
	    chat += "#b#L931000500##e재규어 서식지#n로 이동하고 싶습니다.#l\r\n";
	    }
	    chat += "#b#L1200#"+k+" 이 곳을 떠나 #e다른 곳#n으로 가고 싶습니다.#l\r\n";
	    cm.sendSimple(chat);


		
        } else if (status == 1) {
	if(selection == 931000500) {
		cm.warp(selection);
		cm.dispose();
	} else if(selection == 123456789) {
		cm.warp(selection);
		cm.dispose();
	} else if (selection == 9071003) {
	cm.dispose();
	cm.openNpc(selection);
	}  else if (selection == 184848484) {
	cm.dispose();
	cm.warp(selection);
	}else if (selection == 1200) {
	var warpmain = "#b#h ##k님 환영합니다~♬ 목적지를 선택해주세요.\r\n\r\n";
	warpmain += "#e#r[캐릭터 육성 관련 이동]#b#n";
	warpmain += "\r\n#L5#"+k+" #e사냥터#n로 가고 싶습니다.#l";
	warpmain += "\r\n#L7890#"+k+" #e#r[NEW]#n#k#e#b폭업사냥터#n로 가고 싶습니다.#k#l";
	warpmain += "\r\n#L6#"+k+" #b#e보스사냥터#n로 가고 싶습니다.#k#l";

	warpmain += "\r\n\r\n\r\n#r#e[게임 편의 이동]#b#n";
	warpmain += "\r\n#L9#"+k+" 이 곳을 떠나 #e다른 마을#n로 가고 싶습니다.";
	//warpmain += "\r\n#L7#"+k+" #e길드의 전당#n으로 가고 싶습니다.";
	warpmain += "\r\n#L8#"+k+" #e미션맵#n으로 가고 싶습니다.";
	warpmain += "\r\n#L10#"+k+" #e이벤트맵(싸이의 콘서트홀)#n으로 가고 싶습니다.";
	cm.sendSimple(warpmain);
	}else {
	cm.dispose();
}

	} else if (status == 2) {
	if (selection == 910001000) {
		cm.warp(selection);
		cm.dispose();
	} else if (selection == 5) {
	var hunt = "#b#h ##k님 환영합니다~♬ 사냥터를 선택해주세요.\r\n\r\n"
	hunt += "#r#e[레벨업 길라잡이]#k#n (몬스터 평균레벨, #b신규#k, #r인기 사냥터#k)\r\n";
	hunt += "#L100020100#(Lv.#Cgray#0#k13) │ #b버섯노래숲 　　　  #k │ #b콧노래 오솔길#k\r\n"
	hunt += "#L100040000#(Lv.#Cgray#0#k20) │ #r골렘사원 　　　　  #k │ #r골렘의 사원 입구#k\r\n"
	hunt += "#L101030300#(Lv.#Cgray#0#k20) │ #r북쪽숲　 　　　　  #k │ #r어린 나무숲#k\r\n"
	hunt += "#L120040300#(Lv.#Cgray#0#k35) │ #b골드비치　 　　　  #k │ #b해변가 풀숲3#k\r\n"
	hunt += "#L120041000#(Lv.#Cgray#0#k42) │ #b골드비치 　　　　  #k │ #b골드비치 해변1#k\r\n"
	hunt += "#L102030000#(Lv.#Cgray#0#k55) │ #r불타버린땅 　　　  #k │ #r와일드보어의 땅#k\r\n"
	hunt += "#L102040300#(Lv.#Cgray#0#k62) │ #b유적발굴지 　　　  #k │ #b발굴 중단지역#k\r\n"
	hunt += "#L105010300#(Lv.#Cgray#0#k65) │ #b어두운 동굴　　　  #k │ #b개미굴1#k\r\n"
	hunt += "#L105010000#(Lv.#Cgray#0#k66) │ #b습지　　　 　　　  #k │ #b조용한 습지#k\r\n"
	hunt += "#L200010300#(Lv.#Cgray#0#k71) │ #r스카이로드 　　　  #k │ #r하늘계단1#k\r\n"
	hunt += "#L211040001#(Lv.#Cgray#0#k79) │ #r히든스트리트 　　  #k │ #r왕관을휘날리며#k\r\n"
	hunt += "#L260020600#(Lv.#Cgray#0#k90) │ #r선셋로드 　　　　  #k │ #r사헬지대2#k\r\n"
	hunt += "#L261020400#(Lv.#Cgray#0#k95) │ #r알카드노 연구소　  #k │ #r연구소 C-2 구역#k\r\n"
	hunt += "#L261010102#(Lv.#Cgray#0#k96) │ #b제뉴미스트 연구소  #k │ #b연구소 202호#k\r\n"
	hunt += "#L240010200#(Lv.104) │ #b미나르숲 　　　　  #k │ #b심술쟁이의 숲#k\r\n"
	hunt += "#L240020500#(Lv.110) │ #b미나르숲 　　　　  #k │ #b불과 물의 전장#k\r\n"
	hunt += "#L220010500#(Lv.112) │ #b루디브리엄성 　　  #k │ #b테라스홀#k\r\n"
	hunt += "#L220020600#(Lv.114) │ #r루디브리엄성 　　  #k │ #r장난감공장<기계실>#k\r\n"
	hunt += "#L401053001#(Lv.115) │ #r폭군의 성채　　　  #k │ #r폭군의 성채 3층#k\r\n"
	hunt += "#L220060201#(Lv.119) │ #r히든스트리트 　　  #k │ #r삐뚤어진 시간#k\r\n"
	hunt += "#L223020200#(Lv.123) │ #b판타스틱 테마파크  #k │ #b익스트림 스테이션#k\r\n"
	hunt += "#L250020000#(Lv.126) │ #b무릉사원 　　　 　 #k │ #b초급 수련장#k\r\n"
	hunt += "#L240030100#(Lv.128) │ #b미나르숲 　　　　  #k │ #b용의 숲1#k\r\n"
	hunt += "#L251010402#(Lv.131) │ #r무릉도원 　　　　  #k │ #r빨간코 해적단 소굴2#k\r\n"
	hunt += "#L240040400#(Lv.137) │ #b미나르숲 　　　　  #k │ #b와이번의 협곡#k\r\n"
	hunt += "#L270010500#(Lv.142) │ #b타임로드 　　　　  #k │ #b추억의 길5#k\r\n"
	hunt += "#L240040510#(Lv.150) │ #r미나르숲 　　　　  #k │ #r죽은 용의 둥지#k\r\n"
	hunt += "#L270020500#(Lv.156) │ #b타임로드 　　　　  #k │ #b후회의 길5#k\r\n"
	hunt += "#L271010000#(Lv.164) │ #b파괴된 헤네시스　  #k │ #b파괴된 헤네시스#k\r\n"
	hunt += "#L270030500#(Lv.167) │ #b타임로드 　　　　  #k │ #b망각의 길5#k\r\n"
	hunt += "#L271030310#(Lv.173) │ #r기사단 요새　　　  #k │ #r무기고1#k\r\n"
	hunt += "#L271030400#(Lv.173) │ #r기사단 요새　　　  #k │ #r기사단 제 4구역#k\r\n"
	hunt += "#L273000000#(Lv.190) │ #b황혼의 페리온　　  #k │ #b황혼의 페리온#k\r\n"
	hunt += "#L273050000#(Lv.197) │ #r황혼의 페리온　　  #k │ #r원주민들의 피난처#k\r\n"
	cm.sendSimple(hunt);

	} else if (selection == 6) {
	cm.dispose();
	cm.openNpc(9010022);

	} else if (selection == 7) {
	cm.dispose();
	cm.warp(200000301,0);
	
	} else if (selection == 7890) {
	var kingdom = "#b#h ##k님 환영합니다~♬ 이동하실 맵을 선택해주세요\r\n\r\n";
	kingdom += "#r#e[추천 레벨 : 200~210 ]#n#k\r\n";
	kingdom += "#L241000205##b킹덤로드 - 깊어지는 비극의 숲1#k\r\n";
	kingdom += "#L241000204##b킹덤로드 - 깊어지는 비극의 숲2#k\r\n";
	kingdom += "#L241000203##b킹덤로드 - 깊어지는 비극의 숲3#k\r\n";
	kingdom += "#L241000202##b킹덤로드 - 깊어지는 비극의 숲4#k\r\n";
	kingdom += "#L241000201##b킹덤로드 - 깊어지는 비극의 숲5#k\r\n\r\n";
	kingdom += "#r#e[추천 레벨 : 210~230 ]#n#k\r\n";
	kingdom += "#L241000215##b킹덤로드 - 시작되는 비극의 숲1#k\r\n";
	kingdom += "#L241000214##b킹덤로드 - 시작되는 비극의 숲2#k\r\n";
	kingdom += "#L241000213##b킹덤로드 - 시작되는 비극의 숲3#k\r\n";
	kingdom += "#L241000212##b킹덤로드 - 시작되는 비극의 숲4#k\r\n";
	kingdom += "#L241000211##b킹덤로드 - 시작되는 비극의 숲5#k\r\n\r\n";
	kingdom += "#r#e[추천 레벨 : 230~250 ]#n#k\r\n";
	kingdom += "#L241000225##b킹덤로드 - 끝나지 않는 비극의 숲1#k\r\n";
	kingdom += "#L241000224##b킹덤로드 - 끝나지 않는 비극의 숲2#k\r\n";
	kingdom += "#L241000223##b킹덤로드 - 끝나지 않는 비극의 숲3#k\r\n";
	kingdom += "#L241000222##b킹덤로드 - 끝나지 않는 비극의 숲4#k\r\n";
	kingdom += "#L241000221##b킹덤로드 - 끝나지 않는 비극의 숲5#k\r\n";
	cm.sendSimple(kingdom);
	} else if (selection == 8) {
	var hunt = "#b#h ##k님 환영합니다~♬ 미션맵를 선택해주세요.\r\n\r\n"
	hunt += "#r#e[펫 산책로]\r\n#k#n";
	hunt += "#L100000202##b헤네시스#l";
	hunt += "#L220000006##b루디브리엄#l\r\n\r\n\r\n";
	hunt += "#r#e[인내의 숲]#k#n\r\n";
	hunt += "#L910130000##b1단계#l#e　 #n";
	hunt += "#L910130001##b2단계#l#e　 #n";
	hunt += "#L910130100##b3단계#l#e　 #n";
	hunt += "#L910130101##b4단계#l#e　 #n";
	hunt += "#L910130102##b5단계#l\r\n\r\n\r\n";
        hunt += "#r#e[컨텐츠 이동]#k#n\r\n";
        hunt += "#L925020000##b무릉도장 도전#l#e　 #n";
        hunt += "#L926010000##b네트의피라미드 도전#l#e　 #n"; 
	cm.sendSimple(hunt);

	} else if (selection == 9) {
	var town = "#b#h ##k님 환영합니다~♬ 마을을 선택해주세요.\r\n\r\n"
	town += "#L100000000##b빅토리아 아일랜드#k │ #b헤네시스　　#k │ #b헤네시스\r\n";
	town += "#L101000000##b빅토리아 아일랜드#k │ #b엘리니아　　#k │ #b엘리니아\r\n";
	town += "#L102000000##b빅토리아 아일랜드#k │ #b페리온　　　#k │ #b페리온\r\n";
	town += "#L103000000##b빅토리아 아일랜드#K │ #b커닝시티　　#k │ #b커닝시티\r\n";
	town += "#L104000000##b빅토리아 아일랜드#k │ #b리스항구　　#k │ #b리스항구\r\n";
	town += "#L130000000##b퀸스로드 　　　　#k │ #b에레브　　　#k │ #b에레브\r\n";
	town += "#L130000000##b스노우 아일랜드　#k │ #b리엔　　　　#k │ #b리엔\r\n";
	town += "#L310000000##b블랙윙 점령지　　#k │ #b에델슈타인　#k │ #b에델슈타인\r\n";
	town += "#L200000000##b엘나스 산맥　　　#k │ #b스카이로드　#k │ #b오르비스\r\n";
	town += "#L211000000##b엘나스 산맥　　　#k │ #b엘나스산맥　#k │ #b엘나스\r\n";
	town += "#L220000000##b루더스 호수　　　#k │ #b루디브리엄성#k │ #b루디브리엄\r\n";
	town += "#L223000000##b루더스 호수　　　#k │ #b테마파크입구#k │ #b테마파크<정문>\r\n";
	town += "#L230000000##b아쿠아로드 　　　#k │ #b아쿠아로드　#k │ #b아쿠아리움\r\n";
	town += "#L240000000##b미나르 숲　　　　#k │ #b미나르숲　　#k │ #b리프레\r\n";
	town += "#L240090000##b미나르 숲　　　　#k │ #b콜로서스　　#k │ #b탐사본부\r\n";
	town += "#L250000000##b무릉도원 　　　　#k │ #b무릉도원　　#k │ #b무릉\r\n";
	town += "#L251000000##b무릉도원 　　　　#k │ #b무릉도원　　#k │ #b백초마을\r\n";
	town += "#L260000000##b니할 사막　　　　#k │ #b버닝로드　　#k │ #b아리안트\r\n";
	town += "#L261000000##b니할 사막　　　　#k │ #b선셋로드　　#k │ #b마가티아\r\n";


	cm.sendSimple(town);


            } else if (selection == 6) {
             var text = "보스 이동은 #b차원의 거울#k을 통해 입장할수 있습니다.";
            cm.sendNext(text);
	    cm.dispose();
	m = 1;
   } else if (selection == 10) {
	cm.dispose();
	cm.warp(511000000);
   }
	} else if (status == 3) {

	/* 사냥터 이동 시작*/
	var s = selection;
	if(s >=100000000) {
	cm.dispose();
	cm.warp(s,0);
	/* 사냥터 이동 끝 */

	/* 보스 이동 시작 */
	} else if (m == 1) {
	cm.sendNext("#r"+boss[selection]+"#k 보스를 잡기 위해 #b"+names[selection]+"#k으로 이동합니다. 이동을 원치 않으시면 ESC를 눌러 주세요.");
            map = mid[selection];
}
	  } else if (status == 4) {
            cm.warp(map, 0);
            cm.dispose();
		}
    	}
}