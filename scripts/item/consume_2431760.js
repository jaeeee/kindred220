importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

// ����
var status = -1;
var own = 1291
var need = 2431760
var name = "�ö��� �ξ���"
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
	cm.teachSkill(80000000+own, 1, 0)
	cm.gainItem(need, -1);

	cm.getPlayer().send(UIPacket.showInfo("[��ų] "+name+" ���̵� ȹ��!!"));
			cm.updateChar();
			cm.dispose();
	}
}