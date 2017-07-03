/*

페니르스토리

*/

importPackage(Packages.packet.creators);
importPackage(Packages.main.world);
importPackage(java.lang);

var status = -1;
var select = 0;
var trial = 0;
var mode_ = 0;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("시간을 소중여기세요.");
		cm.dispose();
	} else {
		if ((status == 0 || status == 1 || status == 2 || status == 4 || status == 6) && mode == 0) {
			cm.sendOk("시간을 소중여기세요.");
			cm.dispose();
			return;
		}
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	var intro = "당신이 여신의 후계자, 신의 아이라 불려지는 #b제로#k인가요?..\r\n\r\n#Cgray#잃어버린 스킬은 각각 110, 130, 150 레벨에 습득하실 수 있습니다.#k\r\n";
        //intro += "#L0##b모험가 (Adventurer)#l\r\n";
        //intro += "#L1#영웅 (Hero)#l\r\n";
        //intro += "#L2#시그너스 (Cygnus)\r\n";
	//intro += "#L3#레지스탕스 (Resistance)#l\r\n";
	//intro += "#L4#노바 (Nova)#l\r\n";
	intro += "#L5##b잃어버린 스킬을 배우겠습니다.#k#l\r\n";
	//intro += "#L6#은월 (Eunwol)#l\r\n";
	cm.sendSimple(intro);
     } else if (status == 1) {
        if (selection == 0) {
	var ADVR = "#r모험가#k를 선택 하셨군요, 모험가는 이전부터 메이플 월드를 모험하던 #b이방인#k에 지나지 않았지만, 메이플 월드를 모험하다 검은 마법사의 위협을 받아 그에 반격하는 유망주가 되게 됩니다.#b\r\n";
        ADVR += "#L0#무기와 힘을 지닌 모험가, 전사로 전직하겠습니다.#l\r\n";
        ADVR += "#L1#각종 마법을 구사하는 모험가, 마법사로 전직하겠습니다.#l\r\n";
        ADVR += "#L2#활과 석궁을을 다루는 모험가, 궁수로 전직하겠습니다.#l\r\n";
        ADVR += "#L3#투척 무기와 단검을 다루는 모험가, 도적으로 전직하겠습니다.#l\r\n";
        ADVR += "#L4#너클이나 건을 다루는 모험가, 해적으로 전직하겠습니다.#l\r\n";
        ADVR += "#L5#이도류의 종결자, 듀얼블레이드로 전직하겠습니다.#l\r\n";
        ADVR += "#L6#캐논의 정석, 캐논슈터로 전직하겠습니다.#l\r\n";
	cm.sendSimple(ADVR);
        } else if (selection == 1) {
	var Hero = "#r영웅#k을 선택 하셨군요, 영웅들은 오래 전 메이플 월드를 공격했던 검은 마법사와 대적하고, 봉인에 성공했던 비운의 영웅들입니다..#b\r\n";
        Hero += "#L7#폴암을 다루는 콤보 커맨더, 영웅 아란으로 전직하겠습니다.#l\r\n";
        Hero += "#L8#소환사이자 마법사, 드래곤 마스터 에반으로 전직하겠습니다.#l\r\n";
        Hero += "#L9#재빠른 데미지 딜러, 엘프의 왕 메르세데스로 전직하겠습니다.#l\r\n";
        Hero += "#L10#스킬을 훔치는 기교한 자, 괴도 팬텀으로 전직하겠습니다.#l\r\n";
        Hero += "#L11#빛과 어둠을 다루는 자, 루미너스로 전직하겠습니다.#l\r\n";
	cm.sendSimple(Hero);
        } else if (selection == 2) {
	var CY = "#r시그너스 기사단#k를 선택 하셨군요, 시그너스 기사단은 여제 시그너스와 신수를 위해 봉사하는 기사단원, 기사단장 등으로 이루어져 있습니다.#b\r\n";
        CY += "#L12#빛의 기사 소울마스터에 관심이 있습니다.#l\r\n";
        CY += "#L13#불의 기사 플레임위자드에 관심이 있습니다.#l\r\n";
        CY += "#L14#바람의 기사 윈드브레이커에 관심이 있습니다.#l\r\n";
        CY += "#L15#어둠의 기사 나이트 워커에 관심이 있습니다..#l\r\n";
        CY += "#L16#번개의 기사 스트라이커에 관심이 있습니다.#l\r\n";
        CY += "#L17#기사단장 미하일에 관심이 있습니다.#l\r\n";
	cm.sendSimple(CY);
        } else if (selection == 3) {
	var Regestangs = "#r레지스탕스#k를 선택 하셨습니다. 검은마법사가 봉인당한 이 후, 군단장 오르카와 스우는 블랙윙을 결성하여 검은 마법사를 부활시키고자 합니다. 하지만 그 뒤에는 레지스탕스 일원들이 항상 방해를 하며 평화를 유지해주고 있습니다..#b\r\n";
        Regestangs += "#L18#전투 특성화 마법사, 배틀메이지로 전직하겠습니다.#l\r\n";
        Regestangs += "#L19#재규어 라이더, 와일드헌터로 전직하겠습니다.#l\r\n";
        Regestangs += "#L20#레지스탕스의 기계공학자, 메카닉으로 전직하겠습니다.#l\r\n";
        Regestangs += "#L21#비운의 군단장, 데몬슬레이어로 전직하겠습니다.#l\r\n";
        Regestangs += "#L24#진정한 마족의 전사 데몬어벤져로 전직하겠습니다.#l\r\n";
        Regestangs += "#L25#겔리메르의 최종병기 개조인간 제논으로 전직하겠습니다.#l\r\n";
	cm.sendSimple(Regestangs);
        } else if (selection == 4) {
	var NOBA = "#r노바#k를 선택 하셨습니다. 노바 종족은 요번에 새로나온 New한 종족입니다. 스킬 시전시 음성이 나오며 재미있게 플레이 하실 수 있는 직업군입니다. 스토리는 판테온이란 세계에서 찾아온 이들로 검은마법사의 군단장인 메그너스를 물리치기위해 모험가들과 손을 잡게 됩니다..#b\r\n";
        NOBA += "#L22#노바의 전사, 카이저로 전직하겠습니다.#l\r\n";
        NOBA += "#L23#전장의 아이돌, 엔젤릭버스터로 전직하겠습니다.#l\r\n";
	cm.sendSimple(NOBA);
        } else if (selection == 5) {
	var Zero = "제 예상이 맞앗군요. 원하신다면 스킬을 가르쳐드리겠습니다.\r\n";
        Zero += "#L100##b스킬 배우기";
	cm.sendSimple(Zero);
        } else if (selection == 6) {
	var Zero = "#r은월#k을 선택하셧습니다.\r\n";
        Zero += "#L101##b은월로 전직하겠습니다.#k#l\r\n";
	cm.sendSimple(Zero);
	}
     } else if (status == 2) {
        if (selection == 0) {
	var Warreor = "#r전사#k를 선택 하셨군요, 전사는 #b검과 방패 등의 무기#k를 사용하며 강인함을 지닌, 모험가의 전진부대입니다. 2차 전직을 통해 검과 도끼를 쓰는 파이터, 검과 둔기를 쓰는 페이지, 창과 폴암을 쓰는 스피어맨으로 전직이 가능합니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	Warreor += "#L0#전사로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 100) {
        	Warreor += "#L1#파이터로 진출하려고 합니다.#l\r\n";
        	Warreor += "#L2#페이지로 진출하려고 합니다.#l\r\n";
        	Warreor += "#L3#스피어맨으로 진출하려고 합니다.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 110) {
        	Warreor += "#L4#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 120) {
        	Warreor += "#L5#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 130) {
        	Warreor += "#L6#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 111) {
        	Warreor += "#L7#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 121) {
        	Warreor += "#L8#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 131) {
        	Warreor += "#L9#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Warreor); 
	 } else {
		Warreor += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Warreor);
			cm.dispose();
			return;
		    }
        } else if (selection == 1) {
	var Magic = "#r마법사#k를 선택 하셨군요, 마법사는 #b각종 마법#k을 사용하며 광활한 지력을 지닌, 모험가의 지원사격자입니다. 2차 전직을 통해 사용 마법의 주 속성을 결정하게 됩니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	Magic += "#L10#마법사로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 200) {
        	Magic += "#L11#위자드(불,독)로 진출하려고 합니다.#l\r\n";
        	Magic += "#L12#위자드(썬,콜)로 진출하려고 합니다.#l\r\n";
        	Magic += "#L13#클래릭으로 진출하려고 합니다.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 210) {
        	Magic += "#L14#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 220) {
        	Magic += "#L15#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 230) {
        	Magic += "#L16#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 211) {
        	Magic += "#L17#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 221) {
        	Magic += "#L18#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 231) {
        	Magic += "#L19#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Magic); 
	 } else {
		Magic += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Magic);
			cm.dispose();
			return;
		    }
        } else if (selection == 2) {
	var Archer = "#r궁수#k를 선택 하셨군요, 궁수는 #b활과 석궁 등 장거리 투척 무기#k을 사용하며 높은 명중률과 넓은 사정 거리를 지닌, 모험가의 원거리 딜러입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	Archer += "#L20#궁수로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 300) {
        	Archer += "#L21#헌터(활)로 진출하려고 합니다.#l\r\n";
        	Archer += "#L22#사수(석궁)로 진출하려고 합니다.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 310) {
        	Archer += "#L23#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 320) {
        	Archer += "#L24#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 311) {
        	Archer += "#L25#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 321) {
        	Archer += "#L26#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Archer); 
	 } else {
		Archer += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Archer);
			cm.dispose();
			return;
		    }
        } else if (selection == 3) {
	var theif = "#r도적#k을 선택 하셨군요, 도적은 #b빠른 공격속도를#k자랑하며 높은 민첩성과 판단력을 지닌, 어둠속성 모험가입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	theif += "#L27#도적으로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 400) {
        	theif += "#L28#어쌔신(표창)으로 진출하려고 합니다.#l\r\n";
        	theif += "#L29#시프(단검)으로 진출하려고 합니다.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 410) {
         	theif += "#L30#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 420) {
         	theif += "#L31#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 411) {
         	theif += "#L32#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 421) {
         	theif += "#L33#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(theif); 
	 } else {
		theif += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(theif);
			cm.dispose();
			return;
		    }
        } else if (selection == 4) {
	var Prirat = "#r해적#k을 선택 하셨군요, 해적은 #b강력한 한방 공격#k을 자랑하며 강한 공격력과 빠른 이동속도가 강점인, 균형잡인 모험가입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	Prirat += "#L39#해적으로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Prirat);
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 500) {
        	Prirat += "#L40#인파이터(너클)로 진출하려고 합니다.#l\r\n";
        	Prirat += "#L41#건슬링거(건)로 진출하려고 합니다.#l\r\n";
 	cm.sendSimple(Prirat); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 510) {
        	Prirat += "#L42#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Prirat); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 520) {
         	Prirat += "#L43#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Prirat); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 511) {
         	Prirat += "#L44#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Prirat); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 521) {
         	Prirat += "#L45#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Prirat); 
	 } else {
		Prirat += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Prirat);
			cm.dispose();
			return;
		    } 
        } else if (selection == 5) {
	var Dual = "듀얼블레이드#k를 선택 하셨군요, 듀얼블레이드는 말그대로 #b이도류의 종결자#k이며 어느 도적보다 재빠른 공격/이동 속도를 자랑합니다, 현 다크로드의 전대 다크로드를 따르던 설희의 제자들이 바로 듀얼블레이드 입니다.#b\r\n";
              if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getJob() == 0) {
        	Dual += "#L34#듀얼블레이드(이도류)으로 진출하려고 합니다.#l\r\n";
	cm.sendSimple(Dual); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 430) {
        	Dual += "#L35#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Dual); 
              } else if (cm.getPlayer().getLevel() >= 55 && cm.getPlayer().getJob() == 431) {
        	Dual += "#L36#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Dual); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 432) {
        	Dual += "#L37#3+차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Dual); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 433) {
        	Dual += "#L38#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Dual);
	 } else {
		Dual += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Dual);
			cm.dispose();
			return;
		    }
        } else if (selection == 6) {
	var Canon = "#b#n 캐논슈터#k를 선택 하셨군요, 캐논슈터는 #b빠른 공격 속도#k를 자랑하는 해적의 스페셜 모험가입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Canon += "#L46#캐논슈터(핸드캐논)으로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Canon); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 501) {
         	Canon += "#L47#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Canon); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 530) {
          	Canon += "#L48#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Canon);   
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 531) {
          	Canon += "#L49#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Canon);  
	 } else {
		Canon += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Canon);
			cm.dispose();
			return;
		    } 
        } else if (selection == 7) {
	var Aran = "#r아란#k을 선택 하셨군요, 아란은 메이플 월드를 수호하던 영웅 중 한명으로써, #b거대한 폴암#k을 사용하는 전사 영웅입니다. 주로 콤보 시스템을 사용하는 커맨드 형식의 액션 타격형 영웅입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Aran += "#L50#아란으로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Aran); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2100) {
         	Aran += "#L51#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Aran); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2110) {
          	Aran += "#L52#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Aran);   
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2111) {
          	Aran += "#L53#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Aran);  
	 } else {
		Aran += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Aran);
			cm.dispose();
			return;
		    } 
        } else if (selection == 8) {
	var evan = "#r에반#k을 선택 하셨군요, 에반은 메이플 월드를 수호하던 영웅 중 한명으로써, #b드래곤#k과 하나되어 마법을 사용하는 소환사 계열(마법사) 영웅입니다. 주로 드래곤을 이용한 스킬로 이루어져 잇는 단합형 영웅입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	//evan += "#L54#에반으로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(evan); 
              } else if (cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getJob() == 2200) {
         	evan += "#L55#2차 전직을 하고 싶습니다..#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2210) {
         	evan += "#L56#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 40 && cm.getPlayer().getJob() == 2211) {
         	evan += "#L57#4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getJob() == 2212) {
         	evan += "#L58#5차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2213) {
         	evan += "#L59#6차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(evan); 
 	      } else if (cm.getPlayer().getLevel() >= 80 && cm.getPlayer().getJob() == 2214) {
        	evan += "#L60#7차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2215) {
         	evan += "#L61#8차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(evan);
	      } else if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getJob() == 2216) {
         	evan += "#L62#9차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 160 && cm.getPlayer().getJob() == 2217) {
         	evan += "#L63#대망의 10차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(evan);
	 } else {
		evan += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(evan);
			cm.dispose();
			return;
		    }   
        } else if (selection == 9) {
	var Mercedes = "#r메르세데스#k를 선택 하셨군요, 메르세데스는 메이플 월드를 수호하던 영웅 중 한명으로써, #b엘프의 왕#k으로써 알려져 있으며, 두개의 보우건을 사용하여 빠른 공격을 주도하는 공격형 영웅입니다. 주로 빠르게 처리할 수 있는 스킬로 이루어져 잇는 데미지 딜러입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Mercedes += "#L64#메르세데스로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Mercedes);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2300) {
         	Mercedes += "#L65#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Mercedes);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2310) {
         	Mercedes += "#L66#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Mercedes);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2311) {
         	Mercedes += "#L67#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Mercedes);
	 } else {
		Mercedes += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Mercedes);
			cm.dispose();
			return;
		    }   
        } else if (selection == 10) {
	var Pantom = "#r팬텀#k을 선택 하셨군요, 팬텀은 메이플 월드를 수호하던 영웅 중 한명으로써, #b괴도 팬텀#k이라는 별명이 어울릴 정도로 훔치기와 동체시력, 반사신경이 무척 높습니다, 주로 모험가들의 스킬을 훔쳐쓰는 도둑형 영웅입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Pantom += "#L68#팬텀으로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Pantom);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2400) {
         	Pantom += "#L69#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Pantom);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2410) {
         	Pantom += "#L70#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Pantom);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2411) {
         	Pantom += "#L71#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Pantom);
	 } else {
		Pantom += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Pantom);
			cm.dispose();
			return;
		    } 
        } else if (selection == 11) {
	var LumiNus = "#r루미너스#k를 선택 하셨군요, 루미너스는 메이플 월드를 수호하던 영웅 중 한명으로써, #b어둠과 빛의 공존#k의 마법사로 정해져 있습니다. 어둠과 빛 두 속성을 고루 사용하며, 강한 마법력을 자랑하는 이중형 영웅입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	LumiNus += "#L72#루미너스로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(LumiNus);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2700) {
         	LumiNus += "#L73#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(LumiNus);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2710) {
         	LumiNus += "#L74#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(LumiNus);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2711) {
         	LumiNus += "#L75#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(LumiNus);
	 } else {
		LumiNus += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(LumiNus);
			cm.dispose();
			return;
		    } 
        } else if (selection == 12) {
	var A = "#r소울마스터#k를 선택 하셨군요, 소울마스터는 시그너스 기사단 중 전사 기사이며, #b빛의 속성#k을 사용하는 기사단입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	A += "#L76#소울마스터로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(A);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1100) {
         	A += "#L77#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(A);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1110) {
         	A += "#L78#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(A);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1111) {
         	A += "#L79#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(A);
	 } else {
		A += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(A);
			cm.dispose();
			return;
		    } 
        } else if (selection == 13) {
	var b = "#r플레임위자드#k를 선택 하셨군요, 플레임위자드는 시그너스 기사단 중 마법사 기사이며, #b불의 속성#k을 사용하는 기사단입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	b += "#L80#플레임위자드로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(b);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1200) {
         	b += "#L81#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(b);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1210) {
         	b += "#L82#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(b);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1211) {
         	b += "#L83#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(b);
	 } else {
		b += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(b);
			cm.dispose();
			return;
		    } 
        } else if (selection == 14) {
	var c = "#r윈드브레이커#k를 선택 하셨군요, 윈드브레이커는 시그너스 기사단 중 궁수 기사이며, #b바람의 속성#k을 사용하는 기사단입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	c += "#L84#윈드브레이커로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(c);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1300) {
         	c += "#L85#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(c);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1310) {
         	c += "#L86#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(c);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1311) {
         	c += "#L87#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(c);
	 } else {
		c += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(c);
			cm.dispose();
			return;
		    } 
        } else if (selection == 15) {
	var d = "#r나이트워커#k를 선택 하셨군요, 나이트워커는 시그너스 기사단 중 도적 기사이며, #b어둠의 속성#k을 사용하는 기사단입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	d += "#L88#나이트워커로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(d);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1400) {
         	d += "#L89#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(d);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1410) {
         	d += "#L90#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(d);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1411) {
         	d += "#L91#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(d);
	 } else {
		d += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(d);
			cm.dispose();
			return;
		    } 
        } else if (selection == 16) {
	var e = "#r스트라이커#k를 선택 하셨군요, 스트라이커는 시그너스 기사단 중 해적 기사이며, #b번개의 속성#k을 사용하는 기사단입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	e += "#L92#스트라이커로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(e);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1500) {
         	e += "#L93#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(e);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1510) {
         	e += "#L94#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(e);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1511) {
         	e += "#L95#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(e);
	 } else {
		e += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(e);
			cm.dispose();
			return;
		    } 
        } else if (selection == 17) {
	var f = "미하일#k을 선택 하셨군요, 미하일은 시그너스 기사단의 기사단장이며, #b빛의 속성#k을 사용하는 기사단장 입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 5000) {
         	f += "#L96#미하일로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(f);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 5100) {
         	f += "#L97#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(f);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 5110) {
         	f += "#L98#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(f);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 5111) {
         	f += "#L99#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(f);
	 } else {
		f += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(f);
			cm.dispose();
			return;
		    } 
        } else if (selection == 18) {
	var BM = "#r배틀메이지#k를 선택 하셨군요, 배틀메이지는 레지스탕스의 일원이며, 무조건 공격만을 위하는 마법사입니다 주로 전투에 관련된 마법을 사용 하는 직업군입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	BM += "#L100#배틀메이지로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(BM);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3200) {
         	BM += "#L101#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(BM);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3210) {
         	BM += "#L102#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(BM);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3211) {
         	BM += "#L103#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(BM);
	 } else {
		BM += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(BM);
			cm.dispose();
			return;
		    }
        } else if (selection == 19) {
	var wh = "#r와일드헌터#k를 선택 하셨군요, 와일드헌터는 레지스탕스의 일원이며, 재규어를 타고 석궁을 난사하는 헌터입니다, 주로 재규어와 관련된 스킬을 사용 하는 직업군입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	wh += "#L104#와일드헌터로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(wh);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3300) {
         	wh += "#L105#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(wh);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3310) {
         	wh += "#L106#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(wh);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3311) {
         	wh += "#L107#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(wh);
	 } else {
		wh += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(wh);
			cm.dispose();
			return;
		    }
        } else if (selection == 20) {
	var mc = "#r메카닉#k을 선택 하셨군요, 메카닉은 레지스탕스의 일원이며, 메탈아머(로봇)를 타고 각종 스킬을 난사하는 전문가입니다, 주로 메탈아머(로봇)와 관련된 스킬을 사용 하는 직업군입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	mc += "#L108#메카닉으로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(mc);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3500) {
         	mc += "#L109#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(mc);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3510) {
         	mc += "#L110#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(mc);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3511) {
         	mc += "#L111#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(mc);
	 } else {
		mc += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(mc);
			cm.dispose();
			return;
		    }
        } else if (selection == 21) {
	var Demon = "#r데몬슬레이어#k을 선택 하셨군요, 데몬슬레이어는 한때 검은 마법사의 군단장이였으며, 검은 마법사가 배신한 이후, 레지스탕스들과 같이 블랙윙에 맞서게 됩니다. 데몬슬레이어는 #b포스#k를 사용하는 스페셜 레지스탕스 입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	Demon += "#L112#데몬슬레이어로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3100) {
         	Demon += "#L113#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3110) {
         	Demon += "#L114#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3111) {
         	Demon += "#L115#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	 } else {
		Demon += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Demon);
			cm.dispose();
			return;
		    }
        } else if (selection == 24) {
	var Demon = "#r데몬어벤져#k를 선택 하셨군요, 데몬어벤져는 한때 검은 마법사의 군단장이였으며, 검은 마법사가 배신한 이후, 레지스탕스들과 같이 블랙윙에 맞서게 됩니다. 데몬어벤져는 #b포스#k를 사용하는 스페셜 레지스탕스 입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 3002) {
         	Demon += "#L112#데몬어벤져로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3101) {
         	Demon += "#L501#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3120) {
         	Demon += "#L502#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3121) {
         	Demon += "#L503#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	 } else {
		Demon += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Demon);
			cm.dispose();
			return;
		    }
        } else if (selection == 25) {
	var Demon = "#r제논#k을 선택 하셨군요, 제논은 한 꼬마가 겔리메르에게 납치당해 자신의 의지와 상관없이\r\n개조당한 겔리메르의 비밀병기입니다.\r\n빠른 스피드,화려함이 장점인 직업입니다.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	Demon += "#L112#제논으로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3600) {
         	Demon += "#L504#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3610) {
         	Demon += "#L505#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3611) {
         	Demon += "#L506#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(Demon);
	 } else {
		Demon += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(Demon);
			cm.dispose();
			return;
		    }   
        } else if (selection == 22) {
	var NOVA1 = "#r카이저#k를 선택 하셨군요, 카이저는 노바종족의 전사이며, 판테온을 지키는 수호전사입니다. 검은마법사의 군단장 메그너스를 숙적으로 삼고 있는 전사 직업군입니다. #b두손검#k을 사용하며, #r모프 게이지#k를 다 충전하면 더 강력한 변신 스킬을 쓸 수 있습니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	NOVA1 += "#L116#카이저 입문하려고 합니다.#l\r\n";
	cm.sendSimple(NOVA1);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 6100) {
         	NOVA1 += "#L117#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(NOVA1);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 6110) {
         	NOVA1 += "#L118#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(NOVA1);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 6111) {
         	NOVA1 += "#L119#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(NOVA1);
	 } else {
		NOVA1 += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(NOVA1);
			cm.dispose();
			return;
		    } 
        } else if (selection == 23) {
	var NOVA2 = "#r엔젤릭 버스터#k를 선택 하셨군요, 엔젤릭 버스터는 노바종족의 전사출생이지만, 판테온의 성물이 팔에 결합이 됨으로, 그 성물의 영혼이 하나가 되어 변신을 하게됩니다. 변신한 엔젤릭버스터는 강력한 힘을 가지게 됩니다.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	NOVA2 += "#L120#엔젤릭 버스터로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(NOVA2);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 6500) {
         	NOVA2 += "#L121#2차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(NOVA2);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 6510) {
         	NOVA2 += "#L122#3차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(NOVA2);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 6511) {
         	NOVA2 += "#L123#대망의 4차 전직을 하고 싶습니다.#l\r\n";
	cm.sendSimple(NOVA2);
	 } else {
		NOVA2 += "\r\n당신은 이미 전직을 마치셨거나, 전직할수 있는 상태가 아닙니다.";
			cm.sendNext(NOVA2);
			cm.dispose();
			return;
		    }
        } else if (selection == 100) {
	var ZERO1 = "잃어버린 모든 스킬을 한번에 가르쳐 드릴 순 없어요. 순수한 본연의,진정한 내면의 자신을 바라보고 한층 성숙,성장해오시기 바랍니다.\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	//ZERO1 += "#L120#엔젤릭 버스터로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(ZERO1);
	      } else if (cm.getPlayer().getLevel() >= 110 && cm.getPlayer().getJob() == 10100) {
         	ZERO1 += "#L10000#[2차] #b스킬 배우기#k#k#l\r\n";
	cm.sendSimple(ZERO1);
	      } else if (cm.getPlayer().getLevel() >= 130 && cm.getPlayer().getJob() == 10110) {
         	ZERO1 += "#L10001#[3차] #b스킬 배우기#k#l\r\n";
	cm.sendSimple(ZERO1);
	      } else if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getJob() == 10111) {
         	ZERO1 += "#L10002#[4차] #b스킬 배우기#k#l\r\n";
	cm.sendSimple(ZERO1);
	 } else {
		ZERO1 += "\r\n#e< 잃어버린 스킬을 습득 할 수 있는 레벨이 아닙니다 >#n";
			cm.sendNext(ZERO1);
			cm.dispose();
			return;
		    }
        } else if (selection == 101) {
	var Eunwol1 = "다시한번 묻겟습니다. #b은월#k을 선택하셧는데 정말 확실하신겁니까?\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Eunwol1 += "#L120#엔젤릭 버스터로 입문하려고 합니다.#l\r\n";
	cm.sendSimple(Eunwol1);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2500) {
         	Eunwol1 += "#L10003##b2차 전직을 하고 싶습니다.#k#l\r\n";
	cm.sendSimple(Eunwol1);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2510) {
         	Eunwol1 += "#L10004##b3차 전직을 하고 싶습니다.#k#l\r\n";
	cm.sendSimple(Eunwol1);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2511) {
         	Eunwol1 += "#L10005##b대망의 4차 전직을 하고 싶습니다.#k#l\r\n";
	cm.sendSimple(Eunwol1);
	 } else {
		Eunwol1 += "\r\n전직이 불가능합니다.";
			cm.sendNext(Eunwol1);
			cm.dispose();
			return;
		    }
         }
     } else if (status == 3) {
        if (selection == 0) {
            cm.resetStats(35,4,4,4);
            cm.warp(101072000,0);cm.changeJob(100);
	    cm.gainItem(1142107, 1);
		cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    cm.playerMessage(5, "<초보 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 1) {
            cm.warp(101072000,0);cm.changeJob(110);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 2) {
            cm.warp(101072000,0);cm.changeJob(120);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 3) {
            cm.warp(101072000,0);cm.changeJob(130);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 4) {
            cm.warp(101072000,0);cm.changeJob(111);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 5) {
            cm.warp(101072000,0);cm.changeJob(121);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 6) {
            cm.warp(101072000,0);cm.changeJob(131);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 7) {
  	    cm.teachSkill(1121000,0,30); // 메이플 용사 -- 4차스킬 시작
  	    cm.teachSkill(1121001,0,30); // 몬스터 마그넷
  	    cm.teachSkill(1121002,0,30); // 스탠스
  	    cm.teachSkill(1120003,0,30); // 어드밴스드 콤보
  	    cm.teachSkill(1121006,0,30); // 돌진
 	    cm.teachSkill(1121008,0,30); // 레이징 블로우
 	    cm.teachSkill(1121010,0,30); // 인레이지
  	    cm.teachSkill(1120012,0,10); // 컴뱃 마스터리
  	    cm.teachSkill(1120013,0,30); // 어드밴스드 파이널 어택 -- 4차끝
            cm.warp(101072000,0);cm.changeJob(112);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 8){
  	  cm.teachSkill(1221000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(1220005,0,30); // 아킬레스
	  cm.teachSkill(1220006,0,30); // 가디언 스피릿
	  cm.teachSkill(1221010,0,30); // 어드밴스드 차지
	  cm.teachSkill(1221009,0,30); // 블래스트
	  cm.teachSkill(1220013,0,10); // 블래싱 아머
	  cm.teachSkill(1221001,0,30); // 몬스터 마그넷
	  cm.teachSkill(1221002,0,30); // 스탠스
	  cm.teachSkill(1221007,0,30); // 돌진
	  cm.teachSkill(1221004,0,20); // 디바인 차지
	  cm.teachSkill(1221011,0,30); // 생츄어리
            cm.warp(101072000,0);cm.changeJob(122);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 9) {
  	 cm.teachSkill(1321000,0,30); // 메이플 용사 -- 4차스킬 시작
 	 cm.teachSkill(1320006,0,30); // 다크포스
 	 cm.teachSkill(1321001,0,30); // 몬스터 마그넷
 	 cm.teachSkill(1321002,0,30); // 스탠스
	 cm.teachSkill(1321003,0,30); // 돌진
	 cm.teachSkill(1321007,0,10); // 비홀더
	 cm.teachSkill(1320008,0,20); // 비홀더스 힐링
 	 cm.teachSkill(1320011,0,10); // 비홀더스 리벤지
 	 cm.teachSkill(1320009,0,20); // 비홀더스 버프
 	 cm.teachSkill(1321012,0,30); // 다크 임페일
            cm.warp(101072000,0);cm.changeJob(132);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 10) {
            cm.resetStats(4,4,25,4);
            cm.warp(101072000,0);cm.changeJob(200);
	    cm.gainItem(1142107, 1);
		cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    cm.playerMessage(5, "<초보 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 11) {
            cm.warp(101072000,0);cm.changeJob(210);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 12) {
            cm.warp(101072000,0);cm.changeJob(220);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 13) {
            cm.warp(101072000,0);cm.changeJob(230);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 14) {
            cm.warp(101072000,0);cm.changeJob(211);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 15) {
            cm.warp(101072000,0);cm.changeJob(221);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 16) {
            cm.warp(101072000,0);cm.changeJob(231);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 17) {
	  cm.teachSkill(2121000,0,30); // 메이플 용사 -- 4차스킬 시작
 	  cm.teachSkill(2121001,0,30); // 빅뱅
 	  cm.teachSkill(2121003,0,30); // 미스트 이럽션
 	  cm.teachSkill(2121004,0,30); // 인피니티
 	  cm.teachSkill(2121005,0,30); // 이프리트
 	  cm.teachSkill(2121006,0,30); // 페럴라이즈
 	  cm.teachSkill(2121007,0,30); // 매테오
	  cm.teachSkill(2121009,0,10); // 마스터 매직
	  cm.teachSkill(2120010,0,30); // 아케인 에임
            cm.warp(101072000,0);cm.changeJob(212);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 18){
	  cm.teachSkill(2221000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(2221001,0,30); // 빅뱅
	  cm.teachSkill(2221003,0,30); // 글레이셜 체인
	  cm.teachSkill(2221004,0,30); // 인피니티
	  cm.teachSkill(2221005,0,30); // 엘퀴네스
	  cm.teachSkill(2221006,0,30); // 체인 라이트닝
	  cm.teachSkill(2221007,0,30); // 블리자드
	  cm.teachSkill(2221009,0,10); // 마스터 매직
	  cm.teachSkill(2220010,0,30); // 아케인 에임
            cm.warp(101072000,0);cm.changeJob(222);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 19) {
	  cm.teachSkill(2321000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(2321001,0,30); // 빅뱅
	  cm.teachSkill(2321002,0,30); // 마나 리플렉션
	  cm.teachSkill(2321004,0,30); // 인피니티
	  cm.teachSkill(2321003,0,30); // 바하뮤트
	  cm.teachSkill(2321005,0,30); // 어드밴스드 블레스
	  cm.teachSkill(2321006,0,5); // 리저렉션
	  cm.teachSkill(2321007,0,30); // 엔젤레이
	  cm.teachSkill(2321008,0,30); // 제네시스
	  cm.teachSkill(2321010,0,10); // 마스터 매직
	  cm.teachSkill(2320011,0,30); // 아케인 에임
            cm.warp(101072000,0);cm.changeJob(232);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();	
        } else if (selection == 20) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(300);
	    cm.gainItem(1142107, 1);
		cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    cm.playerMessage(5, "<초보 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 21) {
            cm.warp(101072000,0);cm.changeJob(310);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 22) {
            cm.warp(101072000,0);cm.changeJob(320);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 23) {
            cm.warp(101072000,0);cm.changeJob(311);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 24) {
            cm.warp(101072000,0);cm.changeJob(321);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 25) {
	  cm.teachSkill(3121000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(3120005,0,30); // 보우 엑스퍼트 
	  cm.teachSkill(3121002,0,30); // 샤프 아이즈
	  cm.teachSkill(3121004,0,30); // 폭풍의 시
	  cm.teachSkill(3121007,0,30); // 일루젼 스탭
	  cm.teachSkill(3120006,0,30); // 스피릿 링크 : 피닉스
	  cm.teachSkill(3120008,0,30); // 어드밴스드 파이널 어택
	  cm.teachSkill(3120010,0,10); // 얼티밋 플레임샷
	  cm.teachSkill(3120011,0,10); // 마크맨쉽
	  cm.teachSkill(3120012,0,15); // 엘리트 퍼펫
            cm.warp(101072000,0);cm.changeJob(312);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 26){
	  cm.teachSkill(3221000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(3220004,0,30); // 크로스보우 엑스퍼트
	  cm.teachSkill(3220010,0,10); // 얼티밋 스트레이프
	  cm.teachSkill(3221002,0,30); // 샤프 아이즈
	  cm.teachSkill(3221001,0,30); // 피어싱
	  cm.teachSkill(3221006,0,30); // 일루젼 스탭
	  cm.teachSkill(3220005,0,30); // 스피릿 링크 : 프리져
	  cm.teachSkill(3221007,0,30); // 스나이핑
	  cm.teachSkill(3220009,0,10); // 마크맨쉽
	  cm.teachSkill(3220012,0,15); // 엘리트 퍼펫
            cm.warp(101072000,0);cm.changeJob(322);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 27) {
            cm.resetStats(4,4,4,25);
            cm.warp(101072000,0);cm.changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "430");
		cm.teachSkill(190,1,1);
	    cm.gainItem(1142107, 1);
	    cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    cm.playerMessage(5, "<초보 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 28) {
            cm.warp(101072000,0);cm.changeJob(410);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 29) {
            cm.warp(101072000,0);cm.changeJob(420);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 30) {
            cm.warp(101072000,0);cm.changeJob(411);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 31) {
            cm.warp(101072000,0);cm.changeJob(421);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 32) {
	  cm.teachSkill(4121000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(4120002,0,30); // 페이크
	  cm.teachSkill(4121003,0,20); // 쇼다운
    	  cm.teachSkill(4120011,0,10); // 페이탈 베놈
	  cm.teachSkill(4120012,0,30); // 자벨린 엑스퍼트
	  cm.teachSkill(4121013,0,30); // 쿼드러플 스로우
	  cm.teachSkill(4121014,0,30); // 다크 세레니티
	  cm.teachSkill(4121015,0,30); // 퍼지 에어리어
	  cm.teachSkill(4121016,0,30); // 써든레이드
            cm.warp(101072000,0);cm.changeJob(412);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 33){
	  cm.teachSkill(4221000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(4221001,0,30); // 암살
	  cm.teachSkill(4220002,0,30); // 페이크
	  cm.teachSkill(4221006,0,30); // 연막탄
	  cm.teachSkill(4221007,0,30); // 부메랑 스탭
	  cm.teachSkill(4221010,0,30); // 써든레이드
	  cm.teachSkill(4220011,0,10); // 페이탈 베놈
	  cm.teachSkill(4220012,0,30); // 대거 엑스퍼트
	  cm.teachSkill(4221013,0,20); // 섀도어 인스팅트
            cm.warp(101072000,0);cm.changeJob(422);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 34) {
            cm.warp(101072000,0);cm.changeJob(430);
	  cm.teachSkill(4341002,10,10); 
	  cm.teachSkill(4341009,30,30);
	  cm.teachSkill(4341008,5,5); 
	    cm.gainItem(5051001, 1);
	    cm.gainItem(1012191, 1);
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.playerMessage(5, "듀얼블레이드 전직을 완료하고 <SP 초기화 주문서> 를 획득 하셨습니다.")
	    cm.fakeRelog();
            cm.updateChar();
	    cm.dispose();
        } else if (selection == 35) {
            cm.warp(101072000,0);cm.changeJob(431);
  	    cm.teachSkill(4311003,0,20); // 슬래시 스톰
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();        
	} else if (selection == 36) {
            cm.warp(101072000,0);cm.changeJob(432);
  	    cm.teachSkill(4321006,0,20); // 플라잉 어썰터 -- 4차스킬 끝
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 37) {
            cm.warp(101072000,0);cm.changeJob(433);
	    cm.gainItem(1142109, 1);
  	    cm.teachSkill(4331000,0,20); // 블러디 스톰 -- 5차스킬 시작
	    cm.teachSkill(4331002,0,20); // 미러 이미징
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 38){
	  cm.teachSkill(4341000,0,30); // 메이플 용사 -- 6차스킬 시작
	  cm.teachSkill(4341009,0,30); // 팬텀 블로우
	  cm.teachSkill(4341004,0,30); // 블레이드 퓨리
	  cm.teachSkill(4341006,0,30); // 더미 이펙트
	  cm.teachSkill(4341007,0,30); // 쏜즈 이펙트
	  cm.teachSkill(4340010,0,10); // 샤프니스
	  cm.teachSkill(4341011,0,30); // 써든레이드
	  cm.teachSkill(4340012,0,10); // 페이탈 베놈
	  cm.teachSkill(4340013,0,30); // 이도류 엑스퍼트
	  cm.teachSkill(4341002,0,30); // 파이널 컷
            cm.warp(101072000,0);cm.changeJob(434);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 39) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(500);
	    cm.gainItem(1142107, 1);
		cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    cm.playerMessage(5, "<초보 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 40) {
            cm.warp(101072000,0);cm.changeJob(510);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 41) {
            cm.warp(101072000,0);cm.changeJob(520);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 42) {
            cm.warp(101072000,0);cm.changeJob(511);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 43) {
            cm.warp(101072000,0);cm.changeJob(521);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 44) {
	  cm.teachSkill(5121000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(5121001,0,30); // 드래곤 스트라이크
	  cm.teachSkill(5121007,0,30); // 피스트 인레이지
	  cm.teachSkill(5121009,0,20); // 윈드 부스터
	  cm.teachSkill(5121010,0,5); // 타임 리프
	  cm.teachSkill(5120011,0,10); // 카운터 어택
	  cm.teachSkill(5120012,0,5); // 더블 럭키 다이스
	  cm.teachSkill(5121013,0,30); // 전함 노틸러스
	  cm.teachSkill(5120014,0,20); // 가드 크러쉬
	  cm.teachSkill(5121015,0,30); // 바이퍼지션
	  cm.teachSkill(5121016,0,30); // 에너지 블라스트
            cm.warp(101072000,0);cm.changeJob(512);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 45){
	  cm.teachSkill(5221000,0,30); // 메이플 용사 -- 4차스킬 시작
	  cm.teachSkill(5221004,0,30); // 래피드 파이어
	  cm.teachSkill(5220012,0,10); // 카운터 어택
	  cm.teachSkill(5221013,0,30); // 전함 노틸러스
	  cm.teachSkill(5220014,0,5); // 더블 럭키 다이스
	  cm.teachSkill(5221015,0,20); // 컨티뉴얼 에이밍
	  cm.teachSkill(5221016,0,30); // 헤드 샷
	  cm.teachSkill(5221017,0,30); // 퍼실레이드
	  cm.teachSkill(5221018,0,20); // 파이렛 스타일
	  cm.teachSkill(5220019,0,10); // 크루 커맨더쉽
	  cm.teachSkill(5220020,0,30); // 캡틴 디그니티
            cm.warp(101072000,0);cm.changeJob(522);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 46) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(501);
                cm.getPlayer().setKeyValue("AutoJob", "530");
	    cm.gainItem(1142107, 1);
	    cm.teachSkill(109,1,1); // 수영의 달인
	    cm.teachSkill(110,1,1); // 파이렛 블레스
	    cm.teachSkill(112,1,2); // 수납의 달인
	    cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    cm.playerMessage(5, "<초보 모험가> 칭호를 획득 하셨습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 47) {
	    cm.teachSkill(112,2,2); // 수납의 달인
            cm.warp(101072000,0);cm.changeJob(530);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<주니어 모험가> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 48) {
            cm.warp(101072000,0);cm.changeJob(531);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<베테랑 모험가> 칭호를 획득 하셨습니다.");
	    cm.getPlayer().gainAp(5);
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 49){
	  cm.teachSkill(5321000,0,30); // 캐논 바주카 -- 4차스킬 시작
	  cm.teachSkill(5321012,0,30); // 캐논 버스터
	  cm.teachSkill(5321001,0,30); // 전함 노틸러스
 	  cm.teachSkill(5321010,0,30); // 파이렛 스피릿
 	  cm.teachSkill(5321003,0,15); // 마그네틱 앵커
 	  cm.teachSkill(5321004,0,15); // 서포트 몽키 트윈스
	  cm.teachSkill(5321005,0,30); // 메이플 용사
	  cm.teachSkill(5320009,0,30); // 오버버닝 캐논
	  cm.teachSkill(5320008,0,30); // 하이퍼 몽키 스펠
	  cm.teachSkill(5320007,0,5); // 더블 럭키 다이스
            cm.warp(101072000,0);cm.changeJob(532);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<마스터 모험가> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 50) {
            cm.resetStats(35,4,4,4);
            cm.warp(101072000,0);cm.changeJob(2100);
            cm.getPlayer().setKeyValue("AutoJob", "2110");
	    cm.gainSp(2);
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20000);
                cm.getPlayer().setHair(30027);
                cm.getPlayer().setSkinColor(11);
                cm.resetEquip();
                cm.addEquip(-5, 1042167, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-6, 1062115, 0, 3, 0, 7, 0, 0); //하의
                cm.addEquip(-7, 1072383, 0, 2, 0, 7, 0, 0); //신발
	    	cm.gainItem(1142129, 1);
		cm.teachSkill(20000190,1,1); //연합의 의지 
		cm.teachSkill(20000194,1,1); //되찾은 기억
		cm.teachSkill(21120005,30,30); //파이널 블로우 (아란4차)
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<깨어난 아란> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
            } else {
                cm.getPlayer().setFace(21000);
                cm.getPlayer().setHair(31007);
                cm.getPlayer().setSkinColor(11);
                cm.resetEquip();
                cm.addEquip(-5, 1042167, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-6, 1062115, 0, 3, 0, 7, 0, 0); //하의
                cm.addEquip(-7, 1072383, 0, 2, 0, 7, 0, 0); //신발
	    	cm.gainItem(1142129, 1);
		cm.teachSkill(20000190,1,1); //연합의 의지 
		cm.teachSkill(20000194,1,1); //되찾은 기억
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<깨어난 아란> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
		}
        } else if (selection == 51) {
            cm.warp(101072000,0);cm.changeJob(2110);
	    cm.gainItem(1142130, 1);
	    cm.playerMessage(5, "<기억속의 아란> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 52) {
            cm.warp(101072000,0);cm.changeJob(2111);
	    cm.gainItem(1142131, 1);
	    cm.playerMessage(5, "<시련속의 아란> 칭호를 획득 하셨습니다.");
	    cm.getPlayer().gainAp(5);
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 53){
	  cm.teachSkill(21121000,0,30); // 메이플 용사
	  cm.teachSkill(21120002,0,30); // 오버 스윙
	  cm.teachSkill(21120001,0,20); // 하이 마스터리
	  cm.teachSkill(21120005,30,30); // 파이널 블로우
	  cm.teachSkill(21121003,0,20); // 프리즈 스탠딩
	  cm.teachSkill(21120004,0,20); // 하이 디펜스
	  cm.teachSkill(21120006,0,30); // 콤보 템페스트
	  cm.teachSkill(21120007,0,30); // 콤보 배리어
	  cm.teachSkill(21120011,0,10); // 스위프트 무브
	  cm.teachSkill(21120012,0,30); // 어드밴스드 파이널 어택
            cm.warp(101072000,0);cm.changeJob(2112);
	    cm.gainItem(1142132, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<희망속의 아란> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 54) {
            cm.resetStats(4,4,25,4);
            cm.warp(101072000,0);cm.changeJob(2200);
	    cm.gainSp(2);
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20000);
                cm.getPlayer().setHair(30027);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1042180, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-6, 1060138, 0, 3, 0, 7, 0, 0); //하의
                cm.addEquip(-11, 1302132, 17, 0, 0, 7, 0, 0); //무기
		cm.teachSkill(20010190,1,1); //연합의 의지 
		cm.teachSkill(20010194,1,1); //계승된 의지
	   	cm.gainItem(1142152, 1);
	   	cm.playerMessage(5, "<착한 아이> 칭호를 획득 하셨습니다.");
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
            } else {
                cm.getPlayer().setFace(21000);
                cm.getPlayer().setHair(31007);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1042180, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-6, 1061160, 0, 3, 0, 7, 0, 0); //하의
                cm.addEquip(-11, 1302132, 17, 0, 0, 7, 0, 0); //무기
		cm.teachSkill(20010190,1,1); //연합의 의지 
		cm.teachSkill(20010194,1,1); //계승된 의지
	   	cm.gainItem(1142152, 1);
	   	cm.playerMessage(5, "<착한 아이> 칭호를 획득 하셨습니다.");
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
		}
        } else if (selection == 55) {
            cm.warp(101072000,0);cm.changeJob(2210);
                cm.getPlayer().setKeyValue("AutoJob", "2210");
	    cm.gainItem(1142153, 1);
	    cm.playerMessage(5, "<페리온 경비병> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 56) {
            cm.warp(101072000,0);cm.changeJob(2211);
	    cm.gainItem(1142154, 1);
	    cm.playerMessage(5, "<커닝시티 명예시민> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 57) {
            cm.warp(101072000,0);cm.changeJob(2212);
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 58) {
            cm.warp(101072000,0);cm.changeJob(2213);
	    cm.gainItem(1142155, 1);
	    cm.playerMessage(5, "<비밀단체 임시멤버> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 59) {
            cm.warp(101072000,0);cm.changeJob(2214);
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 60) {
            cm.warp(101072000,0);cm.changeJob(2215);
	    cm.gainItem(1142156, 1);
	    cm.playerMessage(5, "<드래곤 마스터> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 61) {
            cm.warp(101072000,0);cm.changeJob(2216);
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 62) {
            cm.warp(101072000,0);cm.changeJob(2217);
	    cm.getPlayer().gainAp(5);
    	  cm.teachSkill(22170001,0,30); // 매직 마스터리
  	  cm.teachSkill(22171000,0,30); // 메이플 용사
	  cm.teachSkill(22171002,0,30); // 일루전
	  cm.teachSkill(22171003,0,30); // 플레임 휠
	    cm.gainItem(1142157, 1);
	    cm.playerMessage(5, "<드래곤 마스터> 칭호를 획득 하셨습니다.");
	    cm.getPlayer().gainAp(5);
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 63){
            cm.warp(101072000,0);cm.changeJob(2218);
	    cm.getPlayer().gainAp(5);
	  cm.teachSkill(22181000,0,25); // 오닉스의 축복
	  cm.teachSkill(22181001,0,30); // 블레이즈
	  cm.teachSkill(22181002,0,30); // 다크포그 
	  cm.teachSkill(22181003,0,20); // 소울스톤  
	  cm.teachSkill(22181004,0,20); // 오닉스의 의지
	    cm.getPlayer().gainAp(5);
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 64) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(2300);
	    cm.gainSp(2);
            if (cm.getPlayer().getGender() == 0) {
               cm.resetEquip();
                cm.getPlayer().setFace(20157);
                cm.getPlayer().setHair(33454);
	  	cm.teachSkill(20020109,1,1); 
	  	cm.teachSkill(20021110,1,1);
	  	cm.teachSkill(20020111,1,1);
	  	cm.teachSkill(20020112,1,1); 
                cm.addEquip(-5, 1050192, 0, 3, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1072519, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1522000, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1352000, 0, 0, 0, 0, 0, 0); //화살
	  	cm.teachSkill(20020190,1,1); // 연합의 의지
	    	cm.gainItem(1142336, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<영웅이였던 자> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
            } else {
               cm.resetEquip();
                cm.getPlayer().setFace(21155);
                cm.getPlayer().setHair(34424);
                cm.addEquip(-5, 1051237, 0, 3, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1072519, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1522000, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1352000, 0, 0, 0, 0, 0, 0); //화살
	  	cm.teachSkill(20020190,1,1); // 연합의 의지
	    	cm.gainItem(1142336, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<영웅이였던 자> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
		}
        } else if (selection == 65) {
            cm.warp(101072000,0);cm.changeJob(2310);
                cm.getPlayer().setKeyValue("AutoJob", "2310");
	    cm.gainItem(1142337, 1);
            cm.removeEquip(1352000);
	    cm.addEquip(-10, 1352001, 0, 0, 0, 0, 0, 0); //화살
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<에우렐의 엘프> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 66) {
            cm.warp(101072000,0);cm.changeJob(2311);
	    cm.gainItem(1142338, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1352001);
	    cm.addEquip(-10, 1352002, 0, 0, 0, 0, 0, 0); //화살
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<고귀한 자의 표식> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 67){
  	  cm.teachSkill(23121000,0,30); // 이슈타르의 링 -- 4차스킬 시작
  	  cm.teachSkill(23121002,0,20); // 레전드리 스피어
  	  cm.teachSkill(23121003,0,30); // 라이트닝 엣지
 	  cm.teachSkill(23120011,0,20); // 롤링 문썰트
	  cm.teachSkill(23121004,0,30); // 앤시언트 스피릿
	  cm.teachSkill(23120009,0,30); // 듀얼보우건 엑스퍼트
	  cm.teachSkill(23120010,0,20); // 디펜스 브레이크
	  cm.teachSkill(23120012,0,30); // 어드밴스드 파이널 어택
	  cm.teachSkill(23121005,0,30); // 메이플 용사
            cm.warp(101072000,0);cm.changeJob(2312);
	    cm.gainItem(1142339, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1352002);
	    cm.addEquip(-10, 1352003, 0, 0, 0, 0, 0, 0); //화살
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<엘프의 영웅> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();	
        } else if (selection == 68) {
            cm.resetStats(4,4,4,25);
            cm.warp(101072000,0);cm.changeJob(2400);
	    cm.gainSp(2);
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20659);
                cm.getPlayer().setHair(33743);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1050222, 0, 5, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1070023, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-9, 1102347, 0, 5, 5, 7, 0, 0); //망토
                cm.addEquip(-10, 1352100, 0, 0, 0, 0, 0, 0); //카드
	  	cm.teachSkill(20030190,1,1); // 연합의 의지
	    	cm.gainItem(1142375, 1);
	  	cm.teachSkill(20030204,1,1); // 데들리 인스팅트 -- 0차 스킬
	  	cm.teachSkill(20031205,1,1); // 팬텀 슈라우드
	  	cm.teachSkill(20030206,1,1); // 하이 덱스터러티 
	  	cm.teachSkill(20031207,1,1); // 스틸 스킬 
	  	cm.teachSkill(20031208,1,1); // 스킬 매니지먼트
	  	cm.teachSkill(20031209,1,1); // 저지먼트 -- 0차스킬 끝
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<영웅이였던 자> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
            } else {
                cm.getPlayer().setFace(21657);
                cm.getPlayer().setHair(34743);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1051272, 0, 3, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1071035, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-9, 1102347, 0, 5, 5, 7, 0, 0); //망토
                cm.addEquip(-10, 1352100, 0, 0, 0, 0, 0, 0); //카드
	  	cm.teachSkill(20030190,1,1); // 연합의 의지
	    	cm.gainItem(1142375, 1);
	  	cm.teachSkill(20030204,1,1); // 데들리 인스팅트 -- 0차 스킬
	  	cm.teachSkill(20031205,1,1); // 팬텀 슈라우드
	  	cm.teachSkill(20030206,1,1); // 하이 덱스터러티 
	  	cm.teachSkill(20031207,1,1); // 스틸 스킬 
	  	cm.teachSkill(20031208,1,1); // 스킬 매니지먼트
 	  	cm.teachSkill(20031209,1,1); // 저지먼트 -- 0차스킬 끝
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<영웅이였던 자> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
		}
        } else if (selection == 69) {
            cm.warp(101072000,0);cm.changeJob(2410);
                cm.getPlayer().setKeyValue("AutoJob", "2410");
	    cm.gainItem(1142376, 1);
            cm.removeEquip(1352100);
	    cm.addEquip(-10, 1352101, 0, 0, 0, 0, 0, 0); //카드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<신출귀몰> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 70) {
            cm.warp(101072000,0);cm.changeJob(2411);
	    cm.gainItem(1142377, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1352101);
	    cm.addEquip(-10, 1352102, 0, 0, 0, 0, 0, 0); //카드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<괴도 레이븐의 제자> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 71){
	  cm.teachSkill(24121000,0,30); // 얼티밋 드라이브 -- 4차스킬 시작
	  cm.teachSkill(24121001,0,30); // 탤런트 오브 팬텀시프 Ⅳ
	  cm.teachSkill(24120002,0,20); // 느와르 카르트
	  cm.teachSkill(24121003,0,20); // 트와일라이트
	  cm.teachSkill(24121004,0,30); // 프레이 오브 아리아
	  cm.teachSkill(24121005,0,30); // 템페스트 오브 카드
	  cm.teachSkill(24120006,0,30); // 케인 엑스퍼트
	  cm.teachSkill(24121007,0,20); // 소울 스틸
	  cm.teachSkill(24121008,0,30); // 메이플 용사
	  cm.teachSkill(20031209,0,0); // 저지먼트 헤제
	  cm.teachSkill(20031210,1,1); // 저지먼트 강화
            cm.warp(101072000,0);cm.changeJob(2412);
	    cm.gainItem(1142378, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1352102);
	    cm.addEquip(-10, 1352103, 0, 0, 0, 0, 0, 0); //카드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<아리아를 기억하는 자> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 72) {
	    	cm.dispose();
		cm.openNpc(1032216);

      	} else if (selection == 73) {
            cm.warp(101072000,0);cm.changeJob(2710);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
	    cm.gainItem(1142480, 1);
            cm.removeEquip(1352400);
	    cm.addEquip(-10, 1352401, 0, 0, 0, 0, 0, 0); //오브
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<어둠을 극복한 자> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 74) {
            cm.warp(101072000,0);cm.changeJob(2711);
	    cm.gainItem(1142481, 1);
            cm.removeEquip(1352401);
	    cm.addEquip(-10, 1352402, 0, 0, 0, 0, 0, 0); //오브
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<어둠을 흡수한 자> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 75) {
            cm.warp(101072000,0);cm.changeJob(2712);
  		cm.teachSkill(27121100,0,30); // 라이트 리플렉션 -- 4차 스킬 시작
  		cm.teachSkill(27121201,0,30); // 모닝 스타폴
  		cm.teachSkill(27121202,0,30); // 아포칼립스
  		cm.teachSkill(27121303,0,30); // 앱솔루트 킬 
  		cm.teachSkill(27121005,0,30); // 다크 크레센도
  		cm.teachSkill(27121006,0,30); // 다크니스 소서리
  		cm.teachSkill(27120007,0,30); // 매직 마스터리
  		cm.teachSkill(27120008,0,5); // 다크라이트 마스터리
  		cm.teachSkill(27121009,0,30); // 메이플 용사
	    cm.gainItem(1142482, 1);
            cm.removeEquip(1352402);
	    cm.getPlayer().gainAp(5);
	    cm.addEquip(-10, 1352403, 0, 0, 0, 0, 0, 0); //오브
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<빛과 어둠의 수호자> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 76) {
            cm.resetStats(35,4,4,4);
	    cm.gainSp(2);
            cm.warp(101072000,0);cm.changeJob(1100);
                cm.getPlayer().setKeyValue("AutoJob", "1110");
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // 연합의 의지
	    cm.playerMessage(5, "<수련기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 77) {
            cm.warp(101072000,0);cm.changeJob(1110);
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<정식기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 78) {
            cm.warp(101072000,0);cm.changeJob(1111);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(11110005,0,20); // 어드밴스드 콤보
	    cm.teachSkill(11111006,0,20); // 소울 드라이버
	    cm.teachSkill(11111008,0,1); // 매직 크래쉬
	    cm.playerMessage(5, "<상급기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 79) {
            cm.warp(101072000,0);cm.changeJob(1112);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // 영웅의 메아리
	    cm.playerMessage(5, "<기사단장> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 80) {
            cm.resetStats(4,4,25,4);
            cm.warp(101072000,0);cm.changeJob(1200);
	    cm.gainSp(2);
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // 연합의 의지
	    cm.playerMessage(5, "<수련기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 81) {
            cm.warp(101072000,0);cm.changeJob(1210);
                cm.getPlayer().setKeyValue("AutoJob", "1210");
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<정식기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 82) {
            cm.warp(101072000,0);cm.changeJob(1211);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(12111003,0,20); // 메테오
	    cm.teachSkill(12111004,0,20); // 이프리트
	    cm.teachSkill(12111007,0,1); // 텔레포트 마스터리
	    cm.playerMessage(5, "<상급기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 83) {
            cm.warp(101072000,0);cm.changeJob(1212);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // 영웅의 메아리
	    cm.playerMessage(5, "<기사단장> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 84) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(1300);
                cm.getPlayer().setKeyValue("AutoJob", "1310");
	    cm.gainSp(2);
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // 연합의 의지
	    cm.playerMessage(5, "<수련기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 85) {
            cm.warp(101072000,0);cm.changeJob(1310);
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<정식기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 86) {
            cm.warp(101072000,0);cm.changeJob(1311);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(13110009,0,1); // 모탈 블로우
	    cm.teachSkill(13111002,0,30); // 폭풍의 시
	    cm.teachSkill(13110003,0,20); // 보우 엑스퍼트
	    cm.playerMessage(5, "<상급기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 87) {
            cm.warp(101072000,0);cm.changeJob(1312);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // 영웅의 메아리
	    cm.playerMessage(5, "<기사단장> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 88) {
            cm.resetStats(4,4,4,25);
            cm.warp(101072000,0);cm.changeJob(1400);
                cm.getPlayer().setKeyValue("AutoJob", "1410");
	    cm.gainSp(2);
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // 연합의 의지
	    cm.playerMessage(5, "<수련기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 89) {
            cm.warp(101072000,0);cm.changeJob(1410);
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<정식기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 90) {
            cm.warp(101072000,0);cm.changeJob(1411);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(14110004,0,20); // 베놈
	    cm.teachSkill(14111005,0,20); // 쿼드러플 스로우
	    cm.teachSkill(14111010,0,1); // 다크 플레어
	    cm.playerMessage(5, "<상급기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 91) {
            cm.warp(101072000,0);cm.changeJob(1412);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // 영웅의 메아리
	    cm.playerMessage(5, "<기사단장> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 92) {
            cm.resetStats(25,4,4,4);
            cm.warp(101072000,0);cm.changeJob(1500);
                cm.getPlayer().setKeyValue("AutoJob", "1510");
	    cm.gainSp(2);
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // 연합의 의지
	    cm.playerMessage(5, "<수련기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 93) {
            cm.warp(101072000,0);cm.changeJob(1510);
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<정식기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 94) {
            cm.warp(101072000,0);cm.changeJob(1511);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(15111004,0,20); // 피스트 인레이지
	    cm.teachSkill(15111005,0,20); // 윈드 부스터
	    cm.teachSkill(15111011,0,1); // 럭키 다이스
	    cm.playerMessage(5, "<상급기사> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 95) {
            cm.warp(101072000,0);cm.changeJob(1512);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // 영웅의 메아리
	    cm.playerMessage(5, "<기사단장> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 96) {
             if (cm.getPlayer().getGender() == 0) {
            	cm.resetStats(35,4,4,4);
	    	cm.gainSp(2);	
		cm.warp(101072000,0);cm.changeJob(5100);
                cm.getPlayer().setKeyValue("AutoJob", "5110");
                cm.getPlayer().setFace(20069);
                cm.getPlayer().setHair(36033);
                cm.getPlayer().setSkinColor(10);
                cm.addEquip(-10, 1098000, 0, 10, 5, 0, 0, 0); //소울쉴드
	    	cm.gainItem(1142399, 1);
  		cm.teachSkill(50001214,1,1); // 빛의수호 -- 0차스킬
	    	cm.teachSkill(50000190,1,1); // 연합의 의지
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<새로 태어난 빛> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
		} else {
	    	cm.sendOk("#r미하일#k 직업은 남성 미하일 캐릭터만 전직이 가능합니다.");
	    	cm.dispose();
		}		
        } else if (selection == 97) {
            cm.warp(101072000,0);cm.changeJob(5110);
	    cm.gainItem(1142400, 1);
	    cm.removeEquip(1098000);
	    cm.addEquip(-10, 1098001, 0, 30, 15, 0, 150, 0); //소울쉴드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<수습 빛의 기사> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 98) {
            cm.warp(101072000,0);cm.changeJob(5111);
	    cm.gainItem(1142401, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1098001);
	    cm.addEquip(-10, 1098002, 0, 60, 30, 7, 350, 0); //소울쉴드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<정식 빛의 기사> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 99){
  	cm.teachSkill(51120003,0,30); // 어드밴스드 소울 실드 -- 4차 스킬 시작
  	cm.teachSkill(51120001,0,30); // 어드밴스드 소드 마스터리
  	cm.teachSkill(51120002,0,30); // 어드밴스드 파이널 어택
  	cm.teachSkill(51121007,0,30); // 소울 어썰트 
  	cm.teachSkill(51121008,0,30); // 샤이닝 블라스트
  	cm.teachSkill(51121006,0,30); // 소울 레이지
  	cm.teachSkill(51120000,0,10); // 컴뱃 마스터리
  	cm.teachSkill(51121004,0,30); // 스탠스
  	cm.teachSkill(51121005,0,30); // 메이플 용사
            cm.warp(101072000,0);cm.changeJob(5112);
	    cm.gainItem(1142402, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1098002);
	    cm.addEquip(-10, 1098003, 0, 85, 45, 12, 600, 110); //소울쉴드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<빛의 기사단장> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 100) {
            cm.resetStats(4,4,25,4);
            cm.warp(101072000,0);cm.changeJob(3200);
                cm.getPlayer().setKeyValue("AutoJob", "3210");
	    cm.gainSp(2);
	    cm.gainItem(1142242, 1);
	    cm.teachSkill(30000190,1,1); // 연합의 의지
	    cm.playerMessage(5, "<특별수업 신입생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 101) {
            cm.warp(101072000,0);cm.changeJob(3210);
	    cm.gainItem(1142243, 1);
	    cm.playerMessage(5, "<특별수업 중급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 102) {
            cm.warp(101072000,0);cm.changeJob(3211);
	    cm.gainItem(1142244, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<특별수업 상급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 103) {
            cm.warp(101072000,0);cm.changeJob(3212);
	    cm.gainItem(1142245, 1);
	    cm.getPlayer().gainAp(5);
  	    cm.teachSkill(32120000,0,30); // 어드밴스드 다크 오라
  	    cm.teachSkill(32120001,0,30); // 어드밴스드 옐로우 오라
  	    cm.teachSkill(32121002,0,30); // 피니쉬 블로우
  	    cm.teachSkill(32121003,0,30); // 싸이클론
  	    cm.teachSkill(32121004,0,30); // 다크 제네시스
  	    cm.teachSkill(32121006,0,30); // 쉘터
  	    cm.teachSkill(32121007,0,30); // 메이플 용사
  	    cm.teachSkill(32120009,0,30); // 에너자이즈
	    cm.playerMessage(5, "<특별수업 최상급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 104) {
            cm.resetStats(4,25,4,4);
	    cm.gainSp(2);
            cm.warp(101072000,0);cm.changeJob(3300);
                cm.getPlayer().setKeyValue("AutoJob", "3310");
	    cm.gainItem(1142242, 1);
	    cm.teachSkill(30000190,1,1); // 연합의 의지
	    cm.teachSkill(30001061,1,1); // 포획
	    cm.playerMessage(5, "<특별수업 신입생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 105) {
            cm.warp(101072000,0);cm.changeJob(3310);
	    cm.gainItem(1142243, 1);
	    cm.playerMessage(5, "<특별수업 중급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 106) {
            cm.warp(101072000,0);cm.changeJob(3311);
	    cm.gainItem(1142244, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<특별수업 상급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 107) {
            cm.warp(101072000,0);cm.changeJob(3312);
	    cm.gainItem(1142245, 1);
	    cm.getPlayer().gainAp(5);
  	    cm.teachSkill(33120000,0,30); // 크로스보우 엑스퍼트
  	    cm.teachSkill(33120010,0,10); // 와일드 인스팅트
  	    cm.teachSkill(33120011,0,30); // 어드밴스드 파이널 어택
  	    cm.teachSkill(33121001,0,30); // 플래쉬 레인
  	    cm.teachSkill(33121002,0,30); // 소닉 붐
  	    cm.teachSkill(33121004,0,30); // 샤프 아이즈
  	    cm.teachSkill(33121005,0,10); // 케미컬 쉘
  	    cm.teachSkill(33121007,0,30); // 메이플 용사
  	    cm.teachSkill(33121009,0,30); // 와일드 발
	    cm.playerMessage(5, "<특별수업 최상급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
      	} else if (selection == 108) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(3500);
                cm.getPlayer().setKeyValue("AutoJob", "3510");
	    cm.gainSp(2);
	    cm.gainItem(1142242, 1);
	    cm.teachSkill(30000190,1,1); // 연합의 의지
	    cm.playerMessage(5, "<특별수업 신입생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 109) {
            cm.warp(101072000,0);cm.changeJob(3510);
	    cm.gainItem(1142243, 1);
	    cm.playerMessage(5, "<특별수업 중급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 110) {
            cm.warp(101072000,0);cm.changeJob(3511);
	    cm.gainItem(1142244, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<특별수업 상급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 111) {
            cm.warp(101072000,0);cm.changeJob(3512);
	    cm.gainItem(1142245, 1);
	    cm.getPlayer().gainAp(5);
  	    cm.teachSkill(35120000,0,30); // 메탈아머 익스트림
  	    cm.teachSkill(35120001,0,30); // 로봇 마스터리
  	    cm.teachSkill(35121003,0,30); // 워머신 : 타이탄
  	    cm.teachSkill(35121005,0,30); // 메탈아머 : 미사일 탱크
  	    cm.teachSkill(35121006,0,30); // 세이프티
  	    cm.teachSkill(35121007,0,30); // 메이플 용사
  	    cm.teachSkill(35121009,0,30); // 로보 팩토리 : RM1
  	    cm.teachSkill(35121010,0,30); // 앰플리파이어 : AF-11
  	    cm.teachSkill(35121012,0,30); // 레이져 블래스트
  	    cm.teachSkill(35121013,0,30); // 메탈아머 : 헤비 머신건
	    cm.playerMessage(5, "<특별수업 최상급생> 칭호를 획득 하셨습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 112) {
            cm.resetStats(35,4,4,4);
            cm.warp(101072000,0);cm.changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
            if (cm.getPlayer().getGender() == 0) {
                cm.resetEquip();
	    	cm.gainSp(2);
                cm.getPlayer().setFace(20148);
                cm.getPlayer().setHair(33531);
                cm.getPlayer().getStat().setMaxMp(5);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.addEquip(-5, 1050191, 0, 3, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1072518, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1322122, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1099000, 0, 10, 5, 0, 0, 20); //포스 실드
	  	cm.teachSkill(30010190,1,1); // 연합의 의지
	  	cm.teachSkill(30011109,1,1); // 데빌윙즈
	  	cm.teachSkill(30010110,1,1); // 데몬 점프 
	  	cm.teachSkill(30010111,1,1); // 데쓰 커스
	  	cm.teachSkill(30010112,1,1); // 데몬스 퓨리
	    	cm.gainItem(1142341, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<부활한 마족> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
            } else {
                cm.resetEquip();
                cm.getPlayer().setFace(21146);
                cm.getPlayer().setHair(34411);
                cm.getPlayer().getStat().setMaxMp(5);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.addEquip(-5, 1051236, 0, 3, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1072518, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1322122, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1099000, 0, 10, 5, 7, 0, 20); //포스 실드
	  	cm.teachSkill(30010190,1,1); // 연합의 의지
	  	cm.teachSkill(30011109,1,1); // 데빌윙즈
	  	cm.teachSkill(30010110,1,1); // 데몬 점프 
	  	cm.teachSkill(30010111,1,1); // 데쓰 커스
	  	cm.teachSkill(30010112,1,1); // 데몬스 퓨리
	    	cm.gainItem(1142341, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<부활한 마족> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
		}
        } else if (selection == 113) {
            cm.warp(101072000,0);cm.changeJob(3110);
	    cm.gainItem(1142342, 1);
            cm.removeEquip(1099000);
	    cm.addEquip(-10, 1099002, 0, 30, 15, 7, 150, 50); //포스 실드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<어둠의 계약자> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 114) {
            cm.warp(101072000,0);cm.changeJob(3111);
	    cm.gainItem(1142343, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1099002);
	    cm.addEquip(-10, 1099003, 0, 60, 30, 7, 350, 80); //포스 실드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<각성의 마족> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 115){
  		cm.teachSkill(31120011,1,1); // 데몬 슬래시 최종 강화 -- 4차스킬 시작
  		cm.teachSkill(31121000,0,30); // 데몬 익스플로젼
  		cm.teachSkill(31121001,0,30); // 데몬 임팩트
  		cm.teachSkill(31121003,0,20); // 데빌 크라이
  		cm.teachSkill(31121006,0,20); // 다크 바인드
  		cm.teachSkill(31121005,0,30); // 메타모포시스	
		cm.teachSkill(31121007,0,15); // 인피니티 포스
  		cm.teachSkill(31121002,0,10); // 뱀피릭 터치
  		cm.teachSkill(31121004,0,30); // 메이플 용사
  		cm.teachSkill(31120008,0,30); // 어드밴스드 웨폰 마스터리
  		cm.teachSkill(31120009,0,30); // 하드 스킨
            cm.warp(101072000,0);cm.changeJob(3112);
	    cm.gainItem(1142344, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1099003);
	    cm.addEquip(-10, 1099004, 0, 85, 45, 7, 600, 110); //포스 쉴드
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<어둠의 용사> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 116) {
            cm.resetStats(35,4,4,4);
            cm.warp(101072000,0);cm.changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
            if (cm.getPlayer().getGender() == 0) {
                cm.resetEquip();
	    	cm.gainSp(2);
                cm.getPlayer().setFace(20376);
                cm.getPlayer().setHair(36245);
                cm.addEquip(-5, 1052529, 0, 3, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1072730, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1402177, 30, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0); //정수
	    	cm.gainItem(1142484, 1);
		cm.teachSkill(61110211, 1, 1);
		cm.teachSkill(61121217, 1, 1);
		cm.teachSkill(60000190, 1, 1);
		cm.teachSkill(60001216, 1, 1);
		cm.teachSkill(60001217, 1, 1);
		cm.teachSkill(60001218, 1, 1);
		cm.teachSkill(60000219, 1, 1);
		cm.teachSkill(60000222, 1, 1);
		cm.teachSkill(60001225, 1, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<환생한 카이저> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
            } else {
                cm.resetEquip();
                cm.getPlayer().setFace(21371);
                cm.getPlayer().setHair(37135);
                cm.addEquip(-5, 1052529, 0, 3, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1072730, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1402177, 30, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0); //정수
	    	cm.gainItem(1142484, 1);
		cm.teachSkill(60000190, 1, 1);
		cm.teachSkill(60001216, 1, 1);
		cm.teachSkill(60001217, 1, 1);
		cm.teachSkill(60001218, 1, 1);
		cm.teachSkill(60000219, 1, 1);
		cm.teachSkill(60000222, 1, 1);
		cm.teachSkill(60001225, 1, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<환생한 카이저> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
		}
        } else if (selection == 117) {
            cm.warp(101072000,0);cm.changeJob(6110);
	    cm.gainItem(1142485, 1);
            cm.removeEquip(1352500);
	    cm.addEquip(-10, 1352501, 0, 10, 10, 0, 0, 0); //정수
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<카이저의 운명을 걷는 자> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 118) {
            cm.warp(101072000,0);cm.changeJob(6111);
	    cm.gainItem(1142486, 1);
            cm.removeEquip(1352501);
	    cm.addEquip(-10, 1352502, 0, 20, 20, 0, 0, 0); //정수
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<각성한 카이저> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 119) {
            cm.warp(101072000,0);cm.changeJob(6112);
	    cm.gainItem(1142487, 1);
            cm.removeEquip(1352502);
	    cm.addEquip(-10, 1352503, 0, 30, 30, 0, 0, 0); //정수
  	cm.teachSkill(61120020,0,2); // 드래곤 슬래시 3차 강화 -- 4차 스킬 시작
  	cm.teachSkill(61121100,0,30); // 기가 슬래셔
  	cm.teachSkill(61121102,0,30); // 블루 스트릭
  	cm.teachSkill(61121104,0,20); // 소드 스트라이크 
  	cm.teachSkill(61121105,0,20); // 인퍼널 브레스
  	cm.teachSkill(61120007,0,30); // 어드벤스 윌 오브 소드
  	cm.teachSkill(61121009,0,20); // 로버스트 아머
  	cm.teachSkill(61120011,0,30); // 언플리칭 커리지
  	cm.teachSkill(61120012,0,30); // 어드벤스 소드 마스터리
  	cm.teachSkill(61121014,0,30); // 노바의 용사
  	cm.teachSkill(61120010,0,1); // 방어모드 3차 강화
  	cm.teachSkill(61120013,0,1); // 공격모드 3차 강화
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<카이저의 의지를 잇는자> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 120) {
            if (cm.getPlayer().getGender() == 1) {
            	cm.resetStats(4,35,4,4);
            	cm.warp(101072000,0);cm.changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                cm.resetEquip();
                cm.getPlayer().setFace(21574);
                cm.getPlayer().setHair(37252);
                cm.addEquip(-5, 1051293, 0, 3, 0, 7, 0, 0); //전신
                cm.addEquip(-7, 1071041, 0, 3, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1222000, 35, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1352601, 0, 100, 100, 0, 300, 0); //소울링
                cm.getPlayer().getStat().setMaxMp(1);
	  	cm.teachSkill(60010190,1,1); // 연합의 의지
	    	cm.gainItem(1142495, 1);
		cm.teachSkill(60011216,1,1);
		cm.teachSkill(60011218,1,1);
		cm.teachSkill(60011219,1,1);
		cm.teachSkill(60011220,1,1);
		cm.teachSkill(60011221,1,1);
		cm.teachSkill(60011222,1,1);
		cm.teachSkill(65121007,1,1);//트리니티 2타
		cm.teachSkill(65121008,1,1); // 트리니티 3타
	    	cm.gainSp(2);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1차 전직이 완료 되었습니다, 필요한 무기는 기본 상점에서 1000메소에 구매가 가능합니다.")
	    	cm.playerMessage(5, "<고대 노바의 계약자> 칭호를 획득 하셨습니다.");
	    	//cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    	cm.dispose();
            } else {
	    	cm.sendOk("#r엔젤릭버스터#k 직업은 여성 모험가 캐릭터만 전직이 가능합니다.");
	    	cm.dispose();
		}
        } else if (selection == 121) {
            cm.warp(101072000,0);cm.changeJob(6510);
	    cm.gainItem(1142496, 1);
            cm.removeEquip(1352601);
            cm.addEquip(-10, 1352602, 0, 150, 150, 0, 500, 0); //소울링
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<정의의 대리인> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 122) {
            cm.warp(101072000,0);cm.changeJob(6511);
	    cm.gainItem(1142497, 1);
            cm.removeEquip(1352602);
            cm.addEquip(-10, 1352603, 0, 200, 200, 0, 700, 0); //소울링
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<핑크 엔젤> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 123) {
            cm.warp(101072000,0);cm.changeJob(6512);
	    cm.gainItem(1142498, 1);
            cm.removeEquip(1352603);
            cm.addEquip(-10, 1352604, 0, 300, 300, 0, 900, 0); //소울링
  	cm.teachSkill(65121100,0,30); // 프라이멀 로어 -- 4차 스킬 시작
  	cm.teachSkill(65121101,0,30); // 트리니티
  	cm.teachSkill(65121002,0,30); // 피니투라 페투치아
  	cm.teachSkill(65121003,0,30); // 소울 레조넌스
  	cm.teachSkill(65121004,0,30); // 소울 게이즈
  	cm.teachSkill(65120005,0,30); // 소울슈터 엑스퍼트
  	cm.teachSkill(65120006,0,30); // 어피니티 Ⅳ
  	cm.teachSkill(65121009,0,30); // 노바의 용사
  	cm.teachSkill(60010217,1,1); // 트루 석세서
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<전장의 아이돌> 칭호를 획득 하셨습니다.");
	    //cm.playerMessage(6, "화음곡 : 당신에게 약간의 AP와 SP를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 501) {
            cm.warp(101072000,0);cm.changeJob(3120);
	    cm.playerMessage(5, "제논 전직을 완료하였습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 502) {
            cm.warp(101072000,0);cm.changeJob(3121);
	    cm.playerMessage(5, "제논 전직을 완료하였습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 503) {
            cm.warp(101072000,0);cm.changeJob(3122);
	    cm.playerMessage(5, "제논 전직을 완료하였습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 504) {
            cm.warp(101072000,0);cm.changeJob(3610);
	    cm.playerMessage(5, "제논 전직을 완료하였습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 505) {
            cm.warp(101072000,0);cm.changeJob(3611);
	    cm.playerMessage(5, "제논 전직을 완료하였습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();
        } else if (selection == 506) {
            cm.warp(101072000,0);cm.changeJob(3612);
	    cm.playerMessage(5, "제논 전직을 완료하였습니다.");
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.dispose();

       } else if (selection == 10000) {
            cm.warp(101072000,0);cm.changeJob(10110);
	    cm.playerMessage(5, "새로운 스킬을 습득했습니다.")
	    cm.getPlayer().send(MainPacketCreator.sendHint("3차 스킬 습득 레벨 : 130",150,20));
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 10001) {
            cm.warp(101072000,0);cm.changeJob(10111);
	    cm.playerMessage(5, "새로운 스킬을 습득했습니다.")
	    cm.getPlayer().send(MainPacketCreator.sendHint("4차 스킬 습득 레벨 : 150",150,20));
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 10002) {
            cm.warp(101072000,0);cm.changeJob(10112);
	    cm.playerMessage(5, "새로운 스킬을 습득했습니다.")
	    cm.getPlayer().send(MainPacketCreator.sendHint("잃어버린 모든 스킬을 습득했습니다.",210,20));
	    cm.getPlayer().gainAp(5);
	    cm.dispose();

       } else if (selection == 10003) {
            cm.warp(101072000,0);cm.changeJob(2510);
	    cm.playerMessage(5, "은월 전직을 완료하였습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 10004) {
            cm.warp(101072000,0);cm.changeJob(2511);
	    cm.playerMessage(5, "은월 전직을 완료하였습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 10005) {
            cm.warp(101072000,0);cm.changeJob(2512);
	    cm.playerMessage(5, "은월 전직을 완료하였습니다.")
	    cm.sendNext("당신에게 약간의 #rAP와 SP#k를 드렸습니다. 당신이 가는 길에 좋은 일만 있으시길 바랍니다~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
			}
		}	
		
	}
}