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

	cm.sendGetText("������ ���ϴ� ������ �ڵ带 �Է����ּ���.");
	}else if(status == 1){
	text = cm.getText();
	want = text;
	if (GameConstants.isEquip(want) == true){
	cm.sendGetText("#r�Էµ� ������#k\r\n#i"+want+"#\r\n�ý��� ����.");
	}else{
	cm.sendOk("������ �������� �ʴ� �������� �Է��߽��ϴ�.");
	}
	}else if(status == 2){
	text = cm.getText();
	allstat = text;
	cm.sendGetText("#r�Էµ� ������#k\r\n#i"+want+"#\r\n���ݷ� ����.");
	}else if(status == 3){
	text = cm.getText();
	damage = text;
	cm.sendGetText("#r�Էµ� ������#k\r\n#i"+want+"#\r\n���׷��̵� ���� Ƚ�� ���� #r(�ִ� 125)#k");
	}else if(status == 4){	
	text = cm.getText();
	upgrade = text;
	if (upgrade > 125){
	upgrade = 125;
	}
	i > 5;
	if (cm.getPlayer().hasGmLevel(i)){
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i"+want+"#\r\n�ý��� : #r"+allstat+"#k\r\n���ݷ� : #r"+damage+"#k\r\n���׷��̵� ���� Ƚ�� : #r"+upgrade+"")
	cm.gainSponserItem(want,'[�Ŀ�������]',allstat,damage,upgrade);
	cm.dispose();

	}else {
	cm.sendOk("����� GM�� �ƴմϴ�.");
	cm.dispose();
	}
	}
}

