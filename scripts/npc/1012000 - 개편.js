importPackage(Packages.constants);

function start(){
	var txt = "안녕하세요 #b#h0##k님! "+AboutDbg.serverName+"의 만능엔피시입니다~\r\n수행하실 메뉴를 선택해주세요.\r\n"
	txt += "#L0##b상점 관련 메뉴들을 보고싶어요.\r\n";
	txt += "#L1#이동 관련 메뉴들을 보고싶어요.\r\n";
	txt += "#L2#컨텐츠 관련 메뉴들을 보고싶어요.\r\n";
	txt += "#L3#기타 메뉴들을 보고싶어요.\r\n";
	txt += "#L4##r캐쉬상점을 이용하고 싶어요.\r\n";
	cm.sendSimple(txt);
}

var status = -1;
var sel;

function action(mode,type,selection){
	mode==1?status++:(status--,cm.dispose())
	if(status==0){
		sel = selection;
		var txt = "#b"+(sel==0?"상점":sel==1?"이동":sel==2?"컨텐츠":"기타") + "#k 관련 메뉴를 선택하셨습니다.\r\n수행하실 메뉴를 선택해주세요.\r\n";
		if(sel == 0){
			var shop = "상점을 이용하고 싶어요.\r\n";
			txt += "#L0##r만능#b"+shop;
			txt += "#L1##r단풍#b"+shop;
			txt += "#L2##r빨간단추#b "+shop;
			txt += "#L3##r타일런트#b "+shop;
			txt += "#L4##r후원#b"+shop;
			txt += "#L5##r홍보#b"+shop;
			txt += "#L6##r템페스트 코인#b "+shop;
			txt += "#L7##r스칼렛웨폰#b "+shop;
			cm.sendSimple(txt);
		}else if(sel == 1){
			var warp = "이동하고 싶어요.\r\n";
			txt += "#L100##r마을#b로 "+warp;
			txt += "#L101##r사냥터#b로 "+warp;
			txt += "#L102##r보스사냥터#b로 "+warp
			txt += "#L103##r몬스터파크#b로 "+warp;
			txt += "#L104##r낚시터#b로 "+warp;
			txt += "#L105##r길드업무#b를 보고싶어요\r\n";
			txt += "#L106##r도박장#b으로 "+warp;
			txt += "#L107##r기술마을#b로 "+warp
			txt += "#L108##r펫공원 & 인내의숲#b으로 "+warp;
			cm.sendSimple(txt);
		}else if(sel == 2){
			txt += "#L200##b#r여제장비#b를 #r제작#b하고 싶어요.\r\n";
			txt += "#L201##r술래잡기#b를 하고싶어요..\r\n";
			txt += "#L202##r보스레이드#b를 하고싶어요.\r\n";
			txt += "#L203##r서버랭킹#b을 보고싶어요.\r\n";
			txt += "#L204##r쿠폰#b을 사용하고 싶어요.\r\n";
			txt += "#L205#아이템을 #r강화#b하고 싶어요.\r\n";
			txt += "#L206##r환생#b을 하고싶어요.\r\n";
			txt += "#L207##r변생#b을 하고싶어요.\r\n";
			txt += "#L208##r게시판#b을 보고싶어요.\r\n";
			txt += "#L210##r장래희망#b을 설정하고 싶어요.\r\n"
			txt += "#L211##r초성퀴즈#b를 풀고싶어요.\r\n"
			cm.sendSimple(txt);
		}else if(sel == 3){
			txt += "#L300##r전직#b을 하고 싶어요.\r\n";
			txt += "#L301##r창고#b를 이용하고 싶어요.\r\n";
			txt += "#L302##r캐시#b를 충전하고 싶어요.\r\n";
			txt += "#L303##r보조무기#b를 착용하고 싶어요.\r\n";
			txt += "#L304##r성형#b을 하고 싶어요.\r\n";
			txt += "#L305#아이템을 #r버리고#b 싶어요.\r\n";
			txt += "#L209#아이템을 #r선물#b하고 싶어요.\r\n";
			txt += "#L306##r스킬마스터#b를 하고싶어요.\r\n";
			txt += "#L307##r후원#b하는 방법을 알고싶어요.\r\n";
			cm.sendSimple(txt);
		}else if(sel == 4){
			cm.dispose();
			cm.enterCS();
		}
	}else if(status==1){
		switch(selection){
			case 0: cm.dispose(); cm.openNpc(9000000); break;
			case 1: cm.dispose(); cm.openNpc(1012105); break;
			case 2: cm.dispose(); cm.openNpc(1033211); break;
			case 3: cm.dispose(); cm.openNpc(2040000); break;
			case 4: cm.dispose(); cm.openNpc(1022003); break;
			case 5: cm.dispose(); cm.openNpc(9070008); break;
			case 6: cm.dispose(); cm.openNpc(1022002); break;
			case 7: cm.dispose(); cm.openNpc(2182002); break;

			case 100: cm.dispose(); cm.warp(1000000); break;
			case 101:
				var hunt = "어느 사냥터로 이동하실건가요?\r\n";
				hunt += "\r\n#L0#[LV.10  ~] #b유령버섯의 숲#k";
				hunt += "\r\n#L1#[LV.20  ~]#b 골렘사원#k";
				hunt += "\r\n#L2#[LV.30  ~]#b 버섯의성 <한적한 버섯의 숲>#k";
				hunt += "\r\n#L3#[LV.40  ~]#b 7층 8층 A구역#k";
				hunt += "\r\n#L4#[LV.40  ~]#b 오르비스탑 <17층>#k";
				hunt += "\r\n#L5#[LV.60  ~]#b 테라스홀#k";
				hunt += "\r\n#L6#[LV.70  ~]#b 시간의 소용돌이#k";
				hunt += "\r\n#L7#[LV.70  ~]#b 장난감공장 <기계실>#k";
				hunt += "\r\n#L8#[LV.80  ~]#b 쿨란초원 <5>#k";
				hunt += "\r\n#L9#[LV.80  ~]#b 붉은 모래 사막#k";
				hunt += "\r\n#L10#[LV.90  ~]#b 연구소 C-2 구역#k";
				hunt += "\r\n#L11#[LV.100 ~]#b 빨간코 해적단 소굴2#k";
				hunt += "\r\n#L12#[LV.100 ~]#b 뒤틀린 시간의 길 <3>#k";
				hunt += "\r\n#L13#[LV.100 ~]#b 잊혀진 시간의 길 <3>#k";
               			hunt += "\r\n#L14#[LV.110 ~]#b 붉은 켄타우로스의 영역#k";
				hunt += "\r\n#L15#[LV.110 ~]#b 붉과 어둠의 전장#k";
				hunt += "\r\n#L16#[LV.120 ~]#b 용의 숲 입구#k";
				hunt += "\r\n#L17#[LV.100 ~]#b 삐뚤어진 시간#k";
				hunt += "\r\n#L18#[LV.110 ~]#b 성벽 아래1#k";
				hunt += "\r\n#L19#[LV.115 ~]#b 성벽 아래2#k";
				hunt += "\r\n#L20#[LV.120 ~]#b 성벽 아래3#k";
				hunt += "\r\n#L21#[LV.125 ~]#b 성벽 아래4#k";
				hunt += "\r\n#L22#[LV.125 ~]#b 성벽 아래5#k";
				hunt += "\r\n#L23#[LV.150 ~]#b 죽은 용의 둥지#k"; 
				hunt += "\r\n#L24#[LV.160 ~]#b 망각의 길1#k";
				hunt += "\r\n#L25#[LV.162 ~]#b 망각의 길2#k";
				hunt += "\r\n#L26#[LV.164 ~]#b 망각의 길3#k";
				hunt += "\r\n#L27#[LV.166 ~]#b 망각의 길4#k";
				hunt += "\r\n#L28#[LV.168 ~]#b 망각의 길5#k";
				hunt += "\r\n#L29#[LV.170 ~]#b 기사단 제 1구역#k";
				hunt += "\r\n#L30#[LV.170 ~]#b 기사단 제 2구역#k";
				hunt += "\r\n#L31#[LV.175 ~]#b 기사단 제 3구역#k";
				hunt += "\r\n#L32#[LV.175 ~]#b 기사단 제 4구역#k";
				hunt += "\r\n#L33#[LV.190 ~]#b 버려진 발굴지역 1#k";
				hunt += "\r\n#L34#[LV.190 ~]#b 버려진 발굴지역 2#k";
				hunt += "\r\n#L35#[LV.195 ~]#b 버려진 발굴지역 3#k";
				hunt += "\r\n#L36#[LV.195 ~]#b 버려진 발굴지역 4#k";
				hunt += "\r\n#L37#[LV.195 ~]#b 원혼의 땅 입구#k";
				hunt += "\r\n#L38#[LV.195 ~]#b 거친 황야#k";
				hunt += "\r\n#L39#[LV.195 ~]#b 거친 협곡#k";
				hunt += "\r\n#L40#[LV.195 ~]#b 전사들의 결전지 #k";
				cm.sendSimple(hunt);
				break;
			case 102:
				var boss = "어떤 보스를 잡으러 가실건가요?\r\n";
				boss += "\r\n#L100#[두꺼비영주] #b영주의 방#k";
				boss += "\r\n#L101#[피아누스] #b피아누스의 동굴#k"; 
				boss += "\r\n#L102#[파풀라투스] #b시계탑의 근원#k"; 
				boss += "\r\n#L103#[반 레온] #b알현실#k"; 
				boss += "\r\n#L104#[자쿰] #b자쿰으로통하는문#k";
				boss += "\r\n#L105#[카쿰] #b카오스 자쿰으로 통하는문#k";
				boss += "\r\n#L106#[혼테일] #b생명의 동굴 입구#k";
				boss += "\r\n#L107#[카텔] #b카오스 혼테일의 동굴#k";
				boss += "\r\n#L108#[핑크빈] #b잊혀진 황혼#k";
				boss += "\r\n#L10#[아카이럼] #b아카이럼의 제단#k";
				boss += "\r\n#L111#[힐라] #b힐라의 탑#k";
				boss += "\r\n#L112#[시그너스여제] #b시그너스의 전당#k";
				boss += "\r\n#L113#[매그너스] #b폭군의왕좌#k";
				boss += "\r\n#L114#[블러디퀸] #b여왕의성#k";
				boss += "\r\n#L115#[벨룸 ]#b심연의 동굴#k";
				cm.sendSimple(boss);
				break;
			case 103: cm.warp(951000000); cm.dispose(); break;
			case 104: cm.warp(230030101); cm.dispose(); break;
			case 105: cm.warp(200000301); cm.dispose(); break;
			case 106: cm.warp(193000000); cm.dispose(); break;
			case 107: cm.warp(910001000); cm.dispose(); break;
			case 108: cm.dispose(); cm.openNpc(1012006); break;
		

			case 200: cm.dispose(); cm.openNpc(9000013); break;
			case 201: cm.warp(109090000); cm.dispose(); break;
			case 202: cm.dispose(); cm.openNpc(2101014); break;
			case 203: cm.dispose(); cm.openNpc(1002009); break;
			case 204: cm.dispose(); cm.openNpc(2084001); break;
			case 205: cm.dispose(); cm.openNpc(1052100); break;
			case 206: cm.dispose(); cm.openNpc(9000006); break;
			case 207: cm.dispose(); cm.openNpc(9040005); break;
			case 208: cm.dispose(); cm.openNpc(2102002); break;
			case 209: cm.dispose(); cm.openNpc(9000056); break;
			case 210: cm.dispose(); cm.openNpc(9900002); break;
			case 211: cm.dispose(); cm.openNpc(9000069); break;

			case 300: cm.dispose(); cm.openNpc(9010035); break;
			case 301: cm.dispose(); cm.openNpc(1012009); break;
			case 302: cm.dispose(); cm.openNpc(9010046); break;
			case 303: cm.dispose(); cm.openNpc(9000095); break;
			case 304: cm.dispose(); cm.openNpc(9010031); break;
			case 305: cm.dispose(); cm.openNpc(1012121); break;
			case 306: cm.dispose(); cm.openNpc(1012117); break;
			case 307: cm.sendSimple("저희 페이크월드는 원할한 서비스의 제공을 위해 후원을 받고 있습니다. \r\n\r\n후원을 하시면 후원포인트를 받으실 수 있습니다. 후원포인트로는 아이템 제작, 구매 등 다양한 시스템을 이용하실 수 있습니다.\r\n\r\n지급 방식 - 후원금액 * 1.5배\r\nex) 10000원 후원 - 15000POINT\r\n\r\n\r\n#r5만원 이상 후원하신 분께는 전체채팅 특혜를 받으실 수 있는\r\n[VIP칭호]가 지급됩니다.\r\n[VIP칭호]를 두개 소지하고 계시면 [VVIP]로 변경됩니다.\r\n#k후원문의는 네이트온 #b[fake_ms@nate.com] 혹은 게임상에서 \r\n[GM페이크]를 찾아주세요.#k#b\r\n#L9999#후원상점 바로가기"); break;
			default: cm.dispose();
		}
	}else if(status==2){
		switch(selection){
			case 0: cm.warp(100020400); cm.dispose(); break;
			case 1: cm.warp(100040000); cm.dispose(); break;
			case 2: cm.warp(106020100); cm.dispose(); break;
			case 3: cm.warp(103040400); cm.dispose(); break;
			case 4: cm.warp(200080500); cm.dispose(); break;
			case 5: cm.warp(220010500); cm.dispose(); break;
			case 6: cm.warp(220050100); cm.dispose(); break;
			case 7: cm.warp(220020600); cm.dispose(); break;
			case 8: cm.warp(221040400); cm.dispose(); break;
			case 9: cm.warp(260020300); cm.dispose(); break;

			case 10: cm.warp(261020400); cm.dispose(); break;
			case 11: cm.warp(251010402); cm.dispose(); break;
			case 12: cm.warp(220060200); cm.dispose(); break;
			case 13: cm.warp(220070200); cm.dispose(); break;
			case 14: cm.warp(240020000); cm.dispose(); break;
			case 15: cm.warp(240020100); cm.dispose(); break;
			case 16: cm.warp(240030000); cm.dispose(); break;
			case 17: cm.warp(220060201); cm.dispose(); break;
			case 18: cm.warp(211060100); cm.dispose(); break;
			case 19: cm.warp(211060300); cm.dispose(); break;

			case 20: cm.warp(211060500); cm.dispose(); break;
			case 21: cm.warp(211060700); cm.dispose(); break;
			case 22: cm.warp(211060900); cm.dispose(); break;
			case 23: cm.warp(240040510); cm.dispose(); break;
			case 24: cm.warp(270030100); cm.dispose(); break;
			case 25: cm.warp(270030200); cm.dispose(); break;
			case 26: cm.warp(270030300); cm.dispose(); break;
			case 27: cm.warp(270030400); cm.dispose(); break;
			case 28: cm.warp(270030500); cm.dispose(); break;
			case 29: cm.warp(271030100); cm.dispose(); break;

			case 30: cm.warp(271030100); cm.dispose(); break;
			case 31: cm.warp(271030300); cm.dispose(); break;
			case 32: cm.warp(271030400); cm.dispose(); break;
			case 33: cm.warp(273040000); cm.dispose(); break;
			case 34: cm.warp(273040100); cm.dispose(); break;
			case 35: cm.warp(273040200); cm.dispose(); break;
			case 36: cm.warp(273040300); cm.dispose(); break;
			case 37: cm.warp(273060000); cm.dispose(); break;
			case 38: cm.warp(273060100); cm.dispose(); break;
			case 39: cm.warp(273060200); cm.dispose(); break;
			case 40: cm.warp(273060300); cm.dispose(); break;

			case 100: cm.warp(231050000); cm.dispose(); break;
			case 101: cm.warp(230040420); cm.dispose(); break;
			case 102: cm.warp(220080001); cm.dispose(); break;
			case 103: cm.warp(211070100); cm.dispose(); break;
			case 104: cm.warp(280030100); cm.dispose(); break;
			case 105: cm.warp(280030001); cm.dispose(); break;
			case 106: cm.warp(240060200); cm.dispose(); break;
			case 107: cm.warp(240060201); cm.dispose(); break;
			case 108: cm.warp(270050100); cm.dispose(); break;
			case 109: cm.warp(272020200); cm.dispose(); break;
			case 110: cm.dispose(); cm.openNpc(1402401); break;
			case 111: cm.warp(271040100); cm.dispose(); break;
			case 112: cm.warp(401060100); cm.dispose(); break;
			case 113: cm.warp(105200710); cm.dispose(); break;
			case 114: cm.warp(105200819); cm.dispose(); break;

			case 9999: cm.dispose(); cm.openNpc(1022003); break;
			default: cm.dispose();
		}
	}
}