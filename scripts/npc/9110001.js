/*

Copyright �� 2013 Spirit Corporaion. All Rights Reserved.

leader. Spirit�¶��� (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.��� (guri__s@nate.com)
Make.���� (iureal@nate.com)

�� ��ũ��Ʈ��  Spirit�¶��ο��� ���˴ϴ�.
���� ������ �Ǵ��� �� �ּ��� �������� ���������� ���ڽ��ϴ�.

*/
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.database);
importPackage(Packages.constants);

var status = 0;

function getChar(Jessica) {
	var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
	JessicaSql2.setString(1, Jessica);
	var JessicaExcute = JessicaSql2.executeQuery();
	JessicaExcute.next();
	var Jess = new StringBuilder();
	aid2 = Integer(JessicaExcute.getInt("accountid"));
	id = Integer(JessicaExcute.getInt("id"));
}

function nameChange(Jessica) {
	var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
	JessicaSql2.setString(1, Jessica);
	var JessicaExcute = JessicaSql2.executeQuery();
	JessicaExcute.next();
	MYSQL.getConnection().prepareStatement("update characters set name= '" + text2 + "' where name = '" + cm.getPlayer().getName() + "'").executeUpdate();
}

function getEquipChar(Jessica) {
    var JessicaS = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = -1");
    JessicaS.setInt(1, Jessica);
    var Jessica2 = JessicaS.executeQuery();
    var string = new StringBuilder();
    while(Jessica2.next()){
	invenid = Integer(Jessica2.getInt("inventoryitemid"));
	var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE inventoryitemid = ?");
	JessicaSql2.setInt(1, invenid);
	var eq2 = JessicaSql2.executeQuery();
	eq2.next();
	switch(eq2.getInt("potential1")) {
	case 10001:
		p = "#b#b[����]#k#k �� +";
		break;
	case 10002:
		p = "#b[����]#k ��ø�� +";
		break;
	case 10003:
		p = "#b[����]#k ���� +";
		break;
	case 10004:
		p = "#b[����]#k ��� +";
		break;
	case 10005:
		p = "#b[����]#k �ִ� Health Point +";
		break;
	case 10006:
		p = "#b[����]#k �ִ� Mana Point +";
		break;
	case 10007:
		p = "#b#b[����]#k#k ����ġ +";
		break;
	case 10008:
		p = "#b[����]#k ȸ��ġ +";
		break;
	default:
		p = "����ɷ��� �������� �ʽ��ϴ�.";
	}
	switch(eq2.getInt("potential2")) {
	case 30001:
		p2 = "#b[����]#k �� +";
		break;
	case 30002:
		p2 = "#b[����]#k ��ø�� +";
		break;
	case 30003:
		p2 = "#b[����]#k ���� +";
		break;
	case 30004:
		p2 = "#b[����]#k ��� +";
		break;
	case 30005:
		p2 = "#b[����]#k �ִ� Health Point +";
		break;
	case 30006:
		p2 = "#b[����]#k �ִ� Mana Point +";
		break;
	case 30007:
		p2 = "#b[����]#k ����ġ +";
		break;
	case 30008:
		p2 = "#Cyellow#[����ũ]#k ȸ��ġ +";
		break;
	default:
		p2 = "����ɷ��� �������� �ʽ��ϴ�.";
	}
	switch(eq2.getInt("potential3")) {
	case 30001:
		p2 = "#b[����]#k �� +";
		break;
	case 30002:
		p2 = "#b[����]#k ��ø�� +";
		break;
	case 30003:
		p2 = "#b[����]#k ���� +";
		break;
	case 30004:
		p2 = "#b[����]#k ��� +";
		break;
	case 30005:
		p2 = "#b[����]#k �ִ� Health Point +";
		break;
	case 30006:
		p2 = "#b[����]#k �ִ� Mana Point +";
		break;
	case 30007:
		p2 = "#b[����]#k ����ġ +";
		break;
	case 30008:
		p2 = "#Cyellow#[����ũ]#k ȸ��ġ +";
		break;
	default:
		p2 = "����ɷ��� �������� �ʽ��ϴ�.";
	}
        string.append("#i").append(Integer(Jessica2.getInt("itemid"))).append("#��#b[#t").append(Jessica2.getInt("itemid")).append("#]#k").append("\r\n")
	.append("\r\n#b[����]#k\r\nSTR : ").append(Integer(eq2.getInt("str")))
   	.append(" DEX : ").append(Integer(eq2.getInt("dex")))
	.append(" INT : ").append(Integer(eq2.getInt("int")))
	.append(" LUK : ").append(Integer(eq2.getInt("luk")))
	.append("\r\n\r\n#b[�ΰ� �ɼ�]#k\r\n����ɷ�1 : ").append(p).append("\r\n")
	.append("����ɷ�2 : ").append(p2).append("\r\n\r\n");
    }
	return string.toString();
}

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
		var Jessica = "#e#b�ȳ��ϼ���#r#e#k #b#h #���� #r"+cm.getRC()+"#b ���� ����Ʈ�� ������ �Դϴ� �г��� ������ �Ŀ� 13000 Point �Դϴ�. #k\r\n ";
	if (cm.getPlayer().getGender() == 0) {
		Jessica += "";
	} else if (cm.getPlayer().getGender() == 1) {
		Jessica += "";
	}
		Jessica += "\r\n#L2#[�г��� ����]";

		cm.sendSimple(Jessica);

	} else if (status == 1) {
	if (selection == 0) {
	if (cm.getMeso() >= 1000000) {
		var Jessica = "����! �Ƹ��̰� ������ ";
	if (cm.getPlayer().getGender() == 0) {
		Jessica += " ";
	} else if (cm.getPlayer().getGender() == 1) {
		Jessica += " ";
	}
		Jessica += "������ �׷��� ĳ���͵��� �����ϽðԿ�? �׷�, ������ ĳ���� �г����� �Է����ּ���!";
		cm.sendGetText(Jessica);
		status = 1;
	} else {
		cm.sendOk("ĳ���͸� �����Ͻ÷���~ 100�� �޼Ұ� �ʿ��ؿ�. �Ƹ��̵� �� ����� �� �� �ȴٱ���!");
		cm.dispose();
		}
	} else if (selection == 1) {
		cm.sendGetText("������ Ȯ���Ͻǲ�����? ����~ �׷� �Ƹ��̰� ���͵帱�Կ�!");
		status = 4;

	} else if (selection == 2) {
	if (cm.getRC() >= 13000) {
		cm.sendGetText("�г��� �������Ͻ÷��� �Ŀ� Point 13000 �Դϴ�.");
		cm.getPlayer().gainHPT(-13000);
		status = 3;
	} else {
		cm.sendOk("�г��� ������ �Ŀ�����Ʈ 13000 Point �Դϴ�");
		cm.dispose();
	}
	}
	

	} else if (status == 2) {
		var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
		JessicaSql2.setString(1, cm.getText());
		var JessicaExcute = JessicaSql2.executeQuery();
		var Jess = new StringBuilder();

		var Jessica = "\r\n\r\n���ס� �Ƹ��̴� ĳ���� �����ϴ°� ����~ �������� ";
		if (cm.getPlayer().getFame() == 1) {
		Jessica += "�ƺ��� ";
		} else if (cm.getPlayer().getFame() == 0) {
		Jessica += "������ ";
		}
		Jessica += "���ϸ� �����Կ䡦";

		var i = 0;
		text = cm.getText();

		getChar(cm.getPlayer().getName());

		while (JessicaExcute.next()) {
		i++;

		aid = Integer(JessicaExcute.getInt("accountid"));
		id = Integer(JessicaExcute.getInt("id"));

		Jess.append("#e" + text + "���� ������ ����\r\n#n(�ڼ��� ������ ĳ���� ������ Ȯ�����ּ���.)\r\n\r\n")
		.append("#n�г��� : ").append(JessicaExcute.getString("name"))
		.append("\r\n���� : ").append(Integer(JessicaExcute.getInt("level")))
		.append("\r\n�޼� : ").append(JessicaExcute.getString("meso"))
		.append(Jessica);
		}

		if (i == 0) {
			var Jessica = "����?! �������� �ʴ� ĳ���Ϳ��� ";
		if (cm.getPlayer().getFame() == 1) {
			Jessica += "�ƺ�! ";
		} else if (cm.getPlayer().getFame() == 0) {
			Jessica += "����! ";
		}
			Jessica += "����� Ȯ���Ͻ� �� �¾ƿ�? ���ס� �ƴϸ� �Ƹ��̰� �Ǽ��߳�?";
			cm.sendOk(Jessica);
			status = -1;

		} else if (i == 1){
			cm.sendYesNo(Jess.toString());
		}

	} else if (status == 3) {
		if (aid2 == aid) {
		MYSQL.getConnection().prepareStatement("DELETE FROM characters WHERE name = " + text + "").executeUpdate();
		if (cm.getPlayer().getFame() == 1) {
			var Jessica = "�ƺ��� ";
		} else if (cm.getPlayer().getFame() == 0) {
			var Jessica = "������ ";
		}
			Jessica += "�����ϽŴ�� #b' " +text + " '#k ĳ���͸� �����߾�䡦 ���ס�";
		cm.sendOk(Jessica);
		cm.gainMeso(-1000000);
		cm.dispose();
	} else {
		var Jessica = "���� ";
		if (cm.getPlayer().getFame() == 1) {
			Jessica += "�ƺ��� ";
		} else if (cm.getPlayer().getFame() == 0) {
			Jessica += "������ ";
		}
			Jessica += "ĳ���Ͱ� �¾ƿ�? �ƹ��� �Ƹ��̰� ����� �������� ġ�� �ȵ���! �Ǹ��̿���! ��!";
		cm.sendOk(Jessica);
		cm.dispose();
	}

	} else if (status == 4) {
		text2 = cm.getText();
		nameChange(" + cm.getPlayer().getName() + ");
		cm.gainMeso(-5000000);
		cm.sendOk("#b' " +cm.getPlayer().getName() + " '#k ���� �г����� #b' " + text2 + " '#k �� ���������� ����Ǿ����ϴ�. Ȯ���� ������ �α���â���� �� ���ư��ϴ�.");
		cm.dispose();
                cm.sendOk("�α���â���� ������");
                cm.sendOk("�α���â���� ������");
                cm.sendOk("�α���â���� ������");

	} else if (status == 5) {
		var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
		JessicaSql2.setString(1, cm.getText());
		var JessicaExcute = JessicaSql2.executeQuery();

		var i = 0;

		while(JessicaExcute.next()) {
		i++;
		aid3 = Integer(JessicaExcute.getInt("id"));
		}
		if (i == 0) {
		cm.sendOk("����?! �������� �ʴ� ĳ���Ϳ���. ����� Ȯ���Ͻ� �� �¾ƿ�? ���ס� �ƴϸ� �Ƹ��̰� �Ǽ��߳�?");
		cm.dispose();

		} else {
		cm.sendOk("#b' " +cm.getText() + " '#k ���� �����ϰ� ��� ������ ����\r\n\r\n" + getEquipChar(aid3));
		cm.dispose();
		}
}
}
}