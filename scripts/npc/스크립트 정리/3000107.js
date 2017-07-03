importPackage(Packages.constants);

var status = -1;
var want;
var allstat;
var damage;
var upgrade;
var i = 0;


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

	cm.sendGetText("생성을 원하는 아이템 코드를 입력해주세요.");
	}else if(status == 1){
	text = cm.getText();
	want = text;
	if (GameConstants.isEquip(want) == true){
	cm.sendGetText("#r입력된 아이템#k\r\n#i"+want+"#\r\n올스텟 설정.");
	}else{
	cm.sendOk("위젯에 존재하지 않는 아이템을 입력했습니다.");
	}
	}else if(status == 2){
	text = cm.getText();
	allstat = text;
	cm.sendGetText("#r입력된 아이템#k\r\n#i"+want+"#\r\n공격력 설정.");
	}else if(status == 3){
	text = cm.getText();
	damage = text;
	cm.sendGetText("#r입력된 아이템#k\r\n#i"+want+"#\r\n업그레이드 가능 횟수 설정 #r(최대 125)#k");
	}else if(status == 4){	
	text = cm.getText();
	upgrade = text;
	if (upgrade > 125){
	upgrade = 125;
	}
	i > 5;
	if (cm.getPlayer().hasGmLevel(i)){
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i"+want+"#\r\n올스텟 : #r"+allstat+"#k\r\n공격력 : #r"+damage+"#k\r\n업그레이드 가능 횟수 : #r"+upgrade+"")
	cm.gainSponserItem(want,'[후원아이템]',allstat,damage,upgrade);
	cm.dispose();

	}else {
	cm.sendOk("당신은 GM이 아닙니다.");
	cm.dispose();
	}
	}
}

