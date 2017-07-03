importPackage(Packages.database);
importPackage(java.lang);
/* (��) ��õ�ο��� ������ ������ */
var item = 500;

/* ��õ�� ���� �� ������ ������ */
var item2 = new Array;
var status = -1;

/* ��õ�� ��� üũ */
function overlab_recom(name, name2) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM recom_log WHERE name LIKE '"+name+"%'").executeQuery();

	overlab = true;
	if (!con.next()) overlab = false;

	con.close();
	return overlab;
}

/* ��õ�� ��� */
function join_recom(name, name2, recom) {
	var insert = MYSQL.getConnection().prepareStatement("INSERT INTO recom_log(name, recom, state, date) VALUES(?,?,?,now())");
	insert.setString(1, name+"%"+name2);
	insert.setString(2, recom);
	insert.setString(3, 0);
	insert.executeUpdate();
	insert.close();
}

/* ��õ�� ��ŷ */
function recom_log() {
	var txt = new StringBuilder();

	var con = MYSQL.getConnection().prepareStatement("SELECT id, recom, count(*) AS player FROM recom_log GROUP BY recom ORDER BY player DESC").executeQuery();
	var rank = 0;
	while(con.next()) {
		txt.append("#L"+con.getInt("id")+"#")
		.append(rank == 0 ? "#r#fUI/UIWindow2.img/ProductionSkill/productPage/meister# "
		: rank == 1 ? "#b#fUI/UIWindow2.img/ProductionSkill/productPage/craftman# "
		: "#k#fUI/UIWindow2.img/ProductionSkill/productPage/hidden# ")

		.append("��õ�� �ڵ� #k: ").append(con.getString("recom")).append(" | ")
		.append("��õ �� #k: #e").append(con.getString("player")).append("#n\r\n");
		rank++;
	}
	con.close();
	return txt.toString();
}

/* ��õ�� ����Ʈ */
function recom_list(id) {
	var txt = new StringBuilder();

	var idcon = MYSQL.getConnection().prepareStatement("SELECT * FROM recom_log WHERE id = '"+id+"'").executeQuery();
	idcon.next(), recom_per = idcon.getString("recom");

	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM recom_log WHERE recom = '"+recom_per+"'").executeQuery();
	txt.append(recom_per+"���� ��õ�Ͻ� �÷��̾�� �Դϴ�.\r\n\r\n");
	while(con.next()) {
		var con_name = con.getString("name").split("%");
		txt.append("�г��� : #e").append(con_name[1]).append("#n | ")
		.append("��¥ : ").append(con.getDate("date")+" "+con.getTime("date")).append("\r\n");
	}
	con.close();
	return txt.toString();
}

/* ��õ�� �� �ҷ����� */
function recom_num(name) {
	var con = MYSQL.getConnection().prepareStatement("SELECT COUNT(*) AS player FROM recom_log WHERE recom = '"+name+"' and state = 0").executeQuery();
	con.next();
	recoms_num = con.getString("player");
	con.close();
}

/* ��õ�� �г��� �ҷ����� */
function recom_person(name) {
	var txt = new StringBuilder();
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM recom_log WHERE recom = '"+name+"' and state = 0").executeQuery();

	while(con.next()) {
		var con_name = con.getString("name").split("%");
		txt.append("#b["+con_name[1]+"] ");
	}
	con.close();
	return txt.toString();
}

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {

/* ��ũ��Ʈ ���� ���� */
if (mode == 1) { status++;
} else { cm.dispose(); return; }

/* ��ũ��Ʈ ���� �κ� */
if (status == 0) {
	cm.sendSimple("#b"+cm.getPlayer().getName()+"#k���� � �п��� �Ұ��� �ް� ���̳���? �׺п��� �����ϱ� ���� �̹����� #b"+cm.getPlayer().getName()+"#k�Բ��� �Ұ��� �غ��ô� �� �����? ����, "+cm.getPlayer().getName()+"���� �Ұ��� �ް� ���� ���� �ִٸ�, ���� �������� �帮���� �ҰԿ�!\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##b��õ��#k ����ϱ�\r\n#L1##b��õ��#k ��ŷ����#l\r\n\r\n\r\n");

} else if (status == 1) {
if (selection == 0) {
	if (!overlab_recom(cm.getClient().getAccID(), cm.getPlayer().getName())) {
		cm.sendGetText("#b"+cm.getPlayer().getName()+"#k���� � ���� �Ұ��� ���̳���? �׻� �׺п��� �����ϰ� ��������? �̰��� �׺��� #b�̸�#k�� ���Ŵٸ�, ���� ���� ���� �帱�Կ�. ������, #r�ѹ� �Է� �Ͻø� �ǵ��� �� ������#k �����ϰ� �Է� ���ּ���.");

	} else {
		cm.sendOk("#b"+cm.getPlayer().getName()+"#k���� �׻� �����ϴ� ������ ������ ��� �͡� �� �˰� ������, ���̻��� ���� �帱 ���� ����䡦.");
		cm.dispose();
	}

} else if (selection == 1) {
	cm.sendSimple("�̰��� ���� �е鿡�� ������ �ް� ��� �е��� ����̿���. #b"+cm.getPlayer().getName()+"#k�Բ����� �ѹ����� �̰��� ��� �Ǿ�� ���� ��������?\r\n"+recom_log());
	status = 2;

} else if (selection == 2) {
	recom_num(cm.getPlayer().getName());
	if (recoms_num == 0) cm.sendOk("���ƽ�����, �̹����� #b"+cm.getPlayer().getName()+"#k���� �����Ͻ� ���� ����� �ʳ׿�. �������� �� ����� ���̴�, ũ�� �Ǹ����� ���������� ���ھ��. ��� ������ �̶�°ԡ�. �� �� �ƴϰŵ��."), cm.dispose();
	else {
		cm.sendOk("���ó��� ���� ����Ͻó׿�. #b"+cm.getPlayer().getName()+"#k���� �� ã�� ���Ƕ����� �� ���� ������ �ް� ��� �� ���ƿ�. �̹����� "+recoms_num+"�� "+recom_person(cm.getPlayer().getName())+"#k�� ������ �����̾��.");
		cm.gainRC(item*Integer(recoms_num));
		MYSQL.getConnection().prepareStatement("UPDATE recom_log SET state = 1 WHERE recom = '"+cm.getPlayer().getName()+"'").executeUpdate();
		cm.dispose();
	}
}

} else if (status == 2) {
	if (cm.getText().equals(cm.getPlayer().getName()) || cm.getText().equals("")) cm.dispose();
	else {
		join_recom(cm.getClient().getAccID(), cm.getPlayer().getName(), cm.getText());
		cm.gainItem(item2[0], item2[1]);
		cm.sendOk("�̰� #b"+cm.getPlayer().getName()+"#k�Կ��� �帮�� ���� ���� �����Դϴ�. �������� ���࿡ ū ������ �� �ſ���.");
		cm.dispose();
	}

} else if (status == 3) {
	cm.sendOk(recom_list(selection));
	cm.dispose();
}
}