/* �� �ּ��� ������ �������� �մϴ�.

��ó : ������ (timeisruunin) by Miracle CMNT

*/

importPackage(Packages.client.items);

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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendGetText("#b#i5064300# #z5064300##k�� ������ �Է����ּ���.\r\n#Cgray#(1���� 3,000,000 �޼�)");
	} else if (status == 1) {
	var text = cm.getText();
	cm.sendYesNo("���� #b"+text+"#k���� �����Ͻðڽ��ϱ�? ������ #b#e"+text*3000000+" #n#k�޼��Դϴ�.");
	
} else if (status == 2) {
	var leftslot = cm.getPlayer().getInventory(DbgInventoryType.CASH).getNumFreeSlot();
	var text = cm.getText();
	if (leftslot < text*1/100) {
	cm.sendOk("ĳ��ĭ�� ������ �����մϴ�. ĳ��ĭ�� ������ ���ðų� ���� ����ִ� ������ ������ŭ �Է����ֽñ� �ٶ��ϴ�.\r\n#Cgray#(ĳ��â �� ĭ���� #z5064300# 100���� �� �� ������ ĳ��â�� �� 60���� ������ �����մϴ�.)");
	cm.dispose();


} else if (cm.getMeso() < text*3000000) {

	var meso1 = cm.getMeso();
	var meso2 = text*3000000;
	var money = meso2-meso1;
	cm.sendOk("�޼Ұ� �����մϴ�. �ڼ��� ������ �Ʒ��� Ȯ�����ּ���.#e\r\n\r\n#Cgray#�������� ���� : #r"+meso2+"#k �޼�#b (���� : "+text+"��)#k\r\n#Cgray#�������� �޼� : #r"+meso1+"#k �޼�\r\n#Cgray#������ �޼� : #r"+money+"#k �޼�");		
cm.dispose();

	
} else {
	var meso1 = cm.getMeso();
	var meso2 = text*3000000;
	var money2 = meso1-meso2;
cm.gainItem(5064300, text);
	cm.gainMeso(-meso2);
	cm.sendOk("���Կ� �����Ͽ����ϴ�. ������ �� �̿����ּ���.\r\n\r\n#r#e[���� ǰ��] #b#z5064300##k ��"+text+"#n\r\n#r#e[���� ����] #b"+meso2+"#k �޼�\r\n#r[���� �޼�]#k #b"+money2+"#k �޼�");
	cm.dispose();
}
}
}