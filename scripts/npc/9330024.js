importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 9300519; //���� �ڵ�
var item = 4310059; //�ʿ��� ������ �ڵ�
var count = 1; //�ʿ��� ������ ����
var map = 931050433; //���ڵ�
var bn = "������ ����ī"; //�����̸�
var back = 100000000; //���ư� �� �ڵ�
var x = -457; //��ȯx��ǥ
var y = 181; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#i"+item+"# #r"+count+"��#k�� "+bn+"�� ��ȯ�ϰڽ��ϱ�? \r\n\r\n#L1##r#i"+item+"# #r"+count+"��#k�� "+bn+" ��ȯ\r\n#l#L2#������ ����#l#k\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
 if (cm.getMonsterCount(931050433) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�.");
			cm.dispose();
		} else {     
			cm.gainItem(item,-count);
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


