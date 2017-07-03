var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
     var chat = "안녕하세요 데미지 스킨을 전수하는 엔피시 입니다 어떠한 데미지 스킨을 전수받으시겟습니까??\r\n";
         chat += "#L1##i2431965##z2431965#에 해당 하는 스킨을 배우겟습니다 \r\n";
         chat += "#L2##i2431966##z2431966#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L3##i2431967##z2431967#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L4##i2432084##z2432084#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L5##i2432153##z2432153#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L6##i2432154##z2432154#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L7##i2432207##z2432207#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L8##i2432354##z2432354#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L9##i2432355##z2432355#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L10##i2432465##z2432465#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L11##i2432479##z2432479#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L12##i2432526##z2432526#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L13##i2432532##z2432532#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L14##i2432592##z2432592#에 해당 하는 스킨을 배우겟습니다";
      
        cm.sendSimple(chat);

	} else  if (selection == 1) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2431965##z2431965# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("0");
	  cm.gainItem(4310058 , -1);
	  cm.dispose();
          return;
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 2) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	  return;
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	    
}
	} else if (selection == 3) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2431967##z2431967# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("2");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 4) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432084##z2432084# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("3");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 5) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432153##z2432153# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("4");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 6) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432154##z2432154# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("5");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 7) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432207##z2432207# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("6");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 8) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("2432354##z2432354 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("7");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 9) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432355##z2432355# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("8");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 10) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432465##z2432465# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("9");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 11) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432479##z2432479# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("10");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 12) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432526##z2432526#　 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("11");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 13) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432532##z2432532#　 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("12");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
	} else if (selection == 14) {
	  if (cm.haveItem(4310058, 1)) {
	  cm.sendOk("#i2432592##z2432592# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("13");
	  cm.gainItem(4310058, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i4310058##z4310058# 부족 합니다");	
    }
}
}
