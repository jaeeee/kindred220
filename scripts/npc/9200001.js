importPackage(Packages.client);
importPackage(Packages.tools);

var status = -1;
var random1 = 1 + Math.floor(Math.random() * 100 - 1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
        else
        status--;

        if (status == 0) {
	    var chat = "������ �ϱ� ���ؼ� #r#r1��#k#k �ʿ��ϸ�, ���ڿ��� #b�� ���#k���� #r1��#k�� �Ұ� �ǰ� #b�̱� ���#k���� + #r2��#k�� ��� ����";
	    chat += "#d\r\n\r\n#L0#���� �ɰ� ������ �ϰڽ��ϴ�.#l";
	    chat += "#d\r\n#L1#������ ���� �ʰڽ��ϴ�.#l";
	    cm.sendSimple(chat);

             } else if (status == 1) {
                if (selection == 0) {
		  if (cm.getPlayer().getMeso() >= 100000000) {
		  if (random1 > 2) {
		  cm.sendOk("���� �̰��? �̵��� �� �Ŵ�.");
		  cm.gainMeso(-100000000);
		  cm.dispose();
             } else {
		  cm.sendOk("�װ� �̱�ٴ�. �������� �̷� ��찡 ���� �Ŵ�.");
		  cm.gainMeso(200000000);
		  cm.dispose();
		}
             } else {
		  cm.sendOk("���� ���� �� ��� ������ �ϰڴٰ� ��ŭ ������");
		  cm.dispose();
		}
             } else if (selection == 1) {
		  cm.sendOk("�̱� ��� �λ������� �ϰ� �Ǵµ� �� �ϰڴٴ� �� �� ������ �ʰھ�");
		  cm.dispose();
		}
	}
}
}
