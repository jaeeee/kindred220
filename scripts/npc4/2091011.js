/*
무릉도장 이동 스크립트
제작자 : 가군(qor6101@naver.com)

*/

importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.Dbg.community);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
	cm.sendOk("훗! 잘 생각해보라고~~");
        cm.dispose();
        return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
    	var dojointro = "우리 사부님은 무릉에서 최고로 강한 분이지. 그런 분에게 네가 도전하겠다고? 나중에 후회하지마.";
    	dojointro += "#b\r\n#L0#무릉 도장에 도전해볼게";
    	dojointro += "#b\r\n#L1#무공의 허리띠를 받고 싶어.";
    	dojointro += "#b\r\n#L2#무릉 도장에서 받을 수 있는 보상을 확인하고 싶어.";
    	dojointro += "#b\r\n#L3#무릉 도장이 뭐지?";
    	dojointro += "#b\r\n#L4#오늘 남은 도전 횟수를 확인하고 싶어.";
    	dojointro += "#b\r\n#L5#허리띠를 받고 싶어 #r(구버전 허리띠로 7일간 사용 가능)";
	cm.sendSimple(dojointro);
    } else if (status == 1) {
	if (selection == 0) {
    		var dojo = "무릉 도장에는 #b노말, 하드, 랭킹 모드#k로 선택해서 도전할 수 있어. 노말 모드에는 #r90레벨 이상#k, 하드 모드에는 #r120레벨 이상#k, 랭킹 모드는 #r130레벨 이상#k이어야 도전할 수 있어. 어떤 모드에 도전하겠어?";
    		dojo += "#b\r\n#L0#노말 모드로 도전할래";
    		dojo += "#b\r\n#L1#하드 모드로 도전할래";
    		dojo += "#r\r\n#L2#랭킹 모드로 도전할래";
		cm.sendSimple(dojo);
	} else if (selection == 1) {
		cm.sendYesNo("#b#i4001620# #z4001620##k이 있으면, #b허리띠#k를 줄께. 단, 이 허리띠는 일주일 뒤에 사라지니까. 또 받고 싶다면 무공의 증표를 다시 모아오라구.");
	} else if (selection == 2) {
		cm.sendNext("난이도에 상관없이 무공의 증표를 모아오면 #b무공의 허리띠#k를 얻을 수 있지. 단, #r랭킹 모드#k에 도전해서 당당히 순위권 안에 들었다면, 특별한 보상을 받을 수 있어. 뭐, 물론 너의 실력으로는 이거 하나라도 받기 힘들겠지만.#e\r\n\r\n< 무공의 증표 보상 : 유효기간 7일 >#n\r\n#b#i1132112# #z1132112# #r(무공의 증표 50개 필요)\r\n#b#i1132113# #z1132113# #r(무공의 증표 100개 필요)\r\n#b#i1132114# #z1132114# #r(무공의 증표 200개 필요)\r\n#b#i1132115# #z1132115# #r(무공의 증표 250개 필요)#e#k\r\n\r\n< 랭킹 모드 보상 : 유효기간 1일 >#n\r\n#b#i1082392# #z1082392# #r(랭킹 1위)\r\n#b#i1082393# #z1082393# #r(랭킹 2위 ~ 5위)\r\n#b#i1082394# #z1082394# #r(랭킹 5위 ~ 20위)");
		cm.dispose();
	} else if (selection == 3) {
		cm.sendOk("우리 사부님은 무릉에서 가장 강한 분이야. 그런 사부님께서 만드신 곳이 바로 이 무릉 도장이라는 것이지. 무릉 도장은 47층이나 되는 높은 건물이야. 하나하나 올라가면서 자신을 수련할 수 있어. 물론 너의 실력으로는 끝까지 가기 힘들겠지만.");
		cm.dispose();
	} else if (selection == 4) {
		cm.sendOk("현재 남은 도전 횟수는 무한정이야.");
		cm.dispose();
	} else if (selection == 5) {
   		var Balt1 = "너의 수련 점수는 #b" + cm.getPlayer().getDojo() + "#k 점 이야. 사부님은 재능 있는 사람들을 좋아하시지. 수련점수를 일정 수준 이상 획득하면, 점수에 따라 허리띠를 받을 수 있어.";
    		Balt1 += "\r\n#L3##i1132000# #z1132000#";
    		Balt1 += "\r\n#L4##i1132001# #z1132001#";
    		Balt1 += "\r\n#L5##i1132002# #z1132002#";
    		Balt1 += "\r\n#L6##i1132003# #z1132003#";
    		Balt1 += "\r\n#L7##i1132004# #z1132004#";
		cm.sendSimple(Balt1);
	}
    } else if (status == 2) {
		    if (selection == 0) {
	  		 if (cm.getPlayer().getLevel() >= 90) { 
				cm.sendOk("#b노말 모드#k는 구현이 되지 않았어, #r랭킹 모드#k를 이용해보길 바래.");
				cm.dispose();
			} else {
               			cm.sendOk("이봐! 우리 사부님을 우습게 보는거야? 우리 사부님은 바쁜 분이라고! 너같은 햇병아리가 어딜 겁도 없이 도전하겠다는거야? 적어도 #b90레벨#k정도는 되야하지 않겠어?");
				cm.dispose();
			}
		    } else if (selection == 1) {
	  		if (cm.getPlayer().getLevel() >= 120) { 
				cm.sendOk("#b하드 모드#k는 구현이 되지 않았어, #r랭킹 모드#k를 이용해보길 바래.");
				cm.dispose();
			} else {
               			cm.sendOk("이봐! 우리 사부님을 우습게 보는거야? 우리 사부님은 바쁜 분이라고! 너같은 햇병아리가 어딜 겁도 없이 도전하겠다는거야? 적어도 #b120레벨#k정도는 되야하지 않겠어?");
				cm.dispose();
			}
		    } else if (selection == 2) {
	  		 if (cm.getPlayer().getParty() != null) {
				cm.sendOk("가입한 파티나 원정대가 있으면 도장에 도전할 수 없어. 랭킹모드는 솔로잉 모드라 모여서 쉽게 올라가는 경우가 발생하면 안되잖아? 혼자서 오길 바래");
				cm.dispose();
			 } else if (cm.getPlayer().getLevel() >= 130 && cm.getPlayerCount(925060100) == 0 && cm.getPlayerCount(925060200) == 0 && cm.getPlayerCount(925060300) == 0 && cm.getPlayerCount(925060400) == 0 && cm.getPlayerCount(925060500) == 0 && cm.getPlayerCount(925060600) == 0 && cm.getPlayerCount(925060700) == 0 && cm.getPlayerCount(925060800) == 0 && cm.getPlayerCount(925060900) == 0 && cm.getPlayerCount(925061000) == 0 && cm.getPlayerCount(925061100) == 0 && cm.getPlayerCount(925061200) == 0 && cm.getPlayerCount(925061300) == 0 && cm.getPlayerCount(925061400) == 0 && cm.getPlayerCount(925061500) == 0 && cm.getPlayerCount(925061600) == 0 && cm.getPlayerCount(925061700) == 0 && cm.getPlayerCount(925061800) == 0 && cm.getPlayerCount(925061900) == 0 && cm.getPlayerCount(925062000) == 0 && cm.getPlayerCount(925062100) == 0 && cm.getPlayerCount(925062200) == 0 && cm.getPlayerCount(925062300) == 0 && cm.getPlayerCount(925062400) == 0 && cm.getPlayerCount(925062500) == 0 && cm.getPlayerCount(925062600) == 0 && cm.getPlayerCount(925062700) == 0 && cm.getPlayerCount(925062800) == 0 && cm.getPlayerCount(925062900) == 0 && cm.getPlayerCount(925063000) == 0 && cm.getPlayerCount(925063100) == 0 && cm.getPlayerCount(925063200) == 0 && cm.getPlayerCount(925063300) == 0 && cm.getPlayerCount(925063400) == 0 && cm.getPlayerCount(925063500) == 0 && cm.getPlayerCount(925063600) == 0 && cm.getPlayerCount(925063700) == 0 && cm.getPlayerCount(925063800) == 0 && cm.getPlayerCount(925063900) == 0 && cm.getPlayerCount(925064000) == 0 && cm.getPlayerCount(925064100) == 0 && cm.getPlayerCount(925064200) == 0 && cm.getPlayerCount(925064300) == 0 && cm.getPlayerCount(925064400) == 0 && cm.getPlayerCount(925064500) == 0 && cm.getPlayerCount(925064600) == 0 && cm.getPlayerCount(925064700) == 0) {
	    			cm.resetMap(925060100);
	    			cm.resetMap(925060200);
	    			cm.resetMap(925060300);
	    			cm.resetMap(925060400);
	    			cm.resetMap(925060500);
	    			cm.resetMap(925060600);
	    			cm.resetMap(925060700);
	    			cm.resetMap(925060800);
	    			cm.resetMap(925060900);
	    			cm.resetMap(925061000);
	    			cm.resetMap(925061100);
	    			cm.resetMap(925061200);
	    			cm.resetMap(925061300);
	    			cm.resetMap(925061400);
	    			cm.resetMap(925061500);
	    			cm.resetMap(925061600);
	    			cm.resetMap(925061700);
	    			cm.resetMap(925061800);
	    			cm.resetMap(925061900);
	    			cm.resetMap(925062000);
	    			cm.resetMap(925062100);
	    			cm.resetMap(925062200);
	    			cm.resetMap(925062300);
	    			cm.resetMap(925062400);
	    			cm.resetMap(925062500);
	    			cm.resetMap(925062600);
	    			cm.resetMap(925062700);
	    			cm.resetMap(925062800);
	    			cm.resetMap(925062900);
	    			cm.resetMap(925063000);
	    			cm.resetMap(925063100);
	    			cm.resetMap(925063200);
	    			cm.resetMap(925063300);
	    			cm.resetMap(925063400);
	    			cm.resetMap(925063500);
	    			cm.resetMap(925063600);
	    			cm.resetMap(925063700);
	    			cm.resetMap(925063800);
	    			cm.resetMap(925063900);
	    			cm.resetMap(925064000);
	    			cm.resetMap(925064100);
	    			cm.resetMap(925064200);
	    			cm.resetMap(925064300);
	    			cm.resetMap(925064400);
	    			cm.resetMap(925064500);
	    			cm.resetMap(925064600);
	    			cm.resetMap(925064700);
				cm.warp(925060100, 0);
				cm.spawnMob(9305300, 141,7);
				cm.playerMessage(6, "소공 : 제한시간은 2분이니까 잊지 말고. 늦지 않게 몬스터를 쓰러뜨리고 다음 층으로 올라가면 되!");
				cm.dispose();
			 } else if (cm.getPlayer().getLevel() >= 130) { 
                		cm.sendOk("이미 다른 수련자가 도장에 도전 하고 있어. 다른 채널에서 진행해 주길 바래.");
				cm.dispose();
			 } else {
                		cm.sendOk("이봐! 우리 사부님을 우습게 보는거야? 우리 사부님은 바쁜 분이라고! 너같은 햇병아리가 어딜 겁도 없이 도전하겠다는거야? 적어도 #b130레벨#k정도는 되야하지 않겠어?");
				cm.dispose();
				}

		} else if (selection == 3) {
 		   if(cm.getPlayer().getDojo() >= 200 && cm.getPlayer().getLevel() >= 25) {
			cm.sendYesNo("#b#i1132000# #z1132000##k 를 받기 위해서는 #b25레벨 이상#k이어야 하며, 누적 수련점수 #b200#k 점이 필요해. 내가 보기에 너는 이 조건을 모두 만족하는 것 같군. 지금 허리띠를 받겠어?");
		    	select = 0;
 		   } else if(cm.getPlayer().getLevel() >= 25){
			cm.sendNext("#b#i1132000# #z1132000##k 를 받기 위해서는 #b25레벨 이상#k이어야 하며, 누적 수련점수 #b200#k가 필요해.\r\n\r\n네가 이 허리띠를 받으려면 수련점수를 더 쌓아야 한다고.");
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132000# #z1132000##k 를 받기 위해서는 #b25레벨 이상#k이어야 하며, 누적 수련점수 #b200#k가 필요해.\r\n\r\n네가 이 허리띠를 받으려면 #b레벨 25이상#k이 되어야 한다고.");
        		cm.dispose();
		}
		} else if (selection == 4) {
 		   if(cm.getPlayer().getDojo() >= 1800 && cm.getPlayer().getLevel() >= 35) {
			cm.sendYesNo("#b#i1132001# #z1132001##k 를 받기 위해서는 #b35레벨 이상#k이어야 하며, 누적 수련점수 #b1800#k 점이 필요해. 내가 보기에 너는 이 조건을 모두 만족하는 것 같군. 지금 허리띠를 받겠어?");
		    	select = 1;
		   } else if(cm.getPlayer().getLevel() >= 35){
			cm.sendNext("#b#i1132001# #z1132001##k 를 받기 위해서는 #b35레벨 이상#k이어야 하며, 누적 수련점수 #b1800#k 점이 필요해.\r\n\r\n네가 이 허리띠를 받으려면 수련점수를 더 쌓아야 한다고.");
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132001# #z1132001##k 를 받기 위해서는 #b35레벨 이상#k이어야 하며, 누적 수련점수 #b1800#k가 필요해.\r\n\r\n네가 이 허리띠를 받으려면 #b레벨 35이상#k이 되어야 한다고.");
        		cm.dispose();
		}
		} else if (selection == 5) {
 		   if(cm.getPlayer().getDojo() >= 4000 && cm.getPlayer().getLevel() >= 45) {
			cm.sendYesNo("#b#i1132002# #z1132002##k 를 받기 위해서는 #b45레벨 이상#k이어야 하며, 누적 수련점수 #b4000#k 점이 필요해. 내가 보기에 너는 이 조건을 모두 만족하는 것 같군. 지금 허리띠를 받겠어?");
		    	select = 2;
		   } else if(cm.getPlayer().getLevel() >= 45){
			cm.sendNext("#b#i1132002# #z1132002##k 를 받기 위해서는 #b45레벨 이상#k이어야 하며, 누적 수련점수 #b4000#k 점이 필요해.\r\n\r\n네가 이 허리띠를 받으려면 수련점수를 더 쌓아야 한다고.");
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132002# #z1132002##k 를 받기 위해서는 #b45레벨 이상#k이어야 하며, 누적 수련점수 #b4000#k가 필요해.\r\n\r\n네가 이 허리띠를 받으려면 #b레벨 45이상#k이 되어야 한다고.");
        		cm.dispose();
		}
		} else if (selection == 6) {
 		   if(cm.getPlayer().getDojo() >= 8000 && cm.getPlayer().getLevel() >= 60) {
			cm.sendYesNo("#b#i1132003# #z1132003##k 를 받기 위해서는 #b60레벨 이상#k이어야 하며, 누적 수련점수 #b8000#k 점이 필요해. 내가 보기에 너는 이 조건을 모두 만족하는 것 같군. 지금 허리띠를 받겠어?");
		    	select = 3;
		   } else if(cm.getPlayer().getLevel() >= 60){
			cm.sendNext("#b#i1132003# #z1132003##k 를 받기 위해서는 #b60레벨 이상#k이어야 하며, 누적 수련점수 #b8000#k 점이 필요해.\r\n\r\n네가 이 허리띠를 받으려면 수련점수를 더 쌓아야 한다고.");
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132003# #z1132003##k 를 받기 위해서는 #b60레벨 이상#k이어야 하며, 누적 수련점수 #b8000#k 점이 필요해.\r\n\r\n네가 이 허리띠를 받으려면 #b레벨 60이상#k이 되어야 한다고.");
        		cm.dispose();
		}
		} else if (selection == 7) {
 		   if(cm.getPlayer().getDojo() >= 17000 && cm.getPlayer().getLevel() >= 75) {
			cm.sendYesNo("#b#i1132004# #z1132004##k 를 받기 위해서는 #b75레벨 이상#k이어야 하며, 누적 수련점수 #b17000#k 점이 필요해. 내가 보기에 너는 이 조건을 모두 만족하는 것 같군. 지금 허리띠를 받겠어?");
		    	select = 4;
		   } else if(cm.getPlayer().getLevel() >= 75){
			cm.sendNext("#b#i1132004# #z1132004##k 를 받기 위해서는 #b75레벨 이상#k이어야 하며, 누적 수련점수 #b17000#k 점이 필요해.\r\n\r\n네가 이 허리띠를 받으려면 수련점수를 더 쌓아야 한다고.");
        		cm.dispose();		} else {
			cm.sendNext("#b#i1132004# #z1132004##k 를 받기 위해서는 #b75레벨 이상#k이어야 하며, 누적 수련점수 #b17000#k 점이 필요해.\r\n\r\n네가 이 허리띠를 받으려면 #b레벨 75이상#k이 되어야 한다고.");
        		cm.dispose();
		}
		} else {
   			var Balt = "어떤 허리띠를 받길 원해?";
    			Balt += "\r\n#b#L0##i1132112# #z1132112# #r(무공의 증표 50개 필요)";
    			Balt += "\r\n#b#L1##i1132113# #z1132113# #r(무공의 증표 100개 필요)";
    			Balt += "\r\n#b#L2##i1132114# #z1132114# #r(무공의 증표 200개 필요)";
    			Balt += "\r\n#b#L3##i1132115# #z1132115# #r(무공의 증표 250개 필요)";
			cm.sendSimple(Balt);
		}
	      } else if (status == 3) {
		if (selection == 0) {
	 	   if (cm.haveItem(4001620, 50)) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(4001620,-50);
			cm.gainItem(1132112,1, false, 604800000);
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132112# #z1132112##k 를 얻기 위해서는 무릉 도장을 도전할 때 나오는 #r#b#i4001620# #z4001620# 50개#k가 필요합니다. 무공의 증표가 다 있는지 다시 확인해주세요.");
        		cm.dispose();
		}
		} else if (selection == 1) {
	 	   if (cm.haveItem(4001620, 100)) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(4001620,-100);
			cm.gainItem(1132113,1, false, 604800000);
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132113# #z1132113##k 를 얻기 위해서는 무릉 도장을 도전할 때 나오는 #r#b#i4001620# #z4001620# 100개#k가 필요합니다. 무공의 증표가 다 있는지 다시 확인해주세요.");
        		cm.dispose();
		}
		} else if (selection == 2) {
	 	   if (cm.haveItem(4001620, 200)) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(4001620,-200);
			cm.gainItem(1132114,1, false, 604800000);
        		cm.dispose();
		} else {
			cm.sendNext("#b#i1132114# #z1132114##k 를 얻기 위해서는 무릉 도장을 도전할 때 나오는 #r#b#i4001620# #z4001620# 200개#k가 필요합니다. 무공의 증표가 다 있는지 다시 확인해주세요.");
        		cm.dispose();
		}
		} else if (selection == 3) {
	 	   if (cm.haveItem(4001620, 250)) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(4001620,-250);
			cm.gainItem(1132115,1, false, 604800000);
        		cm.dispose(); 
		} else {
			cm.sendNext("#b#i1132115# #z1132115##k 를 얻기 위해서는 #r#b#i4001620# #z4001620# 250개#k가 필요합니다. 무공의 증표가 다 있는지 다시 확인해주세요.");
        		cm.dispose();
		}
	} else {
		if (select == 0) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(1132000,1, false, 604800000);
        		cm.dispose();
		} else if (select == 1) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(1132001,1, false, 604800000);
        		cm.dispose();
		} else if (select == 2) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(1132002,1, false, 604800000);
        		cm.dispose(); 
		} else if (select == 3) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(1132003,1, false, 604800000);
        		cm.dispose(); 
		} else if (select == 4) {
			cm.sendNext("너의 성실함을 기억해주도록 하지. 허리띠를 얻었다고 잘난 척 하지 말아. 무엇보다 제일 좋은건 바로 이 초록색 허리띠라고!");
			cm.gainItem(1132004,1, false, 604800000);
        		cm.dispose(); 
			}
		}
	}
}