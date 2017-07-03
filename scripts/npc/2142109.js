var cash = 0;

function start() {
 if (true) {
    var tmp_str = "";
    tmp_str += "#fn나눔고딕##fs18# #e#d:: 기능 시스템 ::#n#k\r\n ";
    tmp_str += "#fn나눔고딕##fs13##L2##r[HOT]#k#b성형하기#k";
    tmp_str += "#L59##r[추천]#k#b환생/변생#k";
　　tmp_str += "#L122##r[필수]#k#b출석체크#k#l\r\n";　　
    tmp_str += " #L15##r[필수]#k#b전직하기#k";
    tmp_str += "#L66##r[편리]#k#b후원신청#k";
    tmp_str += "#L188##r[이동]#k#b자유시장#k#l\r\n";
    tmp_str += " #L132##r#e[LK]#n#b 랭킹";
    tmp_str += "#L99##r[기능]#k#b 보조무기#k";
    tmp_str += "#L121##r[스킬]#b 스킬마스터#l\r\n";
    tmp_str += " #L120##r#e[교환]#n#b메소교환 ";
    tmp_str += "#L299##r[필수]#b (건의)게시판#k";　
    tmp_str += "#L300##r[기능]#b 로또#l\r\n\r\n\r\n";　　　
    tmp_str += "#fn나눔고딕##fs18# #e#d:: 새로운 컨텐츠 ::#n#k\r\n ";
    tmp_str += "#fn나눔고딕##fs13##L745##r[NEW]#k#b욕배틀#k";
    tmp_str += "#L6##e#r[NEW]#b #n#e컨텐츠#n#k";
    tmp_str += "#L7778##r[EVENT]#b 초월강화#l\r\n"; 
    tmp_str += " #L7777##r[어빌]#b 어빌리티";      
    tmp_str += " #L5447##r[NEW]#b 팅템제거"; 
    tmp_str += " #L5448##r[HOT]#b 선물";       
    cm.sendSimple (tmp_str);	
	} else {
    var tmp_str = "긴급 광장으로 이동";
    tmp_str += "#b\r\n#L16#광장으로 이동한다";
    cm.sendSimple (tmp_str);
	}
}

