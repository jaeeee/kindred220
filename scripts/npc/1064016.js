importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);



var boss = 8930000; //���� �ڵ�
var item = 4310027; //�ʿ��� ������ �ڵ�
var count = 40; //�ʿ��� ������ ����
var map = 105200819;//���ڵ�
var bn = "����"; //�����̸�
var back = 10000000; //���ư� �� �ڵ�
var x = 7; //��ȯx��ǥ 
var y = -160; //��ȯy��ǥ

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#i"+item+"# #r"+count+"��#k�� "+bn+"�� ��ȯ�ϰڽ��ϱ�? \r\n\r\n#L1##r#i"+item+"# #r"+count+"��#k�� "+bn+" ��ȯ\r\n\r\n#L2##r#i"+item+"# #r"+count+"��#k�� ī�������� ��ȯ#l#k\r\n\r\n#l#L4##b<ų�ýý���>#l#k\r\n#L3##r��׽ý��̵��ϱ�\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//��ȯ
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"�� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�.");
			cm.dispose();
		} else {

cm.gainItem(4310027,-40);
			
 			cm.spawnMob(8930000,-1479,443);
 			
			cm.dispose();
		}

		} else if(selection == 2) {

cm.gainItem(4310027,-40);
			
cm.spawnMob(8930000,-1479,443);


			cm.dispose();
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0){
    	    		cm.killAllMob();
			
			cm.dispose();
			}else {
			cm.sendOk("���� �Ѹ����� ��ȯ�Ǿ� ���� �ʽ��ϴ�.");
			}
		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


