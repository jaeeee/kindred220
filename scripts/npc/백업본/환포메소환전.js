/*

ȫ�� ����Ʈ �޼�ȯ�� ��ũ��Ʈ
���� : class_adm@nate.com

*/

importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {

	cm.sendYesNo("�ȳ��ϼ��� #h0#��.#b�޼� ȯ��#k�� �Ͻðڽ��ϱ�?\r\n#b 1 ȯ������Ʈ#k�� #r100000#k �޼Ҹ� ������ �� �ֽ��ϴ�.\r\n���� #h0#���� ȯ������Ʈ�� #r#e"+cm.getPlayer().getFame()+" #n#k�Դϴ�.\r\n���� ȯ���� ���ϽŴٸ� #b[��]#k��ư�� �����ֽð� \r\n�ƴ϶�� #r[�ƴϿ�]#k��ư�� �����ּ���.");
	}else if (status == 1){
	cm.sendGetText("ȯ�� �� ȯ������Ʈ�� �����ּ���. \r\n�ݵ�� #r����#k�� �Է����ֽñ� �ٶ��ϴ�.");
	}else if (status == 2){
	var text = cm.getText();
	if (cm.getPlayer().getFame() >= text){
        cm.sendOk("ȯ���� �Ϸ�Ǿ����ϴ�.");
	cm.gainMeso(text*100000);
	cm.getPlayer().addFame(-text);
        cm.dispose();
	}else {
	cm.sendOk("ȯ������Ʈ�� �����ϰų�, �޼Ұ� �ʹ� �����ϴ�.");
	cm.dispose();
	}
}
}