function action(mode, type, selection) {
	cm.dispose();
	    if (selection == 0) {
            	    cm.openShop(600000); 
            } else if (selection == 1) {
            	    cm.openShop(1012004);
	    } else if (selection == 51) {
		if (cm.getPlayer().getLevel() >= 45) {
        		cm.playerMessage(1, "낚시터에 입장했습니다. 낚시방법은 페이슨 엔피시를 클릭해주세요");
                	cm.warp(230020201);
		    } else {
			cm.sendOk("낚시터는 레벨45 이상입니다.");
		}
            } else if (selection == 50) {
        	    cm.openNpc(2152015);
            } else if (selection == 175) {
        	    cm.warp(101050000);
 } else if (selection == 119) {
               cm.dispose();
		cm.openNpc(2154002);
            } else if (selection == 120) {
        	    cm.openNpc(3000138);
            } else if (selection == 121) {
        	    cm.openNpc(1002006);
            } else if (selection == 122) {
        	    cm.openNpc(9001040);
            } else if (selection == 7777) {
        	    cm.openNpc(1100004);
            } else if (selection == 7778) {
        	    cm.openNpc(1052100);
            } else if (selection == 150) {
        	    cm.openShop(9074001);
} else if (selection == 745) {
    cm.playerMessage(1, "여기서는 마음껏 욕이나 드립을 하면서 말빨로 싸울 수 있습니다!. 대신 이 외에 맵에서 욕을 하게되면 재제됩니다. 그리고 욕은 필터링이 되니 [ 예:시발 > (다른사람한테는)이런 ] 알아서 1을붙이든 @붙이든 하셈");
        	    cm.warp(103050400);
            } else if (selection == 132) {
        	    cm.openNpc(1400003);
            } else if (selection == 99) {
        	    cm.openNpc(1012114);
            } else if (selection == 300) {
        	    cm.openNpc(9250022);
            } else if (selection == 9) {
        	    cm.openNpc(9010041);
            } else if (selection == 114) {
        	    cm.openNpc(2010002);
            } else if (selection == 55) {
        	    cm.openShop(2050001);
            } else if (selection == 66) {
        	    cm.openNpc(9040011);
            } else if (selection == 478) {
        	    cm.openNpc(2159433);
            } else if (selection == 59) {
        	    cm.openNpc(9076102);
            } else if (selection == 52) {
            	    cm.openNpc(9010031);
            } else if (selection == 53) {
            	    cm.openNpc(9000083);
            } else if (selection == 5447) {
            	    cm.openNpc(9000035);
            } else if (selection == 5448) {
            	    cm.openNpc(9000056);
} else if (selection == 188) {
        	    cm.warp(910000000);
            } else if (selection == 2) {
            	    cm.openNpc(9010033);
            } else if (selection == 3) {
            	    cm.openNpc(9901003);
            } else if (selection == 4) {
            	    cm.openNpc(2110005);
            } else if (selection == 5) {
            	    cm.openNpc(2150007);
            } else if (selection == 299) {
            	    cm.openNpc(1022107);
            } else if (selection == 6) {
            	    cm.openNpc(9000039);
            } else if (selection == 7) {
            	    cm.openNpc(1012102);
            } else if (selection == 8) {
		if (cm.haveItem(5155000, 2)) {
             		if (cm.getPlayer().getGender() == 0) {
                 	cm.getPlayer().setHair(31002);
                 	cm.getPlayer().setFace(21700);
                 	cm.getPlayer().setGender(1);
                	cm.gainItem(5155000,-2);
              	} else if (cm.getPlayer().getGender() == 1) {
                 	cm.getPlayer().setHair(30000);
                 	cm.getPlayer().setFace(20100);
                 	cm.getPlayer().setGender(0);
                 	cm.gainItem(5155000,-2);
             	}
            	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(6, "메이플스토리 : 원하시는 대로 성별이 변경 되었습니다~ 부작용으로 기본 머리에 기본 얼굴로 되어 버렸네요~ 이를 어쩌나 ㅜ..ㅜ ? 부디 메이플 월드에서 즐거운 시간 되시길~");
            	cm.playerMessage(5, "성별 전환 시스템에 의해 성별이 바뀌며 이성의 기본 헤어와 얼굴로 바뀌었습니다.");			
            	cm.dispose();
	       } else {
	    	cm.sendOk("#r카르타의 진주#k가 부족합니다. 인벤토리 창을 확인해주세요~ #b#i5155000# #t5155000##k는 #r캐시샵 -> 기타 -> 뷰티샵#k에서 구매가 가능합니다.");
            	cm.dispose();
	       }
	    } else if (selection == 9) {
		if (cm.getJob() == 3300) {
        		cm.playerMessage(5, "재규어들의 서식지에 입장했습니다. 재규어를 공격하여 HP를 줄인 후 포획 스킬로 재규어를 포획해주세요.");
                	cm.warp(931000500);
		} else if (cm.getJob() == 3310) {
                	cm.warp(931000500);
            		cm.playerMessage(5, "재규어들의 서식지에 입장했습니다. 재규어를 공격하여 HP를 줄인 후 포획 스킬로 재규어를 포획해주세요.");
		} else if (cm.getJob() == 3311) {
                	cm.warp(931000500);
            		cm.playerMessage(5, "재규어들의 서식지에 입장했습니다. 재규어를 공격하여 HP를 줄인 후 포획 스킬로 재규어를 포획해주세요.");
		} else if (cm.getJob() == 3312) {
                   	cm.warp(931000500);
            		cm.playerMessage(5, "재규어들의 서식지에 입장했습니다. 재규어를 공격하여 HP를 줄인 후 포획 스킬로 재규어를 포획해주세요.");
		    } else {
			cm.sendOk("당신은 #r와일드 헌터#k가 아니군요, 직업을 다시 확인 후 다시 말을 걸어주세요~");
		}
            } else if (selection == 10) {
            	    cm.openNpc(9020000);
            } else if (selection == 11) {
            	    cm.gainItem(5155000, 20);
        	    cm.sendOk("#b카르타의 진주#k 20개를 지원 받았습니다.");	
            } else if (selection == 12) {
            	    cm.gainMeso(1000000000);
        	    cm.sendOk("운영 자금 #b10억 메소(1,00,000,000 메소)#k를 지원 받았습니다.");	
            } else if (selection == 13) {
        	    cm.openNpc(9050000);
            } else if (selection == 14) {
        	    cm.openNpc(2144016);
            } else if (selection == 15) {
        	    cm.openNpc(9310007);
            } else if (selection == 16) {
        	    cm.warp(101050000, 0);	
            } else if (selection == 17) {
		if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 112) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142009,1);	
            	    cm.playerMessage(5, "<투신> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 전사#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 122) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142009,1);	
            	    cm.playerMessage(5, "<투신> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 전사#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 132) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142009,1);	
            	    cm.playerMessage(5, "<투신> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 전사#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 212) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142010,1);	
            	    cm.playerMessage(5, "<현자> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 마법사#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 222) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142010,1);	
            	    cm.playerMessage(5, "<현자> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 마법사#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 232) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142010,1);	
            	    cm.playerMessage(5, "<현자> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 마법사#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 312) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142011,1);	
            	    cm.playerMessage(5, "<스나이퍼 로드> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 궁수#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 322) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142011,1);	
            	    cm.playerMessage(5, "<스나이퍼 로드> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 궁수#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 412) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142012,1);	
            	    cm.playerMessage(5, "<레전더리 시프> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 도적#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 422) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142012,1);	
            	    cm.playerMessage(5, "<레전더리 시프> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 도적#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 434) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142012,1);	
            	    cm.playerMessage(5, "<레전더리 시프> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r스페셜 모험가 듀얼블레이드#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 512) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142013,1);	
            	    cm.playerMessage(5, "<해적왕> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 해적#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 522) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142013,1);	
            	    cm.playerMessage(5, "<해적왕> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r모험가 해적#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 532) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142013,1);	
            	    cm.playerMessage(5, "<해적왕> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r스페셜 모험가 캐논슈터#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2112) {
        	    cm.teachSkill(20001005,1,1);
        	    cm.gainItem(1142133,1);	
            	    cm.playerMessage(5, "<영웅 아란> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r영웅 아란#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2218) {
        	    cm.teachSkill(20011005,1,1);
        	    cm.gainItem(1142158,1);	
            	    cm.playerMessage(5, "<영웅의 후계자> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r드래곤마스터 에반#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2312) {
        	    cm.teachSkill(20021005,1,1);
        	    cm.gainItem(1142340,1);	
            	    cm.playerMessage(5, "<엘프의 왕> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r엘프의 왕 메르세데스#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2412) {
        	    cm.teachSkill(20031005,1,1);
        	    cm.gainItem(1142379,1);	
            	    cm.playerMessage(5, "<괴도 팬텀> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r괴도 팬텀#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 3212) {
        	    cm.teachSkill(30001005,1,1);
        	    cm.gainItem(1142246,1);	
            	    cm.playerMessage(5, "<특별수업 졸업생> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r레지스탕스 수료생(배틀메이지)#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 3312) {
        	    cm.teachSkill(30001005,1,1);
        	    cm.gainItem(1142246,1);	
            	    cm.playerMessage(5, "<특별수업 졸업생> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r레지스탕스 수료생(와일드헌터)#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 3512) {
        	    cm.teachSkill(30001005,1,1);
        	    cm.gainItem(1142246,1);	
            	    cm.playerMessage(5, "<특별수업 졸업생> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r레지스탕스 수료생(메카닉)#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 3112) {
        	    cm.teachSkill(30011005,1,1);
        	    cm.gainItem(1142345,1);	
            	    cm.playerMessage(5, "<복수의 화신> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r어둠의 군단장 데몬슬레이어#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 5112) {
        	    cm.teachSkill(50001005,1,1);
        	    cm.gainItem(1142403,1);	
            	    cm.playerMessage(5, "<진정한 빛의 기사> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 200레벨을 달성한 #r빛의 기사단장 미하일#k 직업군이군요, #b영웅의 메아리#k와 #b해당하는 클래스의 최고 훈장#k을 받아주세요.");
            	    cm.dispose();
		} else if (cm.getPlayer().getJob() == 900) {
        	    cm.teachSkill(1005,1,1);
        	    cm.gainItem(1142249,1);	
            	    cm.playerMessage(5, "<나는야 럭키가이★> 칭호를 획득 하셨습니다.");
            	    cm.playerMessage(5, "<영웅의 메아리> 스킬을 획득 하셨습니다.");
	    	    cm.sendOk("당신은 저희 메이플의 #r운영자#k 이시군요, #b영웅의 메아리#k와 #b럭키가이의 증표#k를 받아주세요.");
            	    cm.dispose();
	       } else {
	    	cm.sendOk("현재 만렙이 아니시거나 최종 차수의 전직을 완료하지 못했습니다, 자신의 레벨을 다시 확인 해주세요.");
            	cm.dispose();
	       }	
            } else if (selection == 18) {
		    cm.sendOk("#b폭풍 성장의 비약#k 1개가 지급됬어요~ 이 비약을 마시면 1레벨 상승합니다! 단, 만렙 캐릭터는 안되는거 아시죠?"); 
           	    cm.playerMessage(5, "<폭풍 성장의 비약> 1개가 지급되었습니다.");
        	    cm.gainItem(2430218,1);	
            	    cm.dispose();
	} else {
		cm.sendOk("다시 한번 둘러보는게 어떨까?"); 
	}
}	