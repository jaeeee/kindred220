/*
 
  최성우
  sqlstyle...

*/

importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);

var status = 0;
var beauty = 0;
var facenew;
var colors;
var hairnew;
var haircolor;
var skin = Array(0, 1, 2, 3, 4, 9, 10, 11, 12, 13);
var mface = Array(20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20024,20025,20027,20028,20029,20030,20031,20032,20036,20037,20040,20043,20044,20045,20046,20047,20048,20049,20050,20053,20055,20056,20057,20058,20059,20060,20061,20062,20063,20064,20065,20066,20067,20068,20069);
var mhair = Array(30000,30020,30030,30040,30050,30060,30100,30110,30120,30130,30140,30150,30160,30170,30180,30190,30200,30210,30220,30230,30240,30250,30260,30270,30280,30290,30300,30310,30320,30330,30340,30350,30360,30370,30400,30410,30420,30440,30450,30460,30470,30480,30490,30510,30520,30530,30540,30560,30570,30590,30610,30620,30630,30640,30650,30660,30670,30680,30700,30710,30730,30760,30770,30790,30800,30810,30820,30830,30840,30850,30860,30870,30880,30910,30930,30940,30950,33030,33060,33070,33080,33090,33110,33120,33130,33150,33170,33180,33190,33210,33220,33250,33260,33270,33280,33310,33330,33350,33360,33370,33380,33390,33400,33410,33430,33440,33450,33460,33480,33500,33510,33520,33530,33550,33580,33590,33600,33610,33620,33630,33640,33660,33670,33680,33690,33700,33710,33720,33730,33740,33750,33760,33770,33780,33790,33800,33810,33820,33830,33930,33940,33950,33960);
var fface = Array(21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019,21020,21021,21023,21024,21026,21027,21028,21029,21030,21031,21033,21035,21036,21038,21041,21042,21043,21044,21045,21046,21047,21048,21052,21053,21054,21055,21056,21057,21058,21059,21060,21061,21062,21063,21064);
var fhair = Array(31000,31010,31020,31030,31040,31050,31060,31070,31080,31090,31100,31110,31120,31130,31140,31150,31160,31170,31180,31190,31200,31210,31220,31230,31240,31250,31260,31270,31280,31290,31300,31310,31320,31330,31340,31350,31400,31410,31420,31440,31450,31460,31470,31480,31490,31510,31520,31530,31540,31550,31560,31590,31610,31620,31630,31640,31650,31670,31680,31690,31700,31710,31720,31740,31750,31780,31790,31800,31810,31820,31840,31850,31860,31880,31890,31910,31920,31930,31940,31950,31990,34040,34070,34080,34090,34100,34110,34120,34130,34140,34150,34160,34170,34180,34190,34210,34220,34230,34240,34250,34260,34270,34310,34320,34330,34340,34360,34370,34380,34400,34410,34420,34430,34440,34450,34470,34480,34490,34510,34540,34560,34590,34600,34610,34620,34630,34640,34660,34670,34680,34690,34700,34710,34720,34730,34740,34750,34760,34770,34780,34790,34800,34810,34820,34830,34840,34850,34860,34870);
var select = -1;
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
            var chat= "안녕하세요. 저는 후원상점을 관리중인 #z2010006# 라고합니다.\r\n\r\n";
	    chat += "#L5000##b후원상점<1>#k 을 이용하겠습니다.\r\n";
	    chat += "#L5001##b후원상점<2>#k 을 이용하겠습니다.\r\n";
	    
	    cm.sendSimple(chat);
 } else if (selection == 0) {
                 cm.dispose();		
                 cm.enterCS();
      }  else if (selection == 1) {
		cm.dispose();
		cm.openNpc(9000027); // 마을이동
      }  else if (selection == 5000) {
		cm.dispose();
		cm.openNpc(9330028); 

      }  else if (selection == 5001) {
		cm.dispose();
		cm.openNpc(9000226);

      }  else if (selection == 2) {
		cm.dispose();
		cm.openNpc(9010022); // 고랩이동
      }  else if (selection == 8) {
		cm.dispose();
		cm.sendOk("저희 서버는 자동 전직 시스템입니다."); // 고랩이동
      }  else if (selection == 9) {
		cm.dispose();
		cm.openShop(9000023); // 보조무기
      }  else if (selection == 99) {
		cm.dispose();
		cm.openNpc(9201014); // 보조무기
      }  else if (selection == 10) {
		cm.dispose();
		cm.openNpc(9010033); // 헤어,성형
      }  else if (selection == 15) {
		cm.dispose();
		cm.openNpc(1012121);
      }  else if (selection == 98) {
		cm.dispose();
		cm.openNpc(1402301); // 헤어,성형
      }  else if (selection == 12) {
		cm.dispose();
		cm.openNpc(9010015); // 헤어,성형
      }  else if (selection == 13) {
		cm.dispose();
		cm.openNpc(12101); // 헤어,성형
      }  else if (selection == 11) {
		cm.dispose();
		cm.sendOk("모든직업의 스킬마스터는 #b@스킬마스터#k  를 하시면 됩니다."); // 헤어,성형
      }  else if (selection == 14) {
		cm.dispose();
		cm.openNpc(9000010);
      }  else if (selection == 3) {
            var party= "안녕하세요? #b" + cm.getName() + "#k 님 친구분들과 함께 파티퀘스트를 해보겠어요?\r\n\r\n";
       coin += "#fUI/UIWindow2.img/UtilDlgEx/list4#"
            party += "\r\n#L220##r#e[파티퀘스트]#n#k (LV.10 ~)#b 미스틱 필드 (1인 가능)#k\r\n";
            party += "\r\n#L221##r#e[파티퀘스트]#n#k (LV.60 ~)#b 몬스터 파크 (1인 가능)#k\r\n";
            party += "\r\n#L222##r#e[파티퀘스트]#n#k (LV.70 ~)#b 몬스터 아레나 (1인 가능)#k\r\n";
	    cm.sendSimple(party);
      }  else if (selection == 4) {
		cm.dispose();
		cm.openNpc(1032004);
      }  else if (selection == 220) {
		cm.dispose();
		cm.openNpc(9073008);
      }  else if (selection == 221) {
		cm.dispose();
		cm.warp(951000000);
      }  else if (selection == 222) {
		cm.dispose();
		cm.openNpc(9070007);
      }  else if (selection == 5) {
            var coin= "안녕하세요? #b" + cm.getName() + "#k 님 원하시는 #r코인상점#k 을 선택해주세요\r\n\r\n";
       coin += "#fUI/UIWindow2.img/UtilDlgEx/list4#"
            coin += "\r\n#L100##r[COIN]#k#b 레전드코인 상점#k";
	    coin += "  #L101##r[COIN]#k#b 빨간단추 상점#k";
            coin += "\r\n#L102##r[COIN]#k#b 투신의 증표#k";
	    cm.sendSimple(coin);
      }  else if (selection == 6) {
            var equip= "안녕하세요? #b" + cm.getName() + "#k 님 원하시는 #r장비상점#k 을 선택해주세요\r\n\r\n";
       equip += "#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n"
	    equip += "#L200##r[EQUIP]#k#b 메이플템 상점#k";
	    equip += " #L201##r[EQUIP]#k#b 템페스트 상점#k\r\n\r\n";
	    equip += "#L202##r[EQUIP]#k#b 레전드템 상점#k";
	    equip += "#L203##r[EQUIP]#k#b 여제장비 상점#k\r\n\r\n";
	    equip += "#L204##r[EQUIP]#k#b 마이스터 상점#k";
	    equip += "#L205##r[EQUIP]#k#b 타일런트 상점#k\r\n\r\n";
	    equip += "#L206##r[EQUIP]#k#b 루타비스 상점#k#l";
	    cm.sendSimple(equip);
      }  else if (selection == 7) {
            var equip= "안녕하세요? #b" + cm.getName() + "#k 님 저는 루타비스 상점을 관리하고 있습니다.#r저스티스 코인#k은 환생을 하시면 얻으실수 있습니다.\r\n";
       equip += "#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n\r\n"
	    equip += "#L230##r[EVENT]#k#b 황단 캐쉬상점#k\r\n\r\n#l";
            equip += "\r\n#k구매한 이쁜 캐쉬아이템에 더욱더 강화시켜보는건 어때요?#k\r\n";
            equip += "#L99##r[HOT]#k #b구매한 캐쉬아이템 강화하기 \r\n";

	    cm.sendSimple(equip);
      }  else if (selection == 208) {
		cm.dispose();
		cm.warp(271030500);
			cm.getPlayer().send(MainPacketCreator.sendHint("#r#e십자코인#n#k 드롭지역에 입장했습니다.\r\n일정 확률로 십자 코인을 얻을 수있습니다.\r\n즐거운 사냥되세요 ^^",300,30))
      
      }  else if (selection == 209) {
		cm.dispose();
		cm.warp(271030510);
			cm.getPlayer().send(MainPacketCreator.sendHint("#r#e십자코인#n#k 드롭지역에 입장했습니다.\r\n일정 확률로 십자 코인을 얻을 수있습니다.\r\n즐거운 사냥되세요 ^^",300,30))
      }  else if (selection == 210) {
		cm.dispose();
		cm.warp(271030520);
			cm.getPlayer().send(MainPacketCreator.sendHint("#r#e십자코인#n#k 드롭지역에 입장했습니다.\r\n일정 확률로 십자 코인을 얻을 수있습니다.\r\n즐거운 사냥되세요 ^^",300,30))
      }  else if (selection == 211) {
		cm.dispose();
		cm.warp(271030530);
			cm.getPlayer().send(MainPacketCreator.sendHint("#r#e십자코인#n#k 드롭지역에 입장했습니다.\r\n일정 확률로 십자 코인을 얻을 수있습니다.\r\n즐거운 사냥되세요 ^^",300,30))
      }  else if (selection == 212) {
		cm.dispose();
		cm.warp(271030540);
			cm.getPlayer().send(MainPacketCreator.sendHint("#r#e십자코인#n#k 드롭지역에 입장했습니다.\r\n일정 확률로 십자 코인을 얻을 수있습니다.\r\n즐거운 사냥되세요 ^^",300,30))
      }  else if (selection == 101) {
		cm.dispose();
		cm.openNpc(1012006);
      }  else if (selection == 100) {
		cm.dispose();
		cm.openNpc(2040033);
      }  else if (selection == 230) {
		cm.dispose();
		cm.openNpc(1032101);

      }  else if (selection == 200) {
		cm.dispose();
		cm.openShop(30002); //미스틱필드
      }  else if (selection == 201) {
		cm.dispose();
		cm.openShop(30001); //몬스터파크
      }  else if (selection == 202) {
		cm.dispose();
		cm.openShop(30003); //몬스터파크
      }  else if (selection == 203) {
		cm.dispose();
		cm.openShop(30000);
      }  else if (selection == 204) {
		cm.dispose();
		cm.openShop(30004);
      }  else if (selection == 205) {
		cm.dispose();
		cm.sendOk("저스티스 코인은 환생을 하면 얻으실수 있습니다.");
		cm.openShop(30006);
      }  else if (selection == 206) {
		cm.dispose();
		cm.openShop(30005);
} else if (selection == 12000) {
                var ame = "#e#b1.후원 목적#k#n\r\n";
                ame += "#e#d서버의 자원(전기세 등)#k#n #e비용#n, #d개발#k 비용 등\r\n서버의 #r발전#k을 위해 서버 후원이 필요한 실정입니다.\r\n작은 돈이라도 감사히 받겠으며, 서버발전을 위해서\r\n #e작은 정성 하나 하나#n 마음을 모아주시면 감사하겠습니다.\r\n\r\n#b#e2.후원 방법과 보상#n#k\r\n#r후원 방법#k은 문상, 해피머니, 폰결제 등 자세한 사항은\r\n#e카페 공지사항#n을 참고해 주시길 바라며, #r후원 보상#k은\r\n 후원 상점을 이용하실 수 있는 #v4310060##d후원 코인#k입니다.\r\n이 또한 #r지급 갯수#k는 #e카페 공지사항#n을 참고해주세요.";
                cm.sendSimple(ame);

            } else if (selection == 10003) {
 		var level2 = "#e#b1.주의 사항 및 필수 사항 안내#n#k\r\n";
                level2 += "서버 이용시 #r주의사항#k은 #e카페 공지사항을#n 참고해주시기\r\n바라며, #r제재 처리#k에 대한 자세한 사항도 적혀있으므로\r\n #e필독#n하여 #r불이익#k 받지 않도록 #e주의#n해주세요\r\n\r\n#b★ 카페 이전버전 채팅방 입장은 필수입니다.\r\n입장법을 모르시면 정보공유 게시판을 참고해주세요.#k";

                 cm.sendSimple(level2);
		} else if (selection == 10000) {
                var abc = "#r#e팩스 스타일만의 매력이란?#n#k\r\n\r\n";
                abc += "저희 #b팩스스타일#k은 하자서버이지만, 일반적인 지루한\r\n하자 서버라 보시면 아쉬울 정도로 #e구현도, 컨텐츠면#n에서\r\n그 어느 서버보다 매력있으며 #b압도적, 선도적#k입니다.\r\n간단히 소개를 하자면. 몬스터 파크를 비롯해 보스레이드\r\n낚시 컨텐츠가 구현되어 있으며, 여러 자작 쾌스트 등 여러가지 다채로운 컨텐츠를 #d계속 구현중#k에 있습니다.\r\n 이 또한 컨텐츠뿐만이 아닌 최신 구현도의 #b지속#k과 함께\r\n #e200 레벨 이후#n #r경험치 배율 상향#k으로 어렵지도 않으며,\r\n일반적으로 놀자 서버에서 #d하루플레이#k 후 #e끊어#n 버리는\r\n지루한 플레이가 아닌 #e보람#n 있는 게임을 하실 수 있습니다. ";
                cm.sendSimple(abc);
            	} else if (selection == 10001) {
  		var abd = "#e#b1.초보자 가이드#k#n\r\n";
                abd += "#r라니아#k 를 통해 스킬 마스터, 맵 이동 등 모두 가능하며\r\n광장 밖에서는 #d캐시샵(트레이드)#k 버튼을 통해\r\n언제 어디서든지 바로 광장 이동이 가능합니다.\r\n#r아이템 구입#n은 #d낚시, 컨텐츠, 쾌스트, 교환 등#k 여러가지\r\n방법으로 얻으실 수도 있겠지만, 일반적인 아이템 구매는\r\n#b몬스터 드롭템인 코인, 단풍잎 등을 통해 구입 가능합니다.#k\r\n그러므로, #e사냥시 몬스터 드롭텡을 잘 모아주세요.#n\r\n\r\n#e#b2.유저명령어 안내#k#n\r\n채팅창에 #e@명령어#n또는 #e@도움말#n을 입력하시면\r\n#r게임플레이#k에 유용한 유저 명령어를 확인하실 수 있습니다.";
                cm.sendSimple(abd);
} else if (selection == 9000) {
               if(cm.getPlayer().getSia() == 1){
               cm.getPlayer().HelloSia();
               cm.giveBuff(9001002,1);
               cm.dispose();
               } else if(cm.getPlayer().getSia() == 2){
               cm.getPlayer().HelloSia1();
               cm.giveBuff(9001002,1);
               cm.dispose();
    	}
}
}
}


