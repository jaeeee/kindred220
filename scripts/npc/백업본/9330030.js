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
     var chat = "�ȳ��ϼ��� ������ ��Ų�� �����ϴ� ���ǽ� �Դϴ� ��� ������ ��Ų�� ���������ðٽ��ϱ�??\r\n";
         chat += "#L10##i2431965##z2431965#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ� \r\n";
         chat += "#L20##i2431966##z2431966#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L30##i2431967##z2431967#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L40##i2432084##z2432084#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L50##i2432153##z2432153#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L60##i2432154##z2432154#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L70##i2432207##z2432207#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L80##i2432354##z2432354#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L90##i2432355##z2432355#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L100##i2432465##z2432465#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L110##i2432479##z2432479#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L120##i2432526##z2432526#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L130##i2432532##z2432532#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�\r\n";
         chat += "#L140##i2432592##z2432592#�� �ش� �ϴ� ��Ų�� ���ٽ��ϴ�";
      
        cm.sendSimple(chat);

	} else if (status == 10) {
	  if (cm.haveItem(2431965, 1)) {
	  cm.sendOk("#i2431965##z2431965# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("0");
	  cm.gainItem(2431965, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431965##z2431965# ���� �մϴ�");	
    }
	} else if (status == 20) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 30) {
	  if (cm.haveItem(2431967, 1)) {
	  cm.sendOk("#i2431967##z2431967# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("2");
	  cm.gainItem(2431967, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431967##z2431967# ���� �մϴ�");	
    }
	} else if (status == 40) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 50) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 60) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 70) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 80) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 90) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 100) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 110) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 120) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 130) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
	} else if (status == 140) {
	  if (cm.haveItem(2431966, 1)) {
	  cm.sendOk("#i2431966##z2431966# ��Ų�� ���� ��m���ϴ�");
	  cm.setDamageSkin("1");
	  cm.gainItem(2431966, -1);
	  cm.dispose();
	} else {
	  cm.sendOk("#i2431966##z2431966# ���� �մϴ�");	
    }
}
}