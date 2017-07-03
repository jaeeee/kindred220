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
         chat += "#L10##i2431965##z2431965#에 해당 하는 스킨을 배우겟습니다 \r\n";
         chat += "#L20##i2431966##z2431966#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L30##i2431967##z2431967#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L40##i2432084##z2432084#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L50##i2432153##z2432153#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L60##i2432154##z2432154#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L70##i2432207##z2432207#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L80##i2432354##z2432354#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L90##i2432355##z2432355#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L100##i2432465##z2432465#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L110##i2432479##z2432479#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L120##i2432526##z2432526#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L130##i2432532##z2432532#에 해당 하는 스킨을 배우겟습니다\r\n";
         chat += "#L140##i2432592##z2432592#에 해당 하는 스킨을 배우겟습니다";
      
        cm.sendSimple(chat);

	} else if (status == 10) {
	  if (cm.haveItem(2431965, 1)) {
	  cm.sendOk("#i2431965##z2431965# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("0");
	  cm.gainItem(2431965, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431965##z2431965# 부족 합니다");	
    }
	} else if (status == 20) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 30) {
	  if (cm.haveItem(2431967, 1)) {
	  cm.sendOk("#i2431967##z2431967# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("2");
	  cm.gainItem(2431967, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431967##z2431967# 부족 합니다");	
    }
	} else if (status == 40) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 50) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 60) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 70) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 80) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 90) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 100) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 110) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 120) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 130) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
	} else if (status == 140) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# 스킨에 대해 배웟습니다");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# 부족 합니다");	
    }
}
}