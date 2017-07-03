var cash = 0;
var status = -1;

function start() { 
    status = -1;
    action (1, 0, 0);   
 		if (cm.haveItem(4033324,1) || cm.haveItem(4220046,1) || cm.haveItem(4220178,1) || cm.haveItem(4220179,1) || cm.haveItem(4220175,1) || cm.haveItem(4220045,1)) {
	var sbal = "당신은 현재 퀘스트를 진행중입니다. 퀘스트를 완료하셧다면 퀘스트 진행 상황을 봐주십시오.\r\n\r\n";
        sbal += "#d#L20#퀘스트 진행 상황 보기\r\n#k";
	cm.sendSimple(sbal);
	} else {
	var jessica = "#b#e[준비중]장신구제작 퀘스트 목록#n#k\r\n\r\n 수행할 퀘스트를 선택해주세요\r\n\r\n";
        //jessica += "#d#L1#보석의 아름다움\r\n";
        //jessica += "#L4#세이크리드 팬던트\r\n";
        //jessica += "#L7#마법을 사용하다\r\n";
        //jessica += "#L10#절대적인 힘을 만들다\r\n";
        //jessica += "#L13#나쁘지않은 전설\r\n";
        //jessica += "#L16#One of the Best Accessory\r\n#k";
        jessica += "장신구는 준비중입니다 연금술로 가십시오";
	cm.sendSimple(jessica);
	}
}
function action(mode, type, selection) {
if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (selection == 1) {
            cm.sendNext("#e#b 첫번째 장신구제작 퀘스트 <Jewel> :#k#n \r\n\r\n 안녕 나는 너의 장신구제작 퀘스트 담당자인 엔피시야, 지금부터 장신구제작 퀘스트의 수행 방법을 설명해 주도록 할게.\r\n일단 #r내가 주는 레시피#k를 써서  그 #b해당하는 아이템#k을 만들어 온 다음에 나한테 가져다 주면 되는거야! ");
    } else if (status == 2) {
            cm.sendYesNo("SYSTEM : 장신구제작 퀘스트를 수행 하시겟습니까?");
    } else if (status == 3) {
         if (cm.canHold(4033324) && cm.canHold(2511025)) {
            cm.sendOk("너한테 레시피를 줫으니 그 아이템을 만들어서 나한테 가져오면 좋은걸 줄게");
        cm.dispose();
 } else {
	cm.sendOk("기타창이나 소비창을 한칸이라도 비워오도록해");
	cm.dispose();
}
		    }
     if (selection == 4) {
      cm.sendNext("#e#b 두번째 장신구제작 퀘스트 <Sacred> :#k#n \r\n\r\n 안녕 나는 너의 장신구제작 퀘스트 담당자인 엔피시야, 지금부터 장신구제작 퀘스트 2번의 수행 방법을 설명해 주도록 할게.\r\n일단 #r내가 주는 레시피#k를 써서  그 #b해당하는 아이템#k을 만들어 온 다음에 나한테 가져다 주면 되는거야! ");
    } else if (status == 5) {
            cm.sendYesNo("SYSTEM : 장신구제작 퀘스트를 수행 하시겟습니까?");
    } else if (status == 6) {
         if (cm.canHold(4220046) && cm.canHold(2511025)) {
            cm.sendOk("너한테 레시피를 줫으니 그 아이템을 만들어서 나한테 가져오면 좋은걸 줄게");
        cm.dispose();
 } else {
	cm.sendOk("기타창이나 소비창을 한칸이라도 비워오도록해");
	cm.dispose();
		    }
}
if (selection == 7) {
      cm.sendNext("#e#b세번째 장신구제작 퀘스트 <Magic> :#k#n \r\n\r\n 안녕 나는 너의 장신구제작 퀘스트 담당자인 엔피시야, 지금부터 장신구제작 퀘스트 3번의 수행 방법을 설명해 주도록 할게.\r\n일단 #r내가 주는 레시피#k를 써서  그 #b해당하는 아이템#k을 만들어 온 다음에 나한테 가져다 주면 되는거야! ");
    } else if (status == 8) {
            cm.sendYesNo("SYSTEM : 장신구제작 퀘스트를 수행 하시겟습니까?");
    } else if (status == 9) {
         if (cm.canHold(4220178) && cm.canHold(2511025)) {
            cm.sendOk("너한테 레시피를 줫으니 그 아이템을 만들어서 나한테 가져오면 좋은걸 줄게");
        cm.dispose();
 } else {
	cm.sendOk("기타창이나 소비창을 한칸이라도 비워오도록해");
	cm.dispose();
		    }
}
if (selection == 10) {
      cm.sendNext("#e#b네번째 장신구제작 퀘스트 <Force> :#k#n \r\n\r\n 안녕 나는 너의 장신구제작 퀘스트 담당자인 엔피시야, 지금부터 장신구제작 퀘스트 4번의 수행 방법을 설명해 주도록 할게.\r\n일단 #r내가 주는 레시피#k를 써서  그 #b해당하는 아이템#k을 만들어 온 다음에 나한테 가져다 주면 되는거야! ");
    } else if (status == 11) {
            cm.sendYesNo("SYSTEM : 장신구제작 퀘스트를 수행 하시겟습니까?");
    } else if (status == 12) {
         if (cm.canHold(4220179) && cm.canHold(2511025)) {
            cm.sendOk("너한테 레시피를 줫으니 그 아이템을 만들어서 나한테 가져오면 좋은걸 줄게");
        cm.dispose();
 } else {
	cm.sendOk("기타창이나 소비창을 한칸이라도 비워오도록해");
	cm.dispose();
		    }
}
if (selection == 13) {
      cm.sendNext("#e#b다섯번째 장신구제작 퀘스트 <Legend> :#k#n \r\n\r\n 안녕 나는 너의 장신구제작 퀘스트 담당자인 엔피시야, 지금부터 장신구제작 퀘스트 5번의 수행 방법을 설명해 주도록 할게.\r\n일단 #r내가 주는 레시피#k를 써서  그 #b해당하는 아이템#k을 만들어 온 다음에 나한테 가져다 주면 되는거야! ");
    } else if (status == 14) {
            cm.sendYesNo("SYSTEM : 장신구제작 퀘스트를 수행 하시겟습니까?");
    } else if (status == 15) {
         if (cm.canHold(4220175) && cm.canHold(2511025)) {
            cm.sendOk("너한테 레시피를 줫으니 그 아이템을 만들어서 나한테 가져오면 좋은걸 줄게");
        cm.dispose();
 } else {
	cm.sendOk("기타창이나 소비창을 한칸이라도 비워오도록해");
	cm.dispose();
		    }
}
if (selection == 16) {
      cm.sendNext("#e#b여섯번째 장신구제작 퀘스트 <Creator> :#k#n \r\n\r\n 안녕 나는 너의 장신구제작 퀘스트 담당자인 엔피시야, 지금부터 장신구제작 퀘스트 6번의 수행 방법을 설명해 주도록 할게.\r\n일단 #r내가 주는 레시피#k를 써서  그 #b해당하는 아이템#k을 만들어 온 다음에 나한테 가져다 주면 되는거야! ");
    } else if (status == 17) {
            cm.sendYesNo("SYSTEM : 장신구제작 퀘스트를 수행 하시겟습니까?");
    } else if (status == 18) {
         if (cm.canHold(4220045) && cm.canHold(2511025)) {
            cm.sendOk("너한테 레시피를 줫으니 그 아이템을 만들어서 나한테 가져오면 좋은걸 줄게");
        cm.dispose();
 } else {
	cm.sendOk("기타창이나 소비창을 한칸이라도 비워오도록해");
	cm.dispose();
		    }
}
if (selection == 20) {
cm.dispose();
cm.openNpc(2159361);
}
}